import{r as o,j as e,D as J,h as V,i as Y,k as z,l as X,m as q,o as w,p as K,q as E,t as Q,v as U,w as L,Y as Z,x as _,y as ee,z as se,A as te,C as ne,E as ae,F as re,G as k,J as S,K as v,M as D,N as $,O as T,Q as C,R as W,S as oe,s as y,U as ie,V as le,X as ce,Z as de,_ as he,$ as xe,a0 as ue,a1 as je,a2 as me,a3 as pe,n as N}from"./index-451d47c7.js";import{S as ge}from"./Section-fe3cb34f.js";const fe=({userWaterIntake:s})=>{const[i,a]=o.useState(!1),x=()=>{a(!0)},r=()=>{a(!1)};return e.jsxs(J,{children:[e.jsxs(V,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:s||"2.0 L"}),e.jsx("button",{onClick:x,children:"Edit"})]}),i&&e.jsx(Y,{onClose:r})]}),e.jsx(z,{})]})},ye=s=>{const[i,a]=s.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][a-1]},be=({day:s,stats:{norma:i,full:a,servings:x},month:r,position:u,onShow:m})=>{const d=o.useRef(null);return o.useEffect(()=>{if(!d.current)return;const{top:g,left:j,width:b}=u,l=d.current,f=l.offsetWidth;if(window.innerWidth<=320)l.style.width="100%",l.style.left="0",l.style.top=`${g-l.offsetHeight}px`,l.style.transform="translateX(0)";else{const A=j,M=window.innerWidth-j-b;A>f?l.style.left=`${j-f}px`:M>f?l.style.left=`${j+b}px`:(l.style.left="50%",l.style.transform="translateX(-50%)"),l.style.top=`${g-l.offsetHeight}px`}},[u]),e.jsx(X,{ref:d,style:{visibility:m?"visible":"hidden"},children:e.jsxs(q,{children:[e.jsx(w,{children:e.jsxs(K,{children:[s,", ",ye(r)]})}),e.jsxs(w,{children:["Daily norma:",e.jsx(E,{children:i})]}),e.jsxs(w,{children:["Fulfillment of the daily norm:",e.jsx(E,{children:a})]}),e.jsxs(w,{children:["How many servings of water:",e.jsx(E,{children:x})]})]})})},O=()=>{const s=new Date,i=s.getFullYear(),a=String(s.getMonth()+1).padStart(2,"0");return`${i}-${a}`},Me=s=>{const[i,a]=s.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][a-1]},we=()=>{const[s,i]=o.useState(O()),[a,x]=o.useState([]),[r,u]=o.useState(null),[m,d]=o.useState(!1),[g,j]=o.useState(null),[b,l]=o.useState({top:0,left:0,width:0}),[f,H]=o.useState(!1),A=n=>{const[t,h]=n.split("-").map(Number);return[31,t%4===0&&t%100!==0||t%400===0?29:28,31,30,31,30,31,31,30,31,30,31][h-1]},M=n=>{const t=new Date(s);n==="prev"?t.setMonth(t.getMonth()-1):t.setMonth(t.getMonth()+1);const h=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`;i(h);const p=O();j(h===p?null:n)},I=async n=>{},F=n=>{if(H(!0),r&&r.day===n){u(null);return}const t=B.current[n];if(t){const h=t.getBoundingClientRect();l({top:h.top+window.scrollY,left:h.left,width:h.width}),u({day:n,...a.find(p=>p.day===n)})}};o.useEffect(()=>{const n=t=>{r&&!B.current[r.day].contains(t.target)&&R()};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[r]),o.useEffect(()=>{I()},[s]),o.useEffect(()=>{x([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const G=o.useMemo(()=>[...Array(A(s)).keys()].map(n=>{const t=a.find(h=>h.day===n+1);return{day:n+1,percentage:t?t.percentage:0,isHighlighted:t&&t.percentage<100}}),[a,s]),B=o.useRef({}),R=()=>{H(!1),u(null)};return e.jsxs("div",{children:[e.jsxs(Q,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(U,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[e.jsx(L,{onClick:()=>M("prev"),active:g==="next",children:"<"}),e.jsx("span",{children:Me(s)}),m&&e.jsx(Z,{children:s.split("-")[0]}),e.jsx(L,{onClick:()=>M("next"),active:g==="prev",children:">"})]})]}),r&&e.jsx(be,{day:r.day,month:s,stats:r,position:b,onClose:R,onShow:f}),e.jsx(_,{children:G.map(({day:n,percentage:t,isHighlighted:h})=>e.jsx("div",{children:e.jsxs(ee,{children:[e.jsx(se,{ref:p=>B.current[n]=p,onClick:()=>F(n),isHighlighted:h,children:n}),e.jsxs("span",{children:[t,"%"]})," "]})},n))})]})},P=({onClose:s})=>e.jsx(te,{onClose:s,title:"Add water",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Edit the entered amount of water"}),e.jsx("button",{children:"Save"})]})}),c={glass:`${y}#icon-glass`,change:`${y}#icon-change`,delete:`${y}#icon-delete`,add:`${y}#icon-increment`},ke=()=>{const[s,i]=o.useState(!1),a=()=>{i(!0)},x=()=>{i(!1)};return e.jsxs(ne,{children:[e.jsx(ae,{children:"Today"}),e.jsxs(re,{children:[e.jsxs(k,{children:[e.jsxs(S,{children:[e.jsx(v,{children:e.jsx("use",{href:c.glass})}),e.jsx(D,{children:"250 ml"}),e.jsx($,{children:"7:00 AM"})]}),e.jsxs(T,{children:[e.jsx(C,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(W,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsxs(k,{children:[e.jsxs(S,{children:[e.jsx(v,{children:e.jsx("use",{href:c.glass})}),e.jsx(D,{children:"220 ml"}),e.jsx($,{children:"11:00 AM"})]}),e.jsxs(T,{children:[e.jsx(C,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(W,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsxs(k,{children:[e.jsxs(S,{children:[e.jsx(v,{children:e.jsx("use",{href:c.glass})}),e.jsx(D,{children:"200 ml"}),e.jsx($,{children:"14:00 PM"})]}),e.jsxs(T,{children:[e.jsx(C,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(W,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsxs(k,{children:[e.jsxs(S,{children:[e.jsx(v,{children:e.jsx("use",{href:c.glass})}),e.jsx(D,{children:"200 ml"}),e.jsx($,{children:"14:00 PM"})]}),e.jsxs(T,{children:[e.jsx(C,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(W,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsx("li",{children:e.jsxs(oe,{onClick:a,children:[e.jsx("svg",{children:e.jsx("use",{href:c.add})}),"Add Water"]})})]}),s&&e.jsx(P,{onClose:x})]})},Se=()=>{const[s,i]=o.useState(!1),a=()=>{i(!0)},x=()=>{i(!1)},r=60;o.useEffect(()=>{const m=document.querySelector("#waterMark");if(m){let d=Number((r-0)*100/100);d=d>=100?100:d,m.style.left=`calc(${d}% + (${8-d*.15}px))`}},[r]);const u=()=>({backgroundSize:`${r}%`});return e.jsxs(ie,{children:[e.jsxs(le,{children:[e.jsx(ce,{children:"Today"}),e.jsx(de,{type:"range",maxValue:100,minValue:0,value:r,readOnly:!0,style:u(),"aria-label":"Water range"}),e.jsxs(he,{children:[e.jsx(xe,{children:"0%"}),e.jsx(ue,{id:"waterMark",children:`${r}%`}),e.jsx(je,{children:"100%"})]})]}),e.jsxs(me,{onClick:a,children:[e.jsx(pe,{children:e.jsx("use",{href:`${y}#icon-increment-outline`})})," Add Water"]}),s&&e.jsx(P,{onClose:x})]})},ve="/water-tracker/assets/bubbleDesk-36f8cd6f.png",De="/water-tracker/assets/bubbleDesk@2x-63f6b35a.png",$e="/water-tracker/assets/bubbleMob-2c86dba1.png",Te="/water-tracker/assets/bubbleMob@2x-9fa7a71c.png",Ce="/water-tracker/assets/bubbleTablet-200f6c87.png",We="/water-tracker/assets/bubbleTablet@2x-2fca3f11.png",He=N(ge)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${$e}) 1x,
    url(${Te}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Ce}) 1x,
      url(${We}) 2x
    );
  }

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${ve}) 1x,
      url(${De}) 2x
    );
  }
`,Ae=N.div`
  margin-top: 24px;
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
`,Be=N.div`
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
`,Oe=()=>e.jsx(He,{children:e.jsxs(Ae,{children:[e.jsxs("div",{children:[e.jsx(fe,{}),e.jsx(Se,{})]}),e.jsxs(Be,{children:[e.jsx(ke,{}),e.jsx(we,{})]})]})});export{Oe as default};
