import{n as s,aL as r,j as a,aM as o,aN as t}from"./index-3bdc62d6.js";import{S as i}from"./Section-5c1ddb6e.js";import{i as m,a as n,b as d,c as g,d as c,e as x}from"./bubbleTablet@2x-6e22c1d3.js";const b=s(i)`
  padding-top: 40px;
  background-position: top;
  background-image: -webkit-image-set(
    url(${m}) 1x,
    url(${n}) 2x
  );
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${d}) 1x,
      url(${g}) 2x
    );
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${c}) 1x,
      url(${x}) 2x
    );
  }
`,l=()=>r()[0].has("resetToken")?a.jsx(b,{children:a.jsx(t,{})}):a.jsx(o,{to:"/"});export{l as default};
