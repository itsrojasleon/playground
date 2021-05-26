import React from "../../_snowpack/pkg/react.js";
import Add from "./icons/add.js";
import styles from "./styles/button.module.css.proxy.js";
const Button = ({icon, children, ...props}) => {
  return /* @__PURE__ */ React.createElement("button", {
    ...props,
    className: styles.button
  }, children, icon && /* @__PURE__ */ React.createElement("span", {
    className: styles.icon
  }, /* @__PURE__ */ React.createElement(Add, null)));
};
export default Button;
