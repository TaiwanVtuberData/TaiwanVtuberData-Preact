(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Ox3":function(e,t,r){"use strict";var o=r("hosL"),a=r("jUMG"),n="fixedSize__iw3af",i="profileImg__DvgtD";t.a=e=>{var t,r,c;return Object(o.h)("a",{href:`${a.a}/vtuber/${e.VTuberId}`},Object(o.h)("img",{class:`${e.size?n:i}`,src:null!==(t=e.imgUrl)&&void 0!==t?t:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(r=e.size)&&void 0!==r?r:void 0,height:null!==(c=e.size)&&void 0!==c?c:void 0}))}},"69ZN":function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var o=r("hosL"),a=r("OhSV"),n="container__ajzPI",i="YouTubeImg__LvwUa",c="TwitchImg__ckBvR";var s=e=>{const t=(e,t,r)=>void 0===r?null:Object(o.h)("a",{href:t+r,target:"_blank",rel:"noopener noreferrer"},Object(o.h)("img",{class:e}));return Object(o.h)("div",{class:n},t(i,"https://www.youtube.com/channel/",e.YouTubeId),t(c,"https://www.twitch.tv/",e.TwitchId))},u=r("+Ox3"),l="container__VQnrV",b="profileImageFlex__NQP5p",d="nameFlex__DDBDq",h="channelLinksFlex__AtHrx";var p=e=>Object(o.h)("div",{class:l},Object(o.h)("div",{class:b},Object(o.h)(u.a,{VTuberId:e.VTuberId,imgUrl:e.imgUrl})),Object(o.h)("span",{class:d},e.name),Object(o.h)("div",{class:h},Object(o.h)(s,e)));const O=()=>({name:Object(o.h)(a.c,{id:"table.displayName"},"Name"),cell:e=>Object(o.h)(p,{VTuberId:e.id,imgUrl:e.imgUrl,name:e.name,YouTubeId:e.YouTubeId,TwitchId:e.TwitchId})})},"7Asn":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("hosL"),a=r("OhSV"),n=r("jUMG"),i=r("uZiY");const c=()=>({name:Object(o.h)(a.c,{id:"table.group"},"Group"),cell:e=>""!==e.group?Object(o.h)("a",{class:i.a.groupLink,href:`${n.a}/group/${e.group}`},e.group):null})},Dy4S:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const o=e=>e>0?`+${e}`:e<0?`${e}`:"0",a=e=>(100*e).toFixed(2),n=(e,t)=>{if(e.percentage)switch(e.recordType){case"none":return t.noRecord;case"partial":return`${t.atLeast} ${o(e.diff)} (${a(e.percentage)}%)`;case"full":return`${o(e.diff)} (${a(e.percentage)}%)`}switch(e.recordType){case"none":return t.noRecord;case"partial":return`${t.atLeast} ${o(e.diff)}`;case"full":return`${o(e.diff)}`}}},"JY+X":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("hosL"),a=r("OhSV");const n=()=>({name:Object(o.h)(a.c,{id:"table.nationality"},"Nationality"),selector:e=>{var t;return null!==(t=e.nationality)&&void 0!==t?t:""}})},L9Wd:function(e,t,r){"use strict";var o=r("hosL"),a="container__1lsi6",n="textField__bDpXR",i="button__maFzS";t.a=e=>Object(o.h)("div",{class:a},Object(o.h)("input",{type:"text",class:n,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(o.h)("button",{type:"button",class:i,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,r){"use strict";var o=r("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:o.a})},UBrP:function(e,t,r){"use strict";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},o.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var c=r("hosL"),s=r("QRet"),u=r("OhSV"),l=r("ENxA"),b=r("L9Wd"),d=r("drLk"),h=r("LftB"),p=(r("GFNa"),r("uZiY")),O=r("L9y4");const g=(e,t)=>{const r=e._7DaysGrowth.percentage,o=t._7DaysGrowth.percentage;return r>o?1:o>r?-1:0},w=(e,t)=>{const r=e._30DaysGrowth.percentage,o=t._30DaysGrowth.percentage;return r>o?1:o>r?-1:0};var f=r("Dy4S"),y=r("y7vS"),j=r("69ZN"),v=r("sKFU"),m=r("7Asn"),_=r("JY+X");t.default=e=>{document.title=`${e.dictionary.header.growingVTubers} | ${e.dictionary.header.title}`;const t=[n(n({},Object(j.a)()),{},{compact:!0}),{name:Object(c.h)(u.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:e=>e.YouTubeSubscriberCount,compact:!0,right:!0,sortable:!0},{name:Object(c.h)(u.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),sortFunction:g,cell:t=>Object(f.a)(t._7DaysGrowth,e.dictionary.table),compact:!0,right:!0,sortable:!0,width:"150px",maxWidth:"250px"},{name:Object(c.h)(u.c,{id:"table._30DaysGrowth"},"30 Days Growth (Percent)"),cell:t=>Object(f.a)(t._30DaysGrowth,e.dictionary.table),sortFunction:w,compact:!0,right:!0,sortable:!0,width:"150px",maxWidth:"250px"},n(n({},Object(v.a)()),{},{width:"100px"}),n(n({},Object(m.a)()),{},{compact:!0,maxWidth:"100px"}),n(n({},Object(_.a)()),{},{compact:!0,minWidth:"25px",maxWidth:"100px"})],[r,a]=Object(s.k)([]),[i,T]=Object(s.k)(""),[x,A]=Object(s.k)(""),[D,L]=Object(s.k)(!1),G=r.filter((e=>e.name&&e.name.toLowerCase().includes(i.toLowerCase()))).filter((e=>void 0===e.group||e.group.toLowerCase().includes(x.toLowerCase()))),V=Object(s.h)((()=>Object(c.h)("div",{class:p.a.searchBarGroup},Object(c.h)(b.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:e=>T(e.target.value),onClear:()=>{i&&(L(!D),T(""))},filterText:i}),Object(c.h)(b.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:e=>A(e.target.value),onClear:()=>{x&&(L(!D),A(""))},filterText:x}))),[i,x,D,e.dictionary]),S=(e,t)=>n(n({},e),{},{percentage:void 0!==t&&0!==t?e.diff/t:0}),[C,I]=Object(s.k)(!0),Y=async()=>{await d.f("100").then((e=>{a(e.data.VTubers.map((e=>e)).map((e=>(e=>{var t,r,o;return{id:e.id,name:e.name,imgUrl:e.imgUrl,YouTubeId:e.YouTube.id,TwitchId:null===(t=e.Twitch)||void 0===t?void 0:t.id,YouTubeSubscriberCount:null!==(r=e.YouTube.subscriberCount)&&void 0!==r?r:0,_7DaysGrowth:S(e.YouTube._7DaysGrowth,e.YouTube.subscriberCount),_30DaysGrowth:S(e.YouTube._30DaysGrowth,e.YouTube.subscriberCount),popularVideo:e.popularVideo,group:null!==(o=e.group)&&void 0!==o?o:"",nationality:e.nationality,activity:e.activity}})(e))).sort(((e,t)=>t._7DaysGrowth.percentage-e._7DaysGrowth.percentage))),I(!1)}))};return Object(s.d)((()=>{Y()}),[]),Object(c.h)(c.Fragment,null,Object(c.h)("h1",null,Object(c.h)(u.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(c.h)(y.a,{width:"300px",fontSize:"13px",text:Object(c.h)(u.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(c.h)(l.a,o({},h.a,{columns:t,data:G,conditionalRowStyles:O.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(c.h)(u.c,{id:"table.loading"},"Loading..."),progressPending:C,subHeader:!0,subHeaderComponent:V})))}},qO1o:function(e,t,r){"use strict";var o=r("hosL"),a="tooltip__vtGmz",n="tooltipText__pA-zc";t.a=e=>Object(o.h)("div",{class:a},e.children,Object(o.h)("span",{class:n,style:{width:e.width,fontSize:e.fontSize}},e.text))},sKFU:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r("hosL"),a=r("OhSV"),n=r("Ud9u");const i=Object(a.d)("text.showVideo")((e=>Object(o.h)("input",{type:"button",value:e.showVideo,onClick:()=>Object(n.a)(e.popularVideo)}))),c=()=>({name:Object(o.h)(a.c,{id:"table.popularVideo"},"Popular Video"),cell:e=>void 0!==e.popularVideo?Object(o.h)(i,{popularVideo:e.popularVideo}):null})},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(e,t,r){"use strict";var o=r("hosL"),a=r("qO1o"),n="questionMark__RT3wD";t.a=e=>Object(o.h)(a.a,{text:e.text,width:e.width,fontSize:e.fontSize},Object(o.h)("img",{class:n}))}}]);
//# sourceMappingURL=route-GrowingVTubers.chunk.e8667.esm.js.map