(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},"79TK":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return p}));var r,n=t("zLVn"),i=(t("q1tI"),t("7ljp")),s=t("JkCF"),l={},c=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),o={_frontmatter:l},b=s.a;function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)(b,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",{className:"date"},"26th September 2019"),Object(i.b)("h2",{id:"new-features",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now create a ",Object(i.b)("inlineCode",{parentName:"p"},"Sampler")," from a specification string such as ",Object(i.b)("inlineCode",{parentName:"p"},"random=0.1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"rate-limited=10"),". ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2108"},"#2108")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This is going to be useful when you want to make the sampling policy of ",Object(i.b)("inlineCode",{parentName:"li"},"Brave{Client,Server}")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Logging{Client,Server}")," configurable from external sources such as a configuration file or a system property.")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'Sampler<Object> randomSampler = Sampler.of("random=0.1");\nSampler<Object> rateLimitedSampler = Sampler.of("rate-limited=10");\nSampler<Object> alwaysSampler = Sampler.of("always");\nSampler<Object> neverSampler = Sampler.of("never");\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now specify the ",Object(i.b)("inlineCode",{parentName:"p"},"Sampler")," specification string in the ",Object(i.b)("inlineCode",{parentName:"p"},"com.linecorp.armeria.verboseExceptions")," system property. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2105"},"#2105")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2111"},"#2111")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"From this release, the default value of this property is ",Object(i.b)("inlineCode",{parentName:"li"},"rate-limited=10")," which means the stack trace of the exceptions will be recorded at the maximum rate of 10 exceptions/sec. Previously, the default value of this property was ",Object(i.b)("inlineCode",{parentName:"li"},"false"),", which eliminates all stack traces, which gave our users a hard time figuring out why."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now specify a common path prefix using ",Object(i.b)("inlineCode",{parentName:"p"},"@PathPrefix")," annotation in annotated services. ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2031"},"#2031")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2099"},"#2099")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'@PathPrefix("/users")\npublic class MyUserService {\n    @Get("/{id}") // Mapped to \'/users/{id}\'\n    @ProducesJson\n    public User getUser(@Param int id) { ... }\n    ...\n}\n\nServer server = new ServerBuilder()\n    .annotatedService(new MyUserService())\n    .build();\n')))),Object(i.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fixed a memory leak in ",Object(i.b)("inlineCode",{parentName:"li"},"HealthCheckService"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2110"},"#2110")),Object(i.b)("li",{parentName:"ul"},"Prometheus and Dropwizard Metrics are now optional dependencies in ",Object(i.b)("inlineCode",{parentName:"li"},"armeria-spring-boot-*"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2106"},"#2106")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2107"},"#2107")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"armeria-spring-boot-actuator-autoconfigure")," does not refuse to start anymore when ",Object(i.b)("inlineCode",{parentName:"li"},"HealthStatusHttpMapper")," is missing. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2104"},"#2104"))),Object(i.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Flags.verboseExceptions()")," has been replaced with ",Object(i.b)("inlineCode",{parentName:"li"},"verboseExceptionSampler()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"verboseExceptionSamplerSpec()"),". ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2111"},"#2111")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Exceptions.isVerbose()"),", which was deprecated previously, has been removed. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2111"},"#2111")),Object(i.b)("li",{parentName:"ul"},"You may need to add ",Object(i.b)("inlineCode",{parentName:"li"},"io.micrometer:micrometer-registry-prometheus")," or ",Object(i.b)("inlineCode",{parentName:"li"},"io.dropwizard.metrics:metrics-json")," after upgrading if you were depending on them transitively. ",Object(i.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2107"},"#2107"))),Object(i.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Netty 4.1.41 -> 4.1.42"),Object(i.b)("li",{parentName:"ul"},"Netty TCNative BoringSSL 2.0.25 -> 2.0.26"),Object(i.b)("li",{parentName:"ul"},"Project Reactor 3.2.12 -> 3.3.0"),Object(i.b)("li",{parentName:"ul"},"Prometheus 0.6.0 -> 0.7.0"),Object(i.b)("li",{parentName:"ul"},"Retrofit 2.6.1 -> 2.6.2")),Object(i.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Thank you"),Object(i.b)(c,{usernames:["anuraaga","codefromthecrypt","heowc","ikhoon","jyblue","minwoox","sivaalli","taejs","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0},JkCF:function(e,a,t){"use strict";t("tU7J");var r=t("wFql"),n=t("q1tI"),i=t.n(n),s=t("2+3N"),l=t("1lec"),c=t("+ejy"),o=t("+9zj"),b=r.a.Title;a.a=function(e){var a={},t={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(s).forEach((function(e){var t=e[0],r=e[1];a[r]=t})),Object.entries(l).forEach((function(e){var a=e[0],r=e[1];t[r]=a}));var n=Object(o.a)(e.location),p=e.version||n.substring(n.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?i.a.createElement(b,{id:"release-notes",level:1},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-93-0-mdx-18d7f1de0341f356610f.js.map