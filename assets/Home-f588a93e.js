import{g as N,h as J,r,j as e,D as Y,i as z,k as X,l as q,m as U,o as K,p as v,q as Q,t as W,v as Z,w as ee,x as B,Y as te,y as se,z as ae,A as ne,E as F,F as oe,G as re,J as ie,K as E,s as S,M as O,N as P,Q as le,R as H,S as L,U as I,V as ce,X as de,Z as he,_ as ue,$ as xe,a0 as me,a1 as pe,a2 as V,a3 as G,a4 as ye,a5 as je,a6 as ge,a7 as fe,a8 as we,a9 as Me,aa as Se,ab as be,ac as ke,ad as ve,ae as De,af as Te,ag as $e,ah as Ce,ai as We,aj as Ae,ak as Be,al as He,am as Le,an as Ie,n as A}from"./index-26bb3e1a.js";import{S as Re}from"./Section-b29cfb93.js";import{i as Ne,a as Fe,b as Ee,c as Oe,d as Pe,e as Ve}from"./bubbleTablet@2x-6e22c1d3.js";const Ge=()=>{const{waterRate:t}=N(J),[i,s]=r.useState(!1),y=()=>{s(!0)},a=()=>{s(!1)},x=(t/1e3).toFixed(1)+" L";return e.jsxs(Y,{children:[e.jsxs(z,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:x}),e.jsx("button",{onClick:y,children:"Edit"})]}),i&&e.jsx(X,{onClose:a})]}),e.jsx(q,{})]})},_e=t=>{const[i,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Je=({day:t,stats:{norma:i,full:s,servings:y},month:a,position:x,onShow:j})=>{const m=r.useRef(null);return r.useEffect(()=>{if(!m.current)return;const{top:u,left:d,width:w}=x,h=m.current,M=h.offsetWidth;if(window.innerWidth<=320)h.style.width="100%",h.style.left="0",h.style.top=`${u-h.offsetHeight}px`,h.style.transform="translateX(0)";else{const l=d,p=window.innerWidth-d-w;l>M?h.style.left=`${d-M}px`:p>M?h.style.left=`${d+w}px`:(h.style.left="50%",h.style.transform="translateX(-50%)"),h.style.top=`${u-h.offsetHeight}px`}},[x]),e.jsx(U,{ref:m,style:{visibility:j?"visible":"hidden"},children:e.jsxs(K,{children:[e.jsx(v,{children:e.jsxs(Q,{children:[t,", ",_e(a)]})}),e.jsxs(v,{children:["Daily norma:",e.jsx(W,{children:i})]}),e.jsxs(v,{children:["Fulfillment of the daily norm:",e.jsx(W,{children:s})]}),e.jsxs(v,{children:["How many servings of water:",e.jsx(W,{children:y})]})]})})},R=()=>{const t=new Date,i=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${i}-${s}`},Ye=t=>{const[i,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},ze=()=>{const[t,i]=r.useState(R()),[s,y]=r.useState([]),[a,x]=r.useState(null),[j,m]=r.useState(!1),[u,d]=r.useState(null),[w,h]=r.useState({top:0,left:0,width:0}),[M,b]=r.useState(!1),l=o=>{const[n,g]=o.split("-").map(Number);return[31,n%4===0&&n%100!==0||n%400===0?29:28,31,30,31,30,31,31,30,31,30,31][g-1]},p=o=>{const n=new Date(t);o==="prev"?n.setMonth(n.getMonth()-1):n.setMonth(n.getMonth()+1);const g=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`;i(g);const k=R();d(g===k?null:o)},T=async o=>{},$=o=>{if(b(!0),a&&a.day===o){x(null);return}const n=c.current[o];if(n){const g=n.getBoundingClientRect();h({top:g.top+window.scrollY,left:g.left,width:g.width}),x({day:o,...s.find(k=>k.day===o)})}};r.useEffect(()=>{const o=n=>{a&&!c.current[a.day].contains(n.target)&&f()};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[a]),r.useEffect(()=>{T()},[t]),r.useEffect(()=>{y([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const C=r.useMemo(()=>[...Array(l(t)).keys()].map(o=>{const n=s.find(g=>g.day===o+1);return{day:o+1,percentage:n?n.percentage:0,isHighlighted:n&&n.percentage<100}}),[s,t]),c=r.useRef({}),f=()=>{b(!1),x(null)};return e.jsxs("div",{children:[e.jsxs(Z,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(ee,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[e.jsx(B,{onClick:()=>p("prev"),active:u==="next",children:"<"}),e.jsx("span",{children:Ye(t)}),j&&e.jsx(te,{children:t.split("-")[0]}),e.jsx(B,{onClick:()=>p("next"),active:u==="prev",children:">"})]})]}),a&&e.jsx(Je,{day:a.day,month:t,stats:a,position:w,onClose:f,onShow:M}),e.jsx(se,{children:C.map(({day:o,percentage:n,isHighlighted:g})=>e.jsx("div",{children:e.jsxs(ae,{children:[e.jsx(ne,{ref:k=>c.current[o]=k,onClick:()=>$(o),isHighlighted:g,children:o}),e.jsxs("span",{children:[n,"%"]})," "]})},o))})]})},_=({initialAmount:t,initialTime:i,isEditing:s,onSave:y,onClose:a,existingRecordId:x})=>{const j=c=>new Date(c).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),[m,u]=r.useState(t||0),[d,w]=r.useState(s&&i?j(i):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),h=F(),M=()=>u(c=>c+50),b=()=>u(c=>c>0?c-50:0),l=c=>{let f=c.target.value;f.startsWith("0")&&f.length>1&&(f=f.substring(1)),u(f)},p=c=>w(c.target.value),T=async()=>{try{const f=`${new Date().toISOString().slice(0,10)}T${d}`,o=new Date(f).toISOString(),n={waterVolume:m,date:o};s?await h(V({_id:x,...n})).unwrap():await h(G(n)).unwrap(),a()}catch(c){console.error("Failed to process water data:",c)}},$=s?"Edit the entered amount of water":"Add water",C=s&&i?j(i):"";return e.jsx(oe,{onClose:a,title:$,children:e.jsxs(re,{children:[s&&e.jsxs(ie,{children:[e.jsx(E,{children:e.jsx("use",{href:`${S}#icon-glass`})}),e.jsx(O,{children:t?`${t} ml`:"No notes yet"}),e.jsx(P,{children:i?`${C} AM`:""})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(le,{children:[e.jsx(H,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(L,{onClick:b,children:e.jsx(I,{children:e.jsx("use",{href:`${S}#icon-decrement-outline`})})}),e.jsxs(ce,{children:[e.jsx(de,{type:"number",value:m,onChange:l,onBlur:()=>u(c=>c||t||0)}),e.jsx("span",{children:"ml"})]}),e.jsx(L,{onClick:M,children:e.jsx(I,{children:e.jsx("use",{href:`${S}#icon-increment`})})})]})]}),e.jsxs(he,{children:[e.jsx(H,{children:"Recording time:"}),e.jsx(ue,{type:"time",value:d,onChange:p,step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(xe,{type:"number",value:m,onChange:l,onBlur:()=>u(c=>c||t||"")})]}),e.jsxs(me,{children:[e.jsxs("span",{children:[m,"ml"]}),e.jsx(pe,{onClick:T,children:"Save"})]})]})})},Xe=t=>t.waterData.today,D={glass:`${S}#icon-glass`,change:`${S}#icon-change`,delete:`${S}#icon-delete`,add:`${S}#icon-increment`},qe=()=>{const[t,i]=r.useState(!1),[s,y]=r.useState([]),[a,x]=r.useState(null),j=F(),m=N(Xe),u=()=>{x(null),i(!0)},d=l=>{x(l),i(!0)},w=()=>{i(!1)},h=async l=>{try{await j(ve(l)).unwrap(),y(s.filter(p=>p._id!==l))}catch(p){console.error("Failed to delete water record:",p)}},M=async l=>{try{if(a!==null){const p={...l,_id:a._id};await j(V(p)).unwrap()}else await j(G(l)).unwrap();w()}catch(p){console.error("Failed to save water data:",p)}};function b(l){return new Date(l).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}return e.jsxs(ye,{children:[e.jsx(je,{children:"Today"}),e.jsxs(ge,{children:[m.dailyWaterList.map(l=>e.jsxs(fe,{children:[e.jsxs(we,{children:[e.jsx(E,{children:e.jsx("use",{href:D.glass})}),e.jsxs(O,{children:[l.waterVolume," ml"]}),e.jsx(P,{children:b(l.date)})]}),e.jsxs(Me,{children:[e.jsx(Se,{onClick:()=>d(l),children:e.jsx("svg",{children:e.jsx("use",{href:D.change})})}),e.jsx(be,{onClick:()=>h(l._id),children:e.jsx("svg",{children:e.jsx("use",{href:D.delete})})})]})]},l._id)),e.jsx("li",{children:e.jsxs(ke,{onClick:u,children:[e.jsx("svg",{children:e.jsx("use",{href:D.add})}),"Add Water"]})})]}),t&&e.jsx(_,{initialAmount:a==null?void 0:a.waterVolume,initialTime:a==null?void 0:a.date,isEditing:a!==null,existingRecordId:a==null?void 0:a._id,onSave:M,onClose:w})]})},Ue=()=>{const[t,i]=r.useState(!1),[s,y]=r.useState(0),a=()=>{i(!0)},x=()=>{i(!1)};r.useEffect(()=>{const u=document.querySelector("#waterMark");if(u){let d=Number((s-0)*100/100);d=d>=100?100:d,u.style.left=`calc(${d}% + (${8-d*.15}px))`}},[s]);const j=()=>({backgroundSize:`${s}%`}),m=u=>{y(d=>d+u.amount),x()};return e.jsxs(De,{children:[e.jsxs(Te,{children:[e.jsx($e,{children:"Today"}),e.jsx(Ce,{type:"range",maxValue:100,minValue:0,value:s,readOnly:!0,style:j(),"aria-label":"Water range"}),e.jsxs(We,{children:[e.jsx(Ae,{children:"0%"}),e.jsx(Be,{id:"waterMark",children:`${s>100?100:s}%`}),e.jsx(He,{children:"100%"})]})]}),e.jsxs(Le,{onClick:a,children:[e.jsx(Ie,{children:e.jsx("use",{href:`${S}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(_,{onClose:x,onSave:m})]})},Ke=A(Re)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${Ne}) 1x,
    url(${Fe}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Ee}) 1x,
      url(${Oe}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Pe}) 1x,
      url(${Ve}) 2x
    );
  }
`,Qe=A.div`
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
`,Ze=A.div`
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
`,ot=()=>e.jsx(Ke,{children:e.jsxs(Qe,{children:[e.jsxs("div",{children:[e.jsx(Ge,{}),e.jsx(Ue,{})]}),e.jsxs(Ze,{children:[e.jsx(qe,{}),e.jsx(ze,{})]})]})});export{ot as default};
