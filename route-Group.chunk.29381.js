(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+Ox3":function(t,e,n){"use strict";var r=n("hosL"),o=n("jUMG"),i="fixedSize__iw3af",a="profileImg__DvgtD";e.a=function(t){var e,n,c;return Object(r.h)("a",{href:"".concat(o.a,"/vtuber/").concat(t.id)},Object(r.h)("img",{class:"".concat(t.size?i:a),src:null!==(e=t.imgUrl)&&void 0!==e?e:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy",width:null!==(n=t.size)&&void 0!==n?n:void 0,height:null!==(c=t.size)&&void 0!==c?c:void 0}))}},"7DLW":function(t,e,n){"use strict";var r=n("hosL"),o=n("OhSV"),i=(n("GFNa"),"noWrap__BzT1O");e.a=function(t){var e=function(t){return Object(r.h)("span",{class:"".concat(i," YouTubeRed")},null!=t?t:Object(r.h)(o.c,{id:"table.hiddenCount"},"hidden"))},n=function(t){return Object(r.h)("span",{class:"".concat(i," TwitchPurple")},t)};return Object(r.h)(r.Fragment,null,Object(r.h)((function(t){return t.hasYouTube&&t.hasTwitch?Object(r.h)(r.Fragment,null,e(t.YouTubeSubscriberCount),Object(r.h)("span",{class:i}," + "),n(t.TwitchFollowerCount)):t.hasYouTube?Object(r.h)(r.Fragment,null,e(t.YouTubeSubscriberCount)):t.hasTwitch?Object(r.h)(r.Fragment,null,n(t.TwitchFollowerCount)):null}),t))}},JFTd:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.r(e);var c=n("hosL"),u=n("QRet"),l=n("OhSV"),s=n("ENxA"),h=n("L9Wd"),d=n("drLk"),b=n("LftB"),f=(n("GFNa"),n("L9y4")),p=n("Ud9u"),v=n("7DLW"),m=n("sviv"),O=n("uZiY");e.default=function(t){document.title="".concat(t.groupName," | ").concat(t.dictionary.header.title);var e=[{name:Object(c.h)(l.c,{id:"table.displayName"},"Name"),cell:function(t){return Object(c.h)(m.a,t)}},{name:Object(c.h)(l.c,{id:"table.YouTubeTwitchCount"},"YouTube Subscribers + Twitch Followers"),cell:function(t){return Object(c.h)(v.a,t)}},{name:Object(c.h)(l.c,{id:"table.popularVideo"},"Popular Video"),cell:function(e){return void 0!==e.popularVideo?Object(c.h)("input",{type:"button",value:t.dictionary.text.showVideo,onClick:function(){return Object(p.a)(e.popularVideo)}}):null},width:"100px"},{name:Object(c.h)(l.c,{id:"table.nationality"},"Nationality"),selector:function(t){var e;return null!==(e=t.nationality)&&void 0!==e?e:""},minWidth:"25px",maxWidth:"100px"}],n=i(Object(u.k)([]),2),a=n[0],w=n[1],j=i(Object(u.k)(""),2),y=j[0],g=j[1],T=i(Object(u.k)(!1),2),A=T[0],_=T[1],x=a.filter((function(t){return t.name&&t.name.toLowerCase().includes(y.toLowerCase())})),L=Object(u.h)((function(){return Object(c.h)("div",{class:O.a.searchBarGroup},Object(c.h)(h.a,{placeholderText:t.dictionary.table.searchByDisplayName,onFilter:function(t){return g(t.target.value)},onClear:function(){y&&(_(!A),g(""))},filterText:y}))}),[y,A,t.dictionary]),C=i(Object(u.k)(!0),2),F=C[0],Y=C[1],k=function(){var e,n=(e=function*(){yield d.d(t.groupName).then((function(t){w(t.data.VTubers.map((function(t){return function(t){var e,n,r,o,i;return{id:t.id,name:t.name,imgUrl:t.imgUrl,hasYouTube:void 0!==t.YouTube,YouTubeId:null===(e=t.YouTube)||void 0===e?void 0:e.id,YouTubeSubscriberCount:null===(n=t.YouTube)||void 0===n?void 0:n.subscriberCount,hasTwitch:void 0!==t.Twitch,TwitchId:null===(r=t.Twitch)||void 0===r?void 0:r.id,TwitchFollowerCount:null!==(o=null===(i=t.Twitch)||void 0===i?void 0:i.followerCount)&&void 0!==o?o:0,popularVideo:t.popularVideo,nationality:t.nationality,activity:t.activity}}(t)}))),Y(!1)}))},function(){var t=this,n=arguments;return new Promise((function(r,i){function a(t){o(u,r,i,a,c,"next",t)}function c(t){o(u,r,i,a,c,"throw",t)}var u=e.apply(t,n);a(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(u.d)((function(){k()}),[]),Object(c.h)(c.Fragment,null,Object(c.h)("h1",null,Object(c.h)(l.c,{id:"header.group"},"Group"),Object(c.h)("span",{class:"highlightText"}," ",t.groupName," "),Object(c.h)(l.c,{id:"header.memberList"},"members")),Object(c.h)(s.a,r({},b.a,{columns:e,data:x,fixedHeader:!0,conditionalRowStyles:f.a,progressComponent:Object(c.h)(l.c,{id:"table.loading"},"Loading..."),progressPending:F,subHeader:!0,subHeaderComponent:L})))}},L9Wd:function(t,e,n){"use strict";var r=n("hosL"),o="container__1lsi6",i="textField__bDpXR",a="button__maFzS";e.a=function(t){return Object(r.h)("div",{class:o},Object(r.h)("input",{type:"text",class:i,placeholder:t.placeholderText,value:t.filterText,onChange:t.onFilter}),Object(r.h)("button",{type:"button",class:a,onClick:t.onClear},"X"))}},L9y4:function(t,e){"use strict";e.a=[{when:function(t){return"preparing"===t.activity},style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:function(t){return"graduate"===t.activity},style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(t,e,n){"use strict";var r=n("L9y4");e.a=function(){return{columns:[],data:[],conditionalRowStyles:r.a}}},sviv:function(t,e,n){"use strict";var r=n("hosL"),o="container__ajzPI",i="YouTubeImg__LvwUa",a="TwitchImg__ckBvR",c=function(t){var e=function(t,e,n){return void 0===n?null:Object(r.h)("a",{href:e+n,target:"_blank",rel:"noopener noreferrer"},Object(r.h)("img",{class:t}))};return Object(r.h)("div",{class:o},e(i,"https://www.youtube.com/channel/",t.YouTubeId),e(a,"https://www.twitch.tv/",t.TwitchId))},u=n("+Ox3"),l="container__VQnrV",s="profileImageFlex__NQP5p",h="nameFlex__DDBDq",d="channelLinksFlex__AtHrx";e.a=function(t){return Object(r.h)("div",{class:l},Object(r.h)("div",{class:s},Object(r.h)(u.a,{id:t.id,imgUrl:t.imgUrl})),Object(r.h)("span",{class:h},t.name),Object(r.h)("div",{class:d},Object(r.h)(c,t)))}},uZiY:function(t,e){"use strict";e.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}}}]);
//# sourceMappingURL=route-Group.chunk.29381.js.map