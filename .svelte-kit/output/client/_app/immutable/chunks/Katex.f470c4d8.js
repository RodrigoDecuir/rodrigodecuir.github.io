import{s as f,n as h}from"./scheduler.762b4b31.js";import{S as u,i as p,g as y,s as _,H as g,e as d,A as k,h as x,f as l,c as H,B as M,k as m,z as S,a as c}from"./index.19b44a2f.js";import{k as A}from"./katex.5026bf47.js";function K(r){let e,i,s,n;return{c(){e=y("link"),i=_(),s=new g(!1),n=d(),this.h()},l(t){const a=k("svelte-g85pfc",document.head);e=x(a,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),a.forEach(l),i=H(t),s=M(t,!1),n=d(),this.h()},h(){m(e,"rel","stylesheet"),m(e,"href","https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"),m(e,"integrity","sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"),m(e,"crossorigin","anonymous"),s.a=n},m(t,a){S(document.head,e),c(t,i,a),s.m(r[0],t,a),c(t,n,a)},p(t,[a]){a&1&&s.p(t[0])},i:h,o:h,d(t){t&&(l(i),l(n),s.d()),l(e)}}}function X(r,e,i){let s,{math:n}=e,{displayMode:t=!1}=e;const a={displayMode:t,throwOnError:!1};return r.$$set=o=>{"math"in o&&i(1,n=o.math),"displayMode"in o&&i(2,t=o.displayMode)},r.$$.update=()=>{r.$$.dirty&2&&i(0,s=A.renderToString(n,a))},[s,n,t]}class E extends u{constructor(e){super(),p(this,e,X,K,f,{math:1,displayMode:2})}}export{E as K};
