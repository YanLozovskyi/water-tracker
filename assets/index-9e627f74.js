function zw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Dw(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Gy={exports:{}},Ys={},Ky={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),Mw=Symbol.for("react.portal"),Uw=Symbol.for("react.fragment"),Bw=Symbol.for("react.strict_mode"),Vw=Symbol.for("react.profiler"),Ww=Symbol.for("react.provider"),Hw=Symbol.for("react.context"),Gw=Symbol.for("react.forward_ref"),Kw=Symbol.for("react.suspense"),Yw=Symbol.for("react.memo"),qw=Symbol.for("react.lazy"),Hp=Symbol.iterator;function Qw(e){return e===null||typeof e!="object"?null:(e=Hp&&e[Hp]||e["@@iterator"],typeof e=="function"?e:null)}var Yy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qy=Object.assign,Qy={};function Ti(e,t,n){this.props=e,this.context=t,this.refs=Qy,this.updater=n||Yy}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ti.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xy(){}Xy.prototype=Ti.prototype;function Nf(e,t,n){this.props=e,this.context=t,this.refs=Qy,this.updater=n||Yy}var If=Nf.prototype=new Xy;If.constructor=Nf;qy(If,Ti.prototype);If.isPureReactComponent=!0;var Gp=Array.isArray,Jy=Object.prototype.hasOwnProperty,Lf={current:null},Zy={key:!0,ref:!0,__self:!0,__source:!0};function e0(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Jy.call(t,r)&&!Zy.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Qo,type:e,key:o,ref:a,props:i,_owner:Lf.current}}function Xw(e,t){return{$$typeof:Qo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qo}function Jw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Kp=/\/+/g;function ru(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jw(""+e.key):t.toString(36)}function Ia(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Qo:case Mw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ru(a,0):r,Gp(i)?(n="",e!=null&&(n=e.replace(Kp,"$&/")+"/"),Ia(i,t,n,"",function(u){return u})):i!=null&&(zf(i)&&(i=Xw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Kp,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Gp(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+ru(o,s);a+=Ia(o,t,n,l,i)}else if(l=Qw(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+ru(o,s++),a+=Ia(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function fa(e,t,n){if(e==null)return e;var r=[],i=0;return Ia(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Zw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},La={transition:null},eb={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:La,ReactCurrentOwner:Lf};X.Children={map:fa,forEach:function(e,t,n){fa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fa(e,function(){t++}),t},toArray:function(e){return fa(e,function(t){return t})||[]},only:function(e){if(!zf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Ti;X.Fragment=Uw;X.Profiler=Vw;X.PureComponent=Nf;X.StrictMode=Bw;X.Suspense=Kw;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eb;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qy({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Lf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Jy.call(t,l)&&!Zy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Qo,type:e.type,key:i,ref:o,props:r,_owner:a}};X.createContext=function(e){return e={$$typeof:Hw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ww,_context:e},e.Consumer=e};X.createElement=e0;X.createFactory=function(e){var t=e0.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:Gw,render:e}};X.isValidElement=zf;X.lazy=function(e){return{$$typeof:qw,_payload:{_status:-1,_result:e},_init:Zw}};X.memo=function(e,t){return{$$typeof:Yw,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=La.transition;La.transition={};try{e()}finally{La.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return ot.current.useCallback(e,t)};X.useContext=function(e){return ot.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};X.useEffect=function(e,t){return ot.current.useEffect(e,t)};X.useId=function(){return ot.current.useId()};X.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return ot.current.useMemo(e,t)};X.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};X.useRef=function(e){return ot.current.useRef(e)};X.useState=function(e){return ot.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return ot.current.useTransition()};X.version="18.2.0";Ky.exports=X;var w=Ky.exports;const He=$i(w),rc=zw({__proto__:null,default:He},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tb=w,nb=Symbol.for("react.element"),rb=Symbol.for("react.fragment"),ib=Object.prototype.hasOwnProperty,ob=tb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ab={key:!0,ref:!0,__self:!0,__source:!0};function t0(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)ib.call(t,r)&&!ab.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:nb,type:e,key:o,ref:a,props:i,_owner:ob.current}}Ys.Fragment=rb;Ys.jsx=t0;Ys.jsxs=t0;Gy.exports=Ys;var b=Gy.exports;function sb(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function lb(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ub=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(lb(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=sb(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ze="-ms-",ls="-moz-",ae="-webkit-",n0="comm",Df="rule",Mf="decl",cb="@import",r0="@keyframes",fb="@layer",db=Math.abs,qs=String.fromCharCode,pb=Object.assign;function hb(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function i0(e){return e.trim()}function mb(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function ic(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function yo(e,t,n){return e.slice(t,n)}function Yt(e){return e.length}function Uf(e){return e.length}function da(e,t){return t.push(e),e}function gb(e,t){return e.map(t).join("")}var Qs=1,pi=1,o0=0,pt=0,Re=0,Ci="";function Xs(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Qs,column:pi,length:a,return:""}}function Di(e,t){return pb(Xs("",null,null,"",null,null,0),e,{length:-e.length},t)}function yb(){return Re}function vb(){return Re=pt>0?Ke(Ci,--pt):0,pi--,Re===10&&(pi=1,Qs--),Re}function gt(){return Re=pt<o0?Ke(Ci,pt++):0,pi++,Re===10&&(pi=1,Qs++),Re}function Jt(){return Ke(Ci,pt)}function za(){return pt}function Xo(e,t){return yo(Ci,e,t)}function vo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function a0(e){return Qs=pi=1,o0=Yt(Ci=e),pt=0,[]}function s0(e){return Ci="",e}function Da(e){return i0(Xo(pt-1,oc(e===91?e+2:e===40?e+1:e)))}function xb(e){for(;(Re=Jt())&&Re<33;)gt();return vo(e)>2||vo(Re)>3?"":" "}function wb(e,t){for(;--t&&gt()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return Xo(e,za()+(t<6&&Jt()==32&&gt()==32))}function oc(e){for(;gt();)switch(Re){case e:return pt;case 34:case 39:e!==34&&e!==39&&oc(Re);break;case 40:e===41&&oc(e);break;case 92:gt();break}return pt}function bb(e,t){for(;gt()&&e+Re!==47+10;)if(e+Re===42+42&&Jt()===47)break;return"/*"+Xo(t,pt-1)+"*"+qs(e===47?e:gt())}function Sb(e){for(;!vo(Jt());)gt();return Xo(e,pt)}function kb(e){return s0(Ma("",null,null,null,[""],e=a0(e),0,[0],e))}function Ma(e,t,n,r,i,o,a,s,l){for(var u=0,f=0,c=a,d=0,v=0,g=0,m=1,x=1,h=1,p=0,y="",S=i,E=o,_=r,$=y;x;)switch(g=p,p=gt()){case 40:if(g!=108&&Ke($,c-1)==58){ic($+=se(Da(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:$+=Da(p);break;case 9:case 10:case 13:case 32:$+=xb(g);break;case 92:$+=wb(za()-1,7);continue;case 47:switch(Jt()){case 42:case 47:da(Eb(bb(gt(),za()),t,n),l);break;default:$+="/"}break;case 123*m:s[u++]=Yt($)*h;case 125*m:case 59:case 0:switch(p){case 0:case 125:x=0;case 59+f:h==-1&&($=se($,/\f/g,"")),v>0&&Yt($)-c&&da(v>32?qp($+";",r,n,c-1):qp(se($," ","")+";",r,n,c-2),l);break;case 59:$+=";";default:if(da(_=Yp($,t,n,u,f,i,s,y,S=[],E=[],c),o),p===123)if(f===0)Ma($,t,_,_,S,o,c,s,E);else switch(d===99&&Ke($,3)===110?100:d){case 100:case 108:case 109:case 115:Ma(e,_,_,r&&da(Yp(e,_,_,0,0,i,s,y,i,S=[],c),E),i,E,c,s,r?S:E);break;default:Ma($,_,_,_,[""],E,0,s,E)}}u=f=v=0,m=h=1,y=$="",c=a;break;case 58:c=1+Yt($),v=g;default:if(m<1){if(p==123)--m;else if(p==125&&m++==0&&vb()==125)continue}switch($+=qs(p),p*m){case 38:h=f>0?1:($+="\f",-1);break;case 44:s[u++]=(Yt($)-1)*h,h=1;break;case 64:Jt()===45&&($+=Da(gt())),d=Jt(),f=c=Yt(y=$+=Sb(za())),p++;break;case 45:g===45&&Yt($)==2&&(m=0)}}return o}function Yp(e,t,n,r,i,o,a,s,l,u,f){for(var c=i-1,d=i===0?o:[""],v=Uf(d),g=0,m=0,x=0;g<r;++g)for(var h=0,p=yo(e,c+1,c=db(m=a[g])),y=e;h<v;++h)(y=i0(m>0?d[h]+" "+p:se(p,/&\f/g,d[h])))&&(l[x++]=y);return Xs(e,t,n,i===0?Df:s,l,u,f)}function Eb(e,t,n){return Xs(e,t,n,n0,qs(yb()),yo(e,2,-2),0)}function qp(e,t,n,r){return Xs(e,t,n,Mf,yo(e,0,r),yo(e,r+1,-1),r)}function ii(e,t){for(var n="",r=Uf(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function _b(e,t,n,r){switch(e.type){case fb:if(e.children.length)break;case cb:case Mf:return e.return=e.return||e.value;case n0:return"";case r0:return e.return=e.value+"{"+ii(e.children,r)+"}";case Df:e.value=e.props.join(",")}return Yt(n=ii(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ob(e){var t=Uf(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function $b(e){return function(t){t.root||(t=t.return)&&e(t)}}var Qp=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var i=t(r);return n.set(r,i),i}};function l0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Tb=function(t,n,r){for(var i=0,o=0;i=o,o=Jt(),i===38&&o===12&&(n[r]=1),!vo(o);)gt();return Xo(t,pt)},Cb=function(t,n){var r=-1,i=44;do switch(vo(i)){case 0:i===38&&Jt()===12&&(n[r]=1),t[r]+=Tb(pt-1,n,r);break;case 2:t[r]+=Da(i);break;case 4:if(i===44){t[++r]=Jt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=qs(i)}while(i=gt());return t},Pb=function(t,n){return s0(Cb(a0(t),n))},Xp=new WeakMap,jb=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Xp.get(r))&&!i){Xp.set(t,!0);for(var o=[],a=Pb(n,o),s=r.props,l=0,u=0;l<a.length;l++)for(var f=0;f<s.length;f++,u++)t.props[u]=o[l]?a[l].replace(/&\f/g,s[f]):s[f]+" "+a[l]}}},Rb=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function u0(e,t){switch(hb(e,t)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+ls+e+Ze+e+e;case 6828:case 4268:return ae+e+Ze+e+e;case 6165:return ae+e+Ze+"flex-"+e+e;case 5187:return ae+e+se(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+Ze+"flex-$1$2")+e;case 5443:return ae+e+Ze+"flex-item-"+se(e,/flex-|-self/,"")+e;case 4675:return ae+e+Ze+"flex-line-pack"+se(e,/align-content|flex-|-self/,"")+e;case 5548:return ae+e+Ze+se(e,"shrink","negative")+e;case 5292:return ae+e+Ze+se(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+se(e,"-grow","")+ae+e+Ze+se(e,"grow","positive")+e;case 4554:return ae+se(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yt(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+ls+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ic(e,"stretch")?u0(se(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ke(e,t+1)!==115)break;case 6444:switch(Ke(e,Yt(e)-3-(~ic(e,"!important")&&10))){case 107:return se(e,":",":"+ae)+e;case 101:return se(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ae+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+Ze+"$2box$3")+e}break;case 5936:switch(Ke(e,t+11)){case 114:return ae+e+Ze+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+Ze+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+Ze+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ae+e+Ze+e+e}return e}var Ab=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Mf:t.return=u0(t.value,t.length);break;case r0:return ii([Di(t,{value:se(t.value,"@","@"+ae)})],i);case Df:if(t.length)return gb(t.props,function(o){switch(mb(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ii([Di(t,{props:[se(o,/:(read-\w+)/,":"+ls+"$1")]})],i);case"::placeholder":return ii([Di(t,{props:[se(o,/:(plac\w+)/,":"+ae+"input-$1")]}),Di(t,{props:[se(o,/:(plac\w+)/,":"+ls+"$1")]}),Di(t,{props:[se(o,/:(plac\w+)/,Ze+"input-$1")]})],i)}return""})}},Fb=[Ab],Nb=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var x=m.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=t.stylisPlugins||Fb,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var x=m.getAttribute("data-emotion").split(" "),h=1;h<x.length;h++)o[x[h]]=!0;s.push(m)});var l,u=[jb,Rb];{var f,c=[_b,$b(function(m){f.insert(m)})],d=Ob(u.concat(i,c)),v=function(x){return ii(kb(x),d)};l=function(x,h,p,y){f=p,v(x?x+"{"+h.styles+"}":h.styles),y&&(g.inserted[h.name]=!0)}}var g={key:n,sheet:new ub({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return g.sheet.hydrate(s),g};function xo(){return xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xo.apply(this,arguments)}var c0={exports:{}},ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,Bf=Be?Symbol.for("react.element"):60103,Vf=Be?Symbol.for("react.portal"):60106,Js=Be?Symbol.for("react.fragment"):60107,Zs=Be?Symbol.for("react.strict_mode"):60108,el=Be?Symbol.for("react.profiler"):60114,tl=Be?Symbol.for("react.provider"):60109,nl=Be?Symbol.for("react.context"):60110,Wf=Be?Symbol.for("react.async_mode"):60111,rl=Be?Symbol.for("react.concurrent_mode"):60111,il=Be?Symbol.for("react.forward_ref"):60112,ol=Be?Symbol.for("react.suspense"):60113,Ib=Be?Symbol.for("react.suspense_list"):60120,al=Be?Symbol.for("react.memo"):60115,sl=Be?Symbol.for("react.lazy"):60116,Lb=Be?Symbol.for("react.block"):60121,zb=Be?Symbol.for("react.fundamental"):60117,Db=Be?Symbol.for("react.responder"):60118,Mb=Be?Symbol.for("react.scope"):60119;function wt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Bf:switch(e=e.type,e){case Wf:case rl:case Js:case el:case Zs:case ol:return e;default:switch(e=e&&e.$$typeof,e){case nl:case il:case sl:case al:case tl:return e;default:return t}}case Vf:return t}}}function f0(e){return wt(e)===rl}ce.AsyncMode=Wf;ce.ConcurrentMode=rl;ce.ContextConsumer=nl;ce.ContextProvider=tl;ce.Element=Bf;ce.ForwardRef=il;ce.Fragment=Js;ce.Lazy=sl;ce.Memo=al;ce.Portal=Vf;ce.Profiler=el;ce.StrictMode=Zs;ce.Suspense=ol;ce.isAsyncMode=function(e){return f0(e)||wt(e)===Wf};ce.isConcurrentMode=f0;ce.isContextConsumer=function(e){return wt(e)===nl};ce.isContextProvider=function(e){return wt(e)===tl};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bf};ce.isForwardRef=function(e){return wt(e)===il};ce.isFragment=function(e){return wt(e)===Js};ce.isLazy=function(e){return wt(e)===sl};ce.isMemo=function(e){return wt(e)===al};ce.isPortal=function(e){return wt(e)===Vf};ce.isProfiler=function(e){return wt(e)===el};ce.isStrictMode=function(e){return wt(e)===Zs};ce.isSuspense=function(e){return wt(e)===ol};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Js||e===rl||e===el||e===Zs||e===ol||e===Ib||typeof e=="object"&&e!==null&&(e.$$typeof===sl||e.$$typeof===al||e.$$typeof===tl||e.$$typeof===nl||e.$$typeof===il||e.$$typeof===zb||e.$$typeof===Db||e.$$typeof===Mb||e.$$typeof===Lb)};ce.typeOf=wt;c0.exports=ce;var Hf=c0.exports,Gf=Hf,Ub={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kf={};Kf[Gf.ForwardRef]=Vb;Kf[Gf.Memo]=d0;function Jp(e){return Gf.isMemo(e)?d0:Kf[e.$$typeof]||Ub}var Wb=Object.defineProperty,Hb=Object.getOwnPropertyNames,Zp=Object.getOwnPropertySymbols,Gb=Object.getOwnPropertyDescriptor,Kb=Object.getPrototypeOf,eh=Object.prototype;function p0(e,t,n){if(typeof t!="string"){if(eh){var r=Kb(t);r&&r!==eh&&p0(e,r,n)}var i=Hb(t);Zp&&(i=i.concat(Zp(t)));for(var o=Jp(e),a=Jp(t),s=0;s<i.length;++s){var l=i[s];if(!Bb[l]&&!(n&&n[l])&&!(a&&a[l])&&!(o&&o[l])){var u=Gb(t,l);try{Wb(e,l,u)}catch{}}}}return e}var Yb=p0;const Yf=$i(Yb);var qb=function(e,t){return Yf(e,t)},Qb=!0;function qf(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var ll=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||Qb===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},ul=function(t,n,r){ll(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Xb(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Jb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zb=/[A-Z]|^ms/g,eS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,h0=function(t){return t.charCodeAt(1)===45},th=function(t){return t!=null&&typeof t!="boolean"},iu=l0(function(e){return h0(e)?e:e.replace(Zb,"-$&").toLowerCase()}),nh=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(eS,function(r,i,o){return qt={name:i,styles:o,next:qt},i})}return Jb[t]!==1&&!h0(t)&&typeof n=="number"&&n!==0?n+"px":n};function wo(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return qt={name:n.name,styles:n.styles,next:qt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)qt={name:r.name,styles:r.styles,next:qt},r=r.next;var i=n.styles+";";return i}return tS(e,t,n)}case"function":{if(e!==void 0){var o=qt,a=n(e);return qt=o,wo(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function tS(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=wo(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":th(a)&&(r+=iu(o)+":"+nh(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)th(a[s])&&(r+=iu(o)+":"+nh(o,a[s])+";");else{var l=wo(e,t,a);switch(o){case"animation":case"animationName":{r+=iu(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var rh=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qt,Jo=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";qt=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=wo(r,n,a)):o+=a[0];for(var s=1;s<t.length;s++)o+=wo(r,n,t[s]),i&&(o+=a[s]);rh.lastIndex=0;for(var l="",u;(u=rh.exec(o))!==null;)l+="-"+u[1];var f=Xb(o)+l;return{name:f,styles:o,next:qt}},nS=function(t){return t()},m0=rc["useInsertionEffect"]?rc["useInsertionEffect"]:!1,Qf=m0||nS,ih=m0||w.useLayoutEffect,Xf={}.hasOwnProperty,Jf=w.createContext(typeof HTMLElement<"u"?Nb({key:"css"}):null),rS=Jf.Provider,iS=function(){return w.useContext(Jf)},Zo=function(t){return w.forwardRef(function(n,r){var i=w.useContext(Jf);return t(n,i,r)})},xn=w.createContext({}),oS=function(){return w.useContext(xn)},aS=function(t,n){if(typeof n=="function"){var r=n(t);return r}return xo({},t,n)},sS=Qp(function(e){return Qp(function(t){return aS(e,t)})}),g0=function(t){var n=w.useContext(xn);return t.theme!==n&&(n=sS(n)(t.theme)),w.createElement(xn.Provider,{value:n},t.children)};function lS(e){var t=e.displayName||e.name||"Component",n=function(o,a){var s=w.useContext(xn);return w.createElement(e,xo({theme:s,ref:a},o))},r=w.forwardRef(n);return r.displayName="WithTheme("+t+")",qb(r,e)}var ac="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",uS=function(t,n){var r={};for(var i in n)Xf.call(n,i)&&(r[i]=n[i]);return r[ac]=t,r},cS=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ll(n,r,i),Qf(function(){return ul(n,r,i)}),null},fS=Zo(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[ac],o=[r],a="";typeof e.className=="string"?a=qf(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var s=Jo(o,void 0,w.useContext(xn));a+=t.key+"-"+s.name;var l={};for(var u in e)Xf.call(e,u)&&u!=="css"&&u!==ac&&(l[u]=e[u]);return l.ref=n,l.className=a,w.createElement(w.Fragment,null,w.createElement(cS,{cache:t,serialized:s,isStringTag:typeof i=="string"}),w.createElement(i,l))}),dS=fS,oh=function(t,n){var r=arguments;if(n==null||!Xf.call(n,"css"))return w.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=dS,o[1]=uS(t,n);for(var a=2;a<i;a++)o[a]=r[a];return w.createElement.apply(null,o)},y0=Zo(function(e,t){var n=e.styles,r=Jo([n],void 0,w.useContext(xn)),i=w.useRef();return ih(function(){var o=t.key+"-global",a=new t.sheet.constructor({key:o,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+o+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",o),a.hydrate([l])),i.current=[a,s],function(){a.flush()}},[t]),ih(function(){var o=i.current,a=o[0],s=o[1];if(s){o[1]=!1;return}if(r.next!==void 0&&ul(t,r.next,!0),a.tags.length){var l=a.tags[a.tags.length-1].nextElementSibling;a.before=l,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function Zf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Jo(t)}var pS=function(){var t=Zf.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},hS=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var o=t[r];if(o!=null){var a=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))a=e(o);else{a="";for(var s in o)o[s]&&s&&(a&&(a+=" "),a+=s)}break}default:a=o}a&&(i&&(i+=" "),i+=a)}}return i};function mS(e,t,n){var r=[],i=qf(e,r,n);return r.length<2?n:i+t(r)}var gS=function(t){var n=t.cache,r=t.serializedArr;return Qf(function(){for(var i=0;i<r.length;i++)ul(n,r[i],!1)}),null},yS=Zo(function(e,t){var n=!1,r=[],i=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];var d=Jo(f,t.registered);return r.push(d),ll(t,d,!1),t.key+"-"+d.name},o=function(){for(var u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];return mS(t.registered,i,hS(f))},a={css:i,cx:o,theme:w.useContext(xn)},s=e.children(a);return n=!0,w.createElement(w.Fragment,null,w.createElement(gS,{cache:t,serializedArr:r}),s)});const vS=Object.freeze(Object.defineProperty({__proto__:null,CacheProvider:rS,ClassNames:yS,Global:y0,ThemeContext:xn,ThemeProvider:g0,__unsafe_useEmotionCache:iS,createElement:oh,css:Zf,jsx:oh,keyframes:pS,useTheme:oS,withEmotionCache:Zo,withTheme:lS},Symbol.toStringTag,{value:"Module"}));var sc={},v0={exports:{}},bt={},x0={exports:{}},w0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,W){var H=F.length;F.push(W);e:for(;0<H;){var ie=H-1>>>1,R=F[ie];if(0<i(R,W))F[ie]=W,F[H]=R,H=ie;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var W=F[0],H=F.pop();if(H!==W){F[0]=H;e:for(var ie=0,R=F.length,z=R>>>1;ie<z;){var M=2*(ie+1)-1,V=F[M],T=M+1,q=F[T];if(0>i(V,H))T<R&&0>i(q,V)?(F[ie]=q,F[T]=H,ie=T):(F[ie]=V,F[M]=H,ie=M);else if(T<R&&0>i(q,H))F[ie]=q,F[T]=H,ie=T;else break e}}return W}function i(F,W){var H=F.sortIndex-W.sortIndex;return H!==0?H:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],f=1,c=null,d=3,v=!1,g=!1,m=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=F)r(u),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(u)}}function S(F){if(m=!1,y(F),!g)if(n(l)!==null)g=!0,Ft(E);else{var W=n(u);W!==null&&Ve(S,W.startTime-F)}}function E(F,W){g=!1,m&&(m=!1,h(A),A=-1),v=!0;var H=d;try{for(y(W),c=n(l);c!==null&&(!(c.expirationTime>W)||F&&!G());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,d=c.priorityLevel;var R=ie(c.expirationTime<=W);W=e.unstable_now(),typeof R=="function"?c.callback=R:c===n(l)&&r(l),y(W)}else r(l);c=n(l)}if(c!==null)var z=!0;else{var M=n(u);M!==null&&Ve(S,M.startTime-W),z=!1}return z}finally{c=null,d=H,v=!1}}var _=!1,$=null,A=-1,B=5,D=-1;function G(){return!(e.unstable_now()-D<B)}function xe(){if($!==null){var F=e.unstable_now();D=F;var W=!0;try{W=$(!0,F)}finally{W?Q():(_=!1,$=null)}}else _=!1}var Q;if(typeof p=="function")Q=function(){p(xe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Te=$e.port2;$e.port1.onmessage=xe,Q=function(){Te.postMessage(null)}}else Q=function(){x(xe,0)};function Ft(F){$=F,_||(_=!0,Q())}function Ve(F,W){A=x(function(){F(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Ft(E))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(F){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var H=d;d=W;try{return F()}finally{d=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=d;d=F;try{return W()}finally{d=H}},e.unstable_scheduleCallback=function(F,W,H){var ie=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,F){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=H+R,F={id:f++,callback:W,priorityLevel:F,startTime:H,expirationTime:R,sortIndex:-1},H>ie?(F.sortIndex=H,t(u,F),n(l)===null&&F===n(u)&&(m?(h(A),A=-1):m=!0,Ve(S,H-ie))):(F.sortIndex=R,t(l,F),g||v||(g=!0,Ft(E))),F},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(F){var W=d;return function(){var H=d;d=W;try{return F.apply(this,arguments)}finally{d=H}}}})(w0);x0.exports=w0;var xS=x0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0=w,vt=xS;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S0=new Set,bo={};function jr(e,t){hi(e,t),hi(e+"Capture",t)}function hi(e,t){for(bo[e]=t,e=0;e<t.length;e++)S0.add(t[e])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=Object.prototype.hasOwnProperty,wS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ah={},sh={};function bS(e){return lc.call(sh,e)?!0:lc.call(ah,e)?!1:wS.test(e)?sh[e]=!0:(ah[e]=!0,!1)}function SS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kS(e,t,n,r){if(t===null||typeof t>"u"||SS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function at(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qe[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];qe[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qe[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qe[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qe[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qe[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qe[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qe[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qe[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var ed=/[\-:]([a-z])/g;function td(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ed,td);qe[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ed,td);qe[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ed,td);qe[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qe[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});qe.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qe[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});function nd(e,t,n,r){var i=qe.hasOwnProperty(t)?qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kS(t,n,i,r)&&(n=null),r||i===null?bS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _n=b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),E0=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),od=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),_0=Symbol.for("react.offscreen"),lh=Symbol.iterator;function Mi(e){return e===null||typeof e!="object"?null:(e=lh&&e[lh]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Object.assign,ou;function Xi(e){if(ou===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ou=t&&t[1]||""}return`
`+ou+e}var au=!1;function su(e,t){if(!e||au)return"";au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{au=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xi(e):""}function ES(e){switch(e.tag){case 5:return Xi(e.type);case 16:return Xi("Lazy");case 13:return Xi("Suspense");case 19:return Xi("SuspenseList");case 0:case 2:case 15:return e=su(e.type,!1),e;case 11:return e=su(e.type.render,!1),e;case 1:return e=su(e.type,!0),e;default:return""}}function dc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case Wr:return"Portal";case uc:return"Profiler";case rd:return"StrictMode";case cc:return"Suspense";case fc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E0:return(e.displayName||"Context")+".Consumer";case k0:return(e._context.displayName||"Context")+".Provider";case id:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case od:return t=e.displayName||null,t!==null?t:dc(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return dc(e(t))}catch{}}return null}function _S(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dc(t);case 8:return t===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function O0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function OS(e){var t=O0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ha(e){e._valueTracker||(e._valueTracker=OS(e))}function $0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=O0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function us(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pc(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function uh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function T0(e,t){t=t.checked,t!=null&&nd(e,"checked",t,!1)}function hc(e,t){T0(e,t);var n=tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mc(e,t.type,n):t.hasOwnProperty("defaultValue")&&mc(e,t.type,tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ch(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mc(e,t,n){(t!=="number"||us(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ji=Array.isArray;function oi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Ji(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tr(n)}}function C0(e,t){var n=tr(t.value),r=tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function P0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?P0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ma,j0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ma.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function So(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$S=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){$S.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function R0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function A0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=R0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var TS=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(e,t){if(t){if(TS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function xc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function ad(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bc=null,ai=null,si=null;function ph(e){if(e=na(e)){if(typeof bc!="function")throw Error(j(280));var t=e.stateNode;t&&(t=hl(t),bc(e.stateNode,e.type,t))}}function F0(e){ai?si?si.push(e):si=[e]:ai=e}function N0(){if(ai){var e=ai,t=si;if(si=ai=null,ph(e),t)for(e=0;e<t.length;e++)ph(t[e])}}function I0(e,t){return e(t)}function L0(){}var lu=!1;function z0(e,t,n){if(lu)return e(t,n);lu=!0;try{return I0(e,t,n)}finally{lu=!1,(ai!==null||si!==null)&&(L0(),N0())}}function ko(e,t){var n=e.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Sc=!1;if(wn)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{Sc=!1}function CS(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var io=!1,cs=null,fs=!1,kc=null,PS={onError:function(e){io=!0,cs=e}};function jS(e,t,n,r,i,o,a,s,l){io=!1,cs=null,CS.apply(PS,arguments)}function RS(e,t,n,r,i,o,a,s,l){if(jS.apply(this,arguments),io){if(io){var u=cs;io=!1,cs=null}else throw Error(j(198));fs||(fs=!0,kc=u)}}function Rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function D0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hh(e){if(Rr(e)!==e)throw Error(j(188))}function AS(e){var t=e.alternate;if(!t){if(t=Rr(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return hh(i),e;if(o===r)return hh(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function M0(e){return e=AS(e),e!==null?U0(e):null}function U0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=U0(e);if(t!==null)return t;e=e.sibling}return null}var B0=vt.unstable_scheduleCallback,mh=vt.unstable_cancelCallback,FS=vt.unstable_shouldYield,NS=vt.unstable_requestPaint,Pe=vt.unstable_now,IS=vt.unstable_getCurrentPriorityLevel,sd=vt.unstable_ImmediatePriority,V0=vt.unstable_UserBlockingPriority,ds=vt.unstable_NormalPriority,LS=vt.unstable_LowPriority,W0=vt.unstable_IdlePriority,cl=null,Zt=null;function zS(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(cl,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:US,DS=Math.log,MS=Math.LN2;function US(e){return e>>>=0,e===0?32:31-(DS(e)/MS|0)|0}var ga=64,ya=4194304;function Zi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ps(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Zi(s):(o&=a,o!==0&&(r=Zi(o)))}else a=n&~i,a!==0?r=Zi(a):o!==0&&(r=Zi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bt(t),i=1<<n,r|=e[n],t&=~i;return r}function BS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Bt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=BS(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function Ec(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function H0(){var e=ga;return ga<<=1,!(ga&4194240)&&(ga=64),e}function uu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ea(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=n}function WS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ld(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function G0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var K0,ud,Y0,q0,Q0,_c=!1,va=[],Bn=null,Vn=null,Wn=null,Eo=new Map,_o=new Map,Nn=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gh(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(t.pointerId)}}function Bi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=na(t),t!==null&&ud(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function GS(e,t,n,r,i){switch(t){case"focusin":return Bn=Bi(Bn,e,t,n,r,i),!0;case"dragenter":return Vn=Bi(Vn,e,t,n,r,i),!0;case"mouseover":return Wn=Bi(Wn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Eo.set(o,Bi(Eo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_o.set(o,Bi(_o.get(o)||null,e,t,n,r,i)),!0}return!1}function X0(e){var t=gr(e.target);if(t!==null){var n=Rr(t);if(n!==null){if(t=n.tag,t===13){if(t=D0(n),t!==null){e.blockedOn=t,Q0(e.priority,function(){Y0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ua(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wc=r,n.target.dispatchEvent(r),wc=null}else return t=na(n),t!==null&&ud(t),e.blockedOn=n,!1;t.shift()}return!0}function yh(e,t,n){Ua(e)&&n.delete(t)}function KS(){_c=!1,Bn!==null&&Ua(Bn)&&(Bn=null),Vn!==null&&Ua(Vn)&&(Vn=null),Wn!==null&&Ua(Wn)&&(Wn=null),Eo.forEach(yh),_o.forEach(yh)}function Vi(e,t){e.blockedOn===t&&(e.blockedOn=null,_c||(_c=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,KS)))}function Oo(e){function t(i){return Vi(i,e)}if(0<va.length){Vi(va[0],e);for(var n=1;n<va.length;n++){var r=va[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bn!==null&&Vi(Bn,e),Vn!==null&&Vi(Vn,e),Wn!==null&&Vi(Wn,e),Eo.forEach(t),_o.forEach(t),n=0;n<Nn.length;n++)r=Nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)X0(n),n.blockedOn===null&&Nn.shift()}var li=_n.ReactCurrentBatchConfig,hs=!0;function YS(e,t,n,r){var i=ue,o=li.transition;li.transition=null;try{ue=1,cd(e,t,n,r)}finally{ue=i,li.transition=o}}function qS(e,t,n,r){var i=ue,o=li.transition;li.transition=null;try{ue=4,cd(e,t,n,r)}finally{ue=i,li.transition=o}}function cd(e,t,n,r){if(hs){var i=Oc(e,t,n,r);if(i===null)xu(e,t,r,ms,n),gh(e,r);else if(GS(i,e,t,n,r))r.stopPropagation();else if(gh(e,r),t&4&&-1<HS.indexOf(e)){for(;i!==null;){var o=na(i);if(o!==null&&K0(o),o=Oc(e,t,n,r),o===null&&xu(e,t,r,ms,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else xu(e,t,r,null,n)}}var ms=null;function Oc(e,t,n,r){if(ms=null,e=ad(r),e=gr(e),e!==null)if(t=Rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=D0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ms=e,null}function J0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IS()){case sd:return 1;case V0:return 4;case ds:case LS:return 16;case W0:return 536870912;default:return 16}default:return 16}}var zn=null,fd=null,Ba=null;function Z0(){if(Ba)return Ba;var e,t=fd,n=t.length,r,i="value"in zn?zn.value:zn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ba=i.slice(e,1<r?1-r:void 0)}function Va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xa(){return!0}function vh(){return!1}function St(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xa:vh,this.isPropagationStopped=vh,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),t}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=St(Pi),ta=Oe({},Pi,{view:0,detail:0}),QS=St(ta),cu,fu,Wi,fl=Oe({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(cu=e.screenX-Wi.screenX,fu=e.screenY-Wi.screenY):fu=cu=0,Wi=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),xh=St(fl),XS=Oe({},fl,{dataTransfer:0}),JS=St(XS),ZS=Oe({},ta,{relatedTarget:0}),du=St(ZS),e2=Oe({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),t2=St(e2),n2=Oe({},Pi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r2=St(n2),i2=Oe({},Pi,{data:0}),wh=St(i2),o2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=s2[e])?!!t[e]:!1}function pd(){return l2}var u2=Oe({},ta,{key:function(e){if(e.key){var t=o2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pd,charCode:function(e){return e.type==="keypress"?Va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c2=St(u2),f2=Oe({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=St(f2),d2=Oe({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pd}),p2=St(d2),h2=Oe({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),m2=St(h2),g2=Oe({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y2=St(g2),v2=[9,13,27,32],hd=wn&&"CompositionEvent"in window,oo=null;wn&&"documentMode"in document&&(oo=document.documentMode);var x2=wn&&"TextEvent"in window&&!oo,ev=wn&&(!hd||oo&&8<oo&&11>=oo),Sh=String.fromCharCode(32),kh=!1;function tv(e,t){switch(e){case"keyup":return v2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function w2(e,t){switch(e){case"compositionend":return nv(t);case"keypress":return t.which!==32?null:(kh=!0,Sh);case"textInput":return e=t.data,e===Sh&&kh?null:e;default:return null}}function b2(e,t){if(Gr)return e==="compositionend"||!hd&&tv(e,t)?(e=Z0(),Ba=fd=zn=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ev&&t.locale!=="ko"?null:t.data;default:return null}}var S2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S2[e.type]:t==="textarea"}function rv(e,t,n,r){F0(r),t=gs(t,"onChange"),0<t.length&&(n=new dd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ao=null,$o=null;function k2(e){hv(e,0)}function dl(e){var t=qr(e);if($0(t))return e}function E2(e,t){if(e==="change")return t}var iv=!1;if(wn){var pu;if(wn){var hu="oninput"in document;if(!hu){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),hu=typeof _h.oninput=="function"}pu=hu}else pu=!1;iv=pu&&(!document.documentMode||9<document.documentMode)}function Oh(){ao&&(ao.detachEvent("onpropertychange",ov),$o=ao=null)}function ov(e){if(e.propertyName==="value"&&dl($o)){var t=[];rv(t,$o,e,ad(e)),z0(k2,t)}}function _2(e,t,n){e==="focusin"?(Oh(),ao=t,$o=n,ao.attachEvent("onpropertychange",ov)):e==="focusout"&&Oh()}function O2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl($o)}function $2(e,t){if(e==="click")return dl(t)}function T2(e,t){if(e==="input"||e==="change")return dl(t)}function C2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:C2;function To(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lc.call(t,i)||!Wt(e[i],t[i]))return!1}return!0}function $h(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Th(e,t){var n=$h(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$h(n)}}function av(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?av(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sv(){for(var e=window,t=us();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=us(e.document)}return t}function md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function P2(e){var t=sv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&av(n.ownerDocument.documentElement,n)){if(r!==null&&md(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Th(n,o);var a=Th(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var j2=wn&&"documentMode"in document&&11>=document.documentMode,Kr=null,$c=null,so=null,Tc=!1;function Ch(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tc||Kr==null||Kr!==us(r)||(r=Kr,"selectionStart"in r&&md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),so&&To(so,r)||(so=r,r=gs($c,"onSelect"),0<r.length&&(t=new dd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yr={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},mu={},lv={};wn&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function pl(e){if(mu[e])return mu[e];if(!Yr[e])return e;var t=Yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lv)return mu[e]=t[n];return e}var uv=pl("animationend"),cv=pl("animationiteration"),fv=pl("animationstart"),dv=pl("transitionend"),pv=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(e,t){pv.set(e,t),jr(t,[e])}for(var gu=0;gu<Ph.length;gu++){var yu=Ph[gu],R2=yu.toLowerCase(),A2=yu[0].toUpperCase()+yu.slice(1);ar(R2,"on"+A2)}ar(uv,"onAnimationEnd");ar(cv,"onAnimationIteration");ar(fv,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(dv,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F2=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function jh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,RS(r,t,void 0,e),e.currentTarget=null}function hv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;jh(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;jh(i,s,u),o=l}}}if(fs)throw e=kc,fs=!1,kc=null,e}function ge(e,t){var n=t[Ac];n===void 0&&(n=t[Ac]=new Set);var r=e+"__bubble";n.has(r)||(mv(t,e,2,!1),n.add(r))}function vu(e,t,n){var r=0;t&&(r|=4),mv(n,e,r,t)}var ba="_reactListening"+Math.random().toString(36).slice(2);function Co(e){if(!e[ba]){e[ba]=!0,S0.forEach(function(n){n!=="selectionchange"&&(F2.has(n)||vu(n,!1,e),vu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ba]||(t[ba]=!0,vu("selectionchange",!1,t))}}function mv(e,t,n,r){switch(J0(t)){case 1:var i=YS;break;case 4:i=qS;break;default:i=cd}n=i.bind(null,t,n,e),i=void 0,!Sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=gr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}z0(function(){var u=o,f=ad(n),c=[];e:{var d=pv.get(e);if(d!==void 0){var v=dd,g=e;switch(e){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":v=c2;break;case"focusin":g="focus",v=du;break;case"focusout":g="blur",v=du;break;case"beforeblur":case"afterblur":v=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=JS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=p2;break;case uv:case cv:case fv:v=t2;break;case dv:v=m2;break;case"scroll":v=QS;break;case"wheel":v=y2;break;case"copy":case"cut":case"paste":v=r2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=bh}var m=(t&4)!==0,x=!m&&e==="scroll",h=m?d!==null?d+"Capture":null:d;m=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=ko(p,h),S!=null&&m.push(Po(p,S,y)))),x)break;p=p.return}0<m.length&&(d=new v(d,g,null,n,f),c.push({event:d,listeners:m}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&n!==wc&&(g=n.relatedTarget||n.fromElement)&&(gr(g)||g[bn]))break e;if((v||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?gr(g):null,g!==null&&(x=Rr(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(m=xh,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(m=bh,S="onPointerLeave",h="onPointerEnter",p="pointer"),x=v==null?d:qr(v),y=g==null?d:qr(g),d=new m(S,p+"leave",v,n,f),d.target=x,d.relatedTarget=y,S=null,gr(f)===u&&(m=new m(h,p+"enter",g,n,f),m.target=y,m.relatedTarget=x,S=m),x=S,v&&g)t:{for(m=v,h=g,p=0,y=m;y;y=Mr(y))p++;for(y=0,S=h;S;S=Mr(S))y++;for(;0<p-y;)m=Mr(m),p--;for(;0<y-p;)h=Mr(h),y--;for(;p--;){if(m===h||h!==null&&m===h.alternate)break t;m=Mr(m),h=Mr(h)}m=null}else m=null;v!==null&&Rh(c,d,v,m,!1),g!==null&&x!==null&&Rh(c,x,g,m,!0)}}e:{if(d=u?qr(u):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var E=E2;else if(Eh(d))if(iv)E=T2;else{E=O2;var _=_2}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=$2);if(E&&(E=E(e,u))){rv(c,E,n,f);break e}_&&_(e,d,u),e==="focusout"&&(_=d._wrapperState)&&_.controlled&&d.type==="number"&&mc(d,"number",d.value)}switch(_=u?qr(u):window,e){case"focusin":(Eh(_)||_.contentEditable==="true")&&(Kr=_,$c=u,so=null);break;case"focusout":so=$c=Kr=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,Ch(c,n,f);break;case"selectionchange":if(j2)break;case"keydown":case"keyup":Ch(c,n,f)}var $;if(hd)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Gr?tv(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(ev&&n.locale!=="ko"&&(Gr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Gr&&($=Z0()):(zn=f,fd="value"in zn?zn.value:zn.textContent,Gr=!0)),_=gs(u,A),0<_.length&&(A=new wh(A,e,null,n,f),c.push({event:A,listeners:_}),$?A.data=$:($=nv(n),$!==null&&(A.data=$)))),($=x2?w2(e,n):b2(e,n))&&(u=gs(u,"onBeforeInput"),0<u.length&&(f=new wh("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=$))}hv(c,t)})}function Po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ko(e,n),o!=null&&r.unshift(Po(e,o,i)),o=ko(e,t),o!=null&&r.push(Po(e,o,i))),e=e.return}return r}function Mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rh(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=ko(n,o),l!=null&&a.unshift(Po(n,l,s))):i||(l=ko(n,o),l!=null&&a.push(Po(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var N2=/\r\n?/g,I2=/\u0000|\uFFFD/g;function Ah(e){return(typeof e=="string"?e:""+e).replace(N2,`
`).replace(I2,"")}function Sa(e,t,n){if(t=Ah(t),Ah(e)!==t&&n)throw Error(j(425))}function ys(){}var Cc=null,Pc=null;function jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,L2=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,z2=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(e){return Fh.resolve(null).then(e).catch(D2)}:Rc;function D2(e){setTimeout(function(){throw e})}function wu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Oo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oo(t)}function Hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ji=Math.random().toString(36).slice(2),Qt="__reactFiber$"+ji,jo="__reactProps$"+ji,bn="__reactContainer$"+ji,Ac="__reactEvents$"+ji,M2="__reactListeners$"+ji,U2="__reactHandles$"+ji;function gr(e){var t=e[Qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bn]||n[Qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nh(e);e!==null;){if(n=e[Qt])return n;e=Nh(e)}return t}e=n,n=e.parentNode}return null}function na(e){return e=e[Qt]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function hl(e){return e[jo]||null}var Fc=[],Qr=-1;function sr(e){return{current:e}}function ve(e){0>Qr||(e.current=Fc[Qr],Fc[Qr]=null,Qr--)}function he(e,t){Qr++,Fc[Qr]=e.current,e.current=t}var nr={},nt=sr(nr),ct=sr(!1),kr=nr;function mi(e,t){var n=e.type.contextTypes;if(!n)return nr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ft(e){return e=e.childContextTypes,e!=null}function vs(){ve(ct),ve(nt)}function Ih(e,t,n){if(nt.current!==nr)throw Error(j(168));he(nt,t),he(ct,n)}function gv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,_S(e)||"Unknown",i));return Oe({},n,r)}function xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,kr=nt.current,he(nt,e),he(ct,ct.current),!0}function Lh(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=gv(e,t,kr),r.__reactInternalMemoizedMergedChildContext=e,ve(ct),ve(nt),he(nt,e)):ve(ct),he(ct,n)}var pn=null,ml=!1,bu=!1;function yv(e){pn===null?pn=[e]:pn.push(e)}function B2(e){ml=!0,yv(e)}function lr(){if(!bu&&pn!==null){bu=!0;var e=0,t=ue;try{var n=pn;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pn=null,ml=!1}catch(i){throw pn!==null&&(pn=pn.slice(e+1)),B0(sd,lr),i}finally{ue=t,bu=!1}}return null}var Xr=[],Jr=0,ws=null,bs=0,Ot=[],$t=0,Er=null,hn=1,mn="";function dr(e,t){Xr[Jr++]=bs,Xr[Jr++]=ws,ws=e,bs=t}function vv(e,t,n){Ot[$t++]=hn,Ot[$t++]=mn,Ot[$t++]=Er,Er=e;var r=hn;e=mn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var o=32-Bt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,hn=1<<32-Bt(t)+i|n<<i|r,mn=o+e}else hn=1<<o|n<<i|r,mn=e}function gd(e){e.return!==null&&(dr(e,1),vv(e,1,0))}function yd(e){for(;e===ws;)ws=Xr[--Jr],Xr[Jr]=null,bs=Xr[--Jr],Xr[Jr]=null;for(;e===Er;)Er=Ot[--$t],Ot[$t]=null,mn=Ot[--$t],Ot[$t]=null,hn=Ot[--$t],Ot[$t]=null}var yt=null,mt=null,Se=!1,Mt=null;function xv(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,mt=Hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Er!==null?{id:hn,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,mt=null,!0):!1;default:return!1}}function Nc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ic(e){if(Se){var t=mt;if(t){var n=t;if(!zh(e,t)){if(Nc(e))throw Error(j(418));t=Hn(n.nextSibling);var r=yt;t&&zh(e,t)?xv(r,n):(e.flags=e.flags&-4097|2,Se=!1,yt=e)}}else{if(Nc(e))throw Error(j(418));e.flags=e.flags&-4097|2,Se=!1,yt=e}}}function Dh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function ka(e){if(e!==yt)return!1;if(!Se)return Dh(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jc(e.type,e.memoizedProps)),t&&(t=mt)){if(Nc(e))throw wv(),Error(j(418));for(;t;)xv(e,t),t=Hn(t.nextSibling)}if(Dh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mt=Hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=yt?Hn(e.stateNode.nextSibling):null;return!0}function wv(){for(var e=mt;e;)e=Hn(e.nextSibling)}function gi(){mt=yt=null,Se=!1}function vd(e){Mt===null?Mt=[e]:Mt.push(e)}var V2=_n.ReactCurrentBatchConfig;function zt(e,t){if(e&&e.defaultProps){t=Oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ss=sr(null),ks=null,Zr=null,xd=null;function wd(){xd=Zr=ks=null}function bd(e){var t=Ss.current;ve(Ss),e._currentValue=t}function Lc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ui(e,t){ks=e,xd=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(xd!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(ks===null)throw Error(j(308));Zr=e,ks.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var yr=null;function Sd(e){yr===null?yr=[e]:yr.push(e)}function bv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Sn(e,r)}function Sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var An=!1;function kd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Sn(e,n)}return i=r.interleaved,i===null?(t.next=t,Sd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Sn(e,n)}function Wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ld(e,n)}}function Mh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Es(e,t,n,r){var i=e.updateQueue;An=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;a=0,f=u=l=null,s=o;do{var d=s.lane,v=s.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,m=s;switch(d=t,v=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){c=g.call(v,c,d);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,d=typeof g=="function"?g.call(v,c,d):g,d==null)break e;c=Oe({},c,d);break e;case 2:An=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else v={eventTime:v,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,l=c):f=f.next=v,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(f===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Or|=a,e.lanes=a,e.memoizedState=c}}function Uh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var kv=new b0.Component().refs;function zc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?Rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),i=Yn(e),o=yn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Gn(e,o,i),t!==null&&(Vt(t,e,i,r),Wa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),i=Yn(e),o=yn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Gn(e,o,i),t!==null&&(Vt(t,e,i,r),Wa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=Yn(e),i=yn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,r),t!==null&&(Vt(t,e,r,n),Wa(t,e,r))}};function Bh(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!To(n,r)||!To(i,o):!0}function Ev(e,t,n){var r=!1,i=nr,o=t.contextType;return typeof o=="object"&&o!==null?o=jt(o):(i=ft(t)?kr:nt.current,r=t.contextTypes,o=(r=r!=null)?mi(e,i):nr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function Dc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=kv,kd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=jt(o):(o=ft(t)?kr:nt.current,i.context=mi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gl.enqueueReplaceState(i,i.state,null),Es(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===kv&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Ea(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wh(e){var t=e._init;return t(e._payload)}function _v(e){function t(h,p){if(e){var y=h.deletions;y===null?(h.deletions=[p],h.flags|=16):y.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=qn(h,p),h.index=0,h.sibling=null,h}function o(h,p,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<p?(h.flags|=2,p):y):(h.flags|=2,p)):(h.flags|=1048576,p)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,p,y,S){return p===null||p.tag!==6?(p=Tu(y,h.mode,S),p.return=h,p):(p=i(p,y),p.return=h,p)}function l(h,p,y,S){var E=y.type;return E===Hr?f(h,p,y.props.children,S,y.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rn&&Wh(E)===p.type)?(S=i(p,y.props),S.ref=Hi(h,p,y),S.return=h,S):(S=Qa(y.type,y.key,y.props,null,h.mode,S),S.ref=Hi(h,p,y),S.return=h,S)}function u(h,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Cu(y,h.mode,S),p.return=h,p):(p=i(p,y.children||[]),p.return=h,p)}function f(h,p,y,S,E){return p===null||p.tag!==7?(p=br(y,h.mode,S,E),p.return=h,p):(p=i(p,y),p.return=h,p)}function c(h,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Tu(""+p,h.mode,y),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pa:return y=Qa(p.type,p.key,p.props,null,h.mode,y),y.ref=Hi(h,null,p),y.return=h,y;case Wr:return p=Cu(p,h.mode,y),p.return=h,p;case Rn:var S=p._init;return c(h,S(p._payload),y)}if(Ji(p)||Mi(p))return p=br(p,h.mode,y,null),p.return=h,p;Ea(h,p)}return null}function d(h,p,y,S){var E=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:s(h,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pa:return y.key===E?l(h,p,y,S):null;case Wr:return y.key===E?u(h,p,y,S):null;case Rn:return E=y._init,d(h,p,E(y._payload),S)}if(Ji(y)||Mi(y))return E!==null?null:f(h,p,y,S,null);Ea(h,y)}return null}function v(h,p,y,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,s(p,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pa:return h=h.get(S.key===null?y:S.key)||null,l(p,h,S,E);case Wr:return h=h.get(S.key===null?y:S.key)||null,u(p,h,S,E);case Rn:var _=S._init;return v(h,p,y,_(S._payload),E)}if(Ji(S)||Mi(S))return h=h.get(y)||null,f(p,h,S,E,null);Ea(p,S)}return null}function g(h,p,y,S){for(var E=null,_=null,$=p,A=p=0,B=null;$!==null&&A<y.length;A++){$.index>A?(B=$,$=null):B=$.sibling;var D=d(h,$,y[A],S);if(D===null){$===null&&($=B);break}e&&$&&D.alternate===null&&t(h,$),p=o(D,p,A),_===null?E=D:_.sibling=D,_=D,$=B}if(A===y.length)return n(h,$),Se&&dr(h,A),E;if($===null){for(;A<y.length;A++)$=c(h,y[A],S),$!==null&&(p=o($,p,A),_===null?E=$:_.sibling=$,_=$);return Se&&dr(h,A),E}for($=r(h,$);A<y.length;A++)B=v($,h,A,y[A],S),B!==null&&(e&&B.alternate!==null&&$.delete(B.key===null?A:B.key),p=o(B,p,A),_===null?E=B:_.sibling=B,_=B);return e&&$.forEach(function(G){return t(h,G)}),Se&&dr(h,A),E}function m(h,p,y,S){var E=Mi(y);if(typeof E!="function")throw Error(j(150));if(y=E.call(y),y==null)throw Error(j(151));for(var _=E=null,$=p,A=p=0,B=null,D=y.next();$!==null&&!D.done;A++,D=y.next()){$.index>A?(B=$,$=null):B=$.sibling;var G=d(h,$,D.value,S);if(G===null){$===null&&($=B);break}e&&$&&G.alternate===null&&t(h,$),p=o(G,p,A),_===null?E=G:_.sibling=G,_=G,$=B}if(D.done)return n(h,$),Se&&dr(h,A),E;if($===null){for(;!D.done;A++,D=y.next())D=c(h,D.value,S),D!==null&&(p=o(D,p,A),_===null?E=D:_.sibling=D,_=D);return Se&&dr(h,A),E}for($=r(h,$);!D.done;A++,D=y.next())D=v($,h,A,D.value,S),D!==null&&(e&&D.alternate!==null&&$.delete(D.key===null?A:D.key),p=o(D,p,A),_===null?E=D:_.sibling=D,_=D);return e&&$.forEach(function(xe){return t(h,xe)}),Se&&dr(h,A),E}function x(h,p,y,S){if(typeof y=="object"&&y!==null&&y.type===Hr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pa:e:{for(var E=y.key,_=p;_!==null;){if(_.key===E){if(E=y.type,E===Hr){if(_.tag===7){n(h,_.sibling),p=i(_,y.props.children),p.return=h,h=p;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rn&&Wh(E)===_.type){n(h,_.sibling),p=i(_,y.props),p.ref=Hi(h,_,y),p.return=h,h=p;break e}n(h,_);break}else t(h,_);_=_.sibling}y.type===Hr?(p=br(y.props.children,h.mode,S,y.key),p.return=h,h=p):(S=Qa(y.type,y.key,y.props,null,h.mode,S),S.ref=Hi(h,p,y),S.return=h,h=S)}return a(h);case Wr:e:{for(_=y.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(h,p.sibling),p=i(p,y.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Cu(y,h.mode,S),p.return=h,h=p}return a(h);case Rn:return _=y._init,x(h,p,_(y._payload),S)}if(Ji(y))return g(h,p,y,S);if(Mi(y))return m(h,p,y,S);Ea(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,y),p.return=h,h=p):(n(h,p),p=Tu(y,h.mode,S),p.return=h,h=p),a(h)):n(h,p)}return x}var yi=_v(!0),Ov=_v(!1),ra={},en=sr(ra),Ro=sr(ra),Ao=sr(ra);function vr(e){if(e===ra)throw Error(j(174));return e}function Ed(e,t){switch(he(Ao,t),he(Ro,e),he(en,ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yc(t,e)}ve(en),he(en,t)}function vi(){ve(en),ve(Ro),ve(Ao)}function $v(e){vr(Ao.current);var t=vr(en.current),n=yc(t,e.type);t!==n&&(he(Ro,e),he(en,n))}function _d(e){Ro.current===e&&(ve(en),ve(Ro))}var ke=sr(0);function _s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Su=[];function Od(){for(var e=0;e<Su.length;e++)Su[e]._workInProgressVersionPrimary=null;Su.length=0}var Ha=_n.ReactCurrentDispatcher,ku=_n.ReactCurrentBatchConfig,_r=0,Ee=null,Le=null,Me=null,Os=!1,lo=!1,Fo=0,W2=0;function Xe(){throw Error(j(321))}function $d(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wt(e[n],t[n]))return!1;return!0}function Td(e,t,n,r,i,o){if(_r=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ha.current=e===null||e.memoizedState===null?Y2:q2,e=n(r,i),lo){o=0;do{if(lo=!1,Fo=0,25<=o)throw Error(j(301));o+=1,Me=Le=null,t.updateQueue=null,Ha.current=Q2,e=n(r,i)}while(lo)}if(Ha.current=$s,t=Le!==null&&Le.next!==null,_r=0,Me=Le=Ee=null,Os=!1,t)throw Error(j(300));return e}function Cd(){var e=Fo!==0;return Fo=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ee.memoizedState=Me=e:Me=Me.next=e,Me}function Rt(){if(Le===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Me===null?Ee.memoizedState:Me.next;if(t!==null)Me=t,Le=e;else{if(e===null)throw Error(j(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Me===null?Ee.memoizedState=Me=e:Me=Me.next=e}return Me}function No(e,t){return typeof t=="function"?t(e):t}function Eu(e){var t=Rt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var f=u.lane;if((_r&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=c,a=r):l=l.next=c,Ee.lanes|=f,Or|=f}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Wt(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,Or|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _u(e){var t=Rt(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Wt(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Tv(){}function Cv(e,t){var n=Ee,r=Rt(),i=t(),o=!Wt(r.memoizedState,i);if(o&&(r.memoizedState=i,ut=!0),r=r.queue,Pd(Rv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Io(9,jv.bind(null,n,r,i,t),void 0,null),Ue===null)throw Error(j(349));_r&30||Pv(n,t,i)}return i}function Pv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jv(e,t,n,r){t.value=n,t.getSnapshot=r,Av(t)&&Fv(e)}function Rv(e,t,n){return n(function(){Av(t)&&Fv(e)})}function Av(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wt(e,n)}catch{return!0}}function Fv(e){var t=Sn(e,1);t!==null&&Vt(t,e,1,-1)}function Hh(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t.queue=e,e=e.dispatch=K2.bind(null,Ee,e),[t.memoizedState,e]}function Io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nv(){return Rt().memoizedState}function Ga(e,t,n,r){var i=Gt();Ee.flags|=e,i.memoizedState=Io(1|t,n,void 0,r===void 0?null:r)}function yl(e,t,n,r){var i=Rt();r=r===void 0?null:r;var o=void 0;if(Le!==null){var a=Le.memoizedState;if(o=a.destroy,r!==null&&$d(r,a.deps)){i.memoizedState=Io(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=Io(1|t,n,o,r)}function Gh(e,t){return Ga(8390656,8,e,t)}function Pd(e,t){return yl(2048,8,e,t)}function Iv(e,t){return yl(4,2,e,t)}function Lv(e,t){return yl(4,4,e,t)}function zv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Dv(e,t,n){return n=n!=null?n.concat([e]):null,yl(4,4,zv.bind(null,t,e),n)}function jd(){}function Mv(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$d(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uv(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$d(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bv(e,t,n){return _r&21?(Wt(n,t)||(n=H0(),Ee.lanes|=n,Or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function H2(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=ku.transition;ku.transition={};try{e(!1),t()}finally{ue=n,ku.transition=r}}function Vv(){return Rt().memoizedState}function G2(e,t,n){var r=Yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wv(e))Hv(t,n);else if(n=bv(e,t,n,r),n!==null){var i=it();Vt(n,e,r,i),Gv(n,t,r)}}function K2(e,t,n){var r=Yn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wv(e))Hv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Wt(s,a)){var l=t.interleaved;l===null?(i.next=i,Sd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=bv(e,t,i,r),n!==null&&(i=it(),Vt(n,e,r,i),Gv(n,t,r))}}function Wv(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function Hv(e,t){lo=Os=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ld(e,n)}}var $s={readContext:jt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Y2={readContext:jt,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:Gh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ga(4194308,4,zv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ga(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ga(4,2,e,t)},useMemo:function(e,t){var n=Gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=G2.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:Hh,useDebugValue:jd,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=Hh(!1),t=e[0];return e=H2.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=Gt();if(Se){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),Ue===null)throw Error(j(349));_r&30||Pv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Gh(Rv.bind(null,r,o,e),[e]),r.flags|=2048,Io(9,jv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Gt(),t=Ue.identifierPrefix;if(Se){var n=mn,r=hn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=W2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},q2={readContext:jt,useCallback:Mv,useContext:jt,useEffect:Pd,useImperativeHandle:Dv,useInsertionEffect:Iv,useLayoutEffect:Lv,useMemo:Uv,useReducer:Eu,useRef:Nv,useState:function(){return Eu(No)},useDebugValue:jd,useDeferredValue:function(e){var t=Rt();return Bv(t,Le.memoizedState,e)},useTransition:function(){var e=Eu(No)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Tv,useSyncExternalStore:Cv,useId:Vv,unstable_isNewReconciler:!1},Q2={readContext:jt,useCallback:Mv,useContext:jt,useEffect:Pd,useImperativeHandle:Dv,useInsertionEffect:Iv,useLayoutEffect:Lv,useMemo:Uv,useReducer:_u,useRef:Nv,useState:function(){return _u(No)},useDebugValue:jd,useDeferredValue:function(e){var t=Rt();return Le===null?t.memoizedState=e:Bv(t,Le.memoizedState,e)},useTransition:function(){var e=_u(No)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Tv,useSyncExternalStore:Cv,useId:Vv,unstable_isNewReconciler:!1};function xi(e,t){try{var n="",r=t;do n+=ES(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ou(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var X2=typeof WeakMap=="function"?WeakMap:Map;function Kv(e,t,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Cs||(Cs=!0,Qc=r),Mc(e,t)},n}function Yv(e,t,n){n=yn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Mc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Mc(e,t),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Kh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new X2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fk.bind(null,e,t,n),t.then(e,e))}function Yh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yn(-1,1),t.tag=2,Gn(n,t,1))),n.lanes|=1),e)}var J2=_n.ReactCurrentOwner,ut=!1;function rt(e,t,n,r){t.child=e===null?Ov(t,null,n,r):yi(t,e.child,n,r)}function Qh(e,t,n,r,i){n=n.render;var o=t.ref;return ui(t,i),r=Td(e,t,n,r,o,i),n=Cd(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kn(e,t,i)):(Se&&n&&gd(t),t.flags|=1,rt(e,t,r,i),t.child)}function Xh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Dd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,qv(e,t,o,r,i)):(e=Qa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(a,r)&&e.ref===t.ref)return kn(e,t,i)}return t.flags|=1,e=qn(o,r),e.ref=t.ref,e.return=t,t.child=e}function qv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(To(o,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,kn(e,t,i)}return Uc(e,t,n,r,i)}function Qv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ti,ht),ht|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(ti,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(ti,ht),ht|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(ti,ht),ht|=r;return rt(e,t,i,n),t.child}function Xv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Uc(e,t,n,r,i){var o=ft(n)?kr:nt.current;return o=mi(t,o),ui(t,i),n=Td(e,t,n,r,o,i),r=Cd(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kn(e,t,i)):(Se&&r&&gd(t),t.flags|=1,rt(e,t,n,i),t.child)}function Jh(e,t,n,r,i){if(ft(n)){var o=!0;xs(t)}else o=!1;if(ui(t,i),t.stateNode===null)Ka(e,t),Ev(t,n,r),Dc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=ft(n)?kr:nt.current,u=mi(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Vh(t,a,r,u),An=!1;var d=t.memoizedState;a.state=d,Es(t,r,a,i),l=t.memoizedState,s!==r||d!==l||ct.current||An?(typeof f=="function"&&(zc(t,n,f,r),l=t.memoizedState),(s=An||Bh(t,n,s,r,d,l,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Sv(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:zt(t.type,s),a.props=u,c=t.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=ft(n)?kr:nt.current,l=mi(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==c||d!==l)&&Vh(t,a,r,l),An=!1,d=t.memoizedState,a.state=d,Es(t,r,a,i);var g=t.memoizedState;s!==c||d!==g||ct.current||An?(typeof v=="function"&&(zc(t,n,v,r),g=t.memoizedState),(u=An||Bh(t,n,u,r,d,g,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Bc(e,t,n,r,o,i)}function Bc(e,t,n,r,i,o){Xv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Lh(t,n,!1),kn(e,t,o);r=t.stateNode,J2.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yi(t,e.child,null,o),t.child=yi(t,null,s,o)):rt(e,t,s,o),t.memoizedState=r.state,i&&Lh(t,n,!0),t.child}function Jv(e){var t=e.stateNode;t.pendingContext?Ih(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ih(e,t.context,!1),Ed(e,t.containerInfo)}function Zh(e,t,n,r,i){return gi(),vd(i),t.flags|=256,rt(e,t,n,r),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0};function Wc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zv(e,t,n){var r=t.pendingProps,i=ke.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(ke,i&1),e===null)return Ic(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=wl(a,r,0,null),e=br(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Wc(n),t.memoizedState=Vc,e):Rd(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Z2(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=qn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=qn(s,o):(o=br(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Wc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Vc,r}return o=e.child,e=o.sibling,r=qn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rd(e,t){return t=wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _a(e,t,n,r){return r!==null&&vd(r),yi(t,e.child,null,n),e=Rd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Z2(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ou(Error(j(422))),_a(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=wl({mode:"visible",children:r.children},i,0,null),o=br(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yi(t,e.child,null,a),t.child.memoizedState=Wc(a),t.memoizedState=Vc,o);if(!(t.mode&1))return _a(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=Ou(o,r,void 0),_a(e,t,a,r)}if(s=(a&e.childLanes)!==0,ut||s){if(r=Ue,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Sn(e,i),Vt(r,e,i,-1))}return zd(),r=Ou(Error(j(421))),_a(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,mt=Hn(i.nextSibling),yt=t,Se=!0,Mt=null,e!==null&&(Ot[$t++]=hn,Ot[$t++]=mn,Ot[$t++]=Er,hn=e.id,mn=e.overflow,Er=t),t=Rd(t,r.children),t.flags|=4096,t)}function em(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Lc(e.return,t,n)}function $u(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function e1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(rt(e,t,r.children,n),r=ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&em(e,n,t);else if(e.tag===19)em(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(ke,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_s(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$u(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_s(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$u(t,!0,n,null,o);break;case"together":$u(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ka(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ek(e,t,n){switch(t.tag){case 3:Jv(t),gi();break;case 5:$v(t);break;case 1:ft(t.type)&&xs(t);break;case 4:Ed(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Ss,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?Zv(e,t,n):(he(ke,ke.current&1),e=kn(e,t,n),e!==null?e.sibling:null);he(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return e1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,Qv(e,t,n)}return kn(e,t,n)}var t1,Hc,n1,r1;t1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hc=function(){};n1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vr(en.current);var o=null;switch(n){case"input":i=pc(e,i),r=pc(e,r),o=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),o=[];break;case"textarea":i=gc(e,i),r=gc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ys)}vc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};r1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gi(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tk(e,t,n){var r=t.pendingProps;switch(yd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return ft(t.type)&&vs(),Je(t),null;case 3:return r=t.stateNode,vi(),ve(ct),ve(nt),Od(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(Zc(Mt),Mt=null))),Hc(e,t),Je(t),null;case 5:_d(t);var i=vr(Ao.current);if(n=t.type,e!==null&&t.stateNode!=null)n1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return Je(t),null}if(e=vr(en.current),ka(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Qt]=t,r[jo]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)ge(eo[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":uh(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":fh(r,o),ge("invalid",r)}vc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Sa(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Sa(r.textContent,s,e),i=["children",""+s]):bo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ge("scroll",r)}switch(n){case"input":ha(r),ch(r,o,!0);break;case"textarea":ha(r),dh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ys)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=P0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Qt]=t,e[jo]=r,t1(e,t,!1,!1),t.stateNode=e;e:{switch(a=xc(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)ge(eo[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":uh(e,r),i=pc(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),ge("invalid",e);break;case"textarea":fh(e,r),i=gc(e,r),ge("invalid",e);break;default:i=r}vc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?A0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&j0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&So(e,l):typeof l=="number"&&So(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ge("scroll",e):l!=null&&nd(e,o,l,a))}switch(n){case"input":ha(e),ch(e,r,!1);break;case"textarea":ha(e),dh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?oi(e,!!r.multiple,o,!1):r.defaultValue!=null&&oi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ys)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)r1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=vr(Ao.current),vr(en.current),ka(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qt]=t,(o=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:Sa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=t,t.stateNode=r}return Je(t),null;case 13:if(ve(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&mt!==null&&t.mode&1&&!(t.flags&128))wv(),gi(),t.flags|=98560,o=!1;else if(o=ka(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Qt]=t}else gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),o=!1}else Mt!==null&&(Zc(Mt),Mt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?ze===0&&(ze=3):zd())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return vi(),Hc(e,t),e===null&&Co(t.stateNode.containerInfo),Je(t),null;case 10:return bd(t.type._context),Je(t),null;case 17:return ft(t.type)&&vs(),Je(t),null;case 19:if(ve(ke),o=t.memoizedState,o===null)return Je(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Gi(o,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_s(e),a!==null){for(t.flags|=128,Gi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(ke,ke.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pe()>wi&&(t.flags|=128,r=!0,Gi(o,!1),t.lanes=4194304)}else{if(!r)if(e=_s(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Se)return Je(t),null}else 2*Pe()-o.renderingStartTime>wi&&n!==1073741824&&(t.flags|=128,r=!0,Gi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pe(),t.sibling=null,n=ke.current,he(ke,r?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return Ld(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ht&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function nk(e,t){switch(yd(t),t.tag){case 1:return ft(t.type)&&vs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vi(),ve(ct),ve(nt),Od(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _d(t),null;case 13:if(ve(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(ke),null;case 4:return vi(),null;case 10:return bd(t.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Oa=!1,tt=!1,rk=typeof WeakSet=="function"?WeakSet:Set,U=null;function ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Gc(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var tm=!1;function ik(e,t){if(Cc=hs,e=sv(),md(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,f=0,c=e,d=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(s=a+i),c!==o||r!==0&&c.nodeType!==3||(l=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(v=c.firstChild)!==null;)d=c,c=v;for(;;){if(c===e)break t;if(d===n&&++u===i&&(s=a),d===o&&++f===r&&(l=a),(v=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:e,selectionRange:n},hs=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,x=g.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?m:zt(t.type,m),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(S){Ce(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=tm,tm=!1,g}function uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gc(t,n,o)}i=i.next}while(i!==r)}}function vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function i1(e){var t=e.alternate;t!==null&&(e.alternate=null,i1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qt],delete t[jo],delete t[Ac],delete t[M2],delete t[U2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function o1(e){return e.tag===5||e.tag===3||e.tag===4}function nm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||o1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ys));else if(r!==4&&(e=e.child,e!==null))for(Yc(e,t,n),e=e.sibling;e!==null;)Yc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}var We=null,Dt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)a1(e,t,n),n=n.sibling}function a1(e,t,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:tt||ei(n,t);case 6:var r=We,i=Dt;We=null,Cn(e,t,n),We=r,Dt=i,We!==null&&(Dt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Dt?(e=We,n=n.stateNode,e.nodeType===8?wu(e.parentNode,n):e.nodeType===1&&wu(e,n),Oo(e)):wu(We,n.stateNode));break;case 4:r=We,i=Dt,We=n.stateNode.containerInfo,Dt=!0,Cn(e,t,n),We=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Gc(n,t,a),i=i.next}while(i!==r)}Cn(e,t,n);break;case 1:if(!tt&&(ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ce(n,t,s)}Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Cn(e,t,n),tt=r):Cn(e,t,n);break;default:Cn(e,t,n)}}function rm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rk),t.forEach(function(r){var i=pk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:We=s.stateNode,Dt=!1;break e;case 3:We=s.stateNode.containerInfo,Dt=!0;break e;case 4:We=s.stateNode.containerInfo,Dt=!0;break e}s=s.return}if(We===null)throw Error(j(160));a1(o,a,i),We=null,Dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ce(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)s1(t,e),t=t.sibling}function s1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Ht(e),r&4){try{uo(3,e,e.return),vl(3,e)}catch(m){Ce(e,e.return,m)}try{uo(5,e,e.return)}catch(m){Ce(e,e.return,m)}}break;case 1:Nt(t,e),Ht(e),r&512&&n!==null&&ei(n,n.return);break;case 5:if(Nt(t,e),Ht(e),r&512&&n!==null&&ei(n,n.return),e.flags&32){var i=e.stateNode;try{So(i,"")}catch(m){Ce(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&T0(i,o),xc(s,a);var u=xc(s,o);for(a=0;a<l.length;a+=2){var f=l[a],c=l[a+1];f==="style"?A0(i,c):f==="dangerouslySetInnerHTML"?j0(i,c):f==="children"?So(i,c):nd(i,f,c,u)}switch(s){case"input":hc(i,o);break;case"textarea":C0(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?oi(i,!!o.multiple,v,!1):d!==!!o.multiple&&(o.defaultValue!=null?oi(i,!!o.multiple,o.defaultValue,!0):oi(i,!!o.multiple,o.multiple?[]:"",!1))}i[jo]=o}catch(m){Ce(e,e.return,m)}}break;case 6:if(Nt(t,e),Ht(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Ce(e,e.return,m)}}break;case 3:if(Nt(t,e),Ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(m){Ce(e,e.return,m)}break;case 4:Nt(t,e),Ht(e);break;case 13:Nt(t,e),Ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Nd=Pe())),r&4&&rm(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||f,Nt(t,e),tt=u):Nt(t,e),Ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(U=e,f=e.child;f!==null;){for(c=U=f;U!==null;){switch(d=U,v=d.child,d.tag){case 0:case 11:case 14:case 15:uo(4,d,d.return);break;case 1:ei(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Ce(r,n,m)}}break;case 5:ei(d,d.return);break;case 22:if(d.memoizedState!==null){om(c);continue}}v!==null?(v.return=d,U=v):om(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=c.stateNode,l=c.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=R0("display",a))}catch(m){Ce(e,e.return,m)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){Ce(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Nt(t,e),Ht(e),r&4&&rm(e);break;case 21:break;default:Nt(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(o1(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(So(i,""),r.flags&=-33);var o=nm(e);qc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=nm(e);Yc(e,s,a);break;default:throw Error(j(161))}}catch(l){Ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ok(e,t,n){U=e,l1(e)}function l1(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Oa;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||tt;s=Oa;var u=tt;if(Oa=a,(tt=l)&&!u)for(U=i;U!==null;)a=U,l=a.child,a.tag===22&&a.memoizedState!==null?am(i):l!==null?(l.return=a,U=l):am(i);for(;o!==null;)U=o,l1(o),o=o.sibling;U=i,Oa=s,tt=u}im(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):im(e)}}function im(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Uh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Oo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}tt||t.flags&512&&Kc(t)}catch(d){Ce(t,t.return,d)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function om(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function am(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(l){Ce(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ce(t,i,l)}}var o=t.return;try{Kc(t)}catch(l){Ce(t,o,l)}break;case 5:var a=t.return;try{Kc(t)}catch(l){Ce(t,a,l)}}}catch(l){Ce(t,t.return,l)}if(t===e){U=null;break}var s=t.sibling;if(s!==null){s.return=t.return,U=s;break}U=t.return}}var ak=Math.ceil,Ts=_n.ReactCurrentDispatcher,Ad=_n.ReactCurrentOwner,Ct=_n.ReactCurrentBatchConfig,re=0,Ue=null,Ae=null,Ye=0,ht=0,ti=sr(0),ze=0,Lo=null,Or=0,xl=0,Fd=0,co=null,st=null,Nd=0,wi=1/0,dn=null,Cs=!1,Qc=null,Kn=null,$a=!1,Dn=null,Ps=0,fo=0,Xc=null,Ya=-1,qa=0;function it(){return re&6?Pe():Ya!==-1?Ya:Ya=Pe()}function Yn(e){return e.mode&1?re&2&&Ye!==0?Ye&-Ye:V2.transition!==null?(qa===0&&(qa=H0()),qa):(e=ue,e!==0||(e=window.event,e=e===void 0?16:J0(e.type)),e):1}function Vt(e,t,n,r){if(50<fo)throw fo=0,Xc=null,Error(j(185));ea(e,n,r),(!(re&2)||e!==Ue)&&(e===Ue&&(!(re&2)&&(xl|=n),ze===4&&In(e,Ye)),dt(e,r),n===1&&re===0&&!(t.mode&1)&&(wi=Pe()+500,ml&&lr()))}function dt(e,t){var n=e.callbackNode;VS(e,t);var r=ps(e,e===Ue?Ye:0);if(r===0)n!==null&&mh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mh(n),t===1)e.tag===0?B2(sm.bind(null,e)):yv(sm.bind(null,e)),z2(function(){!(re&6)&&lr()}),n=null;else{switch(G0(r)){case 1:n=sd;break;case 4:n=V0;break;case 16:n=ds;break;case 536870912:n=W0;break;default:n=ds}n=g1(n,u1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function u1(e,t){if(Ya=-1,qa=0,re&6)throw Error(j(327));var n=e.callbackNode;if(ci()&&e.callbackNode!==n)return null;var r=ps(e,e===Ue?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=js(e,r);else{t=r;var i=re;re|=2;var o=f1();(Ue!==e||Ye!==t)&&(dn=null,wi=Pe()+500,wr(e,t));do try{uk();break}catch(s){c1(e,s)}while(1);wd(),Ts.current=o,re=i,Ae!==null?t=0:(Ue=null,Ye=0,t=ze)}if(t!==0){if(t===2&&(i=Ec(e),i!==0&&(r=i,t=Jc(e,i))),t===1)throw n=Lo,wr(e,0),In(e,r),dt(e,Pe()),n;if(t===6)In(e,r);else{if(i=e.current.alternate,!(r&30)&&!sk(i)&&(t=js(e,r),t===2&&(o=Ec(e),o!==0&&(r=o,t=Jc(e,o))),t===1))throw n=Lo,wr(e,0),In(e,r),dt(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:pr(e,st,dn);break;case 3:if(In(e,r),(r&130023424)===r&&(t=Nd+500-Pe(),10<t)){if(ps(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rc(pr.bind(null,e,st,dn),t);break}pr(e,st,dn);break;case 4:if(In(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Bt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ak(r/1960))-r,10<r){e.timeoutHandle=Rc(pr.bind(null,e,st,dn),r);break}pr(e,st,dn);break;case 5:pr(e,st,dn);break;default:throw Error(j(329))}}}return dt(e,Pe()),e.callbackNode===n?u1.bind(null,e):null}function Jc(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(wr(e,t).flags|=256),e=js(e,t),e!==2&&(t=st,st=n,t!==null&&Zc(t)),e}function Zc(e){st===null?st=e:st.push.apply(st,e)}function sk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function In(e,t){for(t&=~Fd,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bt(t),r=1<<n;e[n]=-1,t&=~r}}function sm(e){if(re&6)throw Error(j(327));ci();var t=ps(e,0);if(!(t&1))return dt(e,Pe()),null;var n=js(e,t);if(e.tag!==0&&n===2){var r=Ec(e);r!==0&&(t=r,n=Jc(e,r))}if(n===1)throw n=Lo,wr(e,0),In(e,t),dt(e,Pe()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,st,dn),dt(e,Pe()),null}function Id(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(wi=Pe()+500,ml&&lr())}}function $r(e){Dn!==null&&Dn.tag===0&&!(re&6)&&ci();var t=re;re|=1;var n=Ct.transition,r=ue;try{if(Ct.transition=null,ue=1,e)return e()}finally{ue=r,Ct.transition=n,re=t,!(re&6)&&lr()}}function Ld(){ht=ti.current,ve(ti)}function wr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,L2(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vs();break;case 3:vi(),ve(ct),ve(nt),Od();break;case 5:_d(r);break;case 4:vi();break;case 13:ve(ke);break;case 19:ve(ke);break;case 10:bd(r.type._context);break;case 22:case 23:Ld()}n=n.return}if(Ue=e,Ae=e=qn(e.current,null),Ye=ht=t,ze=0,Lo=null,Fd=xl=Or=0,st=co=null,yr!==null){for(t=0;t<yr.length;t++)if(n=yr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}yr=null}return e}function c1(e,t){do{var n=Ae;try{if(wd(),Ha.current=$s,Os){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Os=!1}if(_r=0,Me=Le=Ee=null,lo=!1,Fo=0,Ad.current=null,n===null||n.return===null){ze=1,Lo=t,Ae=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ye,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=s,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Yh(a);if(v!==null){v.flags&=-257,qh(v,a,s,o,t),v.mode&1&&Kh(o,u,t),t=v,l=u;var g=t.updateQueue;if(g===null){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}else{if(!(t&1)){Kh(o,u,t),zd();break e}l=Error(j(426))}}else if(Se&&s.mode&1){var x=Yh(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),qh(x,a,s,o,t),vd(xi(l,s));break e}}o=l=xi(l,s),ze!==4&&(ze=2),co===null?co=[o]:co.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Kv(o,l,t);Mh(o,h);break e;case 1:s=l;var p=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Kn===null||!Kn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Yv(o,s,t);Mh(o,S);break e}}o=o.return}while(o!==null)}p1(n)}catch(E){t=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function f1(){var e=Ts.current;return Ts.current=$s,e===null?$s:e}function zd(){(ze===0||ze===3||ze===2)&&(ze=4),Ue===null||!(Or&268435455)&&!(xl&268435455)||In(Ue,Ye)}function js(e,t){var n=re;re|=2;var r=f1();(Ue!==e||Ye!==t)&&(dn=null,wr(e,t));do try{lk();break}catch(i){c1(e,i)}while(1);if(wd(),re=n,Ts.current=r,Ae!==null)throw Error(j(261));return Ue=null,Ye=0,ze}function lk(){for(;Ae!==null;)d1(Ae)}function uk(){for(;Ae!==null&&!FS();)d1(Ae)}function d1(e){var t=m1(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?p1(e):Ae=t,Ad.current=null}function p1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=nk(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Ae=null;return}}else if(n=tk(n,t,ht),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);ze===0&&(ze=5)}function pr(e,t,n){var r=ue,i=Ct.transition;try{Ct.transition=null,ue=1,ck(e,t,n,r)}finally{Ct.transition=i,ue=r}return null}function ck(e,t,n,r){do ci();while(Dn!==null);if(re&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(WS(e,o),e===Ue&&(Ae=Ue=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$a||($a=!0,g1(ds,function(){return ci(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ct.transition,Ct.transition=null;var a=ue;ue=1;var s=re;re|=4,Ad.current=null,ik(e,n),s1(n,e),P2(Pc),hs=!!Cc,Pc=Cc=null,e.current=n,ok(n),NS(),re=s,ue=a,Ct.transition=o}else e.current=n;if($a&&($a=!1,Dn=e,Ps=i),o=e.pendingLanes,o===0&&(Kn=null),zS(n.stateNode),dt(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cs)throw Cs=!1,e=Qc,Qc=null,e;return Ps&1&&e.tag!==0&&ci(),o=e.pendingLanes,o&1?e===Xc?fo++:(fo=0,Xc=e):fo=0,lr(),null}function ci(){if(Dn!==null){var e=G0(Ps),t=Ct.transition,n=ue;try{if(Ct.transition=null,ue=16>e?16:e,Dn===null)var r=!1;else{if(e=Dn,Dn=null,Ps=0,re&6)throw Error(j(331));var i=re;for(re|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(U=u;U!==null;){var f=U;switch(f.tag){case 0:case 11:case 15:uo(8,f,o)}var c=f.child;if(c!==null)c.return=f,U=c;else for(;U!==null;){f=U;var d=f.sibling,v=f.return;if(i1(f),f===u){U=null;break}if(d!==null){d.return=v,U=d;break}U=v}}}var g=o.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var x=m.sibling;m.sibling=null,m=x}while(m!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:uo(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,U=h;break e}U=o.return}}var p=e.current;for(U=p;U!==null;){a=U;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,U=y;else e:for(a=p;U!==null;){if(s=U,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:vl(9,s)}}catch(E){Ce(s,s.return,E)}if(s===a){U=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,U=S;break e}U=s.return}}if(re=i,lr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(cl,e)}catch{}r=!0}return r}finally{ue=n,Ct.transition=t}}return!1}function lm(e,t,n){t=xi(n,t),t=Kv(e,t,1),e=Gn(e,t,1),t=it(),e!==null&&(ea(e,1,t),dt(e,t))}function Ce(e,t,n){if(e.tag===3)lm(e,e,n);else for(;t!==null;){if(t.tag===3){lm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=xi(n,e),e=Yv(t,e,1),t=Gn(t,e,1),e=it(),t!==null&&(ea(t,1,e),dt(t,e));break}}t=t.return}}function fk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(Ye&n)===n&&(ze===4||ze===3&&(Ye&130023424)===Ye&&500>Pe()-Nd?wr(e,0):Fd|=n),dt(e,t)}function h1(e,t){t===0&&(e.mode&1?(t=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):t=1);var n=it();e=Sn(e,t),e!==null&&(ea(e,t,n),dt(e,n))}function dk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),h1(e,n)}function pk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),h1(e,n)}var m1;m1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,ek(e,t,n);ut=!!(e.flags&131072)}else ut=!1,Se&&t.flags&1048576&&vv(t,bs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ka(e,t),e=t.pendingProps;var i=mi(t,nt.current);ui(t,n),i=Td(null,t,r,e,i,n);var o=Cd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(r)?(o=!0,xs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kd(t),i.updater=gl,t.stateNode=i,i._reactInternals=t,Dc(t,r,e,n),t=Bc(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&gd(t),rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ka(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mk(r),e=zt(r,e),i){case 0:t=Uc(null,t,r,e,n);break e;case 1:t=Jh(null,t,r,e,n);break e;case 11:t=Qh(null,t,r,e,n);break e;case 14:t=Xh(null,t,r,zt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Uc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Jh(e,t,r,i,n);case 3:e:{if(Jv(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Sv(e,t),Es(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=xi(Error(j(423)),t),t=Zh(e,t,r,n,i);break e}else if(r!==i){i=xi(Error(j(424)),t),t=Zh(e,t,r,n,i);break e}else for(mt=Hn(t.stateNode.containerInfo.firstChild),yt=t,Se=!0,Mt=null,n=Ov(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gi(),r===i){t=kn(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return $v(t),e===null&&Ic(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,jc(r,i)?a=null:o!==null&&jc(r,o)&&(t.flags|=32),Xv(e,t),rt(e,t,a,n),t.child;case 6:return e===null&&Ic(t),null;case 13:return Zv(e,t,n);case 4:return Ed(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yi(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Qh(e,t,r,i,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,he(Ss,r._currentValue),r._currentValue=a,o!==null)if(Wt(o.value,a)){if(o.children===i.children&&!ct.current){t=kn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=yn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lc(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Lc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ui(t,n),i=jt(i),r=r(i),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,i=zt(r,t.pendingProps),i=zt(r.type,i),Xh(e,t,r,i,n);case 15:return qv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Ka(e,t),t.tag=1,ft(r)?(e=!0,xs(t)):e=!1,ui(t,n),Ev(t,r,i),Dc(t,r,i,n),Bc(null,t,r,!0,e,n);case 19:return e1(e,t,n);case 22:return Qv(e,t,n)}throw Error(j(156,t.tag))};function g1(e,t){return B0(e,t)}function hk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new hk(e,t,n,r)}function Dd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mk(e){if(typeof e=="function")return Dd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===id)return 11;if(e===od)return 14}return 2}function qn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qa(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Dd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Hr:return br(n.children,i,o,t);case rd:a=8,i|=8;break;case uc:return e=Tt(12,n,t,i|2),e.elementType=uc,e.lanes=o,e;case cc:return e=Tt(13,n,t,i),e.elementType=cc,e.lanes=o,e;case fc:return e=Tt(19,n,t,i),e.elementType=fc,e.lanes=o,e;case _0:return wl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k0:a=10;break e;case E0:a=9;break e;case id:a=11;break e;case od:a=14;break e;case Rn:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Tt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function br(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function wl(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=_0,e.lanes=n,e.stateNode={isHidden:!1},e}function Tu(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Cu(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uu(0),this.expirationTimes=uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Md(e,t,n,r,i,o,a,s,l){return e=new gk(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(o),e}function yk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function y1(e){if(!e)return nr;e=e._reactInternals;e:{if(Rr(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ft(n))return gv(e,n,t)}return t}function v1(e,t,n,r,i,o,a,s,l){return e=Md(n,r,!0,e,i,o,a,s,l),e.context=y1(null),n=e.current,r=it(),i=Yn(n),o=yn(r,i),o.callback=t??null,Gn(n,o,i),e.current.lanes=i,ea(e,i,r),dt(e,r),e}function bl(e,t,n,r){var i=t.current,o=it(),a=Yn(i);return n=y1(n),t.context===null?t.context=n:t.pendingContext=n,t=yn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gn(i,t,a),e!==null&&(Vt(e,i,a,o),Wa(e,i,a)),a}function Rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ud(e,t){um(e,t),(e=e.alternate)&&um(e,t)}function vk(){return null}var x1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bd(e){this._internalRoot=e}Sl.prototype.render=Bd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));bl(e,t,null,null)};Sl.prototype.unmount=Bd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){bl(null,e,null,null)}),t[bn]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=q0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nn.length&&t!==0&&t<Nn[n].priority;n++);Nn.splice(n,0,e),n===0&&X0(e)}};function Vd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cm(){}function xk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Rs(a);o.call(u)}}var a=v1(t,r,e,0,null,!1,!1,"",cm);return e._reactRootContainer=a,e[bn]=a.current,Co(e.nodeType===8?e.parentNode:e),$r(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Rs(l);s.call(u)}}var l=Md(e,0,!1,null,null,!1,!1,"",cm);return e._reactRootContainer=l,e[bn]=l.current,Co(e.nodeType===8?e.parentNode:e),$r(function(){bl(t,l,n,r)}),l}function El(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Rs(a);s.call(l)}}bl(t,a,e,i)}else a=xk(n,t,e,i,r);return Rs(a)}K0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zi(t.pendingLanes);n!==0&&(ld(t,n|1),dt(t,Pe()),!(re&6)&&(wi=Pe()+500,lr()))}break;case 13:$r(function(){var r=Sn(e,1);if(r!==null){var i=it();Vt(r,e,1,i)}}),Ud(e,1)}};ud=function(e){if(e.tag===13){var t=Sn(e,134217728);if(t!==null){var n=it();Vt(t,e,134217728,n)}Ud(e,134217728)}};Y0=function(e){if(e.tag===13){var t=Yn(e),n=Sn(e,t);if(n!==null){var r=it();Vt(n,e,t,r)}Ud(e,t)}};q0=function(){return ue};Q0=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};bc=function(e,t,n){switch(t){case"input":if(hc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hl(r);if(!i)throw Error(j(90));$0(r),hc(r,i)}}}break;case"textarea":C0(e,n);break;case"select":t=n.value,t!=null&&oi(e,!!n.multiple,t,!1)}};I0=Id;L0=$r;var wk={usingClientEntryPoint:!1,Events:[na,qr,hl,F0,N0,Id]},Ki={findFiberByHostInstance:gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bk={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=M0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||vk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{cl=Ta.inject(bk),Zt=Ta}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wk;bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(t))throw Error(j(200));return yk(e,t,null,n)};bt.createRoot=function(e,t){if(!Vd(e))throw Error(j(299));var n=!1,r="",i=x1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Md(e,1,!1,null,null,n,!1,r,i),e[bn]=t.current,Co(e.nodeType===8?e.parentNode:e),new Bd(t)};bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=M0(t),e=e===null?null:e.stateNode,e};bt.flushSync=function(e){return $r(e)};bt.hydrate=function(e,t,n){if(!kl(t))throw Error(j(200));return El(null,e,t,!0,n)};bt.hydrateRoot=function(e,t,n){if(!Vd(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=x1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=v1(t,null,e,1,n??null,i,!1,o,a),e[bn]=t.current,Co(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Sl(t)};bt.render=function(e,t,n){if(!kl(t))throw Error(j(200));return El(null,e,t,!1,n)};bt.unmountComponentAtNode=function(e){if(!kl(e))throw Error(j(40));return e._reactRootContainer?($r(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1};bt.unstable_batchedUpdates=Id;bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!kl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return El(e,t,n,!1,r)};bt.version="18.2.0-next-9e3b772b8-20220608";function w1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w1)}catch(e){console.error(e)}}w1(),v0.exports=bt;var Wd=v0.exports,fm=Wd;sc.createRoot=fm.createRoot,sc.hydrateRoot=fm.hydrateRoot;var b1={exports:{}},S1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=w;function Sk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kk=typeof Object.is=="function"?Object.is:Sk,Ek=bi.useState,_k=bi.useEffect,Ok=bi.useLayoutEffect,$k=bi.useDebugValue;function Tk(e,t){var n=t(),r=Ek({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return Ok(function(){i.value=n,i.getSnapshot=t,Pu(i)&&o({inst:i})},[e,n,t]),_k(function(){return Pu(i)&&o({inst:i}),e(function(){Pu(i)&&o({inst:i})})},[e]),$k(n),n}function Pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kk(e,n)}catch{return!0}}function Ck(e,t){return t()}var Pk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ck:Tk;S1.useSyncExternalStore=bi.useSyncExternalStore!==void 0?bi.useSyncExternalStore:Pk;b1.exports=S1;var jk=b1.exports,k1={exports:{}},E1={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=w,Rk=jk;function Ak(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fk=typeof Object.is=="function"?Object.is:Ak,Nk=Rk.useSyncExternalStore,Ik=_l.useRef,Lk=_l.useEffect,zk=_l.useMemo,Dk=_l.useDebugValue;E1.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=Ik(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=zk(function(){function l(v){if(!u){if(u=!0,f=v,v=r(v),i!==void 0&&a.hasValue){var g=a.value;if(i(g,v))return c=g}return c=v}if(g=c,Fk(f,v))return g;var m=r(v);return i!==void 0&&i(g,m)?g:(f=v,c=m)}var u=!1,f,c,d=n===void 0?null:n;return[function(){return l(t())},d===null?void 0:function(){return l(d())}]},[t,n,r,i]);var s=Nk(e,o[0],o[1]);return Lk(function(){a.hasValue=!0,a.value=s},[s]),Dk(s),s};k1.exports=E1;var Mk=k1.exports;function Uk(e){e()}let _1=Uk;const Bk=e=>_1=e,Vk=()=>_1,dm=Symbol.for("react-redux-context"),pm=typeof globalThis<"u"?globalThis:{};function Wk(){var e;if(!w.createContext)return{};const t=(e=pm[dm])!=null?e:pm[dm]=new Map;let n=t.get(w.createContext);return n||(n=w.createContext(null),t.set(w.createContext,n)),n}const rr=Wk();function Hd(e=rr){return function(){return w.useContext(e)}}const O1=Hd(),Hk=()=>{throw new Error("uSES not initialized!")};let $1=Hk;const Gk=e=>{$1=e},Kk=(e,t)=>e===t;function Yk(e=rr){const t=e===rr?O1:Hd(e);return function(r,i={}){const{equalityFn:o=Kk,stabilityCheck:a=void 0,noopCheck:s=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:f,stabilityCheck:c,noopCheck:d}=t();w.useRef(!0);const v=w.useCallback({[r.name](m){return r(m)}}[r.name],[r,c,a]),g=$1(u.addNestedSub,l.getState,f||l.getState,v,o);return w.useDebugValue(g),g}}const ur=Yk();var fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd=Symbol.for("react.element"),Kd=Symbol.for("react.portal"),Ol=Symbol.for("react.fragment"),$l=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),Cl=Symbol.for("react.provider"),Pl=Symbol.for("react.context"),qk=Symbol.for("react.server_context"),jl=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Fl=Symbol.for("react.memo"),Nl=Symbol.for("react.lazy"),Qk=Symbol.for("react.offscreen"),T1;T1=Symbol.for("react.module.reference");function At(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gd:switch(e=e.type,e){case Ol:case Tl:case $l:case Rl:case Al:return e;default:switch(e=e&&e.$$typeof,e){case qk:case Pl:case jl:case Nl:case Fl:case Cl:return e;default:return t}}case Kd:return t}}}fe.ContextConsumer=Pl;fe.ContextProvider=Cl;fe.Element=Gd;fe.ForwardRef=jl;fe.Fragment=Ol;fe.Lazy=Nl;fe.Memo=Fl;fe.Portal=Kd;fe.Profiler=Tl;fe.StrictMode=$l;fe.Suspense=Rl;fe.SuspenseList=Al;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(e){return At(e)===Pl};fe.isContextProvider=function(e){return At(e)===Cl};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gd};fe.isForwardRef=function(e){return At(e)===jl};fe.isFragment=function(e){return At(e)===Ol};fe.isLazy=function(e){return At(e)===Nl};fe.isMemo=function(e){return At(e)===Fl};fe.isPortal=function(e){return At(e)===Kd};fe.isProfiler=function(e){return At(e)===Tl};fe.isStrictMode=function(e){return At(e)===$l};fe.isSuspense=function(e){return At(e)===Rl};fe.isSuspenseList=function(e){return At(e)===Al};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ol||e===Tl||e===$l||e===Rl||e===Al||e===Qk||typeof e=="object"&&e!==null&&(e.$$typeof===Nl||e.$$typeof===Fl||e.$$typeof===Cl||e.$$typeof===Pl||e.$$typeof===jl||e.$$typeof===T1||e.getModuleId!==void 0)};fe.typeOf=At;function Xk(){const e=Vk();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const hm={notify(){},get:()=>[]};function Jk(e,t){let n,r=hm,i=0,o=!1;function a(m){f();const x=r.subscribe(m);let h=!1;return()=>{h||(h=!0,x(),c())}}function s(){r.notify()}function l(){g.onStateChange&&g.onStateChange()}function u(){return o}function f(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=Xk())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=hm)}function d(){o||(o=!0,f())}function v(){o&&(o=!1,c())}const g={addNestedSub:a,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:v,getListeners:()=>r};return g}const Zk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eE=Zk?w.useLayoutEffect:w.useEffect;function tE({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const a=w.useMemo(()=>{const u=Jk(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),s=w.useMemo(()=>e.getState(),[e]);eE(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,s]);const l=t||rr;return w.createElement(l.Provider,{value:a},n)}function C1(e=rr){const t=e===rr?O1:Hd(e);return function(){const{store:r}=t();return r}}const nE=C1();function rE(e=rr){const t=e===rr?nE:C1(e);return function(){return t().dispatch}}const Il=rE();Gk(Mk.useSyncExternalStoreWithSelector);Bk(Wd.unstable_batchedUpdates);function Xa(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xa=function(n){return typeof n}:Xa=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xa(e)}function iE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oE(e,t,n){return t&&mm(e.prototype,t),n&&mm(e,n),e}function aE(e,t){return t&&(Xa(t)==="object"||typeof t=="function")?t:Ja(e)}function ef(e){return ef=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ef(e)}function Ja(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&tf(e,t)}function tf(e,t){return tf=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},tf(e,t)}function Za(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P1=function(e){sE(t,e);function t(){var n,r;iE(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return r=aE(this,(n=ef(t)).call.apply(n,[this].concat(o))),Za(Ja(r),"state",{bootstrapped:!1}),Za(Ja(r),"_unsubscribe",void 0),Za(Ja(r),"handlePersistorState",function(){var s=r.props.persistor,l=s.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return oE(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(w.PureComponent);Za(P1,"defaultProps",{children:null,loading:null});function Ut(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ir(e){return!!e&&!!e[we]}function En(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===gE}(e)||Array.isArray(e)||!!e[Sm]||!!(!((t=e.constructor)===null||t===void 0)&&t[Sm])||Yd(e)||qd(e))}function Tr(e,t,n){n===void 0&&(n=!1),Ri(e)===0?(n?Object.keys:di)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Ri(e){var t=e[we];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Yd(e)?2:qd(e)?3:0}function fi(e,t){return Ri(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function lE(e,t){return Ri(e)===2?e.get(t):e[t]}function j1(e,t,n){var r=Ri(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function R1(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Yd(e){return hE&&e instanceof Map}function qd(e){return mE&&e instanceof Set}function hr(e){return e.o||e.t}function Qd(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=F1(e);delete t[we];for(var n=di(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Xd(e,t){return t===void 0&&(t=!1),Jd(e)||ir(e)||!En(e)||(Ri(e)>1&&(e.set=e.add=e.clear=e.delete=uE),Object.freeze(e),t&&Tr(e,function(n,r){return Xd(r,!0)},!0)),e}function uE(){Ut(2)}function Jd(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function tn(e){var t=af[e];return t||Ut(18,e),t}function cE(e,t){af[e]||(af[e]=t)}function nf(){return zo}function ju(e,t){t&&(tn("Patches"),e.u=[],e.s=[],e.v=t)}function As(e){rf(e),e.p.forEach(fE),e.p=null}function rf(e){e===zo&&(zo=e.l)}function gm(e){return zo={p:[],l:zo,h:e,m:!0,_:0}}function fE(e){var t=e[we];t.i===0||t.i===1?t.j():t.g=!0}function Ru(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||tn("ES5").S(t,e,r),r?(n[we].P&&(As(t),Ut(4)),En(e)&&(e=Fs(t,e),t.l||Ns(t,e)),t.u&&tn("Patches").M(n[we].t,e,t.u,t.s)):e=Fs(t,n,[]),As(t),t.u&&t.v(t.u,t.s),e!==A1?e:void 0}function Fs(e,t,n){if(Jd(t))return t;var r=t[we];if(!r)return Tr(t,function(s,l){return ym(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Ns(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Qd(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),Tr(o,function(s,l){return ym(e,r,i,s,l,n,a)}),Ns(e,i,!1),n&&e.u&&tn("Patches").N(r,n,e.u,e.s)}return r.o}function ym(e,t,n,r,i,o,a){if(ir(i)){var s=Fs(e,i,o&&t&&t.i!==3&&!fi(t.R,r)?o.concat(r):void 0);if(j1(n,r,s),!ir(s))return;e.m=!1}else a&&n.add(i);if(En(i)&&!Jd(i)){if(!e.h.D&&e._<1)return;Fs(e,i),t&&t.A.l||Ns(e,i)}}function Ns(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Xd(t,n)}function Au(e,t){var n=e[we];return(n?hr(n):e)[t]}function vm(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Ln(e){e.P||(e.P=!0,e.l&&Ln(e.l))}function Fu(e){e.o||(e.o=Qd(e.t))}function of(e,t,n){var r=Yd(t)?tn("MapSet").F(t,n):qd(t)?tn("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),s={i:a?1:0,A:o?o.A:nf(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=s,u=Do;a&&(l=[s],u=to);var f=Proxy.revocable(l,u),c=f.revoke,d=f.proxy;return s.k=d,s.j=c,d}(t,n):tn("ES5").J(t,n);return(n?n.A:nf()).p.push(r),r}function dE(e){return ir(e)||Ut(22,e),function t(n){if(!En(n))return n;var r,i=n[we],o=Ri(n);if(i){if(!i.P&&(i.i<4||!tn("ES5").K(i)))return i.t;i.I=!0,r=xm(n,o),i.I=!1}else r=xm(n,o);return Tr(r,function(a,s){i&&lE(i.t,a)===s||j1(r,a,t(s))}),o===3?new Set(r):r}(e)}function xm(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Qd(e)}function pE(){function e(o,a){var s=i[o];return s?s.enumerable=a:i[o]=s={configurable:!0,enumerable:a,get:function(){var l=this[we];return Do.get(l,o)},set:function(l){var u=this[we];Do.set(u,o,l)}},s}function t(o){for(var a=o.length-1;a>=0;a--){var s=o[a][we];if(!s.P)switch(s.i){case 5:r(s)&&Ln(s);break;case 4:n(s)&&Ln(s)}}}function n(o){for(var a=o.t,s=o.k,l=di(s),u=l.length-1;u>=0;u--){var f=l[u];if(f!==we){var c=a[f];if(c===void 0&&!fi(a,f))return!0;var d=s[f],v=d&&d[we];if(v?v.t!==c:!R1(d,c))return!0}}var g=!!a[we];return l.length!==di(a).length+(g?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var l=0;l<a.length;l++)if(!a.hasOwnProperty(l))return!0;return!1}var i={};cE("ES5",{J:function(o,a){var s=Array.isArray(o),l=function(f,c){if(f){for(var d=Array(c.length),v=0;v<c.length;v++)Object.defineProperty(d,""+v,e(v,!0));return d}var g=F1(c);delete g[we];for(var m=di(g),x=0;x<m.length;x++){var h=m[x];g[h]=e(h,f||!!g[h].enumerable)}return Object.create(Object.getPrototypeOf(c),g)}(s,o),u={i:s?5:4,A:a?a.A:nf(),P:!1,I:!1,R:{},l:a,t:o,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,we,{value:u,writable:!0}),l},S:function(o,a,s){s?ir(a)&&a[we].A===o&&t(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var f=u[we];if(f){var c=f.t,d=f.k,v=f.R,g=f.i;if(g===4)Tr(d,function(y){y!==we&&(c[y]!==void 0||fi(c,y)?v[y]||l(d[y]):(v[y]=!0,Ln(f)))}),Tr(c,function(y){d[y]!==void 0||fi(d,y)||(v[y]=!1,Ln(f))});else if(g===5){if(r(f)&&(Ln(f),v.length=!0),d.length<c.length)for(var m=d.length;m<c.length;m++)v[m]=!1;else for(var x=c.length;x<d.length;x++)v[x]=!0;for(var h=Math.min(d.length,c.length),p=0;p<h;p++)d.hasOwnProperty(p)||(v[p]=!0),v[p]===void 0&&l(d[p])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var wm,zo,Zd=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",hE=typeof Map<"u",mE=typeof Set<"u",bm=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",A1=Zd?Symbol.for("immer-nothing"):((wm={})["immer-nothing"]=!0,wm),Sm=Zd?Symbol.for("immer-draftable"):"__$immer_draftable",we=Zd?Symbol.for("immer-state"):"__$immer_state",gE=""+Object.prototype.constructor,di=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,F1=Object.getOwnPropertyDescriptors||function(e){var t={};return di(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},af={},Do={get:function(e,t){if(t===we)return e;var n=hr(e);if(!fi(n,t))return function(i,o,a){var s,l=vm(o,a);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!En(r)?r:r===Au(e.t,t)?(Fu(e),e.o[t]=of(e.A.h,r,e)):r},has:function(e,t){return t in hr(e)},ownKeys:function(e){return Reflect.ownKeys(hr(e))},set:function(e,t,n){var r=vm(hr(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Au(hr(e),t),o=i==null?void 0:i[we];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(R1(n,i)&&(n!==void 0||fi(e.t,t)))return!0;Fu(e),Ln(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Au(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Fu(e),Ln(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=hr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ut(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ut(12)}},to={};Tr(Do,function(e,t){to[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),to.deleteProperty=function(e,t){return to.set.call(this,e,t,void 0)},to.set=function(e,t,n){return Do.set.call(this,e[0],t,n,e[0])};var yE=function(){function e(n){var r=this;this.O=bm,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var s=o;o=i;var l=r;return function(m){var x=this;m===void 0&&(m=s);for(var h=arguments.length,p=Array(h>1?h-1:0),y=1;y<h;y++)p[y-1]=arguments[y];return l.produce(m,function(S){var E;return(E=o).call.apply(E,[x,S].concat(p))})}}var u;if(typeof o!="function"&&Ut(6),a!==void 0&&typeof a!="function"&&Ut(7),En(i)){var f=gm(r),c=of(r,i,void 0),d=!0;try{u=o(c),d=!1}finally{d?As(f):rf(f)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return ju(f,a),Ru(m,f)},function(m){throw As(f),m}):(ju(f,a),Ru(u,f))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===A1&&(u=void 0),r.D&&Xd(u,!0),a){var v=[],g=[];tn("Patches").M(i,u,v,g),a(v,g)}return u}Ut(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var f=arguments.length,c=Array(f>1?f-1:0),d=1;d<f;d++)c[d-1]=arguments[d];return r.produceWithPatches(u,function(v){return i.apply(void 0,[v].concat(c))})};var a,s,l=r.produce(i,o,function(u,f){a=u,s=f});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,a,s]}):[l,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){En(n)||Ut(8),ir(n)&&(n=dE(n));var r=gm(this),i=of(this,n,void 0);return i[we].C=!0,rf(r),i},t.finishDraft=function(n,r){var i=n&&n[we],o=i.A;return ju(o,r),Ru(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!bm&&Ut(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=tn("Patches").$;return ir(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),xt=new yE,N1=xt.produce;xt.produceWithPatches.bind(xt);xt.setAutoFreeze.bind(xt);xt.setUseProxies.bind(xt);xt.applyPatches.bind(xt);xt.createDraft.bind(xt);xt.finishDraft.bind(xt);function Mo(e){"@babel/helpers - typeof";return Mo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mo(e)}function vE(e,t){if(Mo(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Mo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xE(e){var t=vE(e,"string");return Mo(t)=="symbol"?t:String(t)}function wE(e,t,n){return t=xE(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function km(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Em(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?km(Object(n),!0).forEach(function(r){wE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):km(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function et(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var _m=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Nu=function(){return Math.random().toString(36).substring(7).split("").join(".")},Is={INIT:"@@redux/INIT"+Nu(),REPLACE:"@@redux/REPLACE"+Nu(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Nu()}};function bE(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ep(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(et(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(et(1));return n(ep)(e,t)}if(typeof e!="function")throw new Error(et(2));var i=e,o=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function f(){if(l)throw new Error(et(3));return o}function c(m){if(typeof m!="function")throw new Error(et(4));if(l)throw new Error(et(5));var x=!0;return u(),s.push(m),function(){if(x){if(l)throw new Error(et(6));x=!1,u();var p=s.indexOf(m);s.splice(p,1),a=null}}}function d(m){if(!bE(m))throw new Error(et(7));if(typeof m.type>"u")throw new Error(et(8));if(l)throw new Error(et(9));try{l=!0,o=i(o,m)}finally{l=!1}for(var x=a=s,h=0;h<x.length;h++){var p=x[h];p()}return m}function v(m){if(typeof m!="function")throw new Error(et(10));i=m,d({type:Is.REPLACE})}function g(){var m,x=c;return m={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(et(11));function y(){p.next&&p.next(f())}y();var S=x(y);return{unsubscribe:S}}},m[_m]=function(){return this},m}return d({type:Is.INIT}),r={dispatch:d,subscribe:c,getState:f,replaceReducer:v},r[_m]=g,r}function SE(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Is.INIT});if(typeof r>"u")throw new Error(et(12));if(typeof n(void 0,{type:Is.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(et(13))})}function kE(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{SE(n)}catch(s){a=s}return function(l,u){if(l===void 0&&(l={}),a)throw a;for(var f=!1,c={},d=0;d<o.length;d++){var v=o[d],g=n[v],m=l[v],x=g(m,u);if(typeof x>"u")throw u&&u.type,new Error(et(14));c[v]=x,f=f||x!==m}return f=f||o.length!==Object.keys(l).length,f?c:l}}function Ls(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function EE(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(et(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},s=t.map(function(l){return l(a)});return o=Ls.apply(void 0,s)(i.dispatch),Em(Em({},i),{},{dispatch:o})}}}function I1(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(s){return typeof s=="function"?s(i,o,e):a(s)}}};return t}var L1=I1();L1.withExtraArgument=I1;const Om=L1;var z1=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),_E=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(f){return l([u,f])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(f){u=[6,f],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Si=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},OE=Object.defineProperty,$E=Object.defineProperties,TE=Object.getOwnPropertyDescriptors,$m=Object.getOwnPropertySymbols,CE=Object.prototype.hasOwnProperty,PE=Object.prototype.propertyIsEnumerable,Tm=function(e,t,n){return t in e?OE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Qn=function(e,t){for(var n in t||(t={}))CE.call(t,n)&&Tm(e,n,t[n]);if($m)for(var r=0,i=$m(t);r<i.length;r++){var n=i[r];PE.call(t,n)&&Tm(e,n,t[n])}return e},Iu=function(e,t){return $E(e,TE(t))},jE=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{s(n.next(l))}catch(u){i(u)}},a=function(l){try{s(n.throw(l))}catch(u){i(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,a)};s((n=n.apply(e,t)).next())})},RE=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ls:Ls.apply(null,arguments)};function AE(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Xn(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Qn(Qn({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var FE=function(e){z1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Si([void 0],n[0].concat(this)))):new(t.bind.apply(t,Si([void 0],n.concat(this))))},t}(Array),NE=function(e){z1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Si([void 0],n[0].concat(this)))):new(t.bind.apply(t,Si([void 0],n.concat(this))))},t}(Array);function sf(e){return En(e)?N1(e,function(){}):e}function IE(e){return typeof e=="boolean"}function LE(){return function(t){return zE(t)}}function zE(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new FE;return n&&(IE(n)?r.push(Om):r.push(Om.withExtraArgument(n.extraArgument))),r}var DE=!0;function ME(e){var t=LE(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,f=u===void 0?void 0:u,c=n.enhancers,d=c===void 0?void 0:c,v;if(typeof i=="function")v=i;else if(AE(i))v=kE(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=a;typeof g=="function"&&(g=g(t));var m=EE.apply(void 0,g),x=Ls;l&&(x=RE(Qn({trace:!DE},typeof l=="object"&&l)));var h=new NE(m),p=h;Array.isArray(d)?p=Si([m],d):typeof d=="function"&&(p=d(h));var y=x.apply(void 0,p);return ep(v,f,y)}function D1(e){var t={},n=[],r,i={addCase:function(o,a){var s=typeof o=="string"?o:o.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function UE(e){return typeof e=="function"}function BE(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?D1(t):[t,n,r],o=i[0],a=i[1],s=i[2],l;if(UE(e))l=function(){return sf(e())};else{var u=sf(e);l=function(){return u}}function f(c,d){c===void 0&&(c=l());var v=Si([o[d.type]],a.filter(function(g){var m=g.matcher;return m(d)}).map(function(g){var m=g.reducer;return m}));return v.filter(function(g){return!!g}).length===0&&(v=[s]),v.reduce(function(g,m){if(m)if(ir(g)){var x=g,h=m(x,d);return h===void 0?g:h}else{if(En(g))return N1(g,function(p){return m(p,d)});var h=m(g,d);if(h===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return g},c)}return f.getInitialState=l,f}function VE(e,t){return e+"/"+t}function M1(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:sf(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},s={};i.forEach(function(f){var c=r[f],d=VE(t,f),v,g;"reducer"in c?(v=c.reducer,g=c.prepare):v=c,o[f]=v,a[d]=v,s[f]=g?Xn(d,g):Xn(d)});function l(){var f=typeof e.extraReducers=="function"?D1(e.extraReducers):[e.extraReducers],c=f[0],d=c===void 0?{}:c,v=f[1],g=v===void 0?[]:v,m=f[2],x=m===void 0?void 0:m,h=Qn(Qn({},d),a);return BE(n,function(p){for(var y in h)p.addCase(y,h[y]);for(var S=0,E=g;S<E.length;S++){var _=E[S];p.addMatcher(_.matcher,_.reducer)}x&&p.addDefaultCase(x)})}var u;return{name:t,reducer:function(f,c){return u||(u=l()),u(f,c)},actions:s,caseReducers:o,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var WE="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",HE=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=WE[Math.random()*64|0];return t},GE=["name","message","stack","code"],Lu=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Cm=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),KE=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=GE;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},on=function(){function e(t,n,r){var i=Xn(t+"/fulfilled",function(u,f,c,d){return{payload:u,meta:Iu(Qn({},d||{}),{arg:c,requestId:f,requestStatus:"fulfilled"})}}),o=Xn(t+"/pending",function(u,f,c){return{payload:void 0,meta:Iu(Qn({},c||{}),{arg:f,requestId:u,requestStatus:"pending"})}}),a=Xn(t+"/rejected",function(u,f,c,d,v){return{payload:d,error:(r&&r.serializeError||KE)(u||"Rejected"),meta:Iu(Qn({},v||{}),{arg:c,requestId:f,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(f,c,d){var v=r!=null&&r.idGenerator?r.idGenerator(u):HE(),g=new s,m;function x(p){m=p,g.abort()}var h=function(){return jE(this,null,function(){var p,y,S,E,_,$,A;return _E(this,function(B){switch(B.label){case 0:return B.trys.push([0,4,,5]),E=(p=r==null?void 0:r.condition)==null?void 0:p.call(r,u,{getState:c,extra:d}),qE(E)?[4,E]:[3,2];case 1:E=B.sent(),B.label=2;case 2:if(E===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return _=new Promise(function(D,G){return g.signal.addEventListener("abort",function(){return G({name:"AbortError",message:m||"Aborted"})})}),f(o(v,u,(y=r==null?void 0:r.getPendingMeta)==null?void 0:y.call(r,{requestId:v,arg:u},{getState:c,extra:d}))),[4,Promise.race([_,Promise.resolve(n(u,{dispatch:f,getState:c,extra:d,requestId:v,signal:g.signal,abort:x,rejectWithValue:function(D,G){return new Lu(D,G)},fulfillWithValue:function(D,G){return new Cm(D,G)}})).then(function(D){if(D instanceof Lu)throw D;return D instanceof Cm?i(D.payload,v,u,D.meta):i(D,v,u)})])];case 3:return S=B.sent(),[3,5];case 4:return $=B.sent(),S=$ instanceof Lu?a(null,v,u,$.payload,$.meta):a($,v,u),[3,5];case 5:return A=r&&!r.dispatchConditionRejection&&a.match(S)&&S.meta.condition,A||f(S),[2,S]}})})}();return Object.assign(h,{abort:x,requestId:v,arg:u,unwrap:function(){return h.then(YE)}})}}return Object.assign(l,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function YE(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function qE(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var tp="listenerMiddleware";Xn(tp+"/add");Xn(tp+"/removeAll");Xn(tp+"/remove");var Pm;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);pE();var np="persist:",rp="persist/FLUSH",Ll="persist/REHYDRATE",ip="persist/PAUSE",op="persist/PERSIST",ap="persist/PURGE",sp="persist/REGISTER",QE=-1;function es(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?es=function(n){return typeof n}:es=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},es(e)}function jm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function XE(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jm(n,!0).forEach(function(r){JE(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JE(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ZE(e,t,n,r){r.debug;var i=XE({},n);return e&&es(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function e_(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:np).concat(e.key),a=e.storage,s;e.serialize===!1?s=function(E){return E}:typeof e.serialize=="function"?s=e.serialize:s=t_;var l=e.writeFailHandler||null,u={},f={},c=[],d=null,v=null,g=function(E){Object.keys(E).forEach(function(_){h(_)&&u[_]!==E[_]&&c.indexOf(_)===-1&&c.push(_)}),Object.keys(u).forEach(function(_){E[_]===void 0&&h(_)&&c.indexOf(_)===-1&&u[_]!==void 0&&c.push(_)}),d===null&&(d=setInterval(m,i)),u=E};function m(){if(c.length===0){d&&clearInterval(d),d=null;return}var S=c.shift(),E=r.reduce(function(_,$){return $.in(_,S,u)},u[S]);if(E!==void 0)try{f[S]=s(E)}catch(_){console.error("redux-persist/createPersistoid: error serializing state",_)}else delete f[S];c.length===0&&x()}function x(){Object.keys(f).forEach(function(S){u[S]===void 0&&delete f[S]}),v=a.setItem(o,s(f)).catch(p)}function h(S){return!(n&&n.indexOf(S)===-1&&S!=="_persist"||t&&t.indexOf(S)!==-1)}function p(S){l&&l(S)}var y=function(){for(;c.length!==0;)m();return v||Promise.resolve()};return{update:g,flush:y}}function t_(e){return JSON.stringify(e)}function n_(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:np).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(a){return a}:typeof e.deserialize=="function"?i=e.deserialize:i=r_,r.getItem(n).then(function(o){if(o)try{var a={},s=i(o);return Object.keys(s).forEach(function(l){a[l]=t.reduceRight(function(u,f){return f.out(u,l,s)},i(s[l]))}),a}catch(l){throw l}else return})}function r_(e){return JSON.parse(e)}function i_(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:np).concat(e.key);return t.removeItem(n,o_)}function o_(e){}function Rm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function cn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rm(n,!0).forEach(function(r){a_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s_(e,t){if(e==null)return{};var n=l_(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function l_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var u_=5e3;function c_(e,t){var n=e.version!==void 0?e.version:QE;e.debug;var r=e.stateReconciler===void 0?ZE:e.stateReconciler,i=e.getStoredState||n_,o=e.timeout!==void 0?e.timeout:u_,a=null,s=!1,l=!0,u=function(c){return c._persist.rehydrated&&a&&!l&&a.update(c),c};return function(f,c){var d=f||{},v=d._persist,g=s_(d,["_persist"]),m=g;if(c.type===op){var x=!1,h=function(A,B){x||(c.rehydrate(e.key,A,B),x=!0)};if(o&&setTimeout(function(){!x&&h(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),l=!1,a||(a=e_(e)),v)return cn({},t(m,c),{_persist:v});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function($){var A=e.migrate||function(B,D){return Promise.resolve(B)};A($,n).then(function(B){h(B)},function(B){h(void 0,B)})},function($){h(void 0,$)}),cn({},t(m,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===ap)return s=!0,c.result(i_(e)),cn({},t(m,c),{_persist:v});if(c.type===rp)return c.result(a&&a.flush()),cn({},t(m,c),{_persist:v});if(c.type===ip)l=!0;else if(c.type===Ll){if(s)return cn({},m,{_persist:cn({},v,{rehydrated:!0})});if(c.key===e.key){var p=t(m,c),y=c.payload,S=r!==!1&&y!==void 0?r(y,f,p,e):p,E=cn({},S,{_persist:cn({},v,{rehydrated:!0})});return u(E)}}}if(!v)return t(f,c);var _=t(m,c);return _===m?f:u(cn({},_,{_persist:v}))}}function Am(e){return p_(e)||d_(e)||f_()}function f_(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d_(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function p_(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Fm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function lf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fm(n,!0).forEach(function(r){h_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function h_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U1={registry:[],bootstrapped:!1},m_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:U1,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case sp:return lf({},t,{registry:[].concat(Am(t.registry),[n.key])});case Ll:var r=t.registry.indexOf(n.key),i=Am(t.registry);return i.splice(r,1),lf({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function g_(e,t,n){var r=n||!1,i=ep(m_,U1,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:sp,key:u})},a=function(u,f,c){var d={type:Ll,payload:f,err:c,key:u};e.dispatch(d),i.dispatch(d),r&&s.getState().bootstrapped&&(r(),r=!1)},s=lf({},i,{purge:function(){var u=[];return e.dispatch({type:ap,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:rp,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:ip})},persist:function(){e.dispatch({type:op,register:o,rehydrate:a})}});return t&&t.manualPersist||s.persist(),s}var lp={},up={};up.__esModule=!0;up.default=x_;function ts(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ts=function(n){return typeof n}:ts=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ts(e)}function zu(){}var y_={getItem:zu,setItem:zu,removeItem:zu};function v_(e){if((typeof self>"u"?"undefined":ts(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function x_(e){var t="".concat(e,"Storage");return v_(t)?self[t]:y_}lp.__esModule=!0;lp.default=S_;var w_=b_(up);function b_(e){return e&&e.__esModule?e:{default:e}}function S_(e){var t=(0,w_.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,a){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var B1=void 0,k_=E_(lp);function E_(e){return e&&e.__esModule?e:{default:e}}var __=(0,k_.default)("local");B1=__;function V1(e,t){return function(){return e.apply(t,arguments)}}const{toString:O_}=Object.prototype,{getPrototypeOf:cp}=Object,zl=(e=>t=>{const n=O_.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),an=e=>(e=e.toLowerCase(),t=>zl(t)===e),Dl=e=>t=>typeof t===e,{isArray:Ai}=Array,Uo=Dl("undefined");function $_(e){return e!==null&&!Uo(e)&&e.constructor!==null&&!Uo(e.constructor)&&Pt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const W1=an("ArrayBuffer");function T_(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&W1(e.buffer),t}const C_=Dl("string"),Pt=Dl("function"),H1=Dl("number"),Ml=e=>e!==null&&typeof e=="object",P_=e=>e===!0||e===!1,ns=e=>{if(zl(e)!=="object")return!1;const t=cp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},j_=an("Date"),R_=an("File"),A_=an("Blob"),F_=an("FileList"),N_=e=>Ml(e)&&Pt(e.pipe),I_=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Pt(e.append)&&((t=zl(e))==="formdata"||t==="object"&&Pt(e.toString)&&e.toString()==="[object FormData]"))},L_=an("URLSearchParams"),z_=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ia(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ai(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function G1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const K1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Y1=e=>!Uo(e)&&e!==K1;function uf(){const{caseless:e}=Y1(this)&&this||{},t={},n=(r,i)=>{const o=e&&G1(t,i)||i;ns(t[o])&&ns(r)?t[o]=uf(t[o],r):ns(r)?t[o]=uf({},r):Ai(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ia(arguments[r],n);return t}const D_=(e,t,n,{allOwnKeys:r}={})=>(ia(t,(i,o)=>{n&&Pt(i)?e[o]=V1(i,n):e[o]=i},{allOwnKeys:r}),e),M_=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),U_=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},B_=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&cp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},V_=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},W_=e=>{if(!e)return null;if(Ai(e))return e;let t=e.length;if(!H1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},H_=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cp(Uint8Array)),G_=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},K_=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Y_=an("HTMLFormElement"),q_=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Nm=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Q_=an("RegExp"),q1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ia(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},X_=e=>{q1(e,(t,n)=>{if(Pt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Pt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},J_=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Ai(e)?r(e):r(String(e).split(t)),n},Z_=()=>{},eO=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Du="abcdefghijklmnopqrstuvwxyz",Im="0123456789",Q1={DIGIT:Im,ALPHA:Du,ALPHA_DIGIT:Du+Du.toUpperCase()+Im},tO=(e=16,t=Q1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function nO(e){return!!(e&&Pt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const rO=e=>{const t=new Array(10),n=(r,i)=>{if(Ml(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Ai(r)?[]:{};return ia(r,(a,s)=>{const l=n(a,i+1);!Uo(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},iO=an("AsyncFunction"),oO=e=>e&&(Ml(e)||Pt(e))&&Pt(e.then)&&Pt(e.catch),C={isArray:Ai,isArrayBuffer:W1,isBuffer:$_,isFormData:I_,isArrayBufferView:T_,isString:C_,isNumber:H1,isBoolean:P_,isObject:Ml,isPlainObject:ns,isUndefined:Uo,isDate:j_,isFile:R_,isBlob:A_,isRegExp:Q_,isFunction:Pt,isStream:N_,isURLSearchParams:L_,isTypedArray:H_,isFileList:F_,forEach:ia,merge:uf,extend:D_,trim:z_,stripBOM:M_,inherits:U_,toFlatObject:B_,kindOf:zl,kindOfTest:an,endsWith:V_,toArray:W_,forEachEntry:G_,matchAll:K_,isHTMLForm:Y_,hasOwnProperty:Nm,hasOwnProp:Nm,reduceDescriptors:q1,freezeMethods:X_,toObjectSet:J_,toCamelCase:q_,noop:Z_,toFiniteNumber:eO,findKey:G1,global:K1,isContextDefined:Y1,ALPHABET:Q1,generateString:tO,isSpecCompliantForm:nO,toJSONObject:rO,isAsyncFn:iO,isThenable:oO};function Z(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}C.inherits(Z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const X1=Z.prototype,J1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{J1[e]={value:e}});Object.defineProperties(Z,J1);Object.defineProperty(X1,"isAxiosError",{value:!0});Z.from=(e,t,n,r,i,o)=>{const a=Object.create(X1);return C.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),Z.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const aO=null;function cf(e){return C.isPlainObject(e)||C.isArray(e)}function Z1(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Lm(e,t,n){return e?e.concat(t).map(function(i,o){return i=Z1(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function sO(e){return C.isArray(e)&&!e.some(cf)}const lO=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function Ul(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,x){return!C.isUndefined(x[m])});const r=n.metaTokens,i=n.visitor||f,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(C.isDate(g))return g.toISOString();if(!l&&C.isBlob(g))throw new Z("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(g)||C.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,m,x){let h=g;if(g&&!x&&typeof g=="object"){if(C.endsWith(m,"{}"))m=r?m:m.slice(0,-2),g=JSON.stringify(g);else if(C.isArray(g)&&sO(g)||(C.isFileList(g)||C.endsWith(m,"[]"))&&(h=C.toArray(g)))return m=Z1(m),h.forEach(function(y,S){!(C.isUndefined(y)||y===null)&&t.append(a===!0?Lm([m],S,o):a===null?m:m+"[]",u(y))}),!1}return cf(g)?!0:(t.append(Lm(x,m,o),u(g)),!1)}const c=[],d=Object.assign(lO,{defaultVisitor:f,convertValue:u,isVisitable:cf});function v(g,m){if(!C.isUndefined(g)){if(c.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));c.push(g),C.forEach(g,function(h,p){(!(C.isUndefined(h)||h===null)&&i.call(t,h,C.isString(p)?p.trim():p,m,d))===!0&&v(h,m?m.concat(p):[p])}),c.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return v(e),t}function zm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function fp(e,t){this._pairs=[],e&&Ul(e,this,t)}const ex=fp.prototype;ex.append=function(t,n){this._pairs.push([t,n])};ex.toString=function(t){const n=t?function(r){return t.call(this,r,zm)}:zm;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function uO(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tx(e,t,n){if(!t)return e;const r=n&&n.encode||uO,i=n&&n.serialize;let o;if(i?o=i(t,n):o=C.isURLSearchParams(t)?t.toString():new fp(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class cO{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Dm=cO,nx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fO=typeof URLSearchParams<"u"?URLSearchParams:fp,dO=typeof FormData<"u"?FormData:null,pO=typeof Blob<"u"?Blob:null,hO={isBrowser:!0,classes:{URLSearchParams:fO,FormData:dO,Blob:pO},protocols:["http","https","file","blob","url","data"]},rx=typeof window<"u"&&typeof document<"u",mO=(e=>rx&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),gO=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),yO=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:rx,hasStandardBrowserEnv:mO,hasStandardBrowserWebWorkerEnv:gO},Symbol.toStringTag,{value:"Module"})),Xt={...yO,...hO};function vO(e,t){return Ul(e,new Xt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Xt.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function xO(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wO(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function ix(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&C.isArray(i)?i.length:a,l?(C.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!C.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&C.isArray(i[a])&&(i[a]=wO(i[a])),!s)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,i)=>{t(xO(r),i,n,0)}),n}return null}function bO(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const dp={transitional:nx,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=C.isObject(t);if(o&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return i&&i?JSON.stringify(ix(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return vO(t,this.formSerializer).toString();if((s=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ul(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),bO(t)):t}],transformResponse:[function(t){const n=this.transitional||dp.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&C.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Z.from(s,Z.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xt.classes.FormData,Blob:Xt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{dp.headers[e]={}});const pp=dp,SO=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kO=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&SO[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Mm=Symbol("internals");function Yi(e){return e&&String(e).trim().toLowerCase()}function rs(e){return e===!1||e==null?e:C.isArray(e)?e.map(rs):String(e)}function EO(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const _O=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Mu(e,t,n,r,i){if(C.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function OO(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function $O(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Bl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const f=Yi(l);if(!f)throw new Error("header name must be a non-empty string");const c=C.findKey(i,f);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||l]=rs(s))}const a=(s,l)=>C.forEach(s,(u,f)=>o(u,f,l));return C.isPlainObject(t)||t instanceof this.constructor?a(t,n):C.isString(t)&&(t=t.trim())&&!_O(t)?a(kO(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Yi(t),t){const r=C.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return EO(i);if(C.isFunction(n))return n.call(this,i,r);if(C.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Yi(t),t){const r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Mu(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=Yi(a),a){const s=C.findKey(r,a);s&&(!n||Mu(r,r[s],s,n))&&(delete r[s],i=!0)}}return C.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Mu(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return C.forEach(this,(i,o)=>{const a=C.findKey(r,o);if(a){n[a]=rs(i),delete n[o];return}const s=t?OO(o):String(o).trim();s!==o&&delete n[o],n[s]=rs(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&C.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Mm]=this[Mm]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=Yi(a);r[s]||($O(i,a),r[s]=!0)}return C.isArray(t)?t.forEach(o):o(t),this}}Bl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(Bl.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});C.freezeMethods(Bl);const vn=Bl;function Uu(e,t){const n=this||pp,r=t||n,i=vn.from(r.headers);let o=r.data;return C.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function ox(e){return!!(e&&e.__CANCEL__)}function oa(e,t,n){Z.call(this,e??"canceled",Z.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(oa,Z,{__CANCEL__:!0});function TO(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Z("Request failed with status code "+n.status,[Z.ERR_BAD_REQUEST,Z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const CO=Xt.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];C.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),C.isString(r)&&a.push("path="+r),C.isString(i)&&a.push("domain="+i),o===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function PO(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jO(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ax(e,t){return e&&!PO(t)?jO(e,t):t}const RO=Xt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=C.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function AO(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function FO(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),f=r[o];a||(a=u),n[i]=l,r[i]=u;let c=o,d=0;for(;c!==i;)d+=n[c++],c=c%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const v=f&&u-f;return v?Math.round(d*1e3/v):void 0}}function Um(e,t){let n=0;const r=FO(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const NO=typeof XMLHttpRequest<"u",IO=NO&&function(e){return new Promise(function(n,r){let i=e.data;const o=vn.from(e.headers).normalize();let{responseType:a,withXSRFToken:s}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let f;if(C.isFormData(i)){if(Xt.hasStandardBrowserEnv||Xt.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[m,...x]=f?f.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([m||"multipart/form-data",...x].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+x))}const d=ax(e.baseURL,e.url);c.open(e.method.toUpperCase(),tx(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function v(){if(!c)return;const m=vn.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};TO(function(y){n(y),u()},function(y){r(y),u()},h),c=null}if("onloadend"in c?c.onloadend=v:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(v)},c.onabort=function(){c&&(r(new Z("Request aborted",Z.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new Z("Network Error",Z.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||nx;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new Z(x,h.clarifyTimeoutError?Z.ETIMEDOUT:Z.ECONNABORTED,e,c)),c=null},Xt.hasStandardBrowserEnv&&(s&&C.isFunction(s)&&(s=s(e)),s||s!==!1&&RO(d))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&CO.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&C.forEach(o.toJSON(),function(x,h){c.setRequestHeader(h,x)}),C.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Um(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Um(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=m=>{c&&(r(!m||m.type?new oa(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=AO(d);if(g&&Xt.protocols.indexOf(g)===-1){r(new Z("Unsupported protocol "+g+":",Z.ERR_BAD_REQUEST,e));return}c.send(i||null)})},ff={http:aO,xhr:IO};C.forEach(ff,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Bm=e=>`- ${e}`,LO=e=>C.isFunction(e)||e===null||e===!1,sx={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let a;if(r=n,!LO(n)&&(r=ff[(a=String(n)).toLowerCase()],r===void 0))throw new Z(`Unknown adapter '${a}'`);if(r)break;i[a||"#"+o]=r}if(!r){const o=Object.entries(i).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?o.length>1?`since :
`+o.map(Bm).join(`
`):" "+Bm(o[0]):"as no adapter specified";throw new Z("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:ff};function Bu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new oa(null,e)}function Vm(e){return Bu(e),e.headers=vn.from(e.headers),e.data=Uu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),sx.getAdapter(e.adapter||pp.adapter)(e).then(function(r){return Bu(e),r.data=Uu.call(e,e.transformResponse,r),r.headers=vn.from(r.headers),r},function(r){return ox(r)||(Bu(e),r&&r.response&&(r.response.data=Uu.call(e,e.transformResponse,r.response),r.response.headers=vn.from(r.response.headers))),Promise.reject(r)})}const Wm=e=>e instanceof vn?e.toJSON():e;function ki(e,t){t=t||{};const n={};function r(u,f,c){return C.isPlainObject(u)&&C.isPlainObject(f)?C.merge.call({caseless:c},u,f):C.isPlainObject(f)?C.merge({},f):C.isArray(f)?f.slice():f}function i(u,f,c){if(C.isUndefined(f)){if(!C.isUndefined(u))return r(void 0,u,c)}else return r(u,f,c)}function o(u,f){if(!C.isUndefined(f))return r(void 0,f)}function a(u,f){if(C.isUndefined(f)){if(!C.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function s(u,f,c){if(c in t)return r(u,f);if(c in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,f)=>i(Wm(u),Wm(f),!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=l[f]||i,d=c(e[f],t[f],f);C.isUndefined(d)&&c!==s||(n[f]=d)}),n}const lx="1.6.2",hp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{hp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Hm={};hp.transitional=function(t,n,r){function i(o,a){return"[Axios v"+lx+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new Z(i(a," has been removed"+(n?" in "+n:"")),Z.ERR_DEPRECATED);return n&&!Hm[a]&&(Hm[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function zO(e,t,n){if(typeof e!="object")throw new Z("options must be an object",Z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new Z("option "+o+" must be "+l,Z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Z("Unknown option "+o,Z.ERR_BAD_OPTION)}}const df={assertOptions:zO,validators:hp},Pn=df.validators;class zs{constructor(t){this.defaults=t,this.interceptors={request:new Dm,response:new Dm}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ki(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&df.assertOptions(r,{silentJSONParsing:Pn.transitional(Pn.boolean),forcedJSONParsing:Pn.transitional(Pn.boolean),clarifyTimeoutError:Pn.transitional(Pn.boolean)},!1),i!=null&&(C.isFunction(i)?n.paramsSerializer={serialize:i}:df.assertOptions(i,{encode:Pn.function,serialize:Pn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&C.merge(o.common,o[n.method]);o&&C.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=vn.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let f,c=0,d;if(!l){const g=[Vm.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),d=g.length,f=Promise.resolve(n);c<d;)f=f.then(g[c++],g[c++]);return f}d=s.length;let v=n;for(c=0;c<d;){const g=s[c++],m=s[c++];try{v=g(v)}catch(x){m.call(this,x);break}}try{f=Vm.call(this,v)}catch(g){return Promise.reject(g)}for(c=0,d=u.length;c<d;)f=f.then(u[c++],u[c++]);return f}getUri(t){t=ki(this.defaults,t);const n=ax(t.baseURL,t.url);return tx(n,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){zs.prototype[t]=function(n,r){return this.request(ki(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(ki(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}zs.prototype[t]=n(),zs.prototype[t+"Form"]=n(!0)});const is=zs;class mp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new oa(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new mp(function(i){t=i}),cancel:t}}}const DO=mp;function MO(e){return function(n){return e.apply(null,n)}}function UO(e){return C.isObject(e)&&e.isAxiosError===!0}const pf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pf).forEach(([e,t])=>{pf[t]=e});const BO=pf;function ux(e){const t=new is(e),n=V1(is.prototype.request,t);return C.extend(n,is.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return ux(ki(e,i))},n}const Fe=ux(pp);Fe.Axios=is;Fe.CanceledError=oa;Fe.CancelToken=DO;Fe.isCancel=ox;Fe.VERSION=lx;Fe.toFormData=Ul;Fe.AxiosError=Z;Fe.Cancel=Fe.CanceledError;Fe.all=function(t){return Promise.all(t)};Fe.spread=MO;Fe.isAxiosError=UO;Fe.mergeConfig=ki;Fe.AxiosHeaders=vn;Fe.formToJSON=e=>ix(C.isHTMLForm(e)?new FormData(e):e);Fe.getAdapter=sx.getAdapter;Fe.HttpStatusCode=BO;Fe.default=Fe;const kt=Fe;kt.defaults.baseURL="https://watertracker-backend.onrender.com";const gp=e=>{kt.defaults.headers.common.Authorization=`Bearer ${e}`},VO=()=>{kt.defaults.headers.common.Authorization=""},WO=async e=>{const{data:t}=await kt.post("/auth/register",e);return gp(t.token),t},HO=async e=>{const{data:t}=await kt.post("/auth/login",e);return gp(t.token),t},GO=async()=>{await kt.post("/auth/logout"),VO()},KO=async e=>{const{data:t}=await kt.post("/waterrate",{waterRate:e});return t},YO=async e=>{gp(e);const{data:t}=await kt.get("/user/current");return t},qO=async e=>{const{data:{avatarURL:t}}=await kt.post("/user/avatar",e,{headers:{"Content-Type":"multipart/form-data"}});return t},QO=async e=>{const{data:t}=await kt.patch("/user/edit",e);return t},XO=async e=>{const{data:t}=await kt.post("/water",e,{headers:{"Content-Type":"application/json"}});return t},JO=async({newWaterUser:e,id:t})=>{const{data:n}=await kt.patch(`/water/${t}`,e,{headers:{"Content-Type":"application/json"}});return n},ZO=async e=>{await kt.delete(`/water${e}`)},e$=on("auth/register",async(e,{rejectWithValue:t})=>{try{return await WO(e)}catch(n){return t(n.message)}}),t$=on("auth/login",async(e,{rejectWithValue:t})=>{try{return await HO(e)}catch(n){return t(n.message)}}),cx=on("auth/logout",async(e,{rejectWithValue:t})=>{try{await GO();return}catch(n){return t(n.message)}}),os=on("auth/refresh",async(e,{rejectWithValue:t,getState:n})=>{try{const{auth:r}=n();return await YO(r.token)}catch(r){return t(r.message)}},{condition:(e,{getState:t})=>{const{auth:n}=t();if(!n.token)return!1}}),fx=on("auth/updateWaterRate",async(e,{rejectWithValue:t})=>{try{const n=Number(e)*1e3,{waterRate:r}=await KO(n);return r}catch(n){return t(n.message)}}),dx=on("user/avatar",async(e,{rejectWithValue:t})=>{try{return await qO(e)}catch(n){return t(n.message)}}),px=on("user/edit",async(e,{rejectWithValue:t})=>{try{return await QO(e)}catch(n){return t(n.message)}}),n$=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},r$=(e,{payload:t})=>{e.user=t.user,e.token=t.token,e.isLoggedIn=!0},i$=()=>hx,o$=(e,{payload:t})=>{e.user=t,e.isRefreshing=!1,e.isLoggedIn=!0},a$=e=>{e.isRefreshing=!0},s$=e=>{e.isRefreshing=!1},l$=(e,{payload:t})=>{e.user.waterRate=t},u$=(e,{payload:t})=>{e.user.avatarURL=t},c$=(e,{payload:t})=>{e.user={...e.user,...t}},hx={user:{email:"",avatarURL:"",name:"",gender:"",waterRate:""},token:null,isLoggedIn:!1,isRefreshing:!1},f$=M1({name:"auth",initialState:hx,extraReducers:e=>{e.addCase(e$.fulfilled,n$).addCase(t$.fulfilled,r$).addCase(cx.fulfilled,i$).addCase(fx.fulfilled,l$).addCase(dx.fulfilled,u$).addCase(px.fulfilled,c$).addCase(os.fulfilled,o$).addCase(os.pending,a$).addCase(os.rejected,s$)}}),d$=f$.reducer,p$=(e,{payload:{_id:t,waterVolume:n,date:r,owner:i}})=>{e.today.dailyWaterList.push({_id:t,waterVolume:n,date:r,owner:i})},h$=(e,{payload:t})=>{const n=e.today.dailyWaterList,r=n.findIndex(i=>i._id===t._id);r!==-1&&(n[r]=t)},m$=(e,{payload:t})=>{e.today.dailyWaterList=e.today.dailyWaterList.filter(n=>n._id!==t)},g$=on("water/addWater",async(e,{rejectWithValue:t})=>{try{return await XO(e)}catch(n){return t(n.message)}}),y$=on("water/editWater",async(e,{rejectWithValue:t})=>{try{return await JO(e)}catch(n){return t(n.message)}}),v$=on("water/deleteWater",async(e,{rejectWithValue:t})=>{try{return ZO(e),e}catch(n){return t(n.message)}}),x$={month:[],today:{dailyWaterList:[],dailyNormFulfillment:0}},w$=M1({name:"water",initialState:x$,extraReducers:e=>{e.addCase(g$.fulfilled,p$).addCase(y$.fulfilled,h$).addCase(v$.fulfilled,m$)}}),b$=w$.reducer,S$={key:"auth",storage:B1,whitelist:["token"]},mx=ME({reducer:{auth:c_(S$,d$),waterData:b$},middleware:e=>e({serializableCheck:{ignoredActions:[rp,Ll,ip,op,ap,sp]}})}),k$=g_(mx);var gx={};const E$=Dw(vS);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=E$;function n(){var a=r([`
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
`]);return n=function(){return a},a}function r(a,s){return s||(s=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(s)}}))}var i=(0,t.css)(n()),o=i;e.default=o})(gx);const _$=$i(gx),hf={color:{black:"#2F2F2F",white:"#FFFFFF",accent:"#407BFF",secondaryWhite:"#ecf2ff",secondaryRed:"#ef5050",secondaryLightBlue:"#9ebbff",secondaryYellow:"#ff9d43",secondaryPowderBlue:"#d7e3ff"},breakpoint:{mobile:"320px",tablet:"768px",desktop:"1440px"},transition:{main:"250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",modal:"300ms ease-in-out"},boxShadowforButton:{normalButton:"0 4px 8px rgba(64, 123, 255, 0.34)",hoverButton:"0 4px 14px rgba(64, 123, 255, 0.54)",activeButton:"none"},modalBoxShadow:{modal:"0 4px 14px rgba(64, 123, 255, 0.3)"}},O$="/water-tracker/assets/Roboto-Regular-4e147ab6.ttf",$$="/water-tracker/assets/Roboto-Medium-9d0d55a3.ttf",T$="/water-tracker/assets/Roboto-Bold-ec685a46.ttf",C$=Zf`
  ${_$}

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
    src: url(${O$}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url(${$$}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: url(${T$}) format('truetype');
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
    color: ${hf.color.black};
    background-color: ${hf.color.white};
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
`;var yx={exports:{}},P$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",j$=P$,R$=j$;function vx(){}function xx(){}xx.resetWarningCache=vx;var A$=function(){function e(r,i,o,a,s,l){if(l!==R$){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:xx,resetWarningCache:vx};return n.PropTypes=n,n};yx.exports=A$();var F$=yx.exports;const no=$i(F$);var N$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,mf=l0(function(e){return N$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),I$=mf,L$=function(t){return t!=="theme"},Gm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?I$:L$},Km=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},z$=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return ll(n,r,i),Qf(function(){return ul(n,r,i)}),null},D$=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var s=Km(t,n,r),l=s||Gm(i),u=!l("as");return function(){var f=arguments,c=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)c.push.apply(c,f);else{c.push(f[0][0]);for(var d=f.length,v=1;v<d;v++)c.push(f[v],f[0][v])}var g=Zo(function(m,x,h){var p=u&&m.as||i,y="",S=[],E=m;if(m.theme==null){E={};for(var _ in m)E[_]=m[_];E.theme=w.useContext(xn)}typeof m.className=="string"?y=qf(x.registered,S,m.className):m.className!=null&&(y=m.className+" ");var $=Jo(c.concat(S),x.registered,E);y+=x.key+"-"+$.name,a!==void 0&&(y+=" "+a);var A=u&&s===void 0?Gm(p):l,B={};for(var D in m)u&&D==="as"||A(D)&&(B[D]=m[D]);return B.className=y,B.ref=h,w.createElement(w.Fragment,null,w.createElement(z$,{cache:x,serialized:$,isStringTag:typeof p=="string"}),w.createElement(p,B))});return g.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=c,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+a}}),g.withComponent=function(m,x){return e(m,xo({},n,x,{shouldForwardProp:Km(g,x,!0)})).apply(void 0,c)},g}},M$=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],k=D$.bind();M$.forEach(function(e){k[e]=k(e)});const U$=k.div`
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
`,B$=k.div`
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
`,V$=k.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
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
`,W$=k.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`,H$=k.svg`
  width: 100%;
  height: 100%;
  stroke: ${e=>e.theme.color.accent};

  &:hover,
  &:focus {
    stroke: ${e=>e.theme.color.secondaryYellow};
  }
`,_t="/water-tracker/assets/sprite-c35e1970.svg",Vl=({onShow:e=!0,children:t,title:n,onClose:r})=>{const i=document.querySelector("#modal-root"),o=w.useRef(null),a=w.useRef(null);return w.useEffect(()=>{const s=u=>{document.body.style.overflow=u?"hidden":"auto"};(e||i.children.length!==0)&&s(!0);const l=u=>{u.code==="Escape"&&r()};return window.addEventListener("keydown",l),()=>{s(!1),window.removeEventListener("keydown",l)}},[i.children.length,e,r]),Wd.createPortal(b.jsx(U$,{onClick:r,ref:a,children:b.jsxs(B$,{onClick:s=>s.stopPropagation(),ref:o,children:[b.jsxs(V$,{children:[b.jsx("h2",{children:n}),b.jsx(W$,{onClick:r,children:b.jsx(H$,{children:b.jsx("use",{href:`${_t}#icon-outline`})})})]}),b.jsx("div",{children:t})]})}),i)};Vl.propTypes={onClose:no.func.isRequired,children:no.node.isRequired,onShow:no.bool,title:no.string.isRequired};const G$=k.div`
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
`;var K$=function(e){return{display:e?"flex":"none"}},Y$="#4fa94d",q$={"aria-busy":!0,role:"status"},Ym=globalThis&&globalThis.__assign||function(){return Ym=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ym.apply(this,arguments)},qm=globalThis&&globalThis.__assign||function(){return qm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qm.apply(this,arguments)},Qm=globalThis&&globalThis.__assign||function(){return Qm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qm.apply(this,arguments)},Xm=globalThis&&globalThis.__assign||function(){return Xm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xm.apply(this,arguments)},Jm=globalThis&&globalThis.__assign||function(){return Jm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jm.apply(this,arguments)},Zm=globalThis&&globalThis.__assign||function(){return Zm=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zm.apply(this,arguments)},eg=globalThis&&globalThis.__assign||function(){return eg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},eg.apply(this,arguments)};function Q$(e){function t(R,z,M,V,T){for(var q=0,N=0,me=0,ee=0,te,K,je=0,Qe=0,J,De=J=te=0,oe=0,Ne=0,ln=0,Ie=0,Dr=M.length,O=Dr-1,I,P="",L="",Y="",ne="",de;oe<Dr;){if(K=M.charCodeAt(oe),oe===O&&N+ee+me+q!==0&&(N!==0&&(K=N===47?10:47),ee=me=q=0,Dr++,O++),N+ee+me+q===0){if(oe===O&&(0<Ne&&(P=P.replace(d,"")),0<P.trim().length)){switch(K){case 32:case 9:case 59:case 13:case 10:break;default:P+=M.charAt(oe)}K=59}switch(K){case 123:for(P=P.trim(),te=P.charCodeAt(0),J=1,Ie=++oe;oe<Dr;){switch(K=M.charCodeAt(oe)){case 123:J++;break;case 125:J--;break;case 47:switch(K=M.charCodeAt(oe+1)){case 42:case 47:e:{for(De=oe+1;De<O;++De)switch(M.charCodeAt(De)){case 47:if(K===42&&M.charCodeAt(De-1)===42&&oe+2!==De){oe=De+1;break e}break;case 10:if(K===47){oe=De+1;break e}}oe=De}}break;case 91:K++;case 40:K++;case 34:case 39:for(;oe++<O&&M.charCodeAt(oe)!==K;);}if(J===0)break;oe++}switch(J=M.substring(Ie,oe),te===0&&(te=(P=P.replace(c,"").trim()).charCodeAt(0)),te){case 64:switch(0<Ne&&(P=P.replace(d,"")),K=P.charCodeAt(1),K){case 100:case 109:case 115:case 45:Ne=z;break;default:Ne=Ft}if(J=t(z,Ne,J,K,T+1),Ie=J.length,0<F&&(Ne=n(Ft,P,ln),de=s(3,J,Ne,z,Q,xe,Ie,K,T,V),P=Ne.join(""),de!==void 0&&(Ie=(J=de.trim()).length)===0&&(K=0,J="")),0<Ie)switch(K){case 115:P=P.replace(_,a);case 100:case 109:case 45:J=P+"{"+J+"}";break;case 107:P=P.replace(p,"$1 $2"),J=P+"{"+J+"}",J=Te===1||Te===2&&o("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=P+J,V===112&&(J=(L+=J,""))}else J="";break;default:J=t(z,n(z,P,ln),J,V,T+1)}Y+=J,J=ln=Ne=De=te=0,P="",K=M.charCodeAt(++oe);break;case 125:case 59:if(P=(0<Ne?P.replace(d,""):P).trim(),1<(Ie=P.length))switch(De===0&&(te=P.charCodeAt(0),te===45||96<te&&123>te)&&(Ie=(P=P.replace(" ",":")).length),0<F&&(de=s(1,P,z,R,Q,xe,L.length,V,T,V))!==void 0&&(Ie=(P=de.trim()).length)===0&&(P="\0\0"),te=P.charCodeAt(0),K=P.charCodeAt(1),te){case 0:break;case 64:if(K===105||K===99){ne+=P+M.charAt(oe);break}default:P.charCodeAt(Ie-1)!==58&&(L+=i(P,te,K,P.charCodeAt(2)))}ln=Ne=De=te=0,P="",K=M.charCodeAt(++oe)}}switch(K){case 13:case 10:N===47?N=0:1+te===0&&V!==107&&0<P.length&&(Ne=1,P+="\0"),0<F*H&&s(0,P,z,R,Q,xe,L.length,V,T,V),xe=1,Q++;break;case 59:case 125:if(N+ee+me+q===0){xe++;break}default:switch(xe++,I=M.charAt(oe),K){case 9:case 32:if(ee+q+N===0)switch(je){case 44:case 58:case 9:case 32:I="";break;default:K!==32&&(I=" ")}break;case 0:I="\\0";break;case 12:I="\\f";break;case 11:I="\\v";break;case 38:ee+N+q===0&&(Ne=ln=1,I="\f"+I);break;case 108:if(ee+N+q+$e===0&&0<De)switch(oe-De){case 2:je===112&&M.charCodeAt(oe-3)===58&&($e=je);case 8:Qe===111&&($e=Qe)}break;case 58:ee+N+q===0&&(De=oe);break;case 44:N+me+ee+q===0&&(Ne=1,I+="\r");break;case 34:case 39:N===0&&(ee=ee===K?0:ee===0?K:ee);break;case 91:ee+N+me===0&&q++;break;case 93:ee+N+me===0&&q--;break;case 41:ee+N+q===0&&me--;break;case 40:if(ee+N+q===0){if(te===0)switch(2*je+3*Qe){case 533:break;default:te=1}me++}break;case 64:N+me+ee+q+De+J===0&&(J=1);break;case 42:case 47:if(!(0<ee+q+me))switch(N){case 0:switch(2*K+3*M.charCodeAt(oe+1)){case 235:N=47;break;case 220:Ie=oe,N=42}break;case 42:K===47&&je===42&&Ie+2!==oe&&(M.charCodeAt(Ie+2)===33&&(L+=M.substring(Ie,oe+1)),I="",N=0)}}N===0&&(P+=I)}Qe=je,je=K,oe++}if(Ie=L.length,0<Ie){if(Ne=z,0<F&&(de=s(2,L,Ne,R,Q,xe,Ie,V,T,V),de!==void 0&&(L=de).length===0))return ne+L+Y;if(L=Ne.join(",")+"{"+L+"}",Te*$e!==0){switch(Te!==2||o(L,2)||($e=0),$e){case 111:L=L.replace(S,":-moz-$1")+L;break;case 112:L=L.replace(y,"::-webkit-input-$1")+L.replace(y,"::-moz-$1")+L.replace(y,":-ms-input-$1")+L}$e=0}}return ne+L+Y}function n(R,z,M){var V=z.trim().split(x);z=V;var T=V.length,q=R.length;switch(q){case 0:case 1:var N=0;for(R=q===0?"":R[0]+" ";N<T;++N)z[N]=r(R,z[N],M).trim();break;default:var me=N=0;for(z=[];N<T;++N)for(var ee=0;ee<q;++ee)z[me++]=r(R[ee]+" ",V[N],M).trim()}return z}function r(R,z,M){var V=z.charCodeAt(0);switch(33>V&&(V=(z=z.trim()).charCodeAt(0)),V){case 38:return z.replace(h,"$1"+R.trim());case 58:return R.trim()+z.replace(h,"$1"+R.trim());default:if(0<1*M&&0<z.indexOf("\f"))return z.replace(h,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+z}function i(R,z,M,V){var T=R+";",q=2*z+3*M+4*V;if(q===944){R=T.indexOf(":",9)+1;var N=T.substring(R,T.length-1).trim();return N=T.substring(0,R).trim()+N+";",Te===1||Te===2&&o(N,1)?"-webkit-"+N+N:N}if(Te===0||Te===2&&!o(T,1))return T;switch(q){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(G,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return N=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+T+"-ms-flex-pack"+N+T;case 1005:return g.test(T)?T.replace(v,":-webkit-")+T.replace(v,":-moz-")+T:T;case 1e3:switch(N=T.substring(13).trim(),z=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(z)){case 226:N=T.replace(E,"tb");break;case 232:N=T.replace(E,"tb-rl");break;case 220:N=T.replace(E,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+N+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(z=(T=R).length-10,N=(T.charCodeAt(z)===33?T.substring(0,z):T).substring(R.indexOf(":",7)+1).trim(),q=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:T=T.replace(N,"-webkit-"+N)+";"+T;break;case 207:case 102:T=T.replace(N,"-webkit-"+(102<q?"inline-":"")+"box")+";"+T.replace(N,"-webkit-"+N)+";"+T.replace(N,"-ms-"+N+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return N=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+N+"-ms-flex-"+N+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(A,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(A,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(D.test(R)===!0)return(N=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),z,M,V).replace(":fill-available",":stretch"):T.replace(N,"-webkit-"+N)+T.replace(N,"-moz-"+N.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,M+V===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+T}return T}function o(R,z){var M=R.indexOf(z===1?":":"{"),V=R.substring(0,z!==3?M:10);return M=R.substring(M+1,R.length-1),W(z!==2?V:V.replace(B,"$1"),M,z)}function a(R,z){var M=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return M!==z+";"?M.replace($," or ($1)").substring(4):"("+z+")"}function s(R,z,M,V,T,q,N,me,ee,te){for(var K=0,je=z,Qe;K<F;++K)switch(Qe=Ve[K].call(f,R,je,M,V,T,q,N,me,ee,te)){case void 0:case!1:case!0:case null:break;default:je=Qe}if(je!==z)return je}function l(R){switch(R){case void 0:case null:F=Ve.length=0;break;default:if(typeof R=="function")Ve[F++]=R;else if(typeof R=="object")for(var z=0,M=R.length;z<M;++z)l(R[z]);else H=!!R|0}return l}function u(R){return R=R.prefix,R!==void 0&&(W=null,R?typeof R!="function"?Te=1:(Te=2,W=R):Te=0),u}function f(R,z){var M=R;if(33>M.charCodeAt(0)&&(M=M.trim()),ie=M,M=[ie],0<F){var V=s(-1,z,M,M,Q,xe,0,0,0,0);V!==void 0&&typeof V=="string"&&(z=V)}var T=t(Ft,M,z,0,0);return 0<F&&(V=s(-2,T,M,M,Q,xe,T.length,0,0,0),V!==void 0&&(T=V)),ie="",$e=0,xe=Q=1,T}var c=/^\0+/g,d=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,m=/([,: ])(transform)/g,x=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,S=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,A=/-self|flex-/g,B=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,G=/([^-])(image-set\()/,xe=1,Q=1,$e=0,Te=1,Ft=[],Ve=[],F=0,W=null,H=0,ie="";return f.use=l,f.set=u,e!==void 0&&u(e),f}var X$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function gn(){return(gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var tg=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},gf=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Hf.typeOf(e)},Ds=Object.freeze([]),Jn=Object.freeze({});function Bo(e){return typeof e=="function"}function ng(e){return e.displayName||e.name||"Component"}function yp(e){return e&&typeof e.styledComponentId=="string"}var Ei=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",vp=typeof window<"u"&&"HTMLElement"in window,J$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function aa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Z$=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&aa(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,s=o;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),as=new Map,Ms=new Map,po=1,Ca=function(e){if(as.has(e))return as.get(e);for(;Ms.has(po);)po++;var t=po++;return as.set(e,t),Ms.set(t,e),t},eT=function(e){return Ms.get(e)},tT=function(e,t){t>=po&&(po=t+1),as.set(e,t),Ms.set(t,e)},nT="style["+Ei+'][data-styled-version="5.3.11"]',rT=new RegExp("^"+Ei+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),iT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},oT=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var s=a.match(rT);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(tT(u,l),iT(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},aT=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},wx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var f=l[u];if(f&&f.nodeType===1&&f.hasAttribute(Ei))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ei,"active"),r.setAttribute("data-styled-version","5.3.11");var a=aT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},sT=function(){function e(n){var r=this.element=wx(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,s=o.length;a<s;a++){var l=o[a];if(l.ownerNode===i)return l}aa(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),lT=function(){function e(n){var r=this.element=wx(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),uT=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),rg=vp,cT={isServer:!vp,useCSSOMInjection:!J$},bx=function(){function e(n,r,i){n===void 0&&(n=Jn),r===void 0&&(r={}),this.options=gn({},cT,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&vp&&rg&&(rg=!1,function(o){for(var a=document.querySelectorAll(nT),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Ei)!=="active"&&(oT(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ca(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(gn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new uT(a):o?new sT(a):new lT(a),new Z$(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ca(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ca(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ca(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var s=eT(a);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(a);if(l&&u&&l.size){var f=Ei+".g"+a+'[id="'+s+'"]',c="";l!==void 0&&l.forEach(function(d){d.length>0&&(c+=d+",")}),o+=""+u+f+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),fT=/(a)(d)/gi,ig=function(e){return String.fromCharCode(e+(e>25?39:97))};function yf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ig(t%52)+n;return(ig(t%52)+n).replace(fT,"$1-$2")}var ni=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Sx=function(e){return ni(5381,e)};function dT(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bo(n)&&!yp(n))return!1}return!0}var pT=Sx("5.3.11"),hT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&dT(t),this.componentId=n,this.baseHash=ni(pT,n),this.baseStyle=r,bx.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=_i(this.rules,t,n,r).join(""),s=yf(ni(this.baseHash,a)>>>0);if(!n.hasNameForId(i,s)){var l=r(a,"."+s,void 0,i);n.insertRules(i,s,l)}o.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,f=ni(this.baseHash,r.hash),c="",d=0;d<u;d++){var v=this.rules[d];if(typeof v=="string")c+=v;else if(v){var g=_i(v,t,n,r),m=Array.isArray(g)?g.join(""):g;f=ni(f,m+d),c+=m}}if(c){var x=yf(f>>>0);if(!n.hasNameForId(i,x)){var h=r(c,"."+x,void 0,i);n.insertRules(i,x,h)}o.push(x)}}return o.join(" ")},e}(),mT=/^\s*\/\/.*$/gm,gT=[":","[",".","#"];function yT(e){var t,n,r,i,o=e===void 0?Jn:e,a=o.options,s=a===void 0?Jn:a,l=o.plugins,u=l===void 0?Ds:l,f=new Q$(s),c=[],d=function(m){function x(h){if(h)try{m(h+"}")}catch{}}return function(h,p,y,S,E,_,$,A,B,D){switch(h){case 1:if(B===0&&p.charCodeAt(0)===64)return m(p+";"),"";break;case 2:if(A===0)return p+"/*|*/";break;case 3:switch(A){case 102:case 112:return m(y[0]+p),"";default:return p+(D===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(x)}}}(function(m){c.push(m)}),v=function(m,x,h){return x===0&&gT.indexOf(h[n.length])!==-1||h.match(i)?m:"."+t};function g(m,x,h,p){p===void 0&&(p="&");var y=m.replace(mT,""),S=x&&h?h+" "+x+" { "+y+" }":y;return t=p,n=x,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(h||!x?"":x,S)}return f.use([].concat(u,[function(m,x,h){m===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,v))},d,function(m){if(m===-2){var x=c;return c=[],x}}])),g.hash=u.length?u.reduce(function(m,x){return x.name||aa(15),ni(m,x.name)},5381).toString():"",g}var kx=He.createContext();kx.Consumer;var Ex=He.createContext(),vT=(Ex.Consumer,new bx),vf=yT();function xT(){return w.useContext(kx)||vT}function wT(){return w.useContext(Ex)||vf}var _x=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=vf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return aa(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=vf),this.name+t.hash},e}(),bT=/([A-Z])/,ST=/([A-Z])/g,kT=/^ms-/,ET=function(e){return"-"+e.toLowerCase()};function og(e){return bT.test(e)?e.replace(ST,ET).replace(kT,"-ms-"):e}var ag=function(e){return e==null||e===!1||e===""};function _i(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,s=e.length;a<s;a+=1)(i=_i(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(ag(e))return"";if(yp(e))return"."+e.styledComponentId;if(Bo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return _i(l,t,n,r)}var u;return e instanceof _x?n?(e.inject(n,r),e.getName(r)):e:gf(e)?function f(c,d){var v,g,m=[];for(var x in c)c.hasOwnProperty(x)&&!ag(c[x])&&(Array.isArray(c[x])&&c[x].isCss||Bo(c[x])?m.push(og(x)+":",c[x],";"):gf(c[x])?m.push.apply(m,f(c[x],x)):m.push(og(x)+": "+(v=x,(g=c[x])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in X$||v.startsWith("--")?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(m,["}"]):m}(e):e.toString()}var sg=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ox(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Bo(e)||gf(e)?sg(_i(tg(Ds,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:sg(_i(tg(e,n)))}var _T=function(e,t,n){return n===void 0&&(n=Jn),e.theme!==n.theme&&e.theme||t||n.theme},OT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$T=/(^-|-$)/g;function Vu(e){return e.replace(OT,"-").replace($T,"")}var $x=function(e){return yf(Sx(e)>>>0)};function Pa(e){return typeof e=="string"&&!0}var xf=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},TT=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function CT(e,t,n){var r=e[n];xf(t)&&xf(r)?Tx(r,t):e[n]=t}function Tx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(xf(a))for(var s in a)TT(s)&&CT(e,a[s],s)}return e}var Cx=He.createContext();Cx.Consumer;var Wu={};function Px(e,t,n){var r=yp(e),i=!Pa(e),o=t.attrs,a=o===void 0?Ds:o,s=t.componentId,l=s===void 0?function(p,y){var S=typeof p!="string"?"sc":Vu(p);Wu[S]=(Wu[S]||0)+1;var E=S+"-"+$x("5.3.11"+S+Wu[S]);return y?y+"-"+E:E}(t.displayName,t.parentComponentId):s,u=t.displayName,f=u===void 0?function(p){return Pa(p)?"styled."+p:"Styled("+ng(p)+")"}(e):u,c=t.displayName&&t.componentId?Vu(t.displayName)+"-"+t.componentId:t.componentId||l,d=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(p,y,S){return e.shouldForwardProp(p,y,S)&&t.shouldForwardProp(p,y,S)}:e.shouldForwardProp);var g,m=new hT(n,c,r?e.componentStyle:void 0),x=m.isStatic&&a.length===0,h=function(p,y){return function(S,E,_,$){var A=S.attrs,B=S.componentStyle,D=S.defaultProps,G=S.foldedComponentIds,xe=S.shouldForwardProp,Q=S.styledComponentId,$e=S.target,Te=function(V,T,q){V===void 0&&(V=Jn);var N=gn({},T,{theme:V}),me={};return q.forEach(function(ee){var te,K,je,Qe=ee;for(te in Bo(Qe)&&(Qe=Qe(N)),Qe)N[te]=me[te]=te==="className"?(K=me[te],je=Qe[te],K&&je?K+" "+je:K||je):Qe[te]}),[N,me]}(_T(E,w.useContext(Cx),D)||Jn,E,A),Ft=Te[0],Ve=Te[1],F=function(V,T,q,N){var me=xT(),ee=wT(),te=T?V.generateAndInjectStyles(Jn,me,ee):V.generateAndInjectStyles(q,me,ee);return te}(B,$,Ft),W=_,H=Ve.$as||E.$as||Ve.as||E.as||$e,ie=Pa(H),R=Ve!==E?gn({},E,{},Ve):E,z={};for(var M in R)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?z.as=R[M]:(xe?xe(M,mf,H):!ie||mf(M))&&(z[M]=R[M]));return E.style&&Ve.style!==E.style&&(z.style=gn({},E.style,{},Ve.style)),z.className=Array.prototype.concat(G,Q,F!==Q?F:null,E.className,Ve.className).filter(Boolean).join(" "),z.ref=W,w.createElement(H,z)}(g,p,y,x)};return h.displayName=f,(g=He.forwardRef(h)).attrs=d,g.componentStyle=m,g.displayName=f,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ds,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(p){var y=t.componentId,S=function(_,$){if(_==null)return{};var A,B,D={},G=Object.keys(_);for(B=0;B<G.length;B++)A=G[B],$.indexOf(A)>=0||(D[A]=_[A]);return D}(t,["componentId"]),E=y&&y+"-"+(Pa(p)?p:Vu(ng(p)));return Px(p,gn({},S,{attrs:d,componentId:E}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Tx({},e.defaultProps,p):p}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&Yf(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var wf=function(e){return function t(n,r,i){if(i===void 0&&(i=Jn),!Hf.isValidElementType(r))return aa(1,String(r));var o=function(){return n(r,i,Ox.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,gn({},i,{},a))},o.attrs=function(a){return t(n,r,gn({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Px,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){wf[e]=wf(e)});function xp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ox.apply(void 0,[e].concat(n)).join(""),o=$x(i);return new _x(o,i)}const sa=wf;var jx=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Lt=242.776657104492,PT=1.6,jT=xp(lg||(lg=jx([`
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
`])),Lt*.14,Lt,Lt*.11,Lt*.35,Lt,Lt*.35,Lt*.01,Lt,Lt*.99);sa.path(ug||(ug=jx([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),Lt*.01,Lt,jT,PT);var lg,ug,cg=globalThis&&globalThis.__assign||function(){return cg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cg.apply(this,arguments)},fg=globalThis&&globalThis.__assign||function(){return fg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fg.apply(this,arguments)},dg=globalThis&&globalThis.__assign||function(){return dg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},dg.apply(this,arguments)},pg=globalThis&&globalThis.__assign||function(){return pg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},pg.apply(this,arguments)},hg=globalThis&&globalThis.__assign||function(){return hg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},hg.apply(this,arguments)},mg=globalThis&&globalThis.__assign||function(){return mg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mg.apply(this,arguments)},gg=globalThis&&globalThis.__assign||function(){return gg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},gg.apply(this,arguments)},RT=function(t,n){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof r[t]<"u")return r[t];if(t&&t.indexOf(".")>0){for(var i=t.split("."),o=i.length,a=r[i[0]],s=1;a!=null&&s<o;)a=a[i[s]],s+=1;if(typeof a<"u")return a}return n}},wp=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},yg=globalThis&&globalThis.__assign||function(){return yg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},yg.apply(this,arguments)},AT=xp(vg||(vg=wp([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`])));sa.svg(xg||(xg=wp([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),AT,RT("speed","0.75"));sa.polyline(wg||(wg=wp([`
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
`])),function(e){return e.width});var vg,xg,wg,bg=globalThis&&globalThis.__assign||function(){return bg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},bg.apply(this,arguments)},Sg=globalThis&&globalThis.__assign||function(){return Sg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Sg.apply(this,arguments)},ho=globalThis&&globalThis.__assign||function(){return ho=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ho.apply(this,arguments)},FT=function(e){var t=e.height,n=t===void 0?80:t,r=e.width,i=r===void 0?80:r,o=e.radius,a=o===void 0?9:o,s=e.color,l=s===void 0?Y$:s,u=e.ariaLabel,f=u===void 0?"three-dots-loading":u,c=e.wrapperStyle,d=e.wrapperClass,v=e.visible,g=v===void 0?!0:v;return He.createElement("div",ho({style:ho(ho({},K$(g)),c),className:d,"data-testid":"three-dots-loading","aria-label":f},q$),He.createElement("svg",{width:i,height:n,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:l,"data-testid":"three-dots-svg"},He.createElement("circle",{cx:"15",cy:"15",r:Number(a)+6},He.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),He.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),He.createElement("circle",{cx:"60",cy:"15",r:a,attributeName:"fill-opacity",from:"1",to:"0.3"},He.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),He.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),He.createElement("circle",{cx:"105",cy:"15",r:Number(a)+6},He.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),He.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))},bp=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},kg=globalThis&&globalThis.__assign||function(){return kg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kg.apply(this,arguments)},NT=xp(Eg||(Eg=bp([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));sa.polygon(_g||(_g=bp([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),NT);sa.svg(Og||(Og=bp([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var Eg,_g,Og,$g=globalThis&&globalThis.__assign||function(){return $g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},$g.apply(this,arguments)},Tg=globalThis&&globalThis.__assign||function(){return Tg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Tg.apply(this,arguments)},Cg=globalThis&&globalThis.__assign||function(){return Cg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Cg.apply(this,arguments)},Pg=globalThis&&globalThis.__assign||function(){return Pg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Pg.apply(this,arguments)},jg=globalThis&&globalThis.__assign||function(){return jg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},jg.apply(this,arguments)},Rg=globalThis&&globalThis.__assign||function(){return Rg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Rg.apply(this,arguments)},Ag=globalThis&&globalThis.__assign||function(){return Ag=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ag.apply(this,arguments)},Fg=globalThis&&globalThis.__assign||function(){return Fg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Fg.apply(this,arguments)},Ng=globalThis&&globalThis.__assign||function(){return Ng=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ng.apply(this,arguments)},Ig=globalThis&&globalThis.__assign||function(){return Ig=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ig.apply(this,arguments)},Lg=globalThis&&globalThis.__assign||function(){return Lg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Lg.apply(this,arguments)},zg=globalThis&&globalThis.__assign||function(){return zg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},zg.apply(this,arguments)},Dg=globalThis&&globalThis.__assign||function(){return Dg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Dg.apply(this,arguments)},Mg=globalThis&&globalThis.__assign||function(){return Mg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Mg.apply(this,arguments)};const IT=k.div`
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
`,Sp=()=>b.jsx(IT,{children:b.jsx(FT,{height:"90",width:"90",radius:"9",color:"#407bff",ariaLabel:"three-dots-loading",visible:!0,timeout:2e3})});/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vo.apply(this,arguments)}var Mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mn||(Mn={}));const Ug="popstate";function LT(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return bf("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Us(i)}return DT(t,n,null,e)}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function kp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zT(){return Math.random().toString(36).substr(2,8)}function Bg(e,t){return{usr:e.state,key:e.key,idx:t}}function bf(e,t,n,r){return n===void 0&&(n=null),Vo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fi(t):t,{state:n,key:t&&t.key||r||zT()})}function Us(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function DT(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Mn.Pop,l=null,u=f();u==null&&(u=0,a.replaceState(Vo({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){s=Mn.Pop;let x=f(),h=x==null?null:x-u;u=x,l&&l({action:s,location:m.location,delta:h})}function d(x,h){s=Mn.Push;let p=bf(m.location,x,h);n&&n(p,x),u=f()+1;let y=Bg(p,u),S=m.createHref(p);try{a.pushState(y,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(S)}o&&l&&l({action:s,location:m.location,delta:1})}function v(x,h){s=Mn.Replace;let p=bf(m.location,x,h);n&&n(p,x),u=f();let y=Bg(p,u),S=m.createHref(p);a.replaceState(y,"",S),o&&l&&l({action:s,location:m.location,delta:0})}function g(x){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:Us(x);return _e(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let m={get action(){return s},get location(){return e(i,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ug,c),l=x,()=>{i.removeEventListener(Ug,c),l=null}},createHref(x){return t(i,x)},createURL:g,encodeLocation(x){let h=g(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:v,go(x){return a.go(x)}};return m}var Vg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vg||(Vg={}));function MT(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Fi(t):t,i=Wo(r.pathname||"/",n);if(i==null)return null;let o=Rx(e);UT(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=QT(o[s],JT(i));return a}function Rx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Zn([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(_e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rx(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:YT(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Ax(o.path))i(o,a,l)}),t}function Ax(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Ax(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function UT(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qT(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const BT=/^:\w+$/,VT=3,WT=2,HT=1,GT=10,KT=-2,Wg=e=>e==="*";function YT(e,t){let n=e.split("/"),r=n.length;return n.some(Wg)&&(r+=KT),t&&(r+=WT),n.filter(i=>!Wg(i)).reduce((i,o)=>i+(BT.test(o)?VT:o===""?HT:GT),r)}function qT(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function QT(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Sf({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let c=s.route;o.push({params:r,pathname:Zn([i,f.pathname]),pathnameBase:rC(Zn([i,f.pathnameBase])),route:c}),f.pathnameBase!=="/"&&(i=Zn([i,f.pathnameBase]))}return o}function Sf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=XT(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:d,isOptional:v}=f;if(d==="*"){let m=s[c]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}const g=s[c];return v&&!g?u[d]=void 0:u[d]=ZT(g||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function XT(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),kp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function JT(e){try{return decodeURI(e)}catch(t){return kp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ZT(e,t){try{return decodeURIComponent(e)}catch(n){return kp(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Wo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function eC(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Fi(e):e;return{pathname:n?n.startsWith("/")?n:tC(n,t):t,search:iC(r),hash:oC(i)}}function tC(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nC(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ep(e,t){let n=nC(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _p(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Fi(e):(i=Vo({},e),_e(!i.pathname||!i.pathname.includes("?"),Hu("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),Hu("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),Hu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else if(r){let c=t.length===0?[]:t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),c.pop();i.pathname=d.join("/")}s="/"+c.join("/")}else{let c=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}s=c>=0?t[c]:"/"}let l=eC(i,s),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Zn=e=>e.join("/").replace(/\/\/+/g,"/"),rC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,oC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function aC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fx=["post","put","patch","delete"];new Set(Fx);const sC=["get",...Fx];new Set(sC);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ho.apply(this,arguments)}const Wl=w.createContext(null),Nx=w.createContext(null),On=w.createContext(null),Hl=w.createContext(null),$n=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Ix=w.createContext(null);function lC(e,t){let{relative:n}=t===void 0?{}:t;Ni()||_e(!1);let{basename:r,navigator:i}=w.useContext(On),{hash:o,pathname:a,search:s}=Gl(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Zn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Ni(){return w.useContext(Hl)!=null}function Ii(){return Ni()||_e(!1),w.useContext(Hl).location}function Lx(e){w.useContext(On).static||w.useLayoutEffect(e)}function zx(){let{isDataRoute:e}=w.useContext($n);return e?kC():uC()}function uC(){Ni()||_e(!1);let e=w.useContext(Wl),{basename:t,future:n,navigator:r}=w.useContext(On),{matches:i}=w.useContext($n),{pathname:o}=Ii(),a=JSON.stringify(Ep(i,n.v7_relativeSplatPath)),s=w.useRef(!1);return Lx(()=>{s.current=!0}),w.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let c=_p(u,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Zn([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,a,o,e])}const cC=w.createContext(null);function fC(e){let t=w.useContext($n).outlet;return t&&w.createElement(cC.Provider,{value:e},t)}function Gl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(On),{matches:i}=w.useContext($n),{pathname:o}=Ii(),a=JSON.stringify(Ep(i,r.v7_relativeSplatPath));return w.useMemo(()=>_p(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function dC(e,t){return pC(e,t)}function pC(e,t,n,r){Ni()||_e(!1);let{navigator:i}=w.useContext(On),{matches:o}=w.useContext($n),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Ii(),f;if(t){var c;let x=typeof t=="string"?Fi(t):t;l==="/"||(c=x.pathname)!=null&&c.startsWith(l)||_e(!1),f=x}else f=u;let d=f.pathname||"/",v=l==="/"?d:d.slice(l.length)||"/",g=MT(e,{pathname:v}),m=vC(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:Zn([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:Zn([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r);return t&&m?w.createElement(Hl.Provider,{value:{location:Ho({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Mn.Pop}},m):m}function hC(){let e=SC(),t=aC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,o)}const mC=w.createElement(hC,null);class gC extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement($n.Provider,{value:this.props.routeContext},w.createElement(Ix.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yC(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Wl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement($n.Provider,{value:t},r)}function vC(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let f=a.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id]));f>=0||_e(!1),a=a.slice(0,Math.min(a.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.loader&&c.route.id&&n.loaderData[c.route.id]===void 0&&(!n.errors||n.errors[c.route.id]===void 0)){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}return a.reduceRight((f,c,d)=>{let v,g=!1,m=null,x=null;n&&(v=s&&c.route.id?s[c.route.id]:void 0,m=c.route.errorElement||mC,l&&(u<0&&d===0?(EC("route-fallback",!1),g=!0,x=null):u===d&&(g=!0,x=c.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,d+1)),p=()=>{let y;return v?y=m:g?y=x:c.route.Component?y=w.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=f,w.createElement(yC,{match:c,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?w.createElement(gC,{location:n.location,revalidation:n.revalidation,component:m,error:v,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Dx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Dx||{}),Bs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bs||{});function xC(e){let t=w.useContext(Wl);return t||_e(!1),t}function wC(e){let t=w.useContext(Nx);return t||_e(!1),t}function bC(e){let t=w.useContext($n);return t||_e(!1),t}function Mx(e){let t=bC(),n=t.matches[t.matches.length-1];return n.route.id||_e(!1),n.route.id}function SC(){var e;let t=w.useContext(Ix),n=wC(Bs.UseRouteError),r=Mx(Bs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function kC(){let{router:e}=xC(Dx.UseNavigateStable),t=Mx(Bs.UseNavigateStable),n=w.useRef(!1);return Lx(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ho({fromRouteId:t},o)))},[e,t])}const Hg={};function EC(e,t,n){!t&&!Hg[e]&&(Hg[e]=!0)}function Ux(e){let{to:t,replace:n,state:r,relative:i}=e;Ni()||_e(!1);let{future:o,static:a}=w.useContext(On),{matches:s}=w.useContext($n),{pathname:l}=Ii(),u=zx(),f=_p(t,Ep(s,o.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(f);return w.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function _C(e){return fC(e.context)}function jn(e){_e(!1)}function OC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mn.Pop,navigator:o,static:a=!1,future:s}=e;Ni()&&_e(!1);let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:o,static:a,future:Ho({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=Fi(r));let{pathname:f="/",search:c="",hash:d="",state:v=null,key:g="default"}=r,m=w.useMemo(()=>{let x=Wo(f,l);return x==null?null:{location:{pathname:x,search:c,hash:d,state:v,key:g},navigationType:i}},[l,f,c,d,v,g,i]);return m==null?null:w.createElement(On.Provider,{value:u},w.createElement(Hl.Provider,{children:n,value:m}))}function $C(e){let{children:t,location:n}=e;return dC(kf(t),n)}new Promise(()=>{});function kf(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,kf(r.props.children,o));return}r.type!==jn&&_e(!1),!r.props.index||!r.props.children||_e(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=kf(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vs(){return Vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vs.apply(this,arguments)}function Bx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function TC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function CC(e,t){return e.button===0&&(!t||t==="_self")&&!TC(e)}const PC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],jC=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],RC=w.createContext({isTransitioning:!1}),AC="startTransition",Gg=rc[AC];function FC(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=LT({window:i,v5Compat:!0}));let a=o.current,[s,l]=w.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=w.useCallback(c=>{u&&Gg?Gg(()=>l(c)):l(c)},[l,u]);return w.useLayoutEffect(()=>a.listen(f),[a,f]),w.createElement(OC,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const NC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",IC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,LC=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:f,unstable_viewTransition:c}=t,d=Bx(t,PC),{basename:v}=w.useContext(On),g,m=!1;if(typeof u=="string"&&IC.test(u)&&(g=u,NC))try{let y=new URL(window.location.href),S=u.startsWith("//")?new URL(y.protocol+u):new URL(u),E=Wo(S.pathname,v);S.origin===y.origin&&E!=null?u=E+S.search+S.hash:m=!0}catch{}let x=lC(u,{relative:i}),h=DC(u,{replace:a,state:s,target:l,preventScrollReset:f,relative:i,unstable_viewTransition:c});function p(y){r&&r(y),y.defaultPrevented||h(y)}return w.createElement("a",Vs({},d,{href:g||x,onClick:m||o?r:p,ref:n,target:l}))}),Go=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,unstable_viewTransition:u,children:f}=t,c=Bx(t,jC),d=Gl(l,{relative:c.relative}),v=Ii(),g=w.useContext(Nx),{navigator:m}=w.useContext(On),x=g!=null&&MC(d)&&u===!0,h=m.encodeLocation?m.encodeLocation(d).pathname:d.pathname,p=v.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(p=p.toLowerCase(),y=y?y.toLowerCase():null,h=h.toLowerCase());const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let E=p===h||!a&&p.startsWith(h)&&p.charAt(S)==="/",_=y!=null&&(y===h||!a&&y.startsWith(h)&&y.charAt(h.length)==="/"),$={isActive:E,isPending:_,isTransitioning:x},A=E?r:void 0,B;typeof o=="function"?B=o($):B=[o,E?"active":null,_?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let D=typeof s=="function"?s($):s;return w.createElement(LC,Vs({},c,{"aria-current":A,className:B,ref:n,style:D,to:l,unstable_viewTransition:u}),typeof f=="function"?f($):f)});var Ef;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ef||(Ef={}));var Kg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kg||(Kg={}));function zC(e){let t=w.useContext(Wl);return t||_e(!1),t}function DC(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=zx(),u=Ii(),f=Gl(e,{relative:a});return w.useCallback(c=>{if(CC(c,n)){c.preventDefault();let d=r!==void 0?r:Us(u)===Us(f);l(e,{replace:d,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:s})}},[u,l,f,r,i,n,e,o,a,s])}function MC(e,t){t===void 0&&(t={});let n=w.useContext(RC);n==null&&_e(!1);let{basename:r}=zC(Ef.useViewTransitionState),i=Gl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Wo(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Wo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Sf(i.pathname,a)!=null||Sf(i.pathname,o)!=null}const Yg="/water-tracker/assets/Logo-890d13ba.png",qg=k.img`
  width: 102px;
  height: 48px;
`,Op=e=>e.auth.user,Kl=e=>e.auth.isLoggedIn,UC=e=>e.auth.isRefreshing,BC=()=>{const e=ur(Kl);return b.jsx("div",{children:e?b.jsx(Go,{to:"/home",children:b.jsx(qg,{src:Yg,alt:"logo"})}):b.jsx(Go,{to:"/",children:b.jsx(qg,{src:Yg,alt:"logo"})})})},VC=k.div`
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
`,WC=()=>{const e=ur(Kl);return b.jsx("header",{children:b.jsx(G$,{children:b.jsxs(VC,{children:[b.jsx(BC,{}),e?b.jsx(dF,{}):b.jsx(oF,{})]})})})},Vx="/water-tracker/assets/bottleMob-814a9d12.png",Wx="/water-tracker/assets/bottleMob@2x-17522dc3.png",HC="/water-tracker/assets/bottleTabl-c56ef88b.png",GC="/water-tracker/assets/bottleTabl@2x-5f20a434.png",Hx="/water-tracker/assets/bottleDesc-5e7cc8f5.png",Gx="/water-tracker/assets/bottleDesc@2x-cdf5cc76.png",FF=k.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
`,NF=k.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${Vx}) 1x,
    url(${Wx}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${HC}) 1x,
      url(${GC}) 2x
    );
    height: 386px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Hx}) 1x,
      url(${Gx}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,IF=k.div`
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
`,KC=k.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }

  /* @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 592px;
  } */
`,YC=k.div`
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
`,qC=k.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Qg=k.h3`
  margin-bottom: 16px;
  color: ${e=>e.theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`,ja=k.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
`,QC=k.div`
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
`,XC=k.form`
  gap: 16px;

  span {
    margin-right: 24px;
    font-size: 16px;
  }
`,Xg=k.input`
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
      left: 4px;
      transform: translate(0, -50%);
      opacity: 0;
    }
  }

  &:checked + span:after {
    opacity: 1;
  }
`,Gu=k.input`
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
`,JC=k.div`
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
`,ZC=k.button`
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
`,eP=({onClose:e})=>{const[t,n]=w.useState("female"),[r,i]=w.useState(""),[o,a]=w.useState(""),[s,l]=w.useState("2.0"),[u,f]=w.useState(""),{user:c}=ur(Op),d=Il(),v=w.useCallback(()=>{if(!r||!o)return;const m=t==="female"?.03:.04,x=t==="female"?.4:.6,h=(r*m+o/60*x).toFixed(2);l(h)},[t,r,o]);w.useEffect(()=>{v()},[v]),w.useEffect(()=>{c&&n(c.gender||"female")},[c]);const g=async()=>{const m=parseFloat(s);if(isNaN(m)){console.error("Daily Intake is not a valid number.");return}d(fx(m)).unwrap()};return b.jsx(Vl,{onClose:e,title:"My daily norma",children:b.jsxs(KC,{children:[b.jsxs("div",{children:[b.jsxs(YC,{children:[b.jsxs(ja,{children:["For girl: ",b.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),b.jsxs(ja,{children:["For man: ",b.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),b.jsx(QC,{children:b.jsxs("p",{children:[b.jsx("span",{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})})]}),b.jsx("div",{children:b.jsxs(qC,{children:[b.jsxs(XC,{children:[b.jsx(Qg,{children:"Calculate your rate:"}),b.jsxs("label",{children:[b.jsx(Xg,{type:"radio",name:"gender",value:"female",checked:t==="female",onChange:()=>n("female")}),b.jsx("span",{children:"For girl"})]}),b.jsxs("label",{children:[b.jsx(Xg,{type:"radio",name:"gender",value:"male",checked:t==="male",onChange:()=>n("male")}),b.jsx("span",{children:"For boy"})]})]}),b.jsxs("div",{children:[b.jsx(ja,{children:"Your weight in kilograms:"}),b.jsx(Gu,{type:"text",placeholder:"0",value:r,onChange:m=>i(m.target.value)})]}),b.jsxs("div",{children:[b.jsx(ja,{children:"Time of active participation in sports or other activities with a high physical load:"}),b.jsx(Gu,{type:"text",placeholder:"0",value:o,onChange:m=>a(m.target.value)})]}),b.jsxs(JC,{children:["The required amount of water in liters per day:"," ",b.jsxs("strong",{children:[s,"L"]})]}),b.jsxs("div",{children:[b.jsx(Qg,{children:"Write down how much water you will drink:"}),b.jsx(Gu,{type:"text",placeholder:"0",value:u,onChange:m=>f(m.target.value)})]}),b.jsx(ZC,{onClick:g,children:"Save"})]})})]})})};eP.propTypes={onClose:no.func.isRequired};const LF=k.div`
  position: absolute;
  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
  transform: translate(-50% -50%);
  width: 280px;

  background-color: ${({theme:e})=>e.color.white};
  border-radius: 10px;
  padding: 24px 16px;
`,zF=k.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`,DF=k.li`
  display: flex;
  gap: 6px;
`,MF=k.span`
  color: ${({theme:e})=>e.color.accent};
  font-size: 18px;
  font-weight: 500;
`,UF=k.p`
  color: ${({theme:e})=>e.color.accent};
`,BF=k.div`
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
`,VF=k.button`
  width: 14px;
  height: 14px;
  background: transparent;
  color: ${e=>e.active?e.theme.color.accent:e.theme.color.secondaryLightBlue};

  &:hover {
    color: ${e=>e.theme.color.accent};
  }
`,WF=k.div`
  display: flex;
  align-items: baseline;
  position: relative;
  color: ${e=>e.theme.color.accent};
  column-gap: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`,HF=k.p`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  font-size: 10px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 12px;
  }
`,GF=k.div`
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
`,KF=k.div`
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
`,YF=k.button`
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
`,qF=k.div`
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
`,QF=k.div`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  gap: 12px;
  border-radius: 10px;
  background-color: ${e=>e.theme.color.secondaryWhite};
  width: 254px;
  margin-bottom: 24px;
`,XF=k.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${e=>e.theme.color.black};
  margin-bottom: 12px;
`,JF=k.div`
  margin-bottom: 24px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`,ZF=k.input`
  border-radius: 40px;
  border: none;
  background: ${e=>e.theme.color.secondaryPowderBlue};
  color: ${e=>e.theme.color.accent};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  width: 50px;
  height: 36px;
  margin-left: 10px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,eN=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: ${e=>e.theme.color.secondaryPowderBlue};
  color: ${e=>e.theme.color.accent};
  font-size: 18px;
  font-weight: 700;

  span {
    margin-right: 15px;
  }
`,tN=k.button`
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
`,nN=k.svg`
  width: 24px;
  height: 24px;
  stroke: ${e=>e.theme.color.accent};
`,rN=k.div`
  margin-bottom: 24px;
`,iN=k.input`
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
`,oN=k.input`
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

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

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
`,aN=k.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: ${e=>e.theme.color.accent};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`,sN=k.button`
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
`,lN=k.div`
  margin-bottom: 24px;
`,uN=k.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid #d7e3ff;
`,cN=k.div`
  display: flex;
  align-items: center;
`,fN=k.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,dN=k.ul`
  height: 212px;
  overflow: auto;
`,pN=k.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #407bff;
  margin-right: 16px;
`,hN=k.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: #2f2f2f;
`,mN=k.svg`
  width: 26px;
  height: 26px;
  margin-right: 12px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,gN=k.div`
  display: flex;
  gap: 18px;
`,yN=k.button`
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
`,vN=k.button`
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
`,xN=k.button`
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
`,wN=k.div`
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
`,bN=k.input`
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
`,SN=k.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.accent};
`,kN=k.div`
  position: relative;
  height: 102px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 356px;
    height: 90px;
  }
`,EN=k.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,_N=k.span`
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
`,ON=k.span`
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
`,$N=k.span`
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
`,TN=k.button`
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
`,CN=k.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: ${e=>e.theme.color.white};
`;var tP=function(t){return nP(t)&&!rP(t)};function nP(e){return!!e&&typeof e=="object"}function rP(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||aP(e)}var iP=typeof Symbol=="function"&&Symbol.for,oP=iP?Symbol.for("react.element"):60103;function aP(e){return e.$$typeof===oP}function sP(e){return Array.isArray(e)?[]:{}}function Ws(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ko(sP(e),e,t):e}function lP(e,t,n){return e.concat(t).map(function(r){return Ws(r,n)})}function uP(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=Ws(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=Ws(t[i],n):r[i]=Ko(e[i],t[i],n)}),r}function Ko(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||lP,n.isMergeableObject=n.isMergeableObject||tP;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):uP(e,t,n):Ws(t,n)}Ko.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return Ko(r,i,n)},{})};var _f=Ko,cP=typeof global=="object"&&global&&global.Object===Object&&global;const Kx=cP;var fP=typeof self=="object"&&self&&self.Object===Object&&self,dP=Kx||fP||Function("return this")();const sn=dP;var pP=sn.Symbol;const or=pP;var Yx=Object.prototype,hP=Yx.hasOwnProperty,mP=Yx.toString,qi=or?or.toStringTag:void 0;function gP(e){var t=hP.call(e,qi),n=e[qi];try{e[qi]=void 0;var r=!0}catch{}var i=mP.call(e);return r&&(t?e[qi]=n:delete e[qi]),i}var yP=Object.prototype,vP=yP.toString;function xP(e){return vP.call(e)}var wP="[object Null]",bP="[object Undefined]",Jg=or?or.toStringTag:void 0;function Ar(e){return e==null?e===void 0?bP:wP:Jg&&Jg in Object(e)?gP(e):xP(e)}function qx(e,t){return function(n){return e(t(n))}}var SP=qx(Object.getPrototypeOf,Object);const $p=SP;function Fr(e){return e!=null&&typeof e=="object"}var kP="[object Object]",EP=Function.prototype,_P=Object.prototype,Qx=EP.toString,OP=_P.hasOwnProperty,$P=Qx.call(Object);function Zg(e){if(!Fr(e)||Ar(e)!=kP)return!1;var t=$p(e);if(t===null)return!0;var n=OP.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Qx.call(n)==$P}var ey=Array.isArray,ty=Object.keys,TP=Object.prototype.hasOwnProperty,CP=typeof Element<"u";function Of(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=ey(e),r=ey(t),i,o,a;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!Of(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,f=t instanceof RegExp;if(u!=f)return!1;if(u&&f)return e.toString()==t.toString();var c=ty(e);if(o=c.length,o!==ty(t).length)return!1;for(i=o;i--!==0;)if(!TP.call(t,c[i]))return!1;if(CP&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(a=c[i],!(a==="_owner"&&e.$$typeof)&&!Of(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var PP=function(t,n){try{return Of(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Fn=$i(PP);var jP=!0;function Xx(e,t){if(!jP){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function RP(){this.__data__=[],this.size=0}function Jx(e,t){return e===t||e!==e&&t!==t}function Yl(e,t){for(var n=e.length;n--;)if(Jx(e[n][0],t))return n;return-1}var AP=Array.prototype,FP=AP.splice;function NP(e){var t=this.__data__,n=Yl(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():FP.call(t,n,1),--this.size,!0}function IP(e){var t=this.__data__,n=Yl(t,e);return n<0?void 0:t[n][1]}function LP(e){return Yl(this.__data__,e)>-1}function zP(e,t){var n=this.__data__,r=Yl(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Tn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Tn.prototype.clear=RP;Tn.prototype.delete=NP;Tn.prototype.get=IP;Tn.prototype.has=LP;Tn.prototype.set=zP;function DP(){this.__data__=new Tn,this.size=0}function MP(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function UP(e){return this.__data__.get(e)}function BP(e){return this.__data__.has(e)}function la(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var VP="[object AsyncFunction]",WP="[object Function]",HP="[object GeneratorFunction]",GP="[object Proxy]";function Zx(e){if(!la(e))return!1;var t=Ar(e);return t==WP||t==HP||t==VP||t==GP}var KP=sn["__core-js_shared__"];const Ku=KP;var ny=function(){var e=/[^.]+$/.exec(Ku&&Ku.keys&&Ku.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function YP(e){return!!ny&&ny in e}var qP=Function.prototype,QP=qP.toString;function Nr(e){if(e!=null){try{return QP.call(e)}catch{}try{return e+""}catch{}}return""}var XP=/[\\^$.*+?()[\]{}|]/g,JP=/^\[object .+?Constructor\]$/,ZP=Function.prototype,ej=Object.prototype,tj=ZP.toString,nj=ej.hasOwnProperty,rj=RegExp("^"+tj.call(nj).replace(XP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ij(e){if(!la(e)||YP(e))return!1;var t=Zx(e)?rj:JP;return t.test(Nr(e))}function oj(e,t){return e==null?void 0:e[t]}function Ir(e,t){var n=oj(e,t);return ij(n)?n:void 0}var aj=Ir(sn,"Map");const Yo=aj;var sj=Ir(Object,"create");const qo=sj;function lj(){this.__data__=qo?qo(null):{},this.size=0}function uj(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var cj="__lodash_hash_undefined__",fj=Object.prototype,dj=fj.hasOwnProperty;function pj(e){var t=this.__data__;if(qo){var n=t[e];return n===cj?void 0:n}return dj.call(t,e)?t[e]:void 0}var hj=Object.prototype,mj=hj.hasOwnProperty;function gj(e){var t=this.__data__;return qo?t[e]!==void 0:mj.call(t,e)}var yj="__lodash_hash_undefined__";function vj(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=qo&&t===void 0?yj:t,this}function Cr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Cr.prototype.clear=lj;Cr.prototype.delete=uj;Cr.prototype.get=pj;Cr.prototype.has=gj;Cr.prototype.set=vj;function xj(){this.size=0,this.__data__={hash:new Cr,map:new(Yo||Tn),string:new Cr}}function wj(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ql(e,t){var n=e.__data__;return wj(t)?n[typeof t=="string"?"string":"hash"]:n.map}function bj(e){var t=ql(this,e).delete(e);return this.size-=t?1:0,t}function Sj(e){return ql(this,e).get(e)}function kj(e){return ql(this,e).has(e)}function Ej(e,t){var n=ql(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function cr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}cr.prototype.clear=xj;cr.prototype.delete=bj;cr.prototype.get=Sj;cr.prototype.has=kj;cr.prototype.set=Ej;var _j=200;function Oj(e,t){var n=this.__data__;if(n instanceof Tn){var r=n.__data__;if(!Yo||r.length<_j-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new cr(r)}return n.set(e,t),this.size=n.size,this}function Li(e){var t=this.__data__=new Tn(e);this.size=t.size}Li.prototype.clear=DP;Li.prototype.delete=MP;Li.prototype.get=UP;Li.prototype.has=BP;Li.prototype.set=Oj;function $j(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Tj=function(){try{var e=Ir(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ry=Tj;function ew(e,t,n){t=="__proto__"&&ry?ry(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Cj=Object.prototype,Pj=Cj.hasOwnProperty;function tw(e,t,n){var r=e[t];(!(Pj.call(e,t)&&Jx(r,n))||n===void 0&&!(t in e))&&ew(e,t,n)}function Ql(e,t,n,r){var i=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var s=t[o],l=r?r(n[s],e[s],s,n,e):void 0;l===void 0&&(l=e[s]),i?ew(n,s,l):tw(n,s,l)}return n}function jj(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Rj="[object Arguments]";function iy(e){return Fr(e)&&Ar(e)==Rj}var nw=Object.prototype,Aj=nw.hasOwnProperty,Fj=nw.propertyIsEnumerable,Nj=iy(function(){return arguments}())?iy:function(e){return Fr(e)&&Aj.call(e,"callee")&&!Fj.call(e,"callee")};const Ij=Nj;var Lj=Array.isArray;const ua=Lj;function zj(){return!1}var rw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,oy=rw&&typeof module=="object"&&module&&!module.nodeType&&module,Dj=oy&&oy.exports===rw,ay=Dj?sn.Buffer:void 0,Mj=ay?ay.isBuffer:void 0,Uj=Mj||zj;const iw=Uj;var Bj=9007199254740991,Vj=/^(?:0|[1-9]\d*)$/;function Wj(e,t){var n=typeof e;return t=t??Bj,!!t&&(n=="number"||n!="symbol"&&Vj.test(e))&&e>-1&&e%1==0&&e<t}var Hj=9007199254740991;function ow(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Hj}var Gj="[object Arguments]",Kj="[object Array]",Yj="[object Boolean]",qj="[object Date]",Qj="[object Error]",Xj="[object Function]",Jj="[object Map]",Zj="[object Number]",eR="[object Object]",tR="[object RegExp]",nR="[object Set]",rR="[object String]",iR="[object WeakMap]",oR="[object ArrayBuffer]",aR="[object DataView]",sR="[object Float32Array]",lR="[object Float64Array]",uR="[object Int8Array]",cR="[object Int16Array]",fR="[object Int32Array]",dR="[object Uint8Array]",pR="[object Uint8ClampedArray]",hR="[object Uint16Array]",mR="[object Uint32Array]",ye={};ye[sR]=ye[lR]=ye[uR]=ye[cR]=ye[fR]=ye[dR]=ye[pR]=ye[hR]=ye[mR]=!0;ye[Gj]=ye[Kj]=ye[oR]=ye[Yj]=ye[aR]=ye[qj]=ye[Qj]=ye[Xj]=ye[Jj]=ye[Zj]=ye[eR]=ye[tR]=ye[nR]=ye[rR]=ye[iR]=!1;function gR(e){return Fr(e)&&ow(e.length)&&!!ye[Ar(e)]}function Tp(e){return function(t){return e(t)}}var aw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,mo=aw&&typeof module=="object"&&module&&!module.nodeType&&module,yR=mo&&mo.exports===aw,Yu=yR&&Kx.process,vR=function(){try{var e=mo&&mo.require&&mo.require("util").types;return e||Yu&&Yu.binding&&Yu.binding("util")}catch{}}();const Oi=vR;var sy=Oi&&Oi.isTypedArray,xR=sy?Tp(sy):gR;const wR=xR;var bR=Object.prototype,SR=bR.hasOwnProperty;function sw(e,t){var n=ua(e),r=!n&&Ij(e),i=!n&&!r&&iw(e),o=!n&&!r&&!i&&wR(e),a=n||r||i||o,s=a?jj(e.length,String):[],l=s.length;for(var u in e)(t||SR.call(e,u))&&!(a&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Wj(u,l)))&&s.push(u);return s}var kR=Object.prototype;function Cp(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||kR;return e===n}var ER=qx(Object.keys,Object);const _R=ER;var OR=Object.prototype,$R=OR.hasOwnProperty;function TR(e){if(!Cp(e))return _R(e);var t=[];for(var n in Object(e))$R.call(e,n)&&n!="constructor"&&t.push(n);return t}function lw(e){return e!=null&&ow(e.length)&&!Zx(e)}function Pp(e){return lw(e)?sw(e):TR(e)}function CR(e,t){return e&&Ql(t,Pp(t),e)}function PR(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var jR=Object.prototype,RR=jR.hasOwnProperty;function AR(e){if(!la(e))return PR(e);var t=Cp(e),n=[];for(var r in e)r=="constructor"&&(t||!RR.call(e,r))||n.push(r);return n}function jp(e){return lw(e)?sw(e,!0):AR(e)}function FR(e,t){return e&&Ql(t,jp(t),e)}var uw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ly=uw&&typeof module=="object"&&module&&!module.nodeType&&module,NR=ly&&ly.exports===uw,uy=NR?sn.Buffer:void 0,cy=uy?uy.allocUnsafe:void 0;function IR(e,t){if(t)return e.slice();var n=e.length,r=cy?cy(n):new e.constructor(n);return e.copy(r),r}function cw(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function LR(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function fw(){return[]}var zR=Object.prototype,DR=zR.propertyIsEnumerable,fy=Object.getOwnPropertySymbols,MR=fy?function(e){return e==null?[]:(e=Object(e),LR(fy(e),function(t){return DR.call(e,t)}))}:fw;const Rp=MR;function UR(e,t){return Ql(e,Rp(e),t)}function dw(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var BR=Object.getOwnPropertySymbols,VR=BR?function(e){for(var t=[];e;)dw(t,Rp(e)),e=$p(e);return t}:fw;const pw=VR;function WR(e,t){return Ql(e,pw(e),t)}function hw(e,t,n){var r=t(e);return ua(e)?r:dw(r,n(e))}function HR(e){return hw(e,Pp,Rp)}function GR(e){return hw(e,jp,pw)}var KR=Ir(sn,"DataView");const $f=KR;var YR=Ir(sn,"Promise");const Tf=YR;var qR=Ir(sn,"Set");const Cf=qR;var QR=Ir(sn,"WeakMap");const Pf=QR;var dy="[object Map]",XR="[object Object]",py="[object Promise]",hy="[object Set]",my="[object WeakMap]",gy="[object DataView]",JR=Nr($f),ZR=Nr(Yo),e4=Nr(Tf),t4=Nr(Cf),n4=Nr(Pf),mr=Ar;($f&&mr(new $f(new ArrayBuffer(1)))!=gy||Yo&&mr(new Yo)!=dy||Tf&&mr(Tf.resolve())!=py||Cf&&mr(new Cf)!=hy||Pf&&mr(new Pf)!=my)&&(mr=function(e){var t=Ar(e),n=t==XR?e.constructor:void 0,r=n?Nr(n):"";if(r)switch(r){case JR:return gy;case ZR:return dy;case e4:return py;case t4:return hy;case n4:return my}return t});const Ap=mr;var r4=Object.prototype,i4=r4.hasOwnProperty;function o4(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&i4.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var a4=sn.Uint8Array;const yy=a4;function Fp(e){var t=new e.constructor(e.byteLength);return new yy(t).set(new yy(e)),t}function s4(e,t){var n=t?Fp(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var l4=/\w*$/;function u4(e){var t=new e.constructor(e.source,l4.exec(e));return t.lastIndex=e.lastIndex,t}var vy=or?or.prototype:void 0,xy=vy?vy.valueOf:void 0;function c4(e){return xy?Object(xy.call(e)):{}}function f4(e,t){var n=t?Fp(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var d4="[object Boolean]",p4="[object Date]",h4="[object Map]",m4="[object Number]",g4="[object RegExp]",y4="[object Set]",v4="[object String]",x4="[object Symbol]",w4="[object ArrayBuffer]",b4="[object DataView]",S4="[object Float32Array]",k4="[object Float64Array]",E4="[object Int8Array]",_4="[object Int16Array]",O4="[object Int32Array]",$4="[object Uint8Array]",T4="[object Uint8ClampedArray]",C4="[object Uint16Array]",P4="[object Uint32Array]";function j4(e,t,n){var r=e.constructor;switch(t){case w4:return Fp(e);case d4:case p4:return new r(+e);case b4:return s4(e,n);case S4:case k4:case E4:case _4:case O4:case $4:case T4:case C4:case P4:return f4(e,n);case h4:return new r;case m4:case v4:return new r(e);case g4:return u4(e);case y4:return new r;case x4:return c4(e)}}var wy=Object.create,R4=function(){function e(){}return function(t){if(!la(t))return{};if(wy)return wy(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const A4=R4;function F4(e){return typeof e.constructor=="function"&&!Cp(e)?A4($p(e)):{}}var N4="[object Map]";function I4(e){return Fr(e)&&Ap(e)==N4}var by=Oi&&Oi.isMap,L4=by?Tp(by):I4;const z4=L4;var D4="[object Set]";function M4(e){return Fr(e)&&Ap(e)==D4}var Sy=Oi&&Oi.isSet,U4=Sy?Tp(Sy):M4;const B4=U4;var V4=1,W4=2,H4=4,mw="[object Arguments]",G4="[object Array]",K4="[object Boolean]",Y4="[object Date]",q4="[object Error]",gw="[object Function]",Q4="[object GeneratorFunction]",X4="[object Map]",J4="[object Number]",yw="[object Object]",Z4="[object RegExp]",eA="[object Set]",tA="[object String]",nA="[object Symbol]",rA="[object WeakMap]",iA="[object ArrayBuffer]",oA="[object DataView]",aA="[object Float32Array]",sA="[object Float64Array]",lA="[object Int8Array]",uA="[object Int16Array]",cA="[object Int32Array]",fA="[object Uint8Array]",dA="[object Uint8ClampedArray]",pA="[object Uint16Array]",hA="[object Uint32Array]",pe={};pe[mw]=pe[G4]=pe[iA]=pe[oA]=pe[K4]=pe[Y4]=pe[aA]=pe[sA]=pe[lA]=pe[uA]=pe[cA]=pe[X4]=pe[J4]=pe[yw]=pe[Z4]=pe[eA]=pe[tA]=pe[nA]=pe[fA]=pe[dA]=pe[pA]=pe[hA]=!0;pe[q4]=pe[gw]=pe[rA]=!1;function go(e,t,n,r,i,o){var a,s=t&V4,l=t&W4,u=t&H4;if(n&&(a=i?n(e,r,i,o):n(e)),a!==void 0)return a;if(!la(e))return e;var f=ua(e);if(f){if(a=o4(e),!s)return cw(e,a)}else{var c=Ap(e),d=c==gw||c==Q4;if(iw(e))return IR(e,s);if(c==yw||c==mw||d&&!i){if(a=l||d?{}:F4(e),!s)return l?WR(e,FR(a,e)):UR(e,CR(a,e))}else{if(!pe[c])return i?e:{};a=j4(e,c,s)}}o||(o=new Li);var v=o.get(e);if(v)return v;o.set(e,a),B4(e)?e.forEach(function(x){a.add(go(x,t,n,x,e,o))}):z4(e)&&e.forEach(function(x,h){a.set(h,go(x,t,n,h,e,o))});var g=u?l?GR:HR:l?jp:Pp,m=f?void 0:g(e);return $j(m||e,function(x,h){m&&(h=x,x=e[h]),tw(a,h,go(x,t,n,h,e,o))}),a}var mA=4;function ky(e){return go(e,mA)}function vw(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var gA="[object Symbol]";function Np(e){return typeof e=="symbol"||Fr(e)&&Ar(e)==gA}var yA="Expected a function";function Ip(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(yA);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ip.Cache||cr),n}Ip.Cache=cr;var vA=500;function xA(e){var t=Ip(e,function(r){return n.size===vA&&n.clear(),r}),n=t.cache;return t}var wA=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bA=/\\(\\)?/g,SA=xA(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(wA,function(n,r,i,o){t.push(i?o.replace(bA,"$1"):r||n)}),t});const kA=SA;var EA=1/0;function _A(e){if(typeof e=="string"||Np(e))return e;var t=e+"";return t=="0"&&1/e==-EA?"-0":t}var OA=1/0,Ey=or?or.prototype:void 0,_y=Ey?Ey.toString:void 0;function xw(e){if(typeof e=="string")return e;if(ua(e))return vw(e,xw)+"";if(Np(e))return _y?_y.call(e):"";var t=e+"";return t=="0"&&1/e==-OA?"-0":t}function $A(e){return e==null?"":xw(e)}function ww(e){return ua(e)?vw(e,_A):Np(e)?[e]:cw(kA($A(e)))}var TA=1,CA=4;function PA(e){return go(e,TA|CA)}function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function bw(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Un(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Oy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Xl=w.createContext(void 0);Xl.displayName="FormikContext";var jA=Xl.Provider,RA=Xl.Consumer;function Sw(){var e=w.useContext(Xl);return e||Xx(!1),e}var $y=function(t){return Array.isArray(t)&&t.length===0},Ge=function(t){return typeof t=="function"},ca=function(t){return t!==null&&typeof t=="object"},AA=function(t){return String(Math.floor(Number(t)))===t},qu=function(t){return Object.prototype.toString.call(t)==="[object String]"},kw=function(t){return w.Children.count(t)===0},Qu=function(t){return ca(t)&&Ge(t.then)};function be(e,t,n,r){r===void 0&&(r=0);for(var i=ww(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function nn(e,t,n){for(var r=ky(e),i=r,o=0,a=ww(t);o<a.length-1;o++){var s=a[o],l=be(e,a.slice(0,o+1));if(l&&(ca(l)||Array.isArray(l)))i=i[s]=ky(l);else{var u=a[o+1];i=i[s]=AA(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[a[o]]===n?e:(n===void 0?delete i[a[o]]:i[a[o]]=n,o===0&&n===void 0&&delete r[a[o]],r)}function Ew(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,o=Object.keys(e);i<o.length;i++){var a=o[i],s=e[a];ca(s)?n.get(s)||(n.set(s,!0),r[a]=Array.isArray(s)?[]:{},Ew(s,t,n,r[a])):r[a]=t}return r}function FA(e,t){switch(t.type){case"SET_VALUES":return le({},e,{values:t.payload});case"SET_TOUCHED":return le({},e,{touched:t.payload});case"SET_ERRORS":return Fn(e.errors,t.payload)?e:le({},e,{errors:t.payload});case"SET_STATUS":return le({},e,{status:t.payload});case"SET_ISSUBMITTING":return le({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return le({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return le({},e,{values:nn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return le({},e,{touched:nn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return le({},e,{errors:nn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return le({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return le({},e,{touched:Ew(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return le({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return le({},e,{isSubmitting:!1});default:return e}}var fr={},Ra={};function NA(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,o=e.validateOnMount,a=o===void 0?!1:o,s=e.isInitialValid,l=e.enableReinitialize,u=l===void 0?!1:l,f=e.onSubmit,c=Un(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=le({validateOnChange:n,validateOnBlur:i,validateOnMount:a,onSubmit:f},c),v=w.useRef(d.initialValues),g=w.useRef(d.initialErrors||fr),m=w.useRef(d.initialTouched||Ra),x=w.useRef(d.initialStatus),h=w.useRef(!1),p=w.useRef({});w.useEffect(function(){return h.current=!0,function(){h.current=!1}},[]);var y=w.useState(0),S=y[1],E=w.useRef({values:d.initialValues,errors:d.initialErrors||fr,touched:d.initialTouched||Ra,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),_=E.current,$=w.useCallback(function(O){var I=E.current;E.current=FA(I,O),I!==E.current&&S(function(P){return P+1})},[]),A=w.useCallback(function(O,I){return new Promise(function(P,L){var Y=d.validate(O,I);Y==null?P(fr):Qu(Y)?Y.then(function(ne){P(ne||fr)},function(ne){L(ne)}):P(Y)})},[d.validate]),B=w.useCallback(function(O,I){var P=d.validationSchema,L=Ge(P)?P(I):P,Y=I&&L.validateAt?L.validateAt(I,O):zA(O,L);return new Promise(function(ne,de){Y.then(function(){ne(fr)},function(un){un.name==="ValidationError"?ne(LA(un)):de(un)})})},[d.validationSchema]),D=w.useCallback(function(O,I){return new Promise(function(P){return P(p.current[O].validate(I))})},[]),G=w.useCallback(function(O){var I=Object.keys(p.current).filter(function(L){return Ge(p.current[L].validate)}),P=I.length>0?I.map(function(L){return D(L,be(O,L))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(P).then(function(L){return L.reduce(function(Y,ne,de){return ne==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ne&&(Y=nn(Y,I[de],ne)),Y},{})})},[D]),xe=w.useCallback(function(O){return Promise.all([G(O),d.validationSchema?B(O):{},d.validate?A(O):{}]).then(function(I){var P=I[0],L=I[1],Y=I[2],ne=_f.all([P,L,Y],{arrayMerge:DA});return ne})},[d.validate,d.validationSchema,G,A,B]),Q=Et(function(O){return O===void 0&&(O=_.values),$({type:"SET_ISVALIDATING",payload:!0}),xe(O).then(function(I){return h.current&&($({type:"SET_ISVALIDATING",payload:!1}),$({type:"SET_ERRORS",payload:I})),I})});w.useEffect(function(){a&&h.current===!0&&Fn(v.current,d.initialValues)&&Q(v.current)},[a,Q]);var $e=w.useCallback(function(O){var I=O&&O.values?O.values:v.current,P=O&&O.errors?O.errors:g.current?g.current:d.initialErrors||{},L=O&&O.touched?O.touched:m.current?m.current:d.initialTouched||{},Y=O&&O.status?O.status:x.current?x.current:d.initialStatus;v.current=I,g.current=P,m.current=L,x.current=Y;var ne=function(){$({type:"RESET_FORM",payload:{isSubmitting:!!O&&!!O.isSubmitting,errors:P,touched:L,status:Y,values:I,isValidating:!!O&&!!O.isValidating,submitCount:O&&O.submitCount&&typeof O.submitCount=="number"?O.submitCount:0}})};if(d.onReset){var de=d.onReset(_.values,je);Qu(de)?de.then(ne):ne()}else ne()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);w.useEffect(function(){h.current===!0&&!Fn(v.current,d.initialValues)&&u&&(v.current=d.initialValues,$e(),a&&Q(v.current))},[u,d.initialValues,$e,a,Q]),w.useEffect(function(){u&&h.current===!0&&!Fn(g.current,d.initialErrors)&&(g.current=d.initialErrors||fr,$({type:"SET_ERRORS",payload:d.initialErrors||fr}))},[u,d.initialErrors]),w.useEffect(function(){u&&h.current===!0&&!Fn(m.current,d.initialTouched)&&(m.current=d.initialTouched||Ra,$({type:"SET_TOUCHED",payload:d.initialTouched||Ra}))},[u,d.initialTouched]),w.useEffect(function(){u&&h.current===!0&&!Fn(x.current,d.initialStatus)&&(x.current=d.initialStatus,$({type:"SET_STATUS",payload:d.initialStatus}))},[u,d.initialStatus,d.initialTouched]);var Te=Et(function(O){if(p.current[O]&&Ge(p.current[O].validate)){var I=be(_.values,O),P=p.current[O].validate(I);return Qu(P)?($({type:"SET_ISVALIDATING",payload:!0}),P.then(function(L){return L}).then(function(L){$({type:"SET_FIELD_ERROR",payload:{field:O,value:L}}),$({type:"SET_ISVALIDATING",payload:!1})})):($({type:"SET_FIELD_ERROR",payload:{field:O,value:P}}),Promise.resolve(P))}else if(d.validationSchema)return $({type:"SET_ISVALIDATING",payload:!0}),B(_.values,O).then(function(L){return L}).then(function(L){$({type:"SET_FIELD_ERROR",payload:{field:O,value:be(L,O)}}),$({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Ft=w.useCallback(function(O,I){var P=I.validate;p.current[O]={validate:P}},[]),Ve=w.useCallback(function(O){delete p.current[O]},[]),F=Et(function(O,I){$({type:"SET_TOUCHED",payload:O});var P=I===void 0?i:I;return P?Q(_.values):Promise.resolve()}),W=w.useCallback(function(O){$({type:"SET_ERRORS",payload:O})},[]),H=Et(function(O,I){var P=Ge(O)?O(_.values):O;$({type:"SET_VALUES",payload:P});var L=I===void 0?n:I;return L?Q(P):Promise.resolve()}),ie=w.useCallback(function(O,I){$({type:"SET_FIELD_ERROR",payload:{field:O,value:I}})},[]),R=Et(function(O,I,P){$({type:"SET_FIELD_VALUE",payload:{field:O,value:I}});var L=P===void 0?n:P;return L?Q(nn(_.values,O,I)):Promise.resolve()}),z=w.useCallback(function(O,I){var P=I,L=O,Y;if(!qu(O)){O.persist&&O.persist();var ne=O.target?O.target:O.currentTarget,de=ne.type,un=ne.name,tu=ne.id,nu=ne.value,Iw=ne.checked,AF=ne.outerHTML,Wp=ne.options,Lw=ne.multiple;P=I||un||tu,L=/number|range/.test(de)?(Y=parseFloat(nu),isNaN(Y)?"":Y):/checkbox/.test(de)?UA(be(_.values,P),Iw,nu):Wp&&Lw?MA(Wp):nu}P&&R(P,L)},[R,_.values]),M=Et(function(O){if(qu(O))return function(I){return z(I,O)};z(O)}),V=Et(function(O,I,P){I===void 0&&(I=!0),$({type:"SET_FIELD_TOUCHED",payload:{field:O,value:I}});var L=P===void 0?i:P;return L?Q(_.values):Promise.resolve()}),T=w.useCallback(function(O,I){O.persist&&O.persist();var P=O.target,L=P.name,Y=P.id,ne=P.outerHTML,de=I||L||Y;V(de,!0)},[V]),q=Et(function(O){if(qu(O))return function(I){return T(I,O)};T(O)}),N=w.useCallback(function(O){Ge(O)?$({type:"SET_FORMIK_STATE",payload:O}):$({type:"SET_FORMIK_STATE",payload:function(){return O}})},[]),me=w.useCallback(function(O){$({type:"SET_STATUS",payload:O})},[]),ee=w.useCallback(function(O){$({type:"SET_ISSUBMITTING",payload:O})},[]),te=Et(function(){return $({type:"SUBMIT_ATTEMPT"}),Q().then(function(O){var I=O instanceof Error,P=!I&&Object.keys(O).length===0;if(P){var L;try{if(L=Qe(),L===void 0)return}catch(Y){throw Y}return Promise.resolve(L).then(function(Y){return h.current&&$({type:"SUBMIT_SUCCESS"}),Y}).catch(function(Y){if(h.current)throw $({type:"SUBMIT_FAILURE"}),Y})}else if(h.current&&($({type:"SUBMIT_FAILURE"}),I))throw O})}),K=Et(function(O){O&&O.preventDefault&&Ge(O.preventDefault)&&O.preventDefault(),O&&O.stopPropagation&&Ge(O.stopPropagation)&&O.stopPropagation(),te().catch(function(I){console.warn("Warning: An unhandled error was caught from submitForm()",I)})}),je={resetForm:$e,validateForm:Q,validateField:Te,setErrors:W,setFieldError:ie,setFieldTouched:V,setFieldValue:R,setStatus:me,setSubmitting:ee,setTouched:F,setValues:H,setFormikState:N,submitForm:te},Qe=Et(function(){return f(_.values,je)}),J=Et(function(O){O&&O.preventDefault&&Ge(O.preventDefault)&&O.preventDefault(),O&&O.stopPropagation&&Ge(O.stopPropagation)&&O.stopPropagation(),$e()}),De=w.useCallback(function(O){return{value:be(_.values,O),error:be(_.errors,O),touched:!!be(_.touched,O),initialValue:be(v.current,O),initialTouched:!!be(m.current,O),initialError:be(g.current,O)}},[_.errors,_.touched,_.values]),oe=w.useCallback(function(O){return{setValue:function(P,L){return R(O,P,L)},setTouched:function(P,L){return V(O,P,L)},setError:function(P){return ie(O,P)}}},[R,V,ie]),Ne=w.useCallback(function(O){var I=ca(O),P=I?O.name:O,L=be(_.values,P),Y={name:P,value:L,onChange:M,onBlur:q};if(I){var ne=O.type,de=O.value,un=O.as,tu=O.multiple;ne==="checkbox"?de===void 0?Y.checked=!!L:(Y.checked=!!(Array.isArray(L)&&~L.indexOf(de)),Y.value=de):ne==="radio"?(Y.checked=L===de,Y.value=de):un==="select"&&tu&&(Y.value=Y.value||[],Y.multiple=!0)}return Y},[q,M,_.values]),ln=w.useMemo(function(){return!Fn(v.current,_.values)},[v.current,_.values]),Ie=w.useMemo(function(){return typeof s<"u"?ln?_.errors&&Object.keys(_.errors).length===0:s!==!1&&Ge(s)?s(d):s:_.errors&&Object.keys(_.errors).length===0},[s,ln,_.errors,d]),Dr=le({},_,{initialValues:v.current,initialErrors:g.current,initialTouched:m.current,initialStatus:x.current,handleBlur:q,handleChange:M,handleReset:J,handleSubmit:K,resetForm:$e,setErrors:W,setFormikState:N,setFieldTouched:V,setFieldValue:R,setFieldError:ie,setStatus:me,setSubmitting:ee,setTouched:F,setValues:H,submitForm:te,validateForm:Q,validateField:Te,isValid:Ie,dirty:ln,unregisterField:Ve,registerField:Ft,getFieldProps:Ne,getFieldMeta:De,getFieldHelpers:oe,validateOnBlur:i,validateOnChange:n,validateOnMount:a});return Dr}function IA(e){var t=NA(e),n=e.component,r=e.children,i=e.render,o=e.innerRef;return w.useImperativeHandle(o,function(){return t}),w.createElement(jA,{value:t},n?w.createElement(n,t):i?i(t):r?Ge(r)?r(t):kw(r)?null:w.Children.only(r):null)}function LA(e){var t={};if(e.inner){if(e.inner.length===0)return nn(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(r>=i.length)break;o=i[r++]}else{if(r=i.next(),r.done)break;o=r.value}var a=o;be(t,a.path)||(t=nn(t,a.path,a.message))}}return t}function zA(e,t,n,r){n===void 0&&(n=!1);var i=jf(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function jf(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||Zg(i)?jf(i):i!==""?i:void 0}):Zg(e[r])?t[r]=jf(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function DA(e,t,n){var r=e.slice();return t.forEach(function(o,a){if(typeof r[a]>"u"){var s=n.clone!==!1,l=s&&n.isMergeableObject(o);r[a]=l?_f(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?r[a]=_f(e[a],o,n):e.indexOf(o)===-1&&r.push(o)}),r}function MA(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function UA(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,o=-1;if(Array.isArray(e))r=e,o=e.indexOf(n),i=o>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,o).concat(r.slice(o+1)):r}var BA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?w.useLayoutEffect:w.useEffect;function Et(e){var t=w.useRef(e);return BA(function(){t.current=e}),w.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}function Lp(e){var t=e.validate,n=e.name,r=e.render,i=e.children,o=e.as,a=e.component,s=e.className,l=Un(e,["validate","name","render","children","as","component","className"]),u=Sw(),f=Un(u,["validate","validationSchema"]),c=f.registerField,d=f.unregisterField;w.useEffect(function(){return c(n,{validate:t}),function(){d(n)}},[c,d,n,t]);var v=f.getFieldProps(le({name:n},l)),g=f.getFieldMeta(n),m={field:v,form:f};if(r)return r(le({},m,{meta:g}));if(Ge(i))return i(le({},m,{meta:g}));if(a){if(typeof a=="string"){var x=l.innerRef,h=Un(l,["innerRef"]);return w.createElement(a,le({ref:x},v,h,{className:s}),i)}return w.createElement(a,le({field:v,form:f},l,{className:s}),i)}var p=o||"input";if(typeof p=="string"){var y=l.innerRef,S=Un(l,["innerRef"]);return w.createElement(p,le({ref:y},v,S,{className:s}),i)}return w.createElement(p,le({},v,l,{className:s}),i)}var _w=w.forwardRef(function(e,t){var n=e.action,r=Un(e,["action"]),i=n??"#",o=Sw(),a=o.handleReset,s=o.handleSubmit;return w.createElement("form",le({onSubmit:s,ref:t,onReset:a,action:i},r))});_w.displayName="Form";function VA(e){var t=function(i){return w.createElement(RA,null,function(o){return o||Xx(!1),w.createElement(e,le({},i,{formik:o}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",Yf(t,e)}var WA=function(t,n,r){var i=Pr(t),o=i[n];return i.splice(n,1),i.splice(r,0,o),i},HA=function(t,n,r){var i=Pr(t),o=i[n];return i[n]=i[r],i[r]=o,i},Xu=function(t,n,r){var i=Pr(t);return i.splice(n,0,r),i},GA=function(t,n,r){var i=Pr(t);return i[n]=r,i},Pr=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(le({},t,{length:n+1}))}else return[]},Ty=function(t,n){var r=typeof t=="function"?t:n;return function(i){if(Array.isArray(i)||ca(i)){var o=Pr(i);return r(o)}return i}},KA=function(e){bw(t,e);function t(r){var i;return i=e.call(this,r)||this,i.updateArrayField=function(o,a,s){var l=i.props,u=l.name,f=l.formik.setFormikState;f(function(c){var d=Ty(s,o),v=Ty(a,o),g=nn(c.values,u,o(be(c.values,u))),m=s?d(be(c.errors,u)):void 0,x=a?v(be(c.touched,u)):void 0;return $y(m)&&(m=void 0),$y(x)&&(x=void 0),le({},c,{values:g,errors:s?nn(c.errors,u,m):c.errors,touched:a?nn(c.touched,u,x):c.touched})})},i.push=function(o){return i.updateArrayField(function(a){return[].concat(Pr(a),[PA(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,a){return i.updateArrayField(function(s){return HA(s,o,a)},!0,!0)},i.handleSwap=function(o,a){return function(){return i.swap(o,a)}},i.move=function(o,a){return i.updateArrayField(function(s){return WA(s,o,a)},!0,!0)},i.handleMove=function(o,a){return function(){return i.move(o,a)}},i.insert=function(o,a){return i.updateArrayField(function(s){return Xu(s,o,a)},function(s){return Xu(s,o,null)},function(s){return Xu(s,o,null)})},i.handleInsert=function(o,a){return function(){return i.insert(o,a)}},i.replace=function(o,a){return i.updateArrayField(function(s){return GA(s,o,a)},!1,!1)},i.handleReplace=function(o,a){return function(){return i.replace(o,a)}},i.unshift=function(o){var a=-1;return i.updateArrayField(function(s){var l=s?[o].concat(s):[o];return a=l.length,l},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),a},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Oy(i)),i.pop=i.pop.bind(Oy(i)),i}var n=t.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!Fn(be(i.formik.values,i.name),be(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var o;return this.updateArrayField(function(a){var s=a?Pr(a):[];return o||(o=s[i]),Ge(s.splice)&&s.splice(i,1),Ge(s.every)&&s.every(function(l){return l===void 0})?[]:s},!0,!0),o},n.pop=function(){var i;return this.updateArrayField(function(o){var a=o.slice();return i||(i=a&&a.pop&&a.pop()),a},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,a=o.component,s=o.render,l=o.children,u=o.name,f=o.formik,c=Un(f,["validate","validationSchema"]),d=le({},i,{form:c,name:u});return a?w.createElement(a,d):s?s(d):l?typeof l=="function"?l(d):kw(l)?null:w.Children.only(l):null},t}(w.Component);KA.defaultProps={validateOnChange:!0};var YA=function(e){bw(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(i){return be(this.props.formik.errors,this.props.name)!==be(i.formik.errors,this.props.name)||be(this.props.formik.touched,this.props.name)!==be(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,o=i.component,a=i.formik,s=i.render,l=i.children,u=i.name,f=Un(i,["component","formik","render","children","name"]),c=be(a.touched,u),d=be(a.errors,u);return c&&d?s?Ge(s)?s(d):null:l?Ge(l)?l(d):null:o?w.createElement(o,f,d):d:null},t}(w.Component),qA=VA(YA);function Lr(e){this._maxSize=e,this.clear()}Lr.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Lr.prototype.get=function(e){return this._values[e]};Lr.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var QA=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Ow=/^\d+$/,XA=/^\d/,JA=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,ZA=/^\s*(['"]?)(.*?)(\1)\s*$/,zp=512,Cy=new Lr(zp),Py=new Lr(zp),jy=new Lr(zp),Sr={Cache:Lr,split:Rf,normalizePath:Ju,setter:function(e){var t=Ju(e);return Py.get(e)||Py.set(e,function(r,i){for(var o=0,a=t.length,s=r;o<a-1;){var l=t[o];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;s=s[t[o++]]}s[t[o]]=i})},getter:function(e,t){var n=Ju(e);return jy.get(e)||jy.set(e,function(i){for(var o=0,a=n.length;o<a;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(Dp(n)||Ow.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){e3(Array.isArray(e)?e:Rf(e),t,n)}};function Ju(e){return Cy.get(e)||Cy.set(e,Rf(e).map(function(t){return t.replace(ZA,"$2")}))}function Rf(e){return e.match(QA)||[""]}function e3(e,t,n){var r=e.length,i,o,a,s;for(o=0;o<r;o++)i=e[o],i&&(r3(i)&&(i='"'+i+'"'),s=Dp(i),a=!s&&/^\d+$/.test(i),t.call(n,i,s,a,o,e))}function Dp(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function t3(e){return e.match(XA)&&!e.match(Ow)}function n3(e){return JA.test(e)}function r3(e){return!Dp(e)&&(t3(e)||n3(e))}const i3=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Jl=e=>e.match(i3)||[],Zl=e=>e[0].toUpperCase()+e.slice(1),Mp=(e,t)=>Jl(e).join(t).toLowerCase(),$w=e=>Jl(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),o3=e=>Zl($w(e)),a3=e=>Mp(e,"_"),s3=e=>Mp(e,"-"),l3=e=>Zl(Mp(e," ")),u3=e=>Jl(e).map(Zl).join(" ");var Zu={words:Jl,upperFirst:Zl,camelCase:$w,pascalCase:o3,snakeCase:a3,kebabCase:s3,sentenceCase:l3,titleCase:u3},Up={exports:{}};Up.exports=function(e){return Tw(c3(e),e)};Up.exports.array=Tw;function Tw(e,t){var n=e.length,r=new Array(n),i={},o=n,a=f3(t),s=d3(e);for(t.forEach(function(u){if(!s.has(u[0])||!s.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||l(e[o],o,new Set);return r;function l(u,f,c){if(c.has(u)){var d;try{d=", node was:"+JSON.stringify(u)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!s.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[f]){i[f]=!0;var v=a.get(u)||new Set;if(v=Array.from(v),f=v.length){c.add(u);do{var g=v[--f];l(g,s.get(g),c)}while(f);c.delete(u)}r[--n]=u}}}function c3(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function f3(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function d3(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var p3=Up.exports;const h3=$i(p3),m3=Object.prototype.toString,g3=Error.prototype.toString,y3=RegExp.prototype.toString,v3=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",x3=/^Symbol\((.*)\)(.*)$/;function w3(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Ry(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return w3(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return v3.call(e).replace(x3,"Symbol($1)");const r=m3.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+g3.call(e)+"]":r==="RegExp"?y3.call(e):null}function er(e,t){let n=Ry(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=Ry(this[r],t);return o!==null?o:i},2)}function Cw(e){return e==null?[]:[].concat(e)}let Pw,b3=/\$\{\s*(\w+)\s*\}/g;Pw=Symbol.toStringTag;class lt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(b3,(i,o)=>er(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Pw]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Cw(t).forEach(a=>{if(lt.isError(a)){this.errors.push(...a.errors);const s=a.inner.length?a.inner:[a];this.inner.push(...s)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,lt)}}let Kt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${er(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${er(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${er(n,!0)}\``+i}},It={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},S3={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Af={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},k3={isValue:"${path} field must be ${value}"},Ff={noUnknown:"${path} field has unspecified keys: ${unknown}"},E3={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},_3={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${er(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${er(n,!0)}\``}return lt.formatError(Kt.notType,e)}};Object.assign(Object.create(null),{mixed:Kt,string:It,number:S3,date:Af,object:Ff,array:E3,boolean:k3,tuple:_3});const Bp=e=>e&&e.__isYupSchema__;class Hs{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,a=typeof r=="function"?r:(...s)=>s.every(l=>l===r);return new Hs(t,(s,l)=>{var u;let f=a(...s)?i:o;return(u=f==null?void 0:f(l))!=null?u:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!Bp(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Aa={context:"$",value:"."};class zr{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Aa.context,this.isValue=this.key[0]===Aa.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Aa.context:this.isValue?Aa.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Sr.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}zr.prototype.__isYupRef=!0;const xr=e=>e==null;function Ur(e){function t({value:n,path:r="",options:i,originalValue:o,schema:a},s,l){const{name:u,test:f,params:c,message:d,skipAbsent:v}=e;let{parent:g,context:m,abortEarly:x=a.spec.abortEarly,disableStackTrace:h=a.spec.disableStackTrace}=i;function p(G){return zr.isRef(G)?G.getValue(n,g,m):G}function y(G={}){var xe;const Q=Object.assign({value:n,originalValue:o,label:a.spec.label,path:G.path||r,spec:a.spec},c,G.params);for(const Te of Object.keys(Q))Q[Te]=p(Q[Te]);const $e=new lt(lt.formatError(G.message||d,Q),n,Q.path,G.type||u,(xe=G.disableStackTrace)!=null?xe:h);return $e.params=Q,$e}const S=x?s:l;let E={path:r,parent:g,type:u,from:i.from,createError:y,resolve:p,options:i,originalValue:o,schema:a};const _=G=>{lt.isError(G)?S(G):G?l(null):S(y())},$=G=>{lt.isError(G)?S(G):s(G)};if(v&&xr(n))return _(!0);let B;try{var D;if(B=f.call(E,n,E),typeof((D=B)==null?void 0:D.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${E.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(B).then(_,$)}}catch(G){$(G);return}_(B)}return t.OPTIONS=e,t}function O3(e,t,n,r=n){let i,o,a;return t?(Sr.forEach(t,(s,l,u)=>{let f=l?s.slice(1,s.length-1):s;e=e.resolve({context:r,parent:i,value:n});let c=e.type==="tuple",d=u?parseInt(f,10):0;if(e.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(n&&d>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[d],e=c?e.spec.types[d]:e.innerType}if(!u){if(!e.fields||!e.fields[f])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);i=n,n=n&&n[f],e=e.fields[f]}o=f,a=l?"["+s+"]":"."+s}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class Gs extends Set{describe(){const t=[];for(const n of this.values())t.push(zr.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Gs(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function ri(e,t=new Map){if(Bp(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=ri(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,ri(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(ri(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=ri(i,t)}else throw Error(`Unable to clone ${e}`);return n}class rn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Gs,this._blacklist=new Gs,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Kt.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=ri(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(a=>{o.test(a.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,o;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&xr(o))return o;let a=er(t),s=er(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:o,originalValue:a=t,strict:s=this.spec.strict}=n,l=t;s||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let f of Object.values(this.internalTests))f&&u.push(f);this.runTests({path:o,value:l,originalValue:a,options:n,tests:u},r,f=>{if(f.length)return i(f,l);this.runTests({path:o,value:l,originalValue:a,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:a,originalValue:s,path:l,options:u}=t,f=m=>{i||(i=!0,n(m,a))},c=m=>{i||(i=!0,r(m,a))},d=o.length,v=[];if(!d)return c([]);let g={value:a,originalValue:s,path:l,options:u,schema:this};for(let m=0;m<o.length;m++){const x=o[m];x(g,f,function(p){p&&(Array.isArray(p)?v.push(...p):v.push(p)),--d<=0&&c(v)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:a}){const s=t??n;if(s==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof s=="number";let u=r[s];const f=Object.assign({},a,{strict:!0,parent:r,value:u,originalValue:o[s],key:void 0,[l?"index":"key"]:s,path:l||s.includes(".")?`${i||""}[${u?s:`"${s}"`}]`:(i?`${i}.`:"")+t});return(c,d,v)=>this.resolve(f)._validate(u,f,d,v)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((a,s)=>i._validate(t,n,(l,u)=>{lt.isError(l)&&(l.value=u),s(l)},(l,u)=>{l.length?s(new lt(l,u,void 0,void 0,o)):a(u)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o,a=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(s,l)=>{throw lt.isError(s)&&(s.value=l),s},(s,l)=>{if(s.length)throw new lt(s,t,void 0,void 0,a);o=l}),o}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(lt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(lt.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):ri(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Ur({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Ur({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Kt.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Kt.notNull){return this.nullability(!1,t)}required(t=Kt.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Kt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Ur(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===n.name&&(o||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Cw(t).map(o=>new zr(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new Hs(i,n):Hs.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Ur({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Kt.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Ur({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,a=o.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:a}})}}),r}notOneOf(t,n=Kt.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Ur({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,a=o.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:a}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:a}=n.spec;return{meta:i,label:r,optional:o,nullable:a,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,f)=>f.findIndex(c=>c.name===l.name)===u)}}}rn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])rn.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:a}=O3(this,t,n,r.context);return a[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])rn.prototype[e]=rn.prototype.oneOf;for(const e of["not","nope"])rn.prototype[e]=rn.prototype.notOneOf;let $3=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,T3=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,C3=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,P3=e=>xr(e)||e===e.trim(),j3={}.toString();function Vr(){return new jw}class jw extends rn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===j3?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Kt.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=It.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=It.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=It.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||It.matches,params:{regex:t},skipAbsent:!0,test:a=>a===""&&r||a.search(t)!==-1})}email(t=It.email){return this.matches($3,{name:"email",message:t,excludeEmptyString:!0})}url(t=It.url){return this.matches(T3,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=It.uuid){return this.matches(C3,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=It.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:P3})}lowercase(t=It.lowercase){return this.transform(n=>xr(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>xr(n)||n===n.toLowerCase()})}uppercase(t=It.uppercase){return this.transform(n=>xr(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>xr(n)||n===n.toUpperCase()})}}Vr.prototype=jw.prototype;const R3=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function fn(e,t=0){return Number(e)||t}function A3(e){const t=R3.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:fn(t[1]),month:fn(t[2],1)-1,day:fn(t[3],1),hour:fn(t[4]),minute:fn(t[5]),second:fn(t[6]),millisecond:t[7]?fn(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:fn(t[10]),minuteOffset:fn(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let F3=new Date(""),N3=e=>Object.prototype.toString.call(e)==="[object Date]";class eu extends rn{constructor(){super({type:"date",check(t){return N3(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=A3(t),isNaN(t)?eu.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(zr.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=Af.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=Af.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}eu.INVALID_DATE=F3;eu.prototype;function I3(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([a,s])=>`${a}-${s}`));function o(a,s){let l=Sr.split(a)[0];r.add(l),i.has(`${s}-${l}`)||n.push([s,l])}for(const a of Object.keys(e)){let s=e[a];r.add(a),zr.isRef(s)&&s.isSibling?o(s.path,a):Bp(s)&&"deps"in s&&s.deps.forEach(l=>o(l,a))}return h3.array(Array.from(r),n).reverse()}function Ay(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function Rw(e){return(t,n)=>Ay(e,t)-Ay(e,n)}const L3=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function ss(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=ss(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=ss(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(ss)}):"optional"in e?e.optional():e}const z3=(e,t)=>{const n=[...Sr.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=Sr.getter(Sr.join(n),!0)(e);return!!(i&&r in i)};let Fy=e=>Object.prototype.toString.call(e)==="[object Object]";function D3(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const M3=Rw([]);function Aw(e){return new Fw(e)}class Fw extends rn{constructor(t){super({type:"object",check(n){return Fy(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=M3,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let o=this.fields,a=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,s=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),f=!1;for(const c of s){let d=o[c],v=c in i;if(d){let g,m=i[c];u.path=(n.path?`${n.path}.`:"")+c,d=d.resolve({value:m,context:n.context,parent:l});let x=d instanceof rn?d.spec:void 0,h=x==null?void 0:x.strict;if(x!=null&&x.strip){f=f||c in i;continue}g=!n.__validating||!h?d.cast(i[c],u):i[c],g!==void 0&&(l[c]=g)}else v&&!a&&(l[c]=i[c]);(v!==c in l||l[c]!==i[c])&&(f=!0)}return f?l:i}_validate(t,n={},r,i){let{from:o=[],originalValue:a=t,recursive:s=this.spec.recursive}=n;n.from=[{schema:this,value:a},...o],n.__validating=!0,n.originalValue=a,super._validate(t,n,r,(l,u)=>{if(!s||!Fy(u)){i(l,u);return}a=a||u;let f=[];for(let c of this._nodes){let d=this.fields[c];!d||zr.isRef(d)||f.push(d.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:a}))}this.runTests({tests:f,value:u,originalValue:a,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?o:a}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const o=this.fields[r];let a=t;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),n[r]=o&&"getDefault"in o?o.getDefault(a):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=I3(t,n),r._sortErrors=Rw(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return ss(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=Sr.getter(t,!0);return this.transform(o=>{if(!o)return o;let a=o;return z3(o,t)&&(a=Object.assign({},o),r||delete a[t],a[n]=i(o)),a})}json(){return this.transform(L3)}noUnknown(t=!0,n=Ff.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=D3(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Ff.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Zu.camelCase)}snakeCase(){return this.transformKeys(Zu.snakeCase)}constantCase(){return this.transformKeys(t=>Zu.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[o,a]of Object.entries(n.fields)){var i;let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[o]})),r.fields[o]=a.describe(s)}return r}}Aw.prototype=Fw.prototype;const U3="/water-tracker/assets/default_avatar_to_download-b55e28a7.jpg",Vp=k.p`
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,Ny=k.label`
  display: inline-block;
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,B3=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,Nw=k.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,ec=k.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,tc=k.div`
  position: relative;
  margin-top: 8px;
`,Br=k(Nw)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`,V3=k.label`
  display: flex;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`,W3=k.span`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`,Ks=k.div`
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
`,Iy=k(Ks)`
  margin-bottom: 12px;
`,H3=k(Vp)`
  margin-bottom: 12px;
`,Ly=k(Lp)`
  border: 1px solid ${e=>e.theme.color.accent};
  width: 14px;
  height: 14px;

  &:checked {
    color: ${e=>e.theme.color.accent};
  }
`,G3=k.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,zy=k.span`
  margin-left: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,Dy=k.label`
  display: flex;
  align-items: center;
`,K3=k.img`
  border-radius: 60%;
`,Qi=k(Lp)`
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
`,Fa=k(qA)`
  margin-top: 4px;
  color: ${e=>e.theme.color.secondaryRed};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`,Y3=k.p`
  margin-top: 4px;
  color: ${e=>e.theme.color.secondaryRed};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`,q3=k.div`
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
`,Q3=k(Vp)`
  margin-bottom: 12px;
`,nc=k.label`
  margin-bottom: 8px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`,X3=k.button`
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
`,J3=k.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
`,My=k.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 392px;
  }
`,Uy=k(Ks)`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 0px;
  }
`,Z3=k.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-bottom: 52px;
  }
`,eF=Aw().shape({gender:Vr(),name:Vr().min(3,"Username must be more then 3 characters long").max(32,"Username must be less then 32 characters long"),email:Vr().email("Invalid email"),newPassword:Vr().min(8,"New password must be at least 8 characters long").max(64,"New password must be less then 64 characters long"),outdatedPassword:Vr().min(8,"Old password must be at least 8 characters long").max(64,"Old password must be less then 64 characters long")}),tF=({onClose:e})=>{const t=Il(),{avatarURL:n,email:r,name:i,gender:o}=ur(Op),[a,s]=w.useState(!1),l={gender:o||"",name:i||"",email:r||"",outdatedPassword:"",newPassword:"",repeatedPassword:""},u=(d,v)=>{const{gender:g,name:m,email:x,outdatedPassword:h,newPassword:p}=d;if(!h&&p){alert("Please enter old password");return}if(h===p&&h!==""&&p!==""){alert("New password should be different from the old one");return}const y={gender:g,name:m,email:x,outdatedPassword:h,newPassword:p},S={};Object.entries(y).forEach(([E,_])=>{_&&(S[E]=_)}),t(px(S)),v.resetForm()},f=()=>{s(d=>!d)},c=d=>{let v=new FormData;v.append("avatar",d.target.files[0]),t(dx(v))};return b.jsx(b.Fragment,{children:b.jsx(Vl,{onClose:e,title:"Setting",children:b.jsx(q3,{children:b.jsx(IA,{initialValues:l,validationSchema:eF,onSubmit:u,children:({values:d,errors:v,touched:g})=>b.jsxs(_w,{children:[b.jsxs(Ks,{children:[b.jsx(Vp,{children:"Your photo"}),b.jsxs(B3,{children:[b.jsx(K3,{src:n||U3,alt:"user avatar",width:"80px",height:"80px"}),b.jsxs(V3,{children:[b.jsx(Lp,{type:"file",name:"avatar",hidden:!0,accept:"image/png, image/jpeg",onChange:c}),b.jsx(Nw,{children:b.jsx("use",{href:`${_t}#icon-arrow-up`})}),b.jsx(W3,{children:"Upload a photo"})]})]})]}),b.jsxs(J3,{children:[b.jsxs(My,{children:[b.jsxs(Z3,{children:[b.jsx(H3,{children:"Your gender identity"}),b.jsxs(G3,{children:[b.jsxs(Dy,{children:[b.jsx(Ly,{type:"radio",name:"gender",value:"female",checked:d.gender==="female"}),b.jsx(zy,{children:"Girl"})]}),b.jsxs(Dy,{children:[b.jsx(Ly,{type:"radio",name:"gender",value:"male",checked:d.gender==="male"}),b.jsx(zy,{children:"Man"})]})]})]}),b.jsxs(Ks,{children:[b.jsx(Ny,{htmlFor:"username",children:"Your name"}),b.jsx(Qi,{type:"text",id:"username",name:"name",className:v.name&&g.name?"error-input":null,placeholder:d.name}),b.jsx(Fa,{component:"p",name:"name"})]}),b.jsxs(Uy,{children:[b.jsx(Ny,{htmlFor:"email",children:"E-mail"}),b.jsx(Qi,{type:"email",id:"email",name:"email",className:v.email&&g.email?"error-input":null,placeholder:d.email}),b.jsx(Fa,{component:"p",name:"email"})]})]}),b.jsxs(My,{children:[b.jsx(Q3,{children:"Password"}),b.jsxs(Iy,{children:[b.jsx(nc,{htmlFor:"oldPassword",children:"Outdated password:"}),b.jsxs(tc,{children:[b.jsx(Qi,{type:a?"text":"password",id:"oldPassword",name:"outdatedPassword",className:v.outdatedPassword&&g.outdatedPassword?"error-input":null,placeholder:"Password"}),b.jsx(ec,{type:"button",onClick:f,children:a?b.jsx(Br,{children:b.jsx("use",{href:`${_t}#icon-to-open`})}):b.jsx(Br,{children:b.jsx("use",{href:`${_t}#icon-to-hide`})})})]}),b.jsx(Fa,{component:"p",name:"outdatedPassword"})]}),b.jsxs(Iy,{children:[b.jsx(nc,{htmlFor:"password",children:"New Password:"}),b.jsxs(tc,{children:[b.jsx(Qi,{type:a?"text":"password",id:"password",name:"newPassword",className:v.newPassword&&g.newPassword?"error-input":null,placeholder:"Password"}),b.jsx(ec,{type:"button",onClick:f,children:a?b.jsx(Br,{children:b.jsx("use",{href:`${_t}#icon-to-open`})}):b.jsx(Br,{children:b.jsx("use",{href:`${_t}#icon-to-hide`})})})]}),b.jsx(Fa,{component:"p",name:"newPassword"})]}),b.jsxs(Uy,{children:[b.jsx(nc,{htmlFor:"repeatedPassword",children:"Repeat new password:"}),b.jsxs(tc,{children:[b.jsx(Qi,{type:a?"text":"password",id:"repeatedPassword",name:"repeatedPassword",className:d.newPassword!==d.repeatedPassword?"error-input":null,placeholder:"Password"}),b.jsx(ec,{type:"button",onClick:f,children:a?b.jsx(Br,{children:b.jsx("use",{href:`${_t}#icon-to-open`})}):b.jsx(Br,{children:b.jsx("use",{href:`${_t}#icon-to-hide`})})})]}),d.newPassword!==d.repeatedPassword?b.jsx(Y3,{children:`The entered password doesn't matches the new
                            password`}):null]})]})]}),b.jsx(X3,{type:"submit",children:"Save"})]})})})})})},PN=k.div`
  background-image: -webkit-image-set(
    url(${Vx}) 1x,
    url(${Wx}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    position: relative;
    background-image: -webkit-image-set(
      url(${Hx}) 1x,
      url(${Gx}) 2x
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
`,jN=k.div`
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
`,RN=k.span`
  color: red;
`,nF=k.button`
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
`,AN=k.label`
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
`,FN=k.input`
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
`,NN=k.form`
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
`,IN=k(nF)`
  background-color: ${e=>e.theme.color.secondaryPowderBlue};
  cursor: not-allowed;
`,LN=k.h2`
  width: 100%;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.theme.color.black};
`,zN=k.svg`
  width: 16px;
  height: 16px;
  border: 1px;
  stroke: ${e=>e.theme.color.accent};
  fill: ${e=>e.theme.color.white};
  position: absolute;
  right: 10px;
  top: 44px;
`,DN=k(Go)`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
  &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }
`,MN=k(Go)`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.color.accent};
  &:hover {
    color: ${e=>e.theme.color.secondaryYellow};
  }
`,rF=k.button`
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
`,iF=k.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: ${({theme:e})=>e.color.black};
  fill: transparent;
`,oF=()=>b.jsx("div",{children:b.jsx(Go,{to:"/signin",children:b.jsxs(rF,{type:"button",children:["Sign in",b.jsx(iF,{children:b.jsx("use",{href:`${_t}#icon-user`})})]})})}),aF=k.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`,sF=k.p`
  font-size: 18px;
  line-height: 1.33em;

  @media (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`,lF=k.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  padding: 0;
`,uF=k.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`,cF=k.span`
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
`,fF=k.svg`
  width: 16px;
  height: 16px;
  stroke: ${({theme:e})=>e.color.accent};
  fill: transparent;

  &:hover,
  &:focus {
    stroke: ${e=>e.theme.color.secondaryYellow};
  }
`,dF=()=>{const e=w.useRef(),[t,n]=w.useState(!1),{userName:r,avatarURL:i}=ur(Op),o=()=>{n(!t)},a=r?r.charAt(0).toUpperCase():"V",s=()=>r&&i?{name:r,avatar:i}:r||i?{name:r||a,avatar:i||a}:{name:a,avatar:a},{name:l,avatar:u}=s();return b.jsxs(aF,{children:[b.jsx(sF,{children:l}),b.jsxs(lF,{onClick:o,ref:e,children:[i?b.jsx(uF,{src:u,alt:"user-avatar"}):b.jsx(cF,{children:u}),b.jsx(fF,{children:b.jsx("use",{href:`${_t}#icon-arrow-down`})})]}),t&&b.jsx(hF,{setOnShowDropdown:n,parentRef:e})]})},pF=k.div`
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
`,By=k.svg`
  margin-right: 8px;
  fill: none;
  stroke: ${({theme:e})=>e.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`,Vy=k.button`
  color: ${({theme:e})=>e.color.accent};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  background-color: transparent;
  padding: 0;
`,Wy=k.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`,hF=({setOnShowDropdown:e,parentRef:t})=>{const n=w.useRef(),[r,i]=w.useState(!1),[o,a]=w.useState(!1);return w.useEffect(()=>{const s=u=>{n.current&&!n.current.contains(u.target)&&t.current&&!t.current.contains(u.target)&&e(!1)},l=u=>{u.code==="Escape"&&e(!1)};return window.addEventListener("keydown",l),document.addEventListener("click",s),()=>{document.removeEventListener("click",s),window.removeEventListener("keydown",l)}},[t,e]),b.jsx(b.Fragment,{children:b.jsxs(pF,{ref:n,children:[b.jsxs("ul",{children:[b.jsxs(Wy,{children:[b.jsx(By,{width:"16px",height:"16px",children:b.jsx("use",{href:`${_t}#icon-settings`})}),b.jsx(Vy,{type:"button",onClick:()=>{i(!0)},children:"Setting"})]}),b.jsxs(Wy,{children:[b.jsx(By,{width:"16px",height:"16px",children:b.jsx("use",{href:`${_t}#icon-exit`})}),b.jsx(Vy,{type:"button",onClick:()=>{a(!0)},children:"Log out"})]})]}),r&&b.jsx(tF,{onClose:()=>{i(!1)}}),o&&b.jsx(wF,{onClose:()=>{a(!1)}})]})})},mF=k.h2`
  margin-bottom: 24px;
  color: ${({theme:e})=>e.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
`,gF=k.button`
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
`,yF=k.button`
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
`,vF=k.ul`
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
`,xF=k.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`,wF=({onClose:e})=>{const t=Il();return b.jsx(b.Fragment,{children:b.jsx(Vl,{onClose:e,title:"Log out",children:b.jsxs(xF,{children:[b.jsx(mF,{children:"Do you really want to leave?"}),b.jsxs(vF,{children:[b.jsx("li",{children:b.jsx(yF,{type:"button",onClick:e,children:"Cancel"})}),b.jsx("li",{children:b.jsx(gF,{type:"button",onClick:()=>t(cx()),children:"Log out"})})]})]})})})},UN=k.div`
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
`,BN=k.h1`
  display: none;
`,VN=k.h2`
  font-weight: 700;
  font-size: 28px;
  color: ${({theme:e})=>e.color.black};
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`,WN=k.p`
  font-size: 24px;
  color: ${({theme:e})=>e.color.black};
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
  }
`,HN=k.ul`
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
`,GN=k.li`
  display: flex;
  gap: 8px;
  align-items: center;
`,KN=k.div`
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
`,YN=k.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`,qN=k.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  line-height: 20px;
  margin-bottom: 12px;
`,QN=k.button`
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
`,XN=k.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${({theme:e})=>e.color.black};
  margin-bottom: 12px;
`,JN=k.li`
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
`,ZN=k.div`
  display: inline-block;
  margin: 0;
`,e5=k.div`
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
`,t5=k.ul`
  list-style-type: none;
  padding-left: 0;
`,n5=k.button`
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
`,r5=k.img`
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
`,bF="modulepreload",SF=function(e){return"/water-tracker/"+e},Hy={},zi=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=SF(o),o in Hy)return;Hy[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const c=i[f];if(c.href===o&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":bF,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,c)=>{u.addEventListener("load",f),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})},kF=({component:e,redirectTo:t})=>ur(Kl)?b.jsx(e,{}):b.jsx(Ux,{to:t}),Na=({component:e,redirectTo:t})=>ur(Kl)?b.jsx(Ux,{to:t}):e,EF=()=>b.jsxs(b.Fragment,{children:[b.jsx(WC,{}),b.jsx("main",{children:b.jsx(w.Suspense,{fallback:b.jsx(Sp,{}),children:b.jsx(_C,{})})})]}),_F=w.lazy(()=>zi(()=>import("./Welcome-cf8d1b4e.js"),["assets/Welcome-cf8d1b4e.js","assets/Section-0b74242b.js"])),OF=w.lazy(()=>zi(()=>import("./Home-96acb15c.js"),["assets/Home-96acb15c.js","assets/Section-0b74242b.js","assets/bubbleTablet@2x-6e22c1d3.js"])),$F=w.lazy(()=>zi(()=>import("./SignIn-f08aae9d.js"),["assets/SignIn-f08aae9d.js","assets/Section-0b74242b.js","assets/bubbleTablet@2x-6e22c1d3.js"])),TF=w.lazy(()=>zi(()=>import("./SignUp-651713b9.js"),["assets/SignUp-651713b9.js","assets/Section-0b74242b.js","assets/bubbleTablet@2x-6e22c1d3.js"])),CF=w.lazy(()=>zi(()=>import("./Error-60adf899.js"),["assets/Error-60adf899.js","assets/Section-0b74242b.js"])),PF=w.lazy(()=>zi(()=>import("./ForgotPassword-87cd30dc.js"),["assets/ForgotPassword-87cd30dc.js","assets/Section-0b74242b.js"])),jF=()=>{const e=Il(),t=ur(UC);return w.useEffect(()=>{e(os())},[e]),t?b.jsx(Sp,{}):b.jsx($C,{children:b.jsxs(jn,{path:"/",element:b.jsx(EF,{}),children:[b.jsx(jn,{index:!0,element:b.jsx(Na,{component:b.jsx(_F,{}),redirectTo:"/home"})}),b.jsx(jn,{path:"home",element:b.jsx(kF,{component:OF,redirectTo:"/"})}),b.jsx(jn,{path:"signin",element:b.jsx(Na,{component:b.jsx($F,{}),redirectTo:"/home"})}),b.jsx(jn,{path:"signup",element:b.jsx(Na,{component:b.jsx(TF,{}),redirectTo:"/home"})}),b.jsx(jn,{path:"forgot-password",element:b.jsx(Na,{component:b.jsx(PF,{}),redirectTo:"/signin"})}),b.jsx(jn,{path:"*",element:b.jsx(CF,{})})]})})},RF=sc.createRoot(document.getElementById("root"));RF.render(b.jsx(He.StrictMode,{children:b.jsxs(g0,{theme:hf,children:[b.jsx(y0,{styles:C$}),b.jsx(tE,{store:mx,children:b.jsx(P1,{loading:b.jsx(Sp,{}),persistor:k$,children:b.jsx(FC,{basename:"/water-tracker",children:b.jsx(jF,{})})})})]})}));export{aN as $,YF as A,qN as B,e5 as C,FF as D,Vl as E,qF as F,QF as G,BN as H,GN as I,mN as J,pN as K,t5 as L,hN as M,JF as N,ZN as O,WN as P,XF as Q,tN as R,nN as S,KN as T,eN as U,ZF as V,UN as W,rN as X,HF as Y,iN as Z,oN as _,VN as a,sN as a0,lN as a1,fN as a2,dN as a3,uN as a4,cN as a5,gN as a6,yN as a7,vN as a8,xN as a9,n5 as aA,r5 as aB,G$ as aC,wN as aa,kN as ab,SN as ac,bN as ad,EN as ae,ON as af,_N as ag,$N as ah,TN as ai,CN as aj,Il as ak,jN as al,PN as am,NN as an,LN as ao,AN as ap,FN as aq,RN as ar,zN as as,IN as at,nF as au,MN as av,t$ as aw,DN as ax,e$ as ay,Go as az,HN as b,YN as c,QN as d,XN as e,JN as f,ur as g,Op as h,IF as i,b as j,eP as k,NF as l,LF as m,k as n,zF as o,DF as p,UF as q,w as r,_t as s,MF as t,zx as u,BF as v,WF as w,VF as x,GF as y,KF as z};
