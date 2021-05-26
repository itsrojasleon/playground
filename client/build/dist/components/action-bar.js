import React from "../../_snowpack/pkg/react.js";
import Close from "./icons/close.js";
import {useActions} from "../hooks/use-actions.js";
import styles from "./styles/action-bar.module.css.proxy.js";
const ActionBar = ({
  id,
  language,
  onToggleEditor,
  isOpen
}) => {
  const {deleteCell} = useActions();
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.bar
  }, /* @__PURE__ */ React.createElement("p", {
    className: styles.lang
  }, language), /* @__PURE__ */ React.createElement("div", {
    className: styles.options
  }, /* @__PURE__ */ React.createElement("p", {
    onClick: onToggleEditor,
    className: styles.hide
  }, isOpen ? "Hide" : "Show", " code"), /* @__PURE__ */ React.createElement(Close, {
    onClick: () => deleteCell(id)
  })));
};
export default ActionBar;
