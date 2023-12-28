import{ad as C,r as a,u as v,j as e,ae as D,af as H,ag as P,ah as T,ai as j,aj as k,ak as w,al as f,s as E,am as B,an as F,ao as N,ap as R,n as L}from"./index-74f510cf.js";import{S as M}from"./Section-754f4ba6.js";import{i as z,a as U,b as q,c as A,d as G,e as J}from"./bubbleTablet@2x-6e22c1d3.js";const K=()=>{const t=C(),[l,m]=a.useState(""),[n,u]=a.useState(""),[i,g]=a.useState(""),[r,h]=a.useState(""),[c,p]=a.useState(!1),I=v();a.useEffect(()=>{x(n)},[n]);const $=()=>{/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(l)?g(""):g("please enter a valid email address")},x=s=>{s&&s.length<8?h("Password must be at least 8 characters long"):h("")},S=({target:{name:s,value:o}})=>{switch(s){case"email":m(o),$();return;case"password":u(o),x();return;default:return}},y=s=>{s.preventDefault(),t(R({email:l,password:n})).then(o=>{o.error||I("/home")}),m(""),u("")},b=s=>{p(!c)},d=i||r;return e.jsxs(D,{children:[e.jsx(H,{}),e.jsxs(P,{onSubmit:y,children:[e.jsx(T,{children:"Sign In"}),e.jsxs(j,{children:["Enter your email",e.jsx(k,{onChange:S,className:i?"input-with-error":null,placeholder:"E-mail",type:"email",name:"email",value:l}),i&&e.jsx(w,{children:i})]}),e.jsxs(j,{children:["Enter your password",e.jsx(k,{className:r?"input-with-error":null,onChange:S,autoComplete:"off",type:c?"text":"password",placeholder:"Password",name:"password",value:n}),r&&e.jsx(w,{children:r}),c===!1?e.jsx(f,{onClick:b,children:e.jsx("use",{href:`${E}#icon-to-hide`})}):e.jsx(f,{onClick:b,children:e.jsx("use",{href:`${E}#icon-to-open`})})]}),d?e.jsx(B,{type:"submit",disabled:d,children:"SignIn"}):e.jsx(F,{type:"submit",disabled:d,children:"SignIn"}),e.jsx(N,{to:"/signup",children:"Sign up"})]})]})},O=L(M)`
  background-position: center center;
  background-image: -webkit-image-set(
    url(${z}) 1x,
    url(${U}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${q}) 1x,
      url(${A}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${G}) 1x,
      url(${J}) 2x
    );
  }
`,X=()=>e.jsx(O,{children:e.jsx(K,{})});export{X as default};
