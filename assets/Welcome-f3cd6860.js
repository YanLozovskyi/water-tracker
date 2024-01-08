import{j as e,W as b,u as x,T as l,H as m,a as p,P as u,B as k,b as h,I as f,c as j,d as _,s,O as $,C as w,e as y,L as T,f as W,n as o}from"./index-6eeeecb5.js";import{S as v}from"./Section-1cdd2adb.js";const C=()=>e.jsxs(b,{children:[e.jsx(M,{}),e.jsx(S,{})]}),M=()=>{const t=x(),n=[{text:"Habit drive",id:`${s}#icon-calendar`},{text:"View statistics",id:`${s}#icon-statistic`},{text:"Personal rate setting",id:`${s}#icon-instrument`}];function i(){t("/signup")}return e.jsxs(l,{children:[e.jsx(m,{children:"Hidden"}),e.jsx(p,{children:"Water consumption tracker"}),e.jsx(u,{children:"Record daily water intake and track"}),e.jsx(k,{children:"Tracker Benefits"}),e.jsx(h,{children:n.map(({id:c,text:d},g)=>e.jsxs(f,{children:[e.jsx(j,{children:e.jsx("use",{href:c})}),d]},g))}),e.jsx(_,{type:"button",onClick:i,children:"Try tracker"})]})},S=()=>{const t=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return e.jsx($,{children:e.jsxs(w,{children:[e.jsx(y,{children:"Why drink water"}),e.jsx(T,{children:t.map((n,i)=>e.jsx(W,{children:n},i))})]})})},B="/assets/bg_mob_1x-45e67b01.png",D="/assets/bg_mob_2x-299ce2d2.png",P="/assets/bg_tab_1x-1f797613.png",z="/assets/bg_tab_2x-c5daf180.png",H="/assets/bg_img_1x-f981bb04.png",I="/assets/bg_img_2x-ea9b7f3f.png",a="/assets/bg_img_1x_bubbles-88afa2b3.png",r="/assets/bg_img_2x_bubbles-17852ecc.png",R=o.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${a}) 1x,
      url(${r}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${a}) 1x,
      url(${r}) 2x
    );
  }
`,E=o(v)`
  padding-top: 24px;
  padding-bottom: 40px;
  background-position: center bottom;
  background-image: -webkit-image-set(url(${B}) 1x, url(${D}) 2x);
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding-top: 40px;
    padding-bottom: 50px;
    background-size: cover;
    background-image: -webkit-image-set(
      url(${P}) 1x,
      url(${z}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    padding-top: 49px;
    padding-bottom: 109px;
    width: 100%;
    background-size: contain;
    background-position: center bottom;
    background-image: -webkit-image-set(
      url(${H}) 1x,
      url(${I}) 2x
    );
  }
`,N=()=>e.jsx(E,{children:e.jsx(R,{children:e.jsx(C,{})})});export{N as default};
