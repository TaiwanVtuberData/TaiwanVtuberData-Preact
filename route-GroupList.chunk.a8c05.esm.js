(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+Ox3":function(e,t,r){"use strict";var o=r("hosL"),i="profileImg__DvgtD";t.a=e=>{var t;return Object(o.h)("img",{class:i,src:null!==(t=e.imgUrl)&&void 0!==t?t:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",loading:"lazy"})}},L9Wd:function(e,t,r){"use strict";var o=r("hosL"),i="container__1lsi6",a="textField__bDpXR",n="button__maFzS";t.a=e=>Object(o.h)("div",{class:i},Object(o.h)("input",{type:"text",class:a,placeholder:e.placeholderText,value:e.filterText,onChange:e.onFilter}),Object(o.h)("button",{type:"button",class:n,onClick:e.onClear},"X"))},L9y4:function(e,t){"use strict";t.a=[{when:e=>"preparing"===e.activity,style:{backgroundColor:"rgba(141, 209, 157, 0.9)","&:hover":{cursor:"pointer"}}},{when:e=>"graduate"===e.activity,style:{backgroundColor:"rgba(123, 123, 123, 0.9)",color:"white","&:hover":{cursor:"not-allowed"}}}]},LftB:function(e,t,r){"use strict";var o=r("L9y4");t.a=()=>({columns:[],data:[],conditionalRowStyles:o.a})},Px4b:function(e,t,r){"use strict";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},o.apply(this,arguments)}r.r(t);var i=r("hosL"),a=r("QRet"),n=r("OhSV"),l=r("ENxA"),c=r("jUMG"),u=r("drLk"),s=r("L9Wd"),b=r("LftB"),d=(r("GFNa"),"profileGrid__glJEL"),h=r("uZiY"),p=r("+Ox3"),m=r("qO1o");var v=e=>Object(i.h)(m.a,{text:e.VTuber.name},Object(i.h)((e=>{var t,r,o,a,n,l;if(void 0===e.VTuber.YouTube&&void 0===e.VTuber.Twitch)return null;let c=(null!==(t=null===(r=e.VTuber.YouTube)||void 0===r?void 0:r.subscriberCount)&&void 0!==t?t:0)>(null!==(o=null===(a=e.VTuber.Twitch)||void 0===a?void 0:a.followerCount)&&void 0!==o?o:0);return void 0===e.VTuber.YouTube&&(c=!1),void 0===e.VTuber.Twitch&&(c=!0),c?Object(i.h)("a",{href:"https://www.youtube.com/channel/"+(null===(n=e.VTuber.YouTube)||void 0===n?void 0:n.id),target:"_blank",rel:"noopener noreferrer"},e.children):Object(i.h)("a",{href:"https://www.twitch.tv/"+(null===(l=e.VTuber.Twitch)||void 0===l?void 0:l.id),target:"_blank",rel:"noopener noreferrer"},e.children)}),{VTuber:e.VTuber},Object(p.a)({imgUrl:e.VTuber.imgUrl})));const g=(e,t)=>e.name.localeCompare(t.name);var O=r("y7vS");t.default=e=>{document.title=`${e.dictionary.header.groupList} | ${e.dictionary.header.title}`;const t=[{name:Object(i.h)(n.c,{id:"table.displayName"},"Name"),minWidth:"100px",maxWidth:"150px",sortable:!0,sortFunction:g,cell:e=>Object(i.h)("a",{class:h.a.groupLink,href:`${c.a}/group/${e.name}`},e.name)},{name:Object(i.h)(n.c,{id:"table.popularity"},"Popularity"),minWidth:"50px",maxWidth:"125px",right:!0,sortable:!0,selector:e=>e.popularity},{name:Object(i.h)(n.c,{id:"table.averageSubscriberCount"},"Average Subscribers"),minWidth:"50px",maxWidth:"125px",right:!0,sortable:!0,selector:e=>e.averageSubscriberCount},{name:Object(i.h)(n.c,{id:"table.totalSubscriberCount"},"Total Subscribers"),minWidth:"50px",maxWidth:"125px",right:!0,sortable:!0,selector:e=>e.totalSubscriberCount},{name:Object(i.h)(n.c,{id:"table.memberCount"},"Member Count"),minWidth:"50px",maxWidth:"125px",right:!0,sortable:!0,selector:e=>e.memberCount},{name:Object(i.h)(n.c,{id:"table.memberList"},"Members"),cell:e=>Object(i.h)("div",{class:d},e.memberList.map((e=>Object(i.h)(v,{key:e.id,VTuber:e}))))}],[r,p]=Object(a.k)([]),[m,j]=Object(a.k)(""),[w,x]=Object(a.k)(""),[f,y]=Object(a.k)(!1),T=r.filter((e=>void 0===e.name||e.name.toLowerCase().includes(m.toLowerCase()))).filter((e=>void 0===e.memberList||e.memberList.map((e=>e.name.toLowerCase().includes(w.toLowerCase()))).includes(!0))),A=Object(a.h)((()=>Object(i.h)("div",{class:h.a.searchBarGroup},Object(i.h)(s.a,{placeholderText:e.dictionary.table.searchByGroup,onFilter:e=>j(e.target.value),onClear:()=>{m&&(y(!f),j(""))},filterText:m}),Object(i.h)(s.a,{placeholderText:e.dictionary.table.searchByGroupMember,onFilter:e=>x(e.target.value),onClear:()=>{w&&(y(!f),x(""))},filterText:w}))),[m,w,f,e.dictionary]),L=(e,t)=>{var r,o,i,a;return e+(null!==(r=null===(o=t.YouTube)||void 0===o?void 0:o.subscriberCount)&&void 0!==r?r:0)+(null!==(i=null===(a=t.Twitch)||void 0===a?void 0:a.followerCount)&&void 0!==i?i:0)},[C,S]=Object(a.k)(!0),_=async()=>{await u.e().then((e=>{p(e.data.groups.map((e=>(e=>({id:e.id,name:e.name,popularity:e.popularity,averageSubscriberCount:0!==e.members.length?Math.round(e.members.reduce(L,0)/e.members.length):0,totalSubscriberCount:e.members.reduce(L,0),memberCount:e.members.length,memberList:e.members}))(e))).sort(((e,t)=>t.popularity-e.popularity))),S(!1)}))};return Object(a.d)((()=>{_()}),[]),Object(i.h)(i.Fragment,null,Object(i.h)("h1",null,Object(i.h)(n.c,{id:"header.groupList"},"Group List"),Object(i.h)(O.a,{width:"300px",fontSize:"13px",text:Object(i.h)(n.c,{id:"toolTip.groupList"},"tooltip text")})),Object(i.h)(l.a,o({},b.a,{columns:t,data:T,fixedHeader:!0,pagination:!0,paginationComponentOptions:e.dictionary.table.paginationOptions,progressComponent:Object(i.h)(n.c,{id:"table.loading"},"Loading..."),progressPending:C,subHeader:!0,subHeaderComponent:A})))}},qO1o:function(e,t,r){"use strict";var o=r("hosL"),i="tooltip__vtGmz",a="tooltipText__pA-zc";t.a=e=>Object(o.h)("div",{class:i},e.children,Object(o.h)("span",{class:a,style:{width:e.width,fontSize:e.fontSize}},e.text))},uZiY:function(e,t){"use strict";t.a={groupLink:"x4dKXRdnDI9qgFfe4BsDUQ==",searchBarGroup:"R1T8+hwxvBovrVdGHizUFw=="}},y7vS:function(e,t,r){"use strict";var o=r("hosL"),i=r("qO1o"),a="questionMark__RT3wD";t.a=e=>Object(o.h)(i.a,{text:e.text,width:e.width,fontSize:e.fontSize},Object(o.h)("img",{class:a}))}}]);
//# sourceMappingURL=route-GroupList.chunk.a8c05.esm.js.map