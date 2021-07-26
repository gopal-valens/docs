(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[642],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4353:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i=["components"],l={sidebar_position:1},s={unversionedId:"Tutorials/introduction to guzzle",id:"Tutorials/introduction to guzzle",isDocsHomePage:!1,title:"Introduction to guzzle",description:"There are plethora of frameworks and data integration tools available for Big Data and traditional DWH usecases. The reason or if we can say motivation that we decided to put together Guzzle - a set of data integration frameworks, boils down to following:",source:"@site/docs/Tutorials/introduction to guzzle.md",sourceDirName:"Tutorials",slug:"/Tutorials/introduction to guzzle",permalink:"/docs/docs/Tutorials/introduction to guzzle",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Tutorials/introduction to guzzle.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction to guzzle",permalink:"/docs/docs/Resources/Samples/introduction to guzzle"}},d=[{value:"What Guzzle is not",id:"what-guzzle-is-not",children:[]},{value:"Common Services",id:"common-services",children:[{value:"Job Dependency",id:"job-dependency",children:[]},{value:"Runtime audit",id:"runtime-audit",children:[]},{value:"Data Endpoints",id:"data-endpoints",children:[]},{value:"System Paramters",id:"system-paramters",children:[]},{value:"User Parameters",id:"user-parameters",children:[]},{value:"File Upload Tools",id:"file-upload-tools",children:[]},{value:"Watermarks and Control information",id:"watermarks-and-control-information",children:[]},{value:"Performance Monitoring",id:"performance-monitoring",children:[]}]},{value:"Native (or Internal) Modules",id:"native-or-internal-modules",children:[{value:"Ingestion",id:"ingestion",children:[]},{value:"Data Processing",id:"data-processing",children:[]},{value:"Housekeeping",id:"housekeeping",children:[]},{value:"Constraint Check",id:"constraint-check",children:[]},{value:"Recon and Tractability",id:"recon-and-tractability",children:[]}]},{value:"External Modules",id:"external-modules",children:[{value:"Gobblin",id:"gobblin",children:[]},{value:"ETL/ELT Tools",id:"etlelt-tools",children:[]},{value:"Data Prep tools",id:"data-prep-tools",children:[]}]}],c={toc:d};function u(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are plethora of frameworks and data integration tools available for Big Data and traditional DWH usecases. The reason or if we can say motivation that we decided to put together Guzzle - a set of data integration frameworks, boils down to following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To ",(0,r.kt)("strong",{parentName:"li"},"make Big data technologies more accessible")," and enable wider adoption for typical Data warehouse and data integration usecase. The idea is to simplify the implementation of data integration requirements of Data lake, make it faster, easy to manage, extend etc."),(0,r.kt)("li",{parentName:"ol"},"To ",(0,r.kt)("strong",{parentName:"li"},"address the standard data integration and DWH patterns")," that are usually not available as part of the native tools and standard frameworks. ")),(0,r.kt)("h2",{id:"what-guzzle-is-not"},"What Guzzle is not"),(0,r.kt)("p",null,"Guzzle is not meant to compete with existing Data Integration and ETL tools or existing ETL frameworks like Gobblin. Whilst it provides native modules to support Ingestion , Data processing, and others - it also supports calling the jobs / procs from other frameworks and ETL tools."),(0,r.kt)("h1",{id:"guzzle-architecture-overview"},"Guzzle Architecture Overview"),(0,r.kt)("p",null,"Guzzle is build as combination of foundation or common services , native modules and external modules which come together to provide integrated set of accelerators which can achieve ","[Guzzle's goal of RACE OIL]"," (Documentation/guzzle-overview#guzzle-goals-race-oil)\n",(0,r.kt)("img",{alt:"image",src:a(2607).Z})),(0,r.kt)("h2",{id:"common-services"},"Common Services"),(0,r.kt)("h3",{id:"job-dependency"},"Job Dependency"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Supports flexibility of defining dependency between different stages of data flow (staging, foundation, access layer)"),(0,r.kt)("li",{parentName:"ol"},"Supports dependency of individual jobs within ETL stages"),(0,r.kt)("li",{parentName:"ol"},"It passes appropriate context to allow concurrent loading of same target dataset"),(0,r.kt)("li",{parentName:"ol"},"Tightly coupled with Data Load and Data Ingestion frameworks")),(0,r.kt)("h3",{id:"runtime-audit"},"Runtime audit"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run time audit to maintain granular logs of individual jobs  and intermediate steps "),(0,r.kt)("li",{parentName:"ol"},"Row counts of successful, exception records processed, start/end time"),(0,r.kt)("li",{parentName:"ol"},"Performance metrics like CPU, memory and IO usage by the data processing jobs"),(0,r.kt)("li",{parentName:"ol"},"All audits captured in the context of system, country, data loading stage (staging, foundation etc), table for ease of reporting")),(0,r.kt)("h3",{id:"data-endpoints"},"Data Endpoints"),(0,r.kt)("p",null,"This is the abstractions for any data end points like local files, HDFS, RDBMS etc."),(0,r.kt)("h3",{id:"system-paramters"},"System Paramters"),(0,r.kt)("p",null,"This are global parameters which are determine during the invocation of the jobs"),(0,r.kt)("h3",{id:"user-parameters"},"User Parameters"),(0,r.kt)("p",null,"This are additional paramters"),(0,r.kt)("h3",{id:"file-upload-tools"},"File Upload Tools"),(0,r.kt)("p",null,"A generic tool to upload and stage the file in HDFS/Unix"),(0,r.kt)("h3",{id:"watermarks-and-control-information"},"Watermarks and Control information"),(0,r.kt)("p",null,"This deal with keeping the state of control information like last business date loaded for a given system/ country,. "),(0,r.kt)("h3",{id:"performance-monitoring"},"Performance Monitoring"),(0,r.kt)("p",null,"This deals with monitoring the granular resource usage on the cluster by various jobs"),(0,r.kt)("h2",{id:"native-or-internal-modules"},"Native (or Internal) Modules"),(0,r.kt)("p",null,"This are series of modules achieve specific workflows/ tasks for data integration. While they leverage the services/ context from Common services - they are supposedly to be fairly independent and can be run standalone. Native modules are loosely coupled and all the context is passed to this module while series of parameters (you can assume it passing a hash-map with key value of pairs)"),(0,r.kt)("h3",{id:"ingestion"},"Ingestion"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cateres to ingesting data from files, and relational database in batch mode and from Kafka in real-time mode"),(0,r.kt)("li",{parentName:"ol"},"Performs schema validation, control checks, file format check"),(0,r.kt)("li",{parentName:"ol"},"Allows configuring target partition scheme and incremental extraction criteria"),(0,r.kt)("li",{parentName:"ol"},"Staleness handling for late arriving files"),(0,r.kt)("li",{parentName:"ol"},"Supports end of day/month handling, merge, truncate insert and append modes on target")),(0,r.kt)("h3",{id:"data-processing"},"Data Processing"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A generic data loading framework which allows defining the transformation and loading rules using declarative config"),(0,r.kt)("li",{parentName:"ol"},"Data Processing rules defined as SQLs"),(0,r.kt)("li",{parentName:"ol"},"Enforces consistent implementation of standards and design patterns"),(0,r.kt)("li",{parentName:"ol"},"Prevent rewriting common of the ETL code and avoid any manual errors due to this"),(0,r.kt)("li",{parentName:"ol"},"Allows to control performance and other relevant global parameters centrally")),(0,r.kt)("h3",{id:"housekeeping"},"Housekeeping"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generic module to house keep the data "),(0,r.kt)("li",{parentName:"ol"},"Allows configuring the housekeeping based on date columns as well as others"),(0,r.kt)("li",{parentName:"ol"},"Allows configuring retention period for multiple time periods (xxx rolling days , yy rolling month end etc.)"),(0,r.kt)("li",{parentName:"ol"},"The data falling outside of retention window can be purged or moved to alternate location")),(0,r.kt)("h3",{id:"constraint-check"},"Constraint Check"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Perform Data Quality (DQ) validation on specified columns and tables "),(0,r.kt)("li",{parentName:"ol"},"Logging of records and statistics failing the constraint checks"),(0,r.kt)("li",{parentName:"ol"},"The validation rules applicable for structured data and can currently specified as SQL")),(0,r.kt)("h3",{id:"recon-and-tractability"},"Recon and Tractability"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Recon framework for technical recon between source and target datasets"),(0,r.kt)("li",{parentName:"ol"},"Performs count, hash and sum checks"),(0,r.kt)("li",{parentName:"ol"},"Maintain detail list of record (PK values/ rowid) having reconciliation gaps")),(0,r.kt)("h2",{id:"external-modules"},"External Modules"),(0,r.kt)("p",null,"This are external frameworks and tools that are supported by Guzzle.  "),(0,r.kt)("h3",{id:"gobblin"},"Gobblin"),(0,r.kt)("h3",{id:"etlelt-tools"},"ETL/ELT Tools"),(0,r.kt)("p",null,"ETL or ELT tools like ODI and Informatica can be integrated with Guzzle."),(0,r.kt)("h3",{id:"data-prep-tools"},"Data Prep tools"),(0,r.kt)("p",null,"Data prep tools like Paxata, DataIKU, Trifacta, Data Mere can be orchestrate and hooked as external module"))}u.isMDXComponent=!0},2607:function(e,t,a){"use strict";t.Z=a.p+"assets/images/guzzle_architecture-ca704b6ddd8d1a0ce2be115852735c54.png"}}]);