import React from "../../../_snowpack/pkg/react.js";
import styles from "../styles/icons/close.module.css.proxy.js";
const Add = ({onClick}) => {
  return /* @__PURE__ */ React.createElement("svg", {
    onClick,
    xmlns: "http://www.w3.org/2000/svg",
    className: styles.close,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }));
};
export default Add;
