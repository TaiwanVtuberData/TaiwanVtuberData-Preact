(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0KPN":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("hosL"),i=r("OhSV"),o="thumbnail__BdvoG",a=function(t){return Object(n.h)("a",{href:t.videoUrl,target:"_blank",rel:"noopener noreferrer"},Object(n.h)("img",{class:o,src:t.thumbnailUrl,loading:"lazy"}))},c=function(){return{name:Object(n.h)(i.c,{id:"table.video"},"Video"),cell:function(t){return a({thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl})}}}},CGiE:function(t,e,r){"use strict";var n=r("hosL"),i=r("+Ox3"),o="container__vr1DG",a="profileImageFlex__4VERG",c="nameFlex__WFOO9";e.a=function(t){return Object(n.h)("div",{class:o},Object(n.h)("div",{class:a},Object(n.h)(i.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(n.h)("span",{class:c},t.name))}},L9Wd:function(t,e,r){"use strict";var n=r("hosL"),i="container__1lsi6",o="textField__bDpXR",a="button__maFzS";e.a=function(t){return Object(n.h)("div",{class:i},Object(n.h)("input",{type:"text",class:o,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(n.h)("button",{type:"button",class:a,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,r){"use strict";var n=r("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:n.a}}},MJ1U:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return a}));var n=r("hosL"),i=r("OhSV"),o=r("GKGp"),a=function(){var e=Object(o.a)();switch(e){case"TW":case"HK":case"MY":return Object(n.h)(t,null," ","(",Object(n.h)(i.c,{id:"text.onlyShowing"},"only showing "),Object(n.h)(i.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,r("hosL").Fragment)},h5Od:function(t,e,r){"use strict";r.r(e),function(t){function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}function i(t,e,r,n,i,o,a){try{var c=t[o](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,i)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);a=!0);}catch(t){c=!0,i=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=r("drLk"),d=r("hosL"),f=r("OhSV"),h=r("QRet"),b=r("ENxA"),p=r("CGiE"),m=r("L9Wd"),O=r("0KPN"),v=r("8r9F"),y=r("LftB"),g=r("MJ1U"),j=r("v6a3"),w=r("uZiY");e.default=function(e){document.title="".concat(e.dictionary.header.livestreaming," | ").concat(e.dictionary.header.title);var r=[{name:Object(d.h)(f.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(d.h)(p.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name})},width:"200px"},l(l({},Object(O.a)()),{},{width:"200px"}),{name:Object(d.h)(f.c,{id:"table.startTime"},"Start Time"),selector:function(t){return Object(v.b)(t.startTime)},sortable:!0,width:"175px"},{name:Object(d.h)(f.c,{id:"table.title"},"Title"),selector:function(t){return t.title},wrap:!0}],a=o(Object(h.k)([]),2),c=a[0],u=a[1],x=o(Object(h.k)(""),2),T=x[0],L=x[1],U=o(Object(h.k)(""),2),C=U[0],S=U[1],P=o(Object(h.k)(!1),2),_=P[0],k=P[1],F=c.filter((function(t){return t.name&&t.name.toLowerCase().includes(T.toLowerCase())})).filter((function(t){return void 0===t.title||t.title.toLowerCase().includes(C.toLowerCase())})),V=Object(h.h)((function(){return Object(d.h)("div",{class:w.a.searchBarGroup},Object(d.h)(m.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:function(t){return L(t.target.value)},onClear:function(){T&&(k(!_),L(""))},filterText:T}),Object(d.h)(m.a,{placeholderText:e.dictionary.table.searchByTitle,onFilter:function(t){return S(t.target.value)},onClear:function(){C&&(k(!_),S(""))},filterText:C}))}),[T,C,_,e.dictionary]),I=o(Object(h.k)(!0),2),D=I[0],B=I[1],G=function(){var t,e=(t=function*(){var t;yield s.g("all").then((function(e){t=e.data.livestreams.map((function(t){return t})).map((function(t,e){return Object(j.a)(t,e)})).sort((function(t,e){return t.startTime.getTime()-e.startTime.getTime()})),u(t),B(!1),setTimeout((function(){var e,r=Object(v.a)(t,new Date);null===(e=document.getElementById("row-".concat(Math.max(0,r-1))))||void 0===e||e.scrollIntoView({behavior:"smooth"})}),500)}))},function(){var e=this,r=arguments;return new Promise((function(n,o){function a(t){i(l,n,o,a,c,"next",t)}function c(t){i(l,n,o,a,c,"throw",t)}var l=t.apply(e,r);a(void 0)}))});return function(){return e.apply(this,arguments)}}();Object(h.d)((function(){G()}),[]);return Object(d.h)(t,null,Object(d.h)("h1",null,Object(d.h)(f.c,{id:"header.livestreaming"},"Streaming Now"),Object(g.a)()),Object(d.h)(b.a,n({},y.a,{columns:r,data:F,customStyles:{rows:{style:{height:"120px"}},headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}},fixedHeader:!0,progressComponent:Object(d.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:D,subHeader:!0,subHeaderComponent:V})))}}.call(this,r("hosL").Fragment)},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},v6a3:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t,e){return{id:e,VTuberId:t.id,name:t.name,imgUrl:t.imgUrl,title:t.title,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:new Date(t.startTime)}}}}]);
//# sourceMappingURL=route-Livestreams.chunk.b7f36.js.map