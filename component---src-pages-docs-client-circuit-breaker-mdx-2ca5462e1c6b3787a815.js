(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},gRJG:function(e,r,a){"use strict";a.r(r),a.d(r,"pageTitle",(function(){return n})),a.d(r,"_frontmatter",(function(){return o})),a.d(r,"default",(function(){return m}));var t=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("xCMr"),n="Circuit breaker",o={},l={pageTitle:n,_frontmatter:o},p=c.a;function m(e){var r=e.components,a=Object(t.a)(e,["components"]);return Object(i.b)(p,Object.assign({},l,a,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"circuit-breaker",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#circuit-breaker","aria-label":"circuit breaker permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Circuit breaker"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#state-of-circuitbreaker"},"State of CircuitBreaker")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#circuitbreakerclient"},"CircuitBreakerClient")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#circuitbreakerrule"},"CircuitBreakerRule")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#grouping-circuitbreakers"},"Grouping CircuitBreakers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#circuitbreakerbuilder"},"CircuitBreakerBuilder")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#using-circuitbreaker-with-non-armeria-client"},"Using CircuitBreaker with non-Armeria client"))),Object(i.b)("p",null,"In microservice architecture, it's common that various services running on different machines are connected to\neach other through remote calls. If one of the services becomes unreachable somehow such as due to network\nissues, the client which connects to that service will take long to get a response from it or to fail to\nget one. Situation will get even worse if there are many remote calls to such unresponsive service.\nYou can configure an Armeria client with a circuit breaker to prevent this circumstance. The circuit breaker\ncan automatically detect failures by continuously updating success and failure events. If the remote service\nis unresponsive, it will immediately respond with an error and not make remote calls.\nPlease refer to ",Object(i.b)("a",{parentName:"p",href:"https://martinfowler.com/bliki/CircuitBreaker.html"},"CircuitBreaker wiki page")," by Martin Fowler and\n",Object(i.b)("a",{parentName:"p",href:"https://engineering.linecorp.com/en/blog/detail/76"},"LINE Engineering blog post about circuit breaker"),"\nfor more information."),Object(i.b)("h2",{id:"state-of-circuitbreaker",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#state-of-circuitbreaker","aria-label":"state of circuitbreaker permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"State of ",Object(i.b)("inlineCode",{parentName:"h2"},"CircuitBreaker")),Object(i.b)("p",null,"A ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," can be one of the following three states:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CLOSED"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Initial state. All requests are treated normally."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"OPEN"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The state machine enters the ",Object(i.b)("inlineCode",{parentName:"li"},"OPEN")," state once the number of failures divided by the total number of\nrequests exceeds a certain threshold. All requests are blocked off responding with ",Object(i.b)("a",{parentName:"li",href:"type://FailFastException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/FailFastException.html"},"type://FailFastException"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HALF_OPEN"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"After a certain amount of time in the ",Object(i.b)("inlineCode",{parentName:"li"},"OPEN")," state, the state machine enters the ",Object(i.b)("inlineCode",{parentName:"li"},"HALF_OPEN")," state\nwhich sends a request to find out if the service is still unavailable or not.\nIf the request succeeds, it enters the ",Object(i.b)("inlineCode",{parentName:"li"},"CLOSED")," state. If it fails, it enters the ",Object(i.b)("inlineCode",{parentName:"li"},"OPEN")," state again.")))),Object(i.b)("span",{className:"remark-draw remark-draw-bob-svg"},Object(i.b)("object",{parentName:"span",data:"/34ce3e221712a4643e01baaf8dc06b750d701fba.svg",role:"img","aria-label":""})),Object(i.b)("h2",{id:"circuitbreakerclient",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#circuitbreakerclient","aria-label":"circuitbreakerclient permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(i.b)("inlineCode",{parentName:"h2"},"CircuitBreakerClient")),Object(i.b)("p",null,"Armeria provides two different client implementations depending on the\n",Object(i.b)("a",{parentName:"p",href:"type://Request:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Request.html"},"type://Request")," and ",Object(i.b)("a",{parentName:"p",href:"type://Response:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Response.html"},"type://Response")," types:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://CircuitBreakerClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html"},"type://CircuitBreakerClient")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"type://CircuitBreakerRpcClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRpcClient.html"},"type://CircuitBreakerRpcClient"))),Object(i.b)("p",null,"Let's use ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreakerClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html"},"type://CircuitBreakerClient")," to find out what we can do.\nYou can use the ",Object(i.b)("inlineCode",{parentName:"p"},"decorator()")," method in ",Object(i.b)("a",{parentName:"p",href:"type://WebClientBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClientBuilder.html"},"type://WebClientBuilder")," to build a ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreakerClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html"},"type://CircuitBreakerClient"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.linecorp.armeria.client.WebClient;\nimport com.linecorp.armeria.client.circuitbreaker.CircuitBreaker;\nimport com.linecorp.armeria.client.circuitbreaker.CircuitBreakerClient;\nimport com.linecorp.armeria.client.circuitbreaker.CircuitBreakerRule;\nimport com.linecorp.armeria.common.AggregatedHttpResponse;\nimport com.linecorp.armeria.common.HttpRequest;\nimport com.linecorp.armeria.common.HttpResponse;\n\nCircuitBreakerRule rule = CircuitBreakerRule.builder()\n                                            .onServerErrorStatus()\n                                            .onException()\n                                            .thenFailure();\n\nWebClient client = WebClient\n        .builder(...)\n        .decorator(CircuitBreakerClient.builder(rule)\n                                       .newDecorator())\n        .build();\n\nAggregatedHttpResponse res = client.execute(...).aggregate().join(); // Send requests on and on.\n")),Object(i.b)("p",null,"Now, the ",Object(i.b)("a",{parentName:"p",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," can track the number of success or failure events depending on the\n",Object(i.b)("a",{parentName:"p",href:"typeplural://Response:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Response.html"},"typeplural://Response"),". The ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," will enter ",Object(i.b)("inlineCode",{parentName:"p"},"OPEN"),", when the number of failures divided\nby the total number of ",Object(i.b)("a",{parentName:"p",href:"typeplural://Request:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Request.html"},"typeplural://Request")," exceeds the failure rate.\nThen the ",Object(i.b)("a",{parentName:"p",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," will immediately get ",Object(i.b)("a",{parentName:"p",href:"type://FailFastException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/FailFastException.html"},"type://FailFastException")," by the ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker"),"."),Object(i.b)("h2",{id:"circuitbreakerrule",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#circuitbreakerrule","aria-label":"circuitbreakerrule permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(i.b)("inlineCode",{parentName:"h2"},"CircuitBreakerRule")),Object(i.b)("p",null,"How does a ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," know whether a ",Object(i.b)("a",{parentName:"p",href:"type://Response:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Response.html"},"type://Response")," is successful or not?\n",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"},"type://CircuitBreakerRule")," does the job. In the example above, if the status of a ",Object(i.b)("a",{parentName:"p",href:"type://Response:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Response.html"},"type://Response")," is ",Object(i.b)("inlineCode",{parentName:"p"},"5xx"),"\nor an ",Object(i.b)("inlineCode",{parentName:"p"},"Exception")," is raised during the call, the count of failure is increased.\nYou can have your own ",Object(i.b)("inlineCode",{parentName:"p"},"rule")," by building ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"},"type://CircuitBreakerRule"),".\nThe following example builds a ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"},"type://CircuitBreakerRule")," that fails when an ",Object(i.b)("inlineCode",{parentName:"p"},"Exception"),"\nis raised or the status is ",Object(i.b)("inlineCode",{parentName:"p"},"5xx"),", succeeds when the status is ",Object(i.b)("inlineCode",{parentName:"p"},"2xx")," and ignores others."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.linecorp.armeria.client.ClientRequestContext;\nimport com.linecorp.armeria.client.UnprocessedRequestException;\nimport com.linecorp.armeria.common.HttpStatus;\nimport com.linecorp.armeria.common.HttpStatusClass;\n\nfinal CircuitBreakerRule myRule = \n        CircuitBreakerRule.of(\n                // A failure if an Exception is raised.\n                CircuitBreakerRule.onException(), \n                // Neither a success nor a failure because the request has not been handled by the server.\n                CircuitBreakerRule.builder()\n                                  .onUnprocessed()\n                                  .thenIgnore(),\n                // A failure if the response is 5xx.\n                CircuitBreakerRule.onServerErrorStatus(),\n                // A success if the response is 2xx.\n                CircuitBreakerRule.builder()\n                                  .onStatusClass(HttpStatusClass.SUCCESS)\n                                  .thenSuccess(),\n                // Neither a success nor a failure. Do not take this response into account.\n                CircuitBreakerRule.builder().thenIgnore());\n")),Object(i.b)("p",null,"If you need to determine whether the request was successful by looking into the response content,\nyou should build ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreakerRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleWithContent.html"},"type://CircuitBreakerRuleWithContent")," and specify it when you create an\n",Object(i.b)("a",{parentName:"p",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," using ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreakerClientBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClientBuilder.html"},"type://CircuitBreakerClientBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.circuitbreaker.CircuitBreakerRuleWithContent;\n\nfinal CircuitBreakerRuleWithContent<HttpResponse> myRule =\n        CircuitBreakerRuleWithContent.of(\n                CircuitBreakerRuleWithContent.<HttpResponse>builder()\n                                             .onUnprocessed()\n                                             .thenIgnore(),\n                CircuitBreakerRuleWithContent.<HttpResponse>builder()\n                                             .onException()\n                                             .thenFailure(),\n                CircuitBreakerRuleWithContent.<HttpResponse>builder()\n                                             .onResponse(response -> response.aggregate().thenApply(content -> {\n                                                 return content.equals("Failure");\n                                             }))\n                                             .thenFailure());\n\nWebClient client = WebClient\n        .builder(...)\n        .decorator(CircuitBreakerClient.builder(myRule) // Specify the rule\n                                       .newDecorator())\n        .build();\n\nAggregatedHttpResponse res = client.execute(...).aggregate().join();\n')),Object(i.b)("h2",{id:"grouping-circuitbreakers",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#grouping-circuitbreakers","aria-label":"grouping circuitbreakers permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Grouping ",Object(i.b)("inlineCode",{parentName:"h2"},"CircuitBreaker"),"s"),Object(i.b)("p",null,"In the very first example above, a single ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," was used to track the events. However,\nin many cases, you will want to use different ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," for different endpoints. For example, there\nmight be an API which performs heavy calculation which fails often. On the other hand, there can be another API\nwhich is not resource hungry and this is not likely to fail.\nHaving one ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," that tracks all the success and failure does not make sense in this scenario.\nIt's even worse if the client connects to the services on different machines.\nWhen one of the remote services is down, your ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," will probably be ",Object(i.b)("inlineCode",{parentName:"p"},"OPEN")," state although\nyou can connect to other services.\nTherefore, Armeria provides various ways that let users group the range of circuit breaker instances."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Group by host: a single ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," is used for each remote host."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.circuitbreaker.CircuitBreakerRpcClient;\nimport com.linecorp.armeria.common.RpcResponse;\n\nfinal CircuitBreakerRule httpRule = CircuitBreakerRule.builder()\n                                                      .onServerErrorStatus()\n                                                      .onException()\n                                                      .thenFailure();\nfinal CircuitBreakerRule rpcRule = CircuitBreakerRule.onException();\n\n// Create a CircuitBreaker with the key name\nfinal Function<String, CircuitBreaker> factory = key -> CircuitBreaker.of("my-cb-" + key);\n\n// Create CircuitBreakers per host (a.com, b.com ...)\nCircuitBreakerClient.newPerHostDecorator(factory, httpRule);\nCircuitBreakerRpcClient.newPerHostDecorator(factory, rpcRule);\n// The names of the created CircuitBreaker: my-cb-a.com, my-cb-b.com, ...\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Group by method: a single ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," is used for each method."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"// Create CircuitBreakers per method\nCircuitBreakerClient.newPerMethodDecorator(factory, httpRule);\n// The names of the created CircuitBreaker: my-cb-GET, my-cb-POST, ...\n\nCircuitBreakerRpcClient.newPerMethodDecorator(factory, rpcRule);\n// The names of the created CircuitBreaker: my-cb-methodA, my-cb-methodB, ...\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Group by host and method: a single ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," is used for each method and host combination."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"// Create a CircuitBreaker with the host and method name\nfinal BiFunction<String, String, CircuitBreaker> factory =\n        (host, method) -> CircuitBreaker.of(\"my-cb-\" + host + '#' + method);\n// Create CircuitBreakers per host and method\nCircuitBreakerClient.newDecorator(CircuitBreakerMapping.perHostAndMethod(factory), httpRule);\n// The names of the created CircuitBreaker: my-cb-a.com#GET,\n// my-cb-a.com#POST, my-cb-b.com#GET, my-cb-b.com#POST, ...\n\nCircuitBreakerRpcClient.newDecorator(CircuitBreakerMapping.perHostAndMethod(factory), rpcRule);\n// The names of the created CircuitBreaker: my-cb-a.com#methodA,\n// my-cb-a.com#methodB, my-cb-b.com#methodA, my-cb-b.com#methodB, ...\n")))),Object(i.b)("h2",{id:"circuitbreakerbuilder",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#circuitbreakerbuilder","aria-label":"circuitbreakerbuilder permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),Object(i.b)("inlineCode",{parentName:"h2"},"CircuitBreakerBuilder")),Object(i.b)("p",null,"We have used static factory methods in ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," interface to create a ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," so far.\nIf you use ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreakerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerBuilder.html"},"type://CircuitBreakerBuilder"),", you can configure the parameters which decide\n",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker"),"'s behavior. Here are the parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"name"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The name of the ",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"failureRateThreshold"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The threshold that changes ",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker"),"'s state to ",Object(i.b)("inlineCode",{parentName:"li"},"OPEN")," when the number of failed\n",Object(i.b)("a",{parentName:"li",href:"typeplural://Request:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Request.html"},"typeplural://Request")," divided by the number of total ",Object(i.b)("a",{parentName:"li",href:"typeplural://Request:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Request.html"},"typeplural://Request")," exceeds it.\nThe default value is ",Object(i.b)("inlineCode",{parentName:"li"},"0.5"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"minimumRequestThreshold"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The minimum number of ",Object(i.b)("a",{parentName:"li",href:"typeplural://Request:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Request.html"},"typeplural://Request")," to detect failures. The default value is ",Object(i.b)("inlineCode",{parentName:"li"},"10"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"trialRequestInterval"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The duration that a ",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," remains in ",Object(i.b)("inlineCode",{parentName:"li"},"HALF_OPEN")," state. All requests are blocked off\nresponding with ",Object(i.b)("a",{parentName:"li",href:"type://FailFastException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/FailFastException.html"},"type://FailFastException")," during this state. The default value is ",Object(i.b)("inlineCode",{parentName:"li"},"3")," seconds."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"circuitOpenWindow"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The duration that a ",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," remains in ",Object(i.b)("inlineCode",{parentName:"li"},"OPEN")," state. All ",Object(i.b)("a",{parentName:"li",href:"typeplural://Request:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Request.html"},"typeplural://Request")," are blocked\noff responding with ",Object(i.b)("a",{parentName:"li",href:"type://FailFastException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/FailFastException.html"},"type://FailFastException")," during this state. The default value is ",Object(i.b)("inlineCode",{parentName:"li"},"10")," seconds."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"counterSlidingWindow"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The duration of a sliding window that a ",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," counts successful and failed\n",Object(i.b)("a",{parentName:"li",href:"typeplural://Request:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Request.html"},"typeplural://Request")," in it. The default value is ",Object(i.b)("inlineCode",{parentName:"li"},"20")," seconds."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"counterUpdateInterval"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The duration that a ",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," stores events in a bucket. The default value is ",Object(i.b)("inlineCode",{parentName:"li"},"1")," second."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"listeners"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The listeners which are notified by a ",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," when an event occurs. The events are one of\n",Object(i.b)("inlineCode",{parentName:"li"},"stateChanged"),", ",Object(i.b)("inlineCode",{parentName:"li"},"eventCountUpdated")," and ",Object(i.b)("inlineCode",{parentName:"li"},"requestRejected"),". You can use\n",Object(i.b)("a",{parentName:"li",href:"type://MetricCollectingCircuitBreakerListener"},"type://MetricCollectingCircuitBreakerListener")," to export metrics:")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.linecorp.armeria.client.circuitbreaker.MetricCollectingCircuitBreakerListener\n\nimport io.micrometer.core.instrument.Metrics;\n\nfinal MetricCollectingCircuitBreakerListener listener =\n        new MetricCollectingCircuitBreakerListener(Metrics.globalRegistry);\nfinal CircuitBreakerBuilder builder = CircuitBreaker.builder()\n                                                    .listener(listener);\n")))),Object(i.b)("h2",{id:"using-circuitbreaker-with-non-armeria-client",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#using-circuitbreaker-with-non-armeria-client","aria-label":"using circuitbreaker with non armeria client permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using ",Object(i.b)("inlineCode",{parentName:"h2"},"CircuitBreaker")," with non-Armeria client"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," API is designed to be framework-agnostic and thus can be used with any non-Armeria\nclients:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a ",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker"),"."),Object(i.b)("li",{parentName:"ol"},"Guard your client calls with ",Object(i.b)("inlineCode",{parentName:"li"},"CircuitBreaker.canRequest()"),"."),Object(i.b)("li",{parentName:"ol"},"Update the state of ",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," by calling ",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker#onSuccess():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html#onSuccess()"},"type://CircuitBreaker#onSuccess()")," or\n",Object(i.b)("a",{parentName:"li",href:"type://CircuitBreaker#onFailure():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html#onFailure()"},"type://CircuitBreaker#onFailure()")," depending on the outcome of the client call.")),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'private final CircuitBreaker cb = CircuitBreaker.of("some-client");\nprivate final SomeClient client = ...;\n\npublic void sendRequestWithCircuitBreaker() {\n    if (!cb.canRequest()) {\n        throw new RuntimeException();\n    }\n\n    boolean success = false;\n    try {\n        success = client.sendRequest();\n    } finally {\n        if (success) {\n            cb.onSuccess();\n        } else {\n            cb.onFailure();\n        }\n    }\n}\n')))}m.isMDXComponent=!0},xCMr:function(e,r,a){"use strict";var t=a("Wbzz"),i=a("q1tI"),c=a.n(i),n=a("/94A"),o=a("+ejy");r.a=function(e){var r=Object(t.useStaticQuery)("1217743243").allMdx.nodes;return c.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:r,index:n,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-circuit-breaker-mdx-2ca5462e1c6b3787a815.js.map