import{g as F,h as P,r as o,j as e,D as O,i as G,k as J,l as V,m as Y,o as z,p as w,q as X,t as D,v as q,w as U,x as T,Y as _,y as K,z as Q,A as Z,E as ee,F as te,G as se,J as W,K as A,M as B,s as M,N as ne,Q as H,R as ae,S as oe,U as re,V as ie,X as le,Z as de,_ as ce,$ as he,a0 as ue,a1 as xe,a2 as me,a3 as pe,a4 as je,a5 as ye,a6 as ge,a7 as fe,a8 as Me,a9 as be,aa as Se,ab as we,ac as ve,ad as ke,ae as De,af as $e,n as $}from"./index-74abdfda.js";import{S as Ce}from"./Section-ba165e2a.js";import{i as Te,a as We,b as Ae,c as Be,d as He,e as Ne}from"./bubbleTablet@2x-6e22c1d3.js";const Re=()=>{const{waterRate:t}=F(P),[l,s]=o.useState(!1),x=()=>{s(!0)},a=()=>{s(!1)},d=(t/1e3).toFixed(1)+" L";return e.jsxs(O,{children:[e.jsxs(G,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:d}),e.jsx("button",{onClick:x,children:"Edit"})]}),l&&e.jsx(J,{onClose:a})]}),e.jsx(V,{})]})},Ee=t=>{const[l,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Le=({day:t,stats:{norma:l,full:s,servings:x},month:a,position:d,onShow:p})=>{const j=o.useRef(null);return o.useEffect(()=>{if(!j.current)return;const{top:m,left:c,width:f}=d,n=j.current,h=n.offsetWidth;if(window.innerWidth<=320)n.style.width="100%",n.style.left="0",n.style.top=`${m-n.offsetHeight}px`,n.style.transform="translateX(0)";else{const S=c,u=window.innerWidth-c-f;S>h?n.style.left=`${c-h}px`:u>h?n.style.left=`${c+f}px`:(n.style.left="50%",n.style.transform="translateX(-50%)"),n.style.top=`${m-n.offsetHeight}px`}},[d]),e.jsx(Y,{ref:j,style:{visibility:p?"visible":"hidden"},children:e.jsxs(z,{children:[e.jsx(w,{children:e.jsxs(X,{children:[t,", ",Ee(a)]})}),e.jsxs(w,{children:["Daily norma:",e.jsx(D,{children:l})]}),e.jsxs(w,{children:["Fulfillment of the daily norm:",e.jsx(D,{children:s})]}),e.jsxs(w,{children:["How many servings of water:",e.jsx(D,{children:x})]})]})})},N=()=>{const t=new Date,l=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${l}-${s}`},Ie=t=>{const[l,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Fe=()=>{const[t,l]=o.useState(N()),[s,x]=o.useState([]),[a,d]=o.useState(null),[p,j]=o.useState(!1),[m,c]=o.useState(null),[f,n]=o.useState({top:0,left:0,width:0}),[h,g]=o.useState(!1),S=i=>{const[r,y]=i.split("-").map(Number);return[31,r%4===0&&r%100!==0||r%400===0?29:28,31,30,31,30,31,31,30,31,30,31][y-1]},u=i=>{const r=new Date(t);i==="prev"?r.setMonth(r.getMonth()-1):r.setMonth(r.getMonth()+1);const y=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`;l(y);const b=N();c(y===b?null:i)},E=async i=>{},L=i=>{if(g(!0),a&&a.day===i){d(null);return}const r=k.current[i];if(r){const y=r.getBoundingClientRect();n({top:y.top+window.scrollY,left:y.left,width:y.width}),d({day:i,...s.find(b=>b.day===i)})}};o.useEffect(()=>{const i=r=>{a&&!k.current[a.day].contains(r.target)&&C()};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[a]),o.useEffect(()=>{E()},[t]),o.useEffect(()=>{x([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const I=o.useMemo(()=>[...Array(S(t)).keys()].map(i=>{const r=s.find(y=>y.day===i+1);return{day:i+1,percentage:r?r.percentage:0,isHighlighted:r&&r.percentage<100}}),[s,t]),k=o.useRef({}),C=()=>{g(!1),d(null)};return e.jsxs("div",{children:[e.jsxs(q,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(U,{onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[e.jsx(T,{onClick:()=>u("prev"),active:m==="next",children:"<"}),e.jsx("span",{children:Ie(t)}),p&&e.jsx(_,{children:t.split("-")[0]}),e.jsx(T,{onClick:()=>u("next"),active:m==="prev",children:">"})]})]}),a&&e.jsx(Le,{day:a.day,month:t,stats:a,position:f,onClose:C,onShow:h}),e.jsx(K,{children:I.map(({day:i,percentage:r,isHighlighted:y})=>e.jsx("div",{children:e.jsxs(Q,{children:[e.jsx(Z,{ref:b=>k.current[i]=b,onClick:()=>L(i),isHighlighted:y,children:i}),e.jsxs("span",{children:[r,"%"]})," "]})},i))})]})},R=({initialAmount:t,initialTime:l,isEditing:s,onSave:x,onClose:a})=>{const[d,p]=o.useState(t||0),[j,m]=o.useState(l||new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),c=()=>p(u=>u+50),f=()=>p(u=>u>0?u-50:0),n=u=>p(Number(u.target.value)||0),h=u=>m(u.target.value),g=()=>{x({amount:d,time:j})},S=s?"Edit the entered amount of water":"Add water";return e.jsx(ee,{onClose:a,title:S,children:e.jsxs(te,{children:[s&&e.jsxs("div",{children:[e.jsx("h3",{children:"Previous entry:"}),e.jsx("p",{children:t?`${t} ml at ${l}`:"No notes yet"})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(se,{children:[e.jsx(W,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(A,{onClick:f,children:e.jsx(B,{children:e.jsx("use",{href:`${M}#icon-decrement-outline`})})}),e.jsx("input",{type:"number",value:d,onChange:n,onBlur:()=>p(u=>u||t||0)}),e.jsx(A,{onClick:c,children:e.jsx(B,{children:e.jsx("use",{href:`${M}#icon-increment`})})})]})]}),e.jsxs(ne,{children:[e.jsx(W,{children:"Recording time:"}),e.jsx(H,{type:"time",value:j,onChange:h,step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(H,{type:"number",value:d,onChange:n,onBlur:()=>p(u=>u||t||0)})]}),e.jsxs(ae,{children:[e.jsxs("span",{children:[d,"ml"]}),e.jsx(oe,{onClick:g,children:"Save"})]})]})})},v={glass:`${M}#icon-glass`,change:`${M}#icon-change`,delete:`${M}#icon-delete`,add:`${M}#icon-increment`},Pe=()=>{const[t,l]=o.useState(!1),[s,x]=o.useState([]),[a,d]=o.useState(null),p=()=>{d(null),l(!0)},j=(n,h)=>{d({...n,index:h}),l(!0)},m=()=>{l(!1)},c=n=>{x(s.filter((h,g)=>g!==n))},f=n=>{x(a!==null?s.map((h,g)=>g===a.index?{...h,...n}:h):[...s,n]),m()};return e.jsxs(re,{children:[e.jsx(ie,{children:"Today"}),e.jsxs(le,{children:[s.map((n,h)=>e.jsxs(de,{children:[e.jsxs(ce,{children:[e.jsx(he,{children:e.jsx("use",{href:v.glass})}),e.jsxs(ue,{children:[n.amount," ml"]}),e.jsxs(xe,{children:[n.time," AM"]})]}),e.jsxs(me,{children:[e.jsx(pe,{onClick:()=>j(n,h),children:e.jsx("svg",{children:e.jsx("use",{href:v.change})})}),e.jsx(je,{onClick:()=>c(h),children:e.jsx("svg",{children:e.jsx("use",{href:v.delete})})})]})]},h)),e.jsx("li",{children:e.jsxs(ye,{onClick:p,children:[e.jsx("svg",{children:e.jsx("use",{href:v.add})}),"Add Water"]})})]}),t&&e.jsx(R,{initialAmount:a==null?void 0:a.volume,initialTime:a==null?void 0:a.time,isEditing:a!==null,onSave:f,onClose:m})]})},Oe=()=>{const[t,l]=o.useState(!1),[s,x]=o.useState(0),a=()=>{l(!0)},d=()=>{l(!1)};o.useEffect(()=>{const m=document.querySelector("#waterMark");if(m){let c=Number((s-0)*100/100);c=c>=100?100:c,m.style.left=`calc(${c}% + (${8-c*.15}px))`}},[s]);const p=()=>({backgroundSize:`${s}%`}),j=m=>{x(c=>c+m.amount),d()};return e.jsxs(ge,{children:[e.jsxs(fe,{children:[e.jsx(Me,{children:"Today"}),e.jsx(be,{type:"range",maxValue:100,minValue:0,value:s,readOnly:!0,style:p(),"aria-label":"Water range"}),e.jsxs(Se,{children:[e.jsx(we,{children:"0%"}),e.jsx(ve,{id:"waterMark",children:`${s>100?100:s}%`}),e.jsx(ke,{children:"100%"})]})]}),e.jsxs(De,{onClick:a,children:[e.jsx($e,{children:e.jsx("use",{href:`${M}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(R,{onClose:d,onSave:j})]})},Ge=$(Ce)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${Te}) 1x,
    url(${We}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Ae}) 1x,
      url(${Be}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${He}) 1x,
      url(${Ne}) 2x
    );
  }
`,Je=$.div`
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
`,Ve=$.div`
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
`,_e=()=>e.jsx(Ge,{children:e.jsxs(Je,{children:[e.jsxs("div",{children:[e.jsx(Re,{}),e.jsx(Oe,{})]}),e.jsxs(Ve,{children:[e.jsx(Pe,{}),e.jsx(Fe,{})]})]})});export{_e as default};
