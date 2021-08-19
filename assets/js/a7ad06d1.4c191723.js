(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[9620],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4553:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={},l={unversionedId:"How to guides/Datastores/Server file system",id:"How to guides/Datastores/Server file system",isDocsHomePage:!1,title:"Server file system",description:"Server file system represents the local operating file system on the Compute nodes. The operating file system folder itself can in turn be a mounted network file shares or cloud file systems; or attached disk which are visible on all Compute nodes.",source:"@site/docs/How to guides/Datastores/Server file system.md",sourceDirName:"How to guides/Datastores",slug:"/How to guides/Datastores/Server file system",permalink:"/docs/How to guides/Datastores/Server file system",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/How to guides/Datastores/Server file system.md",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Hive",permalink:"/docs/How to guides/Datastores/Hive"},next:{title:"Rest",permalink:"/docs/How to guides/Datastores/Rest"}},c=[{value:"Steps to create Datastore  for Server file system",id:"steps-to-create-datastore--for-server-file-system",children:[]},{value:"Known Limitation",id:"known-limitation",children:[]}],m={toc:c};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Server file system represents the local operating file system on the ",(0,o.kt)("strong",{parentName:"p"},"Compute "),"nodes. The operating file system folder itself can in turn be a mounted network file shares or cloud file systems; or attached disk which are visible on all ",(0,o.kt)("strong",{parentName:"p"},"Compute "),"nodes. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Only Ingestion activity supports File based connectors. "))),(0,o.kt)("h2",{id:"steps-to-create-datastore--for-server-file-system"},"Steps to create Datastore  for Server file system"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the action button (",(0,o.kt)("img",{alt:"image alt text",src:n(933).Z}),") from the ",(0,o.kt)("strong",{parentName:"li"},"Datastores "),"section in Left Navigation and select ",(0,o.kt)("strong",{parentName:"li"},"Server file system**")," ",(0,o.kt)("strong",{parentName:"li"},"connector. Alternatively user can launch from "),"Create New Datastore **link in Activity authoring UI or Copy Data tool")),(0,o.kt)("p",null,'< insted of "Server file system" "LFS(Local File System)" will come >\n2. Enter the Datastore name for the new datastore and click Ok'),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the connection name or leave the default. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"http://http"},"Connection and Environments ")," for more details")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Provide the root path of the Server file system. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the Datastore config. Optionally you can Test the connection. "))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),": ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Ensure the same path is visible on all Driver and Worker nodes for Yarn or Databricks computes you are using. "))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image alt text",src:n(968).Z})),(0,o.kt)("h2",{id:"known-limitation"},"Known Limitation"),(0,o.kt)("p",null,"--"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This datastore is used to fetch data from local machine only. "),(0,o.kt)("li",{parentName:"ul"},"This datastore is only used in Ingestion activity only.")))}p.isMDXComponent=!0},933:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAYAAACPvW/2AAAAqUlEQVR4XmNIXXPn/2DAMMDw9tPX/4MBwx0U1Lf1/2DAow4ihEcdRAiPOogQHnUQITzqIEKYJAf1bDn3/9D1p/9ffvz2f8XxW2AxEH3l8VswRhYDqQGpBelBNwcfJslB+64+hmsAAZDYozef4XwQG9lQEADpQTcHH4aBoemgQRdl9MCjDiKERx1ECI86iBAedRAhPOogQnjwOgi9jz1QGO4g9FGIgcIwAAAAjDQ1GVtclgAAAABJRU5ErkJggg=="},968:function(e,t,n){"use strict";t.Z=n.p+"assets/images/server_file_system_1-924a9f34420b20c71e96d1925dd3d18f.gif"}}]);