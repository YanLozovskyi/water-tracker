import{t as b,g as L,h as C,i as Y,r as d,j as e,D as ee,k as te,l as se,m as ae,o as ne,p as oe,q as re,v as B,w as ie,x as I,y as $,z as U,A as le,E as de,F as ce,G as A,J as he,K as k,M as ue,N as xe,Q as me,R as E,Y as je,S as fe,U as ye,V as ge,X as pe,Z as z,_ as Me,$ as we,a0 as K,s as w,a1 as X,a2 as q,a3 as De,a4 as R,a5 as F,a6 as N,a7 as ke,a8 as Se,a9 as be,aa as ve,ab as Te,ac as Ce,ad as $e,ae as We,af as He,ag as P,ah as Be,ai as Oe,aj as Pe,ak as Ie,al as Ve,am as Le,an as Ae,ao as Ee,ap as Re,aq as Fe,ar as Ne,as as Ge,at as _e,au as Ye,av as Ue,aw as ze,ax as Ke,ay as Xe,az as qe,n as V}from"./index-6b72ed49.js";import{S as Je}from"./Section-3a3c7835.js";import{i as Qe,a as Ze,b as et,c as tt,d as st,e as at}from"./bubbleTablet@2x-6e22c1d3.js";function J(t,a){const s=b(t);if(isNaN(a))return L(t,NaN);if(!a)return s;const n=s.getDate(),o=L(t,s.getTime());o.setMonth(s.getMonth()+a+1,0);const h=o.getDate();return n>=h?o:(s.setFullYear(o.getFullYear(),o.getMonth(),n),s)}function G(t){const a=b(t),s=a.getMonth();return a.setFullYear(a.getFullYear(),s+1,0),a.setHours(23,59,59,999),a}function nt(t,a){const s=b(t.start),n=b(t.end);let o=+s>+n;const h=o?+s:+n,r=o?n:s;r.setHours(0,0,0,0);let i=(a==null?void 0:a.step)??1;if(!i)return[];i<0&&(i=-i,o=!o);const l=[];for(;+r<=h;)l.push(b(r)),r.setDate(r.getDate()+i),r.setHours(0,0,0,0);return o?l.reverse():l}function _(t){const a=b(t);return a.setDate(1),a.setHours(0,0,0,0),a}function ot(t,a){return J(t,-a)}const rt=()=>{const{waterRate:t}=C(Y),[a,s]=d.useState(!1),n=()=>{s(!0)},o=()=>{s(!1)},h=(t/1e3).toFixed(1)+" L";return e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:h}),e.jsx("button",{onClick:n,children:"Edit"})]}),a&&e.jsx(se,{onClose:o})]}),e.jsx(ae,{})]})},Q=t=>t.waterData.today,it=t=>t.waterData.month,lt=({stats:t,position:a,onShow:s})=>{const{date:n,drinkCount:o,waterVolumePercentage:h}=t,r=d.useRef(null),{waterRate:i}=C(Y);d.useEffect(()=>{if(!r.current)return;const{top:p,left:g,width:c}=a,u=r.current,D=u.offsetWidth;if(window.innerWidth<=320)u.style.width="100%",u.style.left="0",u.style.top=`${p-u.offsetHeight}px`,u.style.transform="translateX(0)";else{const S=g,x=window.innerWidth-g-c;S>D?u.style.left=`${g-D}px`:x>D?u.style.left=`${g+c}px`:(u.style.left="50%",u.style.transform="translateX(-50%)"),u.style.top=`${p-u.offsetHeight}px`}},[a]);const l=(i/1e3).toFixed(1)+" L",y=n?ne(n,"d, MMMM"):"";return e.jsx(oe,{ref:r,style:{visibility:s?"visible":"hidden"},children:e.jsxs(re,{children:[e.jsx(B,{children:e.jsx(ie,{children:y})}),e.jsxs(B,{children:["Daily norma:",e.jsx(I,{children:l})]}),e.jsxs(B,{children:["Fulfillment of the daily norm:",e.jsxs(I,{children:[Math.round(h),"%"]})]}),e.jsxs(B,{children:["How many servings of water:",e.jsx(I,{children:o})]})]})})},dt=({onClose:t,recordId:a})=>{const s=$(),n=()=>{s(he(a)).unwrap(),t()};return e.jsx(U,{onClose:t,title:"Delete Entry",children:e.jsxs(le,{children:[e.jsx(de,{children:"Are you sure you want to delete the entry?"}),e.jsxs(ce,{children:[e.jsx(A,{onClick:n,children:"Delete"}),e.jsx(A,{onClick:t,children:"Cancel"})]})]})})},ct=()=>{const t=$(),a=C(it),[s,n]=d.useState(new Date),[o,h]=d.useState(!1),[r,i]=d.useState({top:0,left:0,width:0}),[l,y]=d.useState(null),[p,g]=d.useState(!1),c=d.useRef({});d.useEffect(()=>{const m=k(_(s),"yyyy-MM-dd"),j=k(G(s),"yyyy-MM-dd");t(ue({startDate:m,endDate:j}))},[t,s]);const u=()=>{n(ot(s,1))},D=()=>{s<new Date&&n(J(s,1))},W=nt({start:_(s),end:G(s)}),S=a.reduce((m,j)=>(m[j.date]=j,m),{}),x=m=>{const j=k(m,"yyyy-MM-dd"),f=S[j];(l==null?void 0:l.date)===j&&o?(h(!1),y(null)):(y({date:j,waterVolumeSum:f?f.waterVolumeSum:0,drinkCount:f?f.drinkCount:0,waterVolumePercentage:f?f.waterVolumePercentage:0}),h(!0));const H=c.current[m];if(H){const T=H.getBoundingClientRect();i({top:T.top+window.scrollY,left:T.left,width:T.width})}},M=()=>{h(!1),y(null)};return d.useEffect(()=>{const m=j=>{o&&Object.values(c.current).every(v=>v&&!v.contains(j.target))&&M()};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[o,l]),e.jsxs("div",{children:[e.jsxs(xe,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(me,{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[e.jsx(E,{onClick:u,children:"<"}),e.jsx("span",{children:k(s,"MMMM")}),p&&e.jsx(je,{children:k(s,"yyyy").split("-")[0]}),e.jsx(E,{onClick:D,disabled:s>=new Date,children:">"})]})]}),e.jsxs(fe,{children:[W.map(m=>{const j=k(m,"yyyy-MM-dd"),f=S[j],v=f?f.waterVolumePercentage:0,H=f&&f.waterVolumePercentage<100;return e.jsx("div",{children:e.jsxs(ye,{children:[e.jsx(ge,{ref:T=>c.current[m]=T,onClick:()=>x(m),isHighlighted:H,children:k(m,"d")}),e.jsxs("span",{children:[Math.round(v),"%"]})]})},j)}),o&&l&&e.jsx(lt,{stats:l,position:r,onClose:M,onShow:o})]})]})},Z=({initialAmount:t,initialTime:a,isEditing:s,onClose:n,existingRecordId:o,onUpdate:h})=>{const[r,i]=d.useState(t||0),[l,y]=d.useState(s&&a?pe(a):new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),p=$(),g=()=>i(x=>x+50),c=()=>i(x=>x>0?x-50:0),u=x=>{let M=x.target.value;M.startsWith("0")&&M.length>1&&(M=M.substring(1)),i(M)},D=()=>{const M=`${new Date().toISOString().slice(0,10)}T${l}`,m=new Date(M).toISOString(),j={waterVolume:r,date:m};s?p(We({_id:o,...j})).unwrap():p(He(j)).unwrap(),h(),n()},W=s?"Edit the entered amount of water":"Add water",S=s&&a?z(a):"";return e.jsx(U,{onClose:n,title:W,children:e.jsxs(Me,{children:[s&&e.jsxs(we,{children:[e.jsx(K,{children:e.jsx("use",{href:`${w}#icon-glass`})}),e.jsx(X,{children:t?`${t} ml`:"No notes yet"}),e.jsx(q,{children:a?`${S}`:""})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(De,{children:[e.jsx(R,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(F,{onClick:c,children:e.jsx(N,{children:e.jsx("use",{href:`${w}#icon-decrement-outline`})})}),e.jsxs(ke,{children:[e.jsx(Se,{type:"number",value:r,onChange:u,onBlur:()=>i(x=>x||t||0)}),e.jsx("span",{children:"ml"})]}),e.jsx(F,{onClick:g,children:e.jsx(N,{children:e.jsx("use",{href:`${w}#icon-increment`})})})]})]}),e.jsxs(be,{children:[e.jsx(R,{children:"Recording time:"}),e.jsx(ve,{type:"time",value:l,onChange:x=>y(x.target.value),step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(Te,{type:"number",value:r,onChange:u,onBlur:()=>i(x=>x||t||"")})]}),e.jsxs(Ce,{children:[e.jsxs("span",{children:[r,"ml"]}),e.jsx($e,{onClick:D,children:"Save"})]})]})})},O={glass:`${w}#icon-glass`,change:`${w}#icon-change`,delete:`${w}#icon-delete`,add:`${w}#icon-increment`},ht=()=>{const t=$(),[a,s]=d.useState(!1),[n,o]=d.useState(null),[h,r]=d.useState(!1),{dailyWaterList:i}=C(Q);d.useEffect(()=>{t(P())},[t]);const l=()=>{o(null),s(!0)},y=c=>{o(c),r(!0)},p=c=>{o(c),s(!0)},g=()=>{t(P())};return e.jsxs(Be,{children:[e.jsx(Oe,{children:"Today"}),e.jsxs(Pe,{children:[i==null?void 0:i.map(c=>e.jsxs(Ie,{children:[e.jsxs(Ve,{children:[e.jsx(K,{children:e.jsx("use",{href:O.glass})}),e.jsxs(X,{children:[c.waterVolume," ml"]}),e.jsx(q,{children:z(c.date)})]}),e.jsxs(Le,{children:[e.jsx(Ae,{onClick:()=>p(c),children:e.jsx("svg",{children:e.jsx("use",{href:O.change})})}),e.jsx(Ee,{onClick:()=>y(c),children:e.jsx("svg",{children:e.jsx("use",{href:O.delete})})})]})]},c._id)),e.jsx("li",{children:e.jsxs(Re,{onClick:l,children:[e.jsx("svg",{children:e.jsx("use",{href:O.add})}),"Add Water"]})})]}),h&&e.jsx(dt,{onClose:()=>r(!1),recordId:n==null?void 0:n._id}),a&&e.jsx(Z,{initialAmount:n==null?void 0:n.waterVolume,initialTime:n==null?void 0:n.date,isEditing:n!==null,existingRecordId:n==null?void 0:n._id,onClose:()=>s(!1),onUpdate:g})]})},ut=()=>{const[t,a]=d.useState(!1),s=$(),n=C(Q),o=Math.round(n.waterVolumePercentage);d.useEffect(()=>{s(P())},[s]);const h=()=>{a(!0)},r=()=>({left:`calc(${Math.min(100,Math.max(0,o))}% - 12px)`}),i=()=>({backgroundSize:`${o}%`}),l=()=>{s(P())},y=o>0&&o<100;return e.jsxs(Fe,{children:[e.jsxs(Ne,{children:[e.jsx(Ge,{children:"Today"}),e.jsx(_e,{type:"range",maxValue:100,minValue:0,value:o,readOnly:!0,style:i(),"aria-label":"Water range"}),e.jsxs(Ye,{children:[e.jsx(Ue,{children:"0%"}),y&&e.jsx(ze,{id:"waterMark",style:r(),children:`${o}%`}),e.jsx(Ke,{children:"100%"})]})]}),e.jsxs(Xe,{onClick:h,children:[e.jsx(qe,{children:e.jsx("use",{href:`${w}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(Z,{onClose:()=>a(!1),onUpdate:l})]})},xt=V(Je)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${Qe}) 1x,
    url(${Ze}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${et}) 1x,
      url(${tt}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${st}) 1x,
      url(${at}) 2x
    );
  }
`,mt=V.div`
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
`,jt=V.div`
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
`,pt=()=>e.jsx(xt,{children:e.jsxs(mt,{children:[e.jsxs("div",{children:[e.jsx(rt,{}),e.jsx(ut,{})]}),e.jsxs(jt,{children:[e.jsx(ht,{}),e.jsx(ct,{})]})]})});export{pt as default};
