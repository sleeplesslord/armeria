(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var r=t("wFql"),i=t("q1tI"),n=t.n(i),c=t("2+3N"),l=t("1lec"),o=t("+ejy"),s=t("+9zj"),b=r.a.Title;a.a=function(e){var a={},t={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(c).forEach((function(e){var t=e[0],r=e[1];a[r]=t})),Object.entries(l).forEach((function(e){var a=e[0],r=e[1];t[r]=a}));var i=Object(s.a)(e.location),m=e.version||i.substring(i.lastIndexOf("/")+1);return m.match(/^[0-9]/)||(m=void 0),n.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:m?m+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),m?n.a.createElement(b,{id:"release-notes",level:1},n.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),m," release notes"):"",e.children)}},qQFO:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return m}));var r,i=t("zLVn"),n=(t("q1tI"),t("7ljp")),c=t("JkCF"),l={},o=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),s={_frontmatter:l},b=c.a;function m(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(n.b)(b,Object.assign({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",{className:"date"},"22nd September 2020"),Object(n.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can now inject your own ",Object(n.b)("a",{parentName:"li",href:"type://MeterIdPrefixFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/metric/MeterIdPrefixFunction.html"},"type://MeterIdPrefixFunction")," when using Armeria Spring Boot integration. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3034"},"#3034"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic MeterIdPrefixFunction myMeterIdPrefixFunction() {\n    return MeterIdPrefixFunction.of("custom.armeria.server");\n}\n'))),Object(n.b)("li",{parentName:"ul"},"You can now disable TLS verification for certain hosts only. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2722"},"#2722")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3057"},"#3057"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'ClientFactoryBuilder builder = ...\n// You should never use this in production but only for a testing purpose.\nbuilder.tlsNoVerifyHosts("trustin.com", "trustus.com");\n'))),Object(n.b)("li",{parentName:"ul"},"You can now use a string to specify the ",Object(n.b)("inlineCode",{parentName:"li"},"Logger")," for ",Object(n.b)("a",{parentName:"li",href:"type://LoggingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/logging/LoggingService.html"},"type://LoggingService")," and ",Object(n.b)("a",{parentName:"li",href:"type://LoggingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/logging/LoggingClient.html"},"type://LoggingClient"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3035"},"#3035"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = ...\nsb.decorator(LoggingService.builder()\n                           .logger("com.foo")\n                           .build());\n')))),Object(n.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://RequestLog#serviceName()"},"type://RequestLog#serviceName()")," is now used as a span name if you use the default ",Object(n.b)("inlineCode",{parentName:"li"},"HttpRequestParser"),"\nand ",Object(n.b)("inlineCode",{parentName:"li"},"HttpResponseParser")," with ",Object(n.b)("a",{parentName:"li",href:"type://BraveClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/brave/BraveClient.html"},"type://BraveClient")," and ",Object(n.b)("a",{parentName:"li",href:"type://BraveService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/brave/BraveService.html"},"type://BraveService")," for recognizing\na span easily. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3023"},"#3023")),Object(n.b)("li",{parentName:"ul"},"You can now easily find out whether SPI service interfaces are applied from the logs. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3039"},"#3039")),Object(n.b)("li",{parentName:"ul"},"You can now get the log of the exception which is raised while converting a ",Object(n.b)("a",{parentName:"li",href:"type://RequestLog:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logging/RequestLog.html"},"type://RequestLog")," into a\n",Object(n.b)("inlineCode",{parentName:"li"},"String"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3043"},"#3043")),Object(n.b)("li",{parentName:"ul"},"The stack trace of ",Object(n.b)("a",{parentName:"li",href:"type://HttpStatusException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/HttpStatusException.html"},"type://HttpStatusException")," and ",Object(n.b)("a",{parentName:"li",href:"type://HttpResponseException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/HttpResponseException.html"},"type://HttpResponseException")," are not logged anymore by\n",Object(n.b)("a",{parentName:"li",href:"type://LoggingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/logging/LoggingService.html"},"type://LoggingService")," because a user already knows where they are come from. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3053"},"#3053"),", ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3054"},"#3054"))),Object(n.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"TimeoutScheduler")," is now initialized exactly once. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3066"},"#3066")),Object(n.b)("li",{parentName:"ul"},"Reactor subscriber context is now properly propagated. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3058"},"#3058")),Object(n.b)("li",{parentName:"ul"},"Armeria Spring Boot integration collects metrics correctly if ",Object(n.b)("a",{parentName:"li",href:"type://ArmeriaSettings#enableMetrics"},"type://ArmeriaSettings#enableMetrics"),"\nis ",Object(n.b)("inlineCode",{parentName:"li"},"true"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3048"},"#3048")),Object(n.b)("li",{parentName:"ul"},"You now see the proper exception from WebFlux ",Object(n.b)("inlineCode",{parentName:"li"},"WebClient")," when ",Object(n.b)("a",{parentName:"li",href:"type://CircuitBreakerClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html"},"type://CircuitBreakerClient")," is applied. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3064"},"#3064")),Object(n.b)("li",{parentName:"ul"},"Armeria client now rejects a ",Object(n.b)("inlineCode",{parentName:"li"},"PUSH_PROMISE")," frame correctly because it doesn't support it yet. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3045"},"#3045"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"SETTINGS_ENABLE_PUSH")," is now disabled."))),Object(n.b)("li",{parentName:"ul"},"Armeria gRPC server does not raise a ",Object(n.b)("inlineCode",{parentName:"li"},"NullPointerException")," anymore when a gRPC server interceptor closes\nthe ",Object(n.b)("inlineCode",{parentName:"li"},"ServerCall"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3022"},"#3022"))),Object(n.b)("h2",{id:"️-deprecations",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"N/A")),Object(n.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"N/A")),Object(n.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Brave 5.12.4 → 5.12.6"),Object(n.b)("li",{parentName:"ul"},"Dropwizard 2.0.12 → 2.0.13"),Object(n.b)("li",{parentName:"ul"},"gRPC 1.31.1 → 1.32.1"),Object(n.b)("li",{parentName:"ul"},"grpc-kotlin-stub 0.1.5 → 0.2.0"),Object(n.b)("li",{parentName:"ul"},"Micrometer 1.5.4 → 1.5.5"),Object(n.b)("li",{parentName:"ul"},"Netty 4.1.51.FINAL → 4.1.52.FINAL",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"netty-tcnative-boringssl-static 2.0.31.Final → 2.0.34.Final"))),Object(n.b)("li",{parentName:"ul"},"Tomcat 9.0.37 → 9.0.38"),Object(n.b)("li",{parentName:"ul"},"org.jetbrains.kotlinx 1.3.8 → 1.3.9"),Object(n.b)("li",{parentName:"ul"},"Spring 5.2.8.RELEASE → 5.2.9.RELEASE"),Object(n.b)("li",{parentName:"ul"},"Spring Boot 2.3.3.RELEASE → 2.3.4.RELEASE"),Object(n.b)("li",{parentName:"ul"},"Examples:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Dagger 2.28.3 → 2.29.1"),Object(n.b)("li",{parentName:"ul"},"monix-reactive_2.13 3.2.2+43-36c1ada8 → 3.2.2+45-5c6c8b9e"),Object(n.b)("li",{parentName:"ul"},"org.jetbrains.kotlin 1.3.72 → 1.4.10")))),Object(n.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),Object(n.b)(o,{usernames:["aanrii","anuraaga","codefromthecrypt","eonezhang","ghkim3221","ikhoon","kojilin","mauhiz","minwoox","okue","rickyrattlesnake","trustin","tumile","wooyeong"],mdxType:"ThankYou"}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-1-1-0-mdx-3e7ac3f255005b04ef75.js.map