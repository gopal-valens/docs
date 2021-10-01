(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[4926],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5858:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),s=["components"],a={id:"moving_processed_files",title:"Moving Processed FIles"},l={unversionedId:"how_to_guides/ingest_data/moving_processed_files",id:"how_to_guides/ingest_data/moving_processed_files",isDocsHomePage:!1,title:"Moving Processed FIles",description:"Ingestion activity in Guzzle allows to",source:"@site/docs/how_to_guides/ingest_data/Moving Processed Files.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/moving_processed_files",permalink:"/docs/how_to_guides/ingest_data/moving_processed_files",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Moving Processed Files.md",version:"current",frontMatter:{id:"moving_processed_files",title:"Moving Processed FIles"},sidebar:"sideBar",previous:{title:"Configure Control File",permalink:"/docs/how_to_guides/ingest_data/configure_control_file"},next:{title:"Processing",permalink:"/docs/how_to_guides/ingest_data/processing"}},c=[{value:"How does it Work",id:"how-does-it-work",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ingestion activity in Guzzle allows to "),(0,i.kt)("p",null,"In this article we discuss how Guzzle handles processed files. Guzzle\u2019s Moving Process File feature allows the user to specify the directory and Guzzle will move the files to that destination.  "),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it Work"),(0,i.kt)("p",null,"On adding a processed file path in Configure processed path section Guzzle moves the Data into that directory.  Here let us use archive/ as our processed file path. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On creating a processed file path Guzzle creates 3 subfolders: processed, reject and partial.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Processed:")," The Processed subfolder is occupied when the entire file is accepted or processed successfully. This means that the file contains no rejects and the entire set of Data satisfies our conditions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Reject:")," The Reject subfolder is occupied when the number of rejects in the file exceeds the failure threshold specified in the Reject Section. The failure threshold is 100% by default. Thus, whether the file goes into the Reject Subfolder or Partial Subfolder depends on the Failure Threshold specified by the user.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Partial:")," The Partial subfolder is occupied when the entire file is not accepted successfully but contains some rejects. Thus, the file contains both the accepted data and the rejects. However, the number of rejects do not exceed the failure threshold mentioned by the user in the Reject Section."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once the file has been processed it will vanish from its original location and instead go into the processed file path which is archive/ in this case. In other words the file will now only be visible in the archive path and not in its original location.")),(0,i.kt)("p",null,"Let us consider an example:"),(0,i.kt)("p",null,"We have a CSV file called customer.csv which has 100 records."),(0,i.kt)("p",null,"Sg: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Csv :\n\n    Customer.csv - records: 100\n")),(0,i.kt)("p",null,"On given processed path name we move data in that directory"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Path name: /archive")),(0,i.kt)("p",null,"After processing file on business date 1:"),(0,i.kt)("p",null," Sg:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Csv: [empty]\n")),(0,i.kt)("p",null,"After processing file on business date 2:"),(0,i.kt)("p",null,"Sg: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Csv: \n\n    Archive:\n\n        Customer<job_ID>.csv \n\n        Customer<job_ID>.csv\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For our Datastores, Hive, Delta, Azure SQL and Azure Synapse Analytics supports all servers while JDBC supports only MySQL server."))))}d.isMDXComponent=!0}}]);