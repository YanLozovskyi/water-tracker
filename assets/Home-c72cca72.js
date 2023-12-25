import{r as o,j as e,D as f,h as S,i as w,k as D,l as $,m as v,o as H,p as g,q as b,s as x,Y as C,t as W,v as L,w as T,x as B,y as E,z as N,A as R,C as A,M as P,E as F,F as I,R as O,G as Y,J as z,n as y}from"./index-161d1952.js";import{S as J}from"./Section-4c5267f3.js";const G=({userWaterIntake:t})=>{const[c,n]=o.useState(!1),d=()=>{n(!0)},r=()=>{n(!1)};return e.jsxs(f,{children:[e.jsxs(S,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:t||"2.0 L"}),e.jsx("button",{onClick:d,children:"Edit"})]}),c&&e.jsx(w,{onClose:r})]}),e.jsx(D,{})]})},V=()=>e.jsx("div",{children:"DaysGeneralStats"}),q=()=>{const t=new Date,c=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0");return`${c}-${n}`},K=t=>{const[c,n]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][n-1]},Q=()=>{const[t,c]=o.useState(q()),[n,d]=o.useState([]),[r,h]=o.useState(null),[u,i]=o.useState(!1),p=s=>{const[a,l]=s.split("-").map(Number);return[31,a%4===0&&a%100!==0||a%400===0?29:28,31,30,31,30,31,31,30,31,30,31][l-1]},m=s=>{const a=new Date(t);s==="prev"?a.setMonth(a.getMonth()-1):a.setMonth(a.getMonth()+1),c(`${a.getFullYear()}-${a.getMonth()+1}`)},j=async s=>{},M=s=>{const a=n.find(l=>l.day===s);h(a)};o.useEffect(()=>{j()},[t]),o.useEffect(()=>{d([{day:15,percentage:100},{day:16,percentage:60},{day:17,percentage:100},{day:18,percentage:60}])},[]);const k=o.useMemo(()=>[...Array(p(t)).keys()].map(s=>{const a=n.find(l=>l.day===s+1);return{day:s+1,percentage:a?a.percentage:0,isHighlighted:a&&a.percentage<100}}),[n,t]);return e.jsxs($,{children:[e.jsxs(v,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(H,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[e.jsx(g,{onClick:()=>m("prev"),children:e.jsx(b,{children:e.jsx("use",{href:`${x}#icon-solidL`})})}),e.jsx("span",{children:K(t)}),u&&e.jsx(C,{children:t.split("-")[0]}),e.jsx(g,{onClick:()=>m("next"),children:e.jsx(b,{children:e.jsx("use",{href:`${x}#icon-solidR`})})})]})]}),r&&e.jsx(V,{day:r.day,stats:r}),e.jsx(W,{children:k.map(({day:s,percentage:a,isHighlighted:l})=>e.jsx("div",{children:e.jsxs(L,{children:[e.jsx(T,{onClick:()=>M(s),isHighlighted:l,children:s}),e.jsxs("span",{children:[a,"%"]})," "]})},s))})]})},U=({onClose:t})=>e.jsx(B,{onClose:t,title:"Add water",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Edit the entered amount of water"}),e.jsx("button",{children:"Save"})]})}),X=()=>e.jsx("div",{children:"TodayWaterList"}),Z=()=>{const[t,c]=o.useState(!1),n=()=>{c(!0)},d=()=>{c(!1)},r=60;o.useEffect(()=>{const u=document.querySelector("#waterMark");if(u){let i=Number((r-0)*100/100);i=i>=100?100:i,u.style.left=`calc(${i}% + (${8-i*.15}px))`}},[r]);const h=()=>({backgroundSize:`${r}%`});return e.jsxs(E,{children:[e.jsxs(N,{children:[e.jsx(R,{children:"Today"}),e.jsx(A,{type:"range",maxValue:100,minValue:0,value:r,readOnly:!0,style:h(),"aria-label":"Water range"}),e.jsxs(P,{children:[e.jsx(F,{children:"0%"}),e.jsx(I,{id:"waterMark",children:`${r}%`}),e.jsx(O,{children:"100%"})]})]}),e.jsxs(Y,{onClick:n,children:[e.jsx(z,{children:e.jsx("use",{href:`${x}#icon-increment-outline`})})," Add Water"]}),t&&e.jsx(U,{onClose:d})]})},_="/water-tracker/assets/bubbleDesk-36f8cd6f.png",ee="/water-tracker/assets/bubbleDesk@2x-63f6b35a.png",te="/water-tracker/assets/bubbleMob-2c86dba1.png",ae="/water-tracker/assets/bubbleMob@2x-9fa7a71c.png",se="/water-tracker/assets/bubbleTablet-200f6c87.png",ne="/water-tracker/assets/bubbleTablet@2x-2fca3f11.png",re=y(J)`background-color: black;`,oe=y.div`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${te}) 1x,
    url(${ae}) 2xf
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${se}) 1x,
      url(${ne}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${_}) 1x,
      url(${ee}) 2x
    );
    display: flex;
    /* flex-direction: row;
    flex-wrap: wrap; */
  }

  &.your-custom-class {
    background-color: black;
  }
`,he=()=>e.jsx(re,{children:e.jsxs(oe,{children:[e.jsx(G,{}),e.jsx(Z,{}),e.jsx(X,{}),e.jsx(Q,{})]})});export{he as default};
