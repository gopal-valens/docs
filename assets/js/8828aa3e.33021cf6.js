(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[9078],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),u=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=u(a),m=r,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5597:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=["components"],i={id:"reconcilation_of_data",title:"Reconcilation of data accross two tables"},c={unversionedId:"how_to_guides/governance/reconcilation_of_data",id:"how_to_guides/governance/reconcilation_of_data",isDocsHomePage:!1,title:"Reconcilation of data accross two tables",description:"Data reconciliation is used during a data migration where the target data is compared against original source data.",source:"@site/docs/how_to_guides/governance/Reconcilation of data accross two tables.md",sourceDirName:"how_to_guides/governance",slug:"/how_to_guides/governance/reconcilation_of_data",permalink:"/docs/how_to_guides/governance/reconcilation_of_data",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/governance/Reconcilation of data accross two tables.md",version:"current",frontMatter:{id:"reconcilation_of_data",title:"Reconcilation of data accross two tables"},sidebar:"sideBar",previous:{title:"Housekeeping Hive and Delta tables",permalink:"/docs/how_to_guides/governance/housekeeping_hive_and_delta_tables"},next:{title:"Working with Delimited Files",permalink:"/docs/how_to_guides/ingest_data/working_with_delimited_files"}},u=[{value:"Recon",id:"recon",children:[]},{value:"Partial Match",id:"partial-match",children:[]},{value:"Recon Metrics",id:"recon-metrics",children:[]}],p={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Data reconciliation")," is used during a ",(0,l.kt)("strong",{parentName:"p"},"data")," migration where the target ",(0,l.kt)("strong",{parentName:"p"},"data")," is compared against original source ",(0,l.kt)("strong",{parentName:"p"},"data.")),(0,l.kt)("p",null,"Guzzle Support below datastores for reconciliations."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"JDBC"),(0,l.kt)("li",{parentName:"ol"},"Hive"),(0,l.kt)("li",{parentName:"ol"},"Delta")),(0,l.kt)("p",null,"Guzzle provides below functionality and parameters for reconciliation of data across source and target resources."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Datastore"),(0,l.kt)("td",{parentName:"tr",align:null},"You can choose any of the available datastore from drop-down (as appropriate). If the connection is not available in drop-down then you have to create new."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table + Filter"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the table from where to read data. The table can contain schema and also database name. We can specify the Schema Name along with the Table Name. If it is not specified it is taken from the Datastore.",(0,l.kt)("br",null),(0,l.kt)("br",null)," Also, when the Table option is selected, you can also specify the Filter. The filter can be used to select only a part of the table. We may basically enter a condition and only the part of the table that satisfies the condition will be seen in the Target Section."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Alternatively Specify the SQL query which will be run as-is on the source"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h2",{id:"recon"},"Recon"),(0,l.kt)("p",null,"The recon section will give you ability to provide comparison logic between source and target datastore"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Primary Keys"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify primary keys for source and target endpoint based on that reference; Guzzle will show comparisons between two aggregated metrics."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grouping Columns"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify columns to be used for grouping source data and target data for aggregating metrics to be compared between source and target for recon."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Execute on source"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify if you want to push down the source and target SQL queries along with filters to be applied on respective source and target endpoints for execution. Only aggregation and result comparison would be performed by Guzzle using Spark dataframe."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Partial Match"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify If you want to show specific status with recon metrics."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Guzzle follow below partial match conditions"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"partial-match"},"Partial Match"),(0,l.kt)("p",null,"Guzzle follow below Partial Match Conventions to show status of job"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Partial Match"),(0,l.kt)("th",{parentName:"tr",align:null},"Invalid Records"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"= 0"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"= Total Records"),(0,l.kt)("td",{parentName:"tr",align:null},"FAILED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"0 < && > Total Records"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"> 0"),(0,l.kt)("td",{parentName:"tr",align:null},"FAILED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"= 0"),(0,l.kt)("td",{parentName:"tr",align:null},"SUCCESS")))),(0,l.kt)("h2",{id:"recon-metrics"},"Recon Metrics"),(0,l.kt)("p",null,"You can specify the source aggregation column and target aggregation column which will be compared, and recon results will be stored in the Guzzle repository table recon_summary and recon_detail."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the name of the recon metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Source Aggregation"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify source aggregation function"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Target Aggregation"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify Target aggregation function"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Detail Check Enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify if you want to bring detailed information on reconciliation records, if it\u2019s true then guzzle will calculate results for the mismathced records and store them in the Guzzle repository table recon_detail."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))))}d.isMDXComponent=!0}}]);