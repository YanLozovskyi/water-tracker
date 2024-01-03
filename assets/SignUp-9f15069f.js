import{E as H,r as a,j as e,ao as R,ap as B,aq as F,ar as I,as as S,at as f,au as w,av as m,s as u,aw as T,ax as N,aA as L,aB as M,n as q}from"./index-e7842bec.js";import{S as z}from"./Section-1f472bd7.js";import{i as A,a as G,b as J,c as K,d as O,e as Q}from"./bubbleTablet@2x-6e22c1d3.js";const V=()=>{const n=H(),[p,j]=a.useState(""),[t,b]=a.useState(""),[x,k]=a.useState(""),[i,E]=a.useState(""),[l,C]=a.useState(""),[c,$]=a.useState(""),[o,P]=a.useState(!1);a.useEffect(()=>{y(t)},[t]),a.useEffect(()=>{v(x,t)},[x,t]);const U=()=>{/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(p)?E(""):E("please enter a valid email address")},y=s=>{s&&s.length<8?C("Password must be at least 8 characters long"):C("")},v=(s,r)=>{$(r&&s&&s!==r?"Passwords do not match":"")},h=({target:{name:s,value:r}})=>{switch(s){case"email":j(r),U();return;case"password":b(r),y();return;case"confirmPassword":k(r),v();return;default:return}},D=s=>{s.preventDefault(),n(M({email:p,password:t})),j(""),b(""),k("")},d=()=>{P(!o)},g=i||l||c;return e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsx(B,{}),e.jsxs(F,{onSubmit:D,children:[e.jsx(I,{children:"Sign Up"}),e.jsxs(S,{children:["Enter your email",e.jsx(f,{onChange:h,className:i?"input-with-error":null,placeholder:"E-mail",type:"email",name:"email",value:p}),i&&e.jsx(w,{children:i})]}),e.jsxs(S,{children:["Enter your password",e.jsx(f,{className:l?"input-with-error":null,onChange:h,autoComplete:"off",type:o?"text":"password",placeholder:"Password",name:"password",value:t}),l&&e.jsx(w,{children:l}),o===!1?e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-hide`})}):e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-open`})})]}),e.jsxs(S,{children:["Repeat password",e.jsx(f,{className:c?"input-with-error":null,onChange:h,autoComplete:"off",type:o?"text":"password",placeholder:"Repeat password",name:"confirmPassword",value:x}),c&&e.jsx(w,{children:c}),o===!1?e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-hide`})}):e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-open`})})]}),g?e.jsx(T,{type:"submit",disabled:g,children:"SignUp"}):e.jsx(N,{type:"submit",disabled:g,children:"SignUp"}),e.jsx(L,{to:"/signin",children:"Sign in"})]})]})})},W=q(z)`
  padding-top: 40px;
  background-position: top;
  background-image: -webkit-image-set(
    url(${A}) 1x,
    url(${G}) 2x
  );
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:n})=>n.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${J}) 1x,
      url(${K}) 2x
    );
  }

  @media screen and (min-width: ${({theme:n})=>n.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${O}) 1x,
      url(${Q}) 2x
    );
  }
`,_=()=>e.jsx(W,{children:e.jsx(V,{})});export{_ as default};
