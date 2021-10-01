(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[4461],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4600:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={id:"working_with_json_files",title:"Working with JSON Files"},s={unversionedId:"how_to_guides/ingest_data/working_with_json_files",id:"how_to_guides/ingest_data/working_with_json_files",isDocsHomePage:!1,title:"Working with JSON Files",description:"JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications. JSON is a language-independent data format.",source:"@site/docs/how_to_guides/ingest_data/Working with JSON Files.md",sourceDirName:"how_to_guides/ingest_data",slug:"/how_to_guides/ingest_data/working_with_json_files",permalink:"/docs/how_to_guides/ingest_data/working_with_json_files",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/how_to_guides/ingest_data/Working with JSON Files.md",version:"current",frontMatter:{id:"working_with_json_files",title:"Working with JSON Files"},sidebar:"sideBar",previous:{title:"Working with Delimited Files",permalink:"/docs/how_to_guides/ingest_data/working_with_delimited_files"},next:{title:"Working with XML Files",permalink:"/docs/how_to_guides/ingest_data/working_with_xml_files"}},d=[{value:"JSON File Properties in Guzzle",id:"json-file-properties-in-guzzle",children:[]},{value:"The Interface for the JSON Format for both Source",id:"the-interface-for-the-json-format-for-both-source",children:[]},{value:"The Interface for the JSON Format for both Target",id:"the-interface-for-the-json-format-for-both-target",children:[]},{value:"Multiline:",id:"multiline",children:[]},{value:"JSON file containing array with multi line",id:"json-file-containing-array-with-multi-line",children:[]},{value:"Column Mapping in JSON Files",id:"column-mapping-in-json-files",children:[]},{value:"Here we have mapped the columns to a new Column Name. name is mapped to first_name and created_time is mapped to time.",id:"here-we-have-mapped-the-columns-to-a-new-column-name-name-is-mapped-to-first_name-and-created_time-is-mapped-to-time",children:[]},{value:"If file has multiline (Customer.json)",id:"if-file-has-multiline-customerjson",children:[]}],p={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications. JSON is a language-independent data format."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"JSON file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with JSON files for source and target in Ingestion activity.  "))),(0,l.kt)("h2",{id:"json-file-properties-in-guzzle"},"JSON File Properties in Guzzle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Available in Source Section"),(0,l.kt)("th",{parentName:"tr",align:null},"Available in Target Section"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Character Set"),(0,l.kt)("td",{parentName:"tr",align:null},"It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc."),(0,l.kt)("td",{parentName:"tr",align:null},"UTF-8"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"X")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Override JSON root path"),(0,l.kt)("td",{parentName:"tr",align:null},"It can be used to specify an object or location where we want to take our data from. For e.g.- If we want to focus on one particular column of our data we can specify the Column name here.",(0,l.kt)("br",null)," Example :",(0,l.kt)("br",null),"{",(0,l.kt)("br",null),'"id" : 1,',(0,l.kt)("br",null),'"name" : {',(0,l.kt)("br",null),'"first_name" : "ABCD",',(0,l.kt)("br",null),'"last_name" : "XYZ"',(0,l.kt)("br",null),"},",(0,l.kt)("br",null),'"age" : 10 ',(0,l.kt)("br",null),"}",(0,l.kt)("br",null),"if we give name as a value than it will fetch data first_name and last_name and consider name as a root node."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"X")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multi-Line"),(0,l.kt)("td",{parentName:"tr",align:null},"This is applicable when a single data record spans across multiple lines. This applies to both JSON files which are in array form or separate JSON documents."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"X")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configure processed path"),(0,l.kt)("td",{parentName:"tr",align:null},"The Configure Processed Paths feature allows the user to specify the directory and Guzzle moves the Data into that directory. When creating a processed file path Guzzle creates 3 subfolders: processed, rejected and partial.",(0,l.kt)("br",null)," For more information click ",(0,l.kt)("a",{parentName:"td",href:"moving_processed_files"},"here"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"X")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configure control file settings"),(0,l.kt)("td",{parentName:"tr",align:null},"The Configure Control File feature cross check whether a file is valid or not. It compares the number of records in the original file and the control file extension. Guzzle provides the Configure Control File feature for all local file formats including Delimited, JSON, XML, Excel and Fixed Length Files.",(0,l.kt)("br",null)," For more information click ",(0,l.kt)("a",{parentName:"td",href:"configure_control_file"},"here"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Partial Load"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify partial loading of files."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:null},"X")))),(0,l.kt)("h2",{id:"the-interface-for-the-json-format-for-both-source"},"The Interface for the JSON Format for both Source"),(0,l.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/working_with_json0.png",target:"_self"},(0,l.kt)("img",{width:"1000",src:"/img/docs/working_with_json0.png"})),(0,l.kt)("h2",{id:"the-interface-for-the-json-format-for-both-target"},"The Interface for the JSON Format for both Target"),(0,l.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/working_with_json1.png",target:"_self"},(0,l.kt)("img",{width:"1000",src:"/img/docs/working_with_json1.png"})),(0,l.kt)("h2",{id:"multiline"},"Multiline:"),(0,l.kt)("p",null,"Each line must contain a separate, self-contained valid JSON object. "),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"id": 0001, "name": "John", "address": \u201cBroward County\u201d }\n\n{"id": 0002, "name": "Lynda", "address": \u201cVelcore line\u201d}\n\n{"id": 0003, "name": "Roan", "address": \u201cTarell street\u201d}\n')),(0,l.kt)("p",null,"When Multi-line is true Guzzle expects Data in the following way:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"regular multi-line JSON file or entire file is a singular JSON object / array")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"it should be one singular valid JSON object / array"))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"every object in that array or object is separated by commas (because that single JSON object/array should valid)"))),(0,l.kt)("p",null," for example:"),(0,l.kt)("p",null,"  ["),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{"id": 0001, "name": "Lynda", "address": \u201cBroward County\u201d }\n\n{"id": 0002, "name": "Lynda", "address": \u201cVelcore line\u201d}\n\n{"id": 0003, "name": "Roan", "address": \u201cTarell street\u201d}\n')),(0,l.kt)("p",null,"  ]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"**Fig 1.1** Entire file is a singular Json Array\n")),(0,l.kt)("p",null,"  {"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  "Addresse1": {\n\n        "address":\n\n            [\n\n                { "id": "1001", "street": "Broward County" },\n\n                { "id": "1002", "street": "Velcore line" }\n\n            ]\n\n    },\n\n"Addresses2": {\n\n        "address":\n\n            [\n\n                { "id": "1001", "street": "Broward County" },\n\n                { "id": "1002", "street": "Velcore line" }\n\n            ]\n\n    },\n\n  "Addresses3": {\n\n        "address":\n\n            [\n\n                { "id": "1001", "street": "Broward County" },\n\n                { "id": "1002", "street": "Velcore line" }\n\n            ]\n\n    }\n')),(0,l.kt)("p",null,"  }"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"**Fig 1.2**  File as Singular Json object\n")),(0,l.kt)("h1",{id:"illustrations"},"Illustrations"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"JSON file containing with single object separated")),(0,l.kt)("p",null,'  {"id": 0001, "name": "John", "address": \u201cBroward County\u201d}'),(0,l.kt)("p",null,'  {"id": 0002, "name": "Lynda", "address": \u201cVelcore line\u201d}'),(0,l.kt)("p",null,'  {"id": 0003, "name": "Roan", "address": \u201cTarbell street\u201d}'),(0,l.kt)("p",null,"Multiline : true"),(0,l.kt)("p",null,"Sample Output when multiline is ",(0,l.kt)("strong",{parentName:"p"},"true")," is shown below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"address"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"001"),(0,l.kt)("td",{parentName:"tr",align:null},"John"),(0,l.kt)("td",{parentName:"tr",align:null},"Broward County")))),(0,l.kt)("p",null,"Sample Output when multiline is ",(0,l.kt)("strong",{parentName:"p"},"false")," is shown below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"address"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"001"),(0,l.kt)("td",{parentName:"tr",align:null},"John"),(0,l.kt)("td",{parentName:"tr",align:null},"Broward County")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"002"),(0,l.kt)("td",{parentName:"tr",align:null},"Lynda"),(0,l.kt)("td",{parentName:"tr",align:null},"Velcore line")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"003"),(0,l.kt)("td",{parentName:"tr",align:null},"Roan"),(0,l.kt)("td",{parentName:"tr",align:null},"Tarbell street")))),(0,l.kt)("h2",{id:"json-file-containing-array-with-multi-line"},"JSON file containing array with multi line"),(0,l.kt)("p",null,"Sample source data (Customer.json) :"),(0,l.kt)("p",null,"["),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n\n    "id": "0001",\n\n    "name": "John",\n\n    "addresses":\n\n    {\n\n        "address":\n\n            [\n\n                { "id": "1001", "street": "Broward County" },\n\n                { "id": "1002", "street": "Velcore line" }\n\n            ]\n\n    }\n\n},\n\n{\n\n    "id": "0002",\n\n    "name": "Lynda",\n\n    "addresses":\n\n        {\n\n            "address":\n\n                [\n\n                    { "id": "1001", "street": "Broward County" },\n\n                    { "id": "1002", "street": "Velcore line" }\n\n                ]\n\n        }\n\n},\n\n{\n\n    "id": "0003",\n\n    "name": "Roan",\n\n    "addresses":\n\n        {\n\n            "address":\n\n                [\n\n                    { "id": "1001", "street": "Broward County" },\n\n                    { "id": "1002", "street": "Velcore line" }\n\n                ]\n\n        }\n\n}\n')),(0,l.kt)("p",null,"]"),(0,l.kt)("p",null,"When multiline is set to false Guzzle will treat the entire file like a single JSON object."),(0,l.kt)("p",null,"Job Config (json_with_multiline_false): "),(0,l.kt)("p",null,"version: 1\njob:\ntype: ingestion\nsource:\nendpoint: local files\nproperties:\nsource_file_pattern: json/customer1.json\nformat: json\ncharset: UTF-8\npartial_load: false\nformat_properties:\nclean_column_name: false\nmultiline: false"),(0,l.kt)("p",null,"Sample Output when multiline is false is shown below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"addresses"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0001"),(0,l.kt)("td",{parentName:"tr",align:null},"John"),(0,l.kt)("td",{parentName:"tr",align:null},"[","[1001, Broward County]",",","[1002, Velcore line]","]")))),(0,l.kt)("p",null,"When multiline is set to true Guzzle will treat the entire file like a single JSON object."),(0,l.kt)("p",null,"Job Config (json_with_multiline_true): "),(0,l.kt)("p",null,"version: 1"),(0,l.kt)("p",null,"job:"),(0,l.kt)("p",null,"  type: ingestion"),(0,l.kt)("p",null,"source:"),(0,l.kt)("p",null,"  endpoint: local files"),(0,l.kt)("p",null,"  properties:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"source_file_pattern: json/customer1.json\n\nformat: json\n\ncharset: UTF-8\n\npartial_load: false\n\nformat_properties:\n\n  clean_column_name: false\n\n  multiline: true\n")),(0,l.kt)("p",null,"Sample Output when multiline is True is shown below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ID"),(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"addresses")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0001"),(0,l.kt)("td",{parentName:"tr",align:null},"John"),(0,l.kt)("td",{parentName:"tr",align:null},"[","[1001, Broward County]",",   ","[1002, Velcore line]","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0002"),(0,l.kt)("td",{parentName:"tr",align:null},"Lynda"),(0,l.kt)("td",{parentName:"tr",align:null},"[","[1001, Broward County]",",   ","[1002, Velcore line]","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0003"),(0,l.kt)("td",{parentName:"tr",align:null},"Roan"),(0,l.kt)("td",{parentName:"tr",align:null},"[","[1001, Broward County]",",   ","[1002, Velcore line]","]")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Every object in the array is separated by a comma"))),(0,l.kt)("h2",{id:"column-mapping-in-json-files"},"Column Mapping in JSON Files"),(0,l.kt)("p",null,"We can also add Column Mapping to specify how to map columns in the source file. This is applicable for files which are having headers or without header. Column Mapping in JSON helps in mapping the columns to a new Column Name as shown here:"),(0,l.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/working_with_json2.png",target:"_self"},(0,l.kt)("img",{width:"1000",src:"/img/docs/working_with_json2.png"})),(0,l.kt)("h2",{id:"here-we-have-mapped-the-columns-to-a-new-column-name-name-is-mapped-to-first_name-and-created_time-is-mapped-to-time"},"Here we have mapped the columns to a new Column Name. name is mapped to first_name and created_time is mapped to time."),(0,l.kt)("p",null,"x"),(0,l.kt)("p",null,' {"id": 0001, "name": "John", "address": \u201cBroward County\u201d}'),(0,l.kt)("p",null,' {"id": 0002, "name": "Lynda", "address": \u201cVelcore line\u201d}'),(0,l.kt)("p",null,' {"id": 0003, "name": "Roan", "address": \u201cTarell street\u201d}'),(0,l.kt)("p",null,"Config: "),(0,l.kt)("p",null,"version: 1"),(0,l.kt)("p",null,"job:"),(0,l.kt)("p",null,"  type: ingestion"),(0,l.kt)("p",null,"source:"),(0,l.kt)("p",null,"  endpoint: json_files"),(0,l.kt)("p",null,"  properties:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"source_file_pattern: customer.json\n\nformat: json\n\ncharset: UTF-8\n\npartial_load: false\n\nformat_properties:\n\n  clean_column_name: false\n\n  multiline: true\n")),(0,l.kt)("p",null,"  column_mapping:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"name: first_name\n\naddress: address_line1\n\nid: customer_id\n")),(0,l.kt)("p",null,"Sample output: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"customer_id"),(0,l.kt)("th",{parentName:"tr",align:null},"first_name"),(0,l.kt)("th",{parentName:"tr",align:null},"address_line1"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0001"),(0,l.kt)("td",{parentName:"tr",align:null},"John"),(0,l.kt)("td",{parentName:"tr",align:null},"Broward County")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0002"),(0,l.kt)("td",{parentName:"tr",align:null},"Lynda"),(0,l.kt)("td",{parentName:"tr",align:null},"Velcore line")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0003"),(0,l.kt)("td",{parentName:"tr",align:null},"Roan"),(0,l.kt)("td",{parentName:"tr",align:null},"Tarrel street")))),(0,l.kt)("h2",{id:"if-file-has-multiline-customerjson"},"If file has multiline (Customer.json)"),(0,l.kt)("p",null,"  column_mapping:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"addresses.address: address_line1\n")),(0,l.kt)("p",null,"Sample Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"address_line1"),(0,l.kt)("th",{parentName:"tr",align:null},"addresses"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0001"),(0,l.kt)("td",{parentName:"tr",align:null},"John"),(0,l.kt)("td",{parentName:"tr",align:null},"Broward County"),(0,l.kt)("td",{parentName:"tr",align:null},"[","[1001, Broward County]",",   ","[1002, Velcore line]","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0002"),(0,l.kt)("td",{parentName:"tr",align:null},"Lynda"),(0,l.kt)("td",{parentName:"tr",align:null},"Velcore line"),(0,l.kt)("td",{parentName:"tr",align:null},"[","[1001, Broward County]",",   ","[1002, Velcore line]","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0003"),(0,l.kt)("td",{parentName:"tr",align:null},"Roan"),(0,l.kt)("td",{parentName:"tr",align:null},"Tarrel street"),(0,l.kt)("td",{parentName:"tr",align:null},"[","[1001, Broward County]",",   ","[1002, Velcore line]","]")))))}u.isMDXComponent=!0}}]);