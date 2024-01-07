import{t as v,g as E,h as k,i as K,r as d,j as e,D as oe,k as re,l as ie,m as le,o as de,p as ce,q as he,v as P,w as ue,x as V,y as L,z as X,A as q,E as xe,F as me,G as je,J as R,K as J,M as fe,N as ge,Q,R as S,S as ye,U as pe,V as Me,X as F,Y as we,Z as De,_ as ke,$ as Se,a0 as be,a1 as Z,a2 as ve,a3 as Te,a4 as ee,s as D,a5 as te,a6 as se,a7 as Ce,a8 as N,a9 as G,aa as _,ab as $e,ac as We,ad as He,ae as Be,af as Oe,ag as Pe,ah as Ie,ai as Le,aj as Ve,ak as Ae,al as Y,am as Ee,an as Re,ao as Fe,ap as Ne,aq as Ge,ar as _e,as as Ye,at as ze,au as Ue,av as Ke,aw as Xe,ax as qe,ay as Je,az as Qe,aA as Ze,aB as et,aC as tt,aD as st,aE as at,n as A}from"./index-9ded9d6a.js";import{S as nt}from"./Section-d11ae8d2.js";import{i as ot,a as rt,b as it,c as lt,d as dt,e as ct}from"./bubbleTablet@2x-6c947164.js";function ae(s,a){const t=v(s);if(isNaN(a))return E(s,NaN);if(!a)return t;const n=t.getDate(),o=E(s,t.getTime());o.setMonth(t.getMonth()+a+1,0);const r=o.getDate();return n>=r?o:(t.setFullYear(o.getFullYear(),o.getMonth(),n),t)}function z(s){const a=v(s),t=a.getMonth();return a.setFullYear(a.getFullYear(),t+1,0),a.setHours(23,59,59,999),a}function ht(s,a){const t=v(s.start),n=v(s.end);let o=+t>+n;const r=o?+t:+n,i=o?n:t;i.setHours(0,0,0,0);let u=(a==null?void 0:a.step)??1;if(!u)return[];u<0&&(u=-u,o=!o);const x=[];for(;+i<=r;)x.push(v(i)),i.setDate(i.getDate()+u),i.setHours(0,0,0,0);return o?x.reverse():x}function U(s){const a=v(s);return a.setDate(1),a.setHours(0,0,0,0),a}function ut(s,a){return ae(s,-a)}const xt=()=>{const{waterRate:s}=k(K),[a,t]=d.useState(!1),n=()=>{t(!0)},o=()=>{t(!1)},r=(s/1e3).toFixed(1)+" L";return e.jsxs(oe,{children:[e.jsxs(re,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:r}),e.jsx("button",{onClick:n,children:"Edit"})]}),a&&e.jsx(ie,{onClose:o})]}),e.jsx(le,{})]})},mt=({stats:s,position:a,onShow:t})=>{const{date:n,drinkCount:o,waterVolumePercentage:r}=s,i=d.useRef(null),{waterRate:u}=k(K);d.useEffect(()=>{if(!i.current)return;const{top:M,left:f,width:l}=a,c=i.current,w=c.offsetWidth;if(window.innerWidth<=320)c.style.width="100%",c.style.left="0",c.style.top=`${M-c.offsetHeight}px`,c.style.transform="translateX(0)";else{const C=f,h=window.innerWidth-f-l;C>w?c.style.left=`${f-w}px`:h>w?c.style.left=`${f+l}px`:(c.style.left="50%",c.style.transform="translateX(-50%)"),c.style.top=`${M-c.offsetHeight}px`}},[a]);const x=(u/1e3).toFixed(1)+" L",y=n?de(n,"d, MMMM"):"";return e.jsx(ce,{ref:i,style:{visibility:t?"visible":"hidden"},children:e.jsxs(he,{children:[e.jsx(P,{children:e.jsx(ue,{children:y})}),e.jsxs(P,{children:["Daily norma:",e.jsx(V,{children:x})]}),e.jsxs(P,{children:["Fulfillment of the daily norm:",e.jsxs(V,{children:[Math.round(r),"%"]})]}),e.jsxs(P,{children:["How many servings of water:",e.jsx(V,{children:o})]})]})})},jt=({onClose:s,recordId:a})=>{const t=L(),{isLoading:n}=k(X),o=()=>{t(fe(a)).then(r=>{r.error||s()})};return e.jsx(q,{onClose:s,title:"Delete Entry",children:e.jsxs(xe,{children:[e.jsx(me,{children:"Are you sure you want to delete the entry?"}),e.jsxs(je,{children:[e.jsxs(R,{onClick:o,children:["Delete ",n&&e.jsx(J,{})]}),e.jsx(R,{onClick:s,children:"Cancel"})]})]})})},ft=()=>{const s=L(),a=k(ge),[t,n]=d.useState(new Date),[o,r]=d.useState(!1),[i,u]=d.useState({top:0,left:0,width:0}),[x,y]=d.useState(null),[M,f]=d.useState(!1),l=d.useRef({}),c=k(Q),w=S(U(t),"yyyy-MM-dd"),T=S(z(t),"yyyy-MM-dd");d.useEffect(()=>{s(ye({startDate:w,endDate:T}))},[s,T,c,w]);const C=()=>{n(ut(t,1))},h=()=>{t<new Date&&n(ae(t,1))},p=ht({start:U(t),end:z(t)}),H=a.reduce((m,g)=>(m[g.date]=g,m),{}),B=m=>{const g=S(m,"yyyy-MM-dd"),j=H[g];(x==null?void 0:x.date)===g&&o?(r(!1),y(null)):(y({date:g,waterVolumeSum:j?j.waterVolumeSum:0,drinkCount:j?j.drinkCount:0,waterVolumePercentage:j?j.waterVolumePercentage:0}),r(!0));const O=l.current[m];if(O){const W=O.getBoundingClientRect();u({top:W.top+window.scrollY,left:W.left,width:W.width})}},b=()=>{r(!1),y(null)};return d.useEffect(()=>{const m=g=>{o&&Object.values(l.current).every($=>$&&!$.contains(g.target))&&b()};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[o,x]),e.jsxs("div",{children:[e.jsxs(pe,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(Me,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[e.jsx(F,{onClick:C,children:"<"}),e.jsx("span",{children:S(t,"MMMM")}),M&&e.jsx(we,{children:S(t,"yyyy").split("-")[0]}),e.jsx(F,{onClick:h,disabled:t>=new Date,children:">"})]})]}),e.jsxs(De,{children:[p.map(m=>{const g=S(m,"yyyy-MM-dd"),j=H[g],$=j?j.waterVolumePercentage:0,O=j&&j.waterVolumePercentage<100;return e.jsx("div",{children:e.jsxs(ke,{children:[e.jsx(Se,{ref:W=>l.current[m]=W,onClick:()=>B(m),isHighlighted:O,children:S(m,"d")}),e.jsxs("span",{children:[Math.round($),"%"]})]})},g)}),o&&x&&e.jsx(mt,{stats:x,position:i,onClose:b,onShow:o})]})]})},ne=({initialAmount:s,initialTime:a,isEditing:t,onClose:n,existingRecordId:o})=>{const[r,i]=d.useState(s||0),[u,x]=d.useState(t&&a?be(a):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),y=L(),{isLoading:M}=k(X),f=()=>i(h=>h+50),l=()=>i(h=>h>0?h-50:0),c=h=>{let p=h.target.value;p.startsWith("0")&&p.length>1&&(p=p.substring(1)),i(p)},w=()=>{const p=`${new Date().toISOString().slice(0,10)}T${u}`,H=new Date(p).toISOString(),B={waterVolume:r,date:H};t?y(Le({_id:o,...B})).then(b=>{b.error||n()}):y(Ve(B)).then(b=>{b.error||n()})},T=t?"Edit the entered amount of water":"Add water",C=t&&a?Z(a):"";return e.jsx(q,{onClose:n,title:T,children:e.jsxs(ve,{children:[t&&e.jsxs(Te,{children:[e.jsx(ee,{children:e.jsx("use",{href:`${D}#icon-glass`})}),e.jsx(te,{children:s?`${s} ml`:"No notes yet"}),e.jsx(se,{children:a?`${C}`:""})]}),e.jsx("h3",{children:t?"Correct entered data:":"Choose a value:"}),e.jsxs(Ce,{children:[e.jsx(N,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(G,{onClick:l,children:e.jsx(_,{children:e.jsx("use",{href:`${D}#icon-decrement-outline`})})}),e.jsxs($e,{children:[e.jsx(We,{type:"number",value:r,onChange:c,onBlur:()=>i(h=>h||s||0)}),e.jsx("span",{children:"ml"})]}),e.jsx(G,{onClick:f,children:e.jsx(_,{children:e.jsx("use",{href:`${D}#icon-increment`})})})]})]}),e.jsxs(He,{children:[e.jsx(N,{children:"Recording time:"}),e.jsx(Be,{type:"time",value:u,onChange:h=>x(h.target.value),step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(Oe,{type:"number",value:r,onChange:c,onBlur:()=>i(h=>h||s||"")})]}),e.jsxs(Pe,{children:[e.jsxs("span",{children:[r,"ml"]}),e.jsxs(Ie,{onClick:w,children:["Save ",M&&e.jsx(J,{})]})]})]})})},I={glass:`${D}#icon-glass`,change:`${D}#icon-change`,delete:`${D}#icon-delete`,add:`${D}#icon-increment`},gt=()=>{const s=L(),[a,t]=d.useState(!1),[n,o]=d.useState(null),[r,i]=d.useState(!1),{dailyWaterList:u}=k(Ae);d.useEffect(()=>{s(Y())},[s]);const x=()=>{o(null),t(!0)},y=l=>{o(l),i(!0)},M=l=>{o(l),t(!0)},f=()=>{s(Y())};return e.jsxs(Ee,{children:[e.jsx(Re,{children:"Today"}),e.jsxs(Fe,{children:[u==null?void 0:u.map(l=>e.jsxs(Ne,{children:[e.jsxs(Ge,{children:[e.jsx(ee,{children:e.jsx("use",{href:I.glass})}),e.jsxs(te,{children:[l.waterVolume," ml"]}),e.jsx(se,{children:Z(l.date)})]}),e.jsxs(_e,{children:[e.jsx(Ye,{onClick:()=>M(l),children:e.jsx("svg",{children:e.jsx("use",{href:I.change})})}),e.jsx(ze,{onClick:()=>y(l),children:e.jsx("svg",{children:e.jsx("use",{href:I.delete})})})]})]},l._id)),e.jsx("li",{children:e.jsxs(Ue,{onClick:x,children:[e.jsx("svg",{children:e.jsx("use",{href:I.add})}),"Add Water"]})})]}),r&&e.jsx(jt,{onClose:()=>i(!1),recordId:n==null?void 0:n._id}),a&&e.jsx(ne,{initialAmount:n==null?void 0:n.waterVolume,initialTime:n==null?void 0:n.date,isEditing:n!==null,existingRecordId:n==null?void 0:n._id,onClose:()=>t(!1),onUpdate:f})]})},yt=()=>{const[s,a]=d.useState(!1),t=k(Q),n=()=>({left:`calc(${Math.min(100,Math.max(0,t))}% + 4px)`}),o=()=>({backgroundSize:`${t}%`}),r=t>0&&t<100;return e.jsxs(Ke,{children:[e.jsxs(Xe,{children:[e.jsx(qe,{children:"Today"}),e.jsx(Je,{type:"range",maxValue:100,minValue:0,value:t,readOnly:!0,style:o(),"aria-label":"Water range"}),e.jsxs(Qe,{children:[e.jsx(Ze,{children:"0%"}),r&&e.jsx(et,{id:"waterMark",style:n(),children:`${t}%`}),e.jsx(tt,{children:"100%"})]})]}),e.jsxs(st,{onClick:()=>a(!0),children:[e.jsx(at,{children:e.jsx("use",{href:`${D}#icon-increment-outline`})}),"Add Water"]}),s&&e.jsx(ne,{onClose:()=>a(!1)})]})},pt=A(nt)`
  background-position: center center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-image: -webkit-image-set(
    url(${ot}) 1x,
    url(${rt}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${it}) 1x,
      url(${lt}) 2x
    );
  }

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${dt}) 1x,
      url(${ct}) 2x
    );
  }
`,Mt=A.div`
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
`,wt=A.div`
  padding: 24px 8px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  background: ${s=>s.theme.color.secondaryWhite};
  max-width: 280px;

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.tablet}) {
    padding: 32px 24px;
    max-width: 704px;
  }

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    max-width: 592px;
    flex-direction: row;
  }
`,bt=()=>e.jsx(pt,{children:e.jsxs(Mt,{children:[e.jsxs("div",{children:[e.jsx(xt,{}),e.jsx(yt,{})]}),e.jsxs(wt,{children:[e.jsx(gt,{}),e.jsx(ft,{})]})]})});export{bt as default};
