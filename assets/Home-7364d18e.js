import{r as o,j as e,D as F,h as G,i as J,k as Y,l as V,m as z,o as M,p as q,q as A,t as X,v as K,w as R,Y as Q,x as U,y as Z,z as _,A as ee,C as se,E as te,F as ne,G as w,J as k,K as S,M as v,N as D,O as $,Q as T,R as C,S as ae,s as y,U as re,V as oe,X as le,Z as ie,_ as ce,$ as de,a0 as he,a1 as xe,a2 as ue,a3 as je,n as B}from"./index-4b09f721.js";import{S as me}from"./Section-66e653b1.js";const ge=({userWaterIntake:s})=>{const[l,a]=o.useState(!1),h=()=>{a(!0)},r=()=>{a(!1)};return e.jsxs(F,{children:[e.jsxs(G,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:s||"2.0 L"}),e.jsx("button",{onClick:h,children:"Edit"})]}),l&&e.jsx(J,{onClose:r})]}),e.jsx(Y,{})]})},pe=s=>{const[l,a]=s.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][a-1]},fe=({day:s,stats:{norma:l,full:a,servings:h},month:r,position:u})=>{const j=o.useRef(null);return o.useEffect(()=>{if(!j.current)return;const{top:x,left:m,width:p}=u,i=j.current,f=i.offsetWidth;if(window.innerWidth<=320)i.style.width="100%",i.style.left="0",i.style.top=`${x}px`,i.style.transform="none";else{const b=m,W=window.innerWidth-m-p;b>f?i.style.left=`${m-f}px`:W>f?i.style.left=`${m+p}px`:(i.style.left="50%",i.style.transform="translateX(-50%)",i.style.width=""),i.style.top=`${x-i.offsetHeight}px`}},[u]),e.jsx(V,{ref:j,children:e.jsxs(z,{children:[e.jsx(M,{children:e.jsxs(q,{children:[s,", ",pe(r)]})}),e.jsxs(M,{children:["Daily norma:",e.jsx(A,{children:l})]}),e.jsxs(M,{children:["Fulfillment of the daily norm:",e.jsx(A,{children:a})]}),e.jsxs(M,{children:["How many servings of water:",e.jsx(A,{children:h})]})]})})},L=()=>{const s=new Date,l=s.getFullYear(),a=String(s.getMonth()+1).padStart(2,"0");return`${l}-${a}`},ye=s=>{const[l,a]=s.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][a-1]},be=()=>{const[s,l]=o.useState(L()),[a,h]=o.useState([]),[r,u]=o.useState(null),[j,x]=o.useState(!1),[m,p]=o.useState(null),[i,f]=o.useState({top:0,left:0,width:0}),E=n=>{const[t,d]=n.split("-").map(Number);return[31,t%4===0&&t%100!==0||t%400===0?29:28,31,30,31,30,31,31,30,31,30,31][d-1]},b=n=>{const t=new Date(s);n==="prev"?t.setMonth(t.getMonth()-1):t.setMonth(t.getMonth()+1);const d=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`;l(d);const g=L();p(d===g?null:n)},W=async n=>{},P=n=>{if(r&&r.day===n){u(null);return}const t=H.current[n];if(t){const d=t.getBoundingClientRect();f({top:d.top+window.scrollY,left:d.left,width:d.width}),u({day:n,...a.find(g=>g.day===n)})}};o.useEffect(()=>{const n=t=>{r&&!H.current[r.day].contains(t.target)&&N()};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[r]),o.useEffect(()=>{W()},[s]),o.useEffect(()=>{h([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const I=o.useMemo(()=>[...Array(E(s)).keys()].map(n=>{const t=a.find(d=>d.day===n+1);return{day:n+1,percentage:t?t.percentage:0,isHighlighted:t&&t.percentage<100}}),[a,s]),H=o.useRef({}),N=()=>{u(null)};return e.jsxs("div",{children:[e.jsxs(X,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(K,{onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[e.jsx(R,{onClick:()=>b("prev"),active:m==="next",children:"<"}),e.jsx("span",{children:ye(s)}),j&&e.jsx(Q,{children:s.split("-")[0]}),e.jsx(R,{onClick:()=>b("next"),active:m==="prev",children:">"})]})]}),r&&e.jsx(fe,{day:r.day,month:s,stats:r,position:i,onClose:N}),e.jsx(U,{children:I.map(({day:n,percentage:t,isHighlighted:d})=>e.jsx("div",{children:e.jsxs(Z,{children:[e.jsx(_,{ref:g=>H.current[n]=g,onClick:()=>P(n),isHighlighted:d,children:n}),e.jsxs("span",{children:[t,"%"]})," "]})},n))})]})},O=({onClose:s})=>e.jsx(ee,{onClose:s,title:"Add water",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Edit the entered amount of water"}),e.jsx("button",{children:"Save"})]})}),c={glass:`${y}#icon-glass`,change:`${y}#icon-change`,delete:`${y}#icon-delete`,add:`${y}#icon-increment`},Me=()=>{const[s,l]=o.useState(!1),a=()=>{l(!0)},h=()=>{l(!1)};return e.jsxs(se,{children:[e.jsx(te,{children:"Today"}),e.jsxs(ne,{children:[e.jsxs(w,{children:[e.jsxs(k,{children:[e.jsx(S,{children:e.jsx("use",{href:c.glass})}),e.jsx(v,{children:"250 ml"}),e.jsx(D,{children:"7:00 AM"})]}),e.jsxs($,{children:[e.jsx(T,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(C,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsxs(w,{children:[e.jsxs(k,{children:[e.jsx(S,{children:e.jsx("use",{href:c.glass})}),e.jsx(v,{children:"220 ml"}),e.jsx(D,{children:"11:00 AM"})]}),e.jsxs($,{children:[e.jsx(T,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(C,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsxs(w,{children:[e.jsxs(k,{children:[e.jsx(S,{children:e.jsx("use",{href:c.glass})}),e.jsx(v,{children:"200 ml"}),e.jsx(D,{children:"14:00 PM"})]}),e.jsxs($,{children:[e.jsx(T,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(C,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsxs(w,{children:[e.jsxs(k,{children:[e.jsx(S,{children:e.jsx("use",{href:c.glass})}),e.jsx(v,{children:"200 ml"}),e.jsx(D,{children:"14:00 PM"})]}),e.jsxs($,{children:[e.jsx(T,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(C,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsx("li",{children:e.jsxs(ae,{onClick:a,children:[e.jsx("svg",{children:e.jsx("use",{href:c.add})}),"Add Water"]})})]}),s&&e.jsx(O,{onClose:h})]})},we=()=>{const[s,l]=o.useState(!1),a=()=>{l(!0)},h=()=>{l(!1)},r=60;o.useEffect(()=>{const j=document.querySelector("#waterMark");if(j){let x=Number((r-0)*100/100);x=x>=100?100:x,j.style.left=`calc(${x}% + (${8-x*.15}px))`}},[r]);const u=()=>({backgroundSize:`${r}%`});return e.jsxs(re,{children:[e.jsxs(oe,{children:[e.jsx(le,{children:"Today"}),e.jsx(ie,{type:"range",maxValue:100,minValue:0,value:r,readOnly:!0,style:u(),"aria-label":"Water range"}),e.jsxs(ce,{children:[e.jsx(de,{children:"0%"}),e.jsx(he,{id:"waterMark",children:`${r}%`}),e.jsx(xe,{children:"100%"})]})]}),e.jsxs(ue,{onClick:a,children:[e.jsx(je,{children:e.jsx("use",{href:`${y}#icon-increment-outline`})})," Add Water"]}),s&&e.jsx(O,{onClose:h})]})},ke="/water-tracker/assets/bubbleDesk-36f8cd6f.png",Se="/water-tracker/assets/bubbleDesk@2x-63f6b35a.png",ve="/water-tracker/assets/bubbleMob-2c86dba1.png",De="/water-tracker/assets/bubbleMob@2x-9fa7a71c.png",$e="/water-tracker/assets/bubbleTablet-200f6c87.png",Te="/water-tracker/assets/bubbleTablet@2x-2fca3f11.png",Ce=B(me)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${ve}) 1x,
    url(${De}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${$e}) 1x,
      url(${Te}) 2x
    );
  }

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${ke}) 1x,
      url(${Se}) 2x
    );
  }
`,We=B.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    display: flex;
    flex-direction: row;
  }
`,He=B.div`
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
`,Re=()=>e.jsx(Ce,{children:e.jsxs(We,{children:[e.jsxs("div",{children:[e.jsx(ge,{}),e.jsx(we,{})]}),e.jsxs(He,{children:[e.jsx(Me,{}),e.jsx(be,{})]})]})});export{Re as default};
