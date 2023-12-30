import{g as O,h as G,r as o,j as e,D as V,i as J,k as Y,l as z,m as X,o as q,p as k,q as U,t as $,v as _,w as K,x as W,Y as Q,y as Z,z as ee,A as te,E as se,F as ne,G as ae,J as R,s as M,K as E,M as I,N as oe,Q as A,R as B,S as H,U as re,V as le,X as ie,Z as de,_ as ce,$ as he,a0 as ue,a1 as xe,a2 as me,a3 as je,a4 as pe,a5 as ye,a6 as ge,a7 as fe,a8 as Me,a9 as be,aa as Se,ab as we,ac as ke,ad as ve,ae as De,af as $e,ag as Ce,ah as Te,ai as We,aj as Ae,n as C}from"./index-d7cb85ce.js";import{S as Be}from"./Section-042439fb.js";import{i as He,a as Le,b as Re,c as Ee,d as Ie,e as Ne}from"./bubbleTablet@2x-6e22c1d3.js";const Fe=()=>{const{waterRate:t}=O(G),[i,s]=o.useState(!1),x=()=>{s(!0)},a=()=>{s(!1)},d=(t/1e3).toFixed(1)+" L";return e.jsxs(V,{children:[e.jsxs(J,{children:[e.jsx("h2",{children:"My daily norma: "}),e.jsxs("div",{children:[e.jsx("p",{children:d}),e.jsx("button",{onClick:x,children:"Edit"})]}),i&&e.jsx(Y,{onClose:a})]}),e.jsx(z,{})]})},Pe=t=>{const[i,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Oe=({day:t,stats:{norma:i,full:s,servings:x},month:a,position:d,onShow:j})=>{const p=o.useRef(null);return o.useEffect(()=>{if(!p.current)return;const{top:m,left:c,width:f}=d,n=p.current,h=n.offsetWidth;if(window.innerWidth<=320)n.style.width="100%",n.style.left="0",n.style.top=`${m-n.offsetHeight}px`,n.style.transform="translateX(0)";else{const w=c,u=window.innerWidth-c-f;w>h?n.style.left=`${c-h}px`:u>h?n.style.left=`${c+f}px`:(n.style.left="50%",n.style.transform="translateX(-50%)"),n.style.top=`${m-n.offsetHeight}px`}},[d]),e.jsx(X,{ref:p,style:{visibility:j?"visible":"hidden"},children:e.jsxs(q,{children:[e.jsx(k,{children:e.jsxs(U,{children:[t,", ",Pe(a)]})}),e.jsxs(k,{children:["Daily norma:",e.jsx($,{children:i})]}),e.jsxs(k,{children:["Fulfillment of the daily norm:",e.jsx($,{children:s})]}),e.jsxs(k,{children:["How many servings of water:",e.jsx($,{children:x})]})]})})},L=()=>{const t=new Date,i=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0");return`${i}-${s}`},Ge=t=>{const[i,s]=t.split("-").map(Number);return["January","February","March","April","May","June","July","August","September","October","November","December"][s-1]},Ve=()=>{const[t,i]=o.useState(L()),[s,x]=o.useState([]),[a,d]=o.useState(null),[j,p]=o.useState(!1),[m,c]=o.useState(null),[f,n]=o.useState({top:0,left:0,width:0}),[h,g]=o.useState(!1),w=l=>{const[r,y]=l.split("-").map(Number);return[31,r%4===0&&r%100!==0||r%400===0?29:28,31,30,31,30,31,31,30,31,30,31][y-1]},u=l=>{const r=new Date(t);l==="prev"?r.setMonth(r.getMonth()-1):r.setMonth(r.getMonth()+1);const y=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`;i(y);const S=L();c(y===S?null:l)},b=async l=>{},F=l=>{if(g(!0),a&&a.day===l){d(null);return}const r=D.current[l];if(r){const y=r.getBoundingClientRect();n({top:y.top+window.scrollY,left:y.left,width:y.width}),d({day:l,...s.find(S=>S.day===l)})}};o.useEffect(()=>{const l=r=>{a&&!D.current[a.day].contains(r.target)&&T()};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[a]),o.useEffect(()=>{b()},[t]),o.useEffect(()=>{x([{day:2,percentage:60},{day:10,percentage:100},{day:15,percentage:100},{day:29,percentage:60}])},[]);const P=o.useMemo(()=>[...Array(w(t)).keys()].map(l=>{const r=s.find(y=>y.day===l+1);return{day:l+1,percentage:r?r.percentage:0,isHighlighted:r&&r.percentage<100}}),[s,t]),D=o.useRef({}),T=()=>{g(!1),d(null)};return e.jsxs("div",{children:[e.jsxs(_,{children:[e.jsx("h2",{children:"Month"}),e.jsxs(K,{onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[e.jsx(W,{onClick:()=>u("prev"),active:m==="next",children:"<"}),e.jsx("span",{children:Ge(t)}),j&&e.jsx(Q,{children:t.split("-")[0]}),e.jsx(W,{onClick:()=>u("next"),active:m==="prev",children:">"})]})]}),a&&e.jsx(Oe,{day:a.day,month:t,stats:a,position:f,onClose:T,onShow:h}),e.jsx(Z,{children:P.map(({day:l,percentage:r,isHighlighted:y})=>e.jsx("div",{children:e.jsxs(ee,{children:[e.jsx(te,{ref:S=>D.current[l]=S,onClick:()=>F(l),isHighlighted:y,children:l}),e.jsxs("span",{children:[r,"%"]})," "]})},l))})]})},N=({initialAmount:t,initialTime:i,isEditing:s,onSave:x,onClose:a})=>{const[d,j]=o.useState(t||0),[p,m]=o.useState(i||new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),c=()=>j(u=>u+50),f=()=>j(u=>u>0?u-50:0),n=u=>{let b=u.target.value;b.startsWith("0")&&b.length>1&&(b=b.substring(1)),j(b)},h=u=>m(u.target.value),g=()=>{x({amount:d,time:p})},w=s?"Edit the entered amount of water":"Add water";return e.jsx(se,{onClose:a,title:w,children:e.jsxs(ne,{children:[s&&e.jsxs(ae,{children:[e.jsx(R,{children:e.jsx("use",{href:`${M}#glass`})}),e.jsx(E,{children:t?`${t} ml`:"No notes yet"}),e.jsx(I,{children:t?i:""})]}),e.jsx("h3",{children:s?"Correct entered data:":"Choose a value:"}),e.jsxs(oe,{children:[e.jsx(A,{children:"Amount of water:"}),e.jsxs("div",{children:[e.jsx(B,{onClick:f,children:e.jsx(H,{children:e.jsx("use",{href:`${M}#icon-decrement-outline`})})}),e.jsxs(re,{children:[e.jsx(le,{type:"number",value:d,onChange:n,onBlur:()=>j(u=>u||t||0)}),e.jsx("span",{children:"ml"})]}),e.jsx(B,{onClick:c,children:e.jsx(H,{children:e.jsx("use",{href:`${M}#icon-increment`})})})]})]}),e.jsxs(ie,{children:[e.jsx(A,{children:"Recording time:"}),e.jsx(de,{type:"time",value:p,onChange:h,step:"300"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Enter the value of the water used:"}),e.jsx(ce,{type:"number",value:d,onChange:n,onBlur:()=>j(u=>u||t||"")})]}),e.jsxs(he,{children:[e.jsxs("span",{children:[d,"ml"]}),e.jsx(ue,{onClick:g,children:"Save"})]})]})})},v={glass:`${M}#icon-glass`,change:`${M}#icon-change`,delete:`${M}#icon-delete`,add:`${M}#icon-increment`},Je=()=>{const[t,i]=o.useState(!1),[s,x]=o.useState([]),[a,d]=o.useState(null),j=()=>{d(null),i(!0)},p=(n,h)=>{d({...n,index:h}),i(!0)},m=()=>{i(!1)},c=n=>{x(s.filter((h,g)=>g!==n))},f=n=>{x(a!==null?s.map((h,g)=>g===a.index?{...h,...n}:h):[...s,n]),m()};return e.jsxs(xe,{children:[e.jsx(me,{children:"Today"}),e.jsxs(je,{children:[s.map((n,h)=>e.jsxs(pe,{children:[e.jsxs(ye,{children:[e.jsx(R,{children:e.jsx("use",{href:v.glass})}),e.jsxs(E,{children:[n.amount," ml"]}),e.jsxs(I,{children:[n.time," AM"]})]}),e.jsxs(ge,{children:[e.jsx(fe,{onClick:()=>p(n,h),children:e.jsx("svg",{children:e.jsx("use",{href:v.change})})}),e.jsx(Me,{onClick:()=>c(h),children:e.jsx("svg",{children:e.jsx("use",{href:v.delete})})})]})]},h)),e.jsx("li",{children:e.jsxs(be,{onClick:j,children:[e.jsx("svg",{children:e.jsx("use",{href:v.add})}),"Add Water"]})})]}),t&&e.jsx(N,{initialAmount:a==null?void 0:a.volume,initialTime:a==null?void 0:a.time,isEditing:a!==null,onSave:f,onClose:m})]})},Ye=()=>{const[t,i]=o.useState(!1),[s,x]=o.useState(0),a=()=>{i(!0)},d=()=>{i(!1)};o.useEffect(()=>{const m=document.querySelector("#waterMark");if(m){let c=Number((s-0)*100/100);c=c>=100?100:c,m.style.left=`calc(${c}% + (${8-c*.15}px))`}},[s]);const j=()=>({backgroundSize:`${s}%`}),p=m=>{x(c=>c+m.amount),d()};return e.jsxs(Se,{children:[e.jsxs(we,{children:[e.jsx(ke,{children:"Today"}),e.jsx(ve,{type:"range",maxValue:100,minValue:0,value:s,readOnly:!0,style:j(),"aria-label":"Water range"}),e.jsxs(De,{children:[e.jsx($e,{children:"0%"}),e.jsx(Ce,{id:"waterMark",children:`${s>100?100:s}%`}),e.jsx(Te,{children:"100%"})]})]}),e.jsxs(We,{onClick:a,children:[e.jsx(Ae,{children:e.jsx("use",{href:`${M}#icon-increment-outline`})})," ","Add Water"]}),t&&e.jsx(N,{onClose:d,onSave:p})]})},ze=C(Be)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${He}) 1x,
    url(${Le}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Re}) 1x,
      url(${Ee}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Ie}) 1x,
      url(${Ne}) 2x
    );
  }
`,Xe=C.div`
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
`,qe=C.div`
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
`,et=()=>e.jsx(ze,{children:e.jsxs(Xe,{children:[e.jsxs("div",{children:[e.jsx(Fe,{}),e.jsx(Ye,{})]}),e.jsxs(qe,{children:[e.jsx(Je,{}),e.jsx(Ve,{})]})]})});export{et as default};
