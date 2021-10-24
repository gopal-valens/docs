(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[80],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7156:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={},u={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Guzzle Changelog",description:"Guzzle v2.0.4 (October 11, 2021)",source:"@site/docs/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/docs/changelog",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/changelog.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"overview",permalink:"/docs/Resources/overview"}},s=[{value:"Guzzle v2.0.4 (October 11, 2021)",id:"guzzle-v204-october-11-2021",children:[]},{value:"Guzzle v2.0.3 (September 27, 2021)",id:"guzzle-v203-september-27-2021",children:[]},{value:"Guzzle v2.0.2 (September 13, 2021)",id:"guzzle-v202-september-13-2021",children:[]},{value:"Guzzle v2.0.1 (August 30, 2021)",id:"guzzle-v201-august-30-2021",children:[]},{value:"Guzzle v2.0.0 (August 13, 2021)",id:"guzzle-v200-august-13-2021",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"guzzle-v204-october-11-2021"},"Guzzle v2.0.4 (October 11, 2021)"),(0,i.kt)("h4",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added support of service principal in guzzle storage"),(0,i.kt)("li",{parentName:"ul"},"Enhanced exception handling in ingestion module"),(0,i.kt)("li",{parentName:"ul"},"Enhancement in auto refresh in monitor screen ")),(0,i.kt)("h4",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UI Fixes : expand/collapse component sharing state across tabs, improve author create new page, renamed azure blob and adls gen 2 technology name"),(0,i.kt)("li",{parentName:"ul"},"Disabled batch additional column for single context column"),(0,i.kt)("li",{parentName:"ul"},"Fixed source generated column issue in jdbc, azure sql and azure synapse source")),(0,i.kt)("h3",{id:"guzzle-v203-september-27-2021"},"Guzzle v2.0.3 (September 27, 2021)"),(0,i.kt)("h4",{id:"features-1"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support for spark engine for delta technology in processing activity"),(0,i.kt)("li",{parentName:"ul"},"Keep generated access token expiry time as 90 days by default"),(0,i.kt)("li",{parentName:"ul"},"Added support of user parameter, batch_id, stage_id and environment parameters in pipeline resume (this params will be supported when resuming)"),(0,i.kt)("li",{parentName:"ul"},"Removed prev_business_ts parameter support")),(0,i.kt)("h4",{id:"bugs-1"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UI Fixes: Labeel renames and look and feel update, fixed shared storage mount/unmount behavior for azure key vault config, Compute UI (retain key)"),(0,i.kt)("li",{parentName:"ul"},"Ingestion : fixed column mapping issue in fix length file format"),(0,i.kt)("li",{parentName:"ul"},"Ingestion : fixed column mapping issue when source file is empty"),(0,i.kt)("li",{parentName:"ul"},"Ingestion : fixed sourcecolumn issue for hive and delta source"),(0,i.kt)("li",{parentName:"ul"},"Ingestion : fixed firstname and lastname issue in for null values user module")),(0,i.kt)("h3",{id:"guzzle-v202-september-13-2021"},"Guzzle v2.0.2 (September 13, 2021)"),(0,i.kt)("h4",{id:"features-2"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added batch_id support in resume pipeline"),(0,i.kt)("li",{parentName:"ul"},"Added validations for enabling sso flow"),(0,i.kt)("li",{parentName:"ul"},"Added caching support for azure key vault secrets"),(0,i.kt)("li",{parentName:"ul"},"UI Changes: Compute UI, icons, SSO Configuration, Default compoute in user profile drawer, Share storage config"),(0,i.kt)("li",{parentName:"ul"},"Removed support for data enginnering light support from databricks compute")),(0,i.kt)("h4",{id:"bugs-2"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed schema dervitation issue in copy data tool"),(0,i.kt)("li",{parentName:"ul"},"Azure key vault component fixes")),(0,i.kt)("h3",{id:"guzzle-v201-august-30-2021"},"Guzzle v2.0.1 (August 30, 2021)"),(0,i.kt)("h4",{id:"features-3"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Removal of atlas-plugin.jar removed"),(0,i.kt)("li",{parentName:"ul"},"Sample config cleanup (removed control file)"),(0,i.kt)("li",{parentName:"ul"},"Added default user compute support in profile page"),(0,i.kt)("li",{parentName:"ul"},"Added git commit message support in guzzle copy data tool"),(0,i.kt)("li",{parentName:"ul"},"Added azure key vault support in git integration to specify the client secret"),(0,i.kt)("li",{parentName:"ul"},"Added test connection support in azure sql and azure synapse datastore"),(0,i.kt)("li",{parentName:"ul"},"UI Changes: links documentation, tutorial and resourc, change log link, renaming of form lables in Ingestion, clean up of HIve/Delta datastore config, updating icons, copy tool shortcut in Landing page, Changelog link in upgrade page, remove Quantity Resource support in in Admin UI"),(0,i.kt)("li",{parentName:"ul"},"Showing configuration dependencies while performing rename operation"),(0,i.kt)("li",{parentName:"ul"},"Updated source generated column behavior, cascaded  it to target automatically (now requires to speicfy them in schema section to be added to target)")),(0,i.kt)("h4",{id:"bugs-3"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Handle default value correctly for trim whitespace field of ingestion UI"),(0,i.kt)("li",{parentName:"ul"},"Corrected log file name for data sampling job logs and excluding sample data in logs"),(0,i.kt)("li",{parentName:"ul"},"Fixed blob storage access issue for ingestion source"),(0,i.kt)("li",{parentName:"ul"},"Fixed processed file hierarchy in ingestion job"),(0,i.kt)("li",{parentName:"ul"},"Changed last viewed timezone to local timezone"),(0,i.kt)("li",{parentName:"ul"},"UI Fixes: Navigation issue in edit user screen, refresh page issue when clicking change log link")),(0,i.kt)("h3",{id:"guzzle-v200-august-13-2021"},"Guzzle v2.0.0 (August 13, 2021)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consolidated release of Guzzle V2")))}c.isMDXComponent=!0}}]);