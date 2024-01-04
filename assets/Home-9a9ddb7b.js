import{g as W,h as F,r as n,j as e,D as q,i as X,k as U,l as K,m as Q,o as Z,p as v,q as ee,t as C,v as N,w as P,M as te,x as se,y as ae,z as I,A as ne,E as oe,F as re,G as A,Y as ie,J as le,K as de,N as ce,Q as he,R as ue,S as V,s as w,U as G,V as Y,X as xe,Z as H,_ as E,$ as R,a0 as me,a1 as je,a2 as pe,a3 as ge,a4 as ye,a5 as fe,a6 as we,a7 as Me,a8 as Se,a9 as ke,aa as be,ab as De,ac as ve,ad as Te,ae as $e,af as Ce,ag as We,ah as Be,ai as Le,aj as Ie,ak as Ae,al as He,am as Ee,an as Re,ao as Oe,ap as Fe,aq as Ne,ar as Pe,n as B}from"./index-4fd0f5b1.js";import{S as Ve}from"./Section-070bffc1.js";import{i as Ge,a as Ye,b as _e,c as ze,d as Je,e as qe}from"./bubbleTablet@2x-6e22c1d3.js";const Xe=()=>{const{waterRate:t}=W(F),[a,s]=n.useState(!1),h=()=>{s(!0)},i=()=>{s(!1)},l=(t/1e3).toFixed(1)+" L";return e.jsxs(q,{children:[e.jsxs(X,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:l}),e.jsx("button",{onClick:h,children:"Edit"})]}),a&&e.jsx(U,{onClose:i})]}),e.jsx(K,{})]})};function _(t){return new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}function Ue(t){return new Date(t).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1})}const z=t=>{const[a,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Ke=({day:t,stats:{full:a,servings:s},month:h,position:i,onShow:l})=>{const m=n.useRef(null),{waterRate:g}=W(F);n.useEffect(()=>{if(!m.current)return;const{top:d,left:c,width:M}=i,u=m.current,f=u.offsetWidth;if(window.innerWidth<=320)u.style.width="100%",u.style.left="0",u.style.top=`${d-u.offsetHeight}px`,u.style.transform="translateX(0)";else{const S=c,x=window.innerWidth-c-M;S>f?u.style.left=`${c-f}px`:x>f?u.style.left=`${c+M}px`:(u.style.left="50%",u.style.transform="translateX(-50%)"),u.style.top=`${d-u.offsetHeight}px`}},[i]);const j=(g/1e3).toFixed(1)+" L";return e.jsx(Q,{ref:m,style:{visibility:l?"visible":"hidden"},children:e.jsxs(Z,{children:[e.jsx(v,{children:e.jsxs(ee,{children:[t,", ",z(h)]})}),e.jsxs(v,{children:["Daily norma:",e.jsx(C,{children:j})]}),e.jsxs(v,{children:["Fulfillment of the daily norm:",e.jsx(C,{children:a})]}),e.jsxs(v,{children:["How many servings of water:",e.jsx(C,{children:s})]})]})})},Qe=({onClose:t,recordId:a})=>{const s=N(),h=()=>{s(ne(a)).unwrap(),t()};return e.jsx(P,{onClose:t,title:"Delete Entry",children:e.jsxs(te,{children:[e.jsx(se,{children:"Are you sure you want to delete the entry?"}),e.jsxs(ae,{children:[e.jsx(I,{onClick:h,children:"Delete"}),e.jsx(I,{onClick:t,children:"Cancel"})]})]})})},O=()=>{const t=new Date,a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${a}-${s}`},Ze=()=>{const[t,a]=n.useState(O()),[s,h]=n.useState([]),[i,l]=n.useState(null),[m,g]=n.useState(!1),[j,d]=n.useState(null),[c,M]=n.useState({top:0,left:0,width:0}),[u,f]=n.useState(!1),D=r=>{const[o,p]=r.split("-").map(Number);return[31,o%4===0&&o%100!==0||o%400===0?29:28,31,30,31,30,31,31,30,31,30,31][p-1]},S=r=>{const o=new Date(t);r==="prev"?o.setMonth(o.getMonth()-1):o.setMonth(o.getMonth()+1);const p=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`;a(p);const b=O();d(p===b?null:r)},x=async r=>{},y=r=>{if(f(!0),i&&i.day===r){l(null);return}const o=k.current[r];if(o){const p=o.getBoundingClientRect();M({top:p.top+window.scrollY,left:p.left,width:p.width}),l({day:r,...s.find(b=>b.day===r)})}};n.useEffect(()=>{const r=o=>{i&&!k.current[i.day].contains(o.target)&&L()};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[i]),n.useEffect(()=>{x()},[t]),n.useEffect(()=>{h([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const $=n.useMemo(()=>[...Array(D(t)).keys()].map(r=>{const o=s.find(p=>p.day===r+1);return{day:r+1,percentage:o?o.percentage:0,isHighlighted:o&&o.percentage<100}}),[s,t]),k=n.useRef({}),L=()=>{f(!1),l(null)};return e.jsxs("div",{children:[e.jsxs(oe,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(re,{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[e.jsx(A,{onClick:()=>S("prev"),active:j==="next",children:"<"}),e.jsx("span",{children:z(t)}),m&&e.jsx(ie,{children:t.split("-")[0]}),e.jsx(A,{onClick:()=>S("next"),active:j==="prev",children:">"})]})]}),i&&e.jsx(Ke,{day:i.day,month:t,stats:i,position:c,onClose:L,onShow:u}),e.jsx(le,{children:$.map(({day:r,percentage:o,isHighlighted:p})=>e.jsx("div",{children:e.jsxs(de,{children:[e.jsx(ce,{ref:b=>k.current[r]=b,onClick:()=>y(r),isHighlighted:p,children:r}),e.jsxs("span",{children:[o,"%"]})," "]})},r))})]})},J=({initialAmount:t,initialTime:a,isEditing:s,onClose:h,existingRecordId:i})=>{const[l,m]=n.useState(t||0),[g,j]=n.useState(s&&a?Ue(a):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),d=N(),c=()=>m(x=>x+50),M=()=>m(x=>x>0?x-50:0),u=x=>{let y=x.target.value;y.startsWith("0")&&y.length>1&&(y=y.substring(1)),m(y)},f=()=>{const y=`${new Date().toISOString().slice(0,10)}T${g}`,$=new Date(y).toISOString(),k={waterVolume:l,date:$};s?d(Me({_id:i,...k})).unwrap():d(Se(k)).unwrap(),h()},D=s?"Edit the entered amount of water":"Add water",S=s&&a?_(a):"";return e.jsx(P,{onClose:h,title:D,children:e.jsxs(he,{children:[s&&e.jsxs(ue,{children:[e.jsx(V,{children:e.jsx("use",{href:`${w}#icon-glass`})}),e.jsx(G,{children:t?`${t} ml`:"No notes yet"}),e.jsx(Y,{children:a?`${S}`:""})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(xe,{children:[e.jsx(H,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(E,{onClick:M,children:e.jsx(R,{children:e.jsx("use",{href:`${w}#icon-decrement-outline`})})}),e.jsxs(me,{children:[e.jsx(je,{type:"number",value:l,onChange:u,onBlur:()=>m(x=>x||t||0)}),e.jsx("span",{children:"ml"})]}),e.jsx(E,{onClick:c,children:e.jsx(R,{children:e.jsx("use",{href:`${w}#icon-increment`})})})]})]}),e.jsxs(pe,{children:[e.jsx(H,{children:"Recording time:"}),e.jsx(ge,{type:"time",value:g,onChange:x=>j(x.target.value),step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(ye,{type:"number",value:l,onChange:u,onBlur:()=>m(x=>x||t||"")})]}),e.jsxs(fe,{children:[e.jsxs("span",{children:[l,"ml"]}),e.jsx(we,{onClick:f,children:"Save"})]})]})})},et=t=>t.waterData.today,T={glass:`${w}#icon-glass`,change:`${w}#icon-change`,delete:`${w}#icon-delete`,add:`${w}#icon-increment`},tt=()=>{const[t,a]=n.useState(!1),[s,h]=n.useState(null),[i,l]=n.useState(!1),{dailyWaterList:m}=W(et),g=()=>{h(null),a(!0)},j=c=>{h(c),l(!0)},d=c=>{h(c),a(!0)};return e.jsxs(ke,{children:[e.jsx(be,{children:"Today"}),e.jsxs(De,{children:[m.map(c=>e.jsxs(ve,{children:[e.jsxs(Te,{children:[e.jsx(V,{children:e.jsx("use",{href:T.glass})}),e.jsxs(G,{children:[c.waterVolume," ml"]}),e.jsx(Y,{children:_(c.date)})]}),e.jsxs($e,{children:[e.jsx(Ce,{onClick:()=>d(c),children:e.jsx("svg",{children:e.jsx("use",{href:T.change})})}),e.jsx(We,{onClick:()=>j(c),children:e.jsx("svg",{children:e.jsx("use",{href:T.delete})})})]})]},c._id)),e.jsx("li",{children:e.jsxs(Be,{onClick:g,children:[e.jsx("svg",{children:e.jsx("use",{href:T.add})}),"Add Water"]})})]}),i&&e.jsx(Qe,{onClose:()=>l(!1),recordId:s==null?void 0:s._id}),t&&e.jsx(J,{initialAmount:s==null?void 0:s.waterVolume,initialTime:s==null?void 0:s.date,isEditing:s!==null,existingRecordId:s==null?void 0:s._id,onClose:()=>a(!1)})]})},st=()=>{const[t,a]=n.useState(!1),[s,h]=n.useState(0),i=()=>{a(!0)},l=()=>{a(!1)};n.useEffect(()=>{const j=document.querySelector("#waterMark");if(j){let d=Number((s-0)*100/100);d=d>=100?100:d,j.style.left=`calc(${d}% + (${8-d*.15}px))`}},[s]);const m=()=>({backgroundSize:`${s}%`}),g=j=>{h(d=>d+j.amount),l()};return e.jsxs(Le,{children:[e.jsxs(Ie,{children:[e.jsx(Ae,{children:"Today"}),e.jsx(He,{type:"range",maxValue:100,minValue:0,value:s,readOnly:!0,style:m(),"aria-label":"Water range"}),e.jsxs(Ee,{children:[e.jsx(Re,{children:"0%"}),e.jsx(Oe,{id:"waterMark",children:`${s>100?100:s}%`}),e.jsx(Fe,{children:"100%"})]})]}),e.jsxs(Ne,{onClick:i,children:[e.jsx(Pe,{children:e.jsx("use",{href:`${w}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(J,{onClose:l,onSave:g})]})},at=B(Ve)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${Ge}) 1x,
    url(${Ye}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${_e}) 1x,
      url(${ze}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Je}) 1x,
      url(${qe}) 2x
    );
  }
`,nt=B.div`
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
`,ot=B.div`
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
`,ht=()=>e.jsx(at,{children:e.jsxs(nt,{children:[e.jsxs("div",{children:[e.jsx(Xe,{}),e.jsx(st,{})]}),e.jsxs(ot,{children:[e.jsx(tt,{}),e.jsx(Ze,{})]})]})});export{ht as default};
