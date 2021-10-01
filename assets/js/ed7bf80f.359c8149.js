(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[6742],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return p}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||n;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1550:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var o=a(2122),r=a(9756),n=(a(7294),a(3905)),i=["components"],l={id:"ingest_blob_to_azureSQL",title:"Ingest Data from Azure Blob Storage to AzureSQL Database"},s={unversionedId:"Tutorials/ingest_blob_to_azureSQL",id:"Tutorials/ingest_blob_to_azureSQL",isDocsHomePage:!1,title:"Ingest Data from Azure Blob Storage to AzureSQL Database",description:"Ingest Data from Azure Blob Storage to Azure SQL Table",source:"@site/docs/Tutorials/Ingest Data Blob to AzureSQL.md",sourceDirName:"Tutorials",slug:"/Tutorials/ingest_blob_to_azureSQL",permalink:"/docs/Tutorials/ingest_blob_to_azureSQL",editUrl:"https://github.com/ja-guzzle/docs/blob/master/docs/Tutorials/Ingest Data Blob to AzureSQL.md",version:"current",frontMatter:{id:"ingest_blob_to_azureSQL",title:"Ingest Data from Azure Blob Storage to AzureSQL Database"},sidebar:"sideBar",previous:{title:"Ingest Data from Azure Blob Storage to Delta Table",permalink:"/docs/Tutorials/ingest_data_from_azure_blob_storage_to_delta_table"},next:{title:"Ingest Data from REST Api to JDBC Database",permalink:"/docs/Tutorials/ingest_data_from_rest_api_to_jdbc"}},u=[{value:"In this tutorial we cover",id:"in-this-tutorial-we-cover",children:[]},{value:"Pre-Requisites",id:"pre-requisites",children:[]},{value:"Load Dataset from Blob Storage to the Guzzle Platform through its Source Section",id:"load-dataset-from-blob-storage-to-the-guzzle-platform-through-its-source-section",children:[]},{value:"Perform Validations and Transformations on the Dataset to check the accuracy of Data",id:"perform-validations-and-transformations-on-the-dataset-to-check-the-accuracy-of-data",children:[]},{value:"Loading or configuring the Source Dataset to a Target Dataset or Table",id:"loading-or-configuring-the-source-dataset-to-a-target-dataset-or-table",children:[]},{value:"Applying a Failure Threshold to the Loaded Data to check the consistency and viability of the Data as a whole",id:"applying-a-failure-threshold-to-the-loaded-data-to-check-the-consistency-and-viability-of-the-data-as-a-whole",children:[]}],c={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ingest Data from Azure Blob Storage to Azure SQL Table"),(0,n.kt)("p",null,"This tutorial will be covering an end to end use-case of loading data from an Azure Blob storage to a table in AzureSQL.  It will be using Guzzle\u2019s ingestion activity which allows moving data from any source dataset to a target dataset applying various validations, transformations and rejections."),(0,n.kt)("h2",{id:"in-this-tutorial-we-cover"},"In this tutorial we cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pre-Requisites")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Load Dataset from Azure Blob storage to the Guzzle Platform through its Source Section")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Perform Validations and Transformations on the Dataset to check the accuracy of Data in order to mitigate any project defects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Loading or configuring the Source Dataset to a Target Dataset or Table")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Applying a Failure Threshold to the Loaded Data to check the consistency and viability of the Data as a whole"))),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Since we use Guzzle as our Data Engineering Workbench for movement and transformation we must ensure it is set up and configured properly. Guzzle supports both on-premise and cloud deployment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure that the file is saved in an available Source Location. This is essential as the Data will be ingested from Azure Blob storage.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We can not use azure blob storage directly but as Storage account is mounted with azure databricks so by using mounted path and guzzle will help to fetch data from blob storage.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure that the Target Location is available in order to prevent any errors after the Data has been Transformed and Validated.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Guzzle should be configured to support Azure Databricks and MYSQL. This is essential as we will be using a Azure Databricks and AzureSQL table in this tutorial. It will also help in exploiting all of Guzzle\u2019s Features."))),(0,n.kt)("h2",{id:"load-dataset-from-blob-storage-to-the-guzzle-platform-through-its-source-section"},"Load Dataset from Blob Storage to the Guzzle Platform through its Source Section"),(0,n.kt)("p",null,"The first step in the Ingestion Process would be to deal with the Source Section of Guzzle. Guzzle\u2019s Source Section provides many features including specifying the file names, location of the file and the file format."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Datastore option choose the Dataset you would like Guzzle to work on. Ensure that the Dataset is stored in the Storage Container(Blob Storage) before choosing it and select the datastore DBFS because the storage account is mounted so Guzzle will fetch data from there.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Under the File Format choose the required File Type. Guzzle provides options from the delimited which is a fixed length system to multi-structured systems XML, JSON, REG-EXP.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"According to your requirements you may choose to Trim Whitespaces, Introduce Headers and Infer Schema.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Guzzle also provides a feature to Sample your Data. This option can be seen in the top right corner of the Interface."))),(0,n.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/tutorials/ingest_data_from_blob_to_delta_1.png",target:"_self"},(0,n.kt)("img",{width:"1000",src:"/img/docs/tutorials/ingest_data_from_blob_to_delta_1.png"})),(0,n.kt)("p",null,"As seen above we have chosen the Delimited Format with the csv file pattern. The option to Preview Data can also be seen in the Top Right Corner."),(0,n.kt)("p",null,"After clicking on preview data : "),(0,n.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/tutorials/ingest_blob_to_azuresql_2.jpg",target:"_self"},(0,n.kt)("img",{width:"1000",src:"/img/docs/tutorials/ingest_blob_to_azuresql_2.jpg"})),(0,n.kt)("h2",{id:"perform-validations-and-transformations-on-the-dataset-to-check-the-accuracy-of-data"},"Perform Validations and Transformations on the Dataset to check the accuracy of Data"),(0,n.kt)("p",null,"The next step would be to perform Validations and Transformations on the Data . This is done to mitigate any project defects and will produce the best results possible. Guzzle helps in making Data Integration a much quicker process as it Automates the Validation Process."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the Name of the Column you would like to perform the Validation or Transformation on.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For Transformations you can enter the Transformation you would like to perform on the chosen Column. For Example- If the distance is in miles you can convert it to kilometers by entering distance*1.6 in the Transformation Section.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You may also choose to Validate the Data Type of the Column. In the Data Type Section choose the Data Type you would like to Validate the Column with.  Also tick the Validate Data Type box located next to it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You may also Validate the Column to be either Unique or Nullable. Just check the respective boxes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the SQL Validation you may enter a condition in order to Partition the Columns depending on whether or not they satisfy the given condition. You can run your validations by clicking the tick at the top of your interface."))),(0,n.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/tutorials/ingest_blob_to_azuresql_3.jpg",target:"_self"},(0,n.kt)("img",{width:"1000",src:"/img/docs/tutorials/ingest_blob_to_azuresql_3.jpg"})),(0,n.kt)("p",null,"Here we have Validated the Columns avee1, avee2 and difference for their data types and entered a condition to partition the column avee1 and avee2 while validating its Nullability and also, given SQL validation in the column difference."),(0,n.kt)("h2",{id:"loading-or-configuring-the-source-dataset-to-a-target-dataset-or-table"},"Loading or configuring the Source Dataset to a Target Dataset or Table"),(0,n.kt)("p",null,"We now have to load the Source Dataset to a Target Dataset or Table. Guzzle provides many different Datastores from Local Files, Delta Tables, MySQL and Azure SQL. It allows configuring a Target Partition Scheme."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Datastore option choose the Target you would like to configure the Source Dataset to according to your requirement. Here we choose theAzureSQL as we are ingesting Data into an AzureSQL Table.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We can perform some operations like append and overwrite in the table. If the user wants to concatenate data then the user chooses to append and if the user wants to replace the whole data then the user chooses to overwrite.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Additionally, user can perform many other operations like Reliability level , Isolation Level,  Table Lock, Batch Size, Bulk Copy TImeout, and many others. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We can now give any name to the Target in the Table Section. We can again Sample the Data through the Sample Data or Preview Data option given in the top right corner."))),(0,n.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/tutorials/ingest_blob_to_azuresql_4.png",target:"_self"},(0,n.kt)("img",{width:"1000",src:"/img/docs/tutorials/ingest_blob_to_azuresql_4.png"})),(0,n.kt)("p",null,"Here we have chosen Azure SQL as our Datastore and assigned the name stocks to our Table."),(0,n.kt)("h2",{id:"applying-a-failure-threshold-to-the-loaded-data-to-check-the-consistency-and-viability-of-the-data-as-a-whole"},"Applying a Failure Threshold to the Loaded Data to check the consistency and viability of the Data as a whole"),(0,n.kt)("p",null,"We now move onto the Reject Section where we deal with the Data which does not pass our Validations. This helps to check the consistency and viability of the Data as a whole."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We first choose the Datastore where we like to store the Rejects which do not pass our Validations. The Datastores we can choose range from Text Files to Tables.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We may also choose to apply a Failure Threshold which is basically the maximum percentage of failed records which our dataset can have."))),(0,n.kt)("a",{href:"https://guzzle.justanalytics.com/img/docs/tutorials/reject_section_0.png",target:"_self"},(0,n.kt)("img",{width:"1000",src:"/img/docs/tutorials/reject_section_0.png"})),(0,n.kt)("p",null,"Here we store our rejects in a Local File in the Delimited Format and apply a Failure Threshold of 25%."))}h.isMDXComponent=!0}}]);