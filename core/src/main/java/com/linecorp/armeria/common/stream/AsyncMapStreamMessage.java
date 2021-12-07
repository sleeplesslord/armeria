/*
 * Copyright 2021 LINE Corporation
 *
 * LINE Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

package com.linecorp.armeria.common.stream;

import static java.util.Objects.requireNonNull;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.atomic.AtomicLong;
import java.util.function.Function;

import org.reactivestreams.Subscriber;
import org.reactivestreams.Subscription;

import com.linecorp.armeria.common.annotation.Nullable;
import com.linecorp.armeria.internal.common.stream.StreamMessageUtil;

import io.netty.util.concurrent.EventExecutor;

final class AsyncMapStreamMessage<T, U> implements StreamMessage<U> {
    private final StreamMessage<T> source;
    private final Function<T, CompletableFuture<U>> function;

    @SuppressWarnings("unchecked")
    AsyncMapStreamMessage(StreamMessage<? extends T> source,
                          Function<? super T, ? extends CompletableFuture<? extends U>> function) {
        requireNonNull(source, "source");
        requireNonNull(function, "function");

        this.source = (StreamMessage<T>) source;
        this.function = (Function<T, CompletableFuture<U>>) function;
    }

    @Override
    public boolean isOpen() {
        return source.isOpen();
    }

    @Override
    public boolean isEmpty() {
        return source.isEmpty();
    }

    @Override
    public long demand() {
        return source.demand();
    }

    @Override
    public CompletableFuture<Void> whenComplete() {
        return source.whenComplete();
    }

    @Override
    public void subscribe(Subscriber<? super U> subscriber, EventExecutor executor,
                          SubscriptionOption... options) {
        requireNonNull(subscriber, "subscriber");
        requireNonNull(executor, "executor");
        requireNonNull(options, "options");

        source.subscribe(new AsyncMapSubscriber<>(subscriber, function, executor), executor, options);
    }

    @Override
    public void abort() {
        source.abort();
    }

    @Override
    public void abort(Throwable cause) {
        requireNonNull(cause, "cause");
        source.abort(cause);
    }

    private static final class AsyncMapSubscriber<T, U> implements Subscriber<T>, Subscription {
        private final Subscriber<? super U> downstream;
        private final Function<T, CompletableFuture<U>> function;
        private final EventExecutor executor;

        @Nullable
        private volatile Subscription upstream;
        private volatile boolean canceled;
        private volatile AtomicLong requestedByDownstream;

        private int pendingRequests;
        private boolean isCompleting;

        AsyncMapSubscriber(Subscriber<? super U> downstream,
                           Function<T, CompletableFuture<U>> function,
                           EventExecutor executor) {
            requireNonNull(downstream, "downstream");
            requireNonNull(function, "function");
            requireNonNull(executor, "executor");

            this.downstream = downstream;
            this.function = function;
            this.executor = executor;
            requestedByDownstream = new AtomicLong(0);
        }

        @Override
        public void onSubscribe(Subscription subscription) {
            requireNonNull(subscription, "subscription");
            upstream = subscription;
            downstream.onSubscribe(this);
        }

        @Override
        public void onNext(T item) {
            requireNonNull(item, "item");

            if (canceled) {
                StreamMessageUtil.closeOrAbort(item);
                return;
            }

            try {
                final CompletableFuture<U> future = function.apply(item);
                requireNonNull(future, "function.apply() returned null");

                pendingRequests++;
                future.handle((res, cause) -> {
                    if (executor.inEventLoop()) {
                        publishDownstream(res, cause);
                    } else {
                        executor.execute(() -> publishDownstream(res, cause));
                    }
                    return null;
                });
            } catch (Throwable ex) {
                StreamMessageUtil.closeOrAbort(item, ex);
                upstream.cancel();
                onError(ex);
            }
        }

        private void publishDownstream(@Nullable U item, @Nullable Throwable cause) {
            if (canceled) {
                if (item != null) {
                    StreamMessageUtil.closeOrAbort(item);
                }

                return;
            }

            try {
                if (cause != null) {
                    upstream.cancel();
                    onError(cause);
                } else {
                    requireNonNull(item, "function.apply()'s future completed with null");
                    downstream.onNext(item);

                    if (--pendingRequests == 0 && isCompleting) {
                        downstream.onComplete();
                    } else if (requestedByDownstream.get() > 0) {
                        if (requestedByDownstream.get() != Long.MAX_VALUE) {
                            requestedByDownstream.decrementAndGet();
                        }
                        upstream.request(1);
                    }
                }
            } catch (Throwable ex) {
                StreamMessageUtil.closeOrAbort(item, ex);
                upstream.cancel();
                onError(ex);
            }
        }

        @Override
        public void onError(Throwable cause) {
            requireNonNull(cause, "cause");
            if (canceled) {
                return;
            }
            canceled = true;

            downstream.onError(cause);
        }

        @Override
        public void onComplete() {
            if (canceled) {
                return;
            }

            if (pendingRequests > 0) {
                isCompleting = true;
            } else {
                downstream.onComplete();
            }
        }

        @Override
        public void request(long n) {
            if (n <= 0) {
                onError(new IllegalArgumentException(
                        "n: " + n + " (expected: > 0, see Reactive Streams specification rule 3.9)"));
            }

            if (canceled) {
                return;
            }

            final boolean shouldRequest = requestedByDownstream.get() == 0;

            if (requestedByDownstream.get() + n < 0) {
                requestedByDownstream.set(Long.MAX_VALUE);
            } else {
                requestedByDownstream.addAndGet(n);
            }

            if (shouldRequest) {
                upstream.request(1);
            }
        }

        @Override
        public void cancel() {
            if (canceled) {
                return;
            }

            canceled = true;
            upstream.cancel();
        }
    }
}
