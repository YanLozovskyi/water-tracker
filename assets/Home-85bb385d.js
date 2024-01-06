import{g as b,h as O,r as o,j as e,D as q,i as J,k as K,l as Q,m as Z,o as ee,p as te,q as T,t as se,v as H,w as v,x as G,y as ae,z as ne,A as oe,E as I,F as re,G as P,J as F,K as ie,M as le,N as de,Q as L,R as ce,Y as he,S as ue,U as xe,V as me,X as je,Z as U,_ as pe,$ as ge,a0 as z,s as D,a1 as N,a2 as _,a3 as fe,a4 as V,a5 as E,a6 as R,a7 as ye,a8 as Me,a9 as we,aa as Se,ab as ke,ac as De,ad as be,ae as ve,af as $e,ag as W,ah as Te,ai as Ce,aj as We,ak as Be,al as He,am as Ae,an as Ie,ao as Pe,ap as Le,aq as Ve,ar as Ee,as as Re,at as Oe,au as Ge,av as Fe,aw as Ue,ax as ze,ay as Ne,az as _e,n as A}from"./index-fe0400aa.js";import{S as Ye}from"./Section-1b6fdc1b.js";import{i as Xe,a as qe,b as Je,c as Ke,d as Qe,e as Ze}from"./bubbleTablet@2x-6e22c1d3.js";const et=()=>{const{waterRate:t}=b(O),[n,s]=o.useState(!1),a=()=>{s(!0)},i=()=>{s(!1)},g=(t/1e3).toFixed(1)+" L";return e.jsxs(q,{children:[e.jsxs(J,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:g}),e.jsx("button",{onClick:a,children:"Edit"})]}),n&&e.jsx(K,{onClose:i})]}),e.jsx(Q,{})]})},Y=t=>t.waterData.today,tt=t=>t.waterData.month,st=({stats:t,position:n,onShow:s})=>{const{date:a,waterVolumeSum:i,drinkCount:g,waterVolumePercentage:m}=t,l=o.useRef(null),{waterRate:f}=b(O);o.useEffect(()=>{if(!l.current)return;const{top:w,left:d,width:S}=n,u=l.current,k=u.offsetWidth;if(window.innerWidth<=320)u.style.width="100%",u.style.left="0",u.style.top=`${w-u.offsetHeight}px`,u.style.transform="translateX(0)";else{const r=d,p=window.innerWidth-d-S;r>k?u.style.left=`${d-k}px`:p>k?u.style.left=`${d+S}px`:(u.style.left="50%",u.style.transform="translateX(-50%)"),u.style.top=`${w-u.offsetHeight}px`}},[n]);const M=(f/1e3).toFixed(1)+" L",j=a?Z(a,"d, MMMM"):"";return e.jsx(ee,{ref:l,style:{visibility:s?"visible":"hidden"},children:e.jsxs(te,{children:[e.jsx(T,{children:e.jsx(se,{children:j})}),e.jsxs(T,{children:["Daily norma:",e.jsx(H,{children:M})]}),e.jsxs(T,{children:["Fulfillment of the daily norm:",e.jsxs(H,{children:[Math.round(m),"%"]})]}),e.jsxs(T,{children:["How many servings of water:",e.jsx(H,{children:g})]})]})})},at=({onClose:t,recordId:n})=>{const s=v(),a=()=>{s(re(n)).unwrap(),t()};return e.jsx(G,{onClose:t,title:"Delete Entry",children:e.jsxs(ae,{children:[e.jsx(ne,{children:"Are you sure you want to delete the entry?"}),e.jsxs(oe,{children:[e.jsx(I,{onClick:a,children:"Delete"}),e.jsx(I,{onClick:t,children:"Cancel"})]})]})})},nt=()=>{const t=v(),n=b(tt),[s,a]=o.useState(P()),[i,g]=o.useState(null),[m,l]=o.useState(!1),[f,M]=o.useState({top:0,left:0,width:0}),[j,w]=o.useState(null),[d,S]=o.useState(!1);o.useEffect(()=>{t(F(s))},[s,t]);const u=o.useMemo(()=>[...Array(ie(s)).keys()].map(c=>{const h=`${s}-${(c+1).toString().padStart(2,"0")}`,x=n.find(y=>y.date.startsWith(h));return{day:c+1,percentage:x?x.waterVolumePercentage:0,isHighlighted:x&&x.waterVolumePercentage<100}}),[n,s]),k=c=>{const h=new Date(s);c==="prev"?h.setMonth(h.getMonth()-1):h.setMonth(h.getMonth()+1);const x=`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,"0")}`;a(x);const y=P();g(x===y?null:c)},$=c=>{const h=`${s}-${c.toString().padStart(2,"0")}`,x=n.find(y=>y.date.startsWith(h));if(x)if(j&&j.date===x.date)r();else{w(x),l(!0);const y=p.current[c];if(y){const B=y.getBoundingClientRect();M({top:B.top+window.scrollY,left:B.left,width:B.width})}}},r=()=>{l(!1),w(null)},p=o.useRef({});return o.useEffect(()=>{const c=h=>{var x;m&&!((x=p.current[j.day])!=null&&x.contains(h.target))&&r()};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[m,j]),e.jsxs("div",{children:[e.jsxs(le,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(de,{onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:[e.jsx(L,{onClick:()=>k("prev"),active:i==="next",children:"<"}),e.jsx("span",{children:ce(s)}),d&&e.jsx(he,{children:s.split("-")[0]}),e.jsx(L,{onClick:()=>k("next"),active:i==="prev",children:">"})]})]}),j&&e.jsx(st,{stats:j,position:f,onClose:r,onShow:m}),e.jsx(ue,{children:u.map(({day:c,percentage:h,isHighlighted:x})=>e.jsx("div",{children:e.jsxs(xe,{children:[e.jsx(me,{ref:y=>p.current[c]=y,onClick:()=>$(c),isHighlighted:x,children:c}),e.jsxs("span",{children:[Math.round(h),"%"]})]})},c))})]})},X=({initialAmount:t,initialTime:n,isEditing:s,onClose:a,existingRecordId:i,onUpdate:g})=>{const[m,l]=o.useState(t||0),[f,M]=o.useState(s&&n?je(n):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),j=v(),w=()=>l(r=>r+50),d=()=>l(r=>r>0?r-50:0),S=r=>{let p=r.target.value;p.startsWith("0")&&p.length>1&&(p=p.substring(1)),l(p)},u=()=>{const p=`${new Date().toISOString().slice(0,10)}T${f}`,c=new Date(p).toISOString(),h={waterVolume:m,date:c};s?j(ve({_id:i,...h})).unwrap():j($e(h)).unwrap(),g(),a()},k=s?"Edit the entered amount of water":"Add water",$=s&&n?U(n):"";return e.jsx(G,{onClose:a,title:k,children:e.jsxs(pe,{children:[s&&e.jsxs(ge,{children:[e.jsx(z,{children:e.jsx("use",{href:`${D}#icon-glass`})}),e.jsx(N,{children:t?`${t} ml`:"No notes yet"}),e.jsx(_,{children:n?`${$}`:""})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(fe,{children:[e.jsx(V,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(E,{onClick:d,children:e.jsx(R,{children:e.jsx("use",{href:`${D}#icon-decrement-outline`})})}),e.jsxs(ye,{children:[e.jsx(Me,{type:"number",value:m,onChange:S,onBlur:()=>l(r=>r||t||0)}),e.jsx("span",{children:"ml"})]}),e.jsx(E,{onClick:w,children:e.jsx(R,{children:e.jsx("use",{href:`${D}#icon-increment`})})})]})]}),e.jsxs(we,{children:[e.jsx(V,{children:"Recording time:"}),e.jsx(Se,{type:"time",value:f,onChange:r=>M(r.target.value),step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(ke,{type:"number",value:m,onChange:S,onBlur:()=>l(r=>r||t||"")})]}),e.jsxs(De,{children:[e.jsxs("span",{children:[m,"ml"]}),e.jsx(be,{onClick:u,children:"Save"})]})]})})},C={glass:`${D}#icon-glass`,change:`${D}#icon-change`,delete:`${D}#icon-delete`,add:`${D}#icon-increment`},ot=()=>{const t=v(),[n,s]=o.useState(!1),[a,i]=o.useState(null),[g,m]=o.useState(!1),{dailyWaterList:l}=b(Y);o.useEffect(()=>{t(W()),t(F({startDate:"2024-01-01",endDate:"2024-01-31"}))},[t]);const f=()=>{i(null),s(!0)},M=d=>{i(d),m(!0)},j=d=>{i(d),s(!0)},w=()=>{t(W())};return e.jsxs(Te,{children:[e.jsx(Ce,{children:"Today"}),e.jsxs(We,{children:[l==null?void 0:l.map(d=>e.jsxs(Be,{children:[e.jsxs(He,{children:[e.jsx(z,{children:e.jsx("use",{href:C.glass})}),e.jsxs(N,{children:[d.waterVolume," ml"]}),e.jsx(_,{children:U(d.date)})]}),e.jsxs(Ae,{children:[e.jsx(Ie,{onClick:()=>j(d),children:e.jsx("svg",{children:e.jsx("use",{href:C.change})})}),e.jsx(Pe,{onClick:()=>M(d),children:e.jsx("svg",{children:e.jsx("use",{href:C.delete})})})]})]},d._id)),e.jsx("li",{children:e.jsxs(Le,{onClick:f,children:[e.jsx("svg",{children:e.jsx("use",{href:C.add})}),"Add Water"]})})]}),g&&e.jsx(at,{onClose:()=>m(!1),recordId:a==null?void 0:a._id}),n&&e.jsx(X,{initialAmount:a==null?void 0:a.waterVolume,initialTime:a==null?void 0:a.date,isEditing:a!==null,existingRecordId:a==null?void 0:a._id,onClose:()=>s(!1),onUpdate:w})]})},rt=()=>{const[t,n]=o.useState(!1),s=v(),a=b(Y),i=Math.round(a.waterVolumePercentage);o.useEffect(()=>{s(W())},[s]);const g=()=>{n(!0)},m=()=>({left:`calc(${Math.min(100,Math.max(0,i))}% - 12px)`}),l=()=>({backgroundSize:`${i}%`}),f=()=>{s(W())},M=i>0&&i<100;return e.jsxs(Ve,{children:[e.jsxs(Ee,{children:[e.jsx(Re,{children:"Today"}),e.jsx(Oe,{type:"range",maxValue:100,minValue:0,value:i,readOnly:!0,style:l(),"aria-label":"Water range"}),e.jsxs(Ge,{children:[e.jsx(Fe,{children:"0%"}),M&&e.jsx(Ue,{id:"waterMark",style:m(),children:`${i}%`}),e.jsx(ze,{children:"100%"})]})]}),e.jsxs(Ne,{onClick:g,children:[e.jsx(_e,{children:e.jsx("use",{href:`${D}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(X,{onClose:()=>n(!1),onUpdate:f})]})},it=A(Ye)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${Xe}) 1x,
    url(${qe}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Je}) 1x,
      url(${Ke}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Qe}) 1x,
      url(${Ze}) 2x
    );
  }
`,lt=A.div`
  /* margin-top: 24px; */
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
`,dt=A.div`
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
`,xt=()=>e.jsx(it,{children:e.jsxs(lt,{children:[e.jsxs("div",{children:[e.jsx(et,{}),e.jsx(rt,{})]}),e.jsxs(dt,{children:[e.jsx(ot,{}),e.jsx(nt,{})]})]})});export{xt as default};
