import{E as $,r as a,j as e,ao as C,ap as v,aq as D,ar as H,as as j,at as w,au as k,av as f,s as E,aw as P,ax as T,ay as B,az as F,n as R}from"./index-26bb3e1a.js";import{S as z}from"./Section-b29cfb93.js";import{i as L,a as M,b as N,c as q,d as U,e as A}from"./bubbleTablet@2x-6e22c1d3.js";const G=()=>{const t=$(),[o,d]=a.useState(""),[n,m]=a.useState(""),[i,u]=a.useState(""),[r,g]=a.useState(""),[l,x]=a.useState(!1);a.useEffect(()=>{p(n)},[n]);const I=()=>{/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(o)?u(""):u("please enter a valid email address")},p=s=>{s&&s.length<8?g("Password must be at least 8 characters long"):g("")},h=({target:{name:s,value:b}})=>{switch(s){case"email":d(b),I();return;case"password":m(b),p();return;default:return}},y=s=>{s.preventDefault(),t(F({email:o,password:n})),d(""),m("")},S=()=>{x(!l)},c=i||r;return e.jsxs(C,{children:[e.jsx(v,{}),e.jsxs(D,{onSubmit:y,children:[e.jsx(H,{children:"Sign In"}),e.jsxs(j,{children:["Enter your email",e.jsx(w,{onChange:h,className:i?"input-with-error":null,placeholder:"E-mail",type:"email",name:"email",value:o}),i&&e.jsx(k,{children:i})]}),e.jsxs(j,{children:["Enter your password",e.jsx(w,{className:r?"input-with-error":null,onChange:h,autoComplete:"off",type:l?"text":"password",placeholder:"Password",name:"password",value:n}),r&&e.jsx(k,{children:r}),l===!1?e.jsx(f,{onClick:S,children:e.jsx("use",{href:`${E}#icon-to-hide`})}):e.jsx(f,{onClick:S,children:e.jsx("use",{href:`${E}#icon-to-open`})})]}),c?e.jsx(P,{type:"submit",disabled:c,children:"SignIn"}):e.jsx(T,{type:"submit",disabled:c,children:"SignIn"}),e.jsx(B,{to:"/signup",children:"Sign up"})]})]})},J=R(z)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${L}) 1x,
    url(${M}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${N}) 1x,
      url(${q}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${U}) 1x,
      url(${A}) 2x
    );
  }
`,V=()=>e.jsx(J,{children:e.jsx(G,{})});export{V as default};
