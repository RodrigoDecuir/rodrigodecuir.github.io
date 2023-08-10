import{n as ve,s as at,o as Me,t as Ee}from"../chunks/scheduler.3fb37d42.js";import{a as rt,b as H}from"../chunks/paths.fa1b61ef.js";function ot(e,a){return e==="/"||a==="ignore"?e:a==="never"?e.endsWith("/")?e.slice(0,-1):e:a==="always"&&!e.endsWith("/")?e+"/":e}function it(e){return e.split("%25").map(decodeURI).join("%25")}function st(e){for(const a in e)e[a]=decodeURIComponent(e[a]);return e}const ct=["href","pathname","search","searchParams","toString","toJSON"];function lt(e,a){const s=new URL(e);for(const o of ct)Object.defineProperty(s,o,{get(){return a(),e[o]},enumerable:!0,configurable:!0});return ft(s),s}function ft(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ut="/__data.json";function dt(e){return e.replace(/\/$/,"")+ut}function pt(...e){let a=5381;for(const s of e)if(typeof s=="string"){let o=s.length;for(;o;)a=a*33^s.charCodeAt(--o)}else if(ArrayBuffer.isView(s)){const o=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);let u=o.length;for(;u;)a=a*33^o[--u]}else throw new TypeError("value must be a string or TypedArray");return(a>>>0).toString(36)}const he=window.fetch;window.fetch=(e,a)=>((e instanceof Request?e.method:(a==null?void 0:a.method)||"GET")!=="GET"&&re.delete(Ie(e)),he(e,a));const re=new Map;function ht(e,a){const s=Ie(e,a),o=document.querySelector(s);if(o!=null&&o.textContent){const{body:u,...f}=JSON.parse(o.textContent),y=o.getAttribute("data-ttl");return y&&re.set(s,{body:u,init:f,ttl:1e3*Number(y)}),Promise.resolve(new Response(u,f))}return he(e,a)}function gt(e,a,s){if(re.size>0){const o=Ie(e,s),u=re.get(o);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(s==null?void 0:s.cache))return new Response(u.body,u.init);re.delete(o)}}return he(a,s)}function Ie(e,a){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(a!=null&&a.headers||a!=null&&a.body){const u=[];a.headers&&u.push([...new Headers(a.headers)].join(",")),a.body&&(typeof a.body=="string"||ArrayBuffer.isView(a.body))&&u.push(a.body),o+=`[data-hash="${pt(...u)}"]`}return o}const mt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function yt(e){const a=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${wt(e).map(o=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(u)return a.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(f)return a.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const y=o.split(/\[(.+?)\](?!\])/);return"/"+y.map((h,p)=>{if(p%2){if(h.startsWith("x+"))return ke(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return ke(String.fromCharCode(...h.slice(2).split("-").map(O=>parseInt(O,16))));const m=mt.exec(h);if(!m)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,N,S,P]=m;return a.push({name:S,matcher:P,optional:!!C,rest:!!N,chained:N?p===1&&y[0]==="":!1}),N?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return ke(h)}).join("")}).join("")}/?$`),params:a}}function _t(e){return!/^\([^)]+\)$/.test(e)}function wt(e){return e.slice(1).split("/").filter(_t)}function bt(e,a,s){const o={},u=e.slice(1);let f=0;for(let y=0;y<a.length;y+=1){const i=a[y];let h=u[y-f];if(i.chained&&i.rest&&f&&(h=u.slice(y-f,y+1).filter(p=>p).join("/"),f=0),h===void 0){i.rest&&(o[i.name]="");continue}if(!i.matcher||s[i.matcher](h)){o[i.name]=h;const p=a[y+1],m=u[y+1];p&&!p.rest&&p.optional&&m&&i.chained&&(f=0);continue}if(i.optional&&i.chained){f++;continue}return}if(!f)return o}function ke(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function vt({nodes:e,server_loads:a,dictionary:s,matchers:o}){const u=new Set(a);return Object.entries(s).map(([i,[h,p,m]])=>{const{pattern:C,params:N}=yt(i),S={id:i,exec:P=>{const O=C.exec(P);if(O)return bt(O,N,o)},errors:[1,...m||[]].map(P=>e[P]),layouts:[0,...p||[]].map(y),leaf:f(h)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function f(i){const h=i<0;return h&&(i=~i),[h,e[i]]}function y(i){return i===void 0?i:[u.has(i),e[i]]}}function We(e){try{return JSON.parse(sessionStorage[e])}catch{}}function ze(e,a){const s=JSON.stringify(a);try{sessionStorage[e]=s}catch{}}const Y=[];function Le(e,a=ve){let s;const o=new Set;function u(i){if(at(e,i)&&(e=i,s)){const h=!Y.length;for(const p of o)p[1](),Y.push(p,e);if(h){for(let p=0;p<Y.length;p+=2)Y[p][0](Y[p+1]);Y.length=0}}}function f(i){u(i(e))}function y(i,h=ve){const p=[i,h];return o.add(p),o.size===1&&(s=a(u,f)||ve),i(e),()=>{o.delete(p),o.size===0&&s&&(s(),s=null)}}return{set:u,update:f,subscribe:y}}const Et="1691622573159",Xe="sveltekit:snapshot",Ze="sveltekit:scroll",V="sveltekit:index",pe={tap:1,hover:2,viewport:3,eager:4,off:-1};function Be(e){let a=e.baseURI;if(!a){const s=e.getElementsByTagName("base");a=s.length?s[0].href:e.URL}return a}function ne(){return{x:pageXOffset,y:pageYOffset}}function W(e,a){return e.getAttribute(`data-sveltekit-${a}`)}const Ge={...pe,"":pe.hover};function Qe(e){let a=e.assignedSlot??e.parentNode;return(a==null?void 0:a.nodeType)===11&&(a=a.host),a}function He(e,a){for(;e&&e!==a;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Qe(e)}}function Se(e,a){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,u=!s||!!o||de(s,a)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),f=(s==null?void 0:s.origin)===location.origin&&e.hasAttribute("download");return{url:s,external:u,target:o,download:f}}function ue(e){let a=null,s=null,o=null,u=null,f=null,y=null,i=e;for(;i&&i!==document.documentElement;)o===null&&(o=W(i,"preload-code")),u===null&&(u=W(i,"preload-data")),a===null&&(a=W(i,"keepfocus")),s===null&&(s=W(i,"noscroll")),f===null&&(f=W(i,"reload")),y===null&&(y=W(i,"replacestate")),i=Qe(i);function h(p){switch(p){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Ge[o??"off"],preload_data:Ge[u??"off"],keep_focus:h(a),noscroll:h(s),reload:h(f),replace_state:h(y)}}function Je(e){const a=Le(e);let s=!0;function o(){s=!0,a.update(y=>y)}function u(y){s=!1,a.set(y)}function f(y){let i;return a.subscribe(h=>{(i===void 0||s&&h!==i)&&y(i=h)})}return{notify:o,set:u,subscribe:f}}function kt(){const{set:e,subscribe:a}=Le(!1);let s;async function o(){clearTimeout(s);try{const u=await fetch(`${rt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!u.ok)return!1;const y=(await u.json()).version!==Et;return y&&(e(!0),clearTimeout(s)),y}catch{return!1}}return{subscribe:a,check:o}}function de(e,a){return e.origin!==location.origin||!e.pathname.startsWith(a)}const St=-1,Rt=-2,At=-3,It=-4,Lt=-5,Ut=-6;function Ot(e,a){if(typeof e=="number")return u(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const s=e,o=Array(s.length);function u(f,y=!1){if(f===St)return;if(f===At)return NaN;if(f===It)return 1/0;if(f===Lt)return-1/0;if(f===Ut)return-0;if(y)throw new Error("Invalid input");if(f in o)return o[f];const i=s[f];if(!i||typeof i!="object")o[f]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const h=i[0],p=a==null?void 0:a[h];if(p)return o[f]=p(u(i[1]));switch(h){case"Date":o[f]=new Date(i[1]);break;case"Set":const m=new Set;o[f]=m;for(let S=1;S<i.length;S+=1)m.add(u(i[S]));break;case"Map":const C=new Map;o[f]=C;for(let S=1;S<i.length;S+=2)C.set(u(i[S]),u(i[S+1]));break;case"RegExp":o[f]=new RegExp(i[1],i[2]);break;case"Object":o[f]=Object(i[1]);break;case"BigInt":o[f]=BigInt(i[1]);break;case"null":const N=Object.create(null);o[f]=N;for(let S=1;S<i.length;S+=2)N[i[S]]=u(i[S+1]);break;default:throw new Error(`Unknown type ${h}`)}}else{const h=new Array(i.length);o[f]=h;for(let p=0;p<i.length;p+=1){const m=i[p];m!==Rt&&(h[p]=u(m))}}else{const h={};o[f]=h;for(const p in i){const m=i[p];h[p]=u(m)}}return o[f]}return u(0)}function xt(e){return e.filter(a=>a!=null)}const et=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...et];const Nt=new Set([...et]);[...Nt];async function Pt(e){var a;for(const s in e)if(typeof((a=e[s])==null?void 0:a.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([o,u])=>[o,await u])));return e}class ae{constructor(a,s){this.status=a,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${a}`}}toString(){return JSON.stringify(this.body)}}class Ke{constructor(a,s){this.status=a,this.location=s}}const Tt="x-sveltekit-invalidated";function $t(e){e.client}const M={url:Je({}),page:Je({}),navigating:Le(null),updated:kt()},J=We(Ze)??{},te=We(Xe)??{};function Re(e){J[e]=ne()}function jt(e,a){var Ve;const s=vt(e),o=e.nodes[0],u=e.nodes[1];o(),u();const f=document.documentElement,y=[],i=[];let h=null;const p={before_navigate:[],after_navigate:[]};let m={branch:[],error:null,url:null},C=!1,N=!1,S=!0,P=!1,O=!1,z=!1,B=!1,q,$=(Ve=history.state)==null?void 0:Ve[V];$||($=Date.now(),history.replaceState({...history.state,[V]:$},"",location.href));const ge=J[$];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let F,oe,X;async function Ue(){if(X=X||Promise.resolve(),await X,!X)return;X=null;const t=new URL(location.href),l=Q(t,!0);h=null;const n=oe={},c=l&&await _e(l);if(n===oe&&c){if(c.type==="redirect")return ie(new URL(c.location,t).href,{},[t.pathname],n);c.props.page!==void 0&&(F=c.props.page),q.$set(c.props)}}function Oe(t){i.some(l=>l==null?void 0:l.snapshot)&&(te[t]=i.map(l=>{var n;return(n=l==null?void 0:l.snapshot)==null?void 0:n.capture()}))}function xe(t){var l;(l=te[t])==null||l.forEach((n,c)=>{var r,d;(d=(r=i[c])==null?void 0:r.snapshot)==null||d.restore(n)})}function Ne(){Re($),ze(Ze,J),Oe($),ze(Xe,te)}async function ie(t,{noScroll:l=!1,replaceState:n=!1,keepFocus:c=!1,state:r={},invalidateAll:d=!1},g,E){return typeof t=="string"&&(t=new URL(t,Be(document))),fe({url:t,scroll:l?ne():null,keepfocus:c,redirect_chain:g,details:{state:r,replaceState:n},nav_token:E,accepted:()=>{d&&(B=!0)},blocked:()=>{},type:"goto"})}async function Pe(t){return h={id:t.id,promise:_e(t).then(l=>(l.type==="loaded"&&l.state.error&&(h=null),l))},h.promise}async function se(...t){const n=s.filter(c=>t.some(r=>c.exec(r))).map(c=>Promise.all([...c.layouts,c.leaf].map(r=>r==null?void 0:r[1]())));await Promise.all(n)}function Te(t){var c;m=t.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),F=t.props.page,q=new e.root({target:a,props:{...t.props,stores:M,components:i},hydrate:!0}),xe($);const n={from:null,to:{params:m.params,route:{id:((c=m.route)==null?void 0:c.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(r=>r(n)),N=!0}async function Z({url:t,params:l,branch:n,status:c,error:r,route:d,form:g}){let E="never";for(const _ of n)(_==null?void 0:_.slash)!==void 0&&(E=_.slash);t.pathname=ot(t.pathname,E),t.search=t.search;const v={type:"loaded",state:{url:t,params:l,branch:n,error:r,route:d},props:{constructors:xt(n).map(_=>_.node.component)}};g!==void 0&&(v.props.form=g);let b={},R=!F,A=0;for(let _=0;_<Math.max(n.length,m.branch.length);_+=1){const w=n[_],x=m.branch[_];(w==null?void 0:w.data)!==(x==null?void 0:x.data)&&(R=!0),w&&(b={...b,...w.data},R&&(v.props[`data_${A}`]=b),A+=1)}return(!m.url||t.href!==m.url.href||m.error!==r||g!==void 0&&g!==F.form||R)&&(v.props.page={error:r,params:l,route:{id:(d==null?void 0:d.id)??null},status:c,url:new URL(t),form:g??null,data:R?b:F.data}),v}async function me({loader:t,parent:l,url:n,params:c,route:r,server_data_node:d}){var b,R,A;let g=null;const E={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await t();if((b=v.universal)!=null&&b.load){let I=function(...w){for(const x of w){const{href:T}=new URL(x,n);E.dependencies.add(T)}};const _={route:{get id(){return E.route=!0,r.id}},params:new Proxy(c,{get:(w,x)=>(E.params.add(x),w[x])}),data:(d==null?void 0:d.data)??null,url:lt(n,()=>{E.url=!0}),async fetch(w,x){let T;w instanceof Request?(T=w.url,x={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...x}):T=w;const D=new URL(T,n);return I(D.href),D.origin===n.origin&&(T=D.href.slice(n.origin.length)),N?gt(T,D.href,x):ht(T,x)},setHeaders:()=>{},depends:I,parent(){return E.parent=!0,l()}};g=await v.universal.load.call(null,_)??null,g=g?await Pt(g):null}return{node:v,loader:t,server:d,universal:(R=v.universal)!=null&&R.load?{type:"data",data:g,uses:E}:null,data:g??(d==null?void 0:d.data)??null,slash:((A=v.universal)==null?void 0:A.trailingSlash)??(d==null?void 0:d.slash)}}function $e(t,l,n,c,r){if(B)return!0;if(!c)return!1;if(c.parent&&t||c.route&&l||c.url&&n)return!0;for(const d of c.params)if(r[d]!==m.params[d])return!0;for(const d of c.dependencies)if(y.some(g=>g(new URL(d))))return!0;return!1}function ye(t,l){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?l??null:null}async function _e({id:t,invalidating:l,url:n,params:c,route:r}){if((h==null?void 0:h.id)===t)return h.promise;const{errors:d,layouts:g,leaf:E}=r,v=[...g,E];d.forEach(k=>k==null?void 0:k().catch(()=>{})),v.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let b=null;const R=m.url?t!==m.url.pathname+m.url.search:!1,A=m.route?r.id!==m.route.id:!1;let I=!1;const _=v.map((k,U)=>{var G;const L=m.branch[U],j=!!(k!=null&&k[0])&&((L==null?void 0:L.loader)!==k[1]||$e(I,A,R,(G=L.server)==null?void 0:G.uses,c));return j&&(I=!0),j});if(_.some(Boolean)){try{b=await Ye(n,_)}catch(k){return ce({status:k instanceof ae?k.status:500,error:await ee(k,{url:n,params:c,route:{id:r.id}}),url:n,route:r})}if(b.type==="redirect")return b}const w=b==null?void 0:b.nodes;let x=!1;const T=v.map(async(k,U)=>{var we;if(!k)return;const L=m.branch[U],j=w==null?void 0:w[U];if((!j||j.type==="skip")&&k[1]===(L==null?void 0:L.loader)&&!$e(x,A,R,(we=L.universal)==null?void 0:we.uses,c))return L;if(x=!0,(j==null?void 0:j.type)==="error")throw j;return me({loader:k[1],url:n,params:c,route:r,parent:async()=>{var Fe;const qe={};for(let be=0;be<U;be+=1)Object.assign(qe,(Fe=await T[be])==null?void 0:Fe.data);return qe},server_data_node:ye(j===void 0&&k[0]?{type:"skip"}:j??null,k[0]?L==null?void 0:L.server:void 0)})});for(const k of T)k.catch(()=>{});const D=[];for(let k=0;k<v.length;k+=1)if(v[k])try{D.push(await T[k])}catch(U){if(U instanceof Ke)return{type:"redirect",location:U.location};let L=500,j;if(w!=null&&w.includes(U))L=U.status??L,j=U.error;else if(U instanceof ae)L=U.status,j=U.body;else{if(await M.updated.check())return await K(n);j=await ee(U,{params:c,url:n,route:{id:r.id}})}const G=await je(k,D,d);return G?await Z({url:n,params:c,branch:D.slice(0,G.idx).concat(G.node),status:L,error:j,route:r}):await De(n,{id:r.id},j,L)}else D.push(void 0);return await Z({url:n,params:c,branch:D,status:200,error:null,route:r,form:l?void 0:null})}async function je(t,l,n){for(;t--;)if(n[t]){let c=t;for(;!l[c];)c-=1;try{return{idx:c+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:t,error:l,url:n,route:c}){const r={};let d=null;if(e.server_loads[0]===0)try{const b=await Ye(n,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;d=b.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||C)&&await K(n)}const E=await me({loader:o,url:n,params:r,route:c,parent:()=>Promise.resolve({}),server_data_node:ye(d)}),v={node:await u(),loader:u,universal:null,server:null,data:null};return await Z({url:n,params:r,branch:[E,v],status:t,error:l,route:null})}function Q(t,l){if(de(t,H))return;const n=le(t);for(const c of s){const r=c.exec(n);if(r)return{id:t.pathname+t.search,invalidating:l,route:c,params:st(r),url:t}}}function le(t){return it(t.pathname.slice(H.length)||"/")}function Ce({url:t,type:l,intent:n,delta:c}){var E,v;let r=!1;const d={from:{params:m.params,route:{id:((E=m.route)==null?void 0:E.id)??null},url:m.url},to:{params:(n==null?void 0:n.params)??null,route:{id:((v=n==null?void 0:n.route)==null?void 0:v.id)??null},url:t},willUnload:!n,type:l};c!==void 0&&(d.delta=c);const g={...d,cancel:()=>{r=!0}};return O||p.before_navigate.forEach(b=>b(g)),r?null:d}async function fe({url:t,scroll:l,keepfocus:n,redirect_chain:c,details:r,type:d,delta:g,nav_token:E={},accepted:v,blocked:b}){var T,D,k;const R=Q(t,!1),A=Ce({url:t,type:d,delta:g,intent:R});if(!A){b();return}const I=$;v(),O=!0,N&&M.navigating.set(A),oe=E;let _=R&&await _e(R);if(!_){if(de(t,H))return await K(t);_=await De(t,{id:null},await ee(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(R==null?void 0:R.url)||t,oe!==E)return!1;if(_.type==="redirect")if(c.length>10||c.includes(t.pathname))_=await ce({status:500,error:await ee(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ie(new URL(_.location,t).href,{},[...c,t.pathname],E),!1;else((T=_.props.page)==null?void 0:T.status)>=400&&await M.updated.check()&&await K(t);if(y.length=0,B=!1,P=!0,Re(I),Oe(I),(D=_.props.page)!=null&&D.url&&_.props.page.url.pathname!==t.pathname&&(t.pathname=(k=_.props.page)==null?void 0:k.url.pathname),r){const U=r.replaceState?0:1;if(r.state[V]=$+=U,history[r.replaceState?"replaceState":"pushState"](r.state,"",t),!r.replaceState){let L=$+1;for(;te[L]||J[L];)delete te[L],delete J[L],L+=1}}h=null,N?(m=_.state,_.props.page&&(_.props.page.url=t),q.$set(_.props)):Te(_);const{activeElement:w}=document;if(await Ee(),S){const U=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));l?scrollTo(l.x,l.y):U?U.scrollIntoView():scrollTo(0,0)}const x=document.activeElement!==w&&document.activeElement!==document.body;!n&&!x&&Ae(),S=!0,_.props.page&&(F=_.props.page),O=!1,d==="popstate"&&xe($),p.after_navigate.forEach(U=>U(A)),M.navigating.set(null),P=!1}async function De(t,l,n,c){return t.origin===location.origin&&t.pathname===location.pathname&&!C?await ce({status:c,error:n,url:t,route:l}):await K(t)}function K(t){return location.href=t.href,new Promise(()=>{})}function nt(){let t;f.addEventListener("mousemove",d=>{const g=d.target;clearTimeout(t),t=setTimeout(()=>{c(g,2)},20)});function l(d){c(d.composedPath()[0],1)}f.addEventListener("mousedown",l),f.addEventListener("touchstart",l,{passive:!0});const n=new IntersectionObserver(d=>{for(const g of d)g.isIntersecting&&(se(le(new URL(g.target.href))),n.unobserve(g.target))},{threshold:0});function c(d,g){const E=He(d,f);if(!E)return;const{url:v,external:b,download:R}=Se(E,H);if(b||R)return;const A=ue(E);if(!A.reload)if(g<=A.preload_data){const I=Q(v,!1);I&&Pe(I)}else g<=A.preload_code&&se(le(v))}function r(){n.disconnect();for(const d of f.querySelectorAll("a")){const{url:g,external:E,download:v}=Se(d,H);if(E||v)continue;const b=ue(d);b.reload||(b.preload_code===pe.viewport&&n.observe(d),b.preload_code===pe.eager&&se(le(g)))}}p.after_navigate.push(r),r()}function ee(t,l){return t instanceof ae?t.body:e.hooks.handleError({error:t,event:l})??{message:l.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{Me(()=>(p.after_navigate.push(t),()=>{const l=p.after_navigate.indexOf(t);p.after_navigate.splice(l,1)}))},before_navigate:t=>{Me(()=>(p.before_navigate.push(t),()=>{const l=p.before_navigate.indexOf(t);p.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(P||!N)&&(S=!1)},goto:(t,l={})=>ie(t,l,[]),invalidate:t=>{if(typeof t=="function")y.push(t);else{const{href:l}=new URL(t,location.href);y.push(n=>n.href===l)}return Ue()},invalidate_all:()=>(B=!0,Ue()),preload_data:async t=>{const l=new URL(t,Be(document)),n=Q(l,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${l}`);await Pe(n)},preload_code:se,apply_action:async t=>{if(t.type==="error"){const l=new URL(location.href),{branch:n,route:c}=m;if(!c)return;const r=await je(m.branch.length,n,c.errors);if(r){const d=await Z({url:l,params:m.params,branch:n.slice(0,r.idx).concat(r.node),status:t.status??500,error:t.error,route:c});m=d.state,q.$set(d.props),Ee().then(Ae)}}else t.type==="redirect"?ie(t.location,{invalidateAll:!0},[]):(q.$set({form:null,page:{...F,form:t.data,status:t.status}}),await Ee(),q.$set({form:t.data}),t.type==="success"&&Ae())},_start_router:()=>{var l;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var r;let c=!1;if(Ne(),!O){const d={from:{params:m.params,route:{id:((r=m.route)==null?void 0:r.id)??null},url:m.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};p.before_navigate.forEach(g=>g(d))}c?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ne()}),(l=navigator.connection)!=null&&l.saveData||nt(),f.addEventListener("click",n=>{var I;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const c=He(n.composedPath()[0],f);if(!c)return;const{url:r,external:d,target:g,download:E}=Se(c,H);if(!r)return;if(g==="_parent"||g==="_top"){if(window.parent!==window)return}else if(g&&g!=="_self")return;const v=ue(c);if(!(c instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||E)return;if(d||v.reload){Ce({url:r,type:"link"})?O=!0:n.preventDefault();return}const[R,A]=r.href.split("#");if(A!==void 0&&R===location.href.split("#")[0]){if(m.url.hash===r.hash){n.preventDefault(),(I=c.ownerDocument.getElementById(A))==null||I.scrollIntoView();return}if(z=!0,Re($),t(r),!v.replace_state)return;z=!1,n.preventDefault()}fe({url:r,scroll:v.noscroll?ne():null,keepfocus:v.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:v.replace_state??r.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),f.addEventListener("submit",n=>{if(n.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formMethod)||c.method)!=="get")return;const g=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||c.action);if(de(g,H))return;const E=n.target,{keep_focus:v,noscroll:b,reload:R,replace_state:A}=ue(E);if(R)return;n.preventDefault(),n.stopPropagation();const I=new FormData(E),_=r==null?void 0:r.getAttribute("name");_&&I.append(_,(r==null?void 0:r.getAttribute("value"))??""),g.search=new URLSearchParams(I).toString(),fe({url:g,scroll:b?ne():null,keepfocus:v??!1,redirect_chain:[],details:{state:{},replaceState:A??g.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var c;if((c=n.state)!=null&&c[V]){if(n.state[V]===$)return;const r=J[n.state[V]];if(m.url.href.split("#")[0]===location.href.split("#")[0]){J[$]=ne(),$=n.state[V],scrollTo(r.x,r.y);return}const d=n.state[V]-$;await fe({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=n.state[V]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}else if(!z){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{z&&(z=!1,history.replaceState({...history.state,[V]:++$},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&M.navigating.set(null)});function t(n){m.url=n,M.page.set({...F,url:n}),M.page.notify()}},_hydrate:async({status:t=200,error:l,node_ids:n,params:c,route:r,data:d,form:g})=>{C=!0;const E=new URL(location.href);({params:c={},route:r={id:null}}=Q(E,!1)||{});let v;try{const b=n.map(async(I,_)=>{const w=d[_];return w!=null&&w.uses&&(w.uses=tt(w.uses)),me({loader:e.nodes[I],url:E,params:c,route:r,parent:async()=>{const x={};for(let T=0;T<_;T+=1)Object.assign(x,(await b[T]).data);return x},server_data_node:ye(w)})}),R=await Promise.all(b),A=s.find(({id:I})=>I===r.id);if(A){const I=A.layouts;for(let _=0;_<I.length;_++)I[_]||R.splice(_,0,void 0)}v=await Z({url:E,params:c,branch:R,status:t,error:l,form:g,route:A??null})}catch(b){if(b instanceof Ke){await K(new URL(b.location,location.href));return}v=await ce({status:b instanceof ae?b.status:500,error:await ee(b,{url:E,params:c,route:r}),url:E,route:r})}Te(v)}}}async function Ye(e,a){const s=new URL(e);s.pathname=dt(e.pathname),s.searchParams.append(Tt,a.map(u=>u?"1":"0").join(""));const o=await he(s.href);if(!o.ok)throw new ae(o.status,await o.json());return new Promise(async u=>{var m;const f=new Map,y=o.body.getReader(),i=new TextDecoder;function h(C){return Ot(C,{Promise:N=>new Promise((S,P)=>{f.set(N,{fulfil:S,reject:P})})})}let p="";for(;;){const{done:C,value:N}=await y.read();if(C&&!p)break;for(p+=!N&&p?`
`:i.decode(N);;){const S=p.indexOf(`
`);if(S===-1)break;const P=JSON.parse(p.slice(0,S));if(p=p.slice(S+1),P.type==="redirect")return u(P);if(P.type==="data")(m=P.nodes)==null||m.forEach(O=>{(O==null?void 0:O.type)==="data"&&(O.uses=tt(O.uses),O.data=h(O.data))}),u(P);else if(P.type==="chunk"){const{id:O,data:z,error:B}=P,q=f.get(O);f.delete(O),B?q.reject(h(B)):q.fulfil(h(z))}}}})}function tt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Ae(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const a=document.body,s=a.getAttribute("tabindex");a.tabIndex=-1,a.focus({preventScroll:!0,focusVisible:!1}),s!==null?a.setAttribute("tabindex",s):a.removeAttribute("tabindex");const o=getSelection();if(o&&o.type!=="None"){const u=[];for(let f=0;f<o.rangeCount;f+=1)u.push(o.getRangeAt(f));setTimeout(()=>{if(o.rangeCount===u.length){for(let f=0;f<o.rangeCount;f+=1){const y=u[f],i=o.getRangeAt(f);if(y.commonAncestorContainer!==i.commonAncestorContainer||y.startContainer!==i.startContainer||y.endContainer!==i.endContainer||y.startOffset!==i.startOffset||y.endOffset!==i.endOffset)return}o.removeAllRanges()}})}}}async function Vt(e,a,s){const o=jt(e,a);$t({client:o}),s?await o._hydrate(s):o.goto(location.href,{replaceState:!0}),o._start_router()}export{Vt as start};
