import{g as C,n as x,r,a as S,j as e}from"./index-c0884e0b.js";var y={exports:{}},R="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",M=R,E=M;function g(){}function j(){}j.resetWarningCache=g;var N=function(){function t(s,a,i,m,u,l){if(l!==E){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function o(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:o,element:t,elementType:t,instanceOf:o,node:t,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:j,resetWarningCache:g};return n.PropTypes=n,n};y.exports=N();var O=y.exports;const h=C(O),P=x.div`
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
    background: ${t=>t.theme.color.white};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 24px;
    padding: 32px 24px;
    margin: 0;
    transition: all ${t=>t.theme.transition.modal};

    @media (min-width: ${t=>t.theme.breakpoint.mobile}) {
      padding: 32px 12px;
      width: calc(100% - 20px);
    }

    @media (min-width: ${t=>t.theme.breakpoint.tablet}) {
      width: 704px;
    }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${t=>t.theme.color.black};

    title {
      font-weight: 500;
      font-size: 26px;
      line-height: 1.2;
    }
  }
`,F=x.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  padding: 0;
`,W=x.svg`
  width: 100%;
  height: 100%;
  stroke: ${t=>t.theme.color.black};

  &:hover,
  &:focus {
    color: ${t=>t.theme.color.accent};
  }
`,_="/water-tracker/assets/sprite-0fc8466b.svg",f=({onShow:t=!0,type:o,children:n,title:s,onClose:a})=>{const i=document.querySelector("#modal-root"),m=r.useRef(null),u=r.useRef(null);return r.useEffect(()=>{if(!t)return;const l=p=>{document.body.style.overflow=p?"hidden":"auto"};(t||i.children.length!==0)&&l(!0);const c=p=>{p.code==="Escape"&&a()};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[i.children.length,t,a]),S.createPortal(e.jsx(P,{onClick:a,ref:u,children:e.jsxs("div",{className:"modal-content",type:o,onClick:l=>l.stopPropagation(),ref:m,children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h2",{children:s}),e.jsx(F,{onClick:a,children:e.jsx(W,{children:e.jsx("use",{href:`${_}#icon-outline`})})})]}),e.jsx("div",{children:n})]})}),i)};f.propTypes={onClose:h.func.isRequired,children:h.node.isRequired,onShow:h.bool,title:h.string.isRequired};const I=({onClose:t})=>e.jsx(f,{onClose:t,title:"My daily norma",children:e.jsx("div",{})}),v=({onClose:t})=>{const[o,n]=r.useState("female"),[s,a]=r.useState(""),[i,m]=r.useState(""),[u,l]=r.useState("2.0"),[c,p]=r.useState(""),b=()=>{const d=o==="female"?.03:.04,k=o==="female"?.4:.6,T=(s*d+i/60*k).toFixed(2);l(T)},w=async()=>{b()};return e.jsx(f,{onClose:t,title:"My daily norma",children:e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("p",{children:"For girl: V=(M*0,03) + (T*0,4)"}),e.jsx("p",{children:"For man: V=(M*0,04) + (T*0,6)"}),e.jsx("p",{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"})]}),e.jsx("div",{children:e.jsxs("form",{children:[e.jsxs("div",{className:"form-group",children:[e.jsx("h3",{children:"Calculate your rate:"}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender",value:"female",checked:o==="female",onChange:()=>n("female")}),"For girl"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"gender",value:"male",checked:o==="male",onChange:()=>n("male")}),"For boy"]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("p",{children:"Your weight in kilograms:"}),e.jsx("input",{type:"number",placeholder:"kg",value:s,onChange:d=>a(d.target.value)})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("p",{children:"Time of active participation in sports or other activities with a high physical load:"}),e.jsx("input",{type:"number",placeholder:"Time",value:i,onChange:d=>m(d.target.value)})]}),e.jsxs("div",{className:"form-result",children:["The required amount of water in liters per day:"," ",e.jsxs("strong",{children:[u," L"]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("p",{children:"Write down how much water you will drink:"}),e.jsx("input",{type:"number",placeholder:"L",value:c,onChange:d=>p(d.target.value)})]}),e.jsx("button",{onClick:w,children:"Save"})]})})]})})};v.propTypes={onClose:h.func.isRequired};const $=({userWaterIntake:t})=>{const[o,n]=r.useState(!1),s=()=>{n(!0)},a=()=>{n(!1)};return e.jsxs("div",{className:"daily-norma",children:[e.jsxs("p",{children:["Daily Water Norm: ",t||"2.0 L"]}),e.jsx("button",{onClick:s,children:"Edit"}),o&&e.jsx(v,{onClose:a})]})},q=()=>{const[t,o]=r.useState(!1),n=()=>{o(!0)},s=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx("h1",{children:"Home"}),e.jsx($,{}),e.jsx("button",{onClick:n,children:"Open Modal"}),t&&e.jsx(I,{onClose:s})]})};export{q as default};
