import{g as b,n as u,r as c,j as o}from"./index-545c522f.js";var f={exports:{}},w="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",v=w,j=v;function x(){}function y(){}y.resetWarningCache=x;var R=function(){function e(a,r,l,h,m,d){if(d!==j){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y,resetWarningCache:x};return n.PropTypes=n,n};f.exports=R();var T=f.exports;const s=b(T),k=u.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;

  .modal-content {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    background: ${e=>e.theme.color.white};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 24px;
    padding: 32px 24px;
    margin: 0;
    transition: all ${e=>e.theme.transition.modal};

    @media (min-width: ${e=>e.theme.breakpoint.mobile}) {
      padding: 32px 12px;
      width: calc(100% - 20px);
    }

    @media (min-width: ${e=>e.theme.breakpoint.tablet}) {
      width: 704px;
    }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${e=>e.theme.color.black};

    title {
      font-weight: 500;
      font-size: 26px;
      line-height: 1.2;
    }
  }
`,E=u.button`
  width: 24px;
  height: 24px;
  color: ${e=>e.theme.color.black};
  background-color: transparent;
  padding: 0;
  font-size: 24px;

  &:hover,
  &:focus {
    color: ${e=>e.theme.color.accent};
  }
`,g=({onShow:e=!0,type:t,children:n,title:a,onClose:r})=>{const l=document.querySelector("#modal-root"),h=c.useRef(null),m=c.useRef(null);return c.useEffect(()=>{if(!e)return;const d=p=>{document.body.style.overflow=p?"hidden":"auto"};(e||l.children.length!==0)&&d(!0);const i=p=>{p.code==="Escape"&&r()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[l.children.length,e,r]),o.jsx(k,{onClick:r,ref:m,children:o.jsxs("div",{className:"modal-content",type:t,ref:h,children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h2",{children:a}),o.jsx(E,{onClick:r,children:"×"})]}),o.jsx("div",{children:n})]})})};g.propTypes={onClose:s.func.isRequired,children:s.node.isRequired,onShow:s.bool,title:s.string.isRequired};const S=({onClose:e})=>o.jsx(g,{onClose:e,title:"My daily norma",children:o.jsx("div",{})}),P=()=>{const[e,t]=c.useState(!1),n=()=>{t(!0)},a=()=>{t(!1)};return o.jsxs("div",{children:[o.jsx("h1",{children:"Home"}),o.jsx("button",{onClick:n,children:"Open Modal"}),e&&o.jsx(S,{onClose:a})]})};export{P as default};
