function t0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ua(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n0(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var am={exports:{}},Ba={},lm={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),r0=Symbol.for("react.portal"),o0=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),a0=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),s0=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),c0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),d0=Symbol.for("react.lazy"),Hf=Symbol.iterator;function p0(e){return e===null||typeof e!="object"?null:(e=Hf&&e[Hf]||e["@@iterator"],typeof e=="function"?e:null)}var sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},um=Object.assign,cm={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=cm,this.updater=n||sm}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fm(){}fm.prototype=Ir.prototype;function nc(e,t,n){this.props=e,this.context=t,this.refs=cm,this.updater=n||sm}var rc=nc.prototype=new fm;rc.constructor=nc;um(rc,Ir.prototype);rc.isPureReactComponent=!0;var Vf=Array.isArray,dm=Object.prototype.hasOwnProperty,oc={current:null},pm={key:!0,ref:!0,__self:!0,__source:!0};function hm(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)dm.call(t,r)&&!pm.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Xo,type:e,key:i,ref:a,props:o,_owner:oc.current}}function h0(e,t){return{$$typeof:Xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ic(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xo}function m0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gf=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?m0(""+e.key):t.toString(36)}function Li(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xo:case r0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Bl(a,0):r,Vf(o)?(n="",e!=null&&(n=e.replace(Gf,"$&/")+"/"),Li(o,t,n,"",function(u){return u})):o!=null&&(ic(o)&&(o=h0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Gf,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Vf(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Bl(i,l);a+=Li(i,t,n,s,o)}else if(s=p0(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Bl(i,l++),a+=Li(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function di(e,t,n){if(e==null)return e;var r=[],o=0;return Li(e,r,"","",function(i){return t.call(n,i,o++)}),r}function g0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},zi={transition:null},y0={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:zi,ReactCurrentOwner:oc};H.Children={map:di,forEach:function(e,t,n){di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return di(e,function(){t++}),t},toArray:function(e){return di(e,function(t){return t})||[]},only:function(e){if(!ic(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Ir;H.Fragment=o0;H.Profiler=a0;H.PureComponent=nc;H.StrictMode=i0;H.Suspense=c0;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=um({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=oc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)dm.call(t,s)&&!pm.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xo,type:e.type,key:o,ref:i,props:r,_owner:a}};H.createContext=function(e){return e={$$typeof:s0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l0,_context:e},e.Consumer=e};H.createElement=hm;H.createFactory=function(e){var t=hm.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:u0,render:e}};H.isValidElement=ic;H.lazy=function(e){return{$$typeof:d0,_payload:{_status:-1,_result:e},_init:g0}};H.memo=function(e,t){return{$$typeof:f0,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=zi.transition;zi.transition={};try{e()}finally{zi.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Ke.current.useCallback(e,t)};H.useContext=function(e){return Ke.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ke.current.useEffect(e,t)};H.useId=function(){return Ke.current.useId()};H.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ke.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};H.useRef=function(e){return Ke.current.useRef(e)};H.useState=function(e){return Ke.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ke.current.useTransition()};H.version="18.2.0";lm.exports=H;var b=lm.exports;const Te=Ua(b),Ns=t0({__proto__:null,default:Te},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=b,w0=Symbol.for("react.element"),x0=Symbol.for("react.fragment"),S0=Object.prototype.hasOwnProperty,b0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k0={key:!0,ref:!0,__self:!0,__source:!0};function mm(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)S0.call(t,r)&&!k0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:w0,type:e,key:i,ref:a,props:o,_owner:b0.current}}Ba.Fragment=x0;Ba.jsx=mm;Ba.jsxs=mm;am.exports=Ba;var S=am.exports;function E0(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function P0(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var _0=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(P0(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=E0(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Fe="-ms-",ia="-moz-",Y="-webkit-",gm="comm",ac="rule",lc="decl",O0="@import",ym="@keyframes",C0="@layer",j0=Math.abs,Wa=String.fromCharCode,R0=Object.assign;function $0(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function vm(e){return e.trim()}function T0(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function As(e,t){return e.indexOf(t)}function Ne(e,t){return e.charCodeAt(t)|0}function bo(e,t,n){return e.slice(t,n)}function Tt(e){return e.length}function sc(e){return e.length}function pi(e,t){return t.push(e),e}function N0(e,t){return e.map(t).join("")}var Ha=1,Er=1,wm=0,tt=0,ve=0,Dr="";function Va(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ha,column:Er,length:a,return:""}}function Qr(e,t){return R0(Va("",null,null,"",null,null,0),e,{length:-e.length},t)}function A0(){return ve}function L0(){return ve=tt>0?Ne(Dr,--tt):0,Er--,ve===10&&(Er=1,Ha--),ve}function it(){return ve=tt<wm?Ne(Dr,tt++):0,Er++,ve===10&&(Er=1,Ha++),ve}function zt(){return Ne(Dr,tt)}function Ii(){return tt}function Jo(e,t){return bo(Dr,e,t)}function ko(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xm(e){return Ha=Er=1,wm=Tt(Dr=e),tt=0,[]}function Sm(e){return Dr="",e}function Di(e){return vm(Jo(tt-1,Ls(e===91?e+2:e===40?e+1:e)))}function z0(e){for(;(ve=zt())&&ve<33;)it();return ko(e)>2||ko(ve)>3?"":" "}function I0(e,t){for(;--t&&it()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return Jo(e,Ii()+(t<6&&zt()==32&&it()==32))}function Ls(e){for(;it();)switch(ve){case e:return tt;case 34:case 39:e!==34&&e!==39&&Ls(ve);break;case 40:e===41&&Ls(e);break;case 92:it();break}return tt}function D0(e,t){for(;it()&&e+ve!==47+10;)if(e+ve===42+42&&zt()===47)break;return"/*"+Jo(t,tt-1)+"*"+Wa(e===47?e:it())}function M0(e){for(;!ko(zt());)it();return Jo(e,tt)}function F0(e){return Sm(Mi("",null,null,null,[""],e=xm(e),0,[0],e))}function Mi(e,t,n,r,o,i,a,l,s){for(var u=0,f=0,c=a,h=0,v=0,g=0,m=1,w=1,p=1,d=0,y="",x=o,E=i,P=r,C=y;w;)switch(g=d,d=it()){case 40:if(g!=108&&Ne(C,c-1)==58){As(C+=q(Di(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Di(d);break;case 9:case 10:case 13:case 32:C+=z0(g);break;case 92:C+=I0(Ii()-1,7);continue;case 47:switch(zt()){case 42:case 47:pi(U0(D0(it(),Ii()),t,n),s);break;default:C+="/"}break;case 123*m:l[u++]=Tt(C)*p;case 125*m:case 59:case 0:switch(d){case 0:case 125:w=0;case 59+f:p==-1&&(C=q(C,/\f/g,"")),v>0&&Tt(C)-c&&pi(v>32?Qf(C+";",r,n,c-1):Qf(q(C," ","")+";",r,n,c-2),s);break;case 59:C+=";";default:if(pi(P=Kf(C,t,n,u,f,o,l,y,x=[],E=[],c),i),d===123)if(f===0)Mi(C,t,P,P,x,i,c,l,E);else switch(h===99&&Ne(C,3)===110?100:h){case 100:case 108:case 109:case 115:Mi(e,P,P,r&&pi(Kf(e,P,P,0,0,o,l,y,o,x=[],c),E),o,E,c,l,r?x:E);break;default:Mi(C,P,P,P,[""],E,0,l,E)}}u=f=v=0,m=p=1,y=C="",c=a;break;case 58:c=1+Tt(C),v=g;default:if(m<1){if(d==123)--m;else if(d==125&&m++==0&&L0()==125)continue}switch(C+=Wa(d),d*m){case 38:p=f>0?1:(C+="\f",-1);break;case 44:l[u++]=(Tt(C)-1)*p,p=1;break;case 64:zt()===45&&(C+=Di(it())),h=zt(),f=c=Tt(y=C+=M0(Ii())),d++;break;case 45:g===45&&Tt(C)==2&&(m=0)}}return i}function Kf(e,t,n,r,o,i,a,l,s,u,f){for(var c=o-1,h=o===0?i:[""],v=sc(h),g=0,m=0,w=0;g<r;++g)for(var p=0,d=bo(e,c+1,c=j0(m=a[g])),y=e;p<v;++p)(y=vm(m>0?h[p]+" "+d:q(d,/&\f/g,h[p])))&&(s[w++]=y);return Va(e,t,n,o===0?ac:l,s,u,f)}function U0(e,t,n){return Va(e,t,n,gm,Wa(A0()),bo(e,2,-2),0)}function Qf(e,t,n,r){return Va(e,t,n,lc,bo(e,0,r),bo(e,r+1,-1),r)}function mr(e,t){for(var n="",r=sc(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function B0(e,t,n,r){switch(e.type){case C0:if(e.children.length)break;case O0:case lc:return e.return=e.return||e.value;case gm:return"";case ym:return e.return=e.value+"{"+mr(e.children,r)+"}";case ac:e.value=e.props.join(",")}return Tt(n=mr(e.children,r))?e.return=e.value+"{"+n+"}":""}function W0(e){var t=sc(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function H0(e){return function(t){t.root||(t=t.return)&&e(t)}}var Yf=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function bm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var V0=function(t,n,r){for(var o=0,i=0;o=i,i=zt(),o===38&&i===12&&(n[r]=1),!ko(i);)it();return Jo(t,tt)},G0=function(t,n){var r=-1,o=44;do switch(ko(o)){case 0:o===38&&zt()===12&&(n[r]=1),t[r]+=V0(tt-1,n,r);break;case 2:t[r]+=Di(o);break;case 4:if(o===44){t[++r]=zt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Wa(o)}while(o=it());return t},K0=function(t,n){return Sm(G0(xm(t),n))},qf=new WeakMap,Q0=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!qf.get(r))&&!o){qf.set(t,!0);for(var i=[],a=K0(n,i),l=r.props,s=0,u=0;s<a.length;s++)for(var f=0;f<l.length;f++,u++)t.props[u]=i[s]?a[s].replace(/&\f/g,l[f]):l[f]+" "+a[s]}}},Y0=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function km(e,t){switch($0(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+ia+e+Fe+e+e;case 6828:case 4268:return Y+e+Fe+e+e;case 6165:return Y+e+Fe+"flex-"+e+e;case 5187:return Y+e+q(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Fe+"flex-$1$2")+e;case 5443:return Y+e+Fe+"flex-item-"+q(e,/flex-|-self/,"")+e;case 4675:return Y+e+Fe+"flex-line-pack"+q(e,/align-content|flex-|-self/,"")+e;case 5548:return Y+e+Fe+q(e,"shrink","negative")+e;case 5292:return Y+e+Fe+q(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+q(e,"-grow","")+Y+e+Fe+q(e,"grow","positive")+e;case 4554:return Y+q(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tt(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+ia+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~As(e,"stretch")?km(q(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ne(e,t+1)!==115)break;case 6444:switch(Ne(e,Tt(e)-3-(~As(e,"!important")&&10))){case 107:return q(e,":",":"+Y)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+(Ne(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Fe+"$2box$3")+e}break;case 5936:switch(Ne(e,t+11)){case 114:return Y+e+Fe+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+Fe+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+Fe+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Y+e+Fe+e+e}return e}var q0=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case lc:t.return=km(t.value,t.length);break;case ym:return mr([Qr(t,{value:q(t.value,"@","@"+Y)})],o);case ac:if(t.length)return N0(t.props,function(i){switch(T0(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return mr([Qr(t,{props:[q(i,/:(read-\w+)/,":"+ia+"$1")]})],o);case"::placeholder":return mr([Qr(t,{props:[q(i,/:(plac\w+)/,":"+Y+"input-$1")]}),Qr(t,{props:[q(i,/:(plac\w+)/,":"+ia+"$1")]}),Qr(t,{props:[q(i,/:(plac\w+)/,Fe+"input-$1")]})],o)}return""})}},X0=[q0],J0=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var w=m.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var o=t.stylisPlugins||X0,i={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var w=m.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)i[w[p]]=!0;l.push(m)});var s,u=[Q0,Y0];{var f,c=[B0,H0(function(m){f.insert(m)})],h=W0(u.concat(o,c)),v=function(w){return mr(F0(w),h)};s=function(w,p,d,y){f=d,v(w?w+"{"+p.styles+"}":p.styles),y&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new _0({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(l),g};function Eo(){return Eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eo.apply(this,arguments)}var Em={exports:{}},te={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,uc=_e?Symbol.for("react.element"):60103,cc=_e?Symbol.for("react.portal"):60106,Ga=_e?Symbol.for("react.fragment"):60107,Ka=_e?Symbol.for("react.strict_mode"):60108,Qa=_e?Symbol.for("react.profiler"):60114,Ya=_e?Symbol.for("react.provider"):60109,qa=_e?Symbol.for("react.context"):60110,fc=_e?Symbol.for("react.async_mode"):60111,Xa=_e?Symbol.for("react.concurrent_mode"):60111,Ja=_e?Symbol.for("react.forward_ref"):60112,Za=_e?Symbol.for("react.suspense"):60113,Z0=_e?Symbol.for("react.suspense_list"):60120,el=_e?Symbol.for("react.memo"):60115,tl=_e?Symbol.for("react.lazy"):60116,e1=_e?Symbol.for("react.block"):60121,t1=_e?Symbol.for("react.fundamental"):60117,n1=_e?Symbol.for("react.responder"):60118,r1=_e?Symbol.for("react.scope"):60119;function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case uc:switch(e=e.type,e){case fc:case Xa:case Ga:case Qa:case Ka:case Za:return e;default:switch(e=e&&e.$$typeof,e){case qa:case Ja:case tl:case el:case Ya:return e;default:return t}}case cc:return t}}}function Pm(e){return ut(e)===Xa}te.AsyncMode=fc;te.ConcurrentMode=Xa;te.ContextConsumer=qa;te.ContextProvider=Ya;te.Element=uc;te.ForwardRef=Ja;te.Fragment=Ga;te.Lazy=tl;te.Memo=el;te.Portal=cc;te.Profiler=Qa;te.StrictMode=Ka;te.Suspense=Za;te.isAsyncMode=function(e){return Pm(e)||ut(e)===fc};te.isConcurrentMode=Pm;te.isContextConsumer=function(e){return ut(e)===qa};te.isContextProvider=function(e){return ut(e)===Ya};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===uc};te.isForwardRef=function(e){return ut(e)===Ja};te.isFragment=function(e){return ut(e)===Ga};te.isLazy=function(e){return ut(e)===tl};te.isMemo=function(e){return ut(e)===el};te.isPortal=function(e){return ut(e)===cc};te.isProfiler=function(e){return ut(e)===Qa};te.isStrictMode=function(e){return ut(e)===Ka};te.isSuspense=function(e){return ut(e)===Za};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ga||e===Xa||e===Qa||e===Ka||e===Za||e===Z0||typeof e=="object"&&e!==null&&(e.$$typeof===tl||e.$$typeof===el||e.$$typeof===Ya||e.$$typeof===qa||e.$$typeof===Ja||e.$$typeof===t1||e.$$typeof===n1||e.$$typeof===r1||e.$$typeof===e1)};te.typeOf=ut;Em.exports=te;var dc=Em.exports,pc=dc,o1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_m={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hc={};hc[pc.ForwardRef]=a1;hc[pc.Memo]=_m;function Xf(e){return pc.isMemo(e)?_m:hc[e.$$typeof]||o1}var l1=Object.defineProperty,s1=Object.getOwnPropertyNames,Jf=Object.getOwnPropertySymbols,u1=Object.getOwnPropertyDescriptor,c1=Object.getPrototypeOf,Zf=Object.prototype;function Om(e,t,n){if(typeof t!="string"){if(Zf){var r=c1(t);r&&r!==Zf&&Om(e,r,n)}var o=s1(t);Jf&&(o=o.concat(Jf(t)));for(var i=Xf(e),a=Xf(t),l=0;l<o.length;++l){var s=o[l];if(!i1[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var u=u1(t,s);try{l1(e,s,u)}catch{}}}}return e}var f1=Om;const Cm=Ua(f1);var d1=function(e,t){return Cm(e,t)},p1=!0;function mc(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var nl=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||p1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},rl=function(t,n,r){nl(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function h1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var m1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},g1=/[A-Z]|^ms/g,y1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,jm=function(t){return t.charCodeAt(1)===45},ed=function(t){return t!=null&&typeof t!="boolean"},Wl=bm(function(e){return jm(e)?e:e.replace(g1,"-$&").toLowerCase()}),td=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(y1,function(r,o,i){return Nt={name:o,styles:i,next:Nt},o})}return m1[t]!==1&&!jm(t)&&typeof n=="number"&&n!==0?n+"px":n};function Po(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Nt={name:n.name,styles:n.styles,next:Nt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Nt={name:r.name,styles:r.styles,next:Nt},r=r.next;var o=n.styles+";";return o}return v1(e,t,n)}case"function":{if(e!==void 0){var i=Nt,a=n(e);return Nt=i,Po(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function v1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Po(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":ed(a)&&(r+=Wl(i)+":"+td(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)ed(a[l])&&(r+=Wl(i)+":"+td(i,a[l])+";");else{var s=Po(e,t,a);switch(i){case"animation":case"animationName":{r+=Wl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var nd=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Nt,Zo=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";Nt=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Po(r,n,a)):i+=a[0];for(var l=1;l<t.length;l++)i+=Po(r,n,t[l]),o&&(i+=a[l]);nd.lastIndex=0;for(var s="",u;(u=nd.exec(i))!==null;)s+="-"+u[1];var f=h1(i)+s;return{name:f,styles:i,next:Nt}},w1=function(t){return t()},Rm=Ns["useInsertionEffect"]?Ns["useInsertionEffect"]:!1,gc=Rm||w1,rd=Rm||b.useLayoutEffect,yc={}.hasOwnProperty,vc=b.createContext(typeof HTMLElement<"u"?J0({key:"css"}):null),x1=vc.Provider,S1=function(){return b.useContext(vc)},ei=function(t){return b.forwardRef(function(n,r){var o=b.useContext(vc);return t(n,o,r)})},qt=b.createContext({}),b1=function(){return b.useContext(qt)},k1=function(t,n){if(typeof n=="function"){var r=n(t);return r}return Eo({},t,n)},E1=Yf(function(e){return Yf(function(t){return k1(e,t)})}),$m=function(t){var n=b.useContext(qt);return t.theme!==n&&(n=E1(n)(t.theme)),b.createElement(qt.Provider,{value:n},t.children)};function P1(e){var t=e.displayName||e.name||"Component",n=function(i,a){var l=b.useContext(qt);return b.createElement(e,Eo({theme:l,ref:a},i))},r=b.forwardRef(n);return r.displayName="WithTheme("+t+")",d1(r,e)}var zs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",_1=function(t,n){var r={};for(var o in n)yc.call(n,o)&&(r[o]=n[o]);return r[zs]=t,r},O1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return nl(n,r,o),gc(function(){return rl(n,r,o)}),null},C1=ei(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[zs],i=[r],a="";typeof e.className=="string"?a=mc(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var l=Zo(i,void 0,b.useContext(qt));a+=t.key+"-"+l.name;var s={};for(var u in e)yc.call(e,u)&&u!=="css"&&u!==zs&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(O1,{cache:t,serialized:l,isStringTag:typeof o=="string"}),b.createElement(o,s))}),j1=C1,od=function(t,n){var r=arguments;if(n==null||!yc.call(n,"css"))return b.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=j1,i[1]=_1(t,n);for(var a=2;a<o;a++)i[a]=r[a];return b.createElement.apply(null,i)},Tm=ei(function(e,t){var n=e.styles,r=Zo([n],void 0,b.useContext(qt)),o=b.useRef();return rd(function(){var i=t.key+"-global",a=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,s=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),s!==null&&(l=!0,s.setAttribute("data-emotion",i),a.hydrate([s])),o.current=[a,l],function(){a.flush()}},[t]),rd(function(){var i=o.current,a=i[0],l=i[1];if(l){i[1]=!1;return}if(r.next!==void 0&&rl(t,r.next,!0),a.tags.length){var s=a.tags[a.tags.length-1].nextElementSibling;a.before=s,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function wc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Zo(t)}var R1=function(){var t=wc.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},$1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))a=e(i);else{a="";for(var l in i)i[l]&&l&&(a&&(a+=" "),a+=l)}break}default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};function T1(e,t,n){var r=[],o=mc(e,r,n);return r.length<2?n:o+t(r)}var N1=function(t){var n=t.cache,r=t.serializedArr;return gc(function(){for(var o=0;o<r.length;o++)rl(n,r[o],!1)}),null},A1=ei(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];var h=Zo(f,t.registered);return r.push(h),nl(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];return T1(t.registered,o,$1(f))},a={css:o,cx:i,theme:b.useContext(qt)},l=e.children(a);return n=!0,b.createElement(b.Fragment,null,b.createElement(N1,{cache:t,serializedArr:r}),l)});const L1=Object.freeze(Object.defineProperty({__proto__:null,CacheProvider:x1,ClassNames:A1,Global:Tm,ThemeContext:qt,ThemeProvider:$m,__unsafe_useEmotionCache:S1,createElement:od,css:wc,jsx:od,keyframes:R1,useTheme:b1,withEmotionCache:ei,withTheme:P1},Symbol.toStringTag,{value:"Module"}));var Is={},Nm={exports:{}},ct={},Am={exports:{}},Lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,M){var F=$.length;$.push(M);e:for(;0<F;){var re=F-1>>>1,N=$[re];if(0<o(N,M))$[re]=M,$[F]=N,F=re;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var M=$[0],F=$.pop();if(F!==M){$[0]=F;e:for(var re=0,N=$.length,A=N>>>1;re<A;){var L=2*(re+1)-1,U=$[L],k=L+1,V=$[k];if(0>o(U,F))k<N&&0>o(V,U)?($[re]=V,$[k]=F,re=k):($[re]=U,$[L]=F,re=L);else if(k<N&&0>o(V,F))$[re]=V,$[k]=F,re=k;else break e}}return M}function o($,M){var F=$.sortIndex-M.sortIndex;return F!==0?F:$.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,c=null,h=3,v=!1,g=!1,m=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=$)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function x($){if(m=!1,y($),!g)if(n(s)!==null)g=!0,Ut(E);else{var M=n(u);M!==null&&He(x,M.startTime-$)}}function E($,M){g=!1,m&&(m=!1,p(R),R=-1),v=!0;var F=h;try{for(y(M),c=n(s);c!==null&&(!(c.expirationTime>M)||$&&!le());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var N=re(c.expirationTime<=M);M=e.unstable_now(),typeof N=="function"?c.callback=N:c===n(s)&&r(s),y(M)}else r(s);c=n(s)}if(c!==null)var A=!0;else{var L=n(u);L!==null&&He(x,L.startTime-M),A=!1}return A}finally{c=null,h=F,v=!1}}var P=!1,C=null,R=-1,D=5,I=-1;function le(){return!(e.unstable_now()-I<D)}function Se(){if(C!==null){var $=e.unstable_now();I=$;var M=!0;try{M=C(!0,$)}finally{M?Oe():(P=!1,C=null)}}else P=!1}var Oe;if(typeof d=="function")Oe=function(){d(Se)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ze=nt.port2;nt.port1.onmessage=Se,Oe=function(){ze.postMessage(null)}}else Oe=function(){w(Se,0)};function Ut($){C=$,P||(P=!0,Oe())}function He($,M){R=w(function(){$(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Ut(E))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function($){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var F=h;h=M;try{return $()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,M){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var F=h;h=$;try{return M()}finally{h=F}},e.unstable_scheduleCallback=function($,M,F){var re=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?re+F:re):F=re,$){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=F+N,$={id:f++,callback:M,priorityLevel:$,startTime:F,expirationTime:N,sortIndex:-1},F>re?($.sortIndex=F,t(u,$),n(s)===null&&$===n(u)&&(m?(p(R),R=-1):m=!0,He(x,F-re))):($.sortIndex=N,t(s,$),g||v||(g=!0,Ut(E))),$},e.unstable_shouldYield=le,e.unstable_wrapCallback=function($){var M=h;return function(){var F=h;h=M;try{return $.apply(this,arguments)}finally{h=F}}}})(Lm);Am.exports=Lm;var z1=Am.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=b,lt=z1;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Im=new Set,_o={};function Zn(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(_o[e]=t,e=0;e<t.length;e++)Im.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ds=Object.prototype.hasOwnProperty,I1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,id={},ad={};function D1(e){return Ds.call(ad,e)?!0:Ds.call(id,e)?!1:I1.test(e)?ad[e]=!0:(id[e]=!0,!1)}function M1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F1(e,t,n,r){if(t===null||typeof t>"u"||M1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qe(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var xc=/[\-:]([a-z])/g;function Sc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xc,Sc);Le[t]=new Qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xc,Sc);Le[t]=new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xc,Sc);Le[t]=new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function bc(e,t,n,r){var o=Le.hasOwnProperty(t)?Le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F1(t,n,o,r)&&(n=null),r||o===null?D1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),nr=Symbol.for("react.portal"),rr=Symbol.for("react.fragment"),kc=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Mm=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),Fs=Symbol.for("react.suspense"),Us=Symbol.for("react.suspense_list"),Pc=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Fm=Symbol.for("react.offscreen"),ld=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=ld&&e[ld]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Hl;function oo(e){if(Hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hl=t&&t[1]||""}return`
`+Hl+e}var Vl=!1;function Gl(e,t){if(!e||Vl)return"";Vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oo(e):""}function U1(e){switch(e.tag){case 5:return oo(e.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return e=Gl(e.type,!1),e;case 11:return e=Gl(e.type.render,!1),e;case 1:return e=Gl(e.type,!0),e;default:return""}}function Bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rr:return"Fragment";case nr:return"Portal";case Ms:return"Profiler";case kc:return"StrictMode";case Fs:return"Suspense";case Us:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mm:return(e.displayName||"Context")+".Consumer";case Dm:return(e._context.displayName||"Context")+".Provider";case Ec:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pc:return t=e.displayName||null,t!==null?t:Bs(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return Bs(e(t))}catch{}}return null}function B1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bs(t);case 8:return t===kc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Um(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function W1(e){var t=Um(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=W1(e))}function Bm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Um(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ws(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wm(e,t){t=t.checked,t!=null&&bc(e,"checked",t,!1)}function Hs(e,t){Wm(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vs(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ud(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vs(e,t,n){(t!=="number"||aa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var io=Array.isArray;function gr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Gs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(io(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function Hm(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gi,Gm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Oo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H1=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(e){H1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),co[t]=co[e]})});function Km(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||co.hasOwnProperty(e)&&co[e]?(""+t).trim():t+"px"}function Qm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Km(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var V1=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qs(e,t){if(t){if(V1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qs=null;function _c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,yr=null,vr=null;function dd(e){if(e=ri(e)){if(typeof Xs!="function")throw Error(j(280));var t=e.stateNode;t&&(t=sl(t),Xs(e.stateNode,e.type,t))}}function Ym(e){yr?vr?vr.push(e):vr=[e]:yr=e}function qm(){if(yr){var e=yr,t=vr;if(vr=yr=null,dd(e),t)for(e=0;e<t.length;e++)dd(t[e])}}function Xm(e,t){return e(t)}function Jm(){}var Kl=!1;function Zm(e,t,n){if(Kl)return e(t,n);Kl=!0;try{return Xm(e,t,n)}finally{Kl=!1,(yr!==null||vr!==null)&&(Jm(),qm())}}function Co(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Js=!1;if(Xt)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){Js=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Js=!1}function G1(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var fo=!1,la=null,sa=!1,Zs=null,K1={onError:function(e){fo=!0,la=e}};function Q1(e,t,n,r,o,i,a,l,s){fo=!1,la=null,G1.apply(K1,arguments)}function Y1(e,t,n,r,o,i,a,l,s){if(Q1.apply(this,arguments),fo){if(fo){var u=la;fo=!1,la=null}else throw Error(j(198));sa||(sa=!0,Zs=u)}}function er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function eg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pd(e){if(er(e)!==e)throw Error(j(188))}function q1(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return pd(o),e;if(i===r)return pd(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function tg(e){return e=q1(e),e!==null?ng(e):null}function ng(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ng(e);if(t!==null)return t;e=e.sibling}return null}var rg=lt.unstable_scheduleCallback,hd=lt.unstable_cancelCallback,X1=lt.unstable_shouldYield,J1=lt.unstable_requestPaint,ye=lt.unstable_now,Z1=lt.unstable_getCurrentPriorityLevel,Oc=lt.unstable_ImmediatePriority,og=lt.unstable_UserBlockingPriority,ua=lt.unstable_NormalPriority,ew=lt.unstable_LowPriority,ig=lt.unstable_IdlePriority,ol=null,It=null;function tw(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:ow,nw=Math.log,rw=Math.LN2;function ow(e){return e>>>=0,e===0?32:31-(nw(e)/rw|0)|0}var yi=64,vi=4194304;function ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ca(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=ao(l):(i&=a,i!==0&&(r=ao(i)))}else a=n&~o,a!==0?r=ao(a):i!==0&&(r=ao(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),o=1<<n,r|=e[n],t&=~o;return r}function iw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ot(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=iw(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function eu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ag(){var e=yi;return yi<<=1,!(yi&4194240)&&(yi=64),e}function Ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ti(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function lw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ot(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Cc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function lg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sg,jc,ug,cg,fg,tu=!1,wi=[],vn=null,wn=null,xn=null,jo=new Map,Ro=new Map,fn=[],sw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(t.pointerId)}}function Xr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ri(t),t!==null&&jc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function uw(e,t,n,r,o){switch(t){case"focusin":return vn=Xr(vn,e,t,n,r,o),!0;case"dragenter":return wn=Xr(wn,e,t,n,r,o),!0;case"mouseover":return xn=Xr(xn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return jo.set(i,Xr(jo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ro.set(i,Xr(Ro.get(i)||null,e,t,n,r,o)),!0}return!1}function dg(e){var t=Bn(e.target);if(t!==null){var n=er(t);if(n!==null){if(t=n.tag,t===13){if(t=eg(n),t!==null){e.blockedOn=t,fg(e.priority,function(){ug(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qs=r,n.target.dispatchEvent(r),qs=null}else return t=ri(n),t!==null&&jc(t),e.blockedOn=n,!1;t.shift()}return!0}function gd(e,t,n){Fi(e)&&n.delete(t)}function cw(){tu=!1,vn!==null&&Fi(vn)&&(vn=null),wn!==null&&Fi(wn)&&(wn=null),xn!==null&&Fi(xn)&&(xn=null),jo.forEach(gd),Ro.forEach(gd)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,tu||(tu=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,cw)))}function $o(e){function t(o){return Jr(o,e)}if(0<wi.length){Jr(wi[0],e);for(var n=1;n<wi.length;n++){var r=wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&Jr(vn,e),wn!==null&&Jr(wn,e),xn!==null&&Jr(xn,e),jo.forEach(t),Ro.forEach(t),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)dg(n),n.blockedOn===null&&fn.shift()}var wr=rn.ReactCurrentBatchConfig,fa=!0;function fw(e,t,n,r){var o=ee,i=wr.transition;wr.transition=null;try{ee=1,Rc(e,t,n,r)}finally{ee=o,wr.transition=i}}function dw(e,t,n,r){var o=ee,i=wr.transition;wr.transition=null;try{ee=4,Rc(e,t,n,r)}finally{ee=o,wr.transition=i}}function Rc(e,t,n,r){if(fa){var o=nu(e,t,n,r);if(o===null)os(e,t,r,da,n),md(e,r);else if(uw(o,e,t,n,r))r.stopPropagation();else if(md(e,r),t&4&&-1<sw.indexOf(e)){for(;o!==null;){var i=ri(o);if(i!==null&&sg(i),i=nu(e,t,n,r),i===null&&os(e,t,r,da,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else os(e,t,r,null,n)}}var da=null;function nu(e,t,n,r){if(da=null,e=_c(r),e=Bn(e),e!==null)if(t=er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=eg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return da=e,null}function pg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z1()){case Oc:return 1;case og:return 4;case ua:case ew:return 16;case ig:return 536870912;default:return 16}default:return 16}}var hn=null,$c=null,Ui=null;function hg(){if(Ui)return Ui;var e,t=$c,n=t.length,r,o="value"in hn?hn.value:hn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ui=o.slice(e,1<r?1-r:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function yd(){return!1}function ft(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xi:yd,this.isPropagationStopped=yd,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=ft(Mr),ni=de({},Mr,{view:0,detail:0}),pw=ft(ni),Yl,ql,Zr,il=de({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(Yl=e.screenX-Zr.screenX,ql=e.screenY-Zr.screenY):ql=Yl=0,Zr=e),Yl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),vd=ft(il),hw=de({},il,{dataTransfer:0}),mw=ft(hw),gw=de({},ni,{relatedTarget:0}),Xl=ft(gw),yw=de({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),vw=ft(yw),ww=de({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xw=ft(ww),Sw=de({},Mr,{data:0}),wd=ft(Sw),bw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ew={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ew[e])?!!t[e]:!1}function Nc(){return Pw}var _w=de({},ni,{key:function(e){if(e.key){var t=bw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ow=ft(_w),Cw=de({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=ft(Cw),jw=de({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),Rw=ft(jw),$w=de({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tw=ft($w),Nw=de({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Aw=ft(Nw),Lw=[9,13,27,32],Ac=Xt&&"CompositionEvent"in window,po=null;Xt&&"documentMode"in document&&(po=document.documentMode);var zw=Xt&&"TextEvent"in window&&!po,mg=Xt&&(!Ac||po&&8<po&&11>=po),Sd=String.fromCharCode(32),bd=!1;function gg(e,t){switch(e){case"keyup":return Lw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function Iw(e,t){switch(e){case"compositionend":return yg(t);case"keypress":return t.which!==32?null:(bd=!0,Sd);case"textInput":return e=t.data,e===Sd&&bd?null:e;default:return null}}function Dw(e,t){if(or)return e==="compositionend"||!Ac&&gg(e,t)?(e=hg(),Ui=$c=hn=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mg&&t.locale!=="ko"?null:t.data;default:return null}}var Mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mw[e.type]:t==="textarea"}function vg(e,t,n,r){Ym(r),t=pa(t,"onChange"),0<t.length&&(n=new Tc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ho=null,To=null;function Fw(e){jg(e,0)}function al(e){var t=lr(e);if(Bm(t))return e}function Uw(e,t){if(e==="change")return t}var wg=!1;if(Xt){var Jl;if(Xt){var Zl="oninput"in document;if(!Zl){var Ed=document.createElement("div");Ed.setAttribute("oninput","return;"),Zl=typeof Ed.oninput=="function"}Jl=Zl}else Jl=!1;wg=Jl&&(!document.documentMode||9<document.documentMode)}function Pd(){ho&&(ho.detachEvent("onpropertychange",xg),To=ho=null)}function xg(e){if(e.propertyName==="value"&&al(To)){var t=[];vg(t,To,e,_c(e)),Zm(Fw,t)}}function Bw(e,t,n){e==="focusin"?(Pd(),ho=t,To=n,ho.attachEvent("onpropertychange",xg)):e==="focusout"&&Pd()}function Ww(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(To)}function Hw(e,t){if(e==="click")return al(t)}function Vw(e,t){if(e==="input"||e==="change")return al(t)}function Gw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Gw;function No(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ds.call(t,o)||!jt(e[o],t[o]))return!1}return!0}function _d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Od(e,t){var n=_d(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_d(n)}}function Sg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bg(){for(var e=window,t=aa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=aa(e.document)}return t}function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kw(e){var t=bg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sg(n.ownerDocument.documentElement,n)){if(r!==null&&Lc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Od(n,i);var a=Od(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qw=Xt&&"documentMode"in document&&11>=document.documentMode,ir=null,ru=null,mo=null,ou=!1;function Cd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||ir==null||ir!==aa(r)||(r=ir,"selectionStart"in r&&Lc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&No(mo,r)||(mo=r,r=pa(ru,"onSelect"),0<r.length&&(t=new Tc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},es={},kg={};Xt&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function ll(e){if(es[e])return es[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kg)return es[e]=t[n];return e}var Eg=ll("animationend"),Pg=ll("animationiteration"),_g=ll("animationstart"),Og=ll("transitionend"),Cg=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){Cg.set(e,t),Zn(t,[e])}for(var ts=0;ts<jd.length;ts++){var ns=jd[ts],Yw=ns.toLowerCase(),qw=ns[0].toUpperCase()+ns.slice(1);An(Yw,"on"+qw)}An(Eg,"onAnimationEnd");An(Pg,"onAnimationIteration");An(_g,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Og,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xw=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Y1(r,t,void 0,e),e.currentTarget=null}function jg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Rd(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Rd(o,l,u),i=s}}}if(sa)throw e=Zs,sa=!1,Zs=null,e}function ie(e,t){var n=t[uu];n===void 0&&(n=t[uu]=new Set);var r=e+"__bubble";n.has(r)||(Rg(t,e,2,!1),n.add(r))}function rs(e,t,n){var r=0;t&&(r|=4),Rg(n,e,r,t)}var bi="_reactListening"+Math.random().toString(36).slice(2);function Ao(e){if(!e[bi]){e[bi]=!0,Im.forEach(function(n){n!=="selectionchange"&&(Xw.has(n)||rs(n,!1,e),rs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bi]||(t[bi]=!0,rs("selectionchange",!1,t))}}function Rg(e,t,n,r){switch(pg(t)){case 1:var o=fw;break;case 4:o=dw;break;default:o=Rc}n=o.bind(null,t,n,e),o=void 0,!Js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function os(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Bn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Zm(function(){var u=i,f=_c(n),c=[];e:{var h=Cg.get(e);if(h!==void 0){var v=Tc,g=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":v=Ow;break;case"focusin":g="focus",v=Xl;break;case"focusout":g="blur",v=Xl;break;case"beforeblur":case"afterblur":v=Xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=mw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Rw;break;case Eg:case Pg:case _g:v=vw;break;case Og:v=Tw;break;case"scroll":v=pw;break;case"wheel":v=Aw;break;case"copy":case"cut":case"paste":v=xw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=xd}var m=(t&4)!==0,w=!m&&e==="scroll",p=m?h!==null?h+"Capture":null:h;m=[];for(var d=u,y;d!==null;){y=d;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,p!==null&&(x=Co(d,p),x!=null&&m.push(Lo(d,x,y)))),w)break;d=d.return}0<m.length&&(h=new v(h,g,null,n,f),c.push({event:h,listeners:m}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==qs&&(g=n.relatedTarget||n.fromElement)&&(Bn(g)||g[Jt]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Bn(g):null,g!==null&&(w=er(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(m=vd,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(m=xd,x="onPointerLeave",p="onPointerEnter",d="pointer"),w=v==null?h:lr(v),y=g==null?h:lr(g),h=new m(x,d+"leave",v,n,f),h.target=w,h.relatedTarget=y,x=null,Bn(f)===u&&(m=new m(p,d+"enter",g,n,f),m.target=y,m.relatedTarget=w,x=m),w=x,v&&g)t:{for(m=v,p=g,d=0,y=m;y;y=tr(y))d++;for(y=0,x=p;x;x=tr(x))y++;for(;0<d-y;)m=tr(m),d--;for(;0<y-d;)p=tr(p),y--;for(;d--;){if(m===p||p!==null&&m===p.alternate)break t;m=tr(m),p=tr(p)}m=null}else m=null;v!==null&&$d(c,h,v,m,!1),g!==null&&w!==null&&$d(c,w,g,m,!0)}}e:{if(h=u?lr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var E=Uw;else if(kd(h))if(wg)E=Vw;else{E=Ww;var P=Bw}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Hw);if(E&&(E=E(e,u))){vg(c,E,n,f);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Vs(h,"number",h.value)}switch(P=u?lr(u):window,e){case"focusin":(kd(P)||P.contentEditable==="true")&&(ir=P,ru=u,mo=null);break;case"focusout":mo=ru=ir=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Cd(c,n,f);break;case"selectionchange":if(Qw)break;case"keydown":case"keyup":Cd(c,n,f)}var C;if(Ac)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else or?gg(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(mg&&n.locale!=="ko"&&(or||R!=="onCompositionStart"?R==="onCompositionEnd"&&or&&(C=hg()):(hn=f,$c="value"in hn?hn.value:hn.textContent,or=!0)),P=pa(u,R),0<P.length&&(R=new wd(R,e,null,n,f),c.push({event:R,listeners:P}),C?R.data=C:(C=yg(n),C!==null&&(R.data=C)))),(C=zw?Iw(e,n):Dw(e,n))&&(u=pa(u,"onBeforeInput"),0<u.length&&(f=new wd("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=C))}jg(c,t)})}function Lo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Co(e,n),i!=null&&r.unshift(Lo(e,i,o)),i=Co(e,t),i!=null&&r.push(Lo(e,i,o))),e=e.return}return r}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $d(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Co(n,i),s!=null&&a.unshift(Lo(n,s,l))):o||(s=Co(n,i),s!=null&&a.push(Lo(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Jw=/\r\n?/g,Zw=/\u0000|\uFFFD/g;function Td(e){return(typeof e=="string"?e:""+e).replace(Jw,`
`).replace(Zw,"")}function ki(e,t,n){if(t=Td(t),Td(e)!==t&&n)throw Error(j(425))}function ha(){}var iu=null,au=null;function lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(e){return Nd.resolve(null).then(e).catch(nx)}:su;function nx(e){setTimeout(function(){throw e})}function is(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),$o(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);$o(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),At="__reactFiber$"+Fr,zo="__reactProps$"+Fr,Jt="__reactContainer$"+Fr,uu="__reactEvents$"+Fr,rx="__reactListeners$"+Fr,ox="__reactHandles$"+Fr;function Bn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ad(e);e!==null;){if(n=e[At])return n;e=Ad(e)}return t}e=n,n=e.parentNode}return null}function ri(e){return e=e[At]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function sl(e){return e[zo]||null}var cu=[],sr=-1;function Ln(e){return{current:e}}function ae(e){0>sr||(e.current=cu[sr],cu[sr]=null,sr--)}function oe(e,t){sr++,cu[sr]=e.current,e.current=t}var $n={},We=Ln($n),Je=Ln(!1),Kn=$n;function _r(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ze(e){return e=e.childContextTypes,e!=null}function ma(){ae(Je),ae(We)}function Ld(e,t,n){if(We.current!==$n)throw Error(j(168));oe(We,t),oe(Je,n)}function $g(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,B1(e)||"Unknown",o));return de({},n,r)}function ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,Kn=We.current,oe(We,e),oe(Je,Je.current),!0}function zd(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=$g(e,t,Kn),r.__reactInternalMemoizedMergedChildContext=e,ae(Je),ae(We),oe(We,e)):ae(Je),oe(Je,n)}var Ht=null,ul=!1,as=!1;function Tg(e){Ht===null?Ht=[e]:Ht.push(e)}function ix(e){ul=!0,Tg(e)}function zn(){if(!as&&Ht!==null){as=!0;var e=0,t=ee;try{var n=Ht;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,ul=!1}catch(o){throw Ht!==null&&(Ht=Ht.slice(e+1)),rg(Oc,zn),o}finally{ee=t,as=!1}}return null}var ur=[],cr=0,ya=null,va=0,dt=[],pt=0,Qn=null,Vt=1,Gt="";function Mn(e,t){ur[cr++]=va,ur[cr++]=ya,ya=e,va=t}function Ng(e,t,n){dt[pt++]=Vt,dt[pt++]=Gt,dt[pt++]=Qn,Qn=e;var r=Vt;e=Gt;var o=32-Ot(r)-1;r&=~(1<<o),n+=1;var i=32-Ot(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Vt=1<<32-Ot(t)+o|n<<o|r,Gt=i+e}else Vt=1<<i|n<<o|r,Gt=e}function zc(e){e.return!==null&&(Mn(e,1),Ng(e,1,0))}function Ic(e){for(;e===ya;)ya=ur[--cr],ur[cr]=null,va=ur[--cr],ur[cr]=null;for(;e===Qn;)Qn=dt[--pt],dt[pt]=null,Gt=dt[--pt],dt[pt]=null,Vt=dt[--pt],dt[pt]=null}var at=null,ot=null,ue=!1,Pt=null;function Ag(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Id(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ot=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Vt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,ot=null,!0):!1;default:return!1}}function fu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function du(e){if(ue){var t=ot;if(t){var n=t;if(!Id(e,t)){if(fu(e))throw Error(j(418));t=Sn(n.nextSibling);var r=at;t&&Id(e,t)?Ag(r,n):(e.flags=e.flags&-4097|2,ue=!1,at=e)}}else{if(fu(e))throw Error(j(418));e.flags=e.flags&-4097|2,ue=!1,at=e}}}function Dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Ei(e){if(e!==at)return!1;if(!ue)return Dd(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!lu(e.type,e.memoizedProps)),t&&(t=ot)){if(fu(e))throw Lg(),Error(j(418));for(;t;)Ag(e,t),t=Sn(t.nextSibling)}if(Dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=at?Sn(e.stateNode.nextSibling):null;return!0}function Lg(){for(var e=ot;e;)e=Sn(e.nextSibling)}function Or(){ot=at=null,ue=!1}function Dc(e){Pt===null?Pt=[e]:Pt.push(e)}var ax=rn.ReactCurrentBatchConfig;function kt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var wa=Ln(null),xa=null,fr=null,Mc=null;function Fc(){Mc=fr=xa=null}function Uc(e){var t=wa.current;ae(wa),e._currentValue=t}function pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){xa=e,Mc=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(Mc!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(xa===null)throw Error(j(308));fr=e,xa.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var Wn=null;function Bc(e){Wn===null?Wn=[e]:Wn.push(e)}function zg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Bc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Zt(e,r)}function Zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function Wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ig(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Zt(e,n)}return o=r.interleaved,o===null?(t.next=t,Bc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Zt(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cc(e,n)}}function Md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Sa(e,t,n,r){var o=e.updateQueue;cn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var c=o.baseState;a=0,f=u=s=null,l=i;do{var h=l.lane,v=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,m=l;switch(h=t,v=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){c=g.call(v,c,h);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,h=typeof g=="function"?g.call(v,c,h):g,h==null)break e;c=de({},c,h);break e;case 2:cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,s=c):f=f.next=v,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(f===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qn|=a,e.lanes=a,e.memoizedState=c}}function Fd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var Dg=new zm.Component().refs;function hu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=En(e),i=Qt(r,o);i.payload=t,n!=null&&(i.callback=n),t=bn(e,i,o),t!==null&&(Ct(t,e,o,r),Wi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=En(e),i=Qt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bn(e,i,o),t!==null&&(Ct(t,e,o,r),Wi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=En(e),o=Qt(n,r);o.tag=2,t!=null&&(o.callback=t),t=bn(e,o,r),t!==null&&(Ct(t,e,r,n),Wi(t,e,r))}};function Ud(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!No(n,r)||!No(o,i):!0}function Mg(e,t,n){var r=!1,o=$n,i=t.contextType;return typeof i=="object"&&i!==null?i=yt(i):(o=Ze(t)?Kn:We.current,r=t.contextTypes,i=(r=r!=null)?_r(e,o):$n),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Bd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function mu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Dg,Wc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=yt(i):(i=Ze(t)?Kn:We.current,o.context=_r(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(hu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&cl.enqueueReplaceState(o,o.state,null),Sa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===Dg&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Pi(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wd(e){var t=e._init;return t(e._payload)}function Fg(e){function t(p,d){if(e){var y=p.deletions;y===null?(p.deletions=[d],p.flags|=16):y.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=Pn(p,d),p.index=0,p.sibling=null,p}function i(p,d,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<d?(p.flags|=2,d):y):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,y,x){return d===null||d.tag!==6?(d=ps(y,p.mode,x),d.return=p,d):(d=o(d,y),d.return=p,d)}function s(p,d,y,x){var E=y.type;return E===rr?f(p,d,y.props.children,x,y.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===un&&Wd(E)===d.type)?(x=o(d,y.props),x.ref=eo(p,d,y),x.return=p,x):(x=Yi(y.type,y.key,y.props,null,p.mode,x),x.ref=eo(p,d,y),x.return=p,x)}function u(p,d,y,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=hs(y,p.mode,x),d.return=p,d):(d=o(d,y.children||[]),d.return=p,d)}function f(p,d,y,x,E){return d===null||d.tag!==7?(d=Gn(y,p.mode,x,E),d.return=p,d):(d=o(d,y),d.return=p,d)}function c(p,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ps(""+d,p.mode,y),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hi:return y=Yi(d.type,d.key,d.props,null,p.mode,y),y.ref=eo(p,null,d),y.return=p,y;case nr:return d=hs(d,p.mode,y),d.return=p,d;case un:var x=d._init;return c(p,x(d._payload),y)}if(io(d)||Yr(d))return d=Gn(d,p.mode,y,null),d.return=p,d;Pi(p,d)}return null}function h(p,d,y,x){var E=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:l(p,d,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hi:return y.key===E?s(p,d,y,x):null;case nr:return y.key===E?u(p,d,y,x):null;case un:return E=y._init,h(p,d,E(y._payload),x)}if(io(y)||Yr(y))return E!==null?null:f(p,d,y,x,null);Pi(p,y)}return null}function v(p,d,y,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(y)||null,l(d,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hi:return p=p.get(x.key===null?y:x.key)||null,s(d,p,x,E);case nr:return p=p.get(x.key===null?y:x.key)||null,u(d,p,x,E);case un:var P=x._init;return v(p,d,y,P(x._payload),E)}if(io(x)||Yr(x))return p=p.get(y)||null,f(d,p,x,E,null);Pi(d,x)}return null}function g(p,d,y,x){for(var E=null,P=null,C=d,R=d=0,D=null;C!==null&&R<y.length;R++){C.index>R?(D=C,C=null):D=C.sibling;var I=h(p,C,y[R],x);if(I===null){C===null&&(C=D);break}e&&C&&I.alternate===null&&t(p,C),d=i(I,d,R),P===null?E=I:P.sibling=I,P=I,C=D}if(R===y.length)return n(p,C),ue&&Mn(p,R),E;if(C===null){for(;R<y.length;R++)C=c(p,y[R],x),C!==null&&(d=i(C,d,R),P===null?E=C:P.sibling=C,P=C);return ue&&Mn(p,R),E}for(C=r(p,C);R<y.length;R++)D=v(C,p,R,y[R],x),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?R:D.key),d=i(D,d,R),P===null?E=D:P.sibling=D,P=D);return e&&C.forEach(function(le){return t(p,le)}),ue&&Mn(p,R),E}function m(p,d,y,x){var E=Yr(y);if(typeof E!="function")throw Error(j(150));if(y=E.call(y),y==null)throw Error(j(151));for(var P=E=null,C=d,R=d=0,D=null,I=y.next();C!==null&&!I.done;R++,I=y.next()){C.index>R?(D=C,C=null):D=C.sibling;var le=h(p,C,I.value,x);if(le===null){C===null&&(C=D);break}e&&C&&le.alternate===null&&t(p,C),d=i(le,d,R),P===null?E=le:P.sibling=le,P=le,C=D}if(I.done)return n(p,C),ue&&Mn(p,R),E;if(C===null){for(;!I.done;R++,I=y.next())I=c(p,I.value,x),I!==null&&(d=i(I,d,R),P===null?E=I:P.sibling=I,P=I);return ue&&Mn(p,R),E}for(C=r(p,C);!I.done;R++,I=y.next())I=v(C,p,R,I.value,x),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?R:I.key),d=i(I,d,R),P===null?E=I:P.sibling=I,P=I);return e&&C.forEach(function(Se){return t(p,Se)}),ue&&Mn(p,R),E}function w(p,d,y,x){if(typeof y=="object"&&y!==null&&y.type===rr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case hi:e:{for(var E=y.key,P=d;P!==null;){if(P.key===E){if(E=y.type,E===rr){if(P.tag===7){n(p,P.sibling),d=o(P,y.props.children),d.return=p,p=d;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===un&&Wd(E)===P.type){n(p,P.sibling),d=o(P,y.props),d.ref=eo(p,P,y),d.return=p,p=d;break e}n(p,P);break}else t(p,P);P=P.sibling}y.type===rr?(d=Gn(y.props.children,p.mode,x,y.key),d.return=p,p=d):(x=Yi(y.type,y.key,y.props,null,p.mode,x),x.ref=eo(p,d,y),x.return=p,p=x)}return a(p);case nr:e:{for(P=y.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(p,d.sibling),d=o(d,y.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=hs(y,p.mode,x),d.return=p,p=d}return a(p);case un:return P=y._init,w(p,d,P(y._payload),x)}if(io(y))return g(p,d,y,x);if(Yr(y))return m(p,d,y,x);Pi(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,y),d.return=p,p=d):(n(p,d),d=ps(y,p.mode,x),d.return=p,p=d),a(p)):n(p,d)}return w}var Cr=Fg(!0),Ug=Fg(!1),oi={},Dt=Ln(oi),Io=Ln(oi),Do=Ln(oi);function Hn(e){if(e===oi)throw Error(j(174));return e}function Hc(e,t){switch(oe(Do,t),oe(Io,e),oe(Dt,oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ks(t,e)}ae(Dt),oe(Dt,t)}function jr(){ae(Dt),ae(Io),ae(Do)}function Bg(e){Hn(Do.current);var t=Hn(Dt.current),n=Ks(t,e.type);t!==n&&(oe(Io,e),oe(Dt,n))}function Vc(e){Io.current===e&&(ae(Dt),ae(Io))}var ce=Ln(0);function ba(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function Gc(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var Hi=rn.ReactCurrentDispatcher,ss=rn.ReactCurrentBatchConfig,Yn=0,fe=null,be=null,Ee=null,ka=!1,go=!1,Mo=0,lx=0;function De(){throw Error(j(321))}function Kc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Qc(e,t,n,r,o,i){if(Yn=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hi.current=e===null||e.memoizedState===null?fx:dx,e=n(r,o),go){i=0;do{if(go=!1,Mo=0,25<=i)throw Error(j(301));i+=1,Ee=be=null,t.updateQueue=null,Hi.current=px,e=n(r,o)}while(go)}if(Hi.current=Ea,t=be!==null&&be.next!==null,Yn=0,Ee=be=fe=null,ka=!1,t)throw Error(j(300));return e}function Yc(){var e=Mo!==0;return Mo=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?fe.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function vt(){if(be===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ee===null?fe.memoizedState:Ee.next;if(t!==null)Ee=t,be=e;else{if(e===null)throw Error(j(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ee===null?fe.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Fo(e,t){return typeof t=="function"?t(e):t}function us(e){var t=vt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var f=u.lane;if((Yn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,fe.lanes|=f,qn|=f}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,jt(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,fe.lanes|=i,qn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cs(e){var t=vt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);jt(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Wg(){}function Hg(e,t){var n=fe,r=vt(),o=t(),i=!jt(r.memoizedState,o);if(i&&(r.memoizedState=o,Xe=!0),r=r.queue,qc(Kg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Uo(9,Gg.bind(null,n,r,o,t),void 0,null),Pe===null)throw Error(j(349));Yn&30||Vg(n,t,o)}return o}function Vg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gg(e,t,n,r){t.value=n,t.getSnapshot=r,Qg(t)&&Yg(e)}function Kg(e,t,n){return n(function(){Qg(t)&&Yg(e)})}function Qg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function Yg(e){var t=Zt(e,1);t!==null&&Ct(t,e,1,-1)}function Hd(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t.queue=e,e=e.dispatch=cx.bind(null,fe,e),[t.memoizedState,e]}function Uo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qg(){return vt().memoizedState}function Vi(e,t,n,r){var o=$t();fe.flags|=e,o.memoizedState=Uo(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var o=vt();r=r===void 0?null:r;var i=void 0;if(be!==null){var a=be.memoizedState;if(i=a.destroy,r!==null&&Kc(r,a.deps)){o.memoizedState=Uo(t,n,i,r);return}}fe.flags|=e,o.memoizedState=Uo(1|t,n,i,r)}function Vd(e,t){return Vi(8390656,8,e,t)}function qc(e,t){return fl(2048,8,e,t)}function Xg(e,t){return fl(4,2,e,t)}function Jg(e,t){return fl(4,4,e,t)}function Zg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ey(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,Zg.bind(null,t,e),n)}function Xc(){}function ty(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ny(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ry(e,t,n){return Yn&21?(jt(n,t)||(n=ag(),fe.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function sx(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=ss.transition;ss.transition={};try{e(!1),t()}finally{ee=n,ss.transition=r}}function oy(){return vt().memoizedState}function ux(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iy(e))ay(t,n);else if(n=zg(e,t,n,r),n!==null){var o=Ge();Ct(n,e,r,o),ly(n,t,r)}}function cx(e,t,n){var r=En(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iy(e))ay(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,jt(l,a)){var s=t.interleaved;s===null?(o.next=o,Bc(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=zg(e,t,o,r),n!==null&&(o=Ge(),Ct(n,e,r,o),ly(n,t,r))}}function iy(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function ay(e,t){go=ka=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ly(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cc(e,n)}}var Ea={readContext:yt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},fx={readContext:yt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4194308,4,Zg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vi(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ux.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Hd,useDebugValue:Xc,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Hd(!1),t=e[0];return e=sx.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,o=$t();if(ue){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Pe===null)throw Error(j(349));Yn&30||Vg(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Vd(Kg.bind(null,r,i,e),[e]),r.flags|=2048,Uo(9,Gg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$t(),t=Pe.identifierPrefix;if(ue){var n=Gt,r=Vt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dx={readContext:yt,useCallback:ty,useContext:yt,useEffect:qc,useImperativeHandle:ey,useInsertionEffect:Xg,useLayoutEffect:Jg,useMemo:ny,useReducer:us,useRef:qg,useState:function(){return us(Fo)},useDebugValue:Xc,useDeferredValue:function(e){var t=vt();return ry(t,be.memoizedState,e)},useTransition:function(){var e=us(Fo)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Wg,useSyncExternalStore:Hg,useId:oy,unstable_isNewReconciler:!1},px={readContext:yt,useCallback:ty,useContext:yt,useEffect:qc,useImperativeHandle:ey,useInsertionEffect:Xg,useLayoutEffect:Jg,useMemo:ny,useReducer:cs,useRef:qg,useState:function(){return cs(Fo)},useDebugValue:Xc,useDeferredValue:function(e){var t=vt();return be===null?t.memoizedState=e:ry(t,be.memoizedState,e)},useTransition:function(){var e=cs(Fo)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Wg,useSyncExternalStore:Hg,useId:oy,unstable_isNewReconciler:!1};function Rr(e,t){try{var n="",r=t;do n+=U1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function fs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hx=typeof WeakMap=="function"?WeakMap:Map;function sy(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_a||(_a=!0,_u=r),gu(e,t)},n}function uy(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){gu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){gu(e,t),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Gd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cx.bind(null,e,t,n),t.then(e,e))}function Kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e)}var mx=rn.ReactCurrentOwner,Xe=!1;function Ve(e,t,n,r){t.child=e===null?Ug(t,null,n,r):Cr(t,e.child,n,r)}function Yd(e,t,n,r,o){n=n.render;var i=t.ref;return xr(t,o),r=Qc(e,t,n,r,i,o),n=Yc(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):(ue&&n&&zc(t),t.flags|=1,Ve(e,t,r,o),t.child)}function qd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!af(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,cy(e,t,i,r,o)):(e=Yi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(a,r)&&e.ref===t.ref)return en(e,t,o)}return t.flags|=1,e=Pn(i,r),e.ref=t.ref,e.return=t,t.child=e}function cy(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(No(i,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,en(e,t,o)}return yu(e,t,n,r,o)}function fy(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(pr,rt),rt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(pr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,oe(pr,rt),rt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,oe(pr,rt),rt|=r;return Ve(e,t,o,n),t.child}function dy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yu(e,t,n,r,o){var i=Ze(n)?Kn:We.current;return i=_r(t,i),xr(t,o),n=Qc(e,t,n,r,i,o),r=Yc(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,en(e,t,o)):(ue&&r&&zc(t),t.flags|=1,Ve(e,t,n,o),t.child)}function Xd(e,t,n,r,o){if(Ze(n)){var i=!0;ga(t)}else i=!1;if(xr(t,o),t.stateNode===null)Gi(e,t),Mg(t,n,r),mu(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=Ze(n)?Kn:We.current,u=_r(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Bd(t,a,r,u),cn=!1;var h=t.memoizedState;a.state=h,Sa(t,r,a,o),s=t.memoizedState,l!==r||h!==s||Je.current||cn?(typeof f=="function"&&(hu(t,n,f,r),s=t.memoizedState),(l=cn||Ud(t,n,l,r,h,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ig(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:kt(t.type,l),a.props=u,c=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=Ze(n)?Kn:We.current,s=_r(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||h!==s)&&Bd(t,a,r,s),cn=!1,h=t.memoizedState,a.state=h,Sa(t,r,a,o);var g=t.memoizedState;l!==c||h!==g||Je.current||cn?(typeof v=="function"&&(hu(t,n,v,r),g=t.memoizedState),(u=cn||Ud(t,n,u,r,h,g,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return vu(e,t,n,r,i,o)}function vu(e,t,n,r,o,i){dy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&zd(t,n,!1),en(e,t,i);r=t.stateNode,mx.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Cr(t,e.child,null,i),t.child=Cr(t,null,l,i)):Ve(e,t,l,i),t.memoizedState=r.state,o&&zd(t,n,!0),t.child}function py(e){var t=e.stateNode;t.pendingContext?Ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ld(e,t.context,!1),Hc(e,t.containerInfo)}function Jd(e,t,n,r,o){return Or(),Dc(o),t.flags|=256,Ve(e,t,n,r),t.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function hy(e,t,n){var r=t.pendingProps,o=ce.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(ce,o&1),e===null)return du(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=hl(a,r,0,null),e=Gn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xu(n),t.memoizedState=wu,e):Jc(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return gx(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Pn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Pn(l,i):(i=Gn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?xu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=wu,r}return i=e.child,e=i.sibling,r=Pn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jc(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _i(e,t,n,r){return r!==null&&Dc(r),Cr(t,e.child,null,n),e=Jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gx(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=fs(Error(j(422))),_i(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=hl({mode:"visible",children:r.children},o,0,null),i=Gn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Cr(t,e.child,null,a),t.child.memoizedState=xu(a),t.memoizedState=wu,i);if(!(t.mode&1))return _i(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=fs(i,r,void 0),_i(e,t,a,r)}if(l=(a&e.childLanes)!==0,Xe||l){if(r=Pe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Zt(e,o),Ct(r,e,o,-1))}return of(),r=fs(Error(j(421))),_i(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jx.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ot=Sn(o.nextSibling),at=t,ue=!0,Pt=null,e!==null&&(dt[pt++]=Vt,dt[pt++]=Gt,dt[pt++]=Qn,Vt=e.id,Gt=e.overflow,Qn=t),t=Jc(t,r.children),t.flags|=4096,t)}function Zd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pu(e.return,t,n)}function ds(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function my(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ve(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zd(e,n,t);else if(e.tag===19)Zd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(ce,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ba(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ds(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ba(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ds(t,!0,n,null,i);break;case"together":ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yx(e,t,n){switch(t.tag){case 3:py(t),Or();break;case 5:Bg(t);break;case 1:Ze(t.type)&&ga(t);break;case 4:Hc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;oe(wa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?hy(e,t,n):(oe(ce,ce.current&1),e=en(e,t,n),e!==null?e.sibling:null);oe(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return my(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,fy(e,t,n)}return en(e,t,n)}var gy,Su,yy,vy;gy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Su=function(){};yy=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Hn(Dt.current);var i=null;switch(n){case"input":o=Ws(e,o),r=Ws(e,r),i=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),i=[];break;case"textarea":o=Gs(e,o),r=Gs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ha)}Qs(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_o.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_o.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ie("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};vy=function(e,t,n,r){n!==r&&(t.flags|=4)};function to(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vx(e,t,n){var r=t.pendingProps;switch(Ic(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ze(t.type)&&ma(),Me(t),null;case 3:return r=t.stateNode,jr(),ae(Je),ae(We),Gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(ju(Pt),Pt=null))),Su(e,t),Me(t),null;case 5:Vc(t);var o=Hn(Do.current);if(n=t.type,e!==null&&t.stateNode!=null)yy(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Me(t),null}if(e=Hn(Dt.current),Ei(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[At]=t,r[zo]=i,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<lo.length;o++)ie(lo[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":sd(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":cd(r,i),ie("invalid",r)}Qs(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ki(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ki(r.textContent,l,e),o=["children",""+l]):_o.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ie("scroll",r)}switch(n){case"input":mi(r),ud(r,i,!0);break;case"textarea":mi(r),fd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ha)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[At]=t,e[zo]=r,gy(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ys(n,r),n){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<lo.length;o++)ie(lo[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":sd(e,r),o=Ws(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),ie("invalid",e);break;case"textarea":cd(e,r),o=Gs(e,r),ie("invalid",e);break;default:o=r}Qs(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Qm(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gm(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Oo(e,s):typeof s=="number"&&Oo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_o.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ie("scroll",e):s!=null&&bc(e,i,s,a))}switch(n){case"input":mi(e),ud(e,r,!1);break;case"textarea":mi(e),fd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?gr(e,!!r.multiple,i,!1):r.defaultValue!=null&&gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)vy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Hn(Do.current),Hn(Dt.current),Ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(i=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:ki(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ki(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Me(t),null;case 13:if(ae(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&ot!==null&&t.mode&1&&!(t.flags&128))Lg(),Or(),t.flags|=98560,i=!1;else if(i=Ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[At]=t}else Or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else Pt!==null&&(ju(Pt),Pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?ke===0&&(ke=3):of())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return jr(),Su(e,t),e===null&&Ao(t.stateNode.containerInfo),Me(t),null;case 10:return Uc(t.type._context),Me(t),null;case 17:return Ze(t.type)&&ma(),Me(t),null;case 19:if(ae(ce),i=t.memoizedState,i===null)return Me(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)to(i,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ba(e),a!==null){for(t.flags|=128,to(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&ye()>$r&&(t.flags|=128,r=!0,to(i,!1),t.lanes=4194304)}else{if(!r)if(e=ba(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),to(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ue)return Me(t),null}else 2*ye()-i.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,r=!0,to(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ye(),t.sibling=null,n=ce.current,oe(ce,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return rf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function wx(e,t){switch(Ic(t),t.tag){case 1:return Ze(t.type)&&ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),ae(Je),ae(We),Gc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vc(t),null;case 13:if(ae(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ce),null;case 4:return jr(),null;case 10:return Uc(t.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var Oi=!1,Be=!1,xx=typeof WeakSet=="function"?WeakSet:Set,z=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function bu(e,t,n){try{n()}catch(r){he(e,t,r)}}var ep=!1;function Sx(e,t){if(iu=fa,e=bg(),Lc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,c=e,h=null;t:for(;;){for(var v;c!==n||o!==0&&c.nodeType!==3||(l=a+o),c!==i||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===e)break t;if(h===n&&++u===o&&(l=a),h===i&&++f===r&&(s=a),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(au={focusedElem:e,selectionRange:n},fa=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,w=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:kt(t.type,m),w);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){he(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return g=ep,ep=!1,g}function yo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&bu(t,n,i)}o=o.next}while(o!==r)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ku(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wy(e){var t=e.alternate;t!==null&&(e.alternate=null,wy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[zo],delete t[uu],delete t[rx],delete t[ox])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xy(e){return e.tag===5||e.tag===3||e.tag===4}function tp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ha));else if(r!==4&&(e=e.child,e!==null))for(Eu(e,t,n),e=e.sibling;e!==null;)Eu(e,t,n),e=e.sibling}function Pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pu(e,t,n),e=e.sibling;e!==null;)Pu(e,t,n),e=e.sibling}var $e=null,Et=!1;function an(e,t,n){for(n=n.child;n!==null;)Sy(e,t,n),n=n.sibling}function Sy(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Be||dr(n,t);case 6:var r=$e,o=Et;$e=null,an(e,t,n),$e=r,Et=o,$e!==null&&(Et?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Et?(e=$e,n=n.stateNode,e.nodeType===8?is(e.parentNode,n):e.nodeType===1&&is(e,n),$o(e)):is($e,n.stateNode));break;case 4:r=$e,o=Et,$e=n.stateNode.containerInfo,Et=!0,an(e,t,n),$e=r,Et=o;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&bu(n,t,a),o=o.next}while(o!==r)}an(e,t,n);break;case 1:if(!Be&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,an(e,t,n),Be=r):an(e,t,n);break;default:an(e,t,n)}}function np(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xx),t.forEach(function(r){var o=Rx.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,Et=!1;break e;case 3:$e=l.stateNode.containerInfo,Et=!0;break e;case 4:$e=l.stateNode.containerInfo,Et=!0;break e}l=l.return}if($e===null)throw Error(j(160));Sy(i,a,o),$e=null,Et=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){he(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)by(t,e),t=t.sibling}function by(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Rt(e),r&4){try{yo(3,e,e.return),dl(3,e)}catch(m){he(e,e.return,m)}try{yo(5,e,e.return)}catch(m){he(e,e.return,m)}}break;case 1:St(t,e),Rt(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(St(t,e),Rt(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var o=e.stateNode;try{Oo(o,"")}catch(m){he(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Wm(o,i),Ys(l,a);var u=Ys(l,i);for(a=0;a<s.length;a+=2){var f=s[a],c=s[a+1];f==="style"?Qm(o,c):f==="dangerouslySetInnerHTML"?Gm(o,c):f==="children"?Oo(o,c):bc(o,f,c,u)}switch(l){case"input":Hs(o,i);break;case"textarea":Hm(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?gr(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?gr(o,!!i.multiple,i.defaultValue,!0):gr(o,!!i.multiple,i.multiple?[]:"",!1))}o[zo]=i}catch(m){he(e,e.return,m)}}break;case 6:if(St(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){he(e,e.return,m)}}break;case 3:if(St(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(t.containerInfo)}catch(m){he(e,e.return,m)}break;case 4:St(t,e),Rt(e);break;case 13:St(t,e),Rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(tf=ye())),r&4&&np(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||f,St(t,e),Be=u):St(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(z=e,f=e.child;f!==null;){for(c=z=f;z!==null;){switch(h=z,v=h.child,h.tag){case 0:case 11:case 14:case 15:yo(4,h,h.return);break;case 1:dr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){he(r,n,m)}}break;case 5:dr(h,h.return);break;case 22:if(h.memoizedState!==null){op(c);continue}}v!==null?(v.return=h,z=v):op(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Km("display",a))}catch(m){he(e,e.return,m)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){he(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:St(t,e),Rt(e),r&4&&np(e);break;case 21:break;default:St(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xy(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Oo(o,""),r.flags&=-33);var i=tp(e);Pu(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=tp(e);Eu(e,l,a);break;default:throw Error(j(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bx(e,t,n){z=e,ky(e)}function ky(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Oi;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Be;l=Oi;var u=Be;if(Oi=a,(Be=s)&&!u)for(z=o;z!==null;)a=z,s=a.child,a.tag===22&&a.memoizedState!==null?ip(o):s!==null?(s.return=a,z=s):ip(o);for(;i!==null;)z=i,ky(i),i=i.sibling;z=o,Oi=l,Be=u}rp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):rp(e)}}function rp(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Fd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&$o(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Be||t.flags&512&&ku(t)}catch(h){he(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function op(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function ip(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){he(t,o,s)}}var i=t.return;try{ku(t)}catch(s){he(t,i,s)}break;case 5:var a=t.return;try{ku(t)}catch(s){he(t,a,s)}}}catch(s){he(t,t.return,s)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var kx=Math.ceil,Pa=rn.ReactCurrentDispatcher,Zc=rn.ReactCurrentOwner,mt=rn.ReactCurrentBatchConfig,K=0,Pe=null,we=null,Ae=0,rt=0,pr=Ln(0),ke=0,Bo=null,qn=0,pl=0,ef=0,vo=null,qe=null,tf=0,$r=1/0,Wt=null,_a=!1,_u=null,kn=null,Ci=!1,mn=null,Oa=0,wo=0,Ou=null,Ki=-1,Qi=0;function Ge(){return K&6?ye():Ki!==-1?Ki:Ki=ye()}function En(e){return e.mode&1?K&2&&Ae!==0?Ae&-Ae:ax.transition!==null?(Qi===0&&(Qi=ag()),Qi):(e=ee,e!==0||(e=window.event,e=e===void 0?16:pg(e.type)),e):1}function Ct(e,t,n,r){if(50<wo)throw wo=0,Ou=null,Error(j(185));ti(e,n,r),(!(K&2)||e!==Pe)&&(e===Pe&&(!(K&2)&&(pl|=n),ke===4&&dn(e,Ae)),et(e,r),n===1&&K===0&&!(t.mode&1)&&($r=ye()+500,ul&&zn()))}function et(e,t){var n=e.callbackNode;aw(e,t);var r=ca(e,e===Pe?Ae:0);if(r===0)n!==null&&hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hd(n),t===1)e.tag===0?ix(ap.bind(null,e)):Tg(ap.bind(null,e)),tx(function(){!(K&6)&&zn()}),n=null;else{switch(lg(r)){case 1:n=Oc;break;case 4:n=og;break;case 16:n=ua;break;case 536870912:n=ig;break;default:n=ua}n=$y(n,Ey.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ey(e,t){if(Ki=-1,Qi=0,K&6)throw Error(j(327));var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var r=ca(e,e===Pe?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ca(e,r);else{t=r;var o=K;K|=2;var i=_y();(Pe!==e||Ae!==t)&&(Wt=null,$r=ye()+500,Vn(e,t));do try{_x();break}catch(l){Py(e,l)}while(1);Fc(),Pa.current=i,K=o,we!==null?t=0:(Pe=null,Ae=0,t=ke)}if(t!==0){if(t===2&&(o=eu(e),o!==0&&(r=o,t=Cu(e,o))),t===1)throw n=Bo,Vn(e,0),dn(e,r),et(e,ye()),n;if(t===6)dn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ex(o)&&(t=Ca(e,r),t===2&&(i=eu(e),i!==0&&(r=i,t=Cu(e,i))),t===1))throw n=Bo,Vn(e,0),dn(e,r),et(e,ye()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Fn(e,qe,Wt);break;case 3:if(dn(e,r),(r&130023424)===r&&(t=tf+500-ye(),10<t)){if(ca(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=su(Fn.bind(null,e,qe,Wt),t);break}Fn(e,qe,Wt);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ot(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kx(r/1960))-r,10<r){e.timeoutHandle=su(Fn.bind(null,e,qe,Wt),r);break}Fn(e,qe,Wt);break;case 5:Fn(e,qe,Wt);break;default:throw Error(j(329))}}}return et(e,ye()),e.callbackNode===n?Ey.bind(null,e):null}function Cu(e,t){var n=vo;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=Ca(e,t),e!==2&&(t=qe,qe=n,t!==null&&ju(t)),e}function ju(e){qe===null?qe=e:qe.push.apply(qe,e)}function Ex(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!jt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~ef,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function ap(e){if(K&6)throw Error(j(327));Sr();var t=ca(e,0);if(!(t&1))return et(e,ye()),null;var n=Ca(e,t);if(e.tag!==0&&n===2){var r=eu(e);r!==0&&(t=r,n=Cu(e,r))}if(n===1)throw n=Bo,Vn(e,0),dn(e,t),et(e,ye()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,qe,Wt),et(e,ye()),null}function nf(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&($r=ye()+500,ul&&zn())}}function Xn(e){mn!==null&&mn.tag===0&&!(K&6)&&Sr();var t=K;K|=1;var n=mt.transition,r=ee;try{if(mt.transition=null,ee=1,e)return e()}finally{ee=r,mt.transition=n,K=t,!(K&6)&&zn()}}function rf(){rt=pr.current,ae(pr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ex(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Ic(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ma();break;case 3:jr(),ae(Je),ae(We),Gc();break;case 5:Vc(r);break;case 4:jr();break;case 13:ae(ce);break;case 19:ae(ce);break;case 10:Uc(r.type._context);break;case 22:case 23:rf()}n=n.return}if(Pe=e,we=e=Pn(e.current,null),Ae=rt=t,ke=0,Bo=null,ef=pl=qn=0,qe=vo=null,Wn!==null){for(t=0;t<Wn.length;t++)if(n=Wn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Wn=null}return e}function Py(e,t){do{var n=we;try{if(Fc(),Hi.current=Ea,ka){for(var r=fe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ka=!1}if(Yn=0,Ee=be=fe=null,go=!1,Mo=0,Zc.current=null,n===null||n.return===null){ke=1,Bo=t,we=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=Ae,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Kd(a);if(v!==null){v.flags&=-257,Qd(v,a,l,i,t),v.mode&1&&Gd(i,u,t),t=v,s=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(s),t.updateQueue=m}else g.add(s);break e}else{if(!(t&1)){Gd(i,u,t),of();break e}s=Error(j(426))}}else if(ue&&l.mode&1){var w=Kd(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Qd(w,a,l,i,t),Dc(Rr(s,l));break e}}i=s=Rr(s,l),ke!==4&&(ke=2),vo===null?vo=[i]:vo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=sy(i,s,t);Md(i,p);break e;case 1:l=s;var d=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(kn===null||!kn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=uy(i,l,t);Md(i,x);break e}}i=i.return}while(i!==null)}Cy(n)}catch(E){t=E,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function _y(){var e=Pa.current;return Pa.current=Ea,e===null?Ea:e}function of(){(ke===0||ke===3||ke===2)&&(ke=4),Pe===null||!(qn&268435455)&&!(pl&268435455)||dn(Pe,Ae)}function Ca(e,t){var n=K;K|=2;var r=_y();(Pe!==e||Ae!==t)&&(Wt=null,Vn(e,t));do try{Px();break}catch(o){Py(e,o)}while(1);if(Fc(),K=n,Pa.current=r,we!==null)throw Error(j(261));return Pe=null,Ae=0,ke}function Px(){for(;we!==null;)Oy(we)}function _x(){for(;we!==null&&!X1();)Oy(we)}function Oy(e){var t=Ry(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Cy(e):we=t,Zc.current=null}function Cy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wx(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,we=null;return}}else if(n=vx(n,t,rt),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);ke===0&&(ke=5)}function Fn(e,t,n){var r=ee,o=mt.transition;try{mt.transition=null,ee=1,Ox(e,t,n,r)}finally{mt.transition=o,ee=r}return null}function Ox(e,t,n,r){do Sr();while(mn!==null);if(K&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(lw(e,i),e===Pe&&(we=Pe=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ci||(Ci=!0,$y(ua,function(){return Sr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=mt.transition,mt.transition=null;var a=ee;ee=1;var l=K;K|=4,Zc.current=null,Sx(e,n),by(n,e),Kw(au),fa=!!iu,au=iu=null,e.current=n,bx(n),J1(),K=l,ee=a,mt.transition=i}else e.current=n;if(Ci&&(Ci=!1,mn=e,Oa=o),i=e.pendingLanes,i===0&&(kn=null),tw(n.stateNode),et(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_a)throw _a=!1,e=_u,_u=null,e;return Oa&1&&e.tag!==0&&Sr(),i=e.pendingLanes,i&1?e===Ou?wo++:(wo=0,Ou=e):wo=0,zn(),null}function Sr(){if(mn!==null){var e=lg(Oa),t=mt.transition,n=ee;try{if(mt.transition=null,ee=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,Oa=0,K&6)throw Error(j(331));var o=K;for(K|=4,z=e.current;z!==null;){var i=z,a=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(z=u;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:yo(8,f,i)}var c=f.child;if(c!==null)c.return=f,z=c;else for(;z!==null;){f=z;var h=f.sibling,v=f.return;if(wy(f),f===u){z=null;break}if(h!==null){h.return=v,z=h;break}z=v}}}var g=i.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var w=m.sibling;m.sibling=null,m=w}while(m!==null)}}z=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:yo(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,z=p;break e}z=i.return}}var d=e.current;for(z=d;z!==null;){a=z;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,z=y;else e:for(a=d;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:dl(9,l)}}catch(E){he(l,l.return,E)}if(l===a){z=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,z=x;break e}z=l.return}}if(K=o,zn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{ee=n,mt.transition=t}}return!1}function lp(e,t,n){t=Rr(n,t),t=sy(e,t,1),e=bn(e,t,1),t=Ge(),e!==null&&(ti(e,1,t),et(e,t))}function he(e,t,n){if(e.tag===3)lp(e,e,n);else for(;t!==null;){if(t.tag===3){lp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=Rr(n,e),e=uy(t,e,1),t=bn(t,e,1),e=Ge(),t!==null&&(ti(t,1,e),et(t,e));break}}t=t.return}}function Cx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Ae&n)===n&&(ke===4||ke===3&&(Ae&130023424)===Ae&&500>ye()-tf?Vn(e,0):ef|=n),et(e,t)}function jy(e,t){t===0&&(e.mode&1?(t=vi,vi<<=1,!(vi&130023424)&&(vi=4194304)):t=1);var n=Ge();e=Zt(e,t),e!==null&&(ti(e,t,n),et(e,n))}function jx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jy(e,n)}function Rx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),jy(e,n)}var Ry;Ry=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,yx(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,ue&&t.flags&1048576&&Ng(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gi(e,t),e=t.pendingProps;var o=_r(t,We.current);xr(t,n),o=Qc(null,t,r,e,o,n);var i=Yc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(i=!0,ga(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wc(t),o.updater=cl,t.stateNode=o,o._reactInternals=t,mu(t,r,e,n),t=vu(null,t,r,!0,i,n)):(t.tag=0,ue&&i&&zc(t),Ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Tx(r),e=kt(r,e),o){case 0:t=yu(null,t,r,e,n);break e;case 1:t=Xd(null,t,r,e,n);break e;case 11:t=Yd(null,t,r,e,n);break e;case 14:t=qd(null,t,r,kt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),yu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Xd(e,t,r,o,n);case 3:e:{if(py(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Ig(e,t),Sa(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Rr(Error(j(423)),t),t=Jd(e,t,r,n,o);break e}else if(r!==o){o=Rr(Error(j(424)),t),t=Jd(e,t,r,n,o);break e}else for(ot=Sn(t.stateNode.containerInfo.firstChild),at=t,ue=!0,Pt=null,n=Ug(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===o){t=en(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Bg(t),e===null&&du(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,lu(r,o)?a=null:i!==null&&lu(r,i)&&(t.flags|=32),dy(e,t),Ve(e,t,a,n),t.child;case 6:return e===null&&du(t),null;case 13:return hy(e,t,n);case 4:return Hc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Cr(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Yd(e,t,r,o,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,oe(wa,r._currentValue),r._currentValue=a,i!==null)if(jt(i.value,a)){if(i.children===o.children&&!Je.current){t=en(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Qt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),pu(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),pu(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,xr(t,n),o=yt(o),r=r(o),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,o=kt(r,t.pendingProps),o=kt(r.type,o),qd(e,t,r,o,n);case 15:return cy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Gi(e,t),t.tag=1,Ze(r)?(e=!0,ga(t)):e=!1,xr(t,n),Mg(t,r,o),mu(t,r,o,n),vu(null,t,r,!0,e,n);case 19:return my(e,t,n);case 22:return fy(e,t,n)}throw Error(j(156,t.tag))};function $y(e,t){return rg(e,t)}function $x(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new $x(e,t,n,r)}function af(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tx(e){if(typeof e=="function")return af(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ec)return 11;if(e===Pc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")af(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case rr:return Gn(n.children,o,i,t);case kc:a=8,o|=8;break;case Ms:return e=ht(12,n,t,o|2),e.elementType=Ms,e.lanes=i,e;case Fs:return e=ht(13,n,t,o),e.elementType=Fs,e.lanes=i,e;case Us:return e=ht(19,n,t,o),e.elementType=Us,e.lanes=i,e;case Fm:return hl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dm:a=10;break e;case Mm:a=9;break e;case Ec:a=11;break e;case Pc:a=14;break e;case un:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=ht(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Gn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){return e=ht(22,e,r,t),e.elementType=Fm,e.lanes=n,e.stateNode={isHidden:!1},e}function ps(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function hs(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nx(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function lf(e,t,n,r,o,i,a,l,s){return e=new Nx(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ht(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(i),e}function Ax(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ty(e){if(!e)return $n;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ze(n))return $g(e,n,t)}return t}function Ny(e,t,n,r,o,i,a,l,s){return e=lf(n,r,!0,e,o,i,a,l,s),e.context=Ty(null),n=e.current,r=Ge(),o=En(n),i=Qt(r,o),i.callback=t??null,bn(n,i,o),e.current.lanes=o,ti(e,o,r),et(e,r),e}function ml(e,t,n,r){var o=t.current,i=Ge(),a=En(o);return n=Ty(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bn(o,t,a),e!==null&&(Ct(e,o,a,i),Wi(e,o,a)),a}function ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sf(e,t){sp(e,t),(e=e.alternate)&&sp(e,t)}function Lx(){return null}var Ay=typeof reportError=="function"?reportError:function(e){console.error(e)};function uf(e){this._internalRoot=e}gl.prototype.render=uf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));ml(e,t,null,null)};gl.prototype.unmount=uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){ml(null,e,null,null)}),t[Jt]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=cg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fn.length&&t!==0&&t<fn[n].priority;n++);fn.splice(n,0,e),n===0&&dg(e)}};function cf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function up(){}function zx(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ja(a);i.call(u)}}var a=Ny(t,r,e,0,null,!1,!1,"",up);return e._reactRootContainer=a,e[Jt]=a.current,Ao(e.nodeType===8?e.parentNode:e),Xn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ja(s);l.call(u)}}var s=lf(e,0,!1,null,null,!1,!1,"",up);return e._reactRootContainer=s,e[Jt]=s.current,Ao(e.nodeType===8?e.parentNode:e),Xn(function(){ml(t,s,n,r)}),s}function vl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=ja(a);l.call(s)}}ml(t,a,e,o)}else a=zx(n,t,e,o,r);return ja(a)}sg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ao(t.pendingLanes);n!==0&&(Cc(t,n|1),et(t,ye()),!(K&6)&&($r=ye()+500,zn()))}break;case 13:Xn(function(){var r=Zt(e,1);if(r!==null){var o=Ge();Ct(r,e,1,o)}}),sf(e,1)}};jc=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var n=Ge();Ct(t,e,134217728,n)}sf(e,134217728)}};ug=function(e){if(e.tag===13){var t=En(e),n=Zt(e,t);if(n!==null){var r=Ge();Ct(n,e,t,r)}sf(e,t)}};cg=function(){return ee};fg=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Xs=function(e,t,n){switch(t){case"input":if(Hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=sl(r);if(!o)throw Error(j(90));Bm(r),Hs(r,o)}}}break;case"textarea":Hm(e,n);break;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}};Xm=nf;Jm=Xn;var Ix={usingClientEntryPoint:!1,Events:[ri,lr,sl,Ym,qm,nf]},no={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Dx={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tg(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||Lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{ol=ji.inject(Dx),It=ji}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ix;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(t))throw Error(j(200));return Ax(e,t,null,n)};ct.createRoot=function(e,t){if(!cf(e))throw Error(j(299));var n=!1,r="",o=Ay;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=lf(e,1,!1,null,null,n,!1,r,o),e[Jt]=t.current,Ao(e.nodeType===8?e.parentNode:e),new uf(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=tg(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Xn(e)};ct.hydrate=function(e,t,n){if(!yl(t))throw Error(j(200));return vl(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!cf(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Ay;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ny(t,null,e,1,n??null,o,!1,i,a),e[Jt]=t.current,Ao(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gl(t)};ct.render=function(e,t,n){if(!yl(t))throw Error(j(200));return vl(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!yl(e))throw Error(j(40));return e._reactRootContainer?(Xn(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};ct.unstable_batchedUpdates=nf;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return vl(e,t,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function Ly(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ly)}catch(e){console.error(e)}}Ly(),Nm.exports=ct;var ff=Nm.exports,cp=ff;Is.createRoot=cp.createRoot,Is.hydrateRoot=cp.hydrateRoot;var zy={exports:{}},Iy={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=b;function Mx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fx=typeof Object.is=="function"?Object.is:Mx,Ux=Tr.useState,Bx=Tr.useEffect,Wx=Tr.useLayoutEffect,Hx=Tr.useDebugValue;function Vx(e,t){var n=t(),r=Ux({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Wx(function(){o.value=n,o.getSnapshot=t,ms(o)&&i({inst:o})},[e,n,t]),Bx(function(){return ms(o)&&i({inst:o}),e(function(){ms(o)&&i({inst:o})})},[e]),Hx(n),n}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fx(e,n)}catch{return!0}}function Gx(e,t){return t()}var Kx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Gx:Vx;Iy.useSyncExternalStore=Tr.useSyncExternalStore!==void 0?Tr.useSyncExternalStore:Kx;zy.exports=Iy;var Qx=zy.exports,Dy={exports:{}},My={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=b,Yx=Qx;function qx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xx=typeof Object.is=="function"?Object.is:qx,Jx=Yx.useSyncExternalStore,Zx=wl.useRef,eS=wl.useEffect,tS=wl.useMemo,nS=wl.useDebugValue;My.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=Zx(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=tS(function(){function s(v){if(!u){if(u=!0,f=v,v=r(v),o!==void 0&&a.hasValue){var g=a.value;if(o(g,v))return c=g}return c=v}if(g=c,Xx(f,v))return g;var m=r(v);return o!==void 0&&o(g,m)?g:(f=v,c=m)}var u=!1,f,c,h=n===void 0?null:n;return[function(){return s(t())},h===null?void 0:function(){return s(h())}]},[t,n,r,o]);var l=Jx(e,i[0],i[1]);return eS(function(){a.hasValue=!0,a.value=l},[l]),nS(l),l};Dy.exports=My;var rS=Dy.exports;function oS(e){e()}let Fy=oS;const iS=e=>Fy=e,aS=()=>Fy,fp=Symbol.for("react-redux-context"),dp=typeof globalThis<"u"?globalThis:{};function lS(){var e;if(!b.createContext)return{};const t=(e=dp[fp])!=null?e:dp[fp]=new Map;let n=t.get(b.createContext);return n||(n=b.createContext(null),t.set(b.createContext,n)),n}const Tn=lS();function df(e=Tn){return function(){return b.useContext(e)}}const Uy=df(),sS=()=>{throw new Error("uSES not initialized!")};let By=sS;const uS=e=>{By=e},cS=(e,t)=>e===t;function fS(e=Tn){const t=e===Tn?Uy:df(e);return function(r,o={}){const{equalityFn:i=cS,stabilityCheck:a=void 0,noopCheck:l=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:s,subscription:u,getServerState:f,stabilityCheck:c,noopCheck:h}=t();b.useRef(!0);const v=b.useCallback({[r.name](m){return r(m)}}[r.name],[r,c,a]),g=By(u.addNestedSub,s.getState,f||s.getState,v,i);return b.useDebugValue(g),g}}const Wy=fS();var ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf=Symbol.for("react.element"),hf=Symbol.for("react.portal"),xl=Symbol.for("react.fragment"),Sl=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),kl=Symbol.for("react.provider"),El=Symbol.for("react.context"),dS=Symbol.for("react.server_context"),Pl=Symbol.for("react.forward_ref"),_l=Symbol.for("react.suspense"),Ol=Symbol.for("react.suspense_list"),Cl=Symbol.for("react.memo"),jl=Symbol.for("react.lazy"),pS=Symbol.for("react.offscreen"),Hy;Hy=Symbol.for("react.module.reference");function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pf:switch(e=e.type,e){case xl:case bl:case Sl:case _l:case Ol:return e;default:switch(e=e&&e.$$typeof,e){case dS:case El:case Pl:case jl:case Cl:case kl:return e;default:return t}}case hf:return t}}}ne.ContextConsumer=El;ne.ContextProvider=kl;ne.Element=pf;ne.ForwardRef=Pl;ne.Fragment=xl;ne.Lazy=jl;ne.Memo=Cl;ne.Portal=hf;ne.Profiler=bl;ne.StrictMode=Sl;ne.Suspense=_l;ne.SuspenseList=Ol;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return wt(e)===El};ne.isContextProvider=function(e){return wt(e)===kl};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pf};ne.isForwardRef=function(e){return wt(e)===Pl};ne.isFragment=function(e){return wt(e)===xl};ne.isLazy=function(e){return wt(e)===jl};ne.isMemo=function(e){return wt(e)===Cl};ne.isPortal=function(e){return wt(e)===hf};ne.isProfiler=function(e){return wt(e)===bl};ne.isStrictMode=function(e){return wt(e)===Sl};ne.isSuspense=function(e){return wt(e)===_l};ne.isSuspenseList=function(e){return wt(e)===Ol};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xl||e===bl||e===Sl||e===_l||e===Ol||e===pS||typeof e=="object"&&e!==null&&(e.$$typeof===jl||e.$$typeof===Cl||e.$$typeof===kl||e.$$typeof===El||e.$$typeof===Pl||e.$$typeof===Hy||e.getModuleId!==void 0)};ne.typeOf=wt;function hS(){const e=aS();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const pp={notify(){},get:()=>[]};function mS(e,t){let n,r=pp,o=0,i=!1;function a(m){f();const w=r.subscribe(m);let p=!1;return()=>{p||(p=!0,w(),c())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function u(){return i}function f(){o++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=hS())}function c(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=pp)}function h(){i||(i=!0,f())}function v(){i&&(i=!1,c())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:h,tryUnsubscribe:v,getListeners:()=>r};return g}const gS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yS=gS?b.useLayoutEffect:b.useEffect;function vS({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const a=b.useMemo(()=>{const u=mS(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),l=b.useMemo(()=>e.getState(),[e]);yS(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,l]);const s=t||Tn;return b.createElement(s.Provider,{value:a},n)}function Vy(e=Tn){const t=e===Tn?Uy:df(e);return function(){const{store:r}=t();return r}}const wS=Vy();function xS(e=Tn){const t=e===Tn?wS:Vy(e);return function(){return t().dispatch}}const SS=xS();uS(rS.useSyncExternalStoreWithSelector);iS(ff.unstable_batchedUpdates);function qi(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?qi=function(n){return typeof n}:qi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},qi(e)}function bS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kS(e,t,n){return t&&hp(e.prototype,t),n&&hp(e,n),e}function ES(e,t){return t&&(qi(t)==="object"||typeof t=="function")?t:Xi(e)}function Ru(e){return Ru=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ru(e)}function Xi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function PS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$u(e,t)}function $u(e,t){return $u=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},$u(e,t)}function Ji(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Gy=function(e){PS(t,e);function t(){var n,r;bS(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=ES(this,(n=Ru(t)).call.apply(n,[this].concat(i))),Ji(Xi(r),"state",{bootstrapped:!1}),Ji(Xi(r),"_unsubscribe",void 0),Ji(Xi(r),"handlePersistorState",function(){var l=r.props.persistor,s=l.getState(),u=s.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return kS(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(b.PureComponent);Ji(Gy,"defaultProps",{children:null,loading:null});function _t(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Nn(e){return!!e&&!!e[se]}function tn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===AS}(e)||Array.isArray(e)||!!e[Sp]||!!(!((t=e.constructor)===null||t===void 0)&&t[Sp])||mf(e)||gf(e))}function Jn(e,t,n){n===void 0&&(n=!1),Ur(e)===0?(n?Object.keys:kr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function Ur(e){var t=e[se];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:mf(e)?2:gf(e)?3:0}function br(e,t){return Ur(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _S(e,t){return Ur(e)===2?e.get(t):e[t]}function Ky(e,t,n){var r=Ur(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Qy(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function mf(e){return TS&&e instanceof Map}function gf(e){return NS&&e instanceof Set}function Un(e){return e.o||e.t}function yf(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=qy(e);delete t[se];for(var n=kr(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function vf(e,t){return t===void 0&&(t=!1),wf(e)||Nn(e)||!tn(e)||(Ur(e)>1&&(e.set=e.add=e.clear=e.delete=OS),Object.freeze(e),t&&Jn(e,function(n,r){return vf(r,!0)},!0)),e}function OS(){_t(2)}function wf(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Mt(e){var t=Lu[e];return t||_t(18,e),t}function CS(e,t){Lu[e]||(Lu[e]=t)}function Tu(){return Wo}function gs(e,t){t&&(Mt("Patches"),e.u=[],e.s=[],e.v=t)}function Ra(e){Nu(e),e.p.forEach(jS),e.p=null}function Nu(e){e===Wo&&(Wo=e.l)}function mp(e){return Wo={p:[],l:Wo,h:e,m:!0,_:0}}function jS(e){var t=e[se];t.i===0||t.i===1?t.j():t.g=!0}function ys(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Mt("ES5").S(t,e,r),r?(n[se].P&&(Ra(t),_t(4)),tn(e)&&(e=$a(t,e),t.l||Ta(t,e)),t.u&&Mt("Patches").M(n[se].t,e,t.u,t.s)):e=$a(t,n,[]),Ra(t),t.u&&t.v(t.u,t.s),e!==Yy?e:void 0}function $a(e,t,n){if(wf(t))return t;var r=t[se];if(!r)return Jn(t,function(l,s){return gp(e,r,t,l,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Ta(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=yf(r.k):r.o,i=o,a=!1;r.i===3&&(i=new Set(o),o.clear(),a=!0),Jn(i,function(l,s){return gp(e,r,o,l,s,n,a)}),Ta(e,o,!1),n&&e.u&&Mt("Patches").N(r,n,e.u,e.s)}return r.o}function gp(e,t,n,r,o,i,a){if(Nn(o)){var l=$a(e,o,i&&t&&t.i!==3&&!br(t.R,r)?i.concat(r):void 0);if(Ky(n,r,l),!Nn(l))return;e.m=!1}else a&&n.add(o);if(tn(o)&&!wf(o)){if(!e.h.D&&e._<1)return;$a(e,o),t&&t.A.l||Ta(e,o)}}function Ta(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&vf(t,n)}function vs(e,t){var n=e[se];return(n?Un(n):e)[t]}function yp(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function pn(e){e.P||(e.P=!0,e.l&&pn(e.l))}function ws(e){e.o||(e.o=yf(e.t))}function Au(e,t,n){var r=mf(t)?Mt("MapSet").F(t,n):gf(t)?Mt("MapSet").T(t,n):e.O?function(o,i){var a=Array.isArray(o),l={i:a?1:0,A:i?i.A:Tu(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},s=l,u=Ho;a&&(s=[l],u=so);var f=Proxy.revocable(s,u),c=f.revoke,h=f.proxy;return l.k=h,l.j=c,h}(t,n):Mt("ES5").J(t,n);return(n?n.A:Tu()).p.push(r),r}function RS(e){return Nn(e)||_t(22,e),function t(n){if(!tn(n))return n;var r,o=n[se],i=Ur(n);if(o){if(!o.P&&(o.i<4||!Mt("ES5").K(o)))return o.t;o.I=!0,r=vp(n,i),o.I=!1}else r=vp(n,i);return Jn(r,function(a,l){o&&_S(o.t,a)===l||Ky(r,a,t(l))}),i===3?new Set(r):r}(e)}function vp(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return yf(e)}function $S(){function e(i,a){var l=o[i];return l?l.enumerable=a:o[i]=l={configurable:!0,enumerable:a,get:function(){var s=this[se];return Ho.get(s,i)},set:function(s){var u=this[se];Ho.set(u,i,s)}},l}function t(i){for(var a=i.length-1;a>=0;a--){var l=i[a][se];if(!l.P)switch(l.i){case 5:r(l)&&pn(l);break;case 4:n(l)&&pn(l)}}}function n(i){for(var a=i.t,l=i.k,s=kr(l),u=s.length-1;u>=0;u--){var f=s[u];if(f!==se){var c=a[f];if(c===void 0&&!br(a,f))return!0;var h=l[f],v=h&&h[se];if(v?v.t!==c:!Qy(h,c))return!0}}var g=!!a[se];return s.length!==kr(a).length+(g?0:1)}function r(i){var a=i.k;if(a.length!==i.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var s=0;s<a.length;s++)if(!a.hasOwnProperty(s))return!0;return!1}var o={};CS("ES5",{J:function(i,a){var l=Array.isArray(i),s=function(f,c){if(f){for(var h=Array(c.length),v=0;v<c.length;v++)Object.defineProperty(h,""+v,e(v,!0));return h}var g=qy(c);delete g[se];for(var m=kr(g),w=0;w<m.length;w++){var p=m[w];g[p]=e(p,f||!!g[p].enumerable)}return Object.create(Object.getPrototypeOf(c),g)}(l,i),u={i:l?5:4,A:a?a.A:Tu(),P:!1,I:!1,R:{},l:a,t:i,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,se,{value:u,writable:!0}),s},S:function(i,a,l){l?Nn(a)&&a[se].A===i&&t(i.p):(i.u&&function s(u){if(u&&typeof u=="object"){var f=u[se];if(f){var c=f.t,h=f.k,v=f.R,g=f.i;if(g===4)Jn(h,function(y){y!==se&&(c[y]!==void 0||br(c,y)?v[y]||s(h[y]):(v[y]=!0,pn(f)))}),Jn(c,function(y){h[y]!==void 0||br(h,y)||(v[y]=!1,pn(f))});else if(g===5){if(r(f)&&(pn(f),v.length=!0),h.length<c.length)for(var m=h.length;m<c.length;m++)v[m]=!1;else for(var w=c.length;w<h.length;w++)v[w]=!0;for(var p=Math.min(h.length,c.length),d=0;d<p;d++)h.hasOwnProperty(d)||(v[d]=!0),v[d]===void 0&&s(h[d])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var wp,Wo,xf=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",TS=typeof Map<"u",NS=typeof Set<"u",xp=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Yy=xf?Symbol.for("immer-nothing"):((wp={})["immer-nothing"]=!0,wp),Sp=xf?Symbol.for("immer-draftable"):"__$immer_draftable",se=xf?Symbol.for("immer-state"):"__$immer_state",AS=""+Object.prototype.constructor,kr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,qy=Object.getOwnPropertyDescriptors||function(e){var t={};return kr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Lu={},Ho={get:function(e,t){if(t===se)return e;var n=Un(e);if(!br(n,t))return function(o,i,a){var l,s=yp(i,a);return s?"value"in s?s.value:(l=s.get)===null||l===void 0?void 0:l.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!tn(r)?r:r===vs(e.t,t)?(ws(e),e.o[t]=Au(e.A.h,r,e)):r},has:function(e,t){return t in Un(e)},ownKeys:function(e){return Reflect.ownKeys(Un(e))},set:function(e,t,n){var r=yp(Un(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=vs(Un(e),t),i=o==null?void 0:o[se];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Qy(n,o)&&(n!==void 0||br(e.t,t)))return!0;ws(e),pn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return vs(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,ws(e),pn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Un(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){_t(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){_t(12)}},so={};Jn(Ho,function(e,t){so[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),so.deleteProperty=function(e,t){return so.set.call(this,e,t,void 0)},so.set=function(e,t,n){return Ho.set.call(this,e[0],t,n,e[0])};var LS=function(){function e(n){var r=this;this.O=xp,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var l=i;i=o;var s=r;return function(m){var w=this;m===void 0&&(m=l);for(var p=arguments.length,d=Array(p>1?p-1:0),y=1;y<p;y++)d[y-1]=arguments[y];return s.produce(m,function(x){var E;return(E=i).call.apply(E,[w,x].concat(d))})}}var u;if(typeof i!="function"&&_t(6),a!==void 0&&typeof a!="function"&&_t(7),tn(o)){var f=mp(r),c=Au(r,o,void 0),h=!0;try{u=i(c),h=!1}finally{h?Ra(f):Nu(f)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return gs(f,a),ys(m,f)},function(m){throw Ra(f),m}):(gs(f,a),ys(u,f))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===Yy&&(u=void 0),r.D&&vf(u,!0),a){var v=[],g=[];Mt("Patches").M(o,u,v,g),a(v,g)}return u}_t(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var f=arguments.length,c=Array(f>1?f-1:0),h=1;h<f;h++)c[h-1]=arguments[h];return r.produceWithPatches(u,function(v){return o.apply(void 0,[v].concat(c))})};var a,l,s=r.produce(o,i,function(u,f){a=u,l=f});return typeof Promise<"u"&&s instanceof Promise?s.then(function(u){return[u,a,l]}):[s,a,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){tn(n)||_t(8),Nn(n)&&(n=RS(n));var r=mp(this),o=Au(this,n,void 0);return o[se].C=!0,Nu(r),o},t.finishDraft=function(n,r){var o=n&&n[se],i=o.A;return gs(i,r),ys(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!xp&&_t(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var a=Mt("Patches").$;return Nn(n)?a(n,r):this.produce(n,function(l){return a(l,r)})},e}(),st=new LS,Xy=st.produce;st.produceWithPatches.bind(st);st.setAutoFreeze.bind(st);st.setUseProxies.bind(st);st.applyPatches.bind(st);st.createDraft.bind(st);st.finishDraft.bind(st);function Vo(e){"@babel/helpers - typeof";return Vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vo(e)}function zS(e,t){if(Vo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Vo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function IS(e){var t=zS(e,"string");return Vo(t)=="symbol"?t:String(t)}function DS(e,t,n){return t=IS(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function kp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bp(Object(n),!0).forEach(function(r){DS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ue(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Ep=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),xs=function(){return Math.random().toString(36).substring(7).split("").join(".")},Na={INIT:"@@redux/INIT"+xs(),REPLACE:"@@redux/REPLACE"+xs(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+xs()}};function MS(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Sf(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ue(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ue(1));return n(Sf)(e,t)}if(typeof e!="function")throw new Error(Ue(2));var o=e,i=t,a=[],l=a,s=!1;function u(){l===a&&(l=a.slice())}function f(){if(s)throw new Error(Ue(3));return i}function c(m){if(typeof m!="function")throw new Error(Ue(4));if(s)throw new Error(Ue(5));var w=!0;return u(),l.push(m),function(){if(w){if(s)throw new Error(Ue(6));w=!1,u();var d=l.indexOf(m);l.splice(d,1),a=null}}}function h(m){if(!MS(m))throw new Error(Ue(7));if(typeof m.type>"u")throw new Error(Ue(8));if(s)throw new Error(Ue(9));try{s=!0,i=o(i,m)}finally{s=!1}for(var w=a=l,p=0;p<w.length;p++){var d=w[p];d()}return m}function v(m){if(typeof m!="function")throw new Error(Ue(10));o=m,h({type:Na.REPLACE})}function g(){var m,w=c;return m={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(Ue(11));function y(){d.next&&d.next(f())}y();var x=w(y);return{unsubscribe:x}}},m[Ep]=function(){return this},m}return h({type:Na.INIT}),r={dispatch:h,subscribe:c,getState:f,replaceReducer:v},r[Ep]=g,r}function FS(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Na.INIT});if(typeof r>"u")throw new Error(Ue(12));if(typeof n(void 0,{type:Na.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ue(13))})}function US(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{FS(n)}catch(l){a=l}return function(s,u){if(s===void 0&&(s={}),a)throw a;for(var f=!1,c={},h=0;h<i.length;h++){var v=i[h],g=n[v],m=s[v],w=g(m,u);if(typeof w>"u")throw u&&u.type,new Error(Ue(14));c[v]=w,f=f||w!==m}return f=f||i.length!==Object.keys(s).length,f?c:s}}function Aa(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function BS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Ue(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},l=t.map(function(s){return s(a)});return i=Aa.apply(void 0,l)(o.dispatch),kp(kp({},o),{},{dispatch:i})}}}function Jy(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(l){return typeof l=="function"?l(o,i,e):a(l)}}};return t}var Zy=Jy();Zy.withExtraArgument=Jy;const Pp=Zy;var ev=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),WS=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(u){return function(f){return s([u,f])}}function s(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Nr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},HS=Object.defineProperty,VS=Object.defineProperties,GS=Object.getOwnPropertyDescriptors,_p=Object.getOwnPropertySymbols,KS=Object.prototype.hasOwnProperty,QS=Object.prototype.propertyIsEnumerable,Op=function(e,t,n){return t in e?HS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},_n=function(e,t){for(var n in t||(t={}))KS.call(t,n)&&Op(e,n,t[n]);if(_p)for(var r=0,o=_p(t);r<o.length;r++){var n=o[r];QS.call(t,n)&&Op(e,n,t[n])}return e},Ss=function(e,t){return VS(e,GS(t))},YS=function(e,t,n){return new Promise(function(r,o){var i=function(s){try{l(n.next(s))}catch(u){o(u)}},a=function(s){try{l(n.throw(s))}catch(u){o(u)}},l=function(s){return s.done?r(s.value):Promise.resolve(s.value).then(i,a)};l((n=n.apply(e,t)).next())})},qS=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Aa:Aa.apply(null,arguments)};function XS(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function On(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return _n(_n({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var JS=function(e){ev(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Nr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Nr([void 0],n.concat(this))))},t}(Array),ZS=function(e){ev(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Nr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Nr([void 0],n.concat(this))))},t}(Array);function zu(e){return tn(e)?Xy(e,function(){}):e}function eb(e){return typeof e=="boolean"}function tb(){return function(t){return nb(t)}}function nb(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new JS;return n&&(eb(n)?r.push(Pp):r.push(Pp.withExtraArgument(n.extraArgument))),r}var rb=!0;function ob(e){var t=tb(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,a=i===void 0?t():i,l=n.devTools,s=l===void 0?!0:l,u=n.preloadedState,f=u===void 0?void 0:u,c=n.enhancers,h=c===void 0?void 0:c,v;if(typeof o=="function")v=o;else if(XS(o))v=US(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=a;typeof g=="function"&&(g=g(t));var m=BS.apply(void 0,g),w=Aa;s&&(w=qS(_n({trace:!rb},typeof s=="object"&&s)));var p=new ZS(m),d=p;Array.isArray(h)?d=Nr([m],h):typeof h=="function"&&(d=h(p));var y=w.apply(void 0,d);return Sf(v,f,y)}function tv(e){var t={},n=[],r,o={addCase:function(i,a){var l=typeof i=="string"?i:i.type;if(!l)throw new Error("`builder.addCase` cannot be called with an empty action type");if(l in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[l]=a,o},addMatcher:function(i,a){return n.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function ib(e){return typeof e=="function"}function ab(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?tv(t):[t,n,r],i=o[0],a=o[1],l=o[2],s;if(ib(e))s=function(){return zu(e())};else{var u=zu(e);s=function(){return u}}function f(c,h){c===void 0&&(c=s());var v=Nr([i[h.type]],a.filter(function(g){var m=g.matcher;return m(h)}).map(function(g){var m=g.reducer;return m}));return v.filter(function(g){return!!g}).length===0&&(v=[l]),v.reduce(function(g,m){if(m)if(Nn(g)){var w=g,p=m(w,h);return p===void 0?g:p}else{if(tn(g))return Xy(g,function(d){return m(d,h)});var p=m(g,h);if(p===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return g},c)}return f.getInitialState=s,f}function lb(e,t){return e+"/"+t}function sb(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:zu(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},a={},l={};o.forEach(function(f){var c=r[f],h=lb(t,f),v,g;"reducer"in c?(v=c.reducer,g=c.prepare):v=c,i[f]=v,a[h]=v,l[f]=g?On(h,g):On(h)});function s(){var f=typeof e.extraReducers=="function"?tv(e.extraReducers):[e.extraReducers],c=f[0],h=c===void 0?{}:c,v=f[1],g=v===void 0?[]:v,m=f[2],w=m===void 0?void 0:m,p=_n(_n({},h),a);return ab(n,function(d){for(var y in p)d.addCase(y,p[y]);for(var x=0,E=g;x<E.length;x++){var P=E[x];d.addMatcher(P.matcher,P.reducer)}w&&d.addDefaultCase(w)})}var u;return{name:t,reducer:function(f,c){return u||(u=s()),u(f,c)},actions:l,caseReducers:i,getInitialState:function(){return u||(u=s()),u.getInitialState()}}}var ub="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",cb=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=ub[Math.random()*64|0];return t},fb=["name","message","stack","code"],bs=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Cp=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),db=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=fb;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},Br=function(){function e(t,n,r){var o=On(t+"/fulfilled",function(u,f,c,h){return{payload:u,meta:Ss(_n({},h||{}),{arg:c,requestId:f,requestStatus:"fulfilled"})}}),i=On(t+"/pending",function(u,f,c){return{payload:void 0,meta:Ss(_n({},c||{}),{arg:f,requestId:u,requestStatus:"pending"})}}),a=On(t+"/rejected",function(u,f,c,h,v){return{payload:h,error:(r&&r.serializeError||db)(u||"Rejected"),meta:Ss(_n({},v||{}),{arg:c,requestId:f,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function s(u){return function(f,c,h){var v=r!=null&&r.idGenerator?r.idGenerator(u):cb(),g=new l,m;function w(d){m=d,g.abort()}var p=function(){return YS(this,null,function(){var d,y,x,E,P,C,R;return WS(this,function(D){switch(D.label){case 0:return D.trys.push([0,4,,5]),E=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:c,extra:h}),hb(E)?[4,E]:[3,2];case 1:E=D.sent(),D.label=2;case 2:if(E===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return P=new Promise(function(I,le){return g.signal.addEventListener("abort",function(){return le({name:"AbortError",message:m||"Aborted"})})}),f(i(v,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:v,arg:u},{getState:c,extra:h}))),[4,Promise.race([P,Promise.resolve(n(u,{dispatch:f,getState:c,extra:h,requestId:v,signal:g.signal,abort:w,rejectWithValue:function(I,le){return new bs(I,le)},fulfillWithValue:function(I,le){return new Cp(I,le)}})).then(function(I){if(I instanceof bs)throw I;return I instanceof Cp?o(I.payload,v,u,I.meta):o(I,v,u)})])];case 3:return x=D.sent(),[3,5];case 4:return C=D.sent(),x=C instanceof bs?a(null,v,u,C.payload,C.meta):a(C,v,u),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&a.match(x)&&x.meta.condition,R||f(x),[2,x]}})})}();return Object.assign(p,{abort:w,requestId:v,arg:u,unwrap:function(){return p.then(pb)}})}}return Object.assign(s,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e}();function pb(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function hb(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var bf="listenerMiddleware";On(bf+"/add");On(bf+"/removeAll");On(bf+"/remove");var jp;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);$S();var kf="persist:",Ef="persist/FLUSH",Rl="persist/REHYDRATE",Pf="persist/PAUSE",_f="persist/PERSIST",Of="persist/PURGE",Cf="persist/REGISTER",mb=-1;function Zi(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Zi=function(n){return typeof n}:Zi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Zi(e)}function Rp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function gb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rp(n,!0).forEach(function(r){yb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rp(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vb(e,t,n,r){r.debug;var o=gb({},n);return e&&Zi(e)==="object"&&Object.keys(e).forEach(function(i){i!=="_persist"&&t[i]===n[i]&&(o[i]=e[i])}),o}function wb(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],o=e.throttle||0,i="".concat(e.keyPrefix!==void 0?e.keyPrefix:kf).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=xb;var s=e.writeFailHandler||null,u={},f={},c=[],h=null,v=null,g=function(E){Object.keys(E).forEach(function(P){p(P)&&u[P]!==E[P]&&c.indexOf(P)===-1&&c.push(P)}),Object.keys(u).forEach(function(P){E[P]===void 0&&p(P)&&c.indexOf(P)===-1&&u[P]!==void 0&&c.push(P)}),h===null&&(h=setInterval(m,o)),u=E};function m(){if(c.length===0){h&&clearInterval(h),h=null;return}var x=c.shift(),E=r.reduce(function(P,C){return C.in(P,x,u)},u[x]);if(E!==void 0)try{f[x]=l(E)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete f[x];c.length===0&&w()}function w(){Object.keys(f).forEach(function(x){u[x]===void 0&&delete f[x]}),v=a.setItem(i,l(f)).catch(d)}function p(x){return!(n&&n.indexOf(x)===-1&&x!=="_persist"||t&&t.indexOf(x)!==-1)}function d(x){s&&s(x)}var y=function(){for(;c.length!==0;)m();return v||Promise.resolve()};return{update:g,flush:y}}function xb(e){return JSON.stringify(e)}function Sb(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:kf).concat(e.key),r=e.storage;e.debug;var o;return e.deserialize===!1?o=function(a){return a}:typeof e.deserialize=="function"?o=e.deserialize:o=bb,r.getItem(n).then(function(i){if(i)try{var a={},l=o(i);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,f){return f.out(u,s,l)},o(l[s]))}),a}catch(s){throw s}else return})}function bb(e){return JSON.parse(e)}function kb(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:kf).concat(e.key);return t.removeItem(n,Eb)}function Eb(e){}function $p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$p(n,!0).forEach(function(r){Pb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$p(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _b(e,t){if(e==null)return{};var n=Ob(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ob(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Cb=5e3;function jb(e,t){var n=e.version!==void 0?e.version:mb;e.debug;var r=e.stateReconciler===void 0?vb:e.stateReconciler,o=e.getStoredState||Sb,i=e.timeout!==void 0?e.timeout:Cb,a=null,l=!1,s=!0,u=function(c){return c._persist.rehydrated&&a&&!s&&a.update(c),c};return function(f,c){var h=f||{},v=h._persist,g=_b(h,["_persist"]),m=g;if(c.type===_f){var w=!1,p=function(R,D){w||(c.rehydrate(e.key,R,D),w=!0)};if(i&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},i),s=!1,a||(a=wb(e)),v)return Bt({},t(m,c),{_persist:v});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),o(e).then(function(C){var R=e.migrate||function(D,I){return Promise.resolve(D)};R(C,n).then(function(D){p(D)},function(D){p(void 0,D)})},function(C){p(void 0,C)}),Bt({},t(m,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===Of)return l=!0,c.result(kb(e)),Bt({},t(m,c),{_persist:v});if(c.type===Ef)return c.result(a&&a.flush()),Bt({},t(m,c),{_persist:v});if(c.type===Pf)s=!0;else if(c.type===Rl){if(l)return Bt({},m,{_persist:Bt({},v,{rehydrated:!0})});if(c.key===e.key){var d=t(m,c),y=c.payload,x=r!==!1&&y!==void 0?r(y,f,d,e):d,E=Bt({},x,{_persist:Bt({},v,{rehydrated:!0})});return u(E)}}}if(!v)return t(f,c);var P=t(m,c);return P===m?f:u(Bt({},P,{_persist:v}))}}function Tp(e){return Tb(e)||$b(e)||Rb()}function Rb(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function $b(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Tb(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Np(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Iu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Np(n,!0).forEach(function(r){Nb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Np(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Nb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var nv={registry:[],bootstrapped:!1},Ab=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:nv,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Cf:return Iu({},t,{registry:[].concat(Tp(t.registry),[n.key])});case Rl:var r=t.registry.indexOf(n.key),o=Tp(t.registry);return o.splice(r,1),Iu({},t,{registry:o,bootstrapped:o.length===0});default:return t}};function Lb(e,t,n){var r=n||!1,o=Sf(Ab,nv,t&&t.enhancer?t.enhancer:void 0),i=function(u){o.dispatch({type:Cf,key:u})},a=function(u,f,c){var h={type:Rl,payload:f,err:c,key:u};e.dispatch(h),o.dispatch(h),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Iu({},o,{purge:function(){var u=[];return e.dispatch({type:Of,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:Ef,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:Pf})},persist:function(){e.dispatch({type:_f,register:i,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var jf={},Rf={};Rf.__esModule=!0;Rf.default=Db;function ea(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ea=function(n){return typeof n}:ea=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ea(e)}function ks(){}var zb={getItem:ks,setItem:ks,removeItem:ks};function Ib(e){if((typeof self>"u"?"undefined":ea(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function Db(e){var t="".concat(e,"Storage");return Ib(t)?self[t]:zb}jf.__esModule=!0;jf.default=Ub;var Mb=Fb(Rf);function Fb(e){return e&&e.__esModule?e:{default:e}}function Ub(e){var t=(0,Mb.default)(e);return{getItem:function(r){return new Promise(function(o,i){o(t.getItem(r))})},setItem:function(r,o){return new Promise(function(i,a){i(t.setItem(r,o))})},removeItem:function(r){return new Promise(function(o,i){o(t.removeItem(r))})}}}var rv=void 0,Bb=Wb(jf);function Wb(e){return e&&e.__esModule?e:{default:e}}var Hb=(0,Bb.default)("local");rv=Hb;function ov(e,t){return function(){return e.apply(t,arguments)}}const{toString:Vb}=Object.prototype,{getPrototypeOf:$f}=Object,$l=(e=>t=>{const n=Vb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ft=e=>(e=e.toLowerCase(),t=>$l(t)===e),Tl=e=>t=>typeof t===e,{isArray:Wr}=Array,Go=Tl("undefined");function Gb(e){return e!==null&&!Go(e)&&e.constructor!==null&&!Go(e.constructor)&&gt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const iv=Ft("ArrayBuffer");function Kb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&iv(e.buffer),t}const Qb=Tl("string"),gt=Tl("function"),av=Tl("number"),Nl=e=>e!==null&&typeof e=="object",Yb=e=>e===!0||e===!1,ta=e=>{if($l(e)!=="object")return!1;const t=$f(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},qb=Ft("Date"),Xb=Ft("File"),Jb=Ft("Blob"),Zb=Ft("FileList"),ek=e=>Nl(e)&&gt(e.pipe),tk=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||gt(e.append)&&((t=$l(e))==="formdata"||t==="object"&&gt(e.toString)&&e.toString()==="[object FormData]"))},nk=Ft("URLSearchParams"),rk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ii(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Wr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function lv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const sv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),uv=e=>!Go(e)&&e!==sv;function Du(){const{caseless:e}=uv(this)&&this||{},t={},n=(r,o)=>{const i=e&&lv(t,o)||o;ta(t[i])&&ta(r)?t[i]=Du(t[i],r):ta(r)?t[i]=Du({},r):Wr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&ii(arguments[r],n);return t}const ok=(e,t,n,{allOwnKeys:r}={})=>(ii(t,(o,i)=>{n&&gt(o)?e[i]=ov(o,n):e[i]=o},{allOwnKeys:r}),e),ik=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ak=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},lk=(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&$f(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},sk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},uk=e=>{if(!e)return null;if(Wr(e))return e;let t=e.length;if(!av(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ck=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&$f(Uint8Array)),fk=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},dk=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pk=Ft("HTMLFormElement"),hk=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Ap=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mk=Ft("RegExp"),cv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ii(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},gk=e=>{cv(e,(t,n)=>{if(gt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(gt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yk=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Wr(e)?r(e):r(String(e).split(t)),n},vk=()=>{},wk=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Es="abcdefghijklmnopqrstuvwxyz",Lp="0123456789",fv={DIGIT:Lp,ALPHA:Es,ALPHA_DIGIT:Es+Es.toUpperCase()+Lp},xk=(e=16,t=fv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Sk(e){return!!(e&&gt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const bk=e=>{const t=new Array(10),n=(r,o)=>{if(Nl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Wr(r)?[]:{};return ii(r,(a,l)=>{const s=n(a,o+1);!Go(s)&&(i[l]=s)}),t[o]=void 0,i}}return r};return n(e,0)},kk=Ft("AsyncFunction"),Ek=e=>e&&(Nl(e)||gt(e))&&gt(e.then)&&gt(e.catch),_={isArray:Wr,isArrayBuffer:iv,isBuffer:Gb,isFormData:tk,isArrayBufferView:Kb,isString:Qb,isNumber:av,isBoolean:Yb,isObject:Nl,isPlainObject:ta,isUndefined:Go,isDate:qb,isFile:Xb,isBlob:Jb,isRegExp:mk,isFunction:gt,isStream:ek,isURLSearchParams:nk,isTypedArray:ck,isFileList:Zb,forEach:ii,merge:Du,extend:ok,trim:rk,stripBOM:ik,inherits:ak,toFlatObject:lk,kindOf:$l,kindOfTest:Ft,endsWith:sk,toArray:uk,forEachEntry:fk,matchAll:dk,isHTMLForm:pk,hasOwnProperty:Ap,hasOwnProp:Ap,reduceDescriptors:cv,freezeMethods:gk,toObjectSet:yk,toCamelCase:hk,noop:vk,toFiniteNumber:wk,findKey:lv,global:sv,isContextDefined:uv,ALPHABET:fv,generateString:xk,isSpecCompliantForm:Sk,toJSONObject:bk,isAsyncFn:kk,isThenable:Ek};function G(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}_.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const dv=G.prototype,pv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{pv[e]={value:e}});Object.defineProperties(G,pv);Object.defineProperty(dv,"isAxiosError",{value:!0});G.from=(e,t,n,r,o,i)=>{const a=Object.create(dv);return _.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),G.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Pk=null;function Mu(e){return _.isPlainObject(e)||_.isArray(e)}function hv(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function zp(e,t,n){return e?e.concat(t).map(function(o,i){return o=hv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function _k(e){return _.isArray(e)&&!e.some(Mu)}const Ok=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function Al(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,w){return!_.isUndefined(w[m])});const r=n.metaTokens,o=n.visitor||f,i=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(_.isDate(g))return g.toISOString();if(!s&&_.isBlob(g))throw new G("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(g)||_.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,m,w){let p=g;if(g&&!w&&typeof g=="object"){if(_.endsWith(m,"{}"))m=r?m:m.slice(0,-2),g=JSON.stringify(g);else if(_.isArray(g)&&_k(g)||(_.isFileList(g)||_.endsWith(m,"[]"))&&(p=_.toArray(g)))return m=hv(m),p.forEach(function(y,x){!(_.isUndefined(y)||y===null)&&t.append(a===!0?zp([m],x,i):a===null?m:m+"[]",u(y))}),!1}return Mu(g)?!0:(t.append(zp(w,m,i),u(g)),!1)}const c=[],h=Object.assign(Ok,{defaultVisitor:f,convertValue:u,isVisitable:Mu});function v(g,m){if(!_.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));c.push(g),_.forEach(g,function(p,d){(!(_.isUndefined(p)||p===null)&&o.call(t,p,_.isString(d)?d.trim():d,m,h))===!0&&v(p,m?m.concat(d):[d])}),c.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Ip(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Tf(e,t){this._pairs=[],e&&Al(e,this,t)}const mv=Tf.prototype;mv.append=function(t,n){this._pairs.push([t,n])};mv.toString=function(t){const n=t?function(r){return t.call(this,r,Ip)}:Ip;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Ck(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gv(e,t,n){if(!t)return e;const r=n&&n.encode||Ck,o=n&&n.serialize;let i;if(o?i=o(t,n):i=_.isURLSearchParams(t)?t.toString():new Tf(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class jk{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Dp=jk,yv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Rk=typeof URLSearchParams<"u"?URLSearchParams:Tf,$k=typeof FormData<"u"?FormData:null,Tk=typeof Blob<"u"?Blob:null,Nk={isBrowser:!0,classes:{URLSearchParams:Rk,FormData:$k,Blob:Tk},protocols:["http","https","file","blob","url","data"]},vv=typeof window<"u"&&typeof document<"u",Ak=(e=>vv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Lk=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),zk=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:vv,hasStandardBrowserEnv:Ak,hasStandardBrowserWebWorkerEnv:Lk},Symbol.toStringTag,{value:"Module"})),Lt={...zk,...Nk};function Ik(e,t){return Al(e,new Lt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Lt.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Dk(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Mk(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function wv(e){function t(n,r,o,i){let a=n[i++];const l=Number.isFinite(+a),s=i>=n.length;return a=!a&&_.isArray(o)?o.length:a,s?(_.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!l):((!o[a]||!_.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&_.isArray(o[a])&&(o[a]=Mk(o[a])),!l)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,o)=>{t(Dk(r),o,n,0)}),n}return null}function Fk(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Nf={transitional:yv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return o&&o?JSON.stringify(wv(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ik(t,this.formSerializer).toString();if((l=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Al(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Fk(t)):t}],transformResponse:[function(t){const n=this.transitional||Nf.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&_.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?G.from(l,G.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Lt.classes.FormData,Blob:Lt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],e=>{Nf.headers[e]={}});const Af=Nf,Uk=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Bk=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&Uk[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Mp=Symbol("internals");function ro(e){return e&&String(e).trim().toLowerCase()}function na(e){return e===!1||e==null?e:_.isArray(e)?e.map(na):String(e)}function Wk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Hk=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ps(e,t,n,r,o){if(_.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function Vk(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Gk(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class Ll{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,s,u){const f=ro(s);if(!f)throw new Error("header name must be a non-empty string");const c=_.findKey(o,f);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||s]=na(l))}const a=(l,s)=>_.forEach(l,(u,f)=>i(u,f,s));return _.isPlainObject(t)||t instanceof this.constructor?a(t,n):_.isString(t)&&(t=t.trim())&&!Hk(t)?a(Bk(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=ro(t),t){const r=_.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Wk(o);if(_.isFunction(n))return n.call(this,o,r);if(_.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ro(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ps(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=ro(a),a){const l=_.findKey(r,a);l&&(!n||Ps(r,r[l],l,n))&&(delete r[l],o=!0)}}return _.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Ps(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return _.forEach(this,(o,i)=>{const a=_.findKey(r,i);if(a){n[a]=na(o),delete n[i];return}const l=t?Vk(i):String(i).trim();l!==i&&delete n[i],n[l]=na(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Mp]=this[Mp]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=ro(a);r[l]||(Gk(o,a),r[l]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}}Ll.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Ll.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});_.freezeMethods(Ll);const Yt=Ll;function _s(e,t){const n=this||Af,r=t||n,o=Yt.from(r.headers);let i=r.data;return _.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function xv(e){return!!(e&&e.__CANCEL__)}function ai(e,t,n){G.call(this,e??"canceled",G.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(ai,G,{__CANCEL__:!0});function Kk(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Qk=Lt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];_.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),_.isString(r)&&a.push("path="+r),_.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Yk(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function qk(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Sv(e,t){return e&&!Yk(t)?qk(e,t):t}const Xk=Lt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const l=_.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Jk(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Zk(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),f=r[i];a||(a=u),n[o]=s,r[o]=u;let c=i,h=0;for(;c!==o;)h+=n[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const v=f&&u-f;return v?Math.round(h*1e3/v):void 0}}function Fp(e,t){let n=0;const r=Zk(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,l=i-n,s=r(l),u=i<=a;n=i;const f={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-i)/s:void 0,event:o};f[t?"download":"upload"]=!0,e(f)}}const e2=typeof XMLHttpRequest<"u",t2=e2&&function(e){return new Promise(function(n,r){let o=e.data;const i=Yt.from(e.headers).normalize();let{responseType:a,withXSRFToken:l}=e,s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let f;if(_.isFormData(o)){if(Lt.hasStandardBrowserEnv||Lt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[m,...w]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([m||"multipart/form-data",...w].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+w))}const h=Sv(e.baseURL,e.url);c.open(e.method.toUpperCase(),gv(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function v(){if(!c)return;const m=Yt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};Kk(function(y){n(y),u()},function(y){r(y),u()},p),c=null}if("onloadend"in c?c.onloadend=v:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(v)},c.onabort=function(){c&&(r(new G("Request aborted",G.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new G("Network Error",G.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||yv;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new G(w,p.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,e,c)),c=null},Lt.hasStandardBrowserEnv&&(l&&_.isFunction(l)&&(l=l(e)),l||l!==!1&&Xk(h))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&Qk.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&_.forEach(i.toJSON(),function(w,p){c.setRequestHeader(p,w)}),_.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Fp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Fp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=m=>{c&&(r(!m||m.type?new ai(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const g=Jk(h);if(g&&Lt.protocols.indexOf(g)===-1){r(new G("Unsupported protocol "+g+":",G.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Fu={http:Pk,xhr:t2};_.forEach(Fu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Up=e=>`- ${e}`,n2=e=>_.isFunction(e)||e===null||e===!1,bv={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!n2(n)&&(r=Fu[(a=String(n)).toLowerCase()],r===void 0))throw new G(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(Up).join(`
`):" "+Up(i[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Fu};function Os(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ai(null,e)}function Bp(e){return Os(e),e.headers=Yt.from(e.headers),e.data=_s.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),bv.getAdapter(e.adapter||Af.adapter)(e).then(function(r){return Os(e),r.data=_s.call(e,e.transformResponse,r),r.headers=Yt.from(r.headers),r},function(r){return xv(r)||(Os(e),r&&r.response&&(r.response.data=_s.call(e,e.transformResponse,r.response),r.response.headers=Yt.from(r.response.headers))),Promise.reject(r)})}const Wp=e=>e instanceof Yt?e.toJSON():e;function Ar(e,t){t=t||{};const n={};function r(u,f,c){return _.isPlainObject(u)&&_.isPlainObject(f)?_.merge.call({caseless:c},u,f):_.isPlainObject(f)?_.merge({},f):_.isArray(f)?f.slice():f}function o(u,f,c){if(_.isUndefined(f)){if(!_.isUndefined(u))return r(void 0,u,c)}else return r(u,f,c)}function i(u,f){if(!_.isUndefined(f))return r(void 0,f)}function a(u,f){if(_.isUndefined(f)){if(!_.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function l(u,f,c){if(c in t)return r(u,f);if(c in e)return r(void 0,u)}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,f)=>o(Wp(u),Wp(f),!0)};return _.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=s[f]||o,h=c(e[f],t[f],f);_.isUndefined(h)&&c!==l||(n[f]=h)}),n}const kv="1.6.2",Lf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Lf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Hp={};Lf.transitional=function(t,n,r){function o(i,a){return"[Axios v"+kv+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new G(o(a," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!Hp[a]&&(Hp[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};function r2(e,t,n){if(typeof e!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const l=e[i],s=l===void 0||a(l,i,e);if(s!==!0)throw new G("option "+i+" must be "+s,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}}const Uu={assertOptions:r2,validators:Lf},ln=Uu.validators;class La{constructor(t){this.defaults=t,this.interceptors={request:new Dp,response:new Dp}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ar(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Uu.assertOptions(r,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),o!=null&&(_.isFunction(o)?n.paramsSerializer={serialize:o}:Uu.assertOptions(o,{encode:ln.function,serialize:ln.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=Yt.concat(a,i);const l=[];let s=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(s=s&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let f,c=0,h;if(!s){const g=[Bp.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),h=g.length,f=Promise.resolve(n);c<h;)f=f.then(g[c++],g[c++]);return f}h=l.length;let v=n;for(c=0;c<h;){const g=l[c++],m=l[c++];try{v=g(v)}catch(w){m.call(this,w);break}}try{f=Bp.call(this,v)}catch(g){return Promise.reject(g)}for(c=0,h=u.length;c<h;)f=f.then(u[c++],u[c++]);return f}getUri(t){t=Ar(this.defaults,t);const n=Sv(t.baseURL,t.url);return gv(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){La.prototype[t]=function(n,r){return this.request(Ar(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,l){return this.request(Ar(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}La.prototype[t]=n(),La.prototype[t+"Form"]=n(!0)});const ra=La;class zf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new ai(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new zf(function(o){t=o}),cancel:t}}}const o2=zf;function i2(e){return function(n){return e.apply(null,n)}}function a2(e){return _.isObject(e)&&e.isAxiosError===!0}const Bu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Bu).forEach(([e,t])=>{Bu[t]=e});const l2=Bu;function Ev(e){const t=new ra(e),n=ov(ra.prototype.request,t);return _.extend(n,ra.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Ev(Ar(e,o))},n}const xe=Ev(Af);xe.Axios=ra;xe.CanceledError=ai;xe.CancelToken=o2;xe.isCancel=xv;xe.VERSION=kv;xe.toFormData=Al;xe.AxiosError=G;xe.Cancel=xe.CanceledError;xe.all=function(t){return Promise.all(t)};xe.spread=i2;xe.isAxiosError=a2;xe.mergeConfig=Ar;xe.AxiosHeaders=Yt;xe.formToJSON=e=>wv(_.isHTMLForm(e)?new FormData(e):e);xe.getAdapter=bv.getAdapter;xe.HttpStatusCode=l2;xe.default=xe;const nn=xe;nn.defaults.baseURL="https://watertracker-backend.onrender.com";const If={set(e){nn.defaults.headers.common.Authorization=`Bearer ${e}`},unset(){nn.defaults.headers.common.Authorization=""}},s2=async e=>{const{data:t}=await nn.post("/auth/register",e);return If.set(t.token),t},u2=async e=>{const{data:t}=await nn.post("/auth/login",e);return If.set(t.token),t},c2=async()=>{await nn.post("/auth/logout"),If.unset()},f2=async e=>{e.set(e);const{data:t}=await nn.get("/user/current");return t},d2=async e=>{const{data:{avatarURL:t}}=await nn.post("/user/avatar",e,{headers:{"Content-Type":"multipart/form-data"}});return t},p2=async e=>await nn.patch("/user/edit",e,{headers:{"Content-Type":"application/json"}}),h2=Br("auth/register",async(e,{rejectWithValue:t})=>{try{return await s2(e)}catch(n){return t(n.message)}}),m2=Br("auth/login",async(e,{rejectWithValue:t})=>{try{return await u2(e)}catch(n){return t(n.message)}}),Pv=Br("auth/logout",async(e,{rejectWithValue:t})=>{try{await c2();return}catch(n){return t(n.message)}}),Cs=Br("auth/refresh",async(e,{rejectWithValue:t,getState:n})=>{try{const{auth:{token:r}}=n();return await f2(r)}catch(r){return t(r.message)}},{condition:(e,{getState:t})=>{const{auth:{token:n}}=t();if(!n)return!1}}),g2=Br("user/avatar",async(e,{rejectWithValue:t})=>{try{return await d2(e)}catch(n){return t(n.message)}}),y2=Br("user/edit",async(e,{rejectWithValue:t})=>{try{return await p2(e)}catch(n){return t(n.message)}}),v2=(e,{payload:t})=>{e.user=t},w2=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},x2=e=>{},S2=(e,{payload:t})=>{e.user=t,e.isRefreshing=!1,e.isLoggedIn=!0},b2=e=>{e.isRefreshing=!0},k2=e=>{e.isRefreshing=!1},E2=(e,{payload:t})=>{e.user.avatarURL=t},P2=(e,{payload:t})=>{e.user=t},_2={user:{email:"",avatarURL:"",userName:"",gender:"",waterRate:""},token:null,isLoggedIn:!1,isRefreshing:!1},O2=sb({name:"auth",initialState:_2,extraReducers:e=>{e.addCase(h2.fulfilled,v2).addCase(m2.fulfilled,w2).addCase(Pv.fulfilled,x2).addCase(g2.fulfilled,E2).addCase(Cs.fulfilled,S2).addCase(y2.fulfilled,P2).addCase(Cs.pending,b2).addCase(Cs.rejected,k2)}}),C2=O2.reducer,j2={key:"auth",storage:rv,whitelist:["token"]},_v=ob({reducer:{auth:jb(j2,C2)},middleware:e=>e({serializableCheck:{ignoredActions:[Ef,Rl,Pf,_f,Of,Cf]}})}),R2=Lb(_v);var Ov={};const $2=n0(L1);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=$2;function n(){var a=r([`
html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
}
body {
  margin: 0;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}
pre {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input { 
  overflow: visible;
}
button,
select { 
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
`]);return n=function(){return a},a}function r(a,l){return l||(l=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(l)}}))}var o=(0,t.css)(n()),i=o;e.default=i})(Ov);const T2=Ua(Ov),Wu={color:{black:"#2F2F2F",white:"#FFFFFF",accent:"#407BFF",secondaryWhite:"#ecf2ff",secondaryRed:"#ef5050",secondaryLightBlue:"#9ebbff",secondaryYellow:"#ff9d43",secondaryPowderBlue:"#d7e3ff"},breakpoint:{mobile:"320px",tablet:"768px",desktop:"1440px"},transition:{main:"250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",modal:"300ms ease-in-out"},boxShadowforButton:{normalButton:"0 4px 8px rgba(64, 123, 255, 0.34)",hoverButton:"0 4px 14px rgba(64, 123, 255, 0.54)",activeButton:"none"},modalBoxShadow:{modal:"0 4px 14px rgba(64, 123, 255, 0.3)"}},N2="/water-tracker/assets/Roboto-Regular-4e147ab6.ttf",A2="/water-tracker/assets/Roboto-Medium-9d0d55a3.ttf",L2="/water-tracker/assets/Roboto-Bold-ec685a46.ttf",z2=wc`
  ${T2}

  /* ========================= Reset styles ========================= */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }
  /* ========================= /Reset styles ========================= */

  /* ========================= Fonts ========================= */
  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    src: url(${N2}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url(${A2}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: url(${L2}) format('truetype');
  }
  /* ========================= /Fonts ========================= */

  /* ========================= Common styles ========================= */
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${Wu.color.black};
    background-color: ${Wu.color.white};
  }
  /* ========================= /Common styles ========================= */

  /* ========================= /Scroll styles ========================= */

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9ebbff;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(239, 237, 232, 0.1);
  }

  /* Firefox */
  * {
    scrollbar-color: #9ebbff rgba(239, 237, 232, 0.1);
  }

  /* ========================= /Scroll styles ========================= */
`;var Cv={exports:{}},I2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",D2=I2,M2=D2;function jv(){}function Rv(){}Rv.resetWarningCache=jv;var F2=function(){function e(r,o,i,a,l,s){if(s!==M2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Rv,resetWarningCache:jv};return n.PropTypes=n,n};Cv.exports=F2();var U2=Cv.exports;const uo=Ua(U2);var B2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Hu=bm(function(e){return B2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),W2=Hu,H2=function(t){return t!=="theme"},Vp=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?W2:H2},Gp=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},V2=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return nl(n,r,o),gc(function(){return rl(n,r,o)}),null},G2=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var l=Gp(t,n,r),s=l||Vp(o),u=!s("as");return function(){var f=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&c.push("label:"+i+";"),f[0]==null||f[0].raw===void 0)c.push.apply(c,f);else{c.push(f[0][0]);for(var h=f.length,v=1;v<h;v++)c.push(f[v],f[0][v])}var g=ei(function(m,w,p){var d=u&&m.as||o,y="",x=[],E=m;if(m.theme==null){E={};for(var P in m)E[P]=m[P];E.theme=b.useContext(qt)}typeof m.className=="string"?y=mc(w.registered,x,m.className):m.className!=null&&(y=m.className+" ");var C=Zo(c.concat(x),w.registered,E);y+=w.key+"-"+C.name,a!==void 0&&(y+=" "+a);var R=u&&l===void 0?Vp(d):s,D={};for(var I in m)u&&I==="as"||R(I)&&(D[I]=m[I]);return D.className=y,D.ref=p,b.createElement(b.Fragment,null,b.createElement(V2,{cache:w,serialized:C,isStringTag:typeof d=="string"}),b.createElement(d,D))});return g.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=o,g.__emotion_styles=c,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(m,w){return e(m,Eo({},n,w,{shouldForwardProp:Gp(g,w,!0)})).apply(void 0,c)},g}},K2=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],O=G2.bind();K2.forEach(function(e){O[e]=O(e)});const Q2=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`,Y2=O.div`
 transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 280px;
    max-height: 100%;
    background: ${e=>e.theme.color.white};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all ${e=>e.theme.transition.modal};

    @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
      min-width: 704px;
    }

    @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
      max-width: 544px;
    }
    `,q2=O.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 12px;
    color: ${e=>e.theme.color.black};

    h2 {
      font-weight: 500;
      font-size: 26px;
      line-height: 1.2;
    }

    @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 32px;
    }
    `,X2=O.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,J2=O.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.color.accent};

  &:hover,
  &:focus {
    stroke: ${e=>e.theme.color.secondaryYellow};
  }
`,gn="/water-tracker/assets/sprite-45727ddf.svg",zl=({onShow:e=!0,type:t,children:n,title:r,onClose:o})=>{const i=document.querySelector("#modal-root"),a=b.useRef(null),l=b.useRef(null);return b.useEffect(()=>{if(!e)return;const s=f=>{document.body.style.overflow=f?"hidden":"auto"};(e||i.children.length!==0)&&s(!0);const u=f=>{f.code==="Escape"&&o()};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[i.children.length,e,o]),ff.createPortal(S.jsx(Q2,{onClick:o,ref:l,children:S.jsxs(Y2,{type:t,onClick:s=>s.stopPropagation(),ref:a,children:[S.jsxs(q2,{children:[S.jsx("h2",{children:r}),S.jsx(X2,{onClick:o,children:S.jsx(J2,{children:S.jsx("use",{href:`${gn}#icon-outline`})})})]}),S.jsx("div",{children:n})]})}),i)};zl.propTypes={onClose:uo.func.isRequired,children:uo.node.isRequired,onShow:uo.bool,title:uo.string.isRequired};const Z2=O.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 1440px;
    padding-right: 120px;
    padding-left: 120px;
  }
`;var eE=function(e){return{display:e?"flex":"none"}},tE="#4fa94d",nE={"aria-busy":!0,role:"status"},Kp=globalThis&&globalThis.__assign||function(){return Kp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Kp.apply(this,arguments)},Qp=globalThis&&globalThis.__assign||function(){return Qp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Qp.apply(this,arguments)},Yp=globalThis&&globalThis.__assign||function(){return Yp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Yp.apply(this,arguments)},qp=globalThis&&globalThis.__assign||function(){return qp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},qp.apply(this,arguments)},Xp=globalThis&&globalThis.__assign||function(){return Xp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Xp.apply(this,arguments)},Jp=globalThis&&globalThis.__assign||function(){return Jp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Jp.apply(this,arguments)},Zp=globalThis&&globalThis.__assign||function(){return Zp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Zp.apply(this,arguments)};function rE(e){function t(N,A,L,U,k){for(var V=0,T=0,pe=0,X=0,Z,W,Ce=0,Ye=0,Q,Ie=Q=Z=0,J=0,je=0,Gr=0,Re=0,fi=L.length,Kr=fi-1,xt,B="",ge="",Fl="",Ul="",on;J<fi;){if(W=L.charCodeAt(J),J===Kr&&T+X+pe+V!==0&&(T!==0&&(W=T===47?10:47),X=pe=V=0,fi++,Kr++),T+X+pe+V===0){if(J===Kr&&(0<je&&(B=B.replace(h,"")),0<B.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:B+=L.charAt(J)}W=59}switch(W){case 123:for(B=B.trim(),Z=B.charCodeAt(0),Q=1,Re=++J;J<fi;){switch(W=L.charCodeAt(J)){case 123:Q++;break;case 125:Q--;break;case 47:switch(W=L.charCodeAt(J+1)){case 42:case 47:e:{for(Ie=J+1;Ie<Kr;++Ie)switch(L.charCodeAt(Ie)){case 47:if(W===42&&L.charCodeAt(Ie-1)===42&&J+2!==Ie){J=Ie+1;break e}break;case 10:if(W===47){J=Ie+1;break e}}J=Ie}}break;case 91:W++;case 40:W++;case 34:case 39:for(;J++<Kr&&L.charCodeAt(J)!==W;);}if(Q===0)break;J++}switch(Q=L.substring(Re,J),Z===0&&(Z=(B=B.replace(c,"").trim()).charCodeAt(0)),Z){case 64:switch(0<je&&(B=B.replace(h,"")),W=B.charCodeAt(1),W){case 100:case 109:case 115:case 45:je=A;break;default:je=Ut}if(Q=t(A,je,Q,W,k+1),Re=Q.length,0<$&&(je=n(Ut,B,Gr),on=l(3,Q,je,A,Oe,Se,Re,W,k,U),B=je.join(""),on!==void 0&&(Re=(Q=on.trim()).length)===0&&(W=0,Q="")),0<Re)switch(W){case 115:B=B.replace(P,a);case 100:case 109:case 45:Q=B+"{"+Q+"}";break;case 107:B=B.replace(d,"$1 $2"),Q=B+"{"+Q+"}",Q=ze===1||ze===2&&i("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=B+Q,U===112&&(Q=(ge+=Q,""))}else Q="";break;default:Q=t(A,n(A,B,Gr),Q,U,k+1)}Fl+=Q,Q=Gr=je=Ie=Z=0,B="",W=L.charCodeAt(++J);break;case 125:case 59:if(B=(0<je?B.replace(h,""):B).trim(),1<(Re=B.length))switch(Ie===0&&(Z=B.charCodeAt(0),Z===45||96<Z&&123>Z)&&(Re=(B=B.replace(" ",":")).length),0<$&&(on=l(1,B,A,N,Oe,Se,ge.length,U,k,U))!==void 0&&(Re=(B=on.trim()).length)===0&&(B="\0\0"),Z=B.charCodeAt(0),W=B.charCodeAt(1),Z){case 0:break;case 64:if(W===105||W===99){Ul+=B+L.charAt(J);break}default:B.charCodeAt(Re-1)!==58&&(ge+=o(B,Z,W,B.charCodeAt(2)))}Gr=je=Ie=Z=0,B="",W=L.charCodeAt(++J)}}switch(W){case 13:case 10:T===47?T=0:1+Z===0&&U!==107&&0<B.length&&(je=1,B+="\0"),0<$*F&&l(0,B,A,N,Oe,Se,ge.length,U,k,U),Se=1,Oe++;break;case 59:case 125:if(T+X+pe+V===0){Se++;break}default:switch(Se++,xt=L.charAt(J),W){case 9:case 32:if(X+V+T===0)switch(Ce){case 44:case 58:case 9:case 32:xt="";break;default:W!==32&&(xt=" ")}break;case 0:xt="\\0";break;case 12:xt="\\f";break;case 11:xt="\\v";break;case 38:X+T+V===0&&(je=Gr=1,xt="\f"+xt);break;case 108:if(X+T+V+nt===0&&0<Ie)switch(J-Ie){case 2:Ce===112&&L.charCodeAt(J-3)===58&&(nt=Ce);case 8:Ye===111&&(nt=Ye)}break;case 58:X+T+V===0&&(Ie=J);break;case 44:T+pe+X+V===0&&(je=1,xt+="\r");break;case 34:case 39:T===0&&(X=X===W?0:X===0?W:X);break;case 91:X+T+pe===0&&V++;break;case 93:X+T+pe===0&&V--;break;case 41:X+T+V===0&&pe--;break;case 40:if(X+T+V===0){if(Z===0)switch(2*Ce+3*Ye){case 533:break;default:Z=1}pe++}break;case 64:T+pe+X+V+Ie+Q===0&&(Q=1);break;case 42:case 47:if(!(0<X+V+pe))switch(T){case 0:switch(2*W+3*L.charCodeAt(J+1)){case 235:T=47;break;case 220:Re=J,T=42}break;case 42:W===47&&Ce===42&&Re+2!==J&&(L.charCodeAt(Re+2)===33&&(ge+=L.substring(Re,J+1)),xt="",T=0)}}T===0&&(B+=xt)}Ye=Ce,Ce=W,J++}if(Re=ge.length,0<Re){if(je=A,0<$&&(on=l(2,ge,je,N,Oe,Se,Re,U,k,U),on!==void 0&&(ge=on).length===0))return Ul+ge+Fl;if(ge=je.join(",")+"{"+ge+"}",ze*nt!==0){switch(ze!==2||i(ge,2)||(nt=0),nt){case 111:ge=ge.replace(x,":-moz-$1")+ge;break;case 112:ge=ge.replace(y,"::-webkit-input-$1")+ge.replace(y,"::-moz-$1")+ge.replace(y,":-ms-input-$1")+ge}nt=0}}return Ul+ge+Fl}function n(N,A,L){var U=A.trim().split(w);A=U;var k=U.length,V=N.length;switch(V){case 0:case 1:var T=0;for(N=V===0?"":N[0]+" ";T<k;++T)A[T]=r(N,A[T],L).trim();break;default:var pe=T=0;for(A=[];T<k;++T)for(var X=0;X<V;++X)A[pe++]=r(N[X]+" ",U[T],L).trim()}return A}function r(N,A,L){var U=A.charCodeAt(0);switch(33>U&&(U=(A=A.trim()).charCodeAt(0)),U){case 38:return A.replace(p,"$1"+N.trim());case 58:return N.trim()+A.replace(p,"$1"+N.trim());default:if(0<1*L&&0<A.indexOf("\f"))return A.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+A}function o(N,A,L,U){var k=N+";",V=2*A+3*L+4*U;if(V===944){N=k.indexOf(":",9)+1;var T=k.substring(N,k.length-1).trim();return T=k.substring(0,N).trim()+T+";",ze===1||ze===2&&i(T,1)?"-webkit-"+T+T:T}if(ze===0||ze===2&&!i(k,1))return k;switch(V){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(le,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return T=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+k+"-ms-flex-pack"+T+k;case 1005:return g.test(k)?k.replace(v,":-webkit-")+k.replace(v,":-moz-")+k:k;case 1e3:switch(T=k.substring(13).trim(),A=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(A)){case 226:T=k.replace(E,"tb");break;case 232:T=k.replace(E,"tb-rl");break;case 220:T=k.replace(E,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+T+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(A=(k=N).length-10,T=(k.charCodeAt(A)===33?k.substring(0,A):k).substring(N.indexOf(":",7)+1).trim(),V=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:k=k.replace(T,"-webkit-"+T)+";"+k;break;case 207:case 102:k=k.replace(T,"-webkit-"+(102<V?"inline-":"")+"box")+";"+k.replace(T,"-webkit-"+T)+";"+k.replace(T,"-ms-"+T+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return T=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+T+"-ms-flex-"+T+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(R,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(R,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(I.test(N)===!0)return(T=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?o(N.replace("stretch","fill-available"),A,L,U).replace(":fill-available",":stretch"):k.replace(T,"-webkit-"+T)+k.replace(T,"-moz-"+T.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,L+U===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+k}return k}function i(N,A){var L=N.indexOf(A===1?":":"{"),U=N.substring(0,A!==3?L:10);return L=N.substring(L+1,N.length-1),M(A!==2?U:U.replace(D,"$1"),L,A)}function a(N,A){var L=o(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return L!==A+";"?L.replace(C," or ($1)").substring(4):"("+A+")"}function l(N,A,L,U,k,V,T,pe,X,Z){for(var W=0,Ce=A,Ye;W<$;++W)switch(Ye=He[W].call(f,N,Ce,L,U,k,V,T,pe,X,Z)){case void 0:case!1:case!0:case null:break;default:Ce=Ye}if(Ce!==A)return Ce}function s(N){switch(N){case void 0:case null:$=He.length=0;break;default:if(typeof N=="function")He[$++]=N;else if(typeof N=="object")for(var A=0,L=N.length;A<L;++A)s(N[A]);else F=!!N|0}return s}function u(N){return N=N.prefix,N!==void 0&&(M=null,N?typeof N!="function"?ze=1:(ze=2,M=N):ze=0),u}function f(N,A){var L=N;if(33>L.charCodeAt(0)&&(L=L.trim()),re=L,L=[re],0<$){var U=l(-1,A,L,L,Oe,Se,0,0,0,0);U!==void 0&&typeof U=="string"&&(A=U)}var k=t(Ut,L,A,0,0);return 0<$&&(U=l(-2,k,L,L,Oe,Se,k.length,0,0,0),U!==void 0&&(k=U)),re="",nt=0,Se=Oe=1,k}var c=/^\0+/g,h=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,m=/([,: ])(transform)/g,w=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,x=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,R=/-self|flex-/g,D=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,le=/([^-])(image-set\()/,Se=1,Oe=1,nt=0,ze=1,Ut=[],He=[],$=0,M=null,F=0,re="";return f.use=s,f.set=u,e!==void 0&&u(e),f}var oE={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Kt(){return(Kt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var eh=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Vu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!dc.typeOf(e)},za=Object.freeze([]),Cn=Object.freeze({});function Ko(e){return typeof e=="function"}function th(e){return e.displayName||e.name||"Component"}function Df(e){return e&&typeof e.styledComponentId=="string"}var Lr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Mf=typeof window<"u"&&"HTMLElement"in window,iE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function li(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var aE=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&li(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),oa=new Map,Ia=new Map,xo=1,Ri=function(e){if(oa.has(e))return oa.get(e);for(;Ia.has(xo);)xo++;var t=xo++;return oa.set(e,t),Ia.set(t,e),t},lE=function(e){return Ia.get(e)},sE=function(e,t){t>=xo&&(xo=t+1),oa.set(e,t),Ia.set(t,e)},uE="style["+Lr+'][data-styled-version="5.3.11"]',cE=new RegExp("^"+Lr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),fE=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},dE=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(cE);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(sE(u,s),fE(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},pE=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},$v=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var f=s[u];if(f&&f.nodeType===1&&f.hasAttribute(Lr))return f}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Lr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=pE();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},hE=function(){function e(n){var r=this.element=$v(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}li(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),mE=function(){function e(n){var r=this.element=$v(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),gE=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),nh=Mf,yE={isServer:!Mf,useCSSOMInjection:!iE},Tv=function(){function e(n,r,o){n===void 0&&(n=Cn),r===void 0&&(r={}),this.options=Kt({},yE,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Mf&&nh&&(nh=!1,function(i){for(var a=document.querySelectorAll(uE),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(Lr)!=="active"&&(dE(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ri(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Kt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new gE(a):i?new hE(a):new mE(a),new aE(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ri(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ri(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ri(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=lE(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var f=Lr+".g"+a+'[id="'+l+'"]',c="";s!==void 0&&s.forEach(function(h){h.length>0&&(c+=h+",")}),i+=""+u+f+'{content:"'+c+`"}/*!sc*/
`}}}return i}(this)},e}(),vE=/(a)(d)/gi,rh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=rh(t%52)+n;return(rh(t%52)+n).replace(vE,"$1-$2")}var hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Nv=function(e){return hr(5381,e)};function wE(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ko(n)&&!Df(n))return!1}return!0}var xE=Nv("5.3.11"),SE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wE(t),this.componentId=n,this.baseHash=hr(xE,n),this.baseStyle=r,Tv.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=zr(this.rules,t,n,r).join(""),l=Gu(hr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,f=hr(this.baseHash,r.hash),c="",h=0;h<u;h++){var v=this.rules[h];if(typeof v=="string")c+=v;else if(v){var g=zr(v,t,n,r),m=Array.isArray(g)?g.join(""):g;f=hr(f,m+h),c+=m}}if(c){var w=Gu(f>>>0);if(!n.hasNameForId(o,w)){var p=r(c,"."+w,void 0,o);n.insertRules(o,w,p)}i.push(w)}}return i.join(" ")},e}(),bE=/^\s*\/\/.*$/gm,kE=[":","[",".","#"];function EE(e){var t,n,r,o,i=e===void 0?Cn:e,a=i.options,l=a===void 0?Cn:a,s=i.plugins,u=s===void 0?za:s,f=new rE(l),c=[],h=function(m){function w(p){if(p)try{m(p+"}")}catch{}}return function(p,d,y,x,E,P,C,R,D,I){switch(p){case 1:if(D===0&&d.charCodeAt(0)===64)return m(d+";"),"";break;case 2:if(R===0)return d+"/*|*/";break;case 3:switch(R){case 102:case 112:return m(y[0]+d),"";default:return d+(I===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(w)}}}(function(m){c.push(m)}),v=function(m,w,p){return w===0&&kE.indexOf(p[n.length])!==-1||p.match(o)?m:"."+t};function g(m,w,p,d){d===void 0&&(d="&");var y=m.replace(bE,""),x=w&&p?p+" "+w+" { "+y+" }":y;return t=d,n=w,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),f(p||!w?"":w,x)}return f.use([].concat(u,[function(m,w,p){m===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,v))},h,function(m){if(m===-2){var w=c;return c=[],w}}])),g.hash=u.length?u.reduce(function(m,w){return w.name||li(15),hr(m,w.name)},5381).toString():"",g}var Av=Te.createContext();Av.Consumer;var Lv=Te.createContext(),PE=(Lv.Consumer,new Tv),Ku=EE();function _E(){return b.useContext(Av)||PE}function OE(){return b.useContext(Lv)||Ku}var zv=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ku);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return li(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ku),this.name+t.hash},e}(),CE=/([A-Z])/,jE=/([A-Z])/g,RE=/^ms-/,$E=function(e){return"-"+e.toLowerCase()};function oh(e){return CE.test(e)?e.replace(jE,$E).replace(RE,"-ms-"):e}var ih=function(e){return e==null||e===!1||e===""};function zr(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=zr(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(ih(e))return"";if(Df(e))return"."+e.styledComponentId;if(Ko(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return zr(s,t,n,r)}var u;return e instanceof zv?n?(e.inject(n,r),e.getName(r)):e:Vu(e)?function f(c,h){var v,g,m=[];for(var w in c)c.hasOwnProperty(w)&&!ih(c[w])&&(Array.isArray(c[w])&&c[w].isCss||Ko(c[w])?m.push(oh(w)+":",c[w],";"):Vu(c[w])?m.push.apply(m,f(c[w],w)):m.push(oh(w)+": "+(v=w,(g=c[w])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in oE||v.startsWith("--")?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(m,["}"]):m}(e):e.toString()}var ah=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Iv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ko(e)||Vu(e)?ah(zr(eh(za,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ah(zr(eh(e,n)))}var TE=function(e,t,n){return n===void 0&&(n=Cn),e.theme!==n.theme&&e.theme||t||n.theme},NE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,AE=/(^-|-$)/g;function js(e){return e.replace(NE,"-").replace(AE,"")}var Dv=function(e){return Gu(Nv(e)>>>0)};function $i(e){return typeof e=="string"&&!0}var Qu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},LE=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function zE(e,t,n){var r=e[n];Qu(t)&&Qu(r)?Mv(r,t):e[n]=t}function Mv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Qu(a))for(var l in a)LE(l)&&zE(e,a[l],l)}return e}var Fv=Te.createContext();Fv.Consumer;var Rs={};function Uv(e,t,n){var r=Df(e),o=!$i(e),i=t.attrs,a=i===void 0?za:i,l=t.componentId,s=l===void 0?function(d,y){var x=typeof d!="string"?"sc":js(d);Rs[x]=(Rs[x]||0)+1;var E=x+"-"+Dv("5.3.11"+x+Rs[x]);return y?y+"-"+E:E}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(d){return $i(d)?"styled."+d:"Styled("+th(d)+")"}(e):u,c=t.displayName&&t.componentId?js(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(d,y,x){return e.shouldForwardProp(d,y,x)&&t.shouldForwardProp(d,y,x)}:e.shouldForwardProp);var g,m=new SE(n,c,r?e.componentStyle:void 0),w=m.isStatic&&a.length===0,p=function(d,y){return function(x,E,P,C){var R=x.attrs,D=x.componentStyle,I=x.defaultProps,le=x.foldedComponentIds,Se=x.shouldForwardProp,Oe=x.styledComponentId,nt=x.target,ze=function(U,k,V){U===void 0&&(U=Cn);var T=Kt({},k,{theme:U}),pe={};return V.forEach(function(X){var Z,W,Ce,Ye=X;for(Z in Ko(Ye)&&(Ye=Ye(T)),Ye)T[Z]=pe[Z]=Z==="className"?(W=pe[Z],Ce=Ye[Z],W&&Ce?W+" "+Ce:W||Ce):Ye[Z]}),[T,pe]}(TE(E,b.useContext(Fv),I)||Cn,E,R),Ut=ze[0],He=ze[1],$=function(U,k,V,T){var pe=_E(),X=OE(),Z=k?U.generateAndInjectStyles(Cn,pe,X):U.generateAndInjectStyles(V,pe,X);return Z}(D,C,Ut),M=P,F=He.$as||E.$as||He.as||E.as||nt,re=$i(F),N=He!==E?Kt({},E,{},He):E,A={};for(var L in N)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?A.as=N[L]:(Se?Se(L,Hu,F):!re||Hu(L))&&(A[L]=N[L]));return E.style&&He.style!==E.style&&(A.style=Kt({},E.style,{},He.style)),A.className=Array.prototype.concat(le,Oe,$!==Oe?$:null,E.className,He.className).filter(Boolean).join(" "),A.ref=M,b.createElement(F,A)}(g,d,y,w)};return p.displayName=f,(g=Te.forwardRef(p)).attrs=h,g.componentStyle=m,g.displayName=f,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):za,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(d){var y=t.componentId,x=function(P,C){if(P==null)return{};var R,D,I={},le=Object.keys(P);for(D=0;D<le.length;D++)R=le[D],C.indexOf(R)>=0||(I[R]=P[R]);return I}(t,["componentId"]),E=y&&y+"-"+($i(d)?d:js(th(d)));return Uv(d,Kt({},x,{attrs:h,componentId:E}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Mv({},e.defaultProps,d):d}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&Cm(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Yu=function(e){return function t(n,r,o){if(o===void 0&&(o=Cn),!dc.isValidElementType(r))return li(1,String(r));var i=function(){return n(r,o,Iv.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Kt({},o,{},a))},i.attrs=function(a){return t(n,r,Kt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Uv,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Yu[e]=Yu(e)});function Ff(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Iv.apply(void 0,[e].concat(n)).join(""),i=Dv(o);return new zv(i,o)}const si=Yu;var Bv=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},bt=242.776657104492,IE=1.6,DE=Ff(lh||(lh=Bv([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),bt*.14,bt,bt*.11,bt*.35,bt,bt*.35,bt*.01,bt,bt*.99);si.path(sh||(sh=Bv([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),bt*.01,bt,DE,IE);var lh,sh,uh=globalThis&&globalThis.__assign||function(){return uh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},uh.apply(this,arguments)},ch=globalThis&&globalThis.__assign||function(){return ch=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ch.apply(this,arguments)},fh=globalThis&&globalThis.__assign||function(){return fh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},fh.apply(this,arguments)},dh=globalThis&&globalThis.__assign||function(){return dh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},dh.apply(this,arguments)},ph=globalThis&&globalThis.__assign||function(){return ph=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ph.apply(this,arguments)},hh=globalThis&&globalThis.__assign||function(){return hh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},hh.apply(this,arguments)},mh=globalThis&&globalThis.__assign||function(){return mh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},mh.apply(this,arguments)},ME=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var o=t.split("."),i=o.length,a=r[o[0]],l=1;a!=null&&l<i;)a=a[o[l]],l+=1;if(typeof a<"u")return a}return n}},Uf=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},gh=globalThis&&globalThis.__assign||function(){return gh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},gh.apply(this,arguments)},FE=Ff(yh||(yh=Uf([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));si.svg(vh||(vh=Uf([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),FE,ME("speed","0.75"));si.polyline(wh||(wh=Uf([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(e){return e.width});var yh,vh,wh,xh=globalThis&&globalThis.__assign||function(){return xh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},xh.apply(this,arguments)},Sh=globalThis&&globalThis.__assign||function(){return Sh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Sh.apply(this,arguments)},So=globalThis&&globalThis.__assign||function(){return So=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},So.apply(this,arguments)},UE=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,o=r===void 0?80:r,i=e.radius,a=i===void 0?9:i,l=e.color,s=l===void 0?tE:l,u=e.ariaLabel,f=u===void 0?"three-dots-loading":u,c=e.wrapperStyle,h=e.wrapperClass,v=e.visible,g=v===void 0?!0:v;return Te.createElement("div",So({style:So(So({},eE(g)),c),className:h,"data-testid":"three-dots-loading","aria-label":f},nE),Te.createElement("svg",{width:o,height:n,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:s,"data-testid":"three-dots-svg"},Te.createElement("circle",{cx:"15",cy:"15",r:Number(a)+6},Te.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Te.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),Te.createElement("circle",{cx:"60",cy:"15",r:a,attributeName:"fill-opacity",from:"1",to:"0.3"},Te.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),Te.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),Te.createElement("circle",{cx:"105",cy:"15",r:Number(a)+6},Te.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Te.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))},Bf=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},bh=globalThis&&globalThis.__assign||function(){return bh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},bh.apply(this,arguments)},BE=Ff(kh||(kh=Bf([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));si.polygon(Eh||(Eh=Bf([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),BE);si.svg(Ph||(Ph=Bf([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var kh,Eh,Ph,_h=globalThis&&globalThis.__assign||function(){return _h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_h.apply(this,arguments)},Oh=globalThis&&globalThis.__assign||function(){return Oh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Oh.apply(this,arguments)},Ch=globalThis&&globalThis.__assign||function(){return Ch=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ch.apply(this,arguments)},jh=globalThis&&globalThis.__assign||function(){return jh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},jh.apply(this,arguments)},Rh=globalThis&&globalThis.__assign||function(){return Rh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Rh.apply(this,arguments)},$h=globalThis&&globalThis.__assign||function(){return $h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},$h.apply(this,arguments)},Th=globalThis&&globalThis.__assign||function(){return Th=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Th.apply(this,arguments)},Nh=globalThis&&globalThis.__assign||function(){return Nh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Nh.apply(this,arguments)},Ah=globalThis&&globalThis.__assign||function(){return Ah=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ah.apply(this,arguments)},Lh=globalThis&&globalThis.__assign||function(){return Lh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Lh.apply(this,arguments)},zh=globalThis&&globalThis.__assign||function(){return zh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},zh.apply(this,arguments)},Ih=globalThis&&globalThis.__assign||function(){return Ih=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ih.apply(this,arguments)},Dh=globalThis&&globalThis.__assign||function(){return Dh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Dh.apply(this,arguments)},Mh=globalThis&&globalThis.__assign||function(){return Mh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Mh.apply(this,arguments)};const WE=O.div`
  position: fixed;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1920px) {
    width: 90px;
    height: 90px;
  }
`,Wv=()=>S.jsx(WE,{children:S.jsx(UE,{height:"90",width:"90",radius:"9",color:"#407bff",ariaLabel:"three-dots-loading",visible:!0,timeout:2e3})});/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qo.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Fh="popstate";function HE(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return qu("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Da(o)}return GE(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function VE(){return Math.random().toString(36).substr(2,8)}function Uh(e,t){return{usr:e.state,key:e.key,idx:t}}function qu(e,t,n,r){return n===void 0&&(n=null),Qo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hr(t):t,{state:n,key:t&&t.key||r||VE()})}function Da(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function GE(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=yn.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(Qo({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){l=yn.Pop;let w=f(),p=w==null?null:w-u;u=w,s&&s({action:l,location:m.location,delta:p})}function h(w,p){l=yn.Push;let d=qu(m.location,w,p);n&&n(d,w),u=f()+1;let y=Uh(d,u),x=m.createHref(d);try{a.pushState(y,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(x)}i&&s&&s({action:l,location:m.location,delta:1})}function v(w,p){l=yn.Replace;let d=qu(m.location,w,p);n&&n(d,w),u=f();let y=Uh(d,u),x=m.createHref(d);a.replaceState(y,"",x),i&&s&&s({action:l,location:m.location,delta:0})}function g(w){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof w=="string"?w:Da(w);return me(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let m={get action(){return l},get location(){return e(o,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Fh,c),s=w,()=>{o.removeEventListener(Fh,c),s=null}},createHref(w){return t(o,w)},createURL:g,encodeLocation(w){let p=g(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(w){return a.go(w)}};return m}var Bh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bh||(Bh={}));function KE(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Hr(t):t,o=Yo(r.pathname||"/",n);if(o==null)return null;let i=Hv(e);QE(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=rP(i[l],iP(o));return a}function Hv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(me(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=jn([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(me(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hv(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:tP(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of Vv(i.path))o(i,a,s)}),t}function Vv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Vv(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function QE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nP(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YE=/^:\w+$/,qE=3,XE=2,JE=1,ZE=10,eP=-2,Wh=e=>e==="*";function tP(e,t){let n=e.split("/"),r=n.length;return n.some(Wh)&&(r+=eP),t&&(r+=XE),n.filter(o=>!Wh(o)).reduce((o,i)=>o+(YE.test(i)?qE:i===""?JE:ZE),r)}function nP(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function rP(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=Xu({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let c=l.route;i.push({params:r,pathname:jn([o,f.pathname]),pathnameBase:cP(jn([o,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(o=jn([o,f.pathnameBase]))}return i}function Xu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oP(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:h,isOptional:v}=f;if(h==="*"){let m=l[c]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const g=l[c];return v&&!g?u[h]=void 0:u[h]=aP(g||"",h),u},{}),pathname:i,pathnameBase:a,pattern:e}}function oP(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function iP(e){try{return decodeURI(e)}catch(t){return Wf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function aP(e,t){try{return decodeURIComponent(e)}catch(n){return Wf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Yo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lP(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Hr(e):e;return{pathname:n?n.startsWith("/")?n:sP(n,t):t,search:fP(r),hash:dP(o)}}function sP(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function $s(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uP(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gv(e,t){let n=uP(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Kv(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Hr(e):(o=Qo({},e),me(!o.pathname||!o.pathname.includes("?"),$s("?","pathname","search",o)),me(!o.pathname||!o.pathname.includes("#"),$s("#","pathname","hash",o)),me(!o.search||!o.search.includes("#"),$s("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else if(r){let c=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),c.pop();o.pathname=h.join("/")}l="/"+c.join("/")}else{let c=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),c-=1;o.pathname=h.join("/")}l=c>=0?t[c]:"/"}let s=lP(o,l),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),cP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pP(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qv=["post","put","patch","delete"];new Set(Qv);const hP=["get",...Qv];new Set(hP);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}const Il=b.createContext(null),Yv=b.createContext(null),In=b.createContext(null),Dl=b.createContext(null),Dn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),qv=b.createContext(null);function mP(e,t){let{relative:n}=t===void 0?{}:t;ui()||me(!1);let{basename:r,navigator:o}=b.useContext(In),{hash:i,pathname:a,search:l}=Ml(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:jn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function ui(){return b.useContext(Dl)!=null}function ci(){return ui()||me(!1),b.useContext(Dl).location}function Xv(e){b.useContext(In).static||b.useLayoutEffect(e)}function gP(){let{isDataRoute:e}=b.useContext(Dn);return e?$P():yP()}function yP(){ui()||me(!1);let e=b.useContext(Il),{basename:t,future:n,navigator:r}=b.useContext(In),{matches:o}=b.useContext(Dn),{pathname:i}=ci(),a=JSON.stringify(Gv(o,n.v7_relativeSplatPath)),l=b.useRef(!1);return Xv(()=>{l.current=!0}),b.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=Kv(u,JSON.parse(a),i,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:jn([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,a,i,e])}const vP=b.createContext(null);function wP(e){let t=b.useContext(Dn).outlet;return t&&b.createElement(vP.Provider,{value:e},t)}function Ml(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(In),{matches:o}=b.useContext(Dn),{pathname:i}=ci(),a=JSON.stringify(Gv(o,r.v7_relativeSplatPath));return b.useMemo(()=>Kv(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function xP(e,t){return SP(e,t)}function SP(e,t,n,r){ui()||me(!1);let{navigator:o}=b.useContext(In),{matches:i}=b.useContext(Dn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=ci(),f;if(t){var c;let w=typeof t=="string"?Hr(t):t;s==="/"||(c=w.pathname)!=null&&c.startsWith(s)||me(!1),f=w}else f=u;let h=f.pathname||"/",v=s==="/"?h:h.slice(s.length)||"/",g=KE(e,{pathname:v}),m=_P(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:jn([s,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:jn([s,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return t&&m?b.createElement(Dl.Provider,{value:{location:qo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yn.Pop}},m):m}function bP(){let e=RP(),t=pP(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,i)}const kP=b.createElement(bP,null);class EP extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Dn.Provider,{value:this.props.routeContext},b.createElement(qv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PP(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(Il);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Dn.Provider,{value:t},r)}function _P(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let f=a.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));f>=0||me(!1),a=a.slice(0,Math.min(a.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.loader&&c.route.id&&n.loaderData[c.route.id]===void 0&&(!n.errors||n.errors[c.route.id]===void 0)){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}return a.reduceRight((f,c,h)=>{let v,g=!1,m=null,w=null;n&&(v=l&&c.route.id?l[c.route.id]:void 0,m=c.route.errorElement||kP,s&&(u<0&&h===0?(TP("route-fallback",!1),g=!0,w=null):u===h&&(g=!0,w=c.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,h+1)),d=()=>{let y;return v?y=m:g?y=w:c.route.Component?y=b.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=f,b.createElement(PP,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?b.createElement(EP,{location:n.location,revalidation:n.revalidation,component:m,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Jv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jv||{}),Ma=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ma||{});function OP(e){let t=b.useContext(Il);return t||me(!1),t}function CP(e){let t=b.useContext(Yv);return t||me(!1),t}function jP(e){let t=b.useContext(Dn);return t||me(!1),t}function Zv(e){let t=jP(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function RP(){var e;let t=b.useContext(qv),n=CP(Ma.UseRouteError),r=Zv(Ma.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $P(){let{router:e}=OP(Jv.UseNavigateStable),t=Zv(Ma.UseNavigateStable),n=b.useRef(!1);return Xv(()=>{n.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,qo({fromRouteId:t},i)))},[e,t])}const Hh={};function TP(e,t,n){!t&&!Hh[e]&&(Hh[e]=!0)}function NP(e){return wP(e.context)}function sn(e){me(!1)}function AP(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yn.Pop,navigator:i,static:a=!1,future:l}=e;ui()&&me(!1);let s=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:s,navigator:i,static:a,future:qo({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=Hr(r));let{pathname:f="/",search:c="",hash:h="",state:v=null,key:g="default"}=r,m=b.useMemo(()=>{let w=Yo(f,s);return w==null?null:{location:{pathname:w,search:c,hash:h,state:v,key:g},navigationType:o}},[s,f,c,h,v,g,o]);return m==null?null:b.createElement(In.Provider,{value:u},b.createElement(Dl.Provider,{children:n,value:m}))}function LP(e){let{children:t,location:n}=e;return xP(Ju(t),n)}new Promise(()=>{});function Ju(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,o)=>{if(!b.isValidElement(r))return;let i=[...t,o];if(r.type===b.Fragment){n.push.apply(n,Ju(r.props.children,i));return}r.type!==sn&&me(!1),!r.props.index||!r.props.children||me(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ju(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fa.apply(this,arguments)}function e0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function zP(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function IP(e,t){return e.button===0&&(!t||t==="_self")&&!zP(e)}const DP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],MP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],FP=b.createContext({isTransitioning:!1}),UP="startTransition",Vh=Ns[UP];function BP(e){let{basename:t,children:n,future:r,window:o}=e,i=b.useRef();i.current==null&&(i.current=HE({window:o,v5Compat:!0}));let a=i.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=b.useCallback(c=>{u&&Vh?Vh(()=>s(c)):s(c)},[s,u]);return b.useLayoutEffect(()=>a.listen(f),[a,f]),b.createElement(AP,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const WP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,VP=b.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,h=e0(t,DP),{basename:v}=b.useContext(In),g,m=!1;if(typeof u=="string"&&HP.test(u)&&(g=u,WP))try{let y=new URL(window.location.href),x=u.startsWith("//")?new URL(y.protocol+u):new URL(u),E=Yo(x.pathname,v);x.origin===y.origin&&E!=null?u=E+x.search+x.hash:m=!0}catch{}let w=mP(u,{relative:o}),p=KP(u,{replace:a,state:l,target:s,preventScrollReset:f,relative:o,unstable_viewTransition:c});function d(y){r&&r(y),y.defaultPrevented||p(y)}return b.createElement("a",Fa({},h,{href:g||w,onClick:m||i?r:d,ref:n,target:s}))}),Zu=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,unstable_viewTransition:u,children:f}=t,c=e0(t,MP),h=Ml(s,{relative:c.relative}),v=ci(),g=b.useContext(Yv),{navigator:m}=b.useContext(In),w=g!=null&&QP(h)&&u===!0,p=m.encodeLocation?m.encodeLocation(h).pathname:h.pathname,d=v.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(d=d.toLowerCase(),y=y?y.toLowerCase():null,p=p.toLowerCase());const x=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let E=d===p||!a&&d.startsWith(p)&&d.charAt(x)==="/",P=y!=null&&(y===p||!a&&y.startsWith(p)&&y.charAt(p.length)==="/"),C={isActive:E,isPending:P,isTransitioning:w},R=E?r:void 0,D;typeof i=="function"?D=i(C):D=[i,E?"active":null,P?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let I=typeof l=="function"?l(C):l;return b.createElement(VP,Fa({},c,{"aria-current":R,className:D,ref:n,style:I,to:s,unstable_viewTransition:u}),typeof f=="function"?f(C):f)});var ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ec||(ec={}));var Gh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gh||(Gh={}));function GP(e){let t=b.useContext(Il);return t||me(!1),t}function KP(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=gP(),u=ci(),f=Ml(e,{relative:a});return b.useCallback(c=>{if(IP(c,n)){c.preventDefault();let h=r!==void 0?r:Da(u)===Da(f);s(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,f,r,o,n,e,i,a,l])}function QP(e,t){t===void 0&&(t={});let n=b.useContext(FP);n==null&&me(!1);let{basename:r}=GP(ec.useViewTransitionState),o=Ml(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Yo(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Yo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Xu(o.pathname,a)!=null||Xu(o.pathname,i)!=null}const Kh="/water-tracker/assets/Logo-890d13ba.png",Qh=O.img`
  width: 102px;
  height: 48px;
`,YP=e=>e.auth.user,qP=e=>e.auth.isLoggedIn,XP=()=>{const e=Wy(qP);return S.jsx("div",{children:e?S.jsx(Zu,{to:"/home",children:S.jsx(Qh,{src:Kh,alt:"logo"})}):S.jsx(Zu,{to:"/",children:S.jsx(Qh,{src:Kh,alt:"logo"})})})},JP=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;

  @media (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 16px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    padding-top: 8px;
  }
`,ZP=()=>S.jsx("header",{children:S.jsx(Z2,{children:S.jsxs(JP,{children:[S.jsx(XP,{}),S.jsx(j_,{})]})})}),e_="/water-tracker/assets/bottleMob-814a9d12.png",t_="/water-tracker/assets/bottleMob@2x-17522dc3.png",n_="/water-tracker/assets/bottleTabl-c56ef88b.png",r_="/water-tracker/assets/bottleTabl@2x-5f20a434.png",o_="/water-tracker/assets/bottleDesc-5e7cc8f5.png",i_="/water-tracker/assets/bottleDesc@2x-cdf5cc76.png",q_=O.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 16px;
  position: relative;
`,X_=O.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${e_}) 1x,
    url(${t_}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${n_}) 1x,
      url(${r_}) 2x
    );
    height: 386px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${o_}) 1x,
      url(${i_}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,J_=O.div`
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.color.secondaryWhite};
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  background: ${e=>e.theme.color.white};
  max-width: 170px;

  div {
    display: flex;
    gap: 12px;
    margin: 0 auto;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    color: ${e=>e.theme.color.black};
    margin-bottom: 16px;
  }

  p {
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
    color: ${e=>e.theme.color.accent};
  }

  button {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: ${e=>e.theme.color.accent};
    background: transparent;

    &:hover,
    &:focus {
      color: ${e=>e.theme.color.secondaryYellow};
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    position: absolute;
    top: 12%;
    left: 12%;
    transform: translate(-50%, -50%);
    z-index: 1;

    p {
      font-size: 24px;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    top: 20%;
    max-width: 180px;
  }
`,a_=O.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }
`,l_=O.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  span {
    color: ${e=>e.theme.color.accent};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`,s_=O.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Yh=O.h3`
  margin-bottom: 16px;
  color: ${e=>e.theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,Ti=O.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
`,u_=O.div`
  display: flex;
  padding: 10px;
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.color.secondaryPowderBlue};
  color: ${e=>e.theme.color.black};

  span {
    color: ${e=>e.theme.color.accent};
  }
`,c_=O.form`
  gap: 16px;

  span {
    margin-right: 24px;
    font-size: 16px;
  }
`,qh=O.input`
  opacity: 0;
  position: absolute;

  + span {
    display: inline-block;
    padding-left: 25px;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid ${e=>e.theme.color.accent};
      background-color: white;
    }

    &:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${e=>e.theme.color.accent};
      top: 50%;
      left: 3px;
      transform: translate(0, -50%);
      opacity: 0;
    }
  }

  &:checked + span:after {
    opacity: 1;
  }
`,Ts=O.input`
  border: 1px solid ${e=>e.theme.color.secondaryPowderBlue};
  border-radius: 6px;
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  width: 100%;
  margin-top: 8px;
  color: ${e=>e.theme.color.secondaryLightBlue};
  background-color: ${e=>e.theme.color.white};

  &::placeholder {
    color: ${e=>e.theme.color.secondaryLightBlue};
  }

  &:hover {
    color: ${e=>e.theme.color.accent};
    border: 1px solid ${e=>e.theme.color.accent};
  }

  &:focus {
    outline: none;
    border: 1px solid ${e=>e.theme.color.accent};
  }

  &:not(:placeholder-shown) {
    color: ${e=>e.theme.color.accent};
  }
`,f_=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  strong {
    font-size: 18px;
    font-weight: 700;
    color: ${e=>e.theme.color.accent};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: block;
  }
`,d_=O.button`
  background-color: ${e=>e.theme.color.accent};
  color: ${e=>e.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
  height: 44px;
  margin-left: auto;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background-color ${e=>e.theme.transition.main};

  &:hover {
    background-color: ${e=>e.theme.color.secondaryPowderBlue};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 160px;
  }
`,p_=({onClose:e})=>{const[t,n]=b.useState("female"),[r,o]=b.useState(""),[i,a]=b.useState(""),[l,s]=b.useState("2.0"),[u,f]=b.useState(""),c=()=>{const v=t==="female"?.03:.04,g=t==="female"?.4:.6,m=(r*v+i/60*g).toFixed(2);s(m)},h=async()=>{c()};return S.jsx(zl,{onClose:e,title:"My daily norma",children:S.jsxs(a_,{children:[S.jsxs("div",{children:[S.jsxs(l_,{children:[S.jsxs(Ti,{children:["For girl: ",S.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),S.jsxs(Ti,{children:["For man: ",S.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),S.jsx(u_,{children:S.jsxs("p",{children:[S.jsx("span",{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),S.jsx("div",{children:S.jsxs(s_,{children:[S.jsxs(c_,{children:[S.jsx(Yh,{children:"Calculate your rate:"}),S.jsxs("label",{children:[S.jsx(qh,{type:"radio",name:"gender",value:"female",checked:t==="female",onChange:()=>n("female")}),S.jsx("span",{children:"For girl"})]}),S.jsxs("label",{children:[S.jsx(qh,{type:"radio",name:"gender",value:"male",checked:t==="male",onChange:()=>n("male")}),S.jsx("span",{children:"For boy"})]})]}),S.jsxs("div",{children:[S.jsx(Ti,{children:"Your weight in kilograms:"}),S.jsx(Ts,{type:"text",placeholder:"0",value:r,onChange:v=>o(v.target.value)})]}),S.jsxs("div",{children:[S.jsx(Ti,{children:"Time of active participation in sports or other activities with a high physical load:"}),S.jsx(Ts,{type:"text",placeholder:"0",value:i,onChange:v=>a(v.target.value)})]}),S.jsxs(f_,{children:["The required amount of water in liters per day:"," ",S.jsxs("strong",{children:[l,"L"]})]}),S.jsxs("div",{children:[S.jsx(Yh,{children:"Write down how much water you will drink:"}),S.jsx(Ts,{type:"text",placeholder:"0",value:u,onChange:v=>f(v.target.value)})]}),S.jsx(d_,{onClick:h,children:"Save"})]})})]})})};p_.propTypes={onClose:uo.func.isRequired};const Z_=O.div`
    position: absolute;
    top: 0;
    right:0;

    background-color: ${({theme:e})=>e.color.white};
    border-radius: 10px;
    padding: 24px 16px;

`,eO=O.ul`
    display: flex;
    gap: 16px;
    flex-direction: column;
`,tO=O.li`
    display: flex;
    gap: 6px;
`,nO=O.span`
    color: ${({theme:e})=>e.color.accent};
    font-size: 18px;
    font-weight: 500;
`,rO=O.p`
color: ${({theme:e})=>e.color.accent};
`,oO=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
    color: ${e=>e.theme.color.black};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 24px;

    h2 {
      font-size: 26px;
      line-height: 1.2;
    }
  }
`,iO=O.button`
  width: 14px;
  height: 14px;
  background: transparent;
  color: ${e=>e.active?e.theme.color.accent:e.theme.color.secondaryLightBlue};

  &:hover {
    color: ${e=>e.theme.color.accent};
  }
`,aO=O.div`
  display: flex;
  align-items: baseline;
  position: relative;
  color: ${e=>e.theme.color.accent};
  column-gap: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`,lO=O.p`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  font-size: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
  }
`,sO=O.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    column-gap: 34px;
    row-gap: 20px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    column-gap: 20px;
  }
`,uO=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${e=>e.theme.color.secondaryLightBlue};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
  }
`,cO=O.button`
  padding: 7px 6px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  background-color: ${e=>e.theme.color.white};
  border: 1px solid
    ${e=>e.isHighlighted?e.theme.color.secondaryYellow:e.theme.color.white};
  color: ${e=>e.theme.color.black};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  }
`,fO=O.div`
  margin-bottom: 24px;
`,dO=O.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid #d7e3ff;
`,pO=O.div`
  display: flex;
  align-items: center;
`,hO=O.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,mO=O.ul`
  height: 212px;
  overflow: auto;
`,gO=O.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #407bff;
  margin-right: 16px;
`,yO=O.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: #2f2f2f;
`,vO=O.svg`
  stroke: #407bff;
  fill: transparent;
  width: 26px;
  height: 26px;
  margin-right: 12px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,wO=O.div`
  display: flex;
  gap: 18px;
`,xO=O.button`
  background-color: transparent;
  padding: 0;
  width: 20px;
  height: 20px;

  & svg {
    stroke: #9ebbff;
    fill: transparent;
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-bottom: 1px solid #9ebbff;
  }
`,SO=O.button`
  background-color: transparent;
  padding: 0;
  width: 20px;
  height: 20px;

  & svg {
    stroke: #ef5050;
    fill: transparent;
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-bottom: 1px solid #ef5050;
  }
`,bO=O.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: ${({theme:e})=>e.color.accent};
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: ${e=>e.theme.color.accent};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: transparent;
  }

  &:hover {
    color: #ff9d43;
    stroke: #ff9d43;
  }
`,kO=O.div`
  width: 280px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 704px;
    gap: 24px;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 592px;
    gap: 32px;
  }
`,EO=O.input`
   &[type='range'] {
    appearance: none;
    width: 100%;
   border-radius: 10px;
   background-color: ${({theme:e})=>e.color.secondaryPowderBlue};
   background-image: linear-gradient(
     ${({theme:e})=>e.color.secondaryLightBlue},
     ${({theme:e})=>e.color.secondaryLightBlue}
   );
   background-repeat: no-repeat;
  }

  &[type='range']:focus {
    outline: none;
  }

  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    animation: 0.2s;
    border-radius: 10px;
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &[type='range']::-webkit-slider-thumb {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${({theme:e})=>e.color.white};
    border: solid 1px ${({theme:e})=>e.color.accent};
    -webkit-appearance: none;
    margin-top: -4px;
  }
`,PO=O.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.accent};
`,_O=O.div`
  position: relative;
  height: 102px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 356px;
    height: 90px;
  }
`,OO=O.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,CO=O.span`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-bottom: 4px;
  gap: 4px;
  color: ${({theme:e})=>e.color.accent};

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${({theme:e})=>e.color.secondaryLightBlue};
  }
`,jO=O.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({theme:e})=>e.color.accent};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${({theme:e})=>e.color.secondaryLightBlue};
  }
`,RO=O.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({theme:e})=>e.color.accent};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({theme:e})=>e.color.secondaryLightBlue};
  }
`,$O=O.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.white};
  border: none;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 336px;
    padding: 10px 104px 10px 104px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 178px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }
`,TO=O.svg`
  width: 24px;
  height: 24px;
  fill:transparent;
  stroke: ${e=>e.theme.color.white};
`,h_=O.input`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  clip-path: inset(100%);
`,tc=O.p`
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,Xh=O.label`
  display: inline-block;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,m_=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,g_=O.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,y_=O.button`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  border: none;
  background-color: transparent;
  padding: 0;
`,v_=O.span`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`,Ni=O.div`
  margin-bottom: 24px;
`,w_=O(tc)`
  margin-bottom: 12px;
`,Jh=O.input`
  border: 1px solid ${e=>e.theme.color.accent};
  width: 14px;
  height: 14px;
  color: ${e=>e.theme.color.accent};
`,x_=O.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,Zh=O.span`
  margin-left: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,em=O.label`
  display: flex;
  align-items: center;
`,tm=O.input`
  width: 256px;
  height: 44px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 6px;
  border: 1px solid ${({theme:e})=>e.color.secondaryLightBlue};
  color: ${({theme:e})=>e.color.secondaryLightBlue};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  outline: transparent; /* 125% */

  &:focus {
    color: ${({theme:e})=>e.color.accent};
  }
`,S_="src/assets/images/default_avatar_to_download.jpg",b_=({onClose:e})=>{const[t,n]=b.useState(),[r,o]=b.useState(),[i,a]=b.useState("girl"),[l,s]=b.useState(""),[u,f]=b.useState(""),[c,h]=b.useState(""),[v,g]=b.useState(""),[m,w]=b.useState(""),[p,d]=b.useState(!1),y=b.useRef(null),x=()=>{y.current.click()},E=()=>{d(P=>!P)};return b.useEffect(()=>{if(!t)return;const P=URL.createObjectURL(t[0]);return o(P),()=>{URL.revokeObjectURL(P)}},[t]),S.jsx(S.Fragment,{children:S.jsx(zl,{onClose:e,title:"Setting",children:S.jsx("div",{children:S.jsxs("form",{children:[S.jsxs(Ni,{children:[S.jsx(tc,{children:"Your photo"}),S.jsxs(m_,{children:[S.jsx("img",{src:r||S_,alt:"user avatar",width:"80px",height:"80px"}),S.jsxs("label",{children:[S.jsx(h_,{ref:y,type:"file",name:"avatar",accept:"image/png, image/jpeg",onChange:P=>{P.target.files&&P.target.files.length>0&&n(P.target.files)}}),S.jsxs(y_,{type:"button",onClick:x,children:[S.jsx(g_,{children:S.jsx("use",{href:`${gn}#icon-arrow-up`})}),S.jsx(v_,{children:"Upload a photo"})]})]})]})]}),S.jsxs(Ni,{children:[S.jsx(w_,{children:"Your gender identity"}),S.jsxs(x_,{children:[S.jsxs(em,{children:[S.jsx(Jh,{type:"radio",name:"gender",value:"Girl",checked:i==="Girl",onChange:P=>a(P.target.value)}),S.jsx(Zh,{children:"Girl"})]}),S.jsxs(em,{children:[S.jsx(Jh,{type:"radio",name:"gender",value:"Man",checked:i==="Man",onChange:P=>a(P.target.value)}),S.jsx(Zh,{children:"Man"})]})]})]}),S.jsxs(Ni,{children:[S.jsx(Xh,{htmlFor:"username",children:"Your name"}),S.jsx(tm,{type:"text",id:"username",name:"username",value:l,placeholder:l,onChange:P=>s(P.target.value)})]}),S.jsxs(Ni,{children:[S.jsx(Xh,{htmlFor:"email",children:"E-mail"}),S.jsx(tm,{type:"email",id:"email",name:"email",value:u,placeholder:u,onChange:P=>f(P.target.value)})]}),S.jsx(tc,{children:"Password"}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"oldPassword",children:"Outdated password:"}),S.jsxs("div",{children:[S.jsx("input",{type:p?"text":"password",id:"oldPassword",name:"oldPassword",value:c,placeholder:"Password",onChange:P=>h(P.target.value)}),S.jsx("button",{type:"button",onClick:E,children:S.jsx("svg",{children:S.jsx("use",{href:`${gn}#icon-to-hide`})})})]})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"password",children:"New Password:"}),S.jsxs("div",{children:[S.jsx("input",{type:p?"text":"password",id:"password",name:"newPassword",value:v,placeholder:"Password",onChange:P=>g(P.target.value)}),S.jsx("button",{type:"button",onClick:E,children:S.jsx("svg",{children:S.jsx("use",{href:`${gn}#icon-to-hide`})})})]})]}),S.jsxs("div",{children:[S.jsx("label",{htmlFor:"repeatedPassword",children:"Repeat new password:"}),S.jsxs("div",{children:[S.jsx("input",{type:p?"text":"password",id:"repeatedPassword",name:"repeatedPassword",value:m,placeholder:"Password",onChange:P=>w(P.target.value)}),S.jsx("button",{type:"button",onClick:E,children:S.jsx("svg",{children:S.jsx("use",{href:`${gn}#icon-to-hide`})})})]})]}),S.jsx("button",{type:"submit",children:"Save"})]})})})})};O.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  background-color: transparent;
  padding: 0px;
  color: ${({theme:e})=>e.color.accent};

  &:hover,
  &:focus {
    color: ${e=>e.theme.color.secondaryYellow};
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`;O.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: ${({theme:e})=>e.color.black};
  fill: transparent;
`;const k_=O.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`,E_=O.p`
  font-size: 18px;
  line-height: 1.33em;

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`,P_=O.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  padding: 0;
`,__=O.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`,O_=O.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #9ebbff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 1.25em;
  }
`,C_=O.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.accent};
  fill: transparent;

  &:hover,
  &:focus {
    color: ${e=>e.theme.color.accent};
  }
`,j_=()=>{const[e,t]=b.useState(!1),{userName:n,avatarURL:r}=Wy(YP),o=()=>{t(!e)},i=n?n.charAt(0).toUpperCase():"V",a=()=>n&&r?{name:n,avatar:r}:n?{name:n,avatar:i}:{name:i,avatar:i},{name:l,avatar:s}=a();return S.jsxs(k_,{children:[S.jsx(E_,{children:l}),S.jsxs(P_,{onClick:o,children:[r?S.jsx(__,{src:s,alt:""}):S.jsx(O_,{children:s}),S.jsx(C_,{children:S.jsx("use",{href:`${gn}#icon-arrow-down`})})]}),e&&S.jsx($_,{})]})},R_=O.div`
  position: absolute;
  top: 56px;
  width: 118px;
  padding: 16px;
  border-radius: 10px;
  background: ${({theme:e})=>e.color.white};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`,nm=O.svg`
  margin-right: 8px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,rm=O.button`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  background-color: transparent;
  padding: 0;
`,om=O.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,$_=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)},a=()=>{r(!0)},l=()=>{r(!1)};return S.jsx(S.Fragment,{children:S.jsx("div",{children:S.jsx(R_,{children:S.jsxs("ul",{children:[S.jsxs(om,{children:[S.jsx(nm,{width:"16px",height:"16px",children:S.jsx("use",{href:`${gn}#icon-settings`})}),S.jsxs(rm,{type:"button",onClick:o,children:["Setting",e&&S.jsx(b_,{onClose:i})]})]}),S.jsxs(om,{children:[S.jsx(nm,{width:"16px",height:"16px",children:S.jsx("use",{href:`${gn}#icon-exit`})}),S.jsxs(rm,{type:"button",onClick:a,children:["Log out",n&&S.jsx(I_,{onClose:l})]})]})]})})})})},T_=O.h2`
  margin-bottom: 24px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
`,N_=O.button`
  display: block;
  border: none;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.color.secondaryRed};
  color: ${({theme:e})=>e.color.white};
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  transition: box-shadow ${e=>e.theme.transition.main};

  &:is(:hover, :focus) {
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    padding: 8px 30px;
    min-width: 232px;
    height: 36px;
    font-size: 16px;
    line-height: 20px; /* 125% */
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 10px 30px;
    min-width: 160px;
    height: 44px;
    font-size: 18px;
    line-height: 24px;
  }
`,A_=O.button`
  display: block;
  border: none;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.color.secondaryLightBlue};
  color: ${({theme:e})=>e.color.accent};
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  transition: box-shadow ${e=>e.theme.transition.main};

  &:is(:hover, :focus) {
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    padding: 8px 30px;
    min-width: 232px;
    height: 36px;
    font-size: 16px;
    line-height: 20px; /* 125% */
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 10px 30px;
    min-width: 160px;
    height: 44px;
    font-size: 18px;
    line-height: 24px;
  }
`,L_=O.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
    justify-content: end;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    justify-content: start;
  }
`,z_=O.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`,I_=({onClose:e})=>{const t=SS();return S.jsx(S.Fragment,{children:S.jsx(zl,{onClose:e,title:"Log out",children:S.jsxs(z_,{children:[S.jsx(T_,{children:"Do you really want to leave?"}),S.jsxs(L_,{children:[S.jsx("li",{children:S.jsx(A_,{type:"button",onClick:e,children:"Cancel"})}),S.jsx("li",{children:S.jsx(N_,{type:"button",onClick:()=>t(Pv()),children:"Log out"})})]})]})})})},NO=O.img`
  position: absolute;
  background-size: cover;
  background-position: center;
  width: 1404px;
  height: 582px;
  pointer-events: none;
  @media (max-width: 768px) {
    width: 768px;
    height: 680px;
  }
  @media (max-width: 480px) {
    width: 320px;
    height: 842px;
    display: inline-flex;
    padding-bottom: 2.302px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,AO=O.img`
  position: absolute;
  width: 916px;
  height: 680px;
  pointer-events: none;
  @media (max-width: 768px) {
    width: 736px;
    height: 548px;
    margin-top: 52px;
    margin-left: 112px;
  }
  @media (max-width: 480px) {
    width: 280px;
    height: 210px;
    margin-top: 394px;
    margin-left: 20px;
  }
`,LO=O.div`
  width: 1404px;
  height: 582px;
  top: 52px;
  left: 18px;

  .sign-up-forms-container {
    padding: 148px 198px 30px 822px;
  }
  @media (max-width: 768px) {
    .sign-up-forms-container {
      padding: 40px 368px 172px 32px;
    }
  }
  @media (max-width: 480px) {
    .sign-up-forms-container {
      padding: 28px 20px 476px 20px;
    }
  }
  .adaptation-container {
    width: 384px;
    height: 404px;
  }

  @media (max-width: 768px) {
    .adaptation-container {
      width: 336px;
    }
  }

  @media (max-width: 480px) {
    .adaptation-container {
      width: 280px;
      height: 396px;
    }
  }

  .sign-up-forms-container h2 {
    margin-bottom: 16px;
    width: 100%;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    color: ${e=>e.theme.color.black};
  }

  .sign-up-button {
    width: 100%;
    padding: 10px 30px 10px 30px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    text-align: center;
    color: ${e=>e.theme.color.white};
    background-color: ${e=>e.theme.color.accent};
    margin-bottom: 16px;
  }

  .sign-up-button-disabled {
    background-color: ${e=>e.theme.color.secondaryPowderBlue};
  }
  
  .input-with-error {
    color: red;
    border: 1px solid ${e=>e.theme.color.secondaryRed};
  }
  .sign-up-error-message {
    color: red;
  }
`,zO=O.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${e=>e.theme.color.black};
`,IO=O.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.color.secondaryPowderBlue};
  display: flex;
  padding: 12px 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 16px;

  &:focus-within {
    outline: none;
  }
  &::placeholder {
    color: ${e=>e.theme.color.secondaryLightBlue};
  }
`,DO=O.svg`
  width: 16px;
  height: 16px;
  border: 1px;
  stroke: ${e=>e.theme.color.accent};
  fill: ${e=>e.theme.color.white};
  position: absolute;
  right: 10px;
  top: 38px;
`,MO=O(Zu)` 
  width: 100%;
  font-size: 16px;
  font-style: normal; 
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
    &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }`,FO=O.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding-top: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 60px;

    padding-top: 40px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding-top: 80px;

    gap: 81px;
    z-index: 100;
  }
`,UO=O.h1`
  display: none;
`,BO=O.h2`
  font-weight: 700;
  font-size: 28px;
  color: ${({theme:e})=>e.color.black};
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`,WO=O.p`
  font-size: 24px;
  color: ${({theme:e})=>e.color.black};
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`,HO=O.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  color: ${({theme:e})=>e.color.black};
  line-height: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    flex-direction: column;
    justify-content: center;
  }
`,VO=O.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,GO=O.div`
  display: inline-block;
  max-width: 280px;
  margin: auto;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-width: 100%;
    margin: 0;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    min-width: 439px;
  }
`,KO=O.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`,QO=O.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  line-height: 20px;
  margin-bottom: 12px;
`,YO=O.button`
  display: inline-block;
  width: 100%;
  padding: 8px 30px;
  color: ${({theme:e})=>e.color.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: ${({theme:e})=>e.color.accent};
  box-shadow: ${({theme:e})=>e.boxShadowforButton.normalButton};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.hoverButton};
  }
  &:active {
    box-shadow: ${({theme:e})=>e.boxShadowforButton.activeButton};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 280px;
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 384px;
  }
`,qO=O.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  margin-bottom: 12px;
`,XO=O.li`
  font-size: 16px;
  color: ${({theme:e})=>e.color.black};
  line-height: 20px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: ${({theme:e})=>e.color.accent};
    border-radius: 50%;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    list-style-position: inside;
  }
`,JO=O.div`
  display: inline-block;
  max-width: 280px;
  padding: 24px 16px;
  background-color: ${({theme:e})=>e.color.secondaryWhite};
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.3);
  border-radius: 10px;
  margin: auto;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 32px 24px;
    min-width: 494px;
    height: 332px;
    list-style-position: inside;
    margin: 0;
  }
`,ZO=O.ul`
  list-style-type: none;
  padding-left: 0;
`,D_="modulepreload",M_=function(e){return"/water-tracker/"+e},im={},Vr=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=M_(i),i in im)return;im[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=o.length-1;f>=0;f--){const c=o[f];if(c.href===i&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":D_,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((f,c)=>{u.addEventListener("load",f),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},F_=({component:e,redirectTo:t="/home"})=>S.jsx(e,{}),Ai=({component:e,redirectTo:t="/"})=>e,U_=()=>S.jsxs(S.Fragment,{children:[S.jsx(ZP,{}),S.jsx("main",{children:S.jsx(b.Suspense,{fallback:S.jsx(Wv,{}),children:S.jsx(NP,{})})})]}),B_=b.lazy(()=>Vr(()=>import("./Welcome-963ff58a.js"),["assets/Welcome-963ff58a.js","assets/Section-75073231.js"])),W_=b.lazy(()=>Vr(()=>import("./Home-7c6f5135.js"),["assets/Home-7c6f5135.js","assets/Section-75073231.js"])),H_=b.lazy(()=>Vr(()=>import("./SignIn-a4f7bc55.js"),["assets/SignIn-a4f7bc55.js","assets/Section-75073231.js"])),V_=b.lazy(()=>Vr(()=>import("./SignUp-fe29cfef.js"),["assets/SignUp-fe29cfef.js","assets/Section-75073231.js"])),G_=b.lazy(()=>Vr(()=>import("./Error-b0baed2a.js"),["assets/Error-b0baed2a.js","assets/Section-75073231.js"])),K_=b.lazy(()=>Vr(()=>import("./ForgotPassword-e5ad8e72.js"),["assets/ForgotPassword-e5ad8e72.js","assets/Section-75073231.js"])),Q_=()=>S.jsx(LP,{children:S.jsxs(sn,{path:"/",element:S.jsx(U_,{}),children:[S.jsx(sn,{index:!0,element:S.jsx(Ai,{component:S.jsx(B_,{}),redirectTo:"/home"})}),S.jsx(sn,{path:"home",element:S.jsx(F_,{component:W_})}),S.jsx(sn,{path:"signin",element:S.jsx(Ai,{component:S.jsx(H_,{}),redirectTo:"/home"})}),S.jsx(sn,{path:"signup",element:S.jsx(Ai,{component:S.jsx(V_,{}),redirectTo:"/home"})}),S.jsx(sn,{path:"forgot-password",element:S.jsx(Ai,{component:S.jsx(K_,{}),redirectTo:"/signin"})}),S.jsx(sn,{path:"*",element:S.jsx(G_,{})})]})}),Y_=Is.createRoot(document.getElementById("root"));Y_.render(S.jsx(Te.StrictMode,{children:S.jsxs($m,{theme:Wu,children:[S.jsx(Tm,{styles:z2}),S.jsx(vS,{store:_v,children:S.jsx(Gy,{loading:S.jsx(Wv,{}),persistor:R2,children:S.jsx(BP,{basename:"/water-tracker",children:S.jsx(Q_,{})})})})]})}));export{jO as $,zl as A,QO as B,fO as C,q_ as D,hO as E,mO as F,dO as G,UO as H,VO as I,pO as J,vO as K,ZO as L,gO as M,yO as N,wO as O,WO as P,xO as Q,SO as R,bO as S,GO as T,kO as U,_O as V,FO as W,PO as X,lO as Y,EO as Z,OO as _,BO as a,CO as a0,RO as a1,$O as a2,TO as a3,SS as a4,NO as a5,AO as a6,LO as a7,zO as a8,IO as a9,DO as aa,MO as ab,h2 as ac,Z2 as ad,HO as b,KO as c,YO as d,JO as e,qO as f,XO as g,J_ as h,p_ as i,S as j,X_ as k,Z_ as l,eO as m,O as n,tO as o,rO as p,nO as q,b as r,gn as s,oO as t,gP as u,aO as v,iO as w,sO as x,uO as y,cO as z};
