(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[3194],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1285:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=["components"],i={id:"working_with_azure_synapse_analytics",title:"Working with Azure Synapse Analytics Database"},s={unversionedId:"how_to_guides/ingest_data/working_with_azure_synapse_analytics",id:"how_to_guides/ingest_data/working_with_azure_synapse_analytics",isDocsHomePage:!1,title:"Working with Azure Synapse Analytics Database",description:"Only supported on Databricks compute",source:"@site/docs/how_to_guides/ingest_data/Working with Databases- Azure Synapse Analytics.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/working_with_azure_synapse_analytics",permalink:"/docs/how_to_guides/ingest_data/working_with_azure_synapse_analytics",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Working with Databases- Azure Synapse Analytics.md",version:"current",frontMatter:{id:"working_with_azure_synapse_analytics",title:"Working with Azure Synapse Analytics Database"},sidebar:"sideBar",previous:{title:"Working with AzureSQL Database",permalink:"/docs/how_to_guides/ingest_data/working_with_azureSQL"},next:{title:"Working with Hive Database",permalink:"/docs/how_to_guides/ingest_data/working_with_hive"}},u=[{value:"Azure Synapse Analytics as a Source",id:"azure-synapse-analytics-as-a-source",children:[]},{value:"Azure Synapse Analytics as a Target or Reject",id:"azure-synapse-analytics-as-a-target-or-reject",children:[]}],p={toc:u};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Only supported on Databricks compute"))),(0,l.kt)("p",null,"Azure Synapse Analytics is a cloud-based enterprise data warehouse platform that leverages massively parallel processing (MPP) to quickly run complex queries across petabytes of data. "),(0,l.kt)("p",null,"This article outlines how to use Azure Synapse Analytics as source or target in Ingestion activity. Guzzle leverages Databrick\u2019s Synapse Spark Connector detail of which can be found ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/azure/synapse-analytics"},"here")," which uses a common Azure Blob storage container to exchange data between two systems (Databricks Cluster and Azure Synapse). Ingestion Active lets you leverage this native connector offered by Databricks and allows you to specify different configurations that are supported by this connector. "),(0,l.kt)("h2",{id:"azure-synapse-analytics-as-a-source"},"Azure Synapse Analytics as a Source"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: In the Datastore section we can choose to read from Azure Synapse either as a Table or through SQL (in the form of a query).")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table + Filter"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the table from where to read data. The table can contain schema or even database name. Example: ",(0,l.kt)("br",null),"customerdb.","[dbo]",".","[customer]",(0,l.kt)("br",null),"[customer]"," (default schema name dbo will be assumed)",(0,l.kt)("br",null),"[dbo]",".","[customer]"," (database name shall be as per Datastore config)",(0,l.kt)("br",null),"Also when the Table option is selected, you can also specify the Filter which needs to be included when querying data from synapse."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the SQL query which will be run as-is on the source"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Clean Column Name"),(0,l.kt)("td",{parentName:"tr",align:null},"To specify whether to clean the column names of source data (both file headers and column names from table). All the characters other than alphanumeric will be converted to _.",(0,l.kt)("br",null),"Ex. 'col.1' will become 'col_1', 'col@1' will become 'col_1'"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configure Pre and Post SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Guzzle supports Pre-SQL and Post-SQL for source and target and their execution in ingestion. It is mainly used for pre and post formatting of data in database.",(0,l.kt)("br",null)," For more information click ",(0,l.kt)("a",{parentName:"td",href:"pre-SQL_and_post-SQL_in_ingestion"},"here"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configure watermark"),(0,l.kt)("td",{parentName:"tr",align:null},"A watermark represents tracking the last loaded value for one or more columns for a given source table or source SQL to enable loading data incrementally. Using watermark columns is one of the mechanisms used for changed data capture (CDC). ",(0,l.kt)("br",null)," For more information click ",(0,l.kt)("a",{parentName:"td",href:"watermark"},"here"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configure columns restriction"),(0,l.kt)("td",{parentName:"tr",align:null},"Mention column names and choose from the options to exclude and include columns. ",(0,l.kt)("br",null)," For more information click ",(0,l.kt)("a",{parentName:"td",href:"column_restrictions"},"here"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configure table dependency"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"azure-synapse-analytics-as-a-target-or-reject"},"Azure Synapse Analytics as a Target or Reject"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table"),(0,l.kt)("td",{parentName:"tr",align:null},"This is used to specify the Target Table we would like to create based on our Source."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Operation"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides two options that determines whether the content of source or reject data is expected to be -",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"append:")," To append the existing data ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"overwrite:")," Entire data in the synapse table is overwritten"),(0,l.kt)("td",{parentName:"tr",align:null},"append"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max String Length"),(0,l.kt)("td",{parentName:"tr",align:null},"Max String Length to set the string length for all VARCHAR/NVARCHAR type columns when writing data into Azure Synapse."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Any data which is greater than this will be clipped"),(0,l.kt)("td",{parentName:"tr",align:null},"4000"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Write Semantics"),(0,l.kt)("td",{parentName:"tr",align:null},"There are two possible values that can be selected :",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Polybase:"),"This option shall use Polybase feature of Azure Synapse to load or unload data to from common Blob storage. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Copy:"),"The Copy statement offers a more convenient way of loading data into Azure Synapse without the need to create an external table, requires fewer permissions to load data, and provides an improved performance for high-throughput data ingestion into Azure Synapse."),(0,l.kt)("td",{parentName:"tr",align:null},"Polybase"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))))}c.isMDXComponent=!0}}]);