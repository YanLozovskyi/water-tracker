function Lw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Oi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zw(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Hy={exports:{}},qs={},Gy={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),Dw=Symbol.for("react.portal"),Mw=Symbol.for("react.fragment"),Uw=Symbol.for("react.strict_mode"),Bw=Symbol.for("react.profiler"),Vw=Symbol.for("react.provider"),Ww=Symbol.for("react.context"),Hw=Symbol.for("react.forward_ref"),Gw=Symbol.for("react.suspense"),Kw=Symbol.for("react.memo"),qw=Symbol.for("react.lazy"),Vp=Symbol.iterator;function Yw(e){return e===null||typeof e!="object"?null:(e=Vp&&e[Vp]||e["@@iterator"],typeof e=="function"?e:null)}var Ky={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qy=Object.assign,Yy={};function $i(e,t,n){this.props=e,this.context=t,this.refs=Yy,this.updater=n||Ky}$i.prototype.isReactComponent={};$i.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qy(){}Qy.prototype=$i.prototype;function Ff(e,t,n){this.props=e,this.context=t,this.refs=Yy,this.updater=n||Ky}var Nf=Ff.prototype=new Qy;Nf.constructor=Ff;qy(Nf,$i.prototype);Nf.isPureReactComponent=!0;var Wp=Array.isArray,Xy=Object.prototype.hasOwnProperty,If={current:null},Jy={key:!0,ref:!0,__self:!0,__source:!0};function Zy(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Xy.call(t,r)&&!Jy.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Xo,type:e,key:o,ref:a,props:i,_owner:If.current}}function Qw(e,t){return{$$typeof:Xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xo}function Xw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hp=/\/+/g;function nu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xw(""+e.key):t.toString(36)}function La(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xo:case Dw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+nu(a,0):r,Wp(i)?(n="",e!=null&&(n=e.replace(Hp,"$&/")+"/"),La(i,t,n,"",function(u){return u})):i!=null&&(Lf(i)&&(i=Qw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Hp,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Wp(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+nu(o,s);a+=La(o,t,n,l,i)}else if(l=Yw(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+nu(o,s++),a+=La(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function da(e,t,n){if(e==null)return e;var r=[],i=0;return La(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Jw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},za={transition:null},Zw={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:za,ReactCurrentOwner:If};X.Children={map:da,forEach:function(e,t,n){da(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return da(e,function(){t++}),t},toArray:function(e){return da(e,function(t){return t})||[]},only:function(e){if(!Lf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=$i;X.Fragment=Mw;X.Profiler=Bw;X.PureComponent=Ff;X.StrictMode=Uw;X.Suspense=Gw;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zw;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qy({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=If.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Xy.call(t,l)&&!Jy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Xo,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:Ww,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vw,_context:e},e.Consumer=e};X.createElement=Zy;X.createFactory=function(e){var t=Zy.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:Hw,render:e}};X.isValidElement=Lf;X.lazy=function(e){return{$$typeof:qw,_payload:{_status:-1,_result:e},_init:Jw}};X.memo=function(e,t){return{$$typeof:Kw,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=za.transition;za.transition={};try{e()}finally{za.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return ot.current.useCallback(e,t)};X.useContext=function(e){return ot.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};X.useEffect=function(e,t){return ot.current.useEffect(e,t)};X.useId=function(){return ot.current.useId()};X.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return ot.current.useMemo(e,t)};X.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};X.useRef=function(e){return ot.current.useRef(e)};X.useState=function(e){return ot.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return ot.current.useTransition()};X.version="18.2.0";Gy.exports=X;var w=Gy.exports;const He=Oi(w),nc=Lw({__proto__:null,default:He},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eb=w,tb=Symbol.for("react.element"),nb=Symbol.for("react.fragment"),rb=Object.prototype.hasOwnProperty,ib=eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ob={key:!0,ref:!0,__self:!0,__source:!0};function e0(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)rb.call(t,r)&&!ob.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:tb,type:e,key:o,ref:a,props:i,_owner:ib.current}}qs.Fragment=nb;qs.jsx=e0;qs.jsxs=e0;Hy.exports=qs;var b=Hy.exports;function ab(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function sb(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var lb=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(sb(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ab(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ze="-ms-",us="-moz-",ae="-webkit-",t0="comm",zf="rule",Df="decl",ub="@import",n0="@keyframes",cb="@layer",fb=Math.abs,Ys=String.fromCharCode,db=Object.assign;function pb(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function r0(e){return e.trim()}function hb(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function rc(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function vo(e,t,n){return e.slice(t,n)}function Kt(e){return e.length}function Mf(e){return e.length}function pa(e,t){return t.push(e),e}function mb(e,t){return e.map(t).join("")}var Qs=1,di=1,i0=0,pt=0,Re=0,Ti="";function Xs(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Qs,column:di,length:a,return:""}}function Mi(e,t){return db(Xs("",null,null,"",null,null,0),e,{length:-e.length},t)}function gb(){return Re}function yb(){return Re=pt>0?Ke(Ti,--pt):0,di--,Re===10&&(di=1,Qs--),Re}function gt(){return Re=pt<i0?Ke(Ti,pt++):0,di++,Re===10&&(di=1,Qs++),Re}function Xt(){return Ke(Ti,pt)}function Da(){return pt}function Jo(e,t){return vo(Ti,e,t)}function xo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function o0(e){return Qs=di=1,i0=Kt(Ti=e),pt=0,[]}function a0(e){return Ti="",e}function Ma(e){return r0(Jo(pt-1,ic(e===91?e+2:e===40?e+1:e)))}function vb(e){for(;(Re=Xt())&&Re<33;)gt();return xo(e)>2||xo(Re)>3?"":" "}function xb(e,t){for(;--t&&gt()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return Jo(e,Da()+(t<6&&Xt()==32&&gt()==32))}function ic(e){for(;gt();)switch(Re){case e:return pt;case 34:case 39:e!==34&&e!==39&&ic(Re);break;case 40:e===41&&ic(e);break;case 92:gt();break}return pt}function wb(e,t){for(;gt()&&e+Re!==47+10;)if(e+Re===42+42&&Xt()===47)break;return"/*"+Jo(t,pt-1)+"*"+Ys(e===47?e:gt())}function bb(e){for(;!xo(Xt());)gt();return Jo(e,pt)}function Sb(e){return a0(Ua("",null,null,null,[""],e=o0(e),0,[0],e))}function Ua(e,t,n,r,i,o,a,s,l){for(var u=0,f=0,c=a,d=0,v=0,g=0,m=1,x=1,h=1,p=0,y="",S=i,E=o,T=r,O=y;x;)switch(g=p,p=gt()){case 40:if(g!=108&&Ke(O,c-1)==58){rc(O+=se(Ma(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:O+=Ma(p);break;case 9:case 10:case 13:case 32:O+=vb(g);break;case 92:O+=xb(Da()-1,7);continue;case 47:switch(Xt()){case 42:case 47:pa(Eb(wb(gt(),Da()),t,n),l);break;default:O+="/"}break;case 123*m:s[u++]=Kt(O)*h;case 125*m:case 59:case 0:switch(p){case 0:case 125:x=0;case 59+f:h==-1&&(O=se(O,/\f/g,"")),v>0&&Kt(O)-c&&pa(v>32?Kp(O+";",r,n,c-1):Kp(se(O," ","")+";",r,n,c-2),l);break;case 59:O+=";";default:if(pa(T=Gp(O,t,n,u,f,i,s,y,S=[],E=[],c),o),p===123)if(f===0)Ua(O,t,T,T,S,o,c,s,E);else switch(d===99&&Ke(O,3)===110?100:d){case 100:case 108:case 109:case 115:Ua(e,T,T,r&&pa(Gp(e,T,T,0,0,i,s,y,i,S=[],c),E),i,E,c,s,r?S:E);break;default:Ua(O,T,T,T,[""],E,0,s,E)}}u=f=v=0,m=h=1,y=O="",c=a;break;case 58:c=1+Kt(O),v=g;default:if(m<1){if(p==123)--m;else if(p==125&&m++==0&&yb()==125)continue}switch(O+=Ys(p),p*m){case 38:h=f>0?1:(O+="\f",-1);break;case 44:s[u++]=(Kt(O)-1)*h,h=1;break;case 64:Xt()===45&&(O+=Ma(gt())),d=Xt(),f=c=Kt(y=O+=bb(Da())),p++;break;case 45:g===45&&Kt(O)==2&&(m=0)}}return o}function Gp(e,t,n,r,i,o,a,s,l,u,f){for(var c=i-1,d=i===0?o:[""],v=Mf(d),g=0,m=0,x=0;g<r;++g)for(var h=0,p=vo(e,c+1,c=fb(m=a[g])),y=e;h<v;++h)(y=r0(m>0?d[h]+" "+p:se(p,/&\f/g,d[h])))&&(l[x++]=y);return Xs(e,t,n,i===0?zf:s,l,u,f)}function Eb(e,t,n){return Xs(e,t,n,t0,Ys(gb()),vo(e,2,-2),0)}function Kp(e,t,n,r){return Xs(e,t,n,Df,vo(e,0,r),vo(e,r+1,-1),r)}function ri(e,t){for(var n="",r=Mf(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function kb(e,t,n,r){switch(e.type){case cb:if(e.children.length)break;case ub:case Df:return e.return=e.return||e.value;case t0:return"";case n0:return e.return=e.value+"{"+ri(e.children,r)+"}";case zf:e.value=e.props.join(",")}return Kt(n=ri(e.children,r))?e.return=e.value+"{"+n+"}":""}function _b(e){var t=Mf(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function Ob(e){return function(t){t.root||(t=t.return)&&e(t)}}var qp=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var i=t(r);return n.set(r,i),i}};function s0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var $b=function(t,n,r){for(var i=0,o=0;i=o,o=Xt(),i===38&&o===12&&(n[r]=1),!xo(o);)gt();return Jo(t,pt)},Tb=function(t,n){var r=-1,i=44;do switch(xo(i)){case 0:i===38&&Xt()===12&&(n[r]=1),t[r]+=$b(pt-1,n,r);break;case 2:t[r]+=Ma(i);break;case 4:if(i===44){t[++r]=Xt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ys(i)}while(i=gt());return t},Pb=function(t,n){return a0(Tb(o0(t),n))},Yp=new WeakMap,Cb=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Yp.get(r))&&!i){Yp.set(t,!0);for(var o=[],a=Pb(n,o),s=r.props,l=0,u=0;l<a.length;l++)for(var f=0;f<s.length;f++,u++)t.props[u]=o[l]?a[l].replace(/&\f/g,s[f]):s[f]+" "+a[l]}}},jb=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function l0(e,t){switch(pb(e,t)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+us+e+Ze+e+e;case 6828:case 4268:return ae+e+Ze+e+e;case 6165:return ae+e+Ze+"flex-"+e+e;case 5187:return ae+e+se(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+Ze+"flex-$1$2")+e;case 5443:return ae+e+Ze+"flex-item-"+se(e,/flex-|-self/,"")+e;case 4675:return ae+e+Ze+"flex-line-pack"+se(e,/align-content|flex-|-self/,"")+e;case 5548:return ae+e+Ze+se(e,"shrink","negative")+e;case 5292:return ae+e+Ze+se(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+se(e,"-grow","")+ae+e+Ze+se(e,"grow","positive")+e;case 4554:return ae+se(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+us+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~rc(e,"stretch")?l0(se(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,Kt(e)-3-(~rc(e,"!important")&&10))){case 107:return se(e,":",":"+ae)+e;case 101:return se(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ae+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+Ze+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return ae+e+Ze+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+Ze+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+Ze+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ae+e+Ze+e+e}return e}var Rb=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Df:t.return=l0(t.value,t.length);break;case n0:return ri([Mi(t,{value:se(t.value,"@","@"+ae)})],i);case zf:if(t.length)return mb(t.props,function(o){switch(hb(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ri([Mi(t,{props:[se(o,/:(read-\w+)/,":"+us+"$1")]})],i);case"::placeholder":return ri([Mi(t,{props:[se(o,/:(plac\w+)/,":"+ae+"input-$1")]}),Mi(t,{props:[se(o,/:(plac\w+)/,":"+us+"$1")]}),Mi(t,{props:[se(o,/:(plac\w+)/,Ze+"input-$1")]})],i)}return""})}},Ab=[Rb],Fb=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var x=m.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=t.stylisPlugins||Ab,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var x=m.getAttribute("data-emotion").split(" "),h=1;h<x.length;h++)o[x[h]]=!0;s.push(m)});var l,u=[Cb,jb];{var f,c=[kb,Ob(function(m){f.insert(m)})],d=_b(u.concat(i,c)),v=function(x){return ri(Sb(x),d)};l=function(x,h,p,y){f=p,v(x?x+"{"+h.styles+"}":h.styles),y&&(g.inserted[h.name]=!0)}}var g={key:n,sheet:new lb({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(s),g};function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}var u0={exports:{}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,Uf=Be?Symbol.for("react.element"):60103,Bf=Be?Symbol.for("react.portal"):60106,Js=Be?Symbol.for("react.fragment"):60107,Zs=Be?Symbol.for("react.strict_mode"):60108,el=Be?Symbol.for("react.profiler"):60114,tl=Be?Symbol.for("react.provider"):60109,nl=Be?Symbol.for("react.context"):60110,Vf=Be?Symbol.for("react.async_mode"):60111,rl=Be?Symbol.for("react.concurrent_mode"):60111,il=Be?Symbol.for("react.forward_ref"):60112,ol=Be?Symbol.for("react.suspense"):60113,Nb=Be?Symbol.for("react.suspense_list"):60120,al=Be?Symbol.for("react.memo"):60115,sl=Be?Symbol.for("react.lazy"):60116,Ib=Be?Symbol.for("react.block"):60121,Lb=Be?Symbol.for("react.fundamental"):60117,zb=Be?Symbol.for("react.responder"):60118,Db=Be?Symbol.for("react.scope"):60119;function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Uf:switch(e=e.type,e){case Vf:case rl:case Js:case el:case Zs:case ol:return e;default:switch(e=e&&e.$$typeof,e){case nl:case il:case sl:case al:case tl:return e;default:return t}}case Bf:return t}}}function c0(e){return wt(e)===rl}ce.AsyncMode=Vf;ce.ConcurrentMode=rl;ce.ContextConsumer=nl;ce.ContextProvider=tl;ce.Element=Uf;ce.ForwardRef=il;ce.Fragment=Js;ce.Lazy=sl;ce.Memo=al;ce.Portal=Bf;ce.Profiler=el;ce.StrictMode=Zs;ce.Suspense=ol;ce.isAsyncMode=function(e){return c0(e)||wt(e)===Vf};ce.isConcurrentMode=c0;ce.isContextConsumer=function(e){return wt(e)===nl};ce.isContextProvider=function(e){return wt(e)===tl};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uf};ce.isForwardRef=function(e){return wt(e)===il};ce.isFragment=function(e){return wt(e)===Js};ce.isLazy=function(e){return wt(e)===sl};ce.isMemo=function(e){return wt(e)===al};ce.isPortal=function(e){return wt(e)===Bf};ce.isProfiler=function(e){return wt(e)===el};ce.isStrictMode=function(e){return wt(e)===Zs};ce.isSuspense=function(e){return wt(e)===ol};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Js||e===rl||e===el||e===Zs||e===ol||e===Nb||typeof e=="object"&&e!==null&&(e.$$typeof===sl||e.$$typeof===al||e.$$typeof===tl||e.$$typeof===nl||e.$$typeof===il||e.$$typeof===Lb||e.$$typeof===zb||e.$$typeof===Db||e.$$typeof===Ib)};ce.typeOf=wt;u0.exports=ce;var Wf=u0.exports,Hf=Wf,Mb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ub={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gf={};Gf[Hf.ForwardRef]=Bb;Gf[Hf.Memo]=f0;function Qp(e){return Hf.isMemo(e)?f0:Gf[e.$$typeof]||Mb}var Vb=Object.defineProperty,Wb=Object.getOwnPropertyNames,Xp=Object.getOwnPropertySymbols,Hb=Object.getOwnPropertyDescriptor,Gb=Object.getPrototypeOf,Jp=Object.prototype;function d0(e,t,n){if(typeof t!="string"){if(Jp){var r=Gb(t);r&&r!==Jp&&d0(e,r,n)}var i=Wb(t);Xp&&(i=i.concat(Xp(t)));for(var o=Qp(e),a=Qp(t),s=0;s<i.length;++s){var l=i[s];if(!Ub[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var u=Hb(t,l);try{Vb(e,l,u)}catch{}}}}return e}var Kb=d0;const Kf=Oi(Kb);var qb=function(e,t){return Kf(e,t)},Yb=!0;function qf(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var ll=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Yb===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},ul=function(t,n,r){ll(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Qb(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Xb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jb=/[A-Z]|^ms/g,Zb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,p0=function(t){return t.charCodeAt(1)===45},Zp=function(t){return t!=null&&typeof t!="boolean"},ru=s0(function(e){return p0(e)?e:e.replace(Jb,"-$&").toLowerCase()}),eh=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Zb,function(r,i,o){return qt={name:i,styles:o,next:qt},i})}return Xb[t]!==1&&!p0(t)&&typeof n=="number"&&n!==0?n+"px":n};function bo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return qt={name:n.name,styles:n.styles,next:qt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)qt={name:r.name,styles:r.styles,next:qt},r=r.next;var i=n.styles+";";return i}return eS(e,t,n)}case"function":{if(e!==void 0){var o=qt,a=n(e);return qt=o,bo(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function eS(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=bo(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":Zp(a)&&(r+=ru(o)+":"+eh(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Zp(a[s])&&(r+=ru(o)+":"+eh(o,a[s])+";");else{var l=bo(e,t,a);switch(o){case"animation":case"animationName":{r+=ru(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var th=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qt,Zo=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";qt=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=bo(r,n,a)):o+=a[0];for(var s=1;s<t.length;s++)o+=bo(r,n,t[s]),i&&(o+=a[s]);th.lastIndex=0;for(var l="",u;(u=th.exec(o))!==null;)l+="-"+u[1];var f=Qb(o)+l;return{name:f,styles:o,next:qt}},tS=function(t){return t()},h0=nc["useInsertionEffect"]?nc["useInsertionEffect"]:!1,Yf=h0||tS,nh=h0||w.useLayoutEffect,Qf={}.hasOwnProperty,Xf=w.createContext(typeof HTMLElement<"u"?Fb({key:"css"}):null),nS=Xf.Provider,rS=function(){return w.useContext(Xf)},ea=function(t){return w.forwardRef(function(n,r){var i=w.useContext(Xf);return t(n,i,r)})},yn=w.createContext({}),iS=function(){return w.useContext(yn)},oS=function(t,n){if(typeof n=="function"){var r=n(t);return r}return wo({},t,n)},aS=qp(function(e){return qp(function(t){return oS(e,t)})}),m0=function(t){var n=w.useContext(yn);return t.theme!==n&&(n=aS(n)(t.theme)),w.createElement(yn.Provider,{value:n},t.children)};function sS(e){var t=e.displayName||e.name||"Component",n=function(o,a){var s=w.useContext(yn);return w.createElement(e,wo({theme:s,ref:a},o))},r=w.forwardRef(n);return r.displayName="WithTheme("+t+")",qb(r,e)}var oc="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",lS=function(t,n){var r={};for(var i in n)Qf.call(n,i)&&(r[i]=n[i]);return r[oc]=t,r},uS=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ll(n,r,i),Yf(function(){return ul(n,r,i)}),null},cS=ea(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[oc],o=[r],a="";typeof e.className=="string"?a=qf(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var s=Zo(o,void 0,w.useContext(yn));a+=t.key+"-"+s.name;var l={};for(var u in e)Qf.call(e,u)&&u!=="css"&&u!==oc&&(l[u]=e[u]);return l.ref=n,l.className=a,w.createElement(w.Fragment,null,w.createElement(uS,{cache:t,serialized:s,isStringTag:typeof i=="string"}),w.createElement(i,l))}),fS=cS,rh=function(t,n){var r=arguments;if(n==null||!Qf.call(n,"css"))return w.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=fS,o[1]=lS(t,n);for(var a=2;a<i;a++)o[a]=r[a];return w.createElement.apply(null,o)},g0=ea(function(e,t){var n=e.styles,r=Zo([n],void 0,w.useContext(yn)),i=w.useRef();return nh(function(){var o=t.key+"-global",a=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",o),a.hydrate([l])),i.current=[a,s],function(){a.flush()}},[t]),nh(function(){var o=i.current,a=o[0],s=o[1];if(s){o[1]=!1;return}if(r.next!==void 0&&ul(t,r.next,!0),a.tags.length){var l=a.tags[a.tags.length-1].nextElementSibling;a.before=l,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function Jf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Zo(t)}var dS=function(){var t=Jf.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},pS=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var a=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))a=e(o);else{a="";for(var s in o)o[s]&&s&&(a&&(a+=" "),a+=s)}break}default:a=o}a&&(i&&(i+=" "),i+=a)}}return i};function hS(e,t,n){var r=[],i=qf(e,r,n);return r.length<2?n:i+t(r)}var mS=function(t){var n=t.cache,r=t.serializedArr;return Yf(function(){for(var i=0;i<r.length;i++)ul(n,r[i],!1)}),null},gS=ea(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];var d=Zo(f,t.registered);return r.push(d),ll(t,d,!1),t.key+"-"+d.name},o=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];return hS(t.registered,i,pS(f))},a={css:i,cx:o,theme:w.useContext(yn)},s=e.children(a);return n=!0,w.createElement(w.Fragment,null,w.createElement(mS,{cache:t,serializedArr:r}),s)});const yS=Object.freeze(Object.defineProperty({__proto__:null,CacheProvider:nS,ClassNames:gS,Global:g0,ThemeContext:yn,ThemeProvider:m0,__unsafe_useEmotionCache:rS,createElement:rh,css:Jf,jsx:rh,keyframes:dS,useTheme:iS,withEmotionCache:ea,withTheme:sS},Symbol.toStringTag,{value:"Module"}));var ac={},y0={exports:{}},bt={},v0={exports:{}},x0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,W){var H=F.length;F.push(W);e:for(;0<H;){var ie=H-1>>>1,R=F[ie];if(0<i(R,W))F[ie]=W,F[H]=R,H=ie;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var W=F[0],H=F.pop();if(H!==W){F[0]=H;e:for(var ie=0,R=F.length,z=R>>>1;ie<z;){var M=2*(ie+1)-1,V=F[M],$=M+1,Y=F[$];if(0>i(V,H))$<R&&0>i(Y,V)?(F[ie]=Y,F[$]=H,ie=$):(F[ie]=V,F[M]=H,ie=M);else if($<R&&0>i(Y,H))F[ie]=Y,F[$]=H,ie=$;else break e}}return W}function i(F,W){var H=F.sortIndex-W.sortIndex;return H!==0?H:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,c=null,d=3,v=!1,g=!1,m=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=F)r(u),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(u)}}function S(F){if(m=!1,y(F),!g)if(n(l)!==null)g=!0,At(E);else{var W=n(u);W!==null&&Ve(S,W.startTime-F)}}function E(F,W){g=!1,m&&(m=!1,h(A),A=-1),v=!0;var H=d;try{for(y(W),c=n(l);c!==null&&(!(c.expirationTime>W)||F&&!G());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,d=c.priorityLevel;var R=ie(c.expirationTime<=W);W=e.unstable_now(),typeof R=="function"?c.callback=R:c===n(l)&&r(l),y(W)}else r(l);c=n(l)}if(c!==null)var z=!0;else{var M=n(u);M!==null&&Ve(S,M.startTime-W),z=!1}return z}finally{c=null,d=H,v=!1}}var T=!1,O=null,A=-1,B=5,D=-1;function G(){return!(e.unstable_now()-D<B)}function xe(){if(O!==null){var F=e.unstable_now();D=F;var W=!0;try{W=O(!0,F)}finally{W?Q():(T=!1,O=null)}}else T=!1}var Q;if(typeof p=="function")Q=function(){p(xe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Te=$e.port2;$e.port1.onmessage=xe,Q=function(){Te.postMessage(null)}}else Q=function(){x(xe,0)};function At(F){O=F,T||(T=!0,Q())}function Ve(F,W){A=x(function(){F(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,At(E))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(F){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var H=d;d=W;try{return F()}finally{d=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=d;d=F;try{return W()}finally{d=H}},e.unstable_scheduleCallback=function(F,W,H){var ie=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,F){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=H+R,F={id:f++,callback:W,priorityLevel:F,startTime:H,expirationTime:R,sortIndex:-1},H>ie?(F.sortIndex=H,t(u,F),n(l)===null&&F===n(u)&&(m?(h(A),A=-1):m=!0,Ve(S,H-ie))):(F.sortIndex=R,t(l,F),g||v||(g=!0,At(E))),F},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(F){var W=d;return function(){var H=d;d=W;try{return F.apply(this,arguments)}finally{d=H}}}})(x0);v0.exports=x0;var vS=v0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=w,vt=vS;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b0=new Set,So={};function Pr(e,t){pi(e,t),pi(e+"Capture",t)}function pi(e,t){for(So[e]=t,e=0;e<t.length;e++)b0.add(t[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=Object.prototype.hasOwnProperty,xS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},oh={};function wS(e){return sc.call(oh,e)?!0:sc.call(ih,e)?!1:xS.test(e)?oh[e]=!0:(ih[e]=!0,!1)}function bS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function SS(e,t,n,r){if(t===null||typeof t>"u"||bS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function at(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ye[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ye[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ye[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ye[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ye[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ye[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function ed(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zf,ed);Ye[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zf,ed);Ye[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zf,ed);Ye[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ye[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});function td(e,t,n,r){var i=Ye.hasOwnProperty(t)?Ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(SS(t,n,i,r)&&(n=null),r||i===null?wS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var En=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),E0=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),k0=Symbol.for("react.offscreen"),ah=Symbol.iterator;function Ui(e){return e===null||typeof e!="object"?null:(e=ah&&e[ah]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Object.assign,iu;function Ji(e){if(iu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);iu=t&&t[1]||""}return`
`+iu+e}var ou=!1;function au(e,t){if(!e||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ji(e):""}function ES(e){switch(e.tag){case 5:return Ji(e.type);case 16:return Ji("Lazy");case 13:return Ji("Suspense");case 19:return Ji("SuspenseList");case 0:case 2:case 15:return e=au(e.type,!1),e;case 11:return e=au(e.type.render,!1),e;case 1:return e=au(e.type,!0),e;default:return""}}function fc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wr:return"Fragment";case Vr:return"Portal";case lc:return"Profiler";case nd:return"StrictMode";case uc:return"Suspense";case cc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E0:return(e.displayName||"Context")+".Consumer";case S0:return(e._context.displayName||"Context")+".Provider";case rd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case id:return t=e.displayName||null,t!==null?t:fc(e.type)||"Memo";case jn:t=e._payload,e=e._init;try{return fc(e(t))}catch{}}return null}function kS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(t);case 8:return t===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _S(e){var t=_0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ma(e){e._valueTracker||(e._valueTracker=_S(e))}function O0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function cs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dc(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=er(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $0(e,t){t=t.checked,t!=null&&td(e,"checked",t,!1)}function pc(e,t){$0(e,t);var n=er(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hc(e,t.type,n):t.hasOwnProperty("defaultValue")&&hc(e,t.type,er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hc(e,t,n){(t!=="number"||cs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zi=Array.isArray;function ii(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+er(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Zi(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:er(n)}}function T0(e,t){var n=er(t.value),r=er(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ch(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function P0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?P0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ga,C0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Eo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},OS=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(e){OS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),io[t]=io[e]})});function j0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||io.hasOwnProperty(e)&&io[e]?(""+t).trim():t+"px"}function R0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $S=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(e,t){if(t){if($S[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function vc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function od(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wc=null,oi=null,ai=null;function fh(e){if(e=ra(e)){if(typeof wc!="function")throw Error(j(280));var t=e.stateNode;t&&(t=hl(t),wc(e.stateNode,e.type,t))}}function A0(e){oi?ai?ai.push(e):ai=[e]:oi=e}function F0(){if(oi){var e=oi,t=ai;if(ai=oi=null,fh(e),t)for(e=0;e<t.length;e++)fh(t[e])}}function N0(e,t){return e(t)}function I0(){}var su=!1;function L0(e,t,n){if(su)return e(t,n);su=!0;try{return N0(e,t,n)}finally{su=!1,(oi!==null||ai!==null)&&(I0(),F0())}}function ko(e,t){var n=e.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var bc=!1;if(vn)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{bc=!1}function TS(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var oo=!1,fs=null,ds=!1,Sc=null,PS={onError:function(e){oo=!0,fs=e}};function CS(e,t,n,r,i,o,a,s,l){oo=!1,fs=null,TS.apply(PS,arguments)}function jS(e,t,n,r,i,o,a,s,l){if(CS.apply(this,arguments),oo){if(oo){var u=fs;oo=!1,fs=null}else throw Error(j(198));ds||(ds=!0,Sc=u)}}function Cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function z0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dh(e){if(Cr(e)!==e)throw Error(j(188))}function RS(e){var t=e.alternate;if(!t){if(t=Cr(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return dh(i),e;if(o===r)return dh(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function D0(e){return e=RS(e),e!==null?M0(e):null}function M0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=M0(e);if(t!==null)return t;e=e.sibling}return null}var U0=vt.unstable_scheduleCallback,ph=vt.unstable_cancelCallback,AS=vt.unstable_shouldYield,FS=vt.unstable_requestPaint,Ce=vt.unstable_now,NS=vt.unstable_getCurrentPriorityLevel,ad=vt.unstable_ImmediatePriority,B0=vt.unstable_UserBlockingPriority,ps=vt.unstable_NormalPriority,IS=vt.unstable_LowPriority,V0=vt.unstable_IdlePriority,cl=null,Jt=null;function LS(e){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(cl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:MS,zS=Math.log,DS=Math.LN2;function MS(e){return e>>>=0,e===0?32:31-(zS(e)/DS|0)|0}var ya=64,va=4194304;function eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=eo(s):(o&=a,o!==0&&(r=eo(o)))}else a=n&~i,a!==0?r=eo(a):o!==0&&(r=eo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ut(t),i=1<<n,r|=e[n],t&=~i;return r}function US(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ut(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=US(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Ec(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function W0(){var e=ya;return ya<<=1,!(ya&4194240)&&(ya=64),e}function lu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ta(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=n}function VS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function H0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var G0,ld,K0,q0,Y0,kc=!1,xa=[],Un=null,Bn=null,Vn=null,_o=new Map,Oo=new Map,Fn=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":_o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(t.pointerId)}}function Vi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ra(t),t!==null&&ld(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function HS(e,t,n,r,i){switch(t){case"focusin":return Un=Vi(Un,e,t,n,r,i),!0;case"dragenter":return Bn=Vi(Bn,e,t,n,r,i),!0;case"mouseover":return Vn=Vi(Vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _o.set(o,Vi(_o.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Oo.set(o,Vi(Oo.get(o)||null,e,t,n,r,i)),!0}return!1}function Q0(e){var t=hr(e.target);if(t!==null){var n=Cr(t);if(n!==null){if(t=n.tag,t===13){if(t=z0(n),t!==null){e.blockedOn=t,Y0(e.priority,function(){K0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ba(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_c(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return t=ra(n),t!==null&&ld(t),e.blockedOn=n,!1;t.shift()}return!0}function mh(e,t,n){Ba(e)&&n.delete(t)}function GS(){kc=!1,Un!==null&&Ba(Un)&&(Un=null),Bn!==null&&Ba(Bn)&&(Bn=null),Vn!==null&&Ba(Vn)&&(Vn=null),_o.forEach(mh),Oo.forEach(mh)}function Wi(e,t){e.blockedOn===t&&(e.blockedOn=null,kc||(kc=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,GS)))}function $o(e){function t(i){return Wi(i,e)}if(0<xa.length){Wi(xa[0],e);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Un!==null&&Wi(Un,e),Bn!==null&&Wi(Bn,e),Vn!==null&&Wi(Vn,e),_o.forEach(t),Oo.forEach(t),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Q0(n),n.blockedOn===null&&Fn.shift()}var si=En.ReactCurrentBatchConfig,ms=!0;function KS(e,t,n,r){var i=ue,o=si.transition;si.transition=null;try{ue=1,ud(e,t,n,r)}finally{ue=i,si.transition=o}}function qS(e,t,n,r){var i=ue,o=si.transition;si.transition=null;try{ue=4,ud(e,t,n,r)}finally{ue=i,si.transition=o}}function ud(e,t,n,r){if(ms){var i=_c(e,t,n,r);if(i===null)vu(e,t,r,gs,n),hh(e,r);else if(HS(i,e,t,n,r))r.stopPropagation();else if(hh(e,r),t&4&&-1<WS.indexOf(e)){for(;i!==null;){var o=ra(i);if(o!==null&&G0(o),o=_c(e,t,n,r),o===null&&vu(e,t,r,gs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else vu(e,t,r,null,n)}}var gs=null;function _c(e,t,n,r){if(gs=null,e=od(r),e=hr(e),e!==null)if(t=Cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=z0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gs=e,null}function X0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NS()){case ad:return 1;case B0:return 4;case ps:case IS:return 16;case V0:return 536870912;default:return 16}default:return 16}}var Ln=null,cd=null,Va=null;function J0(){if(Va)return Va;var e,t=cd,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Va=i.slice(e,1<r?1-r:void 0)}function Wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wa(){return!0}function gh(){return!1}function St(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wa:gh,this.isPropagationStopped=gh,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),t}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fd=St(Pi),na=Oe({},Pi,{view:0,detail:0}),YS=St(na),uu,cu,Hi,fl=Oe({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hi&&(Hi&&e.type==="mousemove"?(uu=e.screenX-Hi.screenX,cu=e.screenY-Hi.screenY):cu=uu=0,Hi=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),yh=St(fl),QS=Oe({},fl,{dataTransfer:0}),XS=St(QS),JS=Oe({},na,{relatedTarget:0}),fu=St(JS),ZS=Oe({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),e2=St(ZS),t2=Oe({},Pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n2=St(t2),r2=Oe({},Pi,{data:0}),vh=St(r2),i2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=a2[e])?!!t[e]:!1}function dd(){return s2}var l2=Oe({},na,{key:function(e){if(e.key){var t=i2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?o2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(e){return e.type==="keypress"?Wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),u2=St(l2),c2=Oe({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=St(c2),f2=Oe({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),d2=St(f2),p2=Oe({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),h2=St(p2),m2=Oe({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g2=St(m2),y2=[9,13,27,32],pd=vn&&"CompositionEvent"in window,ao=null;vn&&"documentMode"in document&&(ao=document.documentMode);var v2=vn&&"TextEvent"in window&&!ao,Z0=vn&&(!pd||ao&&8<ao&&11>=ao),wh=String.fromCharCode(32),bh=!1;function ev(e,t){switch(e){case"keyup":return y2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function x2(e,t){switch(e){case"compositionend":return tv(t);case"keypress":return t.which!==32?null:(bh=!0,wh);case"textInput":return e=t.data,e===wh&&bh?null:e;default:return null}}function w2(e,t){if(Hr)return e==="compositionend"||!pd&&ev(e,t)?(e=J0(),Va=cd=Ln=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Z0&&t.locale!=="ko"?null:t.data;default:return null}}var b2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!b2[e.type]:t==="textarea"}function nv(e,t,n,r){A0(r),t=ys(t,"onChange"),0<t.length&&(n=new fd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var so=null,To=null;function S2(e){pv(e,0)}function dl(e){var t=qr(e);if(O0(t))return e}function E2(e,t){if(e==="change")return t}var rv=!1;if(vn){var du;if(vn){var pu="oninput"in document;if(!pu){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),pu=typeof Eh.oninput=="function"}du=pu}else du=!1;rv=du&&(!document.documentMode||9<document.documentMode)}function kh(){so&&(so.detachEvent("onpropertychange",iv),To=so=null)}function iv(e){if(e.propertyName==="value"&&dl(To)){var t=[];nv(t,To,e,od(e)),L0(S2,t)}}function k2(e,t,n){e==="focusin"?(kh(),so=t,To=n,so.attachEvent("onpropertychange",iv)):e==="focusout"&&kh()}function _2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(To)}function O2(e,t){if(e==="click")return dl(t)}function $2(e,t){if(e==="input"||e==="change")return dl(t)}function T2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:T2;function Po(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sc.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function _h(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oh(e,t){var n=_h(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_h(n)}}function ov(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ov(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function av(){for(var e=window,t=cs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cs(e.document)}return t}function hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function P2(e){var t=av(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(r!==null&&hd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Oh(n,o);var a=Oh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C2=vn&&"documentMode"in document&&11>=document.documentMode,Gr=null,Oc=null,lo=null,$c=!1;function $h(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$c||Gr==null||Gr!==cs(r)||(r=Gr,"selectionStart"in r&&hd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&Po(lo,r)||(lo=r,r=ys(Oc,"onSelect"),0<r.length&&(t=new fd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gr)))}function ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},hu={},sv={};vn&&(sv=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function pl(e){if(hu[e])return hu[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sv)return hu[e]=t[n];return e}var lv=pl("animationend"),uv=pl("animationiteration"),cv=pl("animationstart"),fv=pl("transitionend"),dv=new Map,Th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(e,t){dv.set(e,t),Pr(t,[e])}for(var mu=0;mu<Th.length;mu++){var gu=Th[mu],j2=gu.toLowerCase(),R2=gu[0].toUpperCase()+gu.slice(1);or(j2,"on"+R2)}or(lv,"onAnimationEnd");or(uv,"onAnimationIteration");or(cv,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(fv,"onTransitionEnd");pi("onMouseEnter",["mouseout","mouseover"]);pi("onMouseLeave",["mouseout","mouseover"]);pi("onPointerEnter",["pointerout","pointerover"]);pi("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A2=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Ph(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jS(r,t,void 0,e),e.currentTarget=null}function pv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Ph(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Ph(i,s,u),o=l}}}if(ds)throw e=Sc,ds=!1,Sc=null,e}function ge(e,t){var n=t[Rc];n===void 0&&(n=t[Rc]=new Set);var r=e+"__bubble";n.has(r)||(hv(t,e,2,!1),n.add(r))}function yu(e,t,n){var r=0;t&&(r|=4),hv(n,e,r,t)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Co(e){if(!e[Sa]){e[Sa]=!0,b0.forEach(function(n){n!=="selectionchange"&&(A2.has(n)||yu(n,!1,e),yu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sa]||(t[Sa]=!0,yu("selectionchange",!1,t))}}function hv(e,t,n,r){switch(X0(t)){case 1:var i=KS;break;case 4:i=qS;break;default:i=ud}n=i.bind(null,t,n,e),i=void 0,!bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=hr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}L0(function(){var u=o,f=od(n),c=[];e:{var d=dv.get(e);if(d!==void 0){var v=fd,g=e;switch(e){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":v=u2;break;case"focusin":g="focus",v=fu;break;case"focusout":g="blur",v=fu;break;case"beforeblur":case"afterblur":v=fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=XS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=d2;break;case lv:case uv:case cv:v=e2;break;case fv:v=h2;break;case"scroll":v=YS;break;case"wheel":v=g2;break;case"copy":case"cut":case"paste":v=n2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=xh}var m=(t&4)!==0,x=!m&&e==="scroll",h=m?d!==null?d+"Capture":null:d;m=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=ko(p,h),S!=null&&m.push(jo(p,S,y)))),x)break;p=p.return}0<m.length&&(d=new v(d,g,null,n,f),c.push({event:d,listeners:m}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&n!==xc&&(g=n.relatedTarget||n.fromElement)&&(hr(g)||g[xn]))break e;if((v||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?hr(g):null,g!==null&&(x=Cr(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(m=yh,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(m=xh,S="onPointerLeave",h="onPointerEnter",p="pointer"),x=v==null?d:qr(v),y=g==null?d:qr(g),d=new m(S,p+"leave",v,n,f),d.target=x,d.relatedTarget=y,S=null,hr(f)===u&&(m=new m(h,p+"enter",g,n,f),m.target=y,m.relatedTarget=x,S=m),x=S,v&&g)t:{for(m=v,h=g,p=0,y=m;y;y=zr(y))p++;for(y=0,S=h;S;S=zr(S))y++;for(;0<p-y;)m=zr(m),p--;for(;0<y-p;)h=zr(h),y--;for(;p--;){if(m===h||h!==null&&m===h.alternate)break t;m=zr(m),h=zr(h)}m=null}else m=null;v!==null&&Ch(c,d,v,m,!1),g!==null&&x!==null&&Ch(c,x,g,m,!0)}}e:{if(d=u?qr(u):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var E=E2;else if(Sh(d))if(rv)E=$2;else{E=_2;var T=k2}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=O2);if(E&&(E=E(e,u))){nv(c,E,n,f);break e}T&&T(e,d,u),e==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&hc(d,"number",d.value)}switch(T=u?qr(u):window,e){case"focusin":(Sh(T)||T.contentEditable==="true")&&(Gr=T,Oc=u,lo=null);break;case"focusout":lo=Oc=Gr=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,$h(c,n,f);break;case"selectionchange":if(C2)break;case"keydown":case"keyup":$h(c,n,f)}var O;if(pd)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Hr?ev(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Z0&&n.locale!=="ko"&&(Hr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Hr&&(O=J0()):(Ln=f,cd="value"in Ln?Ln.value:Ln.textContent,Hr=!0)),T=ys(u,A),0<T.length&&(A=new vh(A,e,null,n,f),c.push({event:A,listeners:T}),O?A.data=O:(O=tv(n),O!==null&&(A.data=O)))),(O=v2?x2(e,n):w2(e,n))&&(u=ys(u,"onBeforeInput"),0<u.length&&(f=new vh("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=O))}pv(c,t)})}function jo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ys(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ko(e,n),o!=null&&r.unshift(jo(e,o,i)),o=ko(e,t),o!=null&&r.push(jo(e,o,i))),e=e.return}return r}function zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ch(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ko(n,o),l!=null&&a.unshift(jo(n,l,s))):i||(l=ko(n,o),l!=null&&a.push(jo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var F2=/\r\n?/g,N2=/\u0000|\uFFFD/g;function jh(e){return(typeof e=="string"?e:""+e).replace(F2,`
`).replace(N2,"")}function Ea(e,t,n){if(t=jh(t),jh(e)!==t&&n)throw Error(j(425))}function vs(){}var Tc=null,Pc=null;function Cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,I2=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,L2=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(e){return Rh.resolve(null).then(e).catch(z2)}:jc;function z2(e){setTimeout(function(){throw e})}function xu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$o(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$o(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ah(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Ci,Ro="__reactProps$"+Ci,xn="__reactContainer$"+Ci,Rc="__reactEvents$"+Ci,D2="__reactListeners$"+Ci,M2="__reactHandles$"+Ci;function hr(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ah(e);e!==null;){if(n=e[Yt])return n;e=Ah(e)}return t}e=n,n=e.parentNode}return null}function ra(e){return e=e[Yt]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function hl(e){return e[Ro]||null}var Ac=[],Yr=-1;function ar(e){return{current:e}}function ve(e){0>Yr||(e.current=Ac[Yr],Ac[Yr]=null,Yr--)}function he(e,t){Yr++,Ac[Yr]=e.current,e.current=t}var tr={},nt=ar(tr),ct=ar(!1),br=tr;function hi(e,t){var n=e.type.contextTypes;if(!n)return tr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ft(e){return e=e.childContextTypes,e!=null}function xs(){ve(ct),ve(nt)}function Fh(e,t,n){if(nt.current!==tr)throw Error(j(168));he(nt,t),he(ct,n)}function mv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,kS(e)||"Unknown",i));return Oe({},n,r)}function ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tr,br=nt.current,he(nt,e),he(ct,ct.current),!0}function Nh(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=mv(e,t,br),r.__reactInternalMemoizedMergedChildContext=e,ve(ct),ve(nt),he(nt,e)):ve(ct),he(ct,n)}var fn=null,ml=!1,wu=!1;function gv(e){fn===null?fn=[e]:fn.push(e)}function U2(e){ml=!0,gv(e)}function sr(){if(!wu&&fn!==null){wu=!0;var e=0,t=ue;try{var n=fn;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}fn=null,ml=!1}catch(i){throw fn!==null&&(fn=fn.slice(e+1)),U0(ad,sr),i}finally{ue=t,wu=!1}}return null}var Qr=[],Xr=0,bs=null,Ss=0,_t=[],Ot=0,Sr=null,dn=1,pn="";function cr(e,t){Qr[Xr++]=Ss,Qr[Xr++]=bs,bs=e,Ss=t}function yv(e,t,n){_t[Ot++]=dn,_t[Ot++]=pn,_t[Ot++]=Sr,Sr=e;var r=dn;e=pn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var o=32-Ut(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dn=1<<32-Ut(t)+i|n<<i|r,pn=o+e}else dn=1<<o|n<<i|r,pn=e}function md(e){e.return!==null&&(cr(e,1),yv(e,1,0))}function gd(e){for(;e===bs;)bs=Qr[--Xr],Qr[Xr]=null,Ss=Qr[--Xr],Qr[Xr]=null;for(;e===Sr;)Sr=_t[--Ot],_t[Ot]=null,pn=_t[--Ot],_t[Ot]=null,dn=_t[--Ot],_t[Ot]=null}var yt=null,mt=null,Se=!1,Dt=null;function vv(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ih(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,mt=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sr!==null?{id:dn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,mt=null,!0):!1;default:return!1}}function Fc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nc(e){if(Se){var t=mt;if(t){var n=t;if(!Ih(e,t)){if(Fc(e))throw Error(j(418));t=Wn(n.nextSibling);var r=yt;t&&Ih(e,t)?vv(r,n):(e.flags=e.flags&-4097|2,Se=!1,yt=e)}}else{if(Fc(e))throw Error(j(418));e.flags=e.flags&-4097|2,Se=!1,yt=e}}}function Lh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function ka(e){if(e!==yt)return!1;if(!Se)return Lh(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cc(e.type,e.memoizedProps)),t&&(t=mt)){if(Fc(e))throw xv(),Error(j(418));for(;t;)vv(e,t),t=Wn(t.nextSibling)}if(Lh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=yt?Wn(e.stateNode.nextSibling):null;return!0}function xv(){for(var e=mt;e;)e=Wn(e.nextSibling)}function mi(){mt=yt=null,Se=!1}function yd(e){Dt===null?Dt=[e]:Dt.push(e)}var B2=En.ReactCurrentBatchConfig;function Lt(e,t){if(e&&e.defaultProps){t=Oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Es=ar(null),ks=null,Jr=null,vd=null;function xd(){vd=Jr=ks=null}function wd(e){var t=Es.current;ve(Es),e._currentValue=t}function Ic(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function li(e,t){ks=e,vd=Jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(vd!==e)if(e={context:e,memoizedValue:t,next:null},Jr===null){if(ks===null)throw Error(j(308));Jr=e,ks.dependencies={lanes:0,firstContext:e}}else Jr=Jr.next=e;return t}var mr=null;function bd(e){mr===null?mr=[e]:mr.push(e)}function wv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bd(t)):(n.next=i.next,i.next=n),t.interleaved=n,wn(e,r)}function wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Sd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wn(e,n)}return i=r.interleaved,i===null?(t.next=t,bd(r)):(t.next=i.next,i.next=t),r.interleaved=t,wn(e,n)}function Ha(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sd(e,n)}}function zh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _s(e,t,n,r){var i=e.updateQueue;Rn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;a=0,f=u=l=null,s=o;do{var d=s.lane,v=s.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,m=s;switch(d=t,v=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){c=g.call(v,c,d);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,d=typeof g=="function"?g.call(v,c,d):g,d==null)break e;c=Oe({},c,d);break e;case 2:Rn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else v={eventTime:v,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,l=c):f=f.next=v,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(f===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);kr|=a,e.lanes=a,e.memoizedState=c}}function Dh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Sv=new w0.Component().refs;function Lc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?Cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),i=Kn(e),o=mn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Hn(e,o,i),t!==null&&(Bt(t,e,i,r),Ha(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),i=Kn(e),o=mn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Hn(e,o,i),t!==null&&(Bt(t,e,i,r),Ha(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=Kn(e),i=mn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Hn(e,i,r),t!==null&&(Bt(t,e,r,n),Ha(t,e,r))}};function Mh(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Po(n,r)||!Po(i,o):!0}function Ev(e,t,n){var r=!1,i=tr,o=t.contextType;return typeof o=="object"&&o!==null?o=Ct(o):(i=ft(t)?br:nt.current,r=t.contextTypes,o=(r=r!=null)?hi(e,i):tr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Uh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function zc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Sv,Sd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ct(o):(o=ft(t)?br:nt.current,i.context=hi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Lc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gl.enqueueReplaceState(i,i.state,null),_s(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Sv&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function _a(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bh(e){var t=e._init;return t(e._payload)}function kv(e){function t(h,p){if(e){var y=h.deletions;y===null?(h.deletions=[p],h.flags|=16):y.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=qn(h,p),h.index=0,h.sibling=null,h}function o(h,p,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<p?(h.flags|=2,p):y):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,y,S){return p===null||p.tag!==6?(p=$u(y,h.mode,S),p.return=h,p):(p=i(p,y),p.return=h,p)}function l(h,p,y,S){var E=y.type;return E===Wr?f(h,p,y.props.children,S,y.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jn&&Bh(E)===p.type)?(S=i(p,y.props),S.ref=Gi(h,p,y),S.return=h,S):(S=Xa(y.type,y.key,y.props,null,h.mode,S),S.ref=Gi(h,p,y),S.return=h,S)}function u(h,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Tu(y,h.mode,S),p.return=h,p):(p=i(p,y.children||[]),p.return=h,p)}function f(h,p,y,S,E){return p===null||p.tag!==7?(p=xr(y,h.mode,S,E),p.return=h,p):(p=i(p,y),p.return=h,p)}function c(h,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$u(""+p,h.mode,y),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ha:return y=Xa(p.type,p.key,p.props,null,h.mode,y),y.ref=Gi(h,null,p),y.return=h,y;case Vr:return p=Tu(p,h.mode,y),p.return=h,p;case jn:var S=p._init;return c(h,S(p._payload),y)}if(Zi(p)||Ui(p))return p=xr(p,h.mode,y,null),p.return=h,p;_a(h,p)}return null}function d(h,p,y,S){var E=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:s(h,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ha:return y.key===E?l(h,p,y,S):null;case Vr:return y.key===E?u(h,p,y,S):null;case jn:return E=y._init,d(h,p,E(y._payload),S)}if(Zi(y)||Ui(y))return E!==null?null:f(h,p,y,S,null);_a(h,y)}return null}function v(h,p,y,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,s(p,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ha:return h=h.get(S.key===null?y:S.key)||null,l(p,h,S,E);case Vr:return h=h.get(S.key===null?y:S.key)||null,u(p,h,S,E);case jn:var T=S._init;return v(h,p,y,T(S._payload),E)}if(Zi(S)||Ui(S))return h=h.get(y)||null,f(p,h,S,E,null);_a(p,S)}return null}function g(h,p,y,S){for(var E=null,T=null,O=p,A=p=0,B=null;O!==null&&A<y.length;A++){O.index>A?(B=O,O=null):B=O.sibling;var D=d(h,O,y[A],S);if(D===null){O===null&&(O=B);break}e&&O&&D.alternate===null&&t(h,O),p=o(D,p,A),T===null?E=D:T.sibling=D,T=D,O=B}if(A===y.length)return n(h,O),Se&&cr(h,A),E;if(O===null){for(;A<y.length;A++)O=c(h,y[A],S),O!==null&&(p=o(O,p,A),T===null?E=O:T.sibling=O,T=O);return Se&&cr(h,A),E}for(O=r(h,O);A<y.length;A++)B=v(O,h,A,y[A],S),B!==null&&(e&&B.alternate!==null&&O.delete(B.key===null?A:B.key),p=o(B,p,A),T===null?E=B:T.sibling=B,T=B);return e&&O.forEach(function(G){return t(h,G)}),Se&&cr(h,A),E}function m(h,p,y,S){var E=Ui(y);if(typeof E!="function")throw Error(j(150));if(y=E.call(y),y==null)throw Error(j(151));for(var T=E=null,O=p,A=p=0,B=null,D=y.next();O!==null&&!D.done;A++,D=y.next()){O.index>A?(B=O,O=null):B=O.sibling;var G=d(h,O,D.value,S);if(G===null){O===null&&(O=B);break}e&&O&&G.alternate===null&&t(h,O),p=o(G,p,A),T===null?E=G:T.sibling=G,T=G,O=B}if(D.done)return n(h,O),Se&&cr(h,A),E;if(O===null){for(;!D.done;A++,D=y.next())D=c(h,D.value,S),D!==null&&(p=o(D,p,A),T===null?E=D:T.sibling=D,T=D);return Se&&cr(h,A),E}for(O=r(h,O);!D.done;A++,D=y.next())D=v(O,h,A,D.value,S),D!==null&&(e&&D.alternate!==null&&O.delete(D.key===null?A:D.key),p=o(D,p,A),T===null?E=D:T.sibling=D,T=D);return e&&O.forEach(function(xe){return t(h,xe)}),Se&&cr(h,A),E}function x(h,p,y,S){if(typeof y=="object"&&y!==null&&y.type===Wr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ha:e:{for(var E=y.key,T=p;T!==null;){if(T.key===E){if(E=y.type,E===Wr){if(T.tag===7){n(h,T.sibling),p=i(T,y.props.children),p.return=h,h=p;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jn&&Bh(E)===T.type){n(h,T.sibling),p=i(T,y.props),p.ref=Gi(h,T,y),p.return=h,h=p;break e}n(h,T);break}else t(h,T);T=T.sibling}y.type===Wr?(p=xr(y.props.children,h.mode,S,y.key),p.return=h,h=p):(S=Xa(y.type,y.key,y.props,null,h.mode,S),S.ref=Gi(h,p,y),S.return=h,h=S)}return a(h);case Vr:e:{for(T=y.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(h,p.sibling),p=i(p,y.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Tu(y,h.mode,S),p.return=h,h=p}return a(h);case jn:return T=y._init,x(h,p,T(y._payload),S)}if(Zi(y))return g(h,p,y,S);if(Ui(y))return m(h,p,y,S);_a(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,y),p.return=h,h=p):(n(h,p),p=$u(y,h.mode,S),p.return=h,h=p),a(h)):n(h,p)}return x}var gi=kv(!0),_v=kv(!1),ia={},Zt=ar(ia),Ao=ar(ia),Fo=ar(ia);function gr(e){if(e===ia)throw Error(j(174));return e}function Ed(e,t){switch(he(Fo,t),he(Ao,e),he(Zt,ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gc(t,e)}ve(Zt),he(Zt,t)}function yi(){ve(Zt),ve(Ao),ve(Fo)}function Ov(e){gr(Fo.current);var t=gr(Zt.current),n=gc(t,e.type);t!==n&&(he(Ao,e),he(Zt,n))}function kd(e){Ao.current===e&&(ve(Zt),ve(Ao))}var Ee=ar(0);function Os(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bu=[];function _d(){for(var e=0;e<bu.length;e++)bu[e]._workInProgressVersionPrimary=null;bu.length=0}var Ga=En.ReactCurrentDispatcher,Su=En.ReactCurrentBatchConfig,Er=0,ke=null,Le=null,Me=null,$s=!1,uo=!1,No=0,V2=0;function Xe(){throw Error(j(321))}function Od(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function $d(e,t,n,r,i,o){if(Er=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ga.current=e===null||e.memoizedState===null?K2:q2,e=n(r,i),uo){o=0;do{if(uo=!1,No=0,25<=o)throw Error(j(301));o+=1,Me=Le=null,t.updateQueue=null,Ga.current=Y2,e=n(r,i)}while(uo)}if(Ga.current=Ts,t=Le!==null&&Le.next!==null,Er=0,Me=Le=ke=null,$s=!1,t)throw Error(j(300));return e}function Td(){var e=No!==0;return No=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ke.memoizedState=Me=e:Me=Me.next=e,Me}function jt(){if(Le===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Me===null?ke.memoizedState:Me.next;if(t!==null)Me=t,Le=e;else{if(e===null)throw Error(j(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Me===null?ke.memoizedState=Me=e:Me=Me.next=e}return Me}function Io(e,t){return typeof t=="function"?t(e):t}function Eu(e){var t=jt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var f=u.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=r):l=l.next=c,ke.lanes|=f,kr|=f}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Vt(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,kr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ku(e){var t=jt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Vt(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function $v(){}function Tv(e,t){var n=ke,r=jt(),i=t(),o=!Vt(r.memoizedState,i);if(o&&(r.memoizedState=i,ut=!0),r=r.queue,Pd(jv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Lo(9,Cv.bind(null,n,r,i,t),void 0,null),Ue===null)throw Error(j(349));Er&30||Pv(n,t,i)}return i}function Pv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cv(e,t,n,r){t.value=n,t.getSnapshot=r,Rv(t)&&Av(e)}function jv(e,t,n){return n(function(){Rv(t)&&Av(e)})}function Rv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function Av(e){var t=wn(e,1);t!==null&&Bt(t,e,1,-1)}function Vh(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=G2.bind(null,ke,e),[t.memoizedState,e]}function Lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fv(){return jt().memoizedState}function Ka(e,t,n,r){var i=Ht();ke.flags|=e,i.memoizedState=Lo(1|t,n,void 0,r===void 0?null:r)}function yl(e,t,n,r){var i=jt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&Od(r,a.deps)){i.memoizedState=Lo(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Lo(1|t,n,o,r)}function Wh(e,t){return Ka(8390656,8,e,t)}function Pd(e,t){return yl(2048,8,e,t)}function Nv(e,t){return yl(4,2,e,t)}function Iv(e,t){return yl(4,4,e,t)}function Lv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zv(e,t,n){return n=n!=null?n.concat([e]):null,yl(4,4,Lv.bind(null,t,e),n)}function Cd(){}function Dv(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Od(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mv(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Od(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uv(e,t,n){return Er&21?(Vt(n,t)||(n=W0(),ke.lanes|=n,kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function W2(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Su.transition;Su.transition={};try{e(!1),t()}finally{ue=n,Su.transition=r}}function Bv(){return jt().memoizedState}function H2(e,t,n){var r=Kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vv(e))Wv(t,n);else if(n=wv(e,t,n,r),n!==null){var i=it();Bt(n,e,r,i),Hv(n,t,r)}}function G2(e,t,n){var r=Kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vv(e))Wv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Vt(s,a)){var l=t.interleaved;l===null?(i.next=i,bd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=wv(e,t,i,r),n!==null&&(i=it(),Bt(n,e,r,i),Hv(n,t,r))}}function Vv(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Wv(e,t){uo=$s=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sd(e,n)}}var Ts={readContext:Ct,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},K2={readContext:Ct,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Wh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ka(4194308,4,Lv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ka(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ka(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=H2.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:Vh,useDebugValue:Cd,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=Vh(!1),t=e[0];return e=W2.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Ht();if(Se){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Ue===null)throw Error(j(349));Er&30||Pv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Wh(jv.bind(null,r,o,e),[e]),r.flags|=2048,Lo(9,Cv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ht(),t=Ue.identifierPrefix;if(Se){var n=pn,r=dn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=No++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=V2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},q2={readContext:Ct,useCallback:Dv,useContext:Ct,useEffect:Pd,useImperativeHandle:zv,useInsertionEffect:Nv,useLayoutEffect:Iv,useMemo:Mv,useReducer:Eu,useRef:Fv,useState:function(){return Eu(Io)},useDebugValue:Cd,useDeferredValue:function(e){var t=jt();return Uv(t,Le.memoizedState,e)},useTransition:function(){var e=Eu(Io)[0],t=jt().memoizedState;return[e,t]},useMutableSource:$v,useSyncExternalStore:Tv,useId:Bv,unstable_isNewReconciler:!1},Y2={readContext:Ct,useCallback:Dv,useContext:Ct,useEffect:Pd,useImperativeHandle:zv,useInsertionEffect:Nv,useLayoutEffect:Iv,useMemo:Mv,useReducer:ku,useRef:Fv,useState:function(){return ku(Io)},useDebugValue:Cd,useDeferredValue:function(e){var t=jt();return Le===null?t.memoizedState=e:Uv(t,Le.memoizedState,e)},useTransition:function(){var e=ku(Io)[0],t=jt().memoizedState;return[e,t]},useMutableSource:$v,useSyncExternalStore:Tv,useId:Bv,unstable_isNewReconciler:!1};function vi(e,t){try{var n="",r=t;do n+=ES(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _u(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Q2=typeof WeakMap=="function"?WeakMap:Map;function Gv(e,t,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cs||(Cs=!0,Yc=r),Dc(e,t)},n}function Kv(e,t,n){n=mn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Dc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Dc(e,t),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Hh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Q2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=cE.bind(null,e,t,n),t.then(e,e))}function Gh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mn(-1,1),t.tag=2,Hn(n,t,1))),n.lanes|=1),e)}var X2=En.ReactCurrentOwner,ut=!1;function rt(e,t,n,r){t.child=e===null?_v(t,null,n,r):gi(t,e.child,n,r)}function qh(e,t,n,r,i){n=n.render;var o=t.ref;return li(t,i),r=$d(e,t,n,r,o,i),n=Td(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(Se&&n&&md(t),t.flags|=1,rt(e,t,r,i),t.child)}function Yh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qv(e,t,o,r,i)):(e=Xa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(a,r)&&e.ref===t.ref)return bn(e,t,i)}return t.flags|=1,e=qn(o,r),e.ref=t.ref,e.return=t,t.child=e}function qv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Po(o,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,bn(e,t,i)}return Mc(e,t,n,r,i)}function Yv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ei,ht),ht|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(ei,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(ei,ht),ht|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(ei,ht),ht|=r;return rt(e,t,i,n),t.child}function Qv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mc(e,t,n,r,i){var o=ft(n)?br:nt.current;return o=hi(t,o),li(t,i),n=$d(e,t,n,r,o,i),r=Td(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(Se&&r&&md(t),t.flags|=1,rt(e,t,n,i),t.child)}function Qh(e,t,n,r,i){if(ft(n)){var o=!0;ws(t)}else o=!1;if(li(t,i),t.stateNode===null)qa(e,t),Ev(t,n,r),zc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ct(u):(u=ft(n)?br:nt.current,u=hi(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Uh(t,a,r,u),Rn=!1;var d=t.memoizedState;a.state=d,_s(t,r,a,i),l=t.memoizedState,s!==r||d!==l||ct.current||Rn?(typeof f=="function"&&(Lc(t,n,f,r),l=t.memoizedState),(s=Rn||Mh(t,n,s,r,d,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bv(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Lt(t.type,s),a.props=u,c=t.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ct(l):(l=ft(n)?br:nt.current,l=hi(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||d!==l)&&Uh(t,a,r,l),Rn=!1,d=t.memoizedState,a.state=d,_s(t,r,a,i);var g=t.memoizedState;s!==c||d!==g||ct.current||Rn?(typeof v=="function"&&(Lc(t,n,v,r),g=t.memoizedState),(u=Rn||Mh(t,n,u,r,d,g,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Uc(e,t,n,r,o,i)}function Uc(e,t,n,r,i,o){Qv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Nh(t,n,!1),bn(e,t,o);r=t.stateNode,X2.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=gi(t,e.child,null,o),t.child=gi(t,null,s,o)):rt(e,t,s,o),t.memoizedState=r.state,i&&Nh(t,n,!0),t.child}function Xv(e){var t=e.stateNode;t.pendingContext?Fh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fh(e,t.context,!1),Ed(e,t.containerInfo)}function Xh(e,t,n,r,i){return mi(),yd(i),t.flags|=256,rt(e,t,n,r),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function Vc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jv(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Ee,i&1),e===null)return Nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=wl(a,r,0,null),e=xr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vc(n),t.memoizedState=Bc,e):jd(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return J2(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=qn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=qn(s,o):(o=xr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Vc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Bc,r}return o=e.child,e=o.sibling,r=qn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jd(e,t){return t=wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oa(e,t,n,r){return r!==null&&yd(r),gi(t,e.child,null,n),e=jd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function J2(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=_u(Error(j(422))),Oa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=wl({mode:"visible",children:r.children},i,0,null),o=xr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&gi(t,e.child,null,a),t.child.memoizedState=Vc(a),t.memoizedState=Bc,o);if(!(t.mode&1))return Oa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=_u(o,r,void 0),Oa(e,t,a,r)}if(s=(a&e.childLanes)!==0,ut||s){if(r=Ue,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wn(e,i),Bt(r,e,i,-1))}return Ld(),r=_u(Error(j(421))),Oa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fE.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,mt=Wn(i.nextSibling),yt=t,Se=!0,Dt=null,e!==null&&(_t[Ot++]=dn,_t[Ot++]=pn,_t[Ot++]=Sr,dn=e.id,pn=e.overflow,Sr=t),t=jd(t,r.children),t.flags|=4096,t)}function Jh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ic(e.return,t,n)}function Ou(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Zv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(rt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jh(e,n,t);else if(e.tag===19)Jh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Os(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ou(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Os(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ou(t,!0,n,null,o);break;case"together":Ou(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Z2(e,t,n){switch(t.tag){case 3:Xv(t),mi();break;case 5:Ov(t);break;case 1:ft(t.type)&&ws(t);break;case 4:Ed(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Es,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?Jv(e,t,n):(he(Ee,Ee.current&1),e=bn(e,t,n),e!==null?e.sibling:null);he(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Yv(e,t,n)}return bn(e,t,n)}var e1,Wc,t1,n1;e1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wc=function(){};t1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gr(Zt.current);var o=null;switch(n){case"input":i=dc(e,i),r=dc(e,r),o=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),o=[];break;case"textarea":i=mc(e,i),r=mc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vs)}yc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(So.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(So.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};n1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ki(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function eE(e,t,n){var r=t.pendingProps;switch(gd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return ft(t.type)&&xs(),Je(t),null;case 3:return r=t.stateNode,yi(),ve(ct),ve(nt),_d(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(Jc(Dt),Dt=null))),Wc(e,t),Je(t),null;case 5:kd(t);var i=gr(Fo.current);if(n=t.type,e!==null&&t.stateNode!=null)t1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Je(t),null}if(e=gr(Zt.current),ka(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Yt]=t,r[Ro]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<to.length;i++)ge(to[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":sh(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":uh(r,o),ge("invalid",r)}yc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ea(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ea(r.textContent,s,e),i=["children",""+s]):So.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":ma(r),lh(r,o,!0);break;case"textarea":ma(r),ch(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=P0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Yt]=t,e[Ro]=r,e1(e,t,!1,!1),t.stateNode=e;e:{switch(a=vc(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<to.length;i++)ge(to[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":sh(e,r),i=dc(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),ge("invalid",e);break;case"textarea":uh(e,r),i=mc(e,r),ge("invalid",e);break;default:i=r}yc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?R0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Eo(e,l):typeof l=="number"&&Eo(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(So.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ge("scroll",e):l!=null&&td(e,o,l,a))}switch(n){case"input":ma(e),lh(e,r,!1);break;case"textarea":ma(e),ch(e);break;case"option":r.value!=null&&e.setAttribute("value",""+er(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ii(e,!!r.multiple,o,!1):r.defaultValue!=null&&ii(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=vs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)n1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=gr(Fo.current),gr(Zt.current),ka(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(o=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:Ea(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return Je(t),null;case 13:if(ve(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&mt!==null&&t.mode&1&&!(t.flags&128))xv(),mi(),t.flags|=98560,o=!1;else if(o=ka(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Yt]=t}else mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),o=!1}else Dt!==null&&(Jc(Dt),Dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?ze===0&&(ze=3):Ld())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return yi(),Wc(e,t),e===null&&Co(t.stateNode.containerInfo),Je(t),null;case 10:return wd(t.type._context),Je(t),null;case 17:return ft(t.type)&&xs(),Je(t),null;case 19:if(ve(Ee),o=t.memoizedState,o===null)return Je(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ki(o,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Os(e),a!==null){for(t.flags|=128,Ki(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>xi&&(t.flags|=128,r=!0,Ki(o,!1),t.lanes=4194304)}else{if(!r)if(e=Os(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ki(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Se)return Je(t),null}else 2*Ce()-o.renderingStartTime>xi&&n!==1073741824&&(t.flags|=128,r=!0,Ki(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=Ee.current,he(Ee,r?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return Id(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ht&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function tE(e,t){switch(gd(t),t.tag){case 1:return ft(t.type)&&xs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yi(),ve(ct),ve(nt),_d(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kd(t),null;case 13:if(ve(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ee),null;case 4:return yi(),null;case 10:return wd(t.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var $a=!1,tt=!1,nE=typeof WeakSet=="function"?WeakSet:Set,U=null;function Zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Hc(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var Zh=!1;function rE(e,t){if(Tc=ms,e=av(),hd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,f=0,c=e,d=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(s=a+i),c!==o||r!==0&&c.nodeType!==3||(l=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(v=c.firstChild)!==null;)d=c,c=v;for(;;){if(c===e)break t;if(d===n&&++u===i&&(s=a),d===o&&++f===r&&(l=a),(v=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:e,selectionRange:n},ms=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,x=g.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?m:Lt(t.type,m),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(S){Pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=Zh,Zh=!1,g}function co(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Hc(t,n,o)}i=i.next}while(i!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function r1(e){var t=e.alternate;t!==null&&(e.alternate=null,r1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[Ro],delete t[Rc],delete t[D2],delete t[M2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function i1(e){return e.tag===5||e.tag===3||e.tag===4}function em(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||i1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vs));else if(r!==4&&(e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}var We=null,zt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)o1(e,t,n),n=n.sibling}function o1(e,t,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:tt||Zr(n,t);case 6:var r=We,i=zt;We=null,Tn(e,t,n),We=r,zt=i,We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?xu(e.parentNode,n):e.nodeType===1&&xu(e,n),$o(e)):xu(We,n.stateNode));break;case 4:r=We,i=zt,We=n.stateNode.containerInfo,zt=!0,Tn(e,t,n),We=r,zt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Hc(n,t,a),i=i.next}while(i!==r)}Tn(e,t,n);break;case 1:if(!tt&&(Zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Pe(n,t,s)}Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Tn(e,t,n),tt=r):Tn(e,t,n);break;default:Tn(e,t,n)}}function tm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nE),t.forEach(function(r){var i=dE.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:We=s.stateNode,zt=!1;break e;case 3:We=s.stateNode.containerInfo,zt=!0;break e;case 4:We=s.stateNode.containerInfo,zt=!0;break e}s=s.return}if(We===null)throw Error(j(160));o1(o,a,i),We=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)a1(t,e),t=t.sibling}function a1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Wt(e),r&4){try{co(3,e,e.return),vl(3,e)}catch(m){Pe(e,e.return,m)}try{co(5,e,e.return)}catch(m){Pe(e,e.return,m)}}break;case 1:Ft(t,e),Wt(e),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(Ft(t,e),Wt(e),r&512&&n!==null&&Zr(n,n.return),e.flags&32){var i=e.stateNode;try{Eo(i,"")}catch(m){Pe(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&$0(i,o),vc(s,a);var u=vc(s,o);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?R0(i,c):f==="dangerouslySetInnerHTML"?C0(i,c):f==="children"?Eo(i,c):td(i,f,c,u)}switch(s){case"input":pc(i,o);break;case"textarea":T0(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?ii(i,!!o.multiple,v,!1):d!==!!o.multiple&&(o.defaultValue!=null?ii(i,!!o.multiple,o.defaultValue,!0):ii(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ro]=o}catch(m){Pe(e,e.return,m)}}break;case 6:if(Ft(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Pe(e,e.return,m)}}break;case 3:if(Ft(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(t.containerInfo)}catch(m){Pe(e,e.return,m)}break;case 4:Ft(t,e),Wt(e);break;case 13:Ft(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fd=Ce())),r&4&&tm(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||f,Ft(t,e),tt=u):Ft(t,e),Wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(U=e,f=e.child;f!==null;){for(c=U=f;U!==null;){switch(d=U,v=d.child,d.tag){case 0:case 11:case 14:case 15:co(4,d,d.return);break;case 1:Zr(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Pe(r,n,m)}}break;case 5:Zr(d,d.return);break;case 22:if(d.memoizedState!==null){rm(c);continue}}v!==null?(v.return=d,U=v):rm(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=j0("display",a))}catch(m){Pe(e,e.return,m)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){Pe(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ft(t,e),Wt(e),r&4&&tm(e);break;case 21:break;default:Ft(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(i1(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Eo(i,""),r.flags&=-33);var o=em(e);qc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=em(e);Kc(e,s,a);break;default:throw Error(j(161))}}catch(l){Pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function iE(e,t,n){U=e,s1(e)}function s1(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||$a;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||tt;s=$a;var u=tt;if($a=a,(tt=l)&&!u)for(U=i;U!==null;)a=U,l=a.child,a.tag===22&&a.memoizedState!==null?im(i):l!==null?(l.return=a,U=l):im(i);for(;o!==null;)U=o,s1(o),o=o.sibling;U=i,$a=s,tt=u}nm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):nm(e)}}function nm(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&$o(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}tt||t.flags&512&&Gc(t)}catch(d){Pe(t,t.return,d)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function rm(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function im(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(l){Pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Pe(t,i,l)}}var o=t.return;try{Gc(t)}catch(l){Pe(t,o,l)}break;case 5:var a=t.return;try{Gc(t)}catch(l){Pe(t,a,l)}}}catch(l){Pe(t,t.return,l)}if(t===e){U=null;break}var s=t.sibling;if(s!==null){s.return=t.return,U=s;break}U=t.return}}var oE=Math.ceil,Ps=En.ReactCurrentDispatcher,Rd=En.ReactCurrentOwner,Tt=En.ReactCurrentBatchConfig,re=0,Ue=null,Ae=null,qe=0,ht=0,ei=ar(0),ze=0,zo=null,kr=0,xl=0,Ad=0,fo=null,st=null,Fd=0,xi=1/0,cn=null,Cs=!1,Yc=null,Gn=null,Ta=!1,zn=null,js=0,po=0,Qc=null,Ya=-1,Qa=0;function it(){return re&6?Ce():Ya!==-1?Ya:Ya=Ce()}function Kn(e){return e.mode&1?re&2&&qe!==0?qe&-qe:B2.transition!==null?(Qa===0&&(Qa=W0()),Qa):(e=ue,e!==0||(e=window.event,e=e===void 0?16:X0(e.type)),e):1}function Bt(e,t,n,r){if(50<po)throw po=0,Qc=null,Error(j(185));ta(e,n,r),(!(re&2)||e!==Ue)&&(e===Ue&&(!(re&2)&&(xl|=n),ze===4&&Nn(e,qe)),dt(e,r),n===1&&re===0&&!(t.mode&1)&&(xi=Ce()+500,ml&&sr()))}function dt(e,t){var n=e.callbackNode;BS(e,t);var r=hs(e,e===Ue?qe:0);if(r===0)n!==null&&ph(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ph(n),t===1)e.tag===0?U2(om.bind(null,e)):gv(om.bind(null,e)),L2(function(){!(re&6)&&sr()}),n=null;else{switch(H0(r)){case 1:n=ad;break;case 4:n=B0;break;case 16:n=ps;break;case 536870912:n=V0;break;default:n=ps}n=m1(n,l1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function l1(e,t){if(Ya=-1,Qa=0,re&6)throw Error(j(327));var n=e.callbackNode;if(ui()&&e.callbackNode!==n)return null;var r=hs(e,e===Ue?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Rs(e,r);else{t=r;var i=re;re|=2;var o=c1();(Ue!==e||qe!==t)&&(cn=null,xi=Ce()+500,vr(e,t));do try{lE();break}catch(s){u1(e,s)}while(1);xd(),Ps.current=o,re=i,Ae!==null?t=0:(Ue=null,qe=0,t=ze)}if(t!==0){if(t===2&&(i=Ec(e),i!==0&&(r=i,t=Xc(e,i))),t===1)throw n=zo,vr(e,0),Nn(e,r),dt(e,Ce()),n;if(t===6)Nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!aE(i)&&(t=Rs(e,r),t===2&&(o=Ec(e),o!==0&&(r=o,t=Xc(e,o))),t===1))throw n=zo,vr(e,0),Nn(e,r),dt(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:fr(e,st,cn);break;case 3:if(Nn(e,r),(r&130023424)===r&&(t=Fd+500-Ce(),10<t)){if(hs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jc(fr.bind(null,e,st,cn),t);break}fr(e,st,cn);break;case 4:if(Nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ut(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oE(r/1960))-r,10<r){e.timeoutHandle=jc(fr.bind(null,e,st,cn),r);break}fr(e,st,cn);break;case 5:fr(e,st,cn);break;default:throw Error(j(329))}}}return dt(e,Ce()),e.callbackNode===n?l1.bind(null,e):null}function Xc(e,t){var n=fo;return e.current.memoizedState.isDehydrated&&(vr(e,t).flags|=256),e=Rs(e,t),e!==2&&(t=st,st=n,t!==null&&Jc(t)),e}function Jc(e){st===null?st=e:st.push.apply(st,e)}function aE(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t){for(t&=~Ad,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ut(t),r=1<<n;e[n]=-1,t&=~r}}function om(e){if(re&6)throw Error(j(327));ui();var t=hs(e,0);if(!(t&1))return dt(e,Ce()),null;var n=Rs(e,t);if(e.tag!==0&&n===2){var r=Ec(e);r!==0&&(t=r,n=Xc(e,r))}if(n===1)throw n=zo,vr(e,0),Nn(e,t),dt(e,Ce()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fr(e,st,cn),dt(e,Ce()),null}function Nd(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(xi=Ce()+500,ml&&sr())}}function _r(e){zn!==null&&zn.tag===0&&!(re&6)&&ui();var t=re;re|=1;var n=Tt.transition,r=ue;try{if(Tt.transition=null,ue=1,e)return e()}finally{ue=r,Tt.transition=n,re=t,!(re&6)&&sr()}}function Id(){ht=ei.current,ve(ei)}function vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,I2(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xs();break;case 3:yi(),ve(ct),ve(nt),_d();break;case 5:kd(r);break;case 4:yi();break;case 13:ve(Ee);break;case 19:ve(Ee);break;case 10:wd(r.type._context);break;case 22:case 23:Id()}n=n.return}if(Ue=e,Ae=e=qn(e.current,null),qe=ht=t,ze=0,zo=null,Ad=xl=kr=0,st=fo=null,mr!==null){for(t=0;t<mr.length;t++)if(n=mr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}mr=null}return e}function u1(e,t){do{var n=Ae;try{if(xd(),Ga.current=Ts,$s){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$s=!1}if(Er=0,Me=Le=ke=null,uo=!1,No=0,Rd.current=null,n===null||n.return===null){ze=1,zo=t,Ae=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=qe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Gh(a);if(v!==null){v.flags&=-257,Kh(v,a,s,o,t),v.mode&1&&Hh(o,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}else{if(!(t&1)){Hh(o,u,t),Ld();break e}l=Error(j(426))}}else if(Se&&s.mode&1){var x=Gh(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Kh(x,a,s,o,t),yd(vi(l,s));break e}}o=l=vi(l,s),ze!==4&&(ze=2),fo===null?fo=[o]:fo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Gv(o,l,t);zh(o,h);break e;case 1:s=l;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Gn===null||!Gn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Kv(o,s,t);zh(o,S);break e}}o=o.return}while(o!==null)}d1(n)}catch(E){t=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function c1(){var e=Ps.current;return Ps.current=Ts,e===null?Ts:e}function Ld(){(ze===0||ze===3||ze===2)&&(ze=4),Ue===null||!(kr&268435455)&&!(xl&268435455)||Nn(Ue,qe)}function Rs(e,t){var n=re;re|=2;var r=c1();(Ue!==e||qe!==t)&&(cn=null,vr(e,t));do try{sE();break}catch(i){u1(e,i)}while(1);if(xd(),re=n,Ps.current=r,Ae!==null)throw Error(j(261));return Ue=null,qe=0,ze}function sE(){for(;Ae!==null;)f1(Ae)}function lE(){for(;Ae!==null&&!AS();)f1(Ae)}function f1(e){var t=h1(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?d1(e):Ae=t,Rd.current=null}function d1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tE(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Ae=null;return}}else if(n=eE(n,t,ht),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);ze===0&&(ze=5)}function fr(e,t,n){var r=ue,i=Tt.transition;try{Tt.transition=null,ue=1,uE(e,t,n,r)}finally{Tt.transition=i,ue=r}return null}function uE(e,t,n,r){do ui();while(zn!==null);if(re&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(VS(e,o),e===Ue&&(Ae=Ue=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ta||(Ta=!0,m1(ps,function(){return ui(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Tt.transition,Tt.transition=null;var a=ue;ue=1;var s=re;re|=4,Rd.current=null,rE(e,n),a1(n,e),P2(Pc),ms=!!Tc,Pc=Tc=null,e.current=n,iE(n),FS(),re=s,ue=a,Tt.transition=o}else e.current=n;if(Ta&&(Ta=!1,zn=e,js=i),o=e.pendingLanes,o===0&&(Gn=null),LS(n.stateNode),dt(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cs)throw Cs=!1,e=Yc,Yc=null,e;return js&1&&e.tag!==0&&ui(),o=e.pendingLanes,o&1?e===Qc?po++:(po=0,Qc=e):po=0,sr(),null}function ui(){if(zn!==null){var e=H0(js),t=Tt.transition,n=ue;try{if(Tt.transition=null,ue=16>e?16:e,zn===null)var r=!1;else{if(e=zn,zn=null,js=0,re&6)throw Error(j(331));var i=re;for(re|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(U=u;U!==null;){var f=U;switch(f.tag){case 0:case 11:case 15:co(8,f,o)}var c=f.child;if(c!==null)c.return=f,U=c;else for(;U!==null;){f=U;var d=f.sibling,v=f.return;if(r1(f),f===u){U=null;break}if(d!==null){d.return=v,U=d;break}U=v}}}var g=o.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var x=m.sibling;m.sibling=null,m=x}while(m!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:co(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,U=h;break e}U=o.return}}var p=e.current;for(U=p;U!==null;){a=U;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,U=y;else e:for(a=p;U!==null;){if(s=U,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:vl(9,s)}}catch(E){Pe(s,s.return,E)}if(s===a){U=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,U=S;break e}U=s.return}}if(re=i,sr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(cl,e)}catch{}r=!0}return r}finally{ue=n,Tt.transition=t}}return!1}function am(e,t,n){t=vi(n,t),t=Gv(e,t,1),e=Hn(e,t,1),t=it(),e!==null&&(ta(e,1,t),dt(e,t))}function Pe(e,t,n){if(e.tag===3)am(e,e,n);else for(;t!==null;){if(t.tag===3){am(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=vi(n,e),e=Kv(t,e,1),t=Hn(t,e,1),e=it(),t!==null&&(ta(t,1,e),dt(t,e));break}}t=t.return}}function cE(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(qe&n)===n&&(ze===4||ze===3&&(qe&130023424)===qe&&500>Ce()-Fd?vr(e,0):Ad|=n),dt(e,t)}function p1(e,t){t===0&&(e.mode&1?(t=va,va<<=1,!(va&130023424)&&(va=4194304)):t=1);var n=it();e=wn(e,t),e!==null&&(ta(e,t,n),dt(e,n))}function fE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),p1(e,n)}function dE(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),p1(e,n)}var h1;h1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,Z2(e,t,n);ut=!!(e.flags&131072)}else ut=!1,Se&&t.flags&1048576&&yv(t,Ss,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qa(e,t),e=t.pendingProps;var i=hi(t,nt.current);li(t,n),i=$d(null,t,r,e,i,n);var o=Td();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(r)?(o=!0,ws(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sd(t),i.updater=gl,t.stateNode=i,i._reactInternals=t,zc(t,r,e,n),t=Uc(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&md(t),rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=hE(r),e=Lt(r,e),i){case 0:t=Mc(null,t,r,e,n);break e;case 1:t=Qh(null,t,r,e,n);break e;case 11:t=qh(null,t,r,e,n);break e;case 14:t=Yh(null,t,r,Lt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Mc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Qh(e,t,r,i,n);case 3:e:{if(Xv(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,bv(e,t),_s(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=vi(Error(j(423)),t),t=Xh(e,t,r,n,i);break e}else if(r!==i){i=vi(Error(j(424)),t),t=Xh(e,t,r,n,i);break e}else for(mt=Wn(t.stateNode.containerInfo.firstChild),yt=t,Se=!0,Dt=null,n=_v(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){t=bn(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return Ov(t),e===null&&Nc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Cc(r,i)?a=null:o!==null&&Cc(r,o)&&(t.flags|=32),Qv(e,t),rt(e,t,a,n),t.child;case 6:return e===null&&Nc(t),null;case 13:return Jv(e,t,n);case 4:return Ed(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gi(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),qh(e,t,r,i,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(Es,r._currentValue),r._currentValue=a,o!==null)if(Vt(o.value,a)){if(o.children===i.children&&!ct.current){t=bn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ic(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ic(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,li(t,n),i=Ct(i),r=r(i),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,i=Lt(r,t.pendingProps),i=Lt(r.type,i),Yh(e,t,r,i,n);case 15:return qv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),qa(e,t),t.tag=1,ft(r)?(e=!0,ws(t)):e=!1,li(t,n),Ev(t,r,i),zc(t,r,i,n),Uc(null,t,r,!0,e,n);case 19:return Zv(e,t,n);case 22:return Yv(e,t,n)}throw Error(j(156,t.tag))};function m1(e,t){return U0(e,t)}function pE(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,r){return new pE(e,t,n,r)}function zd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hE(e){if(typeof e=="function")return zd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rd)return 11;if(e===id)return 14}return 2}function qn(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xa(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")zd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wr:return xr(n.children,i,o,t);case nd:a=8,i|=8;break;case lc:return e=$t(12,n,t,i|2),e.elementType=lc,e.lanes=o,e;case uc:return e=$t(13,n,t,i),e.elementType=uc,e.lanes=o,e;case cc:return e=$t(19,n,t,i),e.elementType=cc,e.lanes=o,e;case k0:return wl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S0:a=10;break e;case E0:a=9;break e;case rd:a=11;break e;case id:a=14;break e;case jn:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=$t(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xr(e,t,n,r){return e=$t(7,e,r,t),e.lanes=n,e}function wl(e,t,n,r){return e=$t(22,e,r,t),e.elementType=k0,e.lanes=n,e.stateNode={isHidden:!1},e}function $u(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function Tu(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mE(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dd(e,t,n,r,i,o,a,s,l){return e=new mE(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(o),e}function gE(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function g1(e){if(!e)return tr;e=e._reactInternals;e:{if(Cr(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ft(n))return mv(e,n,t)}return t}function y1(e,t,n,r,i,o,a,s,l){return e=Dd(n,r,!0,e,i,o,a,s,l),e.context=g1(null),n=e.current,r=it(),i=Kn(n),o=mn(r,i),o.callback=t??null,Hn(n,o,i),e.current.lanes=i,ta(e,i,r),dt(e,r),e}function bl(e,t,n,r){var i=t.current,o=it(),a=Kn(i);return n=g1(n),t.context===null?t.context=n:t.pendingContext=n,t=mn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Hn(i,t,a),e!==null&&(Bt(e,i,a,o),Ha(e,i,a)),a}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Md(e,t){sm(e,t),(e=e.alternate)&&sm(e,t)}function yE(){return null}var v1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ud(e){this._internalRoot=e}Sl.prototype.render=Ud.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));bl(e,t,null,null)};Sl.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_r(function(){bl(null,e,null,null)}),t[xn]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=q0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Q0(e)}};function Bd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lm(){}function vE(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=As(a);o.call(u)}}var a=y1(t,r,e,0,null,!1,!1,"",lm);return e._reactRootContainer=a,e[xn]=a.current,Co(e.nodeType===8?e.parentNode:e),_r(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=As(l);s.call(u)}}var l=Dd(e,0,!1,null,null,!1,!1,"",lm);return e._reactRootContainer=l,e[xn]=l.current,Co(e.nodeType===8?e.parentNode:e),_r(function(){bl(t,l,n,r)}),l}function kl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=As(a);s.call(l)}}bl(t,a,e,i)}else a=vE(n,t,e,i,r);return As(a)}G0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=eo(t.pendingLanes);n!==0&&(sd(t,n|1),dt(t,Ce()),!(re&6)&&(xi=Ce()+500,sr()))}break;case 13:_r(function(){var r=wn(e,1);if(r!==null){var i=it();Bt(r,e,1,i)}}),Md(e,1)}};ld=function(e){if(e.tag===13){var t=wn(e,134217728);if(t!==null){var n=it();Bt(t,e,134217728,n)}Md(e,134217728)}};K0=function(e){if(e.tag===13){var t=Kn(e),n=wn(e,t);if(n!==null){var r=it();Bt(n,e,t,r)}Md(e,t)}};q0=function(){return ue};Y0=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};wc=function(e,t,n){switch(t){case"input":if(pc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hl(r);if(!i)throw Error(j(90));O0(r),pc(r,i)}}}break;case"textarea":T0(e,n);break;case"select":t=n.value,t!=null&&ii(e,!!n.multiple,t,!1)}};N0=Nd;I0=_r;var xE={usingClientEntryPoint:!1,Events:[ra,qr,hl,A0,F0,Nd]},qi={findFiberByHostInstance:hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wE={bundleType:qi.bundleType,version:qi.version,rendererPackageName:qi.rendererPackageName,rendererConfig:qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=D0(e),e===null?null:e.stateNode},findFiberByHostInstance:qi.findFiberByHostInstance||yE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{cl=Pa.inject(wE),Jt=Pa}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE;bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bd(t))throw Error(j(200));return gE(e,t,null,n)};bt.createRoot=function(e,t){if(!Bd(e))throw Error(j(299));var n=!1,r="",i=v1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dd(e,1,!1,null,null,n,!1,r,i),e[xn]=t.current,Co(e.nodeType===8?e.parentNode:e),new Ud(t)};bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=D0(t),e=e===null?null:e.stateNode,e};bt.flushSync=function(e){return _r(e)};bt.hydrate=function(e,t,n){if(!El(t))throw Error(j(200));return kl(null,e,t,!0,n)};bt.hydrateRoot=function(e,t,n){if(!Bd(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=v1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=y1(t,null,e,1,n??null,i,!1,o,a),e[xn]=t.current,Co(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Sl(t)};bt.render=function(e,t,n){if(!El(t))throw Error(j(200));return kl(null,e,t,!1,n)};bt.unmountComponentAtNode=function(e){if(!El(e))throw Error(j(40));return e._reactRootContainer?(_r(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};bt.unstable_batchedUpdates=Nd;bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!El(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return kl(e,t,n,!1,r)};bt.version="18.2.0-next-9e3b772b8-20220608";function x1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x1)}catch(e){console.error(e)}}x1(),y0.exports=bt;var Vd=y0.exports,um=Vd;ac.createRoot=um.createRoot,ac.hydrateRoot=um.hydrateRoot;var w1={exports:{}},b1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=w;function bE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var SE=typeof Object.is=="function"?Object.is:bE,EE=wi.useState,kE=wi.useEffect,_E=wi.useLayoutEffect,OE=wi.useDebugValue;function $E(e,t){var n=t(),r=EE({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return _E(function(){i.value=n,i.getSnapshot=t,Pu(i)&&o({inst:i})},[e,n,t]),kE(function(){return Pu(i)&&o({inst:i}),e(function(){Pu(i)&&o({inst:i})})},[e]),OE(n),n}function Pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!SE(e,n)}catch{return!0}}function TE(e,t){return t()}var PE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?TE:$E;b1.useSyncExternalStore=wi.useSyncExternalStore!==void 0?wi.useSyncExternalStore:PE;w1.exports=b1;var CE=w1.exports,S1={exports:{}},E1={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=w,jE=CE;function RE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var AE=typeof Object.is=="function"?Object.is:RE,FE=jE.useSyncExternalStore,NE=_l.useRef,IE=_l.useEffect,LE=_l.useMemo,zE=_l.useDebugValue;E1.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=NE(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=LE(function(){function l(v){if(!u){if(u=!0,f=v,v=r(v),i!==void 0&&a.hasValue){var g=a.value;if(i(g,v))return c=g}return c=v}if(g=c,AE(f,v))return g;var m=r(v);return i!==void 0&&i(g,m)?g:(f=v,c=m)}var u=!1,f,c,d=n===void 0?null:n;return[function(){return l(t())},d===null?void 0:function(){return l(d())}]},[t,n,r,i]);var s=FE(e,o[0],o[1]);return IE(function(){a.hasValue=!0,a.value=s},[s]),zE(s),s};S1.exports=E1;var DE=S1.exports;function ME(e){e()}let k1=ME;const UE=e=>k1=e,BE=()=>k1,cm=Symbol.for("react-redux-context"),fm=typeof globalThis<"u"?globalThis:{};function VE(){var e;if(!w.createContext)return{};const t=(e=fm[cm])!=null?e:fm[cm]=new Map;let n=t.get(w.createContext);return n||(n=w.createContext(null),t.set(w.createContext,n)),n}const nr=VE();function Wd(e=nr){return function(){return w.useContext(e)}}const _1=Wd(),WE=()=>{throw new Error("uSES not initialized!")};let O1=WE;const HE=e=>{O1=e},GE=(e,t)=>e===t;function KE(e=nr){const t=e===nr?_1:Wd(e);return function(r,i={}){const{equalityFn:o=GE,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:f,stabilityCheck:c,noopCheck:d}=t();w.useRef(!0);const v=w.useCallback({[r.name](m){return r(m)}}[r.name],[r,c,a]),g=O1(u.addNestedSub,l.getState,f||l.getState,v,o);return w.useDebugValue(g),g}}const ji=KE();var fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=Symbol.for("react.element"),Gd=Symbol.for("react.portal"),Ol=Symbol.for("react.fragment"),$l=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),Pl=Symbol.for("react.provider"),Cl=Symbol.for("react.context"),qE=Symbol.for("react.server_context"),jl=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Fl=Symbol.for("react.memo"),Nl=Symbol.for("react.lazy"),YE=Symbol.for("react.offscreen"),$1;$1=Symbol.for("react.module.reference");function Rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Hd:switch(e=e.type,e){case Ol:case Tl:case $l:case Rl:case Al:return e;default:switch(e=e&&e.$$typeof,e){case qE:case Cl:case jl:case Nl:case Fl:case Pl:return e;default:return t}}case Gd:return t}}}fe.ContextConsumer=Cl;fe.ContextProvider=Pl;fe.Element=Hd;fe.ForwardRef=jl;fe.Fragment=Ol;fe.Lazy=Nl;fe.Memo=Fl;fe.Portal=Gd;fe.Profiler=Tl;fe.StrictMode=$l;fe.Suspense=Rl;fe.SuspenseList=Al;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(e){return Rt(e)===Cl};fe.isContextProvider=function(e){return Rt(e)===Pl};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hd};fe.isForwardRef=function(e){return Rt(e)===jl};fe.isFragment=function(e){return Rt(e)===Ol};fe.isLazy=function(e){return Rt(e)===Nl};fe.isMemo=function(e){return Rt(e)===Fl};fe.isPortal=function(e){return Rt(e)===Gd};fe.isProfiler=function(e){return Rt(e)===Tl};fe.isStrictMode=function(e){return Rt(e)===$l};fe.isSuspense=function(e){return Rt(e)===Rl};fe.isSuspenseList=function(e){return Rt(e)===Al};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ol||e===Tl||e===$l||e===Rl||e===Al||e===YE||typeof e=="object"&&e!==null&&(e.$$typeof===Nl||e.$$typeof===Fl||e.$$typeof===Pl||e.$$typeof===Cl||e.$$typeof===jl||e.$$typeof===$1||e.getModuleId!==void 0)};fe.typeOf=Rt;function QE(){const e=BE();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const dm={notify(){},get:()=>[]};function XE(e,t){let n,r=dm,i=0,o=!1;function a(m){f();const x=r.subscribe(m);let h=!1;return()=>{h||(h=!0,x(),c())}}function s(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return o}function f(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=QE())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=dm)}function d(){o||(o=!0,f())}function v(){o&&(o=!1,c())}const g={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:v,getListeners:()=>r};return g}const JE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZE=JE?w.useLayoutEffect:w.useEffect;function ek({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const a=w.useMemo(()=>{const u=XE(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),s=w.useMemo(()=>e.getState(),[e]);ZE(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,s]);const l=t||nr;return w.createElement(l.Provider,{value:a},n)}function T1(e=nr){const t=e===nr?_1:Wd(e);return function(){const{store:r}=t();return r}}const tk=T1();function nk(e=nr){const t=e===nr?tk:T1(e);return function(){return t().dispatch}}const P1=nk();HE(DE.useSyncExternalStoreWithSelector);UE(Vd.unstable_batchedUpdates);function Ja(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ja=function(n){return typeof n}:Ja=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ja(e)}function rk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ik(e,t,n){return t&&pm(e.prototype,t),n&&pm(e,n),e}function ok(e,t){return t&&(Ja(t)==="object"||typeof t=="function")?t:Za(e)}function Zc(e){return Zc=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Zc(e)}function Za(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ak(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ef(e,t)}function ef(e,t){return ef=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ef(e,t)}function es(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C1=function(e){ak(t,e);function t(){var n,r;rk(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=ok(this,(n=Zc(t)).call.apply(n,[this].concat(o))),es(Za(r),"state",{bootstrapped:!1}),es(Za(r),"_unsubscribe",void 0),es(Za(r),"handlePersistorState",function(){var s=r.props.persistor,l=s.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return ik(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(w.PureComponent);es(C1,"defaultProps",{children:null,loading:null});function Mt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function rr(e){return!!e&&!!e[we]}function Sn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===mk}(e)||Array.isArray(e)||!!e[wm]||!!(!((t=e.constructor)===null||t===void 0)&&t[wm])||Kd(e)||qd(e))}function Or(e,t,n){n===void 0&&(n=!1),Ri(e)===0?(n?Object.keys:fi)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Ri(e){var t=e[we];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Kd(e)?2:qd(e)?3:0}function ci(e,t){return Ri(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function sk(e,t){return Ri(e)===2?e.get(t):e[t]}function j1(e,t,n){var r=Ri(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function R1(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Kd(e){return pk&&e instanceof Map}function qd(e){return hk&&e instanceof Set}function dr(e){return e.o||e.t}function Yd(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=F1(e);delete t[we];for(var n=fi(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Qd(e,t){return t===void 0&&(t=!1),Xd(e)||rr(e)||!Sn(e)||(Ri(e)>1&&(e.set=e.add=e.clear=e.delete=lk),Object.freeze(e),t&&Or(e,function(n,r){return Qd(r,!0)},!0)),e}function lk(){Mt(2)}function Xd(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function en(e){var t=of[e];return t||Mt(18,e),t}function uk(e,t){of[e]||(of[e]=t)}function tf(){return Do}function Cu(e,t){t&&(en("Patches"),e.u=[],e.s=[],e.v=t)}function Fs(e){nf(e),e.p.forEach(ck),e.p=null}function nf(e){e===Do&&(Do=e.l)}function hm(e){return Do={p:[],l:Do,h:e,m:!0,_:0}}function ck(e){var t=e[we];t.i===0||t.i===1?t.j():t.g=!0}function ju(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||en("ES5").S(t,e,r),r?(n[we].P&&(Fs(t),Mt(4)),Sn(e)&&(e=Ns(t,e),t.l||Is(t,e)),t.u&&en("Patches").M(n[we].t,e,t.u,t.s)):e=Ns(t,n,[]),Fs(t),t.u&&t.v(t.u,t.s),e!==A1?e:void 0}function Ns(e,t,n){if(Xd(t))return t;var r=t[we];if(!r)return Or(t,function(s,l){return mm(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Is(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Yd(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),Or(o,function(s,l){return mm(e,r,i,s,l,n,a)}),Is(e,i,!1),n&&e.u&&en("Patches").N(r,n,e.u,e.s)}return r.o}function mm(e,t,n,r,i,o,a){if(rr(i)){var s=Ns(e,i,o&&t&&t.i!==3&&!ci(t.R,r)?o.concat(r):void 0);if(j1(n,r,s),!rr(s))return;e.m=!1}else a&&n.add(i);if(Sn(i)&&!Xd(i)){if(!e.h.D&&e._<1)return;Ns(e,i),t&&t.A.l||Is(e,i)}}function Is(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Qd(t,n)}function Ru(e,t){var n=e[we];return(n?dr(n):e)[t]}function gm(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function In(e){e.P||(e.P=!0,e.l&&In(e.l))}function Au(e){e.o||(e.o=Yd(e.t))}function rf(e,t,n){var r=Kd(t)?en("MapSet").F(t,n):qd(t)?en("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),s={i:a?1:0,A:o?o.A:tf(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=s,u=Mo;a&&(l=[s],u=no);var f=Proxy.revocable(l,u),c=f.revoke,d=f.proxy;return s.k=d,s.j=c,d}(t,n):en("ES5").J(t,n);return(n?n.A:tf()).p.push(r),r}function fk(e){return rr(e)||Mt(22,e),function t(n){if(!Sn(n))return n;var r,i=n[we],o=Ri(n);if(i){if(!i.P&&(i.i<4||!en("ES5").K(i)))return i.t;i.I=!0,r=ym(n,o),i.I=!1}else r=ym(n,o);return Or(r,function(a,s){i&&sk(i.t,a)===s||j1(r,a,t(s))}),o===3?new Set(r):r}(e)}function ym(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Yd(e)}function dk(){function e(o,a){var s=i[o];return s?s.enumerable=a:i[o]=s={configurable:!0,enumerable:a,get:function(){var l=this[we];return Mo.get(l,o)},set:function(l){var u=this[we];Mo.set(u,o,l)}},s}function t(o){for(var a=o.length-1;a>=0;a--){var s=o[a][we];if(!s.P)switch(s.i){case 5:r(s)&&In(s);break;case 4:n(s)&&In(s)}}}function n(o){for(var a=o.t,s=o.k,l=fi(s),u=l.length-1;u>=0;u--){var f=l[u];if(f!==we){var c=a[f];if(c===void 0&&!ci(a,f))return!0;var d=s[f],v=d&&d[we];if(v?v.t!==c:!R1(d,c))return!0}}var g=!!a[we];return l.length!==fi(a).length+(g?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var i={};uk("ES5",{J:function(o,a){var s=Array.isArray(o),l=function(f,c){if(f){for(var d=Array(c.length),v=0;v<c.length;v++)Object.defineProperty(d,""+v,e(v,!0));return d}var g=F1(c);delete g[we];for(var m=fi(g),x=0;x<m.length;x++){var h=m[x];g[h]=e(h,f||!!g[h].enumerable)}return Object.create(Object.getPrototypeOf(c),g)}(s,o),u={i:s?5:4,A:a?a.A:tf(),P:!1,I:!1,R:{},l:a,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,we,{value:u,writable:!0}),l},S:function(o,a,s){s?rr(a)&&a[we].A===o&&t(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var f=u[we];if(f){var c=f.t,d=f.k,v=f.R,g=f.i;if(g===4)Or(d,function(y){y!==we&&(c[y]!==void 0||ci(c,y)?v[y]||l(d[y]):(v[y]=!0,In(f)))}),Or(c,function(y){d[y]!==void 0||ci(d,y)||(v[y]=!1,In(f))});else if(g===5){if(r(f)&&(In(f),v.length=!0),d.length<c.length)for(var m=d.length;m<c.length;m++)v[m]=!1;else for(var x=c.length;x<d.length;x++)v[x]=!0;for(var h=Math.min(d.length,c.length),p=0;p<h;p++)d.hasOwnProperty(p)||(v[p]=!0),v[p]===void 0&&l(d[p])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var vm,Do,Jd=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",pk=typeof Map<"u",hk=typeof Set<"u",xm=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",A1=Jd?Symbol.for("immer-nothing"):((vm={})["immer-nothing"]=!0,vm),wm=Jd?Symbol.for("immer-draftable"):"__$immer_draftable",we=Jd?Symbol.for("immer-state"):"__$immer_state",mk=""+Object.prototype.constructor,fi=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,F1=Object.getOwnPropertyDescriptors||function(e){var t={};return fi(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},of={},Mo={get:function(e,t){if(t===we)return e;var n=dr(e);if(!ci(n,t))return function(i,o,a){var s,l=gm(o,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Sn(r)?r:r===Ru(e.t,t)?(Au(e),e.o[t]=rf(e.A.h,r,e)):r},has:function(e,t){return t in dr(e)},ownKeys:function(e){return Reflect.ownKeys(dr(e))},set:function(e,t,n){var r=gm(dr(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Ru(dr(e),t),o=i==null?void 0:i[we];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(R1(n,i)&&(n!==void 0||ci(e.t,t)))return!0;Au(e),In(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Ru(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Au(e),In(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=dr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Mt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Mt(12)}},no={};Or(Mo,function(e,t){no[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),no.deleteProperty=function(e,t){return no.set.call(this,e,t,void 0)},no.set=function(e,t,n){return Mo.set.call(this,e[0],t,n,e[0])};var gk=function(){function e(n){var r=this;this.O=xm,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var s=o;o=i;var l=r;return function(m){var x=this;m===void 0&&(m=s);for(var h=arguments.length,p=Array(h>1?h-1:0),y=1;y<h;y++)p[y-1]=arguments[y];return l.produce(m,function(S){var E;return(E=o).call.apply(E,[x,S].concat(p))})}}var u;if(typeof o!="function"&&Mt(6),a!==void 0&&typeof a!="function"&&Mt(7),Sn(i)){var f=hm(r),c=rf(r,i,void 0),d=!0;try{u=o(c),d=!1}finally{d?Fs(f):nf(f)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return Cu(f,a),ju(m,f)},function(m){throw Fs(f),m}):(Cu(f,a),ju(u,f))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===A1&&(u=void 0),r.D&&Qd(u,!0),a){var v=[],g=[];en("Patches").M(i,u,v,g),a(v,g)}return u}Mt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var f=arguments.length,c=Array(f>1?f-1:0),d=1;d<f;d++)c[d-1]=arguments[d];return r.produceWithPatches(u,function(v){return i.apply(void 0,[v].concat(c))})};var a,s,l=r.produce(i,o,function(u,f){a=u,s=f});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Sn(n)||Mt(8),rr(n)&&(n=fk(n));var r=hm(this),i=rf(this,n,void 0);return i[we].C=!0,nf(r),i},t.finishDraft=function(n,r){var i=n&&n[we],o=i.A;return Cu(o,r),ju(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!xm&&Mt(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=en("Patches").$;return rr(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),xt=new gk,N1=xt.produce;xt.produceWithPatches.bind(xt);xt.setAutoFreeze.bind(xt);xt.setUseProxies.bind(xt);xt.applyPatches.bind(xt);xt.createDraft.bind(xt);xt.finishDraft.bind(xt);function Uo(e){"@babel/helpers - typeof";return Uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Uo(e)}function yk(e,t){if(Uo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Uo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vk(e){var t=yk(e,"string");return Uo(t)=="symbol"?t:String(t)}function xk(e,t,n){return t=vk(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bm(Object(n),!0).forEach(function(r){xk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function et(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Em=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Fu=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ls={INIT:"@@redux/INIT"+Fu(),REPLACE:"@@redux/REPLACE"+Fu(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Fu()}};function wk(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Zd(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(et(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(et(1));return n(Zd)(e,t)}if(typeof e!="function")throw new Error(et(2));var i=e,o=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function f(){if(l)throw new Error(et(3));return o}function c(m){if(typeof m!="function")throw new Error(et(4));if(l)throw new Error(et(5));var x=!0;return u(),s.push(m),function(){if(x){if(l)throw new Error(et(6));x=!1,u();var p=s.indexOf(m);s.splice(p,1),a=null}}}function d(m){if(!wk(m))throw new Error(et(7));if(typeof m.type>"u")throw new Error(et(8));if(l)throw new Error(et(9));try{l=!0,o=i(o,m)}finally{l=!1}for(var x=a=s,h=0;h<x.length;h++){var p=x[h];p()}return m}function v(m){if(typeof m!="function")throw new Error(et(10));i=m,d({type:Ls.REPLACE})}function g(){var m,x=c;return m={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(et(11));function y(){p.next&&p.next(f())}y();var S=x(y);return{unsubscribe:S}}},m[Em]=function(){return this},m}return d({type:Ls.INIT}),r={dispatch:d,subscribe:c,getState:f,replaceReducer:v},r[Em]=g,r}function bk(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Ls.INIT});if(typeof r>"u")throw new Error(et(12));if(typeof n(void 0,{type:Ls.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(et(13))})}function Sk(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{bk(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var f=!1,c={},d=0;d<o.length;d++){var v=o[d],g=n[v],m=l[v],x=g(m,u);if(typeof x>"u")throw u&&u.type,new Error(et(14));c[v]=x,f=f||x!==m}return f=f||o.length!==Object.keys(l).length,f?c:l}}function zs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Ek(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(et(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return o=zs.apply(void 0,s)(i.dispatch),Sm(Sm({},i),{},{dispatch:o})}}}function I1(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(s){return typeof s=="function"?s(i,o,e):a(s)}}};return t}var L1=I1();L1.withExtraArgument=I1;const km=L1;var z1=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),kk=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(f){return l([u,f])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},bi=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},_k=Object.defineProperty,Ok=Object.defineProperties,$k=Object.getOwnPropertyDescriptors,_m=Object.getOwnPropertySymbols,Tk=Object.prototype.hasOwnProperty,Pk=Object.prototype.propertyIsEnumerable,Om=function(e,t,n){return t in e?_k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Yn=function(e,t){for(var n in t||(t={}))Tk.call(t,n)&&Om(e,n,t[n]);if(_m)for(var r=0,i=_m(t);r<i.length;r++){var n=i[r];Pk.call(t,n)&&Om(e,n,t[n])}return e},Nu=function(e,t){return Ok(e,$k(t))},Ck=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{s(n.next(l))}catch(u){i(u)}},a=function(l){try{s(n.throw(l))}catch(u){i(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,a)};s((n=n.apply(e,t)).next())})},jk=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?zs:zs.apply(null,arguments)};function Rk(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Qn(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Yn(Yn({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var Ak=function(e){z1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,bi([void 0],n[0].concat(this)))):new(t.bind.apply(t,bi([void 0],n.concat(this))))},t}(Array),Fk=function(e){z1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,bi([void 0],n[0].concat(this)))):new(t.bind.apply(t,bi([void 0],n.concat(this))))},t}(Array);function af(e){return Sn(e)?N1(e,function(){}):e}function Nk(e){return typeof e=="boolean"}function Ik(){return function(t){return Lk(t)}}function Lk(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new Ak;return n&&(Nk(n)?r.push(km):r.push(km.withExtraArgument(n.extraArgument))),r}var zk=!0;function Dk(e){var t=Ik(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,f=u===void 0?void 0:u,c=n.enhancers,d=c===void 0?void 0:c,v;if(typeof i=="function")v=i;else if(Rk(i))v=Sk(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=a;typeof g=="function"&&(g=g(t));var m=Ek.apply(void 0,g),x=zs;l&&(x=jk(Yn({trace:!zk},typeof l=="object"&&l)));var h=new Fk(m),p=h;Array.isArray(d)?p=bi([m],d):typeof d=="function"&&(p=d(h));var y=x.apply(void 0,p);return Zd(v,f,y)}function D1(e){var t={},n=[],r,i={addCase:function(o,a){var s=typeof o=="string"?o:o.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function Mk(e){return typeof e=="function"}function Uk(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?D1(t):[t,n,r],o=i[0],a=i[1],s=i[2],l;if(Mk(e))l=function(){return af(e())};else{var u=af(e);l=function(){return u}}function f(c,d){c===void 0&&(c=l());var v=bi([o[d.type]],a.filter(function(g){var m=g.matcher;return m(d)}).map(function(g){var m=g.reducer;return m}));return v.filter(function(g){return!!g}).length===0&&(v=[s]),v.reduce(function(g,m){if(m)if(rr(g)){var x=g,h=m(x,d);return h===void 0?g:h}else{if(Sn(g))return N1(g,function(p){return m(p,d)});var h=m(g,d);if(h===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return g},c)}return f.getInitialState=l,f}function Bk(e,t){return e+"/"+t}function Vk(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:af(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},s={};i.forEach(function(f){var c=r[f],d=Bk(t,f),v,g;"reducer"in c?(v=c.reducer,g=c.prepare):v=c,o[f]=v,a[d]=v,s[f]=g?Qn(d,g):Qn(d)});function l(){var f=typeof e.extraReducers=="function"?D1(e.extraReducers):[e.extraReducers],c=f[0],d=c===void 0?{}:c,v=f[1],g=v===void 0?[]:v,m=f[2],x=m===void 0?void 0:m,h=Yn(Yn({},d),a);return Uk(n,function(p){for(var y in h)p.addCase(y,h[y]);for(var S=0,E=g;S<E.length;S++){var T=E[S];p.addMatcher(T.matcher,T.reducer)}x&&p.addDefaultCase(x)})}var u;return{name:t,reducer:function(f,c){return u||(u=l()),u(f,c)},actions:s,caseReducers:o,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var Wk="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Hk=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Wk[Math.random()*64|0];return t},Gk=["name","message","stack","code"],Iu=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),$m=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Kk=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Gk;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},Ai=function(){function e(t,n,r){var i=Qn(t+"/fulfilled",function(u,f,c,d){return{payload:u,meta:Nu(Yn({},d||{}),{arg:c,requestId:f,requestStatus:"fulfilled"})}}),o=Qn(t+"/pending",function(u,f,c){return{payload:void 0,meta:Nu(Yn({},c||{}),{arg:f,requestId:u,requestStatus:"pending"})}}),a=Qn(t+"/rejected",function(u,f,c,d,v){return{payload:d,error:(r&&r.serializeError||Kk)(u||"Rejected"),meta:Nu(Yn({},v||{}),{arg:c,requestId:f,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(f,c,d){var v=r!=null&&r.idGenerator?r.idGenerator(u):Hk(),g=new s,m;function x(p){m=p,g.abort()}var h=function(){return Ck(this,null,function(){var p,y,S,E,T,O,A;return kk(this,function(B){switch(B.label){case 0:return B.trys.push([0,4,,5]),E=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,u,{getState:c,extra:d}),Yk(E)?[4,E]:[3,2];case 1:E=B.sent(),B.label=2;case 2:if(E===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return T=new Promise(function(D,G){return g.signal.addEventListener("abort",function(){return G({name:"AbortError",message:m||"Aborted"})})}),f(o(v,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:v,arg:u},{getState:c,extra:d}))),[4,Promise.race([T,Promise.resolve(n(u,{dispatch:f,getState:c,extra:d,requestId:v,signal:g.signal,abort:x,rejectWithValue:function(D,G){return new Iu(D,G)},fulfillWithValue:function(D,G){return new $m(D,G)}})).then(function(D){if(D instanceof Iu)throw D;return D instanceof $m?i(D.payload,v,u,D.meta):i(D,v,u)})])];case 3:return S=B.sent(),[3,5];case 4:return O=B.sent(),S=O instanceof Iu?a(null,v,u,O.payload,O.meta):a(O,v,u),[3,5];case 5:return A=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,A||f(S),[2,S]}})})}();return Object.assign(h,{abort:x,requestId:v,arg:u,unwrap:function(){return h.then(qk)}})}}return Object.assign(l,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function qk(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Yk(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ep="listenerMiddleware";Qn(ep+"/add");Qn(ep+"/removeAll");Qn(ep+"/remove");var Tm;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);dk();var tp="persist:",np="persist/FLUSH",Il="persist/REHYDRATE",rp="persist/PAUSE",ip="persist/PERSIST",op="persist/PURGE",ap="persist/REGISTER",Qk=-1;function ts(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ts=function(n){return typeof n}:ts=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ts(e)}function Pm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xk(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pm(n,!0).forEach(function(r){Jk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zk(e,t,n,r){r.debug;var i=Xk({},n);return e&&ts(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function e_(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:tp).concat(e.key),a=e.storage,s;e.serialize===!1?s=function(E){return E}:typeof e.serialize=="function"?s=e.serialize:s=t_;var l=e.writeFailHandler||null,u={},f={},c=[],d=null,v=null,g=function(E){Object.keys(E).forEach(function(T){h(T)&&u[T]!==E[T]&&c.indexOf(T)===-1&&c.push(T)}),Object.keys(u).forEach(function(T){E[T]===void 0&&h(T)&&c.indexOf(T)===-1&&u[T]!==void 0&&c.push(T)}),d===null&&(d=setInterval(m,i)),u=E};function m(){if(c.length===0){d&&clearInterval(d),d=null;return}var S=c.shift(),E=r.reduce(function(T,O){return O.in(T,S,u)},u[S]);if(E!==void 0)try{f[S]=s(E)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete f[S];c.length===0&&x()}function x(){Object.keys(f).forEach(function(S){u[S]===void 0&&delete f[S]}),v=a.setItem(o,s(f)).catch(p)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function p(S){l&&l(S)}var y=function(){for(;c.length!==0;)m();return v||Promise.resolve()};return{update:g,flush:y}}function t_(e){return JSON.stringify(e)}function n_(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:tp).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=r_,r.getItem(n).then(function(o){if(o)try{var a={},s=i(o);return Object.keys(s).forEach(function(l){a[l]=t.reduceRight(function(u,f){return f.out(u,l,s)},i(s[l]))}),a}catch(l){throw l}else return})}function r_(e){return JSON.parse(e)}function i_(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:tp).concat(e.key);return t.removeItem(n,o_)}function o_(e){}function Cm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cm(n,!0).forEach(function(r){a_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s_(e,t){if(e==null)return{};var n=l_(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function l_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var u_=5e3;function c_(e,t){var n=e.version!==void 0?e.version:Qk;e.debug;var r=e.stateReconciler===void 0?Zk:e.stateReconciler,i=e.getStoredState||n_,o=e.timeout!==void 0?e.timeout:u_,a=null,s=!1,l=!0,u=function(c){return c._persist.rehydrated&&a&&!l&&a.update(c),c};return function(f,c){var d=f||{},v=d._persist,g=s_(d,["_persist"]),m=g;if(c.type===ip){var x=!1,h=function(A,B){x||(c.rehydrate(e.key,A,B),x=!0)};if(o&&setTimeout(function(){!x&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),l=!1,a||(a=e_(e)),v)return ln({},t(m,c),{_persist:v});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function(O){var A=e.migrate||function(B,D){return Promise.resolve(B)};A(O,n).then(function(B){h(B)},function(B){h(void 0,B)})},function(O){h(void 0,O)}),ln({},t(m,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===op)return s=!0,c.result(i_(e)),ln({},t(m,c),{_persist:v});if(c.type===np)return c.result(a&&a.flush()),ln({},t(m,c),{_persist:v});if(c.type===rp)l=!0;else if(c.type===Il){if(s)return ln({},m,{_persist:ln({},v,{rehydrated:!0})});if(c.key===e.key){var p=t(m,c),y=c.payload,S=r!==!1&&y!==void 0?r(y,f,p,e):p,E=ln({},S,{_persist:ln({},v,{rehydrated:!0})});return u(E)}}}if(!v)return t(f,c);var T=t(m,c);return T===m?f:u(ln({},T,{_persist:v}))}}function jm(e){return p_(e)||d_(e)||f_()}function f_(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d_(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function p_(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Rm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rm(n,!0).forEach(function(r){h_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M1={registry:[],bootstrapped:!1},m_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ap:return sf({},t,{registry:[].concat(jm(t.registry),[n.key])});case Il:var r=t.registry.indexOf(n.key),i=jm(t.registry);return i.splice(r,1),sf({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function g_(e,t,n){var r=n||!1,i=Zd(m_,M1,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:ap,key:u})},a=function(u,f,c){var d={type:Il,payload:f,err:c,key:u};e.dispatch(d),i.dispatch(d),r&&s.getState().bootstrapped&&(r(),r=!1)},s=sf({},i,{purge:function(){var u=[];return e.dispatch({type:op,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:np,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:rp})},persist:function(){e.dispatch({type:ip,register:o,rehydrate:a})}});return t&&t.manualPersist||s.persist(),s}var sp={},lp={};lp.__esModule=!0;lp.default=x_;function ns(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ns=function(n){return typeof n}:ns=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ns(e)}function Lu(){}var y_={getItem:Lu,setItem:Lu,removeItem:Lu};function v_(e){if((typeof self>"u"?"undefined":ns(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function x_(e){var t="".concat(e,"Storage");return v_(t)?self[t]:y_}sp.__esModule=!0;sp.default=S_;var w_=b_(lp);function b_(e){return e&&e.__esModule?e:{default:e}}function S_(e){var t=(0,w_.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var U1=void 0,E_=k_(sp);function k_(e){return e&&e.__esModule?e:{default:e}}var __=(0,E_.default)("local");U1=__;function B1(e,t){return function(){return e.apply(t,arguments)}}const{toString:O_}=Object.prototype,{getPrototypeOf:up}=Object,Ll=(e=>t=>{const n=O_.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),rn=e=>(e=e.toLowerCase(),t=>Ll(t)===e),zl=e=>t=>typeof t===e,{isArray:Fi}=Array,Bo=zl("undefined");function $_(e){return e!==null&&!Bo(e)&&e.constructor!==null&&!Bo(e.constructor)&&Pt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const V1=rn("ArrayBuffer");function T_(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&V1(e.buffer),t}const P_=zl("string"),Pt=zl("function"),W1=zl("number"),Dl=e=>e!==null&&typeof e=="object",C_=e=>e===!0||e===!1,rs=e=>{if(Ll(e)!=="object")return!1;const t=up(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},j_=rn("Date"),R_=rn("File"),A_=rn("Blob"),F_=rn("FileList"),N_=e=>Dl(e)&&Pt(e.pipe),I_=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Pt(e.append)&&((t=Ll(e))==="formdata"||t==="object"&&Pt(e.toString)&&e.toString()==="[object FormData]"))},L_=rn("URLSearchParams"),z_=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oa(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Fi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function H1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const G1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),K1=e=>!Bo(e)&&e!==G1;function lf(){const{caseless:e}=K1(this)&&this||{},t={},n=(r,i)=>{const o=e&&H1(t,i)||i;rs(t[o])&&rs(r)?t[o]=lf(t[o],r):rs(r)?t[o]=lf({},r):Fi(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&oa(arguments[r],n);return t}const D_=(e,t,n,{allOwnKeys:r}={})=>(oa(t,(i,o)=>{n&&Pt(i)?e[o]=B1(i,n):e[o]=i},{allOwnKeys:r}),e),M_=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),U_=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},B_=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&up(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},V_=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},W_=e=>{if(!e)return null;if(Fi(e))return e;let t=e.length;if(!W1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},H_=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&up(Uint8Array)),G_=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},K_=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},q_=rn("HTMLFormElement"),Y_=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Am=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Q_=rn("RegExp"),q1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};oa(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},X_=e=>{q1(e,(t,n)=>{if(Pt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Pt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},J_=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Fi(e)?r(e):r(String(e).split(t)),n},Z_=()=>{},eO=(e,t)=>(e=+e,Number.isFinite(e)?e:t),zu="abcdefghijklmnopqrstuvwxyz",Fm="0123456789",Y1={DIGIT:Fm,ALPHA:zu,ALPHA_DIGIT:zu+zu.toUpperCase()+Fm},tO=(e=16,t=Y1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function nO(e){return!!(e&&Pt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const rO=e=>{const t=new Array(10),n=(r,i)=>{if(Dl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Fi(r)?[]:{};return oa(r,(a,s)=>{const l=n(a,i+1);!Bo(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},iO=rn("AsyncFunction"),oO=e=>e&&(Dl(e)||Pt(e))&&Pt(e.then)&&Pt(e.catch),P={isArray:Fi,isArrayBuffer:V1,isBuffer:$_,isFormData:I_,isArrayBufferView:T_,isString:P_,isNumber:W1,isBoolean:C_,isObject:Dl,isPlainObject:rs,isUndefined:Bo,isDate:j_,isFile:R_,isBlob:A_,isRegExp:Q_,isFunction:Pt,isStream:N_,isURLSearchParams:L_,isTypedArray:H_,isFileList:F_,forEach:oa,merge:lf,extend:D_,trim:z_,stripBOM:M_,inherits:U_,toFlatObject:B_,kindOf:Ll,kindOfTest:rn,endsWith:V_,toArray:W_,forEachEntry:G_,matchAll:K_,isHTMLForm:q_,hasOwnProperty:Am,hasOwnProp:Am,reduceDescriptors:q1,freezeMethods:X_,toObjectSet:J_,toCamelCase:Y_,noop:Z_,toFiniteNumber:eO,findKey:H1,global:G1,isContextDefined:K1,ALPHABET:Y1,generateString:tO,isSpecCompliantForm:nO,toJSONObject:rO,isAsyncFn:iO,isThenable:oO};function Z(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}P.inherits(Z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Q1=Z.prototype,X1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{X1[e]={value:e}});Object.defineProperties(Z,X1);Object.defineProperty(Q1,"isAxiosError",{value:!0});Z.from=(e,t,n,r,i,o)=>{const a=Object.create(Q1);return P.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),Z.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const aO=null;function uf(e){return P.isPlainObject(e)||P.isArray(e)}function J1(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function Nm(e,t,n){return e?e.concat(t).map(function(i,o){return i=J1(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function sO(e){return P.isArray(e)&&!e.some(uf)}const lO=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function Ml(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,x){return!P.isUndefined(x[m])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(P.isDate(g))return g.toISOString();if(!l&&P.isBlob(g))throw new Z("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(g)||P.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,m,x){let h=g;if(g&&!x&&typeof g=="object"){if(P.endsWith(m,"{}"))m=r?m:m.slice(0,-2),g=JSON.stringify(g);else if(P.isArray(g)&&sO(g)||(P.isFileList(g)||P.endsWith(m,"[]"))&&(h=P.toArray(g)))return m=J1(m),h.forEach(function(y,S){!(P.isUndefined(y)||y===null)&&t.append(a===!0?Nm([m],S,o):a===null?m:m+"[]",u(y))}),!1}return uf(g)?!0:(t.append(Nm(x,m,o),u(g)),!1)}const c=[],d=Object.assign(lO,{defaultVisitor:f,convertValue:u,isVisitable:uf});function v(g,m){if(!P.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));c.push(g),P.forEach(g,function(h,p){(!(P.isUndefined(h)||h===null)&&i.call(t,h,P.isString(p)?p.trim():p,m,d))===!0&&v(h,m?m.concat(p):[p])}),c.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Im(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function cp(e,t){this._pairs=[],e&&Ml(e,this,t)}const Z1=cp.prototype;Z1.append=function(t,n){this._pairs.push([t,n])};Z1.toString=function(t){const n=t?function(r){return t.call(this,r,Im)}:Im;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function uO(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ex(e,t,n){if(!t)return e;const r=n&&n.encode||uO,i=n&&n.serialize;let o;if(i?o=i(t,n):o=P.isURLSearchParams(t)?t.toString():new cp(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class cO{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Lm=cO,tx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fO=typeof URLSearchParams<"u"?URLSearchParams:cp,dO=typeof FormData<"u"?FormData:null,pO=typeof Blob<"u"?Blob:null,hO={isBrowser:!0,classes:{URLSearchParams:fO,FormData:dO,Blob:pO},protocols:["http","https","file","blob","url","data"]},nx=typeof window<"u"&&typeof document<"u",mO=(e=>nx&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),gO=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),yO=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:nx,hasStandardBrowserEnv:mO,hasStandardBrowserWebWorkerEnv:gO},Symbol.toStringTag,{value:"Module"})),Qt={...yO,...hO};function vO(e,t){return Ml(e,new Qt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Qt.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function xO(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wO(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function rx(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&P.isArray(i)?i.length:a,l?(P.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!P.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&P.isArray(i[a])&&(i[a]=wO(i[a])),!s)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,i)=>{t(xO(r),i,n,0)}),n}return null}function bO(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const fp={transitional:tx,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=P.isObject(t);if(o&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return i&&i?JSON.stringify(rx(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return vO(t,this.formSerializer).toString();if((s=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ml(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),bO(t)):t}],transformResponse:[function(t){const n=this.transitional||fp.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&P.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Z.from(s,Z.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qt.classes.FormData,Blob:Qt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{fp.headers[e]={}});const dp=fp,SO=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),EO=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&SO[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},zm=Symbol("internals");function Yi(e){return e&&String(e).trim().toLowerCase()}function is(e){return e===!1||e==null?e:P.isArray(e)?e.map(is):String(e)}function kO(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const _O=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Du(e,t,n,r,i){if(P.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function OO(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function $O(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Ul{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const f=Yi(l);if(!f)throw new Error("header name must be a non-empty string");const c=P.findKey(i,f);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||l]=is(s))}const a=(s,l)=>P.forEach(s,(u,f)=>o(u,f,l));return P.isPlainObject(t)||t instanceof this.constructor?a(t,n):P.isString(t)&&(t=t.trim())&&!_O(t)?a(EO(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Yi(t),t){const r=P.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return kO(i);if(P.isFunction(n))return n.call(this,i,r);if(P.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Yi(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Du(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=Yi(a),a){const s=P.findKey(r,a);s&&(!n||Du(r,r[s],s,n))&&(delete r[s],i=!0)}}return P.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Du(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return P.forEach(this,(i,o)=>{const a=P.findKey(r,o);if(a){n[a]=is(i),delete n[o];return}const s=t?OO(o):String(o).trim();s!==o&&delete n[o],n[s]=is(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[zm]=this[zm]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=Yi(a);r[s]||($O(i,a),r[s]=!0)}return P.isArray(t)?t.forEach(o):o(t),this}}Ul.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(Ul.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(Ul);const gn=Ul;function Mu(e,t){const n=this||dp,r=t||n,i=gn.from(r.headers);let o=r.data;return P.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function ix(e){return!!(e&&e.__CANCEL__)}function aa(e,t,n){Z.call(this,e??"canceled",Z.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(aa,Z,{__CANCEL__:!0});function TO(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Z("Request failed with status code "+n.status,[Z.ERR_BAD_REQUEST,Z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const PO=Qt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];P.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),P.isString(r)&&a.push("path="+r),P.isString(i)&&a.push("domain="+i),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function CO(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jO(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ox(e,t){return e&&!CO(t)?jO(e,t):t}const RO=Qt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=P.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function AO(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function FO(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),f=r[o];a||(a=u),n[i]=l,r[i]=u;let c=o,d=0;for(;c!==i;)d+=n[c++],c=c%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const v=f&&u-f;return v?Math.round(d*1e3/v):void 0}}function Dm(e,t){let n=0;const r=FO(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const NO=typeof XMLHttpRequest<"u",IO=NO&&function(e){return new Promise(function(n,r){let i=e.data;const o=gn.from(e.headers).normalize();let{responseType:a,withXSRFToken:s}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;if(P.isFormData(i)){if(Qt.hasStandardBrowserEnv||Qt.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[m,...x]=f?f.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([m||"multipart/form-data",...x].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+x))}const d=ox(e.baseURL,e.url);c.open(e.method.toUpperCase(),ex(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function v(){if(!c)return;const m=gn.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};TO(function(y){n(y),u()},function(y){r(y),u()},h),c=null}if("onloadend"in c?c.onloadend=v:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(v)},c.onabort=function(){c&&(r(new Z("Request aborted",Z.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new Z("Network Error",Z.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||tx;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new Z(x,h.clarifyTimeoutError?Z.ETIMEDOUT:Z.ECONNABORTED,e,c)),c=null},Qt.hasStandardBrowserEnv&&(s&&P.isFunction(s)&&(s=s(e)),s||s!==!1&&RO(d))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&PO.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&P.forEach(o.toJSON(),function(x,h){c.setRequestHeader(h,x)}),P.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Dm(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Dm(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=m=>{c&&(r(!m||m.type?new aa(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=AO(d);if(g&&Qt.protocols.indexOf(g)===-1){r(new Z("Unsupported protocol "+g+":",Z.ERR_BAD_REQUEST,e));return}c.send(i||null)})},cf={http:aO,xhr:IO};P.forEach(cf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Mm=e=>`- ${e}`,LO=e=>P.isFunction(e)||e===null||e===!1,ax={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let a;if(r=n,!LO(n)&&(r=cf[(a=String(n)).toLowerCase()],r===void 0))throw new Z(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(Mm).join(`
`):" "+Mm(o[0]):"as no adapter specified";throw new Z("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:cf};function Uu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new aa(null,e)}function Um(e){return Uu(e),e.headers=gn.from(e.headers),e.data=Mu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ax.getAdapter(e.adapter||dp.adapter)(e).then(function(r){return Uu(e),r.data=Mu.call(e,e.transformResponse,r),r.headers=gn.from(r.headers),r},function(r){return ix(r)||(Uu(e),r&&r.response&&(r.response.data=Mu.call(e,e.transformResponse,r.response),r.response.headers=gn.from(r.response.headers))),Promise.reject(r)})}const Bm=e=>e instanceof gn?e.toJSON():e;function Si(e,t){t=t||{};const n={};function r(u,f,c){return P.isPlainObject(u)&&P.isPlainObject(f)?P.merge.call({caseless:c},u,f):P.isPlainObject(f)?P.merge({},f):P.isArray(f)?f.slice():f}function i(u,f,c){if(P.isUndefined(f)){if(!P.isUndefined(u))return r(void 0,u,c)}else return r(u,f,c)}function o(u,f){if(!P.isUndefined(f))return r(void 0,f)}function a(u,f){if(P.isUndefined(f)){if(!P.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function s(u,f,c){if(c in t)return r(u,f);if(c in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,f)=>i(Bm(u),Bm(f),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=l[f]||i,d=c(e[f],t[f],f);P.isUndefined(d)&&c!==s||(n[f]=d)}),n}const sx="1.6.2",pp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Vm={};pp.transitional=function(t,n,r){function i(o,a){return"[Axios v"+sx+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new Z(i(a," has been removed"+(n?" in "+n:"")),Z.ERR_DEPRECATED);return n&&!Vm[a]&&(Vm[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function zO(e,t,n){if(typeof e!="object")throw new Z("options must be an object",Z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new Z("option "+o+" must be "+l,Z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Z("Unknown option "+o,Z.ERR_BAD_OPTION)}}const ff={assertOptions:zO,validators:pp},Pn=ff.validators;class Ds{constructor(t){this.defaults=t,this.interceptors={request:new Lm,response:new Lm}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Si(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&ff.assertOptions(r,{silentJSONParsing:Pn.transitional(Pn.boolean),forcedJSONParsing:Pn.transitional(Pn.boolean),clarifyTimeoutError:Pn.transitional(Pn.boolean)},!1),i!=null&&(P.isFunction(i)?n.paramsSerializer={serialize:i}:ff.assertOptions(i,{encode:Pn.function,serialize:Pn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&P.merge(o.common,o[n.method]);o&&P.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=gn.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let f,c=0,d;if(!l){const g=[Um.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),d=g.length,f=Promise.resolve(n);c<d;)f=f.then(g[c++],g[c++]);return f}d=s.length;let v=n;for(c=0;c<d;){const g=s[c++],m=s[c++];try{v=g(v)}catch(x){m.call(this,x);break}}try{f=Um.call(this,v)}catch(g){return Promise.reject(g)}for(c=0,d=u.length;c<d;)f=f.then(u[c++],u[c++]);return f}getUri(t){t=Si(this.defaults,t);const n=ox(t.baseURL,t.url);return ex(n,t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],function(t){Ds.prototype[t]=function(n,r){return this.request(Si(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(Si(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}Ds.prototype[t]=n(),Ds.prototype[t+"Form"]=n(!0)});const os=Ds;class hp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new aa(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new hp(function(i){t=i}),cancel:t}}}const DO=hp;function MO(e){return function(n){return e.apply(null,n)}}function UO(e){return P.isObject(e)&&e.isAxiosError===!0}const df={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(df).forEach(([e,t])=>{df[t]=e});const BO=df;function lx(e){const t=new os(e),n=B1(os.prototype.request,t);return P.extend(n,os.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return lx(Si(e,i))},n}const Fe=lx(dp);Fe.Axios=os;Fe.CanceledError=aa;Fe.CancelToken=DO;Fe.isCancel=ix;Fe.VERSION=sx;Fe.toFormData=Ml;Fe.AxiosError=Z;Fe.Cancel=Fe.CanceledError;Fe.all=function(t){return Promise.all(t)};Fe.spread=MO;Fe.isAxiosError=UO;Fe.mergeConfig=Si;Fe.AxiosHeaders=gn;Fe.formToJSON=e=>rx(P.isHTMLForm(e)?new FormData(e):e);Fe.getAdapter=ax.getAdapter;Fe.HttpStatusCode=BO;Fe.default=Fe;const kn=Fe;kn.defaults.baseURL="https://watertracker-backend.onrender.com";const mp=e=>{kn.defaults.headers.common.Authorization=`Bearer ${e}`},VO=()=>{kn.defaults.headers.common.Authorization=""},WO=async e=>{const{data:t}=await kn.post("/auth/register",e);return mp(t.token),t},HO=async e=>{const{data:t}=await kn.post("/auth/login",e);return mp(t.token),t},GO=async()=>{await kn.post("/auth/logout"),VO()},KO=async e=>{mp(e);const{data:t}=await kn.get("/user/current");return t},qO=async e=>{const{data:{avatarURL:t}}=await kn.post("/user/avatar",e,{headers:{"Content-Type":"multipart/form-data"}});return t},YO=async e=>await kn.patch("/user/edit",e,{headers:{"Content-Type":"application/json"}}),QO=Ai("auth/register",async(e,{rejectWithValue:t})=>{try{return await WO(e)}catch(n){return t(n.message)}}),XO=Ai("auth/login",async(e,{rejectWithValue:t})=>{try{return await HO(e)}catch(n){return t(n.message)}}),ux=Ai("auth/logout",async(e,{rejectWithValue:t})=>{try{await GO();return}catch(n){return t(n.message)}}),as=Ai("auth/refresh",async(e,{rejectWithValue:t,getState:n})=>{try{const{auth:r}=n();return await KO(r.token)}catch(r){return t(r.message)}},{condition:(e,{getState:t})=>{const{auth:n}=t();if(!n.token)return!1}}),JO=Ai("user/avatar",async(e,{rejectWithValue:t})=>{try{return await qO(e)}catch(n){return t(n.message)}}),ZO=Ai("user/edit",async(e,{rejectWithValue:t})=>{try{return await YO(e)}catch(n){return t(n.message)}}),e$=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},t$=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},n$=()=>cx,r$=(e,{payload:t})=>{e.user=t,e.isRefreshing=!1,e.isLoggedIn=!0},i$=e=>{e.isRefreshing=!0},o$=e=>{e.isRefreshing=!1},a$=(e,{payload:t})=>{e.user.avatarURL=t},s$=(e,{payload:t})=>{e.user=t},cx={user:{email:"",avatarURL:"",userName:"",gender:"",waterRate:""},token:null,isLoggedIn:!1,isRefreshing:!1},l$=Vk({name:"auth",initialState:cx,extraReducers:e=>{e.addCase(QO.fulfilled,e$).addCase(XO.fulfilled,t$).addCase(ux.fulfilled,n$).addCase(JO.fulfilled,a$).addCase(as.fulfilled,r$).addCase(ZO.fulfilled,s$).addCase(as.pending,i$).addCase(as.rejected,o$)}}),u$=l$.reducer,c$={key:"auth",storage:U1,whitelist:["token"]},fx=Dk({reducer:{auth:c_(c$,u$)},middleware:e=>e({serializableCheck:{ignoredActions:[np,Il,rp,ip,op,ap]}})}),f$=g_(fx);var dx={};const d$=zw(yS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=d$;function n(){var a=r([`
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
`]);return n=function(){return a},a}function r(a,s){return s||(s=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(s)}}))}var i=(0,t.css)(n()),o=i;e.default=o})(dx);const p$=Oi(dx),pf={color:{black:"#2F2F2F",white:"#FFFFFF",accent:"#407BFF",secondaryWhite:"#ecf2ff",secondaryRed:"#ef5050",secondaryLightBlue:"#9ebbff",secondaryYellow:"#ff9d43",secondaryPowderBlue:"#d7e3ff"},breakpoint:{mobile:"320px",tablet:"768px",desktop:"1440px"},transition:{main:"250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",modal:"300ms ease-in-out"},boxShadowforButton:{normalButton:"0 4px 8px rgba(64, 123, 255, 0.34)",hoverButton:"0 4px 14px rgba(64, 123, 255, 0.54)",activeButton:"none"},modalBoxShadow:{modal:"0 4px 14px rgba(64, 123, 255, 0.3)"}},h$="/water-tracker/assets/Roboto-Regular-4e147ab6.ttf",m$="/water-tracker/assets/Roboto-Medium-9d0d55a3.ttf",g$="/water-tracker/assets/Roboto-Bold-ec685a46.ttf",y$=Jf`
  ${p$}

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
    src: url(${h$}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url(${m$}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: url(${g$}) format('truetype');
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
    color: ${pf.color.black};
    background-color: ${pf.color.white};
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
`;var px={exports:{}},v$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",x$=v$,w$=x$;function hx(){}function mx(){}mx.resetWarningCache=hx;var b$=function(){function e(r,i,o,a,s,l){if(l!==w$){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:mx,resetWarningCache:hx};return n.PropTypes=n,n};px.exports=b$();var S$=px.exports;const ro=Oi(S$);var E$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hf=s0(function(e){return E$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),k$=hf,_$=function(t){return t!=="theme"},Wm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?k$:_$},Hm=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},O$=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ll(n,r,i),Yf(function(){return ul(n,r,i)}),null},$$=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var s=Hm(t,n,r),l=s||Wm(i),u=!l("as");return function(){var f=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)c.push.apply(c,f);else{c.push(f[0][0]);for(var d=f.length,v=1;v<d;v++)c.push(f[v],f[0][v])}var g=ea(function(m,x,h){var p=u&&m.as||i,y="",S=[],E=m;if(m.theme==null){E={};for(var T in m)E[T]=m[T];E.theme=w.useContext(yn)}typeof m.className=="string"?y=qf(x.registered,S,m.className):m.className!=null&&(y=m.className+" ");var O=Zo(c.concat(S),x.registered,E);y+=x.key+"-"+O.name,a!==void 0&&(y+=" "+a);var A=u&&s===void 0?Wm(p):l,B={};for(var D in m)u&&D==="as"||A(D)&&(B[D]=m[D]);return B.className=y,B.ref=h,w.createElement(w.Fragment,null,w.createElement(O$,{cache:x,serialized:O,isStringTag:typeof p=="string"}),w.createElement(p,B))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=c,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(m,x){return e(m,wo({},n,x,{shouldForwardProp:Hm(g,x,!0)})).apply(void 0,c)},g}},T$=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],_=$$.bind();T$.forEach(function(e){_[e]=_(e)});const P$=_.div`
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
`,gx=_.div`
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
`,C$=_.div`
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
`,j$=_.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,R$=_.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.color.accent};

  &:hover,
  &:focus {
    stroke: ${e=>e.theme.color.secondaryYellow};
  }
`,kt="/water-tracker/assets/sprite-c35e1970.svg",Bl=({onShow:e=!0,children:t,title:n,onClose:r})=>{const i=document.querySelector("#modal-root"),o=w.useRef(null),a=w.useRef(null);return w.useEffect(()=>{const s=u=>{document.body.style.overflow=u?"hidden":"auto"};(e||i.children.length!==0)&&s(!0);const l=u=>{u.code==="Escape"&&r()};return window.addEventListener("keydown",l),()=>{s(!1),window.removeEventListener("keydown",l)}},[i.children.length,e,r]),Vd.createPortal(b.jsx(P$,{onClick:r,ref:a,children:b.jsxs(gx,{onClick:s=>s.stopPropagation(),ref:o,children:[b.jsxs(C$,{children:[b.jsx("h2",{children:n}),b.jsx(j$,{onClick:r,children:b.jsx(R$,{children:b.jsx("use",{href:`${kt}#icon-outline`})})})]}),b.jsx("div",{children:t})]})}),i)};Bl.propTypes={onClose:ro.func.isRequired,children:ro.node.isRequired,onShow:ro.bool,title:ro.string.isRequired};const A$=_.div`
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
`;var F$=function(e){return{display:e?"flex":"none"}},N$="#4fa94d",I$={"aria-busy":!0,role:"status"},Gm=globalThis&&globalThis.__assign||function(){return Gm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Gm.apply(this,arguments)},Km=globalThis&&globalThis.__assign||function(){return Km=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Km.apply(this,arguments)},qm=globalThis&&globalThis.__assign||function(){return qm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qm.apply(this,arguments)},Ym=globalThis&&globalThis.__assign||function(){return Ym=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ym.apply(this,arguments)},Qm=globalThis&&globalThis.__assign||function(){return Qm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qm.apply(this,arguments)},Xm=globalThis&&globalThis.__assign||function(){return Xm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xm.apply(this,arguments)},Jm=globalThis&&globalThis.__assign||function(){return Jm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jm.apply(this,arguments)};function L$(e){function t(R,z,M,V,$){for(var Y=0,N=0,me=0,ee=0,te,K,je=0,Qe=0,J,De=J=te=0,oe=0,Ne=0,an=0,Ie=0,Lr=M.length,k=Lr-1,I,C="",L="",q="",ne="",de;oe<Lr;){if(K=M.charCodeAt(oe),oe===k&&N+ee+me+Y!==0&&(N!==0&&(K=N===47?10:47),ee=me=Y=0,Lr++,k++),N+ee+me+Y===0){if(oe===k&&(0<Ne&&(C=C.replace(d,"")),0<C.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:C+=M.charAt(oe)}K=59}switch(K){case 123:for(C=C.trim(),te=C.charCodeAt(0),J=1,Ie=++oe;oe<Lr;){switch(K=M.charCodeAt(oe)){case 123:J++;break;case 125:J--;break;case 47:switch(K=M.charCodeAt(oe+1)){case 42:case 47:e:{for(De=oe+1;De<k;++De)switch(M.charCodeAt(De)){case 47:if(K===42&&M.charCodeAt(De-1)===42&&oe+2!==De){oe=De+1;break e}break;case 10:if(K===47){oe=De+1;break e}}oe=De}}break;case 91:K++;case 40:K++;case 34:case 39:for(;oe++<k&&M.charCodeAt(oe)!==K;);}if(J===0)break;oe++}switch(J=M.substring(Ie,oe),te===0&&(te=(C=C.replace(c,"").trim()).charCodeAt(0)),te){case 64:switch(0<Ne&&(C=C.replace(d,"")),K=C.charCodeAt(1),K){case 100:case 109:case 115:case 45:Ne=z;break;default:Ne=At}if(J=t(z,Ne,J,K,$+1),Ie=J.length,0<F&&(Ne=n(At,C,an),de=s(3,J,Ne,z,Q,xe,Ie,K,$,V),C=Ne.join(""),de!==void 0&&(Ie=(J=de.trim()).length)===0&&(K=0,J="")),0<Ie)switch(K){case 115:C=C.replace(T,a);case 100:case 109:case 45:J=C+"{"+J+"}";break;case 107:C=C.replace(p,"$1 $2"),J=C+"{"+J+"}",J=Te===1||Te===2&&o("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=C+J,V===112&&(J=(L+=J,""))}else J="";break;default:J=t(z,n(z,C,an),J,V,$+1)}q+=J,J=an=Ne=De=te=0,C="",K=M.charCodeAt(++oe);break;case 125:case 59:if(C=(0<Ne?C.replace(d,""):C).trim(),1<(Ie=C.length))switch(De===0&&(te=C.charCodeAt(0),te===45||96<te&&123>te)&&(Ie=(C=C.replace(" ",":")).length),0<F&&(de=s(1,C,z,R,Q,xe,L.length,V,$,V))!==void 0&&(Ie=(C=de.trim()).length)===0&&(C="\0\0"),te=C.charCodeAt(0),K=C.charCodeAt(1),te){case 0:break;case 64:if(K===105||K===99){ne+=C+M.charAt(oe);break}default:C.charCodeAt(Ie-1)!==58&&(L+=i(C,te,K,C.charCodeAt(2)))}an=Ne=De=te=0,C="",K=M.charCodeAt(++oe)}}switch(K){case 13:case 10:N===47?N=0:1+te===0&&V!==107&&0<C.length&&(Ne=1,C+="\0"),0<F*H&&s(0,C,z,R,Q,xe,L.length,V,$,V),xe=1,Q++;break;case 59:case 125:if(N+ee+me+Y===0){xe++;break}default:switch(xe++,I=M.charAt(oe),K){case 9:case 32:if(ee+Y+N===0)switch(je){case 44:case 58:case 9:case 32:I="";break;default:K!==32&&(I=" ")}break;case 0:I="\\0";break;case 12:I="\\f";break;case 11:I="\\v";break;case 38:ee+N+Y===0&&(Ne=an=1,I="\f"+I);break;case 108:if(ee+N+Y+$e===0&&0<De)switch(oe-De){case 2:je===112&&M.charCodeAt(oe-3)===58&&($e=je);case 8:Qe===111&&($e=Qe)}break;case 58:ee+N+Y===0&&(De=oe);break;case 44:N+me+ee+Y===0&&(Ne=1,I+="\r");break;case 34:case 39:N===0&&(ee=ee===K?0:ee===0?K:ee);break;case 91:ee+N+me===0&&Y++;break;case 93:ee+N+me===0&&Y--;break;case 41:ee+N+Y===0&&me--;break;case 40:if(ee+N+Y===0){if(te===0)switch(2*je+3*Qe){case 533:break;default:te=1}me++}break;case 64:N+me+ee+Y+De+J===0&&(J=1);break;case 42:case 47:if(!(0<ee+Y+me))switch(N){case 0:switch(2*K+3*M.charCodeAt(oe+1)){case 235:N=47;break;case 220:Ie=oe,N=42}break;case 42:K===47&&je===42&&Ie+2!==oe&&(M.charCodeAt(Ie+2)===33&&(L+=M.substring(Ie,oe+1)),I="",N=0)}}N===0&&(C+=I)}Qe=je,je=K,oe++}if(Ie=L.length,0<Ie){if(Ne=z,0<F&&(de=s(2,L,Ne,R,Q,xe,Ie,V,$,V),de!==void 0&&(L=de).length===0))return ne+L+q;if(L=Ne.join(",")+"{"+L+"}",Te*$e!==0){switch(Te!==2||o(L,2)||($e=0),$e){case 111:L=L.replace(S,":-moz-$1")+L;break;case 112:L=L.replace(y,"::-webkit-input-$1")+L.replace(y,"::-moz-$1")+L.replace(y,":-ms-input-$1")+L}$e=0}}return ne+L+q}function n(R,z,M){var V=z.trim().split(x);z=V;var $=V.length,Y=R.length;switch(Y){case 0:case 1:var N=0;for(R=Y===0?"":R[0]+" ";N<$;++N)z[N]=r(R,z[N],M).trim();break;default:var me=N=0;for(z=[];N<$;++N)for(var ee=0;ee<Y;++ee)z[me++]=r(R[ee]+" ",V[N],M).trim()}return z}function r(R,z,M){var V=z.charCodeAt(0);switch(33>V&&(V=(z=z.trim()).charCodeAt(0)),V){case 38:return z.replace(h,"$1"+R.trim());case 58:return R.trim()+z.replace(h,"$1"+R.trim());default:if(0<1*M&&0<z.indexOf("\f"))return z.replace(h,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+z}function i(R,z,M,V){var $=R+";",Y=2*z+3*M+4*V;if(Y===944){R=$.indexOf(":",9)+1;var N=$.substring(R,$.length-1).trim();return N=$.substring(0,R).trim()+N+";",Te===1||Te===2&&o(N,1)?"-webkit-"+N+N:N}if(Te===0||Te===2&&!o($,1))return $;switch(Y){case 1015:return $.charCodeAt(10)===97?"-webkit-"+$+$:$;case 951:return $.charCodeAt(3)===116?"-webkit-"+$+$:$;case 963:return $.charCodeAt(5)===110?"-webkit-"+$+$:$;case 1009:if($.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+$+$;case 978:return"-webkit-"+$+"-moz-"+$+$;case 1019:case 983:return"-webkit-"+$+"-moz-"+$+"-ms-"+$+$;case 883:if($.charCodeAt(8)===45)return"-webkit-"+$+$;if(0<$.indexOf("image-set(",11))return $.replace(G,"$1-webkit-$2")+$;break;case 932:if($.charCodeAt(4)===45)switch($.charCodeAt(5)){case 103:return"-webkit-box-"+$.replace("-grow","")+"-webkit-"+$+"-ms-"+$.replace("grow","positive")+$;case 115:return"-webkit-"+$+"-ms-"+$.replace("shrink","negative")+$;case 98:return"-webkit-"+$+"-ms-"+$.replace("basis","preferred-size")+$}return"-webkit-"+$+"-ms-"+$+$;case 964:return"-webkit-"+$+"-ms-flex-"+$+$;case 1023:if($.charCodeAt(8)!==99)break;return N=$.substring($.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+$+"-ms-flex-pack"+N+$;case 1005:return g.test($)?$.replace(v,":-webkit-")+$.replace(v,":-moz-")+$:$;case 1e3:switch(N=$.substring(13).trim(),z=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(z)){case 226:N=$.replace(E,"tb");break;case 232:N=$.replace(E,"tb-rl");break;case 220:N=$.replace(E,"lr");break;default:return $}return"-webkit-"+$+"-ms-"+N+$;case 1017:if($.indexOf("sticky",9)===-1)break;case 975:switch(z=($=R).length-10,N=($.charCodeAt(z)===33?$.substring(0,z):$).substring(R.indexOf(":",7)+1).trim(),Y=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:$=$.replace(N,"-webkit-"+N)+";"+$;break;case 207:case 102:$=$.replace(N,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+$.replace(N,"-webkit-"+N)+";"+$.replace(N,"-ms-"+N+"box")+";"+$}return $+";";case 938:if($.charCodeAt(5)===45)switch($.charCodeAt(6)){case 105:return N=$.replace("-items",""),"-webkit-"+$+"-webkit-box-"+N+"-ms-flex-"+N+$;case 115:return"-webkit-"+$+"-ms-flex-item-"+$.replace(A,"")+$;default:return"-webkit-"+$+"-ms-flex-line-pack"+$.replace("align-content","").replace(A,"")+$}break;case 973:case 989:if($.charCodeAt(3)!==45||$.charCodeAt(4)===122)break;case 931:case 953:if(D.test(R)===!0)return(N=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),z,M,V).replace(":fill-available",":stretch"):$.replace(N,"-webkit-"+N)+$.replace(N,"-moz-"+N.replace("fill-",""))+$;break;case 962:if($="-webkit-"+$+($.charCodeAt(5)===102?"-ms-"+$:"")+$,M+V===211&&$.charCodeAt(13)===105&&0<$.indexOf("transform",10))return $.substring(0,$.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+$}return $}function o(R,z){var M=R.indexOf(z===1?":":"{"),V=R.substring(0,z!==3?M:10);return M=R.substring(M+1,R.length-1),W(z!==2?V:V.replace(B,"$1"),M,z)}function a(R,z){var M=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return M!==z+";"?M.replace(O," or ($1)").substring(4):"("+z+")"}function s(R,z,M,V,$,Y,N,me,ee,te){for(var K=0,je=z,Qe;K<F;++K)switch(Qe=Ve[K].call(f,R,je,M,V,$,Y,N,me,ee,te)){case void 0:case!1:case!0:case null:break;default:je=Qe}if(je!==z)return je}function l(R){switch(R){case void 0:case null:F=Ve.length=0;break;default:if(typeof R=="function")Ve[F++]=R;else if(typeof R=="object")for(var z=0,M=R.length;z<M;++z)l(R[z]);else H=!!R|0}return l}function u(R){return R=R.prefix,R!==void 0&&(W=null,R?typeof R!="function"?Te=1:(Te=2,W=R):Te=0),u}function f(R,z){var M=R;if(33>M.charCodeAt(0)&&(M=M.trim()),ie=M,M=[ie],0<F){var V=s(-1,z,M,M,Q,xe,0,0,0,0);V!==void 0&&typeof V=="string"&&(z=V)}var $=t(At,M,z,0,0);return 0<F&&(V=s(-2,$,M,M,Q,xe,$.length,0,0,0),V!==void 0&&($=V)),ie="",$e=0,xe=Q=1,$}var c=/^\0+/g,d=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,m=/([,: ])(transform)/g,x=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,A=/-self|flex-/g,B=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,xe=1,Q=1,$e=0,Te=1,At=[],Ve=[],F=0,W=null,H=0,ie="";return f.use=l,f.set=u,e!==void 0&&u(e),f}var z$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function hn(){return(hn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Zm=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},mf=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Wf.typeOf(e)},Ms=Object.freeze([]),Xn=Object.freeze({});function Vo(e){return typeof e=="function"}function eg(e){return e.displayName||e.name||"Component"}function gp(e){return e&&typeof e.styledComponentId=="string"}var Ei=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",yp=typeof window<"u"&&"HTMLElement"in window,D$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function sa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var M$=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&sa(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,s=o;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),ss=new Map,Us=new Map,ho=1,Ca=function(e){if(ss.has(e))return ss.get(e);for(;Us.has(ho);)ho++;var t=ho++;return ss.set(e,t),Us.set(t,e),t},U$=function(e){return Us.get(e)},B$=function(e,t){t>=ho&&(ho=t+1),ss.set(e,t),Us.set(t,e)},V$="style["+Ei+'][data-styled-version="5.3.11"]',W$=new RegExp("^"+Ei+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),H$=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},G$=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(W$);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(B$(u,l),H$(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},K$=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},yx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(Ei))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ei,"active"),r.setAttribute("data-styled-version","5.3.11");var a=K$();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},q$=function(){function e(n){var r=this.element=yx(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}sa(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Y$=function(){function e(n){var r=this.element=yx(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Q$=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),tg=yp,X$={isServer:!yp,useCSSOMInjection:!D$},vx=function(){function e(n,r,i){n===void 0&&(n=Xn),r===void 0&&(r={}),this.options=hn({},X$,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&yp&&tg&&(tg=!1,function(o){for(var a=document.querySelectorAll(V$),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Ei)!=="active"&&(G$(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ca(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(hn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new Q$(a):o?new q$(a):new Y$(a),new M$(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ca(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ca(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ca(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var s=U$(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var f=Ei+".g"+a+'[id="'+s+'"]',c="";l!==void 0&&l.forEach(function(d){d.length>0&&(c+=d+",")}),o+=""+u+f+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),J$=/(a)(d)/gi,ng=function(e){return String.fromCharCode(e+(e>25?39:97))};function gf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ng(t%52)+n;return(ng(t%52)+n).replace(J$,"$1-$2")}var ti=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},xx=function(e){return ti(5381,e)};function Z$(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vo(n)&&!gp(n))return!1}return!0}var eT=xx("5.3.11"),tT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Z$(t),this.componentId=n,this.baseHash=ti(eT,n),this.baseStyle=r,vx.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=ki(this.rules,t,n,r).join(""),s=gf(ti(this.baseHash,a)>>>0);if(!n.hasNameForId(i,s)){var l=r(a,"."+s,void 0,i);n.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,f=ti(this.baseHash,r.hash),c="",d=0;d<u;d++){var v=this.rules[d];if(typeof v=="string")c+=v;else if(v){var g=ki(v,t,n,r),m=Array.isArray(g)?g.join(""):g;f=ti(f,m+d),c+=m}}if(c){var x=gf(f>>>0);if(!n.hasNameForId(i,x)){var h=r(c,"."+x,void 0,i);n.insertRules(i,x,h)}o.push(x)}}return o.join(" ")},e}(),nT=/^\s*\/\/.*$/gm,rT=[":","[",".","#"];function iT(e){var t,n,r,i,o=e===void 0?Xn:e,a=o.options,s=a===void 0?Xn:a,l=o.plugins,u=l===void 0?Ms:l,f=new L$(s),c=[],d=function(m){function x(h){if(h)try{m(h+"}")}catch{}}return function(h,p,y,S,E,T,O,A,B,D){switch(h){case 1:if(B===0&&p.charCodeAt(0)===64)return m(p+";"),"";break;case 2:if(A===0)return p+"/*|*/";break;case 3:switch(A){case 102:case 112:return m(y[0]+p),"";default:return p+(D===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(x)}}}(function(m){c.push(m)}),v=function(m,x,h){return x===0&&rT.indexOf(h[n.length])!==-1||h.match(i)?m:"."+t};function g(m,x,h,p){p===void 0&&(p="&");var y=m.replace(nT,""),S=x&&h?h+" "+x+" { "+y+" }":y;return t=p,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(h||!x?"":x,S)}return f.use([].concat(u,[function(m,x,h){m===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,v))},d,function(m){if(m===-2){var x=c;return c=[],x}}])),g.hash=u.length?u.reduce(function(m,x){return x.name||sa(15),ti(m,x.name)},5381).toString():"",g}var wx=He.createContext();wx.Consumer;var bx=He.createContext(),oT=(bx.Consumer,new vx),yf=iT();function aT(){return w.useContext(wx)||oT}function sT(){return w.useContext(bx)||yf}var Sx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=yf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return sa(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=yf),this.name+t.hash},e}(),lT=/([A-Z])/,uT=/([A-Z])/g,cT=/^ms-/,fT=function(e){return"-"+e.toLowerCase()};function rg(e){return lT.test(e)?e.replace(uT,fT).replace(cT,"-ms-"):e}var ig=function(e){return e==null||e===!1||e===""};function ki(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=ki(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(ig(e))return"";if(gp(e))return"."+e.styledComponentId;if(Vo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return ki(l,t,n,r)}var u;return e instanceof Sx?n?(e.inject(n,r),e.getName(r)):e:mf(e)?function f(c,d){var v,g,m=[];for(var x in c)c.hasOwnProperty(x)&&!ig(c[x])&&(Array.isArray(c[x])&&c[x].isCss||Vo(c[x])?m.push(rg(x)+":",c[x],";"):mf(c[x])?m.push.apply(m,f(c[x],x)):m.push(rg(x)+": "+(v=x,(g=c[x])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in z$||v.startsWith("--")?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(m,["}"]):m}(e):e.toString()}var og=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ex(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Vo(e)||mf(e)?og(ki(Zm(Ms,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:og(ki(Zm(e,n)))}var dT=function(e,t,n){return n===void 0&&(n=Xn),e.theme!==n.theme&&e.theme||t||n.theme},pT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hT=/(^-|-$)/g;function Bu(e){return e.replace(pT,"-").replace(hT,"")}var kx=function(e){return gf(xx(e)>>>0)};function ja(e){return typeof e=="string"&&!0}var vf=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},mT=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function gT(e,t,n){var r=e[n];vf(t)&&vf(r)?_x(r,t):e[n]=t}function _x(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(vf(a))for(var s in a)mT(s)&&gT(e,a[s],s)}return e}var Ox=He.createContext();Ox.Consumer;var Vu={};function $x(e,t,n){var r=gp(e),i=!ja(e),o=t.attrs,a=o===void 0?Ms:o,s=t.componentId,l=s===void 0?function(p,y){var S=typeof p!="string"?"sc":Bu(p);Vu[S]=(Vu[S]||0)+1;var E=S+"-"+kx("5.3.11"+S+Vu[S]);return y?y+"-"+E:E}(t.displayName,t.parentComponentId):s,u=t.displayName,f=u===void 0?function(p){return ja(p)?"styled."+p:"Styled("+eg(p)+")"}(e):u,c=t.displayName&&t.componentId?Bu(t.displayName)+"-"+t.componentId:t.componentId||l,d=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(p,y,S){return e.shouldForwardProp(p,y,S)&&t.shouldForwardProp(p,y,S)}:e.shouldForwardProp);var g,m=new tT(n,c,r?e.componentStyle:void 0),x=m.isStatic&&a.length===0,h=function(p,y){return function(S,E,T,O){var A=S.attrs,B=S.componentStyle,D=S.defaultProps,G=S.foldedComponentIds,xe=S.shouldForwardProp,Q=S.styledComponentId,$e=S.target,Te=function(V,$,Y){V===void 0&&(V=Xn);var N=hn({},$,{theme:V}),me={};return Y.forEach(function(ee){var te,K,je,Qe=ee;for(te in Vo(Qe)&&(Qe=Qe(N)),Qe)N[te]=me[te]=te==="className"?(K=me[te],je=Qe[te],K&&je?K+" "+je:K||je):Qe[te]}),[N,me]}(dT(E,w.useContext(Ox),D)||Xn,E,A),At=Te[0],Ve=Te[1],F=function(V,$,Y,N){var me=aT(),ee=sT(),te=$?V.generateAndInjectStyles(Xn,me,ee):V.generateAndInjectStyles(Y,me,ee);return te}(B,O,At),W=T,H=Ve.$as||E.$as||Ve.as||E.as||$e,ie=ja(H),R=Ve!==E?hn({},E,{},Ve):E,z={};for(var M in R)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?z.as=R[M]:(xe?xe(M,hf,H):!ie||hf(M))&&(z[M]=R[M]));return E.style&&Ve.style!==E.style&&(z.style=hn({},E.style,{},Ve.style)),z.className=Array.prototype.concat(G,Q,F!==Q?F:null,E.className,Ve.className).filter(Boolean).join(" "),z.ref=W,w.createElement(H,z)}(g,p,y,x)};return h.displayName=f,(g=He.forwardRef(h)).attrs=d,g.componentStyle=m,g.displayName=f,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ms,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(p){var y=t.componentId,S=function(T,O){if(T==null)return{};var A,B,D={},G=Object.keys(T);for(B=0;B<G.length;B++)A=G[B],O.indexOf(A)>=0||(D[A]=T[A]);return D}(t,["componentId"]),E=y&&y+"-"+(ja(p)?p:Bu(eg(p)));return $x(p,hn({},S,{attrs:d,componentId:E}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?_x({},e.defaultProps,p):p}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&Kf(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var xf=function(e){return function t(n,r,i){if(i===void 0&&(i=Xn),!Wf.isValidElementType(r))return sa(1,String(r));var o=function(){return n(r,i,Ex.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,hn({},i,{},a))},o.attrs=function(a){return t(n,r,hn({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}($x,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){xf[e]=xf(e)});function vp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ex.apply(void 0,[e].concat(n)).join(""),o=kx(i);return new Sx(o,i)}const la=xf;var Tx=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},It=242.776657104492,yT=1.6,vT=vp(ag||(ag=Tx([`
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
`])),It*.14,It,It*.11,It*.35,It,It*.35,It*.01,It,It*.99);la.path(sg||(sg=Tx([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),It*.01,It,vT,yT);var ag,sg,lg=globalThis&&globalThis.__assign||function(){return lg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lg.apply(this,arguments)},ug=globalThis&&globalThis.__assign||function(){return ug=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ug.apply(this,arguments)},cg=globalThis&&globalThis.__assign||function(){return cg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cg.apply(this,arguments)},fg=globalThis&&globalThis.__assign||function(){return fg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fg.apply(this,arguments)},dg=globalThis&&globalThis.__assign||function(){return dg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},dg.apply(this,arguments)},pg=globalThis&&globalThis.__assign||function(){return pg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},pg.apply(this,arguments)},hg=globalThis&&globalThis.__assign||function(){return hg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hg.apply(this,arguments)},xT=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var i=t.split("."),o=i.length,a=r[i[0]],s=1;a!=null&&s<o;)a=a[i[s]],s+=1;if(typeof a<"u")return a}return n}},xp=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},mg=globalThis&&globalThis.__assign||function(){return mg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mg.apply(this,arguments)},wT=vp(gg||(gg=xp([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));la.svg(yg||(yg=xp([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),wT,xT("speed","0.75"));la.polyline(vg||(vg=xp([`
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
`])),function(e){return e.width});var gg,yg,vg,xg=globalThis&&globalThis.__assign||function(){return xg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},xg.apply(this,arguments)},wg=globalThis&&globalThis.__assign||function(){return wg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wg.apply(this,arguments)},mo=globalThis&&globalThis.__assign||function(){return mo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mo.apply(this,arguments)},bT=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,i=r===void 0?80:r,o=e.radius,a=o===void 0?9:o,s=e.color,l=s===void 0?N$:s,u=e.ariaLabel,f=u===void 0?"three-dots-loading":u,c=e.wrapperStyle,d=e.wrapperClass,v=e.visible,g=v===void 0?!0:v;return He.createElement("div",mo({style:mo(mo({},F$(g)),c),className:d,"data-testid":"three-dots-loading","aria-label":f},I$),He.createElement("svg",{width:i,height:n,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:l,"data-testid":"three-dots-svg"},He.createElement("circle",{cx:"15",cy:"15",r:Number(a)+6},He.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),He.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),He.createElement("circle",{cx:"60",cy:"15",r:a,attributeName:"fill-opacity",from:"1",to:"0.3"},He.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),He.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),He.createElement("circle",{cx:"105",cy:"15",r:Number(a)+6},He.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),He.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))},wp=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},bg=globalThis&&globalThis.__assign||function(){return bg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},bg.apply(this,arguments)},ST=vp(Sg||(Sg=wp([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));la.polygon(Eg||(Eg=wp([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),ST);la.svg(kg||(kg=wp([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var Sg,Eg,kg,_g=globalThis&&globalThis.__assign||function(){return _g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_g.apply(this,arguments)},Og=globalThis&&globalThis.__assign||function(){return Og=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Og.apply(this,arguments)},$g=globalThis&&globalThis.__assign||function(){return $g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},$g.apply(this,arguments)},Tg=globalThis&&globalThis.__assign||function(){return Tg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Tg.apply(this,arguments)},Pg=globalThis&&globalThis.__assign||function(){return Pg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Pg.apply(this,arguments)},Cg=globalThis&&globalThis.__assign||function(){return Cg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Cg.apply(this,arguments)},jg=globalThis&&globalThis.__assign||function(){return jg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},jg.apply(this,arguments)},Rg=globalThis&&globalThis.__assign||function(){return Rg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Rg.apply(this,arguments)},Ag=globalThis&&globalThis.__assign||function(){return Ag=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ag.apply(this,arguments)},Fg=globalThis&&globalThis.__assign||function(){return Fg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Fg.apply(this,arguments)},Ng=globalThis&&globalThis.__assign||function(){return Ng=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ng.apply(this,arguments)},Ig=globalThis&&globalThis.__assign||function(){return Ig=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ig.apply(this,arguments)},Lg=globalThis&&globalThis.__assign||function(){return Lg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Lg.apply(this,arguments)},zg=globalThis&&globalThis.__assign||function(){return zg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},zg.apply(this,arguments)};const ET=_.div`
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
`,bp=()=>b.jsx(ET,{children:b.jsx(bT,{height:"90",width:"90",radius:"9",color:"#407bff",ariaLabel:"three-dots-loading",visible:!0,timeout:2e3})});/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wo.apply(this,arguments)}var Dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dn||(Dn={}));const Dg="popstate";function kT(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return wf("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bs(i)}return OT(t,n,null,e)}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Sp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _T(){return Math.random().toString(36).substr(2,8)}function Mg(e,t){return{usr:e.state,key:e.key,idx:t}}function wf(e,t,n,r){return n===void 0&&(n=null),Wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ni(t):t,{state:n,key:t&&t.key||r||_T()})}function Bs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ni(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function OT(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Dn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(Wo({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){s=Dn.Pop;let x=f(),h=x==null?null:x-u;u=x,l&&l({action:s,location:m.location,delta:h})}function d(x,h){s=Dn.Push;let p=wf(m.location,x,h);n&&n(p,x),u=f()+1;let y=Mg(p,u),S=m.createHref(p);try{a.pushState(y,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&l&&l({action:s,location:m.location,delta:1})}function v(x,h){s=Dn.Replace;let p=wf(m.location,x,h);n&&n(p,x),u=f();let y=Mg(p,u),S=m.createHref(p);a.replaceState(y,"",S),o&&l&&l({action:s,location:m.location,delta:0})}function g(x){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:Bs(x);return _e(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let m={get action(){return s},get location(){return e(i,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Dg,c),l=x,()=>{i.removeEventListener(Dg,c),l=null}},createHref(x){return t(i,x)},createURL:g,encodeLocation(x){let h=g(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:v,go(x){return a.go(x)}};return m}var Ug;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ug||(Ug={}));function $T(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ni(t):t,i=Ho(r.pathname||"/",n);if(i==null)return null;let o=Px(e);TT(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=LT(o[s],DT(i));return a}function Px(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jn([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(_e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Px(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:NT(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Cx(o.path))i(o,a,l)}),t}function Cx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Cx(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function TT(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:IT(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PT=/^:\w+$/,CT=3,jT=2,RT=1,AT=10,FT=-2,Bg=e=>e==="*";function NT(e,t){let n=e.split("/"),r=n.length;return n.some(Bg)&&(r+=FT),t&&(r+=jT),n.filter(i=>!Bg(i)).reduce((i,o)=>i+(PT.test(o)?CT:o===""?RT:AT),r)}function IT(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function LT(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=bf({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let c=s.route;o.push({params:r,pathname:Jn([i,f.pathname]),pathnameBase:WT(Jn([i,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(i=Jn([i,f.pathnameBase]))}return o}function bf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zT(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:d,isOptional:v}=f;if(d==="*"){let m=s[c]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const g=s[c];return v&&!g?u[d]=void 0:u[d]=MT(g||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function zT(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Sp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function DT(e){try{return decodeURI(e)}catch(t){return Sp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function MT(e,t){try{return decodeURIComponent(e)}catch(n){return Sp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ho(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function UT(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ni(e):e;return{pathname:n?n.startsWith("/")?n:BT(n,t):t,search:HT(r),hash:GT(i)}}function BT(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function VT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ep(e,t){let n=VT(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ni(e):(i=Wo({},e),_e(!i.pathname||!i.pathname.includes("?"),Wu("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),Wu("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),Wu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else if(r){let c=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),c.pop();i.pathname=d.join("/")}s="/"+c.join("/")}else{let c=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}s=c>=0?t[c]:"/"}let l=UT(i,s),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Jn=e=>e.join("/").replace(/\/\/+/g,"/"),WT=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),HT=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,GT=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function KT(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jx=["post","put","patch","delete"];new Set(jx);const qT=["get",...jx];new Set(qT);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Go(){return Go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Go.apply(this,arguments)}const Vl=w.createContext(null),Rx=w.createContext(null),_n=w.createContext(null),Wl=w.createContext(null),On=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Ax=w.createContext(null);function YT(e,t){let{relative:n}=t===void 0?{}:t;Ii()||_e(!1);let{basename:r,navigator:i}=w.useContext(_n),{hash:o,pathname:a,search:s}=Hl(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Jn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Ii(){return w.useContext(Wl)!=null}function Li(){return Ii()||_e(!1),w.useContext(Wl).location}function Fx(e){w.useContext(_n).static||w.useLayoutEffect(e)}function Nx(){let{isDataRoute:e}=w.useContext(On);return e?cP():QT()}function QT(){Ii()||_e(!1);let e=w.useContext(Vl),{basename:t,future:n,navigator:r}=w.useContext(_n),{matches:i}=w.useContext(On),{pathname:o}=Li(),a=JSON.stringify(Ep(i,n.v7_relativeSplatPath)),s=w.useRef(!1);return Fx(()=>{s.current=!0}),w.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=kp(u,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Jn([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,a,o,e])}const XT=w.createContext(null);function JT(e){let t=w.useContext(On).outlet;return t&&w.createElement(XT.Provider,{value:e},t)}function Hl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(_n),{matches:i}=w.useContext(On),{pathname:o}=Li(),a=JSON.stringify(Ep(i,r.v7_relativeSplatPath));return w.useMemo(()=>kp(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function ZT(e,t){return eP(e,t)}function eP(e,t,n,r){Ii()||_e(!1);let{navigator:i}=w.useContext(_n),{matches:o}=w.useContext(On),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Li(),f;if(t){var c;let x=typeof t=="string"?Ni(t):t;l==="/"||(c=x.pathname)!=null&&c.startsWith(l)||_e(!1),f=x}else f=u;let d=f.pathname||"/",v=l==="/"?d:d.slice(l.length)||"/",g=$T(e,{pathname:v}),m=oP(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Jn([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Jn([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r);return t&&m?w.createElement(Wl.Provider,{value:{location:Go({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Dn.Pop}},m):m}function tP(){let e=uP(),t=KT(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}const nP=w.createElement(tP,null);class rP extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(On.Provider,{value:this.props.routeContext},w.createElement(Ax.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iP(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Vl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(On.Provider,{value:t},r)}function oP(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));f>=0||_e(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.loader&&c.route.id&&n.loaderData[c.route.id]===void 0&&(!n.errors||n.errors[c.route.id]===void 0)){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}return a.reduceRight((f,c,d)=>{let v,g=!1,m=null,x=null;n&&(v=s&&c.route.id?s[c.route.id]:void 0,m=c.route.errorElement||nP,l&&(u<0&&d===0?(fP("route-fallback",!1),g=!0,x=null):u===d&&(g=!0,x=c.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,d+1)),p=()=>{let y;return v?y=m:g?y=x:c.route.Component?y=w.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=f,w.createElement(iP,{match:c,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?w.createElement(rP,{location:n.location,revalidation:n.revalidation,component:m,error:v,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Ix=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ix||{}),Vs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vs||{});function aP(e){let t=w.useContext(Vl);return t||_e(!1),t}function sP(e){let t=w.useContext(Rx);return t||_e(!1),t}function lP(e){let t=w.useContext(On);return t||_e(!1),t}function Lx(e){let t=lP(),n=t.matches[t.matches.length-1];return n.route.id||_e(!1),n.route.id}function uP(){var e;let t=w.useContext(Ax),n=sP(Vs.UseRouteError),r=Lx(Vs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function cP(){let{router:e}=aP(Ix.UseNavigateStable),t=Lx(Vs.UseNavigateStable),n=w.useRef(!1);return Fx(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Go({fromRouteId:t},o)))},[e,t])}const Vg={};function fP(e,t,n){!t&&!Vg[e]&&(Vg[e]=!0)}function zx(e){let{to:t,replace:n,state:r,relative:i}=e;Ii()||_e(!1);let{future:o,static:a}=w.useContext(_n),{matches:s}=w.useContext(On),{pathname:l}=Li(),u=Nx(),f=kp(t,Ep(s,o.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(f);return w.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function dP(e){return JT(e.context)}function Cn(e){_e(!1)}function pP(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Dn.Pop,navigator:o,static:a=!1,future:s}=e;Ii()&&_e(!1);let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:o,static:a,future:Go({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=Ni(r));let{pathname:f="/",search:c="",hash:d="",state:v=null,key:g="default"}=r,m=w.useMemo(()=>{let x=Ho(f,l);return x==null?null:{location:{pathname:x,search:c,hash:d,state:v,key:g},navigationType:i}},[l,f,c,d,v,g,i]);return m==null?null:w.createElement(_n.Provider,{value:u},w.createElement(Wl.Provider,{children:n,value:m}))}function hP(e){let{children:t,location:n}=e;return ZT(Sf(t),n)}new Promise(()=>{});function Sf(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Sf(r.props.children,o));return}r.type!==Cn&&_e(!1),!r.props.index||!r.props.children||_e(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Sf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ws(){return Ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ws.apply(this,arguments)}function Dx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function mP(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gP(e,t){return e.button===0&&(!t||t==="_self")&&!mP(e)}const yP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],vP=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],xP=w.createContext({isTransitioning:!1}),wP="startTransition",Wg=nc[wP];function bP(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=kT({window:i,v5Compat:!0}));let a=o.current,[s,l]=w.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=w.useCallback(c=>{u&&Wg?Wg(()=>l(c)):l(c)},[l,u]);return w.useLayoutEffect(()=>a.listen(f),[a,f]),w.createElement(pP,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const SP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kP=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,d=Dx(t,yP),{basename:v}=w.useContext(_n),g,m=!1;if(typeof u=="string"&&EP.test(u)&&(g=u,SP))try{let y=new URL(window.location.href),S=u.startsWith("//")?new URL(y.protocol+u):new URL(u),E=Ho(S.pathname,v);S.origin===y.origin&&E!=null?u=E+S.search+S.hash:m=!0}catch{}let x=YT(u,{relative:i}),h=OP(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:c});function p(y){r&&r(y),y.defaultPrevented||h(y)}return w.createElement("a",Ws({},d,{href:g||x,onClick:m||o?r:p,ref:n,target:l}))}),Ko=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,unstable_viewTransition:u,children:f}=t,c=Dx(t,vP),d=Hl(l,{relative:c.relative}),v=Li(),g=w.useContext(Rx),{navigator:m}=w.useContext(_n),x=g!=null&&$P(d)&&u===!0,h=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,p=v.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(p=p.toLowerCase(),y=y?y.toLowerCase():null,h=h.toLowerCase());const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let E=p===h||!a&&p.startsWith(h)&&p.charAt(S)==="/",T=y!=null&&(y===h||!a&&y.startsWith(h)&&y.charAt(h.length)==="/"),O={isActive:E,isPending:T,isTransitioning:x},A=E?r:void 0,B;typeof o=="function"?B=o(O):B=[o,E?"active":null,T?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let D=typeof s=="function"?s(O):s;return w.createElement(kP,Ws({},c,{"aria-current":A,className:B,ref:n,style:D,to:l,unstable_viewTransition:u}),typeof f=="function"?f(O):f)});var Ef;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ef||(Ef={}));var Hg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hg||(Hg={}));function _P(e){let t=w.useContext(Vl);return t||_e(!1),t}function OP(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=Nx(),u=Li(),f=Hl(e,{relative:a});return w.useCallback(c=>{if(gP(c,n)){c.preventDefault();let d=r!==void 0?r:Bs(u)===Bs(f);l(e,{replace:d,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s})}},[u,l,f,r,i,n,e,o,a,s])}function $P(e,t){t===void 0&&(t={});let n=w.useContext(xP);n==null&&_e(!1);let{basename:r}=_P(Ef.useViewTransitionState),i=Hl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Ho(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Ho(n.nextLocation.pathname,r)||n.nextLocation.pathname;return bf(i.pathname,a)!=null||bf(i.pathname,o)!=null}const Gg="/water-tracker/assets/Logo-890d13ba.png",Kg=_.img`
  width: 102px;
  height: 48px;
`,TP=e=>e.auth.user,Gl=e=>e.auth.isLoggedIn,PP=e=>e.auth.isRefreshing,CP=()=>{const e=ji(Gl);return b.jsx("div",{children:e?b.jsx(Ko,{to:"/home",children:b.jsx(Kg,{src:Gg,alt:"logo"})}):b.jsx(Ko,{to:"/",children:b.jsx(Kg,{src:Gg,alt:"logo"})})})},jP=_.div`
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
`,RP=()=>{const e=ji(Gl);return b.jsx("header",{children:b.jsx(A$,{children:b.jsxs(jP,{children:[b.jsx(CP,{}),e?b.jsx(Z3,{}):b.jsx(G3,{})]})})})},Mx="/water-tracker/assets/bottleMob-814a9d12.png",Ux="/water-tracker/assets/bottleMob@2x-17522dc3.png",Bx="/water-tracker/assets/bottleTabl-c56ef88b.png",Vx="/water-tracker/assets/bottleTabl@2x-5f20a434.png",Wx="/water-tracker/assets/bottleDesc-5e7cc8f5.png",Hx="/water-tracker/assets/bottleDesc@2x-cdf5cc76.png",bF=_.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
`,SF=_.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${Mx}) 1x,
    url(${Ux}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Bx}) 1x,
      url(${Vx}) 2x
    );
    height: 386px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Wx}) 1x,
      url(${Hx}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,EF=_.div`
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
`,AP=_.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }
`,FP=_.div`
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
`,NP=_.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,qg=_.h3`
  margin-bottom: 16px;
  color: ${e=>e.theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,Ra=_.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
`,IP=_.div`
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
`,LP=_.form`
  gap: 16px;

  span {
    margin-right: 24px;
    font-size: 16px;
  }
`,Yg=_.input`
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
`,Hu=_.input`
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
`,zP=_.div`
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
`,DP=_.button`
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
`,MP=({onClose:e})=>{const[t,n]=w.useState("female"),[r,i]=w.useState(""),[o,a]=w.useState(""),[s,l]=w.useState("2.0"),[u,f]=w.useState(""),c=()=>{const v=t==="female"?.03:.04,g=t==="female"?.4:.6,m=(r*v+o/60*g).toFixed(2);l(m)},d=async()=>{c()};return b.jsx(Bl,{onClose:e,title:"My daily norma",children:b.jsxs(AP,{children:[b.jsxs("div",{children:[b.jsxs(FP,{children:[b.jsxs(Ra,{children:["For girl: ",b.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),b.jsxs(Ra,{children:["For man: ",b.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),b.jsx(IP,{children:b.jsxs("p",{children:[b.jsx("span",{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),b.jsx("div",{children:b.jsxs(NP,{children:[b.jsxs(LP,{children:[b.jsx(qg,{children:"Calculate your rate:"}),b.jsxs("label",{children:[b.jsx(Yg,{type:"radio",name:"gender",value:"female",checked:t==="female",onChange:()=>n("female")}),b.jsx("span",{children:"For girl"})]}),b.jsxs("label",{children:[b.jsx(Yg,{type:"radio",name:"gender",value:"male",checked:t==="male",onChange:()=>n("male")}),b.jsx("span",{children:"For boy"})]})]}),b.jsxs("div",{children:[b.jsx(Ra,{children:"Your weight in kilograms:"}),b.jsx(Hu,{type:"text",placeholder:"0",value:r,onChange:v=>i(v.target.value)})]}),b.jsxs("div",{children:[b.jsx(Ra,{children:"Time of active participation in sports or other activities with a high physical load:"}),b.jsx(Hu,{type:"text",placeholder:"0",value:o,onChange:v=>a(v.target.value)})]}),b.jsxs(zP,{children:["The required amount of water in liters per day:"," ",b.jsxs("strong",{children:[s,"L"]})]}),b.jsxs("div",{children:[b.jsx(qg,{children:"Write down how much water you will drink:"}),b.jsx(Hu,{type:"text",placeholder:"0",value:u,onChange:v=>f(v.target.value)})]}),b.jsx(DP,{onClick:d,children:"Save"})]})})]})})};MP.propTypes={onClose:ro.func.isRequired};const kF=_.div`
  position: absolute;
  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
  transform: translate(-50% -50%);
  width: 280px;

  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
`,_F=_.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,OF=_.li`
  display: flex;
  gap: 6px;
`,$F=_.span`
  color: ${({theme:e})=>e.color.accent};
  font-size: 18px;
  font-weight: 500;
`,TF=_.p`
  color: ${({theme:e})=>e.color.accent};
`,PF=_.div`
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
`,CF=_.button`
  width: 14px;
  height: 14px;
  background: transparent;
  color: ${e=>e.active?e.theme.color.accent:e.theme.color.secondaryLightBlue};

  &:hover {
    color: ${e=>e.theme.color.accent};
  }
`,jF=_.div`
  display: flex;
  align-items: baseline;
  position: relative;
  color: ${e=>e.theme.color.accent};
  column-gap: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`,RF=_.p`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  font-size: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
  }
`,AF=_.div`
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
`,FF=_.div`
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
`,NF=_.button`
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
`;function jr(e){this._maxSize=e,this.clear()}jr.prototype.clear=function(){this._size=0,this._values=Object.create(null)};jr.prototype.get=function(e){return this._values[e]};jr.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var UP=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Gx=/^\d+$/,BP=/^\d/,VP=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,WP=/^\s*(['"]?)(.*?)(\1)\s*$/,_p=512,Qg=new jr(_p),Xg=new jr(_p),Jg=new jr(_p),wr={Cache:jr,split:kf,normalizePath:Gu,setter:function(e){var t=Gu(e);return Xg.get(e)||Xg.set(e,function(r,i){for(var o=0,a=t.length,s=r;o<a-1;){var l=t[o];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;s=s[t[o++]]}s[t[o]]=i})},getter:function(e,t){var n=Gu(e);return Jg.get(e)||Jg.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(Op(n)||Gx.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){HP(Array.isArray(e)?e:kf(e),t,n)}};function Gu(e){return Qg.get(e)||Qg.set(e,kf(e).map(function(t){return t.replace(WP,"$2")}))}function kf(e){return e.match(UP)||[""]}function HP(e,t,n){var r=e.length,i,o,a,s;for(o=0;o<r;o++)i=e[o],i&&(qP(i)&&(i='"'+i+'"'),s=Op(i),a=!s&&/^\d+$/.test(i),t.call(n,i,s,a,o,e))}function Op(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function GP(e){return e.match(BP)&&!e.match(Gx)}function KP(e){return VP.test(e)}function qP(e){return!Op(e)&&(GP(e)||KP(e))}const YP=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Kl=e=>e.match(YP)||[],ql=e=>e[0].toUpperCase()+e.slice(1),$p=(e,t)=>Kl(e).join(t).toLowerCase(),Kx=e=>Kl(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),QP=e=>ql(Kx(e)),XP=e=>$p(e,"_"),JP=e=>$p(e,"-"),ZP=e=>ql($p(e," ")),eC=e=>Kl(e).map(ql).join(" ");var Ku={words:Kl,upperFirst:ql,camelCase:Kx,pascalCase:QP,snakeCase:XP,kebabCase:JP,sentenceCase:ZP,titleCase:eC},Tp={exports:{}};Tp.exports=function(e){return qx(tC(e),e)};Tp.exports.array=qx;function qx(e,t){var n=e.length,r=new Array(n),i={},o=n,a=nC(t),s=rC(e);for(t.forEach(function(u){if(!s.has(u[0])||!s.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||l(e[o],o,new Set);return r;function l(u,f,c){if(c.has(u)){var d;try{d=", node was:"+JSON.stringify(u)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!s.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[f]){i[f]=!0;var v=a.get(u)||new Set;if(v=Array.from(v),f=v.length){c.add(u);do{var g=v[--f];l(g,s.get(g),c)}while(f);c.delete(u)}r[--n]=u}}}function tC(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function nC(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function rC(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var iC=Tp.exports;const oC=Oi(iC),aC=Object.prototype.toString,sC=Error.prototype.toString,lC=RegExp.prototype.toString,uC=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",cC=/^Symbol\((.*)\)(.*)$/;function fC(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Zg(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return fC(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return uC.call(e).replace(cC,"Symbol($1)");const r=aC.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+sC.call(e)+"]":r==="RegExp"?lC.call(e):null}function Zn(e,t){let n=Zg(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=Zg(this[r],t);return o!==null?o:i},2)}function Yx(e){return e==null?[]:[].concat(e)}let Qx,dC=/\$\{\s*(\w+)\s*\}/g;Qx=Symbol.toStringTag;class lt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(dC,(i,o)=>Zn(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Qx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Yx(t).forEach(a=>{if(lt.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,lt)}}let Gt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Zn(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Zn(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${Zn(n,!0)}\``+i}},Nt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},pC={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},_f={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},hC={isValue:"${path} field must be ${value}"},Of={noUnknown:"${path} field has unspecified keys: ${unknown}"},mC={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},gC={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Zn(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Zn(n,!0)}\``}return lt.formatError(Gt.notType,e)}};Object.assign(Object.create(null),{mixed:Gt,string:Nt,number:pC,date:_f,object:Of,array:mC,boolean:hC,tuple:gC});const Pp=e=>e&&e.__isYupSchema__;class Hs{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...s)=>s.every(l=>l===r);return new Hs(t,(s,l)=>{var u;let f=a(...s)?i:o;return(u=f==null?void 0:f(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!Pp(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Aa={context:"$",value:"."};class Rr{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Aa.context,this.isValue=this.key[0]===Aa.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Aa.context:this.isValue?Aa.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&wr.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Rr.prototype.__isYupRef=!0;const yr=e=>e==null;function Dr(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},s,l){const{name:u,test:f,params:c,message:d,skipAbsent:v}=e;let{parent:g,context:m,abortEarly:x=a.spec.abortEarly,disableStackTrace:h=a.spec.disableStackTrace}=i;function p(G){return Rr.isRef(G)?G.getValue(n,g,m):G}function y(G={}){var xe;const Q=Object.assign({value:n,originalValue:o,label:a.spec.label,path:G.path||r,spec:a.spec},c,G.params);for(const Te of Object.keys(Q))Q[Te]=p(Q[Te]);const $e=new lt(lt.formatError(G.message||d,Q),n,Q.path,G.type||u,(xe=G.disableStackTrace)!=null?xe:h);return $e.params=Q,$e}const S=x?s:l;let E={path:r,parent:g,type:u,from:i.from,createError:y,resolve:p,options:i,originalValue:o,schema:a};const T=G=>{lt.isError(G)?S(G):G?l(null):S(y())},O=G=>{lt.isError(G)?S(G):s(G)};if(v&&yr(n))return T(!0);let B;try{var D;if(B=f.call(E,n,E),typeof((D=B)==null?void 0:D.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(B).then(T,O)}}catch(G){O(G);return}T(B)}return t.OPTIONS=e,t}function yC(e,t,n,r=n){let i,o,a;return t?(wr.forEach(t,(s,l,u)=>{let f=l?s.slice(1,s.length-1):s;e=e.resolve({context:r,parent:i,value:n});let c=e.type==="tuple",d=u?parseInt(f,10):0;if(e.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&d>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[d],e=c?e.spec.types[d]:e.innerType}if(!u){if(!e.fields||!e.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[f],e=e.fields[f]}o=f,a=l?"["+s+"]":"."+s}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class Gs extends Set{describe(){const t=[];for(const n of this.values())t.push(Rr.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Gs(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ni(e,t=new Map){if(Pp(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=ni(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,ni(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(ni(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=ni(i,t)}else throw Error(`Unable to clone ${e}`);return n}class nn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Gs,this._blacklist=new Gs,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Gt.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ni(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,o;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&yr(o))return o;let a=Zn(t),s=Zn(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:s=this.spec.strict}=n,l=t;s||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let f of Object.values(this.internalTests))f&&u.push(f);this.runTests({path:o,value:l,originalValue:a,options:n,tests:u},r,f=>{if(f.length)return i(f,l);this.runTests({path:o,value:l,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:s,path:l,options:u}=t,f=m=>{i||(i=!0,n(m,a))},c=m=>{i||(i=!0,r(m,a))},d=o.length,v=[];if(!d)return c([]);let g={value:a,originalValue:s,path:l,options:u,schema:this};for(let m=0;m<o.length;m++){const x=o[m];x(g,f,function(p){p&&(Array.isArray(p)?v.push(...p):v.push(p)),--d<=0&&c(v)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof s=="number";let u=r[s];const f=Object.assign({},a,{strict:!0,parent:r,value:u,originalValue:o[s],key:void 0,[l?"index":"key"]:s,path:l||s.includes(".")?`${i||""}[${u?s:`"${s}"`}]`:(i?`${i}.`:"")+t});return(c,d,v)=>this.resolve(f)._validate(u,f,d,v)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((a,s)=>i._validate(t,n,(l,u)=>{lt.isError(l)&&(l.value=u),s(l)},(l,u)=>{l.length?s(new lt(l,u,void 0,void 0,o)):a(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o,a=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(s,l)=>{throw lt.isError(s)&&(s.value=l),s},(s,l)=>{if(s.length)throw new lt(s,t,void 0,void 0,a);o=l}),o}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(lt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(lt.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):ni(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Dr({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Dr({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Gt.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Gt.notNull){return this.nullability(!1,t)}required(t=Gt.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Gt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Dr(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Yx(t).map(o=>new Rr(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new Hs(i,n):Hs.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Dr({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Gt.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Dr({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=Gt.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Dr({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,f)=>f.findIndex(c=>c.name===l.name)===u)}}}nn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])nn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=yC(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])nn.prototype[e]=nn.prototype.oneOf;for(const e of["not","nope"])nn.prototype[e]=nn.prototype.notOneOf;let vC=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,xC=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,wC=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,bC=e=>yr(e)||e===e.trim(),SC={}.toString();function Ur(){return new Xx}class Xx extends nn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===SC?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Gt.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Nt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Nt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Nt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||Nt.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=Nt.email){return this.matches(vC,{name:"email",message:t,excludeEmptyString:!0})}url(t=Nt.url){return this.matches(xC,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Nt.uuid){return this.matches(wC,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Nt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:bC})}lowercase(t=Nt.lowercase){return this.transform(n=>yr(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>yr(n)||n===n.toLowerCase()})}uppercase(t=Nt.uppercase){return this.transform(n=>yr(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>yr(n)||n===n.toUpperCase()})}}Ur.prototype=Xx.prototype;const EC=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function un(e,t=0){return Number(e)||t}function kC(e){const t=EC.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:un(t[1]),month:un(t[2],1)-1,day:un(t[3],1),hour:un(t[4]),minute:un(t[5]),second:un(t[6]),millisecond:t[7]?un(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:un(t[10]),minuteOffset:un(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let _C=new Date(""),OC=e=>Object.prototype.toString.call(e)==="[object Date]";class Yl extends nn{constructor(){super({type:"date",check(t){return OC(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=kC(t),isNaN(t)?Yl.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Rr.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=_f.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=_f.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Yl.INVALID_DATE=_C;Yl.prototype;function $C(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,s])=>`${a}-${s}`));function o(a,s){let l=wr.split(a)[0];r.add(l),i.has(`${s}-${l}`)||n.push([s,l])}for(const a of Object.keys(e)){let s=e[a];r.add(a),Rr.isRef(s)&&s.isSibling?o(s.path,a):Pp(s)&&"deps"in s&&s.deps.forEach(l=>o(l,a))}return oC.array(Array.from(r),n).reverse()}function ey(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function Jx(e){return(t,n)=>ey(e,t)-ey(e,n)}const TC=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function ls(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=ls(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=ls(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(ls)}):"optional"in e?e.optional():e}const PC=(e,t)=>{const n=[...wr.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=wr.getter(wr.join(n),!0)(e);return!!(i&&r in i)};let ty=e=>Object.prototype.toString.call(e)==="[object Object]";function CC(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const jC=Jx([]);function Zx(e){return new ew(e)}class ew extends nn{constructor(t){super({type:"object",check(n){return ty(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=jC,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),f=!1;for(const c of s){let d=o[c],v=c in i;if(d){let g,m=i[c];u.path=(n.path?`${n.path}.`:"")+c,d=d.resolve({value:m,context:n.context,parent:l});let x=d instanceof nn?d.spec:void 0,h=x==null?void 0:x.strict;if(x!=null&&x.strip){f=f||c in i;continue}g=!n.__validating||!h?d.cast(i[c],u):i[c],g!==void 0&&(l[c]=g)}else v&&!a&&(l[c]=i[c]);(v!==c in l||l[c]!==i[c])&&(f=!0)}return f?l:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:s=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(l,u)=>{if(!s||!ty(u)){i(l,u);return}a=a||u;let f=[];for(let c of this._nodes){let d=this.fields[c];!d||Rr.isRef(d)||f.push(d.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:a}))}this.runTests({tests:f,value:u,originalValue:a,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const o=this.fields[r];let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n[r]=o&&"getDefault"in o?o.getDefault(a):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=$C(t,n),r._sortErrors=Jx(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return ls(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=wr.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return PC(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(TC)}noUnknown(t=!0,n=Of.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=CC(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Of.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Ku.camelCase)}snakeCase(){return this.transformKeys(Ku.snakeCase)}constantCase(){return this.transformKeys(t=>Ku.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[o,a]of Object.entries(n.fields)){var i;let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[o]})),r.fields[o]=a.describe(s)}return r}}Zx.prototype=ew.prototype;const IF=_.div`
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
`,LF=_.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
  margin-bottom: 12px;
`,zF=_.div`
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
`,DF=_.button`
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
`,MF=_.svg`
  width: 24px;
  height: 24px;
  stroke: ${e=>e.theme.color.accent};
`,UF=_.div`
  margin-bottom: 24px;
`,BF=_.input`
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
`,VF=_.div`
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
`,WF=_.button`
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
`,HF=_.div`
  margin-bottom: 24px;
`,GF=_.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid #d7e3ff;
`,KF=_.div`
  display: flex;
  align-items: center;
`,qF=_.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,YF=_.ul`
  height: 212px;
  overflow: auto;
`,QF=_.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #407bff;
  margin-right: 16px;
`,XF=_.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: #2f2f2f;
`,JF=_.svg`
  width: 26px;
  height: 26px;
  margin-right: 12px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,ZF=_.div`
  display: flex;
  gap: 18px;
`,eN=_.button`
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
`,tN=_.button`
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
`,nN=_.button`
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
`,rN=_.div`
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
`,iN=_.input`
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
`,oN=_.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.accent};
`,aN=_.div`
  position: relative;
  height: 102px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 356px;
    height: 90px;
  }
`,sN=_.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,lN=_.span`
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
`,uN=_.span`
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
`,cN=_.span`
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
`,fN=_.button`
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
`,dN=_.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${e=>e.theme.color.white};
`;var RC=function(t){return AC(t)&&!FC(t)};function AC(e){return!!e&&typeof e=="object"}function FC(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||LC(e)}var NC=typeof Symbol=="function"&&Symbol.for,IC=NC?Symbol.for("react.element"):60103;function LC(e){return e.$$typeof===IC}function zC(e){return Array.isArray(e)?[]:{}}function Ks(e,t){return t.clone!==!1&&t.isMergeableObject(e)?qo(zC(e),e,t):e}function DC(e,t,n){return e.concat(t).map(function(r){return Ks(r,n)})}function MC(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Ks(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Ks(t[i],n):r[i]=qo(e[i],t[i],n)}),r}function qo(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||DC,n.isMergeableObject=n.isMergeableObject||RC;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):MC(e,t,n):Ks(t,n)}qo.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return qo(r,i,n)},{})};var $f=qo,UC=typeof global=="object"&&global&&global.Object===Object&&global;const tw=UC;var BC=typeof self=="object"&&self&&self.Object===Object&&self,VC=tw||BC||Function("return this")();const on=VC;var WC=on.Symbol;const ir=WC;var nw=Object.prototype,HC=nw.hasOwnProperty,GC=nw.toString,Qi=ir?ir.toStringTag:void 0;function KC(e){var t=HC.call(e,Qi),n=e[Qi];try{e[Qi]=void 0;var r=!0}catch{}var i=GC.call(e);return r&&(t?e[Qi]=n:delete e[Qi]),i}var qC=Object.prototype,YC=qC.toString;function QC(e){return YC.call(e)}var XC="[object Null]",JC="[object Undefined]",ny=ir?ir.toStringTag:void 0;function Ar(e){return e==null?e===void 0?JC:XC:ny&&ny in Object(e)?KC(e):QC(e)}function rw(e,t){return function(n){return e(t(n))}}var ZC=rw(Object.getPrototypeOf,Object);const Cp=ZC;function Fr(e){return e!=null&&typeof e=="object"}var ej="[object Object]",tj=Function.prototype,nj=Object.prototype,iw=tj.toString,rj=nj.hasOwnProperty,ij=iw.call(Object);function ry(e){if(!Fr(e)||Ar(e)!=ej)return!1;var t=Cp(e);if(t===null)return!0;var n=rj.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&iw.call(n)==ij}var iy=Array.isArray,oy=Object.keys,oj=Object.prototype.hasOwnProperty,aj=typeof Element<"u";function Tf(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=iy(e),r=iy(t),i,o,a;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!Tf(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,f=t instanceof RegExp;if(u!=f)return!1;if(u&&f)return e.toString()==t.toString();var c=oy(e);if(o=c.length,o!==oy(t).length)return!1;for(i=o;i--!==0;)if(!oj.call(t,c[i]))return!1;if(aj&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(a=c[i],!(a==="_owner"&&e.$$typeof)&&!Tf(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var sj=function(t,n){try{return Tf(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const An=Oi(sj);var lj=!0;function ow(e,t){if(!lj){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function uj(){this.__data__=[],this.size=0}function aw(e,t){return e===t||e!==e&&t!==t}function Ql(e,t){for(var n=e.length;n--;)if(aw(e[n][0],t))return n;return-1}var cj=Array.prototype,fj=cj.splice;function dj(e){var t=this.__data__,n=Ql(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():fj.call(t,n,1),--this.size,!0}function pj(e){var t=this.__data__,n=Ql(t,e);return n<0?void 0:t[n][1]}function hj(e){return Ql(this.__data__,e)>-1}function mj(e,t){var n=this.__data__,r=Ql(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function $n(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$n.prototype.clear=uj;$n.prototype.delete=dj;$n.prototype.get=pj;$n.prototype.has=hj;$n.prototype.set=mj;function gj(){this.__data__=new $n,this.size=0}function yj(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function vj(e){return this.__data__.get(e)}function xj(e){return this.__data__.has(e)}function ua(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var wj="[object AsyncFunction]",bj="[object Function]",Sj="[object GeneratorFunction]",Ej="[object Proxy]";function sw(e){if(!ua(e))return!1;var t=Ar(e);return t==bj||t==Sj||t==wj||t==Ej}var kj=on["__core-js_shared__"];const qu=kj;var ay=function(){var e=/[^.]+$/.exec(qu&&qu.keys&&qu.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function _j(e){return!!ay&&ay in e}var Oj=Function.prototype,$j=Oj.toString;function Nr(e){if(e!=null){try{return $j.call(e)}catch{}try{return e+""}catch{}}return""}var Tj=/[\\^$.*+?()[\]{}|]/g,Pj=/^\[object .+?Constructor\]$/,Cj=Function.prototype,jj=Object.prototype,Rj=Cj.toString,Aj=jj.hasOwnProperty,Fj=RegExp("^"+Rj.call(Aj).replace(Tj,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Nj(e){if(!ua(e)||_j(e))return!1;var t=sw(e)?Fj:Pj;return t.test(Nr(e))}function Ij(e,t){return e==null?void 0:e[t]}function Ir(e,t){var n=Ij(e,t);return Nj(n)?n:void 0}var Lj=Ir(on,"Map");const Yo=Lj;var zj=Ir(Object,"create");const Qo=zj;function Dj(){this.__data__=Qo?Qo(null):{},this.size=0}function Mj(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Uj="__lodash_hash_undefined__",Bj=Object.prototype,Vj=Bj.hasOwnProperty;function Wj(e){var t=this.__data__;if(Qo){var n=t[e];return n===Uj?void 0:n}return Vj.call(t,e)?t[e]:void 0}var Hj=Object.prototype,Gj=Hj.hasOwnProperty;function Kj(e){var t=this.__data__;return Qo?t[e]!==void 0:Gj.call(t,e)}var qj="__lodash_hash_undefined__";function Yj(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Qo&&t===void 0?qj:t,this}function $r(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$r.prototype.clear=Dj;$r.prototype.delete=Mj;$r.prototype.get=Wj;$r.prototype.has=Kj;$r.prototype.set=Yj;function Qj(){this.size=0,this.__data__={hash:new $r,map:new(Yo||$n),string:new $r}}function Xj(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Xl(e,t){var n=e.__data__;return Xj(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Jj(e){var t=Xl(this,e).delete(e);return this.size-=t?1:0,t}function Zj(e){return Xl(this,e).get(e)}function eR(e){return Xl(this,e).has(e)}function tR(e,t){var n=Xl(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function lr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}lr.prototype.clear=Qj;lr.prototype.delete=Jj;lr.prototype.get=Zj;lr.prototype.has=eR;lr.prototype.set=tR;var nR=200;function rR(e,t){var n=this.__data__;if(n instanceof $n){var r=n.__data__;if(!Yo||r.length<nR-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new lr(r)}return n.set(e,t),this.size=n.size,this}function zi(e){var t=this.__data__=new $n(e);this.size=t.size}zi.prototype.clear=gj;zi.prototype.delete=yj;zi.prototype.get=vj;zi.prototype.has=xj;zi.prototype.set=rR;function iR(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var oR=function(){try{var e=Ir(Object,"defineProperty");return e({},"",{}),e}catch{}}();const sy=oR;function lw(e,t,n){t=="__proto__"&&sy?sy(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var aR=Object.prototype,sR=aR.hasOwnProperty;function uw(e,t,n){var r=e[t];(!(sR.call(e,t)&&aw(r,n))||n===void 0&&!(t in e))&&lw(e,t,n)}function Jl(e,t,n,r){var i=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var s=t[o],l=r?r(n[s],e[s],s,n,e):void 0;l===void 0&&(l=e[s]),i?lw(n,s,l):uw(n,s,l)}return n}function lR(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var uR="[object Arguments]";function ly(e){return Fr(e)&&Ar(e)==uR}var cw=Object.prototype,cR=cw.hasOwnProperty,fR=cw.propertyIsEnumerable,dR=ly(function(){return arguments}())?ly:function(e){return Fr(e)&&cR.call(e,"callee")&&!fR.call(e,"callee")};const pR=dR;var hR=Array.isArray;const ca=hR;function mR(){return!1}var fw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,uy=fw&&typeof module=="object"&&module&&!module.nodeType&&module,gR=uy&&uy.exports===fw,cy=gR?on.Buffer:void 0,yR=cy?cy.isBuffer:void 0,vR=yR||mR;const dw=vR;var xR=9007199254740991,wR=/^(?:0|[1-9]\d*)$/;function bR(e,t){var n=typeof e;return t=t??xR,!!t&&(n=="number"||n!="symbol"&&wR.test(e))&&e>-1&&e%1==0&&e<t}var SR=9007199254740991;function pw(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=SR}var ER="[object Arguments]",kR="[object Array]",_R="[object Boolean]",OR="[object Date]",$R="[object Error]",TR="[object Function]",PR="[object Map]",CR="[object Number]",jR="[object Object]",RR="[object RegExp]",AR="[object Set]",FR="[object String]",NR="[object WeakMap]",IR="[object ArrayBuffer]",LR="[object DataView]",zR="[object Float32Array]",DR="[object Float64Array]",MR="[object Int8Array]",UR="[object Int16Array]",BR="[object Int32Array]",VR="[object Uint8Array]",WR="[object Uint8ClampedArray]",HR="[object Uint16Array]",GR="[object Uint32Array]",ye={};ye[zR]=ye[DR]=ye[MR]=ye[UR]=ye[BR]=ye[VR]=ye[WR]=ye[HR]=ye[GR]=!0;ye[ER]=ye[kR]=ye[IR]=ye[_R]=ye[LR]=ye[OR]=ye[$R]=ye[TR]=ye[PR]=ye[CR]=ye[jR]=ye[RR]=ye[AR]=ye[FR]=ye[NR]=!1;function KR(e){return Fr(e)&&pw(e.length)&&!!ye[Ar(e)]}function jp(e){return function(t){return e(t)}}var hw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,go=hw&&typeof module=="object"&&module&&!module.nodeType&&module,qR=go&&go.exports===hw,Yu=qR&&tw.process,YR=function(){try{var e=go&&go.require&&go.require("util").types;return e||Yu&&Yu.binding&&Yu.binding("util")}catch{}}();const _i=YR;var fy=_i&&_i.isTypedArray,QR=fy?jp(fy):KR;const XR=QR;var JR=Object.prototype,ZR=JR.hasOwnProperty;function mw(e,t){var n=ca(e),r=!n&&pR(e),i=!n&&!r&&dw(e),o=!n&&!r&&!i&&XR(e),a=n||r||i||o,s=a?lR(e.length,String):[],l=s.length;for(var u in e)(t||ZR.call(e,u))&&!(a&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||bR(u,l)))&&s.push(u);return s}var eA=Object.prototype;function Rp(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||eA;return e===n}var tA=rw(Object.keys,Object);const nA=tA;var rA=Object.prototype,iA=rA.hasOwnProperty;function oA(e){if(!Rp(e))return nA(e);var t=[];for(var n in Object(e))iA.call(e,n)&&n!="constructor"&&t.push(n);return t}function gw(e){return e!=null&&pw(e.length)&&!sw(e)}function Ap(e){return gw(e)?mw(e):oA(e)}function aA(e,t){return e&&Jl(t,Ap(t),e)}function sA(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var lA=Object.prototype,uA=lA.hasOwnProperty;function cA(e){if(!ua(e))return sA(e);var t=Rp(e),n=[];for(var r in e)r=="constructor"&&(t||!uA.call(e,r))||n.push(r);return n}function Fp(e){return gw(e)?mw(e,!0):cA(e)}function fA(e,t){return e&&Jl(t,Fp(t),e)}var yw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,dy=yw&&typeof module=="object"&&module&&!module.nodeType&&module,dA=dy&&dy.exports===yw,py=dA?on.Buffer:void 0,hy=py?py.allocUnsafe:void 0;function pA(e,t){if(t)return e.slice();var n=e.length,r=hy?hy(n):new e.constructor(n);return e.copy(r),r}function vw(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function hA(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function xw(){return[]}var mA=Object.prototype,gA=mA.propertyIsEnumerable,my=Object.getOwnPropertySymbols,yA=my?function(e){return e==null?[]:(e=Object(e),hA(my(e),function(t){return gA.call(e,t)}))}:xw;const Np=yA;function vA(e,t){return Jl(e,Np(e),t)}function ww(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var xA=Object.getOwnPropertySymbols,wA=xA?function(e){for(var t=[];e;)ww(t,Np(e)),e=Cp(e);return t}:xw;const bw=wA;function bA(e,t){return Jl(e,bw(e),t)}function Sw(e,t,n){var r=t(e);return ca(e)?r:ww(r,n(e))}function SA(e){return Sw(e,Ap,Np)}function EA(e){return Sw(e,Fp,bw)}var kA=Ir(on,"DataView");const Pf=kA;var _A=Ir(on,"Promise");const Cf=_A;var OA=Ir(on,"Set");const jf=OA;var $A=Ir(on,"WeakMap");const Rf=$A;var gy="[object Map]",TA="[object Object]",yy="[object Promise]",vy="[object Set]",xy="[object WeakMap]",wy="[object DataView]",PA=Nr(Pf),CA=Nr(Yo),jA=Nr(Cf),RA=Nr(jf),AA=Nr(Rf),pr=Ar;(Pf&&pr(new Pf(new ArrayBuffer(1)))!=wy||Yo&&pr(new Yo)!=gy||Cf&&pr(Cf.resolve())!=yy||jf&&pr(new jf)!=vy||Rf&&pr(new Rf)!=xy)&&(pr=function(e){var t=Ar(e),n=t==TA?e.constructor:void 0,r=n?Nr(n):"";if(r)switch(r){case PA:return wy;case CA:return gy;case jA:return yy;case RA:return vy;case AA:return xy}return t});const Ip=pr;var FA=Object.prototype,NA=FA.hasOwnProperty;function IA(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&NA.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var LA=on.Uint8Array;const by=LA;function Lp(e){var t=new e.constructor(e.byteLength);return new by(t).set(new by(e)),t}function zA(e,t){var n=t?Lp(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var DA=/\w*$/;function MA(e){var t=new e.constructor(e.source,DA.exec(e));return t.lastIndex=e.lastIndex,t}var Sy=ir?ir.prototype:void 0,Ey=Sy?Sy.valueOf:void 0;function UA(e){return Ey?Object(Ey.call(e)):{}}function BA(e,t){var n=t?Lp(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var VA="[object Boolean]",WA="[object Date]",HA="[object Map]",GA="[object Number]",KA="[object RegExp]",qA="[object Set]",YA="[object String]",QA="[object Symbol]",XA="[object ArrayBuffer]",JA="[object DataView]",ZA="[object Float32Array]",e4="[object Float64Array]",t4="[object Int8Array]",n4="[object Int16Array]",r4="[object Int32Array]",i4="[object Uint8Array]",o4="[object Uint8ClampedArray]",a4="[object Uint16Array]",s4="[object Uint32Array]";function l4(e,t,n){var r=e.constructor;switch(t){case XA:return Lp(e);case VA:case WA:return new r(+e);case JA:return zA(e,n);case ZA:case e4:case t4:case n4:case r4:case i4:case o4:case a4:case s4:return BA(e,n);case HA:return new r;case GA:case YA:return new r(e);case KA:return MA(e);case qA:return new r;case QA:return UA(e)}}var ky=Object.create,u4=function(){function e(){}return function(t){if(!ua(t))return{};if(ky)return ky(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const c4=u4;function f4(e){return typeof e.constructor=="function"&&!Rp(e)?c4(Cp(e)):{}}var d4="[object Map]";function p4(e){return Fr(e)&&Ip(e)==d4}var _y=_i&&_i.isMap,h4=_y?jp(_y):p4;const m4=h4;var g4="[object Set]";function y4(e){return Fr(e)&&Ip(e)==g4}var Oy=_i&&_i.isSet,v4=Oy?jp(Oy):y4;const x4=v4;var w4=1,b4=2,S4=4,Ew="[object Arguments]",E4="[object Array]",k4="[object Boolean]",_4="[object Date]",O4="[object Error]",kw="[object Function]",$4="[object GeneratorFunction]",T4="[object Map]",P4="[object Number]",_w="[object Object]",C4="[object RegExp]",j4="[object Set]",R4="[object String]",A4="[object Symbol]",F4="[object WeakMap]",N4="[object ArrayBuffer]",I4="[object DataView]",L4="[object Float32Array]",z4="[object Float64Array]",D4="[object Int8Array]",M4="[object Int16Array]",U4="[object Int32Array]",B4="[object Uint8Array]",V4="[object Uint8ClampedArray]",W4="[object Uint16Array]",H4="[object Uint32Array]",pe={};pe[Ew]=pe[E4]=pe[N4]=pe[I4]=pe[k4]=pe[_4]=pe[L4]=pe[z4]=pe[D4]=pe[M4]=pe[U4]=pe[T4]=pe[P4]=pe[_w]=pe[C4]=pe[j4]=pe[R4]=pe[A4]=pe[B4]=pe[V4]=pe[W4]=pe[H4]=!0;pe[O4]=pe[kw]=pe[F4]=!1;function yo(e,t,n,r,i,o){var a,s=t&w4,l=t&b4,u=t&S4;if(n&&(a=i?n(e,r,i,o):n(e)),a!==void 0)return a;if(!ua(e))return e;var f=ca(e);if(f){if(a=IA(e),!s)return vw(e,a)}else{var c=Ip(e),d=c==kw||c==$4;if(dw(e))return pA(e,s);if(c==_w||c==Ew||d&&!i){if(a=l||d?{}:f4(e),!s)return l?bA(e,fA(a,e)):vA(e,aA(a,e))}else{if(!pe[c])return i?e:{};a=l4(e,c,s)}}o||(o=new zi);var v=o.get(e);if(v)return v;o.set(e,a),x4(e)?e.forEach(function(x){a.add(yo(x,t,n,x,e,o))}):m4(e)&&e.forEach(function(x,h){a.set(h,yo(x,t,n,h,e,o))});var g=u?l?EA:SA:l?Fp:Ap,m=f?void 0:g(e);return iR(m||e,function(x,h){m&&(h=x,x=e[h]),uw(a,h,yo(x,t,n,h,e,o))}),a}var G4=4;function $y(e){return yo(e,G4)}function Ow(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var K4="[object Symbol]";function zp(e){return typeof e=="symbol"||Fr(e)&&Ar(e)==K4}var q4="Expected a function";function Dp(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(q4);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Dp.Cache||lr),n}Dp.Cache=lr;var Y4=500;function Q4(e){var t=Dp(e,function(r){return n.size===Y4&&n.clear(),r}),n=t.cache;return t}var X4=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,J4=/\\(\\)?/g,Z4=Q4(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(X4,function(n,r,i,o){t.push(i?o.replace(J4,"$1"):r||n)}),t});const e3=Z4;var t3=1/0;function n3(e){if(typeof e=="string"||zp(e))return e;var t=e+"";return t=="0"&&1/e==-t3?"-0":t}var r3=1/0,Ty=ir?ir.prototype:void 0,Py=Ty?Ty.toString:void 0;function $w(e){if(typeof e=="string")return e;if(ca(e))return Ow(e,$w)+"";if(zp(e))return Py?Py.call(e):"";var t=e+"";return t=="0"&&1/e==-r3?"-0":t}function i3(e){return e==null?"":$w(e)}function Tw(e){return ca(e)?Ow(e,n3):zp(e)?[e]:vw(e3(i3(e)))}var o3=1,a3=4;function s3(e){return yo(e,o3|a3)}function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function Pw(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Mn(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Cy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Zl=w.createContext(void 0);Zl.displayName="FormikContext";var l3=Zl.Provider,u3=Zl.Consumer;function Cw(){var e=w.useContext(Zl);return e||ow(!1),e}var jy=function(t){return Array.isArray(t)&&t.length===0},Ge=function(t){return typeof t=="function"},fa=function(t){return t!==null&&typeof t=="object"},c3=function(t){return String(Math.floor(Number(t)))===t},Qu=function(t){return Object.prototype.toString.call(t)==="[object String]"},jw=function(t){return w.Children.count(t)===0},Xu=function(t){return fa(t)&&Ge(t.then)};function be(e,t,n,r){r===void 0&&(r=0);for(var i=Tw(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function tn(e,t,n){for(var r=$y(e),i=r,o=0,a=Tw(t);o<a.length-1;o++){var s=a[o],l=be(e,a.slice(0,o+1));if(l&&(fa(l)||Array.isArray(l)))i=i[s]=$y(l);else{var u=a[o+1];i=i[s]=c3(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[a[o]]===n?e:(n===void 0?delete i[a[o]]:i[a[o]]=n,o===0&&n===void 0&&delete r[a[o]],r)}function Rw(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var a=o[i],s=e[a];fa(s)?n.get(s)||(n.set(s,!0),r[a]=Array.isArray(s)?[]:{},Rw(s,t,n,r[a])):r[a]=t}return r}function f3(e,t){switch(t.type){case"SET_VALUES":return le({},e,{values:t.payload});case"SET_TOUCHED":return le({},e,{touched:t.payload});case"SET_ERRORS":return An(e.errors,t.payload)?e:le({},e,{errors:t.payload});case"SET_STATUS":return le({},e,{status:t.payload});case"SET_ISSUBMITTING":return le({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return le({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return le({},e,{values:tn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return le({},e,{touched:tn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return le({},e,{errors:tn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return le({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return le({},e,{touched:Rw(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return le({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return le({},e,{isSubmitting:!1});default:return e}}var ur={},Fa={};function d3(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,o=e.validateOnMount,a=o===void 0?!1:o,s=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,f=e.onSubmit,c=Mn(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=le({validateOnChange:n,validateOnBlur:i,validateOnMount:a,onSubmit:f},c),v=w.useRef(d.initialValues),g=w.useRef(d.initialErrors||ur),m=w.useRef(d.initialTouched||Fa),x=w.useRef(d.initialStatus),h=w.useRef(!1),p=w.useRef({});w.useEffect(function(){return h.current=!0,function(){h.current=!1}},[]);var y=w.useState(0),S=y[1],E=w.useRef({values:d.initialValues,errors:d.initialErrors||ur,touched:d.initialTouched||Fa,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=E.current,O=w.useCallback(function(k){var I=E.current;E.current=f3(I,k),I!==E.current&&S(function(C){return C+1})},[]),A=w.useCallback(function(k,I){return new Promise(function(C,L){var q=d.validate(k,I);q==null?C(ur):Xu(q)?q.then(function(ne){C(ne||ur)},function(ne){L(ne)}):C(q)})},[d.validate]),B=w.useCallback(function(k,I){var C=d.validationSchema,L=Ge(C)?C(I):C,q=I&&L.validateAt?L.validateAt(I,k):m3(k,L);return new Promise(function(ne,de){q.then(function(){ne(ur)},function(sn){sn.name==="ValidationError"?ne(h3(sn)):de(sn)})})},[d.validationSchema]),D=w.useCallback(function(k,I){return new Promise(function(C){return C(p.current[k].validate(I))})},[]),G=w.useCallback(function(k){var I=Object.keys(p.current).filter(function(L){return Ge(p.current[L].validate)}),C=I.length>0?I.map(function(L){return D(L,be(k,L))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(C).then(function(L){return L.reduce(function(q,ne,de){return ne==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ne&&(q=tn(q,I[de],ne)),q},{})})},[D]),xe=w.useCallback(function(k){return Promise.all([G(k),d.validationSchema?B(k):{},d.validate?A(k):{}]).then(function(I){var C=I[0],L=I[1],q=I[2],ne=$f.all([C,L,q],{arrayMerge:g3});return ne})},[d.validate,d.validationSchema,G,A,B]),Q=Et(function(k){return k===void 0&&(k=T.values),O({type:"SET_ISVALIDATING",payload:!0}),xe(k).then(function(I){return h.current&&(O({type:"SET_ISVALIDATING",payload:!1}),O({type:"SET_ERRORS",payload:I})),I})});w.useEffect(function(){a&&h.current===!0&&An(v.current,d.initialValues)&&Q(v.current)},[a,Q]);var $e=w.useCallback(function(k){var I=k&&k.values?k.values:v.current,C=k&&k.errors?k.errors:g.current?g.current:d.initialErrors||{},L=k&&k.touched?k.touched:m.current?m.current:d.initialTouched||{},q=k&&k.status?k.status:x.current?x.current:d.initialStatus;v.current=I,g.current=C,m.current=L,x.current=q;var ne=function(){O({type:"RESET_FORM",payload:{isSubmitting:!!k&&!!k.isSubmitting,errors:C,touched:L,status:q,values:I,isValidating:!!k&&!!k.isValidating,submitCount:k&&k.submitCount&&typeof k.submitCount=="number"?k.submitCount:0}})};if(d.onReset){var de=d.onReset(T.values,je);Xu(de)?de.then(ne):ne()}else ne()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);w.useEffect(function(){h.current===!0&&!An(v.current,d.initialValues)&&u&&(v.current=d.initialValues,$e(),a&&Q(v.current))},[u,d.initialValues,$e,a,Q]),w.useEffect(function(){u&&h.current===!0&&!An(g.current,d.initialErrors)&&(g.current=d.initialErrors||ur,O({type:"SET_ERRORS",payload:d.initialErrors||ur}))},[u,d.initialErrors]),w.useEffect(function(){u&&h.current===!0&&!An(m.current,d.initialTouched)&&(m.current=d.initialTouched||Fa,O({type:"SET_TOUCHED",payload:d.initialTouched||Fa}))},[u,d.initialTouched]),w.useEffect(function(){u&&h.current===!0&&!An(x.current,d.initialStatus)&&(x.current=d.initialStatus,O({type:"SET_STATUS",payload:d.initialStatus}))},[u,d.initialStatus,d.initialTouched]);var Te=Et(function(k){if(p.current[k]&&Ge(p.current[k].validate)){var I=be(T.values,k),C=p.current[k].validate(I);return Xu(C)?(O({type:"SET_ISVALIDATING",payload:!0}),C.then(function(L){return L}).then(function(L){O({type:"SET_FIELD_ERROR",payload:{field:k,value:L}}),O({type:"SET_ISVALIDATING",payload:!1})})):(O({type:"SET_FIELD_ERROR",payload:{field:k,value:C}}),Promise.resolve(C))}else if(d.validationSchema)return O({type:"SET_ISVALIDATING",payload:!0}),B(T.values,k).then(function(L){return L}).then(function(L){O({type:"SET_FIELD_ERROR",payload:{field:k,value:be(L,k)}}),O({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),At=w.useCallback(function(k,I){var C=I.validate;p.current[k]={validate:C}},[]),Ve=w.useCallback(function(k){delete p.current[k]},[]),F=Et(function(k,I){O({type:"SET_TOUCHED",payload:k});var C=I===void 0?i:I;return C?Q(T.values):Promise.resolve()}),W=w.useCallback(function(k){O({type:"SET_ERRORS",payload:k})},[]),H=Et(function(k,I){var C=Ge(k)?k(T.values):k;O({type:"SET_VALUES",payload:C});var L=I===void 0?n:I;return L?Q(C):Promise.resolve()}),ie=w.useCallback(function(k,I){O({type:"SET_FIELD_ERROR",payload:{field:k,value:I}})},[]),R=Et(function(k,I,C){O({type:"SET_FIELD_VALUE",payload:{field:k,value:I}});var L=C===void 0?n:C;return L?Q(tn(T.values,k,I)):Promise.resolve()}),z=w.useCallback(function(k,I){var C=I,L=k,q;if(!Qu(k)){k.persist&&k.persist();var ne=k.target?k.target:k.currentTarget,de=ne.type,sn=ne.name,eu=ne.id,tu=ne.value,Nw=ne.checked,wF=ne.outerHTML,Bp=ne.options,Iw=ne.multiple;C=I||sn||eu,L=/number|range/.test(de)?(q=parseFloat(tu),isNaN(q)?"":q):/checkbox/.test(de)?v3(be(T.values,C),Nw,tu):Bp&&Iw?y3(Bp):tu}C&&R(C,L)},[R,T.values]),M=Et(function(k){if(Qu(k))return function(I){return z(I,k)};z(k)}),V=Et(function(k,I,C){I===void 0&&(I=!0),O({type:"SET_FIELD_TOUCHED",payload:{field:k,value:I}});var L=C===void 0?i:C;return L?Q(T.values):Promise.resolve()}),$=w.useCallback(function(k,I){k.persist&&k.persist();var C=k.target,L=C.name,q=C.id,ne=C.outerHTML,de=I||L||q;V(de,!0)},[V]),Y=Et(function(k){if(Qu(k))return function(I){return $(I,k)};$(k)}),N=w.useCallback(function(k){Ge(k)?O({type:"SET_FORMIK_STATE",payload:k}):O({type:"SET_FORMIK_STATE",payload:function(){return k}})},[]),me=w.useCallback(function(k){O({type:"SET_STATUS",payload:k})},[]),ee=w.useCallback(function(k){O({type:"SET_ISSUBMITTING",payload:k})},[]),te=Et(function(){return O({type:"SUBMIT_ATTEMPT"}),Q().then(function(k){var I=k instanceof Error,C=!I&&Object.keys(k).length===0;if(C){var L;try{if(L=Qe(),L===void 0)return}catch(q){throw q}return Promise.resolve(L).then(function(q){return h.current&&O({type:"SUBMIT_SUCCESS"}),q}).catch(function(q){if(h.current)throw O({type:"SUBMIT_FAILURE"}),q})}else if(h.current&&(O({type:"SUBMIT_FAILURE"}),I))throw k})}),K=Et(function(k){k&&k.preventDefault&&Ge(k.preventDefault)&&k.preventDefault(),k&&k.stopPropagation&&Ge(k.stopPropagation)&&k.stopPropagation(),te().catch(function(I){console.warn("Warning: An unhandled error was caught from submitForm()",I)})}),je={resetForm:$e,validateForm:Q,validateField:Te,setErrors:W,setFieldError:ie,setFieldTouched:V,setFieldValue:R,setStatus:me,setSubmitting:ee,setTouched:F,setValues:H,setFormikState:N,submitForm:te},Qe=Et(function(){return f(T.values,je)}),J=Et(function(k){k&&k.preventDefault&&Ge(k.preventDefault)&&k.preventDefault(),k&&k.stopPropagation&&Ge(k.stopPropagation)&&k.stopPropagation(),$e()}),De=w.useCallback(function(k){return{value:be(T.values,k),error:be(T.errors,k),touched:!!be(T.touched,k),initialValue:be(v.current,k),initialTouched:!!be(m.current,k),initialError:be(g.current,k)}},[T.errors,T.touched,T.values]),oe=w.useCallback(function(k){return{setValue:function(C,L){return R(k,C,L)},setTouched:function(C,L){return V(k,C,L)},setError:function(C){return ie(k,C)}}},[R,V,ie]),Ne=w.useCallback(function(k){var I=fa(k),C=I?k.name:k,L=be(T.values,C),q={name:C,value:L,onChange:M,onBlur:Y};if(I){var ne=k.type,de=k.value,sn=k.as,eu=k.multiple;ne==="checkbox"?de===void 0?q.checked=!!L:(q.checked=!!(Array.isArray(L)&&~L.indexOf(de)),q.value=de):ne==="radio"?(q.checked=L===de,q.value=de):sn==="select"&&eu&&(q.value=q.value||[],q.multiple=!0)}return q},[Y,M,T.values]),an=w.useMemo(function(){return!An(v.current,T.values)},[v.current,T.values]),Ie=w.useMemo(function(){return typeof s<"u"?an?T.errors&&Object.keys(T.errors).length===0:s!==!1&&Ge(s)?s(d):s:T.errors&&Object.keys(T.errors).length===0},[s,an,T.errors,d]),Lr=le({},T,{initialValues:v.current,initialErrors:g.current,initialTouched:m.current,initialStatus:x.current,handleBlur:Y,handleChange:M,handleReset:J,handleSubmit:K,resetForm:$e,setErrors:W,setFormikState:N,setFieldTouched:V,setFieldValue:R,setFieldError:ie,setStatus:me,setSubmitting:ee,setTouched:F,setValues:H,submitForm:te,validateForm:Q,validateField:Te,isValid:Ie,dirty:an,unregisterField:Ve,registerField:At,getFieldProps:Ne,getFieldMeta:De,getFieldHelpers:oe,validateOnBlur:i,validateOnChange:n,validateOnMount:a});return Lr}function p3(e){var t=d3(e),n=e.component,r=e.children,i=e.render,o=e.innerRef;return w.useImperativeHandle(o,function(){return t}),w.createElement(l3,{value:t},n?w.createElement(n,t):i?i(t):r?Ge(r)?r(t):jw(r)?null:w.Children.only(r):null)}function h3(e){var t={};if(e.inner){if(e.inner.length===0)return tn(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(r>=i.length)break;o=i[r++]}else{if(r=i.next(),r.done)break;o=r.value}var a=o;be(t,a.path)||(t=tn(t,a.path,a.message))}}return t}function m3(e,t,n,r){n===void 0&&(n=!1);var i=Af(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Af(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||ry(i)?Af(i):i!==""?i:void 0}):ry(e[r])?t[r]=Af(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function g3(e,t,n){var r=e.slice();return t.forEach(function(o,a){if(typeof r[a]>"u"){var s=n.clone!==!1,l=s&&n.isMergeableObject(o);r[a]=l?$f(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?r[a]=$f(e[a],o,n):e.indexOf(o)===-1&&r.push(o)}),r}function y3(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function v3(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,o=e.indexOf(n),i=o>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}var x3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?w.useLayoutEffect:w.useEffect;function Et(e){var t=w.useRef(e);return x3(function(){t.current=e}),w.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}function Mp(e){var t=e.validate,n=e.name,r=e.render,i=e.children,o=e.as,a=e.component,s=e.className,l=Mn(e,["validate","name","render","children","as","component","className"]),u=Cw(),f=Mn(u,["validate","validationSchema"]),c=f.registerField,d=f.unregisterField;w.useEffect(function(){return c(n,{validate:t}),function(){d(n)}},[c,d,n,t]);var v=f.getFieldProps(le({name:n},l)),g=f.getFieldMeta(n),m={field:v,form:f};if(r)return r(le({},m,{meta:g}));if(Ge(i))return i(le({},m,{meta:g}));if(a){if(typeof a=="string"){var x=l.innerRef,h=Mn(l,["innerRef"]);return w.createElement(a,le({ref:x},v,h,{className:s}),i)}return w.createElement(a,le({field:v,form:f},l,{className:s}),i)}var p=o||"input";if(typeof p=="string"){var y=l.innerRef,S=Mn(l,["innerRef"]);return w.createElement(p,le({ref:y},v,S,{className:s}),i)}return w.createElement(p,le({},v,l,{className:s}),i)}var Aw=w.forwardRef(function(e,t){var n=e.action,r=Mn(e,["action"]),i=n??"#",o=Cw(),a=o.handleReset,s=o.handleSubmit;return w.createElement("form",le({onSubmit:s,ref:t,onReset:a,action:i},r))});Aw.displayName="Form";function w3(e){var t=function(i){return w.createElement(u3,null,function(o){return o||ow(!1),w.createElement(e,le({},i,{formik:o}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",Kf(t,e)}var b3=function(t,n,r){var i=Tr(t),o=i[n];return i.splice(n,1),i.splice(r,0,o),i},S3=function(t,n,r){var i=Tr(t),o=i[n];return i[n]=i[r],i[r]=o,i},Ju=function(t,n,r){var i=Tr(t);return i.splice(n,0,r),i},E3=function(t,n,r){var i=Tr(t);return i[n]=r,i},Tr=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(le({},t,{length:n+1}))}else return[]},Ry=function(t,n){var r=typeof t=="function"?t:n;return function(i){if(Array.isArray(i)||fa(i)){var o=Tr(i);return r(o)}return i}},k3=function(e){Pw(t,e);function t(r){var i;return i=e.call(this,r)||this,i.updateArrayField=function(o,a,s){var l=i.props,u=l.name,f=l.formik.setFormikState;f(function(c){var d=Ry(s,o),v=Ry(a,o),g=tn(c.values,u,o(be(c.values,u))),m=s?d(be(c.errors,u)):void 0,x=a?v(be(c.touched,u)):void 0;return jy(m)&&(m=void 0),jy(x)&&(x=void 0),le({},c,{values:g,errors:s?tn(c.errors,u,m):c.errors,touched:a?tn(c.touched,u,x):c.touched})})},i.push=function(o){return i.updateArrayField(function(a){return[].concat(Tr(a),[s3(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,a){return i.updateArrayField(function(s){return S3(s,o,a)},!0,!0)},i.handleSwap=function(o,a){return function(){return i.swap(o,a)}},i.move=function(o,a){return i.updateArrayField(function(s){return b3(s,o,a)},!0,!0)},i.handleMove=function(o,a){return function(){return i.move(o,a)}},i.insert=function(o,a){return i.updateArrayField(function(s){return Ju(s,o,a)},function(s){return Ju(s,o,null)},function(s){return Ju(s,o,null)})},i.handleInsert=function(o,a){return function(){return i.insert(o,a)}},i.replace=function(o,a){return i.updateArrayField(function(s){return E3(s,o,a)},!1,!1)},i.handleReplace=function(o,a){return function(){return i.replace(o,a)}},i.unshift=function(o){var a=-1;return i.updateArrayField(function(s){var l=s?[o].concat(s):[o];return a=l.length,l},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Cy(i)),i.pop=i.pop.bind(Cy(i)),i}var n=t.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!An(be(i.formik.values,i.name),be(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var o;return this.updateArrayField(function(a){var s=a?Tr(a):[];return o||(o=s[i]),Ge(s.splice)&&s.splice(i,1),Ge(s.every)&&s.every(function(l){return l===void 0})?[]:s},!0,!0),o},n.pop=function(){var i;return this.updateArrayField(function(o){var a=o.slice();return i||(i=a&&a.pop&&a.pop()),a},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,a=o.component,s=o.render,l=o.children,u=o.name,f=o.formik,c=Mn(f,["validate","validationSchema"]),d=le({},i,{form:c,name:u});return a?w.createElement(a,d):s?s(d):l?typeof l=="function"?l(d):jw(l)?null:w.Children.only(l):null},t}(w.Component);k3.defaultProps={validateOnChange:!0};var _3=function(e){Pw(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(i){return be(this.props.formik.errors,this.props.name)!==be(i.formik.errors,this.props.name)||be(this.props.formik.touched,this.props.name)!==be(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,o=i.component,a=i.formik,s=i.render,l=i.children,u=i.name,f=Mn(i,["component","formik","render","children","name"]),c=be(a.touched,u),d=be(a.errors,u);return c&&d?s?Ge(s)?s(d):null:l?Ge(l)?l(d):null:o?w.createElement(o,f,d):d:null},t}(w.Component),O3=w3(_3);const $3=_.label`
.test-input {
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
  }`,Up=_.p`
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,Ay=_.label`
  display: inline-block;
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,T3=_.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,Fw=_.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,Zu=_.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,ec=_.div`
  position: relative;
  margin-top: 8px;
`,Mr=_(Fw)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`,P3=_.button`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  border: none;
  background-color: transparent;
  padding: 0;
`,C3=_.span`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`,Fy=_.div`
  margin-bottom: 24px;
`,Ny=_.div`
  margin-bottom: 12px;
`,j3=_(Up)`
  margin-bottom: 12px;
`,Iy=_(Mp)`
  border: 1px solid ${e=>e.theme.color.accent};
  width: 14px;
  height: 14px;

  &:checked {
    color: ${e=>e.theme.color.accent};
  }
`,R3=_.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,Ly=_.span`
  margin-left: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,zy=_.label`
  display: flex;
  align-items: center;
`,A3=_.img`
  border-radius: 60%;
`,Br=_(Mp)`
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
`,Xi=_(Br)`
  border: 1px solid ${e=>e.theme.color.secondaryRed};
  color: ${e=>e.theme.color.secondaryRed};

  &:focus {
    color: ${({theme:e})=>e.color.secondaryRed};
  }

  &::placeholder {
    color: ${e=>e.theme.color.secondaryRed};
  }
`,Na=_(O3)`
  margin-top: 4px;
  color: ${e=>e.theme.color.secondaryRed};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`,F3=_.p`
  margin-top: 4px;
  color: ${e=>e.theme.color.secondaryRed};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`,N3=_.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 32px;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.color.white};

  @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`,I3=_(Up)`
  margin-bottom: 12px;
`,tc=_.label`
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,L3=_.button`
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
`,z3=_.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
`,Dy=_.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 392px;
  }
`,My=_.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 0px;
  }
`,D3=_.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 52px;
  }
`;_(gx)`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    max-width: 1008px;
  }
`;const M3="src/assets/images/default_avatar_to_download.jpg",U3=Zx().shape({gender:Ur().required("Required"),username:Ur().min(3,"Username must be more then 3 characters long").max(32,"Username must be less then 32 characters long").required("Required"),email:Ur().email("Invalid email").required("Required"),newPassword:Ur().min(8,"New password must be at least 8 characters long").max(64,"New password must be less then 64 characters long").required("Required"),oldPassword:Ur().min(8,"Old password must be at least 8 characters long").max(64,"Old password must be less then 64 characters long").required("Required")}),B3=({onClose:e})=>{const[t,n]=w.useState(),[r,i]=w.useState(),[o,a]=w.useState(!1),s=w.useRef(null),l=w.forwardRef((c,d)=>b.jsx(Mp,{innerRef:d,...c}));l.displayName="MyField";const u=()=>{s.current.click()},f=()=>{a(c=>!c)};return w.useEffect(()=>{if(!t)return;const c=URL.createObjectURL(t[0]);return i(c),()=>{URL.revokeObjectURL(c)}},[t]),b.jsx(b.Fragment,{children:b.jsx(Bl,{onClose:e,title:"Setting",children:b.jsx(N3,{children:b.jsx(p3,{initialValues:{avatar:"",gender:"Girl",username:"",email:"",oldPassword:"",newPassword:"",repeatedPassword:""},validationSchema:U3,onSubmit:(c,d)=>{console.log(c),d.resetForm()},children:({values:c,errors:d,touched:v})=>b.jsxs(Aw,{children:[b.jsxs(Fy,{children:[b.jsx(Up,{children:"Your photo"}),b.jsxs(T3,{children:[b.jsx(A3,{src:r||M3,alt:"user avatar",width:"80px",height:"80px"}),b.jsxs($3,{children:[b.jsx(l,{innerRef:s,type:"file",name:"avatar",className:"test-input",accept:"image/png, image/jpeg",onChange:g=>{g.target.files&&g.target.files.length>0&&n(g.target.files)}}),b.jsxs(P3,{type:"button",onClick:u,children:[b.jsx(Fw,{children:b.jsx("use",{href:`${kt}#icon-arrow-up`})}),b.jsx(C3,{children:"Upload a photo"})]})]})]})]}),b.jsxs(z3,{children:[b.jsxs(Dy,{children:[b.jsxs(D3,{children:[b.jsx(j3,{children:"Your gender identity"}),b.jsxs(R3,{children:[b.jsxs(zy,{children:[b.jsx(Iy,{type:"radio",name:"gender",value:"Girl",checked:c.gender==="Girl"}),b.jsx(Ly,{children:"Girl"})]}),b.jsxs(zy,{children:[b.jsx(Iy,{type:"radio",name:"gender",value:"Man",checked:c.gender==="Man"}),b.jsx(Ly,{children:"Man"})]})]})]}),b.jsxs(Fy,{children:[b.jsx(Ay,{htmlFor:"username",children:"Your name"}),d.username&&v.username?b.jsx(Xi,{type:"text",id:"username",name:"username",placeholder:c.username}):b.jsx(Br,{type:"text",id:"username",name:"username",placeholder:c.username}),b.jsx(Na,{component:"p",name:"username"})]}),b.jsxs(My,{children:[b.jsx(Ay,{htmlFor:"email",children:"E-mail"}),d.email&&v.email?b.jsx(Xi,{type:"email",id:"email",name:"email",placeholder:c.email}):b.jsx(Br,{type:"email",id:"email",name:"email",placeholder:c.email}),b.jsx(Na,{component:"p",name:"email"})]})]}),b.jsxs(Dy,{children:[b.jsx(I3,{children:"Password"}),b.jsxs(Ny,{children:[b.jsx(tc,{htmlFor:"oldPassword",children:"Outdated password:"}),b.jsxs(ec,{children:[d.oldPassword&&v.oldPassword?b.jsx(Xi,{type:o?"text":"password",id:"oldPassword",name:"oldPassword",placeholder:"Password"}):b.jsx(Br,{type:o?"text":"password",id:"oldPassword",name:"oldPassword",placeholder:"Password"}),b.jsx(Zu,{type:"button",onClick:f,children:o?b.jsx(Mr,{children:b.jsx("use",{href:`${kt}#icon-to-open`})}):b.jsx(Mr,{children:b.jsx("use",{href:`${kt}#icon-to-hide`})})})]}),b.jsx(Na,{component:"p",name:"oldPassword"})]}),b.jsxs(Ny,{children:[b.jsx(tc,{htmlFor:"password",children:"New Password:"}),b.jsxs(ec,{children:[d.newPassword&&v.newPassword?b.jsx(Xi,{type:o?"text":"password",id:"password",name:"newPassword",placeholder:"Password"}):b.jsx(Br,{type:o?"text":"password",id:"password",name:"newPassword",placeholder:"Password"}),b.jsx(Zu,{type:"button",onClick:f,children:o?b.jsx(Mr,{children:b.jsx("use",{href:`${kt}#icon-to-open`})}):b.jsx(Mr,{children:b.jsx("use",{href:`${kt}#icon-to-hide`})})})]}),b.jsx(Na,{component:"p",name:"newPassword"})]}),b.jsxs(My,{children:[b.jsx(tc,{htmlFor:"repeatedPassword",children:"Repeat new password:"}),b.jsxs(ec,{children:[c.newPassword!==c.repeatedPassword?b.jsx(Xi,{type:o?"text":"password",id:"repeatedPassword",name:"repeatedPassword",placeholder:"Password"}):b.jsx(Br,{type:o?"text":"password",id:"repeatedPassword",name:"repeatedPassword",placeholder:"Password"}),b.jsx(Zu,{type:"button",onClick:f,children:o?b.jsx(Mr,{children:b.jsx("use",{href:`${kt}#icon-to-open`})}):b.jsx(Mr,{children:b.jsx("use",{href:`${kt}#icon-to-hide`})})})]}),c.newPassword!==c.repeatedPassword?b.jsx(F3,{children:`The entered password doesn't matches the new
                            password`}):null]})]})]}),b.jsx(L3,{type:"submit",children:"Save"})]})})})})})},pN=_.div`
  background-position: -120px center;
  background-image: -webkit-image-set(
    url(${Mx}) 1x,
    url(${Ux}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 916px;
  min-height: 680px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Bx}) 1x,
      url(${Vx}) 2x
    );
    width: 736px;
    height: 548px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Wx}) 1x,
      url(${Hx}) 2x
    );
    width: 916px;
    min-height: 680px;
  }
`,hN=_.div`
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
`,mN=_.span`
  color: red;
`,V3=_.button`
  width: 100%;
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  text-align: center;
  color: ${e=>e.theme.color.white};
  background-color: ${e=>e.theme.color.accent};
`,gN=_.label`
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
`,yN=_.input`
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
`,vN=_.form`
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
`,xN=_(V3)`
  background-color: ${e=>e.theme.color.secondaryPowderBlue};
  cursor: not-allowed;
`,wN=_.h2`
  width: 100%;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.color.black};
`,bN=_.svg`
  width: 16px;
  height: 16px;
  border: 1px;
  stroke: ${e=>e.theme.color.accent};
  fill: ${e=>e.theme.color.white};
  position: absolute;
  right: 10px;
  top: 44px;
`,SN=_(Ko)`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
  &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }
`,EN=_(Ko)`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
  &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }
`,W3=_.button`
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
`,H3=_.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: ${({theme:e})=>e.color.black};
  fill: transparent;
`,G3=()=>b.jsx("div",{children:b.jsx(Ko,{to:"/signin",children:b.jsxs(W3,{type:"button",children:["Sign in",b.jsx(H3,{children:b.jsx("use",{href:`${kt}#icon-user`})})]})})}),K3=_.div`
  position: relative;
  display: flex; 
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`,q3=_.p`
  font-size: 18px;
  line-height: 1.33em;

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`,Y3=_.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  padding: 0;
`,Q3=_.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`,X3=_.span`
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
`,J3=_.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.accent};
  fill: transparent;

  &:hover,
  &:focus {
    color: ${e=>e.theme.color.accent};
  }
`,Z3=()=>{const[e,t]=w.useState(!1),{userName:n,avatarURL:r}=ji(TP),i=()=>{t(!e)},o=n?n.charAt(0).toUpperCase():"V",a=()=>n&&r?{name:n,avatar:r}:n?{name:n,avatar:o}:{name:o,avatar:o},{name:s,avatar:l}=a();return b.jsxs(K3,{children:[b.jsx(q3,{children:s}),b.jsxs(Y3,{onClick:i,children:[r?b.jsx(Q3,{src:l,alt:""}):b.jsx(X3,{children:l}),b.jsx(J3,{children:b.jsx("use",{href:`${kt}#icon-arrow-down`})})]}),e&&b.jsx(tF,{})]})},eF=_.div`
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
`,Uy=_.svg`
  margin-right: 8px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,By=_.button`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  background-color: transparent;
  padding: 0;
`,Vy=_.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,tF=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),i=()=>{t(!0)},o=()=>{t(!1)},a=()=>{r(!0)},s=()=>{r(!1)};return b.jsx(b.Fragment,{children:b.jsx(eF,{children:b.jsxs("ul",{children:[b.jsxs(Vy,{children:[b.jsx(Uy,{width:"16px",height:"16px",children:b.jsx("use",{href:`${kt}#icon-settings`})}),b.jsxs(By,{type:"button",onClick:i,children:["Setting",e&&b.jsx(B3,{onClose:o})]})]}),b.jsxs(Vy,{children:[b.jsx(Uy,{width:"16px",height:"16px",children:b.jsx("use",{href:`${kt}#icon-exit`})}),b.jsxs(By,{type:"button",onClick:a,children:["Log out",n&&b.jsx(sF,{onClose:s})]})]})]})})})},nF=_.h2`
  margin-bottom: 24px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
`,rF=_.button`
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
`,iF=_.button`
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
`,oF=_.ul`
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
`,aF=_.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`,sF=({onClose:e})=>{const t=P1();return b.jsx(b.Fragment,{children:b.jsx(Bl,{onClose:e,title:"Log out",children:b.jsxs(aF,{children:[b.jsx(nF,{children:"Do you really want to leave?"}),b.jsxs(oF,{children:[b.jsx("li",{children:b.jsx(iF,{type:"button",onClick:e,children:"Cancel"})}),b.jsx("li",{children:b.jsx(rF,{type:"button",onClick:()=>t(ux()),children:"Log out"})})]})]})})})},kN=_.div`
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
`,_N=_.h1`
  display: none;
`,ON=_.h2`
  font-weight: 700;
  font-size: 28px;
  color: ${({theme:e})=>e.color.black};
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`,$N=_.p`
  font-size: 24px;
  color: ${({theme:e})=>e.color.black};
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`,TN=_.ul`
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
`,PN=_.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,CN=_.div`
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
`,jN=_.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`,RN=_.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  line-height: 20px;
  margin-bottom: 12px;
`,AN=_.button`
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
`,FN=_.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  margin-bottom: 12px;
`,NN=_.li`
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
`,IN=_.div`
  display: inline-block;
  margin: 0;
`,LN=_.div`
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
`,zN=_.ul`
  list-style-type: none;
  padding-left: 0;
`,lF="modulepreload",uF=function(e){return"/water-tracker/"+e},Wy={},Di=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=uF(o),o in Wy)return;Wy[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const c=i[f];if(c.href===o&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":lF,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,c)=>{u.addEventListener("load",f),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})},cF=({component:e,redirectTo:t})=>ji(Gl)?b.jsx(e,{}):b.jsx(zx,{to:t}),Ia=({component:e,redirectTo:t})=>ji(Gl)?b.jsx(zx,{to:t}):e,fF=()=>b.jsxs(b.Fragment,{children:[b.jsx(RP,{}),b.jsx("main",{children:b.jsx(w.Suspense,{fallback:b.jsx(bp,{}),children:b.jsx(dP,{})})})]}),dF=w.lazy(()=>Di(()=>import("./Welcome-d3bfdaeb.js"),["assets/Welcome-d3bfdaeb.js","assets/Section-409b101c.js"])),pF=w.lazy(()=>Di(()=>import("./Home-43c872d6.js"),["assets/Home-43c872d6.js","assets/Section-409b101c.js","assets/bubbleTablet@2x-6e22c1d3.js"])),hF=w.lazy(()=>Di(()=>import("./SignIn-2964ce2b.js"),["assets/SignIn-2964ce2b.js","assets/Section-409b101c.js","assets/bubbleTablet@2x-6e22c1d3.js"])),mF=w.lazy(()=>Di(()=>import("./SignUp-bae83bff.js"),["assets/SignUp-bae83bff.js","assets/Section-409b101c.js","assets/bubbleTablet@2x-6e22c1d3.js"])),gF=w.lazy(()=>Di(()=>import("./Error-ee132280.js"),["assets/Error-ee132280.js","assets/Section-409b101c.js"])),yF=w.lazy(()=>Di(()=>import("./ForgotPassword-50c9504c.js"),["assets/ForgotPassword-50c9504c.js","assets/Section-409b101c.js"])),vF=()=>{const e=P1(),t=ji(PP);return w.useEffect(()=>{e(as())},[e]),t?b.jsx(bp,{}):b.jsx(hP,{children:b.jsxs(Cn,{path:"/",element:b.jsx(fF,{}),children:[b.jsx(Cn,{index:!0,element:b.jsx(Ia,{component:b.jsx(dF,{}),redirectTo:"/home"})}),b.jsx(Cn,{path:"home",element:b.jsx(cF,{component:pF,redirectTo:"/"})}),b.jsx(Cn,{path:"signin",element:b.jsx(Ia,{component:b.jsx(hF,{}),redirectTo:"/home"})}),b.jsx(Cn,{path:"signup",element:b.jsx(Ia,{component:b.jsx(mF,{}),redirectTo:"/home"})}),b.jsx(Cn,{path:"forgot-password",element:b.jsx(Ia,{component:b.jsx(yF,{}),redirectTo:"/signin"})}),b.jsx(Cn,{path:"*",element:b.jsx(gF,{})})]})})},xF=ac.createRoot(document.getElementById("root"));xF.render(b.jsx(He.StrictMode,{children:b.jsxs(m0,{theme:pf,children:[b.jsx(g0,{styles:y$}),b.jsx(ek,{store:fx,children:b.jsx(C1,{loading:b.jsx(bp,{}),persistor:f$,children:b.jsx(bP,{basename:"/water-tracker",children:b.jsx(vF,{})})})})]})}));export{XF as $,IF as A,RN as B,LN as C,bF as D,zF as E,LF as F,DF as G,_N as H,PN as I,MF as J,UF as K,zN as L,BF as M,VF as N,IN as O,$N as P,WF as Q,HF as R,qF as S,CN as T,YF as U,GF as V,kN as W,KF as X,RF as Y,JF as Z,QF as _,ON as a,ZF as a0,eN as a1,tN as a2,nN as a3,rN as a4,aN as a5,oN as a6,iN as a7,sN as a8,uN as a9,lN as aa,cN as ab,fN as ac,dN as ad,P1 as ae,hN as af,pN as ag,vN as ah,wN as ai,gN as aj,yN as ak,mN as al,bN as am,xN as an,V3 as ao,EN as ap,XO as aq,SN as ar,QO as as,A$ as at,TN as b,jN as c,AN as d,FN as e,NN as f,EF as g,MP as h,SF as i,b as j,kF as k,_F as l,OF as m,_ as n,TF as o,$F as p,PF as q,w as r,kt as s,jF as t,Nx as u,CF as v,AF as w,FF as x,NF as y,Bl as z};
