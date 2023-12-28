function F0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function es(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function U0(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Lm={exports:{}},ts={},zm={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=Symbol.for("react.element"),B0=Symbol.for("react.portal"),W0=Symbol.for("react.fragment"),V0=Symbol.for("react.strict_mode"),H0=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),K0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),Y0=Symbol.for("react.suspense"),q0=Symbol.for("react.memo"),X0=Symbol.for("react.lazy"),dd=Symbol.iterator;function J0(e){return e===null||typeof e!="object"?null:(e=dd&&e[dd]||e["@@iterator"],typeof e=="function"?e:null)}var Im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dm=Object.assign,Mm={};function Gr(e,t,n){this.props=e,this.context=t,this.refs=Mm,this.updater=n||Im}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fm(){}Fm.prototype=Gr.prototype;function wc(e,t,n){this.props=e,this.context=t,this.refs=Mm,this.updater=n||Im}var bc=wc.prototype=new Fm;bc.constructor=wc;Dm(bc,Gr.prototype);bc.isPureReactComponent=!0;var pd=Array.isArray,Um=Object.prototype.hasOwnProperty,Sc={current:null},Bm={key:!0,ref:!0,__self:!0,__source:!0};function Wm(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Um.call(t,r)&&!Bm.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:si,type:e,key:i,ref:a,props:o,_owner:Sc.current}}function Z0(e,t){return{$$typeof:si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function kc(e){return typeof e=="object"&&e!==null&&e.$$typeof===si}function e1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hd=/\/+/g;function tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?e1(""+e.key):t.toString(36)}function Gi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case si:case B0:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+tl(a,0):r,pd(o)?(n="",e!=null&&(n=e.replace(hd,"$&/")+"/"),Gi(o,t,n,"",function(u){return u})):o!=null&&(kc(o)&&(o=Z0(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(hd,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",pd(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+tl(i,s);a+=Gi(i,t,n,l,o)}else if(l=J0(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+tl(i,s++),a+=Gi(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ki(e,t,n){if(e==null)return e;var r=[],o=0;return Gi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function t1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Ki={transition:null},n1={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:Sc};H.Children={map:ki,forEach:function(e,t,n){ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ki(e,function(){t++}),t},toArray:function(e){return ki(e,function(t){return t})||[]},only:function(e){if(!kc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Gr;H.Fragment=W0;H.Profiler=H0;H.PureComponent=wc;H.StrictMode=V0;H.Suspense=Y0;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n1;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dm({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Sc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Um.call(t,l)&&!Bm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:si,type:e.type,key:o,ref:i,props:r,_owner:a}};H.createContext=function(e){return e={$$typeof:K0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:G0,_context:e},e.Consumer=e};H.createElement=Wm;H.createFactory=function(e){var t=Wm.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Q0,render:e}};H.isValidElement=kc;H.lazy=function(e){return{$$typeof:X0,_payload:{_status:-1,_result:e},_init:t1}};H.memo=function(e,t){return{$$typeof:q0,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=Ki.transition;Ki.transition={};try{e()}finally{Ki.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Qe.current.useCallback(e,t)};H.useContext=function(e){return Qe.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};H.useEffect=function(e,t){return Qe.current.useEffect(e,t)};H.useId=function(){return Qe.current.useId()};H.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Qe.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};H.useRef=function(e){return Qe.current.useRef(e)};H.useState=function(e){return Qe.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Qe.current.useTransition()};H.version="18.2.0";zm.exports=H;var S=zm.exports;const Ne=es(S),ql=F0({__proto__:null,default:Ne},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1=S,o1=Symbol.for("react.element"),i1=Symbol.for("react.fragment"),a1=Object.prototype.hasOwnProperty,s1=r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l1={key:!0,ref:!0,__self:!0,__source:!0};function Vm(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)a1.call(t,r)&&!l1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:o1,type:e,key:i,ref:a,props:o,_owner:s1.current}}ts.Fragment=i1;ts.jsx=Vm;ts.jsxs=Vm;Lm.exports=ts;var w=Lm.exports;function u1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function c1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var f1=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(c1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=u1(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ue="-ms-",ga="-moz-",q="-webkit-",Hm="comm",Ec="rule",_c="decl",d1="@import",Gm="@keyframes",p1="@layer",h1=Math.abs,ns=String.fromCharCode,m1=Object.assign;function g1(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function Km(e){return e.trim()}function y1(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function Xl(e,t){return e.indexOf(t)}function Ae(e,t){return e.charCodeAt(t)|0}function Ro(e,t,n){return e.slice(t,n)}function At(e){return e.length}function Oc(e){return e.length}function Ei(e,t){return t.push(e),e}function v1(e,t){return e.map(t).join("")}var rs=1,Nr=1,Qm=0,rt=0,we=0,Kr="";function os(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:rs,column:Nr,length:a,return:""}}function ro(e,t){return m1(os("",null,null,"",null,null,0),e,{length:-e.length},t)}function x1(){return we}function w1(){return we=rt>0?Ae(Kr,--rt):0,Nr--,we===10&&(Nr=1,rs--),we}function at(){return we=rt<Qm?Ae(Kr,rt++):0,Nr++,we===10&&(Nr=1,rs++),we}function Dt(){return Ae(Kr,rt)}function Qi(){return rt}function li(e,t){return Ro(Kr,e,t)}function No(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ym(e){return rs=Nr=1,Qm=At(Kr=e),rt=0,[]}function qm(e){return Kr="",e}function Yi(e){return Km(li(rt-1,Jl(e===91?e+2:e===40?e+1:e)))}function b1(e){for(;(we=Dt())&&we<33;)at();return No(e)>2||No(we)>3?"":" "}function S1(e,t){for(;--t&&at()&&!(we<48||we>102||we>57&&we<65||we>70&&we<97););return li(e,Qi()+(t<6&&Dt()==32&&at()==32))}function Jl(e){for(;at();)switch(we){case e:return rt;case 34:case 39:e!==34&&e!==39&&Jl(we);break;case 40:e===41&&Jl(e);break;case 92:at();break}return rt}function k1(e,t){for(;at()&&e+we!==47+10;)if(e+we===42+42&&Dt()===47)break;return"/*"+li(t,rt-1)+"*"+ns(e===47?e:at())}function E1(e){for(;!No(Dt());)at();return li(e,rt)}function _1(e){return qm(qi("",null,null,null,[""],e=Ym(e),0,[0],e))}function qi(e,t,n,r,o,i,a,s,l){for(var u=0,f=0,c=a,h=0,v=0,g=0,m=1,x=1,p=1,d=0,y="",b=o,k=i,_=r,C=y;x;)switch(g=d,d=at()){case 40:if(g!=108&&Ae(C,c-1)==58){Xl(C+=X(Yi(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Yi(d);break;case 9:case 10:case 13:case 32:C+=b1(g);break;case 92:C+=S1(Qi()-1,7);continue;case 47:switch(Dt()){case 42:case 47:Ei(O1(k1(at(),Qi()),t,n),l);break;default:C+="/"}break;case 123*m:s[u++]=At(C)*p;case 125*m:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+f:p==-1&&(C=X(C,/\f/g,"")),v>0&&At(C)-c&&Ei(v>32?gd(C+";",r,n,c-1):gd(X(C," ","")+";",r,n,c-2),l);break;case 59:C+=";";default:if(Ei(_=md(C,t,n,u,f,o,s,y,b=[],k=[],c),i),d===123)if(f===0)qi(C,t,_,_,b,i,c,s,k);else switch(h===99&&Ae(C,3)===110?100:h){case 100:case 108:case 109:case 115:qi(e,_,_,r&&Ei(md(e,_,_,0,0,o,s,y,o,b=[],c),k),o,k,c,s,r?b:k);break;default:qi(C,_,_,_,[""],k,0,s,k)}}u=f=v=0,m=p=1,y=C="",c=a;break;case 58:c=1+At(C),v=g;default:if(m<1){if(d==123)--m;else if(d==125&&m++==0&&w1()==125)continue}switch(C+=ns(d),d*m){case 38:p=f>0?1:(C+="\f",-1);break;case 44:s[u++]=(At(C)-1)*p,p=1;break;case 64:Dt()===45&&(C+=Yi(at())),h=Dt(),f=c=At(y=C+=E1(Qi())),d++;break;case 45:g===45&&At(C)==2&&(m=0)}}return i}function md(e,t,n,r,o,i,a,s,l,u,f){for(var c=o-1,h=o===0?i:[""],v=Oc(h),g=0,m=0,x=0;g<r;++g)for(var p=0,d=Ro(e,c+1,c=h1(m=a[g])),y=e;p<v;++p)(y=Km(m>0?h[p]+" "+d:X(d,/&\f/g,h[p])))&&(l[x++]=y);return os(e,t,n,o===0?Ec:s,l,u,f)}function O1(e,t,n){return os(e,t,n,Hm,ns(x1()),Ro(e,2,-2),0)}function gd(e,t,n,r){return os(e,t,n,_c,Ro(e,0,r),Ro(e,r+1,-1),r)}function Er(e,t){for(var n="",r=Oc(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function P1(e,t,n,r){switch(e.type){case p1:if(e.children.length)break;case d1:case _c:return e.return=e.return||e.value;case Hm:return"";case Gm:return e.return=e.value+"{"+Er(e.children,r)+"}";case Ec:e.value=e.props.join(",")}return At(n=Er(e.children,r))?e.return=e.value+"{"+n+"}":""}function C1(e){var t=Oc(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function $1(e){return function(t){t.root||(t=t.return)&&e(t)}}var yd=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function Xm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var T1=function(t,n,r){for(var o=0,i=0;o=i,i=Dt(),o===38&&i===12&&(n[r]=1),!No(i);)at();return li(t,rt)},j1=function(t,n){var r=-1,o=44;do switch(No(o)){case 0:o===38&&Dt()===12&&(n[r]=1),t[r]+=T1(rt-1,n,r);break;case 2:t[r]+=Yi(o);break;case 4:if(o===44){t[++r]=Dt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ns(o)}while(o=at());return t},R1=function(t,n){return qm(j1(Ym(t),n))},vd=new WeakMap,N1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!vd.get(r))&&!o){vd.set(t,!0);for(var i=[],a=R1(n,i),s=r.props,l=0,u=0;l<a.length;l++)for(var f=0;f<s.length;f++,u++)t.props[u]=i[l]?a[l].replace(/&\f/g,s[f]):s[f]+" "+a[l]}}},A1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Jm(e,t){switch(g1(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+ga+e+Ue+e+e;case 6828:case 4268:return q+e+Ue+e+e;case 6165:return q+e+Ue+"flex-"+e+e;case 5187:return q+e+X(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+Ue+"flex-$1$2")+e;case 5443:return q+e+Ue+"flex-item-"+X(e,/flex-|-self/,"")+e;case 4675:return q+e+Ue+"flex-line-pack"+X(e,/align-content|flex-|-self/,"")+e;case 5548:return q+e+Ue+X(e,"shrink","negative")+e;case 5292:return q+e+Ue+X(e,"basis","preferred-size")+e;case 6060:return q+"box-"+X(e,"-grow","")+q+e+Ue+X(e,"grow","positive")+e;case 4554:return q+X(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return X(X(X(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+Ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+ga+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xl(e,"stretch")?Jm(X(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ae(e,t+1)!==115)break;case 6444:switch(Ae(e,At(e)-3-(~Xl(e,"!important")&&10))){case 107:return X(e,":",":"+q)+e;case 101:return X(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(Ae(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+Ue+"$2box$3")+e}break;case 5936:switch(Ae(e,t+11)){case 114:return q+e+Ue+X(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+Ue+X(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+Ue+X(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return q+e+Ue+e+e}return e}var L1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case _c:t.return=Jm(t.value,t.length);break;case Gm:return Er([ro(t,{value:X(t.value,"@","@"+q)})],o);case Ec:if(t.length)return v1(t.props,function(i){switch(y1(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Er([ro(t,{props:[X(i,/:(read-\w+)/,":"+ga+"$1")]})],o);case"::placeholder":return Er([ro(t,{props:[X(i,/:(plac\w+)/,":"+q+"input-$1")]}),ro(t,{props:[X(i,/:(plac\w+)/,":"+ga+"$1")]}),ro(t,{props:[X(i,/:(plac\w+)/,Ue+"input-$1")]})],o)}return""})}},z1=[L1],I1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var x=m.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var o=t.stylisPlugins||z1,i={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var x=m.getAttribute("data-emotion").split(" "),p=1;p<x.length;p++)i[x[p]]=!0;s.push(m)});var l,u=[N1,A1];{var f,c=[P1,$1(function(m){f.insert(m)})],h=C1(u.concat(o,c)),v=function(x){return Er(_1(x),h)};l=function(x,p,d,y){f=d,v(x?x+"{"+p.styles+"}":p.styles),y&&(g.inserted[p.name]=!0)}}var g={key:n,sheet:new f1({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return g.sheet.hydrate(s),g};function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}var Zm={exports:{}},ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce=typeof Symbol=="function"&&Symbol.for,Pc=Ce?Symbol.for("react.element"):60103,Cc=Ce?Symbol.for("react.portal"):60106,is=Ce?Symbol.for("react.fragment"):60107,as=Ce?Symbol.for("react.strict_mode"):60108,ss=Ce?Symbol.for("react.profiler"):60114,ls=Ce?Symbol.for("react.provider"):60109,us=Ce?Symbol.for("react.context"):60110,$c=Ce?Symbol.for("react.async_mode"):60111,cs=Ce?Symbol.for("react.concurrent_mode"):60111,fs=Ce?Symbol.for("react.forward_ref"):60112,ds=Ce?Symbol.for("react.suspense"):60113,D1=Ce?Symbol.for("react.suspense_list"):60120,ps=Ce?Symbol.for("react.memo"):60115,hs=Ce?Symbol.for("react.lazy"):60116,M1=Ce?Symbol.for("react.block"):60121,F1=Ce?Symbol.for("react.fundamental"):60117,U1=Ce?Symbol.for("react.responder"):60118,B1=Ce?Symbol.for("react.scope"):60119;function ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Pc:switch(e=e.type,e){case $c:case cs:case is:case ss:case as:case ds:return e;default:switch(e=e&&e.$$typeof,e){case us:case fs:case hs:case ps:case ls:return e;default:return t}}case Cc:return t}}}function eg(e){return ct(e)===cs}ne.AsyncMode=$c;ne.ConcurrentMode=cs;ne.ContextConsumer=us;ne.ContextProvider=ls;ne.Element=Pc;ne.ForwardRef=fs;ne.Fragment=is;ne.Lazy=hs;ne.Memo=ps;ne.Portal=Cc;ne.Profiler=ss;ne.StrictMode=as;ne.Suspense=ds;ne.isAsyncMode=function(e){return eg(e)||ct(e)===$c};ne.isConcurrentMode=eg;ne.isContextConsumer=function(e){return ct(e)===us};ne.isContextProvider=function(e){return ct(e)===ls};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pc};ne.isForwardRef=function(e){return ct(e)===fs};ne.isFragment=function(e){return ct(e)===is};ne.isLazy=function(e){return ct(e)===hs};ne.isMemo=function(e){return ct(e)===ps};ne.isPortal=function(e){return ct(e)===Cc};ne.isProfiler=function(e){return ct(e)===ss};ne.isStrictMode=function(e){return ct(e)===as};ne.isSuspense=function(e){return ct(e)===ds};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===is||e===cs||e===ss||e===as||e===ds||e===D1||typeof e=="object"&&e!==null&&(e.$$typeof===hs||e.$$typeof===ps||e.$$typeof===ls||e.$$typeof===us||e.$$typeof===fs||e.$$typeof===F1||e.$$typeof===U1||e.$$typeof===B1||e.$$typeof===M1)};ne.typeOf=ct;Zm.exports=ne;var Tc=Zm.exports,jc=Tc,W1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},H1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rc={};Rc[jc.ForwardRef]=H1;Rc[jc.Memo]=tg;function xd(e){return jc.isMemo(e)?tg:Rc[e.$$typeof]||W1}var G1=Object.defineProperty,K1=Object.getOwnPropertyNames,wd=Object.getOwnPropertySymbols,Q1=Object.getOwnPropertyDescriptor,Y1=Object.getPrototypeOf,bd=Object.prototype;function ng(e,t,n){if(typeof t!="string"){if(bd){var r=Y1(t);r&&r!==bd&&ng(e,r,n)}var o=K1(t);wd&&(o=o.concat(wd(t)));for(var i=xd(e),a=xd(t),s=0;s<o.length;++s){var l=o[s];if(!V1[l]&&!(n&&n[l])&&!(a&&a[l])&&!(i&&i[l])){var u=Q1(t,l);try{G1(e,l,u)}catch{}}}}return e}var q1=ng;const rg=es(q1);var X1=function(e,t){return rg(e,t)},J1=!0;function Nc(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var ms=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||J1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},gs=function(t,n,r){ms(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Z1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ex={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tx=/[A-Z]|^ms/g,nx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,og=function(t){return t.charCodeAt(1)===45},Sd=function(t){return t!=null&&typeof t!="boolean"},nl=Xm(function(e){return og(e)?e:e.replace(tx,"-$&").toLowerCase()}),kd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(nx,function(r,o,i){return Lt={name:o,styles:i,next:Lt},o})}return ex[t]!==1&&!og(t)&&typeof n=="number"&&n!==0?n+"px":n};function Lo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Lt={name:n.name,styles:n.styles,next:Lt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Lt={name:r.name,styles:r.styles,next:Lt},r=r.next;var o=n.styles+";";return o}return rx(e,t,n)}case"function":{if(e!==void 0){var i=Lt,a=n(e);return Lt=i,Lo(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function rx(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Lo(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":Sd(a)&&(r+=nl(i)+":"+kd(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Sd(a[s])&&(r+=nl(i)+":"+kd(i,a[s])+";");else{var l=Lo(e,t,a);switch(i){case"animation":case"animationName":{r+=nl(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var Ed=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Lt,ui=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";Lt=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Lo(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=Lo(r,n,t[s]),o&&(i+=a[s]);Ed.lastIndex=0;for(var l="",u;(u=Ed.exec(i))!==null;)l+="-"+u[1];var f=Z1(i)+l;return{name:f,styles:i,next:Lt}},ox=function(t){return t()},ig=ql["useInsertionEffect"]?ql["useInsertionEffect"]:!1,Ac=ig||ox,_d=ig||S.useLayoutEffect,Lc={}.hasOwnProperty,zc=S.createContext(typeof HTMLElement<"u"?I1({key:"css"}):null),ix=zc.Provider,ax=function(){return S.useContext(zc)},ci=function(t){return S.forwardRef(function(n,r){var o=S.useContext(zc);return t(n,o,r)})},en=S.createContext({}),sx=function(){return S.useContext(en)},lx=function(t,n){if(typeof n=="function"){var r=n(t);return r}return Ao({},t,n)},ux=yd(function(e){return yd(function(t){return lx(e,t)})}),ag=function(t){var n=S.useContext(en);return t.theme!==n&&(n=ux(n)(t.theme)),S.createElement(en.Provider,{value:n},t.children)};function cx(e){var t=e.displayName||e.name||"Component",n=function(i,a){var s=S.useContext(en);return S.createElement(e,Ao({theme:s,ref:a},i))},r=S.forwardRef(n);return r.displayName="WithTheme("+t+")",X1(r,e)}var Zl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",fx=function(t,n){var r={};for(var o in n)Lc.call(n,o)&&(r[o]=n[o]);return r[Zl]=t,r},dx=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ms(n,r,o),Ac(function(){return gs(n,r,o)}),null},px=ci(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Zl],i=[r],a="";typeof e.className=="string"?a=Nc(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var s=ui(i,void 0,S.useContext(en));a+=t.key+"-"+s.name;var l={};for(var u in e)Lc.call(e,u)&&u!=="css"&&u!==Zl&&(l[u]=e[u]);return l.ref=n,l.className=a,S.createElement(S.Fragment,null,S.createElement(dx,{cache:t,serialized:s,isStringTag:typeof o=="string"}),S.createElement(o,l))}),hx=px,Od=function(t,n){var r=arguments;if(n==null||!Lc.call(n,"css"))return S.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=hx,i[1]=fx(t,n);for(var a=2;a<o;a++)i[a]=r[a];return S.createElement.apply(null,i)},sg=ci(function(e,t){var n=e.styles,r=ui([n],void 0,S.useContext(en)),o=S.useRef();return _d(function(){var i=t.key+"-global",a=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",i),a.hydrate([l])),o.current=[a,s],function(){a.flush()}},[t]),_d(function(){var i=o.current,a=i[0],s=i[1];if(s){i[1]=!1;return}if(r.next!==void 0&&gs(t,r.next,!0),a.tags.length){var l=a.tags[a.tags.length-1].nextElementSibling;a.before=l,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function Ic(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ui(t)}var mx=function(){var t=Ic.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},gx=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))a=e(i);else{a="";for(var s in i)i[s]&&s&&(a&&(a+=" "),a+=s)}break}default:a=i}a&&(o&&(o+=" "),o+=a)}}return o};function yx(e,t,n){var r=[],o=Nc(e,r,n);return r.length<2?n:o+t(r)}var vx=function(t){var n=t.cache,r=t.serializedArr;return Ac(function(){for(var o=0;o<r.length;o++)gs(n,r[o],!1)}),null},xx=ci(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];var h=ui(f,t.registered);return r.push(h),ms(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];return yx(t.registered,o,gx(f))},a={css:o,cx:i,theme:S.useContext(en)},s=e.children(a);return n=!0,S.createElement(S.Fragment,null,S.createElement(vx,{cache:t,serializedArr:r}),s)});const wx=Object.freeze(Object.defineProperty({__proto__:null,CacheProvider:ix,ClassNames:xx,Global:sg,ThemeContext:en,ThemeProvider:ag,__unsafe_useEmotionCache:ax,createElement:Od,css:Ic,jsx:Od,keyframes:mx,useTheme:sx,withEmotionCache:ci,withTheme:cx},Symbol.toStringTag,{value:"Module"}));var eu={},lg={exports:{}},ft={},ug={exports:{}},cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,M){var F=j.length;j.push(M);e:for(;0<F;){var oe=F-1>>>1,N=j[oe];if(0<o(N,M))j[oe]=M,j[F]=N,F=oe;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var M=j[0],F=j.pop();if(F!==M){j[0]=F;e:for(var oe=0,N=j.length,A=N>>>1;oe<A;){var z=2*(oe+1)-1,U=j[z],E=z+1,G=j[E];if(0>o(U,F))E<N&&0>o(G,U)?(j[oe]=G,j[E]=F,oe=E):(j[oe]=U,j[z]=F,oe=z);else if(E<N&&0>o(G,F))j[oe]=G,j[E]=F,oe=E;else break e}}return M}function o(j,M){var F=j.sortIndex-M.sortIndex;return F!==0?F:j.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,c=null,h=3,v=!1,g=!1,m=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(j){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=j)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function b(j){if(m=!1,y(j),!g)if(n(l)!==null)g=!0,Wt(k);else{var M=n(u);M!==null&&He(b,M.startTime-j)}}function k(j,M){g=!1,m&&(m=!1,p(T),T=-1),v=!0;var F=h;try{for(y(M),c=n(l);c!==null&&(!(c.expirationTime>M)||j&&!B());){var oe=c.callback;if(typeof oe=="function"){c.callback=null,h=c.priorityLevel;var N=oe(c.expirationTime<=M);M=e.unstable_now(),typeof N=="function"?c.callback=N:c===n(l)&&r(l),y(M)}else r(l);c=n(l)}if(c!==null)var A=!0;else{var z=n(u);z!==null&&He(b,z.startTime-M),A=!1}return A}finally{c=null,h=F,v=!1}}var _=!1,C=null,T=-1,D=5,L=-1;function B(){return!(e.unstable_now()-L<D)}function he(){if(C!==null){var j=e.unstable_now();L=j;var M=!0;try{M=C(!0,j)}finally{M?le():(_=!1,C=null)}}else _=!1}var le;if(typeof d=="function")le=function(){d(he)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,ke=Ie.port2;Ie.port1.onmessage=he,le=function(){ke.postMessage(null)}}else le=function(){x(he,0)};function Wt(j){C=j,_||(_=!0,le())}function He(j,M){T=x(function(){j(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Wt(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var F=h;h=M;try{return j()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,M){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var F=h;h=j;try{return M()}finally{h=F}},e.unstable_scheduleCallback=function(j,M,F){var oe=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?oe+F:oe):F=oe,j){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=F+N,j={id:f++,callback:M,priorityLevel:j,startTime:F,expirationTime:N,sortIndex:-1},F>oe?(j.sortIndex=F,t(u,j),n(l)===null&&j===n(u)&&(m?(p(T),T=-1):m=!0,He(b,F-oe))):(j.sortIndex=N,t(l,j),g||v||(g=!0,Wt(k))),j},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(j){var M=h;return function(){var F=h;h=M;try{return j.apply(this,arguments)}finally{h=F}}}})(cg);ug.exports=cg;var bx=ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg=S,lt=bx;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dg=new Set,zo={};function or(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(zo[e]=t,e=0;e<t.length;e++)dg.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=Object.prototype.hasOwnProperty,Sx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pd={},Cd={};function kx(e){return tu.call(Cd,e)?!0:tu.call(Pd,e)?!1:Sx.test(e)?Cd[e]=!0:(Pd[e]=!0,!1)}function Ex(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _x(e,t,n,r){if(t===null||typeof t>"u"||Ex(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dc=/[\-:]([a-z])/g;function Mc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Dc,Mc);ze[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Dc,Mc);ze[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Dc,Mc);ze[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fc(e,t,n,r){var o=ze.hasOwnProperty(t)?ze[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_x(t,n,o,r)&&(n=null),r||o===null?kx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ln=fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_i=Symbol.for("react.element"),cr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Uc=Symbol.for("react.strict_mode"),nu=Symbol.for("react.profiler"),pg=Symbol.for("react.provider"),hg=Symbol.for("react.context"),Bc=Symbol.for("react.forward_ref"),ru=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),Wc=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),mg=Symbol.for("react.offscreen"),$d=Symbol.iterator;function oo(e){return e===null||typeof e!="object"?null:(e=$d&&e[$d]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,rl;function mo(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var ol=!1;function il(e,t){if(!e||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mo(e):""}function Ox(e){switch(e.tag){case 5:return mo(e.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function iu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case cr:return"Portal";case nu:return"Profiler";case Uc:return"StrictMode";case ru:return"Suspense";case ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hg:return(e.displayName||"Context")+".Consumer";case pg:return(e._context.displayName||"Context")+".Provider";case Bc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wc:return t=e.displayName||null,t!==null?t:iu(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return iu(e(t))}catch{}}return null}function Px(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return iu(t);case 8:return t===Uc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cx(e){var t=gg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oi(e){e._valueTracker||(e._valueTracker=Cx(e))}function yg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function au(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Td(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vg(e,t){t=t.checked,t!=null&&Fc(e,"checked",t,!1)}function su(e,t){vg(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lu(e,t.type,n):t.hasOwnProperty("defaultValue")&&lu(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function lu(e,t,n){(t!=="number"||ya(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var go=Array.isArray;function _r(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function uu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(go(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function xg(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,bg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Io(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$x=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(e){$x.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bo[t]=bo[e]})});function Sg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bo.hasOwnProperty(e)&&bo[e]?(""+t).trim():t+"px"}function kg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Sg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Tx=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fu(e,t){if(t){if(Tx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function du(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=null;function Vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hu=null,Or=null,Pr=null;function Ad(e){if(e=pi(e)){if(typeof hu!="function")throw Error($(280));var t=e.stateNode;t&&(t=bs(t),hu(e.stateNode,e.type,t))}}function Eg(e){Or?Pr?Pr.push(e):Pr=[e]:Or=e}function _g(){if(Or){var e=Or,t=Pr;if(Pr=Or=null,Ad(e),t)for(e=0;e<t.length;e++)Ad(t[e])}}function Og(e,t){return e(t)}function Pg(){}var al=!1;function Cg(e,t,n){if(al)return e(t,n);al=!0;try{return Og(e,t,n)}finally{al=!1,(Or!==null||Pr!==null)&&(Pg(),_g())}}function Do(e,t){var n=e.stateNode;if(n===null)return null;var r=bs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var mu=!1;if(tn)try{var io={};Object.defineProperty(io,"passive",{get:function(){mu=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{mu=!1}function jx(e,t,n,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var So=!1,va=null,xa=!1,gu=null,Rx={onError:function(e){So=!0,va=e}};function Nx(e,t,n,r,o,i,a,s,l){So=!1,va=null,jx.apply(Rx,arguments)}function Ax(e,t,n,r,o,i,a,s,l){if(Nx.apply(this,arguments),So){if(So){var u=va;So=!1,va=null}else throw Error($(198));xa||(xa=!0,gu=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ld(e){if(ir(e)!==e)throw Error($(188))}function Lx(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ld(o),e;if(i===r)return Ld(o),t;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function Tg(e){return e=Lx(e),e!==null?jg(e):null}function jg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jg(e);if(t!==null)return t;e=e.sibling}return null}var Rg=lt.unstable_scheduleCallback,zd=lt.unstable_cancelCallback,zx=lt.unstable_shouldYield,Ix=lt.unstable_requestPaint,xe=lt.unstable_now,Dx=lt.unstable_getCurrentPriorityLevel,Hc=lt.unstable_ImmediatePriority,Ng=lt.unstable_UserBlockingPriority,wa=lt.unstable_NormalPriority,Mx=lt.unstable_LowPriority,Ag=lt.unstable_IdlePriority,ys=null,Mt=null;function Fx(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(ys,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Wx,Ux=Math.log,Bx=Math.LN2;function Wx(e){return e>>>=0,e===0?32:31-(Ux(e)/Bx|0)|0}var Ci=64,$i=4194304;function yo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ba(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=yo(s):(i&=a,i!==0&&(r=yo(i)))}else a=n&~o,a!==0?r=yo(a):i!==0&&(r=yo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$t(t),o=1<<n,r|=e[n],t&=~o;return r}function Vx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-$t(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=Vx(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function yu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lg(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$t(t),e[t]=n}function Gx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-$t(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Gc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$t(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function zg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ig,Kc,Dg,Mg,Fg,vu=!1,Ti=[],bn=null,Sn=null,kn=null,Mo=new Map,Fo=new Map,mn=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Id(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function ao(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=pi(t),t!==null&&Kc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Qx(e,t,n,r,o){switch(t){case"focusin":return bn=ao(bn,e,t,n,r,o),!0;case"dragenter":return Sn=ao(Sn,e,t,n,r,o),!0;case"mouseover":return kn=ao(kn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Mo.set(i,ao(Mo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Fo.set(i,ao(Fo.get(i)||null,e,t,n,r,o)),!0}return!1}function Ug(e){var t=Gn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=$g(n),t!==null){e.blockedOn=t,Fg(e.priority,function(){Dg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pu=r,n.target.dispatchEvent(r),pu=null}else return t=pi(n),t!==null&&Kc(t),e.blockedOn=n,!1;t.shift()}return!0}function Dd(e,t,n){Xi(e)&&n.delete(t)}function Yx(){vu=!1,bn!==null&&Xi(bn)&&(bn=null),Sn!==null&&Xi(Sn)&&(Sn=null),kn!==null&&Xi(kn)&&(kn=null),Mo.forEach(Dd),Fo.forEach(Dd)}function so(e,t){e.blockedOn===t&&(e.blockedOn=null,vu||(vu=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Yx)))}function Uo(e){function t(o){return so(o,e)}if(0<Ti.length){so(Ti[0],e);for(var n=1;n<Ti.length;n++){var r=Ti[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&so(bn,e),Sn!==null&&so(Sn,e),kn!==null&&so(kn,e),Mo.forEach(t),Fo.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)Ug(n),n.blockedOn===null&&mn.shift()}var Cr=ln.ReactCurrentBatchConfig,Sa=!0;function qx(e,t,n,r){var o=te,i=Cr.transition;Cr.transition=null;try{te=1,Qc(e,t,n,r)}finally{te=o,Cr.transition=i}}function Xx(e,t,n,r){var o=te,i=Cr.transition;Cr.transition=null;try{te=4,Qc(e,t,n,r)}finally{te=o,Cr.transition=i}}function Qc(e,t,n,r){if(Sa){var o=xu(e,t,n,r);if(o===null)yl(e,t,r,ka,n),Id(e,r);else if(Qx(o,e,t,n,r))r.stopPropagation();else if(Id(e,r),t&4&&-1<Kx.indexOf(e)){for(;o!==null;){var i=pi(o);if(i!==null&&Ig(i),i=xu(e,t,n,r),i===null&&yl(e,t,r,ka,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var ka=null;function xu(e,t,n,r){if(ka=null,e=Vc(r),e=Gn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ka=e,null}function Bg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dx()){case Hc:return 1;case Ng:return 4;case wa:case Mx:return 16;case Ag:return 536870912;default:return 16}default:return 16}}var vn=null,Yc=null,Ji=null;function Wg(){if(Ji)return Ji;var e,t=Yc,n=t.length,r,o="value"in vn?vn.value:vn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ji=o.slice(e,1<r?1-r:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function Md(){return!1}function dt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ji:Md,this.isPropagationStopped=Md,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qc=dt(Qr),di=pe({},Qr,{view:0,detail:0}),Jx=dt(di),ll,ul,lo,vs=pe({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(ll=e.screenX-lo.screenX,ul=e.screenY-lo.screenY):ul=ll=0,lo=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Fd=dt(vs),Zx=pe({},vs,{dataTransfer:0}),ew=dt(Zx),tw=pe({},di,{relatedTarget:0}),cl=dt(tw),nw=pe({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),rw=dt(nw),ow=pe({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iw=dt(ow),aw=pe({},Qr,{data:0}),Ud=dt(aw),sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uw[e])?!!t[e]:!1}function Xc(){return cw}var fw=pe({},di,{key:function(e){if(e.key){var t=sw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dw=dt(fw),pw=pe({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=dt(pw),hw=pe({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),mw=dt(hw),gw=pe({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yw=dt(gw),vw=pe({},vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xw=dt(vw),ww=[9,13,27,32],Jc=tn&&"CompositionEvent"in window,ko=null;tn&&"documentMode"in document&&(ko=document.documentMode);var bw=tn&&"TextEvent"in window&&!ko,Vg=tn&&(!Jc||ko&&8<ko&&11>=ko),Wd=String.fromCharCode(32),Vd=!1;function Hg(e,t){switch(e){case"keyup":return ww.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function Sw(e,t){switch(e){case"compositionend":return Gg(t);case"keypress":return t.which!==32?null:(Vd=!0,Wd);case"textInput":return e=t.data,e===Wd&&Vd?null:e;default:return null}}function kw(e,t){if(dr)return e==="compositionend"||!Jc&&Hg(e,t)?(e=Wg(),Ji=Yc=vn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vg&&t.locale!=="ko"?null:t.data;default:return null}}var Ew={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ew[e.type]:t==="textarea"}function Kg(e,t,n,r){Eg(r),t=Ea(t,"onChange"),0<t.length&&(n=new qc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Eo=null,Bo=null;function _w(e){oy(e,0)}function xs(e){var t=mr(e);if(yg(t))return e}function Ow(e,t){if(e==="change")return t}var Qg=!1;if(tn){var fl;if(tn){var dl="oninput"in document;if(!dl){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),dl=typeof Gd.oninput=="function"}fl=dl}else fl=!1;Qg=fl&&(!document.documentMode||9<document.documentMode)}function Kd(){Eo&&(Eo.detachEvent("onpropertychange",Yg),Bo=Eo=null)}function Yg(e){if(e.propertyName==="value"&&xs(Bo)){var t=[];Kg(t,Bo,e,Vc(e)),Cg(_w,t)}}function Pw(e,t,n){e==="focusin"?(Kd(),Eo=t,Bo=n,Eo.attachEvent("onpropertychange",Yg)):e==="focusout"&&Kd()}function Cw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xs(Bo)}function $w(e,t){if(e==="click")return xs(t)}function Tw(e,t){if(e==="input"||e==="change")return xs(t)}function jw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:jw;function Wo(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!tu.call(t,o)||!jt(e[o],t[o]))return!1}return!0}function Qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yd(e,t){var n=Qd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qd(n)}}function qg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xg(){for(var e=window,t=ya();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ya(e.document)}return t}function Zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rw(e){var t=Xg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qg(n.ownerDocument.documentElement,n)){if(r!==null&&Zc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Yd(n,i);var a=Yd(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nw=tn&&"documentMode"in document&&11>=document.documentMode,pr=null,wu=null,_o=null,bu=!1;function qd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bu||pr==null||pr!==ya(r)||(r=pr,"selectionStart"in r&&Zc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&Wo(_o,r)||(_o=r,r=Ea(wu,"onSelect"),0<r.length&&(t=new qc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pr)))}function Ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hr={animationend:Ri("Animation","AnimationEnd"),animationiteration:Ri("Animation","AnimationIteration"),animationstart:Ri("Animation","AnimationStart"),transitionend:Ri("Transition","TransitionEnd")},pl={},Jg={};tn&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function ws(e){if(pl[e])return pl[e];if(!hr[e])return e;var t=hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jg)return pl[e]=t[n];return e}var Zg=ws("animationend"),ey=ws("animationiteration"),ty=ws("animationstart"),ny=ws("transitionend"),ry=new Map,Xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){ry.set(e,t),or(t,[e])}for(var hl=0;hl<Xd.length;hl++){var ml=Xd[hl],Aw=ml.toLowerCase(),Lw=ml[0].toUpperCase()+ml.slice(1);Dn(Aw,"on"+Lw)}Dn(Zg,"onAnimationEnd");Dn(ey,"onAnimationIteration");Dn(ty,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(ny,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zw=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Jd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ax(r,t,void 0,e),e.currentTarget=null}function oy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Jd(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Jd(o,s,u),i=l}}}if(xa)throw e=gu,xa=!1,gu=null,e}function ae(e,t){var n=t[Ou];n===void 0&&(n=t[Ou]=new Set);var r=e+"__bubble";n.has(r)||(iy(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),iy(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Vo(e){if(!e[Ni]){e[Ni]=!0,dg.forEach(function(n){n!=="selectionchange"&&(zw.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,gl("selectionchange",!1,t))}}function iy(e,t,n,r){switch(Bg(t)){case 1:var o=qx;break;case 4:o=Xx;break;default:o=Qc}n=o.bind(null,t,n,e),o=void 0,!mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Gn(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Cg(function(){var u=i,f=Vc(n),c=[];e:{var h=ry.get(e);if(h!==void 0){var v=qc,g=e;switch(e){case"keypress":if(Zi(n)===0)break e;case"keydown":case"keyup":v=dw;break;case"focusin":g="focus",v=cl;break;case"focusout":g="blur",v=cl;break;case"beforeblur":case"afterblur":v=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ew;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=mw;break;case Zg:case ey:case ty:v=rw;break;case ny:v=yw;break;case"scroll":v=Jx;break;case"wheel":v=xw;break;case"copy":case"cut":case"paste":v=iw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Bd}var m=(t&4)!==0,x=!m&&e==="scroll",p=m?h!==null?h+"Capture":null:h;m=[];for(var d=u,y;d!==null;){y=d;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,p!==null&&(b=Do(d,p),b!=null&&m.push(Ho(d,b,y)))),x)break;d=d.return}0<m.length&&(h=new v(h,g,null,n,f),c.push({event:h,listeners:m}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==pu&&(g=n.relatedTarget||n.fromElement)&&(Gn(g)||g[nn]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?Gn(g):null,g!==null&&(x=ir(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(m=Fd,b="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(m=Bd,b="onPointerLeave",p="onPointerEnter",d="pointer"),x=v==null?h:mr(v),y=g==null?h:mr(g),h=new m(b,d+"leave",v,n,f),h.target=x,h.relatedTarget=y,b=null,Gn(f)===u&&(m=new m(p,d+"enter",g,n,f),m.target=y,m.relatedTarget=x,b=m),x=b,v&&g)t:{for(m=v,p=g,d=0,y=m;y;y=sr(y))d++;for(y=0,b=p;b;b=sr(b))y++;for(;0<d-y;)m=sr(m),d--;for(;0<y-d;)p=sr(p),y--;for(;d--;){if(m===p||p!==null&&m===p.alternate)break t;m=sr(m),p=sr(p)}m=null}else m=null;v!==null&&Zd(c,h,v,m,!1),g!==null&&x!==null&&Zd(c,x,g,m,!0)}}e:{if(h=u?mr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var k=Ow;else if(Hd(h))if(Qg)k=Tw;else{k=Cw;var _=Pw}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=$w);if(k&&(k=k(e,u))){Kg(c,k,n,f);break e}_&&_(e,h,u),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&lu(h,"number",h.value)}switch(_=u?mr(u):window,e){case"focusin":(Hd(_)||_.contentEditable==="true")&&(pr=_,wu=u,_o=null);break;case"focusout":_o=wu=pr=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,qd(c,n,f);break;case"selectionchange":if(Nw)break;case"keydown":case"keyup":qd(c,n,f)}var C;if(Jc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else dr?Hg(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Vg&&n.locale!=="ko"&&(dr||T!=="onCompositionStart"?T==="onCompositionEnd"&&dr&&(C=Wg()):(vn=f,Yc="value"in vn?vn.value:vn.textContent,dr=!0)),_=Ea(u,T),0<_.length&&(T=new Ud(T,e,null,n,f),c.push({event:T,listeners:_}),C?T.data=C:(C=Gg(n),C!==null&&(T.data=C)))),(C=bw?Sw(e,n):kw(e,n))&&(u=Ea(u,"onBeforeInput"),0<u.length&&(f=new Ud("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=C))}oy(c,t)})}function Ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Do(e,n),i!=null&&r.unshift(Ho(e,i,o)),i=Do(e,t),i!=null&&r.push(Ho(e,i,o))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zd(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Do(n,i),l!=null&&a.unshift(Ho(n,l,s))):o||(l=Do(n,i),l!=null&&a.push(Ho(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Iw=/\r\n?/g,Dw=/\u0000|\uFFFD/g;function ep(e){return(typeof e=="string"?e:""+e).replace(Iw,`
`).replace(Dw,"")}function Ai(e,t,n){if(t=ep(t),ep(e)!==t&&n)throw Error($(425))}function _a(){}var Su=null,ku=null;function Eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,Mw=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,Fw=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(e){return tp.resolve(null).then(e).catch(Uw)}:_u;function Uw(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Uo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Uo(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function np(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),zt="__reactFiber$"+Yr,Go="__reactProps$"+Yr,nn="__reactContainer$"+Yr,Ou="__reactEvents$"+Yr,Bw="__reactListeners$"+Yr,Ww="__reactHandles$"+Yr;function Gn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=np(e);e!==null;){if(n=e[zt])return n;e=np(e)}return t}e=n,n=e.parentNode}return null}function pi(e){return e=e[zt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function bs(e){return e[Go]||null}var Pu=[],gr=-1;function Mn(e){return{current:e}}function se(e){0>gr||(e.current=Pu[gr],Pu[gr]=null,gr--)}function ie(e,t){gr++,Pu[gr]=e.current,e.current=t}var Ln={},Ve=Mn(Ln),et=Mn(!1),Xn=Ln;function Lr(e,t){var n=e.type.contextTypes;if(!n)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tt(e){return e=e.childContextTypes,e!=null}function Oa(){se(et),se(Ve)}function rp(e,t,n){if(Ve.current!==Ln)throw Error($(168));ie(Ve,t),ie(et,n)}function ay(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error($(108,Px(e)||"Unknown",o));return pe({},n,r)}function Pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,Xn=Ve.current,ie(Ve,e),ie(et,et.current),!0}function op(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=ay(e,t,Xn),r.__reactInternalMemoizedMergedChildContext=e,se(et),se(Ve),ie(Ve,e)):se(et),ie(et,n)}var Qt=null,Ss=!1,xl=!1;function sy(e){Qt===null?Qt=[e]:Qt.push(e)}function Vw(e){Ss=!0,sy(e)}function Fn(){if(!xl&&Qt!==null){xl=!0;var e=0,t=te;try{var n=Qt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,Ss=!1}catch(o){throw Qt!==null&&(Qt=Qt.slice(e+1)),Rg(Hc,Fn),o}finally{te=t,xl=!1}}return null}var yr=[],vr=0,Ca=null,$a=0,pt=[],ht=0,Jn=null,Yt=1,qt="";function Wn(e,t){yr[vr++]=$a,yr[vr++]=Ca,Ca=e,$a=t}function ly(e,t,n){pt[ht++]=Yt,pt[ht++]=qt,pt[ht++]=Jn,Jn=e;var r=Yt;e=qt;var o=32-$t(r)-1;r&=~(1<<o),n+=1;var i=32-$t(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Yt=1<<32-$t(t)+o|n<<o|r,qt=i+e}else Yt=1<<i|n<<o|r,qt=e}function ef(e){e.return!==null&&(Wn(e,1),ly(e,1,0))}function tf(e){for(;e===Ca;)Ca=yr[--vr],yr[vr]=null,$a=yr[--vr],yr[vr]=null;for(;e===Jn;)Jn=pt[--ht],pt[ht]=null,qt=pt[--ht],pt[ht]=null,Yt=pt[--ht],pt[ht]=null}var st=null,it=null,ce=!1,Pt=null;function uy(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ip(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,it=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:Yt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,it=null,!0):!1;default:return!1}}function Cu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $u(e){if(ce){var t=it;if(t){var n=t;if(!ip(e,t)){if(Cu(e))throw Error($(418));t=En(n.nextSibling);var r=st;t&&ip(e,t)?uy(r,n):(e.flags=e.flags&-4097|2,ce=!1,st=e)}}else{if(Cu(e))throw Error($(418));e.flags=e.flags&-4097|2,ce=!1,st=e}}}function ap(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Li(e){if(e!==st)return!1;if(!ce)return ap(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Eu(e.type,e.memoizedProps)),t&&(t=it)){if(Cu(e))throw cy(),Error($(418));for(;t;)uy(e,t),t=En(t.nextSibling)}if(ap(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=st?En(e.stateNode.nextSibling):null;return!0}function cy(){for(var e=it;e;)e=En(e.nextSibling)}function zr(){it=st=null,ce=!1}function nf(e){Pt===null?Pt=[e]:Pt.push(e)}var Hw=ln.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ta=Mn(null),ja=null,xr=null,rf=null;function of(){rf=xr=ja=null}function af(e){var t=Ta.current;se(Ta),e._currentValue=t}function Tu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){ja=e,rf=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(rf!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(ja===null)throw Error($(308));xr=e,ja.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Kn=null;function sf(e){Kn===null?Kn=[e]:Kn.push(e)}function fy(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,sf(t)):(n.next=o.next,o.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hn=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,rn(e,n)}return o=r.interleaved,o===null?(t.next=t,sf(r)):(t.next=o.next,o.next=t),r.interleaved=t,rn(e,n)}function ea(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gc(e,n)}}function sp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ra(e,t,n,r){var o=e.updateQueue;hn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(i!==null){var c=o.baseState;a=0,f=u=l=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,m=s;switch(h=t,v=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){c=g.call(v,c,h);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,h=typeof g=="function"?g.call(v,c,h):g,h==null)break e;c=pe({},c,h);break e;case 2:hn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,l=c):f=f.next=v,a|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(f===null&&(l=c),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);er|=a,e.lanes=a,e.memoizedState=c}}function lp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error($(191,o));o.call(r)}}}var py=new fg.Component().refs;function ju(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ks={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),o=Pn(e),i=Jt(r,o);i.payload=t,n!=null&&(i.callback=n),t=_n(e,i,o),t!==null&&(Tt(t,e,o,r),ea(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),o=Pn(e),i=Jt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_n(e,i,o),t!==null&&(Tt(t,e,o,r),ea(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=Pn(e),o=Jt(n,r);o.tag=2,t!=null&&(o.callback=t),t=_n(e,o,r),t!==null&&(Tt(t,e,r,n),ea(t,e,r))}};function up(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Wo(n,r)||!Wo(o,i):!0}function hy(e,t,n){var r=!1,o=Ln,i=t.contextType;return typeof i=="object"&&i!==null?i=vt(i):(o=tt(t)?Xn:Ve.current,r=t.contextTypes,i=(r=r!=null)?Lr(e,o):Ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ks,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function cp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ks.enqueueReplaceState(t,t.state,null)}function Ru(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=py,lf(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=vt(i):(i=tt(t)?Xn:Ve.current,o.context=Lr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ju(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ks.enqueueReplaceState(o,o.state,null),Ra(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function uo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===py&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function zi(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fp(e){var t=e._init;return t(e._payload)}function my(e){function t(p,d){if(e){var y=p.deletions;y===null?(p.deletions=[d],p.flags|=16):y.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=Cn(p,d),p.index=0,p.sibling=null,p}function i(p,d,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<d?(p.flags|=2,d):y):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,y,b){return d===null||d.tag!==6?(d=Ol(y,p.mode,b),d.return=p,d):(d=o(d,y),d.return=p,d)}function l(p,d,y,b){var k=y.type;return k===fr?f(p,d,y.props.children,b,y.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===pn&&fp(k)===d.type)?(b=o(d,y.props),b.ref=uo(p,d,y),b.return=p,b):(b=aa(y.type,y.key,y.props,null,p.mode,b),b.ref=uo(p,d,y),b.return=p,b)}function u(p,d,y,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=Pl(y,p.mode,b),d.return=p,d):(d=o(d,y.children||[]),d.return=p,d)}function f(p,d,y,b,k){return d===null||d.tag!==7?(d=qn(y,p.mode,b,k),d.return=p,d):(d=o(d,y),d.return=p,d)}function c(p,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ol(""+d,p.mode,y),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case _i:return y=aa(d.type,d.key,d.props,null,p.mode,y),y.ref=uo(p,null,d),y.return=p,y;case cr:return d=Pl(d,p.mode,y),d.return=p,d;case pn:var b=d._init;return c(p,b(d._payload),y)}if(go(d)||oo(d))return d=qn(d,p.mode,y,null),d.return=p,d;zi(p,d)}return null}function h(p,d,y,b){var k=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:s(p,d,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _i:return y.key===k?l(p,d,y,b):null;case cr:return y.key===k?u(p,d,y,b):null;case pn:return k=y._init,h(p,d,k(y._payload),b)}if(go(y)||oo(y))return k!==null?null:f(p,d,y,b,null);zi(p,y)}return null}function v(p,d,y,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(y)||null,s(d,p,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case _i:return p=p.get(b.key===null?y:b.key)||null,l(d,p,b,k);case cr:return p=p.get(b.key===null?y:b.key)||null,u(d,p,b,k);case pn:var _=b._init;return v(p,d,y,_(b._payload),k)}if(go(b)||oo(b))return p=p.get(y)||null,f(d,p,b,k,null);zi(d,b)}return null}function g(p,d,y,b){for(var k=null,_=null,C=d,T=d=0,D=null;C!==null&&T<y.length;T++){C.index>T?(D=C,C=null):D=C.sibling;var L=h(p,C,y[T],b);if(L===null){C===null&&(C=D);break}e&&C&&L.alternate===null&&t(p,C),d=i(L,d,T),_===null?k=L:_.sibling=L,_=L,C=D}if(T===y.length)return n(p,C),ce&&Wn(p,T),k;if(C===null){for(;T<y.length;T++)C=c(p,y[T],b),C!==null&&(d=i(C,d,T),_===null?k=C:_.sibling=C,_=C);return ce&&Wn(p,T),k}for(C=r(p,C);T<y.length;T++)D=v(C,p,T,y[T],b),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?T:D.key),d=i(D,d,T),_===null?k=D:_.sibling=D,_=D);return e&&C.forEach(function(B){return t(p,B)}),ce&&Wn(p,T),k}function m(p,d,y,b){var k=oo(y);if(typeof k!="function")throw Error($(150));if(y=k.call(y),y==null)throw Error($(151));for(var _=k=null,C=d,T=d=0,D=null,L=y.next();C!==null&&!L.done;T++,L=y.next()){C.index>T?(D=C,C=null):D=C.sibling;var B=h(p,C,L.value,b);if(B===null){C===null&&(C=D);break}e&&C&&B.alternate===null&&t(p,C),d=i(B,d,T),_===null?k=B:_.sibling=B,_=B,C=D}if(L.done)return n(p,C),ce&&Wn(p,T),k;if(C===null){for(;!L.done;T++,L=y.next())L=c(p,L.value,b),L!==null&&(d=i(L,d,T),_===null?k=L:_.sibling=L,_=L);return ce&&Wn(p,T),k}for(C=r(p,C);!L.done;T++,L=y.next())L=v(C,p,T,L.value,b),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?T:L.key),d=i(L,d,T),_===null?k=L:_.sibling=L,_=L);return e&&C.forEach(function(he){return t(p,he)}),ce&&Wn(p,T),k}function x(p,d,y,b){if(typeof y=="object"&&y!==null&&y.type===fr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _i:e:{for(var k=y.key,_=d;_!==null;){if(_.key===k){if(k=y.type,k===fr){if(_.tag===7){n(p,_.sibling),d=o(_,y.props.children),d.return=p,p=d;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===pn&&fp(k)===_.type){n(p,_.sibling),d=o(_,y.props),d.ref=uo(p,_,y),d.return=p,p=d;break e}n(p,_);break}else t(p,_);_=_.sibling}y.type===fr?(d=qn(y.props.children,p.mode,b,y.key),d.return=p,p=d):(b=aa(y.type,y.key,y.props,null,p.mode,b),b.ref=uo(p,d,y),b.return=p,p=b)}return a(p);case cr:e:{for(_=y.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(p,d.sibling),d=o(d,y.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Pl(y,p.mode,b),d.return=p,p=d}return a(p);case pn:return _=y._init,x(p,d,_(y._payload),b)}if(go(y))return g(p,d,y,b);if(oo(y))return m(p,d,y,b);zi(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,y),d.return=p,p=d):(n(p,d),d=Ol(y,p.mode,b),d.return=p,p=d),a(p)):n(p,d)}return x}var Ir=my(!0),gy=my(!1),hi={},Ft=Mn(hi),Ko=Mn(hi),Qo=Mn(hi);function Qn(e){if(e===hi)throw Error($(174));return e}function uf(e,t){switch(ie(Qo,t),ie(Ko,e),ie(Ft,hi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cu(t,e)}se(Ft),ie(Ft,t)}function Dr(){se(Ft),se(Ko),se(Qo)}function yy(e){Qn(Qo.current);var t=Qn(Ft.current),n=cu(t,e.type);t!==n&&(ie(Ko,e),ie(Ft,n))}function cf(e){Ko.current===e&&(se(Ft),se(Ko))}var fe=Mn(0);function Na(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function ff(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var ta=ln.ReactCurrentDispatcher,bl=ln.ReactCurrentBatchConfig,Zn=0,de=null,Ee=null,Oe=null,Aa=!1,Oo=!1,Yo=0,Gw=0;function Me(){throw Error($(321))}function df(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function pf(e,t,n,r,o,i){if(Zn=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ta.current=e===null||e.memoizedState===null?qw:Xw,e=n(r,o),Oo){i=0;do{if(Oo=!1,Yo=0,25<=i)throw Error($(301));i+=1,Oe=Ee=null,t.updateQueue=null,ta.current=Jw,e=n(r,o)}while(Oo)}if(ta.current=La,t=Ee!==null&&Ee.next!==null,Zn=0,Oe=Ee=de=null,Aa=!1,t)throw Error($(300));return e}function hf(){var e=Yo!==0;return Yo=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?de.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function xt(){if(Ee===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Oe===null?de.memoizedState:Oe.next;if(t!==null)Oe=t,Ee=e;else{if(e===null)throw Error($(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Oe===null?de.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function qo(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=xt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var f=u.lane;if((Zn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=r):l=l.next=c,de.lanes|=f,er|=f}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,jt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,de.lanes|=i,er|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kl(e){var t=xt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);jt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function vy(){}function xy(e,t){var n=de,r=xt(),o=t(),i=!jt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ze=!0),r=r.queue,mf(Sy.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Xo(9,by.bind(null,n,r,o,t),void 0,null),Pe===null)throw Error($(349));Zn&30||wy(n,t,o)}return o}function wy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function by(e,t,n,r){t.value=n,t.getSnapshot=r,ky(t)&&Ey(e)}function Sy(e,t,n){return n(function(){ky(t)&&Ey(e)})}function ky(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function Ey(e){var t=rn(e,1);t!==null&&Tt(t,e,1,-1)}function dp(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t.queue=e,e=e.dispatch=Yw.bind(null,de,e),[t.memoizedState,e]}function Xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _y(){return xt().memoizedState}function na(e,t,n,r){var o=Nt();de.flags|=e,o.memoizedState=Xo(1|t,n,void 0,r===void 0?null:r)}function Es(e,t,n,r){var o=xt();r=r===void 0?null:r;var i=void 0;if(Ee!==null){var a=Ee.memoizedState;if(i=a.destroy,r!==null&&df(r,a.deps)){o.memoizedState=Xo(t,n,i,r);return}}de.flags|=e,o.memoizedState=Xo(1|t,n,i,r)}function pp(e,t){return na(8390656,8,e,t)}function mf(e,t){return Es(2048,8,e,t)}function Oy(e,t){return Es(4,2,e,t)}function Py(e,t){return Es(4,4,e,t)}function Cy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $y(e,t,n){return n=n!=null?n.concat([e]):null,Es(4,4,Cy.bind(null,t,e),n)}function gf(){}function Ty(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&df(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jy(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&df(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ry(e,t,n){return Zn&21?(jt(n,t)||(n=Lg(),de.lanes|=n,er|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function Kw(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{te=n,bl.transition=r}}function Ny(){return xt().memoizedState}function Qw(e,t,n){var r=Pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ay(e))Ly(t,n);else if(n=fy(e,t,n,r),n!==null){var o=Ke();Tt(n,e,r,o),zy(n,t,r)}}function Yw(e,t,n){var r=Pn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ay(e))Ly(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,jt(s,a)){var l=t.interleaved;l===null?(o.next=o,sf(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=fy(e,t,o,r),n!==null&&(o=Ke(),Tt(n,e,r,o),zy(n,t,r))}}function Ay(e){var t=e.alternate;return e===de||t!==null&&t===de}function Ly(e,t){Oo=Aa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gc(e,n)}}var La={readContext:vt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},qw={readContext:vt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:pp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,na(4194308,4,Cy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return na(4194308,4,e,t)},useInsertionEffect:function(e,t){return na(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qw.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:dp,useDebugValue:gf,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=dp(!1),t=e[0];return e=Kw.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=Nt();if(ce){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Pe===null)throw Error($(349));Zn&30||wy(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,pp(Sy.bind(null,r,i,e),[e]),r.flags|=2048,Xo(9,by.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Nt(),t=Pe.identifierPrefix;if(ce){var n=qt,r=Yt;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xw={readContext:vt,useCallback:Ty,useContext:vt,useEffect:mf,useImperativeHandle:$y,useInsertionEffect:Oy,useLayoutEffect:Py,useMemo:jy,useReducer:Sl,useRef:_y,useState:function(){return Sl(qo)},useDebugValue:gf,useDeferredValue:function(e){var t=xt();return Ry(t,Ee.memoizedState,e)},useTransition:function(){var e=Sl(qo)[0],t=xt().memoizedState;return[e,t]},useMutableSource:vy,useSyncExternalStore:xy,useId:Ny,unstable_isNewReconciler:!1},Jw={readContext:vt,useCallback:Ty,useContext:vt,useEffect:mf,useImperativeHandle:$y,useInsertionEffect:Oy,useLayoutEffect:Py,useMemo:jy,useReducer:kl,useRef:_y,useState:function(){return kl(qo)},useDebugValue:gf,useDeferredValue:function(e){var t=xt();return Ee===null?t.memoizedState=e:Ry(t,Ee.memoizedState,e)},useTransition:function(){var e=kl(qo)[0],t=xt().memoizedState;return[e,t]},useMutableSource:vy,useSyncExternalStore:xy,useId:Ny,unstable_isNewReconciler:!1};function Mr(e,t){try{var n="",r=t;do n+=Ox(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function El(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zw=typeof WeakMap=="function"?WeakMap:Map;function Iy(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ia||(Ia=!0,Wu=r),Nu(e,t)},n}function Dy(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Nu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nu(e,t),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function hp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zw;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=pb.bind(null,e,t,n),t.then(e,e))}function mp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,_n(n,t,1))),n.lanes|=1),e)}var eb=ln.ReactCurrentOwner,Ze=!1;function Ge(e,t,n,r){t.child=e===null?gy(t,null,n,r):Ir(t,e.child,n,r)}function yp(e,t,n,r,o){n=n.render;var i=t.ref;return $r(t,o),r=pf(e,t,n,r,i,o),n=hf(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,on(e,t,o)):(ce&&n&&ef(t),t.flags|=1,Ge(e,t,r,o),t.child)}function vp(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ef(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,My(e,t,i,r,o)):(e=aa(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(a,r)&&e.ref===t.ref)return on(e,t,o)}return t.flags|=1,e=Cn(i,r),e.ref=t.ref,e.return=t,t.child=e}function My(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Wo(i,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,on(e,t,o)}return Au(e,t,n,r,o)}function Fy(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(br,ot),ot|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(br,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(br,ot),ot|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(br,ot),ot|=r;return Ge(e,t,o,n),t.child}function Uy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Au(e,t,n,r,o){var i=tt(n)?Xn:Ve.current;return i=Lr(t,i),$r(t,o),n=pf(e,t,n,r,i,o),r=hf(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,on(e,t,o)):(ce&&r&&ef(t),t.flags|=1,Ge(e,t,n,o),t.child)}function xp(e,t,n,r,o){if(tt(n)){var i=!0;Pa(t)}else i=!1;if($r(t,o),t.stateNode===null)ra(e,t),hy(t,n,r),Ru(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=tt(n)?Xn:Ve.current,u=Lr(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&cp(t,a,r,u),hn=!1;var h=t.memoizedState;a.state=h,Ra(t,r,a,o),l=t.memoizedState,s!==r||h!==l||et.current||hn?(typeof f=="function"&&(ju(t,n,f,r),l=t.memoizedState),(s=hn||up(t,n,s,r,h,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,dy(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Et(t.type,s),a.props=u,c=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=tt(n)?Xn:Ve.current,l=Lr(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||h!==l)&&cp(t,a,r,l),hn=!1,h=t.memoizedState,a.state=h,Ra(t,r,a,o);var g=t.memoizedState;s!==c||h!==g||et.current||hn?(typeof v=="function"&&(ju(t,n,v,r),g=t.memoizedState),(u=hn||up(t,n,u,r,h,g,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Lu(e,t,n,r,i,o)}function Lu(e,t,n,r,o,i){Uy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&op(t,n,!1),on(e,t,i);r=t.stateNode,eb.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ir(t,e.child,null,i),t.child=Ir(t,null,s,i)):Ge(e,t,s,i),t.memoizedState=r.state,o&&op(t,n,!0),t.child}function By(e){var t=e.stateNode;t.pendingContext?rp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rp(e,t.context,!1),uf(e,t.containerInfo)}function wp(e,t,n,r,o){return zr(),nf(o),t.flags|=256,Ge(e,t,n,r),t.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wy(e,t,n){var r=t.pendingProps,o=fe.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(fe,o&1),e===null)return $u(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ps(a,r,0,null),e=qn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Iu(n),t.memoizedState=zu,e):yf(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return tb(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Cn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Cn(s,i):(i=qn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Iu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=zu,r}return i=e.child,e=i.sibling,r=Cn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yf(e,t){return t=Ps({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ii(e,t,n,r){return r!==null&&nf(r),Ir(t,e.child,null,n),e=yf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tb(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=El(Error($(422))),Ii(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ps({mode:"visible",children:r.children},o,0,null),i=qn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ir(t,e.child,null,a),t.child.memoizedState=Iu(a),t.memoizedState=zu,i);if(!(t.mode&1))return Ii(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error($(419)),r=El(i,r,void 0),Ii(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ze||s){if(r=Pe,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,rn(e,o),Tt(r,e,o,-1))}return kf(),r=El(Error($(421))),Ii(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=hb.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,it=En(o.nextSibling),st=t,ce=!0,Pt=null,e!==null&&(pt[ht++]=Yt,pt[ht++]=qt,pt[ht++]=Jn,Yt=e.id,qt=e.overflow,Jn=t),t=yf(t,r.children),t.flags|=4096,t)}function bp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tu(e.return,t,n)}function _l(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Vy(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ge(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bp(e,n,t);else if(e.tag===19)bp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Na(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_l(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Na(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_l(t,!0,n,null,i);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ra(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),er|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nb(e,t,n){switch(t.tag){case 3:By(t),zr();break;case 5:yy(t);break;case 1:tt(t.type)&&Pa(t);break;case 4:uf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(Ta,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Wy(e,t,n):(ie(fe,fe.current&1),e=on(e,t,n),e!==null?e.sibling:null);ie(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Fy(e,t,n)}return on(e,t,n)}var Hy,Du,Gy,Ky;Hy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Du=function(){};Gy=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Qn(Ft.current);var i=null;switch(n){case"input":o=au(e,o),r=au(e,r),i=[];break;case"select":o=pe({},o,{value:void 0}),r=pe({},r,{value:void 0}),i=[];break;case"textarea":o=uu(e,o),r=uu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_a)}fu(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Ky=function(e,t,n,r){n!==r&&(t.flags|=4)};function co(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rb(e,t,n){var r=t.pendingProps;switch(tf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return tt(t.type)&&Oa(),Fe(t),null;case 3:return r=t.stateNode,Dr(),se(et),se(Ve),ff(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Gu(Pt),Pt=null))),Du(e,t),Fe(t),null;case 5:cf(t);var o=Qn(Qo.current);if(n=t.type,e!==null&&t.stateNode!=null)Gy(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Fe(t),null}if(e=Qn(Ft.current),Li(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[zt]=t,r[Go]=i,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(o=0;o<vo.length;o++)ae(vo[o],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Td(r,i),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ae("invalid",r);break;case"textarea":Rd(r,i),ae("invalid",r)}fu(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ai(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ai(r.textContent,s,e),o=["children",""+s]):zo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ae("scroll",r)}switch(n){case"input":Oi(r),jd(r,i,!0);break;case"textarea":Oi(r),Nd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=_a)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[Go]=r,Hy(e,t,!1,!1),t.stateNode=e;e:{switch(a=du(n,r),n){case"dialog":ae("cancel",e),ae("close",e),o=r;break;case"iframe":case"object":case"embed":ae("load",e),o=r;break;case"video":case"audio":for(o=0;o<vo.length;o++)ae(vo[o],e);o=r;break;case"source":ae("error",e),o=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=r;break;case"details":ae("toggle",e),o=r;break;case"input":Td(e,r),o=au(e,r),ae("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=pe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Rd(e,r),o=uu(e,r),ae("invalid",e);break;default:o=r}fu(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?kg(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bg(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Io(e,l):typeof l=="number"&&Io(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ae("scroll",e):l!=null&&Fc(e,i,l,a))}switch(n){case"input":Oi(e),jd(e,r,!1);break;case"textarea":Oi(e),Nd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?_r(e,!!r.multiple,i,!1):r.defaultValue!=null&&_r(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=_a)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)Ky(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=Qn(Qo.current),Qn(Ft.current),Li(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(i=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:Ai(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ai(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Fe(t),null;case 13:if(se(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&it!==null&&t.mode&1&&!(t.flags&128))cy(),zr(),t.flags|=98560,i=!1;else if(i=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error($(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[zt]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),i=!1}else Pt!==null&&(Gu(Pt),Pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?_e===0&&(_e=3):kf())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Dr(),Du(e,t),e===null&&Vo(t.stateNode.containerInfo),Fe(t),null;case 10:return af(t.type._context),Fe(t),null;case 17:return tt(t.type)&&Oa(),Fe(t),null;case 19:if(se(fe),i=t.memoizedState,i===null)return Fe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)co(i,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Na(e),a!==null){for(t.flags|=128,co(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(fe,fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&xe()>Fr&&(t.flags|=128,r=!0,co(i,!1),t.lanes=4194304)}else{if(!r)if(e=Na(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),co(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ce)return Fe(t),null}else 2*xe()-i.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,co(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=xe(),t.sibling=null,n=fe.current,ie(fe,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return Sf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ot&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function ob(e,t){switch(tf(t),t.tag){case 1:return tt(t.type)&&Oa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),se(et),se(Ve),ff(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cf(t),null;case 13:if(se(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(fe),null;case 4:return Dr(),null;case 10:return af(t.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var Di=!1,We=!1,ib=typeof WeakSet=="function"?WeakSet:Set,I=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Mu(e,t,n){try{n()}catch(r){ge(e,t,r)}}var Sp=!1;function ab(e,t){if(Su=Sa,e=Xg(),Zc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,f=0,c=e,h=null;t:for(;;){for(var v;c!==n||o!==0&&c.nodeType!==3||(s=a+o),c!==i||r!==0&&c.nodeType!==3||(l=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===e)break t;if(h===n&&++u===o&&(s=a),h===i&&++f===r&&(l=a),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ku={focusedElem:e,selectionRange:n},Sa=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,x=g.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?m:Et(t.type,m),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(b){ge(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return g=Sp,Sp=!1,g}function Po(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Mu(t,n,i)}o=o.next}while(o!==r)}}function _s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qy(e){var t=e.alternate;t!==null&&(e.alternate=null,Qy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Go],delete t[Ou],delete t[Bw],delete t[Ww])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yy(e){return e.tag===5||e.tag===3||e.tag===4}function kp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_a));else if(r!==4&&(e=e.child,e!==null))for(Uu(e,t,n),e=e.sibling;e!==null;)Uu(e,t,n),e=e.sibling}function Bu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bu(e,t,n),e=e.sibling;e!==null;)Bu(e,t,n),e=e.sibling}var Re=null,_t=!1;function cn(e,t,n){for(n=n.child;n!==null;)qy(e,t,n),n=n.sibling}function qy(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(ys,n)}catch{}switch(n.tag){case 5:We||wr(n,t);case 6:var r=Re,o=_t;Re=null,cn(e,t,n),Re=r,_t=o,Re!==null&&(_t?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(_t?(e=Re,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),Uo(e)):vl(Re,n.stateNode));break;case 4:r=Re,o=_t,Re=n.stateNode.containerInfo,_t=!0,cn(e,t,n),Re=r,_t=o;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Mu(n,t,a),o=o.next}while(o!==r)}cn(e,t,n);break;case 1:if(!We&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ge(n,t,s)}cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,cn(e,t,n),We=r):cn(e,t,n);break;default:cn(e,t,n)}}function Ep(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ib),t.forEach(function(r){var o=mb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Re=s.stateNode,_t=!1;break e;case 3:Re=s.stateNode.containerInfo,_t=!0;break e;case 4:Re=s.stateNode.containerInfo,_t=!0;break e}s=s.return}if(Re===null)throw Error($(160));qy(i,a,o),Re=null,_t=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ge(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xy(t,e),t=t.sibling}function Xy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Rt(e),r&4){try{Po(3,e,e.return),_s(3,e)}catch(m){ge(e,e.return,m)}try{Po(5,e,e.return)}catch(m){ge(e,e.return,m)}}break;case 1:St(t,e),Rt(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(St(t,e),Rt(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var o=e.stateNode;try{Io(o,"")}catch(m){ge(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&vg(o,i),du(s,a);var u=du(s,i);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?kg(o,c):f==="dangerouslySetInnerHTML"?bg(o,c):f==="children"?Io(o,c):Fc(o,f,c,u)}switch(s){case"input":su(o,i);break;case"textarea":xg(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?_r(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?_r(o,!!i.multiple,i.defaultValue,!0):_r(o,!!i.multiple,i.multiple?[]:"",!1))}o[Go]=i}catch(m){ge(e,e.return,m)}}break;case 6:if(St(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error($(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){ge(e,e.return,m)}}break;case 3:if(St(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(t.containerInfo)}catch(m){ge(e,e.return,m)}break;case 4:St(t,e),Rt(e);break;case 13:St(t,e),Rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(wf=xe())),r&4&&Ep(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(We=(u=We)||f,St(t,e),We=u):St(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(I=e,f=e.child;f!==null;){for(c=I=f;I!==null;){switch(h=I,v=h.child,h.tag){case 0:case 11:case 14:case 15:Po(4,h,h.return);break;case 1:wr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){ge(r,n,m)}}break;case 5:wr(h,h.return);break;case 22:if(h.memoizedState!==null){Op(c);continue}}v!==null?(v.return=h,I=v):Op(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Sg("display",a))}catch(m){ge(e,e.return,m)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){ge(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:St(t,e),Rt(e),r&4&&Ep(e);break;case 21:break;default:St(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yy(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Io(o,""),r.flags&=-33);var i=kp(e);Bu(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=kp(e);Uu(e,s,a);break;default:throw Error($(161))}}catch(l){ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sb(e,t,n){I=e,Jy(e)}function Jy(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Di;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||We;s=Di;var u=We;if(Di=a,(We=l)&&!u)for(I=o;I!==null;)a=I,l=a.child,a.tag===22&&a.memoizedState!==null?Pp(o):l!==null?(l.return=a,I=l):Pp(o);for(;i!==null;)I=i,Jy(i),i=i.sibling;I=o,Di=s,We=u}_p(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,I=i):_p(e)}}function _p(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||_s(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&lp(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lp(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Uo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}We||t.flags&512&&Fu(t)}catch(h){ge(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Op(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Pp(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_s(4,t)}catch(l){ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ge(t,o,l)}}var i=t.return;try{Fu(t)}catch(l){ge(t,i,l)}break;case 5:var a=t.return;try{Fu(t)}catch(l){ge(t,a,l)}}}catch(l){ge(t,t.return,l)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var lb=Math.ceil,za=ln.ReactCurrentDispatcher,vf=ln.ReactCurrentOwner,gt=ln.ReactCurrentBatchConfig,Q=0,Pe=null,be=null,Le=0,ot=0,br=Mn(0),_e=0,Jo=null,er=0,Os=0,xf=0,Co=null,Xe=null,wf=0,Fr=1/0,Gt=null,Ia=!1,Wu=null,On=null,Mi=!1,xn=null,Da=0,$o=0,Vu=null,oa=-1,ia=0;function Ke(){return Q&6?xe():oa!==-1?oa:oa=xe()}function Pn(e){return e.mode&1?Q&2&&Le!==0?Le&-Le:Hw.transition!==null?(ia===0&&(ia=Lg()),ia):(e=te,e!==0||(e=window.event,e=e===void 0?16:Bg(e.type)),e):1}function Tt(e,t,n,r){if(50<$o)throw $o=0,Vu=null,Error($(185));fi(e,n,r),(!(Q&2)||e!==Pe)&&(e===Pe&&(!(Q&2)&&(Os|=n),_e===4&&gn(e,Le)),nt(e,r),n===1&&Q===0&&!(t.mode&1)&&(Fr=xe()+500,Ss&&Fn()))}function nt(e,t){var n=e.callbackNode;Hx(e,t);var r=ba(e,e===Pe?Le:0);if(r===0)n!==null&&zd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zd(n),t===1)e.tag===0?Vw(Cp.bind(null,e)):sy(Cp.bind(null,e)),Fw(function(){!(Q&6)&&Fn()}),n=null;else{switch(zg(r)){case 1:n=Hc;break;case 4:n=Ng;break;case 16:n=wa;break;case 536870912:n=Ag;break;default:n=wa}n=av(n,Zy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zy(e,t){if(oa=-1,ia=0,Q&6)throw Error($(327));var n=e.callbackNode;if(Tr()&&e.callbackNode!==n)return null;var r=ba(e,e===Pe?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ma(e,r);else{t=r;var o=Q;Q|=2;var i=tv();(Pe!==e||Le!==t)&&(Gt=null,Fr=xe()+500,Yn(e,t));do try{fb();break}catch(s){ev(e,s)}while(1);of(),za.current=i,Q=o,be!==null?t=0:(Pe=null,Le=0,t=_e)}if(t!==0){if(t===2&&(o=yu(e),o!==0&&(r=o,t=Hu(e,o))),t===1)throw n=Jo,Yn(e,0),gn(e,r),nt(e,xe()),n;if(t===6)gn(e,r);else{if(o=e.current.alternate,!(r&30)&&!ub(o)&&(t=Ma(e,r),t===2&&(i=yu(e),i!==0&&(r=i,t=Hu(e,i))),t===1))throw n=Jo,Yn(e,0),gn(e,r),nt(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:Vn(e,Xe,Gt);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=wf+500-xe(),10<t)){if(ba(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_u(Vn.bind(null,e,Xe,Gt),t);break}Vn(e,Xe,Gt);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-$t(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lb(r/1960))-r,10<r){e.timeoutHandle=_u(Vn.bind(null,e,Xe,Gt),r);break}Vn(e,Xe,Gt);break;case 5:Vn(e,Xe,Gt);break;default:throw Error($(329))}}}return nt(e,xe()),e.callbackNode===n?Zy.bind(null,e):null}function Hu(e,t){var n=Co;return e.current.memoizedState.isDehydrated&&(Yn(e,t).flags|=256),e=Ma(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&Gu(t)),e}function Gu(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function ub(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!jt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~xf,t&=~Os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$t(t),r=1<<n;e[n]=-1,t&=~r}}function Cp(e){if(Q&6)throw Error($(327));Tr();var t=ba(e,0);if(!(t&1))return nt(e,xe()),null;var n=Ma(e,t);if(e.tag!==0&&n===2){var r=yu(e);r!==0&&(t=r,n=Hu(e,r))}if(n===1)throw n=Jo,Yn(e,0),gn(e,t),nt(e,xe()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vn(e,Xe,Gt),nt(e,xe()),null}function bf(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Fr=xe()+500,Ss&&Fn())}}function tr(e){xn!==null&&xn.tag===0&&!(Q&6)&&Tr();var t=Q;Q|=1;var n=gt.transition,r=te;try{if(gt.transition=null,te=1,e)return e()}finally{te=r,gt.transition=n,Q=t,!(Q&6)&&Fn()}}function Sf(){ot=br.current,se(br)}function Yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mw(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(tf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oa();break;case 3:Dr(),se(et),se(Ve),ff();break;case 5:cf(r);break;case 4:Dr();break;case 13:se(fe);break;case 19:se(fe);break;case 10:af(r.type._context);break;case 22:case 23:Sf()}n=n.return}if(Pe=e,be=e=Cn(e.current,null),Le=ot=t,_e=0,Jo=null,xf=Os=er=0,Xe=Co=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Kn=null}return e}function ev(e,t){do{var n=be;try{if(of(),ta.current=La,Aa){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Aa=!1}if(Zn=0,Oe=Ee=de=null,Oo=!1,Yo=0,vf.current=null,n===null||n.return===null){_e=1,Jo=t,be=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=Le,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=mp(a);if(v!==null){v.flags&=-257,gp(v,a,s,i,t),v.mode&1&&hp(i,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}else{if(!(t&1)){hp(i,u,t),kf();break e}l=Error($(426))}}else if(ce&&s.mode&1){var x=mp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),gp(x,a,s,i,t),nf(Mr(l,s));break e}}i=l=Mr(l,s),_e!==4&&(_e=2),Co===null?Co=[i]:Co.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Iy(i,l,t);sp(i,p);break e;case 1:s=l;var d=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(On===null||!On.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=Dy(i,s,t);sp(i,b);break e}}i=i.return}while(i!==null)}rv(n)}catch(k){t=k,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function tv(){var e=za.current;return za.current=La,e===null?La:e}function kf(){(_e===0||_e===3||_e===2)&&(_e=4),Pe===null||!(er&268435455)&&!(Os&268435455)||gn(Pe,Le)}function Ma(e,t){var n=Q;Q|=2;var r=tv();(Pe!==e||Le!==t)&&(Gt=null,Yn(e,t));do try{cb();break}catch(o){ev(e,o)}while(1);if(of(),Q=n,za.current=r,be!==null)throw Error($(261));return Pe=null,Le=0,_e}function cb(){for(;be!==null;)nv(be)}function fb(){for(;be!==null&&!zx();)nv(be)}function nv(e){var t=iv(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?rv(e):be=t,vf.current=null}function rv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ob(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,be=null;return}}else if(n=rb(n,t,ot),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);_e===0&&(_e=5)}function Vn(e,t,n){var r=te,o=gt.transition;try{gt.transition=null,te=1,db(e,t,n,r)}finally{gt.transition=o,te=r}return null}function db(e,t,n,r){do Tr();while(xn!==null);if(Q&6)throw Error($(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Gx(e,i),e===Pe&&(be=Pe=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mi||(Mi=!0,av(wa,function(){return Tr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=gt.transition,gt.transition=null;var a=te;te=1;var s=Q;Q|=4,vf.current=null,ab(e,n),Xy(n,e),Rw(ku),Sa=!!Su,ku=Su=null,e.current=n,sb(n),Ix(),Q=s,te=a,gt.transition=i}else e.current=n;if(Mi&&(Mi=!1,xn=e,Da=o),i=e.pendingLanes,i===0&&(On=null),Fx(n.stateNode),nt(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ia)throw Ia=!1,e=Wu,Wu=null,e;return Da&1&&e.tag!==0&&Tr(),i=e.pendingLanes,i&1?e===Vu?$o++:($o=0,Vu=e):$o=0,Fn(),null}function Tr(){if(xn!==null){var e=zg(Da),t=gt.transition,n=te;try{if(gt.transition=null,te=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,Da=0,Q&6)throw Error($(331));var o=Q;for(Q|=4,I=e.current;I!==null;){var i=I,a=i.child;if(I.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(I=u;I!==null;){var f=I;switch(f.tag){case 0:case 11:case 15:Po(8,f,i)}var c=f.child;if(c!==null)c.return=f,I=c;else for(;I!==null;){f=I;var h=f.sibling,v=f.return;if(Qy(f),f===u){I=null;break}if(h!==null){h.return=v,I=h;break}I=v}}}var g=i.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var x=m.sibling;m.sibling=null,m=x}while(m!==null)}}I=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,I=a;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Po(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,I=p;break e}I=i.return}}var d=e.current;for(I=d;I!==null;){a=I;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,I=y;else e:for(a=d;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:_s(9,s)}}catch(k){ge(s,s.return,k)}if(s===a){I=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,I=b;break e}I=s.return}}if(Q=o,Fn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(ys,e)}catch{}r=!0}return r}finally{te=n,gt.transition=t}}return!1}function $p(e,t,n){t=Mr(n,t),t=Iy(e,t,1),e=_n(e,t,1),t=Ke(),e!==null&&(fi(e,1,t),nt(e,t))}function ge(e,t,n){if(e.tag===3)$p(e,e,n);else for(;t!==null;){if(t.tag===3){$p(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){e=Mr(n,e),e=Dy(t,e,1),t=_n(t,e,1),e=Ke(),t!==null&&(fi(t,1,e),nt(t,e));break}}t=t.return}}function pb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Le&n)===n&&(_e===4||_e===3&&(Le&130023424)===Le&&500>xe()-wf?Yn(e,0):xf|=n),nt(e,t)}function ov(e,t){t===0&&(e.mode&1?(t=$i,$i<<=1,!($i&130023424)&&($i=4194304)):t=1);var n=Ke();e=rn(e,t),e!==null&&(fi(e,t,n),nt(e,n))}function hb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ov(e,n)}function mb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),ov(e,n)}var iv;iv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,nb(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,ce&&t.flags&1048576&&ly(t,$a,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ra(e,t),e=t.pendingProps;var o=Lr(t,Ve.current);$r(t,n),o=pf(null,t,r,e,o,n);var i=hf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(i=!0,Pa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,lf(t),o.updater=ks,t.stateNode=o,o._reactInternals=t,Ru(t,r,e,n),t=Lu(null,t,r,!0,i,n)):(t.tag=0,ce&&i&&ef(t),Ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ra(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=yb(r),e=Et(r,e),o){case 0:t=Au(null,t,r,e,n);break e;case 1:t=xp(null,t,r,e,n);break e;case 11:t=yp(null,t,r,e,n);break e;case 14:t=vp(null,t,r,Et(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),Au(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),xp(e,t,r,o,n);case 3:e:{if(By(t),e===null)throw Error($(387));r=t.pendingProps,i=t.memoizedState,o=i.element,dy(e,t),Ra(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Mr(Error($(423)),t),t=wp(e,t,r,n,o);break e}else if(r!==o){o=Mr(Error($(424)),t),t=wp(e,t,r,n,o);break e}else for(it=En(t.stateNode.containerInfo.firstChild),st=t,ce=!0,Pt=null,n=gy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===o){t=on(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return yy(t),e===null&&$u(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Eu(r,o)?a=null:i!==null&&Eu(r,i)&&(t.flags|=32),Uy(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&$u(t),null;case 13:return Wy(e,t,n);case 4:return uf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),yp(e,t,r,o,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,ie(Ta,r._currentValue),r._currentValue=a,i!==null)if(jt(i.value,a)){if(i.children===o.children&&!et.current){t=on(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Tu(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error($(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Tu(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$r(t,n),o=vt(o),r=r(o),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,o=Et(r,t.pendingProps),o=Et(r.type,o),vp(e,t,r,o,n);case 15:return My(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Et(r,o),ra(e,t),t.tag=1,tt(r)?(e=!0,Pa(t)):e=!1,$r(t,n),hy(t,r,o),Ru(t,r,o,n),Lu(null,t,r,!0,e,n);case 19:return Vy(e,t,n);case 22:return Fy(e,t,n)}throw Error($(156,t.tag))};function av(e,t){return Rg(e,t)}function gb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new gb(e,t,n,r)}function Ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yb(e){if(typeof e=="function")return Ef(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bc)return 11;if(e===Wc)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function aa(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Ef(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fr:return qn(n.children,o,i,t);case Uc:a=8,o|=8;break;case nu:return e=mt(12,n,t,o|2),e.elementType=nu,e.lanes=i,e;case ru:return e=mt(13,n,t,o),e.elementType=ru,e.lanes=i,e;case ou:return e=mt(19,n,t,o),e.elementType=ou,e.lanes=i,e;case mg:return Ps(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pg:a=10;break e;case hg:a=9;break e;case Bc:a=11;break e;case Wc:a=14;break e;case pn:a=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=mt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function qn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Ps(e,t,n,r){return e=mt(22,e,r,t),e.elementType=mg,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Pl(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vb(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function _f(e,t,n,r,o,i,a,s,l){return e=new vb(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=mt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lf(i),e}function xb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sv(e){if(!e)return Ln;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(tt(n))return ay(e,n,t)}return t}function lv(e,t,n,r,o,i,a,s,l){return e=_f(n,r,!0,e,o,i,a,s,l),e.context=sv(null),n=e.current,r=Ke(),o=Pn(n),i=Jt(r,o),i.callback=t??null,_n(n,i,o),e.current.lanes=o,fi(e,o,r),nt(e,r),e}function Cs(e,t,n,r){var o=t.current,i=Ke(),a=Pn(o);return n=sv(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_n(o,t,a),e!==null&&(Tt(e,o,a,i),ea(e,o,a)),a}function Fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Of(e,t){Tp(e,t),(e=e.alternate)&&Tp(e,t)}function wb(){return null}var uv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pf(e){this._internalRoot=e}$s.prototype.render=Pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Cs(e,t,null,null)};$s.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tr(function(){Cs(null,e,null,null)}),t[nn]=null}};function $s(e){this._internalRoot=e}$s.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&Ug(e)}};function Cf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jp(){}function bb(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Fa(a);i.call(u)}}var a=lv(t,r,e,0,null,!1,!1,"",jp);return e._reactRootContainer=a,e[nn]=a.current,Vo(e.nodeType===8?e.parentNode:e),tr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Fa(l);s.call(u)}}var l=_f(e,0,!1,null,null,!1,!1,"",jp);return e._reactRootContainer=l,e[nn]=l.current,Vo(e.nodeType===8?e.parentNode:e),tr(function(){Cs(t,l,n,r)}),l}function js(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Fa(a);s.call(l)}}Cs(t,a,e,o)}else a=bb(n,t,e,o,r);return Fa(a)}Ig=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yo(t.pendingLanes);n!==0&&(Gc(t,n|1),nt(t,xe()),!(Q&6)&&(Fr=xe()+500,Fn()))}break;case 13:tr(function(){var r=rn(e,1);if(r!==null){var o=Ke();Tt(r,e,1,o)}}),Of(e,1)}};Kc=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Ke();Tt(t,e,134217728,n)}Of(e,134217728)}};Dg=function(e){if(e.tag===13){var t=Pn(e),n=rn(e,t);if(n!==null){var r=Ke();Tt(n,e,t,r)}Of(e,t)}};Mg=function(){return te};Fg=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};hu=function(e,t,n){switch(t){case"input":if(su(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bs(r);if(!o)throw Error($(90));yg(r),su(r,o)}}}break;case"textarea":xg(e,n);break;case"select":t=n.value,t!=null&&_r(e,!!n.multiple,t,!1)}};Og=bf;Pg=tr;var Sb={usingClientEntryPoint:!1,Events:[pi,mr,bs,Eg,_g,bf]},fo={findFiberByHostInstance:Gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kb={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tg(e),e===null?null:e.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||wb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{ys=Fi.inject(kb),Mt=Fi}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sb;ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(t))throw Error($(200));return xb(e,t,null,n)};ft.createRoot=function(e,t){if(!Cf(e))throw Error($(299));var n=!1,r="",o=uv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=_f(e,1,!1,null,null,n,!1,r,o),e[nn]=t.current,Vo(e.nodeType===8?e.parentNode:e),new Pf(t)};ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Tg(t),e=e===null?null:e.stateNode,e};ft.flushSync=function(e){return tr(e)};ft.hydrate=function(e,t,n){if(!Ts(t))throw Error($(200));return js(null,e,t,!0,n)};ft.hydrateRoot=function(e,t,n){if(!Cf(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=uv;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=lv(t,null,e,1,n??null,o,!1,i,a),e[nn]=t.current,Vo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new $s(t)};ft.render=function(e,t,n){if(!Ts(t))throw Error($(200));return js(null,e,t,!1,n)};ft.unmountComponentAtNode=function(e){if(!Ts(e))throw Error($(40));return e._reactRootContainer?(tr(function(){js(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};ft.unstable_batchedUpdates=bf;ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ts(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return js(e,t,n,!1,r)};ft.version="18.2.0-next-9e3b772b8-20220608";function cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv)}catch(e){console.error(e)}}cv(),lg.exports=ft;var $f=lg.exports,Rp=$f;eu.createRoot=Rp.createRoot,eu.hydrateRoot=Rp.hydrateRoot;var fv={exports:{}},dv={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=S;function Eb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _b=typeof Object.is=="function"?Object.is:Eb,Ob=Ur.useState,Pb=Ur.useEffect,Cb=Ur.useLayoutEffect,$b=Ur.useDebugValue;function Tb(e,t){var n=t(),r=Ob({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Cb(function(){o.value=n,o.getSnapshot=t,Cl(o)&&i({inst:o})},[e,n,t]),Pb(function(){return Cl(o)&&i({inst:o}),e(function(){Cl(o)&&i({inst:o})})},[e]),$b(n),n}function Cl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_b(e,n)}catch{return!0}}function jb(e,t){return t()}var Rb=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?jb:Tb;dv.useSyncExternalStore=Ur.useSyncExternalStore!==void 0?Ur.useSyncExternalStore:Rb;fv.exports=dv;var Nb=fv.exports,pv={exports:{}},hv={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rs=S,Ab=Nb;function Lb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zb=typeof Object.is=="function"?Object.is:Lb,Ib=Ab.useSyncExternalStore,Db=Rs.useRef,Mb=Rs.useEffect,Fb=Rs.useMemo,Ub=Rs.useDebugValue;hv.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=Db(null);if(i.current===null){var a={hasValue:!1,value:null};i.current=a}else a=i.current;i=Fb(function(){function l(v){if(!u){if(u=!0,f=v,v=r(v),o!==void 0&&a.hasValue){var g=a.value;if(o(g,v))return c=g}return c=v}if(g=c,zb(f,v))return g;var m=r(v);return o!==void 0&&o(g,m)?g:(f=v,c=m)}var u=!1,f,c,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,o]);var s=Ib(e,i[0],i[1]);return Mb(function(){a.hasValue=!0,a.value=s},[s]),Ub(s),s};pv.exports=hv;var Bb=pv.exports;function Wb(e){e()}let mv=Wb;const Vb=e=>mv=e,Hb=()=>mv,Np=Symbol.for("react-redux-context"),Ap=typeof globalThis<"u"?globalThis:{};function Gb(){var e;if(!S.createContext)return{};const t=(e=Ap[Np])!=null?e:Ap[Np]=new Map;let n=t.get(S.createContext);return n||(n=S.createContext(null),t.set(S.createContext,n)),n}const zn=Gb();function Tf(e=zn){return function(){return S.useContext(e)}}const gv=Tf(),Kb=()=>{throw new Error("uSES not initialized!")};let yv=Kb;const Qb=e=>{yv=e},Yb=(e,t)=>e===t;function qb(e=zn){const t=e===zn?gv:Tf(e);return function(r,o={}){const{equalityFn:i=Yb,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:l,subscription:u,getServerState:f,stabilityCheck:c,noopCheck:h}=t();S.useRef(!0);const v=S.useCallback({[r.name](m){return r(m)}}[r.name],[r,c,a]),g=yv(u.addNestedSub,l.getState,f||l.getState,v,i);return S.useDebugValue(g),g}}const vv=qb();var re={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf=Symbol.for("react.element"),Rf=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),As=Symbol.for("react.strict_mode"),Ls=Symbol.for("react.profiler"),zs=Symbol.for("react.provider"),Is=Symbol.for("react.context"),Xb=Symbol.for("react.server_context"),Ds=Symbol.for("react.forward_ref"),Ms=Symbol.for("react.suspense"),Fs=Symbol.for("react.suspense_list"),Us=Symbol.for("react.memo"),Bs=Symbol.for("react.lazy"),Jb=Symbol.for("react.offscreen"),xv;xv=Symbol.for("react.module.reference");function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jf:switch(e=e.type,e){case Ns:case Ls:case As:case Ms:case Fs:return e;default:switch(e=e&&e.$$typeof,e){case Xb:case Is:case Ds:case Bs:case Us:case zs:return e;default:return t}}case Rf:return t}}}re.ContextConsumer=Is;re.ContextProvider=zs;re.Element=jf;re.ForwardRef=Ds;re.Fragment=Ns;re.Lazy=Bs;re.Memo=Us;re.Portal=Rf;re.Profiler=Ls;re.StrictMode=As;re.Suspense=Ms;re.SuspenseList=Fs;re.isAsyncMode=function(){return!1};re.isConcurrentMode=function(){return!1};re.isContextConsumer=function(e){return wt(e)===Is};re.isContextProvider=function(e){return wt(e)===zs};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jf};re.isForwardRef=function(e){return wt(e)===Ds};re.isFragment=function(e){return wt(e)===Ns};re.isLazy=function(e){return wt(e)===Bs};re.isMemo=function(e){return wt(e)===Us};re.isPortal=function(e){return wt(e)===Rf};re.isProfiler=function(e){return wt(e)===Ls};re.isStrictMode=function(e){return wt(e)===As};re.isSuspense=function(e){return wt(e)===Ms};re.isSuspenseList=function(e){return wt(e)===Fs};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ns||e===Ls||e===As||e===Ms||e===Fs||e===Jb||typeof e=="object"&&e!==null&&(e.$$typeof===Bs||e.$$typeof===Us||e.$$typeof===zs||e.$$typeof===Is||e.$$typeof===Ds||e.$$typeof===xv||e.getModuleId!==void 0)};re.typeOf=wt;function Zb(){const e=Hb();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const Lp={notify(){},get:()=>[]};function eS(e,t){let n,r=Lp,o=0,i=!1;function a(m){f();const x=r.subscribe(m);let p=!1;return()=>{p||(p=!0,x(),c())}}function s(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return i}function f(){o++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=Zb())}function c(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=Lp)}function h(){i||(i=!0,f())}function v(){i&&(i=!1,c())}const g={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:h,tryUnsubscribe:v,getListeners:()=>r};return g}const tS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nS=tS?S.useLayoutEffect:S.useEffect;function rS({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const a=S.useMemo(()=>{const u=eS(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),s=S.useMemo(()=>e.getState(),[e]);nS(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,s]);const l=t||zn;return S.createElement(l.Provider,{value:a},n)}function wv(e=zn){const t=e===zn?gv:Tf(e);return function(){const{store:r}=t();return r}}const oS=wv();function iS(e=zn){const t=e===zn?oS:wv(e);return function(){return t().dispatch}}const aS=iS();Qb(Bb.useSyncExternalStoreWithSelector);Vb($f.unstable_batchedUpdates);function sa(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?sa=function(n){return typeof n}:sa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},sa(e)}function sS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function lS(e,t,n){return t&&zp(e.prototype,t),n&&zp(e,n),e}function uS(e,t){return t&&(sa(t)==="object"||typeof t=="function")?t:la(e)}function Ku(e){return Ku=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ku(e)}function la(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Qu(e,t)}function Qu(e,t){return Qu=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Qu(e,t)}function ua(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var bv=function(e){cS(t,e);function t(){var n,r;sS(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=uS(this,(n=Ku(t)).call.apply(n,[this].concat(i))),ua(la(r),"state",{bootstrapped:!1}),ua(la(r),"_unsubscribe",void 0),ua(la(r),"handlePersistorState",function(){var s=r.props.persistor,l=s.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return lS(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(S.PureComponent);ua(bv,"defaultProps",{children:null,loading:null});function Ct(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function In(e){return!!e&&!!e[ue]}function an(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===xS}(e)||Array.isArray(e)||!!e[Wp]||!!(!((t=e.constructor)===null||t===void 0)&&t[Wp])||Nf(e)||Af(e))}function nr(e,t,n){n===void 0&&(n=!1),qr(e)===0?(n?Object.keys:Rr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function qr(e){var t=e[ue];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Nf(e)?2:Af(e)?3:0}function jr(e,t){return qr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function fS(e,t){return qr(e)===2?e.get(t):e[t]}function Sv(e,t,n){var r=qr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function kv(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Nf(e){return yS&&e instanceof Map}function Af(e){return vS&&e instanceof Set}function Hn(e){return e.o||e.t}function Lf(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=_v(e);delete t[ue];for(var n=Rr(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function zf(e,t){return t===void 0&&(t=!1),If(e)||In(e)||!an(e)||(qr(e)>1&&(e.set=e.add=e.clear=e.delete=dS),Object.freeze(e),t&&nr(e,function(n,r){return zf(r,!0)},!0)),e}function dS(){Ct(2)}function If(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Ut(e){var t=Ju[e];return t||Ct(18,e),t}function pS(e,t){Ju[e]||(Ju[e]=t)}function Yu(){return Zo}function $l(e,t){t&&(Ut("Patches"),e.u=[],e.s=[],e.v=t)}function Ua(e){qu(e),e.p.forEach(hS),e.p=null}function qu(e){e===Zo&&(Zo=e.l)}function Ip(e){return Zo={p:[],l:Zo,h:e,m:!0,_:0}}function hS(e){var t=e[ue];t.i===0||t.i===1?t.j():t.g=!0}function Tl(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||Ut("ES5").S(t,e,r),r?(n[ue].P&&(Ua(t),Ct(4)),an(e)&&(e=Ba(t,e),t.l||Wa(t,e)),t.u&&Ut("Patches").M(n[ue].t,e,t.u,t.s)):e=Ba(t,n,[]),Ua(t),t.u&&t.v(t.u,t.s),e!==Ev?e:void 0}function Ba(e,t,n){if(If(t))return t;var r=t[ue];if(!r)return nr(t,function(s,l){return Dp(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Wa(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=Lf(r.k):r.o,i=o,a=!1;r.i===3&&(i=new Set(o),o.clear(),a=!0),nr(i,function(s,l){return Dp(e,r,o,s,l,n,a)}),Wa(e,o,!1),n&&e.u&&Ut("Patches").N(r,n,e.u,e.s)}return r.o}function Dp(e,t,n,r,o,i,a){if(In(o)){var s=Ba(e,o,i&&t&&t.i!==3&&!jr(t.R,r)?i.concat(r):void 0);if(Sv(n,r,s),!In(s))return;e.m=!1}else a&&n.add(o);if(an(o)&&!If(o)){if(!e.h.D&&e._<1)return;Ba(e,o),t&&t.A.l||Wa(e,o)}}function Wa(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&zf(t,n)}function jl(e,t){var n=e[ue];return(n?Hn(n):e)[t]}function Mp(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function yn(e){e.P||(e.P=!0,e.l&&yn(e.l))}function Rl(e){e.o||(e.o=Lf(e.t))}function Xu(e,t,n){var r=Nf(t)?Ut("MapSet").F(t,n):Af(t)?Ut("MapSet").T(t,n):e.O?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:Yu(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},l=s,u=ei;a&&(l=[s],u=xo);var f=Proxy.revocable(l,u),c=f.revoke,h=f.proxy;return s.k=h,s.j=c,h}(t,n):Ut("ES5").J(t,n);return(n?n.A:Yu()).p.push(r),r}function mS(e){return In(e)||Ct(22,e),function t(n){if(!an(n))return n;var r,o=n[ue],i=qr(n);if(o){if(!o.P&&(o.i<4||!Ut("ES5").K(o)))return o.t;o.I=!0,r=Fp(n,i),o.I=!1}else r=Fp(n,i);return nr(r,function(a,s){o&&fS(o.t,a)===s||Sv(r,a,t(s))}),i===3?new Set(r):r}(e)}function Fp(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Lf(e)}function gS(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var l=this[ue];return ei.get(l,i)},set:function(l){var u=this[ue];ei.set(u,i,l)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][ue];if(!s.P)switch(s.i){case 5:r(s)&&yn(s);break;case 4:n(s)&&yn(s)}}}function n(i){for(var a=i.t,s=i.k,l=Rr(s),u=l.length-1;u>=0;u--){var f=l[u];if(f!==ue){var c=a[f];if(c===void 0&&!jr(a,f))return!0;var h=s[f],v=h&&h[ue];if(v?v.t!==c:!kv(h,c))return!0}}var g=!!a[ue];return l.length!==Rr(a).length+(g?0:1)}function r(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var o={};pS("ES5",{J:function(i,a){var s=Array.isArray(i),l=function(f,c){if(f){for(var h=Array(c.length),v=0;v<c.length;v++)Object.defineProperty(h,""+v,e(v,!0));return h}var g=_v(c);delete g[ue];for(var m=Rr(g),x=0;x<m.length;x++){var p=m[x];g[p]=e(p,f||!!g[p].enumerable)}return Object.create(Object.getPrototypeOf(c),g)}(s,i),u={i:s?5:4,A:a?a.A:Yu(),P:!1,I:!1,R:{},l:a,t:i,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,ue,{value:u,writable:!0}),l},S:function(i,a,s){s?In(a)&&a[ue].A===i&&t(i.p):(i.u&&function l(u){if(u&&typeof u=="object"){var f=u[ue];if(f){var c=f.t,h=f.k,v=f.R,g=f.i;if(g===4)nr(h,function(y){y!==ue&&(c[y]!==void 0||jr(c,y)?v[y]||l(h[y]):(v[y]=!0,yn(f)))}),nr(c,function(y){h[y]!==void 0||jr(h,y)||(v[y]=!1,yn(f))});else if(g===5){if(r(f)&&(yn(f),v.length=!0),h.length<c.length)for(var m=h.length;m<c.length;m++)v[m]=!1;else for(var x=c.length;x<h.length;x++)v[x]=!0;for(var p=Math.min(h.length,c.length),d=0;d<p;d++)h.hasOwnProperty(d)||(v[d]=!0),v[d]===void 0&&l(h[d])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var Up,Zo,Df=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",yS=typeof Map<"u",vS=typeof Set<"u",Bp=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Ev=Df?Symbol.for("immer-nothing"):((Up={})["immer-nothing"]=!0,Up),Wp=Df?Symbol.for("immer-draftable"):"__$immer_draftable",ue=Df?Symbol.for("immer-state"):"__$immer_state",xS=""+Object.prototype.constructor,Rr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,_v=Object.getOwnPropertyDescriptors||function(e){var t={};return Rr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Ju={},ei={get:function(e,t){if(t===ue)return e;var n=Hn(e);if(!jr(n,t))return function(o,i,a){var s,l=Mp(i,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!an(r)?r:r===jl(e.t,t)?(Rl(e),e.o[t]=Xu(e.A.h,r,e)):r},has:function(e,t){return t in Hn(e)},ownKeys:function(e){return Reflect.ownKeys(Hn(e))},set:function(e,t,n){var r=Mp(Hn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=jl(Hn(e),t),i=o==null?void 0:o[ue];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(kv(n,o)&&(n!==void 0||jr(e.t,t)))return!0;Rl(e),yn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return jl(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Rl(e),yn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Hn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ct(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ct(12)}},xo={};nr(ei,function(e,t){xo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),xo.deleteProperty=function(e,t){return xo.set.call(this,e,t,void 0)},xo.set=function(e,t,n){return ei.set.call(this,e[0],t,n,e[0])};var wS=function(){function e(n){var r=this;this.O=Bp,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var l=r;return function(m){var x=this;m===void 0&&(m=s);for(var p=arguments.length,d=Array(p>1?p-1:0),y=1;y<p;y++)d[y-1]=arguments[y];return l.produce(m,function(b){var k;return(k=i).call.apply(k,[x,b].concat(d))})}}var u;if(typeof i!="function"&&Ct(6),a!==void 0&&typeof a!="function"&&Ct(7),an(o)){var f=Ip(r),c=Xu(r,o,void 0),h=!0;try{u=i(c),h=!1}finally{h?Ua(f):qu(f)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return $l(f,a),Tl(m,f)},function(m){throw Ua(f),m}):($l(f,a),Tl(u,f))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===Ev&&(u=void 0),r.D&&zf(u,!0),a){var v=[],g=[];Ut("Patches").M(o,u,v,g),a(v,g)}return u}Ct(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var f=arguments.length,c=Array(f>1?f-1:0),h=1;h<f;h++)c[h-1]=arguments[h];return r.produceWithPatches(u,function(v){return o.apply(void 0,[v].concat(c))})};var a,s,l=r.produce(o,i,function(u,f){a=u,s=f});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){an(n)||Ct(8),In(n)&&(n=mS(n));var r=Ip(this),o=Xu(this,n,void 0);return o[ue].C=!0,qu(r),o},t.finishDraft=function(n,r){var o=n&&n[ue],i=o.A;return $l(i,r),Tl(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Bp&&Ct(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var a=Ut("Patches").$;return In(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),ut=new wS,Ov=ut.produce;ut.produceWithPatches.bind(ut);ut.setAutoFreeze.bind(ut);ut.setUseProxies.bind(ut);ut.applyPatches.bind(ut);ut.createDraft.bind(ut);ut.finishDraft.bind(ut);function ti(e){"@babel/helpers - typeof";return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ti(e)}function bS(e,t){if(ti(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ti(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function SS(e){var t=bS(e,"string");return ti(t)=="symbol"?t:String(t)}function kS(e,t,n){return t=SS(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Hp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vp(Object(n),!0).forEach(function(r){kS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Be(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Gp=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Nl=function(){return Math.random().toString(36).substring(7).split("").join(".")},Va={INIT:"@@redux/INIT"+Nl(),REPLACE:"@@redux/REPLACE"+Nl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Nl()}};function ES(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Mf(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Be(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Be(1));return n(Mf)(e,t)}if(typeof e!="function")throw new Error(Be(2));var o=e,i=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function f(){if(l)throw new Error(Be(3));return i}function c(m){if(typeof m!="function")throw new Error(Be(4));if(l)throw new Error(Be(5));var x=!0;return u(),s.push(m),function(){if(x){if(l)throw new Error(Be(6));x=!1,u();var d=s.indexOf(m);s.splice(d,1),a=null}}}function h(m){if(!ES(m))throw new Error(Be(7));if(typeof m.type>"u")throw new Error(Be(8));if(l)throw new Error(Be(9));try{l=!0,i=o(i,m)}finally{l=!1}for(var x=a=s,p=0;p<x.length;p++){var d=x[p];d()}return m}function v(m){if(typeof m!="function")throw new Error(Be(10));o=m,h({type:Va.REPLACE})}function g(){var m,x=c;return m={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(Be(11));function y(){d.next&&d.next(f())}y();var b=x(y);return{unsubscribe:b}}},m[Gp]=function(){return this},m}return h({type:Va.INIT}),r={dispatch:h,subscribe:c,getState:f,replaceReducer:v},r[Gp]=g,r}function _S(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Va.INIT});if(typeof r>"u")throw new Error(Be(12));if(typeof n(void 0,{type:Va.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Be(13))})}function OS(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{_S(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var f=!1,c={},h=0;h<i.length;h++){var v=i[h],g=n[v],m=l[v],x=g(m,u);if(typeof x>"u")throw u&&u.type,new Error(Be(14));c[v]=x,f=f||x!==m}return f=f||i.length!==Object.keys(l).length,f?c:l}}function Ha(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function PS(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(Be(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return i=Ha.apply(void 0,s)(o.dispatch),Hp(Hp({},o),{},{dispatch:i})}}}function Pv(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var Cv=Pv();Cv.withExtraArgument=Pv;const Kp=Cv;var $v=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),CS=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(f){return l([u,f])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Br=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},$S=Object.defineProperty,TS=Object.defineProperties,jS=Object.getOwnPropertyDescriptors,Qp=Object.getOwnPropertySymbols,RS=Object.prototype.hasOwnProperty,NS=Object.prototype.propertyIsEnumerable,Yp=function(e,t,n){return t in e?$S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},$n=function(e,t){for(var n in t||(t={}))RS.call(t,n)&&Yp(e,n,t[n]);if(Qp)for(var r=0,o=Qp(t);r<o.length;r++){var n=o[r];NS.call(t,n)&&Yp(e,n,t[n])}return e},Al=function(e,t){return TS(e,jS(t))},AS=function(e,t,n){return new Promise(function(r,o){var i=function(l){try{s(n.next(l))}catch(u){o(u)}},a=function(l){try{s(n.throw(l))}catch(u){o(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(i,a)};s((n=n.apply(e,t)).next())})},LS=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ha:Ha.apply(null,arguments)};function zS(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Tn(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return $n($n({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var IS=function(e){$v(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Br([void 0],n[0].concat(this)))):new(t.bind.apply(t,Br([void 0],n.concat(this))))},t}(Array),DS=function(e){$v(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Br([void 0],n[0].concat(this)))):new(t.bind.apply(t,Br([void 0],n.concat(this))))},t}(Array);function Zu(e){return an(e)?Ov(e,function(){}):e}function MS(e){return typeof e=="boolean"}function FS(){return function(t){return US(t)}}function US(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new IS;return n&&(MS(n)?r.push(Kp):r.push(Kp.withExtraArgument(n.extraArgument))),r}var BS=!0;function WS(e){var t=FS(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,a=i===void 0?t():i,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,f=u===void 0?void 0:u,c=n.enhancers,h=c===void 0?void 0:c,v;if(typeof o=="function")v=o;else if(zS(o))v=OS(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=a;typeof g=="function"&&(g=g(t));var m=PS.apply(void 0,g),x=Ha;l&&(x=LS($n({trace:!BS},typeof l=="object"&&l)));var p=new DS(m),d=p;Array.isArray(h)?d=Br([m],h):typeof h=="function"&&(d=h(p));var y=x.apply(void 0,d);return Mf(v,f,y)}function Tv(e){var t={},n=[],r,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return n.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function VS(e){return typeof e=="function"}function HS(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?Tv(t):[t,n,r],i=o[0],a=o[1],s=o[2],l;if(VS(e))l=function(){return Zu(e())};else{var u=Zu(e);l=function(){return u}}function f(c,h){c===void 0&&(c=l());var v=Br([i[h.type]],a.filter(function(g){var m=g.matcher;return m(h)}).map(function(g){var m=g.reducer;return m}));return v.filter(function(g){return!!g}).length===0&&(v=[s]),v.reduce(function(g,m){if(m)if(In(g)){var x=g,p=m(x,h);return p===void 0?g:p}else{if(an(g))return Ov(g,function(d){return m(d,h)});var p=m(g,h);if(p===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}return g},c)}return f.getInitialState=l,f}function GS(e,t){return e+"/"+t}function KS(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Zu(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},a={},s={};o.forEach(function(f){var c=r[f],h=GS(t,f),v,g;"reducer"in c?(v=c.reducer,g=c.prepare):v=c,i[f]=v,a[h]=v,s[f]=g?Tn(h,g):Tn(h)});function l(){var f=typeof e.extraReducers=="function"?Tv(e.extraReducers):[e.extraReducers],c=f[0],h=c===void 0?{}:c,v=f[1],g=v===void 0?[]:v,m=f[2],x=m===void 0?void 0:m,p=$n($n({},h),a);return HS(n,function(d){for(var y in p)d.addCase(y,p[y]);for(var b=0,k=g;b<k.length;b++){var _=k[b];d.addMatcher(_.matcher,_.reducer)}x&&d.addDefaultCase(x)})}var u;return{name:t,reducer:function(f,c){return u||(u=l()),u(f,c)},actions:s,caseReducers:i,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var QS="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",YS=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=QS[Math.random()*64|0];return t},qS=["name","message","stack","code"],Ll=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),qp=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),XS=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=qS;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},Xr=function(){function e(t,n,r){var o=Tn(t+"/fulfilled",function(u,f,c,h){return{payload:u,meta:Al($n({},h||{}),{arg:c,requestId:f,requestStatus:"fulfilled"})}}),i=Tn(t+"/pending",function(u,f,c){return{payload:void 0,meta:Al($n({},c||{}),{arg:f,requestId:u,requestStatus:"pending"})}}),a=Tn(t+"/rejected",function(u,f,c,h,v){return{payload:h,error:(r&&r.serializeError||XS)(u||"Rejected"),meta:Al($n({},v||{}),{arg:c,requestId:f,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(f,c,h){var v=r!=null&&r.idGenerator?r.idGenerator(u):YS(),g=new s,m;function x(d){m=d,g.abort()}var p=function(){return AS(this,null,function(){var d,y,b,k,_,C,T;return CS(this,function(D){switch(D.label){case 0:return D.trys.push([0,4,,5]),k=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:c,extra:h}),ZS(k)?[4,k]:[3,2];case 1:k=D.sent(),D.label=2;case 2:if(k===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return _=new Promise(function(L,B){return g.signal.addEventListener("abort",function(){return B({name:"AbortError",message:m||"Aborted"})})}),f(i(v,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:v,arg:u},{getState:c,extra:h}))),[4,Promise.race([_,Promise.resolve(n(u,{dispatch:f,getState:c,extra:h,requestId:v,signal:g.signal,abort:x,rejectWithValue:function(L,B){return new Ll(L,B)},fulfillWithValue:function(L,B){return new qp(L,B)}})).then(function(L){if(L instanceof Ll)throw L;return L instanceof qp?o(L.payload,v,u,L.meta):o(L,v,u)})])];case 3:return b=D.sent(),[3,5];case 4:return C=D.sent(),b=C instanceof Ll?a(null,v,u,C.payload,C.meta):a(C,v,u),[3,5];case 5:return T=r&&!r.dispatchConditionRejection&&a.match(b)&&b.meta.condition,T||f(b),[2,b]}})})}();return Object.assign(p,{abort:x,requestId:v,arg:u,unwrap:function(){return p.then(JS)}})}}return Object.assign(l,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e}();function JS(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function ZS(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Ff="listenerMiddleware";Tn(Ff+"/add");Tn(Ff+"/removeAll");Tn(Ff+"/remove");var Xp;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);gS();var Uf="persist:",Bf="persist/FLUSH",Ws="persist/REHYDRATE",Wf="persist/PAUSE",Vf="persist/PERSIST",Hf="persist/PURGE",Gf="persist/REGISTER",ek=-1;function ca(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ca=function(n){return typeof n}:ca=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ca(e)}function Jp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function tk(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jp(n,!0).forEach(function(r){nk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jp(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rk(e,t,n,r){r.debug;var o=tk({},n);return e&&ca(e)==="object"&&Object.keys(e).forEach(function(i){i!=="_persist"&&t[i]===n[i]&&(o[i]=e[i])}),o}function ok(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],o=e.throttle||0,i="".concat(e.keyPrefix!==void 0?e.keyPrefix:Uf).concat(e.key),a=e.storage,s;e.serialize===!1?s=function(k){return k}:typeof e.serialize=="function"?s=e.serialize:s=ik;var l=e.writeFailHandler||null,u={},f={},c=[],h=null,v=null,g=function(k){Object.keys(k).forEach(function(_){p(_)&&u[_]!==k[_]&&c.indexOf(_)===-1&&c.push(_)}),Object.keys(u).forEach(function(_){k[_]===void 0&&p(_)&&c.indexOf(_)===-1&&u[_]!==void 0&&c.push(_)}),h===null&&(h=setInterval(m,o)),u=k};function m(){if(c.length===0){h&&clearInterval(h),h=null;return}var b=c.shift(),k=r.reduce(function(_,C){return C.in(_,b,u)},u[b]);if(k!==void 0)try{f[b]=s(k)}catch(_){console.error("redux-persist/createPersistoid: error serializing state",_)}else delete f[b];c.length===0&&x()}function x(){Object.keys(f).forEach(function(b){u[b]===void 0&&delete f[b]}),v=a.setItem(i,s(f)).catch(d)}function p(b){return!(n&&n.indexOf(b)===-1&&b!=="_persist"||t&&t.indexOf(b)!==-1)}function d(b){l&&l(b)}var y=function(){for(;c.length!==0;)m();return v||Promise.resolve()};return{update:g,flush:y}}function ik(e){return JSON.stringify(e)}function ak(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Uf).concat(e.key),r=e.storage;e.debug;var o;return e.deserialize===!1?o=function(a){return a}:typeof e.deserialize=="function"?o=e.deserialize:o=sk,r.getItem(n).then(function(i){if(i)try{var a={},s=o(i);return Object.keys(s).forEach(function(l){a[l]=t.reduceRight(function(u,f){return f.out(u,l,s)},o(s[l]))}),a}catch(l){throw l}else return})}function sk(e){return JSON.parse(e)}function lk(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:Uf).concat(e.key);return t.removeItem(n,uk)}function uk(e){}function Zp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zp(n,!0).forEach(function(r){ck(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zp(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ck(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fk(e,t){if(e==null)return{};var n=dk(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function dk(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var pk=5e3;function hk(e,t){var n=e.version!==void 0?e.version:ek;e.debug;var r=e.stateReconciler===void 0?rk:e.stateReconciler,o=e.getStoredState||ak,i=e.timeout!==void 0?e.timeout:pk,a=null,s=!1,l=!0,u=function(c){return c._persist.rehydrated&&a&&!l&&a.update(c),c};return function(f,c){var h=f||{},v=h._persist,g=fk(h,["_persist"]),m=g;if(c.type===Vf){var x=!1,p=function(T,D){x||(c.rehydrate(e.key,T,D),x=!0)};if(i&&setTimeout(function(){!x&&p(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},i),l=!1,a||(a=ok(e)),v)return Vt({},t(m,c),{_persist:v});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),o(e).then(function(C){var T=e.migrate||function(D,L){return Promise.resolve(D)};T(C,n).then(function(D){p(D)},function(D){p(void 0,D)})},function(C){p(void 0,C)}),Vt({},t(m,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===Hf)return s=!0,c.result(lk(e)),Vt({},t(m,c),{_persist:v});if(c.type===Bf)return c.result(a&&a.flush()),Vt({},t(m,c),{_persist:v});if(c.type===Wf)l=!0;else if(c.type===Ws){if(s)return Vt({},m,{_persist:Vt({},v,{rehydrated:!0})});if(c.key===e.key){var d=t(m,c),y=c.payload,b=r!==!1&&y!==void 0?r(y,f,d,e):d,k=Vt({},b,{_persist:Vt({},v,{rehydrated:!0})});return u(k)}}}if(!v)return t(f,c);var _=t(m,c);return _===m?f:u(Vt({},_,{_persist:v}))}}function eh(e){return yk(e)||gk(e)||mk()}function mk(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function gk(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function yk(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function th(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ec(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?th(n,!0).forEach(function(r){vk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):th(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var jv={registry:[],bootstrapped:!1},xk=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jv,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Gf:return ec({},t,{registry:[].concat(eh(t.registry),[n.key])});case Ws:var r=t.registry.indexOf(n.key),o=eh(t.registry);return o.splice(r,1),ec({},t,{registry:o,bootstrapped:o.length===0});default:return t}};function wk(e,t,n){var r=n||!1,o=Mf(xk,jv,t&&t.enhancer?t.enhancer:void 0),i=function(u){o.dispatch({type:Gf,key:u})},a=function(u,f,c){var h={type:Ws,payload:f,err:c,key:u};e.dispatch(h),o.dispatch(h),r&&s.getState().bootstrapped&&(r(),r=!1)},s=ec({},o,{purge:function(){var u=[];return e.dispatch({type:Hf,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:Bf,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:Wf})},persist:function(){e.dispatch({type:Vf,register:i,rehydrate:a})}});return t&&t.manualPersist||s.persist(),s}var Kf={},Qf={};Qf.__esModule=!0;Qf.default=kk;function fa(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fa=function(n){return typeof n}:fa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},fa(e)}function zl(){}var bk={getItem:zl,setItem:zl,removeItem:zl};function Sk(e){if((typeof self>"u"?"undefined":fa(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function kk(e){var t="".concat(e,"Storage");return Sk(t)?self[t]:bk}Kf.__esModule=!0;Kf.default=Ok;var Ek=_k(Qf);function _k(e){return e&&e.__esModule?e:{default:e}}function Ok(e){var t=(0,Ek.default)(e);return{getItem:function(r){return new Promise(function(o,i){o(t.getItem(r))})},setItem:function(r,o){return new Promise(function(i,a){i(t.setItem(r,o))})},removeItem:function(r){return new Promise(function(o,i){o(t.removeItem(r))})}}}var Rv=void 0,Pk=Ck(Kf);function Ck(e){return e&&e.__esModule?e:{default:e}}var $k=(0,Pk.default)("local");Rv=$k;function Nv(e,t){return function(){return e.apply(t,arguments)}}const{toString:Tk}=Object.prototype,{getPrototypeOf:Yf}=Object,Vs=(e=>t=>{const n=Tk.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Bt=e=>(e=e.toLowerCase(),t=>Vs(t)===e),Hs=e=>t=>typeof t===e,{isArray:Jr}=Array,ni=Hs("undefined");function jk(e){return e!==null&&!ni(e)&&e.constructor!==null&&!ni(e.constructor)&&yt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Av=Bt("ArrayBuffer");function Rk(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Av(e.buffer),t}const Nk=Hs("string"),yt=Hs("function"),Lv=Hs("number"),Gs=e=>e!==null&&typeof e=="object",Ak=e=>e===!0||e===!1,da=e=>{if(Vs(e)!=="object")return!1;const t=Yf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Lk=Bt("Date"),zk=Bt("File"),Ik=Bt("Blob"),Dk=Bt("FileList"),Mk=e=>Gs(e)&&yt(e.pipe),Fk=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||yt(e.append)&&((t=Vs(e))==="formdata"||t==="object"&&yt(e.toString)&&e.toString()==="[object FormData]"))},Uk=Bt("URLSearchParams"),Bk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Jr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function zv(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Iv=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Dv=e=>!ni(e)&&e!==Iv;function tc(){const{caseless:e}=Dv(this)&&this||{},t={},n=(r,o)=>{const i=e&&zv(t,o)||o;da(t[i])&&da(r)?t[i]=tc(t[i],r):da(r)?t[i]=tc({},r):Jr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&mi(arguments[r],n);return t}const Wk=(e,t,n,{allOwnKeys:r}={})=>(mi(t,(o,i)=>{n&&yt(o)?e[i]=Nv(o,n):e[i]=o},{allOwnKeys:r}),e),Vk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Hk=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Gk=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Yf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Kk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Qk=e=>{if(!e)return null;if(Jr(e))return e;let t=e.length;if(!Lv(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Yk=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Yf(Uint8Array)),qk=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Xk=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Jk=Bt("HTMLFormElement"),Zk=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),nh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),e2=Bt("RegExp"),Mv=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};mi(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},t2=e=>{Mv(e,(t,n)=>{if(yt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(yt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},n2=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Jr(e)?r(e):r(String(e).split(t)),n},r2=()=>{},o2=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Il="abcdefghijklmnopqrstuvwxyz",rh="0123456789",Fv={DIGIT:rh,ALPHA:Il,ALPHA_DIGIT:Il+Il.toUpperCase()+rh},i2=(e=16,t=Fv.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function a2(e){return!!(e&&yt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const s2=e=>{const t=new Array(10),n=(r,o)=>{if(Gs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Jr(r)?[]:{};return mi(r,(a,s)=>{const l=n(a,o+1);!ni(l)&&(i[s]=l)}),t[o]=void 0,i}}return r};return n(e,0)},l2=Bt("AsyncFunction"),u2=e=>e&&(Gs(e)||yt(e))&&yt(e.then)&&yt(e.catch),P={isArray:Jr,isArrayBuffer:Av,isBuffer:jk,isFormData:Fk,isArrayBufferView:Rk,isString:Nk,isNumber:Lv,isBoolean:Ak,isObject:Gs,isPlainObject:da,isUndefined:ni,isDate:Lk,isFile:zk,isBlob:Ik,isRegExp:e2,isFunction:yt,isStream:Mk,isURLSearchParams:Uk,isTypedArray:Yk,isFileList:Dk,forEach:mi,merge:tc,extend:Wk,trim:Bk,stripBOM:Vk,inherits:Hk,toFlatObject:Gk,kindOf:Vs,kindOfTest:Bt,endsWith:Kk,toArray:Qk,forEachEntry:qk,matchAll:Xk,isHTMLForm:Jk,hasOwnProperty:nh,hasOwnProp:nh,reduceDescriptors:Mv,freezeMethods:t2,toObjectSet:n2,toCamelCase:Zk,noop:r2,toFiniteNumber:o2,findKey:zv,global:Iv,isContextDefined:Dv,ALPHABET:Fv,generateString:i2,isSpecCompliantForm:a2,toJSONObject:s2,isAsyncFn:l2,isThenable:u2};function K(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}P.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Uv=K.prototype,Bv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Bv[e]={value:e}});Object.defineProperties(K,Bv);Object.defineProperty(Uv,"isAxiosError",{value:!0});K.from=(e,t,n,r,o,i)=>{const a=Object.create(Uv);return P.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),K.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const c2=null;function nc(e){return P.isPlainObject(e)||P.isArray(e)}function Wv(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function oh(e,t,n){return e?e.concat(t).map(function(o,i){return o=Wv(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function f2(e){return P.isArray(e)&&!e.some(nc)}const d2=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function Ks(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,x){return!P.isUndefined(x[m])});const r=n.metaTokens,o=n.visitor||f,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(o))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(P.isDate(g))return g.toISOString();if(!l&&P.isBlob(g))throw new K("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(g)||P.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,m,x){let p=g;if(g&&!x&&typeof g=="object"){if(P.endsWith(m,"{}"))m=r?m:m.slice(0,-2),g=JSON.stringify(g);else if(P.isArray(g)&&f2(g)||(P.isFileList(g)||P.endsWith(m,"[]"))&&(p=P.toArray(g)))return m=Wv(m),p.forEach(function(y,b){!(P.isUndefined(y)||y===null)&&t.append(a===!0?oh([m],b,i):a===null?m:m+"[]",u(y))}),!1}return nc(g)?!0:(t.append(oh(x,m,i),u(g)),!1)}const c=[],h=Object.assign(d2,{defaultVisitor:f,convertValue:u,isVisitable:nc});function v(g,m){if(!P.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));c.push(g),P.forEach(g,function(p,d){(!(P.isUndefined(p)||p===null)&&o.call(t,p,P.isString(d)?d.trim():d,m,h))===!0&&v(p,m?m.concat(d):[d])}),c.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return v(e),t}function ih(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function qf(e,t){this._pairs=[],e&&Ks(e,this,t)}const Vv=qf.prototype;Vv.append=function(t,n){this._pairs.push([t,n])};Vv.toString=function(t){const n=t?function(r){return t.call(this,r,ih)}:ih;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function p2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Hv(e,t,n){if(!t)return e;const r=n&&n.encode||p2,o=n&&n.serialize;let i;if(o?i=o(t,n):i=P.isURLSearchParams(t)?t.toString():new qf(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class h2{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ah=h2,Gv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},m2=typeof URLSearchParams<"u"?URLSearchParams:qf,g2=typeof FormData<"u"?FormData:null,y2=typeof Blob<"u"?Blob:null,v2={isBrowser:!0,classes:{URLSearchParams:m2,FormData:g2,Blob:y2},protocols:["http","https","file","blob","url","data"]},Kv=typeof window<"u"&&typeof document<"u",x2=(e=>Kv&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),w2=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),b2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Kv,hasStandardBrowserEnv:x2,hasStandardBrowserWebWorkerEnv:w2},Symbol.toStringTag,{value:"Module"})),It={...b2,...v2};function S2(e,t){return Ks(e,new It.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return It.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function k2(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function E2(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Qv(e){function t(n,r,o,i){let a=n[i++];const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&P.isArray(o)?o.length:a,l?(P.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!P.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&P.isArray(o[a])&&(o[a]=E2(o[a])),!s)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,o)=>{t(k2(r),o,n,0)}),n}return null}function _2(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Xf={transitional:Gv,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=P.isObject(t);if(i&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return o&&o?JSON.stringify(Qv(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return S2(t,this.formSerializer).toString();if((s=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ks(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),_2(t)):t}],transformResponse:[function(t){const n=this.transitional||Xf.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&P.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?K.from(s,K.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:It.classes.FormData,Blob:It.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{Xf.headers[e]={}});const Jf=Xf,O2=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),P2=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&O2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},sh=Symbol("internals");function po(e){return e&&String(e).trim().toLowerCase()}function pa(e){return e===!1||e==null?e:P.isArray(e)?e.map(pa):String(e)}function C2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const $2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Dl(e,t,n,r,o){if(P.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function T2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function j2(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class Qs{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,l,u){const f=po(l);if(!f)throw new Error("header name must be a non-empty string");const c=P.findKey(o,f);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||l]=pa(s))}const a=(s,l)=>P.forEach(s,(u,f)=>i(u,f,l));return P.isPlainObject(t)||t instanceof this.constructor?a(t,n):P.isString(t)&&(t=t.trim())&&!$2(t)?a(P2(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=po(t),t){const r=P.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return C2(o);if(P.isFunction(n))return n.call(this,o,r);if(P.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=po(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Dl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=po(a),a){const s=P.findKey(r,a);s&&(!n||Dl(r,r[s],s,n))&&(delete r[s],o=!0)}}return P.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Dl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return P.forEach(this,(o,i)=>{const a=P.findKey(r,i);if(a){n[a]=pa(o),delete n[i];return}const s=t?T2(i):String(i).trim();s!==i&&delete n[i],n[s]=pa(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[sh]=this[sh]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=po(a);r[s]||(j2(o,a),r[s]=!0)}return P.isArray(t)?t.forEach(i):i(t),this}}Qs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(Qs.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(Qs);const Zt=Qs;function Ml(e,t){const n=this||Jf,r=t||n,o=Zt.from(r.headers);let i=r.data;return P.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Yv(e){return!!(e&&e.__CANCEL__)}function gi(e,t,n){K.call(this,e??"canceled",K.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(gi,K,{__CANCEL__:!0});function R2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const N2=It.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];P.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),P.isString(r)&&a.push("path="+r),P.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function A2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function L2(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function qv(e,t){return e&&!A2(t)?L2(e,t):t}const z2=It.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=P.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function I2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function D2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),f=r[i];a||(a=u),n[o]=l,r[o]=u;let c=i,h=0;for(;c!==o;)h+=n[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const v=f&&u-f;return v?Math.round(h*1e3/v):void 0}}function lh(e,t){let n=0;const r=D2(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,l=r(s),u=i<=a;n=i;const f={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-i)/l:void 0,event:o};f[t?"download":"upload"]=!0,e(f)}}const M2=typeof XMLHttpRequest<"u",F2=M2&&function(e){return new Promise(function(n,r){let o=e.data;const i=Zt.from(e.headers).normalize();let{responseType:a,withXSRFToken:s}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;if(P.isFormData(o)){if(It.hasStandardBrowserEnv||It.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[m,...x]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([m||"multipart/form-data",...x].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+x))}const h=qv(e.baseURL,e.url);c.open(e.method.toUpperCase(),Hv(h,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function v(){if(!c)return;const m=Zt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};R2(function(y){n(y),u()},function(y){r(y),u()},p),c=null}if("onloadend"in c?c.onloadend=v:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(v)},c.onabort=function(){c&&(r(new K("Request aborted",K.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Gv;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new K(x,p.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,e,c)),c=null},It.hasStandardBrowserEnv&&(s&&P.isFunction(s)&&(s=s(e)),s||s!==!1&&z2(h))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&N2.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&P.forEach(i.toJSON(),function(x,p){c.setRequestHeader(p,x)}),P.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",lh(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",lh(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=m=>{c&&(r(!m||m.type?new gi(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=I2(h);if(g&&It.protocols.indexOf(g)===-1){r(new K("Unsupported protocol "+g+":",K.ERR_BAD_REQUEST,e));return}c.send(o||null)})},rc={http:c2,xhr:F2};P.forEach(rc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const uh=e=>`- ${e}`,U2=e=>P.isFunction(e)||e===null||e===!1,Xv={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!U2(n)&&(r=rc[(a=String(n)).toLowerCase()],r===void 0))throw new K(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(uh).join(`
`):" "+uh(i[0]):"as no adapter specified";throw new K("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:rc};function Fl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new gi(null,e)}function ch(e){return Fl(e),e.headers=Zt.from(e.headers),e.data=Ml.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xv.getAdapter(e.adapter||Jf.adapter)(e).then(function(r){return Fl(e),r.data=Ml.call(e,e.transformResponse,r),r.headers=Zt.from(r.headers),r},function(r){return Yv(r)||(Fl(e),r&&r.response&&(r.response.data=Ml.call(e,e.transformResponse,r.response),r.response.headers=Zt.from(r.response.headers))),Promise.reject(r)})}const fh=e=>e instanceof Zt?e.toJSON():e;function Wr(e,t){t=t||{};const n={};function r(u,f,c){return P.isPlainObject(u)&&P.isPlainObject(f)?P.merge.call({caseless:c},u,f):P.isPlainObject(f)?P.merge({},f):P.isArray(f)?f.slice():f}function o(u,f,c){if(P.isUndefined(f)){if(!P.isUndefined(u))return r(void 0,u,c)}else return r(u,f,c)}function i(u,f){if(!P.isUndefined(f))return r(void 0,f)}function a(u,f){if(P.isUndefined(f)){if(!P.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function s(u,f,c){if(c in t)return r(u,f);if(c in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,f)=>o(fh(u),fh(f),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=l[f]||o,h=c(e[f],t[f],f);P.isUndefined(h)&&c!==s||(n[f]=h)}),n}const Jv="1.6.2",Zf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Zf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const dh={};Zf.transitional=function(t,n,r){function o(i,a){return"[Axios v"+Jv+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new K(o(a," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!dh[a]&&(dh[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function B2(e,t,n){if(typeof e!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new K("option "+i+" must be "+l,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+i,K.ERR_BAD_OPTION)}}const oc={assertOptions:B2,validators:Zf},fn=oc.validators;class Ga{constructor(t){this.defaults=t,this.interceptors={request:new ah,response:new ah}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Wr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&oc.assertOptions(r,{silentJSONParsing:fn.transitional(fn.boolean),forcedJSONParsing:fn.transitional(fn.boolean),clarifyTimeoutError:fn.transitional(fn.boolean)},!1),o!=null&&(P.isFunction(o)?n.paramsSerializer={serialize:o}:oc.assertOptions(o,{encode:fn.function,serialize:fn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&P.merge(i.common,i[n.method]);i&&P.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=Zt.concat(a,i);const s=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let f,c=0,h;if(!l){const g=[ch.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),h=g.length,f=Promise.resolve(n);c<h;)f=f.then(g[c++],g[c++]);return f}h=s.length;let v=n;for(c=0;c<h;){const g=s[c++],m=s[c++];try{v=g(v)}catch(x){m.call(this,x);break}}try{f=ch.call(this,v)}catch(g){return Promise.reject(g)}for(c=0,h=u.length;c<h;)f=f.then(u[c++],u[c++]);return f}getUri(t){t=Wr(this.defaults,t);const n=qv(t.baseURL,t.url);return Hv(n,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){Ga.prototype[t]=function(n,r){return this.request(Wr(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(Wr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Ga.prototype[t]=n(),Ga.prototype[t+"Form"]=n(!0)});const ha=Ga;class ed{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new gi(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ed(function(o){t=o}),cancel:t}}}const W2=ed;function V2(e){return function(n){return e.apply(null,n)}}function H2(e){return P.isObject(e)&&e.isAxiosError===!0}const ic={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ic).forEach(([e,t])=>{ic[t]=e});const G2=ic;function Zv(e){const t=new ha(e),n=Nv(ha.prototype.request,t);return P.extend(n,ha.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Zv(Wr(e,o))},n}const Se=Zv(Jf);Se.Axios=ha;Se.CanceledError=gi;Se.CancelToken=W2;Se.isCancel=Yv;Se.VERSION=Jv;Se.toFormData=Ks;Se.AxiosError=K;Se.Cancel=Se.CanceledError;Se.all=function(t){return Promise.all(t)};Se.spread=V2;Se.isAxiosError=H2;Se.mergeConfig=Wr;Se.AxiosHeaders=Zt;Se.formToJSON=e=>Qv(P.isHTMLForm(e)?new FormData(e):e);Se.getAdapter=Xv.getAdapter;Se.HttpStatusCode=G2;Se.default=Se;const sn=Se;sn.defaults.baseURL="https://watertracker-backend.onrender.com";const td={set(e){sn.defaults.headers.common.Authorization=`Bearer ${e}`},unset(){sn.defaults.headers.common.Authorization=""}},K2=async e=>{const{data:t}=await sn.post("/auth/register",e);return td.set(t.token),t},Q2=async e=>{const{data:t}=await sn.post("/auth/login",e);return td.set(t.token),t},Y2=async()=>{await sn.post("/auth/logout"),td.unset()},q2=async e=>{e.set(e);const{data:t}=await sn.get("/user/current");return t},X2=async e=>{const{data:{avatarURL:t}}=await sn.post("/user/avatar",e,{headers:{"Content-Type":"multipart/form-data"}});return t},J2=async e=>await sn.patch("/user/edit",e,{headers:{"Content-Type":"application/json"}}),Z2=Xr("auth/register",async(e,{rejectWithValue:t})=>{try{return await K2(e)}catch(n){return t(n.message)}}),eE=Xr("auth/login",async(e,{rejectWithValue:t})=>{try{return await Q2(e)}catch(n){return t(n.message)}}),e0=Xr("auth/logout",async(e,{rejectWithValue:t})=>{try{await Y2();return}catch(n){return t(n.message)}}),Ul=Xr("auth/refresh",async(e,{rejectWithValue:t,getState:n})=>{try{const{auth:{token:r}}=n();return await q2(r)}catch(r){return t(r.message)}},{condition:(e,{getState:t})=>{const{auth:{token:n}}=t();if(!n)return!1}}),tE=Xr("user/avatar",async(e,{rejectWithValue:t})=>{try{return await X2(e)}catch(n){return t(n.message)}}),nE=Xr("user/edit",async(e,{rejectWithValue:t})=>{try{return await J2(e)}catch(n){return t(n.message)}}),rE=(e,{payload:t})=>{e.user=t},oE=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},iE=e=>{},aE=(e,{payload:t})=>{e.user=t,e.isRefreshing=!1,e.isLoggedIn=!0},sE=e=>{e.isRefreshing=!0},lE=e=>{e.isRefreshing=!1},uE=(e,{payload:t})=>{e.user.avatarURL=t},cE=(e,{payload:t})=>{e.user=t},fE={user:{email:"",avatarURL:"",userName:"",gender:"",waterRate:""},token:null,isLoggedIn:!1,isRefreshing:!1},dE=KS({name:"auth",initialState:fE,extraReducers:e=>{e.addCase(Z2.fulfilled,rE).addCase(eE.fulfilled,oE).addCase(e0.fulfilled,iE).addCase(tE.fulfilled,uE).addCase(Ul.fulfilled,aE).addCase(nE.fulfilled,cE).addCase(Ul.pending,sE).addCase(Ul.rejected,lE)}}),pE=dE.reducer,hE={key:"auth",storage:Rv,whitelist:["token"]},t0=WS({reducer:{auth:hk(hE,pE)},middleware:e=>e({serializableCheck:{ignoredActions:[Bf,Ws,Wf,Vf,Hf,Gf]}})}),mE=wk(t0);var n0={};const gE=U0(wx);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=gE;function n(){var a=r([`
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
`]);return n=function(){return a},a}function r(a,s){return s||(s=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(s)}}))}var o=(0,t.css)(n()),i=o;e.default=i})(n0);const yE=es(n0),ac={color:{black:"#2F2F2F",white:"#FFFFFF",accent:"#407BFF",secondaryWhite:"#ecf2ff",secondaryRed:"#ef5050",secondaryLightBlue:"#9ebbff",secondaryYellow:"#ff9d43",secondaryPowderBlue:"#d7e3ff"},breakpoint:{mobile:"320px",tablet:"768px",desktop:"1440px"},transition:{main:"250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",modal:"300ms ease-in-out"},boxShadowforButton:{normalButton:"0 4px 8px rgba(64, 123, 255, 0.34)",hoverButton:"0 4px 14px rgba(64, 123, 255, 0.54)",activeButton:"none"},modalBoxShadow:{modal:"0 4px 14px rgba(64, 123, 255, 0.3)"}},vE="/water-tracker/assets/Roboto-Regular-4e147ab6.ttf",xE="/water-tracker/assets/Roboto-Medium-9d0d55a3.ttf",wE="/water-tracker/assets/Roboto-Bold-ec685a46.ttf",bE=Ic`
  ${yE}

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
    src: url(${vE}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url(${xE}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: url(${wE}) format('truetype');
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
    color: ${ac.color.black};
    background-color: ${ac.color.white};
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
`;var r0={exports:{}},SE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kE=SE,EE=kE;function o0(){}function i0(){}i0.resetWarningCache=o0;var _E=function(){function e(r,o,i,a,s,l){if(l!==EE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i0,resetWarningCache:o0};return n.PropTypes=n,n};r0.exports=_E();var OE=r0.exports;const wo=es(OE);var PE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,sc=Xm(function(e){return PE.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),CE=sc,$E=function(t){return t!=="theme"},ph=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?CE:$E},hh=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},TE=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ms(n,r,o),Ac(function(){return gs(n,r,o)}),null},jE=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=hh(t,n,r),l=s||ph(o),u=!l("as");return function(){var f=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&c.push("label:"+i+";"),f[0]==null||f[0].raw===void 0)c.push.apply(c,f);else{c.push(f[0][0]);for(var h=f.length,v=1;v<h;v++)c.push(f[v],f[0][v])}var g=ci(function(m,x,p){var d=u&&m.as||o,y="",b=[],k=m;if(m.theme==null){k={};for(var _ in m)k[_]=m[_];k.theme=S.useContext(en)}typeof m.className=="string"?y=Nc(x.registered,b,m.className):m.className!=null&&(y=m.className+" ");var C=ui(c.concat(b),x.registered,k);y+=x.key+"-"+C.name,a!==void 0&&(y+=" "+a);var T=u&&s===void 0?ph(d):l,D={};for(var L in m)u&&L==="as"||T(L)&&(D[L]=m[L]);return D.className=y,D.ref=p,S.createElement(S.Fragment,null,S.createElement(TE,{cache:x,serialized:C,isStringTag:typeof d=="string"}),S.createElement(d,D))});return g.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=o,g.__emotion_styles=c,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(m,x){return e(m,Ao({},n,x,{shouldForwardProp:hh(g,x,!0)})).apply(void 0,c)},g}},RE=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],O=jE.bind();RE.forEach(function(e){O[e]=O(e)});const NE=O.div`
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
`,a0=O.div`
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
`,AE=O.div`
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
`,LE=O.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,zE=O.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.color.accent};

  &:hover,
  &:focus {
    stroke: ${e=>e.theme.color.secondaryYellow};
  }
`,Ot="/water-tracker/assets/sprite-c35e1970.svg",Ys=({onShow:e=!0,children:t,title:n,onClose:r})=>{const o=document.querySelector("#modal-root"),i=S.useRef(null),a=S.useRef(null);return S.useEffect(()=>{const s=u=>{document.body.style.overflow=u?"hidden":"auto"};(e||o.children.length!==0)&&s(!0);const l=u=>{u.code==="Escape"&&r()};return window.addEventListener("keydown",l),()=>{s(!1),window.removeEventListener("keydown",l)}},[o.children.length,e,r]),$f.createPortal(w.jsx(NE,{onClick:r,ref:a,children:w.jsxs(a0,{onClick:s=>s.stopPropagation(),ref:i,children:[w.jsxs(AE,{children:[w.jsx("h2",{children:n}),w.jsx(LE,{onClick:r,children:w.jsx(zE,{children:w.jsx("use",{href:`${Ot}#icon-outline`})})})]}),w.jsx("div",{children:t})]})}),o)};Ys.propTypes={onClose:wo.func.isRequired,children:wo.node.isRequired,onShow:wo.bool,title:wo.string.isRequired};const IE=O.div`
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
`;var DE=function(e){return{display:e?"flex":"none"}},ME="#4fa94d",FE={"aria-busy":!0,role:"status"},mh=globalThis&&globalThis.__assign||function(){return mh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},mh.apply(this,arguments)},gh=globalThis&&globalThis.__assign||function(){return gh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},gh.apply(this,arguments)},yh=globalThis&&globalThis.__assign||function(){return yh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},yh.apply(this,arguments)},vh=globalThis&&globalThis.__assign||function(){return vh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},vh.apply(this,arguments)},xh=globalThis&&globalThis.__assign||function(){return xh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},xh.apply(this,arguments)},wh=globalThis&&globalThis.__assign||function(){return wh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},wh.apply(this,arguments)},bh=globalThis&&globalThis.__assign||function(){return bh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},bh.apply(this,arguments)};function UE(e){function t(N,A,z,U,E){for(var G=0,R=0,me=0,J=0,ee,V,$e=0,qe=0,Y,De=Y=ee=0,Z=0,Te=0,to=0,je=0,Si=z.length,no=Si-1,bt,W="",ve="",Zs="",el="",un;Z<Si;){if(V=z.charCodeAt(Z),Z===no&&R+J+me+G!==0&&(R!==0&&(V=R===47?10:47),J=me=G=0,Si++,no++),R+J+me+G===0){if(Z===no&&(0<Te&&(W=W.replace(h,"")),0<W.trim().length)){switch(V){case 32:case 9:case 59:case 13:case 10:break;default:W+=z.charAt(Z)}V=59}switch(V){case 123:for(W=W.trim(),ee=W.charCodeAt(0),Y=1,je=++Z;Z<Si;){switch(V=z.charCodeAt(Z)){case 123:Y++;break;case 125:Y--;break;case 47:switch(V=z.charCodeAt(Z+1)){case 42:case 47:e:{for(De=Z+1;De<no;++De)switch(z.charCodeAt(De)){case 47:if(V===42&&z.charCodeAt(De-1)===42&&Z+2!==De){Z=De+1;break e}break;case 10:if(V===47){Z=De+1;break e}}Z=De}}break;case 91:V++;case 40:V++;case 34:case 39:for(;Z++<no&&z.charCodeAt(Z)!==V;);}if(Y===0)break;Z++}switch(Y=z.substring(je,Z),ee===0&&(ee=(W=W.replace(c,"").trim()).charCodeAt(0)),ee){case 64:switch(0<Te&&(W=W.replace(h,"")),V=W.charCodeAt(1),V){case 100:case 109:case 115:case 45:Te=A;break;default:Te=Wt}if(Y=t(A,Te,Y,V,E+1),je=Y.length,0<j&&(Te=n(Wt,W,to),un=s(3,Y,Te,A,le,he,je,V,E,U),W=Te.join(""),un!==void 0&&(je=(Y=un.trim()).length)===0&&(V=0,Y="")),0<je)switch(V){case 115:W=W.replace(_,a);case 100:case 109:case 45:Y=W+"{"+Y+"}";break;case 107:W=W.replace(d,"$1 $2"),Y=W+"{"+Y+"}",Y=ke===1||ke===2&&i("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=W+Y,U===112&&(Y=(ve+=Y,""))}else Y="";break;default:Y=t(A,n(A,W,to),Y,U,E+1)}Zs+=Y,Y=to=Te=De=ee=0,W="",V=z.charCodeAt(++Z);break;case 125:case 59:if(W=(0<Te?W.replace(h,""):W).trim(),1<(je=W.length))switch(De===0&&(ee=W.charCodeAt(0),ee===45||96<ee&&123>ee)&&(je=(W=W.replace(" ",":")).length),0<j&&(un=s(1,W,A,N,le,he,ve.length,U,E,U))!==void 0&&(je=(W=un.trim()).length)===0&&(W="\0\0"),ee=W.charCodeAt(0),V=W.charCodeAt(1),ee){case 0:break;case 64:if(V===105||V===99){el+=W+z.charAt(Z);break}default:W.charCodeAt(je-1)!==58&&(ve+=o(W,ee,V,W.charCodeAt(2)))}to=Te=De=ee=0,W="",V=z.charCodeAt(++Z)}}switch(V){case 13:case 10:R===47?R=0:1+ee===0&&U!==107&&0<W.length&&(Te=1,W+="\0"),0<j*F&&s(0,W,A,N,le,he,ve.length,U,E,U),he=1,le++;break;case 59:case 125:if(R+J+me+G===0){he++;break}default:switch(he++,bt=z.charAt(Z),V){case 9:case 32:if(J+G+R===0)switch($e){case 44:case 58:case 9:case 32:bt="";break;default:V!==32&&(bt=" ")}break;case 0:bt="\\0";break;case 12:bt="\\f";break;case 11:bt="\\v";break;case 38:J+R+G===0&&(Te=to=1,bt="\f"+bt);break;case 108:if(J+R+G+Ie===0&&0<De)switch(Z-De){case 2:$e===112&&z.charCodeAt(Z-3)===58&&(Ie=$e);case 8:qe===111&&(Ie=qe)}break;case 58:J+R+G===0&&(De=Z);break;case 44:R+me+J+G===0&&(Te=1,bt+="\r");break;case 34:case 39:R===0&&(J=J===V?0:J===0?V:J);break;case 91:J+R+me===0&&G++;break;case 93:J+R+me===0&&G--;break;case 41:J+R+G===0&&me--;break;case 40:if(J+R+G===0){if(ee===0)switch(2*$e+3*qe){case 533:break;default:ee=1}me++}break;case 64:R+me+J+G+De+Y===0&&(Y=1);break;case 42:case 47:if(!(0<J+G+me))switch(R){case 0:switch(2*V+3*z.charCodeAt(Z+1)){case 235:R=47;break;case 220:je=Z,R=42}break;case 42:V===47&&$e===42&&je+2!==Z&&(z.charCodeAt(je+2)===33&&(ve+=z.substring(je,Z+1)),bt="",R=0)}}R===0&&(W+=bt)}qe=$e,$e=V,Z++}if(je=ve.length,0<je){if(Te=A,0<j&&(un=s(2,ve,Te,N,le,he,je,U,E,U),un!==void 0&&(ve=un).length===0))return el+ve+Zs;if(ve=Te.join(",")+"{"+ve+"}",ke*Ie!==0){switch(ke!==2||i(ve,2)||(Ie=0),Ie){case 111:ve=ve.replace(b,":-moz-$1")+ve;break;case 112:ve=ve.replace(y,"::-webkit-input-$1")+ve.replace(y,"::-moz-$1")+ve.replace(y,":-ms-input-$1")+ve}Ie=0}}return el+ve+Zs}function n(N,A,z){var U=A.trim().split(x);A=U;var E=U.length,G=N.length;switch(G){case 0:case 1:var R=0;for(N=G===0?"":N[0]+" ";R<E;++R)A[R]=r(N,A[R],z).trim();break;default:var me=R=0;for(A=[];R<E;++R)for(var J=0;J<G;++J)A[me++]=r(N[J]+" ",U[R],z).trim()}return A}function r(N,A,z){var U=A.charCodeAt(0);switch(33>U&&(U=(A=A.trim()).charCodeAt(0)),U){case 38:return A.replace(p,"$1"+N.trim());case 58:return N.trim()+A.replace(p,"$1"+N.trim());default:if(0<1*z&&0<A.indexOf("\f"))return A.replace(p,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+A}function o(N,A,z,U){var E=N+";",G=2*A+3*z+4*U;if(G===944){N=E.indexOf(":",9)+1;var R=E.substring(N,E.length-1).trim();return R=E.substring(0,N).trim()+R+";",ke===1||ke===2&&i(R,1)?"-webkit-"+R+R:R}if(ke===0||ke===2&&!i(E,1))return E;switch(G){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(B,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return R=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+E+"-ms-flex-pack"+R+E;case 1005:return g.test(E)?E.replace(v,":-webkit-")+E.replace(v,":-moz-")+E:E;case 1e3:switch(R=E.substring(13).trim(),A=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(A)){case 226:R=E.replace(k,"tb");break;case 232:R=E.replace(k,"tb-rl");break;case 220:R=E.replace(k,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+R+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(A=(E=N).length-10,R=(E.charCodeAt(A)===33?E.substring(0,A):E).substring(N.indexOf(":",7)+1).trim(),G=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:E=E.replace(R,"-webkit-"+R)+";"+E;break;case 207:case 102:E=E.replace(R,"-webkit-"+(102<G?"inline-":"")+"box")+";"+E.replace(R,"-webkit-"+R)+";"+E.replace(R,"-ms-"+R+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return R=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+R+"-ms-flex-"+R+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(T,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(T,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(L.test(N)===!0)return(R=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?o(N.replace("stretch","fill-available"),A,z,U).replace(":fill-available",":stretch"):E.replace(R,"-webkit-"+R)+E.replace(R,"-moz-"+R.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,z+U===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+E}return E}function i(N,A){var z=N.indexOf(A===1?":":"{"),U=N.substring(0,A!==3?z:10);return z=N.substring(z+1,N.length-1),M(A!==2?U:U.replace(D,"$1"),z,A)}function a(N,A){var z=o(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return z!==A+";"?z.replace(C," or ($1)").substring(4):"("+A+")"}function s(N,A,z,U,E,G,R,me,J,ee){for(var V=0,$e=A,qe;V<j;++V)switch(qe=He[V].call(f,N,$e,z,U,E,G,R,me,J,ee)){case void 0:case!1:case!0:case null:break;default:$e=qe}if($e!==A)return $e}function l(N){switch(N){case void 0:case null:j=He.length=0;break;default:if(typeof N=="function")He[j++]=N;else if(typeof N=="object")for(var A=0,z=N.length;A<z;++A)l(N[A]);else F=!!N|0}return l}function u(N){return N=N.prefix,N!==void 0&&(M=null,N?typeof N!="function"?ke=1:(ke=2,M=N):ke=0),u}function f(N,A){var z=N;if(33>z.charCodeAt(0)&&(z=z.trim()),oe=z,z=[oe],0<j){var U=s(-1,A,z,z,le,he,0,0,0,0);U!==void 0&&typeof U=="string"&&(A=U)}var E=t(Wt,z,A,0,0);return 0<j&&(U=s(-2,E,z,z,le,he,E.length,0,0,0),U!==void 0&&(E=U)),oe="",Ie=0,he=le=1,E}var c=/^\0+/g,h=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,m=/([,: ])(transform)/g,x=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,d=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,T=/-self|flex-/g,D=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,B=/([^-])(image-set\()/,he=1,le=1,Ie=0,ke=1,Wt=[],He=[],j=0,M=null,F=0,oe="";return f.use=l,f.set=u,e!==void 0&&u(e),f}var BE={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Xt(){return(Xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Sh=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},lc=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Tc.typeOf(e)},Ka=Object.freeze([]),jn=Object.freeze({});function ri(e){return typeof e=="function"}function kh(e){return e.displayName||e.name||"Component"}function nd(e){return e&&typeof e.styledComponentId=="string"}var Vr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rd=typeof window<"u"&&"HTMLElement"in window,WE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function yi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var VE=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&yi(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),ma=new Map,Qa=new Map,To=1,Ui=function(e){if(ma.has(e))return ma.get(e);for(;Qa.has(To);)To++;var t=To++;return ma.set(e,t),Qa.set(t,e),t},HE=function(e){return Qa.get(e)},GE=function(e,t){t>=To&&(To=t+1),ma.set(e,t),Qa.set(t,e)},KE="style["+Vr+'][data-styled-version="5.3.11"]',QE=new RegExp("^"+Vr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),YE=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},qE=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(QE);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(GE(u,l),YE(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},XE=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},s0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(Vr))return f}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Vr,"active"),r.setAttribute("data-styled-version","5.3.11");var a=XE();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},JE=function(){function e(n){var r=this.element=s0(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var l=i[a];if(l.ownerNode===o)return l}yi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ZE=function(){function e(n){var r=this.element=s0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),e_=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Eh=rd,t_={isServer:!rd,useCSSOMInjection:!WE},l0=function(){function e(n,r,o){n===void 0&&(n=jn),r===void 0&&(r={}),this.options=Xt({},t_,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&rd&&Eh&&(Eh=!1,function(i){for(var a=document.querySelectorAll(KE),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Vr)!=="active"&&(qE(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ui(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Xt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new e_(a):i?new JE(a):new ZE(a),new VE(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ui(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ui(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ui(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=HE(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var f=Vr+".g"+a+'[id="'+s+'"]',c="";l!==void 0&&l.forEach(function(h){h.length>0&&(c+=h+",")}),i+=""+u+f+'{content:"'+c+`"}/*!sc*/
`}}}return i}(this)},e}(),n_=/(a)(d)/gi,_h=function(e){return String.fromCharCode(e+(e>25?39:97))};function uc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=_h(t%52)+n;return(_h(t%52)+n).replace(n_,"$1-$2")}var Sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},u0=function(e){return Sr(5381,e)};function r_(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ri(n)&&!nd(n))return!1}return!0}var o_=u0("5.3.11"),i_=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&r_(t),this.componentId=n,this.baseHash=Sr(o_,n),this.baseStyle=r,l0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Hr(this.rules,t,n,r).join(""),s=uc(Sr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var l=r(a,"."+s,void 0,o);n.insertRules(o,s,l)}i.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,f=Sr(this.baseHash,r.hash),c="",h=0;h<u;h++){var v=this.rules[h];if(typeof v=="string")c+=v;else if(v){var g=Hr(v,t,n,r),m=Array.isArray(g)?g.join(""):g;f=Sr(f,m+h),c+=m}}if(c){var x=uc(f>>>0);if(!n.hasNameForId(o,x)){var p=r(c,"."+x,void 0,o);n.insertRules(o,x,p)}i.push(x)}}return i.join(" ")},e}(),a_=/^\s*\/\/.*$/gm,s_=[":","[",".","#"];function l_(e){var t,n,r,o,i=e===void 0?jn:e,a=i.options,s=a===void 0?jn:a,l=i.plugins,u=l===void 0?Ka:l,f=new UE(s),c=[],h=function(m){function x(p){if(p)try{m(p+"}")}catch{}}return function(p,d,y,b,k,_,C,T,D,L){switch(p){case 1:if(D===0&&d.charCodeAt(0)===64)return m(d+";"),"";break;case 2:if(T===0)return d+"/*|*/";break;case 3:switch(T){case 102:case 112:return m(y[0]+d),"";default:return d+(L===0?"/*|*/":"")}case-2:d.split("/*|*/}").forEach(x)}}}(function(m){c.push(m)}),v=function(m,x,p){return x===0&&s_.indexOf(p[n.length])!==-1||p.match(o)?m:"."+t};function g(m,x,p,d){d===void 0&&(d="&");var y=m.replace(a_,""),b=x&&p?p+" "+x+" { "+y+" }":y;return t=d,n=x,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),f(p||!x?"":x,b)}return f.use([].concat(u,[function(m,x,p){m===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,v))},h,function(m){if(m===-2){var x=c;return c=[],x}}])),g.hash=u.length?u.reduce(function(m,x){return x.name||yi(15),Sr(m,x.name)},5381).toString():"",g}var c0=Ne.createContext();c0.Consumer;var f0=Ne.createContext(),u_=(f0.Consumer,new l0),cc=l_();function c_(){return S.useContext(c0)||u_}function f_(){return S.useContext(f0)||cc}var d0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=cc);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return yi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=cc),this.name+t.hash},e}(),d_=/([A-Z])/,p_=/([A-Z])/g,h_=/^ms-/,m_=function(e){return"-"+e.toLowerCase()};function Oh(e){return d_.test(e)?e.replace(p_,m_).replace(h_,"-ms-"):e}var Ph=function(e){return e==null||e===!1||e===""};function Hr(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=Hr(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Ph(e))return"";if(nd(e))return"."+e.styledComponentId;if(ri(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Hr(l,t,n,r)}var u;return e instanceof d0?n?(e.inject(n,r),e.getName(r)):e:lc(e)?function f(c,h){var v,g,m=[];for(var x in c)c.hasOwnProperty(x)&&!Ph(c[x])&&(Array.isArray(c[x])&&c[x].isCss||ri(c[x])?m.push(Oh(x)+":",c[x],";"):lc(c[x])?m.push.apply(m,f(c[x],x)):m.push(Oh(x)+": "+(v=x,(g=c[x])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in BE||v.startsWith("--")?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(m,["}"]):m}(e):e.toString()}var Ch=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function p0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ri(e)||lc(e)?Ch(Hr(Sh(Ka,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ch(Hr(Sh(e,n)))}var g_=function(e,t,n){return n===void 0&&(n=jn),e.theme!==n.theme&&e.theme||t||n.theme},y_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,v_=/(^-|-$)/g;function Bl(e){return e.replace(y_,"-").replace(v_,"")}var h0=function(e){return uc(u0(e)>>>0)};function Bi(e){return typeof e=="string"&&!0}var fc=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},x_=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function w_(e,t,n){var r=e[n];fc(t)&&fc(r)?m0(r,t):e[n]=t}function m0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(fc(a))for(var s in a)x_(s)&&w_(e,a[s],s)}return e}var g0=Ne.createContext();g0.Consumer;var Wl={};function y0(e,t,n){var r=nd(e),o=!Bi(e),i=t.attrs,a=i===void 0?Ka:i,s=t.componentId,l=s===void 0?function(d,y){var b=typeof d!="string"?"sc":Bl(d);Wl[b]=(Wl[b]||0)+1;var k=b+"-"+h0("5.3.11"+b+Wl[b]);return y?y+"-"+k:k}(t.displayName,t.parentComponentId):s,u=t.displayName,f=u===void 0?function(d){return Bi(d)?"styled."+d:"Styled("+kh(d)+")"}(e):u,c=t.displayName&&t.componentId?Bl(t.displayName)+"-"+t.componentId:t.componentId||l,h=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(d,y,b){return e.shouldForwardProp(d,y,b)&&t.shouldForwardProp(d,y,b)}:e.shouldForwardProp);var g,m=new i_(n,c,r?e.componentStyle:void 0),x=m.isStatic&&a.length===0,p=function(d,y){return function(b,k,_,C){var T=b.attrs,D=b.componentStyle,L=b.defaultProps,B=b.foldedComponentIds,he=b.shouldForwardProp,le=b.styledComponentId,Ie=b.target,ke=function(U,E,G){U===void 0&&(U=jn);var R=Xt({},E,{theme:U}),me={};return G.forEach(function(J){var ee,V,$e,qe=J;for(ee in ri(qe)&&(qe=qe(R)),qe)R[ee]=me[ee]=ee==="className"?(V=me[ee],$e=qe[ee],V&&$e?V+" "+$e:V||$e):qe[ee]}),[R,me]}(g_(k,S.useContext(g0),L)||jn,k,T),Wt=ke[0],He=ke[1],j=function(U,E,G,R){var me=c_(),J=f_(),ee=E?U.generateAndInjectStyles(jn,me,J):U.generateAndInjectStyles(G,me,J);return ee}(D,C,Wt),M=_,F=He.$as||k.$as||He.as||k.as||Ie,oe=Bi(F),N=He!==k?Xt({},k,{},He):k,A={};for(var z in N)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?A.as=N[z]:(he?he(z,sc,F):!oe||sc(z))&&(A[z]=N[z]));return k.style&&He.style!==k.style&&(A.style=Xt({},k.style,{},He.style)),A.className=Array.prototype.concat(B,le,j!==le?j:null,k.className,He.className).filter(Boolean).join(" "),A.ref=M,S.createElement(F,A)}(g,d,y,x)};return p.displayName=f,(g=Ne.forwardRef(p)).attrs=h,g.componentStyle=m,g.displayName=f,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ka,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(d){var y=t.componentId,b=function(_,C){if(_==null)return{};var T,D,L={},B=Object.keys(_);for(D=0;D<B.length;D++)T=B[D],C.indexOf(T)>=0||(L[T]=_[T]);return L}(t,["componentId"]),k=y&&y+"-"+(Bi(d)?d:Bl(kh(d)));return y0(d,Xt({},b,{attrs:h,componentId:k}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(d){this._foldedDefaultProps=r?m0({},e.defaultProps,d):d}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),o&&rg(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var dc=function(e){return function t(n,r,o){if(o===void 0&&(o=jn),!Tc.isValidElementType(r))return yi(1,String(r));var i=function(){return n(r,o,p0.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Xt({},o,{},a))},i.attrs=function(a){return t(n,r,Xt({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(y0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){dc[e]=dc(e)});function od(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=p0.apply(void 0,[e].concat(n)).join(""),i=h0(o);return new d0(i,o)}const vi=dc;var v0=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},kt=242.776657104492,b_=1.6,S_=od($h||($h=v0([`
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
`])),kt*.14,kt,kt*.11,kt*.35,kt,kt*.35,kt*.01,kt,kt*.99);vi.path(Th||(Th=v0([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),kt*.01,kt,S_,b_);var $h,Th,jh=globalThis&&globalThis.__assign||function(){return jh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},jh.apply(this,arguments)},Rh=globalThis&&globalThis.__assign||function(){return Rh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Rh.apply(this,arguments)},Nh=globalThis&&globalThis.__assign||function(){return Nh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Nh.apply(this,arguments)},Ah=globalThis&&globalThis.__assign||function(){return Ah=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ah.apply(this,arguments)},Lh=globalThis&&globalThis.__assign||function(){return Lh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Lh.apply(this,arguments)},zh=globalThis&&globalThis.__assign||function(){return zh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},zh.apply(this,arguments)},Ih=globalThis&&globalThis.__assign||function(){return Ih=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ih.apply(this,arguments)},k_=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var o=t.split("."),i=o.length,a=r[o[0]],s=1;a!=null&&s<i;)a=a[o[s]],s+=1;if(typeof a<"u")return a}return n}},id=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Dh=globalThis&&globalThis.__assign||function(){return Dh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Dh.apply(this,arguments)},E_=od(Mh||(Mh=id([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));vi.svg(Fh||(Fh=id([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),E_,k_("speed","0.75"));vi.polyline(Uh||(Uh=id([`
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
`])),function(e){return e.width});var Mh,Fh,Uh,Bh=globalThis&&globalThis.__assign||function(){return Bh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Bh.apply(this,arguments)},Wh=globalThis&&globalThis.__assign||function(){return Wh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Wh.apply(this,arguments)},jo=globalThis&&globalThis.__assign||function(){return jo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},jo.apply(this,arguments)},__=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,o=r===void 0?80:r,i=e.radius,a=i===void 0?9:i,s=e.color,l=s===void 0?ME:s,u=e.ariaLabel,f=u===void 0?"three-dots-loading":u,c=e.wrapperStyle,h=e.wrapperClass,v=e.visible,g=v===void 0?!0:v;return Ne.createElement("div",jo({style:jo(jo({},DE(g)),c),className:h,"data-testid":"three-dots-loading","aria-label":f},FE),Ne.createElement("svg",{width:o,height:n,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:l,"data-testid":"three-dots-svg"},Ne.createElement("circle",{cx:"15",cy:"15",r:Number(a)+6},Ne.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Ne.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),Ne.createElement("circle",{cx:"60",cy:"15",r:a,attributeName:"fill-opacity",from:"1",to:"0.3"},Ne.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),Ne.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),Ne.createElement("circle",{cx:"105",cy:"15",r:Number(a)+6},Ne.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),Ne.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))},ad=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Vh=globalThis&&globalThis.__assign||function(){return Vh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Vh.apply(this,arguments)},O_=od(Hh||(Hh=ad([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));vi.polygon(Gh||(Gh=ad([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),O_);vi.svg(Kh||(Kh=ad([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var Hh,Gh,Kh,Qh=globalThis&&globalThis.__assign||function(){return Qh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Qh.apply(this,arguments)},Yh=globalThis&&globalThis.__assign||function(){return Yh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Yh.apply(this,arguments)},qh=globalThis&&globalThis.__assign||function(){return qh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},qh.apply(this,arguments)},Xh=globalThis&&globalThis.__assign||function(){return Xh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Xh.apply(this,arguments)},Jh=globalThis&&globalThis.__assign||function(){return Jh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Jh.apply(this,arguments)},Zh=globalThis&&globalThis.__assign||function(){return Zh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Zh.apply(this,arguments)},em=globalThis&&globalThis.__assign||function(){return em=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},em.apply(this,arguments)},tm=globalThis&&globalThis.__assign||function(){return tm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},tm.apply(this,arguments)},nm=globalThis&&globalThis.__assign||function(){return nm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},nm.apply(this,arguments)},rm=globalThis&&globalThis.__assign||function(){return rm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},rm.apply(this,arguments)},om=globalThis&&globalThis.__assign||function(){return om=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},om.apply(this,arguments)},im=globalThis&&globalThis.__assign||function(){return im=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},im.apply(this,arguments)},am=globalThis&&globalThis.__assign||function(){return am=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},am.apply(this,arguments)},sm=globalThis&&globalThis.__assign||function(){return sm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},sm.apply(this,arguments)};const P_=O.div`
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
`,x0=()=>w.jsx(P_,{children:w.jsx(__,{height:"90",width:"90",radius:"9",color:"#407bff",ariaLabel:"three-dots-loading",visible:!0,timeout:2e3})});/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const lm="popstate";function C_(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return pc("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ya(o)}return T_(t,n,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $_(){return Math.random().toString(36).substr(2,8)}function um(e,t){return{usr:e.state,key:e.key,idx:t}}function pc(e,t,n,r){return n===void 0&&(n=null),oi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zr(t):t,{state:n,key:t&&t.key||r||$_()})}function Ya(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function T_(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=wn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(oi({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){s=wn.Pop;let x=f(),p=x==null?null:x-u;u=x,l&&l({action:s,location:m.location,delta:p})}function h(x,p){s=wn.Push;let d=pc(m.location,x,p);n&&n(d,x),u=f()+1;let y=um(d,u),b=m.createHref(d);try{a.pushState(y,"",b)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(b)}i&&l&&l({action:s,location:m.location,delta:1})}function v(x,p){s=wn.Replace;let d=pc(m.location,x,p);n&&n(d,x),u=f();let y=um(d,u),b=m.createHref(d);a.replaceState(y,"",b),i&&l&&l({action:s,location:m.location,delta:0})}function g(x){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof x=="string"?x:Ya(x);return ye(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let m={get action(){return s},get location(){return e(o,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(lm,c),l=x,()=>{o.removeEventListener(lm,c),l=null}},createHref(x){return t(o,x)},createURL:g,encodeLocation(x){let p=g(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(x){return a.go(x)}};return m}var cm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cm||(cm={}));function j_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Zr(t):t,o=ii(r.pathname||"/",n);if(o==null)return null;let i=w0(e);R_(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=U_(i[s],W_(o));return a}function w0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Rn([r,l.relativePath]),f=n.concat(l);i.children&&i.children.length>0&&(ye(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),w0(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:M_(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of b0(i.path))o(i,a,l)}),t}function b0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=b0(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function R_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:F_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const N_=/^:\w+$/,A_=3,L_=2,z_=1,I_=10,D_=-2,fm=e=>e==="*";function M_(e,t){let n=e.split("/"),r=n.length;return n.some(fm)&&(r+=D_),t&&(r+=L_),n.filter(o=>!fm(o)).reduce((o,i)=>o+(N_.test(i)?A_:i===""?z_:I_),r)}function F_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function U_(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=hc({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let c=s.route;i.push({params:r,pathname:Rn([o,f.pathname]),pathnameBase:Q_(Rn([o,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(o=Rn([o,f.pathnameBase]))}return i}function hc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=B_(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:h,isOptional:v}=f;if(h==="*"){let m=s[c]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const g=s[c];return v&&!g?u[h]=void 0:u[h]=V_(g||"",h),u},{}),pathname:i,pathnameBase:a,pattern:e}}function B_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function W_(e){try{return decodeURI(e)}catch(t){return sd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function V_(e,t){try{return decodeURIComponent(e)}catch(n){return sd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ii(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function H_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Zr(e):e;return{pathname:n?n.startsWith("/")?n:G_(n,t):t,search:Y_(r),hash:q_(o)}}function G_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Vl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function K_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function S0(e,t){let n=K_(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function k0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Zr(e):(o=oi({},e),ye(!o.pathname||!o.pathname.includes("?"),Vl("?","pathname","search",o)),ye(!o.pathname||!o.pathname.includes("#"),Vl("#","pathname","hash",o)),ye(!o.search||!o.search.includes("#"),Vl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else if(r){let c=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),c.pop();o.pathname=h.join("/")}s="/"+c.join("/")}else{let c=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),c-=1;o.pathname=h.join("/")}s=c>=0?t[c]:"/"}let l=H_(o,s),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Rn=e=>e.join("/").replace(/\/\/+/g,"/"),Q_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Y_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,q_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function X_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const E0=["post","put","patch","delete"];new Set(E0);const J_=["get",...E0];new Set(J_);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(this,arguments)}const qs=S.createContext(null),_0=S.createContext(null),Un=S.createContext(null),Xs=S.createContext(null),Bn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),O0=S.createContext(null);function Z_(e,t){let{relative:n}=t===void 0?{}:t;xi()||ye(!1);let{basename:r,navigator:o}=S.useContext(Un),{hash:i,pathname:a,search:s}=Js(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Rn([r,a])),o.createHref({pathname:l,search:s,hash:i})}function xi(){return S.useContext(Xs)!=null}function wi(){return xi()||ye(!1),S.useContext(Xs).location}function P0(e){S.useContext(Un).static||S.useLayoutEffect(e)}function eO(){let{isDataRoute:e}=S.useContext(Bn);return e?mO():tO()}function tO(){xi()||ye(!1);let e=S.useContext(qs),{basename:t,future:n,navigator:r}=S.useContext(Un),{matches:o}=S.useContext(Bn),{pathname:i}=wi(),a=JSON.stringify(S0(o,n.v7_relativeSplatPath)),s=S.useRef(!1);return P0(()=>{s.current=!0}),S.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=k0(u,JSON.parse(a),i,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Rn([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,a,i,e])}const nO=S.createContext(null);function rO(e){let t=S.useContext(Bn).outlet;return t&&S.createElement(nO.Provider,{value:e},t)}function Js(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Un),{matches:o}=S.useContext(Bn),{pathname:i}=wi(),a=JSON.stringify(S0(o,r.v7_relativeSplatPath));return S.useMemo(()=>k0(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function oO(e,t){return iO(e,t)}function iO(e,t,n,r){xi()||ye(!1);let{navigator:o}=S.useContext(Un),{matches:i}=S.useContext(Bn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=wi(),f;if(t){var c;let x=typeof t=="string"?Zr(t):t;l==="/"||(c=x.pathname)!=null&&c.startsWith(l)||ye(!1),f=x}else f=u;let h=f.pathname||"/",v=l==="/"?h:h.slice(l.length)||"/",g=j_(e,{pathname:v}),m=cO(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Rn([l,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Rn([l,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,r);return t&&m?S.createElement(Xs.Provider,{value:{location:ai({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:wn.Pop}},m):m}function aO(){let e=hO(),t=X_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,i)}const sO=S.createElement(aO,null);class lO extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Bn.Provider,{value:this.props.routeContext},S.createElement(O0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uO(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(qs);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Bn.Provider,{value:t},r)}function cO(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let f=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));f>=0||ye(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.loader&&c.route.id&&n.loaderData[c.route.id]===void 0&&(!n.errors||n.errors[c.route.id]===void 0)){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}return a.reduceRight((f,c,h)=>{let v,g=!1,m=null,x=null;n&&(v=s&&c.route.id?s[c.route.id]:void 0,m=c.route.errorElement||sO,l&&(u<0&&h===0?(gO("route-fallback",!1),g=!0,x=null):u===h&&(g=!0,x=c.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,h+1)),d=()=>{let y;return v?y=m:g?y=x:c.route.Component?y=S.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=f,S.createElement(uO,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?S.createElement(lO,{location:n.location,revalidation:n.revalidation,component:m,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var C0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(C0||{}),qa=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qa||{});function fO(e){let t=S.useContext(qs);return t||ye(!1),t}function dO(e){let t=S.useContext(_0);return t||ye(!1),t}function pO(e){let t=S.useContext(Bn);return t||ye(!1),t}function $0(e){let t=pO(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function hO(){var e;let t=S.useContext(O0),n=dO(qa.UseRouteError),r=$0(qa.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mO(){let{router:e}=fO(C0.UseNavigateStable),t=$0(qa.UseNavigateStable),n=S.useRef(!1);return P0(()=>{n.current=!0}),S.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ai({fromRouteId:t},i)))},[e,t])}const dm={};function gO(e,t,n){!t&&!dm[e]&&(dm[e]=!0)}function yO(e){return rO(e.context)}function dn(e){ye(!1)}function vO(e){let{basename:t="/",children:n=null,location:r,navigationType:o=wn.Pop,navigator:i,static:a=!1,future:s}=e;xi()&&ye(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:i,static:a,future:ai({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=Zr(r));let{pathname:f="/",search:c="",hash:h="",state:v=null,key:g="default"}=r,m=S.useMemo(()=>{let x=ii(f,l);return x==null?null:{location:{pathname:x,search:c,hash:h,state:v,key:g},navigationType:o}},[l,f,c,h,v,g,o]);return m==null?null:S.createElement(Un.Provider,{value:u},S.createElement(Xs.Provider,{children:n,value:m}))}function xO(e){let{children:t,location:n}=e;return oO(mc(t),n)}new Promise(()=>{});function mc(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let i=[...t,o];if(r.type===S.Fragment){n.push.apply(n,mc(r.props.children,i));return}r.type!==dn&&ye(!1),!r.props.index||!r.props.children||ye(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=mc(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xa.apply(this,arguments)}function T0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function wO(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bO(e,t){return e.button===0&&(!t||t==="_self")&&!wO(e)}const SO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],kO=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],EO=S.createContext({isTransitioning:!1}),_O="startTransition",pm=ql[_O];function OO(e){let{basename:t,children:n,future:r,window:o}=e,i=S.useRef();i.current==null&&(i.current=C_({window:o,v5Compat:!0}));let a=i.current,[s,l]=S.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=S.useCallback(c=>{u&&pm?pm(()=>l(c)):l(c)},[l,u]);return S.useLayoutEffect(()=>a.listen(f),[a,f]),S.createElement(vO,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const PO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$O=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,h=T0(t,SO),{basename:v}=S.useContext(Un),g,m=!1;if(typeof u=="string"&&CO.test(u)&&(g=u,PO))try{let y=new URL(window.location.href),b=u.startsWith("//")?new URL(y.protocol+u):new URL(u),k=ii(b.pathname,v);b.origin===y.origin&&k!=null?u=k+b.search+b.hash:m=!0}catch{}let x=Z_(u,{relative:o}),p=jO(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:o,unstable_viewTransition:c});function d(y){r&&r(y),y.defaultPrevented||p(y)}return S.createElement("a",Xa({},h,{href:g||x,onClick:m||i?r:d,ref:n,target:l}))}),gc=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:l,unstable_viewTransition:u,children:f}=t,c=T0(t,kO),h=Js(l,{relative:c.relative}),v=wi(),g=S.useContext(_0),{navigator:m}=S.useContext(Un),x=g!=null&&RO(h)&&u===!0,p=m.encodeLocation?m.encodeLocation(h).pathname:h.pathname,d=v.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(d=d.toLowerCase(),y=y?y.toLowerCase():null,p=p.toLowerCase());const b=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let k=d===p||!a&&d.startsWith(p)&&d.charAt(b)==="/",_=y!=null&&(y===p||!a&&y.startsWith(p)&&y.charAt(p.length)==="/"),C={isActive:k,isPending:_,isTransitioning:x},T=k?r:void 0,D;typeof i=="function"?D=i(C):D=[i,k?"active":null,_?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let L=typeof s=="function"?s(C):s;return S.createElement($O,Xa({},c,{"aria-current":T,className:D,ref:n,style:L,to:l,unstable_viewTransition:u}),typeof f=="function"?f(C):f)});var yc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yc||(yc={}));var hm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hm||(hm={}));function TO(e){let t=S.useContext(qs);return t||ye(!1),t}function jO(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=eO(),u=wi(),f=Js(e,{relative:a});return S.useCallback(c=>{if(bO(c,n)){c.preventDefault();let h=r!==void 0?r:Ya(u)===Ya(f);l(e,{replace:h,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s})}},[u,l,f,r,o,n,e,i,a,s])}function RO(e,t){t===void 0&&(t={});let n=S.useContext(EO);n==null&&ye(!1);let{basename:r}=TO(yc.useViewTransitionState),o=Js(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=ii(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=ii(n.nextLocation.pathname,r)||n.nextLocation.pathname;return hc(o.pathname,a)!=null||hc(o.pathname,i)!=null}const mm="/water-tracker/assets/Logo-890d13ba.png",gm=O.img`
  width: 102px;
  height: 48px;
`,NO=e=>e.auth.user,AO=e=>e.auth.isLoggedIn,LO=()=>{const e=vv(AO);return w.jsx("div",{children:e?w.jsx(gc,{to:"/home",children:w.jsx(gm,{src:mm,alt:"logo"})}):w.jsx(gc,{to:"/",children:w.jsx(gm,{src:mm,alt:"logo"})})})},zO=O.div`
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
`,IO=()=>w.jsx("header",{children:w.jsx(IE,{children:w.jsxs(zO,{children:[w.jsx(LO,{}),w.jsx(KP,{})]})})}),DO="/water-tracker/assets/bottleMob-814a9d12.png",MO="/water-tracker/assets/bottleMob@2x-17522dc3.png",FO="/water-tracker/assets/bottleTabl-c56ef88b.png",UO="/water-tracker/assets/bottleTabl@2x-5f20a434.png",BO="/water-tracker/assets/bottleDesc-5e7cc8f5.png",WO="/water-tracker/assets/bottleDesc@2x-cdf5cc76.png",hC=O.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
`,mC=O.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${DO}) 1x,
    url(${MO}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${FO}) 1x,
      url(${UO}) 2x
    );
    height: 386px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${BO}) 1x,
      url(${WO}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,gC=O.div`
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
`,VO=O.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }
`,HO=O.div`
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
`,GO=O.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ym=O.h3`
  margin-bottom: 16px;
  color: ${e=>e.theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,Wi=O.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
`,KO=O.div`
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
`,QO=O.form`
  gap: 16px;

  span {
    margin-right: 24px;
    font-size: 16px;
  }
`,vm=O.input`
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
`,Hl=O.input`
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
`,YO=O.div`
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
`,qO=O.button`
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
`,XO=({onClose:e})=>{const[t,n]=S.useState("female"),[r,o]=S.useState(""),[i,a]=S.useState(""),[s,l]=S.useState("2.0"),[u,f]=S.useState(""),c=()=>{const v=t==="female"?.03:.04,g=t==="female"?.4:.6,m=(r*v+i/60*g).toFixed(2);l(m)},h=async()=>{c()};return w.jsx(Ys,{onClose:e,title:"My daily norma",children:w.jsxs(VO,{children:[w.jsxs("div",{children:[w.jsxs(HO,{children:[w.jsxs(Wi,{children:["For girl: ",w.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),w.jsxs(Wi,{children:["For man: ",w.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),w.jsx(KO,{children:w.jsxs("p",{children:[w.jsx("span",{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),w.jsx("div",{children:w.jsxs(GO,{children:[w.jsxs(QO,{children:[w.jsx(ym,{children:"Calculate your rate:"}),w.jsxs("label",{children:[w.jsx(vm,{type:"radio",name:"gender",value:"female",checked:t==="female",onChange:()=>n("female")}),w.jsx("span",{children:"For girl"})]}),w.jsxs("label",{children:[w.jsx(vm,{type:"radio",name:"gender",value:"male",checked:t==="male",onChange:()=>n("male")}),w.jsx("span",{children:"For boy"})]})]}),w.jsxs("div",{children:[w.jsx(Wi,{children:"Your weight in kilograms:"}),w.jsx(Hl,{type:"text",placeholder:"0",value:r,onChange:v=>o(v.target.value)})]}),w.jsxs("div",{children:[w.jsx(Wi,{children:"Time of active participation in sports or other activities with a high physical load:"}),w.jsx(Hl,{type:"text",placeholder:"0",value:i,onChange:v=>a(v.target.value)})]}),w.jsxs(YO,{children:["The required amount of water in liters per day:"," ",w.jsxs("strong",{children:[s,"L"]})]}),w.jsxs("div",{children:[w.jsx(ym,{children:"Write down how much water you will drink:"}),w.jsx(Hl,{type:"text",placeholder:"0",value:u,onChange:v=>f(v.target.value)})]}),w.jsx(qO,{onClick:h,children:"Save"})]})})]})})};XO.propTypes={onClose:wo.func.isRequired};const yC=O.div`
  position: absolute;
  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
  transform: translate(-50% -50%);
  width: 280px;

  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
`,vC=O.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,xC=O.li`
  display: flex;
  gap: 6px;
`,wC=O.span`
  color: ${({theme:e})=>e.color.accent};
  font-size: 18px;
  font-weight: 500;
`,bC=O.p`
  color: ${({theme:e})=>e.color.accent};
`,SC=O.div`
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
`,kC=O.button`
  width: 14px;
  height: 14px;
  background: transparent;
  color: ${e=>e.active?e.theme.color.accent:e.theme.color.secondaryLightBlue};

  &:hover {
    color: ${e=>e.theme.color.accent};
  }
`,EC=O.div`
  display: flex;
  align-items: baseline;
  position: relative;
  color: ${e=>e.theme.color.accent};
  column-gap: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`,_C=O.p`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  font-size: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
  }
`,OC=O.div`
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
`,PC=O.div`
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
`,CC=O.button`
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
`;function ar(e){this._maxSize=e,this.clear()}ar.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ar.prototype.get=function(e){return this._values[e]};ar.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var JO=/[^.^\]^[]+|(?=\[\]|\.\.)/g,j0=/^\d+$/,ZO=/^\d/,eP=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,tP=/^\s*(['"]?)(.*?)(\1)\s*$/,ld=512,xm=new ar(ld),wm=new ar(ld),bm=new ar(ld),R0={Cache:ar,split:vc,normalizePath:Gl,setter:function(e){var t=Gl(e);return wm.get(e)||wm.set(e,function(r,o){for(var i=0,a=t.length,s=r;i<a-1;){var l=t[i];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;s=s[t[i++]]}s[t[i]]=o})},getter:function(e,t){var n=Gl(e);return bm.get(e)||bm.set(e,function(o){for(var i=0,a=n.length;i<a;)if(o!=null||!t)o=o[n[i++]];else return;return o})},join:function(e){return e.reduce(function(t,n){return t+(ud(n)||j0.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){nP(Array.isArray(e)?e:vc(e),t,n)}};function Gl(e){return xm.get(e)||xm.set(e,vc(e).map(function(t){return t.replace(tP,"$2")}))}function vc(e){return e.match(JO)||[""]}function nP(e,t,n){var r=e.length,o,i,a,s;for(i=0;i<r;i++)o=e[i],o&&(iP(o)&&(o='"'+o+'"'),s=ud(o),a=!s&&/^\d+$/.test(o),t.call(n,o,s,a,i,e))}function ud(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function rP(e){return e.match(ZO)&&!e.match(j0)}function oP(e){return eP.test(e)}function iP(e){return!ud(e)&&(rP(e)||oP(e))}var N0={exports:{}};N0.exports=function(e){return A0(aP(e),e)};N0.exports.array=A0;function A0(e,t){var n=e.length,r=new Array(n),o={},i=n,a=sP(t),s=lP(e);for(t.forEach(function(u){if(!s.has(u[0])||!s.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)o[i]||l(e[i],i,new Set);return r;function l(u,f,c){if(c.has(u)){var h;try{h=", node was:"+JSON.stringify(u)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!s.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!o[f]){o[f]=!0;var v=a.get(u)||new Set;if(v=Array.from(v),f=v.length){c.add(u);do{var g=v[--f];l(g,s.get(g),c)}while(f);c.delete(u)}r[--n]=u}}}function aP(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}function sP(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function lP(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}const uP=Object.prototype.toString,cP=Error.prototype.toString,fP=RegExp.prototype.toString,dP=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",pP=/^Symbol\((.*)\)(.*)$/;function hP(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Sm(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return hP(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return dP.call(e).replace(pP,"Symbol($1)");const r=uP.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+cP.call(e)+"]":r==="RegExp"?fP.call(e):null}function Nn(e,t){let n=Sm(e,t);return n!==null?n:JSON.stringify(e,function(r,o){let i=Sm(this[r],t);return i!==null?i:o},2)}function L0(e){return e==null?[]:[].concat(e)}let z0,mP=/\$\{\s*(\w+)\s*\}/g;z0=Symbol.toStringTag;class Je extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(mP,(o,i)=>Nn(n[i])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,o,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[z0]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=o,this.errors=[],this.inner=[],L0(t).forEach(a=>{if(Je.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!i&&Error.captureStackTrace&&Error.captureStackTrace(this,Je)}}let Kt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=r!=null&&r!==n?` (cast from the value \`${Nn(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Nn(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${Nn(n,!0)}\``+o}},gP={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},yP={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},xc={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},vP={isValue:"${path} field must be ${value}"},xP={noUnknown:"${path} field has unspecified keys: ${unknown}"},wP={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},bP={notType:e=>{const{path:t,value:n,spec:r}=e,o=r.types.length;if(Array.isArray(n)){if(n.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${Nn(n,!0)}\``;if(n.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${Nn(n,!0)}\``}return Je.formatError(Kt.notType,e)}};Object.assign(Object.create(null),{mixed:Kt,string:gP,number:yP,date:xc,object:xP,array:wP,boolean:vP,tuple:bP});const I0=e=>e&&e.__isYupSchema__;class Ja{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:o,otherwise:i}=n,a=typeof r=="function"?r:(...s)=>s.every(l=>l===r);return new Ja(t,(s,l)=>{var u;let f=a(...s)?o:i;return(u=f==null?void 0:f(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(i=>i.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),o=this.fn(r,t,n);if(o===void 0||o===t)return t;if(!I0(o))throw new TypeError("conditions must return a schema object");return o.resolve(n)}}const Vi={context:"$",value:"."};class bi{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Vi.context,this.isValue=this.key[0]===Vi.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Vi.context:this.isValue?Vi.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&R0.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let o=this.isContext?r:this.isValue?t:n;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}bi.prototype.__isYupRef=!0;const D0=e=>e==null;function lr(e){function t({value:n,path:r="",options:o,originalValue:i,schema:a},s,l){const{name:u,test:f,params:c,message:h,skipAbsent:v}=e;let{parent:g,context:m,abortEarly:x=a.spec.abortEarly,disableStackTrace:p=a.spec.disableStackTrace}=o;function d(B){return bi.isRef(B)?B.getValue(n,g,m):B}function y(B={}){var he;const le=Object.assign({value:n,originalValue:i,label:a.spec.label,path:B.path||r,spec:a.spec},c,B.params);for(const ke of Object.keys(le))le[ke]=d(le[ke]);const Ie=new Je(Je.formatError(B.message||h,le),n,le.path,B.type||u,(he=B.disableStackTrace)!=null?he:p);return Ie.params=le,Ie}const b=x?s:l;let k={path:r,parent:g,type:u,from:o.from,createError:y,resolve:d,options:o,originalValue:i,schema:a};const _=B=>{Je.isError(B)?b(B):B?l(null):b(y())},C=B=>{Je.isError(B)?b(B):s(B)};if(v&&D0(n))return _(!0);let D;try{var L;if(D=f.call(k,n,k),typeof((L=D)==null?void 0:L.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${k.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(D).then(_,C)}}catch(B){C(B);return}_(D)}return t.OPTIONS=e,t}function SP(e,t,n,r=n){let o,i,a;return t?(R0.forEach(t,(s,l,u)=>{let f=l?s.slice(1,s.length-1):s;e=e.resolve({context:r,parent:o,value:n});let c=e.type==="tuple",h=u?parseInt(f,10):0;if(e.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&h>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[h],e=c?e.spec.types[h]:e.innerType}if(!u){if(!e.fields||!e.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);o=n,n=n&&n[f],e=e.fields[f]}i=f,a=l?"["+s+"]":"."+s}),{schema:e,parent:o,parentPath:i}):{parent:o,parentPath:t,schema:e}}class Za extends Set{describe(){const t=[];for(const n of this.values())t.push(bi.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Za(this.values())}merge(t,n){const r=this.clone();return t.forEach(o=>r.add(o)),n.forEach(o=>r.delete(o)),r}}function kr(e,t=new Map){if(I0(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=kr(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,kr(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(kr(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=kr(o,t)}else throw Error(`Unable to clone ${e}`);return n}class rr{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Za,this._blacklist=new Za,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Kt.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=kr(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const o=Object.assign({},n.spec,r.spec);return r.spec=o,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(i=>{t.tests.forEach(a=>{i.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((o,i)=>i.resolve(o,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,o,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(i=t.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),o=n.assert==="ignore-optionality",i=r._cast(t,n);if(n.assert!==!1&&!r.isType(i)){if(o&&D0(i))return i;let a=Nn(t),s=Nn(i);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return i}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((o,i)=>i.call(this,o,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,o){let{path:i,originalValue:a=t,strict:s=this.spec.strict}=n,l=t;s||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let f of Object.values(this.internalTests))f&&u.push(f);this.runTests({path:i,value:l,originalValue:a,options:n,tests:u},r,f=>{if(f.length)return o(f,l);this.runTests({path:i,value:l,originalValue:a,options:n,tests:this.tests},r,o)})}runTests(t,n,r){let o=!1,{tests:i,value:a,originalValue:s,path:l,options:u}=t,f=m=>{o||(o=!0,n(m,a))},c=m=>{o||(o=!0,r(m,a))},h=i.length,v=[];if(!h)return c([]);let g={value:a,originalValue:s,path:l,options:u,schema:this};for(let m=0;m<i.length;m++){const x=i[m];x(g,f,function(d){d&&(Array.isArray(d)?v.push(...d):v.push(d)),--h<=0&&c(v)})}}asNestedTest({key:t,index:n,parent:r,parentPath:o,originalParent:i,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof s=="number";let u=r[s];const f=Object.assign({},a,{strict:!0,parent:r,value:u,originalValue:i[s],key:void 0,[l?"index":"key"]:s,path:l||s.includes(".")?`${o||""}[${u?s:`"${s}"`}]`:(o?`${o}.`:"")+t});return(c,h,v)=>this.resolve(f)._validate(u,f,h,v)}validate(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return new Promise((a,s)=>o._validate(t,n,(l,u)=>{Je.isError(l)&&(l.value=u),s(l)},(l,u)=>{l.length?s(new Je(l,u,void 0,void 0,i)):a(u)}))}validateSync(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),i,a=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return o._validate(t,Object.assign({},n,{sync:!0}),(s,l)=>{throw Je.isError(s)&&(s.value=l),s},(s,l)=>{if(s.length)throw new Je(s,t,void 0,void 0,a);i=l}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(Je.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(Je.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):kr(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=lr({message:n,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=lr({message:n,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Kt.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Kt.notNull){return this.nullability(!1,t)}required(t=Kt.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Kt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),o=lr(n),i=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(i||a.OPTIONS.test===o.OPTIONS.test))),r.tests.push(o),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),o=L0(t).map(i=>new bi(i));return o.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof n=="function"?new Ja(o,n):Ja.fromOptions(o,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=lr({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Kt.oneOf){let r=this.clone();return t.forEach(o=>{r._whitelist.add(o),r._blacklist.delete(o)}),r.internalTests.whiteList=lr({message:n,name:"oneOf",skipAbsent:!0,test(o){let i=this.schema._whitelist,a=i.resolveAll(this.resolve);return a.includes(o)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:a}})}}),r}notOneOf(t,n=Kt.notOneOf){let r=this.clone();return t.forEach(o=>{r._blacklist.add(o),r._whitelist.delete(o)}),r.internalTests.blacklist=lr({message:n,name:"notOneOf",test(o){let i=this.schema._blacklist,a=i.resolveAll(this.resolve);return a.includes(o)?this.createError({params:{values:Array.from(i).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:o,optional:i,nullable:a}=n.spec;return{meta:o,label:r,optional:i,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,f)=>f.findIndex(c=>c.name===l.name)===u)}}}rr.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])rr.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:i,schema:a}=SP(this,t,n,r.context);return a[e](o&&o[i],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])rr.prototype[e]=rr.prototype.oneOf;for(const e of["not","nope"])rr.prototype[e]=rr.prototype.notOneOf;const kP=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Ht(e,t=0){return Number(e)||t}function EP(e){const t=kP.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:Ht(t[1]),month:Ht(t[2],1)-1,day:Ht(t[3],1),hour:Ht(t[4]),minute:Ht(t[5]),second:Ht(t[6]),millisecond:t[7]?Ht(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:Ht(t[10]),minuteOffset:Ht(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let _P=new Date(""),OP=e=>Object.prototype.toString.call(e)==="[object Date]";class cd extends rr{constructor(){super({type:"date",check(t){return OP(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=EP(t),isNaN(t)?cd.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(bi.isRef(t))r=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=o}return r}min(t,n=xc.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(r)}})}max(t,n=xc.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(r)}})}}cd.INVALID_DATE=_P;const $C=O.div`
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
`,TC=O.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
  margin-bottom: 12px;
`,jC=O.div`
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
`,RC=O.button`
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
`,NC=O.svg`
  width: 24px;
  height: 24px;
  stroke: ${e=>e.theme.color.accent};
`,AC=O.div`
  margin-bottom: 24px;
`,LC=O.input`
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
`,zC=O.div`
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
`,IC=O.button`
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
`,DC=O.div`
  margin-bottom: 24px;
`,MC=O.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid #d7e3ff;
`,FC=O.div`
  display: flex;
  align-items: center;
`,UC=O.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,BC=O.ul`
  height: 212px;
  overflow: auto;
`,WC=O.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #407bff;
  margin-right: 16px;
`,VC=O.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: #2f2f2f;
`,HC=O.svg`
  width: 26px;
  height: 26px;
  margin-right: 12px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,GC=O.div`
  display: flex;
  gap: 18px;
`,KC=O.button`
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
`,QC=O.button`
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
`,YC=O.button`
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
`,qC=O.div`
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
`,XC=O.input`
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
`,JC=O.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.accent};
`,ZC=O.div`
  position: relative;
  height: 102px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 356px;
    height: 90px;
  }
`,e$=O.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,t$=O.span`
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
`,n$=O.span`
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
`,r$=O.span`
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
`,o$=O.button`
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
`,i$=O.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${e=>e.theme.color.white};
`,PP=O.input`
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
`,fd=O.p`
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,km=O.label`
  display: inline-block;
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,CP=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,M0=O.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,Kl=O.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,Ql=O.div`
  position: relative;
  margin-top: 8px;
`,ur=O(M0)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`,$P=O.button`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  border: none;
  background-color: transparent;
  padding: 0;
`,TP=O.span`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`,Em=O.div`
  margin-bottom: 24px;
`,_m=O.div`
  margin-bottom: 12px;
`,jP=O(fd)`
  margin-bottom: 12px;
`,Om=O.input`
  border: 1px solid ${e=>e.theme.color.accent};
  width: 14px;
  height: 14px;

  &:checked {
    color: ${e=>e.theme.color.accent};
  }
`,RP=O.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,Pm=O.span`
  margin-left: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,Cm=O.label`
  display: flex;
  align-items: center;
`,NP=O.img`
  border-radius: 60%;
`,ho=O.input`
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
`,AP=O.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 32px;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.color.white};

  @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`,LP=O(fd)`
  margin-bottom: 12px;
`,Yl=O.label`
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,zP=O.button`
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
`,IP=O.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
`,$m=O.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 392px;
  }
`,Tm=O.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 0px;
  }
`,DP=O.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 52px;
  }
`;O(a0)`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    max-width: 1008px;
  }
`;const MP="src/assets/images/default_avatar_to_download.jpg",FP=({onClose:e})=>{const[t,n]=S.useState(),[r,o]=S.useState(),[i,a]=S.useState("girl"),[s,l]=S.useState(""),[u,f]=S.useState(""),[c,h]=S.useState(""),[v,g]=S.useState(""),[m,x]=S.useState(""),[p,d]=S.useState(!1),y=S.useRef(null),b=()=>{y.current.click()},k=()=>{d(_=>!_)};return S.useEffect(()=>{if(!t)return;const _=URL.createObjectURL(t[0]);return o(_),()=>{URL.revokeObjectURL(_)}},[t]),w.jsx(w.Fragment,{children:w.jsx(Ys,{onClose:e,title:"Setting",children:w.jsx(AP,{children:w.jsxs("form",{children:[w.jsxs(Em,{children:[w.jsx(fd,{children:"Your photo"}),w.jsxs(CP,{children:[w.jsx(NP,{src:r||MP,alt:"user avatar",width:"80px",height:"80px"}),w.jsxs("label",{children:[w.jsx(PP,{ref:y,type:"file",name:"avatar",accept:"image/png, image/jpeg",onChange:_=>{_.target.files&&_.target.files.length>0&&n(_.target.files)}}),w.jsxs($P,{type:"button",onClick:b,children:[w.jsx(M0,{children:w.jsx("use",{href:`${Ot}#icon-arrow-up`})}),w.jsx(TP,{children:"Upload a photo"})]})]})]})]}),w.jsxs(IP,{children:[w.jsxs($m,{children:[w.jsxs(DP,{children:[w.jsx(jP,{children:"Your gender identity"}),w.jsxs(RP,{children:[w.jsxs(Cm,{children:[w.jsx(Om,{type:"radio",name:"gender",value:"Girl",checked:i==="Girl",onChange:_=>a(_.target.value)}),w.jsx(Pm,{children:"Girl"})]}),w.jsxs(Cm,{children:[w.jsx(Om,{type:"radio",name:"gender",value:"Man",checked:i==="Man",onChange:_=>a(_.target.value)}),w.jsx(Pm,{children:"Man"})]})]})]}),w.jsxs(Em,{children:[w.jsx(km,{htmlFor:"username",children:"Your name"}),w.jsx(ho,{type:"text",id:"username",name:"username",value:s,placeholder:s,onChange:_=>l(_.target.value)})]}),w.jsxs(Tm,{children:[w.jsx(km,{htmlFor:"email",children:"E-mail"}),w.jsx(ho,{type:"email",id:"email",name:"email",value:u,placeholder:u,onChange:_=>f(_.target.value)})]})]}),w.jsxs($m,{children:[w.jsx(LP,{children:"Password"}),w.jsxs(_m,{children:[w.jsx(Yl,{htmlFor:"oldPassword",children:"Outdated password:"}),w.jsxs(Ql,{children:[w.jsx(ho,{type:p?"text":"password",id:"oldPassword",name:"oldPassword",value:c,placeholder:"Password",onChange:_=>h(_.target.value)}),w.jsx(Kl,{type:"button",onClick:k,children:p?w.jsx(ur,{children:w.jsx("use",{href:`${Ot}#icon-to-open`})}):w.jsx(ur,{children:w.jsx("use",{href:`${Ot}#icon-to-hide`})})})]})]}),w.jsxs(_m,{children:[w.jsx(Yl,{htmlFor:"password",children:"New Password:"}),w.jsxs(Ql,{children:[w.jsx(ho,{type:p?"text":"password",id:"password",name:"newPassword",value:v,placeholder:"Password",onChange:_=>g(_.target.value)}),w.jsx(Kl,{type:"button",onClick:k,children:p?w.jsx(ur,{children:w.jsx("use",{href:`${Ot}#icon-to-open`})}):w.jsx(ur,{children:w.jsx("use",{href:`${Ot}#icon-to-hide`})})})]})]}),w.jsxs(Tm,{children:[w.jsx(Yl,{htmlFor:"repeatedPassword",children:"Repeat new password:"}),w.jsxs(Ql,{children:[w.jsx(ho,{type:p?"text":"password",id:"repeatedPassword",name:"repeatedPassword",value:m,placeholder:"Password",onChange:_=>x(_.target.value)}),w.jsx(Kl,{type:"button",onClick:k,children:p?w.jsx(ur,{children:w.jsx("use",{href:`${Ot}#icon-to-open`})}):w.jsx(ur,{children:w.jsx("use",{href:`${Ot}#icon-to-hide`})})})]})]})]})]}),w.jsx(zP,{type:"submit",children:"Save"})]})})})})};O.button`
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
`;const UP=O.div`
  position: relative;
  display: flex; 
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`,BP=O.p`
  font-size: 18px;
  line-height: 1.33em;

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`,WP=O.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  padding: 0;
`,VP=O.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`,HP=O.span`
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
`,GP=O.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.accent};
  fill: transparent;

  &:hover,
  &:focus {
    color: ${e=>e.theme.color.accent};
  }
`,KP=()=>{const[e,t]=S.useState(!1),{userName:n,avatarURL:r}=vv(NO),o=()=>{t(!e)},i=n?n.charAt(0).toUpperCase():"V",a=()=>n&&r?{name:n,avatar:r}:n?{name:n,avatar:i}:{name:i,avatar:i},{name:s,avatar:l}=a();return w.jsxs(UP,{children:[w.jsx(BP,{children:s}),w.jsxs(WP,{onClick:o,children:[r?w.jsx(VP,{src:l,alt:""}):w.jsx(HP,{children:l}),w.jsx(GP,{children:w.jsx("use",{href:`${Ot}#icon-arrow-down`})})]}),e&&w.jsx(YP,{})]})},QP=O.div`
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
`,jm=O.svg`
  margin-right: 8px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,Rm=O.button`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  background-color: transparent;
  padding: 0;
`,Nm=O.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,YP=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)},a=()=>{r(!0)},s=()=>{r(!1)};return w.jsx(w.Fragment,{children:w.jsx(QP,{children:w.jsxs("ul",{children:[w.jsxs(Nm,{children:[w.jsx(jm,{width:"16px",height:"16px",children:w.jsx("use",{href:`${Ot}#icon-settings`})}),w.jsxs(Rm,{type:"button",onClick:o,children:["Setting",e&&w.jsx(FP,{onClose:i})]})]}),w.jsxs(Nm,{children:[w.jsx(jm,{width:"16px",height:"16px",children:w.jsx("use",{href:`${Ot}#icon-exit`})}),w.jsxs(Rm,{type:"button",onClick:a,children:["Log out",n&&w.jsx(tC,{onClose:s})]})]})]})})})},qP=O.h2`
  margin-bottom: 24px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
`,XP=O.button`
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
`,JP=O.button`
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
`,ZP=O.ul`
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
`,eC=O.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`,tC=({onClose:e})=>{const t=aS();return w.jsx(w.Fragment,{children:w.jsx(Ys,{onClose:e,title:"Log out",children:w.jsxs(eC,{children:[w.jsx(qP,{children:"Do you really want to leave?"}),w.jsxs(ZP,{children:[w.jsx("li",{children:w.jsx(JP,{type:"button",onClick:e,children:"Cancel"})}),w.jsx("li",{children:w.jsx(XP,{type:"button",onClick:()=>t(e0()),children:"Log out"})})]})]})})})},a$=O.img`
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
`,s$=O.img`
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
`,l$=O.div`
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
`,u$=O.label`
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
`,c$=O.input`
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
`,f$=O.svg`
  width: 16px;
  height: 16px;
  border: 1px;
  stroke: ${e=>e.theme.color.accent};
  fill: ${e=>e.theme.color.white};
  position: absolute;
  right: 10px;
  top: 38px;
`,d$=O(gc)` 
  width: 100%;
  font-size: 16px;
  font-style: normal; 
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
    &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }`,p$=O.div`
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
`,h$=O.h1`
  display: none;
`,m$=O.h2`
  font-weight: 700;
  font-size: 28px;
  color: ${({theme:e})=>e.color.black};
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`,g$=O.p`
  font-size: 24px;
  color: ${({theme:e})=>e.color.black};
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`,y$=O.ul`
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
`,v$=O.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,x$=O.div`
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
`,w$=O.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`,b$=O.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  line-height: 20px;
  margin-bottom: 12px;
`,S$=O.button`
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
`,k$=O.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  margin-bottom: 12px;
`,E$=O.li`
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
`,_$=O.div`
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
`,O$=O.ul`
  list-style-type: none;
  padding-left: 0;
`,nC="modulepreload",rC=function(e){return"/water-tracker/"+e},Am={},eo=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=rC(i),i in Am)return;Am[i]=!0;const a=i.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let f=o.length-1;f>=0;f--){const c=o[f];if(c.href===i&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":nC,a||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),a)return new Promise((f,c)=>{u.addEventListener("load",f),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},oC=({component:e,redirectTo:t="/home"})=>w.jsx(e,{}),Hi=({component:e,redirectTo:t="/"})=>e,iC=()=>w.jsxs(w.Fragment,{children:[w.jsx(IO,{}),w.jsx("main",{children:w.jsx(S.Suspense,{fallback:w.jsx(x0,{}),children:w.jsx(yO,{})})})]}),aC=S.lazy(()=>eo(()=>import("./Welcome-545dbc39.js"),["assets/Welcome-545dbc39.js","assets/Section-d88c2b9f.js"])),sC=S.lazy(()=>eo(()=>import("./Home-c05e4723.js"),["assets/Home-c05e4723.js","assets/Section-d88c2b9f.js"])),lC=S.lazy(()=>eo(()=>import("./SignIn-177f474b.js"),["assets/SignIn-177f474b.js","assets/Section-d88c2b9f.js"])),uC=S.lazy(()=>eo(()=>import("./SignUp-c503cf96.js"),["assets/SignUp-c503cf96.js","assets/Section-d88c2b9f.js"])),cC=S.lazy(()=>eo(()=>import("./Error-7b03a8b2.js"),["assets/Error-7b03a8b2.js","assets/Section-d88c2b9f.js"])),fC=S.lazy(()=>eo(()=>import("./ForgotPassword-6460379a.js"),["assets/ForgotPassword-6460379a.js","assets/Section-d88c2b9f.js"])),dC=()=>w.jsx(xO,{children:w.jsxs(dn,{path:"/",element:w.jsx(iC,{}),children:[w.jsx(dn,{index:!0,element:w.jsx(Hi,{component:w.jsx(aC,{}),redirectTo:"/home"})}),w.jsx(dn,{path:"home",element:w.jsx(oC,{component:sC})}),w.jsx(dn,{path:"signin",element:w.jsx(Hi,{component:w.jsx(lC,{}),redirectTo:"/home"})}),w.jsx(dn,{path:"signup",element:w.jsx(Hi,{component:w.jsx(uC,{}),redirectTo:"/home"})}),w.jsx(dn,{path:"forgot-password",element:w.jsx(Hi,{component:w.jsx(fC,{}),redirectTo:"/signin"})}),w.jsx(dn,{path:"*",element:w.jsx(cC,{})})]})}),pC=eu.createRoot(document.getElementById("root"));pC.render(w.jsx(Ne.StrictMode,{children:w.jsxs(ag,{theme:ac,children:[w.jsx(sg,{styles:bE}),w.jsx(rS,{store:t0,children:w.jsx(bv,{loading:w.jsx(x0,{}),persistor:mE,children:w.jsx(OO,{basename:"/water-tracker",children:w.jsx(dC,{})})})})]})}));export{GC as $,Ys as A,b$ as B,$C as C,hC as D,jC as E,TC as F,RC as G,h$ as H,v$ as I,NC as J,AC as K,O$ as L,LC as M,zC as N,IC as O,g$ as P,DC as Q,UC as R,BC as S,x$ as T,MC as U,FC as V,p$ as W,HC as X,_C as Y,WC as Z,VC as _,m$ as a,KC as a0,QC as a1,YC as a2,qC as a3,ZC as a4,JC as a5,XC as a6,e$ as a7,n$ as a8,t$ as a9,r$ as aa,o$ as ab,i$ as ac,aS as ad,a$ as ae,s$ as af,l$ as ag,u$ as ah,c$ as ai,f$ as aj,d$ as ak,Z2 as al,IE as am,y$ as b,w$ as c,S$ as d,_$ as e,k$ as f,E$ as g,gC as h,XO as i,w as j,mC as k,yC as l,vC as m,O as n,xC as o,bC as p,wC as q,S as r,Ot as s,SC as t,eO as u,EC as v,kC as w,OC as x,PC as y,CC as z};
