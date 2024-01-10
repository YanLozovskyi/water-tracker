import{t as v,l as N,m as C,o as Q,r as c,j as e,D as de,p as ce,q as ie,v as he,w as ue,x as xe,y as me,z as L,A as fe,E as A,g as I,F as Z,G as ee,J as ge,K as je,M as pe,N as Y,Q as te,R as ye,S as Me,U as se,V as M,X as we,Y as De,Z as Se,_,$ as ke,a0 as be,a1 as ve,a2 as Ce,a3 as F,a4 as He,a5 as $e,a6 as ne,s as b,a7 as ae,a8 as oe,a9 as Te,aa as G,ab as z,ac as U,ad as We,ae as Be,af as Oe,ag as Pe,ah as Le,ai as Ve,aj as Ie,ak as Ae,al as Fe,am as Re,an as K,ao as Ee,ap as Ne,aq as Ye,ar as _e,as as Ge,at as ze,au as Ue,av as Ke,aw as Xe,ax as qe,ay as Je,az as Qe,aA as Ze,aB as et,aC as tt,aD as st,aE as nt,aF as at,aG as ot,n as R}from"./index-b7ab0191.js";import{S as rt}from"./Section-e3ba8a98.js";import{i as lt,a as dt,b as ct,c as it,d as ht,e as ut}from"./bubbleTablet@2x-6c947164.js";function re(s,n){const t=v(s);if(isNaN(n))return N(s,NaN);if(!n)return t;const a=t.getDate(),o=N(s,t.getTime());o.setMonth(t.getMonth()+n+1,0);const d=o.getDate();return a>=d?o:(t.setFullYear(o.getFullYear(),o.getMonth(),a),t)}function X(s){const n=v(s),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function xt(s,n){const t=v(s.start),a=v(s.end);let o=+t>+a;const d=o?+t:+a,r=o?a:t;r.setHours(0,0,0,0);let l=(n==null?void 0:n.step)??1;if(!l)return[];l<0&&(l=-l,o=!o);const f=[];for(;+r<=d;)f.push(v(r)),r.setDate(r.getDate()+l),r.setHours(0,0,0,0);return o?f.reverse():f}function q(s){const n=v(s);return n.setDate(1),n.setHours(0,0,0,0),n}function J(s,n){const t=v(s),a=v(n);return t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth()}function mt(s,n){return re(s,-n)}const ft=()=>{const{waterRate:s}=C(Q),[n,t]=c.useState(!1),a=()=>{t(!0)},o=()=>{t(!1)},d=(s/1e3).toFixed(1)+" L";return e.jsxs(de,{children:[e.jsxs(ce,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:d}),e.jsx("button",{onClick:a,children:"Edit"})]}),e.jsx(ie,{onClose:o,onShow:n})]}),e.jsx(he,{})]})},gt=({stats:s,position:n,onShow:t})=>{const{date:a,drinkCount:o,waterVolumePercentage:d}=s,r=c.useRef(null),{waterRate:l}=C(Q);c.useEffect(()=>{if(!r.current)return;const{top:m,left:g,width:x}=n,u=r.current,D=u.offsetWidth;if(window.innerWidth<=320)u.style.width="80%",u.style.left="50%",u.style.top=`${m-u.offsetHeight}px`,u.style.transform="translateX(0)";else{const H=g,$=window.innerWidth-g-x;H>D?u.style.left=`${g-D}px`:$>D?u.style.left=`${g+x}px`:(u.style.left="50%",u.style.transform="translateX(-50%)"),u.style.top=`${m-u.offsetHeight}px`}},[n]);const f=(l/1e3).toFixed(1)+" L",w=a?ue(a,"d, MMMM"):"";return e.jsx(xe,{ref:r,style:{visibility:t?"visible":"hidden"},children:e.jsxs(me,{children:[e.jsx(L,{children:e.jsx(fe,{children:w})}),e.jsxs(L,{children:["Daily norma:",e.jsx(A,{children:f})]}),e.jsxs(L,{children:["Fulfillment of the daily norm:",e.jsxs(A,{children:[Math.round(d),"%"]})]}),e.jsxs(L,{children:["How many servings of water:",e.jsx(A,{children:o})]})]})})},jt=({onClose:s,onShow:n,recordId:t})=>{const a=I(),{isLoading:o}=C(Z),d="32px 24px",r=()=>{a(ye(t)).then(l=>{l.error||s()})};return e.jsx(ee,{onClose:s,onShow:n,stylesPadding:d,title:"Delete Entry",children:e.jsxs(ge,{children:[e.jsx(je,{children:"Are you sure you want to delete the entry?"}),e.jsxs(pe,{children:[e.jsxs(Y,{onClick:r,children:["Delete ",o&&e.jsx(te,{})]}),e.jsx(Y,{onClick:s,children:"Cancel"})]})]})})},pt=()=>{const s=I(),n=C(Me),[t,a]=c.useState(new Date),[o,d]=c.useState(null),[r,l]=c.useState(!1),[f,w]=c.useState({top:0,left:0,width:0}),[m,g]=c.useState(null),[x,u]=c.useState(!1),D=c.useRef({}),B=C(se),H=M(q(t),"yyyy-MM-dd"),$=M(X(t),"yyyy-MM-dd");c.useEffect(()=>{s(we({startDate:H,endDate:$}))},[s,$,B,H]);const i=()=>{const h=mt(t,1);a(h),J(h,new Date)?d(null):d("prev")},y=()=>{if(t<new Date){const h=re(t,1);a(h),J(h,new Date)?d(null):d("next")}},k=xt({start:q(t),end:X(t)}),S=n.reduce((h,p)=>(h[p.date]=p,h),{}),O=h=>{const p=M(h,"yyyy-MM-dd"),j=S[p];(m==null?void 0:m.date)===p&&r?(l(!1),g(null)):(g({date:p,waterVolumeSum:j?j.waterVolumeSum:0,drinkCount:j?j.drinkCount:0,waterVolumePercentage:j?j.waterVolumePercentage:0}),l(!0));const P=D.current[h];if(P){const W=P.getBoundingClientRect();w({top:W.top+window.scrollY,left:W.left,width:W.width})}},E=()=>{l(!1),g(null)};return c.useEffect(()=>{const h=p=>{r&&Object.values(D.current).every(T=>T&&!T.contains(p.target))&&E()};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[r,m]),e.jsxs("div",{children:[e.jsxs(De,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(Se,{onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[e.jsx(_,{onClick:i,active:o==="next",children:"<"}),e.jsx("span",{children:M(t,"MMMM")}),x&&e.jsx(ke,{children:M(t,"yyyy").split("-")[0]}),e.jsx(_,{onClick:y,disabled:t>=new Date,active:o==="prev",children:">"})]})]}),e.jsxs(be,{children:[k.map(h=>{const p=M(h,"yyyy-MM-dd"),j=S[p],T=j?j.waterVolumePercentage:0,P=j&&j.waterVolumePercentage<100;return e.jsx("div",{children:e.jsxs(ve,{children:[e.jsx(Ce,{ref:W=>D.current[h]=W,onClick:()=>O(h),isHighlighted:P,children:M(h,"d")}),e.jsxs("span",{children:[Math.round(T),"%"]})]})},p)}),r&&m&&e.jsx(gt,{stats:m,position:f,onClose:E,onShow:r})]})]})},le=({initialAmount:s,initialTime:n,isEditing:t,onClose:a,onShow:o,existingRecordId:d})=>{const[r,l]=c.useState(s||0),[f,w]=c.useState(t&&n?M(new Date(n),"HH:mm"):M(new Date,"HH:mm")),m=I(),{isLoading:g}=C(Z),x=()=>{l(i=>i+50)},u=()=>l(i=>i>0?i-50:0),D=i=>{let y=i.target.value;y.startsWith("0")&&y.length>1&&(y=parseFloat(y.substring(1))),l(parseFloat(y))};c.useEffect(()=>{t?(console.log("here"),console.log(n),l(s||0),w(F(n,"HH:mm"))):(l(0),w(M(new Date,"HH:mm")))},[t,s,n]);const B=()=>{let i;if(t)i=n?new Date(n).toISOString().slice(0,16):new Date().toISOString();else{i=new Date().toISOString().slice(0,16);const k=new Date(i),S=new Date(k);S.setHours(k.getHours()+2);const O=S.getFullYear()+"-"+("0"+(S.getMonth()+1)).slice(-2)+"-"+("0"+S.getDate()).slice(-2)+"T"+("0"+S.getHours()).slice(-2)+":"+("0"+S.getMinutes()).slice(-2);console.log("Исходная дата:",i),console.log("Новая дата:",O),i=O}const y={waterVolume:r,date:i};t?m(Ae({_id:d,...y})).then(k=>{k.error||a()}):m(Fe(y)).then(k=>{k.error||(a(),l(0))})},H=t?"Edit the entered amount of water":"Add water",$=t&&n?F(n):"";return console.log("time",f),e.jsx(ee,{onClose:a,onShow:o,title:H,children:e.jsxs(He,{children:[t&&e.jsxs($e,{children:[e.jsx(ne,{children:e.jsx("use",{href:`${b}#icon-glass`})}),e.jsx(ae,{children:s?`${s} ml`:"No notes yet"}),e.jsx(oe,{children:n?`${$}`:""})]}),e.jsx("h3",{children:t?"Correct entered data:":"Choose a value:"}),e.jsxs(Te,{children:[e.jsx(G,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(z,{onClick:u,children:e.jsx(U,{children:e.jsx("use",{href:`${b}#icon-decrement-outline`})})}),e.jsx(We,{children:e.jsxs(Be,{children:[r," ml"]})}),e.jsx(z,{onClick:x,children:e.jsx(U,{children:e.jsx("use",{href:`${b}#icon-increment`})})})]})]}),e.jsxs(Oe,{children:[e.jsx(G,{children:"Recording time:"}),e.jsx(Pe,{type:"time",value:f,onChange:i=>w(i.target.value),step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(Le,{type:"number",value:r,onChange:D,onBlur:()=>l(i=>i||s||0)})]}),e.jsxs(Ve,{children:[e.jsxs("span",{children:[r,"ml"]}),e.jsxs(Ie,{onClick:B,children:["Save ",g&&e.jsx(te,{})]})]})]})})},V={glass:`${b}#icon-glass`,change:`${b}#icon-change`,delete:`${b}#icon-delete`,add:`${b}#icon-increment`},yt=()=>{const s=I(),[n,t]=c.useState(!1),[a,o]=c.useState(null),[d,r]=c.useState(!1),{dailyWaterList:l}=C(Re);c.useEffect(()=>{s(K())},[s]);const f=()=>{o(null),t(!0)},w=x=>{o(x),r(!0)},m=x=>{o(x),t(!0)},g=()=>{s(K())};return e.jsxs(Ee,{children:[e.jsx(Ne,{children:"Today"}),e.jsx(Ye,{children:l==null?void 0:l.map(x=>e.jsxs(_e,{children:[e.jsxs(Ge,{children:[e.jsx(ne,{children:e.jsx("use",{href:V.glass})}),e.jsxs(ae,{children:[x.waterVolume," ml"]}),e.jsx(oe,{children:F(x.date)})]}),e.jsxs(ze,{children:[e.jsx(Ue,{onClick:()=>m(x),children:e.jsx("svg",{children:e.jsx("use",{href:V.change})})}),e.jsx(Ke,{onClick:()=>w(x),children:e.jsx("svg",{children:e.jsx("use",{href:V.delete})})})]})]},x._id))}),e.jsxs(Xe,{onClick:f,children:[e.jsx("svg",{children:e.jsx("use",{href:V.add})}),"Add Water"]}),e.jsx(jt,{onClose:()=>r(!1),onShow:d,recordId:a==null?void 0:a._id}),e.jsx(le,{initialAmount:a==null?void 0:a.waterVolume,initialTime:a==null?void 0:a.date,isEditing:a!==null,existingRecordId:a==null?void 0:a._id,onClose:()=>t(!1),onShow:n,onUpdate:g})]})},Mt=()=>{const[s,n]=c.useState(!1),t=C(se),a=()=>({left:`calc(${Math.min(100,Math.max(0,t))}% + 4px)`}),o=()=>({backgroundSize:`${t}%`}),d=t>0&&t<100;return e.jsxs(qe,{children:[e.jsxs(Je,{children:[e.jsx(Qe,{children:"Today"}),e.jsx(Ze,{type:"range",maxValue:100,minValue:0,value:t,readOnly:!0,style:o(),"aria-label":"Water range"}),e.jsxs(et,{children:[e.jsx(tt,{children:"0%"}),d&&e.jsx(st,{id:"waterMark",style:a(),children:`${t}%`}),e.jsx(nt,{children:"100%"})]})]}),e.jsxs(at,{onClick:()=>n(!0),children:[e.jsx(ot,{children:e.jsx("use",{href:`${b}#icon-increment-outline`})}),"Add Water"]}),e.jsx(le,{onClose:()=>n(!1),onShow:s})]})},wt=R(rt)`
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
      url(${ct}) 1x,
      url(${it}) 2x
    );
  }

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${ht}) 1x,
      url(${ut}) 2x
    );
  }
`,Dt=R.div`
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
`,St=R.div`
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
