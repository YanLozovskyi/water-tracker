import{r as c,j as e,D as v,h as $,i as H,k as N,l as C,m as W,o as u,p as A,q as m,t as B,v as L,w as T,x as j,Y as E,y as F,z as O,A as R,C as G,E as I,F as J,G as P,J as Y,M as z,K as V,N as q,R as K,O as Q,Q as U,s as X,n as f}from"./index-80aa13f7.js";import{S as Z}from"./Section-2cb2e27f.js";const _=({userWaterIntake:t})=>{const[o,s]=c.useState(!1),l=()=>{s(!0)},r=()=>{s(!1)};return e.jsxs(v,{children:[e.jsxs($,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:t||"2.0 L"}),e.jsx("button",{onClick:l,children:"Edit"})]}),o&&e.jsx(H,{onClose:r})]}),e.jsx(N,{})]})},ee=t=>{const[o,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},te=({day:t,stats:{norma:o,full:s,servings:l},month:r})=>e.jsx(C,{children:e.jsxs(W,{children:[e.jsx(u,{children:e.jsxs(A,{children:[t,", ",ee(r)]})}),e.jsxs(u,{children:["Daily norma:",e.jsx(m,{children:o})]}),e.jsxs(u,{children:["Fulfillment of the daily norm:",e.jsx(m,{children:s})]}),e.jsxs(u,{children:["How many servings of water:",e.jsx(m,{children:l})]})]})}),M=()=>{const t=new Date,o=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${o}-${s}`},ae=t=>{const[o,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},se=()=>{const[t,o]=c.useState(M()),[s,l]=c.useState([]),[r,x]=c.useState(null),[h,d]=c.useState(!1),[y,p]=c.useState(null),k=n=>{const[a,i]=n.split("-").map(Number);return[31,a%4===0&&a%100!==0||a%400===0?29:28,31,30,31,30,31,31,30,31,30,31][i-1]},b=n=>{const a=new Date(t);n==="prev"?a.setMonth(a.getMonth()-1):a.setMonth(a.getMonth()+1);const i=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}`;o(i);const g=M();p(i===g?null:n)},S=async n=>{},D=n=>{const a=s.find(i=>i.day===n);x(a)};c.useEffect(()=>{S()},[t]),c.useEffect(()=>{l([{day:15,percentage:100},{day:16,percentage:60},{day:17,percentage:100},{day:18,percentage:60}])},[]);const w=c.useMemo(()=>[...Array(k(t)).keys()].map(n=>{const a=s.find(i=>i.day===n+1);return{day:n+1,percentage:a?a.percentage:0,isHighlighted:a&&a.percentage<100}}),[s,t]);return e.jsxs(B,{children:[e.jsxs(L,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(T,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[e.jsx(j,{onClick:()=>b("prev"),active:y==="next",children:"<"}),e.jsx("span",{children:ae(t)}),h&&e.jsx(E,{children:t.split("-")[0]}),e.jsx(j,{onClick:()=>b("next"),active:y==="prev",children:">"})]})]}),r&&e.jsx(te,{day:r.day,month:t,stats:r}),e.jsx(F,{children:w.map(({day:n,percentage:a,isHighlighted:i})=>e.jsx("div",{children:e.jsxs(O,{children:[e.jsx(R,{onClick:()=>D(n),isHighlighted:i,children:n}),e.jsxs("span",{children:[a,"%"]})," "]})},n))})]})},ne=({onClose:t})=>e.jsx(G,{onClose:t,title:"Add water",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Edit the entered amount of water"}),e.jsx("button",{children:"Save"})]})}),re=()=>e.jsx("div",{children:"TodayWaterList"}),oe=()=>{const[t,o]=c.useState(!1),s=()=>{o(!0)},l=()=>{o(!1)},r=60;c.useEffect(()=>{const h=document.querySelector("#waterMark");if(h){let d=Number((r-0)*100/100);d=d>=100?100:d,h.style.left=`calc(${d}% + (${8-d*.15}px))`}},[r]);const x=()=>({backgroundSize:`${r}%`});return e.jsxs(I,{children:[e.jsxs(J,{children:[e.jsx(P,{children:"Today"}),e.jsx(Y,{type:"range",maxValue:100,minValue:0,value:r,readOnly:!0,style:x(),"aria-label":"Water range"}),e.jsxs(z,{children:[e.jsx(V,{children:"0%"}),e.jsx(q,{id:"waterMark",children:`${r}%`}),e.jsx(K,{children:"100%"})]})]}),e.jsxs(Q,{onClick:s,children:[e.jsx(U,{children:e.jsx("use",{href:`${X}#icon-increment-outline`})})," Add Water"]}),t&&e.jsx(ne,{onClose:l})]})},ce="/water-tracker/assets/bubbleDesk-36f8cd6f.png",ie="/water-tracker/assets/bubbleDesk@2x-63f6b35a.png",le="/water-tracker/assets/bubbleMob-2c86dba1.png",de="/water-tracker/assets/bubbleMob@2x-9fa7a71c.png",he="/water-tracker/assets/bubbleTablet-200f6c87.png",ue="/water-tracker/assets/bubbleTablet@2x-2fca3f11.png",xe=f(Z)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${le}) 1x,
    url(${de}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${he}) 1x,
      url(${ue}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${ce}) 1x,
      url(${ie}) 2x
    );
  }
`,me=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    display: flex;
    /* flex-direction: row;
    flex-wrap: wrap; */
  }
`,je=()=>e.jsx(xe,{children:e.jsxs(me,{children:[e.jsx(_,{}),e.jsx(oe,{}),e.jsx(re,{}),e.jsx(se,{})]})});export{je as default};
