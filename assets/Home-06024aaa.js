import{r as o,j as e,D as P,g as F,h as O,i as G,k as J,l as V,m as w,o as Y,p as D,q as z,t as X,v as T,Y as q,w as _,x as K,y as Q,z as U,A as Z,E as ee,F as W,G as A,J as B,s as M,K as te,M as H,N as se,Q as ne,R as ae,S as oe,U as re,V as ie,X as le,Z as de,_ as ce,$ as he,a0 as ue,a1 as xe,a2 as me,a3 as pe,a4 as je,a5 as ye,a6 as ge,a7 as fe,a8 as Me,a9 as be,aa as Se,ab as we,ac as ve,ad as ke,n as $}from"./index-3e86197b.js";import{S as De}from"./Section-1cbd9f46.js";import{i as $e,a as Ce,b as Te,c as We,d as Ae,e as Be}from"./bubbleTablet@2x-6e22c1d3.js";const He=({userWaterIntake:t})=>{const[l,s]=o.useState(!1),x=()=>{s(!0)},a=()=>{s(!1)};return e.jsxs(P,{children:[e.jsxs(F,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:t||"2.0 L"}),e.jsx("button",{onClick:x,children:"Edit"})]}),l&&e.jsx(O,{onClose:a})]}),e.jsx(G,{})]})},Ne=t=>{const[l,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Ee=({day:t,stats:{norma:l,full:s,servings:x},month:a,position:c,onShow:p})=>{const j=o.useRef(null);return o.useEffect(()=>{if(!j.current)return;const{top:m,left:d,width:f}=c,n=j.current,h=n.offsetWidth;if(window.innerWidth<=320)n.style.width="100%",n.style.left="0",n.style.top=`${m-n.offsetHeight}px`,n.style.transform="translateX(0)";else{const S=d,u=window.innerWidth-d-f;S>h?n.style.left=`${d-h}px`:u>h?n.style.left=`${d+f}px`:(n.style.left="50%",n.style.transform="translateX(-50%)"),n.style.top=`${m-n.offsetHeight}px`}},[c]),e.jsx(J,{ref:j,style:{visibility:p?"visible":"hidden"},children:e.jsxs(V,{children:[e.jsx(w,{children:e.jsxs(Y,{children:[t,", ",Ne(a)]})}),e.jsxs(w,{children:["Daily norma:",e.jsx(D,{children:l})]}),e.jsxs(w,{children:["Fulfillment of the daily norm:",e.jsx(D,{children:s})]}),e.jsxs(w,{children:["How many servings of water:",e.jsx(D,{children:x})]})]})})},N=()=>{const t=new Date,l=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${l}-${s}`},Le=t=>{const[l,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Re=()=>{const[t,l]=o.useState(N()),[s,x]=o.useState([]),[a,c]=o.useState(null),[p,j]=o.useState(!1),[m,d]=o.useState(null),[f,n]=o.useState({top:0,left:0,width:0}),[h,g]=o.useState(!1),S=i=>{const[r,y]=i.split("-").map(Number);return[31,r%4===0&&r%100!==0||r%400===0?29:28,31,30,31,30,31,31,30,31,30,31][y-1]},u=i=>{const r=new Date(t);i==="prev"?r.setMonth(r.getMonth()-1):r.setMonth(r.getMonth()+1);const y=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`;l(y);const b=N();d(y===b?null:i)},L=async i=>{},R=i=>{if(g(!0),a&&a.day===i){c(null);return}const r=k.current[i];if(r){const y=r.getBoundingClientRect();n({top:y.top+window.scrollY,left:y.left,width:y.width}),c({day:i,...s.find(b=>b.day===i)})}};o.useEffect(()=>{const i=r=>{a&&!k.current[a.day].contains(r.target)&&C()};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[a]),o.useEffect(()=>{L()},[t]),o.useEffect(()=>{x([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const I=o.useMemo(()=>[...Array(S(t)).keys()].map(i=>{const r=s.find(y=>y.day===i+1);return{day:i+1,percentage:r?r.percentage:0,isHighlighted:r&&r.percentage<100}}),[s,t]),k=o.useRef({}),C=()=>{g(!1),c(null)};return e.jsxs("div",{children:[e.jsxs(z,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(X,{onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[e.jsx(T,{onClick:()=>u("prev"),active:m==="next",children:"<"}),e.jsx("span",{children:Le(t)}),p&&e.jsx(q,{children:t.split("-")[0]}),e.jsx(T,{onClick:()=>u("next"),active:m==="prev",children:">"})]})]}),a&&e.jsx(Ee,{day:a.day,month:t,stats:a,position:f,onClose:C,onShow:h}),e.jsx(_,{children:I.map(({day:i,percentage:r,isHighlighted:y})=>e.jsx("div",{children:e.jsxs(K,{children:[e.jsx(Q,{ref:b=>k.current[i]=b,onClick:()=>R(i),isHighlighted:y,children:i}),e.jsxs("span",{children:[r,"%"]})," "]})},i))})]})},E=({initialAmount:t,initialTime:l,isEditing:s,onSave:x,onClose:a})=>{const[c,p]=o.useState(t||0),[j,m]=o.useState(l||new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),d=()=>p(u=>u+50),f=()=>p(u=>u>0?u-50:0),n=u=>p(Number(u.target.value)||0),h=u=>m(u.target.value),g=()=>{x({amount:c,time:j})},S=s?"Edit the entered amount of water":"Add water";return e.jsx(U,{onClose:a,title:S,children:e.jsxs(Z,{children:[s&&e.jsxs("div",{children:[e.jsx("h3",{children:"Previous entry:"}),e.jsx("p",{children:t?`${t} ml at ${l}`:"No notes yet"})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(ee,{children:[e.jsx(W,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(A,{onClick:f,children:e.jsx(B,{children:e.jsx("use",{href:`${M}#icon-decrement-outline`})})}),e.jsx("input",{type:"number",value:c,onChange:n,onBlur:()=>p(u=>u||t||0)}),e.jsx(A,{onClick:d,children:e.jsx(B,{children:e.jsx("use",{href:`${M}#icon-increment`})})})]})]}),e.jsxs(te,{children:[e.jsx(W,{children:"Recording time:"}),e.jsx(H,{type:"time",value:j,onChange:h,step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(H,{type:"number",value:c,onChange:n,onBlur:()=>p(u=>u||t||0)})]}),e.jsxs(se,{children:[e.jsxs("span",{children:[c,"ml"]}),e.jsx(ne,{onClick:g,children:"Save"})]})]})})},v={glass:`${M}#icon-glass`,change:`${M}#icon-change`,delete:`${M}#icon-delete`,add:`${M}#icon-increment`},Ie=()=>{const[t,l]=o.useState(!1),[s,x]=o.useState([]),[a,c]=o.useState(null),p=()=>{c(null),l(!0)},j=(n,h)=>{c({...n,index:h}),l(!0)},m=()=>{l(!1)},d=n=>{x(s.filter((h,g)=>g!==n))},f=n=>{x(a!==null?s.map((h,g)=>g===a.index?{...h,...n}:h):[...s,n]),m()};return e.jsxs(ae,{children:[e.jsx(oe,{children:"Today"}),e.jsxs(re,{children:[s.map((n,h)=>e.jsxs(ie,{children:[e.jsxs(le,{children:[e.jsx(de,{children:e.jsx("use",{href:v.glass})}),e.jsxs(ce,{children:[n.amount," ml"]}),e.jsxs(he,{children:[n.time," AM"]})]}),e.jsxs(ue,{children:[e.jsx(xe,{onClick:()=>j(n,h),children:e.jsx("svg",{children:e.jsx("use",{href:v.change})})}),e.jsx(me,{onClick:()=>d(h),children:e.jsx("svg",{children:e.jsx("use",{href:v.delete})})})]})]},h)),e.jsx("li",{children:e.jsxs(pe,{onClick:p,children:[e.jsx("svg",{children:e.jsx("use",{href:v.add})}),"Add Water"]})})]}),t&&e.jsx(E,{initialAmount:a==null?void 0:a.volume,initialTime:a==null?void 0:a.time,isEditing:a!==null,onSave:f,onClose:m})]})},Pe=()=>{const[t,l]=o.useState(!1),[s,x]=o.useState(0),a=()=>{l(!0)},c=()=>{l(!1)};o.useEffect(()=>{const m=document.querySelector("#waterMark");if(m){let d=Number((s-0)*100/100);d=d>=100?100:d,m.style.left=`calc(${d}% + (${8-d*.15}px))`}},[s]);const p=()=>({backgroundSize:`${s}%`}),j=m=>{x(d=>d+m.amount),c()};return e.jsxs(je,{children:[e.jsxs(ye,{children:[e.jsx(ge,{children:"Today"}),e.jsx(fe,{type:"range",maxValue:100,minValue:0,value:s,readOnly:!0,style:p(),"aria-label":"Water range"}),e.jsxs(Me,{children:[e.jsx(be,{children:"0%"}),e.jsx(Se,{id:"waterMark",children:`${s>100?100:s}%`}),e.jsx(we,{children:"100%"})]})]}),e.jsxs(ve,{onClick:a,children:[e.jsx(ke,{children:e.jsx("use",{href:`${M}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(E,{onClose:c,onSave:j})]})},Fe=$(De)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${$e}) 1x,
    url(${Ce}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Te}) 1x,
      url(${We}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Ae}) 1x,
      url(${Be}) 2x
    );
  }
`,Oe=$.div`
  margin-top: 24px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    display: flex;
    flex-direction: row;
  }
`,Ge=$.div`
  padding: 24px 8px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  background: ${t=>t.theme.color.secondaryWhite};
  max-width: 280px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding: 32px 24px;
    max-width: 704px;
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    max-width: 592px;
    flex-direction: row;
  }
`,qe=()=>e.jsx(Fe,{children:e.jsxs(Oe,{children:[e.jsxs("div",{children:[e.jsx(He,{}),e.jsx(Pe,{})]}),e.jsxs(Ge,{children:[e.jsx(Ie,{}),e.jsx(Re,{})]})]})});export{qe as default};
