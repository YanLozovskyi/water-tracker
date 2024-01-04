import{g as W,h as P,r as n,j as e,D as X,i as U,k as J,l as K,m as Q,o as Z,p as v,q as ee,t as V,v as C,w as B,x as G,M as te,y as se,z as ae,A,E as ne,F as oe,G as re,J as L,Y as le,K as ie,N as de,Q as ce,R as he,S as N,U as ue,V as xe,X as Y,s as M,Z as _,_ as z,$ as me,a0 as E,a1 as R,a2 as O,a3 as je,a4 as pe,a5 as ge,a6 as ye,a7 as fe,a8 as we,a9 as Me,aa as Se,ab as ke,ac as De,ad as be,ae as ve,af as Te,ag as $e,ah as Ce,ai as We,aj as Be,ak as Ie,al as He,am as Ae,an as Le,ao as Ee,ap as Re,aq as Oe,ar as Fe,as as Pe,at as Ve,au as Ge,av as Ne,aw as Ye,n as I}from"./index-4e8f86e9.js";import{S as _e}from"./Section-0648f8e4.js";import{i as ze,a as qe,b as Xe,c as Ue,d as Je,e as Ke}from"./bubbleTablet@2x-6e22c1d3.js";const Qe=()=>{const{waterRate:t}=W(P),[i,s]=n.useState(!1),a=()=>{s(!0)},r=()=>{s(!1)},c=(t/1e3).toFixed(1)+" L";return e.jsxs(X,{children:[e.jsxs(U,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:c}),e.jsx("button",{onClick:a,children:"Edit"})]}),i&&e.jsx(J,{onClose:r})]}),e.jsx(K,{})]})},Ze=({day:t,stats:{full:i,servings:s},month:a,position:r,onShow:c})=>{const x=n.useRef(null),{waterRate:j}=W(P);n.useEffect(()=>{if(!x.current)return;const{top:d,left:y,width:m}=r,h=x.current,w=h.offsetWidth;if(window.innerWidth<=320)h.style.width="100%",h.style.left="0",h.style.top=`${d-h.offsetHeight}px`,h.style.transform="translateX(0)";else{const S=y,u=window.innerWidth-y-m;S>w?h.style.left=`${y-w}px`:u>w?h.style.left=`${y+m}px`:(h.style.left="50%",h.style.transform="translateX(-50%)"),h.style.top=`${d-h.offsetHeight}px`}},[r]);const p=(j/1e3).toFixed(1)+" L";return e.jsx(Q,{ref:x,style:{visibility:c?"visible":"hidden"},children:e.jsxs(Z,{children:[e.jsx(v,{children:e.jsxs(ee,{children:[t,", ",V(a)]})}),e.jsxs(v,{children:["Daily norma:",e.jsx(C,{children:p})]}),e.jsxs(v,{children:["Fulfillment of the daily norm:",e.jsx(C,{children:i})]}),e.jsxs(v,{children:["How many servings of water:",e.jsx(C,{children:s})]})]})})},et=({onClose:t,recordId:i})=>{const s=B(),a=()=>{s(ne(i)).unwrap(),t()};return e.jsx(G,{onClose:t,title:"Delete Entry",children:e.jsxs(te,{children:[e.jsx(se,{children:"Are you sure you want to delete the entry?"}),e.jsxs(ae,{children:[e.jsx(A,{onClick:a,children:"Delete"}),e.jsx(A,{onClick:t,children:"Cancel"})]})]})})},F=()=>{const t=new Date,i=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${i}-${s}`},tt=()=>{const[t,i]=n.useState(F()),[s,a]=n.useState([]),[r,c]=n.useState(null),[x,j]=n.useState(!1),[p,d]=n.useState(null),[y,m]=n.useState({top:0,left:0,width:0}),[h,w]=n.useState(!1),b=l=>{const[o,g]=l.split("-").map(Number);return[31,o%4===0&&o%100!==0||o%400===0?29:28,31,30,31,30,31,31,30,31,30,31][g-1]},S=l=>{const o=new Date(t);l==="prev"?o.setMonth(o.getMonth()-1):o.setMonth(o.getMonth()+1);const g=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`;i(g);const D=F();d(g===D?null:l)},u=async l=>{},f=l=>{if(w(!0),r&&r.day===l){c(null);return}const o=k.current[l];if(o){const g=o.getBoundingClientRect();m({top:g.top+window.scrollY,left:g.left,width:g.width}),c({day:l,...s.find(D=>D.day===l)})}};n.useEffect(()=>{const l=o=>{r&&!k.current[r.day].contains(o.target)&&H()};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[r]),n.useEffect(()=>{u()},[t]),n.useEffect(()=>{a([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const $=n.useMemo(()=>[...Array(b(t)).keys()].map(l=>{const o=s.find(g=>g.day===l+1);return{day:l+1,percentage:o?o.percentage:0,isHighlighted:o&&o.percentage<100}}),[s,t]),k=n.useRef({}),H=()=>{w(!1),c(null)};return e.jsxs("div",{children:[e.jsxs(oe,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(re,{onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[e.jsx(L,{onClick:()=>S("prev"),active:p==="next",children:"<"}),e.jsx("span",{children:V(t)}),x&&e.jsx(le,{children:t.split("-")[0]}),e.jsx(L,{onClick:()=>S("next"),active:p==="prev",children:">"})]})]}),r&&e.jsx(Ze,{day:r.day,month:t,stats:r,position:y,onClose:H,onShow:h}),e.jsx(ie,{children:$.map(({day:l,percentage:o,isHighlighted:g})=>e.jsx("div",{children:e.jsxs(de,{children:[e.jsx(ce,{ref:D=>k.current[l]=D,onClick:()=>f(l),isHighlighted:g,children:l}),e.jsxs("span",{children:[o,"%"]})," "]})},l))})]})},q=({initialAmount:t,initialTime:i,isEditing:s,onClose:a,existingRecordId:r})=>{const[c,x]=n.useState(t||0),[j,p]=n.useState(s&&i?he(i):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),d=B(),y=()=>x(u=>u+50),m=()=>x(u=>u>0?u-50:0),h=u=>{let f=u.target.value;f.startsWith("0")&&f.length>1&&(f=f.substring(1)),x(f)},w=()=>{const f=`${new Date().toISOString().slice(0,10)}T${j}`,$=new Date(f).toISOString(),k={waterVolume:c,date:$};s?d(Se({_id:r,...k})).unwrap():d(ke(k)).unwrap(),a()},b=s?"Edit the entered amount of water":"Add water",S=s&&i?N(i):"";return e.jsx(G,{onClose:a,title:b,children:e.jsxs(ue,{children:[s&&e.jsxs(xe,{children:[e.jsx(Y,{children:e.jsx("use",{href:`${M}#icon-glass`})}),e.jsx(_,{children:t?`${t} ml`:"No notes yet"}),e.jsx(z,{children:i?`${S}`:""})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(me,{children:[e.jsx(E,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(R,{onClick:m,children:e.jsx(O,{children:e.jsx("use",{href:`${M}#icon-decrement-outline`})})}),e.jsxs(je,{children:[e.jsx(pe,{type:"number",value:c,onChange:h,onBlur:()=>x(u=>u||t||0)}),e.jsx("span",{children:"ml"})]}),e.jsx(R,{onClick:y,children:e.jsx(O,{children:e.jsx("use",{href:`${M}#icon-increment`})})})]})]}),e.jsxs(ge,{children:[e.jsx(E,{children:"Recording time:"}),e.jsx(ye,{type:"time",value:j,onChange:u=>p(u.target.value),step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(fe,{type:"number",value:c,onChange:h,onBlur:()=>x(u=>u||t||"")})]}),e.jsxs(we,{children:[e.jsxs("span",{children:[c,"ml"]}),e.jsx(Me,{onClick:w,children:"Save"})]})]})})},st=t=>t.waterData.today,T={glass:`${M}#icon-glass`,change:`${M}#icon-change`,delete:`${M}#icon-delete`,add:`${M}#icon-increment`},at=()=>{const t=B(),[i,s]=n.useState(!1),[a,r]=n.useState(null),[c,x]=n.useState(!1),{dailyWaterList:j}=W(st);n.useEffect(()=>{t(De()),t(be({startDate:"2024-01-01",endDate:"2024-01-31"}))},[t]);const p=()=>{r(null),s(!0)},d=m=>{r(m),x(!0)},y=m=>{r(m),s(!0)};return e.jsxs(ve,{children:[e.jsx(Te,{children:"Today"}),e.jsxs($e,{children:[j==null?void 0:j.map(m=>e.jsxs(Ce,{children:[e.jsxs(We,{children:[e.jsx(Y,{children:e.jsx("use",{href:T.glass})}),e.jsxs(_,{children:[m.waterVolume," ml"]}),e.jsx(z,{children:N(m.date)})]}),e.jsxs(Be,{children:[e.jsx(Ie,{onClick:()=>y(m),children:e.jsx("svg",{children:e.jsx("use",{href:T.change})})}),e.jsx(He,{onClick:()=>d(m),children:e.jsx("svg",{children:e.jsx("use",{href:T.delete})})})]})]},m._id)),e.jsx("li",{children:e.jsxs(Ae,{onClick:p,children:[e.jsx("svg",{children:e.jsx("use",{href:T.add})}),"Add Water"]})})]}),c&&e.jsx(et,{onClose:()=>x(!1),recordId:a==null?void 0:a._id}),i&&e.jsx(q,{initialAmount:a==null?void 0:a.waterVolume,initialTime:a==null?void 0:a.date,isEditing:a!==null,existingRecordId:a==null?void 0:a._id,onClose:()=>s(!1)})]})},nt=()=>{const[t,i]=n.useState(!1),[s,a]=n.useState(0),r=()=>{i(!0)},c=()=>{i(!1)};n.useEffect(()=>{const p=document.querySelector("#waterMark");if(p){let d=Number((s-0)*100/100);d=d>=100?100:d,p.style.left=`calc(${d}% + (${8-d*.15}px))`}},[s]);const x=()=>({backgroundSize:`${s}%`}),j=p=>{a(d=>d+p.amount),c()};return e.jsxs(Le,{children:[e.jsxs(Ee,{children:[e.jsx(Re,{children:"Today"}),e.jsx(Oe,{type:"range",maxValue:100,minValue:0,value:s,readOnly:!0,style:x(),"aria-label":"Water range"}),e.jsxs(Fe,{children:[e.jsx(Pe,{children:"0%"}),e.jsx(Ve,{id:"waterMark",children:`${s>100?100:s}%`}),e.jsx(Ge,{children:"100%"})]})]}),e.jsxs(Ne,{onClick:r,children:[e.jsx(Ye,{children:e.jsx("use",{href:`${M}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(q,{onClose:c,onSave:j})]})},ot=I(_e)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${ze}) 1x,
    url(${qe}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Xe}) 1x,
      url(${Ue}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Je}) 1x,
      url(${Ke}) 2x
    );
  }
`,rt=I.div`
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
`,lt=I.div`
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
`,xt=()=>e.jsx(ot,{children:e.jsxs(rt,{children:[e.jsxs("div",{children:[e.jsx(Qe,{}),e.jsx(nt,{})]}),e.jsxs(lt,{children:[e.jsx(at,{}),e.jsx(tt,{})]})]})});export{xt as default};
