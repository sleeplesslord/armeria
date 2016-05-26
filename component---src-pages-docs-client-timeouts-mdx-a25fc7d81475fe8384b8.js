(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},wxwE:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var i=a("zLVn"),n=(a("q1tI"),a("7ljp")),r=a("xCMr"),o="Overriding client timeouts",c={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=l("Tip"),p=l("Warning"),m={pageTitle:o,_frontmatter:c},u=r.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(u,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"overriding-client-timeouts",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#overriding-client-timeouts","aria-label":"overriding client timeouts permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Overriding client timeouts"),Object(n.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#using-typeclientbuilder"},"Using type://ClientBuilder")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#using-typewebclientrequestpreparation"},"Using type://WebClientRequestPreparation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#using-typerequestoptions"},"Using type://RequestOptions")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#adjusting-connection-level-timeouts"},"Adjusting connection-level timeouts")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#using-jvm-system-properties"},"Using JVM system properties"))),Object(n.b)("p",null,"Sometimes, the default timeouts used by the Armeria clients do not suit a particular scenario well.\nIn these cases, you might want to override the timeout settings."),Object(n.b)("h2",{id:"using-typeclientbuilder",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#using-typeclientbuilder","aria-label":"using typeclientbuilder permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using ",Object(n.b)("a",{parentName:"h2",href:"type://ClientBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientBuilder.html"},"type://ClientBuilder")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'import java.time.Duration;\n\nimport com.linecorp.armeria.client.Clients;\n\nint responseTimeout = 30;\nint writeTimeout = 10;\n\nHelloService.Iface client =\n    Clients.builder("tbinary+http://example.com/hello")\n           .responseTimeout(Duration.ofSeconds(responseTimeout))\n           .writeTimeout(Duration.ofSeconds(writeTimeout))\n           .build(HelloService.Iface.class);\n')),Object(n.b)("h2",{id:"using-typewebclientrequestpreparation",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#using-typewebclientrequestpreparation","aria-label":"using typewebclientrequestpreparation permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using ",Object(n.b)("a",{parentName:"h2",href:"type://WebClientRequestPreparation:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClientRequestPreparation.html"},"type://WebClientRequestPreparation")),Object(n.b)("p",null,"You can override the properties defined in ",Object(n.b)("a",{parentName:"p",href:"type://RequestOptions:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/RequestOptions.html"},"type://RequestOptions")," at request level\nusing ",Object(n.b)("a",{parentName:"p",href:"type://WebClient#prepare():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html#prepare()"},"type://WebClient#prepare()"),"."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'import com.linecopr.armeria.client.WebClient;\n\nWebClient client = WebClient.of("http://example.com"); \nclient.prepare()\n      .get("/hello")\n      .responseTimeout(Duration.ofSeconds(30))\n      .writeTimeout(Duration.ofSeconds(10)\n      .maxResponseLength(1024)\n      .execute();\n')),Object(n.b)("h2",{id:"using-typerequestoptions",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#using-typerequestoptions","aria-label":"using typerequestoptions permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using ",Object(n.b)("a",{parentName:"h2",href:"type://RequestOptions:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/RequestOptions.html"},"type://RequestOptions")),Object(n.b)("p",null,"You can also create a ",Object(n.b)("a",{parentName:"p",href:"type://RequestOptions:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/RequestOptions.html"},"type://RequestOptions")," to override the properties at request level. The\ncreated ",Object(n.b)("a",{parentName:"p",href:"type://RequestOptions:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/RequestOptions.html"},"type://RequestOptions")," could be passed to ",Object(n.b)("a",{parentName:"p",href:"type://WebClient#execute(HttpRequest,RequestOptions):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html#execute(com.linecorp.armeria.common.HttpRequest,com.linecorp.armeria.client.RequestOptions)?full"},"type://WebClient#execute(HttpRequest,RequestOptions)?full"),"\nwith an ",Object(n.b)("a",{parentName:"p",href:"type://HttpRequest:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpRequest.html"},"type://HttpRequest"),"."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.RequestOptions;\nimport com.linecorp.armeria.common.HttpRequest;\n\nHttpRequest req = HttpRequest.of(HttpMethod.GET, "/hello");\nRequestOptions options = \n    RequestOptions.builder()\n                  .responseTimeout(Duration.ofSeconds(30))\n                  .writeTimeout(Duration.ofSeconds(10)\n                  .maxResponseLength(1024)\n                  .build();\nclient.execute(req, options);\n')),Object(n.b)(s,{mdxType:"Tip"},Object(n.b)("p",null,"See ",Object(n.b)("a",{parentName:"p",href:"/docs/advanced-structured-logging#response-properties"},"Response properties")," to understand when the\nresponse timeout is scheduled.")),Object(n.b)("h2",{id:"adjusting-connection-level-timeouts",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#adjusting-connection-level-timeouts","aria-label":"adjusting connection level timeouts permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Adjusting connection-level timeouts"),Object(n.b)("p",null,"You need to build a non-default ",Object(n.b)("a",{parentName:"p",href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"},"type://ClientFactory")," using ",Object(n.b)("a",{parentName:"p",href:"type://ClientFactoryBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactoryBuilder.html"},"type://ClientFactoryBuilder")," to override the default\nconnection-level timeouts such as connect timeout and idle timeout programmatically:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-java"},"import com.linecorp.armeria.client.ClientFactory;\n\nClientFactory factory =\n    ClientFactory.builder()\n                 // Increase the connect timeout from 3.2s to 10s.\n                 .connectTimeout(Duration.ofSeconds(10))\n                 // Shorten the idle connection timeout from 10s to 5s.\n                 .idleTimeout(Duration.ofSeconds(5))\n                 // Note that you can also adjust other connection-level\n                 // settings such as enabling HTTP/1 request pipelining.\n                 .useHttp1Pipelining(true)\n                 .build();\n")),Object(n.b)("p",null,"Note that ",Object(n.b)("a",{parentName:"p",href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"},"type://ClientFactory")," implements ",Object(n.b)("inlineCode",{parentName:"p"},"java.lang.AutoCloseable")," and thus needs to be closed when you\nterminate your application. On ",Object(n.b)("inlineCode",{parentName:"p"},"close()"),", ",Object(n.b)("a",{parentName:"p",href:"type://ClientFactory:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientFactory.html"},"type://ClientFactory")," will close all the connections it manages\nand abort any requests in progress."),Object(n.b)("h2",{id:"using-jvm-system-properties",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#using-jvm-system-properties","aria-label":"using jvm system properties permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using JVM system properties"),Object(n.b)("p",null,"You can override the default client timeouts by specifying the following JVM system properties if you do not\nprefer setting it programmatically:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultClientIdleTimeoutMillis=<integer>"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"the default client-side idle timeout of a connection for keep-alive in milliseconds. Default: ",Object(n.b)("inlineCode",{parentName:"li"},"10000")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultConnectTimeoutMillis=<integer>"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"the default client-side timeout of a socket connection attempt in milliseconds. Default: ",Object(n.b)("inlineCode",{parentName:"li"},"3200")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultWriteTimeoutMillis=<integer>"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"the default client-side timeout of a socket write attempt in milliseconds. Default: ",Object(n.b)("inlineCode",{parentName:"li"},"1000")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.defaultResponseTimeoutMillis=<integer>"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"the default client-side timeout of a response in milliseconds. Default: ",Object(n.b)("inlineCode",{parentName:"li"},"15000"))))),Object(n.b)(p,{mdxType:"Warning"},Object(n.b)("p",null,"The JVM system properties have effect only when you did not specify them programmatically.\nSee ",Object(n.b)("a",{parentName:"p",href:"type://Flags:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Flags.html"},"type://Flags")," for the complete list of JVM system properties in Armeria.")))}d.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var i=a("Wbzz"),n=a("q1tI"),r=a.n(n),o=a("/94A"),c=a("+ejy");t.a=function(e){var t=Object(i.useStaticQuery)("1217743243").allMdx.nodes;return r.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-timeouts-mdx-a25fc7d81475fe8384b8.js.map