(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[6359],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,h=d["".concat(s,".").concat(p)]||d[p]||f[p]||i;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2940:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],a={id:"configure_control_file",title:"Configure Control File"},s={unversionedId:"how_to_guides/ingest_data/configure_control_file",id:"how_to_guides/ingest_data/configure_control_file",isDocsHomePage:!1,title:"Configure Control File",description:"Control files are used to cross-check whether a file is valid or not. Validity of files are checked on the basis of Count of Records. Guzzle provides Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.",source:"@site/docs/how_to_guides/ingest_data/Configure Control File.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/configure_control_file",permalink:"/docs/how_to_guides/ingest_data/configure_control_file",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Configure Control File.md",version:"current",frontMatter:{id:"configure_control_file",title:"Configure Control File"},sidebar:"sideBar",previous:{title:"Column Restrictions-Exclude and Include Columns",permalink:"/docs/how_to_guides/ingest_data/column_restrictions"},next:{title:"Moving Processed FIles",permalink:"/docs/how_to_guides/ingest_data/moving_processed_files"}},c=[{value:"Use of Control File in Guzzle",id:"use-of-control-file-in-guzzle",children:[]}],u={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Control files are used to cross-check whether a file is valid or not. Validity of files are checked on the basis of Count of Records. Guzzle provides Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files."),(0,i.kt)("h2",{id:"use-of-control-file-in-guzzle"},"Use of Control File in Guzzle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configure Control File feature compares the number of records in the original file and the control file extension. The file is valid only if the two are equal, otherwise it is invalid. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'In Guzzle, Use of control file is verified the metadata records with data The Control File has the same name as the original data file with only a change in the name of the extension. For Example: If we have a data file with the name customer.csv and enter the extension ".ctl" then a Control File name should be the customer .ctl.'))),(0,i.kt)("p",null,"Let us consider a Delimited file with the name customer.csv with the given data as shown below:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"customer.csv:")),(0,i.kt)("p",null,"1-\u2019Johan\u2019"),(0,i.kt)("p",null,"2-\u2019Ken\u2019"),(0,i.kt)("p",null,"3-\u2019Lynda\u2019"),(0,i.kt)("p",null,"4-\u2019Mike\u2019"),(0,i.kt)("p",null,"5-\u2019Roan\u2019"),(0,i.kt)("p",null,"customer.ctl is our control file in order to validate our Delimited File and will perform a count of the number of records. There can be 2 situations here:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Correct no. of records:")," "),(0,i.kt)("p",{parentName:"li"},"count, 5"))),(0,i.kt)("p",null,"In this case the file will be validated as the Control File counts the same no. of records that are there in the CSV file."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Incorrect no. of records:")),(0,i.kt)("p",{parentName:"li"},"count, 6 "))),(0,i.kt)("p",null,"In this case the file will not be validated as the Control file counts 6 records while the CSV file has only 5 records."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Checksum:")," Guzzle also supports the Checksum feature. Checksum helps in a row count and enables total file level validation. If enabled it matches the file with Checksum. If the required condition is not met the entire file is rejected."),(0,i.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/how-to-guides/ingest_data/image_0.png",target:"_self"},(0,i.kt)("img",{width:"1000",src:"/img/docs/how-to-guides/ingest_data/image_0.png"})))),(0,i.kt)("p",null,"This will validate a control file with the same name as the file pattern mentioned above with the extension .ctl"),(0,i.kt)("p",null,"If control file is on another path\nOverride control path \u2014 We want to add another path for control file to validate we have to check this box and give path in input text."))}f.isMDXComponent=!0}}]);