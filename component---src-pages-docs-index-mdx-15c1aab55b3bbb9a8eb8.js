(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},uPfT:function(e,a,t){"use strict";t.r(a),t.d(a,"pageTitle",(function(){return o})),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return h}));var r,i=t("zLVn"),n=(t("q1tI"),t("7ljp")),c=t("xCMr"),o="User manual",l={},s=(r="AspectRatio",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={pageTitle:o,_frontmatter:l},p=c.a;function h(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(n.b)(p,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"user-manual",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#user-manual","aria-label":"user manual permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"User manual"),Object(n.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#what-is-armeria"},"What is Armeria?"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#want-a-quick-tour"},"Want a quick tour?"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#features"},"Features")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#http2"},"HTTP/2")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#integration-with-grpc-and-thrift"},"Integration with gRPC and Thrift")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#essential-features-for-building-microservices"},"Essential features for building microservices")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#interactive-web-based-debug-console"},"Interactive web-based debug console")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#completely-asynchronous-and-reactive"},"Completely asynchronous and reactive")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#compatibility-with-existing-java-ee-web-applications"},"Compatibility with existing Java EE web applications")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#even-higher-performance-on-linux"},"Even higher performance on Linux"))))),Object(n.b)("h2",{id:"what-is-armeria",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#what-is-armeria","aria-label":"what is armeria permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What is Armeria?"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Armeria")," is your go-to microservice framework for any situation. You can build any type of\nmicroservice leveraging your favorite technologies, including ",Object(n.b)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC"),",\n",Object(n.b)("a",{parentName:"p",href:"https://thrift.apache.org/"},"Thrift"),", ",Object(n.b)("a",{parentName:"p",href:"https://kotlinlang.org/"},"Kotlin"),",\n",Object(n.b)("a",{parentName:"p",href:"https://square.github.io/retrofit/"},"Retrofit"),", ",Object(n.b)("a",{parentName:"p",href:"https://www.reactive-streams.org/"},"Reactive Streams"),",\n",Object(n.b)("a",{parentName:"p",href:"https://spring.io/projects/spring-boot"},"Spring Boot")," and ",Object(n.b)("a",{parentName:"p",href:"https://www.dropwizard.io/"},"Dropwizard"),"."),Object(n.b)("p",null,"It is open-sourced by the creator of ",Object(n.b)("a",{parentName:"p",href:"https://netty.io/"},"Netty")," and his colleagues at\n",Object(n.b)("a",{parentName:"p",href:"https://engineering.linecorp.com/en/"},"LINE"),"."),Object(n.b)("h2",{id:"want-a-quick-tour",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#want-a-quick-tour","aria-label":"want a quick tour permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Want a quick tour?"),Object(n.b)("p",null,"Check out the recent introductory talk\n(",Object(n.b)("a",{parentName:"p",href:"https://speakerdeck.com/trustin/armeria-a-microservice-framework-well-suited-everywhere"},"slides"),"):"),Object(n.b)(s,{width:16,height:9,maxWidth:"21rem",mdxType:"AspectRatio"},Object(n.b)("iframe",{src:"https://www.youtube.com/embed/Vr-0GKUmzo8",style:{border:"none"},allowFullScreen:!0})),Object(n.b)("h2",{id:"features",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#features","aria-label":"features permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Features"),Object(n.b)("h3",{id:"http2",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#http2","aria-label":"http2 permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"HTTP/2"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Supports HTTP/2 on both TLS and cleartext connections"),Object(n.b)("li",{parentName:"ul"},"Supports protocol upgrade via both HTTP/2 connection preface and traditional HTTP/1 upgrade request"),Object(n.b)("li",{parentName:"ul"},"Fully compatible with existing HTTP/1 servers"),Object(n.b)("li",{parentName:"ul"},"Integrated PROXY protocol support for interoperability with load balancers such as HAProxy and AWS ELB.")),Object(n.b)("h3",{id:"integration-with-grpc-and-thrift",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#integration-with-grpc-and-thrift","aria-label":"integration with grpc and thrift permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Integration with gRPC and Thrift"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Your gRPC or Thrift service implementation runs on top of Armeria without any modification."),Object(n.b)("li",{parentName:"ul"},"Works with the official gRPC or Thrift-over-HTTP client"),Object(n.b)("li",{parentName:"ul"},"Works with the code generated by the official Protobuf or Thrift IDL compiler"),Object(n.b)("li",{parentName:"ul"},"Supports various protocol combinations, such as:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"gRPC-over-HTTP/1 & 2"),Object(n.b)("li",{parentName:"ul"},"Thrift-over-HTTP/1 & 2"),Object(n.b)("li",{parentName:"ul"},"gRPC-Web"))),Object(n.b)("li",{parentName:"ul"},"See ",Object(n.b)("a",{parentName:"li",href:"/docs/server-thrift"},"Running a Thrift service")," and ",Object(n.b)("a",{parentName:"li",href:"/docs/server-grpc"},"Running a gRPC service"),".")),Object(n.b)("h3",{id:"essential-features-for-building-microservices",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#essential-features-for-building-microservices","aria-label":"essential features for building microservices permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Essential features for building microservices"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Metrics"),Object(n.b)("li",{parentName:"ul"},"Circuit breaker"),Object(n.b)("li",{parentName:"ul"},"Client-side health-check and load-balancing"),Object(n.b)("li",{parentName:"ul"},"Service discovery from various sources such as DNS and ZooKeeper",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"See ",Object(n.b)("a",{parentName:"li",href:"/docs/client-service-discovery"},"Client-side load balancing and service discovery"),"."))),Object(n.b)("li",{parentName:"ul"},"Distributed call tracing via Zipkin")),Object(n.b)("h3",{id:"interactive-web-based-debug-console",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#interactive-web-based-debug-console","aria-label":"interactive web based debug console permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Interactive web-based debug console"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Browse the list of available RPC operations"),Object(n.b)("li",{parentName:"ul"},"Invoke an RPC operation via a web form"),Object(n.b)("li",{parentName:"ul"},"Share an RPC request with your colleagues so they can reproduce the problem easily",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Just like sharing a cURL command, but works for RPC"))),Object(n.b)("li",{parentName:"ul"},"See ",Object(n.b)("a",{parentName:"li",href:"/docs/server-docservice"},"Browsing and invoking services with DocService"),".")),Object(n.b)("h3",{id:"completely-asynchronous-and-reactive",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#completely-asynchronous-and-reactive","aria-label":"completely asynchronous and reactive permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Completely asynchronous and reactive"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Built on top of Reactive Streams and Java 8 CompletableFuture"),Object(n.b)("li",{parentName:"ul"},"Asynchronous connection pool ensures your application never blocks even on pool exhaustion."),Object(n.b)("li",{parentName:"ul"},"Domain name lookups are also fully asynchronous thanks to Netty’s asynchronous domain name resolver.")),Object(n.b)("h3",{id:"compatibility-with-existing-java-ee-web-applications",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#compatibility-with-existing-java-ee-web-applications","aria-label":"compatibility with existing java ee web applications permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Compatibility with existing Java EE web applications"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Runs any Java EE web applications such as Spring Boot on the same TCP/IP port"),Object(n.b)("li",{parentName:"ul"},"Your Java EE web application speaks HTTP/2!"),Object(n.b)("li",{parentName:"ul"},"See ",Object(n.b)("a",{parentName:"li",href:"/docs/server-servlet"},"Embedding a servlet container"),".")),Object(n.b)("h3",{id:"even-higher-performance-on-linux",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#even-higher-performance-on-linux","aria-label":"even higher performance on linux permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Even higher performance on Linux"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"JNI-based socket I/O"),Object(n.b)("li",{parentName:"ul"},"BoringSSL-based TLS connections")))}h.isMDXComponent=!0},xCMr:function(e,a,t){"use strict";var r=t("Wbzz"),i=t("q1tI"),n=t.n(i),c=t("/94A"),o=t("+ejy");a.a=function(e){var a=Object(r.useStaticQuery)("1217743243").allMdx.nodes;return n.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:a,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-index-mdx-15c1aab55b3bbb9a8eb8.js.map