import{r as i,j as e,D as O,h as E,i as F,k as P,l as G,m as R,o as u,p as J,q as w,t as Y,v as V,w as C,Y as z,x as q,y as K,z as Q,A as U,C as X,E as Z,F as _,G as m,J as g,K as p,M as y,N as b,O as M,Q as f,R as k,S as ee,s as x,U as se,V as te,X as ne,Z as ae,_ as re,$ as oe,a0 as ce,a1 as ie,a2 as le,a3 as de,n as D}from"./index-d8d5f614.js";import{S as he}from"./Section-3298ec8a.js";const xe=({userWaterIntake:s})=>{const[a,n]=i.useState(!1),l=()=>{n(!0)},o=()=>{n(!1)};return e.jsxs(O,{children:[e.jsxs(E,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:s||"2.0 L"}),e.jsx("button",{onClick:l,children:"Edit"})]}),a&&e.jsx(F,{onClose:o})]}),e.jsx(P,{})]})},je=s=>{const[a,n]=s.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][n-1]},ue=({day:s,stats:{norma:a,full:n,servings:l},month:o})=>e.jsx(G,{children:e.jsxs(R,{children:[e.jsx(u,{children:e.jsxs(J,{children:[s,", ",je(o)]})}),e.jsxs(u,{children:["Daily norma:",e.jsx(w,{children:a})]}),e.jsxs(u,{children:["Fulfillment of the daily norm:",e.jsx(w,{children:n})]}),e.jsxs(u,{children:["How many servings of water:",e.jsx(w,{children:l})]})]})}),W=()=>{const s=new Date,a=s.getFullYear(),n=String(s.getMonth()+1).padStart(2,"0");return`${a}-${n}`},me=s=>{const[a,n]=s.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][n-1]},ge=()=>{const[s,a]=i.useState(W()),[n,l]=i.useState([]),[o,S]=i.useState(null),[j,h]=i.useState(!1),[v,$]=i.useState(null),N=r=>{const[t,d]=r.split("-").map(Number);return[31,t%4===0&&t%100!==0||t%400===0?29:28,31,30,31,30,31,31,30,31,30,31][d-1]},T=r=>{const t=new Date(s);r==="prev"?t.setMonth(t.getMonth()-1):t.setMonth(t.getMonth()+1);const d=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`;a(d);const H=W();$(d===H?null:r)},B=async r=>{},I=r=>{const t=n.find(d=>d.day===r);S(t)};i.useEffect(()=>{B()},[s]),i.useEffect(()=>{l([{day:15,percentage:100},{day:16,percentage:60},{day:17,percentage:100},{day:18,percentage:60}])},[]);const L=i.useMemo(()=>[...Array(N(s)).keys()].map(r=>{const t=n.find(d=>d.day===r+1);return{day:r+1,percentage:t?t.percentage:0,isHighlighted:t&&t.percentage<100}}),[n,s]);return e.jsxs("div",{children:[e.jsxs(Y,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(V,{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[e.jsx(C,{onClick:()=>T("prev"),active:v==="next",children:"<"}),e.jsx("span",{children:me(s)}),j&&e.jsx(z,{children:s.split("-")[0]}),e.jsx(C,{onClick:()=>T("next"),active:v==="prev",children:">"})]})]}),o&&e.jsx(ue,{day:o.day,month:s,stats:o}),e.jsx(q,{children:L.map(({day:r,percentage:t,isHighlighted:d})=>e.jsx("div",{children:e.jsxs(K,{children:[e.jsx(Q,{onClick:()=>I(r),isHighlighted:d,children:r}),e.jsxs("span",{children:[t,"%"]})," "]})},r))})]})},A=({onClose:s})=>e.jsx(U,{onClose:s,title:"Add water",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Edit the entered amount of water"}),e.jsx("button",{children:"Save"})]})}),c={glass:`${x}#icon-glass`,change:`${x}#icon-change`,delete:`${x}#icon-delete`,add:`${x}#icon-increment`},pe=()=>{const[s,a]=i.useState(!1),n=()=>{a(!0)},l=()=>{a(!1)};return e.jsxs(X,{children:[e.jsx(Z,{children:"Today"}),e.jsxs(_,{children:[e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(p,{children:e.jsx("use",{href:c.glass})}),e.jsx(y,{children:"250 ml"}),e.jsx(b,{children:"7:00 AM"})]}),e.jsxs(M,{children:[e.jsx(f,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(k,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(p,{children:e.jsx("use",{href:c.glass})}),e.jsx(y,{children:"220 ml"}),e.jsx(b,{children:"11:00 AM"})]}),e.jsxs(M,{children:[e.jsx(f,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(k,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(p,{children:e.jsx("use",{href:c.glass})}),e.jsx(y,{children:"200 ml"}),e.jsx(b,{children:"14:00 PM"})]}),e.jsxs(M,{children:[e.jsx(f,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(k,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsxs(m,{children:[e.jsxs(g,{children:[e.jsx(p,{children:e.jsx("use",{href:c.glass})}),e.jsx(y,{children:"200 ml"}),e.jsx(b,{children:"14:00 PM"})]}),e.jsxs(M,{children:[e.jsx(f,{children:e.jsx("svg",{children:e.jsx("use",{href:c.change})})}),e.jsx(k,{children:e.jsx("svg",{children:e.jsx("use",{href:c.delete})})})]})]}),e.jsx("li",{children:e.jsxs(ee,{onClick:n,children:[e.jsx("svg",{children:e.jsx("use",{href:c.add})}),"Add Water"]})})]}),s&&e.jsx(A,{onClose:l})]})},ye=()=>{const[s,a]=i.useState(!1),n=()=>{a(!0)},l=()=>{a(!1)},o=60;i.useEffect(()=>{const j=document.querySelector("#waterMark");if(j){let h=Number((o-0)*100/100);h=h>=100?100:h,j.style.left=`calc(${h}% + (${8-h*.15}px))`}},[o]);const S=()=>({backgroundSize:`${o}%`});return e.jsxs(se,{children:[e.jsxs(te,{children:[e.jsx(ne,{children:"Today"}),e.jsx(ae,{type:"range",maxValue:100,minValue:0,value:o,readOnly:!0,style:S(),"aria-label":"Water range"}),e.jsxs(re,{children:[e.jsx(oe,{children:"0%"}),e.jsx(ce,{id:"waterMark",children:`${o}%`}),e.jsx(ie,{children:"100%"})]})]}),e.jsxs(le,{onClick:n,children:[e.jsx(de,{children:e.jsx("use",{href:`${x}#icon-increment-outline`})})," Add Water"]}),s&&e.jsx(A,{onClose:l})]})},be="/water-tracker/assets/bubbleDesk-36f8cd6f.png",Me="/water-tracker/assets/bubbleDesk@2x-63f6b35a.png",fe="/water-tracker/assets/bubbleMob-2c86dba1.png",ke="/water-tracker/assets/bubbleMob@2x-9fa7a71c.png",Se="/water-tracker/assets/bubbleTablet-200f6c87.png",we="/water-tracker/assets/bubbleTablet@2x-2fca3f11.png",De=D(he)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${fe}) 1x,
    url(${ke}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Se}) 1x,
      url(${we}) 2x
    );
  }

  @media screen and (min-width: ${({theme:s})=>s.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${be}) 1x,
      url(${Me}) 2x
    );
  }
`,ve=D.div`
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
`,$e=D.div`
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
`,Ae=()=>e.jsx(De,{children:e.jsxs(ve,{children:[e.jsxs("div",{children:[e.jsx(xe,{}),e.jsx(ye,{})]}),e.jsxs($e,{children:[e.jsx(pe,{}),e.jsx(ge,{})]})]})});export{Ae as default};
