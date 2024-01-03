import{g as A,h as E,r as i,j as e,D as _,i as z,k as X,l as q,m as U,o as K,p as D,q as Q,t as W,v as Z,w as ee,x as B,Y as te,y as se,z as ae,A as ne,E as F,F as oe,G as re,J as ie,K as O,s as M,M as P,N as V,Q as le,R as H,S as I,U as R,V as de,X as ce,Z as he,_ as ue,$ as xe,a0 as me,a1 as pe,a2 as G,a3 as J,a4 as je,a5 as ge,a6 as ye,a7 as fe,a8 as we,a9 as Me,aa as Se,ab as be,ac as ke,ad as ve,ae as De,af as Te,ag as $e,ah as Ce,ai as We,aj as Ae,ak as Le,al as Be,am as He,an as Ie,n as L}from"./index-205d3243.js";import{S as Re}from"./Section-f27ae267.js";import{i as Ne,a as Ee,b as Fe,c as Oe,d as Pe,e as Ve}from"./bubbleTablet@2x-6e22c1d3.js";const Ge=()=>{const{waterRate:t}=A(E),[o,s]=i.useState(!1),m=()=>{s(!0)},r=()=>{s(!1)},x=(t/1e3).toFixed(1)+" L";return e.jsxs(_,{children:[e.jsxs(z,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:x}),e.jsx("button",{onClick:m,children:"Edit"})]}),o&&e.jsx(X,{onClose:r})]}),e.jsx(q,{})]})},Je=t=>{const[o,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Ye=({day:t,stats:{full:o,servings:s},month:m,position:r,onShow:x})=>{const j=i.useRef(null),{waterRate:p}=A(E);i.useEffect(()=>{if(!j.current)return;const{top:h,left:y,width:l}=r,u=j.current,w=u.offsetWidth;if(window.innerWidth<=320)u.style.width="100%",u.style.left="0",u.style.top=`${h-u.offsetHeight}px`,u.style.transform="translateX(0)";else{const S=y,v=window.innerWidth-y-l;S>w?u.style.left=`${y-w}px`:v>w?u.style.left=`${y+l}px`:(u.style.left="50%",u.style.transform="translateX(-50%)"),u.style.top=`${h-u.offsetHeight}px`}},[r]);const c=(p/1e3).toFixed(1)+" L";return e.jsx(U,{ref:j,style:{visibility:x?"visible":"hidden"},children:e.jsxs(K,{children:[e.jsx(D,{children:e.jsxs(Q,{children:[t,", ",Je(m)]})}),e.jsxs(D,{children:["Daily norma:",e.jsx(W,{children:c})]}),e.jsxs(D,{children:["Fulfillment of the daily norm:",e.jsx(W,{children:o})]}),e.jsxs(D,{children:["How many servings of water:",e.jsx(W,{children:s})]})]})})},N=()=>{const t=new Date,o=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${o}-${s}`},_e=t=>{const[o,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},ze=()=>{const[t,o]=i.useState(N()),[s,m]=i.useState([]),[r,x]=i.useState(null),[j,p]=i.useState(!1),[c,h]=i.useState(null),[y,l]=i.useState({top:0,left:0,width:0}),[u,w]=i.useState(!1),k=n=>{const[a,g]=n.split("-").map(Number);return[31,a%4===0&&a%100!==0||a%400===0?29:28,31,30,31,30,31,31,30,31,30,31][g-1]},S=n=>{const a=new Date(t);n==="prev"?a.setMonth(a.getMonth()-1):a.setMonth(a.getMonth()+1);const g=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}`;o(g);const b=N();h(g===b?null:n)},v=async n=>{},$=n=>{if(w(!0),r&&r.day===n){x(null);return}const a=d.current[n];if(a){const g=a.getBoundingClientRect();l({top:g.top+window.scrollY,left:g.left,width:g.width}),x({day:n,...s.find(b=>b.day===n)})}};i.useEffect(()=>{const n=a=>{r&&!d.current[r.day].contains(a.target)&&f()};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[r]),i.useEffect(()=>{v()},[t]),i.useEffect(()=>{m([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const C=i.useMemo(()=>[...Array(k(t)).keys()].map(n=>{const a=s.find(g=>g.day===n+1);return{day:n+1,percentage:a?a.percentage:0,isHighlighted:a&&a.percentage<100}}),[s,t]),d=i.useRef({}),f=()=>{w(!1),x(null)};return e.jsxs("div",{children:[e.jsxs(Z,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(ee,{onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[e.jsx(B,{onClick:()=>S("prev"),active:c==="next",children:"<"}),e.jsx("span",{children:_e(t)}),j&&e.jsx(te,{children:t.split("-")[0]}),e.jsx(B,{onClick:()=>S("next"),active:c==="prev",children:">"})]})]}),r&&e.jsx(Ye,{day:r.day,month:t,stats:r,position:y,onClose:f,onShow:u}),e.jsx(se,{children:C.map(({day:n,percentage:a,isHighlighted:g})=>e.jsx("div",{children:e.jsxs(ae,{children:[e.jsx(ne,{ref:b=>d.current[n]=b,onClick:()=>$(n),isHighlighted:g,children:n}),e.jsxs("span",{children:[a,"%"]})," "]})},n))})]})},Y=({initialAmount:t,initialTime:o,isEditing:s,onSave:m,onClose:r,existingRecordId:x})=>{const j=d=>new Date(d).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),[p,c]=i.useState(t||0),[h,y]=i.useState(s&&o?j(o):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),l=F(),u=()=>c(d=>d+50),w=()=>c(d=>d>0?d-50:0),k=d=>{let f=d.target.value;f.startsWith("0")&&f.length>1&&(f=f.substring(1)),c(f)},S=d=>y(d.target.value),v=()=>{const f=`${new Date().toISOString().slice(0,10)}T${h}`,n=new Date(f).toISOString(),a={waterVolume:p,date:n};s?l(G({_id:x,...a})).unwrap():l(J(a)).unwrap(),r()},$=s?"Edit the entered amount of water":"Add water",C=s&&o?j(o):"";return e.jsx(oe,{onClose:r,title:$,children:e.jsxs(re,{children:[s&&e.jsxs(ie,{children:[e.jsx(O,{children:e.jsx("use",{href:`${M}#icon-glass`})}),e.jsx(P,{children:t?`${t} ml`:"No notes yet"}),e.jsx(V,{children:o?`${C} AM`:""})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(le,{children:[e.jsx(H,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(I,{onClick:w,children:e.jsx(R,{children:e.jsx("use",{href:`${M}#icon-decrement-outline`})})}),e.jsxs(de,{children:[e.jsx(ce,{type:"number",value:p,onChange:k,onBlur:()=>c(d=>d||t||0)}),e.jsx("span",{children:"ml"})]}),e.jsx(I,{onClick:u,children:e.jsx(R,{children:e.jsx("use",{href:`${M}#icon-increment`})})})]})]}),e.jsxs(he,{children:[e.jsx(H,{children:"Recording time:"}),e.jsx(ue,{type:"time",value:h,onChange:S,step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(xe,{type:"number",value:p,onChange:k,onBlur:()=>c(d=>d||t||"")})]}),e.jsxs(me,{children:[e.jsxs("span",{children:[p,"ml"]}),e.jsx(pe,{onClick:v,children:"Save"})]})]})})},Xe=t=>t.waterData.today,T={glass:`${M}#icon-glass`,change:`${M}#icon-change`,delete:`${M}#icon-delete`,add:`${M}#icon-increment`},qe=()=>{const[t,o]=i.useState(!1),[s,m]=i.useState(null),r=F(),x=A(Xe),j=()=>{m(null),o(!0)},p=l=>{m(l),o(!0)},c=()=>{o(!1)},h=l=>{if(s!==null){const u={...l,_id:s._id};r(G(u)).unwrap()}else r(J(l)).unwrap();c()};function y(l){return new Date(l).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}return e.jsxs(je,{children:[e.jsx(ge,{children:"Today"}),e.jsxs(ye,{children:[x.dailyWaterList.map(l=>e.jsxs(fe,{children:[e.jsxs(we,{children:[e.jsx(O,{children:e.jsx("use",{href:T.glass})}),e.jsxs(P,{children:[l.waterVolume," ml"]}),e.jsx(V,{children:y(l.date)})]}),e.jsxs(Me,{children:[e.jsx(Se,{onClick:()=>p(l),children:e.jsx("svg",{children:e.jsx("use",{href:T.change})})}),e.jsx(be,{onClick:()=>r(ke(l._id)),children:e.jsx("svg",{children:e.jsx("use",{href:T.delete})})})]})]},l._id)),e.jsx("li",{children:e.jsxs(ve,{onClick:j,children:[e.jsx("svg",{children:e.jsx("use",{href:T.add})}),"Add Water"]})})]}),t&&e.jsx(Y,{initialAmount:s==null?void 0:s.waterVolume,initialTime:s==null?void 0:s.date,isEditing:s!==null,existingRecordId:s==null?void 0:s._id,onSave:h,onClose:c})]})},Ue=()=>{const[t,o]=i.useState(!1),[s,m]=i.useState(0),r=()=>{o(!0)},x=()=>{o(!1)};i.useEffect(()=>{const c=document.querySelector("#waterMark");if(c){let h=Number((s-0)*100/100);h=h>=100?100:h,c.style.left=`calc(${h}% + (${8-h*.15}px))`}},[s]);const j=()=>({backgroundSize:`${s}%`}),p=c=>{m(h=>h+c.amount),x()};return e.jsxs(De,{children:[e.jsxs(Te,{children:[e.jsx($e,{children:"Today"}),e.jsx(Ce,{type:"range",maxValue:100,minValue:0,value:s,readOnly:!0,style:j(),"aria-label":"Water range"}),e.jsxs(We,{children:[e.jsx(Ae,{children:"0%"}),e.jsx(Le,{id:"waterMark",children:`${s>100?100:s}%`}),e.jsx(Be,{children:"100%"})]})]}),e.jsxs(He,{onClick:r,children:[e.jsx(Ie,{children:e.jsx("use",{href:`${M}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(Y,{onClose:x,onSave:p})]})},Ke=L(Re)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${Ne}) 1x,
    url(${Ee}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Fe}) 1x,
      url(${Oe}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Pe}) 1x,
      url(${Ve}) 2x
    );
  }
`,Qe=L.div`
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
`,Ze=L.div`
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
