"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[123],{7059:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(7689),u=e(1087),c=e(184);function a(n){var t=n.data,e=(0,r.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:t.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(u.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,c.jsx)("h3",{children:n.title})})},n.id)}))})})}},2123:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(9439),u=e(2791),c=e(6911),a=e(184),o=function(n){var t=n.fnOnFormSubmit,e=n.fnOnChange,r=n.value;return(0,a.jsxs)("form",{className:"form",onSubmit:function(n){t(n)},onChange:function(n){return e(n.target.value)},value:r,children:[(0,a.jsx)("input",{id:"input",className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,a.jsx)(i,{})]})},i=function(){return(0,a.jsx)("button",{type:"submit",className:"button",children:"Search"})},s=e(7059),f=e(1087);function l(){var n,t=(0,u.useState)([]),e=(0,r.Z)(t,2),i=e[0],l=e[1],v=(0,u.useState)(""),m=(0,r.Z)(v,2),p=m[0],h=m[1],d=(0,f.lr)(),g=(0,r.Z)(d,2),x=g[0],b=g[1],j=null!==(n=x.get("name"))&&void 0!==n?n:"";return(0,u.useEffect)((function(){(p||""!==j)&&(0,c.qF)(j||p).then((function(n){l(n.results)})).catch((function(n){console.error(n)}))}),[p,j]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{value:j,fnOnFormSubmit:function(n){n.preventDefault(),l([]);var t=n.currentTarget,e=t.elements.input.value;h(e),t.reset()},fnOnChange:function(n){var t=""!==n?{name:n}:{};b(t),h(t)}}),i.length>0&&(0,a.jsx)(s.Z,{data:i})]})}},6911:function(n,t,e){e.d(t,{Hg:function(){return f},OR:function(){return h},TP:function(){return v},qF:function(){return l},tx:function(){return p},zv:function(){return m}});var r=e(5861),u=e(7757),c=e.n(u),a=e(340),o="7968ad8b74212fdec970c8532d70f000",i=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("apiKey",o),n.prev=1,n.next=4,a.Z.get("".concat("https://api.themoviedb.org/3").concat(t,"api_key=").concat(o));case 4:return e=n.sent,r=e.data,n.abrupt("return",r);case 9:throw n.prev=9,n.t0=n.catch(1),console.log(n.t0.message),n.t0;case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i(t);case 3:return e=n.sent,n.abrupt("return",e);case 7:throw n.prev=7,n.t0=n.catch(0),console.log(n.t0.message),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){return s("/trending/movie/day?")},l=function(n){var t="/search/movie?query=".concat(n,"&");return s(t)},v=function(n){var t="/movie/".concat(n,"?");return s(t)},m=function(n){var t="/movie/".concat(n,"/credits?");return s(t)},p=function(n){var t="/movie/".concat(n,"/reviews?");return s(t)},h=function(n){if(n)try{return"https://image.tmdb.org/t/p/w500".concat(n)}catch(t){return t(t.message)}}}}]);
//# sourceMappingURL=123.41d950d5.chunk.js.map