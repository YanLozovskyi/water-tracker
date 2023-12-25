import{r as c,j as e,D,h as w,i as $,k as v,l as H,m as N,o as u,p as C,q as m,t as W,v as L,w as A,x as g,y as j,s as y,Y as T,z as B,A as E,C as F,E as R,F as I,G as O,J as P,K as G,M as J,N as Y,O as z,R as V,Q as q,S as K,n as p}from"./index-8e47b1f0.js";import{S as Q}from"./Section-0ef1e48d.js";const U=({userWaterIntake:t})=>{const[o,s]=c.useState(!1),l=()=>{s(!0)},n=()=>{s(!1)};return e.jsxs(D,{children:[e.jsxs(w,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:t||"2.0 L"}),e.jsx("button",{onClick:l,children:"Edit"})]}),o&&e.jsx($,{onClose:n})]}),e.jsx(v,{})]})},X=t=>{const[o,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Z=({day:t,stats:{norma:o,full:s,servings:l},month:n})=>e.jsx(H,{children:e.jsxs(N,{children:[e.jsx(u,{children:e.jsxs(C,{children:[t,", ",X(n)]})}),e.jsxs(u,{children:["Daily norma:",e.jsx(m,{children:o})]}),e.jsxs(u,{children:["Fulfillment of the daily norm:",e.jsx(m,{children:s})]}),e.jsxs(u,{children:["How many servings of water:",e.jsx(m,{children:l})]})]})}),_=()=>{const t=new Date,o=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${o}-${s}`},ee=t=>{const[o,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},te=()=>{const[t,o]=c.useState(_()),[s,l]=c.useState([]),[n,x]=c.useState(null),[h,i]=c.useState(!1),M=r=>{const[a,d]=r.split("-").map(Number);return[31,a%4===0&&a%100!==0||a%400===0?29:28,31,30,31,30,31,31,30,31,30,31][d-1]},b=r=>{const a=new Date(t);r==="prev"?a.setMonth(a.getMonth()-1):a.setMonth(a.getMonth()+1),o(`${a.getFullYear()}-${a.getMonth()+1}`)},f=async r=>{},k=r=>{const a=s.find(d=>d.day===r);x(a)};c.useEffect(()=>{f()},[t]),c.useEffect(()=>{l([{day:15,percentage:100},{day:16,percentage:60},{day:17,percentage:100},{day:18,percentage:60}])},[]);const S=c.useMemo(()=>[...Array(M(t)).keys()].map(r=>{const a=s.find(d=>d.day===r+1);return{day:r+1,percentage:a?a.percentage:0,isHighlighted:a&&a.percentage<100}}),[s,t]);return e.jsxs(W,{children:[e.jsxs(L,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(A,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[e.jsx(g,{onClick:()=>b("prev"),children:e.jsx(j,{children:e.jsx("use",{href:`${y}#icon-solidL`})})}),e.jsx("span",{children:ee(t)}),h&&e.jsx(T,{children:t.split("-")[0]}),e.jsx(g,{onClick:()=>b("next"),children:e.jsx(j,{children:e.jsx("use",{href:`${y}#icon-solidR`})})})]})]}),n&&e.jsx(Z,{day:n.day,month:t,stats:n}),e.jsx(B,{children:S.map(({day:r,percentage:a,isHighlighted:d})=>e.jsx("div",{children:e.jsxs(E,{children:[e.jsx(F,{onClick:()=>k(r),isHighlighted:d,children:r}),e.jsxs("span",{children:[a,"%"]})," "]})},r))})]})},ae=({onClose:t})=>e.jsx(R,{onClose:t,title:"Add water",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Edit the entered amount of water"}),e.jsx("button",{children:"Save"})]})}),se=()=>e.jsx("div",{children:"TodayWaterList"}),ne=()=>{const[t,o]=c.useState(!1),s=()=>{o(!0)},l=()=>{o(!1)},n=60;c.useEffect(()=>{const h=document.querySelector("#waterMark");if(h){let i=Number((n-0)*100/100);i=i>=100?100:i,h.style.left=`calc(${i}% + (${8-i*.15}px))`}},[n]);const x=()=>({backgroundSize:`${n}%`});return e.jsxs(I,{children:[e.jsxs(O,{children:[e.jsx(P,{children:"Today"}),e.jsx(G,{type:"range",maxValue:100,minValue:0,value:n,readOnly:!0,style:x(),"aria-label":"Water range"}),e.jsxs(J,{children:[e.jsx(Y,{children:"0%"}),e.jsx(z,{id:"waterMark",children:`${n}%`}),e.jsx(V,{children:"100%"})]})]}),e.jsxs(q,{onClick:s,children:[e.jsx(K,{children:e.jsx("use",{href:`${y}#icon-increment-outline`})})," Add Water"]}),t&&e.jsx(ae,{onClose:l})]})},re="/water-tracker/assets/bubbleDesk-36f8cd6f.png",oe="/water-tracker/assets/bubbleDesk@2x-63f6b35a.png",ce="/water-tracker/assets/bubbleMob-2c86dba1.png",le="/water-tracker/assets/bubbleMob@2x-9fa7a71c.png",ie="/water-tracker/assets/bubbleTablet-200f6c87.png",de="/water-tracker/assets/bubbleTablet@2x-2fca3f11.png",he=p(Q)`background-color: black;`,ue=p.div`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${ce}) 1x,
    url(${le}) 2xf
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${ie}) 1x,
      url(${de}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${re}) 1x,
      url(${oe}) 2x
    );
    display: flex;
    /* flex-direction: row;
    flex-wrap: wrap; */
  }

  &.your-custom-class {
    background-color: black;
  }
`,je=()=>e.jsx(he,{children:e.jsxs(ue,{children:[e.jsx(U,{}),e.jsx(ne,{}),e.jsx(se,{}),e.jsx(te,{})]})});export{je as default};
