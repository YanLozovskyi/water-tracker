function c0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ba(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function f0(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var pm={exports:{}},Wa={},hm={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),d0=Symbol.for("react.portal"),p0=Symbol.for("react.fragment"),h0=Symbol.for("react.strict_mode"),m0=Symbol.for("react.profiler"),g0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),v0=Symbol.for("react.forward_ref"),w0=Symbol.for("react.suspense"),x0=Symbol.for("react.memo"),S0=Symbol.for("react.lazy"),Qf=Symbol.iterator;function b0(e){return e===null||typeof e!="object"?null:(e=Qf&&e[Qf]||e["@@iterator"],typeof e=="function"?e:null)}var mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gm=Object.assign,ym={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=ym,this.updater=n||mm}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vm(){}vm.prototype=Dr.prototype;function ic(e,t,n){this.props=e,this.context=t,this.refs=ym,this.updater=n||mm}var ac=ic.prototype=new vm;ac.constructor=ic;gm(ac,Dr.prototype);ac.isPureReactComponent=!0;var Yf=Array.isArray,wm=Object.prototype.hasOwnProperty,lc={current:null},xm={key:!0,ref:!0,__self:!0,__source:!0};function Sm(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)wm.call(t,r)&&!xm.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Zo,type:e,key:i,ref:a,props:o,_owner:lc.current}}function k0(e,t){return{$$typeof:Zo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zo}function E0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qf=/\/+/g;function Wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?E0(""+e.key):t.toString(36)}function zi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Zo:case d0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Wl(a,0):r,Yf(o)?(n="",e!=null&&(n=e.replace(qf,"$&/")+"/"),zi(o,t,n,"",function(u){return u})):o!=null&&(sc(o)&&(o=k0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(qf,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Yf(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Wl(i,l);a+=zi(i,t,n,s,o)}else if(s=b0(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Wl(i,l++),a+=zi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function hi(e,t,n){if(e==null)return e;var r=[],o=0;return zi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function P0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Ii={transition:null},_0={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Ii,ReactCurrentOwner:lc};H.Children={map:hi,forEach:function(e,t,n){hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!sc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Dr;H.Fragment=p0;H.Profiler=m0;H.PureComponent=ic;H.StrictMode=h0;H.Suspense=w0;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_0;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gm({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=lc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)wm.call(t,s)&&!xm.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zo,type:e.type,key:o,ref:i,props:r,_owner:a}};H.createContext=function(e){return e={$$typeof:y0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:g0,_context:e},e.Consumer=e};H.createElement=Sm;H.createFactory=function(e){var t=Sm.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:v0,render:e}};H.isValidElement=sc;H.lazy=function(e){return{$$typeof:S0,_payload:{_status:-1,_result:e},_init:P0}};H.memo=function(e,t){return{$$typeof:x0,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Ii.transition;Ii.transition={};try{e()}finally{Ii.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Ke.current.useCallback(e,t)};H.useContext=function(e){return Ke.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ke.current.useEffect(e,t)};H.useId=function(){return Ke.current.useId()};H.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ke.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};H.useRef=function(e){return Ke.current.useRef(e)};H.useState=function(e){return Ke.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ke.current.useTransition()};H.version="18.2.0";hm.exports=H;var b=hm.exports;const Te=Ba(b),Is=c0({__proto__:null,default:Te},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=b,C0=Symbol.for("react.element"),j0=Symbol.for("react.fragment"),$0=Object.prototype.hasOwnProperty,R0=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T0={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)$0.call(t,r)&&!T0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:C0,type:e,key:i,ref:a,props:o,_owner:R0.current}}Wa.Fragment=j0;Wa.jsx=bm;Wa.jsxs=bm;pm.exports=Wa;var x=pm.exports;function N0(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function A0(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var L0=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(A0(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=N0(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Fe="-ms-",aa="-moz-",Y="-webkit-",km="comm",uc="rule",cc="decl",z0="@import",Em="@keyframes",I0="@layer",D0=Math.abs,Ha=String.fromCharCode,M0=Object.assign;function F0(e,t){return Ne(e,0)^45?(((t<<2^Ne(e,0))<<2^Ne(e,1))<<2^Ne(e,2))<<2^Ne(e,3):0}function Pm(e){return e.trim()}function U0(e,t){return(e=t.exec(e))?e[0]:e}function q(e,t,n){return e.replace(t,n)}function Ds(e,t){return e.indexOf(t)}function Ne(e,t){return e.charCodeAt(t)|0}function Eo(e,t,n){return e.slice(t,n)}function Nt(e){return e.length}function fc(e){return e.length}function mi(e,t){return t.push(e),e}function B0(e,t){return e.map(t).join("")}var Va=1,Pr=1,_m=0,tt=0,ve=0,Mr="";function Ga(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Va,column:Pr,length:a,return:""}}function Yr(e,t){return M0(Ga("",null,null,"",null,null,0),e,{length:-e.length},t)}function W0(){return ve}function H0(){return ve=tt>0?Ne(Mr,--tt):0,Pr--,ve===10&&(Pr=1,Va--),ve}function it(){return ve=tt<_m?Ne(Mr,tt++):0,Pr++,ve===10&&(Pr=1,Va++),ve}function It(){return Ne(Mr,tt)}function Di(){return tt}function ei(e,t){return Eo(Mr,e,t)}function Po(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Om(e){return Va=Pr=1,_m=Nt(Mr=e),tt=0,[]}function Cm(e){return Mr="",e}function Mi(e){return Pm(ei(tt-1,Ms(e===91?e+2:e===40?e+1:e)))}function V0(e){for(;(ve=It())&&ve<33;)it();return Po(e)>2||Po(ve)>3?"":" "}function G0(e,t){for(;--t&&it()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return ei(e,Di()+(t<6&&It()==32&&it()==32))}function Ms(e){for(;it();)switch(ve){case e:return tt;case 34:case 39:e!==34&&e!==39&&Ms(ve);break;case 40:e===41&&Ms(e);break;case 92:it();break}return tt}function K0(e,t){for(;it()&&e+ve!==47+10;)if(e+ve===42+42&&It()===47)break;return"/*"+ei(t,tt-1)+"*"+Ha(e===47?e:it())}function Q0(e){for(;!Po(It());)it();return ei(e,tt)}function Y0(e){return Cm(Fi("",null,null,null,[""],e=Om(e),0,[0],e))}function Fi(e,t,n,r,o,i,a,l,s){for(var u=0,f=0,c=a,h=0,v=0,g=0,m=1,w=1,p=1,d=0,y="",S=o,E=i,P=r,C=y;w;)switch(g=d,d=it()){case 40:if(g!=108&&Ne(C,c-1)==58){Ds(C+=q(Mi(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Mi(d);break;case 9:case 10:case 13:case 32:C+=V0(g);break;case 92:C+=G0(Di()-1,7);continue;case 47:switch(It()){case 42:case 47:mi(q0(K0(it(),Di()),t,n),s);break;default:C+="/"}break;case 123*m:l[u++]=Nt(C)*p;case 125*m:case 59:case 0:switch(d){case 0:case 125:w=0;case 59+f:p==-1&&(C=q(C,/\f/g,"")),v>0&&Nt(C)-c&&mi(v>32?Jf(C+";",r,n,c-1):Jf(q(C," ","")+";",r,n,c-2),s);break;case 59:C+=";";default:if(mi(P=Xf(C,t,n,u,f,o,l,y,S=[],E=[],c),i),d===123)if(f===0)Fi(C,t,P,P,S,i,c,l,E);else switch(h===99&&Ne(C,3)===110?100:h){case 100:case 108:case 109:case 115:Fi(e,P,P,r&&mi(Xf(e,P,P,0,0,o,l,y,o,S=[],c),E),o,E,c,l,r?S:E);break;default:Fi(C,P,P,P,[""],E,0,l,E)}}u=f=v=0,m=p=1,y=C="",c=a;break;case 58:c=1+Nt(C),v=g;default:if(m<1){if(d==123)--m;else if(d==125&&m++==0&&H0()==125)continue}switch(C+=Ha(d),d*m){case 38:p=f>0?1:(C+="\f",-1);break;case 44:l[u++]=(Nt(C)-1)*p,p=1;break;case 64:It()===45&&(C+=Mi(it())),h=It(),f=c=Nt(y=C+=Q0(Di())),d++;break;case 45:g===45&&Nt(C)==2&&(m=0)}}return i}function Xf(e,t,n,r,o,i,a,l,s,u,f){for(var c=o-1,h=o===0?i:[""],v=fc(h),g=0,m=0,w=0;g<r;++g)for(var p=0,d=Eo(e,c+1,c=D0(m=a[g])),y=e;p<v;++p)(y=Pm(m>0?h[p]+" "+d:q(d,/&\f/g,h[p])))&&(s[w++]=y);return Ga(e,t,n,o===0?uc:l,s,u,f)}function q0(e,t,n){return Ga(e,t,n,km,Ha(W0()),Eo(e,2,-2),0)}function Jf(e,t,n,r){return Ga(e,t,n,cc,Eo(e,0,r),Eo(e,r+1,-1),r)}function gr(e,t){for(var n="",r=fc(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function X0(e,t,n,r){switch(e.type){case I0:if(e.children.length)break;case z0:case cc:return e.return=e.return||e.value;case km:return"";case Em:return e.return=e.value+"{"+gr(e.children,r)+"}";case uc:e.value=e.props.join(",")}return Nt(n=gr(e.children,r))?e.return=e.value+"{"+n+"}":""}function J0(e){var t=fc(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function Z0(e){return function(t){t.root||(t=t.return)&&e(t)}}var Zf=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function jm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var e1=function(t,n,r){for(var o=0,i=0;o=i,i=It(),o===38&&i===12&&(n[r]=1),!Po(i);)it();return ei(t,tt)},t1=function(t,n){var r=-1,o=44;do switch(Po(o)){case 0:o===38&&It()===12&&(n[r]=1),t[r]+=e1(tt-1,n,r);break;case 2:t[r]+=Mi(o);break;case 4:if(o===44){t[++r]=It()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ha(o)}while(o=it());return t},n1=function(t,n){return Cm(t1(Om(t),n))},ed=new WeakMap,r1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ed.get(r))&&!o){ed.set(t,!0);for(var i=[],a=n1(n,i),l=r.props,s=0,u=0;s<a.length;s++)for(var f=0;f<l.length;f++,u++)t.props[u]=i[s]?a[s].replace(/&\f/g,l[f]):l[f]+" "+a[s]}}},o1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function $m(e,t){switch(F0(e,t)){case 5103:return Y+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Y+e+aa+e+Fe+e+e;case 6828:case 4268:return Y+e+Fe+e+e;case 6165:return Y+e+Fe+"flex-"+e+e;case 5187:return Y+e+q(e,/(\w+).+(:[^]+)/,Y+"box-$1$2"+Fe+"flex-$1$2")+e;case 5443:return Y+e+Fe+"flex-item-"+q(e,/flex-|-self/,"")+e;case 4675:return Y+e+Fe+"flex-line-pack"+q(e,/align-content|flex-|-self/,"")+e;case 5548:return Y+e+Fe+q(e,"shrink","negative")+e;case 5292:return Y+e+Fe+q(e,"basis","preferred-size")+e;case 6060:return Y+"box-"+q(e,"-grow","")+Y+e+Fe+q(e,"grow","positive")+e;case 4554:return Y+q(e,/([^-])(transform)/g,"$1"+Y+"$2")+e;case 6187:return q(q(q(e,/(zoom-|grab)/,Y+"$1"),/(image-set)/,Y+"$1"),e,"")+e;case 5495:case 3959:return q(e,/(image-set\([^]*)/,Y+"$1$`$1");case 4968:return q(q(e,/(.+:)(flex-)?(.*)/,Y+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Y+e+e;case 4095:case 3583:case 4068:case 2532:return q(e,/(.+)-inline(.+)/,Y+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nt(e)-1-t>6)switch(Ne(e,t+1)){case 109:if(Ne(e,t+4)!==45)break;case 102:return q(e,/(.+:)(.+)-([^]+)/,"$1"+Y+"$2-$3$1"+aa+(Ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ds(e,"stretch")?$m(q(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ne(e,t+1)!==115)break;case 6444:switch(Ne(e,Nt(e)-3-(~Ds(e,"!important")&&10))){case 107:return q(e,":",":"+Y)+e;case 101:return q(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Y+(Ne(e,14)===45?"inline-":"")+"box$3$1"+Y+"$2$3$1"+Fe+"$2box$3")+e}break;case 5936:switch(Ne(e,t+11)){case 114:return Y+e+Fe+q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Y+e+Fe+q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Y+e+Fe+q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Y+e+Fe+e+e}return e}var i1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case cc:t.return=$m(t.value,t.length);break;case Em:return gr([Yr(t,{value:q(t.value,"@","@"+Y)})],o);case uc:if(t.length)return B0(t.props,function(i){switch(U0(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return gr([Yr(t,{props:[q(i,/:(read-\w+)/,":"+aa+"$1")]})],o);case"::placeholder":return gr([Yr(t,{props:[q(i,/:(plac\w+)/,":"+Y+"input-$1")]}),Yr(t,{props:[q(i,/:(plac\w+)/,":"+aa+"$1")]}),Yr(t,{props:[q(i,/:(plac\w+)/,Fe+"input-$1")]})],o)}return""})}},a1=[i1],l1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var w=m.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var o=t.stylisPlugins||a1,i={},a,l=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var w=m.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)i[w[p]]=!0;l.push(m)});var s,u=[r1,o1];{var f,c=[X0,Z0(function(m){f.insert(m)})],h=J0(u.concat(o,c)),v=function(w){return gr(Y0(w),h)};s=function(w,p,d,y){f=d,v(w?w+"{"+p.styles+"}":p.styles),y&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new L0({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(l),g};function _o(){return _o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_o.apply(this,arguments)}var Rm={exports:{}},te={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,dc=_e?Symbol.for("react.element"):60103,pc=_e?Symbol.for("react.portal"):60106,Ka=_e?Symbol.for("react.fragment"):60107,Qa=_e?Symbol.for("react.strict_mode"):60108,Ya=_e?Symbol.for("react.profiler"):60114,qa=_e?Symbol.for("react.provider"):60109,Xa=_e?Symbol.for("react.context"):60110,hc=_e?Symbol.for("react.async_mode"):60111,Ja=_e?Symbol.for("react.concurrent_mode"):60111,Za=_e?Symbol.for("react.forward_ref"):60112,el=_e?Symbol.for("react.suspense"):60113,s1=_e?Symbol.for("react.suspense_list"):60120,tl=_e?Symbol.for("react.memo"):60115,nl=_e?Symbol.for("react.lazy"):60116,u1=_e?Symbol.for("react.block"):60121,c1=_e?Symbol.for("react.fundamental"):60117,f1=_e?Symbol.for("react.responder"):60118,d1=_e?Symbol.for("react.scope"):60119;function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case dc:switch(e=e.type,e){case hc:case Ja:case Ka:case Ya:case Qa:case el:return e;default:switch(e=e&&e.$$typeof,e){case Xa:case Za:case nl:case tl:case qa:return e;default:return t}}case pc:return t}}}function Tm(e){return ut(e)===Ja}te.AsyncMode=hc;te.ConcurrentMode=Ja;te.ContextConsumer=Xa;te.ContextProvider=qa;te.Element=dc;te.ForwardRef=Za;te.Fragment=Ka;te.Lazy=nl;te.Memo=tl;te.Portal=pc;te.Profiler=Ya;te.StrictMode=Qa;te.Suspense=el;te.isAsyncMode=function(e){return Tm(e)||ut(e)===hc};te.isConcurrentMode=Tm;te.isContextConsumer=function(e){return ut(e)===Xa};te.isContextProvider=function(e){return ut(e)===qa};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dc};te.isForwardRef=function(e){return ut(e)===Za};te.isFragment=function(e){return ut(e)===Ka};te.isLazy=function(e){return ut(e)===nl};te.isMemo=function(e){return ut(e)===tl};te.isPortal=function(e){return ut(e)===pc};te.isProfiler=function(e){return ut(e)===Ya};te.isStrictMode=function(e){return ut(e)===Qa};te.isSuspense=function(e){return ut(e)===el};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ka||e===Ja||e===Ya||e===Qa||e===el||e===s1||typeof e=="object"&&e!==null&&(e.$$typeof===nl||e.$$typeof===tl||e.$$typeof===qa||e.$$typeof===Xa||e.$$typeof===Za||e.$$typeof===c1||e.$$typeof===f1||e.$$typeof===d1||e.$$typeof===u1)};te.typeOf=ut;Rm.exports=te;var mc=Rm.exports,gc=mc,p1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},h1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yc={};yc[gc.ForwardRef]=m1;yc[gc.Memo]=Nm;function td(e){return gc.isMemo(e)?Nm:yc[e.$$typeof]||p1}var g1=Object.defineProperty,y1=Object.getOwnPropertyNames,nd=Object.getOwnPropertySymbols,v1=Object.getOwnPropertyDescriptor,w1=Object.getPrototypeOf,rd=Object.prototype;function Am(e,t,n){if(typeof t!="string"){if(rd){var r=w1(t);r&&r!==rd&&Am(e,r,n)}var o=y1(t);nd&&(o=o.concat(nd(t)));for(var i=td(e),a=td(t),l=0;l<o.length;++l){var s=o[l];if(!h1[s]&&!(n&&n[s])&&!(a&&a[s])&&!(i&&i[s])){var u=v1(t,s);try{g1(e,s,u)}catch{}}}}return e}var x1=Am;const Lm=Ba(x1);var S1=function(e,t){return Lm(e,t)},b1=!0;function vc(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var rl=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||b1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},ol=function(t,n,r){rl(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function k1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var E1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P1=/[A-Z]|^ms/g,_1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,zm=function(t){return t.charCodeAt(1)===45},od=function(t){return t!=null&&typeof t!="boolean"},Hl=jm(function(e){return zm(e)?e:e.replace(P1,"-$&").toLowerCase()}),id=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(_1,function(r,o,i){return At={name:o,styles:i,next:At},o})}return E1[t]!==1&&!zm(t)&&typeof n=="number"&&n!==0?n+"px":n};function Oo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return At={name:n.name,styles:n.styles,next:At},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)At={name:r.name,styles:r.styles,next:At},r=r.next;var o=n.styles+";";return o}return O1(e,t,n)}case"function":{if(e!==void 0){var i=At,a=n(e);return At=i,Oo(e,t,a)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function O1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Oo(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":od(a)&&(r+=Hl(i)+":"+id(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)od(a[l])&&(r+=Hl(i)+":"+id(i,a[l])+";");else{var s=Oo(e,t,a);switch(i){case"animation":case"animationName":{r+=Hl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var ad=/label:\s*([^\s;\n{]+)\s*(;|$)/g,At,ti=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";At=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Oo(r,n,a)):i+=a[0];for(var l=1;l<t.length;l++)i+=Oo(r,n,t[l]),o&&(i+=a[l]);ad.lastIndex=0;for(var s="",u;(u=ad.exec(i))!==null;)s+="-"+u[1];var f=k1(i)+s;return{name:f,styles:i,next:At}},C1=function(t){return t()},Im=Is["useInsertionEffect"]?Is["useInsertionEffect"]:!1,wc=Im||C1,ld=Im||b.useLayoutEffect,xc={}.hasOwnProperty,Sc=b.createContext(typeof HTMLElement<"u"?l1({key:"css"}):null),j1=Sc.Provider,$1=function(){return b.useContext(Sc)},ni=function(t){return b.forwardRef(function(n,r){var o=b.useContext(Sc);return t(n,o,r)})},Xt=b.createContext({}),R1=function(){return b.useContext(Xt)},T1=function(t,n){if(typeof n=="function"){var r=n(t);return r}return _o({},t,n)},N1=Zf(function(e){return Zf(function(t){return T1(e,t)})}),Dm=function(t){var n=b.useContext(Xt);return t.theme!==n&&(n=N1(n)(t.theme)),b.createElement(Xt.Provider,{value:n},t.children)};function A1(e){var t=e.displayName||e.name||"Component",n=function(i,a){var l=b.useContext(Xt);return b.createElement(e,_o({theme:l,ref:a},i))},r=b.forwardRef(n);return r.displayName="WithTheme("+t+")",S1(r,e)}var Fs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",L1=function(t,n){var r={};for(var o in n)xc.call(n,o)&&(r[o]=n[o]);return r[Fs]=t,r},z1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return rl(n,r,o),wc(function(){return ol(n,r,o)}),null},I1=ni(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Fs],i=[r],a="";typeof e.className=="string"?a=vc(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var l=ti(i,void 0,b.useContext(Xt));a+=t.key+"-"+l.name;var s={};for(var u in e)xc.call(e,u)&&u!=="css"&&u!==Fs&&(s[u]=e[u]);return s.ref=n,s.className=a,b.createElement(b.Fragment,null,b.createElement(z1,{cache:t,serialized:l,isStringTag:typeof o=="string"}),b.createElement(o,s))}),D1=I1,sd=function(t,n){var r=arguments;if(n==null||!xc.call(n,"css"))return b.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=D1,i[1]=L1(t,n);for(var a=2;a<o;a++)i[a]=r[a];return b.createElement.apply(null,i)},Mm=ni(function(e,t){var n=e.styles,r=ti([n],void 0,b.useContext(Xt)),o=b.useRef();return ld(function(){var i=t.key+"-global",a=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,s=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),s!==null&&(l=!0,s.setAttribute("data-emotion",i),a.hydrate([s])),o.current=[a,l],function(){a.flush()}},[t]),ld(function(){var i=o.current,a=i[0],l=i[1];if(l){i[1]=!1;return}if(r.next!==void 0&&ol(t,r.next,!0),a.tags.length){var s=a.tags[a.tags.length-1].nextElementSibling;a.before=s,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function bc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ti(t)}var M1=function(){var t=bc.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},F1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))a=e(i);else{a="";for(var l in i)i[l]&&l&&(a&&(a+=" "),a+=l)}break}default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};function U1(e,t,n){var r=[],o=vc(e,r,n);return r.length<2?n:o+t(r)}var B1=function(t){var n=t.cache,r=t.serializedArr;return wc(function(){for(var o=0;o<r.length;o++)ol(n,r[o],!1)}),null},W1=ni(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];var h=ti(f,t.registered);return r.push(h),rl(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];return U1(t.registered,o,F1(f))},a={css:o,cx:i,theme:b.useContext(Xt)},l=e.children(a);return n=!0,b.createElement(b.Fragment,null,b.createElement(B1,{cache:t,serializedArr:r}),l)});const H1=Object.freeze(Object.defineProperty({__proto__:null,CacheProvider:j1,ClassNames:W1,Global:Mm,ThemeContext:Xt,ThemeProvider:Dm,__unsafe_useEmotionCache:$1,createElement:sd,css:bc,jsx:sd,keyframes:M1,useTheme:R1,withEmotionCache:ni,withTheme:A1},Symbol.toStringTag,{value:"Module"}));var Us={},Fm={exports:{}},ct={},Um={exports:{}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,M){var F=R.length;R.push(M);e:for(;0<F;){var re=F-1>>>1,N=R[re];if(0<o(N,M))R[re]=M,R[F]=N,F=re;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],F=R.pop();if(F!==M){R[0]=F;e:for(var re=0,N=R.length,A=N>>>1;re<A;){var L=2*(re+1)-1,U=R[L],k=L+1,V=R[k];if(0>o(U,F))k<N&&0>o(V,U)?(R[re]=V,R[k]=F,re=k):(R[re]=U,R[L]=F,re=L);else if(k<N&&0>o(V,F))R[re]=V,R[k]=F,re=k;else break e}}return M}function o(R,M){var F=R.sortIndex-M.sortIndex;return F!==0?F:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,c=null,h=3,v=!1,g=!1,m=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function S(R){if(m=!1,y(R),!g)if(n(s)!==null)g=!0,Bt(E);else{var M=n(u);M!==null&&He(S,M.startTime-R)}}function E(R,M){g=!1,m&&(m=!1,p($),$=-1),v=!0;var F=h;try{for(y(M),c=n(s);c!==null&&(!(c.expirationTime>M)||R&&!le());){var re=c.callback;if(typeof re=="function"){c.callback=null,h=c.priorityLevel;var N=re(c.expirationTime<=M);M=e.unstable_now(),typeof N=="function"?c.callback=N:c===n(s)&&r(s),y(M)}else r(s);c=n(s)}if(c!==null)var A=!0;else{var L=n(u);L!==null&&He(S,L.startTime-M),A=!1}return A}finally{c=null,h=F,v=!1}}var P=!1,C=null,$=-1,D=5,I=-1;function le(){return!(e.unstable_now()-I<D)}function Se(){if(C!==null){var R=e.unstable_now();I=R;var M=!0;try{M=C(!0,R)}finally{M?Oe():(P=!1,C=null)}}else P=!1}var Oe;if(typeof d=="function")Oe=function(){d(Se)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ze=nt.port2;nt.port1.onmessage=Se,Oe=function(){ze.postMessage(null)}}else Oe=function(){w(Se,0)};function Bt(R){C=R,P||(P=!0,Oe())}function He(R,M){$=w(function(){R(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Bt(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var F=h;h=M;try{return R()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=h;h=R;try{return M()}finally{h=F}},e.unstable_scheduleCallback=function(R,M,F){var re=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?re+F:re):F=re,R){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=F+N,R={id:f++,callback:M,priorityLevel:R,startTime:F,expirationTime:N,sortIndex:-1},F>re?(R.sortIndex=F,t(u,R),n(s)===null&&R===n(u)&&(m?(p($),$=-1):m=!0,He(S,F-re))):(R.sortIndex=N,t(s,R),g||v||(g=!0,Bt(E))),R},e.unstable_shouldYield=le,e.unstable_wrapCallback=function(R){var M=h;return function(){var F=h;h=M;try{return R.apply(this,arguments)}finally{h=F}}}})(Bm);Um.exports=Bm;var V1=Um.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=b,lt=V1;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,Co={};function Zn(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(Co[e]=t,e=0;e<t.length;e++)Hm.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bs=Object.prototype.hasOwnProperty,G1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ud={},cd={};function K1(e){return Bs.call(cd,e)?!0:Bs.call(ud,e)?!1:G1.test(e)?cd[e]=!0:(ud[e]=!0,!1)}function Q1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y1(e,t,n,r){if(t===null||typeof t>"u"||Q1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qe(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var kc=/[\-:]([a-z])/g;function Ec(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(kc,Ec);Le[t]=new Qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(kc,Ec);Le[t]=new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(kc,Ec);Le[t]=new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pc(e,t,n,r){var o=Le.hasOwnProperty(t)?Le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y1(t,n,o,r)&&(n=null),r||o===null?K1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var on=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gi=Symbol.for("react.element"),rr=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),_c=Symbol.for("react.strict_mode"),Ws=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),Oc=Symbol.for("react.forward_ref"),Hs=Symbol.for("react.suspense"),Vs=Symbol.for("react.suspense_list"),Cc=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),Km=Symbol.for("react.offscreen"),fd=Symbol.iterator;function qr(e){return e===null||typeof e!="object"?null:(e=fd&&e[fd]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Vl;function ao(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||""}return`
`+Vl+e}var Gl=!1;function Kl(e,t){if(!e||Gl)return"";Gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ao(e):""}function q1(e){switch(e.tag){case 5:return ao(e.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function Gs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case or:return"Fragment";case rr:return"Portal";case Ws:return"Profiler";case _c:return"StrictMode";case Hs:return"Suspense";case Vs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gm:return(e.displayName||"Context")+".Consumer";case Vm:return(e._context.displayName||"Context")+".Provider";case Oc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cc:return t=e.displayName||null,t!==null?t:Gs(e.type)||"Memo";case cn:t=e._payload,e=e._init;try{return Gs(e(t))}catch{}}return null}function X1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gs(t);case 8:return t===_c?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function J1(e){var t=Qm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yi(e){e._valueTracker||(e._valueTracker=J1(e))}function Ym(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function la(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ks(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qm(e,t){t=t.checked,t!=null&&Pc(e,"checked",t,!1)}function Qs(e,t){qm(e,t);var n=$n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ys(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ys(e,t.type,$n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ys(e,t,n){(t!=="number"||la(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lo=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function qs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(lo(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$n(n)}}function Xm(e,t){var n=$n(t.value),r=$n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function md(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,Zm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z1=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(e){Z1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),po[t]=po[e]})});function eg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||po.hasOwnProperty(e)&&po[e]?(""+t).trim():t+"px"}function tg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=eg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ew=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Js(e,t){if(t){if(ew[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Zs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eu=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tu=null,vr=null,wr=null;function gd(e){if(e=ii(e)){if(typeof tu!="function")throw Error(j(280));var t=e.stateNode;t&&(t=ul(t),tu(e.stateNode,e.type,t))}}function ng(e){vr?wr?wr.push(e):wr=[e]:vr=e}function rg(){if(vr){var e=vr,t=wr;if(wr=vr=null,gd(e),t)for(e=0;e<t.length;e++)gd(t[e])}}function og(e,t){return e(t)}function ig(){}var Ql=!1;function ag(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return og(e,t,n)}finally{Ql=!1,(vr!==null||wr!==null)&&(ig(),rg())}}function $o(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var nu=!1;if(Jt)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{nu=!1}function tw(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var ho=!1,sa=null,ua=!1,ru=null,nw={onError:function(e){ho=!0,sa=e}};function rw(e,t,n,r,o,i,a,l,s){ho=!1,sa=null,tw.apply(nw,arguments)}function ow(e,t,n,r,o,i,a,l,s){if(rw.apply(this,arguments),ho){if(ho){var u=sa;ho=!1,sa=null}else throw Error(j(198));ua||(ua=!0,ru=u)}}function er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yd(e){if(er(e)!==e)throw Error(j(188))}function iw(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return yd(o),e;if(i===r)return yd(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function sg(e){return e=iw(e),e!==null?ug(e):null}function ug(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ug(e);if(t!==null)return t;e=e.sibling}return null}var cg=lt.unstable_scheduleCallback,vd=lt.unstable_cancelCallback,aw=lt.unstable_shouldYield,lw=lt.unstable_requestPaint,ye=lt.unstable_now,sw=lt.unstable_getCurrentPriorityLevel,$c=lt.unstable_ImmediatePriority,fg=lt.unstable_UserBlockingPriority,ca=lt.unstable_NormalPriority,uw=lt.unstable_LowPriority,dg=lt.unstable_IdlePriority,il=null,Dt=null;function cw(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(il,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:pw,fw=Math.log,dw=Math.LN2;function pw(e){return e>>>=0,e===0?32:31-(fw(e)/dw|0)|0}var wi=64,xi=4194304;function so(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=so(l):(i&=a,i!==0&&(r=so(i)))}else a=n&~o,a!==0?r=so(a):i!==0&&(r=so(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),o=1<<n,r|=e[n],t&=~o;return r}function hw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ct(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=hw(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function ou(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pg(){var e=wi;return wi<<=1,!(wi&4194240)&&(wi=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function gw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Rc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function hg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mg,Tc,gg,yg,vg,iu=!1,Si=[],vn=null,wn=null,xn=null,Ro=new Map,To=new Map,dn=[],yw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wd(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(t.pointerId)}}function Jr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ii(t),t!==null&&Tc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vw(e,t,n,r,o){switch(t){case"focusin":return vn=Jr(vn,e,t,n,r,o),!0;case"dragenter":return wn=Jr(wn,e,t,n,r,o),!0;case"mouseover":return xn=Jr(xn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ro.set(i,Jr(Ro.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,To.set(i,Jr(To.get(i)||null,e,t,n,r,o)),!0}return!1}function wg(e){var t=Bn(e.target);if(t!==null){var n=er(t);if(n!==null){if(t=n.tag,t===13){if(t=lg(n),t!==null){e.blockedOn=t,vg(e.priority,function(){gg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=au(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);eu=r,n.target.dispatchEvent(r),eu=null}else return t=ii(n),t!==null&&Tc(t),e.blockedOn=n,!1;t.shift()}return!0}function xd(e,t,n){Ui(e)&&n.delete(t)}function ww(){iu=!1,vn!==null&&Ui(vn)&&(vn=null),wn!==null&&Ui(wn)&&(wn=null),xn!==null&&Ui(xn)&&(xn=null),Ro.forEach(xd),To.forEach(xd)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,iu||(iu=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,ww)))}function No(e){function t(o){return Zr(o,e)}if(0<Si.length){Zr(Si[0],e);for(var n=1;n<Si.length;n++){var r=Si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&Zr(vn,e),wn!==null&&Zr(wn,e),xn!==null&&Zr(xn,e),Ro.forEach(t),To.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)wg(n),n.blockedOn===null&&dn.shift()}var xr=on.ReactCurrentBatchConfig,da=!0;function xw(e,t,n,r){var o=ee,i=xr.transition;xr.transition=null;try{ee=1,Nc(e,t,n,r)}finally{ee=o,xr.transition=i}}function Sw(e,t,n,r){var o=ee,i=xr.transition;xr.transition=null;try{ee=4,Nc(e,t,n,r)}finally{ee=o,xr.transition=i}}function Nc(e,t,n,r){if(da){var o=au(e,t,n,r);if(o===null)is(e,t,r,pa,n),wd(e,r);else if(vw(o,e,t,n,r))r.stopPropagation();else if(wd(e,r),t&4&&-1<yw.indexOf(e)){for(;o!==null;){var i=ii(o);if(i!==null&&mg(i),i=au(e,t,n,r),i===null&&is(e,t,r,pa,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else is(e,t,r,null,n)}}var pa=null;function au(e,t,n,r){if(pa=null,e=jc(r),e=Bn(e),e!==null)if(t=er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pa=e,null}function xg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sw()){case $c:return 1;case fg:return 4;case ca:case uw:return 16;case dg:return 536870912;default:return 16}default:return 16}}var mn=null,Ac=null,Bi=null;function Sg(){if(Bi)return Bi;var e,t=Ac,n=t.length,r,o="value"in mn?mn.value:mn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Bi=o.slice(e,1<r?1-r:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bi(){return!0}function Sd(){return!1}function ft(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bi:Sd,this.isPropagationStopped=Sd,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bi)},persist:function(){},isPersistent:bi}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=ft(Fr),oi=de({},Fr,{view:0,detail:0}),bw=ft(oi),ql,Xl,eo,al=de({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(ql=e.screenX-eo.screenX,Xl=e.screenY-eo.screenY):Xl=ql=0,eo=e),ql)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),bd=ft(al),kw=de({},al,{dataTransfer:0}),Ew=ft(kw),Pw=de({},oi,{relatedTarget:0}),Jl=ft(Pw),_w=de({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ow=ft(_w),Cw=de({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jw=ft(Cw),$w=de({},Fr,{data:0}),kd=ft($w),Rw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Aw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nw[e])?!!t[e]:!1}function zc(){return Aw}var Lw=de({},oi,{key:function(e){if(e.key){var t=Rw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zw=ft(Lw),Iw=de({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=ft(Iw),Dw=de({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),Mw=ft(Dw),Fw=de({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uw=ft(Fw),Bw=de({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ww=ft(Bw),Hw=[9,13,27,32],Ic=Jt&&"CompositionEvent"in window,mo=null;Jt&&"documentMode"in document&&(mo=document.documentMode);var Vw=Jt&&"TextEvent"in window&&!mo,bg=Jt&&(!Ic||mo&&8<mo&&11>=mo),Pd=String.fromCharCode(32),_d=!1;function kg(e,t){switch(e){case"keyup":return Hw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ir=!1;function Gw(e,t){switch(e){case"compositionend":return Eg(t);case"keypress":return t.which!==32?null:(_d=!0,Pd);case"textInput":return e=t.data,e===Pd&&_d?null:e;default:return null}}function Kw(e,t){if(ir)return e==="compositionend"||!Ic&&kg(e,t)?(e=Sg(),Bi=Ac=mn=null,ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bg&&t.locale!=="ko"?null:t.data;default:return null}}var Qw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qw[e.type]:t==="textarea"}function Pg(e,t,n,r){ng(r),t=ha(t,"onChange"),0<t.length&&(n=new Lc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var go=null,Ao=null;function Yw(e){zg(e,0)}function ll(e){var t=sr(e);if(Ym(t))return e}function qw(e,t){if(e==="change")return t}var _g=!1;if(Jt){var Zl;if(Jt){var es="oninput"in document;if(!es){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),es=typeof Cd.oninput=="function"}Zl=es}else Zl=!1;_g=Zl&&(!document.documentMode||9<document.documentMode)}function jd(){go&&(go.detachEvent("onpropertychange",Og),Ao=go=null)}function Og(e){if(e.propertyName==="value"&&ll(Ao)){var t=[];Pg(t,Ao,e,jc(e)),ag(Yw,t)}}function Xw(e,t,n){e==="focusin"?(jd(),go=t,Ao=n,go.attachEvent("onpropertychange",Og)):e==="focusout"&&jd()}function Jw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Ao)}function Zw(e,t){if(e==="click")return ll(t)}function ex(e,t){if(e==="input"||e==="change")return ll(t)}function tx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $t=typeof Object.is=="function"?Object.is:tx;function Lo(e,t){if($t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Bs.call(t,o)||!$t(e[o],t[o]))return!1}return!0}function $d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rd(e,t){var n=$d(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$d(n)}}function Cg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jg(){for(var e=window,t=la();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=la(e.document)}return t}function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nx(e){var t=jg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cg(n.ownerDocument.documentElement,n)){if(r!==null&&Dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Rd(n,i);var a=Rd(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rx=Jt&&"documentMode"in document&&11>=document.documentMode,ar=null,lu=null,yo=null,su=!1;function Td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;su||ar==null||ar!==la(r)||(r=ar,"selectionStart"in r&&Dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Lo(yo,r)||(yo=r,r=ha(lu,"onSelect"),0<r.length&&(t=new Lc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ar)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},ts={},$g={};Jt&&($g=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function sl(e){if(ts[e])return ts[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $g)return ts[e]=t[n];return e}var Rg=sl("animationend"),Tg=sl("animationiteration"),Ng=sl("animationstart"),Ag=sl("transitionend"),Lg=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,t){Lg.set(e,t),Zn(t,[e])}for(var ns=0;ns<Nd.length;ns++){var rs=Nd[ns],ox=rs.toLowerCase(),ix=rs[0].toUpperCase()+rs.slice(1);An(ox,"on"+ix)}An(Rg,"onAnimationEnd");An(Tg,"onAnimationIteration");An(Ng,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Ag,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Ad(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ow(r,t,void 0,e),e.currentTarget=null}function zg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Ad(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Ad(o,l,u),i=s}}}if(ua)throw e=ru,ua=!1,ru=null,e}function ie(e,t){var n=t[pu];n===void 0&&(n=t[pu]=new Set);var r=e+"__bubble";n.has(r)||(Ig(t,e,2,!1),n.add(r))}function os(e,t,n){var r=0;t&&(r|=4),Ig(n,e,r,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function zo(e){if(!e[Ei]){e[Ei]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||os(n,!1,e),os(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,os("selectionchange",!1,t))}}function Ig(e,t,n,r){switch(xg(t)){case 1:var o=xw;break;case 4:o=Sw;break;default:o=Nc}n=o.bind(null,t,n,e),o=void 0,!nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function is(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Bn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}ag(function(){var u=i,f=jc(n),c=[];e:{var h=Lg.get(e);if(h!==void 0){var v=Lc,g=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":v=zw;break;case"focusin":g="focus",v=Jl;break;case"focusout":g="blur",v=Jl;break;case"beforeblur":case"afterblur":v=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ew;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Mw;break;case Rg:case Tg:case Ng:v=Ow;break;case Ag:v=Uw;break;case"scroll":v=bw;break;case"wheel":v=Ww;break;case"copy":case"cut":case"paste":v=jw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ed}var m=(t&4)!==0,w=!m&&e==="scroll",p=m?h!==null?h+"Capture":null:h;m=[];for(var d=u,y;d!==null;){y=d;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,p!==null&&(S=$o(d,p),S!=null&&m.push(Io(d,S,y)))),w)break;d=d.return}0<m.length&&(h=new v(h,g,null,n,f),c.push({event:h,listeners:m}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==eu&&(g=n.relatedTarget||n.fromElement)&&(Bn(g)||g[Zt]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Bn(g):null,g!==null&&(w=er(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(m=bd,S="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(m=Ed,S="onPointerLeave",p="onPointerEnter",d="pointer"),w=v==null?h:sr(v),y=g==null?h:sr(g),h=new m(S,d+"leave",v,n,f),h.target=w,h.relatedTarget=y,S=null,Bn(f)===u&&(m=new m(p,d+"enter",g,n,f),m.target=y,m.relatedTarget=w,S=m),w=S,v&&g)t:{for(m=v,p=g,d=0,y=m;y;y=tr(y))d++;for(y=0,S=p;S;S=tr(S))y++;for(;0<d-y;)m=tr(m),d--;for(;0<y-d;)p=tr(p),y--;for(;d--;){if(m===p||p!==null&&m===p.alternate)break t;m=tr(m),p=tr(p)}m=null}else m=null;v!==null&&Ld(c,h,v,m,!1),g!==null&&w!==null&&Ld(c,w,g,m,!0)}}e:{if(h=u?sr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var E=qw;else if(Od(h))if(_g)E=ex;else{E=Jw;var P=Xw}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Zw);if(E&&(E=E(e,u))){Pg(c,E,n,f);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ys(h,"number",h.value)}switch(P=u?sr(u):window,e){case"focusin":(Od(P)||P.contentEditable==="true")&&(ar=P,lu=u,yo=null);break;case"focusout":yo=lu=ar=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Td(c,n,f);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Td(c,n,f)}var C;if(Ic)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else ir?kg(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(bg&&n.locale!=="ko"&&(ir||$!=="onCompositionStart"?$==="onCompositionEnd"&&ir&&(C=Sg()):(mn=f,Ac="value"in mn?mn.value:mn.textContent,ir=!0)),P=ha(u,$),0<P.length&&($=new kd($,e,null,n,f),c.push({event:$,listeners:P}),C?$.data=C:(C=Eg(n),C!==null&&($.data=C)))),(C=Vw?Gw(e,n):Kw(e,n))&&(u=ha(u,"onBeforeInput"),0<u.length&&(f=new kd("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=C))}zg(c,t)})}function Io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ha(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=$o(e,n),i!=null&&r.unshift(Io(e,i,o)),i=$o(e,t),i!=null&&r.push(Io(e,i,o))),e=e.return}return r}function tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ld(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=$o(n,i),s!=null&&a.unshift(Io(n,s,l))):o||(s=$o(n,i),s!=null&&a.push(Io(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var lx=/\r\n?/g,sx=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(lx,`
`).replace(sx,"")}function Pi(e,t,n){if(t=zd(t),zd(e)!==t&&n)throw Error(j(425))}function ma(){}var uu=null,cu=null;function fu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(e){return Id.resolve(null).then(e).catch(fx)}:du;function fx(e){setTimeout(function(){throw e})}function as(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),No(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);No(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Ur,Do="__reactProps$"+Ur,Zt="__reactContainer$"+Ur,pu="__reactEvents$"+Ur,dx="__reactListeners$"+Ur,px="__reactHandles$"+Ur;function Bn(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zt]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dd(e);e!==null;){if(n=e[Lt])return n;e=Dd(e)}return t}e=n,n=e.parentNode}return null}function ii(e){return e=e[Lt]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function ul(e){return e[Do]||null}var hu=[],ur=-1;function Ln(e){return{current:e}}function ae(e){0>ur||(e.current=hu[ur],hu[ur]=null,ur--)}function oe(e,t){ur++,hu[ur]=e.current,e.current=t}var Rn={},We=Ln(Rn),Je=Ln(!1),Kn=Rn;function Or(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ze(e){return e=e.childContextTypes,e!=null}function ga(){ae(Je),ae(We)}function Md(e,t,n){if(We.current!==Rn)throw Error(j(168));oe(We,t),oe(Je,n)}function Dg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,X1(e)||"Unknown",o));return de({},n,r)}function ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Kn=We.current,oe(We,e),oe(Je,Je.current),!0}function Fd(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Dg(e,t,Kn),r.__reactInternalMemoizedMergedChildContext=e,ae(Je),ae(We),oe(We,e)):ae(Je),oe(Je,n)}var Vt=null,cl=!1,ls=!1;function Mg(e){Vt===null?Vt=[e]:Vt.push(e)}function hx(e){cl=!0,Mg(e)}function zn(){if(!ls&&Vt!==null){ls=!0;var e=0,t=ee;try{var n=Vt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,cl=!1}catch(o){throw Vt!==null&&(Vt=Vt.slice(e+1)),cg($c,zn),o}finally{ee=t,ls=!1}}return null}var cr=[],fr=0,va=null,wa=0,dt=[],pt=0,Qn=null,Gt=1,Kt="";function Mn(e,t){cr[fr++]=wa,cr[fr++]=va,va=e,wa=t}function Fg(e,t,n){dt[pt++]=Gt,dt[pt++]=Kt,dt[pt++]=Qn,Qn=e;var r=Gt;e=Kt;var o=32-Ct(r)-1;r&=~(1<<o),n+=1;var i=32-Ct(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Gt=1<<32-Ct(t)+o|n<<o|r,Kt=i+e}else Gt=1<<i|n<<o|r,Kt=e}function Mc(e){e.return!==null&&(Mn(e,1),Fg(e,1,0))}function Fc(e){for(;e===va;)va=cr[--fr],cr[fr]=null,wa=cr[--fr],cr[fr]=null;for(;e===Qn;)Qn=dt[--pt],dt[pt]=null,Kt=dt[--pt],dt[pt]=null,Gt=dt[--pt],dt[pt]=null}var at=null,ot=null,ue=!1,_t=null;function Ug(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ud(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ot=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Gt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,ot=null,!0):!1;default:return!1}}function mu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gu(e){if(ue){var t=ot;if(t){var n=t;if(!Ud(e,t)){if(mu(e))throw Error(j(418));t=Sn(n.nextSibling);var r=at;t&&Ud(e,t)?Ug(r,n):(e.flags=e.flags&-4097|2,ue=!1,at=e)}}else{if(mu(e))throw Error(j(418));e.flags=e.flags&-4097|2,ue=!1,at=e}}}function Bd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function _i(e){if(e!==at)return!1;if(!ue)return Bd(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fu(e.type,e.memoizedProps)),t&&(t=ot)){if(mu(e))throw Bg(),Error(j(418));for(;t;)Ug(e,t),t=Sn(t.nextSibling)}if(Bd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=at?Sn(e.stateNode.nextSibling):null;return!0}function Bg(){for(var e=ot;e;)e=Sn(e.nextSibling)}function Cr(){ot=at=null,ue=!1}function Uc(e){_t===null?_t=[e]:_t.push(e)}var mx=on.ReactCurrentBatchConfig;function kt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var xa=Ln(null),Sa=null,dr=null,Bc=null;function Wc(){Bc=dr=Sa=null}function Hc(e){var t=xa.current;ae(xa),e._currentValue=t}function yu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){Sa=e,Bc=dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(Bc!==e)if(e={context:e,memoizedValue:t,next:null},dr===null){if(Sa===null)throw Error(j(308));dr=e,Sa.dependencies={lanes:0,firstContext:e}}else dr=dr.next=e;return t}var Wn=null;function Vc(e){Wn===null?Wn=[e]:Wn.push(e)}function Wg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Vc(t)):(n.next=o.next,o.next=n),t.interleaved=n,en(e,r)}function en(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fn=!1;function Gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,en(e,n)}return o=r.interleaved,o===null?(t.next=t,Vc(r)):(t.next=o.next,o.next=t),r.interleaved=t,en(e,n)}function Hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rc(e,n)}}function Wd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ba(e,t,n,r){var o=e.updateQueue;fn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var c=o.baseState;a=0,f=u=s=null,l=i;do{var h=l.lane,v=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,m=l;switch(h=t,v=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){c=g.call(v,c,h);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,h=typeof g=="function"?g.call(v,c,h):g,h==null)break e;c=de({},c,h);break e;case 2:fn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,s=c):f=f.next=v,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(f===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qn|=a,e.lanes=a,e.memoizedState=c}}function Hd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var Vg=new Wm.Component().refs;function vu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=En(e),i=Yt(r,o);i.payload=t,n!=null&&(i.callback=n),t=bn(e,i,o),t!==null&&(jt(t,e,o,r),Hi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=En(e),i=Yt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bn(e,i,o),t!==null&&(jt(t,e,o,r),Hi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=En(e),o=Yt(n,r);o.tag=2,t!=null&&(o.callback=t),t=bn(e,o,r),t!==null&&(jt(t,e,r,n),Hi(t,e,r))}};function Vd(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Lo(n,r)||!Lo(o,i):!0}function Gg(e,t,n){var r=!1,o=Rn,i=t.contextType;return typeof i=="object"&&i!==null?i=yt(i):(o=Ze(t)?Kn:We.current,r=t.contextTypes,i=(r=r!=null)?Or(e,o):Rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Gd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function wu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Vg,Gc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=yt(i):(i=Ze(t)?Kn:We.current,o.context=Or(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(vu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fl.enqueueReplaceState(o,o.state,null),ba(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function to(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===Vg&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Oi(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kd(e){var t=e._init;return t(e._payload)}function Kg(e){function t(p,d){if(e){var y=p.deletions;y===null?(p.deletions=[d],p.flags|=16):y.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=Pn(p,d),p.index=0,p.sibling=null,p}function i(p,d,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<d?(p.flags|=2,d):y):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,y,S){return d===null||d.tag!==6?(d=hs(y,p.mode,S),d.return=p,d):(d=o(d,y),d.return=p,d)}function s(p,d,y,S){var E=y.type;return E===or?f(p,d,y.props.children,S,y.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cn&&Kd(E)===d.type)?(S=o(d,y.props),S.ref=to(p,d,y),S.return=p,S):(S=qi(y.type,y.key,y.props,null,p.mode,S),S.ref=to(p,d,y),S.return=p,S)}function u(p,d,y,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=ms(y,p.mode,S),d.return=p,d):(d=o(d,y.children||[]),d.return=p,d)}function f(p,d,y,S,E){return d===null||d.tag!==7?(d=Gn(y,p.mode,S,E),d.return=p,d):(d=o(d,y),d.return=p,d)}function c(p,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=hs(""+d,p.mode,y),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gi:return y=qi(d.type,d.key,d.props,null,p.mode,y),y.ref=to(p,null,d),y.return=p,y;case rr:return d=ms(d,p.mode,y),d.return=p,d;case cn:var S=d._init;return c(p,S(d._payload),y)}if(lo(d)||qr(d))return d=Gn(d,p.mode,y,null),d.return=p,d;Oi(p,d)}return null}function h(p,d,y,S){var E=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:l(p,d,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gi:return y.key===E?s(p,d,y,S):null;case rr:return y.key===E?u(p,d,y,S):null;case cn:return E=y._init,h(p,d,E(y._payload),S)}if(lo(y)||qr(y))return E!==null?null:f(p,d,y,S,null);Oi(p,y)}return null}function v(p,d,y,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(y)||null,l(d,p,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gi:return p=p.get(S.key===null?y:S.key)||null,s(d,p,S,E);case rr:return p=p.get(S.key===null?y:S.key)||null,u(d,p,S,E);case cn:var P=S._init;return v(p,d,y,P(S._payload),E)}if(lo(S)||qr(S))return p=p.get(y)||null,f(d,p,S,E,null);Oi(d,S)}return null}function g(p,d,y,S){for(var E=null,P=null,C=d,$=d=0,D=null;C!==null&&$<y.length;$++){C.index>$?(D=C,C=null):D=C.sibling;var I=h(p,C,y[$],S);if(I===null){C===null&&(C=D);break}e&&C&&I.alternate===null&&t(p,C),d=i(I,d,$),P===null?E=I:P.sibling=I,P=I,C=D}if($===y.length)return n(p,C),ue&&Mn(p,$),E;if(C===null){for(;$<y.length;$++)C=c(p,y[$],S),C!==null&&(d=i(C,d,$),P===null?E=C:P.sibling=C,P=C);return ue&&Mn(p,$),E}for(C=r(p,C);$<y.length;$++)D=v(C,p,$,y[$],S),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?$:D.key),d=i(D,d,$),P===null?E=D:P.sibling=D,P=D);return e&&C.forEach(function(le){return t(p,le)}),ue&&Mn(p,$),E}function m(p,d,y,S){var E=qr(y);if(typeof E!="function")throw Error(j(150));if(y=E.call(y),y==null)throw Error(j(151));for(var P=E=null,C=d,$=d=0,D=null,I=y.next();C!==null&&!I.done;$++,I=y.next()){C.index>$?(D=C,C=null):D=C.sibling;var le=h(p,C,I.value,S);if(le===null){C===null&&(C=D);break}e&&C&&le.alternate===null&&t(p,C),d=i(le,d,$),P===null?E=le:P.sibling=le,P=le,C=D}if(I.done)return n(p,C),ue&&Mn(p,$),E;if(C===null){for(;!I.done;$++,I=y.next())I=c(p,I.value,S),I!==null&&(d=i(I,d,$),P===null?E=I:P.sibling=I,P=I);return ue&&Mn(p,$),E}for(C=r(p,C);!I.done;$++,I=y.next())I=v(C,p,$,I.value,S),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?$:I.key),d=i(I,d,$),P===null?E=I:P.sibling=I,P=I);return e&&C.forEach(function(Se){return t(p,Se)}),ue&&Mn(p,$),E}function w(p,d,y,S){if(typeof y=="object"&&y!==null&&y.type===or&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case gi:e:{for(var E=y.key,P=d;P!==null;){if(P.key===E){if(E=y.type,E===or){if(P.tag===7){n(p,P.sibling),d=o(P,y.props.children),d.return=p,p=d;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cn&&Kd(E)===P.type){n(p,P.sibling),d=o(P,y.props),d.ref=to(p,P,y),d.return=p,p=d;break e}n(p,P);break}else t(p,P);P=P.sibling}y.type===or?(d=Gn(y.props.children,p.mode,S,y.key),d.return=p,p=d):(S=qi(y.type,y.key,y.props,null,p.mode,S),S.ref=to(p,d,y),S.return=p,p=S)}return a(p);case rr:e:{for(P=y.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(p,d.sibling),d=o(d,y.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ms(y,p.mode,S),d.return=p,p=d}return a(p);case cn:return P=y._init,w(p,d,P(y._payload),S)}if(lo(y))return g(p,d,y,S);if(qr(y))return m(p,d,y,S);Oi(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,y),d.return=p,p=d):(n(p,d),d=hs(y,p.mode,S),d.return=p,p=d),a(p)):n(p,d)}return w}var jr=Kg(!0),Qg=Kg(!1),ai={},Mt=Ln(ai),Mo=Ln(ai),Fo=Ln(ai);function Hn(e){if(e===ai)throw Error(j(174));return e}function Kc(e,t){switch(oe(Fo,t),oe(Mo,e),oe(Mt,ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xs(t,e)}ae(Mt),oe(Mt,t)}function $r(){ae(Mt),ae(Mo),ae(Fo)}function Yg(e){Hn(Fo.current);var t=Hn(Mt.current),n=Xs(t,e.type);t!==n&&(oe(Mo,e),oe(Mt,n))}function Qc(e){Mo.current===e&&(ae(Mt),ae(Mo))}var ce=Ln(0);function ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ss=[];function Yc(){for(var e=0;e<ss.length;e++)ss[e]._workInProgressVersionPrimary=null;ss.length=0}var Vi=on.ReactCurrentDispatcher,us=on.ReactCurrentBatchConfig,Yn=0,fe=null,be=null,Ee=null,Ea=!1,vo=!1,Uo=0,gx=0;function De(){throw Error(j(321))}function qc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$t(e[n],t[n]))return!1;return!0}function Xc(e,t,n,r,o,i){if(Yn=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vi.current=e===null||e.memoizedState===null?xx:Sx,e=n(r,o),vo){i=0;do{if(vo=!1,Uo=0,25<=i)throw Error(j(301));i+=1,Ee=be=null,t.updateQueue=null,Vi.current=bx,e=n(r,o)}while(vo)}if(Vi.current=Pa,t=be!==null&&be.next!==null,Yn=0,Ee=be=fe=null,Ea=!1,t)throw Error(j(300));return e}function Jc(){var e=Uo!==0;return Uo=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?fe.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function vt(){if(be===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ee===null?fe.memoizedState:Ee.next;if(t!==null)Ee=t,be=e;else{if(e===null)throw Error(j(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ee===null?fe.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Bo(e,t){return typeof t=="function"?t(e):t}function cs(e){var t=vt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var f=u.lane;if((Yn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,fe.lanes|=f,qn|=f}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,$t(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,fe.lanes|=i,qn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fs(e){var t=vt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);$t(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function qg(){}function Xg(e,t){var n=fe,r=vt(),o=t(),i=!$t(r.memoizedState,o);if(i&&(r.memoizedState=o,Xe=!0),r=r.queue,Zc(ey.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Wo(9,Zg.bind(null,n,r,o,t),void 0,null),Pe===null)throw Error(j(349));Yn&30||Jg(n,t,o)}return o}function Jg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zg(e,t,n,r){t.value=n,t.getSnapshot=r,ty(t)&&ny(e)}function ey(e,t,n){return n(function(){ty(t)&&ny(e)})}function ty(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$t(e,n)}catch{return!0}}function ny(e){var t=en(e,1);t!==null&&jt(t,e,1,-1)}function Qd(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=wx.bind(null,fe,e),[t.memoizedState,e]}function Wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ry(){return vt().memoizedState}function Gi(e,t,n,r){var o=Tt();fe.flags|=e,o.memoizedState=Wo(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var o=vt();r=r===void 0?null:r;var i=void 0;if(be!==null){var a=be.memoizedState;if(i=a.destroy,r!==null&&qc(r,a.deps)){o.memoizedState=Wo(t,n,i,r);return}}fe.flags|=e,o.memoizedState=Wo(1|t,n,i,r)}function Yd(e,t){return Gi(8390656,8,e,t)}function Zc(e,t){return dl(2048,8,e,t)}function oy(e,t){return dl(4,2,e,t)}function iy(e,t){return dl(4,4,e,t)}function ay(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ly(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,ay.bind(null,t,e),n)}function ef(){}function sy(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uy(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cy(e,t,n){return Yn&21?($t(n,t)||(n=pg(),fe.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function yx(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=us.transition;us.transition={};try{e(!1),t()}finally{ee=n,us.transition=r}}function fy(){return vt().memoizedState}function vx(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dy(e))py(t,n);else if(n=Wg(e,t,n,r),n!==null){var o=Ge();jt(n,e,r,o),hy(n,t,r)}}function wx(e,t,n){var r=En(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dy(e))py(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,$t(l,a)){var s=t.interleaved;s===null?(o.next=o,Vc(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Wg(e,t,o,r),n!==null&&(o=Ge(),jt(n,e,r,o),hy(n,t,r))}}function dy(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function py(e,t){vo=Ea=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rc(e,n)}}var Pa={readContext:yt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},xx={readContext:yt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Yd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gi(4194308,4,ay.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gi(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=vx.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Qd,useDebugValue:ef,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Qd(!1),t=e[0];return e=yx.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,o=Tt();if(ue){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Pe===null)throw Error(j(349));Yn&30||Jg(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Yd(ey.bind(null,r,i,e),[e]),r.flags|=2048,Wo(9,Zg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Pe.identifierPrefix;if(ue){var n=Kt,r=Gt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Uo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sx={readContext:yt,useCallback:sy,useContext:yt,useEffect:Zc,useImperativeHandle:ly,useInsertionEffect:oy,useLayoutEffect:iy,useMemo:uy,useReducer:cs,useRef:ry,useState:function(){return cs(Bo)},useDebugValue:ef,useDeferredValue:function(e){var t=vt();return cy(t,be.memoizedState,e)},useTransition:function(){var e=cs(Bo)[0],t=vt().memoizedState;return[e,t]},useMutableSource:qg,useSyncExternalStore:Xg,useId:fy,unstable_isNewReconciler:!1},bx={readContext:yt,useCallback:sy,useContext:yt,useEffect:Zc,useImperativeHandle:ly,useInsertionEffect:oy,useLayoutEffect:iy,useMemo:uy,useReducer:fs,useRef:ry,useState:function(){return fs(Bo)},useDebugValue:ef,useDeferredValue:function(e){var t=vt();return be===null?t.memoizedState=e:cy(t,be.memoizedState,e)},useTransition:function(){var e=fs(Bo)[0],t=vt().memoizedState;return[e,t]},useMutableSource:qg,useSyncExternalStore:Xg,useId:fy,unstable_isNewReconciler:!1};function Rr(e,t){try{var n="",r=t;do n+=q1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kx=typeof WeakMap=="function"?WeakMap:Map;function my(e,t,n){n=Yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oa||(Oa=!0,$u=r),xu(e,t)},n}function gy(e,t,n){n=Yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){xu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){xu(e,t),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function qd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ix.bind(null,e,t,n),t.then(e,e))}function Xd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yt(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e)}var Ex=on.ReactCurrentOwner,Xe=!1;function Ve(e,t,n,r){t.child=e===null?Qg(t,null,n,r):jr(t,e.child,n,r)}function Zd(e,t,n,r,o){n=n.render;var i=t.ref;return Sr(t,o),r=Xc(e,t,n,r,i,o),n=Jc(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tn(e,t,o)):(ue&&n&&Mc(t),t.flags|=1,Ve(e,t,r,o),t.child)}function ep(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!uf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,yy(e,t,i,r,o)):(e=qi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(a,r)&&e.ref===t.ref)return tn(e,t,o)}return t.flags|=1,e=Pn(i,r),e.ref=t.ref,e.return=t,t.child=e}function yy(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Lo(i,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,tn(e,t,o)}return Su(e,t,n,r,o)}function vy(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(hr,rt),rt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(hr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,oe(hr,rt),rt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,oe(hr,rt),rt|=r;return Ve(e,t,o,n),t.child}function wy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Su(e,t,n,r,o){var i=Ze(n)?Kn:We.current;return i=Or(t,i),Sr(t,o),n=Xc(e,t,n,r,i,o),r=Jc(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,tn(e,t,o)):(ue&&r&&Mc(t),t.flags|=1,Ve(e,t,n,o),t.child)}function tp(e,t,n,r,o){if(Ze(n)){var i=!0;ya(t)}else i=!1;if(Sr(t,o),t.stateNode===null)Ki(e,t),Gg(t,n,r),wu(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=Ze(n)?Kn:We.current,u=Or(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Gd(t,a,r,u),fn=!1;var h=t.memoizedState;a.state=h,ba(t,r,a,o),s=t.memoizedState,l!==r||h!==s||Je.current||fn?(typeof f=="function"&&(vu(t,n,f,r),s=t.memoizedState),(l=fn||Vd(t,n,l,r,h,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Hg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:kt(t.type,l),a.props=u,c=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=yt(s):(s=Ze(n)?Kn:We.current,s=Or(t,s));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||h!==s)&&Gd(t,a,r,s),fn=!1,h=t.memoizedState,a.state=h,ba(t,r,a,o);var g=t.memoizedState;l!==c||h!==g||Je.current||fn?(typeof v=="function"&&(vu(t,n,v,r),g=t.memoizedState),(u=fn||Vd(t,n,u,r,h,g,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return bu(e,t,n,r,i,o)}function bu(e,t,n,r,o,i){wy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Fd(t,n,!1),tn(e,t,i);r=t.stateNode,Ex.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=jr(t,e.child,null,i),t.child=jr(t,null,l,i)):Ve(e,t,l,i),t.memoizedState=r.state,o&&Fd(t,n,!0),t.child}function xy(e){var t=e.stateNode;t.pendingContext?Md(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Md(e,t.context,!1),Kc(e,t.containerInfo)}function np(e,t,n,r,o){return Cr(),Uc(o),t.flags|=256,Ve(e,t,n,r),t.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sy(e,t,n){var r=t.pendingProps,o=ce.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(ce,o&1),e===null)return gu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ml(a,r,0,null),e=Gn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Eu(n),t.memoizedState=ku,e):tf(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Px(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Pn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Pn(l,i):(i=Gn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Eu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ku,r}return i=e.child,e=i.sibling,r=Pn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tf(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ci(e,t,n,r){return r!==null&&Uc(r),jr(t,e.child,null,n),e=tf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Px(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ds(Error(j(422))),Ci(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ml({mode:"visible",children:r.children},o,0,null),i=Gn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&jr(t,e.child,null,a),t.child.memoizedState=Eu(a),t.memoizedState=ku,i);if(!(t.mode&1))return Ci(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=ds(i,r,void 0),Ci(e,t,a,r)}if(l=(a&e.childLanes)!==0,Xe||l){if(r=Pe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,en(e,o),jt(r,e,o,-1))}return sf(),r=ds(Error(j(421))),Ci(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Dx.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ot=Sn(o.nextSibling),at=t,ue=!0,_t=null,e!==null&&(dt[pt++]=Gt,dt[pt++]=Kt,dt[pt++]=Qn,Gt=e.id,Kt=e.overflow,Qn=t),t=tf(t,r.children),t.flags|=4096,t)}function rp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yu(e.return,t,n)}function ps(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function by(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ve(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rp(e,n,t);else if(e.tag===19)rp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(ce,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ka(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ps(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ka(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ps(t,!0,n,null,i);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _x(e,t,n){switch(t.tag){case 3:xy(t),Cr();break;case 5:Yg(t);break;case 1:Ze(t.type)&&ya(t);break;case 4:Kc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;oe(xa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?Sy(e,t,n):(oe(ce,ce.current&1),e=tn(e,t,n),e!==null?e.sibling:null);oe(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return by(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,vy(e,t,n)}return tn(e,t,n)}var ky,Pu,Ey,Py;ky=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};Ey=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Hn(Mt.current);var i=null;switch(n){case"input":o=Ks(e,o),r=Ks(e,r),i=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),i=[];break;case"textarea":o=qs(e,o),r=qs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ma)}Js(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Co.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Co.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ie("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Py=function(e,t,n,r){n!==r&&(t.flags|=4)};function no(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ox(e,t,n){var r=t.pendingProps;switch(Fc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ze(t.type)&&ga(),Me(t),null;case 3:return r=t.stateNode,$r(),ae(Je),ae(We),Yc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_t!==null&&(Nu(_t),_t=null))),Pu(e,t),Me(t),null;case 5:Qc(t);var o=Hn(Fo.current);if(n=t.type,e!==null&&t.stateNode!=null)Ey(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Me(t),null}if(e=Hn(Mt.current),_i(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Lt]=t,r[Do]=i,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<uo.length;o++)ie(uo[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":dd(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":hd(r,i),ie("invalid",r)}Js(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Pi(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Pi(r.textContent,l,e),o=["children",""+l]):Co.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ie("scroll",r)}switch(n){case"input":yi(r),pd(r,i,!0);break;case"textarea":yi(r),md(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ma)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Lt]=t,e[Do]=r,ky(e,t,!1,!1),t.stateNode=e;e:{switch(a=Zs(n,r),n){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<uo.length;o++)ie(uo[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":dd(e,r),o=Ks(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),ie("invalid",e);break;case"textarea":hd(e,r),o=qs(e,r),ie("invalid",e);break;default:o=r}Js(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?tg(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zm(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&jo(e,s):typeof s=="number"&&jo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Co.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ie("scroll",e):s!=null&&Pc(e,i,s,a))}switch(n){case"input":yi(e),pd(e,r,!1);break;case"textarea":yi(e),md(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?yr(e,!!r.multiple,i,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ma)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Py(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Hn(Fo.current),Hn(Mt.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,(i=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Pi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r}return Me(t),null;case 13:if(ae(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&ot!==null&&t.mode&1&&!(t.flags&128))Bg(),Cr(),t.flags|=98560,i=!1;else if(i=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[Lt]=t}else Cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else _t!==null&&(Nu(_t),_t=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?ke===0&&(ke=3):sf())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return $r(),Pu(e,t),e===null&&zo(t.stateNode.containerInfo),Me(t),null;case 10:return Hc(t.type._context),Me(t),null;case 17:return Ze(t.type)&&ga(),Me(t),null;case 19:if(ae(ce),i=t.memoizedState,i===null)return Me(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)no(i,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ka(e),a!==null){for(t.flags|=128,no(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&ye()>Tr&&(t.flags|=128,r=!0,no(i,!1),t.lanes=4194304)}else{if(!r)if(e=ka(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),no(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ue)return Me(t),null}else 2*ye()-i.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,no(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ye(),t.sibling=null,n=ce.current,oe(ce,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return lf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Cx(e,t){switch(Fc(t),t.tag){case 1:return Ze(t.type)&&ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),ae(Je),ae(We),Yc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qc(t),null;case 13:if(ae(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ce),null;case 4:return $r(),null;case 10:return Hc(t.type._context),null;case 22:case 23:return lf(),null;case 24:return null;default:return null}}var ji=!1,Be=!1,jx=typeof WeakSet=="function"?WeakSet:Set,z=null;function pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function _u(e,t,n){try{n()}catch(r){he(e,t,r)}}var op=!1;function $x(e,t){if(uu=da,e=jg(),Dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,c=e,h=null;t:for(;;){for(var v;c!==n||o!==0&&c.nodeType!==3||(l=a+o),c!==i||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===e)break t;if(h===n&&++u===o&&(l=a),h===i&&++f===r&&(s=a),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(cu={focusedElem:e,selectionRange:n},da=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,w=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:kt(t.type,m),w);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(S){he(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return g=op,op=!1,g}function wo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&_u(t,n,i)}o=o.next}while(o!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ou(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _y(e){var t=e.alternate;t!==null&&(e.alternate=null,_y(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[Do],delete t[pu],delete t[dx],delete t[px])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oy(e){return e.tag===5||e.tag===3||e.tag===4}function ip(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ma));else if(r!==4&&(e=e.child,e!==null))for(Cu(e,t,n),e=e.sibling;e!==null;)Cu(e,t,n),e=e.sibling}function ju(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ju(e,t,n),e=e.sibling;e!==null;)ju(e,t,n),e=e.sibling}var Re=null,Et=!1;function ln(e,t,n){for(n=n.child;n!==null;)Cy(e,t,n),n=n.sibling}function Cy(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:Be||pr(n,t);case 6:var r=Re,o=Et;Re=null,ln(e,t,n),Re=r,Et=o,Re!==null&&(Et?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(Et?(e=Re,n=n.stateNode,e.nodeType===8?as(e.parentNode,n):e.nodeType===1&&as(e,n),No(e)):as(Re,n.stateNode));break;case 4:r=Re,o=Et,Re=n.stateNode.containerInfo,Et=!0,ln(e,t,n),Re=r,Et=o;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&_u(n,t,a),o=o.next}while(o!==r)}ln(e,t,n);break;case 1:if(!Be&&(pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,ln(e,t,n),Be=r):ln(e,t,n);break;default:ln(e,t,n)}}function ap(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jx),t.forEach(function(r){var o=Mx.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Re=l.stateNode,Et=!1;break e;case 3:Re=l.stateNode.containerInfo,Et=!0;break e;case 4:Re=l.stateNode.containerInfo,Et=!0;break e}l=l.return}if(Re===null)throw Error(j(160));Cy(i,a,o),Re=null,Et=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){he(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jy(t,e),t=t.sibling}function jy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Rt(e),r&4){try{wo(3,e,e.return),pl(3,e)}catch(m){he(e,e.return,m)}try{wo(5,e,e.return)}catch(m){he(e,e.return,m)}}break;case 1:St(t,e),Rt(e),r&512&&n!==null&&pr(n,n.return);break;case 5:if(St(t,e),Rt(e),r&512&&n!==null&&pr(n,n.return),e.flags&32){var o=e.stateNode;try{jo(o,"")}catch(m){he(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&qm(o,i),Zs(l,a);var u=Zs(l,i);for(a=0;a<s.length;a+=2){var f=s[a],c=s[a+1];f==="style"?tg(o,c):f==="dangerouslySetInnerHTML"?Zm(o,c):f==="children"?jo(o,c):Pc(o,f,c,u)}switch(l){case"input":Qs(o,i);break;case"textarea":Xm(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?yr(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?yr(o,!!i.multiple,i.defaultValue,!0):yr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Do]=i}catch(m){he(e,e.return,m)}}break;case 6:if(St(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){he(e,e.return,m)}}break;case 3:if(St(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(t.containerInfo)}catch(m){he(e,e.return,m)}break;case 4:St(t,e),Rt(e);break;case 13:St(t,e),Rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(of=ye())),r&4&&ap(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(u=Be)||f,St(t,e),Be=u):St(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(z=e,f=e.child;f!==null;){for(c=z=f;z!==null;){switch(h=z,v=h.child,h.tag){case 0:case 11:case 14:case 15:wo(4,h,h.return);break;case 1:pr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){he(r,n,m)}}break;case 5:pr(h,h.return);break;case 22:if(h.memoizedState!==null){sp(c);continue}}v!==null?(v.return=h,z=v):sp(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=eg("display",a))}catch(m){he(e,e.return,m)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){he(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:St(t,e),Rt(e),r&4&&ap(e);break;case 21:break;default:St(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Oy(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(jo(o,""),r.flags&=-33);var i=ip(e);ju(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ip(e);Cu(e,l,a);break;default:throw Error(j(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rx(e,t,n){z=e,$y(e)}function $y(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ji;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Be;l=ji;var u=Be;if(ji=a,(Be=s)&&!u)for(z=o;z!==null;)a=z,s=a.child,a.tag===22&&a.memoizedState!==null?up(o):s!==null?(s.return=a,z=s):up(o);for(;i!==null;)z=i,$y(i),i=i.sibling;z=o,ji=l,Be=u}lp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):lp(e)}}function lp(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Hd(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&No(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Be||t.flags&512&&Ou(t)}catch(h){he(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function sp(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function up(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){he(t,o,s)}}var i=t.return;try{Ou(t)}catch(s){he(t,i,s)}break;case 5:var a=t.return;try{Ou(t)}catch(s){he(t,a,s)}}}catch(s){he(t,t.return,s)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var Tx=Math.ceil,_a=on.ReactCurrentDispatcher,nf=on.ReactCurrentOwner,mt=on.ReactCurrentBatchConfig,K=0,Pe=null,we=null,Ae=0,rt=0,hr=Ln(0),ke=0,Ho=null,qn=0,hl=0,rf=0,xo=null,qe=null,of=0,Tr=1/0,Ht=null,Oa=!1,$u=null,kn=null,$i=!1,gn=null,Ca=0,So=0,Ru=null,Qi=-1,Yi=0;function Ge(){return K&6?ye():Qi!==-1?Qi:Qi=ye()}function En(e){return e.mode&1?K&2&&Ae!==0?Ae&-Ae:mx.transition!==null?(Yi===0&&(Yi=pg()),Yi):(e=ee,e!==0||(e=window.event,e=e===void 0?16:xg(e.type)),e):1}function jt(e,t,n,r){if(50<So)throw So=0,Ru=null,Error(j(185));ri(e,n,r),(!(K&2)||e!==Pe)&&(e===Pe&&(!(K&2)&&(hl|=n),ke===4&&pn(e,Ae)),et(e,r),n===1&&K===0&&!(t.mode&1)&&(Tr=ye()+500,cl&&zn()))}function et(e,t){var n=e.callbackNode;mw(e,t);var r=fa(e,e===Pe?Ae:0);if(r===0)n!==null&&vd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vd(n),t===1)e.tag===0?hx(cp.bind(null,e)):Mg(cp.bind(null,e)),cx(function(){!(K&6)&&zn()}),n=null;else{switch(hg(r)){case 1:n=$c;break;case 4:n=fg;break;case 16:n=ca;break;case 536870912:n=dg;break;default:n=ca}n=Dy(n,Ry.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ry(e,t){if(Qi=-1,Yi=0,K&6)throw Error(j(327));var n=e.callbackNode;if(br()&&e.callbackNode!==n)return null;var r=fa(e,e===Pe?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ja(e,r);else{t=r;var o=K;K|=2;var i=Ny();(Pe!==e||Ae!==t)&&(Ht=null,Tr=ye()+500,Vn(e,t));do try{Lx();break}catch(l){Ty(e,l)}while(1);Wc(),_a.current=i,K=o,we!==null?t=0:(Pe=null,Ae=0,t=ke)}if(t!==0){if(t===2&&(o=ou(e),o!==0&&(r=o,t=Tu(e,o))),t===1)throw n=Ho,Vn(e,0),pn(e,r),et(e,ye()),n;if(t===6)pn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Nx(o)&&(t=ja(e,r),t===2&&(i=ou(e),i!==0&&(r=i,t=Tu(e,i))),t===1))throw n=Ho,Vn(e,0),pn(e,r),et(e,ye()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Fn(e,qe,Ht);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=of+500-ye(),10<t)){if(fa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=du(Fn.bind(null,e,qe,Ht),t);break}Fn(e,qe,Ht);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ct(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tx(r/1960))-r,10<r){e.timeoutHandle=du(Fn.bind(null,e,qe,Ht),r);break}Fn(e,qe,Ht);break;case 5:Fn(e,qe,Ht);break;default:throw Error(j(329))}}}return et(e,ye()),e.callbackNode===n?Ry.bind(null,e):null}function Tu(e,t){var n=xo;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=ja(e,t),e!==2&&(t=qe,qe=n,t!==null&&Nu(t)),e}function Nu(e){qe===null?qe=e:qe.push.apply(qe,e)}function Nx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!$t(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~rf,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function cp(e){if(K&6)throw Error(j(327));br();var t=fa(e,0);if(!(t&1))return et(e,ye()),null;var n=ja(e,t);if(e.tag!==0&&n===2){var r=ou(e);r!==0&&(t=r,n=Tu(e,r))}if(n===1)throw n=Ho,Vn(e,0),pn(e,t),et(e,ye()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,qe,Ht),et(e,ye()),null}function af(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Tr=ye()+500,cl&&zn())}}function Xn(e){gn!==null&&gn.tag===0&&!(K&6)&&br();var t=K;K|=1;var n=mt.transition,r=ee;try{if(mt.transition=null,ee=1,e)return e()}finally{ee=r,mt.transition=n,K=t,!(K&6)&&zn()}}function lf(){rt=hr.current,ae(hr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ux(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ga();break;case 3:$r(),ae(Je),ae(We),Yc();break;case 5:Qc(r);break;case 4:$r();break;case 13:ae(ce);break;case 19:ae(ce);break;case 10:Hc(r.type._context);break;case 22:case 23:lf()}n=n.return}if(Pe=e,we=e=Pn(e.current,null),Ae=rt=t,ke=0,Ho=null,rf=hl=qn=0,qe=xo=null,Wn!==null){for(t=0;t<Wn.length;t++)if(n=Wn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Wn=null}return e}function Ty(e,t){do{var n=we;try{if(Wc(),Vi.current=Pa,Ea){for(var r=fe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ea=!1}if(Yn=0,Ee=be=fe=null,vo=!1,Uo=0,nf.current=null,n===null||n.return===null){ke=1,Ho=t,we=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=Ae,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Xd(a);if(v!==null){v.flags&=-257,Jd(v,a,l,i,t),v.mode&1&&qd(i,u,t),t=v,s=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(s),t.updateQueue=m}else g.add(s);break e}else{if(!(t&1)){qd(i,u,t),sf();break e}s=Error(j(426))}}else if(ue&&l.mode&1){var w=Xd(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Jd(w,a,l,i,t),Uc(Rr(s,l));break e}}i=s=Rr(s,l),ke!==4&&(ke=2),xo===null?xo=[i]:xo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=my(i,s,t);Wd(i,p);break e;case 1:l=s;var d=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(kn===null||!kn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=gy(i,l,t);Wd(i,S);break e}}i=i.return}while(i!==null)}Ly(n)}catch(E){t=E,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function Ny(){var e=_a.current;return _a.current=Pa,e===null?Pa:e}function sf(){(ke===0||ke===3||ke===2)&&(ke=4),Pe===null||!(qn&268435455)&&!(hl&268435455)||pn(Pe,Ae)}function ja(e,t){var n=K;K|=2;var r=Ny();(Pe!==e||Ae!==t)&&(Ht=null,Vn(e,t));do try{Ax();break}catch(o){Ty(e,o)}while(1);if(Wc(),K=n,_a.current=r,we!==null)throw Error(j(261));return Pe=null,Ae=0,ke}function Ax(){for(;we!==null;)Ay(we)}function Lx(){for(;we!==null&&!aw();)Ay(we)}function Ay(e){var t=Iy(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Ly(e):we=t,nf.current=null}function Ly(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cx(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,we=null;return}}else if(n=Ox(n,t,rt),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);ke===0&&(ke=5)}function Fn(e,t,n){var r=ee,o=mt.transition;try{mt.transition=null,ee=1,zx(e,t,n,r)}finally{mt.transition=o,ee=r}return null}function zx(e,t,n,r){do br();while(gn!==null);if(K&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(gw(e,i),e===Pe&&(we=Pe=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$i||($i=!0,Dy(ca,function(){return br(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=mt.transition,mt.transition=null;var a=ee;ee=1;var l=K;K|=4,nf.current=null,$x(e,n),jy(n,e),nx(cu),da=!!uu,cu=uu=null,e.current=n,Rx(n),lw(),K=l,ee=a,mt.transition=i}else e.current=n;if($i&&($i=!1,gn=e,Ca=o),i=e.pendingLanes,i===0&&(kn=null),cw(n.stateNode),et(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oa)throw Oa=!1,e=$u,$u=null,e;return Ca&1&&e.tag!==0&&br(),i=e.pendingLanes,i&1?e===Ru?So++:(So=0,Ru=e):So=0,zn(),null}function br(){if(gn!==null){var e=hg(Ca),t=mt.transition,n=ee;try{if(mt.transition=null,ee=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,Ca=0,K&6)throw Error(j(331));var o=K;for(K|=4,z=e.current;z!==null;){var i=z,a=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(z=u;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:wo(8,f,i)}var c=f.child;if(c!==null)c.return=f,z=c;else for(;z!==null;){f=z;var h=f.sibling,v=f.return;if(_y(f),f===u){z=null;break}if(h!==null){h.return=v,z=h;break}z=v}}}var g=i.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var w=m.sibling;m.sibling=null,m=w}while(m!==null)}}z=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,z=a;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:wo(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,z=p;break e}z=i.return}}var d=e.current;for(z=d;z!==null;){a=z;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,z=y;else e:for(a=d;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pl(9,l)}}catch(E){he(l,l.return,E)}if(l===a){z=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,z=S;break e}z=l.return}}if(K=o,zn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(il,e)}catch{}r=!0}return r}finally{ee=n,mt.transition=t}}return!1}function fp(e,t,n){t=Rr(n,t),t=my(e,t,1),e=bn(e,t,1),t=Ge(),e!==null&&(ri(e,1,t),et(e,t))}function he(e,t,n){if(e.tag===3)fp(e,e,n);else for(;t!==null;){if(t.tag===3){fp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=Rr(n,e),e=gy(t,e,1),t=bn(t,e,1),e=Ge(),t!==null&&(ri(t,1,e),et(t,e));break}}t=t.return}}function Ix(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Ae&n)===n&&(ke===4||ke===3&&(Ae&130023424)===Ae&&500>ye()-of?Vn(e,0):rf|=n),et(e,t)}function zy(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=Ge();e=en(e,t),e!==null&&(ri(e,t,n),et(e,n))}function Dx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zy(e,n)}function Mx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),zy(e,n)}var Iy;Iy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,_x(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,ue&&t.flags&1048576&&Fg(t,wa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ki(e,t),e=t.pendingProps;var o=Or(t,We.current);Sr(t,n),o=Xc(null,t,r,e,o,n);var i=Jc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(i=!0,ya(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Gc(t),o.updater=fl,t.stateNode=o,o._reactInternals=t,wu(t,r,e,n),t=bu(null,t,r,!0,i,n)):(t.tag=0,ue&&i&&Mc(t),Ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ux(r),e=kt(r,e),o){case 0:t=Su(null,t,r,e,n);break e;case 1:t=tp(null,t,r,e,n);break e;case 11:t=Zd(null,t,r,e,n);break e;case 14:t=ep(null,t,r,kt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Su(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),tp(e,t,r,o,n);case 3:e:{if(xy(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Hg(e,t),ba(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Rr(Error(j(423)),t),t=np(e,t,r,n,o);break e}else if(r!==o){o=Rr(Error(j(424)),t),t=np(e,t,r,n,o);break e}else for(ot=Sn(t.stateNode.containerInfo.firstChild),at=t,ue=!0,_t=null,n=Qg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cr(),r===o){t=tn(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return Yg(t),e===null&&gu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,fu(r,o)?a=null:i!==null&&fu(r,i)&&(t.flags|=32),wy(e,t),Ve(e,t,a,n),t.child;case 6:return e===null&&gu(t),null;case 13:return Sy(e,t,n);case 4:return Kc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jr(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Zd(e,t,r,o,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,oe(xa,r._currentValue),r._currentValue=a,i!==null)if($t(i.value,a)){if(i.children===o.children&&!Je.current){t=tn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Yt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),yu(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(j(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),yu(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Sr(t,n),o=yt(o),r=r(o),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,o=kt(r,t.pendingProps),o=kt(r.type,o),ep(e,t,r,o,n);case 15:return yy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Ki(e,t),t.tag=1,Ze(r)?(e=!0,ya(t)):e=!1,Sr(t,n),Gg(t,r,o),wu(t,r,o,n),bu(null,t,r,!0,e,n);case 19:return by(e,t,n);case 22:return vy(e,t,n)}throw Error(j(156,t.tag))};function Dy(e,t){return cg(e,t)}function Fx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new Fx(e,t,n,r)}function uf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ux(e){if(typeof e=="function")return uf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oc)return 11;if(e===Cc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")uf(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case or:return Gn(n.children,o,i,t);case _c:a=8,o|=8;break;case Ws:return e=ht(12,n,t,o|2),e.elementType=Ws,e.lanes=i,e;case Hs:return e=ht(13,n,t,o),e.elementType=Hs,e.lanes=i,e;case Vs:return e=ht(19,n,t,o),e.elementType=Vs,e.lanes=i,e;case Km:return ml(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vm:a=10;break e;case Gm:a=9;break e;case Oc:a=11;break e;case Cc:a=14;break e;case cn:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=ht(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Gn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=ht(22,e,r,t),e.elementType=Km,e.lanes=n,e.stateNode={isHidden:!1},e}function hs(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bx(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function cf(e,t,n,r,o,i,a,l,s){return e=new Bx(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ht(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(i),e}function Wx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function My(e){if(!e)return Rn;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ze(n))return Dg(e,n,t)}return t}function Fy(e,t,n,r,o,i,a,l,s){return e=cf(n,r,!0,e,o,i,a,l,s),e.context=My(null),n=e.current,r=Ge(),o=En(n),i=Yt(r,o),i.callback=t??null,bn(n,i,o),e.current.lanes=o,ri(e,o,r),et(e,r),e}function gl(e,t,n,r){var o=t.current,i=Ge(),a=En(o);return n=My(n),t.context===null?t.context=n:t.pendingContext=n,t=Yt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bn(o,t,a),e!==null&&(jt(e,o,a,i),Hi(e,o,a)),a}function $a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ff(e,t){dp(e,t),(e=e.alternate)&&dp(e,t)}function Hx(){return null}var Uy=typeof reportError=="function"?reportError:function(e){console.error(e)};function df(e){this._internalRoot=e}yl.prototype.render=df.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));gl(e,t,null,null)};yl.prototype.unmount=df.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){gl(null,e,null,null)}),t[Zt]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=yg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&wg(e)}};function pf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pp(){}function Vx(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=$a(a);i.call(u)}}var a=Fy(t,r,e,0,null,!1,!1,"",pp);return e._reactRootContainer=a,e[Zt]=a.current,zo(e.nodeType===8?e.parentNode:e),Xn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=$a(s);l.call(u)}}var s=cf(e,0,!1,null,null,!1,!1,"",pp);return e._reactRootContainer=s,e[Zt]=s.current,zo(e.nodeType===8?e.parentNode:e),Xn(function(){gl(t,s,n,r)}),s}function wl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=$a(a);l.call(s)}}gl(t,a,e,o)}else a=Vx(n,t,e,o,r);return $a(a)}mg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=so(t.pendingLanes);n!==0&&(Rc(t,n|1),et(t,ye()),!(K&6)&&(Tr=ye()+500,zn()))}break;case 13:Xn(function(){var r=en(e,1);if(r!==null){var o=Ge();jt(r,e,1,o)}}),ff(e,1)}};Tc=function(e){if(e.tag===13){var t=en(e,134217728);if(t!==null){var n=Ge();jt(t,e,134217728,n)}ff(e,134217728)}};gg=function(e){if(e.tag===13){var t=En(e),n=en(e,t);if(n!==null){var r=Ge();jt(n,e,t,r)}ff(e,t)}};yg=function(){return ee};vg=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};tu=function(e,t,n){switch(t){case"input":if(Qs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ul(r);if(!o)throw Error(j(90));Ym(r),Qs(r,o)}}}break;case"textarea":Xm(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};og=af;ig=Xn;var Gx={usingClientEntryPoint:!1,Events:[ii,sr,ul,ng,rg,af]},ro={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Kx={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sg(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||Hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{il=Ri.inject(Kx),Dt=Ri}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gx;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pf(t))throw Error(j(200));return Wx(e,t,null,n)};ct.createRoot=function(e,t){if(!pf(e))throw Error(j(299));var n=!1,r="",o=Uy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=cf(e,1,!1,null,null,n,!1,r,o),e[Zt]=t.current,zo(e.nodeType===8?e.parentNode:e),new df(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=sg(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return Xn(e)};ct.hydrate=function(e,t,n){if(!vl(t))throw Error(j(200));return wl(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!pf(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Uy;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Fy(t,null,e,1,n??null,o,!1,i,a),e[Zt]=t.current,zo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new yl(t)};ct.render=function(e,t,n){if(!vl(t))throw Error(j(200));return wl(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!vl(e))throw Error(j(40));return e._reactRootContainer?(Xn(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1};ct.unstable_batchedUpdates=af;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!vl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return wl(e,t,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function By(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(By)}catch(e){console.error(e)}}By(),Fm.exports=ct;var hf=Fm.exports,hp=hf;Us.createRoot=hp.createRoot,Us.hydrateRoot=hp.hydrateRoot;var Wy={exports:{}},Hy={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nr=b;function Qx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yx=typeof Object.is=="function"?Object.is:Qx,qx=Nr.useState,Xx=Nr.useEffect,Jx=Nr.useLayoutEffect,Zx=Nr.useDebugValue;function eS(e,t){var n=t(),r=qx({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Jx(function(){o.value=n,o.getSnapshot=t,gs(o)&&i({inst:o})},[e,n,t]),Xx(function(){return gs(o)&&i({inst:o}),e(function(){gs(o)&&i({inst:o})})},[e]),Zx(n),n}function gs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yx(e,n)}catch{return!0}}function tS(e,t){return t()}var nS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?tS:eS;Hy.useSyncExternalStore=Nr.useSyncExternalStore!==void 0?Nr.useSyncExternalStore:nS;Wy.exports=Hy;var rS=Wy.exports,Vy={exports:{}},Gy={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xl=b,oS=rS;function iS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var aS=typeof Object.is=="function"?Object.is:iS,lS=oS.useSyncExternalStore,sS=xl.useRef,uS=xl.useEffect,cS=xl.useMemo,fS=xl.useDebugValue;Gy.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=sS(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=cS(function(){function s(v){if(!u){if(u=!0,f=v,v=r(v),o!==void 0&&a.hasValue){var g=a.value;if(o(g,v))return c=g}return c=v}if(g=c,aS(f,v))return g;var m=r(v);return o!==void 0&&o(g,m)?g:(f=v,c=m)}var u=!1,f,c,h=n===void 0?null:n;return[function(){return s(t())},h===null?void 0:function(){return s(h())}]},[t,n,r,o]);var l=lS(e,i[0],i[1]);return uS(function(){a.hasValue=!0,a.value=l},[l]),fS(l),l};Vy.exports=Gy;var dS=Vy.exports;function pS(e){e()}let Ky=pS;const hS=e=>Ky=e,mS=()=>Ky,mp=Symbol.for("react-redux-context"),gp=typeof globalThis<"u"?globalThis:{};function gS(){var e;if(!b.createContext)return{};const t=(e=gp[mp])!=null?e:gp[mp]=new Map;let n=t.get(b.createContext);return n||(n=b.createContext(null),t.set(b.createContext,n)),n}const Tn=gS();function mf(e=Tn){return function(){return b.useContext(e)}}const Qy=mf(),yS=()=>{throw new Error("uSES not initialized!")};let Yy=yS;const vS=e=>{Yy=e},wS=(e,t)=>e===t;function xS(e=Tn){const t=e===Tn?Qy:mf(e);return function(r,o={}){const{equalityFn:i=wS,stabilityCheck:a=void 0,noopCheck:l=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:s,subscription:u,getServerState:f,stabilityCheck:c,noopCheck:h}=t();b.useRef(!0);const v=b.useCallback({[r.name](m){return r(m)}}[r.name],[r,c,a]),g=Yy(u.addNestedSub,s.getState,f||s.getState,v,i);return b.useDebugValue(g),g}}const qy=xS();var ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf=Symbol.for("react.element"),yf=Symbol.for("react.portal"),Sl=Symbol.for("react.fragment"),bl=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),El=Symbol.for("react.provider"),Pl=Symbol.for("react.context"),SS=Symbol.for("react.server_context"),_l=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),jl=Symbol.for("react.memo"),$l=Symbol.for("react.lazy"),bS=Symbol.for("react.offscreen"),Xy;Xy=Symbol.for("react.module.reference");function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gf:switch(e=e.type,e){case Sl:case kl:case bl:case Ol:case Cl:return e;default:switch(e=e&&e.$$typeof,e){case SS:case Pl:case _l:case $l:case jl:case El:return e;default:return t}}case yf:return t}}}ne.ContextConsumer=Pl;ne.ContextProvider=El;ne.Element=gf;ne.ForwardRef=_l;ne.Fragment=Sl;ne.Lazy=$l;ne.Memo=jl;ne.Portal=yf;ne.Profiler=kl;ne.StrictMode=bl;ne.Suspense=Ol;ne.SuspenseList=Cl;ne.isAsyncMode=function(){return!1};ne.isConcurrentMode=function(){return!1};ne.isContextConsumer=function(e){return wt(e)===Pl};ne.isContextProvider=function(e){return wt(e)===El};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gf};ne.isForwardRef=function(e){return wt(e)===_l};ne.isFragment=function(e){return wt(e)===Sl};ne.isLazy=function(e){return wt(e)===$l};ne.isMemo=function(e){return wt(e)===jl};ne.isPortal=function(e){return wt(e)===yf};ne.isProfiler=function(e){return wt(e)===kl};ne.isStrictMode=function(e){return wt(e)===bl};ne.isSuspense=function(e){return wt(e)===Ol};ne.isSuspenseList=function(e){return wt(e)===Cl};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Sl||e===kl||e===bl||e===Ol||e===Cl||e===bS||typeof e=="object"&&e!==null&&(e.$$typeof===$l||e.$$typeof===jl||e.$$typeof===El||e.$$typeof===Pl||e.$$typeof===_l||e.$$typeof===Xy||e.getModuleId!==void 0)};ne.typeOf=wt;function kS(){const e=mS();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const yp={notify(){},get:()=>[]};function ES(e,t){let n,r=yp,o=0,i=!1;function a(m){f();const w=r.subscribe(m);let p=!1;return()=>{p||(p=!0,w(),c())}}function l(){r.notify()}function s(){g.onStateChange&&g.onStateChange()}function u(){return i}function f(){o++,n||(n=t?t.addNestedSub(s):e.subscribe(s),r=kS())}function c(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=yp)}function h(){i||(i=!0,f())}function v(){i&&(i=!1,c())}const g={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:u,trySubscribe:h,tryUnsubscribe:v,getListeners:()=>r};return g}const PS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_S=PS?b.useLayoutEffect:b.useEffect;function OS({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const a=b.useMemo(()=>{const u=ES(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),l=b.useMemo(()=>e.getState(),[e]);_S(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,l]);const s=t||Tn;return b.createElement(s.Provider,{value:a},n)}function Jy(e=Tn){const t=e===Tn?Qy:mf(e);return function(){const{store:r}=t();return r}}const CS=Jy();function jS(e=Tn){const t=e===Tn?CS:Jy(e);return function(){return t().dispatch}}const $S=jS();vS(dS.useSyncExternalStoreWithSelector);hS(hf.unstable_batchedUpdates);function Xi(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xi=function(n){return typeof n}:Xi=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xi(e)}function RS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function TS(e,t,n){return t&&vp(e.prototype,t),n&&vp(e,n),e}function NS(e,t){return t&&(Xi(t)==="object"||typeof t=="function")?t:Ji(e)}function Au(e){return Au=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Au(e)}function Ji(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function AS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Lu(e,t)}function Lu(e,t){return Lu=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Lu(e,t)}function Zi(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zy=function(e){AS(t,e);function t(){var n,r;RS(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=NS(this,(n=Au(t)).call.apply(n,[this].concat(i))),Zi(Ji(r),"state",{bootstrapped:!1}),Zi(Ji(r),"_unsubscribe",void 0),Zi(Ji(r),"handlePersistorState",function(){var l=r.props.persistor,s=l.getState(),u=s.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return TS(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(b.PureComponent);Zi(Zy,"defaultProps",{children:null,loading:null});function Ot(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Nn(e){return!!e&&!!e[se]}function nn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===WS}(e)||Array.isArray(e)||!!e[Pp]||!!(!((t=e.constructor)===null||t===void 0)&&t[Pp])||vf(e)||wf(e))}function Jn(e,t,n){n===void 0&&(n=!1),Br(e)===0?(n?Object.keys:Er)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function Br(e){var t=e[se];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:vf(e)?2:wf(e)?3:0}function kr(e,t){return Br(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function LS(e,t){return Br(e)===2?e.get(t):e[t]}function ev(e,t,n){var r=Br(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function tv(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function vf(e){return US&&e instanceof Map}function wf(e){return BS&&e instanceof Set}function Un(e){return e.o||e.t}function xf(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=rv(e);delete t[se];for(var n=Er(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Sf(e,t){return t===void 0&&(t=!1),bf(e)||Nn(e)||!nn(e)||(Br(e)>1&&(e.set=e.add=e.clear=e.delete=zS),Object.freeze(e),t&&Jn(e,function(n,r){return Sf(r,!0)},!0)),e}function zS(){Ot(2)}function bf(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Ft(e){var t=Mu[e];return t||Ot(18,e),t}function IS(e,t){Mu[e]||(Mu[e]=t)}function zu(){return Vo}function ys(e,t){t&&(Ft("Patches"),e.u=[],e.s=[],e.v=t)}function Ra(e){Iu(e),e.p.forEach(DS),e.p=null}function Iu(e){e===Vo&&(Vo=e.l)}function wp(e){return Vo={p:[],l:Vo,h:e,m:!0,_:0}}function DS(e){var t=e[se];t.i===0||t.i===1?t.j():t.g=!0}function vs(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Ft("ES5").S(t,e,r),r?(n[se].P&&(Ra(t),Ot(4)),nn(e)&&(e=Ta(t,e),t.l||Na(t,e)),t.u&&Ft("Patches").M(n[se].t,e,t.u,t.s)):e=Ta(t,n,[]),Ra(t),t.u&&t.v(t.u,t.s),e!==nv?e:void 0}function Ta(e,t,n){if(bf(t))return t;var r=t[se];if(!r)return Jn(t,function(l,s){return xp(e,r,t,l,s,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Na(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=xf(r.k):r.o,i=o,a=!1;r.i===3&&(i=new Set(o),o.clear(),a=!0),Jn(i,function(l,s){return xp(e,r,o,l,s,n,a)}),Na(e,o,!1),n&&e.u&&Ft("Patches").N(r,n,e.u,e.s)}return r.o}function xp(e,t,n,r,o,i,a){if(Nn(o)){var l=Ta(e,o,i&&t&&t.i!==3&&!kr(t.R,r)?i.concat(r):void 0);if(ev(n,r,l),!Nn(l))return;e.m=!1}else a&&n.add(o);if(nn(o)&&!bf(o)){if(!e.h.D&&e._<1)return;Ta(e,o),t&&t.A.l||Na(e,o)}}function Na(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Sf(t,n)}function ws(e,t){var n=e[se];return(n?Un(n):e)[t]}function Sp(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function hn(e){e.P||(e.P=!0,e.l&&hn(e.l))}function xs(e){e.o||(e.o=xf(e.t))}function Du(e,t,n){var r=vf(t)?Ft("MapSet").F(t,n):wf(t)?Ft("MapSet").T(t,n):e.O?function(o,i){var a=Array.isArray(o),l={i:a?1:0,A:i?i.A:zu(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},s=l,u=Go;a&&(s=[l],u=co);var f=Proxy.revocable(s,u),c=f.revoke,h=f.proxy;return l.k=h,l.j=c,h}(t,n):Ft("ES5").J(t,n);return(n?n.A:zu()).p.push(r),r}function MS(e){return Nn(e)||Ot(22,e),function t(n){if(!nn(n))return n;var r,o=n[se],i=Br(n);if(o){if(!o.P&&(o.i<4||!Ft("ES5").K(o)))return o.t;o.I=!0,r=bp(n,i),o.I=!1}else r=bp(n,i);return Jn(r,function(a,l){o&&LS(o.t,a)===l||ev(r,a,t(l))}),i===3?new Set(r):r}(e)}function bp(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return xf(e)}function FS(){function e(i,a){var l=o[i];return l?l.enumerable=a:o[i]=l={configurable:!0,enumerable:a,get:function(){var s=this[se];return Go.get(s,i)},set:function(s){var u=this[se];Go.set(u,i,s)}},l}function t(i){for(var a=i.length-1;a>=0;a--){var l=i[a][se];if(!l.P)switch(l.i){case 5:r(l)&&hn(l);break;case 4:n(l)&&hn(l)}}}function n(i){for(var a=i.t,l=i.k,s=Er(l),u=s.length-1;u>=0;u--){var f=s[u];if(f!==se){var c=a[f];if(c===void 0&&!kr(a,f))return!0;var h=l[f],v=h&&h[se];if(v?v.t!==c:!tv(h,c))return!0}}var g=!!a[se];return s.length!==Er(a).length+(g?0:1)}function r(i){var a=i.k;if(a.length!==i.t.length)return!0;var l=Object.getOwnPropertyDescriptor(a,a.length-1);if(l&&!l.get)return!0;for(var s=0;s<a.length;s++)if(!a.hasOwnProperty(s))return!0;return!1}var o={};IS("ES5",{J:function(i,a){var l=Array.isArray(i),s=function(f,c){if(f){for(var h=Array(c.length),v=0;v<c.length;v++)Object.defineProperty(h,""+v,e(v,!0));return h}var g=rv(c);delete g[se];for(var m=Er(g),w=0;w<m.length;w++){var p=m[w];g[p]=e(p,f||!!g[p].enumerable)}return Object.create(Object.getPrototypeOf(c),g)}(l,i),u={i:l?5:4,A:a?a.A:zu(),P:!1,I:!1,R:{},l:a,t:i,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,se,{value:u,writable:!0}),s},S:function(i,a,l){l?Nn(a)&&a[se].A===i&&t(i.p):(i.u&&function s(u){if(u&&typeof u=="object"){var f=u[se];if(f){var c=f.t,h=f.k,v=f.R,g=f.i;if(g===4)Jn(h,function(y){y!==se&&(c[y]!==void 0||kr(c,y)?v[y]||s(h[y]):(v[y]=!0,hn(f)))}),Jn(c,function(y){h[y]!==void 0||kr(h,y)||(v[y]=!1,hn(f))});else if(g===5){if(r(f)&&(hn(f),v.length=!0),h.length<c.length)for(var m=h.length;m<c.length;m++)v[m]=!1;else for(var w=c.length;w<h.length;w++)v[w]=!0;for(var p=Math.min(h.length,c.length),d=0;d<p;d++)h.hasOwnProperty(d)||(v[d]=!0),v[d]===void 0&&s(h[d])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var kp,Vo,kf=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",US=typeof Map<"u",BS=typeof Set<"u",Ep=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",nv=kf?Symbol.for("immer-nothing"):((kp={})["immer-nothing"]=!0,kp),Pp=kf?Symbol.for("immer-draftable"):"__$immer_draftable",se=kf?Symbol.for("immer-state"):"__$immer_state",WS=""+Object.prototype.constructor,Er=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,rv=Object.getOwnPropertyDescriptors||function(e){var t={};return Er(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Mu={},Go={get:function(e,t){if(t===se)return e;var n=Un(e);if(!kr(n,t))return function(o,i,a){var l,s=Sp(i,a);return s?"value"in s?s.value:(l=s.get)===null||l===void 0?void 0:l.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!nn(r)?r:r===ws(e.t,t)?(xs(e),e.o[t]=Du(e.A.h,r,e)):r},has:function(e,t){return t in Un(e)},ownKeys:function(e){return Reflect.ownKeys(Un(e))},set:function(e,t,n){var r=Sp(Un(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=ws(Un(e),t),i=o==null?void 0:o[se];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(tv(n,o)&&(n!==void 0||kr(e.t,t)))return!0;xs(e),hn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return ws(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,xs(e),hn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Un(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ot(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ot(12)}},co={};Jn(Go,function(e,t){co[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),co.deleteProperty=function(e,t){return co.set.call(this,e,t,void 0)},co.set=function(e,t,n){return Go.set.call(this,e[0],t,n,e[0])};var HS=function(){function e(n){var r=this;this.O=Ep,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var l=i;i=o;var s=r;return function(m){var w=this;m===void 0&&(m=l);for(var p=arguments.length,d=Array(p>1?p-1:0),y=1;y<p;y++)d[y-1]=arguments[y];return s.produce(m,function(S){var E;return(E=i).call.apply(E,[w,S].concat(d))})}}var u;if(typeof i!="function"&&Ot(6),a!==void 0&&typeof a!="function"&&Ot(7),nn(o)){var f=wp(r),c=Du(r,o,void 0),h=!0;try{u=i(c),h=!1}finally{h?Ra(f):Iu(f)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return ys(f,a),vs(m,f)},function(m){throw Ra(f),m}):(ys(f,a),vs(u,f))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===nv&&(u=void 0),r.D&&Sf(u,!0),a){var v=[],g=[];Ft("Patches").M(o,u,v,g),a(v,g)}return u}Ot(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var f=arguments.length,c=Array(f>1?f-1:0),h=1;h<f;h++)c[h-1]=arguments[h];return r.produceWithPatches(u,function(v){return o.apply(void 0,[v].concat(c))})};var a,l,s=r.produce(o,i,function(u,f){a=u,l=f});return typeof Promise<"u"&&s instanceof Promise?s.then(function(u){return[u,a,l]}):[s,a,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){nn(n)||Ot(8),Nn(n)&&(n=MS(n));var r=wp(this),o=Du(this,n,void 0);return o[se].C=!0,Iu(r),o},t.finishDraft=function(n,r){var o=n&&n[se],i=o.A;return ys(i,r),vs(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Ep&&Ot(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var a=Ft("Patches").$;return Nn(n)?a(n,r):this.produce(n,function(l){return a(l,r)})},e}(),st=new HS,ov=st.produce;st.produceWithPatches.bind(st);st.setAutoFreeze.bind(st);st.setUseProxies.bind(st);st.applyPatches.bind(st);st.createDraft.bind(st);st.finishDraft.bind(st);function Ko(e){"@babel/helpers - typeof";return Ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ko(e)}function VS(e,t){if(Ko(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ko(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function GS(e){var t=VS(e,"string");return Ko(t)=="symbol"?t:String(t)}function KS(e,t,n){return t=GS(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Op(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_p(Object(n),!0).forEach(function(r){KS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_p(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ue(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Cp=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ss=function(){return Math.random().toString(36).substring(7).split("").join(".")},Aa={INIT:"@@redux/INIT"+Ss(),REPLACE:"@@redux/REPLACE"+Ss(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ss()}};function QS(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ef(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ue(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ue(1));return n(Ef)(e,t)}if(typeof e!="function")throw new Error(Ue(2));var o=e,i=t,a=[],l=a,s=!1;function u(){l===a&&(l=a.slice())}function f(){if(s)throw new Error(Ue(3));return i}function c(m){if(typeof m!="function")throw new Error(Ue(4));if(s)throw new Error(Ue(5));var w=!0;return u(),l.push(m),function(){if(w){if(s)throw new Error(Ue(6));w=!1,u();var d=l.indexOf(m);l.splice(d,1),a=null}}}function h(m){if(!QS(m))throw new Error(Ue(7));if(typeof m.type>"u")throw new Error(Ue(8));if(s)throw new Error(Ue(9));try{s=!0,i=o(i,m)}finally{s=!1}for(var w=a=l,p=0;p<w.length;p++){var d=w[p];d()}return m}function v(m){if(typeof m!="function")throw new Error(Ue(10));o=m,h({type:Aa.REPLACE})}function g(){var m,w=c;return m={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(Ue(11));function y(){d.next&&d.next(f())}y();var S=w(y);return{unsubscribe:S}}},m[Cp]=function(){return this},m}return h({type:Aa.INIT}),r={dispatch:h,subscribe:c,getState:f,replaceReducer:v},r[Cp]=g,r}function YS(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Aa.INIT});if(typeof r>"u")throw new Error(Ue(12));if(typeof n(void 0,{type:Aa.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ue(13))})}function qS(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{YS(n)}catch(l){a=l}return function(s,u){if(s===void 0&&(s={}),a)throw a;for(var f=!1,c={},h=0;h<i.length;h++){var v=i[h],g=n[v],m=s[v],w=g(m,u);if(typeof w>"u")throw u&&u.type,new Error(Ue(14));c[v]=w,f=f||w!==m}return f=f||i.length!==Object.keys(s).length,f?c:s}}function La(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function XS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Ue(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},l=t.map(function(s){return s(a)});return i=La.apply(void 0,l)(o.dispatch),Op(Op({},o),{},{dispatch:i})}}}function iv(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(l){return typeof l=="function"?l(o,i,e):a(l)}}};return t}var av=iv();av.withExtraArgument=iv;const jp=av;var lv=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),JS=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(u){return function(f){return s([u,f])}}function s(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Ar=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},ZS=Object.defineProperty,eb=Object.defineProperties,tb=Object.getOwnPropertyDescriptors,$p=Object.getOwnPropertySymbols,nb=Object.prototype.hasOwnProperty,rb=Object.prototype.propertyIsEnumerable,Rp=function(e,t,n){return t in e?ZS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},_n=function(e,t){for(var n in t||(t={}))nb.call(t,n)&&Rp(e,n,t[n]);if($p)for(var r=0,o=$p(t);r<o.length;r++){var n=o[r];rb.call(t,n)&&Rp(e,n,t[n])}return e},bs=function(e,t){return eb(e,tb(t))},ob=function(e,t,n){return new Promise(function(r,o){var i=function(s){try{l(n.next(s))}catch(u){o(u)}},a=function(s){try{l(n.throw(s))}catch(u){o(u)}},l=function(s){return s.done?r(s.value):Promise.resolve(s.value).then(i,a)};l((n=n.apply(e,t)).next())})},ib=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?La:La.apply(null,arguments)};function ab(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function On(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return _n(_n({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var lb=function(e){lv(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ar([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ar([void 0],n.concat(this))))},t}(Array),sb=function(e){lv(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ar([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ar([void 0],n.concat(this))))},t}(Array);function Fu(e){return nn(e)?ov(e,function(){}):e}function ub(e){return typeof e=="boolean"}function cb(){return function(t){return fb(t)}}function fb(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new lb;return n&&(ub(n)?r.push(jp):r.push(jp.withExtraArgument(n.extraArgument))),r}var db=!0;function pb(e){var t=cb(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,a=i===void 0?t():i,l=n.devTools,s=l===void 0?!0:l,u=n.preloadedState,f=u===void 0?void 0:u,c=n.enhancers,h=c===void 0?void 0:c,v;if(typeof o=="function")v=o;else if(ab(o))v=qS(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=a;typeof g=="function"&&(g=g(t));var m=XS.apply(void 0,g),w=La;s&&(w=ib(_n({trace:!db},typeof s=="object"&&s)));var p=new sb(m),d=p;Array.isArray(h)?d=Ar([m],h):typeof h=="function"&&(d=h(p));var y=w.apply(void 0,d);return Ef(v,f,y)}function sv(e){var t={},n=[],r,o={addCase:function(i,a){var l=typeof i=="string"?i:i.type;if(!l)throw new Error("`builder.addCase` cannot be called with an empty action type");if(l in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[l]=a,o},addMatcher:function(i,a){return n.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function hb(e){return typeof e=="function"}function mb(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?sv(t):[t,n,r],i=o[0],a=o[1],l=o[2],s;if(hb(e))s=function(){return Fu(e())};else{var u=Fu(e);s=function(){return u}}function f(c,h){c===void 0&&(c=s());var v=Ar([i[h.type]],a.filter(function(g){var m=g.matcher;return m(h)}).map(function(g){var m=g.reducer;return m}));return v.filter(function(g){return!!g}).length===0&&(v=[l]),v.reduce(function(g,m){if(m)if(Nn(g)){var w=g,p=m(w,h);return p===void 0?g:p}else{if(nn(g))return ov(g,function(d){return m(d,h)});var p=m(g,h);if(p===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return g},c)}return f.getInitialState=s,f}function gb(e,t){return e+"/"+t}function yb(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Fu(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},a={},l={};o.forEach(function(f){var c=r[f],h=gb(t,f),v,g;"reducer"in c?(v=c.reducer,g=c.prepare):v=c,i[f]=v,a[h]=v,l[f]=g?On(h,g):On(h)});function s(){var f=typeof e.extraReducers=="function"?sv(e.extraReducers):[e.extraReducers],c=f[0],h=c===void 0?{}:c,v=f[1],g=v===void 0?[]:v,m=f[2],w=m===void 0?void 0:m,p=_n(_n({},h),a);return mb(n,function(d){for(var y in p)d.addCase(y,p[y]);for(var S=0,E=g;S<E.length;S++){var P=E[S];d.addMatcher(P.matcher,P.reducer)}w&&d.addDefaultCase(w)})}var u;return{name:t,reducer:function(f,c){return u||(u=s()),u(f,c)},actions:l,caseReducers:i,getInitialState:function(){return u||(u=s()),u.getInitialState()}}}var vb="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",wb=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=vb[Math.random()*64|0];return t},xb=["name","message","stack","code"],ks=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Tp=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Sb=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=xb;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},Wr=function(){function e(t,n,r){var o=On(t+"/fulfilled",function(u,f,c,h){return{payload:u,meta:bs(_n({},h||{}),{arg:c,requestId:f,requestStatus:"fulfilled"})}}),i=On(t+"/pending",function(u,f,c){return{payload:void 0,meta:bs(_n({},c||{}),{arg:f,requestId:u,requestStatus:"pending"})}}),a=On(t+"/rejected",function(u,f,c,h,v){return{payload:h,error:(r&&r.serializeError||Sb)(u||"Rejected"),meta:bs(_n({},v||{}),{arg:c,requestId:f,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),l=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function s(u){return function(f,c,h){var v=r!=null&&r.idGenerator?r.idGenerator(u):wb(),g=new l,m;function w(d){m=d,g.abort()}var p=function(){return ob(this,null,function(){var d,y,S,E,P,C,$;return JS(this,function(D){switch(D.label){case 0:return D.trys.push([0,4,,5]),E=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:c,extra:h}),kb(E)?[4,E]:[3,2];case 1:E=D.sent(),D.label=2;case 2:if(E===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return P=new Promise(function(I,le){return g.signal.addEventListener("abort",function(){return le({name:"AbortError",message:m||"Aborted"})})}),f(i(v,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:v,arg:u},{getState:c,extra:h}))),[4,Promise.race([P,Promise.resolve(n(u,{dispatch:f,getState:c,extra:h,requestId:v,signal:g.signal,abort:w,rejectWithValue:function(I,le){return new ks(I,le)},fulfillWithValue:function(I,le){return new Tp(I,le)}})).then(function(I){if(I instanceof ks)throw I;return I instanceof Tp?o(I.payload,v,u,I.meta):o(I,v,u)})])];case 3:return S=D.sent(),[3,5];case 4:return C=D.sent(),S=C instanceof ks?a(null,v,u,C.payload,C.meta):a(C,v,u),[3,5];case 5:return $=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,$||f(S),[2,S]}})})}();return Object.assign(p,{abort:w,requestId:v,arg:u,unwrap:function(){return p.then(bb)}})}}return Object.assign(s,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e}();function bb(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function kb(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Pf="listenerMiddleware";On(Pf+"/add");On(Pf+"/removeAll");On(Pf+"/remove");var Np;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);FS();var _f="persist:",Of="persist/FLUSH",Rl="persist/REHYDRATE",Cf="persist/PAUSE",jf="persist/PERSIST",$f="persist/PURGE",Rf="persist/REGISTER",Eb=-1;function ea(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ea=function(n){return typeof n}:ea=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ea(e)}function Ap(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Pb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ap(n,!0).forEach(function(r){_b(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ap(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ob(e,t,n,r){r.debug;var o=Pb({},n);return e&&ea(e)==="object"&&Object.keys(e).forEach(function(i){i!=="_persist"&&t[i]===n[i]&&(o[i]=e[i])}),o}function Cb(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],o=e.throttle||0,i="".concat(e.keyPrefix!==void 0?e.keyPrefix:_f).concat(e.key),a=e.storage,l;e.serialize===!1?l=function(E){return E}:typeof e.serialize=="function"?l=e.serialize:l=jb;var s=e.writeFailHandler||null,u={},f={},c=[],h=null,v=null,g=function(E){Object.keys(E).forEach(function(P){p(P)&&u[P]!==E[P]&&c.indexOf(P)===-1&&c.push(P)}),Object.keys(u).forEach(function(P){E[P]===void 0&&p(P)&&c.indexOf(P)===-1&&u[P]!==void 0&&c.push(P)}),h===null&&(h=setInterval(m,o)),u=E};function m(){if(c.length===0){h&&clearInterval(h),h=null;return}var S=c.shift(),E=r.reduce(function(P,C){return C.in(P,S,u)},u[S]);if(E!==void 0)try{f[S]=l(E)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete f[S];c.length===0&&w()}function w(){Object.keys(f).forEach(function(S){u[S]===void 0&&delete f[S]}),v=a.setItem(i,l(f)).catch(d)}function p(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function d(S){s&&s(S)}var y=function(){for(;c.length!==0;)m();return v||Promise.resolve()};return{update:g,flush:y}}function jb(e){return JSON.stringify(e)}function $b(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:_f).concat(e.key),r=e.storage;e.debug;var o;return e.deserialize===!1?o=function(a){return a}:typeof e.deserialize=="function"?o=e.deserialize:o=Rb,r.getItem(n).then(function(i){if(i)try{var a={},l=o(i);return Object.keys(l).forEach(function(s){a[s]=t.reduceRight(function(u,f){return f.out(u,s,l)},o(l[s]))}),a}catch(s){throw s}else return})}function Rb(e){return JSON.parse(e)}function Tb(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:_f).concat(e.key);return t.removeItem(n,Nb)}function Nb(e){}function Lp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Wt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lp(n,!0).forEach(function(r){Ab(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lp(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ab(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lb(e,t){if(e==null)return{};var n=zb(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zb(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Ib=5e3;function Db(e,t){var n=e.version!==void 0?e.version:Eb;e.debug;var r=e.stateReconciler===void 0?Ob:e.stateReconciler,o=e.getStoredState||$b,i=e.timeout!==void 0?e.timeout:Ib,a=null,l=!1,s=!0,u=function(c){return c._persist.rehydrated&&a&&!s&&a.update(c),c};return function(f,c){var h=f||{},v=h._persist,g=Lb(h,["_persist"]),m=g;if(c.type===jf){var w=!1,p=function($,D){w||(c.rehydrate(e.key,$,D),w=!0)};if(i&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},i),s=!1,a||(a=Cb(e)),v)return Wt({},t(m,c),{_persist:v});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),o(e).then(function(C){var $=e.migrate||function(D,I){return Promise.resolve(D)};$(C,n).then(function(D){p(D)},function(D){p(void 0,D)})},function(C){p(void 0,C)}),Wt({},t(m,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===$f)return l=!0,c.result(Tb(e)),Wt({},t(m,c),{_persist:v});if(c.type===Of)return c.result(a&&a.flush()),Wt({},t(m,c),{_persist:v});if(c.type===Cf)s=!0;else if(c.type===Rl){if(l)return Wt({},m,{_persist:Wt({},v,{rehydrated:!0})});if(c.key===e.key){var d=t(m,c),y=c.payload,S=r!==!1&&y!==void 0?r(y,f,d,e):d,E=Wt({},S,{_persist:Wt({},v,{rehydrated:!0})});return u(E)}}}if(!v)return t(f,c);var P=t(m,c);return P===m?f:u(Wt({},P,{_persist:v}))}}function zp(e){return Ub(e)||Fb(e)||Mb()}function Mb(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Fb(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Ub(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Ip(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Uu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ip(n,!0).forEach(function(r){Bb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ip(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var uv={registry:[],bootstrapped:!1},Wb=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:uv,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Rf:return Uu({},t,{registry:[].concat(zp(t.registry),[n.key])});case Rl:var r=t.registry.indexOf(n.key),o=zp(t.registry);return o.splice(r,1),Uu({},t,{registry:o,bootstrapped:o.length===0});default:return t}};function Hb(e,t,n){var r=n||!1,o=Ef(Wb,uv,t&&t.enhancer?t.enhancer:void 0),i=function(u){o.dispatch({type:Rf,key:u})},a=function(u,f,c){var h={type:Rl,payload:f,err:c,key:u};e.dispatch(h),o.dispatch(h),r&&l.getState().bootstrapped&&(r(),r=!1)},l=Uu({},o,{purge:function(){var u=[];return e.dispatch({type:$f,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:Of,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:Cf})},persist:function(){e.dispatch({type:jf,register:i,rehydrate:a})}});return t&&t.manualPersist||l.persist(),l}var Tf={},Nf={};Nf.__esModule=!0;Nf.default=Kb;function ta(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ta=function(n){return typeof n}:ta=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ta(e)}function Es(){}var Vb={getItem:Es,setItem:Es,removeItem:Es};function Gb(e){if((typeof self>"u"?"undefined":ta(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function Kb(e){var t="".concat(e,"Storage");return Gb(t)?self[t]:Vb}Tf.__esModule=!0;Tf.default=qb;var Qb=Yb(Nf);function Yb(e){return e&&e.__esModule?e:{default:e}}function qb(e){var t=(0,Qb.default)(e);return{getItem:function(r){return new Promise(function(o,i){o(t.getItem(r))})},setItem:function(r,o){return new Promise(function(i,a){i(t.setItem(r,o))})},removeItem:function(r){return new Promise(function(o,i){o(t.removeItem(r))})}}}var cv=void 0,Xb=Jb(Tf);function Jb(e){return e&&e.__esModule?e:{default:e}}var Zb=(0,Xb.default)("local");cv=Zb;function fv(e,t){return function(){return e.apply(t,arguments)}}const{toString:ek}=Object.prototype,{getPrototypeOf:Af}=Object,Tl=(e=>t=>{const n=ek.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ut=e=>(e=e.toLowerCase(),t=>Tl(t)===e),Nl=e=>t=>typeof t===e,{isArray:Hr}=Array,Qo=Nl("undefined");function tk(e){return e!==null&&!Qo(e)&&e.constructor!==null&&!Qo(e.constructor)&&gt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const dv=Ut("ArrayBuffer");function nk(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&dv(e.buffer),t}const rk=Nl("string"),gt=Nl("function"),pv=Nl("number"),Al=e=>e!==null&&typeof e=="object",ok=e=>e===!0||e===!1,na=e=>{if(Tl(e)!=="object")return!1;const t=Af(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ik=Ut("Date"),ak=Ut("File"),lk=Ut("Blob"),sk=Ut("FileList"),uk=e=>Al(e)&&gt(e.pipe),ck=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||gt(e.append)&&((t=Tl(e))==="formdata"||t==="object"&&gt(e.toString)&&e.toString()==="[object FormData]"))},fk=Ut("URLSearchParams"),dk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function li(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Hr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function hv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const mv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),gv=e=>!Qo(e)&&e!==mv;function Bu(){const{caseless:e}=gv(this)&&this||{},t={},n=(r,o)=>{const i=e&&hv(t,o)||o;na(t[i])&&na(r)?t[i]=Bu(t[i],r):na(r)?t[i]=Bu({},r):Hr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&li(arguments[r],n);return t}const pk=(e,t,n,{allOwnKeys:r}={})=>(li(t,(o,i)=>{n&&gt(o)?e[i]=fv(o,n):e[i]=o},{allOwnKeys:r}),e),hk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),mk=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},gk=(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Af(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},yk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},vk=e=>{if(!e)return null;if(Hr(e))return e;let t=e.length;if(!pv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},wk=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Af(Uint8Array)),xk=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Sk=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},bk=Ut("HTMLFormElement"),kk=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Dp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ek=Ut("RegExp"),yv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};li(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},Pk=e=>{yv(e,(t,n)=>{if(gt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(gt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_k=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Hr(e)?r(e):r(String(e).split(t)),n},Ok=()=>{},Ck=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ps="abcdefghijklmnopqrstuvwxyz",Mp="0123456789",vv={DIGIT:Mp,ALPHA:Ps,ALPHA_DIGIT:Ps+Ps.toUpperCase()+Mp},jk=(e=16,t=vv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function $k(e){return!!(e&&gt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Rk=e=>{const t=new Array(10),n=(r,o)=>{if(Al(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Hr(r)?[]:{};return li(r,(a,l)=>{const s=n(a,o+1);!Qo(s)&&(i[l]=s)}),t[o]=void 0,i}}return r};return n(e,0)},Tk=Ut("AsyncFunction"),Nk=e=>e&&(Al(e)||gt(e))&&gt(e.then)&&gt(e.catch),O={isArray:Hr,isArrayBuffer:dv,isBuffer:tk,isFormData:ck,isArrayBufferView:nk,isString:rk,isNumber:pv,isBoolean:ok,isObject:Al,isPlainObject:na,isUndefined:Qo,isDate:ik,isFile:ak,isBlob:lk,isRegExp:Ek,isFunction:gt,isStream:uk,isURLSearchParams:fk,isTypedArray:wk,isFileList:sk,forEach:li,merge:Bu,extend:pk,trim:dk,stripBOM:hk,inherits:mk,toFlatObject:gk,kindOf:Tl,kindOfTest:Ut,endsWith:yk,toArray:vk,forEachEntry:xk,matchAll:Sk,isHTMLForm:bk,hasOwnProperty:Dp,hasOwnProp:Dp,reduceDescriptors:yv,freezeMethods:Pk,toObjectSet:_k,toCamelCase:kk,noop:Ok,toFiniteNumber:Ck,findKey:hv,global:mv,isContextDefined:gv,ALPHABET:vv,generateString:jk,isSpecCompliantForm:$k,toJSONObject:Rk,isAsyncFn:Tk,isThenable:Nk};function G(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}O.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const wv=G.prototype,xv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{xv[e]={value:e}});Object.defineProperties(G,xv);Object.defineProperty(wv,"isAxiosError",{value:!0});G.from=(e,t,n,r,o,i)=>{const a=Object.create(wv);return O.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),G.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Ak=null;function Wu(e){return O.isPlainObject(e)||O.isArray(e)}function Sv(e){return O.endsWith(e,"[]")?e.slice(0,-2):e}function Fp(e,t,n){return e?e.concat(t).map(function(o,i){return o=Sv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Lk(e){return O.isArray(e)&&!e.some(Wu)}const zk=O.toFlatObject(O,{},null,function(t){return/^is[A-Z]/.test(t)});function Ll(e,t,n){if(!O.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=O.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,w){return!O.isUndefined(w[m])});const r=n.metaTokens,o=n.visitor||f,i=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(t);if(!O.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(O.isDate(g))return g.toISOString();if(!s&&O.isBlob(g))throw new G("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(g)||O.isTypedArray(g)?s&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,m,w){let p=g;if(g&&!w&&typeof g=="object"){if(O.endsWith(m,"{}"))m=r?m:m.slice(0,-2),g=JSON.stringify(g);else if(O.isArray(g)&&Lk(g)||(O.isFileList(g)||O.endsWith(m,"[]"))&&(p=O.toArray(g)))return m=Sv(m),p.forEach(function(y,S){!(O.isUndefined(y)||y===null)&&t.append(a===!0?Fp([m],S,i):a===null?m:m+"[]",u(y))}),!1}return Wu(g)?!0:(t.append(Fp(w,m,i),u(g)),!1)}const c=[],h=Object.assign(zk,{defaultVisitor:f,convertValue:u,isVisitable:Wu});function v(g,m){if(!O.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));c.push(g),O.forEach(g,function(p,d){(!(O.isUndefined(p)||p===null)&&o.call(t,p,O.isString(d)?d.trim():d,m,h))===!0&&v(p,m?m.concat(d):[d])}),c.pop()}}if(!O.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Up(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Lf(e,t){this._pairs=[],e&&Ll(e,this,t)}const bv=Lf.prototype;bv.append=function(t,n){this._pairs.push([t,n])};bv.toString=function(t){const n=t?function(r){return t.call(this,r,Up)}:Up;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Ik(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function kv(e,t,n){if(!t)return e;const r=n&&n.encode||Ik,o=n&&n.serialize;let i;if(o?i=o(t,n):i=O.isURLSearchParams(t)?t.toString():new Lf(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Dk{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){O.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Bp=Dk,Ev={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Mk=typeof URLSearchParams<"u"?URLSearchParams:Lf,Fk=typeof FormData<"u"?FormData:null,Uk=typeof Blob<"u"?Blob:null,Bk={isBrowser:!0,classes:{URLSearchParams:Mk,FormData:Fk,Blob:Uk},protocols:["http","https","file","blob","url","data"]},Pv=typeof window<"u"&&typeof document<"u",Wk=(e=>Pv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Hk=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vk=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Pv,hasStandardBrowserEnv:Wk,hasStandardBrowserWebWorkerEnv:Hk},Symbol.toStringTag,{value:"Module"})),zt={...Vk,...Bk};function Gk(e,t){return Ll(e,new zt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return zt.isNode&&O.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Kk(e){return O.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Qk(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function _v(e){function t(n,r,o,i){let a=n[i++];const l=Number.isFinite(+a),s=i>=n.length;return a=!a&&O.isArray(o)?o.length:a,s?(O.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!l):((!o[a]||!O.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&O.isArray(o[a])&&(o[a]=Qk(o[a])),!l)}if(O.isFormData(e)&&O.isFunction(e.entries)){const n={};return O.forEachEntry(e,(r,o)=>{t(Kk(r),o,n,0)}),n}return null}function Yk(e,t,n){if(O.isString(e))try{return(t||JSON.parse)(e),O.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const zf={transitional:Ev,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=O.isObject(t);if(i&&O.isHTMLForm(t)&&(t=new FormData(t)),O.isFormData(t))return o&&o?JSON.stringify(_v(t)):t;if(O.isArrayBuffer(t)||O.isBuffer(t)||O.isStream(t)||O.isFile(t)||O.isBlob(t))return t;if(O.isArrayBufferView(t))return t.buffer;if(O.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Gk(t,this.formSerializer).toString();if((l=O.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return Ll(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Yk(t)):t}],transformResponse:[function(t){const n=this.transitional||zf.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&O.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?G.from(l,G.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:zt.classes.FormData,Blob:zt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],e=>{zf.headers[e]={}});const If=zf,qk=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Xk=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&qk[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Wp=Symbol("internals");function oo(e){return e&&String(e).trim().toLowerCase()}function ra(e){return e===!1||e==null?e:O.isArray(e)?e.map(ra):String(e)}function Jk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Zk=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function _s(e,t,n,r,o){if(O.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!O.isString(t)){if(O.isString(r))return t.indexOf(r)!==-1;if(O.isRegExp(r))return r.test(t)}}function e2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function t2(e,t){const n=O.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class zl{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,s,u){const f=oo(s);if(!f)throw new Error("header name must be a non-empty string");const c=O.findKey(o,f);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||s]=ra(l))}const a=(l,s)=>O.forEach(l,(u,f)=>i(u,f,s));return O.isPlainObject(t)||t instanceof this.constructor?a(t,n):O.isString(t)&&(t=t.trim())&&!Zk(t)?a(Xk(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=oo(t),t){const r=O.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Jk(o);if(O.isFunction(n))return n.call(this,o,r);if(O.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=oo(t),t){const r=O.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||_s(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=oo(a),a){const l=O.findKey(r,a);l&&(!n||_s(r,r[l],l,n))&&(delete r[l],o=!0)}}return O.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||_s(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return O.forEach(this,(o,i)=>{const a=O.findKey(r,i);if(a){n[a]=ra(o),delete n[i];return}const l=t?e2(i):String(i).trim();l!==i&&delete n[i],n[l]=ra(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return O.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&O.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Wp]=this[Wp]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=oo(a);r[l]||(t2(o,a),r[l]=!0)}return O.isArray(t)?t.forEach(i):i(t),this}}zl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(zl.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});O.freezeMethods(zl);const qt=zl;function Os(e,t){const n=this||If,r=t||n,o=qt.from(r.headers);let i=r.data;return O.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Ov(e){return!!(e&&e.__CANCEL__)}function si(e,t,n){G.call(this,e??"canceled",G.ERR_CANCELED,t,n),this.name="CanceledError"}O.inherits(si,G,{__CANCEL__:!0});function n2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const r2=zt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];O.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),O.isString(r)&&a.push("path="+r),O.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function o2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function i2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Cv(e,t){return e&&!o2(t)?i2(e,t):t}const a2=zt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const l=O.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function l2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function s2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),f=r[i];a||(a=u),n[o]=s,r[o]=u;let c=i,h=0;for(;c!==o;)h+=n[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const v=f&&u-f;return v?Math.round(h*1e3/v):void 0}}function Hp(e,t){let n=0;const r=s2(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,l=i-n,s=r(l),u=i<=a;n=i;const f={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&u?(a-i)/s:void 0,event:o};f[t?"download":"upload"]=!0,e(f)}}const u2=typeof XMLHttpRequest<"u",c2=u2&&function(e){return new Promise(function(n,r){let o=e.data;const i=qt.from(e.headers).normalize();let{responseType:a,withXSRFToken:l}=e,s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let f;if(O.isFormData(o)){if(zt.hasStandardBrowserEnv||zt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[m,...w]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([m||"multipart/form-data",...w].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+w))}const h=Cv(e.baseURL,e.url);c.open(e.method.toUpperCase(),kv(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function v(){if(!c)return;const m=qt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};n2(function(y){n(y),u()},function(y){r(y),u()},p),c=null}if("onloadend"in c?c.onloadend=v:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(v)},c.onabort=function(){c&&(r(new G("Request aborted",G.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new G("Network Error",G.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Ev;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new G(w,p.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,e,c)),c=null},zt.hasStandardBrowserEnv&&(l&&O.isFunction(l)&&(l=l(e)),l||l!==!1&&a2(h))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&r2.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&O.forEach(i.toJSON(),function(w,p){c.setRequestHeader(p,w)}),O.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Hp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Hp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=m=>{c&&(r(!m||m.type?new si(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const g=l2(h);if(g&&zt.protocols.indexOf(g)===-1){r(new G("Unsupported protocol "+g+":",G.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Hu={http:Ak,xhr:c2};O.forEach(Hu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Vp=e=>`- ${e}`,f2=e=>O.isFunction(e)||e===null||e===!1,jv={getAdapter:e=>{e=O.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!f2(n)&&(r=Hu[(a=String(n)).toLowerCase()],r===void 0))throw new G(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(Vp).join(`
`):" "+Vp(i[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Hu};function Cs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new si(null,e)}function Gp(e){return Cs(e),e.headers=qt.from(e.headers),e.data=Os.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),jv.getAdapter(e.adapter||If.adapter)(e).then(function(r){return Cs(e),r.data=Os.call(e,e.transformResponse,r),r.headers=qt.from(r.headers),r},function(r){return Ov(r)||(Cs(e),r&&r.response&&(r.response.data=Os.call(e,e.transformResponse,r.response),r.response.headers=qt.from(r.response.headers))),Promise.reject(r)})}const Kp=e=>e instanceof qt?e.toJSON():e;function Lr(e,t){t=t||{};const n={};function r(u,f,c){return O.isPlainObject(u)&&O.isPlainObject(f)?O.merge.call({caseless:c},u,f):O.isPlainObject(f)?O.merge({},f):O.isArray(f)?f.slice():f}function o(u,f,c){if(O.isUndefined(f)){if(!O.isUndefined(u))return r(void 0,u,c)}else return r(u,f,c)}function i(u,f){if(!O.isUndefined(f))return r(void 0,f)}function a(u,f){if(O.isUndefined(f)){if(!O.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function l(u,f,c){if(c in t)return r(u,f);if(c in e)return r(void 0,u)}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,f)=>o(Kp(u),Kp(f),!0)};return O.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=s[f]||o,h=c(e[f],t[f],f);O.isUndefined(h)&&c!==l||(n[f]=h)}),n}const $v="1.6.2",Df={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Df[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Qp={};Df.transitional=function(t,n,r){function o(i,a){return"[Axios v"+$v+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new G(o(a," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!Qp[a]&&(Qp[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};function d2(e,t,n){if(typeof e!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const l=e[i],s=l===void 0||a(l,i,e);if(s!==!0)throw new G("option "+i+" must be "+s,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}}const Vu={assertOptions:d2,validators:Df},sn=Vu.validators;class za{constructor(t){this.defaults=t,this.interceptors={request:new Bp,response:new Bp}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Lr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Vu.assertOptions(r,{silentJSONParsing:sn.transitional(sn.boolean),forcedJSONParsing:sn.transitional(sn.boolean),clarifyTimeoutError:sn.transitional(sn.boolean)},!1),o!=null&&(O.isFunction(o)?n.paramsSerializer={serialize:o}:Vu.assertOptions(o,{encode:sn.function,serialize:sn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&O.merge(i.common,i[n.method]);i&&O.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=qt.concat(a,i);const l=[];let s=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(s=s&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let f,c=0,h;if(!s){const g=[Gp.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),h=g.length,f=Promise.resolve(n);c<h;)f=f.then(g[c++],g[c++]);return f}h=l.length;let v=n;for(c=0;c<h;){const g=l[c++],m=l[c++];try{v=g(v)}catch(w){m.call(this,w);break}}try{f=Gp.call(this,v)}catch(g){return Promise.reject(g)}for(c=0,h=u.length;c<h;)f=f.then(u[c++],u[c++]);return f}getUri(t){t=Lr(this.defaults,t);const n=Cv(t.baseURL,t.url);return kv(n,t.params,t.paramsSerializer)}}O.forEach(["delete","get","head","options"],function(t){za.prototype[t]=function(n,r){return this.request(Lr(r||{},{method:t,url:n,data:(r||{}).data}))}});O.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,l){return this.request(Lr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}za.prototype[t]=n(),za.prototype[t+"Form"]=n(!0)});const oa=za;class Mf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new si(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Mf(function(o){t=o}),cancel:t}}}const p2=Mf;function h2(e){return function(n){return e.apply(null,n)}}function m2(e){return O.isObject(e)&&e.isAxiosError===!0}const Gu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gu).forEach(([e,t])=>{Gu[t]=e});const g2=Gu;function Rv(e){const t=new oa(e),n=fv(oa.prototype.request,t);return O.extend(n,oa.prototype,t,{allOwnKeys:!0}),O.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Rv(Lr(e,o))},n}const xe=Rv(If);xe.Axios=oa;xe.CanceledError=si;xe.CancelToken=p2;xe.isCancel=Ov;xe.VERSION=$v;xe.toFormData=Ll;xe.AxiosError=G;xe.Cancel=xe.CanceledError;xe.all=function(t){return Promise.all(t)};xe.spread=h2;xe.isAxiosError=m2;xe.mergeConfig=Lr;xe.AxiosHeaders=qt;xe.formToJSON=e=>_v(O.isHTMLForm(e)?new FormData(e):e);xe.getAdapter=jv.getAdapter;xe.HttpStatusCode=g2;xe.default=xe;const rn=xe;rn.defaults.baseURL="https://watertracker-backend.onrender.com";const Ff={set(e){rn.defaults.headers.common.Authorization=`Bearer ${e}`},unset(){rn.defaults.headers.common.Authorization=""}},y2=async e=>{const{data:t}=await rn.post("/auth/register",e);return Ff.set(t.token),t},v2=async e=>{const{data:t}=await rn.post("/auth/login",e);return Ff.set(t.token),t},w2=async()=>{await rn.post("/auth/logout"),Ff.unset()},x2=async e=>{e.set(e);const{data:t}=await rn.get("/user/current");return t},S2=async e=>{const{data:{avatarURL:t}}=await rn.post("/user/avatar",e,{headers:{"Content-Type":"multipart/form-data"}});return t},b2=async e=>await rn.patch("/user/edit",e,{headers:{"Content-Type":"application/json"}}),k2=Wr("auth/register",async(e,{rejectWithValue:t})=>{try{return await y2(e)}catch(n){return t(n.message)}}),E2=Wr("auth/login",async(e,{rejectWithValue:t})=>{try{return await v2(e)}catch(n){return t(n.message)}}),Tv=Wr("auth/logout",async(e,{rejectWithValue:t})=>{try{await w2();return}catch(n){return t(n.message)}}),js=Wr("auth/refresh",async(e,{rejectWithValue:t,getState:n})=>{try{const{auth:{token:r}}=n();return await x2(r)}catch(r){return t(r.message)}},{condition:(e,{getState:t})=>{const{auth:{token:n}}=t();if(!n)return!1}}),P2=Wr("user/avatar",async(e,{rejectWithValue:t})=>{try{return await S2(e)}catch(n){return t(n.message)}}),_2=Wr("user/edit",async(e,{rejectWithValue:t})=>{try{return await b2(e)}catch(n){return t(n.message)}}),O2=(e,{payload:t})=>{e.user=t},C2=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},j2=e=>{},$2=(e,{payload:t})=>{e.user=t,e.isRefreshing=!1,e.isLoggedIn=!0},R2=e=>{e.isRefreshing=!0},T2=e=>{e.isRefreshing=!1},N2=(e,{payload:t})=>{e.user.avatarURL=t},A2=(e,{payload:t})=>{e.user=t},L2={user:{email:"",avatarURL:"",userName:"",gender:"",waterRate:""},token:null,isLoggedIn:!1,isRefreshing:!1},z2=yb({name:"auth",initialState:L2,extraReducers:e=>{e.addCase(k2.fulfilled,O2).addCase(E2.fulfilled,C2).addCase(Tv.fulfilled,j2).addCase(P2.fulfilled,N2).addCase(js.fulfilled,$2).addCase(_2.fulfilled,A2).addCase(js.pending,R2).addCase(js.rejected,T2)}}),I2=z2.reducer,D2={key:"auth",storage:cv,whitelist:["token"]},Nv=pb({reducer:{auth:Db(D2,I2)},middleware:e=>e({serializableCheck:{ignoredActions:[Of,Rl,Cf,jf,$f,Rf]}})}),M2=Hb(Nv);var Av={};const F2=f0(H1);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=F2;function n(){var a=r([`
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
`]);return n=function(){return a},a}function r(a,l){return l||(l=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(l)}}))}var o=(0,t.css)(n()),i=o;e.default=i})(Av);const U2=Ba(Av),Ku={color:{black:"#2F2F2F",white:"#FFFFFF",accent:"#407BFF",secondaryWhite:"#ecf2ff",secondaryRed:"#ef5050",secondaryLightBlue:"#9ebbff",secondaryYellow:"#ff9d43",secondaryPowderBlue:"#d7e3ff"},breakpoint:{mobile:"320px",tablet:"768px",desktop:"1440px"},transition:{main:"250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",modal:"300ms ease-in-out"},boxShadowforButton:{normalButton:"0 4px 8px rgba(64, 123, 255, 0.34)",hoverButton:"0 4px 14px rgba(64, 123, 255, 0.54)",activeButton:"none"},modalBoxShadow:{modal:"0 4px 14px rgba(64, 123, 255, 0.3)"}},B2="/water-tracker/assets/Roboto-Regular-4e147ab6.ttf",W2="/water-tracker/assets/Roboto-Medium-9d0d55a3.ttf",H2="/water-tracker/assets/Roboto-Bold-ec685a46.ttf",V2=bc`
  ${U2}

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
    src: url(${B2}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url(${W2}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: url(${H2}) format('truetype');
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
    color: ${Ku.color.black};
    background-color: ${Ku.color.white};
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
`;var Lv={exports:{}},G2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",K2=G2,Q2=K2;function zv(){}function Iv(){}Iv.resetWarningCache=zv;var Y2=function(){function e(r,o,i,a,l,s){if(s!==Q2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Iv,resetWarningCache:zv};return n.PropTypes=n,n};Lv.exports=Y2();var q2=Lv.exports;const fo=Ba(q2);var X2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Qu=jm(function(e){return X2.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),J2=Qu,Z2=function(t){return t!=="theme"},Yp=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?J2:Z2},qp=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},eE=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return rl(n,r,o),wc(function(){return ol(n,r,o)}),null},tE=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var l=qp(t,n,r),s=l||Yp(o),u=!s("as");return function(){var f=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&c.push("label:"+i+";"),f[0]==null||f[0].raw===void 0)c.push.apply(c,f);else{c.push(f[0][0]);for(var h=f.length,v=1;v<h;v++)c.push(f[v],f[0][v])}var g=ni(function(m,w,p){var d=u&&m.as||o,y="",S=[],E=m;if(m.theme==null){E={};for(var P in m)E[P]=m[P];E.theme=b.useContext(Xt)}typeof m.className=="string"?y=vc(w.registered,S,m.className):m.className!=null&&(y=m.className+" ");var C=ti(c.concat(S),w.registered,E);y+=w.key+"-"+C.name,a!==void 0&&(y+=" "+a);var $=u&&l===void 0?Yp(d):s,D={};for(var I in m)u&&I==="as"||$(I)&&(D[I]=m[I]);return D.className=y,D.ref=p,b.createElement(b.Fragment,null,b.createElement(eE,{cache:w,serialized:C,isStringTag:typeof d=="string"}),b.createElement(d,D))});return g.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=o,g.__emotion_styles=c,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(m,w){return e(m,_o({},n,w,{shouldForwardProp:qp(g,w,!0)})).apply(void 0,c)},g}},nE=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],_=tE.bind();nE.forEach(function(e){_[e]=_(e)});const rE=_.div`
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
`,Dv=_.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 280px;
  max-height: 90vh;
  background: ${e=>e.theme.color.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all ${e=>e.theme.transition.modal};
  overflow: auto;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    min-width: 704px;
  }

  /* @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    max-width: 544px;
  } */
`,oE=_.div`
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
`,iE=_.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,aE=_.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.color.accent};

  &:hover,
  &:focus {
    stroke: ${e=>e.theme.color.secondaryYellow};
  }
`,Pt="/water-tracker/assets/sprite-45727ddf.svg",Il=({onShow:e=!0,children:t,title:n,onClose:r})=>{const o=document.querySelector("#modal-root"),i=b.useRef(null),a=b.useRef(null);return b.useEffect(()=>{const l=u=>{document.body.style.overflow=u?"hidden":"auto"};(e||o.children.length!==0)&&l(!0);const s=u=>{u.code==="Escape"&&r()};return window.addEventListener("keydown",s),()=>{l(!1),window.removeEventListener("keydown",s)}},[o.children.length,e,r]),hf.createPortal(x.jsx(rE,{onClick:r,ref:a,children:x.jsxs(Dv,{onClick:l=>l.stopPropagation(),ref:i,children:[x.jsxs(oE,{children:[x.jsx("h2",{children:n}),x.jsx(iE,{onClick:r,children:x.jsx(aE,{children:x.jsx("use",{href:`${Pt}#icon-outline`})})})]}),x.jsx("div",{children:t})]})}),o)};Il.propTypes={onClose:fo.func.isRequired,children:fo.node.isRequired,onShow:fo.bool,title:fo.string.isRequired};const lE=_.div`
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
`;var sE=function(e){return{display:e?"flex":"none"}},uE="#4fa94d",cE={"aria-busy":!0,role:"status"},Xp=globalThis&&globalThis.__assign||function(){return Xp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Xp.apply(this,arguments)},Jp=globalThis&&globalThis.__assign||function(){return Jp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Jp.apply(this,arguments)},Zp=globalThis&&globalThis.__assign||function(){return Zp=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Zp.apply(this,arguments)},eh=globalThis&&globalThis.__assign||function(){return eh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},eh.apply(this,arguments)},th=globalThis&&globalThis.__assign||function(){return th=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},th.apply(this,arguments)},nh=globalThis&&globalThis.__assign||function(){return nh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},nh.apply(this,arguments)},rh=globalThis&&globalThis.__assign||function(){return rh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},rh.apply(this,arguments)};function fE(e){function t(N,A,L,U,k){for(var V=0,T=0,pe=0,X=0,Z,W,Ce=0,Ye=0,Q,Ie=Q=Z=0,J=0,je=0,Kr=0,$e=0,pi=L.length,Qr=pi-1,xt,B="",ge="",Ul="",Bl="",an;J<pi;){if(W=L.charCodeAt(J),J===Qr&&T+X+pe+V!==0&&(T!==0&&(W=T===47?10:47),X=pe=V=0,pi++,Qr++),T+X+pe+V===0){if(J===Qr&&(0<je&&(B=B.replace(h,"")),0<B.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:B+=L.charAt(J)}W=59}switch(W){case 123:for(B=B.trim(),Z=B.charCodeAt(0),Q=1,$e=++J;J<pi;){switch(W=L.charCodeAt(J)){case 123:Q++;break;case 125:Q--;break;case 47:switch(W=L.charCodeAt(J+1)){case 42:case 47:e:{for(Ie=J+1;Ie<Qr;++Ie)switch(L.charCodeAt(Ie)){case 47:if(W===42&&L.charCodeAt(Ie-1)===42&&J+2!==Ie){J=Ie+1;break e}break;case 10:if(W===47){J=Ie+1;break e}}J=Ie}}break;case 91:W++;case 40:W++;case 34:case 39:for(;J++<Qr&&L.charCodeAt(J)!==W;);}if(Q===0)break;J++}switch(Q=L.substring($e,J),Z===0&&(Z=(B=B.replace(c,"").trim()).charCodeAt(0)),Z){case 64:switch(0<je&&(B=B.replace(h,"")),W=B.charCodeAt(1),W){case 100:case 109:case 115:case 45:je=A;break;default:je=Bt}if(Q=t(A,je,Q,W,k+1),$e=Q.length,0<R&&(je=n(Bt,B,Kr),an=l(3,Q,je,A,Oe,Se,$e,W,k,U),B=je.join(""),an!==void 0&&($e=(Q=an.trim()).length)===0&&(W=0,Q="")),0<$e)switch(W){case 115:B=B.replace(P,a);case 100:case 109:case 45:Q=B+"{"+Q+"}";break;case 107:B=B.replace(d,"$1 $2"),Q=B+"{"+Q+"}",Q=ze===1||ze===2&&i("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=B+Q,U===112&&(Q=(ge+=Q,""))}else Q="";break;default:Q=t(A,n(A,B,Kr),Q,U,k+1)}Ul+=Q,Q=Kr=je=Ie=Z=0,B="",W=L.charCodeAt(++J);break;case 125:case 59:if(B=(0<je?B.replace(h,""):B).trim(),1<($e=B.length))switch(Ie===0&&(Z=B.charCodeAt(0),Z===45||96<Z&&123>Z)&&($e=(B=B.replace(" ",":")).length),0<R&&(an=l(1,B,A,N,Oe,Se,ge.length,U,k,U))!==void 0&&($e=(B=an.trim()).length)===0&&(B="\0\0"),Z=B.charCodeAt(0),W=B.charCodeAt(1),Z){case 0:break;case 64:if(W===105||W===99){Bl+=B+L.charAt(J);break}default:B.charCodeAt($e-1)!==58&&(ge+=o(B,Z,W,B.charCodeAt(2)))}Kr=je=Ie=Z=0,B="",W=L.charCodeAt(++J)}}switch(W){case 13:case 10:T===47?T=0:1+Z===0&&U!==107&&0<B.length&&(je=1,B+="\0"),0<R*F&&l(0,B,A,N,Oe,Se,ge.length,U,k,U),Se=1,Oe++;break;case 59:case 125:if(T+X+pe+V===0){Se++;break}default:switch(Se++,xt=L.charAt(J),W){case 9:case 32:if(X+V+T===0)switch(Ce){case 44:case 58:case 9:case 32:xt="";break;default:W!==32&&(xt=" ")}break;case 0:xt="\\0";break;case 12:xt="\\f";break;case 11:xt="\\v";break;case 38:X+T+V===0&&(je=Kr=1,xt="\f"+xt);break;case 108:if(X+T+V+nt===0&&0<Ie)switch(J-Ie){case 2:Ce===112&&L.charCodeAt(J-3)===58&&(nt=Ce);case 8:Ye===111&&(nt=Ye)}break;case 58:X+T+V===0&&(Ie=J);break;case 44:T+pe+X+V===0&&(je=1,xt+="\r");break;case 34:case 39:T===0&&(X=X===W?0:X===0?W:X);break;case 91:X+T+pe===0&&V++;break;case 93:X+T+pe===0&&V--;break;case 41:X+T+V===0&&pe--;break;case 40:if(X+T+V===0){if(Z===0)switch(2*Ce+3*Ye){case 533:break;default:Z=1}pe++}break;case 64:T+pe+X+V+Ie+Q===0&&(Q=1);break;case 42:case 47:if(!(0<X+V+pe))switch(T){case 0:switch(2*W+3*L.charCodeAt(J+1)){case 235:T=47;break;case 220:$e=J,T=42}break;case 42:W===47&&Ce===42&&$e+2!==J&&(L.charCodeAt($e+2)===33&&(ge+=L.substring($e,J+1)),xt="",T=0)}}T===0&&(B+=xt)}Ye=Ce,Ce=W,J++}if($e=ge.length,0<$e){if(je=A,0<R&&(an=l(2,ge,je,N,Oe,Se,$e,U,k,U),an!==void 0&&(ge=an).length===0))return Bl+ge+Ul;if(ge=je.join(",")+"{"+ge+"}",ze*nt!==0){switch(ze!==2||i(ge,2)||(nt=0),nt){case 111:ge=ge.replace(S,":-moz-$1")+ge;break;case 112:ge=ge.replace(y,"::-webkit-input-$1")+ge.replace(y,"::-moz-$1")+ge.replace(y,":-ms-input-$1")+ge}nt=0}}return Bl+ge+Ul}function n(N,A,L){var U=A.trim().split(w);A=U;var k=U.length,V=N.length;switch(V){case 0:case 1:var T=0;for(N=V===0?"":N[0]+" ";T<k;++T)A[T]=r(N,A[T],L).trim();break;default:var pe=T=0;for(A=[];T<k;++T)for(var X=0;X<V;++X)A[pe++]=r(N[X]+" ",U[T],L).trim()}return A}function r(N,A,L){var U=A.charCodeAt(0);switch(33>U&&(U=(A=A.trim()).charCodeAt(0)),U){case 38:return A.replace(p,"$1"+N.trim());case 58:return N.trim()+A.replace(p,"$1"+N.trim());default:if(0<1*L&&0<A.indexOf("\f"))return A.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+A}function o(N,A,L,U){var k=N+";",V=2*A+3*L+4*U;if(V===944){N=k.indexOf(":",9)+1;var T=k.substring(N,k.length-1).trim();return T=k.substring(0,N).trim()+T+";",ze===1||ze===2&&i(T,1)?"-webkit-"+T+T:T}if(ze===0||ze===2&&!i(k,1))return k;switch(V){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(le,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return T=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+k+"-ms-flex-pack"+T+k;case 1005:return g.test(k)?k.replace(v,":-webkit-")+k.replace(v,":-moz-")+k:k;case 1e3:switch(T=k.substring(13).trim(),A=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(A)){case 226:T=k.replace(E,"tb");break;case 232:T=k.replace(E,"tb-rl");break;case 220:T=k.replace(E,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+T+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(A=(k=N).length-10,T=(k.charCodeAt(A)===33?k.substring(0,A):k).substring(N.indexOf(":",7)+1).trim(),V=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:k=k.replace(T,"-webkit-"+T)+";"+k;break;case 207:case 102:k=k.replace(T,"-webkit-"+(102<V?"inline-":"")+"box")+";"+k.replace(T,"-webkit-"+T)+";"+k.replace(T,"-ms-"+T+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return T=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+T+"-ms-flex-"+T+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace($,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace($,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if(I.test(N)===!0)return(T=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?o(N.replace("stretch","fill-available"),A,L,U).replace(":fill-available",":stretch"):k.replace(T,"-webkit-"+T)+k.replace(T,"-moz-"+T.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,L+U===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+k}return k}function i(N,A){var L=N.indexOf(A===1?":":"{"),U=N.substring(0,A!==3?L:10);return L=N.substring(L+1,N.length-1),M(A!==2?U:U.replace(D,"$1"),L,A)}function a(N,A){var L=o(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return L!==A+";"?L.replace(C," or ($1)").substring(4):"("+A+")"}function l(N,A,L,U,k,V,T,pe,X,Z){for(var W=0,Ce=A,Ye;W<R;++W)switch(Ye=He[W].call(f,N,Ce,L,U,k,V,T,pe,X,Z)){case void 0:case!1:case!0:case null:break;default:Ce=Ye}if(Ce!==A)return Ce}function s(N){switch(N){case void 0:case null:R=He.length=0;break;default:if(typeof N=="function")He[R++]=N;else if(typeof N=="object")for(var A=0,L=N.length;A<L;++A)s(N[A]);else F=!!N|0}return s}function u(N){return N=N.prefix,N!==void 0&&(M=null,N?typeof N!="function"?ze=1:(ze=2,M=N):ze=0),u}function f(N,A){var L=N;if(33>L.charCodeAt(0)&&(L=L.trim()),re=L,L=[re],0<R){var U=l(-1,A,L,L,Oe,Se,0,0,0,0);U!==void 0&&typeof U=="string"&&(A=U)}var k=t(Bt,L,A,0,0);return 0<R&&(U=l(-2,k,L,L,Oe,Se,k.length,0,0,0),U!==void 0&&(k=U)),re="",nt=0,Se=Oe=1,k}var c=/^\0+/g,h=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,m=/([,: ])(transform)/g,w=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,$=/-self|flex-/g,D=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,le=/([^-])(image-set\()/,Se=1,Oe=1,nt=0,ze=1,Bt=[],He=[],R=0,M=null,F=0,re="";return f.use=s,f.set=u,e!==void 0&&u(e),f}var dE={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Qt(){return(Qt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var oh=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Yu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!mc.typeOf(e)},Ia=Object.freeze([]),Cn=Object.freeze({});function Yo(e){return typeof e=="function"}function ih(e){return e.displayName||e.name||"Component"}function Uf(e){return e&&typeof e.styledComponentId=="string"}var zr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Bf=typeof window<"u"&&"HTMLElement"in window,pE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function ui(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var hE=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&ui(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,l=i;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),ia=new Map,Da=new Map,bo=1,Ti=function(e){if(ia.has(e))return ia.get(e);for(;Da.has(bo);)bo++;var t=bo++;return ia.set(e,t),Da.set(t,e),t},mE=function(e){return Da.get(e)},gE=function(e,t){t>=bo&&(bo=t+1),ia.set(e,t),Da.set(t,e)},yE="style["+zr+'][data-styled-version="5.3.11"]',vE=new RegExp("^"+zr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),wE=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},xE=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var l=a.match(vE);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(gE(u,s),wE(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},SE=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Mv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var f=s[u];if(f&&f.nodeType===1&&f.hasAttribute(zr))return f}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(zr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=SE();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},bE=function(){function e(n){var r=this.element=Mv(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var s=i[a];if(s.ownerNode===o)return s}ui(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),kE=function(){function e(n){var r=this.element=Mv(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),EE=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ah=Bf,PE={isServer:!Bf,useCSSOMInjection:!pE},Fv=function(){function e(n,r,o){n===void 0&&(n=Cn),r===void 0&&(r={}),this.options=Qt({},PE,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Bf&&ah&&(ah=!1,function(i){for(var a=document.querySelectorAll(yE),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(zr)!=="active"&&(xE(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ti(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Qt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new EE(a):i?new bE(a):new kE(a),new hE(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ti(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ti(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ti(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var l=mE(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var f=zr+".g"+a+'[id="'+l+'"]',c="";s!==void 0&&s.forEach(function(h){h.length>0&&(c+=h+",")}),i+=""+u+f+'{content:"'+c+`"}/*!sc*/
`}}}return i}(this)},e}(),_E=/(a)(d)/gi,lh=function(e){return String.fromCharCode(e+(e>25?39:97))};function qu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=lh(t%52)+n;return(lh(t%52)+n).replace(_E,"$1-$2")}var mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Uv=function(e){return mr(5381,e)};function OE(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yo(n)&&!Uf(n))return!1}return!0}var CE=Uv("5.3.11"),jE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&OE(t),this.componentId=n,this.baseHash=mr(CE,n),this.baseStyle=r,Fv.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Ir(this.rules,t,n,r).join(""),l=qu(mr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,l)){var s=r(a,"."+l,void 0,o);n.insertRules(o,l,s)}i.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,f=mr(this.baseHash,r.hash),c="",h=0;h<u;h++){var v=this.rules[h];if(typeof v=="string")c+=v;else if(v){var g=Ir(v,t,n,r),m=Array.isArray(g)?g.join(""):g;f=mr(f,m+h),c+=m}}if(c){var w=qu(f>>>0);if(!n.hasNameForId(o,w)){var p=r(c,"."+w,void 0,o);n.insertRules(o,w,p)}i.push(w)}}return i.join(" ")},e}(),$E=/^\s*\/\/.*$/gm,RE=[":","[",".","#"];function TE(e){var t,n,r,o,i=e===void 0?Cn:e,a=i.options,l=a===void 0?Cn:a,s=i.plugins,u=s===void 0?Ia:s,f=new fE(l),c=[],h=function(m){function w(p){if(p)try{m(p+"}")}catch{}}return function(p,d,y,S,E,P,C,$,D,I){switch(p){case 1:if(D===0&&d.charCodeAt(0)===64)return m(d+";"),"";break;case 2:if($===0)return d+"/*|*/";break;case 3:switch($){case 102:case 112:return m(y[0]+d),"";default:return d+(I===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(w)}}}(function(m){c.push(m)}),v=function(m,w,p){return w===0&&RE.indexOf(p[n.length])!==-1||p.match(o)?m:"."+t};function g(m,w,p,d){d===void 0&&(d="&");var y=m.replace($E,""),S=w&&p?p+" "+w+" { "+y+" }":y;return t=d,n=w,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),f(p||!w?"":w,S)}return f.use([].concat(u,[function(m,w,p){m===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,v))},h,function(m){if(m===-2){var w=c;return c=[],w}}])),g.hash=u.length?u.reduce(function(m,w){return w.name||ui(15),mr(m,w.name)},5381).toString():"",g}var Bv=Te.createContext();Bv.Consumer;var Wv=Te.createContext(),NE=(Wv.Consumer,new Fv),Xu=TE();function AE(){return b.useContext(Bv)||NE}function LE(){return b.useContext(Wv)||Xu}var Hv=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Xu);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return ui(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Xu),this.name+t.hash},e}(),zE=/([A-Z])/,IE=/([A-Z])/g,DE=/^ms-/,ME=function(e){return"-"+e.toLowerCase()};function sh(e){return zE.test(e)?e.replace(IE,ME).replace(DE,"-ms-"):e}var uh=function(e){return e==null||e===!1||e===""};function Ir(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,l=e.length;a<l;a+=1)(o=Ir(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(uh(e))return"";if(Uf(e))return"."+e.styledComponentId;if(Yo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Ir(s,t,n,r)}var u;return e instanceof Hv?n?(e.inject(n,r),e.getName(r)):e:Yu(e)?function f(c,h){var v,g,m=[];for(var w in c)c.hasOwnProperty(w)&&!uh(c[w])&&(Array.isArray(c[w])&&c[w].isCss||Yo(c[w])?m.push(sh(w)+":",c[w],";"):Yu(c[w])?m.push.apply(m,f(c[w],w)):m.push(sh(w)+": "+(v=w,(g=c[w])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in dE||v.startsWith("--")?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(m,["}"]):m}(e):e.toString()}var ch=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Vv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Yo(e)||Yu(e)?ch(Ir(oh(Ia,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ch(Ir(oh(e,n)))}var FE=function(e,t,n){return n===void 0&&(n=Cn),e.theme!==n.theme&&e.theme||t||n.theme},UE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,BE=/(^-|-$)/g;function $s(e){return e.replace(UE,"-").replace(BE,"")}var Gv=function(e){return qu(Uv(e)>>>0)};function Ni(e){return typeof e=="string"&&!0}var Ju=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},WE=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function HE(e,t,n){var r=e[n];Ju(t)&&Ju(r)?Kv(r,t):e[n]=t}function Kv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(Ju(a))for(var l in a)WE(l)&&HE(e,a[l],l)}return e}var Qv=Te.createContext();Qv.Consumer;var Rs={};function Yv(e,t,n){var r=Uf(e),o=!Ni(e),i=t.attrs,a=i===void 0?Ia:i,l=t.componentId,s=l===void 0?function(d,y){var S=typeof d!="string"?"sc":$s(d);Rs[S]=(Rs[S]||0)+1;var E=S+"-"+Gv("5.3.11"+S+Rs[S]);return y?y+"-"+E:E}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(d){return Ni(d)?"styled."+d:"Styled("+ih(d)+")"}(e):u,c=t.displayName&&t.componentId?$s(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(d,y,S){return e.shouldForwardProp(d,y,S)&&t.shouldForwardProp(d,y,S)}:e.shouldForwardProp);var g,m=new jE(n,c,r?e.componentStyle:void 0),w=m.isStatic&&a.length===0,p=function(d,y){return function(S,E,P,C){var $=S.attrs,D=S.componentStyle,I=S.defaultProps,le=S.foldedComponentIds,Se=S.shouldForwardProp,Oe=S.styledComponentId,nt=S.target,ze=function(U,k,V){U===void 0&&(U=Cn);var T=Qt({},k,{theme:U}),pe={};return V.forEach(function(X){var Z,W,Ce,Ye=X;for(Z in Yo(Ye)&&(Ye=Ye(T)),Ye)T[Z]=pe[Z]=Z==="className"?(W=pe[Z],Ce=Ye[Z],W&&Ce?W+" "+Ce:W||Ce):Ye[Z]}),[T,pe]}(FE(E,b.useContext(Qv),I)||Cn,E,$),Bt=ze[0],He=ze[1],R=function(U,k,V,T){var pe=AE(),X=LE(),Z=k?U.generateAndInjectStyles(Cn,pe,X):U.generateAndInjectStyles(V,pe,X);return Z}(D,C,Bt),M=P,F=He.$as||E.$as||He.as||E.as||nt,re=Ni(F),N=He!==E?Qt({},E,{},He):E,A={};for(var L in N)L[0]!=="$"&&L!=="as"&&(L==="forwardedAs"?A.as=N[L]:(Se?Se(L,Qu,F):!re||Qu(L))&&(A[L]=N[L]));return E.style&&He.style!==E.style&&(A.style=Qt({},E.style,{},He.style)),A.className=Array.prototype.concat(le,Oe,R!==Oe?R:null,E.className,He.className).filter(Boolean).join(" "),A.ref=M,b.createElement(F,A)}(g,d,y,w)};return p.displayName=f,(g=Te.forwardRef(p)).attrs=h,g.componentStyle=m,g.displayName=f,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ia,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(d){var y=t.componentId,S=function(P,C){if(P==null)return{};var $,D,I={},le=Object.keys(P);for(D=0;D<le.length;D++)$=le[D],C.indexOf($)>=0||(I[$]=P[$]);return I}(t,["componentId"]),E=y&&y+"-"+(Ni(d)?d:$s(ih(d)));return Yv(d,Qt({},S,{attrs:h,componentId:E}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?Kv({},e.defaultProps,d):d}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&Lm(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Zu=function(e){return function t(n,r,o){if(o===void 0&&(o=Cn),!mc.isValidElementType(r))return ui(1,String(r));var i=function(){return n(r,o,Vv.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Qt({},o,{},a))},i.attrs=function(a){return t(n,r,Qt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Yv,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Zu[e]=Zu(e)});function Wf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Vv.apply(void 0,[e].concat(n)).join(""),i=Gv(o);return new Hv(i,o)}const ci=Zu;var qv=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},bt=242.776657104492,VE=1.6,GE=Wf(fh||(fh=qv([`
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
`])),bt*.14,bt,bt*.11,bt*.35,bt,bt*.35,bt*.01,bt,bt*.99);ci.path(dh||(dh=qv([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),bt*.01,bt,GE,VE);var fh,dh,ph=globalThis&&globalThis.__assign||function(){return ph=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ph.apply(this,arguments)},hh=globalThis&&globalThis.__assign||function(){return hh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},hh.apply(this,arguments)},mh=globalThis&&globalThis.__assign||function(){return mh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},mh.apply(this,arguments)},gh=globalThis&&globalThis.__assign||function(){return gh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},gh.apply(this,arguments)},yh=globalThis&&globalThis.__assign||function(){return yh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},yh.apply(this,arguments)},vh=globalThis&&globalThis.__assign||function(){return vh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},vh.apply(this,arguments)},wh=globalThis&&globalThis.__assign||function(){return wh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},wh.apply(this,arguments)},KE=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var o=t.split("."),i=o.length,a=r[o[0]],l=1;a!=null&&l<i;)a=a[o[l]],l+=1;if(typeof a<"u")return a}return n}},Hf=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},xh=globalThis&&globalThis.__assign||function(){return xh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},xh.apply(this,arguments)},QE=Wf(Sh||(Sh=Hf([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));ci.svg(bh||(bh=Hf([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),QE,KE("speed","0.75"));ci.polyline(kh||(kh=Hf([`
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
`])),function(e){return e.width});var Sh,bh,kh,Eh=globalThis&&globalThis.__assign||function(){return Eh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Eh.apply(this,arguments)},Ph=globalThis&&globalThis.__assign||function(){return Ph=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ph.apply(this,arguments)},ko=globalThis&&globalThis.__assign||function(){return ko=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ko.apply(this,arguments)},YE=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,o=r===void 0?80:r,i=e.radius,a=i===void 0?9:i,l=e.color,s=l===void 0?uE:l,u=e.ariaLabel,f=u===void 0?"three-dots-loading":u,c=e.wrapperStyle,h=e.wrapperClass,v=e.visible,g=v===void 0?!0:v;return Te.createElement("div",ko({style:ko(ko({},sE(g)),c),className:h,"data-testid":"three-dots-loading","aria-label":f},cE),Te.createElement("svg",{width:o,height:n,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:s,"data-testid":"three-dots-svg"},Te.createElement("circle",{cx:"15",cy:"15",r:Number(a)+6},Te.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Te.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),Te.createElement("circle",{cx:"60",cy:"15",r:a,attributeName:"fill-opacity",from:"1",to:"0.3"},Te.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),Te.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),Te.createElement("circle",{cx:"105",cy:"15",r:Number(a)+6},Te.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Te.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))},Vf=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},_h=globalThis&&globalThis.__assign||function(){return _h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_h.apply(this,arguments)},qE=Wf(Oh||(Oh=Vf([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));ci.polygon(Ch||(Ch=Vf([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),qE);ci.svg(jh||(jh=Vf([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var Oh,Ch,jh,$h=globalThis&&globalThis.__assign||function(){return $h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},$h.apply(this,arguments)},Rh=globalThis&&globalThis.__assign||function(){return Rh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Rh.apply(this,arguments)},Th=globalThis&&globalThis.__assign||function(){return Th=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Th.apply(this,arguments)},Nh=globalThis&&globalThis.__assign||function(){return Nh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Nh.apply(this,arguments)},Ah=globalThis&&globalThis.__assign||function(){return Ah=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ah.apply(this,arguments)},Lh=globalThis&&globalThis.__assign||function(){return Lh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Lh.apply(this,arguments)},zh=globalThis&&globalThis.__assign||function(){return zh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},zh.apply(this,arguments)},Ih=globalThis&&globalThis.__assign||function(){return Ih=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ih.apply(this,arguments)},Dh=globalThis&&globalThis.__assign||function(){return Dh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Dh.apply(this,arguments)},Mh=globalThis&&globalThis.__assign||function(){return Mh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Mh.apply(this,arguments)},Fh=globalThis&&globalThis.__assign||function(){return Fh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Fh.apply(this,arguments)},Uh=globalThis&&globalThis.__assign||function(){return Uh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Uh.apply(this,arguments)},Bh=globalThis&&globalThis.__assign||function(){return Bh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Bh.apply(this,arguments)},Wh=globalThis&&globalThis.__assign||function(){return Wh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Wh.apply(this,arguments)};const XE=_.div`
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
`,Xv=()=>x.jsx(XE,{children:x.jsx(YE,{height:"90",width:"90",radius:"9",color:"#407bff",ariaLabel:"three-dots-loading",visible:!0,timeout:2e3})});/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Hh="popstate";function JE(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return ec("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ma(o)}return eP(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ZE(){return Math.random().toString(36).substr(2,8)}function Vh(e,t){return{usr:e.state,key:e.key,idx:t}}function ec(e,t,n,r){return n===void 0&&(n=null),qo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Vr(t):t,{state:n,key:t&&t.key||r||ZE()})}function Ma(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function eP(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=yn.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(qo({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){l=yn.Pop;let w=f(),p=w==null?null:w-u;u=w,s&&s({action:l,location:m.location,delta:p})}function h(w,p){l=yn.Push;let d=ec(m.location,w,p);n&&n(d,w),u=f()+1;let y=Vh(d,u),S=m.createHref(d);try{a.pushState(y,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(S)}i&&s&&s({action:l,location:m.location,delta:1})}function v(w,p){l=yn.Replace;let d=ec(m.location,w,p);n&&n(d,w),u=f();let y=Vh(d,u),S=m.createHref(d);a.replaceState(y,"",S),i&&s&&s({action:l,location:m.location,delta:0})}function g(w){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof w=="string"?w:Ma(w);return me(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let m={get action(){return l},get location(){return e(o,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Hh,c),s=w,()=>{o.removeEventListener(Hh,c),s=null}},createHref(w){return t(o,w)},createURL:g,encodeLocation(w){let p=g(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(w){return a.go(w)}};return m}var Gh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Gh||(Gh={}));function tP(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Vr(t):t,o=Xo(r.pathname||"/",n);if(o==null)return null;let i=Jv(e);nP(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=fP(i[l],pP(o));return a}function Jv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(me(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=jn([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(me(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jv(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:uP(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of Zv(i.path))o(i,a,s)}),t}function Zv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Zv(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function nP(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:cP(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rP=/^:\w+$/,oP=3,iP=2,aP=1,lP=10,sP=-2,Kh=e=>e==="*";function uP(e,t){let n=e.split("/"),r=n.length;return n.some(Kh)&&(r+=sP),t&&(r+=iP),n.filter(o=>!Kh(o)).reduce((o,i)=>o+(rP.test(i)?oP:i===""?aP:lP),r)}function cP(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function fP(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=tc({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let c=l.route;i.push({params:r,pathname:jn([o,f.pathname]),pathnameBase:vP(jn([o,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(o=jn([o,f.pathnameBase]))}return i}function tc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=dP(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:h,isOptional:v}=f;if(h==="*"){let m=l[c]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const g=l[c];return v&&!g?u[h]=void 0:u[h]=hP(g||"",h),u},{}),pathname:i,pathnameBase:a,pattern:e}}function dP(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Gf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function pP(e){try{return decodeURI(e)}catch(t){return Gf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hP(e,t){try{return decodeURIComponent(e)}catch(n){return Gf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Xo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mP(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Vr(e):e;return{pathname:n?n.startsWith("/")?n:gP(n,t):t,search:wP(r),hash:xP(o)}}function gP(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ts(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yP(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function e0(e,t){let n=yP(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function t0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Vr(e):(o=qo({},e),me(!o.pathname||!o.pathname.includes("?"),Ts("?","pathname","search",o)),me(!o.pathname||!o.pathname.includes("#"),Ts("#","pathname","hash",o)),me(!o.search||!o.search.includes("#"),Ts("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else if(r){let c=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),c.pop();o.pathname=h.join("/")}l="/"+c.join("/")}else{let c=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),c-=1;o.pathname=h.join("/")}l=c>=0?t[c]:"/"}let s=mP(o,l),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),vP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function SP(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const n0=["post","put","patch","delete"];new Set(n0);const bP=["get",...n0];new Set(bP);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(this,arguments)}const Dl=b.createContext(null),r0=b.createContext(null),In=b.createContext(null),Ml=b.createContext(null),Dn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),o0=b.createContext(null);function kP(e,t){let{relative:n}=t===void 0?{}:t;fi()||me(!1);let{basename:r,navigator:o}=b.useContext(In),{hash:i,pathname:a,search:l}=Fl(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:jn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function fi(){return b.useContext(Ml)!=null}function di(){return fi()||me(!1),b.useContext(Ml).location}function i0(e){b.useContext(In).static||b.useLayoutEffect(e)}function EP(){let{isDataRoute:e}=b.useContext(Dn);return e?MP():PP()}function PP(){fi()||me(!1);let e=b.useContext(Dl),{basename:t,future:n,navigator:r}=b.useContext(In),{matches:o}=b.useContext(Dn),{pathname:i}=di(),a=JSON.stringify(e0(o,n.v7_relativeSplatPath)),l=b.useRef(!1);return i0(()=>{l.current=!0}),b.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=t0(u,JSON.parse(a),i,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:jn([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,a,i,e])}const _P=b.createContext(null);function OP(e){let t=b.useContext(Dn).outlet;return t&&b.createElement(_P.Provider,{value:e},t)}function Fl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(In),{matches:o}=b.useContext(Dn),{pathname:i}=di(),a=JSON.stringify(e0(o,r.v7_relativeSplatPath));return b.useMemo(()=>t0(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function CP(e,t){return jP(e,t)}function jP(e,t,n,r){fi()||me(!1);let{navigator:o}=b.useContext(In),{matches:i}=b.useContext(Dn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=di(),f;if(t){var c;let w=typeof t=="string"?Vr(t):t;s==="/"||(c=w.pathname)!=null&&c.startsWith(s)||me(!1),f=w}else f=u;let h=f.pathname||"/",v=s==="/"?h:h.slice(s.length)||"/",g=tP(e,{pathname:v}),m=AP(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:jn([s,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:jn([s,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return t&&m?b.createElement(Ml.Provider,{value:{location:Jo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yn.Pop}},m):m}function $P(){let e=DP(),t=SP(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,i)}const RP=b.createElement($P,null);class TP extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Dn.Provider,{value:this.props.routeContext},b.createElement(o0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NP(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(Dl);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Dn.Provider,{value:t},r)}function AP(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let f=a.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id]));f>=0||me(!1),a=a.slice(0,Math.min(a.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.loader&&c.route.id&&n.loaderData[c.route.id]===void 0&&(!n.errors||n.errors[c.route.id]===void 0)){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}return a.reduceRight((f,c,h)=>{let v,g=!1,m=null,w=null;n&&(v=l&&c.route.id?l[c.route.id]:void 0,m=c.route.errorElement||RP,s&&(u<0&&h===0?(FP("route-fallback",!1),g=!0,w=null):u===h&&(g=!0,w=c.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,h+1)),d=()=>{let y;return v?y=m:g?y=w:c.route.Component?y=b.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=f,b.createElement(NP,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?b.createElement(TP,{location:n.location,revalidation:n.revalidation,component:m,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var a0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(a0||{}),Fa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fa||{});function LP(e){let t=b.useContext(Dl);return t||me(!1),t}function zP(e){let t=b.useContext(r0);return t||me(!1),t}function IP(e){let t=b.useContext(Dn);return t||me(!1),t}function l0(e){let t=IP(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function DP(){var e;let t=b.useContext(o0),n=zP(Fa.UseRouteError),r=l0(Fa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function MP(){let{router:e}=LP(a0.UseNavigateStable),t=l0(Fa.UseNavigateStable),n=b.useRef(!1);return i0(()=>{n.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Jo({fromRouteId:t},i)))},[e,t])}const Qh={};function FP(e,t,n){!t&&!Qh[e]&&(Qh[e]=!0)}function UP(e){return OP(e.context)}function un(e){me(!1)}function BP(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yn.Pop,navigator:i,static:a=!1,future:l}=e;fi()&&me(!1);let s=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:s,navigator:i,static:a,future:Jo({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=Vr(r));let{pathname:f="/",search:c="",hash:h="",state:v=null,key:g="default"}=r,m=b.useMemo(()=>{let w=Xo(f,s);return w==null?null:{location:{pathname:w,search:c,hash:h,state:v,key:g},navigationType:o}},[s,f,c,h,v,g,o]);return m==null?null:b.createElement(In.Provider,{value:u},b.createElement(Ml.Provider,{children:n,value:m}))}function WP(e){let{children:t,location:n}=e;return CP(nc(t),n)}new Promise(()=>{});function nc(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,o)=>{if(!b.isValidElement(r))return;let i=[...t,o];if(r.type===b.Fragment){n.push.apply(n,nc(r.props.children,i));return}r.type!==un&&me(!1),!r.props.index||!r.props.children||me(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=nc(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ua.apply(this,arguments)}function s0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function HP(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function VP(e,t){return e.button===0&&(!t||t==="_self")&&!HP(e)}const GP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],KP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],QP=b.createContext({isTransitioning:!1}),YP="startTransition",Yh=Is[YP];function qP(e){let{basename:t,children:n,future:r,window:o}=e,i=b.useRef();i.current==null&&(i.current=JE({window:o,v5Compat:!0}));let a=i.current,[l,s]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=b.useCallback(c=>{u&&Yh?Yh(()=>s(c)):s(c)},[s,u]);return b.useLayoutEffect(()=>a.listen(f),[a,f]),b.createElement(BP,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const XP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ZP=b.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,h=s0(t,GP),{basename:v}=b.useContext(In),g,m=!1;if(typeof u=="string"&&JP.test(u)&&(g=u,XP))try{let y=new URL(window.location.href),S=u.startsWith("//")?new URL(y.protocol+u):new URL(u),E=Xo(S.pathname,v);S.origin===y.origin&&E!=null?u=E+S.search+S.hash:m=!0}catch{}let w=kP(u,{relative:o}),p=t_(u,{replace:a,state:l,target:s,preventScrollReset:f,relative:o,unstable_viewTransition:c});function d(y){r&&r(y),y.defaultPrevented||p(y)}return b.createElement("a",Ua({},h,{href:g||w,onClick:m||i?r:d,ref:n,target:s}))}),rc=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,unstable_viewTransition:u,children:f}=t,c=s0(t,KP),h=Fl(s,{relative:c.relative}),v=di(),g=b.useContext(r0),{navigator:m}=b.useContext(In),w=g!=null&&n_(h)&&u===!0,p=m.encodeLocation?m.encodeLocation(h).pathname:h.pathname,d=v.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(d=d.toLowerCase(),y=y?y.toLowerCase():null,p=p.toLowerCase());const S=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let E=d===p||!a&&d.startsWith(p)&&d.charAt(S)==="/",P=y!=null&&(y===p||!a&&y.startsWith(p)&&y.charAt(p.length)==="/"),C={isActive:E,isPending:P,isTransitioning:w},$=E?r:void 0,D;typeof i=="function"?D=i(C):D=[i,E?"active":null,P?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let I=typeof l=="function"?l(C):l;return b.createElement(ZP,Ua({},c,{"aria-current":$,className:D,ref:n,style:I,to:s,unstable_viewTransition:u}),typeof f=="function"?f(C):f)});var oc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(oc||(oc={}));var qh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qh||(qh={}));function e_(e){let t=b.useContext(Dl);return t||me(!1),t}function t_(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=EP(),u=di(),f=Fl(e,{relative:a});return b.useCallback(c=>{if(VP(c,n)){c.preventDefault();let h=r!==void 0?r:Ma(u)===Ma(f);s(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,f,r,o,n,e,i,a,l])}function n_(e,t){t===void 0&&(t={});let n=b.useContext(QP);n==null&&me(!1);let{basename:r}=e_(oc.useViewTransitionState),o=Fl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Xo(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Xo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return tc(o.pathname,a)!=null||tc(o.pathname,i)!=null}const Xh="/water-tracker/assets/Logo-890d13ba.png",Jh=_.img`
  width: 102px;
  height: 48px;
`,r_=e=>e.auth.user,o_=e=>e.auth.isLoggedIn,i_=()=>{const e=qy(o_);return x.jsx("div",{children:e?x.jsx(rc,{to:"/home",children:x.jsx(Jh,{src:Xh,alt:"logo"})}):x.jsx(rc,{to:"/",children:x.jsx(Jh,{src:Xh,alt:"logo"})})})},a_=_.div`
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
`,l_=()=>x.jsx("header",{children:x.jsx(lE,{children:x.jsxs(a_,{children:[x.jsx(i_,{}),x.jsx(B_,{})]})})}),s_="/water-tracker/assets/bottleMob-814a9d12.png",u_="/water-tracker/assets/bottleMob@2x-17522dc3.png",c_="/water-tracker/assets/bottleTabl-c56ef88b.png",f_="/water-tracker/assets/bottleTabl@2x-5f20a434.png",d_="/water-tracker/assets/bottleDesc-5e7cc8f5.png",p_="/water-tracker/assets/bottleDesc@2x-cdf5cc76.png",uO=_.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
`,cO=_.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${s_}) 1x,
    url(${u_}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${c_}) 1x,
      url(${f_}) 2x
    );
    height: 386px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${d_}) 1x,
      url(${p_}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,fO=_.div`
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.color.secondaryWhite};
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  background: ${e=>e.theme.color.white};
  max-width: 172px;

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
    top: 13%;
    left: 12%;
    transform: translate(-50%, -50%);
    z-index: 1;

    p {
      font-size: 24px;
    }
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    top: 20%;
    left: 14%;
    max-width: 180px;
  }
`,h_=_.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }
`,m_=_.div`
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
`,g_=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Zh=_.h3`
  margin-bottom: 16px;
  color: ${e=>e.theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,Ai=_.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
`,y_=_.div`
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
`,v_=_.form`
  gap: 16px;

  span {
    margin-right: 24px;
    font-size: 16px;
  }
`,em=_.input`
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
`,Ns=_.input`
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
`,w_=_.div`
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
`,x_=_.button`
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
`,S_=({onClose:e})=>{const[t,n]=b.useState("female"),[r,o]=b.useState(""),[i,a]=b.useState(""),[l,s]=b.useState("2.0"),[u,f]=b.useState(""),c=()=>{const v=t==="female"?.03:.04,g=t==="female"?.4:.6,m=(r*v+i/60*g).toFixed(2);s(m)},h=async()=>{c()};return x.jsx(Il,{onClose:e,title:"My daily norma",children:x.jsxs(h_,{children:[x.jsxs("div",{children:[x.jsxs(m_,{children:[x.jsxs(Ai,{children:["For girl: ",x.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),x.jsxs(Ai,{children:["For man: ",x.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),x.jsx(y_,{children:x.jsxs("p",{children:[x.jsx("span",{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),x.jsx("div",{children:x.jsxs(g_,{children:[x.jsxs(v_,{children:[x.jsx(Zh,{children:"Calculate your rate:"}),x.jsxs("label",{children:[x.jsx(em,{type:"radio",name:"gender",value:"female",checked:t==="female",onChange:()=>n("female")}),x.jsx("span",{children:"For girl"})]}),x.jsxs("label",{children:[x.jsx(em,{type:"radio",name:"gender",value:"male",checked:t==="male",onChange:()=>n("male")}),x.jsx("span",{children:"For boy"})]})]}),x.jsxs("div",{children:[x.jsx(Ai,{children:"Your weight in kilograms:"}),x.jsx(Ns,{type:"text",placeholder:"0",value:r,onChange:v=>o(v.target.value)})]}),x.jsxs("div",{children:[x.jsx(Ai,{children:"Time of active participation in sports or other activities with a high physical load:"}),x.jsx(Ns,{type:"text",placeholder:"0",value:i,onChange:v=>a(v.target.value)})]}),x.jsxs(w_,{children:["The required amount of water in liters per day:"," ",x.jsxs("strong",{children:[l,"L"]})]}),x.jsxs("div",{children:[x.jsx(Zh,{children:"Write down how much water you will drink:"}),x.jsx(Ns,{type:"text",placeholder:"0",value:u,onChange:v=>f(v.target.value)})]}),x.jsx(x_,{onClick:h,children:"Save"})]})})]})})};S_.propTypes={onClose:fo.func.isRequired};const dO=_.div`
  position: absolute;
  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
  transform: translate(-50% -50%);
  width: 280px;

  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
`,pO=_.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,hO=_.li`
  display: flex;
  gap: 6px;
`,mO=_.span`
  color: ${({theme:e})=>e.color.accent};
  font-size: 18px;
  font-weight: 500;
`,gO=_.p`
  color: ${({theme:e})=>e.color.accent};
`,yO=_.div`
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
`,vO=_.button`
  width: 14px;
  height: 14px;
  background: transparent;
  color: ${e=>e.active?e.theme.color.accent:e.theme.color.secondaryLightBlue};

  &:hover {
    color: ${e=>e.theme.color.accent};
  }
`,wO=_.div`
  display: flex;
  align-items: baseline;
  position: relative;
  color: ${e=>e.theme.color.accent};
  column-gap: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`,xO=_.p`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  font-size: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
  }
`,SO=_.div`
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
`,bO=_.div`
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
`,kO=_.button`
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

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`,EO=_.div`
  margin-bottom: 24px;
`,PO=_.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid #d7e3ff;
`,_O=_.div`
  display: flex;
  align-items: center;
`,OO=_.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,CO=_.ul`
  height: 212px;
  overflow: auto;
`,jO=_.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #407bff;
  margin-right: 16px;
`,$O=_.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: #2f2f2f;
`,RO=_.svg`
  stroke: #407bff;
  fill: transparent;
  width: 26px;
  height: 26px;
  margin-right: 12px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,TO=_.div`
  display: flex;
  gap: 18px;
`,NO=_.button`
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
`,AO=_.button`
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
`,LO=_.button`
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
`,zO=_.div`
  width: 280px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;

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
`,IO=_.input`
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
`,DO=_.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.accent};
`,MO=_.div`
  position: relative;
  height: 102px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 356px;
    height: 90px;
  }
`,FO=_.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,UO=_.span`
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
`,BO=_.span`
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
`,WO=_.span`
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
`,HO=_.button`
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
`,VO=_.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${e=>e.theme.color.white};
`,b_=_.input`
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
`,Kf=_.p`
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,tm=_.label`
  display: inline-block;
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,k_=_.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,u0=_.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,As=_.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,Ls=_.div`
  position: relative;
  margin-top: 8px;
`,nr=_(u0)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`,E_=_.button`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  border: none;
  background-color: transparent;
  padding: 0;
`,P_=_.span`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`,nm=_.div`
  margin-bottom: 24px;
`,rm=_.div`
  margin-bottom: 12px;
`,__=_(Kf)`
  margin-bottom: 12px;
`,om=_.input`
  border: 1px solid ${e=>e.theme.color.accent};
  width: 14px;
  height: 14px;

  &:checked {
    color: ${e=>e.theme.color.accent};
  }
`,O_=_.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,im=_.span`
  margin-left: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,am=_.label`
  display: flex;
  align-items: center;
`,C_=_.img`
  border-radius: 60%;
`,io=_.input`
  width: 100%;
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

  &::placeholder {
    color: ${e=>e.theme.color.secondaryLightBlue};
  }
`,j_=_.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 32px;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.color.white};

  @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`,$_=_(Kf)`
  margin-bottom: 12px;
`,zs=_.label`
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,R_=_.button`
  display: block;
  min-width: 100%;
  padding: 8px 30px;
  border-radius: 10px;
  background: ${({theme:e})=>e.color.accent};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${({theme:e})=>e.color.white};
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  transition: box-shadow ${e=>e.theme.transition.main};

  &:is(:hover, :focus) {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
    margin-left: auto;
    min-width: 160px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 24px; /* 133.333% */
  }
`,T_=_.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
`,lm=_.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 392px;
  }
`,sm=_.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 0px;
  }
`,N_=_.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 52px;
  }
`;_(Dv)`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    max-width: 1008px;
  }
`;const A_="src/assets/images/default_avatar_to_download.jpg",L_=({onClose:e})=>{const[t,n]=b.useState(),[r,o]=b.useState(),[i,a]=b.useState("girl"),[l,s]=b.useState(""),[u,f]=b.useState(""),[c,h]=b.useState(""),[v,g]=b.useState(""),[m,w]=b.useState(""),[p,d]=b.useState(!1),y=b.useRef(null),S=()=>{y.current.click()},E=()=>{d(P=>!P)};return b.useEffect(()=>{if(!t)return;const P=URL.createObjectURL(t[0]);return o(P),()=>{URL.revokeObjectURL(P)}},[t]),x.jsx(x.Fragment,{children:x.jsx(Il,{onClose:e,title:"Setting",children:x.jsx(j_,{children:x.jsxs("form",{children:[x.jsxs(nm,{children:[x.jsx(Kf,{children:"Your photo"}),x.jsxs(k_,{children:[x.jsx(C_,{src:r||A_,alt:"user avatar",width:"80px",height:"80px"}),x.jsxs("label",{children:[x.jsx(b_,{ref:y,type:"file",name:"avatar",accept:"image/png, image/jpeg",onChange:P=>{P.target.files&&P.target.files.length>0&&n(P.target.files)}}),x.jsxs(E_,{type:"button",onClick:S,children:[x.jsx(u0,{children:x.jsx("use",{href:`${Pt}#icon-arrow-up`})}),x.jsx(P_,{children:"Upload a photo"})]})]})]})]}),x.jsxs(T_,{children:[x.jsxs(lm,{children:[x.jsxs(N_,{children:[x.jsx(__,{children:"Your gender identity"}),x.jsxs(O_,{children:[x.jsxs(am,{children:[x.jsx(om,{type:"radio",name:"gender",value:"Girl",checked:i==="Girl",onChange:P=>a(P.target.value)}),x.jsx(im,{children:"Girl"})]}),x.jsxs(am,{children:[x.jsx(om,{type:"radio",name:"gender",value:"Man",checked:i==="Man",onChange:P=>a(P.target.value)}),x.jsx(im,{children:"Man"})]})]})]}),x.jsxs(nm,{children:[x.jsx(tm,{htmlFor:"username",children:"Your name"}),x.jsx(io,{type:"text",id:"username",name:"username",value:l,placeholder:l,onChange:P=>s(P.target.value)})]}),x.jsxs(sm,{children:[x.jsx(tm,{htmlFor:"email",children:"E-mail"}),x.jsx(io,{type:"email",id:"email",name:"email",value:u,placeholder:u,onChange:P=>f(P.target.value)})]})]}),x.jsxs(lm,{children:[x.jsx($_,{children:"Password"}),x.jsxs(rm,{children:[x.jsx(zs,{htmlFor:"oldPassword",children:"Outdated password:"}),x.jsxs(Ls,{children:[x.jsx(io,{type:p?"text":"password",id:"oldPassword",name:"oldPassword",value:c,placeholder:"Password",onChange:P=>h(P.target.value)}),x.jsx(As,{type:"button",onClick:E,children:p?x.jsx(nr,{children:x.jsx("use",{href:`${Pt}#icon-to-open`})}):x.jsx(nr,{children:x.jsx("use",{href:`${Pt}#icon-to-hide`})})})]})]}),x.jsxs(rm,{children:[x.jsx(zs,{htmlFor:"password",children:"New Password:"}),x.jsxs(Ls,{children:[x.jsx(io,{type:p?"text":"password",id:"password",name:"newPassword",value:v,placeholder:"Password",onChange:P=>g(P.target.value)}),x.jsx(As,{type:"button",onClick:E,children:p?x.jsx(nr,{children:x.jsx("use",{href:`${Pt}#icon-to-open`})}):x.jsx(nr,{children:x.jsx("use",{href:`${Pt}#icon-to-hide`})})})]})]}),x.jsxs(sm,{children:[x.jsx(zs,{htmlFor:"repeatedPassword",children:"Repeat new password:"}),x.jsxs(Ls,{children:[x.jsx(io,{type:p?"text":"password",id:"repeatedPassword",name:"repeatedPassword",value:m,placeholder:"Password",onChange:P=>w(P.target.value)}),x.jsx(As,{type:"button",onClick:E,children:p?x.jsx(nr,{children:x.jsx("use",{href:`${Pt}#icon-to-open`})}):x.jsx(nr,{children:x.jsx("use",{href:`${Pt}#icon-to-hide`})})})]})]})]})]}),x.jsx(R_,{type:"submit",children:"Save"})]})})})})};_.button`
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
`;_.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: ${({theme:e})=>e.color.black};
  fill: transparent;
`;const z_=_.div`
  position: relative;
  display: flex; 
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`,I_=_.p`
  font-size: 18px;
  line-height: 1.33em;

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`,D_=_.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  padding: 0;
`,M_=_.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`,F_=_.span`
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
`,U_=_.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.accent};
  fill: transparent;

  &:hover,
  &:focus {
    color: ${e=>e.theme.color.accent};
  }
`,B_=()=>{const[e,t]=b.useState(!1),{userName:n,avatarURL:r}=qy(r_),o=()=>{t(!e)},i=n?n.charAt(0).toUpperCase():"V",a=()=>n&&r?{name:n,avatar:r}:n?{name:n,avatar:i}:{name:i,avatar:i},{name:l,avatar:s}=a();return x.jsxs(z_,{children:[x.jsx(I_,{children:l}),x.jsxs(D_,{onClick:o,children:[r?x.jsx(M_,{src:s,alt:""}):x.jsx(F_,{children:s}),x.jsx(U_,{children:x.jsx("use",{href:`${Pt}#icon-arrow-down`})})]}),e&&x.jsx(H_,{})]})},W_=_.div`
  position: absolute;
  top: 54px;
  width: 118px;
  padding: 16px;
  border-radius: 10px;
  background: ${({theme:e})=>e.color.white};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  transition: all ${e=>e.theme.transition.modal};

  /* @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    right: 7%;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    right: 4%;
  } */

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    top: 56px;
    /* right: 8.5%; */
  }
`,um=_.svg`
  margin-right: 8px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,cm=_.button`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  background-color: transparent;
  padding: 0;
`,fm=_.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,H_=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)},a=()=>{r(!0)},l=()=>{r(!1)};return x.jsx(x.Fragment,{children:x.jsx(W_,{children:x.jsxs("ul",{children:[x.jsxs(fm,{children:[x.jsx(um,{width:"16px",height:"16px",children:x.jsx("use",{href:`${Pt}#icon-settings`})}),x.jsxs(cm,{type:"button",onClick:o,children:["Setting",e&&x.jsx(L_,{onClose:i})]})]}),x.jsxs(fm,{children:[x.jsx(um,{width:"16px",height:"16px",children:x.jsx("use",{href:`${Pt}#icon-exit`})}),x.jsxs(cm,{type:"button",onClick:a,children:["Log out",n&&x.jsx(q_,{onClose:l})]})]})]})})})},V_=_.h2`
  margin-bottom: 24px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
`,G_=_.button`
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
    min-width: 100%;
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
`,K_=_.button`
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
    min-width: 100%;
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
`,Q_=_.ul`
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
`,Y_=_.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`,q_=({onClose:e})=>{const t=$S();return x.jsx(x.Fragment,{children:x.jsx(Il,{onClose:e,title:"Log out",children:x.jsxs(Y_,{children:[x.jsx(V_,{children:"Do you really want to leave?"}),x.jsxs(Q_,{children:[x.jsx("li",{children:x.jsx(K_,{type:"button",onClick:e,children:"Cancel"})}),x.jsx("li",{children:x.jsx(G_,{type:"button",onClick:()=>t(Tv()),children:"Log out"})})]})]})})})},GO=_.img`
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
`,KO=_.img`
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
`,QO=_.div`
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
`,YO=_.label`
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
`,qO=_.input`
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
`,XO=_.svg`
  width: 16px;
  height: 16px;
  border: 1px;
  stroke: ${e=>e.theme.color.accent};
  fill: ${e=>e.theme.color.white};
  position: absolute;
  right: 10px;
  top: 38px;
`,JO=_(rc)` 
  width: 100%;
  font-size: 16px;
  font-style: normal; 
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
    &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }`,ZO=_.div`
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
`,eC=_.h1`
  display: none;
`,tC=_.h2`
  font-weight: 700;
  font-size: 28px;
  color: ${({theme:e})=>e.color.black};
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`,nC=_.p`
  font-size: 24px;
  color: ${({theme:e})=>e.color.black};
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`,rC=_.ul`
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
`,oC=_.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,iC=_.div`
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
`,aC=_.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`,lC=_.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  line-height: 20px;
  margin-bottom: 12px;
`,sC=_.button`
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
`,uC=_.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  margin-bottom: 12px;
`,cC=_.li`
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
`,fC=_.div`
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
`,dC=_.ul`
  list-style-type: none;
  padding-left: 0;
`,X_="modulepreload",J_=function(e){return"/water-tracker/"+e},dm={},Gr=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=J_(i),i in dm)return;dm[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=o.length-1;f>=0;f--){const c=o[f];if(c.href===i&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":X_,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((f,c)=>{u.addEventListener("load",f),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Z_=({component:e,redirectTo:t="/home"})=>x.jsx(e,{}),Li=({component:e,redirectTo:t="/"})=>e,eO=()=>x.jsxs(x.Fragment,{children:[x.jsx(l_,{}),x.jsx("main",{children:x.jsx(b.Suspense,{fallback:x.jsx(Xv,{}),children:x.jsx(UP,{})})})]}),tO=b.lazy(()=>Gr(()=>import("./Welcome-10b18470.js"),["assets/Welcome-10b18470.js","assets/Section-fe3cb34f.js"])),nO=b.lazy(()=>Gr(()=>import("./Home-39ebcde5.js"),["assets/Home-39ebcde5.js","assets/Section-fe3cb34f.js"])),rO=b.lazy(()=>Gr(()=>import("./SignIn-6e4566e1.js"),["assets/SignIn-6e4566e1.js","assets/Section-fe3cb34f.js"])),oO=b.lazy(()=>Gr(()=>import("./SignUp-04261904.js"),["assets/SignUp-04261904.js","assets/Section-fe3cb34f.js"])),iO=b.lazy(()=>Gr(()=>import("./Error-81d28440.js"),["assets/Error-81d28440.js","assets/Section-fe3cb34f.js"])),aO=b.lazy(()=>Gr(()=>import("./ForgotPassword-cc69f8f9.js"),["assets/ForgotPassword-cc69f8f9.js","assets/Section-fe3cb34f.js"])),lO=()=>x.jsx(WP,{children:x.jsxs(un,{path:"/",element:x.jsx(eO,{}),children:[x.jsx(un,{index:!0,element:x.jsx(Li,{component:x.jsx(tO,{}),redirectTo:"/home"})}),x.jsx(un,{path:"home",element:x.jsx(Z_,{component:nO})}),x.jsx(un,{path:"signin",element:x.jsx(Li,{component:x.jsx(rO,{}),redirectTo:"/home"})}),x.jsx(un,{path:"signup",element:x.jsx(Li,{component:x.jsx(oO,{}),redirectTo:"/home"})}),x.jsx(un,{path:"forgot-password",element:x.jsx(Li,{component:x.jsx(aO,{}),redirectTo:"/signin"})}),x.jsx(un,{path:"*",element:x.jsx(iO,{})})]})}),sO=Us.createRoot(document.getElementById("root"));sO.render(x.jsx(Te.StrictMode,{children:x.jsxs(Dm,{theme:Ku,children:[x.jsx(Mm,{styles:V2}),x.jsx(OS,{store:Nv,children:x.jsx(Zy,{loading:x.jsx(Xv,{}),persistor:M2,children:x.jsx(qP,{basename:"/water-tracker",children:x.jsx(lO,{})})})})]})}));export{BO as $,Il as A,lC as B,EO as C,uO as D,OO as E,CO as F,PO as G,eC as H,oC as I,_O as J,RO as K,dC as L,jO as M,$O as N,TO as O,nC as P,NO as Q,AO as R,LO as S,iC as T,zO as U,MO as V,ZO as W,DO as X,xO as Y,IO as Z,FO as _,tC as a,UO as a0,WO as a1,HO as a2,VO as a3,$S as a4,GO as a5,KO as a6,QO as a7,YO as a8,qO as a9,XO as aa,JO as ab,k2 as ac,lE as ad,rC as b,aC as c,sC as d,fC as e,uC as f,cC as g,fO as h,S_ as i,x as j,cO as k,dO as l,pO as m,_ as n,hO as o,gO as p,mO as q,b as r,Pt as s,yO as t,EP as u,wO as v,vO as w,SO as x,bO as y,kO as z};
