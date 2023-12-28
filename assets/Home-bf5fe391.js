import{r as o,j as e,D as O,h as P,i as F,k as G,l as J,m as V,o as k,p as Y,q as D,t as z,v as X,w as T,Y as q,x as _,y as K,z as Q,A as U,C as Z,E as ee,F as W,G as A,J as B,s as b,K as te,M as H,N as se,O as ne,Q as ae,R as oe,S as re,U as le,V as ie,X as ce,Z as de,_ as he,$ as ue,a0 as xe,a1 as me,a2 as pe,a3 as je,a4 as ye,a5 as ge,a6 as fe,a7 as be,a8 as Me,a9 as Se,aa as ke,ab as we,ac as ve,n as $}from"./index-f0d3cb0b.js";import{S as De}from"./Section-64522b3c.js";const $e=({userWaterIntake:t})=>{const[i,s]=o.useState(!1),x=()=>{s(!0)},a=()=>{s(!1)};return e.jsxs(O,{children:[e.jsxs(P,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:t||"2.0 L"}),e.jsx("button",{onClick:x,children:"Edit"})]}),i&&e.jsx(F,{onClose:a})]}),e.jsx(G,{})]})},Ce=t=>{const[i,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Te=({day:t,stats:{norma:i,full:s,servings:x},month:a,position:d,onShow:p})=>{const j=o.useRef(null);return o.useEffect(()=>{if(!j.current)return;const{top:m,left:c,width:f}=d,n=j.current,h=n.offsetWidth;if(window.innerWidth<=320)n.style.width="100%",n.style.left="0",n.style.top=`${m-n.offsetHeight}px`,n.style.transform="translateX(0)";else{const S=c,u=window.innerWidth-c-f;S>h?n.style.left=`${c-h}px`:u>h?n.style.left=`${c+f}px`:(n.style.left="50%",n.style.transform="translateX(-50%)"),n.style.top=`${m-n.offsetHeight}px`}},[d]),e.jsx(J,{ref:j,style:{visibility:p?"visible":"hidden"},children:e.jsxs(V,{children:[e.jsx(k,{children:e.jsxs(Y,{children:[t,", ",Ce(a)]})}),e.jsxs(k,{children:["Daily norma:",e.jsx(D,{children:i})]}),e.jsxs(k,{children:["Fulfillment of the daily norm:",e.jsx(D,{children:s})]}),e.jsxs(k,{children:["How many servings of water:",e.jsx(D,{children:x})]})]})})},N=()=>{const t=new Date,i=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${i}-${s}`},We=t=>{const[i,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Ae=()=>{const[t,i]=o.useState(N()),[s,x]=o.useState([]),[a,d]=o.useState(null),[p,j]=o.useState(!1),[m,c]=o.useState(null),[f,n]=o.useState({top:0,left:0,width:0}),[h,g]=o.useState(!1),S=l=>{const[r,y]=l.split("-").map(Number);return[31,r%4===0&&r%100!==0||r%400===0?29:28,31,30,31,30,31,31,30,31,30,31][y-1]},u=l=>{const r=new Date(t);l==="prev"?r.setMonth(r.getMonth()-1):r.setMonth(r.getMonth()+1);const y=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`;i(y);const M=N();c(y===M?null:l)},L=async l=>{},R=l=>{if(g(!0),a&&a.day===l){d(null);return}const r=v.current[l];if(r){const y=r.getBoundingClientRect();n({top:y.top+window.scrollY,left:y.left,width:y.width}),d({day:l,...s.find(M=>M.day===l)})}};o.useEffect(()=>{const l=r=>{a&&!v.current[a.day].contains(r.target)&&C()};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[a]),o.useEffect(()=>{L()},[t]),o.useEffect(()=>{x([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const I=o.useMemo(()=>[...Array(S(t)).keys()].map(l=>{const r=s.find(y=>y.day===l+1);return{day:l+1,percentage:r?r.percentage:0,isHighlighted:r&&r.percentage<100}}),[s,t]),v=o.useRef({}),C=()=>{g(!1),d(null)};return e.jsxs("div",{children:[e.jsxs(z,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(X,{onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[e.jsx(T,{onClick:()=>u("prev"),active:m==="next",children:"<"}),e.jsx("span",{children:We(t)}),p&&e.jsx(q,{children:t.split("-")[0]}),e.jsx(T,{onClick:()=>u("next"),active:m==="prev",children:">"})]})]}),a&&e.jsx(Te,{day:a.day,month:t,stats:a,position:f,onClose:C,onShow:h}),e.jsx(_,{children:I.map(({day:l,percentage:r,isHighlighted:y})=>e.jsx("div",{children:e.jsxs(K,{children:[e.jsx(Q,{ref:M=>v.current[l]=M,onClick:()=>R(l),isHighlighted:y,children:l}),e.jsxs("span",{children:[r,"%"]})," "]})},l))})]})},E=({initialAmount:t,initialTime:i,isEditing:s,onSave:x,onClose:a})=>{const[d,p]=o.useState(t||0),[j,m]=o.useState(i||new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),c=()=>p(u=>u+50),f=()=>p(u=>u>0?u-50:0),n=u=>p(Number(u.target.value)||0),h=u=>m(u.target.value),g=()=>{x({amount:d,time:j})},S=s?"Edit the entered amount of water":"Add water";return e.jsx(U,{onClose:a,title:S,children:e.jsxs(Z,{children:[s&&e.jsxs("div",{children:[e.jsx("h3",{children:"Previous entry:"}),e.jsx("p",{children:t?`${t} ml at ${i}`:"No notes yet"})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(ee,{children:[e.jsx(W,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(A,{onClick:f,children:e.jsx(B,{children:e.jsx("use",{href:`${b}#icon-decrement`})})}),e.jsx("input",{type:"number",value:d,onChange:n,onBlur:()=>p(u=>u||t||0)}),e.jsx(A,{onClick:c,children:e.jsx(B,{children:e.jsx("use",{href:`${b}#icon-increment`})})})]})]}),e.jsxs(te,{children:[e.jsx(W,{children:"Recording time:"}),e.jsx(H,{type:"time",value:j,onChange:h,step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(H,{type:"number",value:d,onChange:n,onBlur:()=>p(u=>u||t||0)})]}),e.jsxs(se,{children:[e.jsxs("span",{children:[d,"ml"]}),e.jsx(ne,{onClick:g,children:"Save"})]})]})})},w={glass:`${b}#icon-glass`,change:`${b}#icon-change`,delete:`${b}#icon-delete`,add:`${b}#icon-increment`},Be=()=>{const[t,i]=o.useState(!1),[s,x]=o.useState([]),[a,d]=o.useState(null),p=()=>{d(null),i(!0)},j=(n,h)=>{d({...n,index:h}),i(!0)},m=()=>{i(!1)},c=n=>{x(s.filter((h,g)=>g!==n))},f=n=>{x(a!==null?s.map((h,g)=>g===a.index?{...h,...n}:h):[...s,n]),m()};return e.jsxs(ae,{children:[e.jsx(oe,{children:"Today"}),e.jsxs(re,{children:[s.map((n,h)=>e.jsxs(le,{children:[e.jsxs(ie,{children:[e.jsx(ce,{children:e.jsx("use",{href:w.glass})}),e.jsxs(de,{children:[n.volume,"250 ml"]}),e.jsxs(he,{children:[n.time," AM"]})]}),e.jsxs(ue,{children:[e.jsx(xe,{onClick:()=>j(n,h),children:e.jsx("svg",{children:e.jsx("use",{href:w.change})})}),e.jsx(me,{onClick:()=>c(h),children:e.jsx("svg",{children:e.jsx("use",{href:w.delete})})})]})]},h)),e.jsx("li",{children:e.jsxs(pe,{onClick:p,children:[e.jsx("svg",{children:e.jsx("use",{href:w.add})}),"Add Water"]})})]}),t&&e.jsx(E,{initialAmount:a==null?void 0:a.volume,initialTime:a==null?void 0:a.time,isEditing:a!==null,onSave:f,onClose:m})]})},He=()=>{const[t,i]=o.useState(!1),[s,x]=o.useState(0),a=()=>{i(!0)},d=()=>{i(!1)};o.useEffect(()=>{const m=document.querySelector("#waterMark");if(m){let c=Number((s-0)*100/100);c=c>=100?100:c,m.style.left=`calc(${c}% + (${8-c*.15}px))`}},[s]);const p=()=>({backgroundSize:`${s}%`}),j=m=>{x(c=>c+m.amount),d()};return e.jsxs(je,{children:[e.jsxs(ye,{children:[e.jsx(ge,{children:"Today"}),e.jsx(fe,{type:"range",maxValue:100,minValue:0,value:s,readOnly:!0,style:p(),"aria-label":"Water range"}),e.jsxs(be,{children:[e.jsx(Me,{children:"0%"}),e.jsx(Se,{id:"waterMark",children:`${s>100?100:s}%`}),e.jsx(ke,{children:"100%"})]})]}),e.jsxs(we,{onClick:a,children:[e.jsx(ve,{children:e.jsx("use",{href:`${b}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(E,{onClose:d,onSave:j})]})},Ne="/water-tracker/assets/bubbleDesk-36f8cd6f.png",Ee="/water-tracker/assets/bubbleDesk@2x-63f6b35a.png",Le="/water-tracker/assets/bubbleMob-2c86dba1.png",Re="/water-tracker/assets/bubbleMob@2x-9fa7a71c.png",Ie="/water-tracker/assets/bubbleTablet-200f6c87.png",Oe="/water-tracker/assets/bubbleTablet@2x-2fca3f11.png",Pe=$(De)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${Le}) 1x,
    url(${Re}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Ie}) 1x,
      url(${Oe}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Ne}) 1x,
      url(${Ee}) 2x
    );
  }
`,Fe=$.div`
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
`,Xe=()=>e.jsx(Pe,{children:e.jsxs(Fe,{children:[e.jsxs("div",{children:[e.jsx($e,{}),e.jsx(He,{})]}),e.jsxs(Ge,{children:[e.jsx(Be,{}),e.jsx(Ae,{})]})]})});export{Xe as default};
