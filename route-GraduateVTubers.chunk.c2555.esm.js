(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+Ox3":function(e,t,a){"use strict";var o=a("hosL"),r=a("jUMG"),i="fixedSize__iw3af",n="profileImg__DvgtD";t.a=e=>{var t,a,c;return Object(o.h)("a",{href:`${r.a}/vtuber/${e.VTuberId}`},Object(o.h)("img",{class:`${e.size?i:n}`,src:null!==(t=e.imgUrl)&&void 0!==t?t:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(a=e.size)&&void 0!==a?a:void 0,height:null!==(c=e.size)&&void 0!==c?c:void 0}))}},"69ZN":function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var o=a("hosL"),r=a("OhSV"),i="container__ajzPI",n="YouTubeImg__LvwUa",c="TwitchImg__ckBvR";var u=e=>{const t=(e,t,a)=>void 0===a?null:Object(o.h)("a",{href:t+a,target:"_blank",rel:"noopener noreferrer"},Object(o.h)("img",{class:e}));return Object(o.h)("div",{class:i},t(n,"https://www.youtube.com/channel/",e.YouTubeId),t(c,"https://www.twitch.tv/",e.TwitchId))},l=a("+Ox3"),s="container__VQnrV",b="profileImageFlex__NQP5p",d="nameFlex__DDBDq",h="channelLinksFlex__AtHrx";var p=e=>Object(o.h)("div",{class:s},Object(o.h)("div",{class:b},Object(o.h)(l.a,{VTuberId:e.VTuberId,imgUrl:e.imgUrl})),Object(o.h)("span",{class:d},e.name),Object(o.h)("div",{class:h},Object(o.h)(u,e)));const O=()=>({name:Object(o.h)(r.c,{id:"table.displayName"},"Name"),cell:e=>Object(o.h)(p,{VTuberId:e.id,imgUrl:e.imgUrl,name:e.name,YouTubeId:e.YouTubeId,TwitchId:e.TwitchId})})},"7Asn":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a("hosL"),r=a("OhSV"),i=a("jUMG"),n=a("uZiY");const c=()=>({name:Object(o.h)(r.c,{id:"table.group"},"Group"),cell:e=>""!==e.group?Object(o.h)("a",{class:n.a.groupLink,href:`${i.a}/group/${e.group}`},e.group):null})},"7DLW":function(e,t,a){"use strict";var o=a("hosL"),r=a("OhSV"),i=(a("GFNa"),"noWrap__BzT1O");t.a=e=>{const t=e=>Object(o.h)("span",{class:`${i} YouTubeRed`},null!=e?e:Object(o.h)(r.c,{id:"table.hiddenCount"},"hidden")),a=e=>Object(o.h)("span",{class:`${i} TwitchPurple`},e);return Object(o.h)(o.Fragment,null,Object(o.h)((e=>e.hasYouTube&&e.hasTwitch?Object(o.h)(o.Fragment,null,t(e.YouTubeSubscriberCount),Object(o.h)("span",{class:i}," + "),a(e.TwitchFollowerCount)):e.hasYouTube?Object(o.h)(o.Fragment,null,t(e.YouTubeSubscriberCount)):e.hasTwitch?Object(o.h)(o.Fragment,null,a(e.TwitchFollowerCount)):null),e))}},HSXE:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var o=a("hosL"),r=a("OhSV"),i=a("7DLW");const n=()=>({name:Object(o.h)(r.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:e=>Object(o.h)(i.a,{hasYouTube:e.hasYouTube,YouTubeSubscriberCount:e.YouTubeSubscriberCount,hasTwitch:e.hasTwitch,TwitchFollowerCount:e.TwitchFollowerCount})})},"JY+X":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a("hosL"),r=a("OhSV");const i=()=>({name:Object(o.h)(r.c,{id:"table.nationality"},"Nationality"),selector:e=>{var t;return null!==(t=e.nationality)&&void 0!==t?t:""}})},L9Wd:function(e,t,a){"use strict";var o=a("hosL"),r="container__1lsi6",i="textField__bDpXR",n="button__maFzS";t.a=e=>Object(o.h)("div",{class:r},Object(o.h)("input",{type:"text",class:i,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(o.h)("button",{type:"button",class:n,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,a){"use strict";var o=a("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:o.a})},TToT:function(e,t){"use strict";t.a=[{when:e=>e.isToday,style:{color:"mediumblue"}}]},qO1o:function(e,t,a){"use strict";var o=a("hosL"),r="tooltip__vtGmz",i="tooltipText__pA-zc";t.a=e=>Object(o.h)("div",{class:r},e.children,Object(o.h)("span",{class:i,style:{width:e.width,fontSize:e.fontSize}},e.text))},sKFU:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a("hosL"),r=a("OhSV"),i=a("Ud9u");const n=Object(r.d)("text.showVideo")((e=>Object(o.h)("input",{type:"button",value:e.showVideo,onClick:()=>Object(i.a)(e.popularVideo)}))),c=()=>({name:Object(o.h)(r.c,{id:"table.popularVideo"},"Popular Video"),cell:e=>void 0!==e.popularVideo?Object(o.h)(n,{popularVideo:e.popularVideo}):null})},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},ueNj:function(e,t,a){"use strict";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},o.apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t);var c=a("hosL"),u=a("QRet"),l=a("OhSV"),s=a("ENxA"),b=a("L9Wd"),d=a("drLk"),h=a("LftB"),p=(a("GFNa"),a("uZiY")),O=a("L9y4"),j=a("8r9F"),w=a("TToT"),g=a("y7vS"),v=a("69ZN"),T=a("HSXE"),f=a("sKFU"),m=a("7Asn"),y=a("JY+X");t.default=e=>{document.title=`${e.dictionary.header.graduateVTubers} | ${e.dictionary.header.title}`;const t=[{name:Object(c.h)(l.c,{id:"table.graduateDate"},"Graduation Date"),selector:e=>e.graduateDate,compact:!0,sortable:!0,width:"100px"},Object(v.a)(),i(i({},Object(T.a)()),{},{compact:!0}),i(i({},Object(f.a)()),{},{compact:!0,width:"100px"}),i(i({},Object(m.a)()),{},{compact:!0,maxWidth:"150px"}),i(i({},Object(y.a)()),{},{compact:!0,minWidth:"25px",maxWidth:"100px"})],[a,r]=Object(u.k)([]),[n,x]=Object(u.k)(""),[A,C]=Object(u.k)(""),[L,_]=Object(u.k)(""),[D,V]=Object(u.k)(!1),S=a.filter((e=>e.graduateDate&&e.graduateDate.toLowerCase().includes(n.toLowerCase()))).filter((e=>e.name&&e.name.toLowerCase().includes(A.toLowerCase()))).filter((e=>void 0===e.group||e.group.toLowerCase().includes(L.toLowerCase()))),F=Object(u.h)((()=>Object(c.h)("div",{class:p.a.searchBarGroup},Object(c.h)(b.a,{placeholderText:e.dictionary.table.searchByDate,onFilter:e=>x(e.target.value),onClear:()=>{n&&(V(!D),x(""))},filterText:n}),Object(c.h)(b.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:e=>C(e.target.value),onClear:()=>{A&&(V(!D),C(""))},filterText:A}),Object(c.h)(b.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:e=>_(e.target.value),onClear:()=>{L&&(V(!D),_(""))},filterText:L}))),[n,A,L,D,e.dictionary]),[Y,k]=Object(u.k)(!0);return Object(u.d)((()=>{(async()=>{const e=Object(j.b)(new Date,8);await d.c("recent").then((t=>{r(t.data.VTubers.map((e=>e)).sort(((e,t)=>t.graduateDate.localeCompare(e.graduateDate))).map((t=>((e,t)=>{var a,o,r,i,n,c;return{id:e.id,isToday:e.graduateDate===t,graduateDate:e.graduateDate,name:e.name,imgUrl:e.imgUrl,hasYouTube:void 0!==e.YouTube,YouTubeId:null===(a=e.YouTube)||void 0===a?void 0:a.id,YouTubeSubscriberCount:null===(o=e.YouTube)||void 0===o?void 0:o.subscriberCount,hasTwitch:void 0!==e.Twitch,TwitchId:null===(r=e.Twitch)||void 0===r?void 0:r.id,TwitchFollowerCount:null!==(i=null===(n=e.Twitch)||void 0===n?void 0:n.followerCount)&&void 0!==i?i:0,popularVideo:e.popularVideo,group:null!==(c=e.group)&&void 0!==c?c:"",nationality:e.nationality,activity:e.activity}})(t,e)))),k(!1)}))})()}),[]),Object(c.h)(c.Fragment,null,Object(c.h)("h1",null,Object(c.h)(l.c,{id:"header.graduateVTubers"},"Graduate VTubers"),Object(c.h)(g.a,{width:"300px",fontSize:"13px",text:Object(c.h)(l.c,{id:"toolTip.graduateVTubers"},"tooltip text")})),Object(c.h)(s.a,o({},h.a,{columns:t,data:S,conditionalRowStyles:O.a.concat(w.a),fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(c.h)(l.c,{id:"table.loading"},"Loading..."),progressPending:Y,subHeader:!0,subHeaderComponent:F})))}},y7vS:function(e,t,a){"use strict";var o=a("hosL"),r=a("qO1o"),i="questionMark__RT3wD";t.a=e=>Object(o.h)(r.a,{text:e.text,width:e.width,fontSize:e.fontSize},Object(o.h)("img",{class:i}))}}]);
//# sourceMappingURL=route-GraduateVTubers.chunk.c2555.esm.js.map