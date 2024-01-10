import{t as b,l as E,m as v,o as Q,r as c,j as e,D as de,p as ie,q as ce,v as he,w as ue,x as xe,y as me,z as P,A as fe,E as F,g as V,F as Z,G as ee,J as je,K as ge,M as pe,N as Y,Q as te,R as ye,S as Me,U as se,V as M,X as we,Y as De,Z as Se,_,$ as ke,a0 as be,a1 as ve,a2 as Ce,a3 as R,a4 as He,a5 as Te,a6 as ne,s as k,a7 as ae,a8 as oe,a9 as $e,aa as G,ab as z,ac as U,ad as We,ae as Be,af as Oe,ag as Pe,ah as Le,ai as Ve,aj as Ie,ak as Ae,al as Fe,am as Re,an as K,ao as Ne,ap as Ee,aq as Ye,ar as _e,as as Ge,at as ze,au as Ue,av as Ke,aw as Xe,ax as qe,ay as Je,az as Qe,aA as Ze,aB as et,aC as tt,aD as st,aE as nt,aF as at,aG as ot,n as N}from"./index-e352ad3e.js";import{S as rt}from"./Section-a8ddb94e.js";import{i as lt,a as dt,b as it,c as ct,d as ht,e as ut}from"./bubbleTablet@2x-6c947164.js";function re(s,n){const t=b(s);if(isNaN(n))return E(s,NaN);if(!n)return t;const a=t.getDate(),o=E(s,t.getTime());o.setMonth(t.getMonth()+n+1,0);const i=o.getDate();return a>=i?o:(t.setFullYear(o.getFullYear(),o.getMonth(),a),t)}function X(s){const n=b(s),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function xt(s,n){const t=b(s.start),a=b(s.end);let o=+t>+a;const i=o?+t:+a,r=o?a:t;r.setHours(0,0,0,0);let l=(n==null?void 0:n.step)??1;if(!l)return[];l<0&&(l=-l,o=!o);const j=[];for(;+r<=i;)j.push(b(r)),r.setDate(r.getDate()+l),r.setHours(0,0,0,0);return o?j.reverse():j}function q(s){const n=b(s);return n.setDate(1),n.setHours(0,0,0,0),n}function J(s,n){const t=b(s),a=b(n);return t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth()}function mt(s,n){return re(s,-n)}const ft=()=>{const{waterRate:s}=v(Q),[n,t]=c.useState(!1),a=()=>{t(!0)},o=()=>{t(!1)},i=(s/1e3).toFixed(1)+" L";return e.jsxs(de,{children:[e.jsxs(ie,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:i}),e.jsx("button",{onClick:a,children:"Edit"})]}),e.jsx(ce,{onClose:o,onShow:n})]}),e.jsx(he,{})]})},jt=({stats:s,position:n,onShow:t})=>{const{date:a,drinkCount:o,waterVolumePercentage:i}=s,r=c.useRef(null),{waterRate:l}=v(Q);c.useEffect(()=>{if(!r.current)return;const{top:f,left:p,width:m}=n,x=r.current,D=x.offsetWidth;if(window.innerWidth<=320)x.style.width="80%",x.style.left="10%",x.style.top=`${f-x.offsetHeight}px`,x.style.transform="translateX(0)";else{const C=p,H=window.innerWidth-p-m;C>D?x.style.left=`${p-D}px`:H>D?x.style.left=`${p+m}px`:(x.style.left="50%",x.style.transform="translateX(-50%)"),x.style.top=`${f-x.offsetHeight}px`}},[n]);const j=(l/1e3).toFixed(1)+" L",w=a?ue(a,"d, MMMM"):"";return e.jsx(xe,{ref:r,style:{visibility:t?"visible":"hidden"},children:e.jsxs(me,{children:[e.jsx(P,{children:e.jsx(fe,{children:w})}),e.jsxs(P,{children:["Daily norma:",e.jsx(F,{children:j})]}),e.jsxs(P,{children:["Fulfillment of the daily norm:",e.jsxs(F,{children:[Math.round(i),"%"]})]}),e.jsxs(P,{children:["How many servings of water:",e.jsx(F,{children:o})]})]})})},gt=({onClose:s,onShow:n,recordId:t})=>{const a=V(),{isLoading:o}=v(Z),i="32px 24px",r=()=>{a(ye(t)).then(l=>{l.error||s()})};return e.jsx(ee,{onClose:s,onShow:n,stylesPadding:i,title:"Delete Entry",children:e.jsxs(je,{children:[e.jsx(ge,{children:"Are you sure you want to delete the entry?"}),e.jsxs(pe,{children:[e.jsxs(Y,{onClick:r,children:["Delete ",o&&e.jsx(te,{})]}),e.jsx(Y,{onClick:s,children:"Cancel"})]})]})})},pt=()=>{const s=V(),n=v(Me),[t,a]=c.useState(new Date),[o,i]=c.useState(null),[r,l]=c.useState(!1),[j,w]=c.useState({top:0,left:0,width:0}),[f,p]=c.useState(null),[m,x]=c.useState(!1),D=c.useRef({}),W=v(se),C=M(q(t),"yyyy-MM-dd"),H=M(X(t),"yyyy-MM-dd");c.useEffect(()=>{s(we({startDate:C,endDate:H}))},[s,H,W,C]);const I=()=>{const d=mt(t,1);a(d),J(d,new Date)?i(null):i("prev")},h=()=>{if(t<new Date){const d=re(t,1);a(d),J(d,new Date)?i(null):i("next")}},y=xt({start:q(t),end:X(t)}),S=n.reduce((d,u)=>(d[u.date]=u,d),{}),A=d=>{const u=M(d,"yyyy-MM-dd"),g=S[u];(f==null?void 0:f.date)===u&&r?(l(!1),p(null)):(p({date:u,waterVolumeSum:g?g.waterVolumeSum:0,drinkCount:g?g.drinkCount:0,waterVolumePercentage:g?g.waterVolumePercentage:0}),l(!0));const O=D.current[d];if(O){const $=O.getBoundingClientRect();w({top:$.top+window.scrollY,left:$.left,width:$.width})}},B=()=>{l(!1),p(null)};return c.useEffect(()=>{const d=u=>{r&&Object.values(D.current).every(T=>T&&!T.contains(u.target))&&B()};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[r,f]),e.jsxs("div",{children:[e.jsxs(De,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(Se,{onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[e.jsx(_,{onClick:I,active:o==="next",children:"<"}),e.jsx("span",{children:M(t,"MMMM")}),m&&e.jsx(ke,{children:M(t,"yyyy").split("-")[0]}),e.jsx(_,{onClick:h,disabled:t>=new Date,active:o==="prev",children:">"})]})]}),e.jsxs(be,{children:[y.map(d=>{const u=M(d,"yyyy-MM-dd"),g=S[u],T=g?g.waterVolumePercentage:0,O=g&&g.waterVolumePercentage<100;return e.jsx("div",{children:e.jsxs(ve,{children:[e.jsx(Ce,{ref:$=>D.current[d]=$,onClick:()=>A(d),isHighlighted:O,children:M(d,"d")}),e.jsxs("span",{children:[Math.round(T),"%"]})]})},u)}),r&&f&&e.jsx(jt,{stats:f,position:j,onClose:B,onShow:r})]})]})},le=({initialAmount:s,initialTime:n,isEditing:t,onClose:a,onShow:o,existingRecordId:i})=>{const[r,l]=c.useState(s||0),[j,w]=c.useState(t&&n?M(new Date(n),"HH:mm"):M(new Date,"HH:mm")),f=V(),{isLoading:p}=v(Z),m=()=>{l(h=>h+50)},x=()=>l(h=>h>0?h-50:0),D=h=>{let y=h.target.value;y.startsWith("0")&&y.length>1&&(y=parseFloat(y.substring(1))),l(parseFloat(y))};c.useEffect(()=>{t?(l(s||0),w(R(n,"HH:mm"))):(l(0),w(M(new Date,"HH:mm")))},[t,s,n]);const W=()=>{let h;if(t)h=n?new Date(n).toISOString().slice(0,16):new Date().toISOString();else if(j){const S=new Date,[A,B]=j.split(":");S.setHours(A,B),h=S.toISOString().slice(0,16);const d=new Date(h),u=new Date(d);u.setHours(d.getHours()+2),h=u.getFullYear()+"-"+("0"+(u.getMonth()+1)).slice(-2)+"-"+("0"+u.getDate()).slice(-2)+"T"+("0"+u.getHours()).slice(-2)+":"+("0"+u.getMinutes()).slice(-2)}const y={waterVolume:r,date:h};t?f(Ae({_id:i,...y})).then(S=>{S.error||a()}):f(Fe(y)).then(S=>{S.error||(a(),l(0))})},C=()=>{if(t){a();return}a(),l(0)},H=t?"Edit the entered amount of water":"Add water",I=t&&n?R(n):"";return e.jsx(ee,{onClose:C,onShow:o,title:H,children:e.jsxs(He,{children:[t&&e.jsxs(Te,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${k}#icon-glass`})}),e.jsx(ae,{children:s?`${s} ml`:"No notes yet"}),e.jsx(oe,{children:n?`${I}`:""})]}),e.jsx("h3",{children:t?"Correct entered data:":"Choose a value:"}),e.jsxs($e,{children:[e.jsx(G,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(z,{onClick:x,children:e.jsx(U,{children:e.jsx("use",{href:`${k}#icon-decrement-outline`})})}),e.jsx(We,{children:e.jsxs(Be,{children:[r," ml"]})}),e.jsx(z,{onClick:m,children:e.jsx(U,{children:e.jsx("use",{href:`${k}#icon-increment`})})})]})]}),e.jsxs(Oe,{children:[e.jsx(G,{children:"Recording time:"}),e.jsx(Pe,{type:"time",value:j,onChange:h=>w(h.target.value),step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(Le,{type:"number",value:r,onChange:D,onBlur:()=>l(h=>h||s||0)})]}),e.jsxs(Ve,{children:[e.jsxs("span",{children:[r,"ml"]}),e.jsxs(Ie,{onClick:W,children:["Save ",p&&e.jsx(te,{})]})]})]})})},L={glass:`${k}#icon-glass`,change:`${k}#icon-change`,delete:`${k}#icon-delete`,add:`${k}#icon-increment`},yt=()=>{const s=V(),[n,t]=c.useState(!1),[a,o]=c.useState(null),[i,r]=c.useState(!1),{dailyWaterList:l}=v(Re);c.useEffect(()=>{s(K())},[s]);const j=()=>{o(null),t(!0)},w=m=>{o(m),r(!0)},f=m=>{o(m),t(!0)},p=()=>{s(K())};return e.jsxs(Ne,{children:[e.jsx(Ee,{children:"Today"}),e.jsx(Ye,{children:l==null?void 0:l.map(m=>e.jsxs(_e,{children:[e.jsxs(Ge,{children:[e.jsx(ne,{children:e.jsx("use",{href:L.glass})}),e.jsxs(ae,{children:[m.waterVolume," ml"]}),e.jsx(oe,{children:R(m.date)})]}),e.jsxs(ze,{children:[e.jsx(Ue,{onClick:()=>f(m),children:e.jsx("svg",{children:e.jsx("use",{href:L.change})})}),e.jsx(Ke,{onClick:()=>w(m),children:e.jsx("svg",{children:e.jsx("use",{href:L.delete})})})]})]},m._id))}),e.jsxs(Xe,{onClick:j,children:[e.jsx("svg",{children:e.jsx("use",{href:L.add})}),"Add Water"]}),e.jsx(gt,{onClose:()=>r(!1),onShow:i,recordId:a==null?void 0:a._id}),e.jsx(le,{initialAmount:a==null?void 0:a.waterVolume,initialTime:a==null?void 0:a.date,isEditing:a!==null,existingRecordId:a==null?void 0:a._id,onClose:()=>t(!1),onShow:n,onUpdate:p})]})},Mt=()=>{const[s,n]=c.useState(!1),t=v(se),a=()=>({left:`calc(${Math.min(100,Math.max(0,t))}% + 4px)`}),o=()=>({backgroundSize:`${t}%`}),i=t>0&&t<100;return e.jsxs(qe,{children:[e.jsxs(Je,{children:[e.jsx(Qe,{children:"Today"}),e.jsx(Ze,{type:"range",maxValue:100,minValue:0,value:t,readOnly:!0,style:o(),"aria-label":"Water range"}),e.jsxs(et,{children:[e.jsx(tt,{children:"0%"}),i&&e.jsx(st,{id:"waterMark",style:a(),children:`${t}%`}),e.jsx(nt,{children:"100%"})]})]}),e.jsxs(at,{onClick:()=>n(!0),children:[e.jsx(ot,{children:e.jsx("use",{href:`${k}#icon-increment-outline`})}),"Add Water"]}),e.jsx(le,{onClose:()=>n(!1),onShow:s})]})},wt=N(rt)`
  background-position: center center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-image: -webkit-image-set(
    url(${lt}) 1x,
    url(${dt}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${it}) 1x,
      url(${ct}) 2x
    );
  }

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${ht}) 1x,
      url(${ut}) 2x
    );
  }
`,Dt=N.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    display: flex;
    flex-direction: row;
  }
`,St=N.div`
  padding: 24px 8px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  background: ${s=>s.theme.color.secondaryWhite};
  max-width: 280px;
  border-radius: 10px;

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.tablet}) {
    padding: 32px 24px;
    max-width: 704px;
  }

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    max-width: 592px;
    flex-direction: row;
  }
`,Ct=()=>e.jsx(wt,{children:e.jsxs(Dt,{children:[e.jsxs("div",{children:[e.jsx(ft,{}),e.jsx(Mt,{})]}),e.jsxs(St,{children:[e.jsx(yt,{}),e.jsx(pt,{})]})]})});export{Ct as default};
