(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4BB4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"4RMJ":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=n("qjhZ");const o=(t,e)=>{const n=void 0!==t.YouTubeSubscriber,o=void 0!==e.YouTubeSubscriber;return n||o?o?n?t.YouTubeSubscriber&&e.YouTubeSubscriber?-1*Object(r.a)(t.YouTubeSubscriber,e.YouTubeSubscriber):0:1:-1:0},c=(t,e)=>{const n=void 0!==t.TwitchFollower,o=void 0!==e.TwitchFollower;return n||o?o?n?t.TwitchFollower&&e.TwitchFollower?-1*Object(r.a)(t.TwitchFollower,e.TwitchFollower):0:1:-1:0},i=(t,e)=>{var n,o,c,i;const u=(null!==(n=Object(r.b)(t.YouTubeSubscriber))&&void 0!==n?n:0)+(null!==(o=Object(r.b)(t.TwitchFollower))&&void 0!==o?o:0),a=(null!==(c=Object(r.b)(e.YouTubeSubscriber))&&void 0!==c?c:0)+(null!==(i=Object(r.b)(e.TwitchFollower))&&void 0!==i?i:0);return u>a?1:a>u?-1:0},u=(t,e)=>-1*i(t,e),a=t=>{switch(t){case"YouTube+Twitch":return u;case"YouTube":return o;case"Twitch":return c}}},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("CGiE");const i=()=>({name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:t=>Object(r.h)(c.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})})},"7Asn":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),c=n("Wcfx"),i=n("uZiY");const u=()=>({name:Object(r.h)(o.c,{id:"table.group"},"Group"),cell:t=>void 0!==t.group?Object(r.h)("a",{class:i.a.groupLink,href:Object(c.b)({type:"group",name:t.group})},t.group):null})},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("WbG0"),c="noWrap__BzT1O",i="YouTubeRed__1JOkf",u="TwitchPurple__qQQlw";e.a=t=>{const e=t=>Object(r.h)("span",{class:`${c} ${i}`},Object(r.h)(o.a,{countType:t})),n=t=>Object(r.h)("span",{class:`${c} ${u}`},Object(r.h)(o.a,{countType:t}));return Object(r.h)(r.Fragment,null,Object(r.h)((t=>t.YouTubeCount&&t.TwitchCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount),Object(r.h)("span",{class:c}," + "),n(t.TwitchCount)):t.YouTubeCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(r.h)(r.Fragment,null,n(t.TwitchCount)):null),t))}},CGiE:function(t,e,n){"use strict";var r=n("hosL"),o=n("+Ox3"),c="container__vr1DG",i="profileImageFlex__4VERG",u="nameFlex__WFOO9";e.a=t=>Object(r.h)("div",{class:c},Object(r.h)("div",{class:i},Object(r.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl})),Object(r.h)("span",{class:u},t.name))},GHZf:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),c=n("7DLW");const i=t=>{if(t)return{tag:"has",count:t}},u=()=>({name:Object(r.h)(o.c,{id:"table.popularity"},"Popularity"),cell:t=>Object(r.h)(c.a,{YouTubeCount:i(t.YouTubePopularity),TwitchCount:i(t.TwitchPopularity)})})},HSXE:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("7DLW");const i=()=>({name:Object(r.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:t=>Object(r.h)(c.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})})},"JY+X":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV");const c=()=>({name:Object(r.h)(o.c,{id:"table.nationality"},"Nationality"),selector:t=>{var e;return null!==(e=t.nationality)&&void 0!==e?e:""}})},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",c="textField__bDpXR",i="button__maFzS";e.a=t=>Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:c,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:i,onClick:t.onClear},"X"))},L9y4:function(t,e){"use strict";e.a=[{when:t=>"preparing"===t.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:t=>"graduate"===t.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=()=>({columns:[],data:[],conditionalRowStyles:r.a})},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("GKGp");const i=()=>{const e=Object(c.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:`nationalityTitle.${e}`},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},Obgd:function(t,e,n){"use strict";n.r(e),function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=n("drLk"),a=n("hosL"),s=n("OhSV"),l=n("QRet"),b=n("ENxA"),h=n("L9Wd"),d=n("4BB4"),p=n("7Asn"),O=n("69ZN"),f=n("JY+X"),j=n("GHZf"),w=n("sKFU"),g=n("HSXE"),v=n("LftB"),T=n("MJ1U"),y=n("PzPG"),m=n("4RMJ"),P=n("enE3"),S=n("y7vS"),L=n("uZiY"),Y=n("pmH6"),x=n("L9y4");e.default=e=>{document.title=`${e.dictionary.header.trendingVTubers} | ${e.dictionary.header.title}`;const n=[c(c({},Object(Y.a)()),{},{sortable:!0,width:"40px"}),Object(O.a)(),c(c({},Object(j.a)()),{},{sortFunction:y.a,sortable:!0}),c(c({},Object(g.a)()),{},{sortFunction:m.b,sortable:!0}),Object(w.a)(),Object(p.a)(),Object(f.a)()],[o,i]=Object(l.k)([]),[F,C]=Object(l.k)(""),[V,_]=Object(l.k)(""),[k,G]=Object(l.k)(!1),D=o.filter((t=>t.name&&t.name.toLowerCase().includes(F.toLowerCase()))).filter((t=>""===V||void 0!==t.group&&t.group.toLowerCase().includes(V.toLowerCase()))),B=Object(l.h)((()=>Object(a.h)("div",{class:L.a.searchBarGroup},Object(a.h)(h.a,{placeholderText:e.dictionary.table.searchByDisplayName,onFilter:t=>C(t.target.value),onClear:()=>{F&&(G(!k),C(""))},filterText:F}),Object(a.h)(h.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:t=>_(t.target.value),onClear:()=>{V&&(G(!k),_(""))},filterText:V}))),[F,V,k,e.dictionary]),[R,z]=Object(l.k)(!0);return Object(l.d)((()=>{(async()=>{await u.h("100").then((t=>{i(t.data.VTubers.map((t=>t)).map(((t,e)=>Object(P.a)(t,e+1))).sort(y.b).map(((t,e)=>c(c({},t),{},{ranking:e+1})))),z(!1)}))})()}),[]),Object(a.h)(t,null,Object(a.h)("h1",null,Object(a.h)(s.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(T.a)(),Object(a.h)(S.a,{width:"300px",fontSize:"13px",text:Object(a.h)(s.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(a.h)(b.a,r({},v.a,{columns:n,data:D,conditionalRowStyles:x.a,customStyles:d.a,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(a.h)(s.c,{id:"text.loading"},"Loading..."),progressPending:R,subHeader:!0,subHeaderComponent:B})))}}.call(this,n("hosL").Fragment)},PzPG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const r=(t,e)=>{var n,r,o,c;const i=(null!==(n=t.YouTubePopularity)&&void 0!==n?n:0)+(null!==(r=t.TwitchPopularity)&&void 0!==r?r:0),u=(null!==(o=e.YouTubePopularity)&&void 0!==o?o:0)+(null!==(c=e.TwitchPopularity)&&void 0!==c?c:0);return i>u?1:u>i?-1:0},o=(t,e)=>-1*r(t,e)},enE3:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return u}));var i=n("sPVG");const u=(t,e)=>{var n,r;return o(o({},Object(i.a)(t)),{},{YouTubePopularity:null===(n=t.YouTube)||void 0===n?void 0:n.popularity,TwitchPopularity:null===(r=t.Twitch)||void 0===r?void 0:r.popularity,ranking:e})}},pmH6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=()=>({name:"#",selector:t=>t.ranking,wrap:!1})},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";e.a=t=>Object(r.h)("div",{class:o},t.children,Object(r.h)("span",{class:c,style:{width:t.width,fontSize:t.fontSize}},t.text))},qjhZ:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));const r=t=>{if(void 0===t)return null;switch(t.tag){case"has":return t.count;case"hidden":case"no":return null}},o=(t,e)=>{switch(t.tag){case"has":switch(e.tag){case"has":return t.count-e.count;case"hidden":case"no":return 1}break;case"hidden":switch(e.tag){case"has":return-1;case"hidden":return 0;case"no":return 1}break;case"no":switch(e.tag){case"has":case"hidden":return-1;case"no":return 0}}}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("0yJK");const i=()=>({name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:t=>void 0!==t.popularVideo?Object(r.h)(c.a,{popularVideo:t.popularVideo}):null})},sPVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>{var e,n,r,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(n=t.YouTube)||void 0===n?void 0:n.subscriber,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),c="questionMark__RT3wD";e.a=t=>Object(r.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.h)("img",{class:c}))}}]);
//# sourceMappingURL=route-TrendingVTubers.chunk.f1679.esm.js.map