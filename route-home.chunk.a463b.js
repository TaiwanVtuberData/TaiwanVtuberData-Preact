(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0kGK":function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return a}));var i=n("sPVG"),u=function(t,e){return o(o({},t),{},{percentage:void 0!==e&&0!==e?t.diff/e:0})},a=function(t){return o(o({},Object(i.a)(t)),{},{YouTubeSubscriber:t.YouTube.subscriber,_7DaysGrowth:u(t.YouTube._7DaysGrowth,t.YouTube.subscriber.count),_30DaysGrowth:u(t.YouTube._30DaysGrowth,t.YouTube.subscriber.count)})}},"4BB4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={headCells:{style:{paddingLeft:"5px",paddingRight:"5px"}},cells:{style:{paddingLeft:"5px",paddingRight:"5px"}}}},"69ZN":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("CGiE"),i=function(){return{name:Object(r.h)(o.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(r.h)(c.a,{VTuberId:t.id,imgUrl:t.imgUrl,name:t.name})}}}},"6i5z":function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=n("drLk"),b=n("hosL"),f=n("OhSV"),h=n("QRet"),d=n("ENxA"),p=n("L9y4"),O=n("4BB4"),y=n("69ZN"),j=n("sKFU"),v=n("U2b0"),m=n("76Fs"),g=n("LftB"),w=n("0kGK"),T=n("y7vS"),P=n("Wcfx");e.a=function(e){var n=[Object(y.a)(),Object(v.a)(),Object(m.a)(e.dictionary.table),a(a({},Object(j.a)()),{},{hide:d.a.SM})],i=c(Object(h.k)([]),2),u=i[0],l=i[1],S=c(Object(h.k)(!0),2),D=S[0],x=S[1],L=function(){var t,e=(t=function*(){yield s.f("10").then((function(t){l(t.data.VTubers.map((function(t){return t})).map((function(t){return Object(w.a)(t)})).sort((function(t,e){return e._7DaysGrowth.percentage-t._7DaysGrowth.percentage}))),x(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}var a=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){L()}),[]),Object(b.h)(t,null,Object(b.h)("h3",null,Object(b.h)("a",{href:Object(P.b)({type:"growing-vtubers"})},Object(b.h)(f.c,{id:"header.growingVTubers"},"Growing VTubers"),Object(b.h)(t,null," "),Object(b.h)(f.c,{id:"header.top10"},"Top 10")),Object(b.h)(T.a,{width:"300px",fontSize:"13px",text:Object(b.h)(f.c,{id:"toolTip.growingVTubers"},"tooltip text")})),Object(b.h)(d.b,r({},g.a,{columns:n,data:u,conditionalRowStyles:p.a,customStyles:O.a,progressComponent:Object(b.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:D})))}}).call(this,n("hosL").Fragment)},"76Fs":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("Dy4S"),i=function(t){return{name:Object(r.h)(o.c,{id:"table._7DaysGrowth"},"7 Days Growth (Percent)"),cell:function(e){return Object(c.a)(e._7DaysGrowth,t)}}}},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("WbG0"),c="noWrap__BzT1O",i="YouTubeRed__1JOkf",u="TwitchPurple__qQQlw";e.a=function(t){var e=function(t){return Object(r.h)("span",{class:"".concat(c," ").concat(i)},Object(r.h)(o.a,{countType:t}))},n=function(t){return Object(r.h)("span",{class:"".concat(c," ").concat(u)},Object(r.h)(o.a,{countType:t}))};return Object(r.h)(r.Fragment,null,Object(r.h)((function(t){return t.YouTubeCount&&t.TwitchCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount),Object(r.h)("span",{class:c}," + "),n(t.TwitchCount)):t.YouTubeCount?Object(r.h)(r.Fragment,null,e(t.YouTubeCount)):t.TwitchCount?Object(r.h)(r.Fragment,null,n(t.TwitchCount)):null}),t))}},CGiE:function(t,e,n){"use strict";var r=n("hosL"),o=n("+Ox3"),c="container__vr1DG",i="profileImageFlex__4VERG",u="nameFlex__WFOO9";e.a=function(t){return Object(r.h)("div",{class:c},Object(r.h)("div",{class:i},Object(r.h)(o.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,clickBehavior:"popup"})),Object(r.h)("span",{class:u},t.name))}},Dy4S:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=function(t){return t>0?"+".concat(t):t<0?"".concat(t):"0"},o=function(t){return(100*t).toFixed(2)},c=function(t,e){if(t.percentage)switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff)," (").concat(o(t.percentage),"%)");case"full":return"".concat(r(t.diff)," (").concat(o(t.percentage),"%)")}switch(t.recordType){case"none":return e.noRecord;case"partial":return"".concat(e.atLeast," ").concat(r(t.diff));case"full":return"".concat(r(t.diff))}}},FDtd:function(t,e,n){"use strict";function r(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var i=n("hosL"),u=n("OhSV"),a=n("paJy"),l=n("6i5z"),s=n("drLk"),b=n("QRet"),f=n("8r9F"),h=n("v6a3"),d=n("CGiE"),p=n("wnwi"),O="verticalFlex__i3ZgG",y=function(t){return Object(i.h)("div",{id:"comp-".concat(t.id),class:O},Object(i.h)(d.a,{VTuberId:t.VTuberId,imgUrl:t.imgUrl,name:t.name}),Object(i.h)(p.a,{thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl}),Object(i.h)("div",null,Object(i.h)("span",null,Object(f.c)(t.startTime,t.now))))},j="horizontalFlex__u+MYR",v=function(t){return Object(i.h)("div",{class:j},t.data.map((function(e,n){return Object(i.h)(y,{id:n,key:n,VTuberId:e.VTuberId,imgUrl:e.imgUrl,name:e.name,thumbnailUrl:e.thumbnailUrl,videoUrl:e.videoUrl,startTime:e.startTime,now:t.now})})))},m=function(t){var e=o(Object(b.k)(),2),n=e[0],c=e[1];Object(b.k)(!1);var a=o(Object(b.k)(!0),2),l=a[0],d=a[1],p=function(){var e,n=(e=function*(){yield s.g(t.modifier).then((function(t){var e=t.data.livestreams.map((function(t){return t})).map((function(t,e){return Object(h.a)(t,e)})).sort((function(t,e){return t.startTime.getTime()-e.startTime.getTime()}));c(e),d(!1),setTimeout((function(){var t,n=Object(f.a)(e,new Date);null===(t=document.getElementById("comp-".concat(Math.min(e.length-1,n))))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),500)}))},function(){var t=this,n=arguments;return new Promise((function(o,c){function i(t){r(a,o,c,i,u,"next",t)}function u(t){r(a,o,c,i,u,"throw",t)}var a=e.apply(t,n);i(void 0)}))});return function(){return n.apply(this,arguments)}}();Object(b.d)((function(){p()}),[]);return Object(i.h)((function(){return l?Object(i.h)("div",{style:{textAlign:"center"}},Object(i.h)("span",null,Object(i.h)(u.c,{id:"text.loading"},"Loading..."))):void 0===n||0===n.length?Object(i.h)("div",{style:{textAlign:"center"}},Object(i.h)("span",null,Object(i.h)(u.c,{id:"text.noData"},"No Data"))):Object(i.h)(v,{data:n,now:t.now})}),null)},g=n("shcR"),w=n("NF43"),T=(n("GFNa"),n("MJ1U")),P=n("Wcfx"),S="tableGrid__Ju0u9",D="tableItem__iikA+",x="streamingSection__unwHH";e.default=function(t){"undefined"!=typeof window&&(document.title="".concat(t.dictionary.header.title));return Object(i.h)(i.Fragment,null,Object(i.h)("h1",null,Object(i.h)(u.c,{id:"header.title"},"Taiwan VTuber Data"),Object(T.a)()),Object(i.h)((function(){var t=new Date;return Object(i.h)("div",{class:x},Object(i.h)("div",null,Object(i.h)("h3",null,Object(i.h)("a",{href:Object(P.b)({type:"livestreams"})},Object(i.h)(u.c,{id:"header.debutToday"},"Debut Today"))),Object(i.h)(m,{modifier:"debut-no-title",now:t})),Object(i.h)("div",null,Object(i.h)("h3",null,Object(i.h)("a",{href:Object(P.b)({type:"livestreams"})},Object(i.h)(u.c,{id:"header.livestreaming"},"Streaming Now"))),Object(i.h)(m,{modifier:"all-no-title",now:t})))}),null),Object(i.h)("div",{class:S},Object(i.h)("div",{class:D},Object(i.h)(w.a,null)),Object(i.h)("div",{class:D},Object(i.h)(a.a,null)),Object(i.h)("div",{class:D},Object(i.h)(l.a,{dictionary:t.dictionary})),Object(i.h)("div",{class:D},Object(i.h)(g.a,null))))}},GHZf:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("hosL"),o=n("OhSV"),c=n("7DLW"),i=function(t){if(t)return{tag:"has",count:t}},u=function(){return{name:Object(r.h)(o.c,{id:"table.popularity"},"Popularity"),cell:function(t){return Object(r.h)(c.a,{YouTubeCount:i(t.YouTubePopularity),TwitchCount:i(t.TwitchPopularity)})}}}},HSXE:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("7DLW"),i=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(r.h)(c.a,{YouTubeCount:t.YouTubeSubscriber,TwitchCount:t.TwitchFollower})}}}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},MJ1U:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("GKGp"),i=function(){var e=Object(c.a)();switch(e){case"TW":case"HK":case"MY":return Object(r.h)(t,null," ","(",Object(r.h)(o.c,{id:"text.onlyShowing"},"only showing "),Object(r.h)(o.c,{id:"nationalityTitle.".concat(e)},"placeholder")," ","VTuber)");default:return null}}}).call(this,n("hosL").Fragment)},NF43:function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=n("drLk"),b=n("hosL"),f=n("OhSV"),h=n("QRet"),d=n("ENxA"),p=n("4BB4"),O=n("69ZN"),y=n("GHZf"),j=n("HSXE"),v=n("LftB"),m=n("PzPG"),g=n("enE3"),w=n("y7vS"),T=n("sKFU"),P=n("pmH6"),S=n("L9y4"),D=n("Wcfx");e.a=function(){var e=[a(a({},Object(P.a)()),{},{width:"30px"}),Object(O.a)(),Object(y.a)(),Object(j.a)(),a(a({},Object(T.a)()),{},{hide:d.a.SM})],n=c(Object(h.k)([]),2),i=n[0],u=n[1],l=c(Object(h.k)(!0),2),x=l[0],L=l[1],V=function(){var t,e=(t=function*(){yield s.h("10").then((function(t){u(t.data.VTubers.map((function(t){return t})).map((function(t,e){return Object(g.a)(t,e+1)})).sort(m.b).map((function(t,e){return a(a({},t),{},{ranking:e+1})}))),L(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}var a=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){V()}),[]),Object(b.h)(t,null,Object(b.h)("h3",null,Object(b.h)("a",{href:Object(D.b)({type:"trending-vtubers"})},Object(b.h)(f.c,{id:"header.trendingVTubers"},"Trending VTubers"),Object(b.h)(t,null," "),Object(b.h)(f.c,{id:"header.top10"},"Top 10")),Object(b.h)(w.a,{width:"300px",fontSize:"13px",text:Object(b.h)(f.c,{id:"toolTip.trendingVTubers"},"tooltip text")})),Object(b.h)(d.b,r({},v.a,{columns:e,data:i,conditionalRowStyles:S.a,customStyles:p.a,progressComponent:Object(b.h)(f.c,{id:"text.loading"},"Loading..."),progressPending:x})))}}).call(this,n("hosL").Fragment)},PzPG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(t,e){var n,r,o,c,i=(null!==(n=t.YouTubePopularity)&&void 0!==n?n:0)+(null!==(r=t.TwitchPopularity)&&void 0!==r?r:0),u=(null!==(o=e.YouTubePopularity)&&void 0!==o?o:0)+(null!==(c=e.TwitchPopularity)&&void 0!==c?c:0);return i>u?1:u>i?-1:0},o=function(t,e){return-1*r(t,e)}},TToT:function(t,e){"use strict";e.a=[{when:function(t){return t.isToday},style:{color:"mediumblue"}}]},U2b0:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),c=function(){return{name:Object(r.h)(o.c,{id:"table.YouTubeSubscriberCount"},"YouTube Subscribers"),selector:function(t){return t.YouTubeSubscriber.count}}}},YRVu:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("hosL"),o=n("OhSV"),c=function(){return{name:Object(r.h)(o.c,{id:"table.debutDate"},"Debut Date"),selector:function(t){return t.debutDate}}}},enE3:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return u}));var i=n("sPVG"),u=function(t,e){var n,r;return o(o({},Object(i.a)(t)),{},{YouTubePopularity:null===(n=t.YouTube)||void 0===n?void 0:n.popularity,TwitchPopularity:null===(r=t.Twitch)||void 0===r?void 0:r.popularity,ranking:e})}},paJy:function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=n("drLk"),b=n("hosL"),f=n("OhSV"),h=n("QRet"),d=n("ENxA"),p=n("L9y4"),O=n("4BB4"),y=n("TToT"),j=n("69ZN"),v=n("sKFU"),m=n("HSXE"),g=n("8r9F"),w=n("LftB"),T=n("qM+f"),P=n("YRVu"),S=n("Wcfx");e.a=function(){var e=[Object(P.a)(),Object(j.a)(),Object(m.a)(),a(a({},Object(v.a)()),{},{hide:d.a.SM})],n=c(Object(h.k)([]),2),i=n[0],u=n[1],l=c(Object(h.k)(!0),2),D=l[0],x=l[1],L=function(){var t,e=(t=function*(){var t=Object(g.d)(new Date,8);yield s.b("next-7-days").then((function(e){u(e.data.VTubers.map((function(t){return t})).sort((function(t,e){return t.debutDate.localeCompare(e.debutDate)})).map((function(e){return Object(T.a)(e,t)}))),x(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}var a=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(h.d)((function(){L()}),[]),Object(b.h)(t,null,Object(b.h)("h3",null,Object(b.h)("a",{href:Object(S.b)({type:"debut-vtubers"})},Object(b.h)(f.c,{id:"header.debutVTubersIn7Days"},"VTubers Debut in 7 days"))),Object(b.h)(d.b,r({},w.a,{columns:e,data:i,conditionalRowStyles:p.a.concat(y.a),customStyles:O.a,progressPending:D,progressComponent:Object(b.h)(f.c,{id:"text.loading"},"Loading...")})))}}).call(this,n("hosL").Fragment)},pmH6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return{name:"#",selector:function(t){return t.ranking},wrap:!1}}},"qM+f":function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return u}));var i=n("sPVG"),u=function(t,e){return o(o({},Object(i.a)(t)),{},{debutDate:t.debutDate,isToday:t.debutDate===e})}},qO1o:function(t,e,n){"use strict";var r=n("hosL"),o="tooltip__vtGmz",c="tooltipText__pA-zc";e.a=function(t){return Object(r.h)("div",{class:o},t.children,Object(r.h)("span",{class:c,style:{width:t.width,fontSize:t.fontSize}},t.text))}},sKFU:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("hosL"),o=n("OhSV"),c=n("0yJK"),i=function(){return{name:Object(r.h)(o.c,{id:"table.popularVideo"},"Popular Video"),cell:function(t){return void 0!==t.popularVideo?Object(r.h)(c.a,{popularVideo:t.popularVideo}):null}}}},sPVG:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e,n,r,o;return{id:t.id,activity:t.activity,name:t.name,imgUrl:t.imgUrl,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriber:null===(n=t.YouTube)||void 0===n?void 0:n.subscriber,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id,TwitchFollower:null===(o=t.Twitch)||void 0===o?void 0:o.follower,popularVideo:t.popularVideo,group:t.group,nationality:t.nationality}}},shcR:function(t,e,n){"use strict";(function(t){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=n("drLk"),a=n("hosL"),l=n("OhSV"),s=n("QRet"),b=n("ENxA"),f=n("L9y4"),h=n("4BB4"),d=n("69ZN"),p=n("sKFU"),O=n("HSXE"),y=n("LftB"),j=n("sPVG"),v=n("Wcfx");e.a=function(){var e=[Object(d.a)(),Object(O.a)(),Object(p.a)()],n=c(Object(s.k)([]),2),i=n[0],m=n[1],g=c(Object(s.k)(!0),2),w=g[0],T=g[1],P=function(){var t,e=(t=function*(){yield u.l("10").then((function(t){m(t.data.VTubers.map((function(t){return Object(j.a)(t)}))),T(!1)}))},function(){var e=this,n=arguments;return new Promise((function(r,c){function i(t){o(a,r,c,i,u,"next",t)}function u(t){o(a,r,c,i,u,"throw",t)}var a=t.apply(e,n);i(void 0)}))});return function(){return e.apply(this,arguments)}}();return Object(s.d)((function(){P()}),[]),Object(a.h)(t,null,Object(a.h)("h3",null,Object(a.h)("a",{href:Object(v.b)({type:"all-vtubers"})},Object(a.h)(l.c,{id:"header.YouTubeSubPlusTwitchFollowers"},"YouTube Subscribers + Twitch Followers"),Object(a.h)(t,null," "),Object(a.h)(l.c,{id:"header.top10"},"Top 10"))),Object(a.h)(b.b,r({},y.a,{columns:e,data:i,conditionalRowStyles:f.a,customStyles:h.a,progressComponent:Object(a.h)(l.c,{id:"text.loading"},"Loading..."),progressPending:w})))}}).call(this,n("hosL").Fragment)},v6a3:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){return{id:e,VTuberId:t.id,name:t.name,imgUrl:t.imgUrl,title:t.title,thumbnailUrl:t.thumbnailUrl,videoUrl:t.videoUrl,startTime:new Date(t.startTime)}}},wnwi:function(t,e,n){"use strict";var r=n("hosL"),o="thumbnail__BdvoG",c="placeholder__1JmTb";e.a=function(t){return Object(r.h)("a",{href:t.videoUrl,target:"_blank",rel:"noopener noreferrer"},void 0===t.thumbnailUrl?Object(r.h)("img",{class:c,src:t.thumbnailUrl,loading:"lazy"}):Object(r.h)("img",{class:o,src:t.thumbnailUrl,loading:"lazy"}))}},y7vS:function(t,e,n){"use strict";var r=n("hosL"),o=n("qO1o"),c="questionMark__RT3wD";e.a=function(t){return Object(r.h)(o.a,{text:t.text,width:t.width,fontSize:t.fontSize},Object(r.h)("img",{class:c}))}}}]);
//# sourceMappingURL=route-home.chunk.a463b.js.map