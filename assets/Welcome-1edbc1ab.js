import{j as e,W as b,u as g,T as m,H as x,a as p,P as u,B as k,b as h,I as f,c as j,d as _,s as r,O as $,C as w,e as y,L as T,f as v,n as d,g as W,h as C,r as P,i as S,k as D}from"./index-71917106.js";import{S as M}from"./Section-670d2c77.js";const B=()=>e.jsxs(b,{children:[e.jsx(z,{}),e.jsx(E,{})]}),z=()=>{const t=g(),n=[{text:"Habit drive",id:`${r}#icon-calendar`},{text:"View statistics",id:`${r}#icon-statistic`},{text:"Personal rate setting",id:`${r}#icon-instrument`}];function s(){t("/signup")}return e.jsxs(m,{children:[e.jsx(x,{children:"Hidden"}),e.jsx(p,{children:"Water consumption tracker"}),e.jsx(u,{children:"Record daily water intake and track"}),e.jsx(k,{children:"Tracker Benefits"}),e.jsx(h,{children:n.map(({id:i,text:a},l)=>e.jsxs(f,{children:[e.jsx(j,{children:e.jsx("use",{href:i})}),a]},l))}),e.jsx(_,{type:"button",onClick:s,children:"Try tracker"})]})},E=()=>{const t=["Supply of nutrients to all organs","Providing oxygen to the lungs","Maintaining the work of the heart","Release of processed substances","Ensuring the stability of the internal environment","Maintaining within the normal temperature","Maintaining an immune system capable of resisting disease"];return e.jsx($,{children:e.jsxs(w,{children:[e.jsx(y,{children:"Why drink water"}),e.jsx(T,{children:t.map((n,s)=>e.jsx(v,{children:n},s))})]})})},H="/assets/bg_mob_1x-45e67b01.png",I="/assets/bg_mob_2x-299ce2d2.png",R="/assets/bg_tab_1x-1f797613.png",L="/assets/bg_tab_2x-c5daf180.png",O="/assets/bg_img_1x-f981bb04.png",N="/assets/bg_img_2x-ea9b7f3f.png",o="/assets/bg_img_1x_bubbles-88afa2b3.png",c="/assets/bg_img_2x_bubbles-17852ecc.png",U=d.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${o}) 1x,
      url(${c}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${o}) 1x,
      url(${c}) 2x
    );
  }
`,V=d(M)`
  padding-top: 24px;
  padding-bottom: 40px;
  background-position: center bottom;
  background-image: -webkit-image-set(url(${H}) 1x, url(${I}) 2x);
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding-top: 40px;
    padding-bottom: 50px;
    background-size: cover;
    background-image: -webkit-image-set(
      url(${R}) 1x,
      url(${L}) 2x
    );
  }

  @media screen and (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    padding-top: 49px;
    padding-bottom: 109px;
    width: 100%;
    background-size: contain;
    background-position: center bottom;
    background-image: -webkit-image-set(
      url(${O}) 1x,
      url(${N}) 2x
    );
  }
`,F=()=>{const t=W(),n=C(),s=n[0].get("token");console.log(n),console.log(n[0]),console.log(n[0].get("token"));const i=g();return P.useEffect(()=>{if(s)try{t(S(s)),t(D()).then(a=>{a.error||i("/home")})}catch(a){console.log(a.message)}},[t,i,s]),e.jsx(V,{children:e.jsx(U,{children:e.jsx(B,{})})})};export{F as default};
