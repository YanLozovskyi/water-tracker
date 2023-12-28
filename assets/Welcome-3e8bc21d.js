import{j as e,W as d,u as g,T as b,H as l,a as x,P as m,B as p,b as u,I as k,c as h,d as f,s,O as j,C as w,e as _,L as $,f as y,n as i}from"./index-4693a018.js";import{S as T}from"./Section-14b440d3.js";const v=()=>e.jsxs(d,{children:[e.jsx(W,{}),e.jsx(C,{})]}),W=()=>{const t=g(),n=[{text:"Habit drive",id:`${s}#icon-calendar`},{text:"View statistics",id:`${s}#icon-statistic`},{text:"Personal rate setting",id:`${s}#icon-instrument`}];function a(){t("/signup")}return e.jsxs(b,{children:[e.jsx(l,{children:"Hidden"}),e.jsx(x,{children:"Water consumption tracker"}),e.jsx(m,{children:"Record daily water intake and track"}),e.jsx(p,{children:"Tracker Benefits"}),e.jsx(u,{children:n.map(({id:r,text:o},c)=>e.jsxs(k,{children:[e.jsx(h,{children:e.jsx("use",{href:r})}),o]},c))}),e.jsx(f,{type:"button",onClick:a,children:"Try tracker"})]})},C=()=>{const t=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return e.jsx(j,{children:e.jsxs(w,{children:[e.jsx(_,{children:"Why drink water"}),e.jsx($,{children:t.map((n,a)=>e.jsx(y,{children:n},a))})]})})},M="/water-tracker/assets/bg_mob_1x-45e67b01.png",S="/water-tracker/assets/bg_mob_2x-299ce2d2.png",B="/water-tracker/assets/bg_tab_1x-1f797613.png",D="/water-tracker/assets/bg_tab_2x-c5daf180.png",P="/water-tracker/assets/bg_img_1x-f981bb04.png",H="/water-tracker/assets/bg_img_2x-ea9b7f3f.png",I="/water-tracker/assets/bg_img_1x_bubbles-88afa2b3.png",z="/water-tracker/assets/bg_img_2x_bubbles-17852ecc.png",R=i(T)`
  padding-top: 24px;
  padding-bottom: 40px;
  background-position: center bottom;
  background-image: -webkit-image-set(url(${M}) 1x, url(${S}) 2x);
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding-top: 40px;
    padding-bottom: 50px;
    background-size: cover;
    background-image: -webkit-image-set(
      url(${B}) 1x,
      url(${D}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    padding-top: 80px;
    height: 100vh;
    position: relative;
    background-size: contain;
    background-position: center bottom;
    background-image: -webkit-image-set(
      url(${P}) 1x,
      url(${H}) 2x
    );
  }
`,E=i.div`
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${I}) 1x,
      url(${z}) 2x
    );
    background-position: center center;
    background-repeat: no-repeat;
  }
`,N=()=>e.jsx(E,{children:e.jsx(R,{children:e.jsx(v,{})})});export{N as default};
