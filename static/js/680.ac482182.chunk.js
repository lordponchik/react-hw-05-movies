"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{5154:function(t,e,n){n.d(e,{N:function(){return c}});var r="MainHeading_title__eHnVN",a=n(184),c=function(t){var e=t.title;return(0,a.jsx)("h1",{className:r,children:e})}},9155:function(t,e,n){n.d(e,{O:function(){return v}});var r=n(1087),a=n(2202),c="MoviesList_movies__jErmw",s="MoviesList_moviesItem__r+0sq",i="MoviesList_movieLink__QlD4H",u="MoviesList_searchIcon__bWut1",o="MoviesList_movieMeta__nsilD",f="MoviesList_movieTitle__CxO8p",p=n(3421),l=n(184),v=function(t){var e=t.movies,n=t.loc;return(0,l.jsx)("ul",{className:c,children:e.map((function(t){var e=t.id,c=t.poster_path,v=t.title;return(0,l.jsx)("li",{className:s,children:(0,l.jsxs)(r.rU,{to:"/"===n.pathname?"movies/".concat(e):"".concat(e),state:{from:n},className:i,children:[(0,l.jsx)("img",{loading:"lazy",src:c?"".concat("https://image.tmdb.org/t/p/w300/").concat(c):p,alt:"title",width:280}),(0,l.jsx)("div",{className:o,children:(0,l.jsx)("h2",{className:f,children:v})}),(0,l.jsx)(a.U41,{className:u})]})},e)}))})}},7111:function(t,e,n){n.d(e,{$:function(){return c}});var r="Section_section__Z2PLw",a=n(184),c=function(t){var e=t.children;return(0,a.jsx)("section",{className:r,children:e})}},680:function(t,e,n){n.r(e);var r=n(5861),a=n(9439),c=n(7757),s=n.n(c),i=n(2791),u=n(7689),o=n(4390),f=n(5700),p=n(5154),l=n(7111),v=n(9155),m=n(7784),h=n(184);e.default=function(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),n=e[0],c=e[1],d=(0,u.TH)(),x=(0,i.useState)(!1),_=(0,a.Z)(x,2),j=_[0],w=_[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.prev=1,t.next=4,(0,o.S1)();case 4:e=t.sent,n=e.results,c(n),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,9,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,h.jsx)("main",{children:(0,h.jsx)(l.$,{children:(0,h.jsxs)(f.W,{children:[(0,h.jsx)(p.N,{title:"Trending Today"}),j&&(0,h.jsx)(m.a,{}),n&&(0,h.jsx)(v.O,{movies:n,loc:d})]})})})}},4390:function(t,e,n){n.d(e,{Ai:function(){return f},Bt:function(){return v},S1:function(){return o},Y5:function(){return p},y:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),s=n(5294),i="https://api.themoviedb.org/3/",u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzJjNjgwZTU1OGJkMmM2YjkwMmM4MGIyZDVlMDc3ZCIsInN1YiI6IjY0ODFjYzljZTI3MjYwMDBlOGJmNGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JtFaymxRhIox3C-tQMTvFRWDPJCwAg6fzVmEnnO60cA")}},o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"trending/movie/day"),u);case 2:return e=t.sent,t.next=5,e.data;case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"search/movie?query=").concat(e),u);case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e),u);case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"/credits"),u);case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(i,"/movie/").concat(e,"/reviews"),u);case 2:return n=t.sent,t.next=5,n.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},3421:function(t,e,n){t.exports=n.p+"static/media/no_posterMovie.e1f64ae0b124f569a586.jpg"}}]);
//# sourceMappingURL=680.ac482182.chunk.js.map