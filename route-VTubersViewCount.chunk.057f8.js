(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+Ox3":function(t,e,n){"use strict";var r=n("hosL"),o=n("jUMG"),a="fixedSize__iw3af",i="profileImg__DvgtD";e.a=function(t){var e,n,c;return Object(r.h)("a",{href:"".concat(o.a,"/vtuber/").concat(t.VTuberId)},Object(r.h)("img",{class:"".concat(t.size?a:i),src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(n=t.size)&&void 0!==n?n:void 0,height:null!==(c=t.size)&&void 0!==c?c:void 0}))}},"4BB4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("hosL"),o=n("OhSV"),a="container__ajzPI",i="YouTubeImg__LvwUa",c="TwitchImg__ckBvR",u=function(t){var e=function(t,e,n){return void 0===n?null:Object(r.h)("a",{href:e+n,target:"_blank",rel:"noopener noreferrer"},Object(r.h)("img",{class:t}))};return Object(r.h)("div",{class:a},e(i,"https://www.youtube.com/channel/",t.YouTubeId),e(c,"https://www.twitch.tv/",t.TwitchId))},l=n("+Ox3"),s="container__VQnrV",d="profileImageFlex__NQP5p",f="nameFlex__DDBDq",h="channelLinksFlex__AtHrx",p=function(t){return Object(r.h)("div",{class:s},Object(r.h)("div",{class:d},Object(r.h)(l.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(r.h)("span",{class:f},t.name),Object(r.h)("div",{class:h},Object(r.h)(u,t)))},b=function(){return{name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(p,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name,YouTubeId:t.YouTubeId,TwitchId:t.TwitchId})}}}},"7Asn":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),a=n("jUMG"),i=n("uZiY"),c=function(){return{name:Object(r.h)(o.c,{id:"table.group"},"Group"),cell:function(t){return""!==t.group?Object(r.h)("a",{class:i.a.groupLink,href:"".concat(a.a,"/group/").concat(t.group)},t.group):null}}}},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},a=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(r(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff));case"full":return"".concat(r(t.diff))}}},HP4b:function(t,e,n){"use strict";var r=n("hosL"),o="tipText__4DHD3",a="dropDown__6WU99";e.a=function(t){return Object(r.h)("div",null,Object(r.h)("span",{class:o},t.tipText),Object(r.h)("select",{class:a,value:t.value,onChange:t.onChange},void 0!==t.optionValue?t.optionValue.map((function(t){return Object(r.h)("option",{key:t.value,value:t.value},t.option)})):null))}},"JY+X":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("hosL"),o=n("OhSV"),a=function(){return{name:Object(r.h)(o.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""}}}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",a="textField__bDpXR",i="button__maFzS";e.a=function(t){return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:a,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:i,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},OSfN:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var s=n("hosL"),d=n("QRet"),f=n("OhSV"),h=n("ENxA"),p=n("jUMG"),b=n("L9Wd"),y=n("drLk"),w=n("LftB"),O=(n("GFNa"),n("uZiY")),v=n("L9y4"),g=n("Dy4S"),m=n("4BB4"),j=n("HP4b"),T=n("69ZN"),x=n("sKFU"),_=n("7Asn"),V=n("JY+X");e.default=function(t){document.title="".concat(t.dictionary.header.VTubersViewCount," | ").concat(t.dictionary.header.title);var e=[{name:"#",selector:function(t){return t.ranking},compact:!0,sortable:!0,wrap:!1,width:"30px"},u(u({},Object(T.a)()),{},{compact:!0}),{name:Object(s.h)(f.c,{id:"table.YouTubeTotalViewCount"},"YouTube Total View Count"),selector:function(t){return t.totalViewCount},compact:!0,right:!0,sortable:!0},{name:Object(s.h)(f.c,{id:"table._7DaysViewCountGrowth"},"7 Days Growth"),cell:function(e){return Object(g.a)(e._7DaysGrowth,t.dictionary.table)},compact:!0,right:!0,width:"100px",maxWidth:"200px"},{name:Object(s.h)(f.c,{id:"table._30DaysViewCountGrowth"},"30 Days Growth"),cell:function(e){return Object(g.a)(e._30DaysGrowth,t.dictionary.table)},compact:!0,right:!0,width:"100px",maxWidth:"200px"},u(u({},Object(x.a)()),{},{width:"100px"}),u(u({},Object(_.a)()),{},{maxWidth:"100px"}),u(u({},Object(V.a)()),{},{minWidth:"40px",maxWidth:"100px"})],n=a(Object(d.k)([]),2),i=n[0],c=n[1],l=a(Object(d.k)(""),2),A=l[0],D=l[1],C=a(Object(d.k)(""),2),L=C[0],G=C[1],I=a(Object(d.k)(!1),2),k=I[0],S=I[1],Y=i.filter((function(t){return t.name&&t.name.toLowerCase().includes(A.toLowerCase())})).filter((function(t){return void 0===t.group||t.group.toLowerCase().includes(L.toLowerCase())})),B=Object(d.h)((function(){var e=[{option:Object(s.h)(f.c,{id:"table._7DaysViewCountGrowth"},"7 Days Growth"),value:"7-days"},{option:Object(s.h)(f.c,{id:"table._30DaysViewCountGrowth"},"30 Days Growth"),value:"30-days"}];return Object(s.h)("div",{class:O.a.searchBarGroup},Object(s.h)(j.a,{tipText:t.dictionary.table.sortingMethod,value:t.modifier,optionValue:e,onChange:function(t){window.location.href="".concat(p.a,"/vtubers-view-count/").concat(t.target.value)}}),Object(s.h)(b.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return D(t.target.value)},onClear:function(){A&&(S(!k),D(""))},filterText:A}),Object(s.h)(b.a,{placeholderText:t.dictionary.table.searchByGroup,onFilter:function(t){return G(t.target.value)},onClear:function(){L&&(S(!k),G(""))},filterText:L}))}),[A,L,k,t.modifier,t.dictionary]),P=a(Object(d.k)(!0),2),U=P[0],F=P[1],R=function(t,e){return e.YouTube._7DaysGrowth.diff-t.YouTube._7DaysGrowth.diff},N=function(t,e){return e.YouTube._30DaysGrowth.diff-t.YouTube._30DaysGrowth.diff},H=function(){var e,n=(e=function*(){yield y.l({sortBy:t.modifier,count:"100"}).then((function(e){c(e.data.VTubers.map((function(t){return t})).map((function(t){return t})).sort(function(t){switch(t){case"7-days":return R;case"30-days":return N}}(t.modifier)).map((function(t,e){return function(t,e){var n,r;return{id:t.id,name:t.name,imgUrl:t.imgUrl,YouTubeId:t.YouTube.id,TwitchId:null===(n=t.Twitch)||void 0===n?void 0:n.id,totalViewCount:t.YouTube.totalViewCount,_7DaysGrowth:t.YouTube._7DaysGrowth,_30DaysGrowth:t.YouTube._30DaysGrowth,popularVideo:t.popularVideo,group:null!==(r=t.group)&&void 0!==r?r:"",nationality:t.nationality,activity:t.activity,ranking:e}}(t,e+1)}))),F(!1)}))},function(){var t=this,n=arguments;return new Promise((function(r,a){function i(t){o(u,r,a,i,c,"next",t)}function c(t){o(u,r,a,i,c,"throw",t)}var u=e.apply(t,n);i(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(d.d)((function(){H()}),[]),Object(s.h)(s.Fragment,null,Object(s.h)("h1",null,Object(s.h)(f.c,{id:"header.VTubersViewCount"},"VTubers View Count Change")),Object(s.h)(h.a,r({},w.a,{columns:e,data:Y,conditionalRowStyles:v.a,customStyles:m.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:t.dictionary.table.paginationOptions,progressComponent:Object(s.h)(f.c,{id:"table.loading"},"Loading..."),progressPending:U,subHeader:!0,subHeaderComponent:B})))}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),a=n("Ud9u"),i=Object(o.d)("text.showVideo")((function(t){return Object(r.h)("input",{type:"button",value:t.showVideo,onClick:function(){return Object(a.a)(t.popularVideo)}})})),c=function(){return{name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(r.h)(i,{popularVideo:t.popularVideo}):null}}}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-VTubersViewCount.chunk.057f8.js.map