"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[632],{5154:function(e,t,n){n.d(t,{N:function(){return c}});var r="MainHeading_title__eHnVN",a=n(184),c=function(e){var t=e.title;return(0,a.jsx)("h1",{className:r,children:t})}},9155:function(e,t,n){n.d(t,{O:function(){return l}});var r=n(1087),a="MoviesList_movies__jErmw",c="MoviesList_moviesItem__r+0sq",s="MoviesList_movieMeta__nsilD",u="MoviesList_movieTitle__CxO8p",i=n(3421),o=n(184),l=function(e){var t=e.movies,n=e.loc;return(0,o.jsx)("ul",{className:a,children:t.map((function(e){var t=e.id,a=e.poster_path,l=e.title;return(0,o.jsx)("li",{className:c,children:(0,o.jsxs)(r.rU,{to:"/"===n.pathname?"movies/".concat(t):"".concat(t),state:{from:n},children:[(0,o.jsx)("img",{loading:"lazy",src:a?"".concat("https://image.tmdb.org/t/p/w300/").concat(a):i,alt:"title",width:280}),(0,o.jsx)("div",{className:s,children:(0,o.jsx)("h2",{className:u,children:l})})]})},t)}))})}},7111:function(e,t,n){n.d(t,{$:function(){return c}});var r="Section_section__Z2PLw",a=n(184),c=function(e){var t=e.children;return(0,a.jsx)("section",{className:r,children:t})}},7632:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(5861),a=n(9439),c=n(7757),s=n.n(c),u=n(2791),i=n(7689),o=n(1087),l=n(5700),f="LackMovies_report__Fu7uL",m=n(184),v=function(){return(0,m.jsx)("div",{className:f,children:(0,m.jsx)("p",{children:"Unfortunately, no films were found for this request."})})},h=n(7784),p=n(5154),d=n(9155),x=n(5603),_=n(2094),j="SearchMoviesForm_form__gqLJv",w="SearchMoviesForm_inputSearch__ImUmq",g="SearchMoviesForm_submitBtn__XqES0",y="SearchMoviesForm_submitIcon__4w00c",Z=function(e){var t=e.handleSubmit,n=(0,u.useState)(""),r=(0,a.Z)(n,2),c=r[0],s=r[1],i=(0,o.lr)(),l=(0,a.Z)(i,1)[0].get("query");(0,u.useEffect)((function(){null!==l&&s(l)}),[l]);return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.currentTarget.elements.query.value;""===n.trim()&&_.Am.warn('You searched for "nothing". "Nothing" found'),t(n)},className:j,children:[(0,m.jsx)("input",{type:"text",name:"query",value:c,onChange:function(e){var t=e.currentTarget.value;s(t)},className:w,placeholder:"search movie"}),(0,m.jsx)("button",{type:"submit",className:g,children:(0,m.jsx)(x.w75,{className:y})})]})},M=n(7111),N=n(4390),b=function(){var e=(0,u.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1],f=(0,u.useState)(!0),x=(0,a.Z)(f,2),_=x[0],j=x[1],w=(0,u.useState)(null),g=(0,a.Z)(w,2),y=g[0],b=g[1],I=(0,i.TH)(),k=(0,o.lr)(),S=(0,a.Z)(k,2),J=S[0],q=S[1],C=J.get("query");(0,u.useEffect)((function(){if(j(!0),null!==C&&""!==C){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,(0,N.Ai)(C);case 4:t=e.sent,n=t.results,b(n),0===n.length&&j(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,10,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C]);return(0,m.jsx)("main",{children:(0,m.jsx)(M.$,{children:(0,m.jsxs)(l.W,{children:[(0,m.jsx)(p.N,{title:"Search Movies"}),(0,m.jsx)(Z,{handleSubmit:function(e){e!==C&&(b(null),q({query:e}))}}),n&&(0,m.jsx)(h.a,{}),y&&(0,m.jsx)(d.O,{movies:y,loc:I}),!_&&(0,m.jsx)(v,{})]})})})}},4390:function(e,t,n){n.d(t,{Ai:function(){return l},Bt:function(){return v},S1:function(){return o},Y5:function(){return f},y:function(){return m}});var r=n(5861),a=n(7757),c=n.n(a),s=n(5294),u="https://api.themoviedb.org/3/",i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzJjNjgwZTU1OGJkMmM2YjkwMmM4MGIyZDVlMDc3ZCIsInN1YiI6IjY0ODFjYzljZTI3MjYwMDBlOGJmNGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JtFaymxRhIox3C-tQMTvFRWDPJCwAg6fzVmEnnO60cA")}},o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"trending/movie/day"),i);case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"search/movie?query=").concat(t),i);case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t),i);case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t,"/credits"),i);case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t,"/reviews"),i);case 2:return n=e.sent,e.next=5,n.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3421:function(e,t,n){e.exports=n.p+"static/media/no_posterMovie.e1f64ae0b124f569a586.jpg"}}]);
//# sourceMappingURL=632.e624d171.chunk.js.map