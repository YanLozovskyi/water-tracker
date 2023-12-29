import{ag as y,r as a,j as e,ah as C,ai as D,aj as H,ak as v,al as j,am as k,an as w,ao as f,s as E,ap as P,aq as T,ar as B,as as F,n as R}from"./index-802efd03.js";import{S as L}from"./Section-62d1f2c7.js";import{i as M,a as N,b as q,c as z,d as U,e as A}from"./bubbleTablet@2x-6e22c1d3.js";const G=()=>{const t=y(),[o,d]=a.useState(""),[n,m]=a.useState(""),[i,u]=a.useState(""),[r,g]=a.useState(""),[l,p]=a.useState(!1);a.useEffect(()=>{x(n)},[n]);const I=()=>{/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(o)?u(""):u("please enter a valid email address")},x=s=>{s&&s.length<8?g("Password must be at least 8 characters long"):g("")},h=({target:{name:s,value:b}})=>{switch(s){case"email":d(b),I();return;case"password":m(b),x();return;default:return}},$=s=>{s.preventDefault(),t(F({email:o,password:n})),d(""),m("")},S=()=>{p(!l)},c=i||r;return e.jsxs(C,{children:[e.jsx(D,{}),e.jsxs(H,{onSubmit:$,children:[e.jsx(v,{children:"Sign In"}),e.jsxs(j,{children:["Enter your email",e.jsx(k,{onChange:h,className:i?"input-with-error":null,placeholder:"E-mail",type:"email",name:"email",value:o}),i&&e.jsx(w,{children:i})]}),e.jsxs(j,{children:["Enter your password",e.jsx(k,{className:r?"input-with-error":null,onChange:h,autoComplete:"off",type:l?"text":"password",placeholder:"Password",name:"password",value:n}),r&&e.jsx(w,{children:r}),l===!1?e.jsx(f,{onClick:S,children:e.jsx("use",{href:`${E}#icon-to-hide`})}):e.jsx(f,{onClick:S,children:e.jsx("use",{href:`${E}#icon-to-open`})})]}),c?e.jsx(P,{type:"submit",disabled:c,children:"SignIn"}):e.jsx(T,{type:"submit",disabled:c,children:"SignIn"}),e.jsx(B,{to:"/signup",children:"Sign up"})]})]})},J=R(L)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${M}) 1x,
    url(${N}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${q}) 1x,
      url(${z}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${U}) 1x,
      url(${A}) 2x
    );
  }
`,V=()=>e.jsx(J,{children:e.jsx(G,{})});export{V as default};
