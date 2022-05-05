/*
 * Copyright 2022 LINE Corporation
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

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.function.Function;

import org.junit.jupiter.api.Test;

import reactor.test.StepVerifier;

class FlatMapStreamMessageTest {
    @Test
    void flatMap() {
        final StreamMessage<Integer> streamMessage = StreamMessage.of(1, 2);
        final Function<Integer, StreamMessage<Integer>> function = i -> StreamMessage.of(i, i + 1);

        final Set<Integer> pendingItems = new HashSet<>(Arrays.asList(1, 2, 2, 3));
        final StreamMessage<Integer> mappedStream = streamMessage.flatMap(function);

        StepVerifier.create(mappedStream)
                    .recordWith(HashSet::new)
                    .expectNextCount(4)
                    .expectRecordedMatches(c -> c.containsAll(pendingItems) && pendingItems.containsAll(c))
                    .verifyComplete();
    }

    @Test
    void flatMapAllowsReordering() {
        final StreamMessage<Integer> streamMessage = StreamMessage.of(1, 2);
        final CompletableFuture<Integer> future = new CompletableFuture<>();

        final Function<Integer, StreamMessage<Integer>> function = x -> x == 1 ? StreamMessage.of(x).mapAsync(
                y -> future) : StreamMessage.of(x);

        final StreamMessage<Integer> mappedStream = streamMessage.flatMap(function);

        StepVerifier.create(mappedStream)
                    .expectNext(2)
                    .then(() -> future.complete(3))
                    .expectNext(3)
                    .verifyComplete();
    }

    @Test
    void flatMapPropagatesError() {
        final StreamMessage<Integer> streamMessage = StreamMessage.of(1);
        final Function<Integer, StreamMessage<Integer>> function = y -> StreamMessage.aborted(
                new RuntimeException());

        final StreamMessage<Integer> mappedStream = streamMessage.flatMap(function);

        StepVerifier.create(mappedStream)
                    .thenRequest(1)
                    .verifyError(RuntimeException.class);
    }
}