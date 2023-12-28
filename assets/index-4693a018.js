function X0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function rs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function J0(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Fm={exports:{}},os={},Um={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi=Symbol.for("react.element"),Z0=Symbol.for("react.portal"),e1=Symbol.for("react.fragment"),t1=Symbol.for("react.strict_mode"),n1=Symbol.for("react.profiler"),r1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),i1=Symbol.for("react.forward_ref"),a1=Symbol.for("react.suspense"),s1=Symbol.for("react.memo"),l1=Symbol.for("react.lazy"),yd=Symbol.iterator;function u1(e){return e===null||typeof e!="object"?null:(e=yd&&e[yd]||e["@@iterator"],typeof e=="function"?e:null)}var Bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wm=Object.assign,Vm={};function Gr(e,t,n){this.props=e,this.context=t,this.refs=Vm,this.updater=n||Bm}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hm(){}Hm.prototype=Gr.prototype;function Sc(e,t,n){this.props=e,this.context=t,this.refs=Vm,this.updater=n||Bm}var kc=Sc.prototype=new Hm;kc.constructor=Sc;Wm(kc,Gr.prototype);kc.isPureReactComponent=!0;var vd=Array.isArray,Gm=Object.prototype.hasOwnProperty,Ec={current:null},Km={key:!0,ref:!0,__self:!0,__source:!0};function Qm(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Gm.call(t,r)&&!Km.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:fi,type:e,key:i,ref:a,props:o,_owner:Ec.current}}function c1(e,t){return{$$typeof:fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _c(e){return typeof e=="object"&&e!==null&&e.$$typeof===fi}function f1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wd=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f1(""+e.key):t.toString(36)}function Qi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fi:case Z0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+il(a,0):r,vd(o)?(n="",e!=null&&(n=e.replace(wd,"$&/")+"/"),Qi(o,t,n,"",function(u){return u})):o!=null&&(_c(o)&&(o=c1(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(wd,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",vd(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+il(i,s);a+=Qi(i,t,n,l,o)}else if(l=u1(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+il(i,s++),a+=Qi(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _i(e,t,n){if(e==null)return e;var r=[],o=0;return Qi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function d1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Yi={transition:null},p1={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Yi,ReactCurrentOwner:Ec};H.Children={map:_i,forEach:function(e,t,n){_i(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _i(e,function(){t++}),t},toArray:function(e){return _i(e,function(t){return t})||[]},only:function(e){if(!_c(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Gr;H.Fragment=e1;H.Profiler=n1;H.PureComponent=Sc;H.StrictMode=t1;H.Suspense=a1;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p1;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wm({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ec.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Gm.call(t,l)&&!Km.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:fi,type:e.type,key:o,ref:i,props:r,_owner:a}};H.createContext=function(e){return e={$$typeof:o1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r1,_context:e},e.Consumer=e};H.createElement=Qm;H.createFactory=function(e){var t=Qm.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:i1,render:e}};H.isValidElement=_c;H.lazy=function(e){return{$$typeof:l1,_payload:{_status:-1,_result:e},_init:d1}};H.memo=function(e,t){return{$$typeof:s1,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Yi.transition;Yi.transition={};try{e()}finally{Yi.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Qe.current.useCallback(e,t)};H.useContext=function(e){return Qe.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};H.useEffect=function(e,t){return Qe.current.useEffect(e,t)};H.useId=function(){return Qe.current.useId()};H.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Qe.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};H.useRef=function(e){return Qe.current.useRef(e)};H.useState=function(e){return Qe.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Qe.current.useTransition()};H.version="18.2.0";Um.exports=H;var S=Um.exports;const Ne=rs(S),Zl=X0({__proto__:null,default:Ne},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1=S,m1=Symbol.for("react.element"),g1=Symbol.for("react.fragment"),y1=Object.prototype.hasOwnProperty,v1=h1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w1={key:!0,ref:!0,__self:!0,__source:!0};function Ym(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)y1.call(t,r)&&!w1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:m1,type:e,key:i,ref:a,props:o,_owner:v1.current}}os.Fragment=g1;os.jsx=Ym;os.jsxs=Ym;Fm.exports=os;var x=Fm.exports;function x1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function b1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var S1=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(b1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=x1(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ue="-ms-",wa="-moz-",q="-webkit-",qm="comm",Oc="rule",Pc="decl",k1="@import",Xm="@keyframes",E1="@layer",_1=Math.abs,is=String.fromCharCode,O1=Object.assign;function P1(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function Jm(e){return e.trim()}function C1(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function eu(e,t){return e.indexOf(t)}function Ae(e,t){return e.charCodeAt(t)|0}function Lo(e,t,n){return e.slice(t,n)}function At(e){return e.length}function Cc(e){return e.length}function Oi(e,t){return t.push(e),e}function $1(e,t){return e.map(t).join("")}var as=1,Nr=1,Zm=0,rt=0,xe=0,Kr="";function ss(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:as,column:Nr,length:a,return:""}}function ao(e,t){return O1(ss("",null,null,"",null,null,0),e,{length:-e.length},t)}function T1(){return xe}function j1(){return xe=rt>0?Ae(Kr,--rt):0,Nr--,xe===10&&(Nr=1,as--),xe}function at(){return xe=rt<Zm?Ae(Kr,rt++):0,Nr++,xe===10&&(Nr=1,as++),xe}function Dt(){return Ae(Kr,rt)}function qi(){return rt}function di(e,t){return Lo(Kr,e,t)}function zo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eg(e){return as=Nr=1,Zm=At(Kr=e),rt=0,[]}function tg(e){return Kr="",e}function Xi(e){return Jm(di(rt-1,tu(e===91?e+2:e===40?e+1:e)))}function R1(e){for(;(xe=Dt())&&xe<33;)at();return zo(e)>2||zo(xe)>3?"":" "}function N1(e,t){for(;--t&&at()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return di(e,qi()+(t<6&&Dt()==32&&at()==32))}function tu(e){for(;at();)switch(xe){case e:return rt;case 34:case 39:e!==34&&e!==39&&tu(xe);break;case 40:e===41&&tu(e);break;case 92:at();break}return rt}function A1(e,t){for(;at()&&e+xe!==47+10;)if(e+xe===42+42&&Dt()===47)break;return"/*"+di(t,rt-1)+"*"+is(e===47?e:at())}function L1(e){for(;!zo(Dt());)at();return di(e,rt)}function z1(e){return tg(Ji("",null,null,null,[""],e=eg(e),0,[0],e))}function Ji(e,t,n,r,o,i,a,s,l){for(var u=0,f=0,c=a,h=0,v=0,g=0,m=1,w=1,p=1,d=0,y="",b=o,k=i,O=r,C=y;w;)switch(g=d,d=at()){case 40:if(g!=108&&Ae(C,c-1)==58){eu(C+=X(Xi(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Xi(d);break;case 9:case 10:case 13:case 32:C+=R1(g);break;case 92:C+=N1(qi()-1,7);continue;case 47:switch(Dt()){case 42:case 47:Oi(I1(A1(at(),qi()),t,n),l);break;default:C+="/"}break;case 123*m:s[u++]=At(C)*p;case 125*m:case 59:case 0:switch(d){case 0:case 125:w=0;case 59+f:p==-1&&(C=X(C,/\f/g,"")),v>0&&At(C)-c&&Oi(v>32?bd(C+";",r,n,c-1):bd(X(C," ","")+";",r,n,c-2),l);break;case 59:C+=";";default:if(Oi(O=xd(C,t,n,u,f,o,s,y,b=[],k=[],c),i),d===123)if(f===0)Ji(C,t,O,O,b,i,c,s,k);else switch(h===99&&Ae(C,3)===110?100:h){case 100:case 108:case 109:case 115:Ji(e,O,O,r&&Oi(xd(e,O,O,0,0,o,s,y,o,b=[],c),k),o,k,c,s,r?b:k);break;default:Ji(C,O,O,O,[""],k,0,s,k)}}u=f=v=0,m=p=1,y=C="",c=a;break;case 58:c=1+At(C),v=g;default:if(m<1){if(d==123)--m;else if(d==125&&m++==0&&j1()==125)continue}switch(C+=is(d),d*m){case 38:p=f>0?1:(C+="\f",-1);break;case 44:s[u++]=(At(C)-1)*p,p=1;break;case 64:Dt()===45&&(C+=Xi(at())),h=Dt(),f=c=At(y=C+=L1(qi())),d++;break;case 45:g===45&&At(C)==2&&(m=0)}}return i}function xd(e,t,n,r,o,i,a,s,l,u,f){for(var c=o-1,h=o===0?i:[""],v=Cc(h),g=0,m=0,w=0;g<r;++g)for(var p=0,d=Lo(e,c+1,c=_1(m=a[g])),y=e;p<v;++p)(y=Jm(m>0?h[p]+" "+d:X(d,/&\f/g,h[p])))&&(l[w++]=y);return ss(e,t,n,o===0?Oc:s,l,u,f)}function I1(e,t,n){return ss(e,t,n,qm,is(T1()),Lo(e,2,-2),0)}function bd(e,t,n,r){return ss(e,t,n,Pc,Lo(e,0,r),Lo(e,r+1,-1),r)}function Er(e,t){for(var n="",r=Cc(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function D1(e,t,n,r){switch(e.type){case E1:if(e.children.length)break;case k1:case Pc:return e.return=e.return||e.value;case qm:return"";case Xm:return e.return=e.value+"{"+Er(e.children,r)+"}";case Oc:e.value=e.props.join(",")}return At(n=Er(e.children,r))?e.return=e.value+"{"+n+"}":""}function M1(e){var t=Cc(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function F1(e){return function(t){t.root||(t=t.return)&&e(t)}}var Sd=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function ng(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var U1=function(t,n,r){for(var o=0,i=0;o=i,i=Dt(),o===38&&i===12&&(n[r]=1),!zo(i);)at();return di(t,rt)},B1=function(t,n){var r=-1,o=44;do switch(zo(o)){case 0:o===38&&Dt()===12&&(n[r]=1),t[r]+=U1(rt-1,n,r);break;case 2:t[r]+=Xi(o);break;case 4:if(o===44){t[++r]=Dt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=is(o)}while(o=at());return t},W1=function(t,n){return tg(B1(eg(t),n))},kd=new WeakMap,V1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!kd.get(r))&&!o){kd.set(t,!0);for(var i=[],a=W1(n,i),s=r.props,l=0,u=0;l<a.length;l++)for(var f=0;f<s.length;f++,u++)t.props[u]=i[l]?a[l].replace(/&\f/g,s[f]):s[f]+" "+a[l]}}},H1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function rg(e,t){switch(P1(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+wa+e+Ue+e+e;case 6828:case 4268:return q+e+Ue+e+e;case 6165:return q+e+Ue+"flex-"+e+e;case 5187:return q+e+X(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+Ue+"flex-$1$2")+e;case 5443:return q+e+Ue+"flex-item-"+X(e,/flex-|-self/,"")+e;case 4675:return q+e+Ue+"flex-line-pack"+X(e,/align-content|flex-|-self/,"")+e;case 5548:return q+e+Ue+X(e,"shrink","negative")+e;case 5292:return q+e+Ue+X(e,"basis","preferred-size")+e;case 6060:return q+"box-"+X(e,"-grow","")+q+e+Ue+X(e,"grow","positive")+e;case 4554:return q+X(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return X(X(X(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+wa+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~eu(e,"stretch")?rg(X(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ae(e,t+1)!==115)break;case 6444:switch(Ae(e,At(e)-3-(~eu(e,"!important")&&10))){case 107:return X(e,":",":"+q)+e;case 101:return X(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(Ae(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+Ue+"$2box$3")+e}break;case 5936:switch(Ae(e,t+11)){case 114:return q+e+Ue+X(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+Ue+X(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+Ue+X(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return q+e+Ue+e+e}return e}var G1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Pc:t.return=rg(t.value,t.length);break;case Xm:return Er([ao(t,{value:X(t.value,"@","@"+q)})],o);case Oc:if(t.length)return $1(t.props,function(i){switch(C1(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Er([ao(t,{props:[X(i,/:(read-\w+)/,":"+wa+"$1")]})],o);case"::placeholder":return Er([ao(t,{props:[X(i,/:(plac\w+)/,":"+q+"input-$1")]}),ao(t,{props:[X(i,/:(plac\w+)/,":"+wa+"$1")]}),ao(t,{props:[X(i,/:(plac\w+)/,Ue+"input-$1")]})],o)}return""})}},K1=[G1],Q1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var w=m.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var o=t.stylisPlugins||K1,i={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var w=m.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)i[w[p]]=!0;s.push(m)});var l,u=[V1,H1];{var f,c=[D1,F1(function(m){f.insert(m)})],h=M1(u.concat(o,c)),v=function(w){return Er(z1(w),h)};l=function(w,p,d,y){f=d,v(w?w+"{"+p.styles+"}":p.styles),y&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new S1({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return g.sheet.hydrate(s),g};function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Io.apply(this,arguments)}var og={exports:{}},ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,$c=Ce?Symbol.for("react.element"):60103,Tc=Ce?Symbol.for("react.portal"):60106,ls=Ce?Symbol.for("react.fragment"):60107,us=Ce?Symbol.for("react.strict_mode"):60108,cs=Ce?Symbol.for("react.profiler"):60114,fs=Ce?Symbol.for("react.provider"):60109,ds=Ce?Symbol.for("react.context"):60110,jc=Ce?Symbol.for("react.async_mode"):60111,ps=Ce?Symbol.for("react.concurrent_mode"):60111,hs=Ce?Symbol.for("react.forward_ref"):60112,ms=Ce?Symbol.for("react.suspense"):60113,Y1=Ce?Symbol.for("react.suspense_list"):60120,gs=Ce?Symbol.for("react.memo"):60115,ys=Ce?Symbol.for("react.lazy"):60116,q1=Ce?Symbol.for("react.block"):60121,X1=Ce?Symbol.for("react.fundamental"):60117,J1=Ce?Symbol.for("react.responder"):60118,Z1=Ce?Symbol.for("react.scope"):60119;function ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case $c:switch(e=e.type,e){case jc:case ps:case ls:case cs:case us:case ms:return e;default:switch(e=e&&e.$$typeof,e){case ds:case hs:case ys:case gs:case fs:return e;default:return t}}case Tc:return t}}}function ig(e){return ct(e)===ps}ne.AsyncMode=jc;ne.ConcurrentMode=ps;ne.ContextConsumer=ds;ne.ContextProvider=fs;ne.Element=$c;ne.ForwardRef=hs;ne.Fragment=ls;ne.Lazy=ys;ne.Memo=gs;ne.Portal=Tc;ne.Profiler=cs;ne.StrictMode=us;ne.Suspense=ms;ne.isAsyncMode=function(e){return ig(e)||ct(e)===jc};ne.isConcurrentMode=ig;ne.isContextConsumer=function(e){return ct(e)===ds};ne.isContextProvider=function(e){return ct(e)===fs};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$c};ne.isForwardRef=function(e){return ct(e)===hs};ne.isFragment=function(e){return ct(e)===ls};ne.isLazy=function(e){return ct(e)===ys};ne.isMemo=function(e){return ct(e)===gs};ne.isPortal=function(e){return ct(e)===Tc};ne.isProfiler=function(e){return ct(e)===cs};ne.isStrictMode=function(e){return ct(e)===us};ne.isSuspense=function(e){return ct(e)===ms};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ls||e===ps||e===cs||e===us||e===ms||e===Y1||typeof e=="object"&&e!==null&&(e.$$typeof===ys||e.$$typeof===gs||e.$$typeof===fs||e.$$typeof===ds||e.$$typeof===hs||e.$$typeof===X1||e.$$typeof===J1||e.$$typeof===Z1||e.$$typeof===q1)};ne.typeOf=ct;og.exports=ne;var Rc=og.exports,Nc=Rc,ew={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ag={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ac={};Ac[Nc.ForwardRef]=nw;Ac[Nc.Memo]=ag;function Ed(e){return Nc.isMemo(e)?ag:Ac[e.$$typeof]||ew}var rw=Object.defineProperty,ow=Object.getOwnPropertyNames,_d=Object.getOwnPropertySymbols,iw=Object.getOwnPropertyDescriptor,aw=Object.getPrototypeOf,Od=Object.prototype;function sg(e,t,n){if(typeof t!="string"){if(Od){var r=aw(t);r&&r!==Od&&sg(e,r,n)}var o=ow(t);_d&&(o=o.concat(_d(t)));for(var i=Ed(e),a=Ed(t),s=0;s<o.length;++s){var l=o[s];if(!tw[l]&&!(n&&n[l])&&!(a&&a[l])&&!(i&&i[l])){var u=iw(t,l);try{rw(e,l,u)}catch{}}}}return e}var sw=sg;const lg=rs(sw);var lw=function(e,t){return lg(e,t)},uw=!0;function Lc(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var vs=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||uw===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},ws=function(t,n,r){vs(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function cw(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var fw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dw=/[A-Z]|^ms/g,pw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ug=function(t){return t.charCodeAt(1)===45},Pd=function(t){return t!=null&&typeof t!="boolean"},al=ng(function(e){return ug(e)?e:e.replace(dw,"-$&").toLowerCase()}),Cd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(pw,function(r,o,i){return Lt={name:o,styles:i,next:Lt},o})}return fw[t]!==1&&!ug(t)&&typeof n=="number"&&n!==0?n+"px":n};function Do(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Lt={name:n.name,styles:n.styles,next:Lt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Lt={name:r.name,styles:r.styles,next:Lt},r=r.next;var o=n.styles+";";return o}return hw(e,t,n)}case"function":{if(e!==void 0){var i=Lt,a=n(e);return Lt=i,Do(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function hw(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Do(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":Pd(a)&&(r+=al(i)+":"+Cd(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Pd(a[s])&&(r+=al(i)+":"+Cd(i,a[s])+";");else{var l=Do(e,t,a);switch(i){case"animation":case"animationName":{r+=al(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var $d=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Lt,pi=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";Lt=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Do(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=Do(r,n,t[s]),o&&(i+=a[s]);$d.lastIndex=0;for(var l="",u;(u=$d.exec(i))!==null;)l+="-"+u[1];var f=cw(i)+l;return{name:f,styles:i,next:Lt}},mw=function(t){return t()},cg=Zl["useInsertionEffect"]?Zl["useInsertionEffect"]:!1,zc=cg||mw,Td=cg||S.useLayoutEffect,Ic={}.hasOwnProperty,Dc=S.createContext(typeof HTMLElement<"u"?Q1({key:"css"}):null),gw=Dc.Provider,yw=function(){return S.useContext(Dc)},hi=function(t){return S.forwardRef(function(n,r){var o=S.useContext(Dc);return t(n,o,r)})},en=S.createContext({}),vw=function(){return S.useContext(en)},ww=function(t,n){if(typeof n=="function"){var r=n(t);return r}return Io({},t,n)},xw=Sd(function(e){return Sd(function(t){return ww(e,t)})}),fg=function(t){var n=S.useContext(en);return t.theme!==n&&(n=xw(n)(t.theme)),S.createElement(en.Provider,{value:n},t.children)};function bw(e){var t=e.displayName||e.name||"Component",n=function(i,a){var s=S.useContext(en);return S.createElement(e,Io({theme:s,ref:a},i))},r=S.forwardRef(n);return r.displayName="WithTheme("+t+")",lw(r,e)}var nu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Sw=function(t,n){var r={};for(var o in n)Ic.call(n,o)&&(r[o]=n[o]);return r[nu]=t,r},kw=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return vs(n,r,o),zc(function(){return ws(n,r,o)}),null},Ew=hi(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[nu],i=[r],a="";typeof e.className=="string"?a=Lc(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var s=pi(i,void 0,S.useContext(en));a+=t.key+"-"+s.name;var l={};for(var u in e)Ic.call(e,u)&&u!=="css"&&u!==nu&&(l[u]=e[u]);return l.ref=n,l.className=a,S.createElement(S.Fragment,null,S.createElement(kw,{cache:t,serialized:s,isStringTag:typeof o=="string"}),S.createElement(o,l))}),_w=Ew,jd=function(t,n){var r=arguments;if(n==null||!Ic.call(n,"css"))return S.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=_w,i[1]=Sw(t,n);for(var a=2;a<o;a++)i[a]=r[a];return S.createElement.apply(null,i)},dg=hi(function(e,t){var n=e.styles,r=pi([n],void 0,S.useContext(en)),o=S.useRef();return Td(function(){var i=t.key+"-global",a=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",i),a.hydrate([l])),o.current=[a,s],function(){a.flush()}},[t]),Td(function(){var i=o.current,a=i[0],s=i[1];if(s){i[1]=!1;return}if(r.next!==void 0&&ws(t,r.next,!0),a.tags.length){var l=a.tags[a.tags.length-1].nextElementSibling;a.before=l,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function Mc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return pi(t)}var Ow=function(){var t=Mc.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Pw=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))a=e(i);else{a="";for(var s in i)i[s]&&s&&(a&&(a+=" "),a+=s)}break}default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};function Cw(e,t,n){var r=[],o=Lc(e,r,n);return r.length<2?n:o+t(r)}var $w=function(t){var n=t.cache,r=t.serializedArr;return zc(function(){for(var o=0;o<r.length;o++)ws(n,r[o],!1)}),null},Tw=hi(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];var h=pi(f,t.registered);return r.push(h),vs(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];return Cw(t.registered,o,Pw(f))},a={css:o,cx:i,theme:S.useContext(en)},s=e.children(a);return n=!0,S.createElement(S.Fragment,null,S.createElement($w,{cache:t,serializedArr:r}),s)});const jw=Object.freeze(Object.defineProperty({__proto__:null,CacheProvider:gw,ClassNames:Tw,Global:dg,ThemeContext:en,ThemeProvider:fg,__unsafe_useEmotionCache:yw,createElement:jd,css:Mc,jsx:jd,keyframes:Ow,useTheme:vw,withEmotionCache:hi,withTheme:bw},Symbol.toStringTag,{value:"Module"}));var ru={},pg={exports:{}},ft={},hg={exports:{}},mg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,M){var F=j.length;j.push(M);e:for(;0<F;){var oe=F-1>>>1,N=j[oe];if(0<o(N,M))j[oe]=M,j[F]=N,F=oe;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var M=j[0],F=j.pop();if(F!==M){j[0]=F;e:for(var oe=0,N=j.length,A=N>>>1;oe<A;){var z=2*(oe+1)-1,U=j[z],_=z+1,G=j[_];if(0>o(U,F))_<N&&0>o(G,U)?(j[oe]=G,j[_]=F,oe=_):(j[oe]=U,j[z]=F,oe=z);else if(_<N&&0>o(G,F))j[oe]=G,j[_]=F,oe=_;else break e}}return M}function o(j,M){var F=j.sortIndex-M.sortIndex;return F!==0?F:j.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,c=null,h=3,v=!1,g=!1,m=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(j){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=j)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function b(j){if(m=!1,y(j),!g)if(n(l)!==null)g=!0,Wt(k);else{var M=n(u);M!==null&&He(b,M.startTime-j)}}function k(j,M){g=!1,m&&(m=!1,p(T),T=-1),v=!0;var F=h;try{for(y(M),c=n(l);c!==null&&(!(c.expirationTime>M)||j&&!B());){var oe=c.callback;if(typeof oe=="function"){c.callback=null,h=c.priorityLevel;var N=oe(c.expirationTime<=M);M=e.unstable_now(),typeof N=="function"?c.callback=N:c===n(l)&&r(l),y(M)}else r(l);c=n(l)}if(c!==null)var A=!0;else{var z=n(u);z!==null&&He(b,z.startTime-M),A=!1}return A}finally{c=null,h=F,v=!1}}var O=!1,C=null,T=-1,D=5,L=-1;function B(){return!(e.unstable_now()-L<D)}function me(){if(C!==null){var j=e.unstable_now();L=j;var M=!0;try{M=C(!0,j)}finally{M?le():(O=!1,C=null)}}else O=!1}var le;if(typeof d=="function")le=function(){d(me)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,ke=Ie.port2;Ie.port1.onmessage=me,le=function(){ke.postMessage(null)}}else le=function(){w(me,0)};function Wt(j){C=j,O||(O=!0,le())}function He(j,M){T=w(function(){j(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Wt(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var F=h;h=M;try{return j()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,M){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var F=h;h=j;try{return M()}finally{h=F}},e.unstable_scheduleCallback=function(j,M,F){var oe=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?oe+F:oe):F=oe,j){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=F+N,j={id:f++,callback:M,priorityLevel:j,startTime:F,expirationTime:N,sortIndex:-1},F>oe?(j.sortIndex=F,t(u,j),n(l)===null&&j===n(u)&&(m?(p(T),T=-1):m=!0,He(b,F-oe))):(j.sortIndex=N,t(l,j),g||v||(g=!0,Wt(k))),j},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(j){var M=h;return function(){var F=h;h=M;try{return j.apply(this,arguments)}finally{h=F}}}})(mg);hg.exports=mg;var Rw=hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg=S,lt=Rw;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yg=new Set,Mo={};function or(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(Mo[e]=t,e=0;e<t.length;e++)yg.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=Object.prototype.hasOwnProperty,Nw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rd={},Nd={};function Aw(e){return ou.call(Nd,e)?!0:ou.call(Rd,e)?!1:Nw.test(e)?Nd[e]=!0:(Rd[e]=!0,!1)}function Lw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zw(e,t,n,r){if(t===null||typeof t>"u"||Lw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fc=/[\-:]([a-z])/g;function Uc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fc,Uc);ze[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fc,Uc);ze[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fc,Uc);ze[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bc(e,t,n,r){var o=ze.hasOwnProperty(t)?ze[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zw(t,n,o,r)&&(n=null),r||o===null?Aw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sn=gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pi=Symbol.for("react.element"),cr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Wc=Symbol.for("react.strict_mode"),iu=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),wg=Symbol.for("react.context"),Vc=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),su=Symbol.for("react.suspense_list"),Hc=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),xg=Symbol.for("react.offscreen"),Ad=Symbol.iterator;function so(e){return e===null||typeof e!="object"?null:(e=Ad&&e[Ad]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,sl;function vo(e){if(sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sl=t&&t[1]||""}return`
`+sl+e}var ll=!1;function ul(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vo(e):""}function Iw(e){switch(e.tag){case 5:return vo(e.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return e=ul(e.type,!1),e;case 11:return e=ul(e.type.render,!1),e;case 1:return e=ul(e.type,!0),e;default:return""}}function lu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case cr:return"Portal";case iu:return"Profiler";case Wc:return"StrictMode";case au:return"Suspense";case su:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wg:return(e.displayName||"Context")+".Consumer";case vg:return(e._context.displayName||"Context")+".Provider";case Vc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hc:return t=e.displayName||null,t!==null?t:lu(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return lu(e(t))}catch{}}return null}function Dw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lu(t);case 8:return t===Wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mw(e){var t=bg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=Mw(e))}function Sg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function uu(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ld(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kg(e,t){t=t.checked,t!=null&&Bc(e,"checked",t,!1)}function cu(e,t){kg(e,t);var n=zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fu(e,t.type,n):t.hasOwnProperty("defaultValue")&&fu(e,t.type,zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fu(e,t,n){(t!=="number"||xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wo=Array.isArray;function _r(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function du(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Id(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(wo(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zn(n)}}function Eg(e,t){var n=zn(t.value),r=zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _g(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_g(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,Og=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fw=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(e){Fw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Eo[t]=Eo[e]})});function Pg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Eo.hasOwnProperty(e)&&Eo[e]?(""+t).trim():t+"px"}function Cg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Pg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Uw=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(e,t){if(t){if(Uw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function mu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function Gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yu=null,Or=null,Pr=null;function Md(e){if(e=yi(e)){if(typeof yu!="function")throw Error($(280));var t=e.stateNode;t&&(t=Es(t),yu(e.stateNode,e.type,t))}}function $g(e){Or?Pr?Pr.push(e):Pr=[e]:Or=e}function Tg(){if(Or){var e=Or,t=Pr;if(Pr=Or=null,Md(e),t)for(e=0;e<t.length;e++)Md(t[e])}}function jg(e,t){return e(t)}function Rg(){}var cl=!1;function Ng(e,t,n){if(cl)return e(t,n);cl=!0;try{return jg(e,t,n)}finally{cl=!1,(Or!==null||Pr!==null)&&(Rg(),Tg())}}function Uo(e,t){var n=e.stateNode;if(n===null)return null;var r=Es(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var vu=!1;if(tn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){vu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{vu=!1}function Bw(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var _o=!1,ba=null,Sa=!1,wu=null,Ww={onError:function(e){_o=!0,ba=e}};function Vw(e,t,n,r,o,i,a,s,l){_o=!1,ba=null,Bw.apply(Ww,arguments)}function Hw(e,t,n,r,o,i,a,s,l){if(Vw.apply(this,arguments),_o){if(_o){var u=ba;_o=!1,ba=null}else throw Error($(198));Sa||(Sa=!0,wu=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ag(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fd(e){if(ir(e)!==e)throw Error($(188))}function Gw(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Fd(o),e;if(i===r)return Fd(o),t;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function Lg(e){return e=Gw(e),e!==null?zg(e):null}function zg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zg(e);if(t!==null)return t;e=e.sibling}return null}var Ig=lt.unstable_scheduleCallback,Ud=lt.unstable_cancelCallback,Kw=lt.unstable_shouldYield,Qw=lt.unstable_requestPaint,we=lt.unstable_now,Yw=lt.unstable_getCurrentPriorityLevel,Kc=lt.unstable_ImmediatePriority,Dg=lt.unstable_UserBlockingPriority,ka=lt.unstable_NormalPriority,qw=lt.unstable_LowPriority,Mg=lt.unstable_IdlePriority,xs=null,Mt=null;function Xw(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:ex,Jw=Math.log,Zw=Math.LN2;function ex(e){return e>>>=0,e===0?32:31-(Jw(e)/Zw|0)|0}var Ti=64,ji=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ea(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=xo(s):(i&=a,i!==0&&(r=xo(i)))}else a=n&~o,a!==0?r=xo(a):i!==0&&(r=xo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$t(t),o=1<<n,r|=e[n],t&=~o;return r}function tx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-$t(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=tx(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function xu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fg(){var e=Ti;return Ti<<=1,!(Ti&4194240)&&(Ti=64),e}function fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=n}function rx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$t(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Qc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$t(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function Ug(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bg,Yc,Wg,Vg,Hg,bu=!1,Ri=[],kn=null,En=null,_n=null,Bo=new Map,Wo=new Map,yn=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bd(e,t){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(t.pointerId)}}function uo(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=yi(t),t!==null&&Yc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ix(e,t,n,r,o){switch(t){case"focusin":return kn=uo(kn,e,t,n,r,o),!0;case"dragenter":return En=uo(En,e,t,n,r,o),!0;case"mouseover":return _n=uo(_n,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Bo.set(i,uo(Bo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Wo.set(i,uo(Wo.get(i)||null,e,t,n,r,o)),!0}return!1}function Gg(e){var t=Gn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Ag(n),t!==null){e.blockedOn=t,Hg(e.priority,function(){Wg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Su(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gu=r,n.target.dispatchEvent(r),gu=null}else return t=yi(n),t!==null&&Yc(t),e.blockedOn=n,!1;t.shift()}return!0}function Wd(e,t,n){Zi(e)&&n.delete(t)}function ax(){bu=!1,kn!==null&&Zi(kn)&&(kn=null),En!==null&&Zi(En)&&(En=null),_n!==null&&Zi(_n)&&(_n=null),Bo.forEach(Wd),Wo.forEach(Wd)}function co(e,t){e.blockedOn===t&&(e.blockedOn=null,bu||(bu=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,ax)))}function Vo(e){function t(o){return co(o,e)}if(0<Ri.length){co(Ri[0],e);for(var n=1;n<Ri.length;n++){var r=Ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kn!==null&&co(kn,e),En!==null&&co(En,e),_n!==null&&co(_n,e),Bo.forEach(t),Wo.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Gg(n),n.blockedOn===null&&yn.shift()}var Cr=sn.ReactCurrentBatchConfig,_a=!0;function sx(e,t,n,r){var o=te,i=Cr.transition;Cr.transition=null;try{te=1,qc(e,t,n,r)}finally{te=o,Cr.transition=i}}function lx(e,t,n,r){var o=te,i=Cr.transition;Cr.transition=null;try{te=4,qc(e,t,n,r)}finally{te=o,Cr.transition=i}}function qc(e,t,n,r){if(_a){var o=Su(e,t,n,r);if(o===null)bl(e,t,r,Oa,n),Bd(e,r);else if(ix(o,e,t,n,r))r.stopPropagation();else if(Bd(e,r),t&4&&-1<ox.indexOf(e)){for(;o!==null;){var i=yi(o);if(i!==null&&Bg(i),i=Su(e,t,n,r),i===null&&bl(e,t,r,Oa,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else bl(e,t,r,null,n)}}var Oa=null;function Su(e,t,n,r){if(Oa=null,e=Gc(r),e=Gn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ag(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oa=e,null}function Kg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yw()){case Kc:return 1;case Dg:return 4;case ka:case qw:return 16;case Mg:return 536870912;default:return 16}default:return 16}}var xn=null,Xc=null,ea=null;function Qg(){if(ea)return ea;var e,t=Xc,n=t.length,r,o="value"in xn?xn.value:xn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ea=o.slice(e,1<r?1-r:void 0)}function ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Vd(){return!1}function dt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ni:Vd,this.isPropagationStopped=Vd,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jc=dt(Qr),gi=he({},Qr,{view:0,detail:0}),ux=dt(gi),dl,pl,fo,bs=he({},gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fo&&(fo&&e.type==="mousemove"?(dl=e.screenX-fo.screenX,pl=e.screenY-fo.screenY):pl=dl=0,fo=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),Hd=dt(bs),cx=he({},bs,{dataTransfer:0}),fx=dt(cx),dx=he({},gi,{relatedTarget:0}),hl=dt(dx),px=he({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=dt(px),mx=he({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gx=dt(mx),yx=he({},Qr,{data:0}),Gd=dt(yx),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xx[e])?!!t[e]:!1}function Zc(){return bx}var Sx=he({},gi,{key:function(e){if(e.key){var t=vx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kx=dt(Sx),Ex=he({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=dt(Ex),_x=he({},gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),Ox=dt(_x),Px=he({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=dt(Px),$x=he({},bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tx=dt($x),jx=[9,13,27,32],ef=tn&&"CompositionEvent"in window,Oo=null;tn&&"documentMode"in document&&(Oo=document.documentMode);var Rx=tn&&"TextEvent"in window&&!Oo,Yg=tn&&(!ef||Oo&&8<Oo&&11>=Oo),Qd=String.fromCharCode(32),Yd=!1;function qg(e,t){switch(e){case"keyup":return jx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function Nx(e,t){switch(e){case"compositionend":return Xg(t);case"keypress":return t.which!==32?null:(Yd=!0,Qd);case"textInput":return e=t.data,e===Qd&&Yd?null:e;default:return null}}function Ax(e,t){if(dr)return e==="compositionend"||!ef&&qg(e,t)?(e=Qg(),ea=Xc=xn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yg&&t.locale!=="ko"?null:t.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lx[e.type]:t==="textarea"}function Jg(e,t,n,r){$g(r),t=Pa(t,"onChange"),0<t.length&&(n=new Jc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Po=null,Ho=null;function zx(e){uy(e,0)}function Ss(e){var t=mr(e);if(Sg(t))return e}function Ix(e,t){if(e==="change")return t}var Zg=!1;if(tn){var ml;if(tn){var gl="oninput"in document;if(!gl){var Xd=document.createElement("div");Xd.setAttribute("oninput","return;"),gl=typeof Xd.oninput=="function"}ml=gl}else ml=!1;Zg=ml&&(!document.documentMode||9<document.documentMode)}function Jd(){Po&&(Po.detachEvent("onpropertychange",ey),Ho=Po=null)}function ey(e){if(e.propertyName==="value"&&Ss(Ho)){var t=[];Jg(t,Ho,e,Gc(e)),Ng(zx,t)}}function Dx(e,t,n){e==="focusin"?(Jd(),Po=t,Ho=n,Po.attachEvent("onpropertychange",ey)):e==="focusout"&&Jd()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(Ho)}function Fx(e,t){if(e==="click")return Ss(t)}function Ux(e,t){if(e==="input"||e==="change")return Ss(t)}function Bx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Bx;function Go(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ou.call(t,o)||!jt(e[o],t[o]))return!1}return!0}function Zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ep(e,t){var n=Zd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zd(n)}}function ty(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ty(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ny(){for(var e=window,t=xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xa(e.document)}return t}function tf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wx(e){var t=ny(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ty(n.ownerDocument.documentElement,n)){if(r!==null&&tf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ep(n,i);var a=ep(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vx=tn&&"documentMode"in document&&11>=document.documentMode,pr=null,ku=null,Co=null,Eu=!1;function tp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eu||pr==null||pr!==xa(r)||(r=pr,"selectionStart"in r&&tf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Co&&Go(Co,r)||(Co=r,r=Pa(ku,"onSelect"),0<r.length&&(t=new Jc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pr)))}function Ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},yl={},ry={};tn&&(ry=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function ks(e){if(yl[e])return yl[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ry)return yl[e]=t[n];return e}var oy=ks("animationend"),iy=ks("animationiteration"),ay=ks("animationstart"),sy=ks("transitionend"),ly=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){ly.set(e,t),or(t,[e])}for(var vl=0;vl<np.length;vl++){var wl=np[vl],Hx=wl.toLowerCase(),Gx=wl[0].toUpperCase()+wl.slice(1);Fn(Hx,"on"+Gx)}Fn(oy,"onAnimationEnd");Fn(iy,"onAnimationIteration");Fn(ay,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(sy,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hw(r,t,void 0,e),e.currentTarget=null}function uy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;rp(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;rp(o,s,u),i=l}}}if(Sa)throw e=wu,Sa=!1,wu=null,e}function ae(e,t){var n=t[$u];n===void 0&&(n=t[$u]=new Set);var r=e+"__bubble";n.has(r)||(cy(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),cy(n,e,r,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function Ko(e){if(!e[Li]){e[Li]=!0,yg.forEach(function(n){n!=="selectionchange"&&(Kx.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,xl("selectionchange",!1,t))}}function cy(e,t,n,r){switch(Kg(t)){case 1:var o=sx;break;case 4:o=lx;break;default:o=qc}n=o.bind(null,t,n,e),o=void 0,!vu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function bl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Gn(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Ng(function(){var u=i,f=Gc(n),c=[];e:{var h=ly.get(e);if(h!==void 0){var v=Jc,g=e;switch(e){case"keypress":if(ta(n)===0)break e;case"keydown":case"keyup":v=kx;break;case"focusin":g="focus",v=hl;break;case"focusout":g="blur",v=hl;break;case"beforeblur":case"afterblur":v=hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ox;break;case oy:case iy:case ay:v=hx;break;case sy:v=Cx;break;case"scroll":v=ux;break;case"wheel":v=Tx;break;case"copy":case"cut":case"paste":v=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Kd}var m=(t&4)!==0,w=!m&&e==="scroll",p=m?h!==null?h+"Capture":null:h;m=[];for(var d=u,y;d!==null;){y=d;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,p!==null&&(b=Uo(d,p),b!=null&&m.push(Qo(d,b,y)))),w)break;d=d.return}0<m.length&&(h=new v(h,g,null,n,f),c.push({event:h,listeners:m}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==gu&&(g=n.relatedTarget||n.fromElement)&&(Gn(g)||g[nn]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Gn(g):null,g!==null&&(w=ir(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(m=Hd,b="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(m=Kd,b="onPointerLeave",p="onPointerEnter",d="pointer"),w=v==null?h:mr(v),y=g==null?h:mr(g),h=new m(b,d+"leave",v,n,f),h.target=w,h.relatedTarget=y,b=null,Gn(f)===u&&(m=new m(p,d+"enter",g,n,f),m.target=y,m.relatedTarget=w,b=m),w=b,v&&g)t:{for(m=v,p=g,d=0,y=m;y;y=sr(y))d++;for(y=0,b=p;b;b=sr(b))y++;for(;0<d-y;)m=sr(m),d--;for(;0<y-d;)p=sr(p),y--;for(;d--;){if(m===p||p!==null&&m===p.alternate)break t;m=sr(m),p=sr(p)}m=null}else m=null;v!==null&&op(c,h,v,m,!1),g!==null&&w!==null&&op(c,w,g,m,!0)}}e:{if(h=u?mr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var k=Ix;else if(qd(h))if(Zg)k=Ux;else{k=Mx;var O=Dx}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Fx);if(k&&(k=k(e,u))){Jg(c,k,n,f);break e}O&&O(e,h,u),e==="focusout"&&(O=h._wrapperState)&&O.controlled&&h.type==="number"&&fu(h,"number",h.value)}switch(O=u?mr(u):window,e){case"focusin":(qd(O)||O.contentEditable==="true")&&(pr=O,ku=u,Co=null);break;case"focusout":Co=ku=pr=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,tp(c,n,f);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":tp(c,n,f)}var C;if(ef)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else dr?qg(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Yg&&n.locale!=="ko"&&(dr||T!=="onCompositionStart"?T==="onCompositionEnd"&&dr&&(C=Qg()):(xn=f,Xc="value"in xn?xn.value:xn.textContent,dr=!0)),O=Pa(u,T),0<O.length&&(T=new Gd(T,e,null,n,f),c.push({event:T,listeners:O}),C?T.data=C:(C=Xg(n),C!==null&&(T.data=C)))),(C=Rx?Nx(e,n):Ax(e,n))&&(u=Pa(u,"onBeforeInput"),0<u.length&&(f=new Gd("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=C))}uy(c,t)})}function Qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pa(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Uo(e,n),i!=null&&r.unshift(Qo(e,i,o)),i=Uo(e,t),i!=null&&r.push(Qo(e,i,o))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function op(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Uo(n,i),l!=null&&a.unshift(Qo(n,l,s))):o||(l=Uo(n,i),l!=null&&a.push(Qo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Qx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function ip(e){return(typeof e=="string"?e:""+e).replace(Qx,`
`).replace(Yx,"")}function zi(e,t,n){if(t=ip(t),ip(e)!==t&&n)throw Error($(425))}function Ca(){}var _u=null,Ou=null;function Pu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(e){return ap.resolve(null).then(e).catch(Jx)}:Cu;function Jx(e){setTimeout(function(){throw e})}function Sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Vo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Vo(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),zt="__reactFiber$"+Yr,Yo="__reactProps$"+Yr,nn="__reactContainer$"+Yr,$u="__reactEvents$"+Yr,Zx="__reactListeners$"+Yr,eb="__reactHandles$"+Yr;function Gn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sp(e);e!==null;){if(n=e[zt])return n;e=sp(e)}return t}e=n,n=e.parentNode}return null}function yi(e){return e=e[zt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function Es(e){return e[Yo]||null}var Tu=[],gr=-1;function Un(e){return{current:e}}function se(e){0>gr||(e.current=Tu[gr],Tu[gr]=null,gr--)}function ie(e,t){gr++,Tu[gr]=e.current,e.current=t}var In={},Ve=Un(In),et=Un(!1),Xn=In;function Lr(e,t){var n=e.type.contextTypes;if(!n)return In;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tt(e){return e=e.childContextTypes,e!=null}function $a(){se(et),se(Ve)}function lp(e,t,n){if(Ve.current!==In)throw Error($(168));ie(Ve,t),ie(et,n)}function fy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error($(108,Dw(e)||"Unknown",o));return he({},n,r)}function Ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,Xn=Ve.current,ie(Ve,e),ie(et,et.current),!0}function up(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=fy(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,se(et),se(Ve),ie(Ve,e)):se(et),ie(et,n)}var Qt=null,_s=!1,kl=!1;function dy(e){Qt===null?Qt=[e]:Qt.push(e)}function tb(e){_s=!0,dy(e)}function Bn(){if(!kl&&Qt!==null){kl=!0;var e=0,t=te;try{var n=Qt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,_s=!1}catch(o){throw Qt!==null&&(Qt=Qt.slice(e+1)),Ig(Kc,Bn),o}finally{te=t,kl=!1}}return null}var yr=[],vr=0,ja=null,Ra=0,ht=[],mt=0,Jn=null,Yt=1,qt="";function Wn(e,t){yr[vr++]=Ra,yr[vr++]=ja,ja=e,Ra=t}function py(e,t,n){ht[mt++]=Yt,ht[mt++]=qt,ht[mt++]=Jn,Jn=e;var r=Yt;e=qt;var o=32-$t(r)-1;r&=~(1<<o),n+=1;var i=32-$t(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Yt=1<<32-$t(t)+o|n<<o|r,qt=i+e}else Yt=1<<i|n<<o|r,qt=e}function nf(e){e.return!==null&&(Wn(e,1),py(e,1,0))}function rf(e){for(;e===ja;)ja=yr[--vr],yr[vr]=null,Ra=yr[--vr],yr[vr]=null;for(;e===Jn;)Jn=ht[--mt],ht[mt]=null,qt=ht[--mt],ht[mt]=null,Yt=ht[--mt],ht[mt]=null}var st=null,it=null,ce=!1,Pt=null;function hy(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,it=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:Yt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,it=null,!0):!1;default:return!1}}function ju(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ru(e){if(ce){var t=it;if(t){var n=t;if(!cp(e,t)){if(ju(e))throw Error($(418));t=On(n.nextSibling);var r=st;t&&cp(e,t)?hy(r,n):(e.flags=e.flags&-4097|2,ce=!1,st=e)}}else{if(ju(e))throw Error($(418));e.flags=e.flags&-4097|2,ce=!1,st=e}}}function fp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Ii(e){if(e!==st)return!1;if(!ce)return fp(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pu(e.type,e.memoizedProps)),t&&(t=it)){if(ju(e))throw my(),Error($(418));for(;t;)hy(e,t),t=On(t.nextSibling)}if(fp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=st?On(e.stateNode.nextSibling):null;return!0}function my(){for(var e=it;e;)e=On(e.nextSibling)}function zr(){it=st=null,ce=!1}function of(e){Pt===null?Pt=[e]:Pt.push(e)}var nb=sn.ReactCurrentBatchConfig;function _t(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Na=Un(null),Aa=null,wr=null,af=null;function sf(){af=wr=Aa=null}function lf(e){var t=Na.current;se(Na),e._currentValue=t}function Nu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){Aa=e,af=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(af!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(Aa===null)throw Error($(308));wr=e,Aa.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Kn=null;function uf(e){Kn===null?Kn=[e]:Kn.push(e)}function gy(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,uf(t)):(n.next=o.next,o.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,rn(e,n)}return o=r.interleaved,o===null?(t.next=t,uf(r)):(t.next=o.next,o.next=t),r.interleaved=t,rn(e,n)}function na(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qc(e,n)}}function dp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function La(e,t,n,r){var o=e.updateQueue;gn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(i!==null){var c=o.baseState;a=0,f=u=l=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,m=s;switch(h=t,v=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){c=g.call(v,c,h);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,h=typeof g=="function"?g.call(v,c,h):g,h==null)break e;c=he({},c,h);break e;case 2:gn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,l=c):f=f.next=v,a|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(f===null&&(l=c),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);er|=a,e.lanes=a,e.memoizedState=c}}function pp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error($(191,o));o.call(r)}}}var vy=new gg.Component().refs;function Au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Os={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),o=$n(e),i=Jt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Pn(e,i,o),t!==null&&(Tt(t,e,o,r),na(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),o=$n(e),i=Jt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pn(e,i,o),t!==null&&(Tt(t,e,o,r),na(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=$n(e),o=Jt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Pn(e,o,r),t!==null&&(Tt(t,e,r,n),na(t,e,r))}};function hp(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Go(n,r)||!Go(o,i):!0}function wy(e,t,n){var r=!1,o=In,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(o=tt(t)?Xn:Ve.current,r=t.contextTypes,i=(r=r!=null)?Lr(e,o):In),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Os,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function mp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Os.enqueueReplaceState(t,t.state,null)}function Lu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=vy,cf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=wt(i):(i=tt(t)?Xn:Ve.current,o.context=Lr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Au(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Os.enqueueReplaceState(o,o.state,null),La(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function po(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===vy&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Di(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gp(e){var t=e._init;return t(e._payload)}function xy(e){function t(p,d){if(e){var y=p.deletions;y===null?(p.deletions=[d],p.flags|=16):y.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=Tn(p,d),p.index=0,p.sibling=null,p}function i(p,d,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<d?(p.flags|=2,d):y):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,y,b){return d===null||d.tag!==6?(d=Tl(y,p.mode,b),d.return=p,d):(d=o(d,y),d.return=p,d)}function l(p,d,y,b){var k=y.type;return k===fr?f(p,d,y.props.children,b,y.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===mn&&gp(k)===d.type)?(b=o(d,y.props),b.ref=po(p,d,y),b.return=p,b):(b=la(y.type,y.key,y.props,null,p.mode,b),b.ref=po(p,d,y),b.return=p,b)}function u(p,d,y,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=jl(y,p.mode,b),d.return=p,d):(d=o(d,y.children||[]),d.return=p,d)}function f(p,d,y,b,k){return d===null||d.tag!==7?(d=qn(y,p.mode,b,k),d.return=p,d):(d=o(d,y),d.return=p,d)}function c(p,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Tl(""+d,p.mode,y),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Pi:return y=la(d.type,d.key,d.props,null,p.mode,y),y.ref=po(p,null,d),y.return=p,y;case cr:return d=jl(d,p.mode,y),d.return=p,d;case mn:var b=d._init;return c(p,b(d._payload),y)}if(wo(d)||so(d))return d=qn(d,p.mode,y,null),d.return=p,d;Di(p,d)}return null}function h(p,d,y,b){var k=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:s(p,d,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Pi:return y.key===k?l(p,d,y,b):null;case cr:return y.key===k?u(p,d,y,b):null;case mn:return k=y._init,h(p,d,k(y._payload),b)}if(wo(y)||so(y))return k!==null?null:f(p,d,y,b,null);Di(p,y)}return null}function v(p,d,y,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(y)||null,s(d,p,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Pi:return p=p.get(b.key===null?y:b.key)||null,l(d,p,b,k);case cr:return p=p.get(b.key===null?y:b.key)||null,u(d,p,b,k);case mn:var O=b._init;return v(p,d,y,O(b._payload),k)}if(wo(b)||so(b))return p=p.get(y)||null,f(d,p,b,k,null);Di(d,b)}return null}function g(p,d,y,b){for(var k=null,O=null,C=d,T=d=0,D=null;C!==null&&T<y.length;T++){C.index>T?(D=C,C=null):D=C.sibling;var L=h(p,C,y[T],b);if(L===null){C===null&&(C=D);break}e&&C&&L.alternate===null&&t(p,C),d=i(L,d,T),O===null?k=L:O.sibling=L,O=L,C=D}if(T===y.length)return n(p,C),ce&&Wn(p,T),k;if(C===null){for(;T<y.length;T++)C=c(p,y[T],b),C!==null&&(d=i(C,d,T),O===null?k=C:O.sibling=C,O=C);return ce&&Wn(p,T),k}for(C=r(p,C);T<y.length;T++)D=v(C,p,T,y[T],b),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?T:D.key),d=i(D,d,T),O===null?k=D:O.sibling=D,O=D);return e&&C.forEach(function(B){return t(p,B)}),ce&&Wn(p,T),k}function m(p,d,y,b){var k=so(y);if(typeof k!="function")throw Error($(150));if(y=k.call(y),y==null)throw Error($(151));for(var O=k=null,C=d,T=d=0,D=null,L=y.next();C!==null&&!L.done;T++,L=y.next()){C.index>T?(D=C,C=null):D=C.sibling;var B=h(p,C,L.value,b);if(B===null){C===null&&(C=D);break}e&&C&&B.alternate===null&&t(p,C),d=i(B,d,T),O===null?k=B:O.sibling=B,O=B,C=D}if(L.done)return n(p,C),ce&&Wn(p,T),k;if(C===null){for(;!L.done;T++,L=y.next())L=c(p,L.value,b),L!==null&&(d=i(L,d,T),O===null?k=L:O.sibling=L,O=L);return ce&&Wn(p,T),k}for(C=r(p,C);!L.done;T++,L=y.next())L=v(C,p,T,L.value,b),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?T:L.key),d=i(L,d,T),O===null?k=L:O.sibling=L,O=L);return e&&C.forEach(function(me){return t(p,me)}),ce&&Wn(p,T),k}function w(p,d,y,b){if(typeof y=="object"&&y!==null&&y.type===fr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Pi:e:{for(var k=y.key,O=d;O!==null;){if(O.key===k){if(k=y.type,k===fr){if(O.tag===7){n(p,O.sibling),d=o(O,y.props.children),d.return=p,p=d;break e}}else if(O.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===mn&&gp(k)===O.type){n(p,O.sibling),d=o(O,y.props),d.ref=po(p,O,y),d.return=p,p=d;break e}n(p,O);break}else t(p,O);O=O.sibling}y.type===fr?(d=qn(y.props.children,p.mode,b,y.key),d.return=p,p=d):(b=la(y.type,y.key,y.props,null,p.mode,b),b.ref=po(p,d,y),b.return=p,p=b)}return a(p);case cr:e:{for(O=y.key;d!==null;){if(d.key===O)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(p,d.sibling),d=o(d,y.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=jl(y,p.mode,b),d.return=p,p=d}return a(p);case mn:return O=y._init,w(p,d,O(y._payload),b)}if(wo(y))return g(p,d,y,b);if(so(y))return m(p,d,y,b);Di(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,y),d.return=p,p=d):(n(p,d),d=Tl(y,p.mode,b),d.return=p,p=d),a(p)):n(p,d)}return w}var Ir=xy(!0),by=xy(!1),vi={},Ft=Un(vi),qo=Un(vi),Xo=Un(vi);function Qn(e){if(e===vi)throw Error($(174));return e}function ff(e,t){switch(ie(Xo,t),ie(qo,e),ie(Ft,vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pu(t,e)}se(Ft),ie(Ft,t)}function Dr(){se(Ft),se(qo),se(Xo)}function Sy(e){Qn(Xo.current);var t=Qn(Ft.current),n=pu(t,e.type);t!==n&&(ie(qo,e),ie(Ft,n))}function df(e){qo.current===e&&(se(Ft),se(qo))}var fe=Un(0);function za(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var El=[];function pf(){for(var e=0;e<El.length;e++)El[e]._workInProgressVersionPrimary=null;El.length=0}var ra=sn.ReactCurrentDispatcher,_l=sn.ReactCurrentBatchConfig,Zn=0,de=null,Ee=null,Oe=null,Ia=!1,$o=!1,Jo=0,rb=0;function Me(){throw Error($(321))}function hf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function mf(e,t,n,r,o,i){if(Zn=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ra.current=e===null||e.memoizedState===null?sb:lb,e=n(r,o),$o){i=0;do{if($o=!1,Jo=0,25<=i)throw Error($(301));i+=1,Oe=Ee=null,t.updateQueue=null,ra.current=ub,e=n(r,o)}while($o)}if(ra.current=Da,t=Ee!==null&&Ee.next!==null,Zn=0,Oe=Ee=de=null,Ia=!1,t)throw Error($(300));return e}function gf(){var e=Jo!==0;return Jo=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?de.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function xt(){if(Ee===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Oe===null?de.memoizedState:Oe.next;if(t!==null)Oe=t,Ee=e;else{if(e===null)throw Error($(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Oe===null?de.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Zo(e,t){return typeof t=="function"?t(e):t}function Ol(e){var t=xt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var f=u.lane;if((Zn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=r):l=l.next=c,de.lanes|=f,er|=f}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,jt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,de.lanes|=i,er|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Pl(e){var t=xt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);jt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ky(){}function Ey(e,t){var n=de,r=xt(),o=t(),i=!jt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ze=!0),r=r.queue,yf(Py.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,ei(9,Oy.bind(null,n,r,o,t),void 0,null),Pe===null)throw Error($(349));Zn&30||_y(n,t,o)}return o}function _y(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Oy(e,t,n,r){t.value=n,t.getSnapshot=r,Cy(t)&&$y(e)}function Py(e,t,n){return n(function(){Cy(t)&&$y(e)})}function Cy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function $y(e){var t=rn(e,1);t!==null&&Tt(t,e,1,-1)}function yp(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:e},t.queue=e,e=e.dispatch=ab.bind(null,de,e),[t.memoizedState,e]}function ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ty(){return xt().memoizedState}function oa(e,t,n,r){var o=Nt();de.flags|=e,o.memoizedState=ei(1|t,n,void 0,r===void 0?null:r)}function Ps(e,t,n,r){var o=xt();r=r===void 0?null:r;var i=void 0;if(Ee!==null){var a=Ee.memoizedState;if(i=a.destroy,r!==null&&hf(r,a.deps)){o.memoizedState=ei(t,n,i,r);return}}de.flags|=e,o.memoizedState=ei(1|t,n,i,r)}function vp(e,t){return oa(8390656,8,e,t)}function yf(e,t){return Ps(2048,8,e,t)}function jy(e,t){return Ps(4,2,e,t)}function Ry(e,t){return Ps(4,4,e,t)}function Ny(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ay(e,t,n){return n=n!=null?n.concat([e]):null,Ps(4,4,Ny.bind(null,t,e),n)}function vf(){}function Ly(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zy(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Iy(e,t,n){return Zn&21?(jt(n,t)||(n=Fg(),de.lanes|=n,er|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function ob(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=_l.transition;_l.transition={};try{e(!1),t()}finally{te=n,_l.transition=r}}function Dy(){return xt().memoizedState}function ib(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},My(e))Fy(t,n);else if(n=gy(e,t,n,r),n!==null){var o=Ke();Tt(n,e,r,o),Uy(n,t,r)}}function ab(e,t,n){var r=$n(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(My(e))Fy(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,jt(s,a)){var l=t.interleaved;l===null?(o.next=o,uf(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=gy(e,t,o,r),n!==null&&(o=Ke(),Tt(n,e,r,o),Uy(n,t,r))}}function My(e){var t=e.alternate;return e===de||t!==null&&t===de}function Fy(e,t){$o=Ia=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qc(e,n)}}var Da={readContext:wt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},sb={readContext:wt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:vp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oa(4194308,4,Ny.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return oa(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ib.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:yp,useDebugValue:vf,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=yp(!1),t=e[0];return e=ob.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=Nt();if(ce){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Pe===null)throw Error($(349));Zn&30||_y(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,vp(Py.bind(null,r,i,e),[e]),r.flags|=2048,ei(9,Oy.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Nt(),t=Pe.identifierPrefix;if(ce){var n=qt,r=Yt;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lb={readContext:wt,useCallback:Ly,useContext:wt,useEffect:yf,useImperativeHandle:Ay,useInsertionEffect:jy,useLayoutEffect:Ry,useMemo:zy,useReducer:Ol,useRef:Ty,useState:function(){return Ol(Zo)},useDebugValue:vf,useDeferredValue:function(e){var t=xt();return Iy(t,Ee.memoizedState,e)},useTransition:function(){var e=Ol(Zo)[0],t=xt().memoizedState;return[e,t]},useMutableSource:ky,useSyncExternalStore:Ey,useId:Dy,unstable_isNewReconciler:!1},ub={readContext:wt,useCallback:Ly,useContext:wt,useEffect:yf,useImperativeHandle:Ay,useInsertionEffect:jy,useLayoutEffect:Ry,useMemo:zy,useReducer:Pl,useRef:Ty,useState:function(){return Pl(Zo)},useDebugValue:vf,useDeferredValue:function(e){var t=xt();return Ee===null?t.memoizedState=e:Iy(t,Ee.memoizedState,e)},useTransition:function(){var e=Pl(Zo)[0],t=xt().memoizedState;return[e,t]},useMutableSource:ky,useSyncExternalStore:Ey,useId:Dy,unstable_isNewReconciler:!1};function Mr(e,t){try{var n="",r=t;do n+=Iw(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cb=typeof WeakMap=="function"?WeakMap:Map;function By(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fa||(Fa=!0,Gu=r),zu(e,t)},n}function Wy(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){zu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){zu(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function wp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cb;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Eb.bind(null,e,t,n),t.then(e,e))}function xp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,Pn(n,t,1))),n.lanes|=1),e)}var fb=sn.ReactCurrentOwner,Ze=!1;function Ge(e,t,n,r){t.child=e===null?by(t,null,n,r):Ir(t,e.child,n,r)}function Sp(e,t,n,r,o){n=n.render;var i=t.ref;return $r(t,o),r=mf(e,t,n,r,i,o),n=gf(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,on(e,t,o)):(ce&&n&&nf(t),t.flags|=1,Ge(e,t,r,o),t.child)}function kp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Of(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Vy(e,t,i,r,o)):(e=la(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(a,r)&&e.ref===t.ref)return on(e,t,o)}return t.flags|=1,e=Tn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Vy(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Go(i,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,on(e,t,o)}return Iu(e,t,n,r,o)}function Hy(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(br,ot),ot|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(br,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(br,ot),ot|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(br,ot),ot|=r;return Ge(e,t,o,n),t.child}function Gy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Iu(e,t,n,r,o){var i=tt(n)?Xn:Ve.current;return i=Lr(t,i),$r(t,o),n=mf(e,t,n,r,i,o),r=gf(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,on(e,t,o)):(ce&&r&&nf(t),t.flags|=1,Ge(e,t,n,o),t.child)}function Ep(e,t,n,r,o){if(tt(n)){var i=!0;Ta(t)}else i=!1;if($r(t,o),t.stateNode===null)ia(e,t),wy(t,n,r),Lu(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=tt(n)?Xn:Ve.current,u=Lr(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&mp(t,a,r,u),gn=!1;var h=t.memoizedState;a.state=h,La(t,r,a,o),l=t.memoizedState,s!==r||h!==l||et.current||gn?(typeof f=="function"&&(Au(t,n,f,r),l=t.memoizedState),(s=gn||hp(t,n,s,r,h,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,yy(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:_t(t.type,s),a.props=u,c=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=wt(l):(l=tt(n)?Xn:Ve.current,l=Lr(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||h!==l)&&mp(t,a,r,l),gn=!1,h=t.memoizedState,a.state=h,La(t,r,a,o);var g=t.memoizedState;s!==c||h!==g||et.current||gn?(typeof v=="function"&&(Au(t,n,v,r),g=t.memoizedState),(u=gn||hp(t,n,u,r,h,g,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Du(e,t,n,r,i,o)}function Du(e,t,n,r,o,i){Gy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&up(t,n,!1),on(e,t,i);r=t.stateNode,fb.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ir(t,e.child,null,i),t.child=Ir(t,null,s,i)):Ge(e,t,s,i),t.memoizedState=r.state,o&&up(t,n,!0),t.child}function Ky(e){var t=e.stateNode;t.pendingContext?lp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lp(e,t.context,!1),ff(e,t.containerInfo)}function _p(e,t,n,r,o){return zr(),of(o),t.flags|=256,Ge(e,t,n,r),t.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function Fu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qy(e,t,n){var r=t.pendingProps,o=fe.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(fe,o&1),e===null)return Ru(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ts(a,r,0,null),e=qn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fu(n),t.memoizedState=Mu,e):wf(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return db(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Tn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Tn(s,i):(i=qn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Fu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Mu,r}return i=e.child,e=i.sibling,r=Tn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wf(e,t){return t=Ts({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mi(e,t,n,r){return r!==null&&of(r),Ir(t,e.child,null,n),e=wf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function db(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Cl(Error($(422))),Mi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ts({mode:"visible",children:r.children},o,0,null),i=qn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ir(t,e.child,null,a),t.child.memoizedState=Fu(a),t.memoizedState=Mu,i);if(!(t.mode&1))return Mi(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error($(419)),r=Cl(i,r,void 0),Mi(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ze||s){if(r=Pe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,rn(e,o),Tt(r,e,o,-1))}return _f(),r=Cl(Error($(421))),Mi(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=_b.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,it=On(o.nextSibling),st=t,ce=!0,Pt=null,e!==null&&(ht[mt++]=Yt,ht[mt++]=qt,ht[mt++]=Jn,Yt=e.id,qt=e.overflow,Jn=t),t=wf(t,r.children),t.flags|=4096,t)}function Op(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nu(e.return,t,n)}function $l(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Yy(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ge(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Op(e,n,t);else if(e.tag===19)Op(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&za(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$l(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&za(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$l(t,!0,n,null,i);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ia(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),er|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pb(e,t,n){switch(t.tag){case 3:Ky(t),zr();break;case 5:Sy(t);break;case 1:tt(t.type)&&Ta(t);break;case 4:ff(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(Na,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Qy(e,t,n):(ie(fe,fe.current&1),e=on(e,t,n),e!==null?e.sibling:null);ie(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Hy(e,t,n)}return on(e,t,n)}var qy,Uu,Xy,Jy;qy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uu=function(){};Xy=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Qn(Ft.current);var i=null;switch(n){case"input":o=uu(e,o),r=uu(e,r),i=[];break;case"select":o=he({},o,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":o=du(e,o),r=du(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ca)}hu(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Jy=function(e,t,n,r){n!==r&&(t.flags|=4)};function ho(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hb(e,t,n){var r=t.pendingProps;switch(rf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return tt(t.type)&&$a(),Fe(t),null;case 3:return r=t.stateNode,Dr(),se(et),se(Ve),pf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Yu(Pt),Pt=null))),Uu(e,t),Fe(t),null;case 5:df(t);var o=Qn(Xo.current);if(n=t.type,e!==null&&t.stateNode!=null)Xy(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Fe(t),null}if(e=Qn(Ft.current),Ii(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[zt]=t,r[Yo]=i,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(o=0;o<bo.length;o++)ae(bo[o],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Ld(r,i),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ae("invalid",r);break;case"textarea":Id(r,i),ae("invalid",r)}hu(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zi(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zi(r.textContent,s,e),o=["children",""+s]):Mo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ae("scroll",r)}switch(n){case"input":Ci(r),zd(r,i,!0);break;case"textarea":Ci(r),Dd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ca)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_g(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[Yo]=r,qy(e,t,!1,!1),t.stateNode=e;e:{switch(a=mu(n,r),n){case"dialog":ae("cancel",e),ae("close",e),o=r;break;case"iframe":case"object":case"embed":ae("load",e),o=r;break;case"video":case"audio":for(o=0;o<bo.length;o++)ae(bo[o],e);o=r;break;case"source":ae("error",e),o=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=r;break;case"details":ae("toggle",e),o=r;break;case"input":Ld(e,r),o=uu(e,r),ae("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=he({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Id(e,r),o=du(e,r),ae("invalid",e);break;default:o=r}hu(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Cg(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Og(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(e,l):typeof l=="number"&&Fo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ae("scroll",e):l!=null&&Bc(e,i,l,a))}switch(n){case"input":Ci(e),zd(e,r,!1);break;case"textarea":Ci(e),Dd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?_r(e,!!r.multiple,i,!1):r.defaultValue!=null&&_r(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)Jy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=Qn(Xo.current),Qn(Ft.current),Ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(i=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Fe(t),null;case 13:if(se(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&it!==null&&t.mode&1&&!(t.flags&128))my(),zr(),t.flags|=98560,i=!1;else if(i=Ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error($(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[zt]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),i=!1}else Pt!==null&&(Yu(Pt),Pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?_e===0&&(_e=3):_f())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Dr(),Uu(e,t),e===null&&Ko(t.stateNode.containerInfo),Fe(t),null;case 10:return lf(t.type._context),Fe(t),null;case 17:return tt(t.type)&&$a(),Fe(t),null;case 19:if(se(fe),i=t.memoizedState,i===null)return Fe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)ho(i,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=za(e),a!==null){for(t.flags|=128,ho(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(fe,fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&we()>Fr&&(t.flags|=128,r=!0,ho(i,!1),t.lanes=4194304)}else{if(!r)if(e=za(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ho(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ce)return Fe(t),null}else 2*we()-i.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,ho(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=we(),t.sibling=null,n=fe.current,ie(fe,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return Ef(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ot&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function mb(e,t){switch(rf(t),t.tag){case 1:return tt(t.type)&&$a(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),se(et),se(Ve),pf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return df(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return Dr(),null;case 10:return lf(t.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var Fi=!1,We=!1,gb=typeof WeakSet=="function"?WeakSet:Set,I=null;function xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Bu(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Pp=!1;function yb(e,t){if(_u=_a,e=ny(),tf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,f=0,c=e,h=null;t:for(;;){for(var v;c!==n||o!==0&&c.nodeType!==3||(s=a+o),c!==i||r!==0&&c.nodeType!==3||(l=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===e)break t;if(h===n&&++u===o&&(s=a),h===i&&++f===r&&(l=a),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:e,selectionRange:n},_a=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,w=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:_t(t.type,m),w);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(b){ye(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return g=Pp,Pp=!1,g}function To(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Bu(t,n,i)}o=o.next}while(o!==r)}}function Cs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zy(e){var t=e.alternate;t!==null&&(e.alternate=null,Zy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Yo],delete t[$u],delete t[Zx],delete t[eb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ev(e){return e.tag===5||e.tag===3||e.tag===4}function Cp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ev(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ca));else if(r!==4&&(e=e.child,e!==null))for(Vu(e,t,n),e=e.sibling;e!==null;)Vu(e,t,n),e=e.sibling}function Hu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}var Re=null,Ot=!1;function dn(e,t,n){for(n=n.child;n!==null;)tv(e,t,n),n=n.sibling}function tv(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(xs,n)}catch{}switch(n.tag){case 5:We||xr(n,t);case 6:var r=Re,o=Ot;Re=null,dn(e,t,n),Re=r,Ot=o,Re!==null&&(Ot?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(Ot?(e=Re,n=n.stateNode,e.nodeType===8?Sl(e.parentNode,n):e.nodeType===1&&Sl(e,n),Vo(e)):Sl(Re,n.stateNode));break;case 4:r=Re,o=Ot,Re=n.stateNode.containerInfo,Ot=!0,dn(e,t,n),Re=r,Ot=o;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Bu(n,t,a),o=o.next}while(o!==r)}dn(e,t,n);break;case 1:if(!We&&(xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ye(n,t,s)}dn(e,t,n);break;case 21:dn(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,dn(e,t,n),We=r):dn(e,t,n);break;default:dn(e,t,n)}}function $p(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gb),t.forEach(function(r){var o=Ob.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Re=s.stateNode,Ot=!1;break e;case 3:Re=s.stateNode.containerInfo,Ot=!0;break e;case 4:Re=s.stateNode.containerInfo,Ot=!0;break e}s=s.return}if(Re===null)throw Error($(160));tv(i,a,o),Re=null,Ot=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ye(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nv(t,e),t=t.sibling}function nv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Rt(e),r&4){try{To(3,e,e.return),Cs(3,e)}catch(m){ye(e,e.return,m)}try{To(5,e,e.return)}catch(m){ye(e,e.return,m)}}break;case 1:kt(t,e),Rt(e),r&512&&n!==null&&xr(n,n.return);break;case 5:if(kt(t,e),Rt(e),r&512&&n!==null&&xr(n,n.return),e.flags&32){var o=e.stateNode;try{Fo(o,"")}catch(m){ye(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&kg(o,i),mu(s,a);var u=mu(s,i);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?Cg(o,c):f==="dangerouslySetInnerHTML"?Og(o,c):f==="children"?Fo(o,c):Bc(o,f,c,u)}switch(s){case"input":cu(o,i);break;case"textarea":Eg(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?_r(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?_r(o,!!i.multiple,i.defaultValue,!0):_r(o,!!i.multiple,i.multiple?[]:"",!1))}o[Yo]=i}catch(m){ye(e,e.return,m)}}break;case 6:if(kt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error($(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){ye(e,e.return,m)}}break;case 3:if(kt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(t.containerInfo)}catch(m){ye(e,e.return,m)}break;case 4:kt(t,e),Rt(e);break;case 13:kt(t,e),Rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Sf=we())),r&4&&$p(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(We=(u=We)||f,kt(t,e),We=u):kt(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(I=e,f=e.child;f!==null;){for(c=I=f;I!==null;){switch(h=I,v=h.child,h.tag){case 0:case 11:case 14:case 15:To(4,h,h.return);break;case 1:xr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){ye(r,n,m)}}break;case 5:xr(h,h.return);break;case 22:if(h.memoizedState!==null){jp(c);continue}}v!==null?(v.return=h,I=v):jp(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Pg("display",a))}catch(m){ye(e,e.return,m)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){ye(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:kt(t,e),Rt(e),r&4&&$p(e);break;case 21:break;default:kt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ev(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Fo(o,""),r.flags&=-33);var i=Cp(e);Hu(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Cp(e);Vu(e,s,a);break;default:throw Error($(161))}}catch(l){ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vb(e,t,n){I=e,rv(e)}function rv(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Fi;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||We;s=Fi;var u=We;if(Fi=a,(We=l)&&!u)for(I=o;I!==null;)a=I,l=a.child,a.tag===22&&a.memoizedState!==null?Rp(o):l!==null?(l.return=a,I=l):Rp(o);for(;i!==null;)I=i,rv(i),i=i.sibling;I=o,Fi=s,We=u}Tp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):Tp(e)}}function Tp(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Cs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&pp(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pp(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Vo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}We||t.flags&512&&Wu(t)}catch(h){ye(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function jp(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Rp(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Cs(4,t)}catch(l){ye(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ye(t,o,l)}}var i=t.return;try{Wu(t)}catch(l){ye(t,i,l)}break;case 5:var a=t.return;try{Wu(t)}catch(l){ye(t,a,l)}}}catch(l){ye(t,t.return,l)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var wb=Math.ceil,Ma=sn.ReactCurrentDispatcher,xf=sn.ReactCurrentOwner,yt=sn.ReactCurrentBatchConfig,Q=0,Pe=null,be=null,Le=0,ot=0,br=Un(0),_e=0,ti=null,er=0,$s=0,bf=0,jo=null,Xe=null,Sf=0,Fr=1/0,Gt=null,Fa=!1,Gu=null,Cn=null,Ui=!1,bn=null,Ua=0,Ro=0,Ku=null,aa=-1,sa=0;function Ke(){return Q&6?we():aa!==-1?aa:aa=we()}function $n(e){return e.mode&1?Q&2&&Le!==0?Le&-Le:nb.transition!==null?(sa===0&&(sa=Fg()),sa):(e=te,e!==0||(e=window.event,e=e===void 0?16:Kg(e.type)),e):1}function Tt(e,t,n,r){if(50<Ro)throw Ro=0,Ku=null,Error($(185));mi(e,n,r),(!(Q&2)||e!==Pe)&&(e===Pe&&(!(Q&2)&&($s|=n),_e===4&&vn(e,Le)),nt(e,r),n===1&&Q===0&&!(t.mode&1)&&(Fr=we()+500,_s&&Bn()))}function nt(e,t){var n=e.callbackNode;nx(e,t);var r=Ea(e,e===Pe?Le:0);if(r===0)n!==null&&Ud(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ud(n),t===1)e.tag===0?tb(Np.bind(null,e)):dy(Np.bind(null,e)),Xx(function(){!(Q&6)&&Bn()}),n=null;else{switch(Ug(r)){case 1:n=Kc;break;case 4:n=Dg;break;case 16:n=ka;break;case 536870912:n=Mg;break;default:n=ka}n=fv(n,ov.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ov(e,t){if(aa=-1,sa=0,Q&6)throw Error($(327));var n=e.callbackNode;if(Tr()&&e.callbackNode!==n)return null;var r=Ea(e,e===Pe?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ba(e,r);else{t=r;var o=Q;Q|=2;var i=av();(Pe!==e||Le!==t)&&(Gt=null,Fr=we()+500,Yn(e,t));do try{Sb();break}catch(s){iv(e,s)}while(1);sf(),Ma.current=i,Q=o,be!==null?t=0:(Pe=null,Le=0,t=_e)}if(t!==0){if(t===2&&(o=xu(e),o!==0&&(r=o,t=Qu(e,o))),t===1)throw n=ti,Yn(e,0),vn(e,r),nt(e,we()),n;if(t===6)vn(e,r);else{if(o=e.current.alternate,!(r&30)&&!xb(o)&&(t=Ba(e,r),t===2&&(i=xu(e),i!==0&&(r=i,t=Qu(e,i))),t===1))throw n=ti,Yn(e,0),vn(e,r),nt(e,we()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:Vn(e,Xe,Gt);break;case 3:if(vn(e,r),(r&130023424)===r&&(t=Sf+500-we(),10<t)){if(Ea(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Cu(Vn.bind(null,e,Xe,Gt),t);break}Vn(e,Xe,Gt);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-$t(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wb(r/1960))-r,10<r){e.timeoutHandle=Cu(Vn.bind(null,e,Xe,Gt),r);break}Vn(e,Xe,Gt);break;case 5:Vn(e,Xe,Gt);break;default:throw Error($(329))}}}return nt(e,we()),e.callbackNode===n?ov.bind(null,e):null}function Qu(e,t){var n=jo;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Ba(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&Yu(t)),e}function Yu(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function xb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!jt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~bf,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$t(t),r=1<<n;e[n]=-1,t&=~r}}function Np(e){if(Q&6)throw Error($(327));Tr();var t=Ea(e,0);if(!(t&1))return nt(e,we()),null;var n=Ba(e,t);if(e.tag!==0&&n===2){var r=xu(e);r!==0&&(t=r,n=Qu(e,r))}if(n===1)throw n=ti,Yn(e,0),vn(e,t),nt(e,we()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vn(e,Xe,Gt),nt(e,we()),null}function kf(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Fr=we()+500,_s&&Bn())}}function tr(e){bn!==null&&bn.tag===0&&!(Q&6)&&Tr();var t=Q;Q|=1;var n=yt.transition,r=te;try{if(yt.transition=null,te=1,e)return e()}finally{te=r,yt.transition=n,Q=t,!(Q&6)&&Bn()}}function Ef(){ot=br.current,se(br)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qx(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(rf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$a();break;case 3:Dr(),se(et),se(Ve),pf();break;case 5:df(r);break;case 4:Dr();break;case 13:se(fe);break;case 19:se(fe);break;case 10:lf(r.type._context);break;case 22:case 23:Ef()}n=n.return}if(Pe=e,be=e=Tn(e.current,null),Le=ot=t,_e=0,ti=null,bf=$s=er=0,Xe=jo=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Kn=null}return e}function iv(e,t){do{var n=be;try{if(sf(),ra.current=Da,Ia){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ia=!1}if(Zn=0,Oe=Ee=de=null,$o=!1,Jo=0,xf.current=null,n===null||n.return===null){_e=1,ti=t,be=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=Le,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=xp(a);if(v!==null){v.flags&=-257,bp(v,a,s,i,t),v.mode&1&&wp(i,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}else{if(!(t&1)){wp(i,u,t),_f();break e}l=Error($(426))}}else if(ce&&s.mode&1){var w=xp(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),bp(w,a,s,i,t),of(Mr(l,s));break e}}i=l=Mr(l,s),_e!==4&&(_e=2),jo===null?jo=[i]:jo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=By(i,l,t);dp(i,p);break e;case 1:s=l;var d=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Cn===null||!Cn.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=Wy(i,s,t);dp(i,b);break e}}i=i.return}while(i!==null)}lv(n)}catch(k){t=k,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function av(){var e=Ma.current;return Ma.current=Da,e===null?Da:e}function _f(){(_e===0||_e===3||_e===2)&&(_e=4),Pe===null||!(er&268435455)&&!($s&268435455)||vn(Pe,Le)}function Ba(e,t){var n=Q;Q|=2;var r=av();(Pe!==e||Le!==t)&&(Gt=null,Yn(e,t));do try{bb();break}catch(o){iv(e,o)}while(1);if(sf(),Q=n,Ma.current=r,be!==null)throw Error($(261));return Pe=null,Le=0,_e}function bb(){for(;be!==null;)sv(be)}function Sb(){for(;be!==null&&!Kw();)sv(be)}function sv(e){var t=cv(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?lv(e):be=t,xf.current=null}function lv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mb(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,be=null;return}}else if(n=hb(n,t,ot),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);_e===0&&(_e=5)}function Vn(e,t,n){var r=te,o=yt.transition;try{yt.transition=null,te=1,kb(e,t,n,r)}finally{yt.transition=o,te=r}return null}function kb(e,t,n,r){do Tr();while(bn!==null);if(Q&6)throw Error($(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(rx(e,i),e===Pe&&(be=Pe=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ui||(Ui=!0,fv(ka,function(){return Tr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=yt.transition,yt.transition=null;var a=te;te=1;var s=Q;Q|=4,xf.current=null,yb(e,n),nv(n,e),Wx(Ou),_a=!!_u,Ou=_u=null,e.current=n,vb(n),Qw(),Q=s,te=a,yt.transition=i}else e.current=n;if(Ui&&(Ui=!1,bn=e,Ua=o),i=e.pendingLanes,i===0&&(Cn=null),Xw(n.stateNode),nt(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Fa)throw Fa=!1,e=Gu,Gu=null,e;return Ua&1&&e.tag!==0&&Tr(),i=e.pendingLanes,i&1?e===Ku?Ro++:(Ro=0,Ku=e):Ro=0,Bn(),null}function Tr(){if(bn!==null){var e=Ug(Ua),t=yt.transition,n=te;try{if(yt.transition=null,te=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,Ua=0,Q&6)throw Error($(331));var o=Q;for(Q|=4,I=e.current;I!==null;){var i=I,a=i.child;if(I.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(I=u;I!==null;){var f=I;switch(f.tag){case 0:case 11:case 15:To(8,f,i)}var c=f.child;if(c!==null)c.return=f,I=c;else for(;I!==null;){f=I;var h=f.sibling,v=f.return;if(Zy(f),f===u){I=null;break}if(h!==null){h.return=v,I=h;break}I=v}}}var g=i.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var w=m.sibling;m.sibling=null,m=w}while(m!==null)}}I=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,I=a;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:To(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,I=p;break e}I=i.return}}var d=e.current;for(I=d;I!==null;){a=I;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,I=y;else e:for(a=d;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Cs(9,s)}}catch(k){ye(s,s.return,k)}if(s===a){I=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,I=b;break e}I=s.return}}if(Q=o,Bn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(xs,e)}catch{}r=!0}return r}finally{te=n,yt.transition=t}}return!1}function Ap(e,t,n){t=Mr(n,t),t=By(e,t,1),e=Pn(e,t,1),t=Ke(),e!==null&&(mi(e,1,t),nt(e,t))}function ye(e,t,n){if(e.tag===3)Ap(e,e,n);else for(;t!==null;){if(t.tag===3){Ap(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=Mr(n,e),e=Wy(t,e,1),t=Pn(t,e,1),e=Ke(),t!==null&&(mi(t,1,e),nt(t,e));break}}t=t.return}}function Eb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Le&n)===n&&(_e===4||_e===3&&(Le&130023424)===Le&&500>we()-Sf?Yn(e,0):bf|=n),nt(e,t)}function uv(e,t){t===0&&(e.mode&1?(t=ji,ji<<=1,!(ji&130023424)&&(ji=4194304)):t=1);var n=Ke();e=rn(e,t),e!==null&&(mi(e,t,n),nt(e,n))}function _b(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uv(e,n)}function Ob(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),uv(e,n)}var cv;cv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,pb(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,ce&&t.flags&1048576&&py(t,Ra,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ia(e,t),e=t.pendingProps;var o=Lr(t,Ve.current);$r(t,n),o=mf(null,t,r,e,o,n);var i=gf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(i=!0,Ta(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,cf(t),o.updater=Os,t.stateNode=o,o._reactInternals=t,Lu(t,r,e,n),t=Du(null,t,r,!0,i,n)):(t.tag=0,ce&&i&&nf(t),Ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ia(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Cb(r),e=_t(r,e),o){case 0:t=Iu(null,t,r,e,n);break e;case 1:t=Ep(null,t,r,e,n);break e;case 11:t=Sp(null,t,r,e,n);break e;case 14:t=kp(null,t,r,_t(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),Iu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),Ep(e,t,r,o,n);case 3:e:{if(Ky(t),e===null)throw Error($(387));r=t.pendingProps,i=t.memoizedState,o=i.element,yy(e,t),La(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Mr(Error($(423)),t),t=_p(e,t,r,n,o);break e}else if(r!==o){o=Mr(Error($(424)),t),t=_p(e,t,r,n,o);break e}else for(it=On(t.stateNode.containerInfo.firstChild),st=t,ce=!0,Pt=null,n=by(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===o){t=on(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return Sy(t),e===null&&Ru(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Pu(r,o)?a=null:i!==null&&Pu(r,i)&&(t.flags|=32),Gy(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&Ru(t),null;case 13:return Qy(e,t,n);case 4:return ff(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),Sp(e,t,r,o,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ie(Na,r._currentValue),r._currentValue=a,i!==null)if(jt(i.value,a)){if(i.children===o.children&&!et.current){t=on(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Nu(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error($(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Nu(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$r(t,n),o=wt(o),r=r(o),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,o=_t(r,t.pendingProps),o=_t(r.type,o),kp(e,t,r,o,n);case 15:return Vy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_t(r,o),ia(e,t),t.tag=1,tt(r)?(e=!0,Ta(t)):e=!1,$r(t,n),wy(t,r,o),Lu(t,r,o,n),Du(null,t,r,!0,e,n);case 19:return Yy(e,t,n);case 22:return Hy(e,t,n)}throw Error($(156,t.tag))};function fv(e,t){return Ig(e,t)}function Pb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new Pb(e,t,n,r)}function Of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cb(e){if(typeof e=="function")return Of(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vc)return 11;if(e===Hc)return 14}return 2}function Tn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function la(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Of(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fr:return qn(n.children,o,i,t);case Wc:a=8,o|=8;break;case iu:return e=gt(12,n,t,o|2),e.elementType=iu,e.lanes=i,e;case au:return e=gt(13,n,t,o),e.elementType=au,e.lanes=i,e;case su:return e=gt(19,n,t,o),e.elementType=su,e.lanes=i,e;case xg:return Ts(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vg:a=10;break e;case wg:a=9;break e;case Vc:a=11;break e;case Hc:a=14;break e;case mn:a=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=gt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function qn(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function Ts(e,t,n,r){return e=gt(22,e,r,t),e.elementType=xg,e.lanes=n,e.stateNode={isHidden:!1},e}function Tl(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $b(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fl(0),this.expirationTimes=fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Pf(e,t,n,r,o,i,a,s,l){return e=new $b(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=gt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(i),e}function Tb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dv(e){if(!e)return In;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(tt(n))return fy(e,n,t)}return t}function pv(e,t,n,r,o,i,a,s,l){return e=Pf(n,r,!0,e,o,i,a,s,l),e.context=dv(null),n=e.current,r=Ke(),o=$n(n),i=Jt(r,o),i.callback=t??null,Pn(n,i,o),e.current.lanes=o,mi(e,o,r),nt(e,r),e}function js(e,t,n,r){var o=t.current,i=Ke(),a=$n(o);return n=dv(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pn(o,t,a),e!==null&&(Tt(e,o,a,i),na(e,o,a)),a}function Wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cf(e,t){Lp(e,t),(e=e.alternate)&&Lp(e,t)}function jb(){return null}var hv=typeof reportError=="function"?reportError:function(e){console.error(e)};function $f(e){this._internalRoot=e}Rs.prototype.render=$f.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));js(e,t,null,null)};Rs.prototype.unmount=$f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tr(function(){js(null,e,null,null)}),t[nn]=null}};function Rs(e){this._internalRoot=e}Rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Gg(e)}};function Tf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zp(){}function Rb(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Wa(a);i.call(u)}}var a=pv(t,r,e,0,null,!1,!1,"",zp);return e._reactRootContainer=a,e[nn]=a.current,Ko(e.nodeType===8?e.parentNode:e),tr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Wa(l);s.call(u)}}var l=Pf(e,0,!1,null,null,!1,!1,"",zp);return e._reactRootContainer=l,e[nn]=l.current,Ko(e.nodeType===8?e.parentNode:e),tr(function(){js(t,l,n,r)}),l}function As(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Wa(a);s.call(l)}}js(t,a,e,o)}else a=Rb(n,t,e,o,r);return Wa(a)}Bg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xo(t.pendingLanes);n!==0&&(Qc(t,n|1),nt(t,we()),!(Q&6)&&(Fr=we()+500,Bn()))}break;case 13:tr(function(){var r=rn(e,1);if(r!==null){var o=Ke();Tt(r,e,1,o)}}),Cf(e,1)}};Yc=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Ke();Tt(t,e,134217728,n)}Cf(e,134217728)}};Wg=function(e){if(e.tag===13){var t=$n(e),n=rn(e,t);if(n!==null){var r=Ke();Tt(n,e,t,r)}Cf(e,t)}};Vg=function(){return te};Hg=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};yu=function(e,t,n){switch(t){case"input":if(cu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Es(r);if(!o)throw Error($(90));Sg(r),cu(r,o)}}}break;case"textarea":Eg(e,n);break;case"select":t=n.value,t!=null&&_r(e,!!n.multiple,t,!1)}};jg=kf;Rg=tr;var Nb={usingClientEntryPoint:!1,Events:[yi,mr,Es,$g,Tg,kf]},mo={findFiberByHostInstance:Gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ab={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lg(e),e===null?null:e.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||jb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bi.isDisabled&&Bi.supportsFiber)try{xs=Bi.inject(Ab),Mt=Bi}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nb;ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(t))throw Error($(200));return Tb(e,t,null,n)};ft.createRoot=function(e,t){if(!Tf(e))throw Error($(299));var n=!1,r="",o=hv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Pf(e,1,!1,null,null,n,!1,r,o),e[nn]=t.current,Ko(e.nodeType===8?e.parentNode:e),new $f(t)};ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Lg(t),e=e===null?null:e.stateNode,e};ft.flushSync=function(e){return tr(e)};ft.hydrate=function(e,t,n){if(!Ns(t))throw Error($(200));return As(null,e,t,!0,n)};ft.hydrateRoot=function(e,t,n){if(!Tf(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=hv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=pv(t,null,e,1,n??null,o,!1,i,a),e[nn]=t.current,Ko(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Rs(t)};ft.render=function(e,t,n){if(!Ns(t))throw Error($(200));return As(null,e,t,!1,n)};ft.unmountComponentAtNode=function(e){if(!Ns(e))throw Error($(40));return e._reactRootContainer?(tr(function(){As(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};ft.unstable_batchedUpdates=kf;ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ns(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return As(e,t,n,!1,r)};ft.version="18.2.0-next-9e3b772b8-20220608";function mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mv)}catch(e){console.error(e)}}mv(),pg.exports=ft;var jf=pg.exports,Ip=jf;ru.createRoot=Ip.createRoot,ru.hydrateRoot=Ip.hydrateRoot;var gv={exports:{}},yv={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=S;function Lb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zb=typeof Object.is=="function"?Object.is:Lb,Ib=Ur.useState,Db=Ur.useEffect,Mb=Ur.useLayoutEffect,Fb=Ur.useDebugValue;function Ub(e,t){var n=t(),r=Ib({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Mb(function(){o.value=n,o.getSnapshot=t,Rl(o)&&i({inst:o})},[e,n,t]),Db(function(){return Rl(o)&&i({inst:o}),e(function(){Rl(o)&&i({inst:o})})},[e]),Fb(n),n}function Rl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zb(e,n)}catch{return!0}}function Bb(e,t){return t()}var Wb=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Bb:Ub;yv.useSyncExternalStore=Ur.useSyncExternalStore!==void 0?Ur.useSyncExternalStore:Wb;gv.exports=yv;var Vb=gv.exports,vv={exports:{}},wv={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=S,Hb=Vb;function Gb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kb=typeof Object.is=="function"?Object.is:Gb,Qb=Hb.useSyncExternalStore,Yb=Ls.useRef,qb=Ls.useEffect,Xb=Ls.useMemo,Jb=Ls.useDebugValue;wv.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=Yb(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=Xb(function(){function l(v){if(!u){if(u=!0,f=v,v=r(v),o!==void 0&&a.hasValue){var g=a.value;if(o(g,v))return c=g}return c=v}if(g=c,Kb(f,v))return g;var m=r(v);return o!==void 0&&o(g,m)?g:(f=v,c=m)}var u=!1,f,c,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,o]);var s=Qb(e,i[0],i[1]);return qb(function(){a.hasValue=!0,a.value=s},[s]),Jb(s),s};vv.exports=wv;var Zb=vv.exports;function eS(e){e()}let xv=eS;const tS=e=>xv=e,nS=()=>xv,Dp=Symbol.for("react-redux-context"),Mp=typeof globalThis<"u"?globalThis:{};function rS(){var e;if(!S.createContext)return{};const t=(e=Mp[Dp])!=null?e:Mp[Dp]=new Map;let n=t.get(S.createContext);return n||(n=S.createContext(null),t.set(S.createContext,n)),n}const Dn=rS();function Rf(e=Dn){return function(){return S.useContext(e)}}const bv=Rf(),oS=()=>{throw new Error("uSES not initialized!")};let Sv=oS;const iS=e=>{Sv=e},aS=(e,t)=>e===t;function sS(e=Dn){const t=e===Dn?bv:Rf(e);return function(r,o={}){const{equalityFn:i=aS,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:l,subscription:u,getServerState:f,stabilityCheck:c,noopCheck:h}=t();S.useRef(!0);const v=S.useCallback({[r.name](m){return r(m)}}[r.name],[r,c,a]),g=Sv(u.addNestedSub,l.getState,f||l.getState,v,i);return S.useDebugValue(g),g}}const qr=sS();var re={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf=Symbol.for("react.element"),Af=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),Is=Symbol.for("react.strict_mode"),Ds=Symbol.for("react.profiler"),Ms=Symbol.for("react.provider"),Fs=Symbol.for("react.context"),lS=Symbol.for("react.server_context"),Us=Symbol.for("react.forward_ref"),Bs=Symbol.for("react.suspense"),Ws=Symbol.for("react.suspense_list"),Vs=Symbol.for("react.memo"),Hs=Symbol.for("react.lazy"),uS=Symbol.for("react.offscreen"),kv;kv=Symbol.for("react.module.reference");function bt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nf:switch(e=e.type,e){case zs:case Ds:case Is:case Bs:case Ws:return e;default:switch(e=e&&e.$$typeof,e){case lS:case Fs:case Us:case Hs:case Vs:case Ms:return e;default:return t}}case Af:return t}}}re.ContextConsumer=Fs;re.ContextProvider=Ms;re.Element=Nf;re.ForwardRef=Us;re.Fragment=zs;re.Lazy=Hs;re.Memo=Vs;re.Portal=Af;re.Profiler=Ds;re.StrictMode=Is;re.Suspense=Bs;re.SuspenseList=Ws;re.isAsyncMode=function(){return!1};re.isConcurrentMode=function(){return!1};re.isContextConsumer=function(e){return bt(e)===Fs};re.isContextProvider=function(e){return bt(e)===Ms};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nf};re.isForwardRef=function(e){return bt(e)===Us};re.isFragment=function(e){return bt(e)===zs};re.isLazy=function(e){return bt(e)===Hs};re.isMemo=function(e){return bt(e)===Vs};re.isPortal=function(e){return bt(e)===Af};re.isProfiler=function(e){return bt(e)===Ds};re.isStrictMode=function(e){return bt(e)===Is};re.isSuspense=function(e){return bt(e)===Bs};re.isSuspenseList=function(e){return bt(e)===Ws};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===zs||e===Ds||e===Is||e===Bs||e===Ws||e===uS||typeof e=="object"&&e!==null&&(e.$$typeof===Hs||e.$$typeof===Vs||e.$$typeof===Ms||e.$$typeof===Fs||e.$$typeof===Us||e.$$typeof===kv||e.getModuleId!==void 0)};re.typeOf=bt;function cS(){const e=nS();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const Fp={notify(){},get:()=>[]};function fS(e,t){let n,r=Fp,o=0,i=!1;function a(m){f();const w=r.subscribe(m);let p=!1;return()=>{p||(p=!0,w(),c())}}function s(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return i}function f(){o++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=cS())}function c(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=Fp)}function h(){i||(i=!0,f())}function v(){i&&(i=!1,c())}const g={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:h,tryUnsubscribe:v,getListeners:()=>r};return g}const dS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pS=dS?S.useLayoutEffect:S.useEffect;function hS({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const a=S.useMemo(()=>{const u=fS(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),s=S.useMemo(()=>e.getState(),[e]);pS(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,s]);const l=t||Dn;return S.createElement(l.Provider,{value:a},n)}function Ev(e=Dn){const t=e===Dn?bv:Rf(e);return function(){const{store:r}=t();return r}}const mS=Ev();function gS(e=Dn){const t=e===Dn?mS:Ev(e);return function(){return t().dispatch}}const _v=gS();iS(Zb.useSyncExternalStoreWithSelector);tS(jf.unstable_batchedUpdates);function ua(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ua=function(n){return typeof n}:ua=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ua(e)}function yS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Up(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function vS(e,t,n){return t&&Up(e.prototype,t),n&&Up(e,n),e}function wS(e,t){return t&&(ua(t)==="object"||typeof t=="function")?t:ca(e)}function qu(e){return qu=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},qu(e)}function ca(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function xS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Xu(e,t)}function Xu(e,t){return Xu=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Xu(e,t)}function fa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ov=function(e){xS(t,e);function t(){var n,r;yS(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=wS(this,(n=qu(t)).call.apply(n,[this].concat(i))),fa(ca(r),"state",{bootstrapped:!1}),fa(ca(r),"_unsubscribe",void 0),fa(ca(r),"handlePersistorState",function(){var s=r.props.persistor,l=s.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return vS(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(S.PureComponent);fa(Ov,"defaultProps",{children:null,loading:null});function Ct(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Mn(e){return!!e&&!!e[ue]}function an(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===$S}(e)||Array.isArray(e)||!!e[Qp]||!!(!((t=e.constructor)===null||t===void 0)&&t[Qp])||Lf(e)||zf(e))}function nr(e,t,n){n===void 0&&(n=!1),Xr(e)===0?(n?Object.keys:Rr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function Xr(e){var t=e[ue];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Lf(e)?2:zf(e)?3:0}function jr(e,t){return Xr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function bS(e,t){return Xr(e)===2?e.get(t):e[t]}function Pv(e,t,n){var r=Xr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Cv(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Lf(e){return PS&&e instanceof Map}function zf(e){return CS&&e instanceof Set}function Hn(e){return e.o||e.t}function If(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Tv(e);delete t[ue];for(var n=Rr(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Df(e,t){return t===void 0&&(t=!1),Mf(e)||Mn(e)||!an(e)||(Xr(e)>1&&(e.set=e.add=e.clear=e.delete=SS),Object.freeze(e),t&&nr(e,function(n,r){return Df(r,!0)},!0)),e}function SS(){Ct(2)}function Mf(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Ut(e){var t=tc[e];return t||Ct(18,e),t}function kS(e,t){tc[e]||(tc[e]=t)}function Ju(){return ni}function Nl(e,t){t&&(Ut("Patches"),e.u=[],e.s=[],e.v=t)}function Va(e){Zu(e),e.p.forEach(ES),e.p=null}function Zu(e){e===ni&&(ni=e.l)}function Bp(e){return ni={p:[],l:ni,h:e,m:!0,_:0}}function ES(e){var t=e[ue];t.i===0||t.i===1?t.j():t.g=!0}function Al(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Ut("ES5").S(t,e,r),r?(n[ue].P&&(Va(t),Ct(4)),an(e)&&(e=Ha(t,e),t.l||Ga(t,e)),t.u&&Ut("Patches").M(n[ue].t,e,t.u,t.s)):e=Ha(t,n,[]),Va(t),t.u&&t.v(t.u,t.s),e!==$v?e:void 0}function Ha(e,t,n){if(Mf(t))return t;var r=t[ue];if(!r)return nr(t,function(s,l){return Wp(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Ga(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=If(r.k):r.o,i=o,a=!1;r.i===3&&(i=new Set(o),o.clear(),a=!0),nr(i,function(s,l){return Wp(e,r,o,s,l,n,a)}),Ga(e,o,!1),n&&e.u&&Ut("Patches").N(r,n,e.u,e.s)}return r.o}function Wp(e,t,n,r,o,i,a){if(Mn(o)){var s=Ha(e,o,i&&t&&t.i!==3&&!jr(t.R,r)?i.concat(r):void 0);if(Pv(n,r,s),!Mn(s))return;e.m=!1}else a&&n.add(o);if(an(o)&&!Mf(o)){if(!e.h.D&&e._<1)return;Ha(e,o),t&&t.A.l||Ga(e,o)}}function Ga(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Df(t,n)}function Ll(e,t){var n=e[ue];return(n?Hn(n):e)[t]}function Vp(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function wn(e){e.P||(e.P=!0,e.l&&wn(e.l))}function zl(e){e.o||(e.o=If(e.t))}function ec(e,t,n){var r=Lf(t)?Ut("MapSet").F(t,n):zf(t)?Ut("MapSet").T(t,n):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:Ju(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},l=s,u=ri;a&&(l=[s],u=So);var f=Proxy.revocable(l,u),c=f.revoke,h=f.proxy;return s.k=h,s.j=c,h}(t,n):Ut("ES5").J(t,n);return(n?n.A:Ju()).p.push(r),r}function _S(e){return Mn(e)||Ct(22,e),function t(n){if(!an(n))return n;var r,o=n[ue],i=Xr(n);if(o){if(!o.P&&(o.i<4||!Ut("ES5").K(o)))return o.t;o.I=!0,r=Hp(n,i),o.I=!1}else r=Hp(n,i);return nr(r,function(a,s){o&&bS(o.t,a)===s||Pv(r,a,t(s))}),i===3?new Set(r):r}(e)}function Hp(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return If(e)}function OS(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var l=this[ue];return ri.get(l,i)},set:function(l){var u=this[ue];ri.set(u,i,l)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][ue];if(!s.P)switch(s.i){case 5:r(s)&&wn(s);break;case 4:n(s)&&wn(s)}}}function n(i){for(var a=i.t,s=i.k,l=Rr(s),u=l.length-1;u>=0;u--){var f=l[u];if(f!==ue){var c=a[f];if(c===void 0&&!jr(a,f))return!0;var h=s[f],v=h&&h[ue];if(v?v.t!==c:!Cv(h,c))return!0}}var g=!!a[ue];return l.length!==Rr(a).length+(g?0:1)}function r(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var o={};kS("ES5",{J:function(i,a){var s=Array.isArray(i),l=function(f,c){if(f){for(var h=Array(c.length),v=0;v<c.length;v++)Object.defineProperty(h,""+v,e(v,!0));return h}var g=Tv(c);delete g[ue];for(var m=Rr(g),w=0;w<m.length;w++){var p=m[w];g[p]=e(p,f||!!g[p].enumerable)}return Object.create(Object.getPrototypeOf(c),g)}(s,i),u={i:s?5:4,A:a?a.A:Ju(),P:!1,I:!1,R:{},l:a,t:i,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,ue,{value:u,writable:!0}),l},S:function(i,a,s){s?Mn(a)&&a[ue].A===i&&t(i.p):(i.u&&function l(u){if(u&&typeof u=="object"){var f=u[ue];if(f){var c=f.t,h=f.k,v=f.R,g=f.i;if(g===4)nr(h,function(y){y!==ue&&(c[y]!==void 0||jr(c,y)?v[y]||l(h[y]):(v[y]=!0,wn(f)))}),nr(c,function(y){h[y]!==void 0||jr(h,y)||(v[y]=!1,wn(f))});else if(g===5){if(r(f)&&(wn(f),v.length=!0),h.length<c.length)for(var m=h.length;m<c.length;m++)v[m]=!1;else for(var w=c.length;w<h.length;w++)v[w]=!0;for(var p=Math.min(h.length,c.length),d=0;d<p;d++)h.hasOwnProperty(d)||(v[d]=!0),v[d]===void 0&&l(h[d])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var Gp,ni,Ff=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",PS=typeof Map<"u",CS=typeof Set<"u",Kp=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",$v=Ff?Symbol.for("immer-nothing"):((Gp={})["immer-nothing"]=!0,Gp),Qp=Ff?Symbol.for("immer-draftable"):"__$immer_draftable",ue=Ff?Symbol.for("immer-state"):"__$immer_state",$S=""+Object.prototype.constructor,Rr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Tv=Object.getOwnPropertyDescriptors||function(e){var t={};return Rr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},tc={},ri={get:function(e,t){if(t===ue)return e;var n=Hn(e);if(!jr(n,t))return function(o,i,a){var s,l=Vp(i,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!an(r)?r:r===Ll(e.t,t)?(zl(e),e.o[t]=ec(e.A.h,r,e)):r},has:function(e,t){return t in Hn(e)},ownKeys:function(e){return Reflect.ownKeys(Hn(e))},set:function(e,t,n){var r=Vp(Hn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=Ll(Hn(e),t),i=o==null?void 0:o[ue];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Cv(n,o)&&(n!==void 0||jr(e.t,t)))return!0;zl(e),wn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Ll(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,zl(e),wn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Hn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ct(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ct(12)}},So={};nr(ri,function(e,t){So[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),So.deleteProperty=function(e,t){return So.set.call(this,e,t,void 0)},So.set=function(e,t,n){return ri.set.call(this,e[0],t,n,e[0])};var TS=function(){function e(n){var r=this;this.O=Kp,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var l=r;return function(m){var w=this;m===void 0&&(m=s);for(var p=arguments.length,d=Array(p>1?p-1:0),y=1;y<p;y++)d[y-1]=arguments[y];return l.produce(m,function(b){var k;return(k=i).call.apply(k,[w,b].concat(d))})}}var u;if(typeof i!="function"&&Ct(6),a!==void 0&&typeof a!="function"&&Ct(7),an(o)){var f=Bp(r),c=ec(r,o,void 0),h=!0;try{u=i(c),h=!1}finally{h?Va(f):Zu(f)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return Nl(f,a),Al(m,f)},function(m){throw Va(f),m}):(Nl(f,a),Al(u,f))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===$v&&(u=void 0),r.D&&Df(u,!0),a){var v=[],g=[];Ut("Patches").M(o,u,v,g),a(v,g)}return u}Ct(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var f=arguments.length,c=Array(f>1?f-1:0),h=1;h<f;h++)c[h-1]=arguments[h];return r.produceWithPatches(u,function(v){return o.apply(void 0,[v].concat(c))})};var a,s,l=r.produce(o,i,function(u,f){a=u,s=f});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){an(n)||Ct(8),Mn(n)&&(n=_S(n));var r=Bp(this),o=ec(this,n,void 0);return o[ue].C=!0,Zu(r),o},t.finishDraft=function(n,r){var o=n&&n[ue],i=o.A;return Nl(i,r),Al(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Kp&&Ct(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var a=Ut("Patches").$;return Mn(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),ut=new TS,jv=ut.produce;ut.produceWithPatches.bind(ut);ut.setAutoFreeze.bind(ut);ut.setUseProxies.bind(ut);ut.applyPatches.bind(ut);ut.createDraft.bind(ut);ut.finishDraft.bind(ut);function oi(e){"@babel/helpers - typeof";return oi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oi(e)}function jS(e,t){if(oi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(oi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function RS(e){var t=jS(e,"string");return oi(t)=="symbol"?t:String(t)}function NS(e,t,n){return t=RS(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function qp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yp(Object(n),!0).forEach(function(r){NS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Be(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Xp=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Il=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ka={INIT:"@@redux/INIT"+Il(),REPLACE:"@@redux/REPLACE"+Il(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Il()}};function AS(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Uf(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Be(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Be(1));return n(Uf)(e,t)}if(typeof e!="function")throw new Error(Be(2));var o=e,i=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function f(){if(l)throw new Error(Be(3));return i}function c(m){if(typeof m!="function")throw new Error(Be(4));if(l)throw new Error(Be(5));var w=!0;return u(),s.push(m),function(){if(w){if(l)throw new Error(Be(6));w=!1,u();var d=s.indexOf(m);s.splice(d,1),a=null}}}function h(m){if(!AS(m))throw new Error(Be(7));if(typeof m.type>"u")throw new Error(Be(8));if(l)throw new Error(Be(9));try{l=!0,i=o(i,m)}finally{l=!1}for(var w=a=s,p=0;p<w.length;p++){var d=w[p];d()}return m}function v(m){if(typeof m!="function")throw new Error(Be(10));o=m,h({type:Ka.REPLACE})}function g(){var m,w=c;return m={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(Be(11));function y(){d.next&&d.next(f())}y();var b=w(y);return{unsubscribe:b}}},m[Xp]=function(){return this},m}return h({type:Ka.INIT}),r={dispatch:h,subscribe:c,getState:f,replaceReducer:v},r[Xp]=g,r}function LS(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Ka.INIT});if(typeof r>"u")throw new Error(Be(12));if(typeof n(void 0,{type:Ka.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Be(13))})}function zS(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{LS(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var f=!1,c={},h=0;h<i.length;h++){var v=i[h],g=n[v],m=l[v],w=g(m,u);if(typeof w>"u")throw u&&u.type,new Error(Be(14));c[v]=w,f=f||w!==m}return f=f||i.length!==Object.keys(l).length,f?c:l}}function Qa(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function IS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Be(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return i=Qa.apply(void 0,s)(o.dispatch),qp(qp({},o),{},{dispatch:i})}}}function Rv(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var Nv=Rv();Nv.withExtraArgument=Rv;const Jp=Nv;var Av=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),DS=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(f){return l([u,f])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Br=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},MS=Object.defineProperty,FS=Object.defineProperties,US=Object.getOwnPropertyDescriptors,Zp=Object.getOwnPropertySymbols,BS=Object.prototype.hasOwnProperty,WS=Object.prototype.propertyIsEnumerable,eh=function(e,t,n){return t in e?MS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},jn=function(e,t){for(var n in t||(t={}))BS.call(t,n)&&eh(e,n,t[n]);if(Zp)for(var r=0,o=Zp(t);r<o.length;r++){var n=o[r];WS.call(t,n)&&eh(e,n,t[n])}return e},Dl=function(e,t){return FS(e,US(t))},VS=function(e,t,n){return new Promise(function(r,o){var i=function(l){try{s(n.next(l))}catch(u){o(u)}},a=function(l){try{s(n.throw(l))}catch(u){o(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(i,a)};s((n=n.apply(e,t)).next())})},HS=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Qa:Qa.apply(null,arguments)};function GS(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Rn(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return jn(jn({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var KS=function(e){Av(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Br([void 0],n[0].concat(this)))):new(t.bind.apply(t,Br([void 0],n.concat(this))))},t}(Array),QS=function(e){Av(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Br([void 0],n[0].concat(this)))):new(t.bind.apply(t,Br([void 0],n.concat(this))))},t}(Array);function nc(e){return an(e)?jv(e,function(){}):e}function YS(e){return typeof e=="boolean"}function qS(){return function(t){return XS(t)}}function XS(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new KS;return n&&(YS(n)?r.push(Jp):r.push(Jp.withExtraArgument(n.extraArgument))),r}var JS=!0;function ZS(e){var t=qS(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,a=i===void 0?t():i,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,f=u===void 0?void 0:u,c=n.enhancers,h=c===void 0?void 0:c,v;if(typeof o=="function")v=o;else if(GS(o))v=zS(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=a;typeof g=="function"&&(g=g(t));var m=IS.apply(void 0,g),w=Qa;l&&(w=HS(jn({trace:!JS},typeof l=="object"&&l)));var p=new QS(m),d=p;Array.isArray(h)?d=Br([m],h):typeof h=="function"&&(d=h(p));var y=w.apply(void 0,d);return Uf(v,f,y)}function Lv(e){var t={},n=[],r,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return n.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function ek(e){return typeof e=="function"}function tk(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?Lv(t):[t,n,r],i=o[0],a=o[1],s=o[2],l;if(ek(e))l=function(){return nc(e())};else{var u=nc(e);l=function(){return u}}function f(c,h){c===void 0&&(c=l());var v=Br([i[h.type]],a.filter(function(g){var m=g.matcher;return m(h)}).map(function(g){var m=g.reducer;return m}));return v.filter(function(g){return!!g}).length===0&&(v=[s]),v.reduce(function(g,m){if(m)if(Mn(g)){var w=g,p=m(w,h);return p===void 0?g:p}else{if(an(g))return jv(g,function(d){return m(d,h)});var p=m(g,h);if(p===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return g},c)}return f.getInitialState=l,f}function nk(e,t){return e+"/"+t}function rk(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:nc(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},a={},s={};o.forEach(function(f){var c=r[f],h=nk(t,f),v,g;"reducer"in c?(v=c.reducer,g=c.prepare):v=c,i[f]=v,a[h]=v,s[f]=g?Rn(h,g):Rn(h)});function l(){var f=typeof e.extraReducers=="function"?Lv(e.extraReducers):[e.extraReducers],c=f[0],h=c===void 0?{}:c,v=f[1],g=v===void 0?[]:v,m=f[2],w=m===void 0?void 0:m,p=jn(jn({},h),a);return tk(n,function(d){for(var y in p)d.addCase(y,p[y]);for(var b=0,k=g;b<k.length;b++){var O=k[b];d.addMatcher(O.matcher,O.reducer)}w&&d.addDefaultCase(w)})}var u;return{name:t,reducer:function(f,c){return u||(u=l()),u(f,c)},actions:s,caseReducers:i,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var ok="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ik=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=ok[Math.random()*64|0];return t},ak=["name","message","stack","code"],Ml=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),th=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),sk=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=ak;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},Jr=function(){function e(t,n,r){var o=Rn(t+"/fulfilled",function(u,f,c,h){return{payload:u,meta:Dl(jn({},h||{}),{arg:c,requestId:f,requestStatus:"fulfilled"})}}),i=Rn(t+"/pending",function(u,f,c){return{payload:void 0,meta:Dl(jn({},c||{}),{arg:f,requestId:u,requestStatus:"pending"})}}),a=Rn(t+"/rejected",function(u,f,c,h,v){return{payload:h,error:(r&&r.serializeError||sk)(u||"Rejected"),meta:Dl(jn({},v||{}),{arg:c,requestId:f,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(f,c,h){var v=r!=null&&r.idGenerator?r.idGenerator(u):ik(),g=new s,m;function w(d){m=d,g.abort()}var p=function(){return VS(this,null,function(){var d,y,b,k,O,C,T;return DS(this,function(D){switch(D.label){case 0:return D.trys.push([0,4,,5]),k=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:c,extra:h}),uk(k)?[4,k]:[3,2];case 1:k=D.sent(),D.label=2;case 2:if(k===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return O=new Promise(function(L,B){return g.signal.addEventListener("abort",function(){return B({name:"AbortError",message:m||"Aborted"})})}),f(i(v,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:v,arg:u},{getState:c,extra:h}))),[4,Promise.race([O,Promise.resolve(n(u,{dispatch:f,getState:c,extra:h,requestId:v,signal:g.signal,abort:w,rejectWithValue:function(L,B){return new Ml(L,B)},fulfillWithValue:function(L,B){return new th(L,B)}})).then(function(L){if(L instanceof Ml)throw L;return L instanceof th?o(L.payload,v,u,L.meta):o(L,v,u)})])];case 3:return b=D.sent(),[3,5];case 4:return C=D.sent(),b=C instanceof Ml?a(null,v,u,C.payload,C.meta):a(C,v,u),[3,5];case 5:return T=r&&!r.dispatchConditionRejection&&a.match(b)&&b.meta.condition,T||f(b),[2,b]}})})}();return Object.assign(p,{abort:w,requestId:v,arg:u,unwrap:function(){return p.then(lk)}})}}return Object.assign(l,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e}();function lk(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function uk(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Bf="listenerMiddleware";Rn(Bf+"/add");Rn(Bf+"/removeAll");Rn(Bf+"/remove");var nh;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);OS();var Wf="persist:",Vf="persist/FLUSH",Gs="persist/REHYDRATE",Hf="persist/PAUSE",Gf="persist/PERSIST",Kf="persist/PURGE",Qf="persist/REGISTER",ck=-1;function da(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?da=function(n){return typeof n}:da=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},da(e)}function rh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function fk(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rh(n,!0).forEach(function(r){dk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rh(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pk(e,t,n,r){r.debug;var o=fk({},n);return e&&da(e)==="object"&&Object.keys(e).forEach(function(i){i!=="_persist"&&t[i]===n[i]&&(o[i]=e[i])}),o}function hk(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],o=e.throttle||0,i="".concat(e.keyPrefix!==void 0?e.keyPrefix:Wf).concat(e.key),a=e.storage,s;e.serialize===!1?s=function(k){return k}:typeof e.serialize=="function"?s=e.serialize:s=mk;var l=e.writeFailHandler||null,u={},f={},c=[],h=null,v=null,g=function(k){Object.keys(k).forEach(function(O){p(O)&&u[O]!==k[O]&&c.indexOf(O)===-1&&c.push(O)}),Object.keys(u).forEach(function(O){k[O]===void 0&&p(O)&&c.indexOf(O)===-1&&u[O]!==void 0&&c.push(O)}),h===null&&(h=setInterval(m,o)),u=k};function m(){if(c.length===0){h&&clearInterval(h),h=null;return}var b=c.shift(),k=r.reduce(function(O,C){return C.in(O,b,u)},u[b]);if(k!==void 0)try{f[b]=s(k)}catch(O){console.error("redux-persist/createPersistoid: error serializing state",O)}else delete f[b];c.length===0&&w()}function w(){Object.keys(f).forEach(function(b){u[b]===void 0&&delete f[b]}),v=a.setItem(i,s(f)).catch(d)}function p(b){return!(n&&n.indexOf(b)===-1&&b!=="_persist"||t&&t.indexOf(b)!==-1)}function d(b){l&&l(b)}var y=function(){for(;c.length!==0;)m();return v||Promise.resolve()};return{update:g,flush:y}}function mk(e){return JSON.stringify(e)}function gk(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Wf).concat(e.key),r=e.storage;e.debug;var o;return e.deserialize===!1?o=function(a){return a}:typeof e.deserialize=="function"?o=e.deserialize:o=yk,r.getItem(n).then(function(i){if(i)try{var a={},s=o(i);return Object.keys(s).forEach(function(l){a[l]=t.reduceRight(function(u,f){return f.out(u,l,s)},o(s[l]))}),a}catch(l){throw l}else return})}function yk(e){return JSON.parse(e)}function vk(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Wf).concat(e.key);return t.removeItem(n,wk)}function wk(e){}function oh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oh(n,!0).forEach(function(r){xk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oh(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bk(e,t){if(e==null)return{};var n=Sk(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Sk(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var kk=5e3;function Ek(e,t){var n=e.version!==void 0?e.version:ck;e.debug;var r=e.stateReconciler===void 0?pk:e.stateReconciler,o=e.getStoredState||gk,i=e.timeout!==void 0?e.timeout:kk,a=null,s=!1,l=!0,u=function(c){return c._persist.rehydrated&&a&&!l&&a.update(c),c};return function(f,c){var h=f||{},v=h._persist,g=bk(h,["_persist"]),m=g;if(c.type===Gf){var w=!1,p=function(T,D){w||(c.rehydrate(e.key,T,D),w=!0)};if(i&&setTimeout(function(){!w&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},i),l=!1,a||(a=hk(e)),v)return Vt({},t(m,c),{_persist:v});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),o(e).then(function(C){var T=e.migrate||function(D,L){return Promise.resolve(D)};T(C,n).then(function(D){p(D)},function(D){p(void 0,D)})},function(C){p(void 0,C)}),Vt({},t(m,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===Kf)return s=!0,c.result(vk(e)),Vt({},t(m,c),{_persist:v});if(c.type===Vf)return c.result(a&&a.flush()),Vt({},t(m,c),{_persist:v});if(c.type===Hf)l=!0;else if(c.type===Gs){if(s)return Vt({},m,{_persist:Vt({},v,{rehydrated:!0})});if(c.key===e.key){var d=t(m,c),y=c.payload,b=r!==!1&&y!==void 0?r(y,f,d,e):d,k=Vt({},b,{_persist:Vt({},v,{rehydrated:!0})});return u(k)}}}if(!v)return t(f,c);var O=t(m,c);return O===m?f:u(Vt({},O,{_persist:v}))}}function ih(e){return Pk(e)||Ok(e)||_k()}function _k(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Ok(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function Pk(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function ah(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function rc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ah(n,!0).forEach(function(r){Ck(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ah(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ck(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var zv={registry:[],bootstrapped:!1},$k=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:zv,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Qf:return rc({},t,{registry:[].concat(ih(t.registry),[n.key])});case Gs:var r=t.registry.indexOf(n.key),o=ih(t.registry);return o.splice(r,1),rc({},t,{registry:o,bootstrapped:o.length===0});default:return t}};function Tk(e,t,n){var r=n||!1,o=Uf($k,zv,t&&t.enhancer?t.enhancer:void 0),i=function(u){o.dispatch({type:Qf,key:u})},a=function(u,f,c){var h={type:Gs,payload:f,err:c,key:u};e.dispatch(h),o.dispatch(h),r&&s.getState().bootstrapped&&(r(),r=!1)},s=rc({},o,{purge:function(){var u=[];return e.dispatch({type:Kf,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:Vf,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:Hf})},persist:function(){e.dispatch({type:Gf,register:i,rehydrate:a})}});return t&&t.manualPersist||s.persist(),s}var Yf={},qf={};qf.__esModule=!0;qf.default=Nk;function pa(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pa=function(n){return typeof n}:pa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},pa(e)}function Fl(){}var jk={getItem:Fl,setItem:Fl,removeItem:Fl};function Rk(e){if((typeof self>"u"?"undefined":pa(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function Nk(e){var t="".concat(e,"Storage");return Rk(t)?self[t]:jk}Yf.__esModule=!0;Yf.default=zk;var Ak=Lk(qf);function Lk(e){return e&&e.__esModule?e:{default:e}}function zk(e){var t=(0,Ak.default)(e);return{getItem:function(r){return new Promise(function(o,i){o(t.getItem(r))})},setItem:function(r,o){return new Promise(function(i,a){i(t.setItem(r,o))})},removeItem:function(r){return new Promise(function(o,i){o(t.removeItem(r))})}}}var Iv=void 0,Ik=Dk(Yf);function Dk(e){return e&&e.__esModule?e:{default:e}}var Mk=(0,Ik.default)("local");Iv=Mk;function Dv(e,t){return function(){return e.apply(t,arguments)}}const{toString:Fk}=Object.prototype,{getPrototypeOf:Xf}=Object,Ks=(e=>t=>{const n=Fk.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Bt=e=>(e=e.toLowerCase(),t=>Ks(t)===e),Qs=e=>t=>typeof t===e,{isArray:Zr}=Array,ii=Qs("undefined");function Uk(e){return e!==null&&!ii(e)&&e.constructor!==null&&!ii(e.constructor)&&vt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Mv=Bt("ArrayBuffer");function Bk(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Mv(e.buffer),t}const Wk=Qs("string"),vt=Qs("function"),Fv=Qs("number"),Ys=e=>e!==null&&typeof e=="object",Vk=e=>e===!0||e===!1,ha=e=>{if(Ks(e)!=="object")return!1;const t=Xf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Hk=Bt("Date"),Gk=Bt("File"),Kk=Bt("Blob"),Qk=Bt("FileList"),Yk=e=>Ys(e)&&vt(e.pipe),qk=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||vt(e.append)&&((t=Ks(e))==="formdata"||t==="object"&&vt(e.toString)&&e.toString()==="[object FormData]"))},Xk=Bt("URLSearchParams"),Jk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function wi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Zr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function Uv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Bv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Wv=e=>!ii(e)&&e!==Bv;function oc(){const{caseless:e}=Wv(this)&&this||{},t={},n=(r,o)=>{const i=e&&Uv(t,o)||o;ha(t[i])&&ha(r)?t[i]=oc(t[i],r):ha(r)?t[i]=oc({},r):Zr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&wi(arguments[r],n);return t}const Zk=(e,t,n,{allOwnKeys:r}={})=>(wi(t,(o,i)=>{n&&vt(o)?e[i]=Dv(o,n):e[i]=o},{allOwnKeys:r}),e),e2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),t2=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},n2=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Xf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},r2=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},o2=e=>{if(!e)return null;if(Zr(e))return e;let t=e.length;if(!Fv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},i2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Xf(Uint8Array)),a2=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},s2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},l2=Bt("HTMLFormElement"),u2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),sh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),c2=Bt("RegExp"),Vv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};wi(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},f2=e=>{Vv(e,(t,n)=>{if(vt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(vt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},d2=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Zr(e)?r(e):r(String(e).split(t)),n},p2=()=>{},h2=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ul="abcdefghijklmnopqrstuvwxyz",lh="0123456789",Hv={DIGIT:lh,ALPHA:Ul,ALPHA_DIGIT:Ul+Ul.toUpperCase()+lh},m2=(e=16,t=Hv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function g2(e){return!!(e&&vt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const y2=e=>{const t=new Array(10),n=(r,o)=>{if(Ys(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Zr(r)?[]:{};return wi(r,(a,s)=>{const l=n(a,o+1);!ii(l)&&(i[s]=l)}),t[o]=void 0,i}}return r};return n(e,0)},v2=Bt("AsyncFunction"),w2=e=>e&&(Ys(e)||vt(e))&&vt(e.then)&&vt(e.catch),P={isArray:Zr,isArrayBuffer:Mv,isBuffer:Uk,isFormData:qk,isArrayBufferView:Bk,isString:Wk,isNumber:Fv,isBoolean:Vk,isObject:Ys,isPlainObject:ha,isUndefined:ii,isDate:Hk,isFile:Gk,isBlob:Kk,isRegExp:c2,isFunction:vt,isStream:Yk,isURLSearchParams:Xk,isTypedArray:i2,isFileList:Qk,forEach:wi,merge:oc,extend:Zk,trim:Jk,stripBOM:e2,inherits:t2,toFlatObject:n2,kindOf:Ks,kindOfTest:Bt,endsWith:r2,toArray:o2,forEachEntry:a2,matchAll:s2,isHTMLForm:l2,hasOwnProperty:sh,hasOwnProp:sh,reduceDescriptors:Vv,freezeMethods:f2,toObjectSet:d2,toCamelCase:u2,noop:p2,toFiniteNumber:h2,findKey:Uv,global:Bv,isContextDefined:Wv,ALPHABET:Hv,generateString:m2,isSpecCompliantForm:g2,toJSONObject:y2,isAsyncFn:v2,isThenable:w2};function K(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}P.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Gv=K.prototype,Kv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Kv[e]={value:e}});Object.defineProperties(K,Kv);Object.defineProperty(Gv,"isAxiosError",{value:!0});K.from=(e,t,n,r,o,i)=>{const a=Object.create(Gv);return P.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),K.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const x2=null;function ic(e){return P.isPlainObject(e)||P.isArray(e)}function Qv(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function uh(e,t,n){return e?e.concat(t).map(function(o,i){return o=Qv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function b2(e){return P.isArray(e)&&!e.some(ic)}const S2=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function qs(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,w){return!P.isUndefined(w[m])});const r=n.metaTokens,o=n.visitor||f,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(P.isDate(g))return g.toISOString();if(!l&&P.isBlob(g))throw new K("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(g)||P.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,m,w){let p=g;if(g&&!w&&typeof g=="object"){if(P.endsWith(m,"{}"))m=r?m:m.slice(0,-2),g=JSON.stringify(g);else if(P.isArray(g)&&b2(g)||(P.isFileList(g)||P.endsWith(m,"[]"))&&(p=P.toArray(g)))return m=Qv(m),p.forEach(function(y,b){!(P.isUndefined(y)||y===null)&&t.append(a===!0?uh([m],b,i):a===null?m:m+"[]",u(y))}),!1}return ic(g)?!0:(t.append(uh(w,m,i),u(g)),!1)}const c=[],h=Object.assign(S2,{defaultVisitor:f,convertValue:u,isVisitable:ic});function v(g,m){if(!P.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));c.push(g),P.forEach(g,function(p,d){(!(P.isUndefined(p)||p===null)&&o.call(t,p,P.isString(d)?d.trim():d,m,h))===!0&&v(p,m?m.concat(d):[d])}),c.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return v(e),t}function ch(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Jf(e,t){this._pairs=[],e&&qs(e,this,t)}const Yv=Jf.prototype;Yv.append=function(t,n){this._pairs.push([t,n])};Yv.toString=function(t){const n=t?function(r){return t.call(this,r,ch)}:ch;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function k2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function qv(e,t,n){if(!t)return e;const r=n&&n.encode||k2,o=n&&n.serialize;let i;if(o?i=o(t,n):i=P.isURLSearchParams(t)?t.toString():new Jf(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class E2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fh=E2,Xv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_2=typeof URLSearchParams<"u"?URLSearchParams:Jf,O2=typeof FormData<"u"?FormData:null,P2=typeof Blob<"u"?Blob:null,C2={isBrowser:!0,classes:{URLSearchParams:_2,FormData:O2,Blob:P2},protocols:["http","https","file","blob","url","data"]},Jv=typeof window<"u"&&typeof document<"u",$2=(e=>Jv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),T2=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),j2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Jv,hasStandardBrowserEnv:$2,hasStandardBrowserWebWorkerEnv:T2},Symbol.toStringTag,{value:"Module"})),It={...j2,...C2};function R2(e,t){return qs(e,new It.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return It.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function N2(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function A2(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Zv(e){function t(n,r,o,i){let a=n[i++];const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&P.isArray(o)?o.length:a,l?(P.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!P.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&P.isArray(o[a])&&(o[a]=A2(o[a])),!s)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,o)=>{t(N2(r),o,n,0)}),n}return null}function L2(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Zf={transitional:Xv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=P.isObject(t);if(i&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return o&&o?JSON.stringify(Zv(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return R2(t,this.formSerializer).toString();if((s=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return qs(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),L2(t)):t}],transformResponse:[function(t){const n=this.transitional||Zf.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&P.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?K.from(s,K.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:It.classes.FormData,Blob:It.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{Zf.headers[e]={}});const ed=Zf,z2=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),I2=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&z2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},dh=Symbol("internals");function go(e){return e&&String(e).trim().toLowerCase()}function ma(e){return e===!1||e==null?e:P.isArray(e)?e.map(ma):String(e)}function D2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const M2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Bl(e,t,n,r,o){if(P.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function F2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function U2(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class Xs{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,l,u){const f=go(l);if(!f)throw new Error("header name must be a non-empty string");const c=P.findKey(o,f);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||l]=ma(s))}const a=(s,l)=>P.forEach(s,(u,f)=>i(u,f,l));return P.isPlainObject(t)||t instanceof this.constructor?a(t,n):P.isString(t)&&(t=t.trim())&&!M2(t)?a(I2(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=go(t),t){const r=P.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return D2(o);if(P.isFunction(n))return n.call(this,o,r);if(P.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=go(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Bl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=go(a),a){const s=P.findKey(r,a);s&&(!n||Bl(r,r[s],s,n))&&(delete r[s],o=!0)}}return P.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Bl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return P.forEach(this,(o,i)=>{const a=P.findKey(r,i);if(a){n[a]=ma(o),delete n[i];return}const s=t?F2(i):String(i).trim();s!==i&&delete n[i],n[s]=ma(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[dh]=this[dh]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=go(a);r[s]||(U2(o,a),r[s]=!0)}return P.isArray(t)?t.forEach(i):i(t),this}}Xs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(Xs.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(Xs);const Zt=Xs;function Wl(e,t){const n=this||ed,r=t||n,o=Zt.from(r.headers);let i=r.data;return P.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function e0(e){return!!(e&&e.__CANCEL__)}function xi(e,t,n){K.call(this,e??"canceled",K.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(xi,K,{__CANCEL__:!0});function B2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const W2=It.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];P.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),P.isString(r)&&a.push("path="+r),P.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function V2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function H2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function t0(e,t){return e&&!V2(t)?H2(e,t):t}const G2=It.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=P.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function K2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Q2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),f=r[i];a||(a=u),n[o]=l,r[o]=u;let c=i,h=0;for(;c!==o;)h+=n[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const v=f&&u-f;return v?Math.round(h*1e3/v):void 0}}function ph(e,t){let n=0;const r=Q2(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,l=r(s),u=i<=a;n=i;const f={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0,event:o};f[t?"download":"upload"]=!0,e(f)}}const Y2=typeof XMLHttpRequest<"u",q2=Y2&&function(e){return new Promise(function(n,r){let o=e.data;const i=Zt.from(e.headers).normalize();let{responseType:a,withXSRFToken:s}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;if(P.isFormData(o)){if(It.hasStandardBrowserEnv||It.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[m,...w]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([m||"multipart/form-data",...w].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+w))}const h=t0(e.baseURL,e.url);c.open(e.method.toUpperCase(),qv(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function v(){if(!c)return;const m=Zt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};B2(function(y){n(y),u()},function(y){r(y),u()},p),c=null}if("onloadend"in c?c.onloadend=v:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(v)},c.onabort=function(){c&&(r(new K("Request aborted",K.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Xv;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new K(w,p.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,e,c)),c=null},It.hasStandardBrowserEnv&&(s&&P.isFunction(s)&&(s=s(e)),s||s!==!1&&G2(h))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&W2.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&P.forEach(i.toJSON(),function(w,p){c.setRequestHeader(p,w)}),P.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ph(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ph(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=m=>{c&&(r(!m||m.type?new xi(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=K2(h);if(g&&It.protocols.indexOf(g)===-1){r(new K("Unsupported protocol "+g+":",K.ERR_BAD_REQUEST,e));return}c.send(o||null)})},ac={http:x2,xhr:q2};P.forEach(ac,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const hh=e=>`- ${e}`,X2=e=>P.isFunction(e)||e===null||e===!1,n0={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!X2(n)&&(r=ac[(a=String(n)).toLowerCase()],r===void 0))throw new K(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(hh).join(`
`):" "+hh(i[0]):"as no adapter specified";throw new K("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:ac};function Vl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xi(null,e)}function mh(e){return Vl(e),e.headers=Zt.from(e.headers),e.data=Wl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),n0.getAdapter(e.adapter||ed.adapter)(e).then(function(r){return Vl(e),r.data=Wl.call(e,e.transformResponse,r),r.headers=Zt.from(r.headers),r},function(r){return e0(r)||(Vl(e),r&&r.response&&(r.response.data=Wl.call(e,e.transformResponse,r.response),r.response.headers=Zt.from(r.response.headers))),Promise.reject(r)})}const gh=e=>e instanceof Zt?e.toJSON():e;function Wr(e,t){t=t||{};const n={};function r(u,f,c){return P.isPlainObject(u)&&P.isPlainObject(f)?P.merge.call({caseless:c},u,f):P.isPlainObject(f)?P.merge({},f):P.isArray(f)?f.slice():f}function o(u,f,c){if(P.isUndefined(f)){if(!P.isUndefined(u))return r(void 0,u,c)}else return r(u,f,c)}function i(u,f){if(!P.isUndefined(f))return r(void 0,f)}function a(u,f){if(P.isUndefined(f)){if(!P.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function s(u,f,c){if(c in t)return r(u,f);if(c in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,f)=>o(gh(u),gh(f),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=l[f]||o,h=c(e[f],t[f],f);P.isUndefined(h)&&c!==s||(n[f]=h)}),n}const r0="1.6.2",td={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{td[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const yh={};td.transitional=function(t,n,r){function o(i,a){return"[Axios v"+r0+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new K(o(a," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!yh[a]&&(yh[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function J2(e,t,n){if(typeof e!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new K("option "+i+" must be "+l,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+i,K.ERR_BAD_OPTION)}}const sc={assertOptions:J2,validators:td},pn=sc.validators;class Ya{constructor(t){this.defaults=t,this.interceptors={request:new fh,response:new fh}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Wr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&sc.assertOptions(r,{silentJSONParsing:pn.transitional(pn.boolean),forcedJSONParsing:pn.transitional(pn.boolean),clarifyTimeoutError:pn.transitional(pn.boolean)},!1),o!=null&&(P.isFunction(o)?n.paramsSerializer={serialize:o}:sc.assertOptions(o,{encode:pn.function,serialize:pn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&P.merge(i.common,i[n.method]);i&&P.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=Zt.concat(a,i);const s=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let f,c=0,h;if(!l){const g=[mh.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),h=g.length,f=Promise.resolve(n);c<h;)f=f.then(g[c++],g[c++]);return f}h=s.length;let v=n;for(c=0;c<h;){const g=s[c++],m=s[c++];try{v=g(v)}catch(w){m.call(this,w);break}}try{f=mh.call(this,v)}catch(g){return Promise.reject(g)}for(c=0,h=u.length;c<h;)f=f.then(u[c++],u[c++]);return f}getUri(t){t=Wr(this.defaults,t);const n=t0(t.baseURL,t.url);return qv(n,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){Ya.prototype[t]=function(n,r){return this.request(Wr(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(Wr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Ya.prototype[t]=n(),Ya.prototype[t+"Form"]=n(!0)});const ga=Ya;class nd{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new xi(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new nd(function(o){t=o}),cancel:t}}}const Z2=nd;function eE(e){return function(n){return e.apply(null,n)}}function tE(e){return P.isObject(e)&&e.isAxiosError===!0}const lc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lc).forEach(([e,t])=>{lc[t]=e});const nE=lc;function o0(e){const t=new ga(e),n=Dv(ga.prototype.request,t);return P.extend(n,ga.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return o0(Wr(e,o))},n}const Se=o0(ed);Se.Axios=ga;Se.CanceledError=xi;Se.CancelToken=Z2;Se.isCancel=e0;Se.VERSION=r0;Se.toFormData=qs;Se.AxiosError=K;Se.Cancel=Se.CanceledError;Se.all=function(t){return Promise.all(t)};Se.spread=eE;Se.isAxiosError=tE;Se.mergeConfig=Wr;Se.AxiosHeaders=Zt;Se.formToJSON=e=>Zv(P.isHTMLForm(e)?new FormData(e):e);Se.getAdapter=n0.getAdapter;Se.HttpStatusCode=nE;Se.default=Se;const ln=Se;ln.defaults.baseURL="https://watertracker-backend.onrender.com";const rd=e=>{ln.defaults.headers.common.Authorization=`Bearer ${e}`},rE=()=>{ln.defaults.headers.common.Authorization=""},oE=async e=>{const{data:t}=await ln.post("/auth/register",e);return rd(t.token),t},iE=async e=>{const{data:t}=await ln.post("/auth/login",e);return rd(t.token),t},aE=async()=>{await ln.post("/auth/logout"),rE()},sE=async e=>{console.log("api-token",e),rd(e);const{data:t}=await ln.get("/user/current");return t},lE=async e=>{const{data:{avatarURL:t}}=await ln.post("/user/avatar",e,{headers:{"Content-Type":"multipart/form-data"}});return t},uE=async e=>await ln.patch("/user/edit",e,{headers:{"Content-Type":"application/json"}}),cE=Jr("auth/register",async(e,{rejectWithValue:t})=>{try{return await oE(e)}catch(n){return t(n.message)}}),fE=Jr("auth/login",async(e,{rejectWithValue:t})=>{try{return await iE(e)}catch(n){return t(n.message)}}),i0=Jr("auth/logout",async(e,{rejectWithValue:t})=>{try{await aE();return}catch(n){return t(n.message)}}),ya=Jr("auth/refresh",async(e,{rejectWithValue:t,getState:n})=>{try{console.log(n());const{auth:r}=n();return console.log(r.token),await sE(r.token)}catch(r){return t(r.message)}},{condition:(e,{getState:t})=>{const{auth:n}=t();if(!n.token)return!1}}),dE=Jr("user/avatar",async(e,{rejectWithValue:t})=>{try{return await lE(e)}catch(n){return t(n.message)}}),pE=Jr("user/edit",async(e,{rejectWithValue:t})=>{try{return await uE(e)}catch(n){return t(n.message)}}),hE=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},mE=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},gE=()=>a0,yE=(e,{payload:t})=>{e.user=t,e.isRefreshing=!1,e.isLoggedIn=!0},vE=e=>{e.isRefreshing=!0},wE=e=>{e.isRefreshing=!1},xE=(e,{payload:t})=>{e.user.avatarURL=t},bE=(e,{payload:t})=>{e.user=t},a0={user:{email:"",avatarURL:"",userName:"",gender:"",waterRate:""},token:null,isLoggedIn:!1,isRefreshing:!1},SE=rk({name:"auth",initialState:a0,extraReducers:e=>{e.addCase(cE.fulfilled,hE).addCase(fE.fulfilled,mE).addCase(i0.fulfilled,gE).addCase(dE.fulfilled,xE).addCase(ya.fulfilled,yE).addCase(pE.fulfilled,bE).addCase(ya.pending,vE).addCase(ya.rejected,wE)}}),kE=SE.reducer,EE={key:"auth",storage:Iv,whitelist:["token"]},s0=ZS({reducer:{auth:Ek(EE,kE)},middleware:e=>e({serializableCheck:{ignoredActions:[Vf,Gs,Hf,Gf,Kf,Qf]}})}),_E=Tk(s0);var l0={};const OE=J0(jw);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=OE;function n(){var a=r([`
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
`]);return n=function(){return a},a}function r(a,s){return s||(s=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(s)}}))}var o=(0,t.css)(n()),i=o;e.default=i})(l0);const PE=rs(l0),uc={color:{black:"#2F2F2F",white:"#FFFFFF",accent:"#407BFF",secondaryWhite:"#ecf2ff",secondaryRed:"#ef5050",secondaryLightBlue:"#9ebbff",secondaryYellow:"#ff9d43",secondaryPowderBlue:"#d7e3ff"},breakpoint:{mobile:"320px",tablet:"768px",desktop:"1440px"},transition:{main:"250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",modal:"300ms ease-in-out"},boxShadowforButton:{normalButton:"0 4px 8px rgba(64, 123, 255, 0.34)",hoverButton:"0 4px 14px rgba(64, 123, 255, 0.54)",activeButton:"none"},modalBoxShadow:{modal:"0 4px 14px rgba(64, 123, 255, 0.3)"}},CE="/water-tracker/assets/Roboto-Regular-4e147ab6.ttf",$E="/water-tracker/assets/Roboto-Medium-9d0d55a3.ttf",TE="/water-tracker/assets/Roboto-Bold-ec685a46.ttf",jE=Mc`
  ${PE}

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
    src: url(${CE}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url(${$E}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: url(${TE}) format('truetype');
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
    color: ${uc.color.black};
    background-color: ${uc.color.white};
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
`;var u0={exports:{}},RE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",NE=RE,AE=NE;function c0(){}function f0(){}f0.resetWarningCache=c0;var LE=function(){function e(r,o,i,a,s,l){if(l!==AE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:f0,resetWarningCache:c0};return n.PropTypes=n,n};u0.exports=LE();var zE=u0.exports;const ko=rs(zE);var IE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,cc=ng(function(e){return IE.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),DE=cc,ME=function(t){return t!=="theme"},vh=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?DE:ME},wh=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},FE=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return vs(n,r,o),zc(function(){return ws(n,r,o)}),null},UE=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=wh(t,n,r),l=s||vh(o),u=!l("as");return function(){var f=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&c.push("label:"+i+";"),f[0]==null||f[0].raw===void 0)c.push.apply(c,f);else{c.push(f[0][0]);for(var h=f.length,v=1;v<h;v++)c.push(f[v],f[0][v])}var g=hi(function(m,w,p){var d=u&&m.as||o,y="",b=[],k=m;if(m.theme==null){k={};for(var O in m)k[O]=m[O];k.theme=S.useContext(en)}typeof m.className=="string"?y=Lc(w.registered,b,m.className):m.className!=null&&(y=m.className+" ");var C=pi(c.concat(b),w.registered,k);y+=w.key+"-"+C.name,a!==void 0&&(y+=" "+a);var T=u&&s===void 0?vh(d):l,D={};for(var L in m)u&&L==="as"||T(L)&&(D[L]=m[L]);return D.className=y,D.ref=p,S.createElement(S.Fragment,null,S.createElement(FE,{cache:w,serialized:C,isStringTag:typeof d=="string"}),S.createElement(d,D))});return g.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=o,g.__emotion_styles=c,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(m,w){return e(m,Io({},n,w,{shouldForwardProp:wh(g,w,!0)})).apply(void 0,c)},g}},BE=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],E=UE.bind();BE.forEach(function(e){E[e]=E(e)});const WE=E.div`
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
`,d0=E.div`
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
`,VE=E.div`
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
`,HE=E.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,GE=E.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.color.accent};

  &:hover,
  &:focus {
    stroke: ${e=>e.theme.color.secondaryYellow};
  }
`,pt="/water-tracker/assets/sprite-c35e1970.svg",Js=({onShow:e=!0,children:t,title:n,onClose:r})=>{const o=document.querySelector("#modal-root"),i=S.useRef(null),a=S.useRef(null);return S.useEffect(()=>{const s=u=>{document.body.style.overflow=u?"hidden":"auto"};(e||o.children.length!==0)&&s(!0);const l=u=>{u.code==="Escape"&&r()};return window.addEventListener("keydown",l),()=>{s(!1),window.removeEventListener("keydown",l)}},[o.children.length,e,r]),jf.createPortal(x.jsx(WE,{onClick:r,ref:a,children:x.jsxs(d0,{onClick:s=>s.stopPropagation(),ref:i,children:[x.jsxs(VE,{children:[x.jsx("h2",{children:n}),x.jsx(HE,{onClick:r,children:x.jsx(GE,{children:x.jsx("use",{href:`${pt}#icon-outline`})})})]}),x.jsx("div",{children:t})]})}),o)};Js.propTypes={onClose:ko.func.isRequired,children:ko.node.isRequired,onShow:ko.bool,title:ko.string.isRequired};const KE=E.div`
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
`;var QE=function(e){return{display:e?"flex":"none"}},YE="#4fa94d",qE={"aria-busy":!0,role:"status"},xh=globalThis&&globalThis.__assign||function(){return xh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},xh.apply(this,arguments)},bh=globalThis&&globalThis.__assign||function(){return bh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},bh.apply(this,arguments)},Sh=globalThis&&globalThis.__assign||function(){return Sh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Sh.apply(this,arguments)},kh=globalThis&&globalThis.__assign||function(){return kh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},kh.apply(this,arguments)},Eh=globalThis&&globalThis.__assign||function(){return Eh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Eh.apply(this,arguments)},_h=globalThis&&globalThis.__assign||function(){return _h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_h.apply(this,arguments)},Oh=globalThis&&globalThis.__assign||function(){return Oh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Oh.apply(this,arguments)};function XE(e){function t(N,A,z,U,_){for(var G=0,R=0,ge=0,J=0,ee,V,$e=0,qe=0,Y,De=Y=ee=0,Z=0,Te=0,oo=0,je=0,Ei=z.length,io=Ei-1,St,W="",ve="",rl="",ol="",fn;Z<Ei;){if(V=z.charCodeAt(Z),Z===io&&R+J+ge+G!==0&&(R!==0&&(V=R===47?10:47),J=ge=G=0,Ei++,io++),R+J+ge+G===0){if(Z===io&&(0<Te&&(W=W.replace(h,"")),0<W.trim().length)){switch(V){case 32:case 9:case 59:case 13:case 10:break;default:W+=z.charAt(Z)}V=59}switch(V){case 123:for(W=W.trim(),ee=W.charCodeAt(0),Y=1,je=++Z;Z<Ei;){switch(V=z.charCodeAt(Z)){case 123:Y++;break;case 125:Y--;break;case 47:switch(V=z.charCodeAt(Z+1)){case 42:case 47:e:{for(De=Z+1;De<io;++De)switch(z.charCodeAt(De)){case 47:if(V===42&&z.charCodeAt(De-1)===42&&Z+2!==De){Z=De+1;break e}break;case 10:if(V===47){Z=De+1;break e}}Z=De}}break;case 91:V++;case 40:V++;case 34:case 39:for(;Z++<io&&z.charCodeAt(Z)!==V;);}if(Y===0)break;Z++}switch(Y=z.substring(je,Z),ee===0&&(ee=(W=W.replace(c,"").trim()).charCodeAt(0)),ee){case 64:switch(0<Te&&(W=W.replace(h,"")),V=W.charCodeAt(1),V){case 100:case 109:case 115:case 45:Te=A;break;default:Te=Wt}if(Y=t(A,Te,Y,V,_+1),je=Y.length,0<j&&(Te=n(Wt,W,oo),fn=s(3,Y,Te,A,le,me,je,V,_,U),W=Te.join(""),fn!==void 0&&(je=(Y=fn.trim()).length)===0&&(V=0,Y="")),0<je)switch(V){case 115:W=W.replace(O,a);case 100:case 109:case 45:Y=W+"{"+Y+"}";break;case 107:W=W.replace(d,"$1 $2"),Y=W+"{"+Y+"}",Y=ke===1||ke===2&&i("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=W+Y,U===112&&(Y=(ve+=Y,""))}else Y="";break;default:Y=t(A,n(A,W,oo),Y,U,_+1)}rl+=Y,Y=oo=Te=De=ee=0,W="",V=z.charCodeAt(++Z);break;case 125:case 59:if(W=(0<Te?W.replace(h,""):W).trim(),1<(je=W.length))switch(De===0&&(ee=W.charCodeAt(0),ee===45||96<ee&&123>ee)&&(je=(W=W.replace(" ",":")).length),0<j&&(fn=s(1,W,A,N,le,me,ve.length,U,_,U))!==void 0&&(je=(W=fn.trim()).length)===0&&(W="\0\0"),ee=W.charCodeAt(0),V=W.charCodeAt(1),ee){case 0:break;case 64:if(V===105||V===99){ol+=W+z.charAt(Z);break}default:W.charCodeAt(je-1)!==58&&(ve+=o(W,ee,V,W.charCodeAt(2)))}oo=Te=De=ee=0,W="",V=z.charCodeAt(++Z)}}switch(V){case 13:case 10:R===47?R=0:1+ee===0&&U!==107&&0<W.length&&(Te=1,W+="\0"),0<j*F&&s(0,W,A,N,le,me,ve.length,U,_,U),me=1,le++;break;case 59:case 125:if(R+J+ge+G===0){me++;break}default:switch(me++,St=z.charAt(Z),V){case 9:case 32:if(J+G+R===0)switch($e){case 44:case 58:case 9:case 32:St="";break;default:V!==32&&(St=" ")}break;case 0:St="\\0";break;case 12:St="\\f";break;case 11:St="\\v";break;case 38:J+R+G===0&&(Te=oo=1,St="\f"+St);break;case 108:if(J+R+G+Ie===0&&0<De)switch(Z-De){case 2:$e===112&&z.charCodeAt(Z-3)===58&&(Ie=$e);case 8:qe===111&&(Ie=qe)}break;case 58:J+R+G===0&&(De=Z);break;case 44:R+ge+J+G===0&&(Te=1,St+="\r");break;case 34:case 39:R===0&&(J=J===V?0:J===0?V:J);break;case 91:J+R+ge===0&&G++;break;case 93:J+R+ge===0&&G--;break;case 41:J+R+G===0&&ge--;break;case 40:if(J+R+G===0){if(ee===0)switch(2*$e+3*qe){case 533:break;default:ee=1}ge++}break;case 64:R+ge+J+G+De+Y===0&&(Y=1);break;case 42:case 47:if(!(0<J+G+ge))switch(R){case 0:switch(2*V+3*z.charCodeAt(Z+1)){case 235:R=47;break;case 220:je=Z,R=42}break;case 42:V===47&&$e===42&&je+2!==Z&&(z.charCodeAt(je+2)===33&&(ve+=z.substring(je,Z+1)),St="",R=0)}}R===0&&(W+=St)}qe=$e,$e=V,Z++}if(je=ve.length,0<je){if(Te=A,0<j&&(fn=s(2,ve,Te,N,le,me,je,U,_,U),fn!==void 0&&(ve=fn).length===0))return ol+ve+rl;if(ve=Te.join(",")+"{"+ve+"}",ke*Ie!==0){switch(ke!==2||i(ve,2)||(Ie=0),Ie){case 111:ve=ve.replace(b,":-moz-$1")+ve;break;case 112:ve=ve.replace(y,"::-webkit-input-$1")+ve.replace(y,"::-moz-$1")+ve.replace(y,":-ms-input-$1")+ve}Ie=0}}return ol+ve+rl}function n(N,A,z){var U=A.trim().split(w);A=U;var _=U.length,G=N.length;switch(G){case 0:case 1:var R=0;for(N=G===0?"":N[0]+" ";R<_;++R)A[R]=r(N,A[R],z).trim();break;default:var ge=R=0;for(A=[];R<_;++R)for(var J=0;J<G;++J)A[ge++]=r(N[J]+" ",U[R],z).trim()}return A}function r(N,A,z){var U=A.charCodeAt(0);switch(33>U&&(U=(A=A.trim()).charCodeAt(0)),U){case 38:return A.replace(p,"$1"+N.trim());case 58:return N.trim()+A.replace(p,"$1"+N.trim());default:if(0<1*z&&0<A.indexOf("\f"))return A.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+A}function o(N,A,z,U){var _=N+";",G=2*A+3*z+4*U;if(G===944){N=_.indexOf(":",9)+1;var R=_.substring(N,_.length-1).trim();return R=_.substring(0,N).trim()+R+";",ke===1||ke===2&&i(R,1)?"-webkit-"+R+R:R}if(ke===0||ke===2&&!i(_,1))return _;switch(G){case 1015:return _.charCodeAt(10)===97?"-webkit-"+_+_:_;case 951:return _.charCodeAt(3)===116?"-webkit-"+_+_:_;case 963:return _.charCodeAt(5)===110?"-webkit-"+_+_:_;case 1009:if(_.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+_+_;case 978:return"-webkit-"+_+"-moz-"+_+_;case 1019:case 983:return"-webkit-"+_+"-moz-"+_+"-ms-"+_+_;case 883:if(_.charCodeAt(8)===45)return"-webkit-"+_+_;if(0<_.indexOf("image-set(",11))return _.replace(B,"$1-webkit-$2")+_;break;case 932:if(_.charCodeAt(4)===45)switch(_.charCodeAt(5)){case 103:return"-webkit-box-"+_.replace("-grow","")+"-webkit-"+_+"-ms-"+_.replace("grow","positive")+_;case 115:return"-webkit-"+_+"-ms-"+_.replace("shrink","negative")+_;case 98:return"-webkit-"+_+"-ms-"+_.replace("basis","preferred-size")+_}return"-webkit-"+_+"-ms-"+_+_;case 964:return"-webkit-"+_+"-ms-flex-"+_+_;case 1023:if(_.charCodeAt(8)!==99)break;return R=_.substring(_.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+_+"-ms-flex-pack"+R+_;case 1005:return g.test(_)?_.replace(v,":-webkit-")+_.replace(v,":-moz-")+_:_;case 1e3:switch(R=_.substring(13).trim(),A=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(A)){case 226:R=_.replace(k,"tb");break;case 232:R=_.replace(k,"tb-rl");break;case 220:R=_.replace(k,"lr");break;default:return _}return"-webkit-"+_+"-ms-"+R+_;case 1017:if(_.indexOf("sticky",9)===-1)break;case 975:switch(A=(_=N).length-10,R=(_.charCodeAt(A)===33?_.substring(0,A):_).substring(N.indexOf(":",7)+1).trim(),G=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:_=_.replace(R,"-webkit-"+R)+";"+_;break;case 207:case 102:_=_.replace(R,"-webkit-"+(102<G?"inline-":"")+"box")+";"+_.replace(R,"-webkit-"+R)+";"+_.replace(R,"-ms-"+R+"box")+";"+_}return _+";";case 938:if(_.charCodeAt(5)===45)switch(_.charCodeAt(6)){case 105:return R=_.replace("-items",""),"-webkit-"+_+"-webkit-box-"+R+"-ms-flex-"+R+_;case 115:return"-webkit-"+_+"-ms-flex-item-"+_.replace(T,"")+_;default:return"-webkit-"+_+"-ms-flex-line-pack"+_.replace("align-content","").replace(T,"")+_}break;case 973:case 989:if(_.charCodeAt(3)!==45||_.charCodeAt(4)===122)break;case 931:case 953:if(L.test(N)===!0)return(R=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?o(N.replace("stretch","fill-available"),A,z,U).replace(":fill-available",":stretch"):_.replace(R,"-webkit-"+R)+_.replace(R,"-moz-"+R.replace("fill-",""))+_;break;case 962:if(_="-webkit-"+_+(_.charCodeAt(5)===102?"-ms-"+_:"")+_,z+U===211&&_.charCodeAt(13)===105&&0<_.indexOf("transform",10))return _.substring(0,_.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+_}return _}function i(N,A){var z=N.indexOf(A===1?":":"{"),U=N.substring(0,A!==3?z:10);return z=N.substring(z+1,N.length-1),M(A!==2?U:U.replace(D,"$1"),z,A)}function a(N,A){var z=o(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return z!==A+";"?z.replace(C," or ($1)").substring(4):"("+A+")"}function s(N,A,z,U,_,G,R,ge,J,ee){for(var V=0,$e=A,qe;V<j;++V)switch(qe=He[V].call(f,N,$e,z,U,_,G,R,ge,J,ee)){case void 0:case!1:case!0:case null:break;default:$e=qe}if($e!==A)return $e}function l(N){switch(N){case void 0:case null:j=He.length=0;break;default:if(typeof N=="function")He[j++]=N;else if(typeof N=="object")for(var A=0,z=N.length;A<z;++A)l(N[A]);else F=!!N|0}return l}function u(N){return N=N.prefix,N!==void 0&&(M=null,N?typeof N!="function"?ke=1:(ke=2,M=N):ke=0),u}function f(N,A){var z=N;if(33>z.charCodeAt(0)&&(z=z.trim()),oe=z,z=[oe],0<j){var U=s(-1,A,z,z,le,me,0,0,0,0);U!==void 0&&typeof U=="string"&&(A=U)}var _=t(Wt,z,A,0,0);return 0<j&&(U=s(-2,_,z,z,le,me,_.length,0,0,0),U!==void 0&&(_=U)),oe="",Ie=0,me=le=1,_}var c=/^\0+/g,h=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,m=/([,: ])(transform)/g,w=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,T=/-self|flex-/g,D=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,B=/([^-])(image-set\()/,me=1,le=1,Ie=0,ke=1,Wt=[],He=[],j=0,M=null,F=0,oe="";return f.use=l,f.set=u,e!==void 0&&u(e),f}var JE={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Xt(){return(Xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ph=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},fc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Rc.typeOf(e)},qa=Object.freeze([]),Nn=Object.freeze({});function ai(e){return typeof e=="function"}function Ch(e){return e.displayName||e.name||"Component"}function od(e){return e&&typeof e.styledComponentId=="string"}var Vr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",id=typeof window<"u"&&"HTMLElement"in window,ZE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function bi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var e_=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&bi(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),va=new Map,Xa=new Map,No=1,Wi=function(e){if(va.has(e))return va.get(e);for(;Xa.has(No);)No++;var t=No++;return va.set(e,t),Xa.set(t,e),t},t_=function(e){return Xa.get(e)},n_=function(e,t){t>=No&&(No=t+1),va.set(e,t),Xa.set(t,e)},r_="style["+Vr+'][data-styled-version="5.3.11"]',o_=new RegExp("^"+Vr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),i_=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},a_=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(o_);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(n_(u,l),i_(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},s_=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},p0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(Vr))return f}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Vr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=s_();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},l_=function(){function e(n){var r=this.element=p0(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var l=i[a];if(l.ownerNode===o)return l}bi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),u_=function(){function e(n){var r=this.element=p0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),c_=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),$h=id,f_={isServer:!id,useCSSOMInjection:!ZE},h0=function(){function e(n,r,o){n===void 0&&(n=Nn),r===void 0&&(r={}),this.options=Xt({},f_,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&id&&$h&&($h=!1,function(i){for(var a=document.querySelectorAll(r_),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Vr)!=="active"&&(a_(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Wi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Xt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new c_(a):i?new l_(a):new u_(a),new e_(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Wi(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Wi(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Wi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=t_(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var f=Vr+".g"+a+'[id="'+s+'"]',c="";l!==void 0&&l.forEach(function(h){h.length>0&&(c+=h+",")}),i+=""+u+f+'{content:"'+c+`"}/*!sc*/
`}}}return i}(this)},e}(),d_=/(a)(d)/gi,Th=function(e){return String.fromCharCode(e+(e>25?39:97))};function dc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Th(t%52)+n;return(Th(t%52)+n).replace(d_,"$1-$2")}var Sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},m0=function(e){return Sr(5381,e)};function p_(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ai(n)&&!od(n))return!1}return!0}var h_=m0("5.3.11"),m_=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&p_(t),this.componentId=n,this.baseHash=Sr(h_,n),this.baseStyle=r,h0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Hr(this.rules,t,n,r).join(""),s=dc(Sr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var l=r(a,"."+s,void 0,o);n.insertRules(o,s,l)}i.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,f=Sr(this.baseHash,r.hash),c="",h=0;h<u;h++){var v=this.rules[h];if(typeof v=="string")c+=v;else if(v){var g=Hr(v,t,n,r),m=Array.isArray(g)?g.join(""):g;f=Sr(f,m+h),c+=m}}if(c){var w=dc(f>>>0);if(!n.hasNameForId(o,w)){var p=r(c,"."+w,void 0,o);n.insertRules(o,w,p)}i.push(w)}}return i.join(" ")},e}(),g_=/^\s*\/\/.*$/gm,y_=[":","[",".","#"];function v_(e){var t,n,r,o,i=e===void 0?Nn:e,a=i.options,s=a===void 0?Nn:a,l=i.plugins,u=l===void 0?qa:l,f=new XE(s),c=[],h=function(m){function w(p){if(p)try{m(p+"}")}catch{}}return function(p,d,y,b,k,O,C,T,D,L){switch(p){case 1:if(D===0&&d.charCodeAt(0)===64)return m(d+";"),"";break;case 2:if(T===0)return d+"/*|*/";break;case 3:switch(T){case 102:case 112:return m(y[0]+d),"";default:return d+(L===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(w)}}}(function(m){c.push(m)}),v=function(m,w,p){return w===0&&y_.indexOf(p[n.length])!==-1||p.match(o)?m:"."+t};function g(m,w,p,d){d===void 0&&(d="&");var y=m.replace(g_,""),b=w&&p?p+" "+w+" { "+y+" }":y;return t=d,n=w,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),f(p||!w?"":w,b)}return f.use([].concat(u,[function(m,w,p){m===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,v))},h,function(m){if(m===-2){var w=c;return c=[],w}}])),g.hash=u.length?u.reduce(function(m,w){return w.name||bi(15),Sr(m,w.name)},5381).toString():"",g}var g0=Ne.createContext();g0.Consumer;var y0=Ne.createContext(),w_=(y0.Consumer,new h0),pc=v_();function x_(){return S.useContext(g0)||w_}function b_(){return S.useContext(y0)||pc}var v0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=pc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return bi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=pc),this.name+t.hash},e}(),S_=/([A-Z])/,k_=/([A-Z])/g,E_=/^ms-/,__=function(e){return"-"+e.toLowerCase()};function jh(e){return S_.test(e)?e.replace(k_,__).replace(E_,"-ms-"):e}var Rh=function(e){return e==null||e===!1||e===""};function Hr(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=Hr(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Rh(e))return"";if(od(e))return"."+e.styledComponentId;if(ai(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Hr(l,t,n,r)}var u;return e instanceof v0?n?(e.inject(n,r),e.getName(r)):e:fc(e)?function f(c,h){var v,g,m=[];for(var w in c)c.hasOwnProperty(w)&&!Rh(c[w])&&(Array.isArray(c[w])&&c[w].isCss||ai(c[w])?m.push(jh(w)+":",c[w],";"):fc(c[w])?m.push.apply(m,f(c[w],w)):m.push(jh(w)+": "+(v=w,(g=c[w])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in JE||v.startsWith("--")?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(m,["}"]):m}(e):e.toString()}var Nh=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function w0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ai(e)||fc(e)?Nh(Hr(Ph(qa,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Nh(Hr(Ph(e,n)))}var O_=function(e,t,n){return n===void 0&&(n=Nn),e.theme!==n.theme&&e.theme||t||n.theme},P_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,C_=/(^-|-$)/g;function Hl(e){return e.replace(P_,"-").replace(C_,"")}var x0=function(e){return dc(m0(e)>>>0)};function Vi(e){return typeof e=="string"&&!0}var hc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},$_=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function T_(e,t,n){var r=e[n];hc(t)&&hc(r)?b0(r,t):e[n]=t}function b0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(hc(a))for(var s in a)$_(s)&&T_(e,a[s],s)}return e}var S0=Ne.createContext();S0.Consumer;var Gl={};function k0(e,t,n){var r=od(e),o=!Vi(e),i=t.attrs,a=i===void 0?qa:i,s=t.componentId,l=s===void 0?function(d,y){var b=typeof d!="string"?"sc":Hl(d);Gl[b]=(Gl[b]||0)+1;var k=b+"-"+x0("5.3.11"+b+Gl[b]);return y?y+"-"+k:k}(t.displayName,t.parentComponentId):s,u=t.displayName,f=u===void 0?function(d){return Vi(d)?"styled."+d:"Styled("+Ch(d)+")"}(e):u,c=t.displayName&&t.componentId?Hl(t.displayName)+"-"+t.componentId:t.componentId||l,h=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(d,y,b){return e.shouldForwardProp(d,y,b)&&t.shouldForwardProp(d,y,b)}:e.shouldForwardProp);var g,m=new m_(n,c,r?e.componentStyle:void 0),w=m.isStatic&&a.length===0,p=function(d,y){return function(b,k,O,C){var T=b.attrs,D=b.componentStyle,L=b.defaultProps,B=b.foldedComponentIds,me=b.shouldForwardProp,le=b.styledComponentId,Ie=b.target,ke=function(U,_,G){U===void 0&&(U=Nn);var R=Xt({},_,{theme:U}),ge={};return G.forEach(function(J){var ee,V,$e,qe=J;for(ee in ai(qe)&&(qe=qe(R)),qe)R[ee]=ge[ee]=ee==="className"?(V=ge[ee],$e=qe[ee],V&&$e?V+" "+$e:V||$e):qe[ee]}),[R,ge]}(O_(k,S.useContext(S0),L)||Nn,k,T),Wt=ke[0],He=ke[1],j=function(U,_,G,R){var ge=x_(),J=b_(),ee=_?U.generateAndInjectStyles(Nn,ge,J):U.generateAndInjectStyles(G,ge,J);return ee}(D,C,Wt),M=O,F=He.$as||k.$as||He.as||k.as||Ie,oe=Vi(F),N=He!==k?Xt({},k,{},He):k,A={};for(var z in N)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?A.as=N[z]:(me?me(z,cc,F):!oe||cc(z))&&(A[z]=N[z]));return k.style&&He.style!==k.style&&(A.style=Xt({},k.style,{},He.style)),A.className=Array.prototype.concat(B,le,j!==le?j:null,k.className,He.className).filter(Boolean).join(" "),A.ref=M,S.createElement(F,A)}(g,d,y,w)};return p.displayName=f,(g=Ne.forwardRef(p)).attrs=h,g.componentStyle=m,g.displayName=f,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):qa,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(d){var y=t.componentId,b=function(O,C){if(O==null)return{};var T,D,L={},B=Object.keys(O);for(D=0;D<B.length;D++)T=B[D],C.indexOf(T)>=0||(L[T]=O[T]);return L}(t,["componentId"]),k=y&&y+"-"+(Vi(d)?d:Hl(Ch(d)));return k0(d,Xt({},b,{attrs:h,componentId:k}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?b0({},e.defaultProps,d):d}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&lg(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var mc=function(e){return function t(n,r,o){if(o===void 0&&(o=Nn),!Rc.isValidElementType(r))return bi(1,String(r));var i=function(){return n(r,o,w0.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Xt({},o,{},a))},i.attrs=function(a){return t(n,r,Xt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(k0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){mc[e]=mc(e)});function ad(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=w0.apply(void 0,[e].concat(n)).join(""),i=x0(o);return new v0(i,o)}const Si=mc;var E0=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Et=242.776657104492,j_=1.6,R_=ad(Ah||(Ah=E0([`
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
`])),Et*.14,Et,Et*.11,Et*.35,Et,Et*.35,Et*.01,Et,Et*.99);Si.path(Lh||(Lh=E0([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),Et*.01,Et,R_,j_);var Ah,Lh,zh=globalThis&&globalThis.__assign||function(){return zh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},zh.apply(this,arguments)},Ih=globalThis&&globalThis.__assign||function(){return Ih=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ih.apply(this,arguments)},Dh=globalThis&&globalThis.__assign||function(){return Dh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Dh.apply(this,arguments)},Mh=globalThis&&globalThis.__assign||function(){return Mh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Mh.apply(this,arguments)},Fh=globalThis&&globalThis.__assign||function(){return Fh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Fh.apply(this,arguments)},Uh=globalThis&&globalThis.__assign||function(){return Uh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Uh.apply(this,arguments)},Bh=globalThis&&globalThis.__assign||function(){return Bh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Bh.apply(this,arguments)},N_=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var o=t.split("."),i=o.length,a=r[o[0]],s=1;a!=null&&s<i;)a=a[o[s]],s+=1;if(typeof a<"u")return a}return n}},sd=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Wh=globalThis&&globalThis.__assign||function(){return Wh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Wh.apply(this,arguments)},A_=ad(Vh||(Vh=sd([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));Si.svg(Hh||(Hh=sd([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),A_,N_("speed","0.75"));Si.polyline(Gh||(Gh=sd([`
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
`])),function(e){return e.width});var Vh,Hh,Gh,Kh=globalThis&&globalThis.__assign||function(){return Kh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Kh.apply(this,arguments)},Qh=globalThis&&globalThis.__assign||function(){return Qh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Qh.apply(this,arguments)},Ao=globalThis&&globalThis.__assign||function(){return Ao=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ao.apply(this,arguments)},L_=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,o=r===void 0?80:r,i=e.radius,a=i===void 0?9:i,s=e.color,l=s===void 0?YE:s,u=e.ariaLabel,f=u===void 0?"three-dots-loading":u,c=e.wrapperStyle,h=e.wrapperClass,v=e.visible,g=v===void 0?!0:v;return Ne.createElement("div",Ao({style:Ao(Ao({},QE(g)),c),className:h,"data-testid":"three-dots-loading","aria-label":f},qE),Ne.createElement("svg",{width:o,height:n,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:l,"data-testid":"three-dots-svg"},Ne.createElement("circle",{cx:"15",cy:"15",r:Number(a)+6},Ne.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Ne.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),Ne.createElement("circle",{cx:"60",cy:"15",r:a,attributeName:"fill-opacity",from:"1",to:"0.3"},Ne.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),Ne.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),Ne.createElement("circle",{cx:"105",cy:"15",r:Number(a)+6},Ne.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Ne.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))},ld=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Yh=globalThis&&globalThis.__assign||function(){return Yh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Yh.apply(this,arguments)},z_=ad(qh||(qh=ld([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));Si.polygon(Xh||(Xh=ld([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),z_);Si.svg(Jh||(Jh=ld([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var qh,Xh,Jh,Zh=globalThis&&globalThis.__assign||function(){return Zh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Zh.apply(this,arguments)},em=globalThis&&globalThis.__assign||function(){return em=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},em.apply(this,arguments)},tm=globalThis&&globalThis.__assign||function(){return tm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},tm.apply(this,arguments)},nm=globalThis&&globalThis.__assign||function(){return nm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},nm.apply(this,arguments)},rm=globalThis&&globalThis.__assign||function(){return rm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},rm.apply(this,arguments)},om=globalThis&&globalThis.__assign||function(){return om=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},om.apply(this,arguments)},im=globalThis&&globalThis.__assign||function(){return im=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},im.apply(this,arguments)},am=globalThis&&globalThis.__assign||function(){return am=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},am.apply(this,arguments)},sm=globalThis&&globalThis.__assign||function(){return sm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},sm.apply(this,arguments)},lm=globalThis&&globalThis.__assign||function(){return lm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},lm.apply(this,arguments)},um=globalThis&&globalThis.__assign||function(){return um=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},um.apply(this,arguments)},cm=globalThis&&globalThis.__assign||function(){return cm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},cm.apply(this,arguments)},fm=globalThis&&globalThis.__assign||function(){return fm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},fm.apply(this,arguments)},dm=globalThis&&globalThis.__assign||function(){return dm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},dm.apply(this,arguments)};const I_=E.div`
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
`,ud=()=>x.jsx(I_,{children:x.jsx(L_,{height:"90",width:"90",radius:"9",color:"#407bff",ariaLabel:"three-dots-loading",visible:!0,timeout:2e3})});/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function si(){return si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},si.apply(this,arguments)}var Sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sn||(Sn={}));const pm="popstate";function D_(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return gc("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ja(o)}return F_(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function M_(){return Math.random().toString(36).substr(2,8)}function hm(e,t){return{usr:e.state,key:e.key,idx:t}}function gc(e,t,n,r){return n===void 0&&(n=null),si({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?eo(t):t,{state:n,key:t&&t.key||r||M_()})}function Ja(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function eo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function F_(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Sn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(si({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){s=Sn.Pop;let w=f(),p=w==null?null:w-u;u=w,l&&l({action:s,location:m.location,delta:p})}function h(w,p){s=Sn.Push;let d=gc(m.location,w,p);n&&n(d,w),u=f()+1;let y=hm(d,u),b=m.createHref(d);try{a.pushState(y,"",b)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(b)}i&&l&&l({action:s,location:m.location,delta:1})}function v(w,p){s=Sn.Replace;let d=gc(m.location,w,p);n&&n(d,w),u=f();let y=hm(d,u),b=m.createHref(d);a.replaceState(y,"",b),i&&l&&l({action:s,location:m.location,delta:0})}function g(w){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof w=="string"?w:Ja(w);return pe(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let m={get action(){return s},get location(){return e(o,a)},listen(w){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(pm,c),l=w,()=>{o.removeEventListener(pm,c),l=null}},createHref(w){return t(o,w)},createURL:g,encodeLocation(w){let p=g(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(w){return a.go(w)}};return m}var mm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mm||(mm={}));function U_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?eo(t):t,o=li(r.pathname||"/",n);if(o==null)return null;let i=_0(e);B_(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=X_(i[s],Z_(o));return a}function _0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=An([r,l.relativePath]),f=n.concat(l);i.children&&i.children.length>0&&(pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_0(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Y_(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of O0(i.path))o(i,a,l)}),t}function O0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=O0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function B_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:q_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const W_=/^:\w+$/,V_=3,H_=2,G_=1,K_=10,Q_=-2,gm=e=>e==="*";function Y_(e,t){let n=e.split("/"),r=n.length;return n.some(gm)&&(r+=Q_),t&&(r+=H_),n.filter(o=>!gm(o)).reduce((o,i)=>o+(W_.test(i)?V_:i===""?G_:K_),r)}function q_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function X_(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=yc({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let c=s.route;i.push({params:r,pathname:An([o,f.pathname]),pathnameBase:oO(An([o,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(o=An([o,f.pathnameBase]))}return i}function yc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=J_(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:h,isOptional:v}=f;if(h==="*"){let m=s[c]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const g=s[c];return v&&!g?u[h]=void 0:u[h]=eO(g||"",h),u},{}),pathname:i,pathnameBase:a,pattern:e}}function J_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),cd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Z_(e){try{return decodeURI(e)}catch(t){return cd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function eO(e,t){try{return decodeURIComponent(e)}catch(n){return cd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function li(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function tO(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?eo(e):e;return{pathname:n?n.startsWith("/")?n:nO(n,t):t,search:iO(r),hash:aO(o)}}function nO(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Kl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rO(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fd(e,t){let n=rO(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function dd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=eo(e):(o=si({},e),pe(!o.pathname||!o.pathname.includes("?"),Kl("?","pathname","search",o)),pe(!o.pathname||!o.pathname.includes("#"),Kl("#","pathname","hash",o)),pe(!o.search||!o.search.includes("#"),Kl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else if(r){let c=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),c.pop();o.pathname=h.join("/")}s="/"+c.join("/")}else{let c=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),c-=1;o.pathname=h.join("/")}s=c>=0?t[c]:"/"}let l=tO(o,s),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const An=e=>e.join("/").replace(/\/\/+/g,"/"),oO=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iO=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,aO=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function sO(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const P0=["post","put","patch","delete"];new Set(P0);const lO=["get",...P0];new Set(lO);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(this,arguments)}const Zs=S.createContext(null),C0=S.createContext(null),un=S.createContext(null),el=S.createContext(null),cn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),$0=S.createContext(null);function uO(e,t){let{relative:n}=t===void 0?{}:t;to()||pe(!1);let{basename:r,navigator:o}=S.useContext(un),{hash:i,pathname:a,search:s}=tl(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:An([r,a])),o.createHref({pathname:l,search:s,hash:i})}function to(){return S.useContext(el)!=null}function no(){return to()||pe(!1),S.useContext(el).location}function T0(e){S.useContext(un).static||S.useLayoutEffect(e)}function j0(){let{isDataRoute:e}=S.useContext(cn);return e?EO():cO()}function cO(){to()||pe(!1);let e=S.useContext(Zs),{basename:t,future:n,navigator:r}=S.useContext(un),{matches:o}=S.useContext(cn),{pathname:i}=no(),a=JSON.stringify(fd(o,n.v7_relativeSplatPath)),s=S.useRef(!1);return T0(()=>{s.current=!0}),S.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=dd(u,JSON.parse(a),i,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:An([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,a,i,e])}const fO=S.createContext(null);function dO(e){let t=S.useContext(cn).outlet;return t&&S.createElement(fO.Provider,{value:e},t)}function tl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(un),{matches:o}=S.useContext(cn),{pathname:i}=no(),a=JSON.stringify(fd(o,r.v7_relativeSplatPath));return S.useMemo(()=>dd(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function pO(e,t){return hO(e,t)}function hO(e,t,n,r){to()||pe(!1);let{navigator:o}=S.useContext(un),{matches:i}=S.useContext(cn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=no(),f;if(t){var c;let w=typeof t=="string"?eo(t):t;l==="/"||(c=w.pathname)!=null&&c.startsWith(l)||pe(!1),f=w}else f=u;let h=f.pathname||"/",v=l==="/"?h:h.slice(l.length)||"/",g=U_(e,{pathname:v}),m=wO(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:An([l,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:An([l,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return t&&m?S.createElement(el.Provider,{value:{location:ui({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Sn.Pop}},m):m}function mO(){let e=kO(),t=sO(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,i)}const gO=S.createElement(mO,null);class yO extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(cn.Provider,{value:this.props.routeContext},S.createElement($0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vO(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(Zs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(cn.Provider,{value:t},r)}function wO(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let f=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));f>=0||pe(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.loader&&c.route.id&&n.loaderData[c.route.id]===void 0&&(!n.errors||n.errors[c.route.id]===void 0)){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}return a.reduceRight((f,c,h)=>{let v,g=!1,m=null,w=null;n&&(v=s&&c.route.id?s[c.route.id]:void 0,m=c.route.errorElement||gO,l&&(u<0&&h===0?(_O("route-fallback",!1),g=!0,w=null):u===h&&(g=!0,w=c.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,h+1)),d=()=>{let y;return v?y=m:g?y=w:c.route.Component?y=S.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=f,S.createElement(vO,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?S.createElement(yO,{location:n.location,revalidation:n.revalidation,component:m,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var R0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(R0||{}),Za=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Za||{});function xO(e){let t=S.useContext(Zs);return t||pe(!1),t}function bO(e){let t=S.useContext(C0);return t||pe(!1),t}function SO(e){let t=S.useContext(cn);return t||pe(!1),t}function N0(e){let t=SO(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function kO(){var e;let t=S.useContext($0),n=bO(Za.UseRouteError),r=N0(Za.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function EO(){let{router:e}=xO(R0.UseNavigateStable),t=N0(Za.UseNavigateStable),n=S.useRef(!1);return T0(()=>{n.current=!0}),S.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ui({fromRouteId:t},i)))},[e,t])}const ym={};function _O(e,t,n){!t&&!ym[e]&&(ym[e]=!0)}function A0(e){let{to:t,replace:n,state:r,relative:o}=e;to()||pe(!1);let{future:i,static:a}=S.useContext(un),{matches:s}=S.useContext(cn),{pathname:l}=no(),u=j0(),f=dd(t,fd(s,i.v7_relativeSplatPath),l,o==="path"),c=JSON.stringify(f);return S.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:o}),[u,c,o,n,r]),null}function OO(e){return dO(e.context)}function hn(e){pe(!1)}function PO(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Sn.Pop,navigator:i,static:a=!1,future:s}=e;to()&&pe(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:i,static:a,future:ui({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=eo(r));let{pathname:f="/",search:c="",hash:h="",state:v=null,key:g="default"}=r,m=S.useMemo(()=>{let w=li(f,l);return w==null?null:{location:{pathname:w,search:c,hash:h,state:v,key:g},navigationType:o}},[l,f,c,h,v,g,o]);return m==null?null:S.createElement(un.Provider,{value:u},S.createElement(el.Provider,{children:n,value:m}))}function CO(e){let{children:t,location:n}=e;return pO(vc(t),n)}new Promise(()=>{});function vc(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let i=[...t,o];if(r.type===S.Fragment){n.push.apply(n,vc(r.props.children,i));return}r.type!==hn&&pe(!1),!r.props.index||!r.props.children||pe(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=vc(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}function L0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function $O(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function TO(e,t){return e.button===0&&(!t||t==="_self")&&!$O(e)}const jO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],RO=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],NO=S.createContext({isTransitioning:!1}),AO="startTransition",vm=Zl[AO];function LO(e){let{basename:t,children:n,future:r,window:o}=e,i=S.useRef();i.current==null&&(i.current=D_({window:o,v5Compat:!0}));let a=i.current,[s,l]=S.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=S.useCallback(c=>{u&&vm?vm(()=>l(c)):l(c)},[l,u]);return S.useLayoutEffect(()=>a.listen(f),[a,f]),S.createElement(PO,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const zO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",IO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DO=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,h=L0(t,jO),{basename:v}=S.useContext(un),g,m=!1;if(typeof u=="string"&&IO.test(u)&&(g=u,zO))try{let y=new URL(window.location.href),b=u.startsWith("//")?new URL(y.protocol+u):new URL(u),k=li(b.pathname,v);b.origin===y.origin&&k!=null?u=k+b.search+b.hash:m=!0}catch{}let w=uO(u,{relative:o}),p=FO(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:o,unstable_viewTransition:c});function d(y){r&&r(y),y.defaultPrevented||p(y)}return S.createElement("a",es({},h,{href:g||w,onClick:m||i?r:d,ref:n,target:l}))}),ci=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:l,unstable_viewTransition:u,children:f}=t,c=L0(t,RO),h=tl(l,{relative:c.relative}),v=no(),g=S.useContext(C0),{navigator:m}=S.useContext(un),w=g!=null&&UO(h)&&u===!0,p=m.encodeLocation?m.encodeLocation(h).pathname:h.pathname,d=v.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(d=d.toLowerCase(),y=y?y.toLowerCase():null,p=p.toLowerCase());const b=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let k=d===p||!a&&d.startsWith(p)&&d.charAt(b)==="/",O=y!=null&&(y===p||!a&&y.startsWith(p)&&y.charAt(p.length)==="/"),C={isActive:k,isPending:O,isTransitioning:w},T=k?r:void 0,D;typeof i=="function"?D=i(C):D=[i,k?"active":null,O?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let L=typeof s=="function"?s(C):s;return S.createElement(DO,es({},c,{"aria-current":T,className:D,ref:n,style:L,to:l,unstable_viewTransition:u}),typeof f=="function"?f(C):f)});var wc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wc||(wc={}));var wm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wm||(wm={}));function MO(e){let t=S.useContext(Zs);return t||pe(!1),t}function FO(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=j0(),u=no(),f=tl(e,{relative:a});return S.useCallback(c=>{if(TO(c,n)){c.preventDefault();let h=r!==void 0?r:Ja(u)===Ja(f);l(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s})}},[u,l,f,r,o,n,e,i,a,s])}function UO(e,t){t===void 0&&(t={});let n=S.useContext(NO);n==null&&pe(!1);let{basename:r}=MO(wc.useViewTransitionState),o=tl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=li(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=li(n.nextLocation.pathname,r)||n.nextLocation.pathname;return yc(o.pathname,a)!=null||yc(o.pathname,i)!=null}const xm="/water-tracker/assets/Logo-890d13ba.png",bm=E.img`
  width: 102px;
  height: 48px;
`,BO=e=>e.auth.user,nl=e=>e.auth.isLoggedIn,WO=e=>e.auth.isRefreshing,VO=()=>{const e=qr(nl);return x.jsx("div",{children:e?x.jsx(ci,{to:"/home",children:x.jsx(bm,{src:xm,alt:"logo"})}):x.jsx(ci,{to:"/",children:x.jsx(bm,{src:xm,alt:"logo"})})})},HO=E.div`
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
`,GO=()=>{const e=qr(nl);return x.jsx("header",{children:x.jsx(KE,{children:x.jsxs(HO,{children:[x.jsx(VO,{}),e?x.jsx(eC,{}):x.jsx(KP,{})]})})})},z0="/water-tracker/assets/bottleMob-814a9d12.png",I0="/water-tracker/assets/bottleMob@2x-17522dc3.png",D0="/water-tracker/assets/bottleTabl-c56ef88b.png",M0="/water-tracker/assets/bottleTabl@2x-5f20a434.png",F0="/water-tracker/assets/bottleDesc-5e7cc8f5.png",U0="/water-tracker/assets/bottleDesc@2x-cdf5cc76.png",bC=E.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
`,SC=E.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${z0}) 1x,
    url(${I0}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${D0}) 1x,
      url(${M0}) 2x
    );
    height: 386px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${F0}) 1x,
      url(${U0}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,kC=E.div`
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
`,KO=E.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }
`,QO=E.div`
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
`,YO=E.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Sm=E.h3`
  margin-bottom: 16px;
  color: ${e=>e.theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,Hi=E.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
`,qO=E.div`
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
`,XO=E.form`
  gap: 16px;

  span {
    margin-right: 24px;
    font-size: 16px;
  }
`,km=E.input`
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
`,Ql=E.input`
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
`,JO=E.div`
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
`,ZO=E.button`
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
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 160px;
  }
`,eP=({onClose:e})=>{const[t,n]=S.useState("female"),[r,o]=S.useState(""),[i,a]=S.useState(""),[s,l]=S.useState("2.0"),[u,f]=S.useState(""),c=()=>{const v=t==="female"?.03:.04,g=t==="female"?.4:.6,m=(r*v+i/60*g).toFixed(2);l(m)},h=async()=>{c()};return x.jsx(Js,{onClose:e,title:"My daily norma",children:x.jsxs(KO,{children:[x.jsxs("div",{children:[x.jsxs(QO,{children:[x.jsxs(Hi,{children:["For girl: ",x.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),x.jsxs(Hi,{children:["For man: ",x.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),x.jsx(qO,{children:x.jsxs("p",{children:[x.jsx("span",{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),x.jsx("div",{children:x.jsxs(YO,{children:[x.jsxs(XO,{children:[x.jsx(Sm,{children:"Calculate your rate:"}),x.jsxs("label",{children:[x.jsx(km,{type:"radio",name:"gender",value:"female",checked:t==="female",onChange:()=>n("female")}),x.jsx("span",{children:"For girl"})]}),x.jsxs("label",{children:[x.jsx(km,{type:"radio",name:"gender",value:"male",checked:t==="male",onChange:()=>n("male")}),x.jsx("span",{children:"For boy"})]})]}),x.jsxs("div",{children:[x.jsx(Hi,{children:"Your weight in kilograms:"}),x.jsx(Ql,{type:"text",placeholder:"0",value:r,onChange:v=>o(v.target.value)})]}),x.jsxs("div",{children:[x.jsx(Hi,{children:"Time of active participation in sports or other activities with a high physical load:"}),x.jsx(Ql,{type:"text",placeholder:"0",value:i,onChange:v=>a(v.target.value)})]}),x.jsxs(JO,{children:["The required amount of water in liters per day:"," ",x.jsxs("strong",{children:[s,"L"]})]}),x.jsxs("div",{children:[x.jsx(Sm,{children:"Write down how much water you will drink:"}),x.jsx(Ql,{type:"text",placeholder:"0",value:u,onChange:v=>f(v.target.value)})]}),x.jsx(ZO,{onClick:h,children:"Save"})]})})]})})};eP.propTypes={onClose:ko.func.isRequired};const EC=E.div`
  position: absolute;
  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
  transform: translate(-50% -50%);
  width: 280px;

  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
`,_C=E.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,OC=E.li`
  display: flex;
  gap: 6px;
`,PC=E.span`
  color: ${({theme:e})=>e.color.accent};
  font-size: 18px;
  font-weight: 500;
`,CC=E.p`
  color: ${({theme:e})=>e.color.accent};
`,$C=E.div`
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
`,TC=E.button`
  width: 14px;
  height: 14px;
  background: transparent;
  color: ${e=>e.active?e.theme.color.accent:e.theme.color.secondaryLightBlue};

  &:hover {
    color: ${e=>e.theme.color.accent};
  }
`,jC=E.div`
  display: flex;
  align-items: baseline;
  position: relative;
  color: ${e=>e.theme.color.accent};
  column-gap: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`,RC=E.p`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  font-size: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
  }
`,NC=E.div`
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
`,AC=E.div`
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
`,LC=E.button`
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
`;function ar(e){this._maxSize=e,this.clear()}ar.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ar.prototype.get=function(e){return this._values[e]};ar.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var tP=/[^.^\]^[]+|(?=\[\]|\.\.)/g,B0=/^\d+$/,nP=/^\d/,rP=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,oP=/^\s*(['"]?)(.*?)(\1)\s*$/,pd=512,Em=new ar(pd),_m=new ar(pd),Om=new ar(pd),W0={Cache:ar,split:xc,normalizePath:Yl,setter:function(e){var t=Yl(e);return _m.get(e)||_m.set(e,function(r,o){for(var i=0,a=t.length,s=r;i<a-1;){var l=t[i];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;s=s[t[i++]]}s[t[i]]=o})},getter:function(e,t){var n=Yl(e);return Om.get(e)||Om.set(e,function(o){for(var i=0,a=n.length;i<a;)if(o!=null||!t)o=o[n[i++]];else return;return o})},join:function(e){return e.reduce(function(t,n){return t+(hd(n)||B0.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){iP(Array.isArray(e)?e:xc(e),t,n)}};function Yl(e){return Em.get(e)||Em.set(e,xc(e).map(function(t){return t.replace(oP,"$2")}))}function xc(e){return e.match(tP)||[""]}function iP(e,t,n){var r=e.length,o,i,a,s;for(i=0;i<r;i++)o=e[i],o&&(lP(o)&&(o='"'+o+'"'),s=hd(o),a=!s&&/^\d+$/.test(o),t.call(n,o,s,a,i,e))}function hd(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function aP(e){return e.match(nP)&&!e.match(B0)}function sP(e){return rP.test(e)}function lP(e){return!hd(e)&&(aP(e)||sP(e))}var V0={exports:{}};V0.exports=function(e){return H0(uP(e),e)};V0.exports.array=H0;function H0(e,t){var n=e.length,r=new Array(n),o={},i=n,a=cP(t),s=fP(e);for(t.forEach(function(u){if(!s.has(u[0])||!s.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||l(e[i],i,new Set);return r;function l(u,f,c){if(c.has(u)){var h;try{h=", node was:"+JSON.stringify(u)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!s.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!o[f]){o[f]=!0;var v=a.get(u)||new Set;if(v=Array.from(v),f=v.length){c.add(u);do{var g=v[--f];l(g,s.get(g),c)}while(f);c.delete(u)}r[--n]=u}}}function uP(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}function cP(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function fP(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}const dP=Object.prototype.toString,pP=Error.prototype.toString,hP=RegExp.prototype.toString,mP=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",gP=/^Symbol\((.*)\)(.*)$/;function yP(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Pm(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return yP(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return mP.call(e).replace(gP,"Symbol($1)");const r=dP.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+pP.call(e)+"]":r==="RegExp"?hP.call(e):null}function Ln(e,t){let n=Pm(e,t);return n!==null?n:JSON.stringify(e,function(r,o){let i=Pm(this[r],t);return i!==null?i:o},2)}function G0(e){return e==null?[]:[].concat(e)}let K0,vP=/\$\{\s*(\w+)\s*\}/g;K0=Symbol.toStringTag;class Je extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(vP,(o,i)=>Ln(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,o,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[K0]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=o,this.errors=[],this.inner=[],G0(t).forEach(a=>{if(Je.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!i&&Error.captureStackTrace&&Error.captureStackTrace(this,Je)}}let Kt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=r!=null&&r!==n?` (cast from the value \`${Ln(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Ln(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${Ln(n,!0)}\``+o}},wP={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},xP={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},bc={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},bP={isValue:"${path} field must be ${value}"},SP={noUnknown:"${path} field has unspecified keys: ${unknown}"},kP={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},EP={notType:e=>{const{path:t,value:n,spec:r}=e,o=r.types.length;if(Array.isArray(n)){if(n.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${Ln(n,!0)}\``;if(n.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${Ln(n,!0)}\``}return Je.formatError(Kt.notType,e)}};Object.assign(Object.create(null),{mixed:Kt,string:wP,number:xP,date:bc,object:SP,array:kP,boolean:bP,tuple:EP});const Q0=e=>e&&e.__isYupSchema__;class ts{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:o,otherwise:i}=n,a=typeof r=="function"?r:(...s)=>s.every(l=>l===r);return new ts(t,(s,l)=>{var u;let f=a(...s)?o:i;return(u=f==null?void 0:f(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),o=this.fn(r,t,n);if(o===void 0||o===t)return t;if(!Q0(o))throw new TypeError("conditions must return a schema object");return o.resolve(n)}}const Gi={context:"$",value:"."};class ki{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Gi.context,this.isValue=this.key[0]===Gi.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Gi.context:this.isValue?Gi.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&W0.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let o=this.isContext?r:this.isValue?t:n;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}ki.prototype.__isYupRef=!0;const Y0=e=>e==null;function lr(e){function t({value:n,path:r="",options:o,originalValue:i,schema:a},s,l){const{name:u,test:f,params:c,message:h,skipAbsent:v}=e;let{parent:g,context:m,abortEarly:w=a.spec.abortEarly,disableStackTrace:p=a.spec.disableStackTrace}=o;function d(B){return ki.isRef(B)?B.getValue(n,g,m):B}function y(B={}){var me;const le=Object.assign({value:n,originalValue:i,label:a.spec.label,path:B.path||r,spec:a.spec},c,B.params);for(const ke of Object.keys(le))le[ke]=d(le[ke]);const Ie=new Je(Je.formatError(B.message||h,le),n,le.path,B.type||u,(me=B.disableStackTrace)!=null?me:p);return Ie.params=le,Ie}const b=w?s:l;let k={path:r,parent:g,type:u,from:o.from,createError:y,resolve:d,options:o,originalValue:i,schema:a};const O=B=>{Je.isError(B)?b(B):B?l(null):b(y())},C=B=>{Je.isError(B)?b(B):s(B)};if(v&&Y0(n))return O(!0);let D;try{var L;if(D=f.call(k,n,k),typeof((L=D)==null?void 0:L.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${k.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(D).then(O,C)}}catch(B){C(B);return}O(D)}return t.OPTIONS=e,t}function _P(e,t,n,r=n){let o,i,a;return t?(W0.forEach(t,(s,l,u)=>{let f=l?s.slice(1,s.length-1):s;e=e.resolve({context:r,parent:o,value:n});let c=e.type==="tuple",h=u?parseInt(f,10):0;if(e.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&h>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[h],e=c?e.spec.types[h]:e.innerType}if(!u){if(!e.fields||!e.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);o=n,n=n&&n[f],e=e.fields[f]}i=f,a=l?"["+s+"]":"."+s}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class ns extends Set{describe(){const t=[];for(const n of this.values())t.push(ki.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new ns(this.values())}merge(t,n){const r=this.clone();return t.forEach(o=>r.add(o)),n.forEach(o=>r.delete(o)),r}}function kr(e,t=new Map){if(Q0(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=kr(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,kr(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(kr(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=kr(o,t)}else throw Error(`Unable to clone ${e}`);return n}class rr{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new ns,this._blacklist=new ns,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Kt.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=kr(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const o=Object.assign({},n.spec,r.spec);return r.spec=o,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((o,i)=>i.resolve(o,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,o,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),o=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(o&&Y0(i))return i;let a=Ln(t),s=Ln(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,o){let{path:i,originalValue:a=t,strict:s=this.spec.strict}=n,l=t;s||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let f of Object.values(this.internalTests))f&&u.push(f);this.runTests({path:i,value:l,originalValue:a,options:n,tests:u},r,f=>{if(f.length)return o(f,l);this.runTests({path:i,value:l,originalValue:a,options:n,tests:this.tests},r,o)})}runTests(t,n,r){let o=!1,{tests:i,value:a,originalValue:s,path:l,options:u}=t,f=m=>{o||(o=!0,n(m,a))},c=m=>{o||(o=!0,r(m,a))},h=i.length,v=[];if(!h)return c([]);let g={value:a,originalValue:s,path:l,options:u,schema:this};for(let m=0;m<i.length;m++){const w=i[m];w(g,f,function(d){d&&(Array.isArray(d)?v.push(...d):v.push(d)),--h<=0&&c(v)})}}asNestedTest({key:t,index:n,parent:r,parentPath:o,originalParent:i,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof s=="number";let u=r[s];const f=Object.assign({},a,{strict:!0,parent:r,value:u,originalValue:i[s],key:void 0,[l?"index":"key"]:s,path:l||s.includes(".")?`${o||""}[${u?s:`"${s}"`}]`:(o?`${o}.`:"")+t});return(c,h,v)=>this.resolve(f)._validate(u,f,h,v)}validate(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return new Promise((a,s)=>o._validate(t,n,(l,u)=>{Je.isError(l)&&(l.value=u),s(l)},(l,u)=>{l.length?s(new Je(l,u,void 0,void 0,i)):a(u)}))}validateSync(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i,a=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return o._validate(t,Object.assign({},n,{sync:!0}),(s,l)=>{throw Je.isError(s)&&(s.value=l),s},(s,l)=>{if(s.length)throw new Je(s,t,void 0,void 0,a);i=l}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Je.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Je.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):kr(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=lr({message:n,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=lr({message:n,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Kt.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Kt.notNull){return this.nullability(!1,t)}required(t=Kt.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Kt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),o=lr(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(i||a.OPTIONS.test===o.OPTIONS.test))),r.tests.push(o),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),o=G0(t).map(i=>new ki(i));return o.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new ts(o,n):ts.fromOptions(o,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=lr({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Kt.oneOf){let r=this.clone();return t.forEach(o=>{r._whitelist.add(o),r._blacklist.delete(o)}),r.internalTests.whiteList=lr({message:n,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),r}notOneOf(t,n=Kt.notOneOf){let r=this.clone();return t.forEach(o=>{r._blacklist.add(o),r._whitelist.delete(o)}),r.internalTests.blacklist=lr({message:n,name:"notOneOf",test(o){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:o,optional:i,nullable:a}=n.spec;return{meta:o,label:r,optional:i,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,f)=>f.findIndex(c=>c.name===l.name)===u)}}}rr.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])rr.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:i,schema:a}=_P(this,t,n,r.context);return a[e](o&&o[i],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])rr.prototype[e]=rr.prototype.oneOf;for(const e of["not","nope"])rr.prototype[e]=rr.prototype.notOneOf;const OP=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Ht(e,t=0){return Number(e)||t}function PP(e){const t=OP.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:Ht(t[1]),month:Ht(t[2],1)-1,day:Ht(t[3],1),hour:Ht(t[4]),minute:Ht(t[5]),second:Ht(t[6]),millisecond:t[7]?Ht(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:Ht(t[10]),minuteOffset:Ht(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let CP=new Date(""),$P=e=>Object.prototype.toString.call(e)==="[object Date]";class md extends rr{constructor(){super({type:"date",check(t){return $P(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=PP(t),isNaN(t)?md.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(ki.isRef(t))r=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=o}return r}min(t,n=bc.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(r)}})}max(t,n=bc.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(r)}})}}md.INVALID_DATE=CP;const zC=E.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: ${e=>e.theme.color.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }
`,IC=E.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
  margin-bottom: 12px;
`,DC=E.div`
  margin-bottom: 24px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    border: none;
    background: ${e=>e.theme.color.secondaryPowderBlue};
    color: ${e=>e.theme.color.accent};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
    width: 92px;
    height: 36px;
  }
`,MC=E.button`
  background-color: ${e=>e.theme.color.white};
  color: ${e=>e.theme.color.accent};
  border-radius: 30px;
  border: 1px solid ${e=>e.theme.color.secondaryLightBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);

  &:hover &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`,FC=E.svg`
  width: 24px;
  height: 24px;
  stroke: ${e=>e.theme.color.accent};
`,UC=E.div`
  margin-bottom: 24px;
`,BC=E.input`
  color: ${e=>e.theme.color.accent};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.color.secondaryPowderBlue};
`,WC=E.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 24px;
  margin-top: 24px;

  span {
    color: ${e=>e.theme.color.accent};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`,VC=E.button`
  background-color: ${e=>e.theme.color.accent};
  color: ${e=>e.theme.color.white};
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
  height: 44px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background-color ${e=>e.theme.transition.main};

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 160px;
  }
`,HC=E.div`
  margin-bottom: 24px;
`,GC=E.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid #d7e3ff;
`,KC=E.div`
  display: flex;
  align-items: center;
`,QC=E.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,YC=E.ul`
  height: 212px;
  overflow: auto;
`,qC=E.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #407bff;
  margin-right: 16px;
`,XC=E.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: #2f2f2f;
`,JC=E.svg`
  width: 26px;
  height: 26px;
  margin-right: 12px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,ZC=E.div`
  display: flex;
  gap: 18px;
`,e$=E.button`
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
`,t$=E.button`
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
`,n$=E.button`
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
`,r$=E.div`
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
`,o$=E.input`
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
`,i$=E.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.accent};
`,a$=E.div`
  position: relative;
  height: 102px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 356px;
    height: 90px;
  }
`,s$=E.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,l$=E.span`
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
`,u$=E.span`
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
`,c$=E.span`
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
`,f$=E.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: ${({theme:e})=>e.color.accent};
  color: ${({theme:e})=>e.color.white};
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 336px;
    padding: 10px 104px 10px 104px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 178px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }
`,d$=E.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${e=>e.theme.color.white};
`,TP=E.input`
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
`,gd=E.p`
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,Cm=E.label`
  display: inline-block;
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,jP=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,q0=E.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,ql=E.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,Xl=E.div`
  position: relative;
  margin-top: 8px;
`,ur=E(q0)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`,RP=E.button`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  border: none;
  background-color: transparent;
  padding: 0;
`,NP=E.span`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`,$m=E.div`
  margin-bottom: 24px;
`,Tm=E.div`
  margin-bottom: 12px;
`,AP=E(gd)`
  margin-bottom: 12px;
`,jm=E.input`
  border: 1px solid ${e=>e.theme.color.accent};
  width: 14px;
  height: 14px;

  &:checked {
    color: ${e=>e.theme.color.accent};
  }
`,LP=E.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,Rm=E.span`
  margin-left: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,Nm=E.label`
  display: flex;
  align-items: center;
`,zP=E.img`
  border-radius: 60%;
`,yo=E.input`
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
`,IP=E.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 32px;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.color.white};

  @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`,DP=E(gd)`
  margin-bottom: 12px;
`,Jl=E.label`
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,MP=E.button`
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
`,FP=E.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
`,Am=E.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 392px;
  }
`,Lm=E.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 0px;
  }
`,UP=E.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 52px;
  }
`;E(d0)`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    max-width: 1008px;
  }
`;const BP="src/assets/images/default_avatar_to_download.jpg",WP=({onClose:e})=>{const[t,n]=S.useState(),[r,o]=S.useState(),[i,a]=S.useState("girl"),[s,l]=S.useState(""),[u,f]=S.useState(""),[c,h]=S.useState(""),[v,g]=S.useState(""),[m,w]=S.useState(""),[p,d]=S.useState(!1),y=S.useRef(null),b=()=>{y.current.click()},k=()=>{d(O=>!O)};return S.useEffect(()=>{if(!t)return;const O=URL.createObjectURL(t[0]);return o(O),()=>{URL.revokeObjectURL(O)}},[t]),x.jsx(x.Fragment,{children:x.jsx(Js,{onClose:e,title:"Setting",children:x.jsx(IP,{children:x.jsxs("form",{children:[x.jsxs($m,{children:[x.jsx(gd,{children:"Your photo"}),x.jsxs(jP,{children:[x.jsx(zP,{src:r||BP,alt:"user avatar",width:"80px",height:"80px"}),x.jsxs("label",{children:[x.jsx(TP,{ref:y,type:"file",name:"avatar",accept:"image/png, image/jpeg",onChange:O=>{O.target.files&&O.target.files.length>0&&n(O.target.files)}}),x.jsxs(RP,{type:"button",onClick:b,children:[x.jsx(q0,{children:x.jsx("use",{href:`${pt}#icon-arrow-up`})}),x.jsx(NP,{children:"Upload a photo"})]})]})]})]}),x.jsxs(FP,{children:[x.jsxs(Am,{children:[x.jsxs(UP,{children:[x.jsx(AP,{children:"Your gender identity"}),x.jsxs(LP,{children:[x.jsxs(Nm,{children:[x.jsx(jm,{type:"radio",name:"gender",value:"Girl",checked:i==="Girl",onChange:O=>a(O.target.value)}),x.jsx(Rm,{children:"Girl"})]}),x.jsxs(Nm,{children:[x.jsx(jm,{type:"radio",name:"gender",value:"Man",checked:i==="Man",onChange:O=>a(O.target.value)}),x.jsx(Rm,{children:"Man"})]})]})]}),x.jsxs($m,{children:[x.jsx(Cm,{htmlFor:"username",children:"Your name"}),x.jsx(yo,{type:"text",id:"username",name:"username",value:s,placeholder:s,onChange:O=>l(O.target.value)})]}),x.jsxs(Lm,{children:[x.jsx(Cm,{htmlFor:"email",children:"E-mail"}),x.jsx(yo,{type:"email",id:"email",name:"email",value:u,placeholder:u,onChange:O=>f(O.target.value)})]})]}),x.jsxs(Am,{children:[x.jsx(DP,{children:"Password"}),x.jsxs(Tm,{children:[x.jsx(Jl,{htmlFor:"oldPassword",children:"Outdated password:"}),x.jsxs(Xl,{children:[x.jsx(yo,{type:p?"text":"password",id:"oldPassword",name:"oldPassword",value:c,placeholder:"Password",onChange:O=>h(O.target.value)}),x.jsx(ql,{type:"button",onClick:k,children:p?x.jsx(ur,{children:x.jsx("use",{href:`${pt}#icon-to-open`})}):x.jsx(ur,{children:x.jsx("use",{href:`${pt}#icon-to-hide`})})})]})]}),x.jsxs(Tm,{children:[x.jsx(Jl,{htmlFor:"password",children:"New Password:"}),x.jsxs(Xl,{children:[x.jsx(yo,{type:p?"text":"password",id:"password",name:"newPassword",value:v,placeholder:"Password",onChange:O=>g(O.target.value)}),x.jsx(ql,{type:"button",onClick:k,children:p?x.jsx(ur,{children:x.jsx("use",{href:`${pt}#icon-to-open`})}):x.jsx(ur,{children:x.jsx("use",{href:`${pt}#icon-to-hide`})})})]})]}),x.jsxs(Lm,{children:[x.jsx(Jl,{htmlFor:"repeatedPassword",children:"Repeat new password:"}),x.jsxs(Xl,{children:[x.jsx(yo,{type:p?"text":"password",id:"repeatedPassword",name:"repeatedPassword",value:m,placeholder:"Password",onChange:O=>w(O.target.value)}),x.jsx(ql,{type:"button",onClick:k,children:p?x.jsx(ur,{children:x.jsx("use",{href:`${pt}#icon-to-open`})}):x.jsx(ur,{children:x.jsx("use",{href:`${pt}#icon-to-hide`})})})]})]})]})]}),x.jsx(MP,{type:"submit",children:"Save"})]})})})})},p$=E.div`
  background-position: -120px center;
  background-image: -webkit-image-set(
    url(${z0}) 1x,
    url(${I0}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 916px;
  min-height: 680px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${D0}) 1x,
      url(${M0}) 2x
    );
    width: 736px;
    height: 548px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${F0}) 1x,
      url(${U0}) 2x
    );
    width: 916px;
    min-height: 680px;
  }
`,h$=E.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* width: 1404px;
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

 
  */
`,m$=E.span`
  color: red;
`,VP=E.button`
  width: 100%;
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  text-align: center;
  color: ${e=>e.theme.color.white};
  background-color: ${e=>e.theme.color.accent};
`,g$=E.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${e=>e.theme.color.black};

  .input-with-error {
    color: red;
    border: 1px solid ${e=>e.theme.color.secondaryRed};
  }
`,y$=E.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${e=>e.theme.color.secondaryPowderBlue};
  display: flex;
  padding: 12px 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  &:focus-within {
    outline: none;
  }
  &::placeholder {
    color: ${e=>e.theme.color.secondaryLightBlue};
  }
`,v$=E.form`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  min-height: 304px;
  gap: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    min-width: 336px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    min-width: 384px;
    min-height: 312px;
    gap: 16px;
  }
`,w$=E(VP)`
  background-color: ${e=>e.theme.color.secondaryPowderBlue};
  cursor: not-allowed;
`,x$=E.h2`
  width: 100%;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.color.black};
`,b$=E.svg`
  width: 16px;
  height: 16px;
  border: 1px;
  stroke: ${e=>e.theme.color.accent};
  fill: ${e=>e.theme.color.white};
  position: absolute;
  right: 10px;
  top: 44px;
`,S$=E(ci)`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
  &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }
`,k$=E(ci)`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
  &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }
`,HP=E.button`
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
`,GP=E.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: ${({theme:e})=>e.color.black};
  fill: transparent;
`,KP=()=>x.jsx("div",{children:x.jsx(ci,{to:"/signin",children:x.jsxs(HP,{type:"button",children:["Sign in",x.jsx(GP,{children:x.jsx("use",{href:`${pt}#icon-user`})})]})})}),QP=E.div`
  position: relative;
  display: flex; 
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`,YP=E.p`
  font-size: 18px;
  line-height: 1.33em;

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`,qP=E.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  padding: 0;
`,XP=E.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`,JP=E.span`
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
`,ZP=E.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.accent};
  fill: transparent;

  &:hover,
  &:focus {
    color: ${e=>e.theme.color.accent};
  }
`,eC=()=>{const[e,t]=S.useState(!1),{userName:n,avatarURL:r}=qr(BO),o=()=>{t(!e)},i=n?n.charAt(0).toUpperCase():"V",a=()=>n&&r?{name:n,avatar:r}:n?{name:n,avatar:i}:{name:i,avatar:i},{name:s,avatar:l}=a();return x.jsxs(QP,{children:[x.jsx(YP,{children:s}),x.jsxs(qP,{onClick:o,children:[r?x.jsx(XP,{src:l,alt:""}):x.jsx(JP,{children:l}),x.jsx(ZP,{children:x.jsx("use",{href:`${pt}#icon-arrow-down`})})]}),e&&x.jsx(nC,{})]})},tC=E.div`
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
`,zm=E.svg`
  margin-right: 8px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,Im=E.button`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  background-color: transparent;
  padding: 0;
`,Dm=E.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,nC=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)},a=()=>{r(!0)},s=()=>{r(!1)};return x.jsx(x.Fragment,{children:x.jsx(tC,{children:x.jsxs("ul",{children:[x.jsxs(Dm,{children:[x.jsx(zm,{width:"16px",height:"16px",children:x.jsx("use",{href:`${pt}#icon-settings`})}),x.jsxs(Im,{type:"button",onClick:o,children:["Setting",e&&x.jsx(WP,{onClose:i})]})]}),x.jsxs(Dm,{children:[x.jsx(zm,{width:"16px",height:"16px",children:x.jsx("use",{href:`${pt}#icon-exit`})}),x.jsxs(Im,{type:"button",onClick:a,children:["Log out",n&&x.jsx(lC,{onClose:s})]})]})]})})})},rC=E.h2`
  margin-bottom: 24px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
`,oC=E.button`
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
`,iC=E.button`
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
`,aC=E.ul`
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
`,sC=E.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`,lC=({onClose:e})=>{const t=_v();return x.jsx(x.Fragment,{children:x.jsx(Js,{onClose:e,title:"Log out",children:x.jsxs(sC,{children:[x.jsx(rC,{children:"Do you really want to leave?"}),x.jsxs(aC,{children:[x.jsx("li",{children:x.jsx(iC,{type:"button",onClick:e,children:"Cancel"})}),x.jsx("li",{children:x.jsx(oC,{type:"button",onClick:()=>t(i0()),children:"Log out"})})]})]})})})},E$=E.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 60px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    gap: 81px;
  }
`,_$=E.h1`
  display: none;
`,O$=E.h2`
  font-weight: 700;
  font-size: 28px;
  color: ${({theme:e})=>e.color.black};
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`,P$=E.p`
  font-size: 24px;
  color: ${({theme:e})=>e.color.black};
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`,C$=E.ul`
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
`,$$=E.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,T$=E.div`
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
`,j$=E.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`,R$=E.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  line-height: 20px;
  margin-bottom: 12px;
`,N$=E.button`
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
`,A$=E.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  margin-bottom: 12px;
`,L$=E.li`
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
`,z$=E.div`
  display: inline-block;
  margin: 0;
`,I$=E.div`
  display: inline-block;
  margin: auto;
  width: auto;

  padding: 24px 16px;
  background-color: ${({theme:e})=>e.color.secondaryWhite};
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.3);
  border-radius: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 32px 24px;

    list-style-position: inside;
    margin: 0;
  }
`,D$=E.ul`
  list-style-type: none;
  padding-left: 0;
`,uC="modulepreload",cC=function(e){return"/water-tracker/"+e},Mm={},ro=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=cC(i),i in Mm)return;Mm[i]=!0;const a=i.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let f=o.length-1;f>=0;f--){const c=o[f];if(c.href===i&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":uC,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((f,c)=>{u.addEventListener("load",f),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},fC=({component:e,redirectTo:t})=>qr(nl)?x.jsx(e,{}):x.jsx(A0,{to:t}),Ki=({component:e,redirectTo:t})=>qr(nl)?x.jsx(A0,{to:t}):e,dC=()=>x.jsxs(x.Fragment,{children:[x.jsx(GO,{}),x.jsx("main",{children:x.jsx(S.Suspense,{fallback:x.jsx(ud,{}),children:x.jsx(OO,{})})})]}),pC=S.lazy(()=>ro(()=>import("./Welcome-3e8bc21d.js"),["assets/Welcome-3e8bc21d.js","assets/Section-14b440d3.js"])),hC=S.lazy(()=>ro(()=>import("./Home-b8b9ea81.js"),["assets/Home-b8b9ea81.js","assets/Section-14b440d3.js","assets/bubbleTablet@2x-6e22c1d3.js"])),mC=S.lazy(()=>ro(()=>import("./SignIn-32405ebe.js"),["assets/SignIn-32405ebe.js","assets/Section-14b440d3.js","assets/bubbleTablet@2x-6e22c1d3.js"])),gC=S.lazy(()=>ro(()=>import("./SignUp-a33001de.js"),["assets/SignUp-a33001de.js","assets/Section-14b440d3.js","assets/bubbleTablet@2x-6e22c1d3.js"])),yC=S.lazy(()=>ro(()=>import("./Error-157a57a4.js"),["assets/Error-157a57a4.js","assets/Section-14b440d3.js"])),vC=S.lazy(()=>ro(()=>import("./ForgotPassword-62316ef9.js"),["assets/ForgotPassword-62316ef9.js","assets/Section-14b440d3.js"])),wC=()=>{const e=_v(),t=qr(WO);return S.useEffect(()=>{e(ya())},[e]),t?x.jsx(ud,{}):x.jsx(CO,{children:x.jsxs(hn,{path:"/",element:x.jsx(dC,{}),children:[x.jsx(hn,{index:!0,element:x.jsx(Ki,{component:x.jsx(pC,{}),redirectTo:"/home"})}),x.jsx(hn,{path:"home",element:x.jsx(fC,{component:hC,redirectTo:"/"})}),x.jsx(hn,{path:"signin",element:x.jsx(Ki,{component:x.jsx(mC,{}),redirectTo:"/home"})}),x.jsx(hn,{path:"signup",element:x.jsx(Ki,{component:x.jsx(gC,{}),redirectTo:"/home"})}),x.jsx(hn,{path:"forgot-password",element:x.jsx(Ki,{component:x.jsx(vC,{}),redirectTo:"/signin"})}),x.jsx(hn,{path:"*",element:x.jsx(yC,{})})]})})},xC=ru.createRoot(document.getElementById("root"));xC.render(x.jsx(Ne.StrictMode,{children:x.jsxs(fg,{theme:uc,children:[x.jsx(dg,{styles:jE}),x.jsx(hS,{store:s0,children:x.jsx(Ov,{loading:x.jsx(ud,{}),persistor:_E,children:x.jsx(LO,{basename:"/water-tracker",children:x.jsx(wC,{})})})})]})}));export{XC as $,zC as A,R$ as B,I$ as C,bC as D,DC as E,IC as F,MC as G,_$ as H,$$ as I,FC as J,UC as K,D$ as L,BC as M,WC as N,z$ as O,P$ as P,VC as Q,HC as R,QC as S,T$ as T,YC as U,GC as V,E$ as W,KC as X,RC as Y,JC as Z,qC as _,O$ as a,ZC as a0,e$ as a1,t$ as a2,n$ as a3,r$ as a4,a$ as a5,i$ as a6,o$ as a7,s$ as a8,u$ as a9,l$ as aa,c$ as ab,f$ as ac,d$ as ad,_v as ae,h$ as af,p$ as ag,v$ as ah,x$ as ai,g$ as aj,y$ as ak,m$ as al,b$ as am,w$ as an,VP as ao,k$ as ap,fE as aq,S$ as ar,cE as as,KE as at,C$ as b,j$ as c,N$ as d,A$ as e,L$ as f,kC as g,eP as h,SC as i,x as j,EC as k,_C as l,OC as m,E as n,CC as o,PC as p,$C as q,S as r,pt as s,jC as t,j0 as u,TC as v,NC as w,AC as x,LC as y,Js as z};
