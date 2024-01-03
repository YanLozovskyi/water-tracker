import{K as $,r as a,j as e,as as C,at as D,au as v,av as H,aw as j,ax as w,ay as k,az as f,s as E,aA as P,aB as B,aC as T,aD as F,n as R}from"./index-a42bd042.js";import{S as z}from"./Section-2a2038a6.js";import{i as L,a as M,b as N,c as A,d as K,e as U}from"./bubbleTablet@2x-6e22c1d3.js";const q=()=>{const t=$(),[o,d]=a.useState(""),[n,m]=a.useState(""),[i,u]=a.useState(""),[r,g]=a.useState(""),[l,x]=a.useState(!1);a.useEffect(()=>{p(n)},[n]);const I=()=>{/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(o)?u(""):u("please enter a valid email address")},p=s=>{s&&s.length<8?g("Password must be at least 8 characters long"):g("")},h=({target:{name:s,value:b}})=>{switch(s){case"email":d(b),I();return;case"password":m(b),p();return;default:return}},y=s=>{s.preventDefault(),t(F({email:o,password:n})),d(""),m("")},S=()=>{x(!l)},c=i||r;return e.jsxs(C,{children:[e.jsx(D,{}),e.jsxs(v,{onSubmit:y,children:[e.jsx(H,{children:"Sign In"}),e.jsxs(j,{children:["Enter your email",e.jsx(w,{onChange:h,className:i?"input-with-error":null,placeholder:"E-mail",type:"email",name:"email",value:o}),i&&e.jsx(k,{children:i})]}),e.jsxs(j,{children:["Enter your password",e.jsx(w,{className:r?"input-with-error":null,onChange:h,autoComplete:"off",type:l?"text":"password",placeholder:"Password",name:"password",value:n}),r&&e.jsx(k,{children:r}),l===!1?e.jsx(f,{onClick:S,children:e.jsx("use",{href:`${E}#icon-to-hide`})}):e.jsx(f,{onClick:S,children:e.jsx("use",{href:`${E}#icon-to-open`})})]}),c?e.jsx(P,{type:"submit",disabled:c,children:"SignIn"}):e.jsx(B,{type:"submit",disabled:c,children:"SignIn"}),e.jsx(T,{to:"/signup",children:"Sign up"})]})]})},G=R(z)`
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
      url(${A}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${K}) 1x,
      url(${U}) 2x
    );
  }
`,V=()=>e.jsx(G,{children:e.jsx(q,{})});export{V as default};
