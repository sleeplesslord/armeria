(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},pveB:function(e,a,t){"use strict";t.r(a),t.d(a,"pageTitle",(function(){return o})),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return u}));var r=t("zLVn"),n=(t("q1tI"),t("7ljp")),i=t("xCMr"),c=t("aRgT"),o="Setting up a project",p={},b=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)}},d=b("Tip"),s=b("Tabs"),m=b("TabPane"),l=b("CodeBlock"),j={pageTitle:o,_frontmatter:p},g=i.a;function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)(g,Object.assign({},j,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"setting-up-a-project",style:{position:"relative"}},Object(n.b)("a",{parentName:"h1",href:"#setting-up-a-project","aria-label":"setting up a project permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Setting up a project"),Object(n.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#requirements"},"Requirements"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#choosing-the-artifacts"},"Choosing the artifacts"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#setting-up-with-a-build-system"},"Setting up with a build system"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#configure--parameters-javac-option"},"Configure -parameters javac option")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"#intellij-idea"},"IntelliJ IDEA")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"#using-maven-bom-for-simpler-dependency-management"},"Using Maven BOM for simpler dependency management")))),Object(n.b)("h2",{id:"requirements",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#requirements","aria-label":"requirements permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Requirements"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://adoptopenjdk.net/"},"Java 8 (or later)")," is required to build and run an application based on Armeria."),Object(n.b)(d,{mdxType:"Tip"},Object(n.b)("p",null,"Use Java 13 (or later) if you are a contributor who tries to build Armeria itself.\nSee ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/blob/master/CONTRIBUTING.md"},"CONTRIBUTING.md")," for more information.")),Object(n.b)("h2",{id:"choosing-the-artifacts",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#choosing-the-artifacts","aria-label":"choosing the artifacts permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Choosing the artifacts"),Object(n.b)("p",null,"All Armeria JARs are available in ",Object(n.b)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:com.linecorp.armeria%20-shaded"},"Maven Central Repository"),"\nunder group ID ",Object(n.b)("inlineCode",{parentName:"p"},"com.linecorp.armeria")," so that you can fetch them easily using your favorite build tool.\nAdd the Armeria artifacts that provide the desired functionality to your project dependencies. The following is\nthe list of major Armeria artifacts which might interest you:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"th"},"Artifact ID")),Object(n.b)("th",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"th"},"Description")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"The core library."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-brave"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Distributed tracing with Brave.\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/advanced-zipkin"},"Zipkin integration"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-dropwizard2"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Provides a Dropwizard 2 Bundle around ",Object(n.b)("inlineCode",{parentName:"p"},"armeria-jetty9"),".\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/advanced-dropwizard-integration"},"Using Armeria with Dropwizard"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-eureka"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Eureka based service discovery.\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/client-service-discovery#eureka-based-service-discovery-with-eurekaendpointgroup"},"Eureka service discovery")," and ",Object(n.b)("a",{parentName:"p",href:"/docs/server-service-registration#eureka-based-service-registration-with-eurekaupdatinglistener"},"Eureka service registration"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-grpc"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"gRPC client and server support.\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/server-grpc"},"Running a gRPC service"),"\nand ",Object(n.b)("a",{parentName:"p",href:"/docs/client-grpc"},"Calling a gRPC service"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-jetty9"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Embedded Jetty 9 Servlet container.\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/server-servlet"},"Embedding a servlet container"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-kafka"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Enables sending access logs to Kafka"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-kotlin"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Kotlin support.\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/server-annotated-service#kotlin-coroutines-support"},"Kotlin coroutines support"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-logback"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Provides Logback ",Object(n.b)("inlineCode",{parentName:"p"},"Appender")," implementation that adds\nrequest information.\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/advanced-logging"},"Logging contextual information"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-protobuf"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Support Protocol Buffers in annotated service."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-retrofit2"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Allows using Armeria instead of OkHttp as transport layer\nwhen using Retrofit2.\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/client-retrofit"},"Retrofit integration"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-rxjava3"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"RxJava 3 plugin"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-saml"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"SAML support"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-scalapb_2.12")," and\n",Object(n.b)("inlineCode",{parentName:"p"},"armeria-scalapb_2.13"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Support ScalaPB for gRPC and annotated service."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-spring-boot2-autoconfigure"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Spring Boot 2 integration"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-spring-boot2-webflux-autoconfigure"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Spring Boot 2 WebFlux integration. See\n",Object(n.b)("a",{parentName:"p",href:"/docs/advanced-spring-webflux-integration"},"Using Armeria with Spring WebFlux"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-thrift0.13"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Thrift 0.13 client and server support.\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/server-thrift"},"Running a Thrift service"),"\nand ",Object(n.b)("a",{parentName:"p",href:"/docs/client-thrift"},"Calling a Thrift service"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-tomcat9"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"Embedded Tomcat 9 Servlet container.\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/server-servlet"},"Embedding a servlet container"),"."))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"armeria-zookeeper3"))),Object(n.b)("td",{parentName:"tr",colspan:1,rowspan:1},Object(n.b)("p",{parentName:"td"},"ZooKeeper 3 based service discovery.\nSee ",Object(n.b)("a",{parentName:"p",href:"/docs/client-service-discovery#zookeeper-based-service-discovery-with-zookeeperendpointgroup"},"ZooKeeper service discovery")," and ",Object(n.b)("a",{parentName:"p",href:"/docs/server-service-registration#zookeeper-based-service-registration-with-zookeeperupdatinglistener"},"ZooKeeper service registration"),"."))))),Object(n.b)("h2",{id:"setting-up-with-a-build-system",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#setting-up-with-a-build-system","aria-label":"setting up with a build system permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Setting up with a build system"),Object(n.b)("p",null,"You might want to use the following build file as a starting point when you set up a new project:"),Object(n.b)(s,{mdxType:"Tabs"},Object(n.b)(m,{tab:"Gradle",key:"gradle",mdxType:"TabPane"},Object(n.b)(l,{language:"groovy",filename:"build.gradle",mdxType:"CodeBlock"},"\n    apply plugin: 'java'\n    apply plugin: 'idea'\n    apply plugin: 'eclipse'\n\n    repositories {\n        mavenCentral()\n    }\n\n    dependencies {\n        // Adjust the list as you need.\n        ['armeria',\n        'armeria-brave',\n        'armeria-grpc',\n        'armeria-jetty9',\n        'armeria-kafka',\n        'armeria-logback',\n        'armeria-retrofit2',\n        'armeria-rxjava3',\n        'armeria-saml',\n        'armeria-thrift0.13',\n        'armeria-tomcat9',\n        'armeria-zookeeper3'].each {\n            implementation \"com.linecorp.armeria:${it}:"+c["com.linecorp.armeria:armeria-bom"]+"\"\n        }\n\n        // Logging\n        runtimeOnly 'ch.qos.logback:logback-classic:"+c["ch.qos.logback:logback-classic"]+"'\n        runtimeOnly 'org.slf4j:log4j-over-slf4j:"+c["org.slf4j:log4j-over-slf4j"]+"'\n    }\n    ")),Object(n.b)(m,{tab:"Maven",key:"maven",mdxType:"TabPane"},Object(n.b)(l,{language:"xml",filename:"pom.xml",mdxType:"CodeBlock"},'\n    <project xmlns="http://maven.apache.org/POM/4.0.0"\n             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n\n      <modelVersion>4.0.0</modelVersion>\n      <groupId>com.example</groupId>\n      <artifactId>myproject</artifactId>\n      <version>1.0-SNAPSHOT</version>\n      <packaging>jar</packaging>\n      <name>myproject</name>\n      <url>https://example.com/</url>\n\n      <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n      </properties>\n\n      <dependencies>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria</artifactId>\n          <version>'+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-brave</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-grpc</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-jetty9</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-kafka</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-logback</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-retrofit2</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-rxjava3</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-saml</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-thrift0.13</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-tomcat9</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        <dependency>\n          <groupId>com.linecorp.armeria</groupId>\n          <artifactId>armeria-zookeeper3</artifactId>\n          <version>"+c["com.linecorp.armeria:armeria-bom"]+"</version>\n        </dependency>\n        \x3c!-- Logging --\x3e\n        <dependency>\n          <groupId>ch.qos.logback</groupId>\n          <artifactId>logback-classic</artifactId>\n          <version>"+c["ch.qos.logback:logback-classic"]+"</version>\n          <scope>runtime</scope>\n        </dependency>\n        <dependency>\n          <groupId>org.slf4j</groupId>\n          <artifactId>log4j-over-slf4j</artifactId>\n          <version>"+c["org.slf4j:log4j-over-slf4j"]+"</version>\n          <scope>runtime</scope>\n        </dependency>\n      </dependencies>\n    </project>\n    "))),Object(n.b)("h2",{id:"configure--parameters-javac-option",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#configure--parameters-javac-option","aria-label":"configure  parameters javac option permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Configure ",Object(n.b)("inlineCode",{parentName:"h2"},"-parameters")," javac option"),Object(n.b)("p",null,"You can configure your build tool to add ",Object(n.b)("inlineCode",{parentName:"p"},"-parameters")," javac option as follows."),Object(n.b)(s,{mdxType:"Tabs"},Object(n.b)(m,{tab:"Gradle",key:"gradle",mdxType:"TabPane"},Object(n.b)(l,{language:"groovy",filename:"build.gradle",mdxType:"CodeBlock"},"\n    tasks.withType(JavaCompile) {\n        options.compilerArgs += '-parameters'\n    }\n    ")),Object(n.b)(m,{tab:"Maven",key:"maven",mdxType:"TabPane"},Object(n.b)(l,{language:"xml",filename:"pom.xml",mdxType:"CodeBlock"},"\n    <project>\n      <build>\n        <plugins>\n          <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <configuration>\n              <compilerArgs>\n                <arg>-parameters</arg>\n              </compilerArgs>\n            </configuration>\n          </plugin>\n        </plugins>\n      </build>\n    </project>\n    "))),Object(n.b)("h3",{id:"intellij-idea",style:{position:"relative"}},Object(n.b)("a",{parentName:"h3",href:"#intellij-idea","aria-label":"intellij idea permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"IntelliJ IDEA"),Object(n.b)("p",null,"Go to ",Object(n.b)("inlineCode",{parentName:"p"},"Preferences")," > ",Object(n.b)("inlineCode",{parentName:"p"},"Build, Execution, Deployment")," > ",Object(n.b)("inlineCode",{parentName:"p"},"Compiler")," > ",Object(n.b)("inlineCode",{parentName:"p"},"Java Compiler"),"\nand add ",Object(n.b)("inlineCode",{parentName:"p"},"-parameters")," to ",Object(n.b)("inlineCode",{parentName:"p"},"Additional command line parameters"),"."),Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.282208588957054%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2UlEQVQoz5WTzW7VMBCF8zhliyqg+bcTO3FiO3aS+9NLqSqhLlqx421YIAQPehj7tuiWy4IuPo00sY7PmXESu36C29xiomqWG/jdHYTeoGACxs/gskfdSjDR/ReJdRu4eQfWDsgriaIW9GFEXjf4kJdIy/pVJKl9RHf4isI94lLd421/j/f6ASkfkJUVsoq9iuTN4RvKh5/gX37h8vMPXHz8jgvqvRNb5GWBK7o1q4jynPSk/nEYovr1GoNZwClqK3WMXzeS5teh4m2MfvVMUZ2RnlyasG5GWEygbCekTKOSHlXTodcG2nkoM6EbNLrRQCq6tB8gqAqqkvolXXoUpchMOuj5ELc8+gMyNqImwZy2LNSAcfIYrYOdVxg3RyFO2wwiz+Q1J8GnGdZygiahgJr2yHlw6OhQS45GuGUDTYJuWTHNS3QYnL2IHGMfSVq1RHd+exudBsG6OzrsHbla9xjpWfXTgs7OkMaDK4O86VEIhaJ9STKQq2m9QUPCjIQqMaFoDNKqBdc0vyDmt6iVPWECG+gcLfBvktFdR4e93UHSH9KqmWbokFFkpS2sXyFpGco4DBS9p14g9EouzogOl/0dgrAc17iUorE04CYOOwz9Xw84JwrWnPEbnCW2BHbZKNoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"intellij javac parameters",title:"intellij javac parameters",src:"/static/c778c5e23b435ba68d076f014b3a3824/a6d36/intellij_javac_parameters.png",srcSet:["/static/c778c5e23b435ba68d076f014b3a3824/222b7/intellij_javac_parameters.png 163w","/static/c778c5e23b435ba68d076f014b3a3824/ff46a/intellij_javac_parameters.png 325w","/static/c778c5e23b435ba68d076f014b3a3824/a6d36/intellij_javac_parameters.png 650w","/static/c778c5e23b435ba68d076f014b3a3824/e548f/intellij_javac_parameters.png 975w","/static/c778c5e23b435ba68d076f014b3a3824/3c492/intellij_javac_parameters.png 1300w","/static/c778c5e23b435ba68d076f014b3a3824/133ae/intellij_javac_parameters.png 1424w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(n.b)("h2",{id:"using-maven-bom-for-simpler-dependency-management",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#using-maven-bom-for-simpler-dependency-management","aria-label":"using maven bom for simpler dependency management permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using Maven BOM for simpler dependency management"),Object(n.b)("p",null,"You can import ",Object(n.b)("inlineCode",{parentName:"p"},"com.linecorp.armeria:armeria-bom")," into your build rather than specifying Armeria versions in\nmore than one place. See ",Object(n.b)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/platforms.html#sub:bom_import"},"this article"),"\nfor Gradle and ",Object(n.b)("a",{parentName:"p",href:"https://www.baeldung.com/spring-maven-bom"},"this article")," for Maven to learn more about what\nMaven BOM is and how to use it."))}u.isMDXComponent=!0},xCMr:function(e,a,t){"use strict";var r=t("Wbzz"),n=t("q1tI"),i=t.n(n),c=t("/94A"),o=t("+ejy");a.a=function(e){var a=Object(r.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:a,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-setup-mdx-7ef888ec1dd1ee5d0985.js.map