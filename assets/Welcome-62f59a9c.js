import{j as e,W as c,u as g,T as b,H as d,a as l,P as x,B as m,b as u,I as k,c as p,d as h,s as n,e as f,f as j,L as w,g as _,n as $}from"./index-80aa13f7.js";import{S as y}from"./Section-2cb2e27f.js";const T=()=>e.jsxs(c,{children:[e.jsx(W,{}),e.jsx(v,{})]}),W=()=>{const t=g(),s=[{text:"Habit drive",id:`${n}#icon-calendar`},{text:"View statistics",id:`${n}#icon-statistic`},{text:"Personal rate setting",id:`${n}#icon-instrument`}];function a(){t("/signup")}return e.jsxs(b,{children:[e.jsx(d,{children:"Hidden"}),e.jsx(l,{children:"Water consumption tracker"}),e.jsx(x,{children:"Record daily water intake and track"}),e.jsx(m,{children:"Tracker Benefits"}),e.jsx(u,{children:s.map(({id:i,text:r},o)=>e.jsxs(k,{children:[e.jsx(p,{children:e.jsx("use",{href:i})}),r]},o))}),e.jsx(h,{type:"button",onClick:a,children:"Try tracker"})]})},v=()=>{const t=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return e.jsxs(f,{children:[e.jsx(j,{children:"Why drink water"}),e.jsx(w,{children:t.map((s,a)=>e.jsx(_,{children:s},a))})]})},M="/water-tracker/assets/bg_mob_1x-45e67b01.png",S="/water-tracker/assets/bg_mob_2x-299ce2d2.png",B="/water-tracker/assets/bg_tab_1x-1f797613.png",D="/water-tracker/assets/bg_tab_2x-c5daf180.png",P="/water-tracker/assets/bg_img_1x-f981bb04.png",C="/water-tracker/assets/bg_img_2x-ea9b7f3f.png",H="/water-tracker/assets/bg_img_1x_bubbles-88afa2b3.png",I="/water-tracker/assets/bg_img_2x_bubbles-17852ecc.png",z=$(y)`
  background-position: center bottom;
  background-image: -webkit-image-set(url(${M}) 1x, url(${S}) 2x);
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    height: 100vh;
    background-image: -webkit-image-set(
      url(${B}) 1x,
      url(${D}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    position: relative;
    background-size: contain;
    background-image: -webkit-image-set(
      url(${P}) 1x,
      url(${C}) 2x
    );

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: -webkit-image-set(
        url(${H}) 1x,
        url(${I}) 2x
      );
      background-position: center;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }
`,L=()=>e.jsx(z,{children:e.jsx(T,{})});export{L as default};
