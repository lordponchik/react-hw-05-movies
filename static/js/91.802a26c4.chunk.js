"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[91],{1487:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r=e(5861),a=e(9439),c=e(7757),s=e.n(c),u=e(2791),i=e(7689),o=e(4390),f=e(7784),p={cast:"Cast_cast__m5y0R",castItem:"Cast_castItem__-Jcfe",castTitle:"Cast_castTitle__eoJbw",castImg:"Cast_castImg__T4WbF"},h=e(5893),m=e.p+"static/media/no_posterCast.9d3aa494fa3aed2b76a6.jpg",l=e(7111),d=e(184),v=function(){var t=(0,i.UO)().movieId,n=(0,u.useState)(null),e=(0,a.Z)(n,2),c=e[0],v=e[1],x=(0,u.useState)(!1),w=(0,a.Z)(x,2),_=w[0],j=w[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(s().mark((function n(){var e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),n.prev=1,n.next=4,(0,o.y)(t);case 4:e=n.sent,r=e.cast,v(r),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:return n.prev=11,j(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,9,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.$,{children:c?(0,d.jsx)("ul",{className:p.cast,children:c.map((function(t){var n=t.id,e=t.name,r=t.character,a=t.profile_path;return(0,d.jsxs)("li",{className:p.castItem,children:[(0,d.jsx)("img",{src:a?"".concat("https://image.tmdb.org/t/p/w300").concat(a):m,alt:e,width:100,height:150,className:p.castImg}),(0,d.jsxs)("div",{className:p.castMeta,children:[(0,d.jsx)("h3",{className:p.castTitle,children:e}),(0,d.jsxs)("p",{children:["Character: ",r]})]})]},n)}))}):(0,d.jsx)(h.s,{information:"cast"})}),_&&(0,d.jsx)(f.a,{})]})}},5893:function(t,n,e){e.d(n,{s:function(){return c}});var r="LackInformation_title__w97bT",a=e(184),c=function(t){var n=t.information;return(0,a.jsxs)("p",{className:r,children:["We don't have any ",n," for this film"]})}},7111:function(t,n,e){e.d(n,{$:function(){return c}});var r="Section_section__Z2PLw",a=e(184),c=function(t){var n=t.children;return(0,a.jsx)("section",{className:r,children:n})}},4390:function(t,n,e){e.d(n,{Ai:function(){return f},Bt:function(){return m},S1:function(){return o},Y5:function(){return p},y:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),s=e(5294),u="https://api.themoviedb.org/3/",i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzJjNjgwZTU1OGJkMmM2YjkwMmM4MGIyZDVlMDc3ZCIsInN1YiI6IjY0ODFjYzljZTI3MjYwMDBlOGJmNGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JtFaymxRhIox3C-tQMTvFRWDPJCwAg6fzVmEnnO60cA")}},o=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"trending/movie/day"),i);case 2:return n=t.sent,t.next=5,n.data;case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"search/movie?query=").concat(n),i);case 2:return e=t.sent,t.next=5,e.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/movie/").concat(n),i);case 2:return e=t.sent,t.next=5,e.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/movie/").concat(n,"/credits"),i);case 2:return e=t.sent,t.next=5,e.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(u,"/movie/").concat(n,"/reviews"),i);case 2:return e=t.sent,t.next=5,e.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=91.802a26c4.chunk.js.map