(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[2036],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2594:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),l=["components"],o={id:"working_with_xml_files",title:"Working with XML Files"},s={unversionedId:"how_to_guides/ingest_data/working_with_xml_files",id:"how_to_guides/ingest_data/working_with_xml_files",isDocsHomePage:!1,title:"Working with XML Files",description:"Extensible Markup Language (XML) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.",source:"@site/docs/how_to_guides/ingest_data/Working with XML files.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/working_with_xml_files",permalink:"/docs/how_to_guides/ingest_data/working_with_xml_files",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Working with XML files.md",version:"current",frontMatter:{id:"working_with_xml_files",title:"Working with XML Files"},sidebar:"sideBar",previous:{title:"Working with JSON Files",permalink:"/docs/how_to_guides/ingest_data/working_with_json_files"},next:{title:"Working with Text and Log Files",permalink:"/docs/how_to_guides/ingest_data/working_with_text_and_log_files"}},u=[{value:"XML File Properties in Guzzle",id:"xml-file-properties-in-guzzle",children:[]},{value:"The Interface for XML in Guzzle is :",id:"the-interface-for-xml-in-guzzle-is-",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Extensible Markup Language (",(0,i.kt)("strong",{parentName:"p"},"XML"),") is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable."),(0,i.kt)("p",null,"XML file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with XML files for source and target in Ingestion activity.  "),(0,i.kt)("h2",{id:"xml-file-properties-in-guzzle"},"XML File Properties in Guzzle"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Available in Source Section"),(0,i.kt)("th",{parentName:"tr",align:null},"Available in Target Section"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Character Set"),(0,i.kt)("td",{parentName:"tr",align:null},"It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc."),(0,i.kt)("td",{parentName:"tr",align:null},"UTF-8"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"XML Row Tag"),(0,i.kt)("td",{parentName:"tr",align:null},"The row tag of your XML files to treat as a row.",(0,i.kt)("br",null)," For example, in this XML ","<","books",">"," ","<","books",">","<","/books",">"," ...","<","/books",">",", the appropriate value would be book."),(0,i.kt)("td",{parentName:"tr",align:null},"Row"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"XML Root Tag"),(0,i.kt)("td",{parentName:"tr",align:null},"The Root tag of your XML files to treat as a root.",(0,i.kt)("br",null)," It encloses all the other elements and is therefore the sole parent element to all the other elements. For example, in the XML ","<","books",">"," ","<","books",">"," ","<","books",">"," ...","<","/books",">",", the appropriate value would be books."),(0,i.kt)("td",{parentName:"tr",align:null},"Rows"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Configure processed path"),(0,i.kt)("td",{parentName:"tr",align:null},"The Configure Processed Paths feature allows the user to specify the directory and Guzzle moves the Data into that directory. When creating a processed file path Guzzle creates 3 subfolders: processed, rejected and partial.",(0,i.kt)("br",null)," For more information click ",(0,i.kt)("a",{parentName:"td",href:"moving_processed_files"},"here"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"NULL"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"X")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Configure control file settings"),(0,i.kt)("td",{parentName:"tr",align:null},"The Configure Control File feature cross check whether a file is valid or not. It compares the number of records in the original file and the control file extension. Guzzle provides the Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.",(0,i.kt)("br",null)," For more information click ",(0,i.kt)("a",{parentName:"td",href:"configure_control_file"},"here"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"NULL"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Partial Load"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify partial loading of files."),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,i.kt)("td",{parentName:"tr",align:null},"X")))),(0,i.kt)("h2",{id:"the-interface-for-xml-in-guzzle-is-"},"The Interface for XML in Guzzle is :"),(0,i.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/xml.png",target:"_self"},(0,i.kt)("img",{src:"/img/docs/how-to-guides/ingest_data/xml.png"})))}p.isMDXComponent=!0}}]);