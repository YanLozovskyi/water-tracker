import{g as A,h as O,r,j as e,D as q,i as X,k as U,l as K,m as Q,o as Z,p as v,q as ee,t as W,v as F,M as te,w as se,x as ae,y as L,z as ne,A as oe,E as H,Y as re,F as ie,G as le,J as de,K as P,N as ce,Q as he,R as V,s as b,S as G,U as J,V as ue,X as I,Z as R,_ as N,$ as xe,a0 as me,a1 as pe,a2 as je,a3 as ye,a4 as ge,a5 as fe,a6 as Y,a7 as _,a8 as Me,a9 as we,aa as Se,ab as be,ac as De,ad as ke,ae as ve,af as Te,ag as $e,ah as Ce,ai as We,aj as Ae,ak as Be,al as Le,am as He,an as Ie,ao as Re,ap as Ne,aq as Ee,ar as Oe,n as B}from"./index-a42bd042.js";import{S as Fe}from"./Section-2a2038a6.js";import{i as Pe,a as Ve,b as Ge,c as Je,d as Ye,e as _e}from"./bubbleTablet@2x-6e22c1d3.js";const ze=()=>{const{waterRate:t}=A(O),[n,s]=r.useState(!1),m=()=>{s(!0)},l=()=>{s(!1)},x=(t/1e3).toFixed(1)+" L";return e.jsxs(q,{children:[e.jsxs(X,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:x}),e.jsx("button",{onClick:m,children:"Edit"})]}),n&&e.jsx(U,{onClose:l})]}),e.jsx(K,{})]})},qe=t=>{const[n,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Xe=({day:t,stats:{full:n,servings:s},month:m,position:l,onShow:x})=>{const p=r.useRef(null),{waterRate:j}=A(O);r.useEffect(()=>{if(!p.current)return;const{top:c,left:g,width:f}=l,h=p.current,M=h.offsetWidth;if(window.innerWidth<=320)h.style.width="100%",h.style.left="0",h.style.top=`${c-h.offsetHeight}px`,h.style.transform="translateX(0)";else{const S=g,k=window.innerWidth-g-f;S>M?h.style.left=`${g-M}px`:k>M?h.style.left=`${g+f}px`:(h.style.left="50%",h.style.transform="translateX(-50%)"),h.style.top=`${c-h.offsetHeight}px`}},[l]);const u=(j/1e3).toFixed(1)+" L";return e.jsx(Q,{ref:p,style:{visibility:x?"visible":"hidden"},children:e.jsxs(Z,{children:[e.jsx(v,{children:e.jsxs(ee,{children:[t,", ",qe(m)]})}),e.jsxs(v,{children:["Daily norma:",e.jsx(W,{children:u})]}),e.jsxs(v,{children:["Fulfillment of the daily norm:",e.jsx(W,{children:n})]}),e.jsxs(v,{children:["How many servings of water:",e.jsx(W,{children:s})]})]})})},Ue=({onClose:t,onDelete:n,title:s})=>e.jsx(F,{onClose:t,title:s,children:e.jsxs(te,{children:[e.jsx(se,{children:"Are you sure you want to delete the entry?"}),e.jsxs(ae,{children:[e.jsx(L,{onClick:n,children:"Delete"}),e.jsx(L,{onClick:t,children:"Cancel"})]})]})}),E=()=>{const t=new Date,n=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${n}-${s}`},Ke=t=>{const[n,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Qe=()=>{const[t,n]=r.useState(E()),[s,m]=r.useState([]),[l,x]=r.useState(null),[p,j]=r.useState(!1),[u,c]=r.useState(null),[g,f]=r.useState({top:0,left:0,width:0}),[h,M]=r.useState(!1),i=o=>{const[a,y]=o.split("-").map(Number);return[31,a%4===0&&a%100!==0||a%400===0?29:28,31,30,31,30,31,31,30,31,30,31][y-1]},S=o=>{const a=new Date(t);o==="prev"?a.setMonth(a.getMonth()-1):a.setMonth(a.getMonth()+1);const y=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}`;n(y);const D=E();c(y===D?null:o)},k=async o=>{},$=o=>{if(M(!0),l&&l.day===o){x(null);return}const a=d.current[o];if(a){const y=a.getBoundingClientRect();f({top:y.top+window.scrollY,left:y.left,width:y.width}),x({day:o,...s.find(D=>D.day===o)})}};r.useEffect(()=>{const o=a=>{l&&!d.current[l.day].contains(a.target)&&w()};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[l]),r.useEffect(()=>{k()},[t]),r.useEffect(()=>{m([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const C=r.useMemo(()=>[...Array(i(t)).keys()].map(o=>{const a=s.find(y=>y.day===o+1);return{day:o+1,percentage:a?a.percentage:0,isHighlighted:a&&a.percentage<100}}),[s,t]),d=r.useRef({}),w=()=>{M(!1),x(null)};return e.jsxs("div",{children:[e.jsxs(ne,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(oe,{onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:[e.jsx(H,{onClick:()=>S("prev"),active:u==="next",children:"<"}),e.jsx("span",{children:Ke(t)}),p&&e.jsx(re,{children:t.split("-")[0]}),e.jsx(H,{onClick:()=>S("next"),active:u==="prev",children:">"})]})]}),l&&e.jsx(Xe,{day:l.day,month:t,stats:l,position:g,onClose:w,onShow:h}),e.jsx(ie,{children:C.map(({day:o,percentage:a,isHighlighted:y})=>e.jsx("div",{children:e.jsxs(le,{children:[e.jsx(de,{ref:D=>d.current[o]=D,onClick:()=>$(o),isHighlighted:y,children:o}),e.jsxs("span",{children:[a,"%"]})," "]})},o))})]})},z=({initialAmount:t,initialTime:n,isEditing:s,onSave:m,onClose:l,existingRecordId:x})=>{const p=d=>new Date(d).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),[j,u]=r.useState(t||0),[c,g]=r.useState(s&&n?p(n):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),f=P(),h=()=>u(d=>d+50),M=()=>u(d=>d>0?d-50:0),i=d=>{let w=d.target.value;w.startsWith("0")&&w.length>1&&(w=w.substring(1)),u(w)},S=d=>g(d.target.value),k=()=>{const w=`${new Date().toISOString().slice(0,10)}T${c}`,o=new Date(w).toISOString(),a={waterVolume:j,date:o};s?f(Y({_id:x,...a})).unwrap():f(_(a)).unwrap(),l()},$=s?"Edit the entered amount of water":"Add water",C=s&&n?p(n):"";return e.jsx(F,{onClose:l,title:$,children:e.jsxs(ce,{children:[s&&e.jsxs(he,{children:[e.jsx(V,{children:e.jsx("use",{href:`${b}#icon-glass`})}),e.jsx(G,{children:t?`${t} ml`:"No notes yet"}),e.jsx(J,{children:n?`${C} AM`:""})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(ue,{children:[e.jsx(I,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(R,{onClick:M,children:e.jsx(N,{children:e.jsx("use",{href:`${b}#icon-decrement-outline`})})}),e.jsxs(xe,{children:[e.jsx(me,{type:"number",value:j,onChange:i,onBlur:()=>u(d=>d||t||0)}),e.jsx("span",{children:"ml"})]}),e.jsx(R,{onClick:h,children:e.jsx(N,{children:e.jsx("use",{href:`${b}#icon-increment`})})})]})]}),e.jsxs(pe,{children:[e.jsx(I,{children:"Recording time:"}),e.jsx(je,{type:"time",value:c,onChange:S,step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(ye,{type:"number",value:j,onChange:i,onBlur:()=>u(d=>d||t||"")})]}),e.jsxs(ge,{children:[e.jsxs("span",{children:[j,"ml"]}),e.jsx(fe,{onClick:k,children:"Save"})]})]})})},Ze=t=>t.waterData.today,T={glass:`${b}#icon-glass`,change:`${b}#icon-change`,delete:`${b}#icon-delete`,add:`${b}#icon-increment`},et=()=>{const[t,n]=r.useState(!1),[s,m]=r.useState(null),[l,x]=r.useState(!1),p=P(),{dailyWaterList:j}=A(Ze),u=()=>{m(null),n(!0)},c=i=>{m(i),x(!0)},g=i=>{m(i),n(!0)},f=()=>{n(!1)},h=i=>{if(s!==null){const S={...i,_id:s._id};p(Y(S)).unwrap()}else p(_(i)).unwrap();f()};function M(i){return new Date(i).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}return e.jsxs(Me,{children:[e.jsx(we,{children:"Today"}),e.jsxs(Se,{children:[j.map(i=>e.jsxs(be,{children:[e.jsxs(De,{children:[e.jsx(V,{children:e.jsx("use",{href:T.glass})}),e.jsxs(G,{children:[i.waterVolume," ml"]}),e.jsx(J,{children:M(i.date)})]}),e.jsxs(ke,{children:[e.jsx(ve,{onClick:()=>g(i),children:e.jsx("svg",{children:e.jsx("use",{href:T.change})})}),e.jsx(Te,{onClick:()=>c(i),children:e.jsx("svg",{children:e.jsx("use",{href:T.delete})})})]}),l&&e.jsx(Ue,{onClose:()=>x(!1),onDelete:()=>p($e(i._id)),title:"Delete Entry"})]},i._id)),e.jsx("li",{children:e.jsxs(Ce,{onClick:u,children:[e.jsx("svg",{children:e.jsx("use",{href:T.add})}),"Add Water"]})})]}),t&&e.jsx(z,{initialAmount:s==null?void 0:s.waterVolume,initialTime:s==null?void 0:s.date,isEditing:s!==null,existingRecordId:s==null?void 0:s._id,onSave:h,onClose:f})]})},tt=()=>{const[t,n]=r.useState(!1),[s,m]=r.useState(0),l=()=>{n(!0)},x=()=>{n(!1)};r.useEffect(()=>{const u=document.querySelector("#waterMark");if(u){let c=Number((s-0)*100/100);c=c>=100?100:c,u.style.left=`calc(${c}% + (${8-c*.15}px))`}},[s]);const p=()=>({backgroundSize:`${s}%`}),j=u=>{m(c=>c+u.amount),x()};return e.jsxs(We,{children:[e.jsxs(Ae,{children:[e.jsx(Be,{children:"Today"}),e.jsx(Le,{type:"range",maxValue:100,minValue:0,value:s,readOnly:!0,style:p(),"aria-label":"Water range"}),e.jsxs(He,{children:[e.jsx(Ie,{children:"0%"}),e.jsx(Re,{id:"waterMark",children:`${s>100?100:s}%`}),e.jsx(Ne,{children:"100%"})]})]}),e.jsxs(Ee,{onClick:l,children:[e.jsx(Oe,{children:e.jsx("use",{href:`${b}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(z,{onClose:x,onSave:j})]})},st=B(Fe)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${Pe}) 1x,
    url(${Ve}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Ge}) 1x,
      url(${Je}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Ye}) 1x,
      url(${_e}) 2x
    );
  }
`,at=B.div`
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
`,nt=B.div`
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
`,ct=()=>e.jsx(st,{children:e.jsxs(at,{children:[e.jsxs("div",{children:[e.jsx(ze,{}),e.jsx(tt,{})]}),e.jsxs(nt,{children:[e.jsx(et,{}),e.jsx(Qe,{})]})]})});export{ct as default};
