import{j as e,W as b,u as g,T as l,H as x,a as p,P as h,B as u,b as k,I as f,c as j,d as _,s as r,O as $,C as w,e as y,L as T,f as v,n as d,g as W,h as C,r as P,i as S,k as D}from"./index-b9617ba1.js";import{S as M}from"./Section-b28f0279.js";const B=()=>e.jsxs(b,{children:[e.jsx(z,{}),e.jsx(E,{})]}),z=()=>{const t=g(),a=[{text:"Habit drive",id:`${r}#icon-calendar`},{text:"View statistics",id:`${r}#icon-statistic`},{text:"Personal rate setting",id:`${r}#icon-instrument`}];function s(){t("/signup")}return e.jsxs(l,{children:[e.jsx(x,{children:"Hidden"}),e.jsx(p,{children:"Water consumption tracker"}),e.jsx(h,{children:"Record daily water intake and track"}),e.jsx(u,{children:"Tracker Benefits"}),e.jsx(k,{children:a.map(({id:i,text:n},m)=>e.jsxs(f,{children:[e.jsx(j,{children:e.jsx("use",{href:i})}),n]},m))}),e.jsx(_,{type:"button",onClick:s,children:"Try tracker"})]})},E=()=>{const t=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return e.jsx($,{children:e.jsxs(w,{children:[e.jsx(y,{children:"Why drink water"}),e.jsx(T,{children:t.map((a,s)=>e.jsx(v,{children:a},s))})]})})},H="/assets/bg_mob_1x-45e67b01.png",I="/assets/bg_mob_2x-299ce2d2.png",R="/assets/bg_tab_1x-1f797613.png",L="/assets/bg_tab_2x-c5daf180.png",O="/assets/bg_img_1x-f981bb04.png",N="/assets/bg_img_2x-ea9b7f3f.png",o="/assets/bg_img_1x_bubbles-88afa2b3.png",c="/assets/bg_img_2x_bubbles-17852ecc.png",U=d.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: calc(100vh - 109px);

  background-image: -webkit-image-set(url(${H}) 1x, url(${I}) 2x);

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${R}) 1x,
      url(${L}) 2x
    );
    min-height: calc(100vh - 109px);
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${O}) 1x,
      url(${N}) 2x
    );
    min-height: calc(100vh - 109px);
  }
`,V=d(M)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding-top: 40px;
    padding-bottom: 50px;
    background-image: -webkit-image-set(
      url(${o}) 1x,
      url(${c}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    padding-top: 49px;
    padding-bottom: 109px;
    background-image: -webkit-image-set(
      url(${o}) 1x,
      url(${c}) 2x
    );
  }
`,F=()=>{const t=W(),s=C()[0].get("token"),i=g();return P.useEffect(()=>{if(s)try{t(S(s)),t(D()).then(n=>{n.error||i("/home")})}catch(n){console.log(n.message)}},[t,i,s]),e.jsx(U,{children:e.jsx(V,{children:e.jsx(B,{})})})};export{F as default};
