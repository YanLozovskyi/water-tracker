import{ad as R,r as a,u as F,j as e,ae as I,af as N,ag as T,ah as B,ai as f,aj as S,ak as j,al as m,s as u,am as L,an as M,aq as q,ar as z,n as A}from"./index-74f510cf.js";import{S as G}from"./Section-754f4ba6.js";import{i as J,a as K,b as O,c as Q,d as V,e as W}from"./bubbleTablet@2x-6e22c1d3.js";const X=()=>{const r=R(),[p,w]=a.useState(""),[n,b]=a.useState(""),[g,k]=a.useState(""),[o,E]=a.useState(""),[l,C]=a.useState(""),[c,$]=a.useState(""),[i,P]=a.useState(!1),U=F();a.useEffect(()=>{y(n)},[n]),a.useEffect(()=>{v(g,n)},[g,n]);const D=()=>{/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(p)?E(""):E("please enter a valid email address")},y=s=>{s&&s.length<8?C("Password must be at least 8 characters long"):C("")},v=(s,t)=>{$(t&&s&&s!==t?"Passwords do not match":"")},h=({target:{name:s,value:t}})=>{switch(s){case"email":w(t),D();return;case"password":b(t),y();return;case"confirmPassword":k(t),v();return;default:return}},H=s=>{s.preventDefault(),r(z({email:p,password:n})).then(t=>{t.error||U("/signin")}),w(""),b(""),k("")},d=s=>{P(!i)},x=o||l||c;return e.jsx(e.Fragment,{children:e.jsxs(I,{children:[e.jsx(N,{}),e.jsxs(T,{onSubmit:H,children:[e.jsx(B,{children:"Sign Up"}),e.jsxs(f,{children:["Enter your email",e.jsx(S,{onChange:h,className:o?"input-with-error":null,placeholder:"E-mail",type:"email",name:"email",value:p}),o&&e.jsx(j,{children:o})]}),e.jsxs(f,{children:["Enter your password",e.jsx(S,{className:l?"input-with-error":null,onChange:h,autoComplete:"off",type:i?"text":"password",placeholder:"Password",name:"password",value:n}),l&&e.jsx(j,{children:l}),i===!1?e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-hide`})}):e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-open`})})]}),e.jsxs(f,{children:["Repeat password",e.jsx(S,{className:c?"input-with-error":null,onChange:h,autoComplete:"off",type:i?"text":"password",placeholder:"Repeat password",name:"confirmPassword",value:g}),c&&e.jsx(j,{children:c}),i===!1?e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-hide`})}):e.jsx(m,{onClick:d,children:e.jsx("use",{href:`${u}#icon-to-open`})})]}),x?e.jsx(L,{type:"submit",disabled:x,children:"SignUp"}):e.jsx(M,{type:"submit",disabled:x,children:"SignUp"}),e.jsx(q,{to:"/signin",children:"Sign in"})]})]})})},Y=A(G)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${J}) 1x,
    url(${K}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:r})=>r.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${O}) 1x,
      url(${Q}) 2x
    );
  }

  @media screen and (min-width: ${({theme:r})=>r.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${V}) 1x,
      url(${W}) 2x
    );
  }
`,se=()=>e.jsx(Y,{children:e.jsx(X,{})});export{se as default};
