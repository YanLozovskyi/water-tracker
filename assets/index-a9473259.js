function Nw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Iw(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Hy={exports:{}},qs={},Gy={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),Lw=Symbol.for("react.portal"),zw=Symbol.for("react.fragment"),Dw=Symbol.for("react.strict_mode"),Mw=Symbol.for("react.profiler"),Uw=Symbol.for("react.provider"),Bw=Symbol.for("react.context"),Vw=Symbol.for("react.forward_ref"),Ww=Symbol.for("react.suspense"),Hw=Symbol.for("react.memo"),Gw=Symbol.for("react.lazy"),Wp=Symbol.iterator;function Kw(e){return e===null||typeof e!="object"?null:(e=Wp&&e[Wp]||e["@@iterator"],typeof e=="function"?e:null)}var Ky={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qy=Object.assign,Yy={};function Ti(e,t,n){this.props=e,this.context=t,this.refs=Yy,this.updater=n||Ky}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ti.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qy(){}Qy.prototype=Ti.prototype;function Ff(e,t,n){this.props=e,this.context=t,this.refs=Yy,this.updater=n||Ky}var Nf=Ff.prototype=new Qy;Nf.constructor=Ff;qy(Nf,Ti.prototype);Nf.isPureReactComponent=!0;var Hp=Array.isArray,Xy=Object.prototype.hasOwnProperty,If={current:null},Jy={key:!0,ref:!0,__self:!0,__source:!0};function Zy(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Xy.call(t,r)&&!Jy.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Qo,type:e,key:o,ref:a,props:i,_owner:If.current}}function qw(e,t){return{$$typeof:Qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qo}function Yw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gp=/\/+/g;function nu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yw(""+e.key):t.toString(36)}function Ia(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Qo:case Lw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+nu(a,0):r,Hp(i)?(n="",e!=null&&(n=e.replace(Gp,"$&/")+"/"),Ia(i,t,n,"",function(u){return u})):i!=null&&(Lf(i)&&(i=qw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Gp,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Hp(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+nu(o,s);a+=Ia(o,t,n,l,i)}else if(l=Kw(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+nu(o,s++),a+=Ia(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function fa(e,t,n){if(e==null)return e;var r=[],i=0;return Ia(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Qw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},La={transition:null},Xw={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:La,ReactCurrentOwner:If};X.Children={map:fa,forEach:function(e,t,n){fa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fa(e,function(){t++}),t},toArray:function(e){return fa(e,function(t){return t})||[]},only:function(e){if(!Lf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Ti;X.Fragment=zw;X.Profiler=Mw;X.PureComponent=Ff;X.StrictMode=Dw;X.Suspense=Ww;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xw;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qy({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=If.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Xy.call(t,l)&&!Jy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Qo,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:Bw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Uw,_context:e},e.Consumer=e};X.createElement=Zy;X.createFactory=function(e){var t=Zy.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:Vw,render:e}};X.isValidElement=Lf;X.lazy=function(e){return{$$typeof:Gw,_payload:{_status:-1,_result:e},_init:Qw}};X.memo=function(e,t){return{$$typeof:Hw,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=La.transition;La.transition={};try{e()}finally{La.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return ot.current.useCallback(e,t)};X.useContext=function(e){return ot.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};X.useEffect=function(e,t){return ot.current.useEffect(e,t)};X.useId=function(){return ot.current.useId()};X.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return ot.current.useMemo(e,t)};X.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};X.useRef=function(e){return ot.current.useRef(e)};X.useState=function(e){return ot.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return ot.current.useTransition()};X.version="18.2.0";Gy.exports=X;var w=Gy.exports;const He=$i(w),nc=Nw({__proto__:null,default:He},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jw=w,Zw=Symbol.for("react.element"),eb=Symbol.for("react.fragment"),tb=Object.prototype.hasOwnProperty,nb=Jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rb={key:!0,ref:!0,__self:!0,__source:!0};function e0(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)tb.call(t,r)&&!rb.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Zw,type:e,key:o,ref:a,props:i,_owner:nb.current}}qs.Fragment=eb;qs.jsx=e0;qs.jsxs=e0;Hy.exports=qs;var b=Hy.exports;function ib(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ob(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ab=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ob(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ib(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ze="-ms-",ls="-moz-",ae="-webkit-",t0="comm",zf="rule",Df="decl",sb="@import",n0="@keyframes",lb="@layer",ub=Math.abs,Ys=String.fromCharCode,cb=Object.assign;function fb(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function r0(e){return e.trim()}function db(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function rc(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function yo(e,t,n){return e.slice(t,n)}function Kt(e){return e.length}function Mf(e){return e.length}function da(e,t){return t.push(e),e}function pb(e,t){return e.map(t).join("")}var Qs=1,pi=1,i0=0,pt=0,Re=0,Ci="";function Xs(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Qs,column:pi,length:a,return:""}}function Di(e,t){return cb(Xs("",null,null,"",null,null,0),e,{length:-e.length},t)}function hb(){return Re}function mb(){return Re=pt>0?Ke(Ci,--pt):0,pi--,Re===10&&(pi=1,Qs--),Re}function gt(){return Re=pt<i0?Ke(Ci,pt++):0,pi++,Re===10&&(pi=1,Qs++),Re}function Xt(){return Ke(Ci,pt)}function za(){return pt}function Xo(e,t){return yo(Ci,e,t)}function vo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function o0(e){return Qs=pi=1,i0=Kt(Ci=e),pt=0,[]}function a0(e){return Ci="",e}function Da(e){return r0(Xo(pt-1,ic(e===91?e+2:e===40?e+1:e)))}function gb(e){for(;(Re=Xt())&&Re<33;)gt();return vo(e)>2||vo(Re)>3?"":" "}function yb(e,t){for(;--t&&gt()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return Xo(e,za()+(t<6&&Xt()==32&&gt()==32))}function ic(e){for(;gt();)switch(Re){case e:return pt;case 34:case 39:e!==34&&e!==39&&ic(Re);break;case 40:e===41&&ic(e);break;case 92:gt();break}return pt}function vb(e,t){for(;gt()&&e+Re!==47+10;)if(e+Re===42+42&&Xt()===47)break;return"/*"+Xo(t,pt-1)+"*"+Ys(e===47?e:gt())}function xb(e){for(;!vo(Xt());)gt();return Xo(e,pt)}function wb(e){return a0(Ma("",null,null,null,[""],e=o0(e),0,[0],e))}function Ma(e,t,n,r,i,o,a,s,l){for(var u=0,f=0,c=a,d=0,v=0,g=0,m=1,x=1,h=1,p=0,y="",S=i,E=o,T=r,_=y;x;)switch(g=p,p=gt()){case 40:if(g!=108&&Ke(_,c-1)==58){rc(_+=se(Da(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:_+=Da(p);break;case 9:case 10:case 13:case 32:_+=gb(g);break;case 92:_+=yb(za()-1,7);continue;case 47:switch(Xt()){case 42:case 47:da(bb(vb(gt(),za()),t,n),l);break;default:_+="/"}break;case 123*m:s[u++]=Kt(_)*h;case 125*m:case 59:case 0:switch(p){case 0:case 125:x=0;case 59+f:h==-1&&(_=se(_,/\f/g,"")),v>0&&Kt(_)-c&&da(v>32?qp(_+";",r,n,c-1):qp(se(_," ","")+";",r,n,c-2),l);break;case 59:_+=";";default:if(da(T=Kp(_,t,n,u,f,i,s,y,S=[],E=[],c),o),p===123)if(f===0)Ma(_,t,T,T,S,o,c,s,E);else switch(d===99&&Ke(_,3)===110?100:d){case 100:case 108:case 109:case 115:Ma(e,T,T,r&&da(Kp(e,T,T,0,0,i,s,y,i,S=[],c),E),i,E,c,s,r?S:E);break;default:Ma(_,T,T,T,[""],E,0,s,E)}}u=f=v=0,m=h=1,y=_="",c=a;break;case 58:c=1+Kt(_),v=g;default:if(m<1){if(p==123)--m;else if(p==125&&m++==0&&mb()==125)continue}switch(_+=Ys(p),p*m){case 38:h=f>0?1:(_+="\f",-1);break;case 44:s[u++]=(Kt(_)-1)*h,h=1;break;case 64:Xt()===45&&(_+=Da(gt())),d=Xt(),f=c=Kt(y=_+=xb(za())),p++;break;case 45:g===45&&Kt(_)==2&&(m=0)}}return o}function Kp(e,t,n,r,i,o,a,s,l,u,f){for(var c=i-1,d=i===0?o:[""],v=Mf(d),g=0,m=0,x=0;g<r;++g)for(var h=0,p=yo(e,c+1,c=ub(m=a[g])),y=e;h<v;++h)(y=r0(m>0?d[h]+" "+p:se(p,/&\f/g,d[h])))&&(l[x++]=y);return Xs(e,t,n,i===0?zf:s,l,u,f)}function bb(e,t,n){return Xs(e,t,n,t0,Ys(hb()),yo(e,2,-2),0)}function qp(e,t,n,r){return Xs(e,t,n,Df,yo(e,0,r),yo(e,r+1,-1),r)}function ii(e,t){for(var n="",r=Mf(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Sb(e,t,n,r){switch(e.type){case lb:if(e.children.length)break;case sb:case Df:return e.return=e.return||e.value;case t0:return"";case n0:return e.return=e.value+"{"+ii(e.children,r)+"}";case zf:e.value=e.props.join(",")}return Kt(n=ii(e.children,r))?e.return=e.value+"{"+n+"}":""}function Eb(e){var t=Mf(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function kb(e){return function(t){t.root||(t=t.return)&&e(t)}}var Yp=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var i=t(r);return n.set(r,i),i}};function s0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var _b=function(t,n,r){for(var i=0,o=0;i=o,o=Xt(),i===38&&o===12&&(n[r]=1),!vo(o);)gt();return Xo(t,pt)},Ob=function(t,n){var r=-1,i=44;do switch(vo(i)){case 0:i===38&&Xt()===12&&(n[r]=1),t[r]+=_b(pt-1,n,r);break;case 2:t[r]+=Da(i);break;case 4:if(i===44){t[++r]=Xt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ys(i)}while(i=gt());return t},$b=function(t,n){return a0(Ob(o0(t),n))},Qp=new WeakMap,Tb=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Qp.get(r))&&!i){Qp.set(t,!0);for(var o=[],a=$b(n,o),s=r.props,l=0,u=0;l<a.length;l++)for(var f=0;f<s.length;f++,u++)t.props[u]=o[l]?a[l].replace(/&\f/g,s[f]):s[f]+" "+a[l]}}},Cb=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function l0(e,t){switch(fb(e,t)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+ls+e+Ze+e+e;case 6828:case 4268:return ae+e+Ze+e+e;case 6165:return ae+e+Ze+"flex-"+e+e;case 5187:return ae+e+se(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+Ze+"flex-$1$2")+e;case 5443:return ae+e+Ze+"flex-item-"+se(e,/flex-|-self/,"")+e;case 4675:return ae+e+Ze+"flex-line-pack"+se(e,/align-content|flex-|-self/,"")+e;case 5548:return ae+e+Ze+se(e,"shrink","negative")+e;case 5292:return ae+e+Ze+se(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+se(e,"-grow","")+ae+e+Ze+se(e,"grow","positive")+e;case 4554:return ae+se(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+ls+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~rc(e,"stretch")?l0(se(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,Kt(e)-3-(~rc(e,"!important")&&10))){case 107:return se(e,":",":"+ae)+e;case 101:return se(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ae+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+Ze+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return ae+e+Ze+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+Ze+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+Ze+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ae+e+Ze+e+e}return e}var Pb=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Df:t.return=l0(t.value,t.length);break;case n0:return ii([Di(t,{value:se(t.value,"@","@"+ae)})],i);case zf:if(t.length)return pb(t.props,function(o){switch(db(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ii([Di(t,{props:[se(o,/:(read-\w+)/,":"+ls+"$1")]})],i);case"::placeholder":return ii([Di(t,{props:[se(o,/:(plac\w+)/,":"+ae+"input-$1")]}),Di(t,{props:[se(o,/:(plac\w+)/,":"+ls+"$1")]}),Di(t,{props:[se(o,/:(plac\w+)/,Ze+"input-$1")]})],i)}return""})}},jb=[Pb],Rb=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var x=m.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=t.stylisPlugins||jb,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var x=m.getAttribute("data-emotion").split(" "),h=1;h<x.length;h++)o[x[h]]=!0;s.push(m)});var l,u=[Tb,Cb];{var f,c=[Sb,kb(function(m){f.insert(m)})],d=Eb(u.concat(i,c)),v=function(x){return ii(wb(x),d)};l=function(x,h,p,y){f=p,v(x?x+"{"+h.styles+"}":h.styles),y&&(g.inserted[h.name]=!0)}}var g={key:n,sheet:new ab({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(s),g};function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xo.apply(this,arguments)}var u0={exports:{}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,Uf=Be?Symbol.for("react.element"):60103,Bf=Be?Symbol.for("react.portal"):60106,Js=Be?Symbol.for("react.fragment"):60107,Zs=Be?Symbol.for("react.strict_mode"):60108,el=Be?Symbol.for("react.profiler"):60114,tl=Be?Symbol.for("react.provider"):60109,nl=Be?Symbol.for("react.context"):60110,Vf=Be?Symbol.for("react.async_mode"):60111,rl=Be?Symbol.for("react.concurrent_mode"):60111,il=Be?Symbol.for("react.forward_ref"):60112,ol=Be?Symbol.for("react.suspense"):60113,Ab=Be?Symbol.for("react.suspense_list"):60120,al=Be?Symbol.for("react.memo"):60115,sl=Be?Symbol.for("react.lazy"):60116,Fb=Be?Symbol.for("react.block"):60121,Nb=Be?Symbol.for("react.fundamental"):60117,Ib=Be?Symbol.for("react.responder"):60118,Lb=Be?Symbol.for("react.scope"):60119;function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Uf:switch(e=e.type,e){case Vf:case rl:case Js:case el:case Zs:case ol:return e;default:switch(e=e&&e.$$typeof,e){case nl:case il:case sl:case al:case tl:return e;default:return t}}case Bf:return t}}}function c0(e){return wt(e)===rl}ce.AsyncMode=Vf;ce.ConcurrentMode=rl;ce.ContextConsumer=nl;ce.ContextProvider=tl;ce.Element=Uf;ce.ForwardRef=il;ce.Fragment=Js;ce.Lazy=sl;ce.Memo=al;ce.Portal=Bf;ce.Profiler=el;ce.StrictMode=Zs;ce.Suspense=ol;ce.isAsyncMode=function(e){return c0(e)||wt(e)===Vf};ce.isConcurrentMode=c0;ce.isContextConsumer=function(e){return wt(e)===nl};ce.isContextProvider=function(e){return wt(e)===tl};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uf};ce.isForwardRef=function(e){return wt(e)===il};ce.isFragment=function(e){return wt(e)===Js};ce.isLazy=function(e){return wt(e)===sl};ce.isMemo=function(e){return wt(e)===al};ce.isPortal=function(e){return wt(e)===Bf};ce.isProfiler=function(e){return wt(e)===el};ce.isStrictMode=function(e){return wt(e)===Zs};ce.isSuspense=function(e){return wt(e)===ol};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Js||e===rl||e===el||e===Zs||e===ol||e===Ab||typeof e=="object"&&e!==null&&(e.$$typeof===sl||e.$$typeof===al||e.$$typeof===tl||e.$$typeof===nl||e.$$typeof===il||e.$$typeof===Nb||e.$$typeof===Ib||e.$$typeof===Lb||e.$$typeof===Fb)};ce.typeOf=wt;u0.exports=ce;var Wf=u0.exports,Hf=Wf,zb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Db={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gf={};Gf[Hf.ForwardRef]=Mb;Gf[Hf.Memo]=f0;function Xp(e){return Hf.isMemo(e)?f0:Gf[e.$$typeof]||zb}var Ub=Object.defineProperty,Bb=Object.getOwnPropertyNames,Jp=Object.getOwnPropertySymbols,Vb=Object.getOwnPropertyDescriptor,Wb=Object.getPrototypeOf,Zp=Object.prototype;function d0(e,t,n){if(typeof t!="string"){if(Zp){var r=Wb(t);r&&r!==Zp&&d0(e,r,n)}var i=Bb(t);Jp&&(i=i.concat(Jp(t)));for(var o=Xp(e),a=Xp(t),s=0;s<i.length;++s){var l=i[s];if(!Db[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var u=Vb(t,l);try{Ub(e,l,u)}catch{}}}}return e}var Hb=d0;const Kf=$i(Hb);var Gb=function(e,t){return Kf(e,t)},Kb=!0;function qf(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var ll=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Kb===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},ul=function(t,n,r){ll(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function qb(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Yb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qb=/[A-Z]|^ms/g,Xb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,p0=function(t){return t.charCodeAt(1)===45},eh=function(t){return t!=null&&typeof t!="boolean"},ru=s0(function(e){return p0(e)?e:e.replace(Qb,"-$&").toLowerCase()}),th=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Xb,function(r,i,o){return qt={name:i,styles:o,next:qt},i})}return Yb[t]!==1&&!p0(t)&&typeof n=="number"&&n!==0?n+"px":n};function wo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return qt={name:n.name,styles:n.styles,next:qt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)qt={name:r.name,styles:r.styles,next:qt},r=r.next;var i=n.styles+";";return i}return Jb(e,t,n)}case"function":{if(e!==void 0){var o=qt,a=n(e);return qt=o,wo(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Jb(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=wo(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":eh(a)&&(r+=ru(o)+":"+th(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)eh(a[s])&&(r+=ru(o)+":"+th(o,a[s])+";");else{var l=wo(e,t,a);switch(o){case"animation":case"animationName":{r+=ru(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var nh=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qt,Jo=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";qt=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=wo(r,n,a)):o+=a[0];for(var s=1;s<t.length;s++)o+=wo(r,n,t[s]),i&&(o+=a[s]);nh.lastIndex=0;for(var l="",u;(u=nh.exec(o))!==null;)l+="-"+u[1];var f=qb(o)+l;return{name:f,styles:o,next:qt}},Zb=function(t){return t()},h0=nc["useInsertionEffect"]?nc["useInsertionEffect"]:!1,Yf=h0||Zb,rh=h0||w.useLayoutEffect,Qf={}.hasOwnProperty,Xf=w.createContext(typeof HTMLElement<"u"?Rb({key:"css"}):null),eS=Xf.Provider,tS=function(){return w.useContext(Xf)},Zo=function(t){return w.forwardRef(function(n,r){var i=w.useContext(Xf);return t(n,i,r)})},vn=w.createContext({}),nS=function(){return w.useContext(vn)},rS=function(t,n){if(typeof n=="function"){var r=n(t);return r}return xo({},t,n)},iS=Yp(function(e){return Yp(function(t){return rS(e,t)})}),m0=function(t){var n=w.useContext(vn);return t.theme!==n&&(n=iS(n)(t.theme)),w.createElement(vn.Provider,{value:n},t.children)};function oS(e){var t=e.displayName||e.name||"Component",n=function(o,a){var s=w.useContext(vn);return w.createElement(e,xo({theme:s,ref:a},o))},r=w.forwardRef(n);return r.displayName="WithTheme("+t+")",Gb(r,e)}var oc="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",aS=function(t,n){var r={};for(var i in n)Qf.call(n,i)&&(r[i]=n[i]);return r[oc]=t,r},sS=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ll(n,r,i),Yf(function(){return ul(n,r,i)}),null},lS=Zo(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[oc],o=[r],a="";typeof e.className=="string"?a=qf(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var s=Jo(o,void 0,w.useContext(vn));a+=t.key+"-"+s.name;var l={};for(var u in e)Qf.call(e,u)&&u!=="css"&&u!==oc&&(l[u]=e[u]);return l.ref=n,l.className=a,w.createElement(w.Fragment,null,w.createElement(sS,{cache:t,serialized:s,isStringTag:typeof i=="string"}),w.createElement(i,l))}),uS=lS,ih=function(t,n){var r=arguments;if(n==null||!Qf.call(n,"css"))return w.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=uS,o[1]=aS(t,n);for(var a=2;a<i;a++)o[a]=r[a];return w.createElement.apply(null,o)},g0=Zo(function(e,t){var n=e.styles,r=Jo([n],void 0,w.useContext(vn)),i=w.useRef();return rh(function(){var o=t.key+"-global",a=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",o),a.hydrate([l])),i.current=[a,s],function(){a.flush()}},[t]),rh(function(){var o=i.current,a=o[0],s=o[1];if(s){o[1]=!1;return}if(r.next!==void 0&&ul(t,r.next,!0),a.tags.length){var l=a.tags[a.tags.length-1].nextElementSibling;a.before=l,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function Jf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Jo(t)}var cS=function(){var t=Jf.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},fS=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var a=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))a=e(o);else{a="";for(var s in o)o[s]&&s&&(a&&(a+=" "),a+=s)}break}default:a=o}a&&(i&&(i+=" "),i+=a)}}return i};function dS(e,t,n){var r=[],i=qf(e,r,n);return r.length<2?n:i+t(r)}var pS=function(t){var n=t.cache,r=t.serializedArr;return Yf(function(){for(var i=0;i<r.length;i++)ul(n,r[i],!1)}),null},hS=Zo(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];var d=Jo(f,t.registered);return r.push(d),ll(t,d,!1),t.key+"-"+d.name},o=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];return dS(t.registered,i,fS(f))},a={css:i,cx:o,theme:w.useContext(vn)},s=e.children(a);return n=!0,w.createElement(w.Fragment,null,w.createElement(pS,{cache:t,serializedArr:r}),s)});const mS=Object.freeze(Object.defineProperty({__proto__:null,CacheProvider:eS,ClassNames:hS,Global:g0,ThemeContext:vn,ThemeProvider:m0,__unsafe_useEmotionCache:tS,createElement:ih,css:Jf,jsx:ih,keyframes:cS,useTheme:nS,withEmotionCache:Zo,withTheme:oS},Symbol.toStringTag,{value:"Module"}));var ac={},y0={exports:{}},bt={},v0={exports:{}},x0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,W){var H=F.length;F.push(W);e:for(;0<H;){var ie=H-1>>>1,R=F[ie];if(0<i(R,W))F[ie]=W,F[H]=R,H=ie;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var W=F[0],H=F.pop();if(H!==W){F[0]=H;e:for(var ie=0,R=F.length,z=R>>>1;ie<z;){var M=2*(ie+1)-1,V=F[M],O=M+1,Y=F[O];if(0>i(V,H))O<R&&0>i(Y,V)?(F[ie]=Y,F[O]=H,ie=O):(F[ie]=V,F[M]=H,ie=M);else if(O<R&&0>i(Y,H))F[ie]=Y,F[O]=H,ie=O;else break e}}return W}function i(F,W){var H=F.sortIndex-W.sortIndex;return H!==0?H:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,c=null,d=3,v=!1,g=!1,m=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=F)r(u),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(u)}}function S(F){if(m=!1,y(F),!g)if(n(l)!==null)g=!0,At(E);else{var W=n(u);W!==null&&Ve(S,W.startTime-F)}}function E(F,W){g=!1,m&&(m=!1,h(A),A=-1),v=!0;var H=d;try{for(y(W),c=n(l);c!==null&&(!(c.expirationTime>W)||F&&!G());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,d=c.priorityLevel;var R=ie(c.expirationTime<=W);W=e.unstable_now(),typeof R=="function"?c.callback=R:c===n(l)&&r(l),y(W)}else r(l);c=n(l)}if(c!==null)var z=!0;else{var M=n(u);M!==null&&Ve(S,M.startTime-W),z=!1}return z}finally{c=null,d=H,v=!1}}var T=!1,_=null,A=-1,B=5,D=-1;function G(){return!(e.unstable_now()-D<B)}function xe(){if(_!==null){var F=e.unstable_now();D=F;var W=!0;try{W=_(!0,F)}finally{W?Q():(T=!1,_=null)}}else T=!1}var Q;if(typeof p=="function")Q=function(){p(xe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Te=$e.port2;$e.port1.onmessage=xe,Q=function(){Te.postMessage(null)}}else Q=function(){x(xe,0)};function At(F){_=F,T||(T=!0,Q())}function Ve(F,W){A=x(function(){F(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,At(E))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(F){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var H=d;d=W;try{return F()}finally{d=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=d;d=F;try{return W()}finally{d=H}},e.unstable_scheduleCallback=function(F,W,H){var ie=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,F){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=H+R,F={id:f++,callback:W,priorityLevel:F,startTime:H,expirationTime:R,sortIndex:-1},H>ie?(F.sortIndex=H,t(u,F),n(l)===null&&F===n(u)&&(m?(h(A),A=-1):m=!0,Ve(S,H-ie))):(F.sortIndex=R,t(l,F),g||v||(g=!0,At(E))),F},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(F){var W=d;return function(){var H=d;d=W;try{return F.apply(this,arguments)}finally{d=H}}}})(x0);v0.exports=x0;var gS=v0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=w,vt=gS;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b0=new Set,bo={};function Cr(e,t){hi(e,t),hi(e+"Capture",t)}function hi(e,t){for(bo[e]=t,e=0;e<t.length;e++)b0.add(t[e])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=Object.prototype.hasOwnProperty,yS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oh={},ah={};function vS(e){return sc.call(ah,e)?!0:sc.call(oh,e)?!1:yS.test(e)?ah[e]=!0:(oh[e]=!0,!1)}function xS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wS(e,t,n,r){if(t===null||typeof t>"u"||xS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function at(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ye[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ye[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ye[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ye[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ye[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ye[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function ed(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zf,ed);Ye[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zf,ed);Ye[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zf,ed);Ye[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ye[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});function td(e,t,n,r){var i=Ye.hasOwnProperty(t)?Ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wS(t,n,i,r)&&(n=null),r||i===null?vS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kn=w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),E0=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),k0=Symbol.for("react.offscreen"),sh=Symbol.iterator;function Mi(e){return e===null||typeof e!="object"?null:(e=sh&&e[sh]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Object.assign,iu;function Xi(e){if(iu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);iu=t&&t[1]||""}return`
`+iu+e}var ou=!1;function au(e,t){if(!e||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xi(e):""}function bS(e){switch(e.tag){case 5:return Xi(e.type);case 16:return Xi("Lazy");case 13:return Xi("Suspense");case 19:return Xi("SuspenseList");case 0:case 2:case 15:return e=au(e.type,!1),e;case 11:return e=au(e.type.render,!1),e;case 1:return e=au(e.type,!0),e;default:return""}}function fc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case Wr:return"Portal";case lc:return"Profiler";case nd:return"StrictMode";case uc:return"Suspense";case cc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E0:return(e.displayName||"Context")+".Consumer";case S0:return(e._context.displayName||"Context")+".Provider";case rd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case id:return t=e.displayName||null,t!==null?t:fc(e.type)||"Memo";case jn:t=e._payload,e=e._init;try{return fc(e(t))}catch{}}return null}function SS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(t);case 8:return t===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ES(e){var t=_0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ha(e){e._valueTracker||(e._valueTracker=ES(e))}function O0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function us(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dc(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=er(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $0(e,t){t=t.checked,t!=null&&td(e,"checked",t,!1)}function pc(e,t){$0(e,t);var n=er(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hc(e,t.type,n):t.hasOwnProperty("defaultValue")&&hc(e,t.type,er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hc(e,t,n){(t!=="number"||us(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ji=Array.isArray;function oi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+er(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ch(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Ji(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:er(n)}}function T0(e,t){var n=er(t.value),r=er(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function C0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?C0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,P0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function So(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kS=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){kS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function j0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function R0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _S=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(e,t){if(t){if(_S[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function vc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function od(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wc=null,ai=null,si=null;function dh(e){if(e=na(e)){if(typeof wc!="function")throw Error(j(280));var t=e.stateNode;t&&(t=hl(t),wc(e.stateNode,e.type,t))}}function A0(e){ai?si?si.push(e):si=[e]:ai=e}function F0(){if(ai){var e=ai,t=si;if(si=ai=null,dh(e),t)for(e=0;e<t.length;e++)dh(t[e])}}function N0(e,t){return e(t)}function I0(){}var su=!1;function L0(e,t,n){if(su)return e(t,n);su=!0;try{return N0(e,t,n)}finally{su=!1,(ai!==null||si!==null)&&(I0(),F0())}}function Eo(e,t){var n=e.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var bc=!1;if(xn)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{bc=!1}function OS(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var io=!1,cs=null,fs=!1,Sc=null,$S={onError:function(e){io=!0,cs=e}};function TS(e,t,n,r,i,o,a,s,l){io=!1,cs=null,OS.apply($S,arguments)}function CS(e,t,n,r,i,o,a,s,l){if(TS.apply(this,arguments),io){if(io){var u=cs;io=!1,cs=null}else throw Error(j(198));fs||(fs=!0,Sc=u)}}function Pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function z0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ph(e){if(Pr(e)!==e)throw Error(j(188))}function PS(e){var t=e.alternate;if(!t){if(t=Pr(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ph(i),e;if(o===r)return ph(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function D0(e){return e=PS(e),e!==null?M0(e):null}function M0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=M0(e);if(t!==null)return t;e=e.sibling}return null}var U0=vt.unstable_scheduleCallback,hh=vt.unstable_cancelCallback,jS=vt.unstable_shouldYield,RS=vt.unstable_requestPaint,Pe=vt.unstable_now,AS=vt.unstable_getCurrentPriorityLevel,ad=vt.unstable_ImmediatePriority,B0=vt.unstable_UserBlockingPriority,ds=vt.unstable_NormalPriority,FS=vt.unstable_LowPriority,V0=vt.unstable_IdlePriority,cl=null,Jt=null;function NS(e){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(cl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:zS,IS=Math.log,LS=Math.LN2;function zS(e){return e>>>=0,e===0?32:31-(IS(e)/LS|0)|0}var ga=64,ya=4194304;function Zi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ps(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Zi(s):(o&=a,o!==0&&(r=Zi(o)))}else a=n&~i,a!==0?r=Zi(a):o!==0&&(r=Zi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ut(t),i=1<<n,r|=e[n],t&=~i;return r}function DS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ut(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=DS(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Ec(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function W0(){var e=ga;return ga<<=1,!(ga&4194240)&&(ga=64),e}function lu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ea(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=n}function US(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function H0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var G0,ld,K0,q0,Y0,kc=!1,va=[],Un=null,Bn=null,Vn=null,ko=new Map,_o=new Map,Fn=[],BS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mh(e,t){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(t.pointerId)}}function Bi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=na(t),t!==null&&ld(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function VS(e,t,n,r,i){switch(t){case"focusin":return Un=Bi(Un,e,t,n,r,i),!0;case"dragenter":return Bn=Bi(Bn,e,t,n,r,i),!0;case"mouseover":return Vn=Bi(Vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ko.set(o,Bi(ko.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_o.set(o,Bi(_o.get(o)||null,e,t,n,r,i)),!0}return!1}function Q0(e){var t=hr(e.target);if(t!==null){var n=Pr(t);if(n!==null){if(t=n.tag,t===13){if(t=z0(n),t!==null){e.blockedOn=t,Y0(e.priority,function(){K0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_c(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return t=na(n),t!==null&&ld(t),e.blockedOn=n,!1;t.shift()}return!0}function gh(e,t,n){Ua(e)&&n.delete(t)}function WS(){kc=!1,Un!==null&&Ua(Un)&&(Un=null),Bn!==null&&Ua(Bn)&&(Bn=null),Vn!==null&&Ua(Vn)&&(Vn=null),ko.forEach(gh),_o.forEach(gh)}function Vi(e,t){e.blockedOn===t&&(e.blockedOn=null,kc||(kc=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,WS)))}function Oo(e){function t(i){return Vi(i,e)}if(0<va.length){Vi(va[0],e);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Un!==null&&Vi(Un,e),Bn!==null&&Vi(Bn,e),Vn!==null&&Vi(Vn,e),ko.forEach(t),_o.forEach(t),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Q0(n),n.blockedOn===null&&Fn.shift()}var li=kn.ReactCurrentBatchConfig,hs=!0;function HS(e,t,n,r){var i=ue,o=li.transition;li.transition=null;try{ue=1,ud(e,t,n,r)}finally{ue=i,li.transition=o}}function GS(e,t,n,r){var i=ue,o=li.transition;li.transition=null;try{ue=4,ud(e,t,n,r)}finally{ue=i,li.transition=o}}function ud(e,t,n,r){if(hs){var i=_c(e,t,n,r);if(i===null)vu(e,t,r,ms,n),mh(e,r);else if(VS(i,e,t,n,r))r.stopPropagation();else if(mh(e,r),t&4&&-1<BS.indexOf(e)){for(;i!==null;){var o=na(i);if(o!==null&&G0(o),o=_c(e,t,n,r),o===null&&vu(e,t,r,ms,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else vu(e,t,r,null,n)}}var ms=null;function _c(e,t,n,r){if(ms=null,e=od(r),e=hr(e),e!==null)if(t=Pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=z0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ms=e,null}function X0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AS()){case ad:return 1;case B0:return 4;case ds:case FS:return 16;case V0:return 536870912;default:return 16}default:return 16}}var Ln=null,cd=null,Ba=null;function J0(){if(Ba)return Ba;var e,t=cd,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ba=i.slice(e,1<r?1-r:void 0)}function Va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xa(){return!0}function yh(){return!1}function St(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xa:yh,this.isPropagationStopped=yh,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),t}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fd=St(Pi),ta=Oe({},Pi,{view:0,detail:0}),KS=St(ta),uu,cu,Wi,fl=Oe({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(uu=e.screenX-Wi.screenX,cu=e.screenY-Wi.screenY):cu=uu=0,Wi=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),vh=St(fl),qS=Oe({},fl,{dataTransfer:0}),YS=St(qS),QS=Oe({},ta,{relatedTarget:0}),fu=St(QS),XS=Oe({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),JS=St(XS),ZS=Oe({},Pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),e2=St(ZS),t2=Oe({},Pi,{data:0}),xh=St(t2),n2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i2[e])?!!t[e]:!1}function dd(){return o2}var a2=Oe({},ta,{key:function(e){if(e.key){var t=n2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(e){return e.type==="keypress"?Va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),s2=St(a2),l2=Oe({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=St(l2),u2=Oe({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),c2=St(u2),f2=Oe({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),d2=St(f2),p2=Oe({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h2=St(p2),m2=[9,13,27,32],pd=xn&&"CompositionEvent"in window,oo=null;xn&&"documentMode"in document&&(oo=document.documentMode);var g2=xn&&"TextEvent"in window&&!oo,Z0=xn&&(!pd||oo&&8<oo&&11>=oo),bh=String.fromCharCode(32),Sh=!1;function ev(e,t){switch(e){case"keyup":return m2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function y2(e,t){switch(e){case"compositionend":return tv(t);case"keypress":return t.which!==32?null:(Sh=!0,bh);case"textInput":return e=t.data,e===bh&&Sh?null:e;default:return null}}function v2(e,t){if(Gr)return e==="compositionend"||!pd&&ev(e,t)?(e=J0(),Ba=cd=Ln=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Z0&&t.locale!=="ko"?null:t.data;default:return null}}var x2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!x2[e.type]:t==="textarea"}function nv(e,t,n,r){A0(r),t=gs(t,"onChange"),0<t.length&&(n=new fd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ao=null,$o=null;function w2(e){pv(e,0)}function dl(e){var t=Yr(e);if(O0(t))return e}function b2(e,t){if(e==="change")return t}var rv=!1;if(xn){var du;if(xn){var pu="oninput"in document;if(!pu){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),pu=typeof kh.oninput=="function"}du=pu}else du=!1;rv=du&&(!document.documentMode||9<document.documentMode)}function _h(){ao&&(ao.detachEvent("onpropertychange",iv),$o=ao=null)}function iv(e){if(e.propertyName==="value"&&dl($o)){var t=[];nv(t,$o,e,od(e)),L0(w2,t)}}function S2(e,t,n){e==="focusin"?(_h(),ao=t,$o=n,ao.attachEvent("onpropertychange",iv)):e==="focusout"&&_h()}function E2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl($o)}function k2(e,t){if(e==="click")return dl(t)}function _2(e,t){if(e==="input"||e==="change")return dl(t)}function O2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:O2;function To(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sc.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function Oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $h(e,t){var n=Oh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function ov(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ov(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function av(){for(var e=window,t=us();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=us(e.document)}return t}function hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $2(e){var t=av(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(r!==null&&hd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$h(n,o);var a=$h(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var T2=xn&&"documentMode"in document&&11>=document.documentMode,Kr=null,Oc=null,so=null,$c=!1;function Th(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$c||Kr==null||Kr!==us(r)||(r=Kr,"selectionStart"in r&&hd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),so&&To(so,r)||(so=r,r=gs(Oc,"onSelect"),0<r.length&&(t=new fd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qr={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},hu={},sv={};xn&&(sv=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function pl(e){if(hu[e])return hu[e];if(!qr[e])return e;var t=qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sv)return hu[e]=t[n];return e}var lv=pl("animationend"),uv=pl("animationiteration"),cv=pl("animationstart"),fv=pl("transitionend"),dv=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(e,t){dv.set(e,t),Cr(t,[e])}for(var mu=0;mu<Ch.length;mu++){var gu=Ch[mu],C2=gu.toLowerCase(),P2=gu[0].toUpperCase()+gu.slice(1);or(C2,"on"+P2)}or(lv,"onAnimationEnd");or(uv,"onAnimationIteration");or(cv,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(fv,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j2=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Ph(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,CS(r,t,void 0,e),e.currentTarget=null}function pv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Ph(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Ph(i,s,u),o=l}}}if(fs)throw e=Sc,fs=!1,Sc=null,e}function ge(e,t){var n=t[Rc];n===void 0&&(n=t[Rc]=new Set);var r=e+"__bubble";n.has(r)||(hv(t,e,2,!1),n.add(r))}function yu(e,t,n){var r=0;t&&(r|=4),hv(n,e,r,t)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Co(e){if(!e[ba]){e[ba]=!0,b0.forEach(function(n){n!=="selectionchange"&&(j2.has(n)||yu(n,!1,e),yu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ba]||(t[ba]=!0,yu("selectionchange",!1,t))}}function hv(e,t,n,r){switch(X0(t)){case 1:var i=HS;break;case 4:i=GS;break;default:i=ud}n=i.bind(null,t,n,e),i=void 0,!bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=hr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}L0(function(){var u=o,f=od(n),c=[];e:{var d=dv.get(e);if(d!==void 0){var v=fd,g=e;switch(e){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":v=s2;break;case"focusin":g="focus",v=fu;break;case"focusout":g="blur",v=fu;break;case"beforeblur":case"afterblur":v=fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=YS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=c2;break;case lv:case uv:case cv:v=JS;break;case fv:v=d2;break;case"scroll":v=KS;break;case"wheel":v=h2;break;case"copy":case"cut":case"paste":v=e2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=wh}var m=(t&4)!==0,x=!m&&e==="scroll",h=m?d!==null?d+"Capture":null:d;m=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=Eo(p,h),S!=null&&m.push(Po(p,S,y)))),x)break;p=p.return}0<m.length&&(d=new v(d,g,null,n,f),c.push({event:d,listeners:m}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&n!==xc&&(g=n.relatedTarget||n.fromElement)&&(hr(g)||g[wn]))break e;if((v||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?hr(g):null,g!==null&&(x=Pr(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(m=vh,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(m=wh,S="onPointerLeave",h="onPointerEnter",p="pointer"),x=v==null?d:Yr(v),y=g==null?d:Yr(g),d=new m(S,p+"leave",v,n,f),d.target=x,d.relatedTarget=y,S=null,hr(f)===u&&(m=new m(h,p+"enter",g,n,f),m.target=y,m.relatedTarget=x,S=m),x=S,v&&g)t:{for(m=v,h=g,p=0,y=m;y;y=Mr(y))p++;for(y=0,S=h;S;S=Mr(S))y++;for(;0<p-y;)m=Mr(m),p--;for(;0<y-p;)h=Mr(h),y--;for(;p--;){if(m===h||h!==null&&m===h.alternate)break t;m=Mr(m),h=Mr(h)}m=null}else m=null;v!==null&&jh(c,d,v,m,!1),g!==null&&x!==null&&jh(c,x,g,m,!0)}}e:{if(d=u?Yr(u):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var E=b2;else if(Eh(d))if(rv)E=_2;else{E=E2;var T=S2}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=k2);if(E&&(E=E(e,u))){nv(c,E,n,f);break e}T&&T(e,d,u),e==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&hc(d,"number",d.value)}switch(T=u?Yr(u):window,e){case"focusin":(Eh(T)||T.contentEditable==="true")&&(Kr=T,Oc=u,so=null);break;case"focusout":so=Oc=Kr=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Th(c,n,f);break;case"selectionchange":if(T2)break;case"keydown":case"keyup":Th(c,n,f)}var _;if(pd)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Gr?ev(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Z0&&n.locale!=="ko"&&(Gr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Gr&&(_=J0()):(Ln=f,cd="value"in Ln?Ln.value:Ln.textContent,Gr=!0)),T=gs(u,A),0<T.length&&(A=new xh(A,e,null,n,f),c.push({event:A,listeners:T}),_?A.data=_:(_=tv(n),_!==null&&(A.data=_)))),(_=g2?y2(e,n):v2(e,n))&&(u=gs(u,"onBeforeInput"),0<u.length&&(f=new xh("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=_))}pv(c,t)})}function Po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Eo(e,n),o!=null&&r.unshift(Po(e,o,i)),o=Eo(e,t),o!=null&&r.push(Po(e,o,i))),e=e.return}return r}function Mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jh(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Eo(n,o),l!=null&&a.unshift(Po(n,l,s))):i||(l=Eo(n,o),l!=null&&a.push(Po(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var R2=/\r\n?/g,A2=/\u0000|\uFFFD/g;function Rh(e){return(typeof e=="string"?e:""+e).replace(R2,`
`).replace(A2,"")}function Sa(e,t,n){if(t=Rh(t),Rh(e)!==t&&n)throw Error(j(425))}function ys(){}var Tc=null,Cc=null;function Pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,F2=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,N2=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(e){return Ah.resolve(null).then(e).catch(I2)}:jc;function I2(e){setTimeout(function(){throw e})}function xu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Oo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oo(t)}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ji=Math.random().toString(36).slice(2),Yt="__reactFiber$"+ji,jo="__reactProps$"+ji,wn="__reactContainer$"+ji,Rc="__reactEvents$"+ji,L2="__reactListeners$"+ji,z2="__reactHandles$"+ji;function hr(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fh(e);e!==null;){if(n=e[Yt])return n;e=Fh(e)}return t}e=n,n=e.parentNode}return null}function na(e){return e=e[Yt]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function hl(e){return e[jo]||null}var Ac=[],Qr=-1;function ar(e){return{current:e}}function ve(e){0>Qr||(e.current=Ac[Qr],Ac[Qr]=null,Qr--)}function he(e,t){Qr++,Ac[Qr]=e.current,e.current=t}var tr={},nt=ar(tr),ct=ar(!1),br=tr;function mi(e,t){var n=e.type.contextTypes;if(!n)return tr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ft(e){return e=e.childContextTypes,e!=null}function vs(){ve(ct),ve(nt)}function Nh(e,t,n){if(nt.current!==tr)throw Error(j(168));he(nt,t),he(ct,n)}function mv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,SS(e)||"Unknown",i));return Oe({},n,r)}function xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tr,br=nt.current,he(nt,e),he(ct,ct.current),!0}function Ih(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=mv(e,t,br),r.__reactInternalMemoizedMergedChildContext=e,ve(ct),ve(nt),he(nt,e)):ve(ct),he(ct,n)}var dn=null,ml=!1,wu=!1;function gv(e){dn===null?dn=[e]:dn.push(e)}function D2(e){ml=!0,gv(e)}function sr(){if(!wu&&dn!==null){wu=!0;var e=0,t=ue;try{var n=dn;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dn=null,ml=!1}catch(i){throw dn!==null&&(dn=dn.slice(e+1)),U0(ad,sr),i}finally{ue=t,wu=!1}}return null}var Xr=[],Jr=0,ws=null,bs=0,_t=[],Ot=0,Sr=null,pn=1,hn="";function cr(e,t){Xr[Jr++]=bs,Xr[Jr++]=ws,ws=e,bs=t}function yv(e,t,n){_t[Ot++]=pn,_t[Ot++]=hn,_t[Ot++]=Sr,Sr=e;var r=pn;e=hn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var o=32-Ut(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,pn=1<<32-Ut(t)+i|n<<i|r,hn=o+e}else pn=1<<o|n<<i|r,hn=e}function md(e){e.return!==null&&(cr(e,1),yv(e,1,0))}function gd(e){for(;e===ws;)ws=Xr[--Jr],Xr[Jr]=null,bs=Xr[--Jr],Xr[Jr]=null;for(;e===Sr;)Sr=_t[--Ot],_t[Ot]=null,hn=_t[--Ot],_t[Ot]=null,pn=_t[--Ot],_t[Ot]=null}var yt=null,mt=null,Se=!1,Dt=null;function vv(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,mt=Wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sr!==null?{id:pn,overflow:hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,mt=null,!0):!1;default:return!1}}function Fc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nc(e){if(Se){var t=mt;if(t){var n=t;if(!Lh(e,t)){if(Fc(e))throw Error(j(418));t=Wn(n.nextSibling);var r=yt;t&&Lh(e,t)?vv(r,n):(e.flags=e.flags&-4097|2,Se=!1,yt=e)}}else{if(Fc(e))throw Error(j(418));e.flags=e.flags&-4097|2,Se=!1,yt=e}}}function zh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function Ea(e){if(e!==yt)return!1;if(!Se)return zh(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pc(e.type,e.memoizedProps)),t&&(t=mt)){if(Fc(e))throw xv(),Error(j(418));for(;t;)vv(e,t),t=Wn(t.nextSibling)}if(zh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=Wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=yt?Wn(e.stateNode.nextSibling):null;return!0}function xv(){for(var e=mt;e;)e=Wn(e.nextSibling)}function gi(){mt=yt=null,Se=!1}function yd(e){Dt===null?Dt=[e]:Dt.push(e)}var M2=kn.ReactCurrentBatchConfig;function Lt(e,t){if(e&&e.defaultProps){t=Oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ss=ar(null),Es=null,Zr=null,vd=null;function xd(){vd=Zr=Es=null}function wd(e){var t=Ss.current;ve(Ss),e._currentValue=t}function Ic(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ui(e,t){Es=e,vd=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(vd!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(Es===null)throw Error(j(308));Zr=e,Es.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var mr=null;function bd(e){mr===null?mr=[e]:mr.push(e)}function wv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bd(t)):(n.next=i.next,i.next=n),t.interleaved=n,bn(e,r)}function bn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Sd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bn(e,n)}return i=r.interleaved,i===null?(t.next=t,bd(r)):(t.next=i.next,i.next=t),r.interleaved=t,bn(e,n)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sd(e,n)}}function Dh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ks(e,t,n,r){var i=e.updateQueue;Rn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;a=0,f=u=l=null,s=o;do{var d=s.lane,v=s.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,m=s;switch(d=t,v=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){c=g.call(v,c,d);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,d=typeof g=="function"?g.call(v,c,d):g,d==null)break e;c=Oe({},c,d);break e;case 2:Rn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else v={eventTime:v,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,l=c):f=f.next=v,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(f===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);kr|=a,e.lanes=a,e.memoizedState=c}}function Mh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Sv=new w0.Component().refs;function Lc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?Pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),i=Kn(e),o=gn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Hn(e,o,i),t!==null&&(Bt(t,e,i,r),Wa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),i=Kn(e),o=gn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Hn(e,o,i),t!==null&&(Bt(t,e,i,r),Wa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=Kn(e),i=gn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Hn(e,i,r),t!==null&&(Bt(t,e,r,n),Wa(t,e,r))}};function Uh(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!To(n,r)||!To(i,o):!0}function Ev(e,t,n){var r=!1,i=tr,o=t.contextType;return typeof o=="object"&&o!==null?o=Pt(o):(i=ft(t)?br:nt.current,r=t.contextTypes,o=(r=r!=null)?mi(e,i):tr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function zc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Sv,Sd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Pt(o):(o=ft(t)?br:nt.current,i.context=mi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Lc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gl.enqueueReplaceState(i,i.state,null),ks(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Sv&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function ka(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vh(e){var t=e._init;return t(e._payload)}function kv(e){function t(h,p){if(e){var y=h.deletions;y===null?(h.deletions=[p],h.flags|=16):y.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=qn(h,p),h.index=0,h.sibling=null,h}function o(h,p,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<p?(h.flags|=2,p):y):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,y,S){return p===null||p.tag!==6?(p=$u(y,h.mode,S),p.return=h,p):(p=i(p,y),p.return=h,p)}function l(h,p,y,S){var E=y.type;return E===Hr?f(h,p,y.props.children,S,y.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jn&&Vh(E)===p.type)?(S=i(p,y.props),S.ref=Hi(h,p,y),S.return=h,S):(S=Qa(y.type,y.key,y.props,null,h.mode,S),S.ref=Hi(h,p,y),S.return=h,S)}function u(h,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Tu(y,h.mode,S),p.return=h,p):(p=i(p,y.children||[]),p.return=h,p)}function f(h,p,y,S,E){return p===null||p.tag!==7?(p=xr(y,h.mode,S,E),p.return=h,p):(p=i(p,y),p.return=h,p)}function c(h,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$u(""+p,h.mode,y),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pa:return y=Qa(p.type,p.key,p.props,null,h.mode,y),y.ref=Hi(h,null,p),y.return=h,y;case Wr:return p=Tu(p,h.mode,y),p.return=h,p;case jn:var S=p._init;return c(h,S(p._payload),y)}if(Ji(p)||Mi(p))return p=xr(p,h.mode,y,null),p.return=h,p;ka(h,p)}return null}function d(h,p,y,S){var E=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:s(h,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pa:return y.key===E?l(h,p,y,S):null;case Wr:return y.key===E?u(h,p,y,S):null;case jn:return E=y._init,d(h,p,E(y._payload),S)}if(Ji(y)||Mi(y))return E!==null?null:f(h,p,y,S,null);ka(h,y)}return null}function v(h,p,y,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,s(p,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pa:return h=h.get(S.key===null?y:S.key)||null,l(p,h,S,E);case Wr:return h=h.get(S.key===null?y:S.key)||null,u(p,h,S,E);case jn:var T=S._init;return v(h,p,y,T(S._payload),E)}if(Ji(S)||Mi(S))return h=h.get(y)||null,f(p,h,S,E,null);ka(p,S)}return null}function g(h,p,y,S){for(var E=null,T=null,_=p,A=p=0,B=null;_!==null&&A<y.length;A++){_.index>A?(B=_,_=null):B=_.sibling;var D=d(h,_,y[A],S);if(D===null){_===null&&(_=B);break}e&&_&&D.alternate===null&&t(h,_),p=o(D,p,A),T===null?E=D:T.sibling=D,T=D,_=B}if(A===y.length)return n(h,_),Se&&cr(h,A),E;if(_===null){for(;A<y.length;A++)_=c(h,y[A],S),_!==null&&(p=o(_,p,A),T===null?E=_:T.sibling=_,T=_);return Se&&cr(h,A),E}for(_=r(h,_);A<y.length;A++)B=v(_,h,A,y[A],S),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?A:B.key),p=o(B,p,A),T===null?E=B:T.sibling=B,T=B);return e&&_.forEach(function(G){return t(h,G)}),Se&&cr(h,A),E}function m(h,p,y,S){var E=Mi(y);if(typeof E!="function")throw Error(j(150));if(y=E.call(y),y==null)throw Error(j(151));for(var T=E=null,_=p,A=p=0,B=null,D=y.next();_!==null&&!D.done;A++,D=y.next()){_.index>A?(B=_,_=null):B=_.sibling;var G=d(h,_,D.value,S);if(G===null){_===null&&(_=B);break}e&&_&&G.alternate===null&&t(h,_),p=o(G,p,A),T===null?E=G:T.sibling=G,T=G,_=B}if(D.done)return n(h,_),Se&&cr(h,A),E;if(_===null){for(;!D.done;A++,D=y.next())D=c(h,D.value,S),D!==null&&(p=o(D,p,A),T===null?E=D:T.sibling=D,T=D);return Se&&cr(h,A),E}for(_=r(h,_);!D.done;A++,D=y.next())D=v(_,h,A,D.value,S),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?A:D.key),p=o(D,p,A),T===null?E=D:T.sibling=D,T=D);return e&&_.forEach(function(xe){return t(h,xe)}),Se&&cr(h,A),E}function x(h,p,y,S){if(typeof y=="object"&&y!==null&&y.type===Hr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pa:e:{for(var E=y.key,T=p;T!==null;){if(T.key===E){if(E=y.type,E===Hr){if(T.tag===7){n(h,T.sibling),p=i(T,y.props.children),p.return=h,h=p;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jn&&Vh(E)===T.type){n(h,T.sibling),p=i(T,y.props),p.ref=Hi(h,T,y),p.return=h,h=p;break e}n(h,T);break}else t(h,T);T=T.sibling}y.type===Hr?(p=xr(y.props.children,h.mode,S,y.key),p.return=h,h=p):(S=Qa(y.type,y.key,y.props,null,h.mode,S),S.ref=Hi(h,p,y),S.return=h,h=S)}return a(h);case Wr:e:{for(T=y.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(h,p.sibling),p=i(p,y.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Tu(y,h.mode,S),p.return=h,h=p}return a(h);case jn:return T=y._init,x(h,p,T(y._payload),S)}if(Ji(y))return g(h,p,y,S);if(Mi(y))return m(h,p,y,S);ka(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,y),p.return=h,h=p):(n(h,p),p=$u(y,h.mode,S),p.return=h,h=p),a(h)):n(h,p)}return x}var yi=kv(!0),_v=kv(!1),ra={},Zt=ar(ra),Ro=ar(ra),Ao=ar(ra);function gr(e){if(e===ra)throw Error(j(174));return e}function Ed(e,t){switch(he(Ao,t),he(Ro,e),he(Zt,ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gc(t,e)}ve(Zt),he(Zt,t)}function vi(){ve(Zt),ve(Ro),ve(Ao)}function Ov(e){gr(Ao.current);var t=gr(Zt.current),n=gc(t,e.type);t!==n&&(he(Ro,e),he(Zt,n))}function kd(e){Ro.current===e&&(ve(Zt),ve(Ro))}var Ee=ar(0);function _s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bu=[];function _d(){for(var e=0;e<bu.length;e++)bu[e]._workInProgressVersionPrimary=null;bu.length=0}var Ha=kn.ReactCurrentDispatcher,Su=kn.ReactCurrentBatchConfig,Er=0,ke=null,Le=null,Me=null,Os=!1,lo=!1,Fo=0,U2=0;function Xe(){throw Error(j(321))}function Od(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function $d(e,t,n,r,i,o){if(Er=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ha.current=e===null||e.memoizedState===null?H2:G2,e=n(r,i),lo){o=0;do{if(lo=!1,Fo=0,25<=o)throw Error(j(301));o+=1,Me=Le=null,t.updateQueue=null,Ha.current=K2,e=n(r,i)}while(lo)}if(Ha.current=$s,t=Le!==null&&Le.next!==null,Er=0,Me=Le=ke=null,Os=!1,t)throw Error(j(300));return e}function Td(){var e=Fo!==0;return Fo=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ke.memoizedState=Me=e:Me=Me.next=e,Me}function jt(){if(Le===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Me===null?ke.memoizedState:Me.next;if(t!==null)Me=t,Le=e;else{if(e===null)throw Error(j(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Me===null?ke.memoizedState=Me=e:Me=Me.next=e}return Me}function No(e,t){return typeof t=="function"?t(e):t}function Eu(e){var t=jt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var f=u.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=r):l=l.next=c,ke.lanes|=f,kr|=f}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Vt(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,kr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ku(e){var t=jt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Vt(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function $v(){}function Tv(e,t){var n=ke,r=jt(),i=t(),o=!Vt(r.memoizedState,i);if(o&&(r.memoizedState=i,ut=!0),r=r.queue,Cd(jv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Io(9,Pv.bind(null,n,r,i,t),void 0,null),Ue===null)throw Error(j(349));Er&30||Cv(n,t,i)}return i}function Cv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pv(e,t,n,r){t.value=n,t.getSnapshot=r,Rv(t)&&Av(e)}function jv(e,t,n){return n(function(){Rv(t)&&Av(e)})}function Rv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function Av(e){var t=bn(e,1);t!==null&&Bt(t,e,1,-1)}function Wh(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=W2.bind(null,ke,e),[t.memoizedState,e]}function Io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fv(){return jt().memoizedState}function Ga(e,t,n,r){var i=Ht();ke.flags|=e,i.memoizedState=Io(1|t,n,void 0,r===void 0?null:r)}function yl(e,t,n,r){var i=jt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&Od(r,a.deps)){i.memoizedState=Io(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Io(1|t,n,o,r)}function Hh(e,t){return Ga(8390656,8,e,t)}function Cd(e,t){return yl(2048,8,e,t)}function Nv(e,t){return yl(4,2,e,t)}function Iv(e,t){return yl(4,4,e,t)}function Lv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zv(e,t,n){return n=n!=null?n.concat([e]):null,yl(4,4,Lv.bind(null,t,e),n)}function Pd(){}function Dv(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Od(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mv(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Od(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uv(e,t,n){return Er&21?(Vt(n,t)||(n=W0(),ke.lanes|=n,kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function B2(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Su.transition;Su.transition={};try{e(!1),t()}finally{ue=n,Su.transition=r}}function Bv(){return jt().memoizedState}function V2(e,t,n){var r=Kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vv(e))Wv(t,n);else if(n=wv(e,t,n,r),n!==null){var i=it();Bt(n,e,r,i),Hv(n,t,r)}}function W2(e,t,n){var r=Kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vv(e))Wv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Vt(s,a)){var l=t.interleaved;l===null?(i.next=i,bd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=wv(e,t,i,r),n!==null&&(i=it(),Bt(n,e,r,i),Hv(n,t,r))}}function Vv(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Wv(e,t){lo=Os=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sd(e,n)}}var $s={readContext:Pt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},H2={readContext:Pt,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Hh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ga(4194308,4,Lv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ga(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ga(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=V2.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:Wh,useDebugValue:Pd,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=Wh(!1),t=e[0];return e=B2.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Ht();if(Se){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Ue===null)throw Error(j(349));Er&30||Cv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Hh(jv.bind(null,r,o,e),[e]),r.flags|=2048,Io(9,Pv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ht(),t=Ue.identifierPrefix;if(Se){var n=hn,r=pn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=U2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G2={readContext:Pt,useCallback:Dv,useContext:Pt,useEffect:Cd,useImperativeHandle:zv,useInsertionEffect:Nv,useLayoutEffect:Iv,useMemo:Mv,useReducer:Eu,useRef:Fv,useState:function(){return Eu(No)},useDebugValue:Pd,useDeferredValue:function(e){var t=jt();return Uv(t,Le.memoizedState,e)},useTransition:function(){var e=Eu(No)[0],t=jt().memoizedState;return[e,t]},useMutableSource:$v,useSyncExternalStore:Tv,useId:Bv,unstable_isNewReconciler:!1},K2={readContext:Pt,useCallback:Dv,useContext:Pt,useEffect:Cd,useImperativeHandle:zv,useInsertionEffect:Nv,useLayoutEffect:Iv,useMemo:Mv,useReducer:ku,useRef:Fv,useState:function(){return ku(No)},useDebugValue:Pd,useDeferredValue:function(e){var t=jt();return Le===null?t.memoizedState=e:Uv(t,Le.memoizedState,e)},useTransition:function(){var e=ku(No)[0],t=jt().memoizedState;return[e,t]},useMutableSource:$v,useSyncExternalStore:Tv,useId:Bv,unstable_isNewReconciler:!1};function xi(e,t){try{var n="",r=t;do n+=bS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function _u(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var q2=typeof WeakMap=="function"?WeakMap:Map;function Gv(e,t,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cs||(Cs=!0,Yc=r),Dc(e,t)},n}function Kv(e,t,n){n=gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Dc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Dc(e,t),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Gh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new q2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=lE.bind(null,e,t,n),t.then(e,e))}function Kh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gn(-1,1),t.tag=2,Hn(n,t,1))),n.lanes|=1),e)}var Y2=kn.ReactCurrentOwner,ut=!1;function rt(e,t,n,r){t.child=e===null?_v(t,null,n,r):yi(t,e.child,n,r)}function Yh(e,t,n,r,i){n=n.render;var o=t.ref;return ui(t,i),r=$d(e,t,n,r,o,i),n=Td(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Sn(e,t,i)):(Se&&n&&md(t),t.flags|=1,rt(e,t,r,i),t.child)}function Qh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qv(e,t,o,r,i)):(e=Qa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(a,r)&&e.ref===t.ref)return Sn(e,t,i)}return t.flags|=1,e=qn(o,r),e.ref=t.ref,e.return=t,t.child=e}function qv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(To(o,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,Sn(e,t,i)}return Mc(e,t,n,r,i)}function Yv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ti,ht),ht|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(ti,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(ti,ht),ht|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(ti,ht),ht|=r;return rt(e,t,i,n),t.child}function Qv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mc(e,t,n,r,i){var o=ft(n)?br:nt.current;return o=mi(t,o),ui(t,i),n=$d(e,t,n,r,o,i),r=Td(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Sn(e,t,i)):(Se&&r&&md(t),t.flags|=1,rt(e,t,n,i),t.child)}function Xh(e,t,n,r,i){if(ft(n)){var o=!0;xs(t)}else o=!1;if(ui(t,i),t.stateNode===null)Ka(e,t),Ev(t,n,r),zc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=ft(n)?br:nt.current,u=mi(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Bh(t,a,r,u),Rn=!1;var d=t.memoizedState;a.state=d,ks(t,r,a,i),l=t.memoizedState,s!==r||d!==l||ct.current||Rn?(typeof f=="function"&&(Lc(t,n,f,r),l=t.memoizedState),(s=Rn||Uh(t,n,s,r,d,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bv(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Lt(t.type,s),a.props=u,c=t.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pt(l):(l=ft(n)?br:nt.current,l=mi(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||d!==l)&&Bh(t,a,r,l),Rn=!1,d=t.memoizedState,a.state=d,ks(t,r,a,i);var g=t.memoizedState;s!==c||d!==g||ct.current||Rn?(typeof v=="function"&&(Lc(t,n,v,r),g=t.memoizedState),(u=Rn||Uh(t,n,u,r,d,g,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Uc(e,t,n,r,o,i)}function Uc(e,t,n,r,i,o){Qv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ih(t,n,!1),Sn(e,t,o);r=t.stateNode,Y2.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yi(t,e.child,null,o),t.child=yi(t,null,s,o)):rt(e,t,s,o),t.memoizedState=r.state,i&&Ih(t,n,!0),t.child}function Xv(e){var t=e.stateNode;t.pendingContext?Nh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nh(e,t.context,!1),Ed(e,t.containerInfo)}function Jh(e,t,n,r,i){return gi(),yd(i),t.flags|=256,rt(e,t,n,r),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function Vc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jv(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(Ee,i&1),e===null)return Nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=wl(a,r,0,null),e=xr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vc(n),t.memoizedState=Bc,e):jd(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Q2(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=qn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=qn(s,o):(o=xr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Vc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Bc,r}return o=e.child,e=o.sibling,r=qn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jd(e,t){return t=wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _a(e,t,n,r){return r!==null&&yd(r),yi(t,e.child,null,n),e=jd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Q2(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=_u(Error(j(422))),_a(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=wl({mode:"visible",children:r.children},i,0,null),o=xr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yi(t,e.child,null,a),t.child.memoizedState=Vc(a),t.memoizedState=Bc,o);if(!(t.mode&1))return _a(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=_u(o,r,void 0),_a(e,t,a,r)}if(s=(a&e.childLanes)!==0,ut||s){if(r=Ue,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bn(e,i),Bt(r,e,i,-1))}return Ld(),r=_u(Error(j(421))),_a(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=uE.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,mt=Wn(i.nextSibling),yt=t,Se=!0,Dt=null,e!==null&&(_t[Ot++]=pn,_t[Ot++]=hn,_t[Ot++]=Sr,pn=e.id,hn=e.overflow,Sr=t),t=jd(t,r.children),t.flags|=4096,t)}function Zh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ic(e.return,t,n)}function Ou(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Zv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(rt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zh(e,n,t);else if(e.tag===19)Zh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_s(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ou(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_s(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ou(t,!0,n,null,o);break;case"together":Ou(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ka(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function X2(e,t,n){switch(t.tag){case 3:Xv(t),gi();break;case 5:Ov(t);break;case 1:ft(t.type)&&xs(t);break;case 4:Ed(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Ss,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?Jv(e,t,n):(he(Ee,Ee.current&1),e=Sn(e,t,n),e!==null?e.sibling:null);he(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Yv(e,t,n)}return Sn(e,t,n)}var e1,Wc,t1,n1;e1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wc=function(){};t1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gr(Zt.current);var o=null;switch(n){case"input":i=dc(e,i),r=dc(e,r),o=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),o=[];break;case"textarea":i=mc(e,i),r=mc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ys)}yc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};n1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gi(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function J2(e,t,n){var r=t.pendingProps;switch(gd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return ft(t.type)&&vs(),Je(t),null;case 3:return r=t.stateNode,vi(),ve(ct),ve(nt),_d(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ea(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(Jc(Dt),Dt=null))),Wc(e,t),Je(t),null;case 5:kd(t);var i=gr(Ao.current);if(n=t.type,e!==null&&t.stateNode!=null)t1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Je(t),null}if(e=gr(Zt.current),Ea(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Yt]=t,r[jo]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)ge(eo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":lh(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":ch(r,o),ge("invalid",r)}yc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Sa(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Sa(r.textContent,s,e),i=["children",""+s]):bo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":ha(r),uh(r,o,!0);break;case"textarea":ha(r),fh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ys)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=C0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Yt]=t,e[jo]=r,e1(e,t,!1,!1),t.stateNode=e;e:{switch(a=vc(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)ge(eo[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":lh(e,r),i=dc(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),ge("invalid",e);break;case"textarea":ch(e,r),i=mc(e,r),ge("invalid",e);break;default:i=r}yc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?R0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&P0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&So(e,l):typeof l=="number"&&So(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ge("scroll",e):l!=null&&td(e,o,l,a))}switch(n){case"input":ha(e),uh(e,r,!1);break;case"textarea":ha(e),fh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+er(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?oi(e,!!r.multiple,o,!1):r.defaultValue!=null&&oi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ys)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)n1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=gr(Ao.current),gr(Zt.current),Ea(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(o=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:Sa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return Je(t),null;case 13:if(ve(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&mt!==null&&t.mode&1&&!(t.flags&128))xv(),gi(),t.flags|=98560,o=!1;else if(o=Ea(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Yt]=t}else gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),o=!1}else Dt!==null&&(Jc(Dt),Dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?ze===0&&(ze=3):Ld())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return vi(),Wc(e,t),e===null&&Co(t.stateNode.containerInfo),Je(t),null;case 10:return wd(t.type._context),Je(t),null;case 17:return ft(t.type)&&vs(),Je(t),null;case 19:if(ve(Ee),o=t.memoizedState,o===null)return Je(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Gi(o,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_s(e),a!==null){for(t.flags|=128,Gi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pe()>wi&&(t.flags|=128,r=!0,Gi(o,!1),t.lanes=4194304)}else{if(!r)if(e=_s(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Se)return Je(t),null}else 2*Pe()-o.renderingStartTime>wi&&n!==1073741824&&(t.flags|=128,r=!0,Gi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pe(),t.sibling=null,n=Ee.current,he(Ee,r?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return Id(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ht&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Z2(e,t){switch(gd(t),t.tag){case 1:return ft(t.type)&&vs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vi(),ve(ct),ve(nt),_d(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kd(t),null;case 13:if(ve(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Ee),null;case 4:return vi(),null;case 10:return wd(t.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var Oa=!1,tt=!1,eE=typeof WeakSet=="function"?WeakSet:Set,U=null;function ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Hc(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var em=!1;function tE(e,t){if(Tc=hs,e=av(),hd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,f=0,c=e,d=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(s=a+i),c!==o||r!==0&&c.nodeType!==3||(l=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(v=c.firstChild)!==null;)d=c,c=v;for(;;){if(c===e)break t;if(d===n&&++u===i&&(s=a),d===o&&++f===r&&(l=a),(v=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cc={focusedElem:e,selectionRange:n},hs=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,x=g.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?m:Lt(t.type,m),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(S){Ce(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=em,em=!1,g}function uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Hc(t,n,o)}i=i.next}while(i!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function r1(e){var t=e.alternate;t!==null&&(e.alternate=null,r1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[jo],delete t[Rc],delete t[L2],delete t[z2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function i1(e){return e.tag===5||e.tag===3||e.tag===4}function tm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||i1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ys));else if(r!==4&&(e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}var We=null,zt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)o1(e,t,n),n=n.sibling}function o1(e,t,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:tt||ei(n,t);case 6:var r=We,i=zt;We=null,Tn(e,t,n),We=r,zt=i,We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?xu(e.parentNode,n):e.nodeType===1&&xu(e,n),Oo(e)):xu(We,n.stateNode));break;case 4:r=We,i=zt,We=n.stateNode.containerInfo,zt=!0,Tn(e,t,n),We=r,zt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Hc(n,t,a),i=i.next}while(i!==r)}Tn(e,t,n);break;case 1:if(!tt&&(ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ce(n,t,s)}Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Tn(e,t,n),tt=r):Tn(e,t,n);break;default:Tn(e,t,n)}}function nm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eE),t.forEach(function(r){var i=cE.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:We=s.stateNode,zt=!1;break e;case 3:We=s.stateNode.containerInfo,zt=!0;break e;case 4:We=s.stateNode.containerInfo,zt=!0;break e}s=s.return}if(We===null)throw Error(j(160));o1(o,a,i),We=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)a1(t,e),t=t.sibling}function a1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Wt(e),r&4){try{uo(3,e,e.return),vl(3,e)}catch(m){Ce(e,e.return,m)}try{uo(5,e,e.return)}catch(m){Ce(e,e.return,m)}}break;case 1:Ft(t,e),Wt(e),r&512&&n!==null&&ei(n,n.return);break;case 5:if(Ft(t,e),Wt(e),r&512&&n!==null&&ei(n,n.return),e.flags&32){var i=e.stateNode;try{So(i,"")}catch(m){Ce(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&$0(i,o),vc(s,a);var u=vc(s,o);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?R0(i,c):f==="dangerouslySetInnerHTML"?P0(i,c):f==="children"?So(i,c):td(i,f,c,u)}switch(s){case"input":pc(i,o);break;case"textarea":T0(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?oi(i,!!o.multiple,v,!1):d!==!!o.multiple&&(o.defaultValue!=null?oi(i,!!o.multiple,o.defaultValue,!0):oi(i,!!o.multiple,o.multiple?[]:"",!1))}i[jo]=o}catch(m){Ce(e,e.return,m)}}break;case 6:if(Ft(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Ce(e,e.return,m)}}break;case 3:if(Ft(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(m){Ce(e,e.return,m)}break;case 4:Ft(t,e),Wt(e);break;case 13:Ft(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fd=Pe())),r&4&&nm(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||f,Ft(t,e),tt=u):Ft(t,e),Wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(U=e,f=e.child;f!==null;){for(c=U=f;U!==null;){switch(d=U,v=d.child,d.tag){case 0:case 11:case 14:case 15:uo(4,d,d.return);break;case 1:ei(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Ce(r,n,m)}}break;case 5:ei(d,d.return);break;case 22:if(d.memoizedState!==null){im(c);continue}}v!==null?(v.return=d,U=v):im(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=j0("display",a))}catch(m){Ce(e,e.return,m)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){Ce(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ft(t,e),Wt(e),r&4&&nm(e);break;case 21:break;default:Ft(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(i1(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(So(i,""),r.flags&=-33);var o=tm(e);qc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=tm(e);Kc(e,s,a);break;default:throw Error(j(161))}}catch(l){Ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nE(e,t,n){U=e,s1(e)}function s1(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Oa;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||tt;s=Oa;var u=tt;if(Oa=a,(tt=l)&&!u)for(U=i;U!==null;)a=U,l=a.child,a.tag===22&&a.memoizedState!==null?om(i):l!==null?(l.return=a,U=l):om(i);for(;o!==null;)U=o,s1(o),o=o.sibling;U=i,Oa=s,tt=u}rm(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):rm(e)}}function rm(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Mh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Oo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}tt||t.flags&512&&Gc(t)}catch(d){Ce(t,t.return,d)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function im(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function om(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(l){Ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ce(t,i,l)}}var o=t.return;try{Gc(t)}catch(l){Ce(t,o,l)}break;case 5:var a=t.return;try{Gc(t)}catch(l){Ce(t,a,l)}}}catch(l){Ce(t,t.return,l)}if(t===e){U=null;break}var s=t.sibling;if(s!==null){s.return=t.return,U=s;break}U=t.return}}var rE=Math.ceil,Ts=kn.ReactCurrentDispatcher,Rd=kn.ReactCurrentOwner,Tt=kn.ReactCurrentBatchConfig,re=0,Ue=null,Ae=null,qe=0,ht=0,ti=ar(0),ze=0,Lo=null,kr=0,xl=0,Ad=0,co=null,st=null,Fd=0,wi=1/0,fn=null,Cs=!1,Yc=null,Gn=null,$a=!1,zn=null,Ps=0,fo=0,Qc=null,qa=-1,Ya=0;function it(){return re&6?Pe():qa!==-1?qa:qa=Pe()}function Kn(e){return e.mode&1?re&2&&qe!==0?qe&-qe:M2.transition!==null?(Ya===0&&(Ya=W0()),Ya):(e=ue,e!==0||(e=window.event,e=e===void 0?16:X0(e.type)),e):1}function Bt(e,t,n,r){if(50<fo)throw fo=0,Qc=null,Error(j(185));ea(e,n,r),(!(re&2)||e!==Ue)&&(e===Ue&&(!(re&2)&&(xl|=n),ze===4&&Nn(e,qe)),dt(e,r),n===1&&re===0&&!(t.mode&1)&&(wi=Pe()+500,ml&&sr()))}function dt(e,t){var n=e.callbackNode;MS(e,t);var r=ps(e,e===Ue?qe:0);if(r===0)n!==null&&hh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hh(n),t===1)e.tag===0?D2(am.bind(null,e)):gv(am.bind(null,e)),N2(function(){!(re&6)&&sr()}),n=null;else{switch(H0(r)){case 1:n=ad;break;case 4:n=B0;break;case 16:n=ds;break;case 536870912:n=V0;break;default:n=ds}n=m1(n,l1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function l1(e,t){if(qa=-1,Ya=0,re&6)throw Error(j(327));var n=e.callbackNode;if(ci()&&e.callbackNode!==n)return null;var r=ps(e,e===Ue?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=js(e,r);else{t=r;var i=re;re|=2;var o=c1();(Ue!==e||qe!==t)&&(fn=null,wi=Pe()+500,vr(e,t));do try{aE();break}catch(s){u1(e,s)}while(1);xd(),Ts.current=o,re=i,Ae!==null?t=0:(Ue=null,qe=0,t=ze)}if(t!==0){if(t===2&&(i=Ec(e),i!==0&&(r=i,t=Xc(e,i))),t===1)throw n=Lo,vr(e,0),Nn(e,r),dt(e,Pe()),n;if(t===6)Nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!iE(i)&&(t=js(e,r),t===2&&(o=Ec(e),o!==0&&(r=o,t=Xc(e,o))),t===1))throw n=Lo,vr(e,0),Nn(e,r),dt(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:fr(e,st,fn);break;case 3:if(Nn(e,r),(r&130023424)===r&&(t=Fd+500-Pe(),10<t)){if(ps(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jc(fr.bind(null,e,st,fn),t);break}fr(e,st,fn);break;case 4:if(Nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ut(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rE(r/1960))-r,10<r){e.timeoutHandle=jc(fr.bind(null,e,st,fn),r);break}fr(e,st,fn);break;case 5:fr(e,st,fn);break;default:throw Error(j(329))}}}return dt(e,Pe()),e.callbackNode===n?l1.bind(null,e):null}function Xc(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(vr(e,t).flags|=256),e=js(e,t),e!==2&&(t=st,st=n,t!==null&&Jc(t)),e}function Jc(e){st===null?st=e:st.push.apply(st,e)}function iE(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t){for(t&=~Ad,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ut(t),r=1<<n;e[n]=-1,t&=~r}}function am(e){if(re&6)throw Error(j(327));ci();var t=ps(e,0);if(!(t&1))return dt(e,Pe()),null;var n=js(e,t);if(e.tag!==0&&n===2){var r=Ec(e);r!==0&&(t=r,n=Xc(e,r))}if(n===1)throw n=Lo,vr(e,0),Nn(e,t),dt(e,Pe()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fr(e,st,fn),dt(e,Pe()),null}function Nd(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(wi=Pe()+500,ml&&sr())}}function _r(e){zn!==null&&zn.tag===0&&!(re&6)&&ci();var t=re;re|=1;var n=Tt.transition,r=ue;try{if(Tt.transition=null,ue=1,e)return e()}finally{ue=r,Tt.transition=n,re=t,!(re&6)&&sr()}}function Id(){ht=ti.current,ve(ti)}function vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,F2(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vs();break;case 3:vi(),ve(ct),ve(nt),_d();break;case 5:kd(r);break;case 4:vi();break;case 13:ve(Ee);break;case 19:ve(Ee);break;case 10:wd(r.type._context);break;case 22:case 23:Id()}n=n.return}if(Ue=e,Ae=e=qn(e.current,null),qe=ht=t,ze=0,Lo=null,Ad=xl=kr=0,st=co=null,mr!==null){for(t=0;t<mr.length;t++)if(n=mr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}mr=null}return e}function u1(e,t){do{var n=Ae;try{if(xd(),Ha.current=$s,Os){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Os=!1}if(Er=0,Me=Le=ke=null,lo=!1,Fo=0,Rd.current=null,n===null||n.return===null){ze=1,Lo=t,Ae=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=qe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Kh(a);if(v!==null){v.flags&=-257,qh(v,a,s,o,t),v.mode&1&&Gh(o,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}else{if(!(t&1)){Gh(o,u,t),Ld();break e}l=Error(j(426))}}else if(Se&&s.mode&1){var x=Kh(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),qh(x,a,s,o,t),yd(xi(l,s));break e}}o=l=xi(l,s),ze!==4&&(ze=2),co===null?co=[o]:co.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Gv(o,l,t);Dh(o,h);break e;case 1:s=l;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Gn===null||!Gn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Kv(o,s,t);Dh(o,S);break e}}o=o.return}while(o!==null)}d1(n)}catch(E){t=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function c1(){var e=Ts.current;return Ts.current=$s,e===null?$s:e}function Ld(){(ze===0||ze===3||ze===2)&&(ze=4),Ue===null||!(kr&268435455)&&!(xl&268435455)||Nn(Ue,qe)}function js(e,t){var n=re;re|=2;var r=c1();(Ue!==e||qe!==t)&&(fn=null,vr(e,t));do try{oE();break}catch(i){u1(e,i)}while(1);if(xd(),re=n,Ts.current=r,Ae!==null)throw Error(j(261));return Ue=null,qe=0,ze}function oE(){for(;Ae!==null;)f1(Ae)}function aE(){for(;Ae!==null&&!jS();)f1(Ae)}function f1(e){var t=h1(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?d1(e):Ae=t,Rd.current=null}function d1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Z2(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Ae=null;return}}else if(n=J2(n,t,ht),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);ze===0&&(ze=5)}function fr(e,t,n){var r=ue,i=Tt.transition;try{Tt.transition=null,ue=1,sE(e,t,n,r)}finally{Tt.transition=i,ue=r}return null}function sE(e,t,n,r){do ci();while(zn!==null);if(re&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(US(e,o),e===Ue&&(Ae=Ue=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$a||($a=!0,m1(ds,function(){return ci(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Tt.transition,Tt.transition=null;var a=ue;ue=1;var s=re;re|=4,Rd.current=null,tE(e,n),a1(n,e),$2(Cc),hs=!!Tc,Cc=Tc=null,e.current=n,nE(n),RS(),re=s,ue=a,Tt.transition=o}else e.current=n;if($a&&($a=!1,zn=e,Ps=i),o=e.pendingLanes,o===0&&(Gn=null),NS(n.stateNode),dt(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cs)throw Cs=!1,e=Yc,Yc=null,e;return Ps&1&&e.tag!==0&&ci(),o=e.pendingLanes,o&1?e===Qc?fo++:(fo=0,Qc=e):fo=0,sr(),null}function ci(){if(zn!==null){var e=H0(Ps),t=Tt.transition,n=ue;try{if(Tt.transition=null,ue=16>e?16:e,zn===null)var r=!1;else{if(e=zn,zn=null,Ps=0,re&6)throw Error(j(331));var i=re;for(re|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(U=u;U!==null;){var f=U;switch(f.tag){case 0:case 11:case 15:uo(8,f,o)}var c=f.child;if(c!==null)c.return=f,U=c;else for(;U!==null;){f=U;var d=f.sibling,v=f.return;if(r1(f),f===u){U=null;break}if(d!==null){d.return=v,U=d;break}U=v}}}var g=o.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var x=m.sibling;m.sibling=null,m=x}while(m!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:uo(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,U=h;break e}U=o.return}}var p=e.current;for(U=p;U!==null;){a=U;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,U=y;else e:for(a=p;U!==null;){if(s=U,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:vl(9,s)}}catch(E){Ce(s,s.return,E)}if(s===a){U=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,U=S;break e}U=s.return}}if(re=i,sr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(cl,e)}catch{}r=!0}return r}finally{ue=n,Tt.transition=t}}return!1}function sm(e,t,n){t=xi(n,t),t=Gv(e,t,1),e=Hn(e,t,1),t=it(),e!==null&&(ea(e,1,t),dt(e,t))}function Ce(e,t,n){if(e.tag===3)sm(e,e,n);else for(;t!==null;){if(t.tag===3){sm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=xi(n,e),e=Kv(t,e,1),t=Hn(t,e,1),e=it(),t!==null&&(ea(t,1,e),dt(t,e));break}}t=t.return}}function lE(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(qe&n)===n&&(ze===4||ze===3&&(qe&130023424)===qe&&500>Pe()-Fd?vr(e,0):Ad|=n),dt(e,t)}function p1(e,t){t===0&&(e.mode&1?(t=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):t=1);var n=it();e=bn(e,t),e!==null&&(ea(e,t,n),dt(e,n))}function uE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),p1(e,n)}function cE(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),p1(e,n)}var h1;h1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,X2(e,t,n);ut=!!(e.flags&131072)}else ut=!1,Se&&t.flags&1048576&&yv(t,bs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ka(e,t),e=t.pendingProps;var i=mi(t,nt.current);ui(t,n),i=$d(null,t,r,e,i,n);var o=Td();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(r)?(o=!0,xs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sd(t),i.updater=gl,t.stateNode=i,i._reactInternals=t,zc(t,r,e,n),t=Uc(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&md(t),rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ka(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=dE(r),e=Lt(r,e),i){case 0:t=Mc(null,t,r,e,n);break e;case 1:t=Xh(null,t,r,e,n);break e;case 11:t=Yh(null,t,r,e,n);break e;case 14:t=Qh(null,t,r,Lt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Mc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Xh(e,t,r,i,n);case 3:e:{if(Xv(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,bv(e,t),ks(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=xi(Error(j(423)),t),t=Jh(e,t,r,n,i);break e}else if(r!==i){i=xi(Error(j(424)),t),t=Jh(e,t,r,n,i);break e}else for(mt=Wn(t.stateNode.containerInfo.firstChild),yt=t,Se=!0,Dt=null,n=_v(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gi(),r===i){t=Sn(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return Ov(t),e===null&&Nc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Pc(r,i)?a=null:o!==null&&Pc(r,o)&&(t.flags|=32),Qv(e,t),rt(e,t,a,n),t.child;case 6:return e===null&&Nc(t),null;case 13:return Jv(e,t,n);case 4:return Ed(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yi(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Yh(e,t,r,i,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(Ss,r._currentValue),r._currentValue=a,o!==null)if(Vt(o.value,a)){if(o.children===i.children&&!ct.current){t=Sn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=gn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ic(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ic(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ui(t,n),i=Pt(i),r=r(i),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,i=Lt(r,t.pendingProps),i=Lt(r.type,i),Qh(e,t,r,i,n);case 15:return qv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Ka(e,t),t.tag=1,ft(r)?(e=!0,xs(t)):e=!1,ui(t,n),Ev(t,r,i),zc(t,r,i,n),Uc(null,t,r,!0,e,n);case 19:return Zv(e,t,n);case 22:return Yv(e,t,n)}throw Error(j(156,t.tag))};function m1(e,t){return U0(e,t)}function fE(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,r){return new fE(e,t,n,r)}function zd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dE(e){if(typeof e=="function")return zd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rd)return 11;if(e===id)return 14}return 2}function qn(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qa(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")zd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Hr:return xr(n.children,i,o,t);case nd:a=8,i|=8;break;case lc:return e=$t(12,n,t,i|2),e.elementType=lc,e.lanes=o,e;case uc:return e=$t(13,n,t,i),e.elementType=uc,e.lanes=o,e;case cc:return e=$t(19,n,t,i),e.elementType=cc,e.lanes=o,e;case k0:return wl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S0:a=10;break e;case E0:a=9;break e;case rd:a=11;break e;case id:a=14;break e;case jn:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=$t(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function xr(e,t,n,r){return e=$t(7,e,r,t),e.lanes=n,e}function wl(e,t,n,r){return e=$t(22,e,r,t),e.elementType=k0,e.lanes=n,e.stateNode={isHidden:!1},e}function $u(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function Tu(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pE(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dd(e,t,n,r,i,o,a,s,l){return e=new pE(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$t(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(o),e}function hE(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function g1(e){if(!e)return tr;e=e._reactInternals;e:{if(Pr(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ft(n))return mv(e,n,t)}return t}function y1(e,t,n,r,i,o,a,s,l){return e=Dd(n,r,!0,e,i,o,a,s,l),e.context=g1(null),n=e.current,r=it(),i=Kn(n),o=gn(r,i),o.callback=t??null,Hn(n,o,i),e.current.lanes=i,ea(e,i,r),dt(e,r),e}function bl(e,t,n,r){var i=t.current,o=it(),a=Kn(i);return n=g1(n),t.context===null?t.context=n:t.pendingContext=n,t=gn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Hn(i,t,a),e!==null&&(Bt(e,i,a,o),Wa(e,i,a)),a}function Rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Md(e,t){lm(e,t),(e=e.alternate)&&lm(e,t)}function mE(){return null}var v1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ud(e){this._internalRoot=e}Sl.prototype.render=Ud.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));bl(e,t,null,null)};Sl.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_r(function(){bl(null,e,null,null)}),t[wn]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=q0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Q0(e)}};function Bd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function um(){}function gE(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Rs(a);o.call(u)}}var a=y1(t,r,e,0,null,!1,!1,"",um);return e._reactRootContainer=a,e[wn]=a.current,Co(e.nodeType===8?e.parentNode:e),_r(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Rs(l);s.call(u)}}var l=Dd(e,0,!1,null,null,!1,!1,"",um);return e._reactRootContainer=l,e[wn]=l.current,Co(e.nodeType===8?e.parentNode:e),_r(function(){bl(t,l,n,r)}),l}function kl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Rs(a);s.call(l)}}bl(t,a,e,i)}else a=gE(n,t,e,i,r);return Rs(a)}G0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zi(t.pendingLanes);n!==0&&(sd(t,n|1),dt(t,Pe()),!(re&6)&&(wi=Pe()+500,sr()))}break;case 13:_r(function(){var r=bn(e,1);if(r!==null){var i=it();Bt(r,e,1,i)}}),Md(e,1)}};ld=function(e){if(e.tag===13){var t=bn(e,134217728);if(t!==null){var n=it();Bt(t,e,134217728,n)}Md(e,134217728)}};K0=function(e){if(e.tag===13){var t=Kn(e),n=bn(e,t);if(n!==null){var r=it();Bt(n,e,t,r)}Md(e,t)}};q0=function(){return ue};Y0=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};wc=function(e,t,n){switch(t){case"input":if(pc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hl(r);if(!i)throw Error(j(90));O0(r),pc(r,i)}}}break;case"textarea":T0(e,n);break;case"select":t=n.value,t!=null&&oi(e,!!n.multiple,t,!1)}};N0=Nd;I0=_r;var yE={usingClientEntryPoint:!1,Events:[na,Yr,hl,A0,F0,Nd]},Ki={findFiberByHostInstance:hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vE={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=D0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||mE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{cl=Ta.inject(vE),Jt=Ta}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yE;bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bd(t))throw Error(j(200));return hE(e,t,null,n)};bt.createRoot=function(e,t){if(!Bd(e))throw Error(j(299));var n=!1,r="",i=v1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dd(e,1,!1,null,null,n,!1,r,i),e[wn]=t.current,Co(e.nodeType===8?e.parentNode:e),new Ud(t)};bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=D0(t),e=e===null?null:e.stateNode,e};bt.flushSync=function(e){return _r(e)};bt.hydrate=function(e,t,n){if(!El(t))throw Error(j(200));return kl(null,e,t,!0,n)};bt.hydrateRoot=function(e,t,n){if(!Bd(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=v1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=y1(t,null,e,1,n??null,i,!1,o,a),e[wn]=t.current,Co(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Sl(t)};bt.render=function(e,t,n){if(!El(t))throw Error(j(200));return kl(null,e,t,!1,n)};bt.unmountComponentAtNode=function(e){if(!El(e))throw Error(j(40));return e._reactRootContainer?(_r(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};bt.unstable_batchedUpdates=Nd;bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!El(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return kl(e,t,n,!1,r)};bt.version="18.2.0-next-9e3b772b8-20220608";function x1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x1)}catch(e){console.error(e)}}x1(),y0.exports=bt;var Vd=y0.exports,cm=Vd;ac.createRoot=cm.createRoot,ac.hydrateRoot=cm.hydrateRoot;var w1={exports:{}},b1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=w;function xE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wE=typeof Object.is=="function"?Object.is:xE,bE=bi.useState,SE=bi.useEffect,EE=bi.useLayoutEffect,kE=bi.useDebugValue;function _E(e,t){var n=t(),r=bE({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return EE(function(){i.value=n,i.getSnapshot=t,Cu(i)&&o({inst:i})},[e,n,t]),SE(function(){return Cu(i)&&o({inst:i}),e(function(){Cu(i)&&o({inst:i})})},[e]),kE(n),n}function Cu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wE(e,n)}catch{return!0}}function OE(e,t){return t()}var $E=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?OE:_E;b1.useSyncExternalStore=bi.useSyncExternalStore!==void 0?bi.useSyncExternalStore:$E;w1.exports=b1;var TE=w1.exports,S1={exports:{}},E1={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=w,CE=TE;function PE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jE=typeof Object.is=="function"?Object.is:PE,RE=CE.useSyncExternalStore,AE=_l.useRef,FE=_l.useEffect,NE=_l.useMemo,IE=_l.useDebugValue;E1.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=AE(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=NE(function(){function l(v){if(!u){if(u=!0,f=v,v=r(v),i!==void 0&&a.hasValue){var g=a.value;if(i(g,v))return c=g}return c=v}if(g=c,jE(f,v))return g;var m=r(v);return i!==void 0&&i(g,m)?g:(f=v,c=m)}var u=!1,f,c,d=n===void 0?null:n;return[function(){return l(t())},d===null?void 0:function(){return l(d())}]},[t,n,r,i]);var s=RE(e,o[0],o[1]);return FE(function(){a.hasValue=!0,a.value=s},[s]),IE(s),s};S1.exports=E1;var LE=S1.exports;function zE(e){e()}let k1=zE;const DE=e=>k1=e,ME=()=>k1,fm=Symbol.for("react-redux-context"),dm=typeof globalThis<"u"?globalThis:{};function UE(){var e;if(!w.createContext)return{};const t=(e=dm[fm])!=null?e:dm[fm]=new Map;let n=t.get(w.createContext);return n||(n=w.createContext(null),t.set(w.createContext,n)),n}const nr=UE();function Wd(e=nr){return function(){return w.useContext(e)}}const _1=Wd(),BE=()=>{throw new Error("uSES not initialized!")};let O1=BE;const VE=e=>{O1=e},WE=(e,t)=>e===t;function HE(e=nr){const t=e===nr?_1:Wd(e);return function(r,i={}){const{equalityFn:o=WE,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:f,stabilityCheck:c,noopCheck:d}=t();w.useRef(!0);const v=w.useCallback({[r.name](m){return r(m)}}[r.name],[r,c,a]),g=O1(u.addNestedSub,l.getState,f||l.getState,v,o);return w.useDebugValue(g),g}}const jr=HE();var fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=Symbol.for("react.element"),Gd=Symbol.for("react.portal"),Ol=Symbol.for("react.fragment"),$l=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),Cl=Symbol.for("react.provider"),Pl=Symbol.for("react.context"),GE=Symbol.for("react.server_context"),jl=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Fl=Symbol.for("react.memo"),Nl=Symbol.for("react.lazy"),KE=Symbol.for("react.offscreen"),$1;$1=Symbol.for("react.module.reference");function Rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Hd:switch(e=e.type,e){case Ol:case Tl:case $l:case Rl:case Al:return e;default:switch(e=e&&e.$$typeof,e){case GE:case Pl:case jl:case Nl:case Fl:case Cl:return e;default:return t}}case Gd:return t}}}fe.ContextConsumer=Pl;fe.ContextProvider=Cl;fe.Element=Hd;fe.ForwardRef=jl;fe.Fragment=Ol;fe.Lazy=Nl;fe.Memo=Fl;fe.Portal=Gd;fe.Profiler=Tl;fe.StrictMode=$l;fe.Suspense=Rl;fe.SuspenseList=Al;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(e){return Rt(e)===Pl};fe.isContextProvider=function(e){return Rt(e)===Cl};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hd};fe.isForwardRef=function(e){return Rt(e)===jl};fe.isFragment=function(e){return Rt(e)===Ol};fe.isLazy=function(e){return Rt(e)===Nl};fe.isMemo=function(e){return Rt(e)===Fl};fe.isPortal=function(e){return Rt(e)===Gd};fe.isProfiler=function(e){return Rt(e)===Tl};fe.isStrictMode=function(e){return Rt(e)===$l};fe.isSuspense=function(e){return Rt(e)===Rl};fe.isSuspenseList=function(e){return Rt(e)===Al};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ol||e===Tl||e===$l||e===Rl||e===Al||e===KE||typeof e=="object"&&e!==null&&(e.$$typeof===Nl||e.$$typeof===Fl||e.$$typeof===Cl||e.$$typeof===Pl||e.$$typeof===jl||e.$$typeof===$1||e.getModuleId!==void 0)};fe.typeOf=Rt;function qE(){const e=ME();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const pm={notify(){},get:()=>[]};function YE(e,t){let n,r=pm,i=0,o=!1;function a(m){f();const x=r.subscribe(m);let h=!1;return()=>{h||(h=!0,x(),c())}}function s(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return o}function f(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=qE())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=pm)}function d(){o||(o=!0,f())}function v(){o&&(o=!1,c())}const g={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:v,getListeners:()=>r};return g}const QE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XE=QE?w.useLayoutEffect:w.useEffect;function JE({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const a=w.useMemo(()=>{const u=YE(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),s=w.useMemo(()=>e.getState(),[e]);XE(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,s]);const l=t||nr;return w.createElement(l.Provider,{value:a},n)}function T1(e=nr){const t=e===nr?_1:Wd(e);return function(){const{store:r}=t();return r}}const ZE=T1();function ek(e=nr){const t=e===nr?ZE:T1(e);return function(){return t().dispatch}}const Kd=ek();VE(LE.useSyncExternalStoreWithSelector);DE(Vd.unstable_batchedUpdates);function Xa(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xa=function(n){return typeof n}:Xa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xa(e)}function tk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nk(e,t,n){return t&&hm(e.prototype,t),n&&hm(e,n),e}function rk(e,t){return t&&(Xa(t)==="object"||typeof t=="function")?t:Ja(e)}function Zc(e){return Zc=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Zc(e)}function Ja(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ik(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ef(e,t)}function ef(e,t){return ef=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ef(e,t)}function Za(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C1=function(e){ik(t,e);function t(){var n,r;tk(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=rk(this,(n=Zc(t)).call.apply(n,[this].concat(o))),Za(Ja(r),"state",{bootstrapped:!1}),Za(Ja(r),"_unsubscribe",void 0),Za(Ja(r),"handlePersistorState",function(){var s=r.props.persistor,l=s.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return nk(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(w.PureComponent);Za(C1,"defaultProps",{children:null,loading:null});function Mt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function rr(e){return!!e&&!!e[we]}function En(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===pk}(e)||Array.isArray(e)||!!e[bm]||!!(!((t=e.constructor)===null||t===void 0)&&t[bm])||qd(e)||Yd(e))}function Or(e,t,n){n===void 0&&(n=!1),Ri(e)===0?(n?Object.keys:di)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Ri(e){var t=e[we];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:qd(e)?2:Yd(e)?3:0}function fi(e,t){return Ri(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ok(e,t){return Ri(e)===2?e.get(t):e[t]}function P1(e,t,n){var r=Ri(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function j1(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function qd(e){return fk&&e instanceof Map}function Yd(e){return dk&&e instanceof Set}function dr(e){return e.o||e.t}function Qd(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=A1(e);delete t[we];for(var n=di(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Xd(e,t){return t===void 0&&(t=!1),Jd(e)||rr(e)||!En(e)||(Ri(e)>1&&(e.set=e.add=e.clear=e.delete=ak),Object.freeze(e),t&&Or(e,function(n,r){return Xd(r,!0)},!0)),e}function ak(){Mt(2)}function Jd(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function en(e){var t=of[e];return t||Mt(18,e),t}function sk(e,t){of[e]||(of[e]=t)}function tf(){return zo}function Pu(e,t){t&&(en("Patches"),e.u=[],e.s=[],e.v=t)}function As(e){nf(e),e.p.forEach(lk),e.p=null}function nf(e){e===zo&&(zo=e.l)}function mm(e){return zo={p:[],l:zo,h:e,m:!0,_:0}}function lk(e){var t=e[we];t.i===0||t.i===1?t.j():t.g=!0}function ju(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||en("ES5").S(t,e,r),r?(n[we].P&&(As(t),Mt(4)),En(e)&&(e=Fs(t,e),t.l||Ns(t,e)),t.u&&en("Patches").M(n[we].t,e,t.u,t.s)):e=Fs(t,n,[]),As(t),t.u&&t.v(t.u,t.s),e!==R1?e:void 0}function Fs(e,t,n){if(Jd(t))return t;var r=t[we];if(!r)return Or(t,function(s,l){return gm(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Ns(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Qd(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),Or(o,function(s,l){return gm(e,r,i,s,l,n,a)}),Ns(e,i,!1),n&&e.u&&en("Patches").N(r,n,e.u,e.s)}return r.o}function gm(e,t,n,r,i,o,a){if(rr(i)){var s=Fs(e,i,o&&t&&t.i!==3&&!fi(t.R,r)?o.concat(r):void 0);if(P1(n,r,s),!rr(s))return;e.m=!1}else a&&n.add(i);if(En(i)&&!Jd(i)){if(!e.h.D&&e._<1)return;Fs(e,i),t&&t.A.l||Ns(e,i)}}function Ns(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Xd(t,n)}function Ru(e,t){var n=e[we];return(n?dr(n):e)[t]}function ym(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function In(e){e.P||(e.P=!0,e.l&&In(e.l))}function Au(e){e.o||(e.o=Qd(e.t))}function rf(e,t,n){var r=qd(t)?en("MapSet").F(t,n):Yd(t)?en("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),s={i:a?1:0,A:o?o.A:tf(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=s,u=Do;a&&(l=[s],u=to);var f=Proxy.revocable(l,u),c=f.revoke,d=f.proxy;return s.k=d,s.j=c,d}(t,n):en("ES5").J(t,n);return(n?n.A:tf()).p.push(r),r}function uk(e){return rr(e)||Mt(22,e),function t(n){if(!En(n))return n;var r,i=n[we],o=Ri(n);if(i){if(!i.P&&(i.i<4||!en("ES5").K(i)))return i.t;i.I=!0,r=vm(n,o),i.I=!1}else r=vm(n,o);return Or(r,function(a,s){i&&ok(i.t,a)===s||P1(r,a,t(s))}),o===3?new Set(r):r}(e)}function vm(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Qd(e)}function ck(){function e(o,a){var s=i[o];return s?s.enumerable=a:i[o]=s={configurable:!0,enumerable:a,get:function(){var l=this[we];return Do.get(l,o)},set:function(l){var u=this[we];Do.set(u,o,l)}},s}function t(o){for(var a=o.length-1;a>=0;a--){var s=o[a][we];if(!s.P)switch(s.i){case 5:r(s)&&In(s);break;case 4:n(s)&&In(s)}}}function n(o){for(var a=o.t,s=o.k,l=di(s),u=l.length-1;u>=0;u--){var f=l[u];if(f!==we){var c=a[f];if(c===void 0&&!fi(a,f))return!0;var d=s[f],v=d&&d[we];if(v?v.t!==c:!j1(d,c))return!0}}var g=!!a[we];return l.length!==di(a).length+(g?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var i={};sk("ES5",{J:function(o,a){var s=Array.isArray(o),l=function(f,c){if(f){for(var d=Array(c.length),v=0;v<c.length;v++)Object.defineProperty(d,""+v,e(v,!0));return d}var g=A1(c);delete g[we];for(var m=di(g),x=0;x<m.length;x++){var h=m[x];g[h]=e(h,f||!!g[h].enumerable)}return Object.create(Object.getPrototypeOf(c),g)}(s,o),u={i:s?5:4,A:a?a.A:tf(),P:!1,I:!1,R:{},l:a,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,we,{value:u,writable:!0}),l},S:function(o,a,s){s?rr(a)&&a[we].A===o&&t(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var f=u[we];if(f){var c=f.t,d=f.k,v=f.R,g=f.i;if(g===4)Or(d,function(y){y!==we&&(c[y]!==void 0||fi(c,y)?v[y]||l(d[y]):(v[y]=!0,In(f)))}),Or(c,function(y){d[y]!==void 0||fi(d,y)||(v[y]=!1,In(f))});else if(g===5){if(r(f)&&(In(f),v.length=!0),d.length<c.length)for(var m=d.length;m<c.length;m++)v[m]=!1;else for(var x=c.length;x<d.length;x++)v[x]=!0;for(var h=Math.min(d.length,c.length),p=0;p<h;p++)d.hasOwnProperty(p)||(v[p]=!0),v[p]===void 0&&l(d[p])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var xm,zo,Zd=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",fk=typeof Map<"u",dk=typeof Set<"u",wm=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",R1=Zd?Symbol.for("immer-nothing"):((xm={})["immer-nothing"]=!0,xm),bm=Zd?Symbol.for("immer-draftable"):"__$immer_draftable",we=Zd?Symbol.for("immer-state"):"__$immer_state",pk=""+Object.prototype.constructor,di=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,A1=Object.getOwnPropertyDescriptors||function(e){var t={};return di(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},of={},Do={get:function(e,t){if(t===we)return e;var n=dr(e);if(!fi(n,t))return function(i,o,a){var s,l=ym(o,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!En(r)?r:r===Ru(e.t,t)?(Au(e),e.o[t]=rf(e.A.h,r,e)):r},has:function(e,t){return t in dr(e)},ownKeys:function(e){return Reflect.ownKeys(dr(e))},set:function(e,t,n){var r=ym(dr(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Ru(dr(e),t),o=i==null?void 0:i[we];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(j1(n,i)&&(n!==void 0||fi(e.t,t)))return!0;Au(e),In(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Ru(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Au(e),In(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=dr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Mt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Mt(12)}},to={};Or(Do,function(e,t){to[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),to.deleteProperty=function(e,t){return to.set.call(this,e,t,void 0)},to.set=function(e,t,n){return Do.set.call(this,e[0],t,n,e[0])};var hk=function(){function e(n){var r=this;this.O=wm,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var s=o;o=i;var l=r;return function(m){var x=this;m===void 0&&(m=s);for(var h=arguments.length,p=Array(h>1?h-1:0),y=1;y<h;y++)p[y-1]=arguments[y];return l.produce(m,function(S){var E;return(E=o).call.apply(E,[x,S].concat(p))})}}var u;if(typeof o!="function"&&Mt(6),a!==void 0&&typeof a!="function"&&Mt(7),En(i)){var f=mm(r),c=rf(r,i,void 0),d=!0;try{u=o(c),d=!1}finally{d?As(f):nf(f)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return Pu(f,a),ju(m,f)},function(m){throw As(f),m}):(Pu(f,a),ju(u,f))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===R1&&(u=void 0),r.D&&Xd(u,!0),a){var v=[],g=[];en("Patches").M(i,u,v,g),a(v,g)}return u}Mt(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var f=arguments.length,c=Array(f>1?f-1:0),d=1;d<f;d++)c[d-1]=arguments[d];return r.produceWithPatches(u,function(v){return i.apply(void 0,[v].concat(c))})};var a,s,l=r.produce(i,o,function(u,f){a=u,s=f});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){En(n)||Mt(8),rr(n)&&(n=uk(n));var r=mm(this),i=rf(this,n,void 0);return i[we].C=!0,nf(r),i},t.finishDraft=function(n,r){var i=n&&n[we],o=i.A;return Pu(o,r),ju(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!wm&&Mt(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=en("Patches").$;return rr(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),xt=new hk,F1=xt.produce;xt.produceWithPatches.bind(xt);xt.setAutoFreeze.bind(xt);xt.setUseProxies.bind(xt);xt.applyPatches.bind(xt);xt.createDraft.bind(xt);xt.finishDraft.bind(xt);function Mo(e){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mo(e)}function mk(e,t){if(Mo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Mo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function gk(e){var t=mk(e,"string");return Mo(t)=="symbol"?t:String(t)}function yk(e,t,n){return t=gk(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Em(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sm(Object(n),!0).forEach(function(r){yk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function et(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var km=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Fu=function(){return Math.random().toString(36).substring(7).split("").join(".")},Is={INIT:"@@redux/INIT"+Fu(),REPLACE:"@@redux/REPLACE"+Fu(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Fu()}};function vk(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ep(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(et(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(et(1));return n(ep)(e,t)}if(typeof e!="function")throw new Error(et(2));var i=e,o=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function f(){if(l)throw new Error(et(3));return o}function c(m){if(typeof m!="function")throw new Error(et(4));if(l)throw new Error(et(5));var x=!0;return u(),s.push(m),function(){if(x){if(l)throw new Error(et(6));x=!1,u();var p=s.indexOf(m);s.splice(p,1),a=null}}}function d(m){if(!vk(m))throw new Error(et(7));if(typeof m.type>"u")throw new Error(et(8));if(l)throw new Error(et(9));try{l=!0,o=i(o,m)}finally{l=!1}for(var x=a=s,h=0;h<x.length;h++){var p=x[h];p()}return m}function v(m){if(typeof m!="function")throw new Error(et(10));i=m,d({type:Is.REPLACE})}function g(){var m,x=c;return m={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(et(11));function y(){p.next&&p.next(f())}y();var S=x(y);return{unsubscribe:S}}},m[km]=function(){return this},m}return d({type:Is.INIT}),r={dispatch:d,subscribe:c,getState:f,replaceReducer:v},r[km]=g,r}function xk(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Is.INIT});if(typeof r>"u")throw new Error(et(12));if(typeof n(void 0,{type:Is.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(et(13))})}function wk(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{xk(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var f=!1,c={},d=0;d<o.length;d++){var v=o[d],g=n[v],m=l[v],x=g(m,u);if(typeof x>"u")throw u&&u.type,new Error(et(14));c[v]=x,f=f||x!==m}return f=f||o.length!==Object.keys(l).length,f?c:l}}function Ls(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function bk(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(et(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return o=Ls.apply(void 0,s)(i.dispatch),Em(Em({},i),{},{dispatch:o})}}}function N1(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(s){return typeof s=="function"?s(i,o,e):a(s)}}};return t}var I1=N1();I1.withExtraArgument=N1;const _m=I1;var L1=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Sk=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(f){return l([u,f])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Si=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},Ek=Object.defineProperty,kk=Object.defineProperties,_k=Object.getOwnPropertyDescriptors,Om=Object.getOwnPropertySymbols,Ok=Object.prototype.hasOwnProperty,$k=Object.prototype.propertyIsEnumerable,$m=function(e,t,n){return t in e?Ek(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Yn=function(e,t){for(var n in t||(t={}))Ok.call(t,n)&&$m(e,n,t[n]);if(Om)for(var r=0,i=Om(t);r<i.length;r++){var n=i[r];$k.call(t,n)&&$m(e,n,t[n])}return e},Nu=function(e,t){return kk(e,_k(t))},Tk=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{s(n.next(l))}catch(u){i(u)}},a=function(l){try{s(n.throw(l))}catch(u){i(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,a)};s((n=n.apply(e,t)).next())})},Ck=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ls:Ls.apply(null,arguments)};function Pk(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Qn(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Yn(Yn({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var jk=function(e){L1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Si([void 0],n[0].concat(this)))):new(t.bind.apply(t,Si([void 0],n.concat(this))))},t}(Array),Rk=function(e){L1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Si([void 0],n[0].concat(this)))):new(t.bind.apply(t,Si([void 0],n.concat(this))))},t}(Array);function af(e){return En(e)?F1(e,function(){}):e}function Ak(e){return typeof e=="boolean"}function Fk(){return function(t){return Nk(t)}}function Nk(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new jk;return n&&(Ak(n)?r.push(_m):r.push(_m.withExtraArgument(n.extraArgument))),r}var Ik=!0;function Lk(e){var t=Fk(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,f=u===void 0?void 0:u,c=n.enhancers,d=c===void 0?void 0:c,v;if(typeof i=="function")v=i;else if(Pk(i))v=wk(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=a;typeof g=="function"&&(g=g(t));var m=bk.apply(void 0,g),x=Ls;l&&(x=Ck(Yn({trace:!Ik},typeof l=="object"&&l)));var h=new Rk(m),p=h;Array.isArray(d)?p=Si([m],d):typeof d=="function"&&(p=d(h));var y=x.apply(void 0,p);return ep(v,f,y)}function z1(e){var t={},n=[],r,i={addCase:function(o,a){var s=typeof o=="string"?o:o.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function zk(e){return typeof e=="function"}function Dk(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?z1(t):[t,n,r],o=i[0],a=i[1],s=i[2],l;if(zk(e))l=function(){return af(e())};else{var u=af(e);l=function(){return u}}function f(c,d){c===void 0&&(c=l());var v=Si([o[d.type]],a.filter(function(g){var m=g.matcher;return m(d)}).map(function(g){var m=g.reducer;return m}));return v.filter(function(g){return!!g}).length===0&&(v=[s]),v.reduce(function(g,m){if(m)if(rr(g)){var x=g,h=m(x,d);return h===void 0?g:h}else{if(En(g))return F1(g,function(p){return m(p,d)});var h=m(g,d);if(h===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return g},c)}return f.getInitialState=l,f}function Mk(e,t){return e+"/"+t}function Uk(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:af(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},s={};i.forEach(function(f){var c=r[f],d=Mk(t,f),v,g;"reducer"in c?(v=c.reducer,g=c.prepare):v=c,o[f]=v,a[d]=v,s[f]=g?Qn(d,g):Qn(d)});function l(){var f=typeof e.extraReducers=="function"?z1(e.extraReducers):[e.extraReducers],c=f[0],d=c===void 0?{}:c,v=f[1],g=v===void 0?[]:v,m=f[2],x=m===void 0?void 0:m,h=Yn(Yn({},d),a);return Dk(n,function(p){for(var y in h)p.addCase(y,h[y]);for(var S=0,E=g;S<E.length;S++){var T=E[S];p.addMatcher(T.matcher,T.reducer)}x&&p.addDefaultCase(x)})}var u;return{name:t,reducer:function(f,c){return u||(u=l()),u(f,c)},actions:s,caseReducers:o,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var Bk="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Vk=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Bk[Math.random()*64|0];return t},Wk=["name","message","stack","code"],Iu=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Tm=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Hk=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Wk;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},Rr=function(){function e(t,n,r){var i=Qn(t+"/fulfilled",function(u,f,c,d){return{payload:u,meta:Nu(Yn({},d||{}),{arg:c,requestId:f,requestStatus:"fulfilled"})}}),o=Qn(t+"/pending",function(u,f,c){return{payload:void 0,meta:Nu(Yn({},c||{}),{arg:f,requestId:u,requestStatus:"pending"})}}),a=Qn(t+"/rejected",function(u,f,c,d,v){return{payload:d,error:(r&&r.serializeError||Hk)(u||"Rejected"),meta:Nu(Yn({},v||{}),{arg:c,requestId:f,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(f,c,d){var v=r!=null&&r.idGenerator?r.idGenerator(u):Vk(),g=new s,m;function x(p){m=p,g.abort()}var h=function(){return Tk(this,null,function(){var p,y,S,E,T,_,A;return Sk(this,function(B){switch(B.label){case 0:return B.trys.push([0,4,,5]),E=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,u,{getState:c,extra:d}),Kk(E)?[4,E]:[3,2];case 1:E=B.sent(),B.label=2;case 2:if(E===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return T=new Promise(function(D,G){return g.signal.addEventListener("abort",function(){return G({name:"AbortError",message:m||"Aborted"})})}),f(o(v,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:v,arg:u},{getState:c,extra:d}))),[4,Promise.race([T,Promise.resolve(n(u,{dispatch:f,getState:c,extra:d,requestId:v,signal:g.signal,abort:x,rejectWithValue:function(D,G){return new Iu(D,G)},fulfillWithValue:function(D,G){return new Tm(D,G)}})).then(function(D){if(D instanceof Iu)throw D;return D instanceof Tm?i(D.payload,v,u,D.meta):i(D,v,u)})])];case 3:return S=B.sent(),[3,5];case 4:return _=B.sent(),S=_ instanceof Iu?a(null,v,u,_.payload,_.meta):a(_,v,u),[3,5];case 5:return A=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,A||f(S),[2,S]}})})}();return Object.assign(h,{abort:x,requestId:v,arg:u,unwrap:function(){return h.then(Gk)}})}}return Object.assign(l,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function Gk(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Kk(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var tp="listenerMiddleware";Qn(tp+"/add");Qn(tp+"/removeAll");Qn(tp+"/remove");var Cm;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);ck();var np="persist:",rp="persist/FLUSH",Il="persist/REHYDRATE",ip="persist/PAUSE",op="persist/PERSIST",ap="persist/PURGE",sp="persist/REGISTER",qk=-1;function es(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?es=function(n){return typeof n}:es=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},es(e)}function Pm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Yk(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pm(n,!0).forEach(function(r){Qk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xk(e,t,n,r){r.debug;var i=Yk({},n);return e&&es(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function Jk(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:np).concat(e.key),a=e.storage,s;e.serialize===!1?s=function(E){return E}:typeof e.serialize=="function"?s=e.serialize:s=Zk;var l=e.writeFailHandler||null,u={},f={},c=[],d=null,v=null,g=function(E){Object.keys(E).forEach(function(T){h(T)&&u[T]!==E[T]&&c.indexOf(T)===-1&&c.push(T)}),Object.keys(u).forEach(function(T){E[T]===void 0&&h(T)&&c.indexOf(T)===-1&&u[T]!==void 0&&c.push(T)}),d===null&&(d=setInterval(m,i)),u=E};function m(){if(c.length===0){d&&clearInterval(d),d=null;return}var S=c.shift(),E=r.reduce(function(T,_){return _.in(T,S,u)},u[S]);if(E!==void 0)try{f[S]=s(E)}catch(T){console.error("redux-persist/createPersistoid: error serializing state",T)}else delete f[S];c.length===0&&x()}function x(){Object.keys(f).forEach(function(S){u[S]===void 0&&delete f[S]}),v=a.setItem(o,s(f)).catch(p)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function p(S){l&&l(S)}var y=function(){for(;c.length!==0;)m();return v||Promise.resolve()};return{update:g,flush:y}}function Zk(e){return JSON.stringify(e)}function e_(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:np).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=t_,r.getItem(n).then(function(o){if(o)try{var a={},s=i(o);return Object.keys(s).forEach(function(l){a[l]=t.reduceRight(function(u,f){return f.out(u,l,s)},i(s[l]))}),a}catch(l){throw l}else return})}function t_(e){return JSON.parse(e)}function n_(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:np).concat(e.key);return t.removeItem(n,r_)}function r_(e){}function jm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jm(n,!0).forEach(function(r){i_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function i_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o_(e,t){if(e==null)return{};var n=a_(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function a_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var s_=5e3;function l_(e,t){var n=e.version!==void 0?e.version:qk;e.debug;var r=e.stateReconciler===void 0?Xk:e.stateReconciler,i=e.getStoredState||e_,o=e.timeout!==void 0?e.timeout:s_,a=null,s=!1,l=!0,u=function(c){return c._persist.rehydrated&&a&&!l&&a.update(c),c};return function(f,c){var d=f||{},v=d._persist,g=o_(d,["_persist"]),m=g;if(c.type===op){var x=!1,h=function(A,B){x||(c.rehydrate(e.key,A,B),x=!0)};if(o&&setTimeout(function(){!x&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),l=!1,a||(a=Jk(e)),v)return un({},t(m,c),{_persist:v});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function(_){var A=e.migrate||function(B,D){return Promise.resolve(B)};A(_,n).then(function(B){h(B)},function(B){h(void 0,B)})},function(_){h(void 0,_)}),un({},t(m,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===ap)return s=!0,c.result(n_(e)),un({},t(m,c),{_persist:v});if(c.type===rp)return c.result(a&&a.flush()),un({},t(m,c),{_persist:v});if(c.type===ip)l=!0;else if(c.type===Il){if(s)return un({},m,{_persist:un({},v,{rehydrated:!0})});if(c.key===e.key){var p=t(m,c),y=c.payload,S=r!==!1&&y!==void 0?r(y,f,p,e):p,E=un({},S,{_persist:un({},v,{rehydrated:!0})});return u(E)}}}if(!v)return t(f,c);var T=t(m,c);return T===m?f:u(un({},T,{_persist:v}))}}function Rm(e){return f_(e)||c_(e)||u_()}function u_(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c_(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function f_(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Am(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Am(n,!0).forEach(function(r){d_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Am(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function d_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D1={registry:[],bootstrapped:!1},p_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:D1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case sp:return sf({},t,{registry:[].concat(Rm(t.registry),[n.key])});case Il:var r=t.registry.indexOf(n.key),i=Rm(t.registry);return i.splice(r,1),sf({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function h_(e,t,n){var r=n||!1,i=ep(p_,D1,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:sp,key:u})},a=function(u,f,c){var d={type:Il,payload:f,err:c,key:u};e.dispatch(d),i.dispatch(d),r&&s.getState().bootstrapped&&(r(),r=!1)},s=sf({},i,{purge:function(){var u=[];return e.dispatch({type:ap,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:rp,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:ip})},persist:function(){e.dispatch({type:op,register:o,rehydrate:a})}});return t&&t.manualPersist||s.persist(),s}var lp={},up={};up.__esModule=!0;up.default=y_;function ts(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ts=function(n){return typeof n}:ts=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ts(e)}function Lu(){}var m_={getItem:Lu,setItem:Lu,removeItem:Lu};function g_(e){if((typeof self>"u"?"undefined":ts(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function y_(e){var t="".concat(e,"Storage");return g_(t)?self[t]:m_}lp.__esModule=!0;lp.default=w_;var v_=x_(up);function x_(e){return e&&e.__esModule?e:{default:e}}function w_(e){var t=(0,v_.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var M1=void 0,b_=S_(lp);function S_(e){return e&&e.__esModule?e:{default:e}}var E_=(0,b_.default)("local");M1=E_;function U1(e,t){return function(){return e.apply(t,arguments)}}const{toString:k_}=Object.prototype,{getPrototypeOf:cp}=Object,Ll=(e=>t=>{const n=k_.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),rn=e=>(e=e.toLowerCase(),t=>Ll(t)===e),zl=e=>t=>typeof t===e,{isArray:Ai}=Array,Uo=zl("undefined");function __(e){return e!==null&&!Uo(e)&&e.constructor!==null&&!Uo(e.constructor)&&Ct(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const B1=rn("ArrayBuffer");function O_(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&B1(e.buffer),t}const $_=zl("string"),Ct=zl("function"),V1=zl("number"),Dl=e=>e!==null&&typeof e=="object",T_=e=>e===!0||e===!1,ns=e=>{if(Ll(e)!=="object")return!1;const t=cp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},C_=rn("Date"),P_=rn("File"),j_=rn("Blob"),R_=rn("FileList"),A_=e=>Dl(e)&&Ct(e.pipe),F_=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ct(e.append)&&((t=Ll(e))==="formdata"||t==="object"&&Ct(e.toString)&&e.toString()==="[object FormData]"))},N_=rn("URLSearchParams"),I_=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ia(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ai(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function W1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const H1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),G1=e=>!Uo(e)&&e!==H1;function lf(){const{caseless:e}=G1(this)&&this||{},t={},n=(r,i)=>{const o=e&&W1(t,i)||i;ns(t[o])&&ns(r)?t[o]=lf(t[o],r):ns(r)?t[o]=lf({},r):Ai(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ia(arguments[r],n);return t}const L_=(e,t,n,{allOwnKeys:r}={})=>(ia(t,(i,o)=>{n&&Ct(i)?e[o]=U1(i,n):e[o]=i},{allOwnKeys:r}),e),z_=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),D_=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},M_=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&cp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},U_=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},B_=e=>{if(!e)return null;if(Ai(e))return e;let t=e.length;if(!V1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},V_=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cp(Uint8Array)),W_=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},H_=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},G_=rn("HTMLFormElement"),K_=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Fm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),q_=rn("RegExp"),K1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ia(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},Y_=e=>{K1(e,(t,n)=>{if(Ct(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ct(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Q_=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Ai(e)?r(e):r(String(e).split(t)),n},X_=()=>{},J_=(e,t)=>(e=+e,Number.isFinite(e)?e:t),zu="abcdefghijklmnopqrstuvwxyz",Nm="0123456789",q1={DIGIT:Nm,ALPHA:zu,ALPHA_DIGIT:zu+zu.toUpperCase()+Nm},Z_=(e=16,t=q1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function eO(e){return!!(e&&Ct(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const tO=e=>{const t=new Array(10),n=(r,i)=>{if(Dl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Ai(r)?[]:{};return ia(r,(a,s)=>{const l=n(a,i+1);!Uo(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},nO=rn("AsyncFunction"),rO=e=>e&&(Dl(e)||Ct(e))&&Ct(e.then)&&Ct(e.catch),C={isArray:Ai,isArrayBuffer:B1,isBuffer:__,isFormData:F_,isArrayBufferView:O_,isString:$_,isNumber:V1,isBoolean:T_,isObject:Dl,isPlainObject:ns,isUndefined:Uo,isDate:C_,isFile:P_,isBlob:j_,isRegExp:q_,isFunction:Ct,isStream:A_,isURLSearchParams:N_,isTypedArray:V_,isFileList:R_,forEach:ia,merge:lf,extend:L_,trim:I_,stripBOM:z_,inherits:D_,toFlatObject:M_,kindOf:Ll,kindOfTest:rn,endsWith:U_,toArray:B_,forEachEntry:W_,matchAll:H_,isHTMLForm:G_,hasOwnProperty:Fm,hasOwnProp:Fm,reduceDescriptors:K1,freezeMethods:Y_,toObjectSet:Q_,toCamelCase:K_,noop:X_,toFiniteNumber:J_,findKey:W1,global:H1,isContextDefined:G1,ALPHABET:q1,generateString:Z_,isSpecCompliantForm:eO,toJSONObject:tO,isAsyncFn:nO,isThenable:rO};function Z(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}C.inherits(Z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Y1=Z.prototype,Q1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Q1[e]={value:e}});Object.defineProperties(Z,Q1);Object.defineProperty(Y1,"isAxiosError",{value:!0});Z.from=(e,t,n,r,i,o)=>{const a=Object.create(Y1);return C.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),Z.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const iO=null;function uf(e){return C.isPlainObject(e)||C.isArray(e)}function X1(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Im(e,t,n){return e?e.concat(t).map(function(i,o){return i=X1(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function oO(e){return C.isArray(e)&&!e.some(uf)}const aO=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function Ml(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,x){return!C.isUndefined(x[m])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(C.isDate(g))return g.toISOString();if(!l&&C.isBlob(g))throw new Z("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(g)||C.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,m,x){let h=g;if(g&&!x&&typeof g=="object"){if(C.endsWith(m,"{}"))m=r?m:m.slice(0,-2),g=JSON.stringify(g);else if(C.isArray(g)&&oO(g)||(C.isFileList(g)||C.endsWith(m,"[]"))&&(h=C.toArray(g)))return m=X1(m),h.forEach(function(y,S){!(C.isUndefined(y)||y===null)&&t.append(a===!0?Im([m],S,o):a===null?m:m+"[]",u(y))}),!1}return uf(g)?!0:(t.append(Im(x,m,o),u(g)),!1)}const c=[],d=Object.assign(aO,{defaultVisitor:f,convertValue:u,isVisitable:uf});function v(g,m){if(!C.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));c.push(g),C.forEach(g,function(h,p){(!(C.isUndefined(h)||h===null)&&i.call(t,h,C.isString(p)?p.trim():p,m,d))===!0&&v(h,m?m.concat(p):[p])}),c.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Lm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function fp(e,t){this._pairs=[],e&&Ml(e,this,t)}const J1=fp.prototype;J1.append=function(t,n){this._pairs.push([t,n])};J1.toString=function(t){const n=t?function(r){return t.call(this,r,Lm)}:Lm;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function sO(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Z1(e,t,n){if(!t)return e;const r=n&&n.encode||sO,i=n&&n.serialize;let o;if(i?o=i(t,n):o=C.isURLSearchParams(t)?t.toString():new fp(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class lO{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const zm=lO,ex={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},uO=typeof URLSearchParams<"u"?URLSearchParams:fp,cO=typeof FormData<"u"?FormData:null,fO=typeof Blob<"u"?Blob:null,dO={isBrowser:!0,classes:{URLSearchParams:uO,FormData:cO,Blob:fO},protocols:["http","https","file","blob","url","data"]},tx=typeof window<"u"&&typeof document<"u",pO=(e=>tx&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),hO=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),mO=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:tx,hasStandardBrowserEnv:pO,hasStandardBrowserWebWorkerEnv:hO},Symbol.toStringTag,{value:"Module"})),Qt={...mO,...dO};function gO(e,t){return Ml(e,new Qt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Qt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function yO(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function vO(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function nx(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&C.isArray(i)?i.length:a,l?(C.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!C.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&C.isArray(i[a])&&(i[a]=vO(i[a])),!s)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,i)=>{t(yO(r),i,n,0)}),n}return null}function xO(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const dp={transitional:ex,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=C.isObject(t);if(o&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return i&&i?JSON.stringify(nx(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return gO(t,this.formSerializer).toString();if((s=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ml(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),xO(t)):t}],transformResponse:[function(t){const n=this.transitional||dp.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&C.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Z.from(s,Z.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qt.classes.FormData,Blob:Qt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{dp.headers[e]={}});const pp=dp,wO=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bO=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&wO[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Dm=Symbol("internals");function qi(e){return e&&String(e).trim().toLowerCase()}function rs(e){return e===!1||e==null?e:C.isArray(e)?e.map(rs):String(e)}function SO(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const EO=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Du(e,t,n,r,i){if(C.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function kO(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function _O(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Ul{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const f=qi(l);if(!f)throw new Error("header name must be a non-empty string");const c=C.findKey(i,f);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||l]=rs(s))}const a=(s,l)=>C.forEach(s,(u,f)=>o(u,f,l));return C.isPlainObject(t)||t instanceof this.constructor?a(t,n):C.isString(t)&&(t=t.trim())&&!EO(t)?a(bO(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=qi(t),t){const r=C.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return SO(i);if(C.isFunction(n))return n.call(this,i,r);if(C.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=qi(t),t){const r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Du(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=qi(a),a){const s=C.findKey(r,a);s&&(!n||Du(r,r[s],s,n))&&(delete r[s],i=!0)}}return C.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Du(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return C.forEach(this,(i,o)=>{const a=C.findKey(r,o);if(a){n[a]=rs(i),delete n[o];return}const s=t?kO(o):String(o).trim();s!==o&&delete n[o],n[s]=rs(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&C.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Dm]=this[Dm]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=qi(a);r[s]||(_O(i,a),r[s]=!0)}return C.isArray(t)?t.forEach(o):o(t),this}}Ul.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(Ul.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});C.freezeMethods(Ul);const yn=Ul;function Mu(e,t){const n=this||pp,r=t||n,i=yn.from(r.headers);let o=r.data;return C.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function rx(e){return!!(e&&e.__CANCEL__)}function oa(e,t,n){Z.call(this,e??"canceled",Z.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(oa,Z,{__CANCEL__:!0});function OO(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Z("Request failed with status code "+n.status,[Z.ERR_BAD_REQUEST,Z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const $O=Qt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];C.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),C.isString(r)&&a.push("path="+r),C.isString(i)&&a.push("domain="+i),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function TO(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function CO(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ix(e,t){return e&&!TO(t)?CO(e,t):t}const PO=Qt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=C.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function jO(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function RO(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),f=r[o];a||(a=u),n[i]=l,r[i]=u;let c=o,d=0;for(;c!==i;)d+=n[c++],c=c%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const v=f&&u-f;return v?Math.round(d*1e3/v):void 0}}function Mm(e,t){let n=0;const r=RO(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const AO=typeof XMLHttpRequest<"u",FO=AO&&function(e){return new Promise(function(n,r){let i=e.data;const o=yn.from(e.headers).normalize();let{responseType:a,withXSRFToken:s}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;if(C.isFormData(i)){if(Qt.hasStandardBrowserEnv||Qt.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[m,...x]=f?f.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([m||"multipart/form-data",...x].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+x))}const d=ix(e.baseURL,e.url);c.open(e.method.toUpperCase(),Z1(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function v(){if(!c)return;const m=yn.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};OO(function(y){n(y),u()},function(y){r(y),u()},h),c=null}if("onloadend"in c?c.onloadend=v:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(v)},c.onabort=function(){c&&(r(new Z("Request aborted",Z.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new Z("Network Error",Z.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||ex;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new Z(x,h.clarifyTimeoutError?Z.ETIMEDOUT:Z.ECONNABORTED,e,c)),c=null},Qt.hasStandardBrowserEnv&&(s&&C.isFunction(s)&&(s=s(e)),s||s!==!1&&PO(d))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&$O.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&C.forEach(o.toJSON(),function(x,h){c.setRequestHeader(h,x)}),C.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Mm(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Mm(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=m=>{c&&(r(!m||m.type?new oa(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=jO(d);if(g&&Qt.protocols.indexOf(g)===-1){r(new Z("Unsupported protocol "+g+":",Z.ERR_BAD_REQUEST,e));return}c.send(i||null)})},cf={http:iO,xhr:FO};C.forEach(cf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Um=e=>`- ${e}`,NO=e=>C.isFunction(e)||e===null||e===!1,ox={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let a;if(r=n,!NO(n)&&(r=cf[(a=String(n)).toLowerCase()],r===void 0))throw new Z(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(Um).join(`
`):" "+Um(o[0]):"as no adapter specified";throw new Z("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:cf};function Uu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new oa(null,e)}function Bm(e){return Uu(e),e.headers=yn.from(e.headers),e.data=Mu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ox.getAdapter(e.adapter||pp.adapter)(e).then(function(r){return Uu(e),r.data=Mu.call(e,e.transformResponse,r),r.headers=yn.from(r.headers),r},function(r){return rx(r)||(Uu(e),r&&r.response&&(r.response.data=Mu.call(e,e.transformResponse,r.response),r.response.headers=yn.from(r.response.headers))),Promise.reject(r)})}const Vm=e=>e instanceof yn?e.toJSON():e;function Ei(e,t){t=t||{};const n={};function r(u,f,c){return C.isPlainObject(u)&&C.isPlainObject(f)?C.merge.call({caseless:c},u,f):C.isPlainObject(f)?C.merge({},f):C.isArray(f)?f.slice():f}function i(u,f,c){if(C.isUndefined(f)){if(!C.isUndefined(u))return r(void 0,u,c)}else return r(u,f,c)}function o(u,f){if(!C.isUndefined(f))return r(void 0,f)}function a(u,f){if(C.isUndefined(f)){if(!C.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function s(u,f,c){if(c in t)return r(u,f);if(c in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,f)=>i(Vm(u),Vm(f),!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=l[f]||i,d=c(e[f],t[f],f);C.isUndefined(d)&&c!==s||(n[f]=d)}),n}const ax="1.6.2",hp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{hp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Wm={};hp.transitional=function(t,n,r){function i(o,a){return"[Axios v"+ax+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new Z(i(a," has been removed"+(n?" in "+n:"")),Z.ERR_DEPRECATED);return n&&!Wm[a]&&(Wm[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function IO(e,t,n){if(typeof e!="object")throw new Z("options must be an object",Z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new Z("option "+o+" must be "+l,Z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Z("Unknown option "+o,Z.ERR_BAD_OPTION)}}const ff={assertOptions:IO,validators:hp},Cn=ff.validators;class zs{constructor(t){this.defaults=t,this.interceptors={request:new zm,response:new zm}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ei(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&ff.assertOptions(r,{silentJSONParsing:Cn.transitional(Cn.boolean),forcedJSONParsing:Cn.transitional(Cn.boolean),clarifyTimeoutError:Cn.transitional(Cn.boolean)},!1),i!=null&&(C.isFunction(i)?n.paramsSerializer={serialize:i}:ff.assertOptions(i,{encode:Cn.function,serialize:Cn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&C.merge(o.common,o[n.method]);o&&C.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=yn.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let f,c=0,d;if(!l){const g=[Bm.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),d=g.length,f=Promise.resolve(n);c<d;)f=f.then(g[c++],g[c++]);return f}d=s.length;let v=n;for(c=0;c<d;){const g=s[c++],m=s[c++];try{v=g(v)}catch(x){m.call(this,x);break}}try{f=Bm.call(this,v)}catch(g){return Promise.reject(g)}for(c=0,d=u.length;c<d;)f=f.then(u[c++],u[c++]);return f}getUri(t){t=Ei(this.defaults,t);const n=ix(t.baseURL,t.url);return Z1(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){zs.prototype[t]=function(n,r){return this.request(Ei(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(Ei(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}zs.prototype[t]=n(),zs.prototype[t+"Form"]=n(!0)});const is=zs;class mp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new oa(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new mp(function(i){t=i}),cancel:t}}}const LO=mp;function zO(e){return function(n){return e.apply(null,n)}}function DO(e){return C.isObject(e)&&e.isAxiosError===!0}const df={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(df).forEach(([e,t])=>{df[t]=e});const MO=df;function sx(e){const t=new is(e),n=U1(is.prototype.request,t);return C.extend(n,is.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return sx(Ei(e,i))},n}const Fe=sx(pp);Fe.Axios=is;Fe.CanceledError=oa;Fe.CancelToken=LO;Fe.isCancel=rx;Fe.VERSION=ax;Fe.toFormData=Ml;Fe.AxiosError=Z;Fe.Cancel=Fe.CanceledError;Fe.all=function(t){return Promise.all(t)};Fe.spread=zO;Fe.isAxiosError=DO;Fe.mergeConfig=Ei;Fe.AxiosHeaders=yn;Fe.formToJSON=e=>nx(C.isHTMLForm(e)?new FormData(e):e);Fe.getAdapter=ox.getAdapter;Fe.HttpStatusCode=MO;Fe.default=Fe;const on=Fe;on.defaults.baseURL="https://watertracker-backend.onrender.com";const gp=e=>{on.defaults.headers.common.Authorization=`Bearer ${e}`},UO=()=>{on.defaults.headers.common.Authorization=""},BO=async e=>{const{data:t}=await on.post("/auth/register",e);return gp(t.token),t},VO=async e=>{const{data:t}=await on.post("/auth/login",e);return gp(t.token),t},WO=async()=>{await on.post("/auth/logout"),UO()},HO=async e=>{const{data:t}=await on.post("/waterrate",{waterRate:e});return t},GO=async e=>{gp(e);const{data:t}=await on.get("/user/current");return t},KO=async e=>{const{data:{avatarURL:t}}=await on.post("/user/avatar",e,{headers:{"Content-Type":"multipart/form-data"}});return t},qO=async e=>await on.patch("/user/edit",e,{headers:{"Content-Type":"application/json"}}),YO=Rr("auth/register",async(e,{rejectWithValue:t})=>{try{return await BO(e)}catch(n){return t(n.message)}}),QO=Rr("auth/login",async(e,{rejectWithValue:t})=>{try{return await VO(e)}catch(n){return t(n.message)}}),lx=Rr("auth/logout",async(e,{rejectWithValue:t})=>{try{await WO();return}catch(n){return t(n.message)}}),os=Rr("auth/refresh",async(e,{rejectWithValue:t,getState:n})=>{try{const{auth:r}=n();return await GO(r.token)}catch(r){return t(r.message)}},{condition:(e,{getState:t})=>{const{auth:n}=t();if(!n.token)return!1}}),XO=Rr("auth/updateWaterRate",async(e,{rejectWithValue:t})=>{try{console.log(e);const n=Number(e)*1e3,{waterRate:r}=await HO(n);return r}catch(n){return t(n.message)}}),ux=Rr("user/avatar",async(e,{rejectWithValue:t})=>{try{return await KO(e)}catch(n){return t(n.message)}}),JO=Rr("user/edit",async(e,{rejectWithValue:t})=>{try{return await qO(e)}catch(n){return t(n.message)}}),ZO=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},e$=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},t$=()=>cx,n$=(e,{payload:t})=>{e.user=t,e.isRefreshing=!1,e.isLoggedIn=!0},r$=e=>{e.isRefreshing=!0},i$=e=>{e.isRefreshing=!1},o$=(e,{payload:t})=>{e.user.waterRate=t},a$=(e,{payload:t})=>{e.user.avatarURL=t},s$=(e,{payload:t})=>{e.user=t},cx={user:{email:"",avatarURL:"",userName:"",gender:"",waterRate:""},token:null,isLoggedIn:!1,isRefreshing:!1},l$=Uk({name:"auth",initialState:cx,extraReducers:e=>{e.addCase(YO.fulfilled,ZO).addCase(QO.fulfilled,e$).addCase(lx.fulfilled,t$).addCase(XO.fulfilled,o$).addCase(ux.fulfilled,a$).addCase(JO.fulfilled,s$).addCase(os.fulfilled,n$).addCase(os.pending,r$).addCase(os.rejected,i$)}}),u$=l$.reducer,c$={key:"auth",storage:M1,whitelist:["token"]},fx=Lk({reducer:{auth:l_(c$,u$)},middleware:e=>e({serializableCheck:{ignoredActions:[rp,Il,ip,op,ap,sp]}})}),f$=h_(fx);var dx={};const d$=Iw(mS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=d$;function n(){var a=r([`
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
`]);return n=function(){return a},a}function r(a,s){return s||(s=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(s)}}))}var i=(0,t.css)(n()),o=i;e.default=o})(dx);const p$=$i(dx),pf={color:{black:"#2F2F2F",white:"#FFFFFF",accent:"#407BFF",secondaryWhite:"#ecf2ff",secondaryRed:"#ef5050",secondaryLightBlue:"#9ebbff",secondaryYellow:"#ff9d43",secondaryPowderBlue:"#d7e3ff"},breakpoint:{mobile:"320px",tablet:"768px",desktop:"1440px"},transition:{main:"250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",modal:"300ms ease-in-out"},boxShadowforButton:{normalButton:"0 4px 8px rgba(64, 123, 255, 0.34)",hoverButton:"0 4px 14px rgba(64, 123, 255, 0.54)",activeButton:"none"},modalBoxShadow:{modal:"0 4px 14px rgba(64, 123, 255, 0.3)"}},h$="/water-tracker/assets/Roboto-Regular-4e147ab6.ttf",m$="/water-tracker/assets/Roboto-Medium-9d0d55a3.ttf",g$="/water-tracker/assets/Roboto-Bold-ec685a46.ttf",y$=Jf`
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
`;var px={exports:{}},v$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",x$=v$,w$=x$;function hx(){}function mx(){}mx.resetWarningCache=hx;var b$=function(){function e(r,i,o,a,s,l){if(l!==w$){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:mx,resetWarningCache:hx};return n.PropTypes=n,n};px.exports=b$();var S$=px.exports;const no=$i(S$);var E$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hf=s0(function(e){return E$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),k$=hf,_$=function(t){return t!=="theme"},Hm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?k$:_$},Gm=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},O$=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ll(n,r,i),Yf(function(){return ul(n,r,i)}),null},$$=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var s=Gm(t,n,r),l=s||Hm(i),u=!l("as");return function(){var f=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)c.push.apply(c,f);else{c.push(f[0][0]);for(var d=f.length,v=1;v<d;v++)c.push(f[v],f[0][v])}var g=Zo(function(m,x,h){var p=u&&m.as||i,y="",S=[],E=m;if(m.theme==null){E={};for(var T in m)E[T]=m[T];E.theme=w.useContext(vn)}typeof m.className=="string"?y=qf(x.registered,S,m.className):m.className!=null&&(y=m.className+" ");var _=Jo(c.concat(S),x.registered,E);y+=x.key+"-"+_.name,a!==void 0&&(y+=" "+a);var A=u&&s===void 0?Hm(p):l,B={};for(var D in m)u&&D==="as"||A(D)&&(B[D]=m[D]);return B.className=y,B.ref=h,w.createElement(w.Fragment,null,w.createElement(O$,{cache:x,serialized:_,isStringTag:typeof p=="string"}),w.createElement(p,B))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=c,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(m,x){return e(m,xo({},n,x,{shouldForwardProp:Gm(g,x,!0)})).apply(void 0,c)},g}},T$=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],$=$$.bind();T$.forEach(function(e){$[e]=$(e)});const C$=$.div`
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
`,P$=$.div`
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
`,j$=$.div`
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
`,R$=$.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,A$=$.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.color.accent};

  &:hover,
  &:focus {
    stroke: ${e=>e.theme.color.secondaryYellow};
  }
`,kt="/water-tracker/assets/sprite-c35e1970.svg",Bl=({onShow:e=!0,children:t,title:n,onClose:r})=>{const i=document.querySelector("#modal-root"),o=w.useRef(null),a=w.useRef(null);return w.useEffect(()=>{const s=u=>{document.body.style.overflow=u?"hidden":"auto"};(e||i.children.length!==0)&&s(!0);const l=u=>{u.code==="Escape"&&r()};return window.addEventListener("keydown",l),()=>{s(!1),window.removeEventListener("keydown",l)}},[i.children.length,e,r]),Vd.createPortal(b.jsx(C$,{onClick:r,ref:a,children:b.jsxs(P$,{onClick:s=>s.stopPropagation(),ref:o,children:[b.jsxs(j$,{children:[b.jsx("h2",{children:n}),b.jsx(R$,{onClick:r,children:b.jsx(A$,{children:b.jsx("use",{href:`${kt}#icon-outline`})})})]}),b.jsx("div",{children:t})]})}),i)};Bl.propTypes={onClose:no.func.isRequired,children:no.node.isRequired,onShow:no.bool,title:no.string.isRequired};const F$=$.div`
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
`;var N$=function(e){return{display:e?"flex":"none"}},I$="#4fa94d",L$={"aria-busy":!0,role:"status"},Km=globalThis&&globalThis.__assign||function(){return Km=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Km.apply(this,arguments)},qm=globalThis&&globalThis.__assign||function(){return qm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qm.apply(this,arguments)},Ym=globalThis&&globalThis.__assign||function(){return Ym=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ym.apply(this,arguments)},Qm=globalThis&&globalThis.__assign||function(){return Qm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qm.apply(this,arguments)},Xm=globalThis&&globalThis.__assign||function(){return Xm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xm.apply(this,arguments)},Jm=globalThis&&globalThis.__assign||function(){return Jm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jm.apply(this,arguments)},Zm=globalThis&&globalThis.__assign||function(){return Zm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zm.apply(this,arguments)};function z$(e){function t(R,z,M,V,O){for(var Y=0,N=0,me=0,ee=0,te,K,je=0,Qe=0,J,De=J=te=0,oe=0,Ne=0,sn=0,Ie=0,Dr=M.length,k=Dr-1,I,P="",L="",q="",ne="",de;oe<Dr;){if(K=M.charCodeAt(oe),oe===k&&N+ee+me+Y!==0&&(N!==0&&(K=N===47?10:47),ee=me=Y=0,Dr++,k++),N+ee+me+Y===0){if(oe===k&&(0<Ne&&(P=P.replace(d,"")),0<P.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:P+=M.charAt(oe)}K=59}switch(K){case 123:for(P=P.trim(),te=P.charCodeAt(0),J=1,Ie=++oe;oe<Dr;){switch(K=M.charCodeAt(oe)){case 123:J++;break;case 125:J--;break;case 47:switch(K=M.charCodeAt(oe+1)){case 42:case 47:e:{for(De=oe+1;De<k;++De)switch(M.charCodeAt(De)){case 47:if(K===42&&M.charCodeAt(De-1)===42&&oe+2!==De){oe=De+1;break e}break;case 10:if(K===47){oe=De+1;break e}}oe=De}}break;case 91:K++;case 40:K++;case 34:case 39:for(;oe++<k&&M.charCodeAt(oe)!==K;);}if(J===0)break;oe++}switch(J=M.substring(Ie,oe),te===0&&(te=(P=P.replace(c,"").trim()).charCodeAt(0)),te){case 64:switch(0<Ne&&(P=P.replace(d,"")),K=P.charCodeAt(1),K){case 100:case 109:case 115:case 45:Ne=z;break;default:Ne=At}if(J=t(z,Ne,J,K,O+1),Ie=J.length,0<F&&(Ne=n(At,P,sn),de=s(3,J,Ne,z,Q,xe,Ie,K,O,V),P=Ne.join(""),de!==void 0&&(Ie=(J=de.trim()).length)===0&&(K=0,J="")),0<Ie)switch(K){case 115:P=P.replace(T,a);case 100:case 109:case 45:J=P+"{"+J+"}";break;case 107:P=P.replace(p,"$1 $2"),J=P+"{"+J+"}",J=Te===1||Te===2&&o("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=P+J,V===112&&(J=(L+=J,""))}else J="";break;default:J=t(z,n(z,P,sn),J,V,O+1)}q+=J,J=sn=Ne=De=te=0,P="",K=M.charCodeAt(++oe);break;case 125:case 59:if(P=(0<Ne?P.replace(d,""):P).trim(),1<(Ie=P.length))switch(De===0&&(te=P.charCodeAt(0),te===45||96<te&&123>te)&&(Ie=(P=P.replace(" ",":")).length),0<F&&(de=s(1,P,z,R,Q,xe,L.length,V,O,V))!==void 0&&(Ie=(P=de.trim()).length)===0&&(P="\0\0"),te=P.charCodeAt(0),K=P.charCodeAt(1),te){case 0:break;case 64:if(K===105||K===99){ne+=P+M.charAt(oe);break}default:P.charCodeAt(Ie-1)!==58&&(L+=i(P,te,K,P.charCodeAt(2)))}sn=Ne=De=te=0,P="",K=M.charCodeAt(++oe)}}switch(K){case 13:case 10:N===47?N=0:1+te===0&&V!==107&&0<P.length&&(Ne=1,P+="\0"),0<F*H&&s(0,P,z,R,Q,xe,L.length,V,O,V),xe=1,Q++;break;case 59:case 125:if(N+ee+me+Y===0){xe++;break}default:switch(xe++,I=M.charAt(oe),K){case 9:case 32:if(ee+Y+N===0)switch(je){case 44:case 58:case 9:case 32:I="";break;default:K!==32&&(I=" ")}break;case 0:I="\\0";break;case 12:I="\\f";break;case 11:I="\\v";break;case 38:ee+N+Y===0&&(Ne=sn=1,I="\f"+I);break;case 108:if(ee+N+Y+$e===0&&0<De)switch(oe-De){case 2:je===112&&M.charCodeAt(oe-3)===58&&($e=je);case 8:Qe===111&&($e=Qe)}break;case 58:ee+N+Y===0&&(De=oe);break;case 44:N+me+ee+Y===0&&(Ne=1,I+="\r");break;case 34:case 39:N===0&&(ee=ee===K?0:ee===0?K:ee);break;case 91:ee+N+me===0&&Y++;break;case 93:ee+N+me===0&&Y--;break;case 41:ee+N+Y===0&&me--;break;case 40:if(ee+N+Y===0){if(te===0)switch(2*je+3*Qe){case 533:break;default:te=1}me++}break;case 64:N+me+ee+Y+De+J===0&&(J=1);break;case 42:case 47:if(!(0<ee+Y+me))switch(N){case 0:switch(2*K+3*M.charCodeAt(oe+1)){case 235:N=47;break;case 220:Ie=oe,N=42}break;case 42:K===47&&je===42&&Ie+2!==oe&&(M.charCodeAt(Ie+2)===33&&(L+=M.substring(Ie,oe+1)),I="",N=0)}}N===0&&(P+=I)}Qe=je,je=K,oe++}if(Ie=L.length,0<Ie){if(Ne=z,0<F&&(de=s(2,L,Ne,R,Q,xe,Ie,V,O,V),de!==void 0&&(L=de).length===0))return ne+L+q;if(L=Ne.join(",")+"{"+L+"}",Te*$e!==0){switch(Te!==2||o(L,2)||($e=0),$e){case 111:L=L.replace(S,":-moz-$1")+L;break;case 112:L=L.replace(y,"::-webkit-input-$1")+L.replace(y,"::-moz-$1")+L.replace(y,":-ms-input-$1")+L}$e=0}}return ne+L+q}function n(R,z,M){var V=z.trim().split(x);z=V;var O=V.length,Y=R.length;switch(Y){case 0:case 1:var N=0;for(R=Y===0?"":R[0]+" ";N<O;++N)z[N]=r(R,z[N],M).trim();break;default:var me=N=0;for(z=[];N<O;++N)for(var ee=0;ee<Y;++ee)z[me++]=r(R[ee]+" ",V[N],M).trim()}return z}function r(R,z,M){var V=z.charCodeAt(0);switch(33>V&&(V=(z=z.trim()).charCodeAt(0)),V){case 38:return z.replace(h,"$1"+R.trim());case 58:return R.trim()+z.replace(h,"$1"+R.trim());default:if(0<1*M&&0<z.indexOf("\f"))return z.replace(h,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+z}function i(R,z,M,V){var O=R+";",Y=2*z+3*M+4*V;if(Y===944){R=O.indexOf(":",9)+1;var N=O.substring(R,O.length-1).trim();return N=O.substring(0,R).trim()+N+";",Te===1||Te===2&&o(N,1)?"-webkit-"+N+N:N}if(Te===0||Te===2&&!o(O,1))return O;switch(Y){case 1015:return O.charCodeAt(10)===97?"-webkit-"+O+O:O;case 951:return O.charCodeAt(3)===116?"-webkit-"+O+O:O;case 963:return O.charCodeAt(5)===110?"-webkit-"+O+O:O;case 1009:if(O.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+O+O;case 978:return"-webkit-"+O+"-moz-"+O+O;case 1019:case 983:return"-webkit-"+O+"-moz-"+O+"-ms-"+O+O;case 883:if(O.charCodeAt(8)===45)return"-webkit-"+O+O;if(0<O.indexOf("image-set(",11))return O.replace(G,"$1-webkit-$2")+O;break;case 932:if(O.charCodeAt(4)===45)switch(O.charCodeAt(5)){case 103:return"-webkit-box-"+O.replace("-grow","")+"-webkit-"+O+"-ms-"+O.replace("grow","positive")+O;case 115:return"-webkit-"+O+"-ms-"+O.replace("shrink","negative")+O;case 98:return"-webkit-"+O+"-ms-"+O.replace("basis","preferred-size")+O}return"-webkit-"+O+"-ms-"+O+O;case 964:return"-webkit-"+O+"-ms-flex-"+O+O;case 1023:if(O.charCodeAt(8)!==99)break;return N=O.substring(O.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+O+"-ms-flex-pack"+N+O;case 1005:return g.test(O)?O.replace(v,":-webkit-")+O.replace(v,":-moz-")+O:O;case 1e3:switch(N=O.substring(13).trim(),z=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(z)){case 226:N=O.replace(E,"tb");break;case 232:N=O.replace(E,"tb-rl");break;case 220:N=O.replace(E,"lr");break;default:return O}return"-webkit-"+O+"-ms-"+N+O;case 1017:if(O.indexOf("sticky",9)===-1)break;case 975:switch(z=(O=R).length-10,N=(O.charCodeAt(z)===33?O.substring(0,z):O).substring(R.indexOf(":",7)+1).trim(),Y=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:O=O.replace(N,"-webkit-"+N)+";"+O;break;case 207:case 102:O=O.replace(N,"-webkit-"+(102<Y?"inline-":"")+"box")+";"+O.replace(N,"-webkit-"+N)+";"+O.replace(N,"-ms-"+N+"box")+";"+O}return O+";";case 938:if(O.charCodeAt(5)===45)switch(O.charCodeAt(6)){case 105:return N=O.replace("-items",""),"-webkit-"+O+"-webkit-box-"+N+"-ms-flex-"+N+O;case 115:return"-webkit-"+O+"-ms-flex-item-"+O.replace(A,"")+O;default:return"-webkit-"+O+"-ms-flex-line-pack"+O.replace("align-content","").replace(A,"")+O}break;case 973:case 989:if(O.charCodeAt(3)!==45||O.charCodeAt(4)===122)break;case 931:case 953:if(D.test(R)===!0)return(N=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),z,M,V).replace(":fill-available",":stretch"):O.replace(N,"-webkit-"+N)+O.replace(N,"-moz-"+N.replace("fill-",""))+O;break;case 962:if(O="-webkit-"+O+(O.charCodeAt(5)===102?"-ms-"+O:"")+O,M+V===211&&O.charCodeAt(13)===105&&0<O.indexOf("transform",10))return O.substring(0,O.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+O}return O}function o(R,z){var M=R.indexOf(z===1?":":"{"),V=R.substring(0,z!==3?M:10);return M=R.substring(M+1,R.length-1),W(z!==2?V:V.replace(B,"$1"),M,z)}function a(R,z){var M=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return M!==z+";"?M.replace(_," or ($1)").substring(4):"("+z+")"}function s(R,z,M,V,O,Y,N,me,ee,te){for(var K=0,je=z,Qe;K<F;++K)switch(Qe=Ve[K].call(f,R,je,M,V,O,Y,N,me,ee,te)){case void 0:case!1:case!0:case null:break;default:je=Qe}if(je!==z)return je}function l(R){switch(R){case void 0:case null:F=Ve.length=0;break;default:if(typeof R=="function")Ve[F++]=R;else if(typeof R=="object")for(var z=0,M=R.length;z<M;++z)l(R[z]);else H=!!R|0}return l}function u(R){return R=R.prefix,R!==void 0&&(W=null,R?typeof R!="function"?Te=1:(Te=2,W=R):Te=0),u}function f(R,z){var M=R;if(33>M.charCodeAt(0)&&(M=M.trim()),ie=M,M=[ie],0<F){var V=s(-1,z,M,M,Q,xe,0,0,0,0);V!==void 0&&typeof V=="string"&&(z=V)}var O=t(At,M,z,0,0);return 0<F&&(V=s(-2,O,M,M,Q,xe,O.length,0,0,0),V!==void 0&&(O=V)),ie="",$e=0,xe=Q=1,O}var c=/^\0+/g,d=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,m=/([,: ])(transform)/g,x=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,_=/([\s\S]*?);/g,A=/-self|flex-/g,B=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,xe=1,Q=1,$e=0,Te=1,At=[],Ve=[],F=0,W=null,H=0,ie="";return f.use=l,f.set=u,e!==void 0&&u(e),f}var D$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function mn(){return(mn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var eg=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},mf=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Wf.typeOf(e)},Ds=Object.freeze([]),Xn=Object.freeze({});function Bo(e){return typeof e=="function"}function tg(e){return e.displayName||e.name||"Component"}function yp(e){return e&&typeof e.styledComponentId=="string"}var ki=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",vp=typeof window<"u"&&"HTMLElement"in window,M$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function aa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var U$=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&aa(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,s=o;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),as=new Map,Ms=new Map,po=1,Ca=function(e){if(as.has(e))return as.get(e);for(;Ms.has(po);)po++;var t=po++;return as.set(e,t),Ms.set(t,e),t},B$=function(e){return Ms.get(e)},V$=function(e,t){t>=po&&(po=t+1),as.set(e,t),Ms.set(t,e)},W$="style["+ki+'][data-styled-version="5.3.11"]',H$=new RegExp("^"+ki+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),G$=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},K$=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(H$);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(V$(u,l),G$(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},q$=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},gx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(ki))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ki,"active"),r.setAttribute("data-styled-version","5.3.11");var a=q$();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Y$=function(){function e(n){var r=this.element=gx(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}aa(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Q$=function(){function e(n){var r=this.element=gx(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),X$=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ng=vp,J$={isServer:!vp,useCSSOMInjection:!M$},yx=function(){function e(n,r,i){n===void 0&&(n=Xn),r===void 0&&(r={}),this.options=mn({},J$,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&vp&&ng&&(ng=!1,function(o){for(var a=document.querySelectorAll(W$),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(ki)!=="active"&&(K$(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ca(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(mn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new X$(a):o?new Y$(a):new Q$(a),new U$(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ca(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ca(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ca(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var s=B$(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var f=ki+".g"+a+'[id="'+s+'"]',c="";l!==void 0&&l.forEach(function(d){d.length>0&&(c+=d+",")}),o+=""+u+f+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),Z$=/(a)(d)/gi,rg=function(e){return String.fromCharCode(e+(e>25?39:97))};function gf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=rg(t%52)+n;return(rg(t%52)+n).replace(Z$,"$1-$2")}var ni=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vx=function(e){return ni(5381,e)};function eT(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bo(n)&&!yp(n))return!1}return!0}var tT=vx("5.3.11"),nT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&eT(t),this.componentId=n,this.baseHash=ni(tT,n),this.baseStyle=r,yx.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=_i(this.rules,t,n,r).join(""),s=gf(ni(this.baseHash,a)>>>0);if(!n.hasNameForId(i,s)){var l=r(a,"."+s,void 0,i);n.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,f=ni(this.baseHash,r.hash),c="",d=0;d<u;d++){var v=this.rules[d];if(typeof v=="string")c+=v;else if(v){var g=_i(v,t,n,r),m=Array.isArray(g)?g.join(""):g;f=ni(f,m+d),c+=m}}if(c){var x=gf(f>>>0);if(!n.hasNameForId(i,x)){var h=r(c,"."+x,void 0,i);n.insertRules(i,x,h)}o.push(x)}}return o.join(" ")},e}(),rT=/^\s*\/\/.*$/gm,iT=[":","[",".","#"];function oT(e){var t,n,r,i,o=e===void 0?Xn:e,a=o.options,s=a===void 0?Xn:a,l=o.plugins,u=l===void 0?Ds:l,f=new z$(s),c=[],d=function(m){function x(h){if(h)try{m(h+"}")}catch{}}return function(h,p,y,S,E,T,_,A,B,D){switch(h){case 1:if(B===0&&p.charCodeAt(0)===64)return m(p+";"),"";break;case 2:if(A===0)return p+"/*|*/";break;case 3:switch(A){case 102:case 112:return m(y[0]+p),"";default:return p+(D===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(x)}}}(function(m){c.push(m)}),v=function(m,x,h){return x===0&&iT.indexOf(h[n.length])!==-1||h.match(i)?m:"."+t};function g(m,x,h,p){p===void 0&&(p="&");var y=m.replace(rT,""),S=x&&h?h+" "+x+" { "+y+" }":y;return t=p,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(h||!x?"":x,S)}return f.use([].concat(u,[function(m,x,h){m===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,v))},d,function(m){if(m===-2){var x=c;return c=[],x}}])),g.hash=u.length?u.reduce(function(m,x){return x.name||aa(15),ni(m,x.name)},5381).toString():"",g}var xx=He.createContext();xx.Consumer;var wx=He.createContext(),aT=(wx.Consumer,new yx),yf=oT();function sT(){return w.useContext(xx)||aT}function lT(){return w.useContext(wx)||yf}var bx=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=yf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return aa(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=yf),this.name+t.hash},e}(),uT=/([A-Z])/,cT=/([A-Z])/g,fT=/^ms-/,dT=function(e){return"-"+e.toLowerCase()};function ig(e){return uT.test(e)?e.replace(cT,dT).replace(fT,"-ms-"):e}var og=function(e){return e==null||e===!1||e===""};function _i(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=_i(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(og(e))return"";if(yp(e))return"."+e.styledComponentId;if(Bo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return _i(l,t,n,r)}var u;return e instanceof bx?n?(e.inject(n,r),e.getName(r)):e:mf(e)?function f(c,d){var v,g,m=[];for(var x in c)c.hasOwnProperty(x)&&!og(c[x])&&(Array.isArray(c[x])&&c[x].isCss||Bo(c[x])?m.push(ig(x)+":",c[x],";"):mf(c[x])?m.push.apply(m,f(c[x],x)):m.push(ig(x)+": "+(v=x,(g=c[x])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in D$||v.startsWith("--")?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(m,["}"]):m}(e):e.toString()}var ag=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Sx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Bo(e)||mf(e)?ag(_i(eg(Ds,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ag(_i(eg(e,n)))}var pT=function(e,t,n){return n===void 0&&(n=Xn),e.theme!==n.theme&&e.theme||t||n.theme},hT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mT=/(^-|-$)/g;function Bu(e){return e.replace(hT,"-").replace(mT,"")}var Ex=function(e){return gf(vx(e)>>>0)};function Pa(e){return typeof e=="string"&&!0}var vf=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},gT=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function yT(e,t,n){var r=e[n];vf(t)&&vf(r)?kx(r,t):e[n]=t}function kx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(vf(a))for(var s in a)gT(s)&&yT(e,a[s],s)}return e}var _x=He.createContext();_x.Consumer;var Vu={};function Ox(e,t,n){var r=yp(e),i=!Pa(e),o=t.attrs,a=o===void 0?Ds:o,s=t.componentId,l=s===void 0?function(p,y){var S=typeof p!="string"?"sc":Bu(p);Vu[S]=(Vu[S]||0)+1;var E=S+"-"+Ex("5.3.11"+S+Vu[S]);return y?y+"-"+E:E}(t.displayName,t.parentComponentId):s,u=t.displayName,f=u===void 0?function(p){return Pa(p)?"styled."+p:"Styled("+tg(p)+")"}(e):u,c=t.displayName&&t.componentId?Bu(t.displayName)+"-"+t.componentId:t.componentId||l,d=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(p,y,S){return e.shouldForwardProp(p,y,S)&&t.shouldForwardProp(p,y,S)}:e.shouldForwardProp);var g,m=new nT(n,c,r?e.componentStyle:void 0),x=m.isStatic&&a.length===0,h=function(p,y){return function(S,E,T,_){var A=S.attrs,B=S.componentStyle,D=S.defaultProps,G=S.foldedComponentIds,xe=S.shouldForwardProp,Q=S.styledComponentId,$e=S.target,Te=function(V,O,Y){V===void 0&&(V=Xn);var N=mn({},O,{theme:V}),me={};return Y.forEach(function(ee){var te,K,je,Qe=ee;for(te in Bo(Qe)&&(Qe=Qe(N)),Qe)N[te]=me[te]=te==="className"?(K=me[te],je=Qe[te],K&&je?K+" "+je:K||je):Qe[te]}),[N,me]}(pT(E,w.useContext(_x),D)||Xn,E,A),At=Te[0],Ve=Te[1],F=function(V,O,Y,N){var me=sT(),ee=lT(),te=O?V.generateAndInjectStyles(Xn,me,ee):V.generateAndInjectStyles(Y,me,ee);return te}(B,_,At),W=T,H=Ve.$as||E.$as||Ve.as||E.as||$e,ie=Pa(H),R=Ve!==E?mn({},E,{},Ve):E,z={};for(var M in R)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?z.as=R[M]:(xe?xe(M,hf,H):!ie||hf(M))&&(z[M]=R[M]));return E.style&&Ve.style!==E.style&&(z.style=mn({},E.style,{},Ve.style)),z.className=Array.prototype.concat(G,Q,F!==Q?F:null,E.className,Ve.className).filter(Boolean).join(" "),z.ref=W,w.createElement(H,z)}(g,p,y,x)};return h.displayName=f,(g=He.forwardRef(h)).attrs=d,g.componentStyle=m,g.displayName=f,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ds,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(p){var y=t.componentId,S=function(T,_){if(T==null)return{};var A,B,D={},G=Object.keys(T);for(B=0;B<G.length;B++)A=G[B],_.indexOf(A)>=0||(D[A]=T[A]);return D}(t,["componentId"]),E=y&&y+"-"+(Pa(p)?p:Bu(tg(p)));return Ox(p,mn({},S,{attrs:d,componentId:E}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?kx({},e.defaultProps,p):p}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&Kf(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var xf=function(e){return function t(n,r,i){if(i===void 0&&(i=Xn),!Wf.isValidElementType(r))return aa(1,String(r));var o=function(){return n(r,i,Sx.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,mn({},i,{},a))},o.attrs=function(a){return t(n,r,mn({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Ox,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){xf[e]=xf(e)});function xp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Sx.apply(void 0,[e].concat(n)).join(""),o=Ex(i);return new bx(o,i)}const sa=xf;var $x=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},It=242.776657104492,vT=1.6,xT=xp(sg||(sg=$x([`
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
`])),It*.14,It,It*.11,It*.35,It,It*.35,It*.01,It,It*.99);sa.path(lg||(lg=$x([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),It*.01,It,xT,vT);var sg,lg,ug=globalThis&&globalThis.__assign||function(){return ug=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ug.apply(this,arguments)},cg=globalThis&&globalThis.__assign||function(){return cg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cg.apply(this,arguments)},fg=globalThis&&globalThis.__assign||function(){return fg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fg.apply(this,arguments)},dg=globalThis&&globalThis.__assign||function(){return dg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},dg.apply(this,arguments)},pg=globalThis&&globalThis.__assign||function(){return pg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},pg.apply(this,arguments)},hg=globalThis&&globalThis.__assign||function(){return hg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hg.apply(this,arguments)},mg=globalThis&&globalThis.__assign||function(){return mg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mg.apply(this,arguments)},wT=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var i=t.split("."),o=i.length,a=r[i[0]],s=1;a!=null&&s<o;)a=a[i[s]],s+=1;if(typeof a<"u")return a}return n}},wp=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},gg=globalThis&&globalThis.__assign||function(){return gg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gg.apply(this,arguments)},bT=xp(yg||(yg=wp([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));sa.svg(vg||(vg=wp([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),bT,wT("speed","0.75"));sa.polyline(xg||(xg=wp([`
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
`])),function(e){return e.width});var yg,vg,xg,wg=globalThis&&globalThis.__assign||function(){return wg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},wg.apply(this,arguments)},bg=globalThis&&globalThis.__assign||function(){return bg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},bg.apply(this,arguments)},ho=globalThis&&globalThis.__assign||function(){return ho=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ho.apply(this,arguments)},ST=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,i=r===void 0?80:r,o=e.radius,a=o===void 0?9:o,s=e.color,l=s===void 0?I$:s,u=e.ariaLabel,f=u===void 0?"three-dots-loading":u,c=e.wrapperStyle,d=e.wrapperClass,v=e.visible,g=v===void 0?!0:v;return He.createElement("div",ho({style:ho(ho({},N$(g)),c),className:d,"data-testid":"three-dots-loading","aria-label":f},L$),He.createElement("svg",{width:i,height:n,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:l,"data-testid":"three-dots-svg"},He.createElement("circle",{cx:"15",cy:"15",r:Number(a)+6},He.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),He.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),He.createElement("circle",{cx:"60",cy:"15",r:a,attributeName:"fill-opacity",from:"1",to:"0.3"},He.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),He.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),He.createElement("circle",{cx:"105",cy:"15",r:Number(a)+6},He.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),He.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))},bp=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Sg=globalThis&&globalThis.__assign||function(){return Sg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Sg.apply(this,arguments)},ET=xp(Eg||(Eg=bp([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));sa.polygon(kg||(kg=bp([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),ET);sa.svg(_g||(_g=bp([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var Eg,kg,_g,Og=globalThis&&globalThis.__assign||function(){return Og=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Og.apply(this,arguments)},$g=globalThis&&globalThis.__assign||function(){return $g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},$g.apply(this,arguments)},Tg=globalThis&&globalThis.__assign||function(){return Tg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Tg.apply(this,arguments)},Cg=globalThis&&globalThis.__assign||function(){return Cg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Cg.apply(this,arguments)},Pg=globalThis&&globalThis.__assign||function(){return Pg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Pg.apply(this,arguments)},jg=globalThis&&globalThis.__assign||function(){return jg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},jg.apply(this,arguments)},Rg=globalThis&&globalThis.__assign||function(){return Rg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Rg.apply(this,arguments)},Ag=globalThis&&globalThis.__assign||function(){return Ag=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ag.apply(this,arguments)},Fg=globalThis&&globalThis.__assign||function(){return Fg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Fg.apply(this,arguments)},Ng=globalThis&&globalThis.__assign||function(){return Ng=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ng.apply(this,arguments)},Ig=globalThis&&globalThis.__assign||function(){return Ig=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ig.apply(this,arguments)},Lg=globalThis&&globalThis.__assign||function(){return Lg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Lg.apply(this,arguments)},zg=globalThis&&globalThis.__assign||function(){return zg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},zg.apply(this,arguments)},Dg=globalThis&&globalThis.__assign||function(){return Dg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Dg.apply(this,arguments)};const kT=$.div`
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
`,Sp=()=>b.jsx(kT,{children:b.jsx(ST,{height:"90",width:"90",radius:"9",color:"#407bff",ariaLabel:"three-dots-loading",visible:!0,timeout:2e3})});/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vo.apply(this,arguments)}var Dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Dn||(Dn={}));const Mg="popstate";function _T(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return wf("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Us(i)}return $T(t,n,null,e)}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ep(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function OT(){return Math.random().toString(36).substr(2,8)}function Ug(e,t){return{usr:e.state,key:e.key,idx:t}}function wf(e,t,n,r){return n===void 0&&(n=null),Vo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fi(t):t,{state:n,key:t&&t.key||r||OT()})}function Us(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $T(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Dn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(Vo({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){s=Dn.Pop;let x=f(),h=x==null?null:x-u;u=x,l&&l({action:s,location:m.location,delta:h})}function d(x,h){s=Dn.Push;let p=wf(m.location,x,h);n&&n(p,x),u=f()+1;let y=Ug(p,u),S=m.createHref(p);try{a.pushState(y,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&l&&l({action:s,location:m.location,delta:1})}function v(x,h){s=Dn.Replace;let p=wf(m.location,x,h);n&&n(p,x),u=f();let y=Ug(p,u),S=m.createHref(p);a.replaceState(y,"",S),o&&l&&l({action:s,location:m.location,delta:0})}function g(x){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:Us(x);return _e(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let m={get action(){return s},get location(){return e(i,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Mg,c),l=x,()=>{i.removeEventListener(Mg,c),l=null}},createHref(x){return t(i,x)},createURL:g,encodeLocation(x){let h=g(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:v,go(x){return a.go(x)}};return m}var Bg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bg||(Bg={}));function TT(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Fi(t):t,i=Wo(r.pathname||"/",n);if(i==null)return null;let o=Tx(e);CT(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=zT(o[s],MT(i));return a}function Tx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jn([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(_e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tx(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:IT(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Cx(o.path))i(o,a,l)}),t}function Cx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Cx(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function CT(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:LT(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PT=/^:\w+$/,jT=3,RT=2,AT=1,FT=10,NT=-2,Vg=e=>e==="*";function IT(e,t){let n=e.split("/"),r=n.length;return n.some(Vg)&&(r+=NT),t&&(r+=RT),n.filter(i=>!Vg(i)).reduce((i,o)=>i+(PT.test(o)?jT:o===""?AT:FT),r)}function LT(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function zT(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=bf({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let c=s.route;o.push({params:r,pathname:Jn([i,f.pathname]),pathnameBase:HT(Jn([i,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(i=Jn([i,f.pathnameBase]))}return o}function bf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=DT(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:d,isOptional:v}=f;if(d==="*"){let m=s[c]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const g=s[c];return v&&!g?u[d]=void 0:u[d]=UT(g||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function DT(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ep(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function MT(e){try{return decodeURI(e)}catch(t){return Ep(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function UT(e,t){try{return decodeURIComponent(e)}catch(n){return Ep(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Wo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function BT(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Fi(e):e;return{pathname:n?n.startsWith("/")?n:VT(n,t):t,search:GT(r),hash:KT(i)}}function VT(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function WT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kp(e,t){let n=WT(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _p(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Fi(e):(i=Vo({},e),_e(!i.pathname||!i.pathname.includes("?"),Wu("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),Wu("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),Wu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else if(r){let c=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),c.pop();i.pathname=d.join("/")}s="/"+c.join("/")}else{let c=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}s=c>=0?t[c]:"/"}let l=BT(i,s),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Jn=e=>e.join("/").replace(/\/\/+/g,"/"),HT=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),GT=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,KT=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qT(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Px=["post","put","patch","delete"];new Set(Px);const YT=["get",...Px];new Set(YT);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ho.apply(this,arguments)}const Vl=w.createContext(null),jx=w.createContext(null),_n=w.createContext(null),Wl=w.createContext(null),On=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Rx=w.createContext(null);function QT(e,t){let{relative:n}=t===void 0?{}:t;Ni()||_e(!1);let{basename:r,navigator:i}=w.useContext(_n),{hash:o,pathname:a,search:s}=Hl(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Jn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Ni(){return w.useContext(Wl)!=null}function Ii(){return Ni()||_e(!1),w.useContext(Wl).location}function Ax(e){w.useContext(_n).static||w.useLayoutEffect(e)}function Fx(){let{isDataRoute:e}=w.useContext(On);return e?fC():XT()}function XT(){Ni()||_e(!1);let e=w.useContext(Vl),{basename:t,future:n,navigator:r}=w.useContext(_n),{matches:i}=w.useContext(On),{pathname:o}=Ii(),a=JSON.stringify(kp(i,n.v7_relativeSplatPath)),s=w.useRef(!1);return Ax(()=>{s.current=!0}),w.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=_p(u,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Jn([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,a,o,e])}const JT=w.createContext(null);function ZT(e){let t=w.useContext(On).outlet;return t&&w.createElement(JT.Provider,{value:e},t)}function Hl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(_n),{matches:i}=w.useContext(On),{pathname:o}=Ii(),a=JSON.stringify(kp(i,r.v7_relativeSplatPath));return w.useMemo(()=>_p(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function eC(e,t){return tC(e,t)}function tC(e,t,n,r){Ni()||_e(!1);let{navigator:i}=w.useContext(_n),{matches:o}=w.useContext(On),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Ii(),f;if(t){var c;let x=typeof t=="string"?Fi(t):t;l==="/"||(c=x.pathname)!=null&&c.startsWith(l)||_e(!1),f=x}else f=u;let d=f.pathname||"/",v=l==="/"?d:d.slice(l.length)||"/",g=TT(e,{pathname:v}),m=aC(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Jn([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Jn([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r);return t&&m?w.createElement(Wl.Provider,{value:{location:Ho({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Dn.Pop}},m):m}function nC(){let e=cC(),t=qT(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}const rC=w.createElement(nC,null);class iC extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(On.Provider,{value:this.props.routeContext},w.createElement(Rx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oC(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Vl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(On.Provider,{value:t},r)}function aC(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));f>=0||_e(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.loader&&c.route.id&&n.loaderData[c.route.id]===void 0&&(!n.errors||n.errors[c.route.id]===void 0)){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}return a.reduceRight((f,c,d)=>{let v,g=!1,m=null,x=null;n&&(v=s&&c.route.id?s[c.route.id]:void 0,m=c.route.errorElement||rC,l&&(u<0&&d===0?(dC("route-fallback",!1),g=!0,x=null):u===d&&(g=!0,x=c.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,d+1)),p=()=>{let y;return v?y=m:g?y=x:c.route.Component?y=w.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=f,w.createElement(oC,{match:c,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?w.createElement(iC,{location:n.location,revalidation:n.revalidation,component:m,error:v,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Nx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nx||{}),Bs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bs||{});function sC(e){let t=w.useContext(Vl);return t||_e(!1),t}function lC(e){let t=w.useContext(jx);return t||_e(!1),t}function uC(e){let t=w.useContext(On);return t||_e(!1),t}function Ix(e){let t=uC(),n=t.matches[t.matches.length-1];return n.route.id||_e(!1),n.route.id}function cC(){var e;let t=w.useContext(Rx),n=lC(Bs.UseRouteError),r=Ix(Bs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function fC(){let{router:e}=sC(Nx.UseNavigateStable),t=Ix(Bs.UseNavigateStable),n=w.useRef(!1);return Ax(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ho({fromRouteId:t},o)))},[e,t])}const Wg={};function dC(e,t,n){!t&&!Wg[e]&&(Wg[e]=!0)}function Lx(e){let{to:t,replace:n,state:r,relative:i}=e;Ni()||_e(!1);let{future:o,static:a}=w.useContext(_n),{matches:s}=w.useContext(On),{pathname:l}=Ii(),u=Fx(),f=_p(t,kp(s,o.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(f);return w.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function pC(e){return ZT(e.context)}function Pn(e){_e(!1)}function hC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Dn.Pop,navigator:o,static:a=!1,future:s}=e;Ni()&&_e(!1);let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:o,static:a,future:Ho({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=Fi(r));let{pathname:f="/",search:c="",hash:d="",state:v=null,key:g="default"}=r,m=w.useMemo(()=>{let x=Wo(f,l);return x==null?null:{location:{pathname:x,search:c,hash:d,state:v,key:g},navigationType:i}},[l,f,c,d,v,g,i]);return m==null?null:w.createElement(_n.Provider,{value:u},w.createElement(Wl.Provider,{children:n,value:m}))}function mC(e){let{children:t,location:n}=e;return eC(Sf(t),n)}new Promise(()=>{});function Sf(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Sf(r.props.children,o));return}r.type!==Pn&&_e(!1),!r.props.index||!r.props.children||_e(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Sf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vs(){return Vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vs.apply(this,arguments)}function zx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function gC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function yC(e,t){return e.button===0&&(!t||t==="_self")&&!gC(e)}const vC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xC=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],wC=w.createContext({isTransitioning:!1}),bC="startTransition",Hg=nc[bC];function SC(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=_T({window:i,v5Compat:!0}));let a=o.current,[s,l]=w.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=w.useCallback(c=>{u&&Hg?Hg(()=>l(c)):l(c)},[l,u]);return w.useLayoutEffect(()=>a.listen(f),[a,f]),w.createElement(hC,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const EC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_C=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,d=zx(t,vC),{basename:v}=w.useContext(_n),g,m=!1;if(typeof u=="string"&&kC.test(u)&&(g=u,EC))try{let y=new URL(window.location.href),S=u.startsWith("//")?new URL(y.protocol+u):new URL(u),E=Wo(S.pathname,v);S.origin===y.origin&&E!=null?u=E+S.search+S.hash:m=!0}catch{}let x=QT(u,{relative:i}),h=$C(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:c});function p(y){r&&r(y),y.defaultPrevented||h(y)}return w.createElement("a",Vs({},d,{href:g||x,onClick:m||o?r:p,ref:n,target:l}))}),Go=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,unstable_viewTransition:u,children:f}=t,c=zx(t,xC),d=Hl(l,{relative:c.relative}),v=Ii(),g=w.useContext(jx),{navigator:m}=w.useContext(_n),x=g!=null&&TC(d)&&u===!0,h=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,p=v.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(p=p.toLowerCase(),y=y?y.toLowerCase():null,h=h.toLowerCase());const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let E=p===h||!a&&p.startsWith(h)&&p.charAt(S)==="/",T=y!=null&&(y===h||!a&&y.startsWith(h)&&y.charAt(h.length)==="/"),_={isActive:E,isPending:T,isTransitioning:x},A=E?r:void 0,B;typeof o=="function"?B=o(_):B=[o,E?"active":null,T?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let D=typeof s=="function"?s(_):s;return w.createElement(_C,Vs({},c,{"aria-current":A,className:B,ref:n,style:D,to:l,unstable_viewTransition:u}),typeof f=="function"?f(_):f)});var Ef;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ef||(Ef={}));var Gg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gg||(Gg={}));function OC(e){let t=w.useContext(Vl);return t||_e(!1),t}function $C(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=Fx(),u=Ii(),f=Hl(e,{relative:a});return w.useCallback(c=>{if(yC(c,n)){c.preventDefault();let d=r!==void 0?r:Us(u)===Us(f);l(e,{replace:d,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s})}},[u,l,f,r,i,n,e,o,a,s])}function TC(e,t){t===void 0&&(t={});let n=w.useContext(wC);n==null&&_e(!1);let{basename:r}=OC(Ef.useViewTransitionState),i=Hl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Wo(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Wo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return bf(i.pathname,a)!=null||bf(i.pathname,o)!=null}const Kg="/water-tracker/assets/Logo-890d13ba.png",qg=$.img`
  width: 102px;
  height: 48px;
`,Dx=e=>e.auth.user,Gl=e=>e.auth.isLoggedIn,CC=e=>e.auth.isRefreshing,PC=()=>{const e=jr(Gl);return b.jsx("div",{children:e?b.jsx(Go,{to:"/home",children:b.jsx(qg,{src:Kg,alt:"logo"})}):b.jsx(Go,{to:"/",children:b.jsx(qg,{src:Kg,alt:"logo"})})})},jC=$.div`
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
`,RC=()=>{const e=jr(Gl);return b.jsx("header",{children:b.jsx(F$,{children:b.jsxs(jC,{children:[b.jsx(PC,{}),e?b.jsx(eF,{}):b.jsx(K3,{})]})})})},Mx="/water-tracker/assets/bottleMob-814a9d12.png",Ux="/water-tracker/assets/bottleMob@2x-17522dc3.png",AC="/water-tracker/assets/bottleTabl-c56ef88b.png",FC="/water-tracker/assets/bottleTabl@2x-5f20a434.png",Bx="/water-tracker/assets/bottleDesc-5e7cc8f5.png",Vx="/water-tracker/assets/bottleDesc@2x-cdf5cc76.png",SF=$.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
`,EF=$.div`
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
      url(${AC}) 1x,
      url(${FC}) 2x
    );
    height: 386px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Bx}) 1x,
      url(${Vx}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,kF=$.div`
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
`,NC=$.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }
`,IC=$.div`
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
`,LC=$.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Yg=$.h3`
  margin-bottom: 16px;
  color: ${e=>e.theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,ja=$.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
`,zC=$.div`
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
`,DC=$.form`
  gap: 16px;

  span {
    margin-right: 24px;
    font-size: 16px;
  }
`,Qg=$.input`
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
`,Hu=$.input`
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
`,MC=$.div`
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
`,UC=$.button`
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
`,BC=({onClose:e})=>{const[t,n]=w.useState("female"),[r,i]=w.useState(""),[o,a]=w.useState(""),[s,l]=w.useState("2.0"),[u,f]=w.useState(""),c=w.useCallback(()=>{if(!r||!o)return;const v=t==="female"?.03:.04,g=t==="female"?.4:.6,m=(r*v+o/60*g).toFixed(2);l(m)},[t,r,o]);w.useEffect(()=>{c()},[c]);const d=async()=>{};return b.jsx(Bl,{onClose:e,title:"My daily norma",children:b.jsxs(NC,{children:[b.jsxs("div",{children:[b.jsxs(IC,{children:[b.jsxs(ja,{children:["For girl: ",b.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),b.jsxs(ja,{children:["For man: ",b.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),b.jsx(zC,{children:b.jsxs("p",{children:[b.jsx("span",{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),b.jsx("div",{children:b.jsxs(LC,{children:[b.jsxs(DC,{children:[b.jsx(Yg,{children:"Calculate your rate:"}),b.jsxs("label",{children:[b.jsx(Qg,{type:"radio",name:"gender",value:"female",checked:t==="female",onChange:()=>n("female")}),b.jsx("span",{children:"For girl"})]}),b.jsxs("label",{children:[b.jsx(Qg,{type:"radio",name:"gender",value:"male",checked:t==="male",onChange:()=>n("male")}),b.jsx("span",{children:"For boy"})]})]}),b.jsxs("div",{children:[b.jsx(ja,{children:"Your weight in kilograms:"}),b.jsx(Hu,{type:"text",placeholder:"0",value:r,onChange:v=>i(v.target.value)})]}),b.jsxs("div",{children:[b.jsx(ja,{children:"Time of active participation in sports or other activities with a high physical load:"}),b.jsx(Hu,{type:"text",placeholder:"0",value:o,onChange:v=>a(v.target.value)})]}),b.jsxs(MC,{children:["The required amount of water in liters per day:"," ",b.jsxs("strong",{children:[s,"L"]})]}),b.jsxs("div",{children:[b.jsx(Yg,{children:"Write down how much water you will drink:"}),b.jsx(Hu,{type:"text",placeholder:"0",value:u,onChange:v=>f(v.target.value)})]}),b.jsx(UC,{onClick:d,children:"Save"})]})})]})})};BC.propTypes={onClose:no.func.isRequired};const _F=$.div`
  position: absolute;
  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
  transform: translate(-50% -50%);
  width: 280px;

  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
`,OF=$.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,$F=$.li`
  display: flex;
  gap: 6px;
`,TF=$.span`
  color: ${({theme:e})=>e.color.accent};
  font-size: 18px;
  font-weight: 500;
`,CF=$.p`
  color: ${({theme:e})=>e.color.accent};
`,PF=$.div`
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
`,jF=$.button`
  width: 14px;
  height: 14px;
  background: transparent;
  color: ${e=>e.active?e.theme.color.accent:e.theme.color.secondaryLightBlue};

  &:hover {
    color: ${e=>e.theme.color.accent};
  }
`,RF=$.div`
  display: flex;
  align-items: baseline;
  position: relative;
  color: ${e=>e.theme.color.accent};
  column-gap: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`,AF=$.p`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  font-size: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
  }
`,FF=$.div`
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
`,NF=$.div`
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
`,IF=$.button`
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
`;function Ar(e){this._maxSize=e,this.clear()}Ar.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ar.prototype.get=function(e){return this._values[e]};Ar.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var VC=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Wx=/^\d+$/,WC=/^\d/,HC=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,GC=/^\s*(['"]?)(.*?)(\1)\s*$/,Op=512,Xg=new Ar(Op),Jg=new Ar(Op),Zg=new Ar(Op),wr={Cache:Ar,split:kf,normalizePath:Gu,setter:function(e){var t=Gu(e);return Jg.get(e)||Jg.set(e,function(r,i){for(var o=0,a=t.length,s=r;o<a-1;){var l=t[o];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;s=s[t[o++]]}s[t[o]]=i})},getter:function(e,t){var n=Gu(e);return Zg.get(e)||Zg.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+($p(n)||Wx.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){KC(Array.isArray(e)?e:kf(e),t,n)}};function Gu(e){return Xg.get(e)||Xg.set(e,kf(e).map(function(t){return t.replace(GC,"$2")}))}function kf(e){return e.match(VC)||[""]}function KC(e,t,n){var r=e.length,i,o,a,s;for(o=0;o<r;o++)i=e[o],i&&(QC(i)&&(i='"'+i+'"'),s=$p(i),a=!s&&/^\d+$/.test(i),t.call(n,i,s,a,o,e))}function $p(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function qC(e){return e.match(WC)&&!e.match(Wx)}function YC(e){return HC.test(e)}function QC(e){return!$p(e)&&(qC(e)||YC(e))}const XC=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Kl=e=>e.match(XC)||[],ql=e=>e[0].toUpperCase()+e.slice(1),Tp=(e,t)=>Kl(e).join(t).toLowerCase(),Hx=e=>Kl(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),JC=e=>ql(Hx(e)),ZC=e=>Tp(e,"_"),eP=e=>Tp(e,"-"),tP=e=>ql(Tp(e," ")),nP=e=>Kl(e).map(ql).join(" ");var Ku={words:Kl,upperFirst:ql,camelCase:Hx,pascalCase:JC,snakeCase:ZC,kebabCase:eP,sentenceCase:tP,titleCase:nP},Cp={exports:{}};Cp.exports=function(e){return Gx(rP(e),e)};Cp.exports.array=Gx;function Gx(e,t){var n=e.length,r=new Array(n),i={},o=n,a=iP(t),s=oP(e);for(t.forEach(function(u){if(!s.has(u[0])||!s.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||l(e[o],o,new Set);return r;function l(u,f,c){if(c.has(u)){var d;try{d=", node was:"+JSON.stringify(u)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!s.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[f]){i[f]=!0;var v=a.get(u)||new Set;if(v=Array.from(v),f=v.length){c.add(u);do{var g=v[--f];l(g,s.get(g),c)}while(f);c.delete(u)}r[--n]=u}}}function rP(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function iP(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function oP(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var aP=Cp.exports;const sP=$i(aP),lP=Object.prototype.toString,uP=Error.prototype.toString,cP=RegExp.prototype.toString,fP=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",dP=/^Symbol\((.*)\)(.*)$/;function pP(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function ey(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return pP(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return fP.call(e).replace(dP,"Symbol($1)");const r=lP.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+uP.call(e)+"]":r==="RegExp"?cP.call(e):null}function Zn(e,t){let n=ey(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=ey(this[r],t);return o!==null?o:i},2)}function Kx(e){return e==null?[]:[].concat(e)}let qx,hP=/\$\{\s*(\w+)\s*\}/g;qx=Symbol.toStringTag;class lt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(hP,(i,o)=>Zn(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[qx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Kx(t).forEach(a=>{if(lt.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,lt)}}let Gt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Zn(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Zn(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${Zn(n,!0)}\``+i}},Nt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},mP={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},_f={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},gP={isValue:"${path} field must be ${value}"},Of={noUnknown:"${path} field has unspecified keys: ${unknown}"},yP={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},vP={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Zn(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Zn(n,!0)}\``}return lt.formatError(Gt.notType,e)}};Object.assign(Object.create(null),{mixed:Gt,string:Nt,number:mP,date:_f,object:Of,array:yP,boolean:gP,tuple:vP});const Pp=e=>e&&e.__isYupSchema__;class Ws{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...s)=>s.every(l=>l===r);return new Ws(t,(s,l)=>{var u;let f=a(...s)?i:o;return(u=f==null?void 0:f(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!Pp(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Ra={context:"$",value:"."};class Fr{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ra.context,this.isValue=this.key[0]===Ra.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Ra.context:this.isValue?Ra.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&wr.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Fr.prototype.__isYupRef=!0;const yr=e=>e==null;function Ur(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},s,l){const{name:u,test:f,params:c,message:d,skipAbsent:v}=e;let{parent:g,context:m,abortEarly:x=a.spec.abortEarly,disableStackTrace:h=a.spec.disableStackTrace}=i;function p(G){return Fr.isRef(G)?G.getValue(n,g,m):G}function y(G={}){var xe;const Q=Object.assign({value:n,originalValue:o,label:a.spec.label,path:G.path||r,spec:a.spec},c,G.params);for(const Te of Object.keys(Q))Q[Te]=p(Q[Te]);const $e=new lt(lt.formatError(G.message||d,Q),n,Q.path,G.type||u,(xe=G.disableStackTrace)!=null?xe:h);return $e.params=Q,$e}const S=x?s:l;let E={path:r,parent:g,type:u,from:i.from,createError:y,resolve:p,options:i,originalValue:o,schema:a};const T=G=>{lt.isError(G)?S(G):G?l(null):S(y())},_=G=>{lt.isError(G)?S(G):s(G)};if(v&&yr(n))return T(!0);let B;try{var D;if(B=f.call(E,n,E),typeof((D=B)==null?void 0:D.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(B).then(T,_)}}catch(G){_(G);return}T(B)}return t.OPTIONS=e,t}function xP(e,t,n,r=n){let i,o,a;return t?(wr.forEach(t,(s,l,u)=>{let f=l?s.slice(1,s.length-1):s;e=e.resolve({context:r,parent:i,value:n});let c=e.type==="tuple",d=u?parseInt(f,10):0;if(e.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&d>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[d],e=c?e.spec.types[d]:e.innerType}if(!u){if(!e.fields||!e.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[f],e=e.fields[f]}o=f,a=l?"["+s+"]":"."+s}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class Hs extends Set{describe(){const t=[];for(const n of this.values())t.push(Fr.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Hs(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ri(e,t=new Map){if(Pp(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=ri(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,ri(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(ri(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=ri(i,t)}else throw Error(`Unable to clone ${e}`);return n}class nn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Hs,this._blacklist=new Hs,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Gt.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ri(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,o;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&yr(o))return o;let a=Zn(t),s=Zn(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:s=this.spec.strict}=n,l=t;s||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let f of Object.values(this.internalTests))f&&u.push(f);this.runTests({path:o,value:l,originalValue:a,options:n,tests:u},r,f=>{if(f.length)return i(f,l);this.runTests({path:o,value:l,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:s,path:l,options:u}=t,f=m=>{i||(i=!0,n(m,a))},c=m=>{i||(i=!0,r(m,a))},d=o.length,v=[];if(!d)return c([]);let g={value:a,originalValue:s,path:l,options:u,schema:this};for(let m=0;m<o.length;m++){const x=o[m];x(g,f,function(p){p&&(Array.isArray(p)?v.push(...p):v.push(p)),--d<=0&&c(v)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof s=="number";let u=r[s];const f=Object.assign({},a,{strict:!0,parent:r,value:u,originalValue:o[s],key:void 0,[l?"index":"key"]:s,path:l||s.includes(".")?`${i||""}[${u?s:`"${s}"`}]`:(i?`${i}.`:"")+t});return(c,d,v)=>this.resolve(f)._validate(u,f,d,v)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((a,s)=>i._validate(t,n,(l,u)=>{lt.isError(l)&&(l.value=u),s(l)},(l,u)=>{l.length?s(new lt(l,u,void 0,void 0,o)):a(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o,a=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(s,l)=>{throw lt.isError(s)&&(s.value=l),s},(s,l)=>{if(s.length)throw new lt(s,t,void 0,void 0,a);o=l}),o}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(lt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(lt.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):ri(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Ur({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Ur({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Gt.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Gt.notNull){return this.nullability(!1,t)}required(t=Gt.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Gt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Ur(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Kx(t).map(o=>new Fr(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new Ws(i,n):Ws.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Ur({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Gt.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Ur({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=Gt.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Ur({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,f)=>f.findIndex(c=>c.name===l.name)===u)}}}nn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])nn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=xP(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])nn.prototype[e]=nn.prototype.oneOf;for(const e of["not","nope"])nn.prototype[e]=nn.prototype.notOneOf;let wP=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,bP=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,SP=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,EP=e=>yr(e)||e===e.trim(),kP={}.toString();function Vr(){return new Yx}class Yx extends nn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===kP?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Gt.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Nt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Nt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Nt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||Nt.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=Nt.email){return this.matches(wP,{name:"email",message:t,excludeEmptyString:!0})}url(t=Nt.url){return this.matches(bP,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Nt.uuid){return this.matches(SP,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Nt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:EP})}lowercase(t=Nt.lowercase){return this.transform(n=>yr(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>yr(n)||n===n.toLowerCase()})}uppercase(t=Nt.uppercase){return this.transform(n=>yr(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>yr(n)||n===n.toUpperCase()})}}Vr.prototype=Yx.prototype;const _P=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function cn(e,t=0){return Number(e)||t}function OP(e){const t=_P.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:cn(t[1]),month:cn(t[2],1)-1,day:cn(t[3],1),hour:cn(t[4]),minute:cn(t[5]),second:cn(t[6]),millisecond:t[7]?cn(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:cn(t[10]),minuteOffset:cn(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let $P=new Date(""),TP=e=>Object.prototype.toString.call(e)==="[object Date]";class Yl extends nn{constructor(){super({type:"date",check(t){return TP(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=OP(t),isNaN(t)?Yl.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Fr.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=_f.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=_f.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Yl.INVALID_DATE=$P;Yl.prototype;function CP(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,s])=>`${a}-${s}`));function o(a,s){let l=wr.split(a)[0];r.add(l),i.has(`${s}-${l}`)||n.push([s,l])}for(const a of Object.keys(e)){let s=e[a];r.add(a),Fr.isRef(s)&&s.isSibling?o(s.path,a):Pp(s)&&"deps"in s&&s.deps.forEach(l=>o(l,a))}return sP.array(Array.from(r),n).reverse()}function ty(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function Qx(e){return(t,n)=>ty(e,t)-ty(e,n)}const PP=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function ss(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=ss(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=ss(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(ss)}):"optional"in e?e.optional():e}const jP=(e,t)=>{const n=[...wr.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=wr.getter(wr.join(n),!0)(e);return!!(i&&r in i)};let ny=e=>Object.prototype.toString.call(e)==="[object Object]";function RP(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const AP=Qx([]);function Xx(e){return new Jx(e)}class Jx extends nn{constructor(t){super({type:"object",check(n){return ny(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=AP,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),f=!1;for(const c of s){let d=o[c],v=c in i;if(d){let g,m=i[c];u.path=(n.path?`${n.path}.`:"")+c,d=d.resolve({value:m,context:n.context,parent:l});let x=d instanceof nn?d.spec:void 0,h=x==null?void 0:x.strict;if(x!=null&&x.strip){f=f||c in i;continue}g=!n.__validating||!h?d.cast(i[c],u):i[c],g!==void 0&&(l[c]=g)}else v&&!a&&(l[c]=i[c]);(v!==c in l||l[c]!==i[c])&&(f=!0)}return f?l:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:s=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(l,u)=>{if(!s||!ny(u)){i(l,u);return}a=a||u;let f=[];for(let c of this._nodes){let d=this.fields[c];!d||Fr.isRef(d)||f.push(d.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:a}))}this.runTests({tests:f,value:u,originalValue:a,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const o=this.fields[r];let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n[r]=o&&"getDefault"in o?o.getDefault(a):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=CP(t,n),r._sortErrors=Qx(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return ss(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=wr.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return jP(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(PP)}noUnknown(t=!0,n=Of.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=RP(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Of.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Ku.camelCase)}snakeCase(){return this.transformKeys(Ku.snakeCase)}constantCase(){return this.transformKeys(t=>Ku.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[o,a]of Object.entries(n.fields)){var i;let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[o]})),r.fields[o]=a.describe(s)}return r}}Xx.prototype=Jx.prototype;const LF=$.div`
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
`,zF=$.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
  margin-bottom: 12px;
`,DF=$.div`
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
`,MF=$.button`
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
`,UF=$.svg`
  width: 24px;
  height: 24px;
  stroke: ${e=>e.theme.color.accent};
`,BF=$.div`
  margin-bottom: 24px;
`,VF=$.input`
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
`,WF=$.div`
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
`,HF=$.button`
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
`,GF=$.div`
  margin-bottom: 24px;
`,KF=$.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid #d7e3ff;
`,qF=$.div`
  display: flex;
  align-items: center;
`,YF=$.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,QF=$.ul`
  height: 212px;
  overflow: auto;
`,XF=$.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #407bff;
  margin-right: 16px;
`,JF=$.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: #2f2f2f;
`,ZF=$.svg`
  width: 26px;
  height: 26px;
  margin-right: 12px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,eN=$.div`
  display: flex;
  gap: 18px;
`,tN=$.button`
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
`,nN=$.button`
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
`,rN=$.button`
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
`,iN=$.div`
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
`,oN=$.input`
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
`,aN=$.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.accent};
`,sN=$.div`
  position: relative;
  height: 102px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 356px;
    height: 90px;
  }
`,lN=$.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,uN=$.span`
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
`,cN=$.span`
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
`,fN=$.span`
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
`,dN=$.button`
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
`,pN=$.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${e=>e.theme.color.white};
`;var FP=function(t){return NP(t)&&!IP(t)};function NP(e){return!!e&&typeof e=="object"}function IP(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||DP(e)}var LP=typeof Symbol=="function"&&Symbol.for,zP=LP?Symbol.for("react.element"):60103;function DP(e){return e.$$typeof===zP}function MP(e){return Array.isArray(e)?[]:{}}function Gs(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ko(MP(e),e,t):e}function UP(e,t,n){return e.concat(t).map(function(r){return Gs(r,n)})}function BP(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Gs(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Gs(t[i],n):r[i]=Ko(e[i],t[i],n)}),r}function Ko(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||UP,n.isMergeableObject=n.isMergeableObject||FP;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):BP(e,t,n):Gs(t,n)}Ko.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return Ko(r,i,n)},{})};var $f=Ko,VP=typeof global=="object"&&global&&global.Object===Object&&global;const Zx=VP;var WP=typeof self=="object"&&self&&self.Object===Object&&self,HP=Zx||WP||Function("return this")();const an=HP;var GP=an.Symbol;const ir=GP;var ew=Object.prototype,KP=ew.hasOwnProperty,qP=ew.toString,Yi=ir?ir.toStringTag:void 0;function YP(e){var t=KP.call(e,Yi),n=e[Yi];try{e[Yi]=void 0;var r=!0}catch{}var i=qP.call(e);return r&&(t?e[Yi]=n:delete e[Yi]),i}var QP=Object.prototype,XP=QP.toString;function JP(e){return XP.call(e)}var ZP="[object Null]",ej="[object Undefined]",ry=ir?ir.toStringTag:void 0;function Nr(e){return e==null?e===void 0?ej:ZP:ry&&ry in Object(e)?YP(e):JP(e)}function tw(e,t){return function(n){return e(t(n))}}var tj=tw(Object.getPrototypeOf,Object);const jp=tj;function Ir(e){return e!=null&&typeof e=="object"}var nj="[object Object]",rj=Function.prototype,ij=Object.prototype,nw=rj.toString,oj=ij.hasOwnProperty,aj=nw.call(Object);function iy(e){if(!Ir(e)||Nr(e)!=nj)return!1;var t=jp(e);if(t===null)return!0;var n=oj.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&nw.call(n)==aj}var oy=Array.isArray,ay=Object.keys,sj=Object.prototype.hasOwnProperty,lj=typeof Element<"u";function Tf(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=oy(e),r=oy(t),i,o,a;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!Tf(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,f=t instanceof RegExp;if(u!=f)return!1;if(u&&f)return e.toString()==t.toString();var c=ay(e);if(o=c.length,o!==ay(t).length)return!1;for(i=o;i--!==0;)if(!sj.call(t,c[i]))return!1;if(lj&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(a=c[i],!(a==="_owner"&&e.$$typeof)&&!Tf(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var uj=function(t,n){try{return Tf(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const An=$i(uj);var cj=!0;function rw(e,t){if(!cj){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function fj(){this.__data__=[],this.size=0}function iw(e,t){return e===t||e!==e&&t!==t}function Ql(e,t){for(var n=e.length;n--;)if(iw(e[n][0],t))return n;return-1}var dj=Array.prototype,pj=dj.splice;function hj(e){var t=this.__data__,n=Ql(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():pj.call(t,n,1),--this.size,!0}function mj(e){var t=this.__data__,n=Ql(t,e);return n<0?void 0:t[n][1]}function gj(e){return Ql(this.__data__,e)>-1}function yj(e,t){var n=this.__data__,r=Ql(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function $n(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$n.prototype.clear=fj;$n.prototype.delete=hj;$n.prototype.get=mj;$n.prototype.has=gj;$n.prototype.set=yj;function vj(){this.__data__=new $n,this.size=0}function xj(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function wj(e){return this.__data__.get(e)}function bj(e){return this.__data__.has(e)}function la(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Sj="[object AsyncFunction]",Ej="[object Function]",kj="[object GeneratorFunction]",_j="[object Proxy]";function ow(e){if(!la(e))return!1;var t=Nr(e);return t==Ej||t==kj||t==Sj||t==_j}var Oj=an["__core-js_shared__"];const qu=Oj;var sy=function(){var e=/[^.]+$/.exec(qu&&qu.keys&&qu.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function $j(e){return!!sy&&sy in e}var Tj=Function.prototype,Cj=Tj.toString;function Lr(e){if(e!=null){try{return Cj.call(e)}catch{}try{return e+""}catch{}}return""}var Pj=/[\\^$.*+?()[\]{}|]/g,jj=/^\[object .+?Constructor\]$/,Rj=Function.prototype,Aj=Object.prototype,Fj=Rj.toString,Nj=Aj.hasOwnProperty,Ij=RegExp("^"+Fj.call(Nj).replace(Pj,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Lj(e){if(!la(e)||$j(e))return!1;var t=ow(e)?Ij:jj;return t.test(Lr(e))}function zj(e,t){return e==null?void 0:e[t]}function zr(e,t){var n=zj(e,t);return Lj(n)?n:void 0}var Dj=zr(an,"Map");const qo=Dj;var Mj=zr(Object,"create");const Yo=Mj;function Uj(){this.__data__=Yo?Yo(null):{},this.size=0}function Bj(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Vj="__lodash_hash_undefined__",Wj=Object.prototype,Hj=Wj.hasOwnProperty;function Gj(e){var t=this.__data__;if(Yo){var n=t[e];return n===Vj?void 0:n}return Hj.call(t,e)?t[e]:void 0}var Kj=Object.prototype,qj=Kj.hasOwnProperty;function Yj(e){var t=this.__data__;return Yo?t[e]!==void 0:qj.call(t,e)}var Qj="__lodash_hash_undefined__";function Xj(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Yo&&t===void 0?Qj:t,this}function $r(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$r.prototype.clear=Uj;$r.prototype.delete=Bj;$r.prototype.get=Gj;$r.prototype.has=Yj;$r.prototype.set=Xj;function Jj(){this.size=0,this.__data__={hash:new $r,map:new(qo||$n),string:new $r}}function Zj(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Xl(e,t){var n=e.__data__;return Zj(t)?n[typeof t=="string"?"string":"hash"]:n.map}function eR(e){var t=Xl(this,e).delete(e);return this.size-=t?1:0,t}function tR(e){return Xl(this,e).get(e)}function nR(e){return Xl(this,e).has(e)}function rR(e,t){var n=Xl(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function lr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}lr.prototype.clear=Jj;lr.prototype.delete=eR;lr.prototype.get=tR;lr.prototype.has=nR;lr.prototype.set=rR;var iR=200;function oR(e,t){var n=this.__data__;if(n instanceof $n){var r=n.__data__;if(!qo||r.length<iR-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new lr(r)}return n.set(e,t),this.size=n.size,this}function Li(e){var t=this.__data__=new $n(e);this.size=t.size}Li.prototype.clear=vj;Li.prototype.delete=xj;Li.prototype.get=wj;Li.prototype.has=bj;Li.prototype.set=oR;function aR(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var sR=function(){try{var e=zr(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ly=sR;function aw(e,t,n){t=="__proto__"&&ly?ly(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var lR=Object.prototype,uR=lR.hasOwnProperty;function sw(e,t,n){var r=e[t];(!(uR.call(e,t)&&iw(r,n))||n===void 0&&!(t in e))&&aw(e,t,n)}function Jl(e,t,n,r){var i=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var s=t[o],l=r?r(n[s],e[s],s,n,e):void 0;l===void 0&&(l=e[s]),i?aw(n,s,l):sw(n,s,l)}return n}function cR(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var fR="[object Arguments]";function uy(e){return Ir(e)&&Nr(e)==fR}var lw=Object.prototype,dR=lw.hasOwnProperty,pR=lw.propertyIsEnumerable,hR=uy(function(){return arguments}())?uy:function(e){return Ir(e)&&dR.call(e,"callee")&&!pR.call(e,"callee")};const mR=hR;var gR=Array.isArray;const ua=gR;function yR(){return!1}var uw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,cy=uw&&typeof module=="object"&&module&&!module.nodeType&&module,vR=cy&&cy.exports===uw,fy=vR?an.Buffer:void 0,xR=fy?fy.isBuffer:void 0,wR=xR||yR;const cw=wR;var bR=9007199254740991,SR=/^(?:0|[1-9]\d*)$/;function ER(e,t){var n=typeof e;return t=t??bR,!!t&&(n=="number"||n!="symbol"&&SR.test(e))&&e>-1&&e%1==0&&e<t}var kR=9007199254740991;function fw(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=kR}var _R="[object Arguments]",OR="[object Array]",$R="[object Boolean]",TR="[object Date]",CR="[object Error]",PR="[object Function]",jR="[object Map]",RR="[object Number]",AR="[object Object]",FR="[object RegExp]",NR="[object Set]",IR="[object String]",LR="[object WeakMap]",zR="[object ArrayBuffer]",DR="[object DataView]",MR="[object Float32Array]",UR="[object Float64Array]",BR="[object Int8Array]",VR="[object Int16Array]",WR="[object Int32Array]",HR="[object Uint8Array]",GR="[object Uint8ClampedArray]",KR="[object Uint16Array]",qR="[object Uint32Array]",ye={};ye[MR]=ye[UR]=ye[BR]=ye[VR]=ye[WR]=ye[HR]=ye[GR]=ye[KR]=ye[qR]=!0;ye[_R]=ye[OR]=ye[zR]=ye[$R]=ye[DR]=ye[TR]=ye[CR]=ye[PR]=ye[jR]=ye[RR]=ye[AR]=ye[FR]=ye[NR]=ye[IR]=ye[LR]=!1;function YR(e){return Ir(e)&&fw(e.length)&&!!ye[Nr(e)]}function Rp(e){return function(t){return e(t)}}var dw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mo=dw&&typeof module=="object"&&module&&!module.nodeType&&module,QR=mo&&mo.exports===dw,Yu=QR&&Zx.process,XR=function(){try{var e=mo&&mo.require&&mo.require("util").types;return e||Yu&&Yu.binding&&Yu.binding("util")}catch{}}();const Oi=XR;var dy=Oi&&Oi.isTypedArray,JR=dy?Rp(dy):YR;const ZR=JR;var eA=Object.prototype,tA=eA.hasOwnProperty;function pw(e,t){var n=ua(e),r=!n&&mR(e),i=!n&&!r&&cw(e),o=!n&&!r&&!i&&ZR(e),a=n||r||i||o,s=a?cR(e.length,String):[],l=s.length;for(var u in e)(t||tA.call(e,u))&&!(a&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||ER(u,l)))&&s.push(u);return s}var nA=Object.prototype;function Ap(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||nA;return e===n}var rA=tw(Object.keys,Object);const iA=rA;var oA=Object.prototype,aA=oA.hasOwnProperty;function sA(e){if(!Ap(e))return iA(e);var t=[];for(var n in Object(e))aA.call(e,n)&&n!="constructor"&&t.push(n);return t}function hw(e){return e!=null&&fw(e.length)&&!ow(e)}function Fp(e){return hw(e)?pw(e):sA(e)}function lA(e,t){return e&&Jl(t,Fp(t),e)}function uA(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var cA=Object.prototype,fA=cA.hasOwnProperty;function dA(e){if(!la(e))return uA(e);var t=Ap(e),n=[];for(var r in e)r=="constructor"&&(t||!fA.call(e,r))||n.push(r);return n}function Np(e){return hw(e)?pw(e,!0):dA(e)}function pA(e,t){return e&&Jl(t,Np(t),e)}var mw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,py=mw&&typeof module=="object"&&module&&!module.nodeType&&module,hA=py&&py.exports===mw,hy=hA?an.Buffer:void 0,my=hy?hy.allocUnsafe:void 0;function mA(e,t){if(t)return e.slice();var n=e.length,r=my?my(n):new e.constructor(n);return e.copy(r),r}function gw(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function gA(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function yw(){return[]}var yA=Object.prototype,vA=yA.propertyIsEnumerable,gy=Object.getOwnPropertySymbols,xA=gy?function(e){return e==null?[]:(e=Object(e),gA(gy(e),function(t){return vA.call(e,t)}))}:yw;const Ip=xA;function wA(e,t){return Jl(e,Ip(e),t)}function vw(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var bA=Object.getOwnPropertySymbols,SA=bA?function(e){for(var t=[];e;)vw(t,Ip(e)),e=jp(e);return t}:yw;const xw=SA;function EA(e,t){return Jl(e,xw(e),t)}function ww(e,t,n){var r=t(e);return ua(e)?r:vw(r,n(e))}function kA(e){return ww(e,Fp,Ip)}function _A(e){return ww(e,Np,xw)}var OA=zr(an,"DataView");const Cf=OA;var $A=zr(an,"Promise");const Pf=$A;var TA=zr(an,"Set");const jf=TA;var CA=zr(an,"WeakMap");const Rf=CA;var yy="[object Map]",PA="[object Object]",vy="[object Promise]",xy="[object Set]",wy="[object WeakMap]",by="[object DataView]",jA=Lr(Cf),RA=Lr(qo),AA=Lr(Pf),FA=Lr(jf),NA=Lr(Rf),pr=Nr;(Cf&&pr(new Cf(new ArrayBuffer(1)))!=by||qo&&pr(new qo)!=yy||Pf&&pr(Pf.resolve())!=vy||jf&&pr(new jf)!=xy||Rf&&pr(new Rf)!=wy)&&(pr=function(e){var t=Nr(e),n=t==PA?e.constructor:void 0,r=n?Lr(n):"";if(r)switch(r){case jA:return by;case RA:return yy;case AA:return vy;case FA:return xy;case NA:return wy}return t});const Lp=pr;var IA=Object.prototype,LA=IA.hasOwnProperty;function zA(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&LA.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var DA=an.Uint8Array;const Sy=DA;function zp(e){var t=new e.constructor(e.byteLength);return new Sy(t).set(new Sy(e)),t}function MA(e,t){var n=t?zp(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var UA=/\w*$/;function BA(e){var t=new e.constructor(e.source,UA.exec(e));return t.lastIndex=e.lastIndex,t}var Ey=ir?ir.prototype:void 0,ky=Ey?Ey.valueOf:void 0;function VA(e){return ky?Object(ky.call(e)):{}}function WA(e,t){var n=t?zp(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var HA="[object Boolean]",GA="[object Date]",KA="[object Map]",qA="[object Number]",YA="[object RegExp]",QA="[object Set]",XA="[object String]",JA="[object Symbol]",ZA="[object ArrayBuffer]",e4="[object DataView]",t4="[object Float32Array]",n4="[object Float64Array]",r4="[object Int8Array]",i4="[object Int16Array]",o4="[object Int32Array]",a4="[object Uint8Array]",s4="[object Uint8ClampedArray]",l4="[object Uint16Array]",u4="[object Uint32Array]";function c4(e,t,n){var r=e.constructor;switch(t){case ZA:return zp(e);case HA:case GA:return new r(+e);case e4:return MA(e,n);case t4:case n4:case r4:case i4:case o4:case a4:case s4:case l4:case u4:return WA(e,n);case KA:return new r;case qA:case XA:return new r(e);case YA:return BA(e);case QA:return new r;case JA:return VA(e)}}var _y=Object.create,f4=function(){function e(){}return function(t){if(!la(t))return{};if(_y)return _y(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const d4=f4;function p4(e){return typeof e.constructor=="function"&&!Ap(e)?d4(jp(e)):{}}var h4="[object Map]";function m4(e){return Ir(e)&&Lp(e)==h4}var Oy=Oi&&Oi.isMap,g4=Oy?Rp(Oy):m4;const y4=g4;var v4="[object Set]";function x4(e){return Ir(e)&&Lp(e)==v4}var $y=Oi&&Oi.isSet,w4=$y?Rp($y):x4;const b4=w4;var S4=1,E4=2,k4=4,bw="[object Arguments]",_4="[object Array]",O4="[object Boolean]",$4="[object Date]",T4="[object Error]",Sw="[object Function]",C4="[object GeneratorFunction]",P4="[object Map]",j4="[object Number]",Ew="[object Object]",R4="[object RegExp]",A4="[object Set]",F4="[object String]",N4="[object Symbol]",I4="[object WeakMap]",L4="[object ArrayBuffer]",z4="[object DataView]",D4="[object Float32Array]",M4="[object Float64Array]",U4="[object Int8Array]",B4="[object Int16Array]",V4="[object Int32Array]",W4="[object Uint8Array]",H4="[object Uint8ClampedArray]",G4="[object Uint16Array]",K4="[object Uint32Array]",pe={};pe[bw]=pe[_4]=pe[L4]=pe[z4]=pe[O4]=pe[$4]=pe[D4]=pe[M4]=pe[U4]=pe[B4]=pe[V4]=pe[P4]=pe[j4]=pe[Ew]=pe[R4]=pe[A4]=pe[F4]=pe[N4]=pe[W4]=pe[H4]=pe[G4]=pe[K4]=!0;pe[T4]=pe[Sw]=pe[I4]=!1;function go(e,t,n,r,i,o){var a,s=t&S4,l=t&E4,u=t&k4;if(n&&(a=i?n(e,r,i,o):n(e)),a!==void 0)return a;if(!la(e))return e;var f=ua(e);if(f){if(a=zA(e),!s)return gw(e,a)}else{var c=Lp(e),d=c==Sw||c==C4;if(cw(e))return mA(e,s);if(c==Ew||c==bw||d&&!i){if(a=l||d?{}:p4(e),!s)return l?EA(e,pA(a,e)):wA(e,lA(a,e))}else{if(!pe[c])return i?e:{};a=c4(e,c,s)}}o||(o=new Li);var v=o.get(e);if(v)return v;o.set(e,a),b4(e)?e.forEach(function(x){a.add(go(x,t,n,x,e,o))}):y4(e)&&e.forEach(function(x,h){a.set(h,go(x,t,n,h,e,o))});var g=u?l?_A:kA:l?Np:Fp,m=f?void 0:g(e);return aR(m||e,function(x,h){m&&(h=x,x=e[h]),sw(a,h,go(x,t,n,h,e,o))}),a}var q4=4;function Ty(e){return go(e,q4)}function kw(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var Y4="[object Symbol]";function Dp(e){return typeof e=="symbol"||Ir(e)&&Nr(e)==Y4}var Q4="Expected a function";function Mp(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Q4);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Mp.Cache||lr),n}Mp.Cache=lr;var X4=500;function J4(e){var t=Mp(e,function(r){return n.size===X4&&n.clear(),r}),n=t.cache;return t}var Z4=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,e3=/\\(\\)?/g,t3=J4(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Z4,function(n,r,i,o){t.push(i?o.replace(e3,"$1"):r||n)}),t});const n3=t3;var r3=1/0;function i3(e){if(typeof e=="string"||Dp(e))return e;var t=e+"";return t=="0"&&1/e==-r3?"-0":t}var o3=1/0,Cy=ir?ir.prototype:void 0,Py=Cy?Cy.toString:void 0;function _w(e){if(typeof e=="string")return e;if(ua(e))return kw(e,_w)+"";if(Dp(e))return Py?Py.call(e):"";var t=e+"";return t=="0"&&1/e==-o3?"-0":t}function a3(e){return e==null?"":_w(e)}function Ow(e){return ua(e)?kw(e,i3):Dp(e)?[e]:gw(n3(a3(e)))}var s3=1,l3=4;function u3(e){return go(e,s3|l3)}function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function $w(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Mn(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function jy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Zl=w.createContext(void 0);Zl.displayName="FormikContext";var c3=Zl.Provider,f3=Zl.Consumer;function Tw(){var e=w.useContext(Zl);return e||rw(!1),e}var Ry=function(t){return Array.isArray(t)&&t.length===0},Ge=function(t){return typeof t=="function"},ca=function(t){return t!==null&&typeof t=="object"},d3=function(t){return String(Math.floor(Number(t)))===t},Qu=function(t){return Object.prototype.toString.call(t)==="[object String]"},Cw=function(t){return w.Children.count(t)===0},Xu=function(t){return ca(t)&&Ge(t.then)};function be(e,t,n,r){r===void 0&&(r=0);for(var i=Ow(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function tn(e,t,n){for(var r=Ty(e),i=r,o=0,a=Ow(t);o<a.length-1;o++){var s=a[o],l=be(e,a.slice(0,o+1));if(l&&(ca(l)||Array.isArray(l)))i=i[s]=Ty(l);else{var u=a[o+1];i=i[s]=d3(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[a[o]]===n?e:(n===void 0?delete i[a[o]]:i[a[o]]=n,o===0&&n===void 0&&delete r[a[o]],r)}function Pw(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var a=o[i],s=e[a];ca(s)?n.get(s)||(n.set(s,!0),r[a]=Array.isArray(s)?[]:{},Pw(s,t,n,r[a])):r[a]=t}return r}function p3(e,t){switch(t.type){case"SET_VALUES":return le({},e,{values:t.payload});case"SET_TOUCHED":return le({},e,{touched:t.payload});case"SET_ERRORS":return An(e.errors,t.payload)?e:le({},e,{errors:t.payload});case"SET_STATUS":return le({},e,{status:t.payload});case"SET_ISSUBMITTING":return le({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return le({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return le({},e,{values:tn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return le({},e,{touched:tn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return le({},e,{errors:tn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return le({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return le({},e,{touched:Pw(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return le({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return le({},e,{isSubmitting:!1});default:return e}}var ur={},Aa={};function h3(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,o=e.validateOnMount,a=o===void 0?!1:o,s=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,f=e.onSubmit,c=Mn(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=le({validateOnChange:n,validateOnBlur:i,validateOnMount:a,onSubmit:f},c),v=w.useRef(d.initialValues),g=w.useRef(d.initialErrors||ur),m=w.useRef(d.initialTouched||Aa),x=w.useRef(d.initialStatus),h=w.useRef(!1),p=w.useRef({});w.useEffect(function(){return h.current=!0,function(){h.current=!1}},[]);var y=w.useState(0),S=y[1],E=w.useRef({values:d.initialValues,errors:d.initialErrors||ur,touched:d.initialTouched||Aa,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=E.current,_=w.useCallback(function(k){var I=E.current;E.current=p3(I,k),I!==E.current&&S(function(P){return P+1})},[]),A=w.useCallback(function(k,I){return new Promise(function(P,L){var q=d.validate(k,I);q==null?P(ur):Xu(q)?q.then(function(ne){P(ne||ur)},function(ne){L(ne)}):P(q)})},[d.validate]),B=w.useCallback(function(k,I){var P=d.validationSchema,L=Ge(P)?P(I):P,q=I&&L.validateAt?L.validateAt(I,k):y3(k,L);return new Promise(function(ne,de){q.then(function(){ne(ur)},function(ln){ln.name==="ValidationError"?ne(g3(ln)):de(ln)})})},[d.validationSchema]),D=w.useCallback(function(k,I){return new Promise(function(P){return P(p.current[k].validate(I))})},[]),G=w.useCallback(function(k){var I=Object.keys(p.current).filter(function(L){return Ge(p.current[L].validate)}),P=I.length>0?I.map(function(L){return D(L,be(k,L))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(P).then(function(L){return L.reduce(function(q,ne,de){return ne==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ne&&(q=tn(q,I[de],ne)),q},{})})},[D]),xe=w.useCallback(function(k){return Promise.all([G(k),d.validationSchema?B(k):{},d.validate?A(k):{}]).then(function(I){var P=I[0],L=I[1],q=I[2],ne=$f.all([P,L,q],{arrayMerge:v3});return ne})},[d.validate,d.validationSchema,G,A,B]),Q=Et(function(k){return k===void 0&&(k=T.values),_({type:"SET_ISVALIDATING",payload:!0}),xe(k).then(function(I){return h.current&&(_({type:"SET_ISVALIDATING",payload:!1}),_({type:"SET_ERRORS",payload:I})),I})});w.useEffect(function(){a&&h.current===!0&&An(v.current,d.initialValues)&&Q(v.current)},[a,Q]);var $e=w.useCallback(function(k){var I=k&&k.values?k.values:v.current,P=k&&k.errors?k.errors:g.current?g.current:d.initialErrors||{},L=k&&k.touched?k.touched:m.current?m.current:d.initialTouched||{},q=k&&k.status?k.status:x.current?x.current:d.initialStatus;v.current=I,g.current=P,m.current=L,x.current=q;var ne=function(){_({type:"RESET_FORM",payload:{isSubmitting:!!k&&!!k.isSubmitting,errors:P,touched:L,status:q,values:I,isValidating:!!k&&!!k.isValidating,submitCount:k&&k.submitCount&&typeof k.submitCount=="number"?k.submitCount:0}})};if(d.onReset){var de=d.onReset(T.values,je);Xu(de)?de.then(ne):ne()}else ne()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);w.useEffect(function(){h.current===!0&&!An(v.current,d.initialValues)&&u&&(v.current=d.initialValues,$e(),a&&Q(v.current))},[u,d.initialValues,$e,a,Q]),w.useEffect(function(){u&&h.current===!0&&!An(g.current,d.initialErrors)&&(g.current=d.initialErrors||ur,_({type:"SET_ERRORS",payload:d.initialErrors||ur}))},[u,d.initialErrors]),w.useEffect(function(){u&&h.current===!0&&!An(m.current,d.initialTouched)&&(m.current=d.initialTouched||Aa,_({type:"SET_TOUCHED",payload:d.initialTouched||Aa}))},[u,d.initialTouched]),w.useEffect(function(){u&&h.current===!0&&!An(x.current,d.initialStatus)&&(x.current=d.initialStatus,_({type:"SET_STATUS",payload:d.initialStatus}))},[u,d.initialStatus,d.initialTouched]);var Te=Et(function(k){if(p.current[k]&&Ge(p.current[k].validate)){var I=be(T.values,k),P=p.current[k].validate(I);return Xu(P)?(_({type:"SET_ISVALIDATING",payload:!0}),P.then(function(L){return L}).then(function(L){_({type:"SET_FIELD_ERROR",payload:{field:k,value:L}}),_({type:"SET_ISVALIDATING",payload:!1})})):(_({type:"SET_FIELD_ERROR",payload:{field:k,value:P}}),Promise.resolve(P))}else if(d.validationSchema)return _({type:"SET_ISVALIDATING",payload:!0}),B(T.values,k).then(function(L){return L}).then(function(L){_({type:"SET_FIELD_ERROR",payload:{field:k,value:be(L,k)}}),_({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),At=w.useCallback(function(k,I){var P=I.validate;p.current[k]={validate:P}},[]),Ve=w.useCallback(function(k){delete p.current[k]},[]),F=Et(function(k,I){_({type:"SET_TOUCHED",payload:k});var P=I===void 0?i:I;return P?Q(T.values):Promise.resolve()}),W=w.useCallback(function(k){_({type:"SET_ERRORS",payload:k})},[]),H=Et(function(k,I){var P=Ge(k)?k(T.values):k;_({type:"SET_VALUES",payload:P});var L=I===void 0?n:I;return L?Q(P):Promise.resolve()}),ie=w.useCallback(function(k,I){_({type:"SET_FIELD_ERROR",payload:{field:k,value:I}})},[]),R=Et(function(k,I,P){_({type:"SET_FIELD_VALUE",payload:{field:k,value:I}});var L=P===void 0?n:P;return L?Q(tn(T.values,k,I)):Promise.resolve()}),z=w.useCallback(function(k,I){var P=I,L=k,q;if(!Qu(k)){k.persist&&k.persist();var ne=k.target?k.target:k.currentTarget,de=ne.type,ln=ne.name,eu=ne.id,tu=ne.value,Aw=ne.checked,bF=ne.outerHTML,Vp=ne.options,Fw=ne.multiple;P=I||ln||eu,L=/number|range/.test(de)?(q=parseFloat(tu),isNaN(q)?"":q):/checkbox/.test(de)?w3(be(T.values,P),Aw,tu):Vp&&Fw?x3(Vp):tu}P&&R(P,L)},[R,T.values]),M=Et(function(k){if(Qu(k))return function(I){return z(I,k)};z(k)}),V=Et(function(k,I,P){I===void 0&&(I=!0),_({type:"SET_FIELD_TOUCHED",payload:{field:k,value:I}});var L=P===void 0?i:P;return L?Q(T.values):Promise.resolve()}),O=w.useCallback(function(k,I){k.persist&&k.persist();var P=k.target,L=P.name,q=P.id,ne=P.outerHTML,de=I||L||q;V(de,!0)},[V]),Y=Et(function(k){if(Qu(k))return function(I){return O(I,k)};O(k)}),N=w.useCallback(function(k){Ge(k)?_({type:"SET_FORMIK_STATE",payload:k}):_({type:"SET_FORMIK_STATE",payload:function(){return k}})},[]),me=w.useCallback(function(k){_({type:"SET_STATUS",payload:k})},[]),ee=w.useCallback(function(k){_({type:"SET_ISSUBMITTING",payload:k})},[]),te=Et(function(){return _({type:"SUBMIT_ATTEMPT"}),Q().then(function(k){var I=k instanceof Error,P=!I&&Object.keys(k).length===0;if(P){var L;try{if(L=Qe(),L===void 0)return}catch(q){throw q}return Promise.resolve(L).then(function(q){return h.current&&_({type:"SUBMIT_SUCCESS"}),q}).catch(function(q){if(h.current)throw _({type:"SUBMIT_FAILURE"}),q})}else if(h.current&&(_({type:"SUBMIT_FAILURE"}),I))throw k})}),K=Et(function(k){k&&k.preventDefault&&Ge(k.preventDefault)&&k.preventDefault(),k&&k.stopPropagation&&Ge(k.stopPropagation)&&k.stopPropagation(),te().catch(function(I){console.warn("Warning: An unhandled error was caught from submitForm()",I)})}),je={resetForm:$e,validateForm:Q,validateField:Te,setErrors:W,setFieldError:ie,setFieldTouched:V,setFieldValue:R,setStatus:me,setSubmitting:ee,setTouched:F,setValues:H,setFormikState:N,submitForm:te},Qe=Et(function(){return f(T.values,je)}),J=Et(function(k){k&&k.preventDefault&&Ge(k.preventDefault)&&k.preventDefault(),k&&k.stopPropagation&&Ge(k.stopPropagation)&&k.stopPropagation(),$e()}),De=w.useCallback(function(k){return{value:be(T.values,k),error:be(T.errors,k),touched:!!be(T.touched,k),initialValue:be(v.current,k),initialTouched:!!be(m.current,k),initialError:be(g.current,k)}},[T.errors,T.touched,T.values]),oe=w.useCallback(function(k){return{setValue:function(P,L){return R(k,P,L)},setTouched:function(P,L){return V(k,P,L)},setError:function(P){return ie(k,P)}}},[R,V,ie]),Ne=w.useCallback(function(k){var I=ca(k),P=I?k.name:k,L=be(T.values,P),q={name:P,value:L,onChange:M,onBlur:Y};if(I){var ne=k.type,de=k.value,ln=k.as,eu=k.multiple;ne==="checkbox"?de===void 0?q.checked=!!L:(q.checked=!!(Array.isArray(L)&&~L.indexOf(de)),q.value=de):ne==="radio"?(q.checked=L===de,q.value=de):ln==="select"&&eu&&(q.value=q.value||[],q.multiple=!0)}return q},[Y,M,T.values]),sn=w.useMemo(function(){return!An(v.current,T.values)},[v.current,T.values]),Ie=w.useMemo(function(){return typeof s<"u"?sn?T.errors&&Object.keys(T.errors).length===0:s!==!1&&Ge(s)?s(d):s:T.errors&&Object.keys(T.errors).length===0},[s,sn,T.errors,d]),Dr=le({},T,{initialValues:v.current,initialErrors:g.current,initialTouched:m.current,initialStatus:x.current,handleBlur:Y,handleChange:M,handleReset:J,handleSubmit:K,resetForm:$e,setErrors:W,setFormikState:N,setFieldTouched:V,setFieldValue:R,setFieldError:ie,setStatus:me,setSubmitting:ee,setTouched:F,setValues:H,submitForm:te,validateForm:Q,validateField:Te,isValid:Ie,dirty:sn,unregisterField:Ve,registerField:At,getFieldProps:Ne,getFieldMeta:De,getFieldHelpers:oe,validateOnBlur:i,validateOnChange:n,validateOnMount:a});return Dr}function m3(e){var t=h3(e),n=e.component,r=e.children,i=e.render,o=e.innerRef;return w.useImperativeHandle(o,function(){return t}),w.createElement(c3,{value:t},n?w.createElement(n,t):i?i(t):r?Ge(r)?r(t):Cw(r)?null:w.Children.only(r):null)}function g3(e){var t={};if(e.inner){if(e.inner.length===0)return tn(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(r>=i.length)break;o=i[r++]}else{if(r=i.next(),r.done)break;o=r.value}var a=o;be(t,a.path)||(t=tn(t,a.path,a.message))}}return t}function y3(e,t,n,r){n===void 0&&(n=!1);var i=Af(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Af(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||iy(i)?Af(i):i!==""?i:void 0}):iy(e[r])?t[r]=Af(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function v3(e,t,n){var r=e.slice();return t.forEach(function(o,a){if(typeof r[a]>"u"){var s=n.clone!==!1,l=s&&n.isMergeableObject(o);r[a]=l?$f(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?r[a]=$f(e[a],o,n):e.indexOf(o)===-1&&r.push(o)}),r}function x3(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function w3(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,o=e.indexOf(n),i=o>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}var b3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?w.useLayoutEffect:w.useEffect;function Et(e){var t=w.useRef(e);return b3(function(){t.current=e}),w.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}function Up(e){var t=e.validate,n=e.name,r=e.render,i=e.children,o=e.as,a=e.component,s=e.className,l=Mn(e,["validate","name","render","children","as","component","className"]),u=Tw(),f=Mn(u,["validate","validationSchema"]),c=f.registerField,d=f.unregisterField;w.useEffect(function(){return c(n,{validate:t}),function(){d(n)}},[c,d,n,t]);var v=f.getFieldProps(le({name:n},l)),g=f.getFieldMeta(n),m={field:v,form:f};if(r)return r(le({},m,{meta:g}));if(Ge(i))return i(le({},m,{meta:g}));if(a){if(typeof a=="string"){var x=l.innerRef,h=Mn(l,["innerRef"]);return w.createElement(a,le({ref:x},v,h,{className:s}),i)}return w.createElement(a,le({field:v,form:f},l,{className:s}),i)}var p=o||"input";if(typeof p=="string"){var y=l.innerRef,S=Mn(l,["innerRef"]);return w.createElement(p,le({ref:y},v,S,{className:s}),i)}return w.createElement(p,le({},v,l,{className:s}),i)}var jw=w.forwardRef(function(e,t){var n=e.action,r=Mn(e,["action"]),i=n??"#",o=Tw(),a=o.handleReset,s=o.handleSubmit;return w.createElement("form",le({onSubmit:s,ref:t,onReset:a,action:i},r))});jw.displayName="Form";function S3(e){var t=function(i){return w.createElement(f3,null,function(o){return o||rw(!1),w.createElement(e,le({},i,{formik:o}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",Kf(t,e)}var E3=function(t,n,r){var i=Tr(t),o=i[n];return i.splice(n,1),i.splice(r,0,o),i},k3=function(t,n,r){var i=Tr(t),o=i[n];return i[n]=i[r],i[r]=o,i},Ju=function(t,n,r){var i=Tr(t);return i.splice(n,0,r),i},_3=function(t,n,r){var i=Tr(t);return i[n]=r,i},Tr=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(le({},t,{length:n+1}))}else return[]},Ay=function(t,n){var r=typeof t=="function"?t:n;return function(i){if(Array.isArray(i)||ca(i)){var o=Tr(i);return r(o)}return i}},O3=function(e){$w(t,e);function t(r){var i;return i=e.call(this,r)||this,i.updateArrayField=function(o,a,s){var l=i.props,u=l.name,f=l.formik.setFormikState;f(function(c){var d=Ay(s,o),v=Ay(a,o),g=tn(c.values,u,o(be(c.values,u))),m=s?d(be(c.errors,u)):void 0,x=a?v(be(c.touched,u)):void 0;return Ry(m)&&(m=void 0),Ry(x)&&(x=void 0),le({},c,{values:g,errors:s?tn(c.errors,u,m):c.errors,touched:a?tn(c.touched,u,x):c.touched})})},i.push=function(o){return i.updateArrayField(function(a){return[].concat(Tr(a),[u3(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,a){return i.updateArrayField(function(s){return k3(s,o,a)},!0,!0)},i.handleSwap=function(o,a){return function(){return i.swap(o,a)}},i.move=function(o,a){return i.updateArrayField(function(s){return E3(s,o,a)},!0,!0)},i.handleMove=function(o,a){return function(){return i.move(o,a)}},i.insert=function(o,a){return i.updateArrayField(function(s){return Ju(s,o,a)},function(s){return Ju(s,o,null)},function(s){return Ju(s,o,null)})},i.handleInsert=function(o,a){return function(){return i.insert(o,a)}},i.replace=function(o,a){return i.updateArrayField(function(s){return _3(s,o,a)},!1,!1)},i.handleReplace=function(o,a){return function(){return i.replace(o,a)}},i.unshift=function(o){var a=-1;return i.updateArrayField(function(s){var l=s?[o].concat(s):[o];return a=l.length,l},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(jy(i)),i.pop=i.pop.bind(jy(i)),i}var n=t.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!An(be(i.formik.values,i.name),be(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var o;return this.updateArrayField(function(a){var s=a?Tr(a):[];return o||(o=s[i]),Ge(s.splice)&&s.splice(i,1),Ge(s.every)&&s.every(function(l){return l===void 0})?[]:s},!0,!0),o},n.pop=function(){var i;return this.updateArrayField(function(o){var a=o.slice();return i||(i=a&&a.pop&&a.pop()),a},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,a=o.component,s=o.render,l=o.children,u=o.name,f=o.formik,c=Mn(f,["validate","validationSchema"]),d=le({},i,{form:c,name:u});return a?w.createElement(a,d):s?s(d):l?typeof l=="function"?l(d):Cw(l)?null:w.Children.only(l):null},t}(w.Component);O3.defaultProps={validateOnChange:!0};var $3=function(e){$w(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(i){return be(this.props.formik.errors,this.props.name)!==be(i.formik.errors,this.props.name)||be(this.props.formik.touched,this.props.name)!==be(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,o=i.component,a=i.formik,s=i.render,l=i.children,u=i.name,f=Mn(i,["component","formik","render","children","name"]),c=be(a.touched,u),d=be(a.errors,u);return c&&d?s?Ge(s)?s(d):null:l?Ge(l)?l(d):null:o?w.createElement(o,f,d):d:null},t}(w.Component),T3=S3($3);const C3="/water-tracker/assets/default_avatar_to_download-b55e28a7.jpg",Bp=$.p`
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,Fy=$.label`
  display: inline-block;
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,P3=$.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,Rw=$.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,Zu=$.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,ec=$.div`
  position: relative;
  margin-top: 8px;
`,Br=$(Rw)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`,j3=$.label`
  display: flex;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`,R3=$.span`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`,Ks=$.div`
  margin-bottom: 24px;

  .error-input {
    border: 1px solid ${e=>e.theme.color.secondaryRed};
    color: ${e=>e.theme.color.secondaryRed};

    &:focus {
      color: ${({theme:e})=>e.color.secondaryRed};
    }

    &::placeholder {
      color: ${e=>e.theme.color.secondaryRed};
    }
  }
`,Ny=$(Ks)`
  margin-bottom: 12px;
`,A3=$(Bp)`
  margin-bottom: 12px;
`,Iy=$(Up)`
  border: 1px solid ${e=>e.theme.color.accent};
  width: 14px;
  height: 14px;

  &:checked {
    color: ${e=>e.theme.color.accent};
  }
`,F3=$.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,Ly=$.span`
  margin-left: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,zy=$.label`
  display: flex;
  align-items: center;
`,N3=$.img`
  border-radius: 60%;
`,Qi=$(Up)`
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
`,Fa=$(T3)`
  margin-top: 4px;
  color: ${e=>e.theme.color.secondaryRed};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`,I3=$.p`
  margin-top: 4px;
  color: ${e=>e.theme.color.secondaryRed};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`,L3=$.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 32px;
  border-radius: 10px;
  background-color: ${({theme:e})=>e.color.white};

  @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: ${e=>e.theme.breakpoint.desktop}) {
    min-width: 1008px;
  }
`,z3=$(Bp)`
  margin-bottom: 12px;
`,tc=$.label`
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,D3=$.button`
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
`,M3=$.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
`,Dy=$.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 392px;
  }
`,My=$(Ks)`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 0px;
  }
`,U3=$.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 52px;
  }
`,B3=Xx().shape({gender:Vr().required("Required"),username:Vr().min(3,"Username must be more then 3 characters long").max(32,"Username must be less then 32 characters long").required("Required"),email:Vr().email("Invalid email").required("Required"),newPassword:Vr().min(8,"New password must be at least 8 characters long").max(64,"New password must be less then 64 characters long").required("Required"),oldPassword:Vr().min(8,"Old password must be at least 8 characters long").max(64,"Old password must be less then 64 characters long").required("Required")}),V3=({onClose:e})=>{const t=Kd(),{avatarURL:n}=jr(Dx),[r,i]=w.useState(!1),o={avatar:"",gender:"Girl",username:"",email:"",oldPassword:"",newPassword:"",repeatedPassword:""},a=(u,f)=>{console.log(u),f.resetForm()},s=()=>{i(u=>!u)},l=u=>{let f=new FormData;f.append("avatar",u.target.files[0]),t(ux(f))};return b.jsx(b.Fragment,{children:b.jsx(Bl,{onClose:e,title:"Setting",children:b.jsx(L3,{children:b.jsx(m3,{initialValues:o,validationSchema:B3,onSubmit:a,children:({values:u,errors:f,touched:c})=>b.jsxs(jw,{children:[b.jsxs(Ks,{children:[b.jsx(Bp,{children:"Your photo"}),b.jsxs(P3,{children:[b.jsx(N3,{src:n||C3,alt:"user avatar",width:"80px",height:"80px"}),b.jsxs(j3,{children:[b.jsx(Up,{type:"file",name:"avatar",hidden:!0,accept:"image/png, image/jpeg",onChange:l}),b.jsx(Rw,{children:b.jsx("use",{href:`${kt}#icon-arrow-up`})}),b.jsx(R3,{children:"Upload a photo"})]})]})]}),b.jsxs(M3,{children:[b.jsxs(Dy,{children:[b.jsxs(U3,{children:[b.jsx(A3,{children:"Your gender identity"}),b.jsxs(F3,{children:[b.jsxs(zy,{children:[b.jsx(Iy,{type:"radio",name:"gender",value:"Girl",checked:u.gender==="Girl"}),b.jsx(Ly,{children:"Girl"})]}),b.jsxs(zy,{children:[b.jsx(Iy,{type:"radio",name:"gender",value:"Man",checked:u.gender==="Man"}),b.jsx(Ly,{children:"Man"})]})]})]}),b.jsxs(Ks,{children:[b.jsx(Fy,{htmlFor:"username",children:"Your name"}),b.jsx(Qi,{type:"text",id:"username",name:"username",className:f.username&&c.username?"error-input":null,placeholder:u.username}),b.jsx(Fa,{component:"p",name:"username"})]}),b.jsxs(My,{children:[b.jsx(Fy,{htmlFor:"email",children:"E-mail"}),b.jsx(Qi,{type:"email",id:"email",name:"email",className:f.email&&c.email?"error-input":null,placeholder:u.email}),b.jsx(Fa,{component:"p",name:"email"})]})]}),b.jsxs(Dy,{children:[b.jsx(z3,{children:"Password"}),b.jsxs(Ny,{children:[b.jsx(tc,{htmlFor:"oldPassword",children:"Outdated password:"}),b.jsxs(ec,{children:[b.jsx(Qi,{type:r?"text":"password",id:"oldPassword",name:"oldPassword",className:f.oldPassword&&c.oldPassword?"error-input":null,placeholder:"Password"}),b.jsx(Zu,{type:"button",onClick:s,children:r?b.jsx(Br,{children:b.jsx("use",{href:`${kt}#icon-to-open`})}):b.jsx(Br,{children:b.jsx("use",{href:`${kt}#icon-to-hide`})})})]}),b.jsx(Fa,{component:"p",name:"oldPassword"})]}),b.jsxs(Ny,{children:[b.jsx(tc,{htmlFor:"password",children:"New Password:"}),b.jsxs(ec,{children:[b.jsx(Qi,{type:r?"text":"password",id:"password",name:"newPassword",className:f.newPassword&&c.newPassword?"error-input":null,placeholder:"Password"}),b.jsx(Zu,{type:"button",onClick:s,children:r?b.jsx(Br,{children:b.jsx("use",{href:`${kt}#icon-to-open`})}):b.jsx(Br,{children:b.jsx("use",{href:`${kt}#icon-to-hide`})})})]}),b.jsx(Fa,{component:"p",name:"newPassword"})]}),b.jsxs(My,{children:[b.jsx(tc,{htmlFor:"repeatedPassword",children:"Repeat new password:"}),b.jsxs(ec,{children:[b.jsx(Qi,{type:r?"text":"password",id:"repeatedPassword",name:"repeatedPassword",className:u.newPassword!==u.repeatedPassword?"error-input":null,placeholder:"Password"}),b.jsx(Zu,{type:"button",onClick:s,children:r?b.jsx(Br,{children:b.jsx("use",{href:`${kt}#icon-to-open`})}):b.jsx(Br,{children:b.jsx("use",{href:`${kt}#icon-to-hide`})})})]}),u.newPassword!==u.repeatedPassword?b.jsx(I3,{children:`The entered password doesn't matches the new
                            password`}):null]})]})]}),b.jsx(D3,{type:"submit",children:"Save"})]})})})})})},hN=$.div`
  background-image: -webkit-image-set(
    url(${Mx}) 1x,
    url(${Ux}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    position: relative;
    background-image: -webkit-image-set(
      url(${Bx}) 1x,
      url(${Vx}) 2x
    );
    width: 736px;
    height: 548px;
    background-position: 120px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-position: -120px center;
    width: 916px;
    min-height: 680px;
  }
`,mN=$.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 66px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 0;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
`,gN=$.span`
  color: red;
`,W3=$.button`
  width: 100%;
  padding: 8px 30px 8px 30px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  text-align: center;
  color: ${e=>e.theme.color.white};
  background-color: ${e=>e.theme.color.accent};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 10px 30px 10px 30px;
  }
`,yN=$.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 8px;
  font-size: 18px;
  font-style: normal;
  line-height: 24px;
  color: ${e=>e.theme.color.black};

  .input-with-error {
    color: red;
    border: 1px solid ${e=>e.theme.color.secondaryRed};
  }
`,vN=$.input`
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

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
  }
`,xN=$.form`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  min-height: 304px;
  gap: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    position: absolute;
    top: 104px;
    left: 30px;
    min-width: 336px;
    z-index: 1;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    position: static;
    min-width: 384px;
    min-height: 312px;
  }
`,wN=$(W3)`
  background-color: ${e=>e.theme.color.secondaryPowderBlue};
  cursor: not-allowed;
`,bN=$.h2`
  width: 100%;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.color.black};
`,SN=$.svg`
  width: 16px;
  height: 16px;
  border: 1px;
  stroke: ${e=>e.theme.color.accent};
  fill: ${e=>e.theme.color.white};
  position: absolute;
  right: 10px;
  top: 44px;
`,EN=$(Go)`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
  &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }
`,kN=$(Go)`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
  &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }
`,H3=$.button`
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
`,G3=$.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: ${({theme:e})=>e.color.black};
  fill: transparent;
`,K3=()=>b.jsx("div",{children:b.jsx(Go,{to:"/signin",children:b.jsxs(H3,{type:"button",children:["Sign in",b.jsx(G3,{children:b.jsx("use",{href:`${kt}#icon-user`})})]})})}),q3=$.div`
  position: relative;
  display: flex; 
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`,Y3=$.p`
  font-size: 18px;
  line-height: 1.33em;

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`,Q3=$.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  padding: 0;
`,X3=$.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`,J3=$.span`
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
`,Z3=$.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.accent};
  fill: transparent;

  &:hover,
  &:focus {
    color: ${e=>e.theme.color.accent};
  }
`,eF=()=>{const e=w.useRef(),[t,n]=w.useState(!1),{userName:r,avatarURL:i}=jr(Dx),o=()=>{n(!t)},a=r?r.charAt(0).toUpperCase():"V",s=()=>r&&i?{name:r,avatar:i}:r?{name:r,avatar:a}:{name:a,avatar:a},{name:l,avatar:u}=s();return b.jsxs(q3,{children:[b.jsx(Y3,{children:l}),b.jsxs(Q3,{onClick:o,ref:e,children:[i?b.jsx(X3,{src:u,alt:""}):b.jsx(J3,{children:u}),b.jsx(Z3,{children:b.jsx("use",{href:`${kt}#icon-arrow-down`})})]}),t&&b.jsx(nF,{setOnShowDropdown:n,parentRef:e})]})},tF=$.div`
  position: absolute;
  top: 38px;
  left: -53px;
  width: 118px;
  padding: 16px;
  border-radius: 10px;
  background: ${({theme:e})=>e.color.white};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  transition: all ${e=>e.theme.transition.modal};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    top: 42px; //44
  }
`,Uy=$.svg`
  margin-right: 8px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,By=$.button`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  background-color: transparent;
  padding: 0;
`,Vy=$.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,nF=({setOnShowDropdown:e,parentRef:t})=>{const n=w.useRef(),[r,i]=w.useState(!1),[o,a]=w.useState(!1);return w.useEffect(()=>{const s=u=>{n.current&&!n.current.contains(u.target)&&t.current&&!t.current.contains(u.target)&&e(!1)},l=u=>{u.code==="Escape"&&e(!1)};return window.addEventListener("keydown",l),document.addEventListener("click",s),()=>{document.removeEventListener("click",s),window.removeEventListener("keydown",l)}},[t,e]),b.jsx(b.Fragment,{children:b.jsxs(tF,{ref:n,children:[b.jsxs("ul",{children:[b.jsxs(Vy,{children:[b.jsx(Uy,{width:"16px",height:"16px",children:b.jsx("use",{href:`${kt}#icon-settings`})}),b.jsx(By,{type:"button",onClick:()=>{i(!0)},children:"Setting"})]}),b.jsxs(Vy,{children:[b.jsx(Uy,{width:"16px",height:"16px",children:b.jsx("use",{href:`${kt}#icon-exit`})}),b.jsx(By,{type:"button",onClick:()=>{a(!0)},children:"Log out"})]})]}),r&&b.jsx(V3,{onClose:()=>{i(!1)}}),o&&b.jsx(lF,{onClose:()=>{a(!1)}})]})})},rF=$.h2`
  margin-bottom: 24px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
`,iF=$.button`
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
`,oF=$.button`
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
`,aF=$.ul`
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
`,sF=$.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`,lF=({onClose:e})=>{const t=Kd();return b.jsx(b.Fragment,{children:b.jsx(Bl,{onClose:e,title:"Log out",children:b.jsxs(sF,{children:[b.jsx(rF,{children:"Do you really want to leave?"}),b.jsxs(aF,{children:[b.jsx("li",{children:b.jsx(oF,{type:"button",onClick:e,children:"Cancel"})}),b.jsx("li",{children:b.jsx(iF,{type:"button",onClick:()=>t(lx()),children:"Log out"})})]})]})})})},_N=$.div`
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
`,ON=$.h1`
  display: none;
`,$N=$.h2`
  font-weight: 700;
  font-size: 28px;
  color: ${({theme:e})=>e.color.black};
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`,TN=$.p`
  font-size: 24px;
  color: ${({theme:e})=>e.color.black};
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`,CN=$.ul`
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
`,PN=$.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,jN=$.div`
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
`,RN=$.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`,AN=$.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  line-height: 20px;
  margin-bottom: 12px;
`,FN=$.button`
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
`,NN=$.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  margin-bottom: 12px;
`,IN=$.li`
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
`,LN=$.div`
  display: inline-block;
  margin: 0;
`,zN=$.div`
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
`,DN=$.ul`
  list-style-type: none;
  padding-left: 0;
`,MN=$.button`
  background-color: ${e=>e.theme.color.accent};
  color: ${e=>e.theme.color.white};
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 18px;
  height: 44px;
  margin-left: auto;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background-color ${e=>e.theme.transition.main};

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    font-size: 16px;
  }
`,UN=$.img`
  font-size: 16px;
  width: 280px;
  height: 280px;
  margin: auto;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 18px;
    width: 600px;
    height: 500px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 900px;
    height: 700px;
  }
`,uF="modulepreload",cF=function(e){return"/water-tracker/"+e},Wy={},zi=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=cF(o),o in Wy)return;Wy[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const c=i[f];if(c.href===o&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":uF,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,c)=>{u.addEventListener("load",f),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})},fF=({component:e,redirectTo:t})=>jr(Gl)?b.jsx(e,{}):b.jsx(Lx,{to:t}),Na=({component:e,redirectTo:t})=>jr(Gl)?b.jsx(Lx,{to:t}):e,dF=()=>b.jsxs(b.Fragment,{children:[b.jsx(RC,{}),b.jsx("main",{children:b.jsx(w.Suspense,{fallback:b.jsx(Sp,{}),children:b.jsx(pC,{})})})]}),pF=w.lazy(()=>zi(()=>import("./Welcome-b9d6550a.js"),["assets/Welcome-b9d6550a.js","assets/Section-08e18457.js"])),hF=w.lazy(()=>zi(()=>import("./Home-610cacf4.js"),["assets/Home-610cacf4.js","assets/Section-08e18457.js","assets/bubbleTablet@2x-6e22c1d3.js"])),mF=w.lazy(()=>zi(()=>import("./SignIn-bb5a1952.js"),["assets/SignIn-bb5a1952.js","assets/Section-08e18457.js","assets/bubbleTablet@2x-6e22c1d3.js"])),gF=w.lazy(()=>zi(()=>import("./SignUp-2bec7ba1.js"),["assets/SignUp-2bec7ba1.js","assets/Section-08e18457.js","assets/bubbleTablet@2x-6e22c1d3.js"])),yF=w.lazy(()=>zi(()=>import("./Error-2241fb18.js"),["assets/Error-2241fb18.js","assets/Section-08e18457.js"])),vF=w.lazy(()=>zi(()=>import("./ForgotPassword-01a4d264.js"),["assets/ForgotPassword-01a4d264.js","assets/Section-08e18457.js"])),xF=()=>{const e=Kd(),t=jr(CC);return w.useEffect(()=>{e(os())},[e]),t?b.jsx(Sp,{}):b.jsx(mC,{children:b.jsxs(Pn,{path:"/",element:b.jsx(dF,{}),children:[b.jsx(Pn,{index:!0,element:b.jsx(Na,{component:b.jsx(pF,{}),redirectTo:"/home"})}),b.jsx(Pn,{path:"home",element:b.jsx(fF,{component:hF,redirectTo:"/"})}),b.jsx(Pn,{path:"signin",element:b.jsx(Na,{component:b.jsx(mF,{}),redirectTo:"/home"})}),b.jsx(Pn,{path:"signup",element:b.jsx(Na,{component:b.jsx(gF,{}),redirectTo:"/home"})}),b.jsx(Pn,{path:"forgot-password",element:b.jsx(Na,{component:b.jsx(vF,{}),redirectTo:"/signin"})}),b.jsx(Pn,{path:"*",element:b.jsx(yF,{})})]})})},wF=ac.createRoot(document.getElementById("root"));wF.render(b.jsx(He.StrictMode,{children:b.jsxs(m0,{theme:pf,children:[b.jsx(g0,{styles:y$}),b.jsx(JE,{store:fx,children:b.jsx(C1,{loading:b.jsx(Sp,{}),persistor:f$,children:b.jsx(SC,{basename:"/water-tracker",children:b.jsx(xF,{})})})})]})}));export{ZF as $,IF as A,AN as B,zN as C,SF as D,Bl as E,LF as F,DF as G,ON as H,PN as I,zF as J,MF as K,DN as L,UF as M,BF as N,LN as O,TN as P,VF as Q,WF as R,HF as S,jN as T,GF as U,YF as V,_N as W,QF as X,AF as Y,KF as Z,qF as _,$N as a,XF as a0,JF as a1,eN as a2,tN as a3,nN as a4,rN as a5,iN as a6,sN as a7,aN as a8,oN as a9,lN as aa,cN as ab,uN as ac,fN as ad,dN as ae,pN as af,Kd as ag,mN as ah,hN as ai,xN as aj,bN as ak,yN as al,vN as am,gN as an,SN as ao,wN as ap,W3 as aq,kN as ar,QO as as,EN as at,YO as au,Go as av,MN as aw,UN as ax,F$ as ay,CN as b,RN as c,FN as d,NN as e,IN as f,jr as g,Dx as h,kF as i,b as j,BC as k,EF as l,_F as m,$ as n,OF as o,$F as p,CF as q,w as r,kt as s,TF as t,Fx as u,PF as v,RF as w,jF as x,FF as y,NF as z};
