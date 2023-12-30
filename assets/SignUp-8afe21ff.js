import{ak as H,r as a,j as e,al as R,am as F,an as I,ao as T,ap as S,aq as f,ar as w,as as m,s as u,at as B,au as N,ax as L,ay as M,n as q}from"./index-d7cb85ce.js";import{S as z}from"./Section-042439fb.js";import{i as A,a as G,b as J,c as K,d as O,e as Q}from"./bubbleTablet@2x-6e22c1d3.js";const V=()=>{const n=H(),[p,j]=a.useState(""),[t,b]=a.useState(""),[x,k]=a.useState(""),[i,E]=a.useState(""),[l,C]=a.useState(""),[c,$]=a.useState(""),[o,y]=a.useState(!1);a.useEffect(()=>{P(t)},[t]),a.useEffect(()=>{U(x,t)},[x,t]);const v=()=>{/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(p)?E(""):E("please enter a valid email address")},P=s=>{s&&s.length<8?C("Password must be at least 8 characters long"):C("")},U=(s,r)=>{$(r&&s&&s!==r?"Passwords do not match":"")},h=({target:{name:s,value:r}})=>{switch(s){case"email":j(r),v();return;case"password":b(r),P();return;case"confirmPassword":k(r),U();return;default:return}},D=s=>{s.preventDefault(),n(M({email:p,password:t})),j(""),b(""),k("")},d=()=>{y(!o)},g=i||l||c;return e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsx(F,{}),e.jsxs(I,{onSubmit:D,children:[e.jsx(T,{children:"Sign Up"}),e.jsxs(S,{children:["Enter your email",e.jsx(f,{onChange:h,className:i?"input-with-error":null,placeholder:"E-mail",type:"email",name:"email",value:p}),i&&e.jsx(w,{children:i})]}),e.jsxs(S,{children:["Enter your password",e.jsx(f,{className:l?"input-with-error":null,onChange:h,autoComplete:"off",type:o?"text":"password",placeholder:"Password",name:"password",value:t}),l&&e.jsx(w,{children:l}),o===!1?e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-hide`})}):e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-open`})})]}),e.jsxs(S,{children:["Repeat password",e.jsx(f,{className:c?"input-with-error":null,onChange:h,autoComplete:"off",type:o?"text":"password",placeholder:"Repeat password",name:"confirmPassword",value:x}),c&&e.jsx(w,{children:c}),o===!1?e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-hide`})}):e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-open`})})]}),g?e.jsx(B,{type:"submit",disabled:g,children:"SignUp"}):e.jsx(N,{type:"submit",disabled:g,children:"SignUp"}),e.jsx(L,{to:"/signin",children:"Sign in"})]})]})})},W=q(z)`
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
