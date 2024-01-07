import{t as S,g as L,h as b,i as U,r as d,j as e,D as ae,k as ne,l as oe,m as re,o as ie,p as le,q as de,v as H,w as ce,x as V,y as O,z as K,A as he,E as ue,F as xe,G as R,J as me,K as je,M as X,N as k,Q as fe,R as ge,S as pe,U as E,Y as ye,V as Me,X as we,Z as De,_ as ke,$ as q,a0 as Se,a1 as be,a2 as J,s as D,a3 as Q,a4 as Z,a5 as ve,a6 as F,a7 as N,a8 as G,a9 as Te,aa as Ce,ab as $e,ac as We,ad as He,ae as Be,af as Oe,ag as Pe,ah as Ve,ai as Ie,aj as _,ak as Ae,al as Le,am as Re,an as Ee,ao as Fe,ap as Ne,aq as Ge,ar as _e,as as Ye,at as ze,au as Ue,av as Ke,aw as Xe,ax as qe,ay as Je,az as Qe,aA as Ze,aB as et,aC as tt,n as I}from"./index-1501eb06.js";import{S as st}from"./Section-e867c56b.js";import{i as at,a as nt,b as ot,c as rt,d as it,e as lt}from"./bubbleTablet@2x-6e22c1d3.js";function ee(s,a){const t=S(s);if(isNaN(a))return L(s,NaN);if(!a)return t;const n=t.getDate(),o=L(s,t.getTime());o.setMonth(t.getMonth()+a+1,0);const i=o.getDate();return n>=i?o:(t.setFullYear(o.getFullYear(),o.getMonth(),n),t)}function Y(s){const a=S(s),t=a.getMonth();return a.setFullYear(a.getFullYear(),t+1,0),a.setHours(23,59,59,999),a}function dt(s,a){const t=S(s.start),n=S(s.end);let o=+t>+n;const i=o?+t:+n,r=o?n:t;r.setHours(0,0,0,0);let h=(a==null?void 0:a.step)??1;if(!h)return[];h<0&&(h=-h,o=!o);const u=[];for(;+r<=i;)u.push(S(r)),r.setDate(r.getDate()+h),r.setHours(0,0,0,0);return o?u.reverse():u}function z(s){const a=S(s);return a.setDate(1),a.setHours(0,0,0,0),a}function ct(s,a){return ee(s,-a)}const ht=()=>{const{waterRate:s}=b(U),[a,t]=d.useState(!1),n=()=>{t(!0)},o=()=>{t(!1)},i=(s/1e3).toFixed(1)+" L";return e.jsxs(ae,{children:[e.jsxs(ne,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:i}),e.jsx("button",{onClick:n,children:"Edit"})]}),a&&e.jsx(oe,{onClose:o})]}),e.jsx(re,{})]})},ut=({stats:s,position:a,onShow:t})=>{const{date:n,drinkCount:o,waterVolumePercentage:i}=s,r=d.useRef(null),{waterRate:h}=b(U);d.useEffect(()=>{if(!r.current)return;const{top:M,left:f,width:l}=a,x=r.current,w=x.offsetWidth;if(window.innerWidth<=320)x.style.width="100%",x.style.left="0",x.style.top=`${M-x.offsetHeight}px`,x.style.transform="translateX(0)";else{const c=f,g=window.innerWidth-f-l;c>w?x.style.left=`${f-w}px`:g>w?x.style.left=`${f+l}px`:(x.style.left="50%",x.style.transform="translateX(-50%)"),x.style.top=`${M-x.offsetHeight}px`}},[a]);const u=(h/1e3).toFixed(1)+" L",y=n?ie(n,"d, MMMM"):"";return e.jsx(le,{ref:r,style:{visibility:t?"visible":"hidden"},children:e.jsxs(de,{children:[e.jsx(H,{children:e.jsx(ce,{children:y})}),e.jsxs(H,{children:["Daily norma:",e.jsx(V,{children:u})]}),e.jsxs(H,{children:["Fulfillment of the daily norm:",e.jsxs(V,{children:[Math.round(i),"%"]})]}),e.jsxs(H,{children:["How many servings of water:",e.jsx(V,{children:o})]})]})})},xt=({onClose:s,recordId:a})=>{const t=O(),n=()=>{t(me(a)).unwrap(),s()};return e.jsx(K,{onClose:s,title:"Delete Entry",children:e.jsxs(he,{children:[e.jsx(ue,{children:"Are you sure you want to delete the entry?"}),e.jsxs(xe,{children:[e.jsx(R,{onClick:n,children:"Delete"}),e.jsx(R,{onClick:s,children:"Cancel"})]})]})})},mt=()=>{const s=O(),a=b(je),[t,n]=d.useState(new Date),[o,i]=d.useState(!1),[r,h]=d.useState({top:0,left:0,width:0}),[u,y]=d.useState(null),[M,f]=d.useState(!1),l=d.useRef({}),x=b(X),w=k(z(t),"yyyy-MM-dd"),v=k(Y(t),"yyyy-MM-dd");d.useEffect(()=>{s(fe({startDate:w,endDate:v}))},[s,v,x,w]);const c=()=>{n(ct(t,1))},g=()=>{t<new Date&&n(ee(t,1))},P=dt({start:z(t),end:Y(t)}),T=a.reduce((m,p)=>(m[p.date]=p,m),{}),se=m=>{const p=k(m,"yyyy-MM-dd"),j=T[p];(u==null?void 0:u.date)===p&&o?(i(!1),y(null)):(y({date:p,waterVolumeSum:j?j.waterVolumeSum:0,drinkCount:j?j.drinkCount:0,waterVolumePercentage:j?j.waterVolumePercentage:0}),i(!0));const W=l.current[m];if(W){const $=W.getBoundingClientRect();h({top:$.top+window.scrollY,left:$.left,width:$.width})}},A=()=>{i(!1),y(null)};return d.useEffect(()=>{const m=p=>{o&&Object.values(l.current).every(C=>C&&!C.contains(p.target))&&A()};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[o,u]),e.jsxs("div",{children:[e.jsxs(ge,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(pe,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[e.jsx(E,{onClick:c,children:"<"}),e.jsx("span",{children:k(t,"MMMM")}),M&&e.jsx(ye,{children:k(t,"yyyy").split("-")[0]}),e.jsx(E,{onClick:g,disabled:t>=new Date,children:">"})]})]}),e.jsxs(Me,{children:[P.map(m=>{const p=k(m,"yyyy-MM-dd"),j=T[p],C=j?j.waterVolumePercentage:0,W=j&&j.waterVolumePercentage<100;return e.jsx("div",{children:e.jsxs(we,{children:[e.jsx(De,{ref:$=>l.current[m]=$,onClick:()=>se(m),isHighlighted:W,children:k(m,"d")}),e.jsxs("span",{children:[Math.round(C),"%"]})]})},p)}),o&&u&&e.jsx(ut,{stats:u,position:r,onClose:A,onShow:o})]})]})},te=({initialAmount:s,initialTime:a,isEditing:t,onClose:n,existingRecordId:o})=>{const[i,r]=d.useState(s||0),[h,u]=d.useState(t&&a?ke(a):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),y=O(),M=()=>r(c=>c+50),f=()=>r(c=>c>0?c-50:0),l=c=>{let g=c.target.value;g.startsWith("0")&&g.length>1&&(g=g.substring(1)),r(g)},x=()=>{const g=`${new Date().toISOString().slice(0,10)}T${h}`,P=new Date(g).toISOString(),T={waterVolume:i,date:P};t?y(Pe({_id:o,...T})).unwrap():y(Ve(T)).unwrap(),n()},w=t?"Edit the entered amount of water":"Add water",v=t&&a?q(a):"";return e.jsx(K,{onClose:n,title:w,children:e.jsxs(Se,{children:[t&&e.jsxs(be,{children:[e.jsx(J,{children:e.jsx("use",{href:`${D}#icon-glass`})}),e.jsx(Q,{children:s?`${s} ml`:"No notes yet"}),e.jsx(Z,{children:a?`${v}`:""})]}),e.jsx("h3",{children:t?"Correct entered data:":"Choose a value:"}),e.jsxs(ve,{children:[e.jsx(F,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(N,{onClick:f,children:e.jsx(G,{children:e.jsx("use",{href:`${D}#icon-decrement-outline`})})}),e.jsxs(Te,{children:[e.jsx(Ce,{type:"number",value:i,onChange:l,onBlur:()=>r(c=>c||s||0)}),e.jsx("span",{children:"ml"})]}),e.jsx(N,{onClick:M,children:e.jsx(G,{children:e.jsx("use",{href:`${D}#icon-increment`})})})]})]}),e.jsxs($e,{children:[e.jsx(F,{children:"Recording time:"}),e.jsx(We,{type:"time",value:h,onChange:c=>u(c.target.value),step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(He,{type:"number",value:i,onChange:l,onBlur:()=>r(c=>c||s||"")})]}),e.jsxs(Be,{children:[e.jsxs("span",{children:[i,"ml"]}),e.jsx(Oe,{onClick:x,children:"Save"})]})]})})},B={glass:`${D}#icon-glass`,change:`${D}#icon-change`,delete:`${D}#icon-delete`,add:`${D}#icon-increment`},jt=()=>{const s=O(),[a,t]=d.useState(!1),[n,o]=d.useState(null),[i,r]=d.useState(!1),{dailyWaterList:h}=b(Ie);d.useEffect(()=>{s(_())},[s]);const u=()=>{o(null),t(!0)},y=l=>{o(l),r(!0)},M=l=>{o(l),t(!0)},f=()=>{s(_())};return e.jsxs(Ae,{children:[e.jsx(Le,{children:"Today"}),e.jsxs(Re,{children:[h==null?void 0:h.map(l=>e.jsxs(Ee,{children:[e.jsxs(Fe,{children:[e.jsx(J,{children:e.jsx("use",{href:B.glass})}),e.jsxs(Q,{children:[l.waterVolume," ml"]}),e.jsx(Z,{children:q(l.date)})]}),e.jsxs(Ne,{children:[e.jsx(Ge,{onClick:()=>M(l),children:e.jsx("svg",{children:e.jsx("use",{href:B.change})})}),e.jsx(_e,{onClick:()=>y(l),children:e.jsx("svg",{children:e.jsx("use",{href:B.delete})})})]})]},l._id)),e.jsx("li",{children:e.jsxs(Ye,{onClick:u,children:[e.jsx("svg",{children:e.jsx("use",{href:B.add})}),"Add Water"]})})]}),i&&e.jsx(xt,{onClose:()=>r(!1),recordId:n==null?void 0:n._id}),a&&e.jsx(te,{initialAmount:n==null?void 0:n.waterVolume,initialTime:n==null?void 0:n.date,isEditing:n!==null,existingRecordId:n==null?void 0:n._id,onClose:()=>t(!1),onUpdate:f})]})},ft=()=>{const[s,a]=d.useState(!1),t=b(X),n=()=>({left:`calc(${Math.min(100,Math.max(0,t))}% + 4px)`}),o=()=>({backgroundSize:`${t}%`}),i=t>0&&t<100;return e.jsxs(ze,{children:[e.jsxs(Ue,{children:[e.jsx(Ke,{children:"Today"}),e.jsx(Xe,{type:"range",maxValue:100,minValue:0,value:t,readOnly:!0,style:o(),"aria-label":"Water range"}),e.jsxs(qe,{children:[e.jsx(Je,{children:"0%"}),i&&e.jsx(Qe,{id:"waterMark",style:n(),children:`${t}%`}),e.jsx(Ze,{children:"100%"})]})]}),e.jsxs(et,{onClick:()=>a(!0),children:[e.jsx(tt,{children:e.jsx("use",{href:`${D}#icon-increment-outline`})}),"Add Water"]}),s&&e.jsx(te,{onClose:()=>a(!1)})]})},gt=I(st)`
  background-position: center center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-image: -webkit-image-set(
    url(${at}) 1x,
    url(${nt}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${ot}) 1x,
      url(${rt}) 2x
    );
  }

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${it}) 1x,
      url(${lt}) 2x
    );
  }
`,pt=I.div`
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
`,yt=I.div`
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
`,kt=()=>e.jsx(gt,{children:e.jsxs(pt,{children:[e.jsxs("div",{children:[e.jsx(ht,{}),e.jsx(ft,{})]}),e.jsxs(yt,{children:[e.jsx(jt,{}),e.jsx(mt,{})]})]})});export{kt as default};
