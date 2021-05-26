import React from "../../_snowpack/pkg/react.js";
import Button from "./button.js";
import {useActions} from "../hooks/use-actions.js";
import styles from "./styles/add-cell.module.css.proxy.js";
const AddCell = () => {
  const {insertCell} = useActions();
  const handleClick = (language) => {
    insertCell(language, "");
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.buttons
  }, /* @__PURE__ */ React.createElement(Button, {
    icon: true,
    style: {backgroundColor: "purple"},
    onClick: () => handleClick("javascript")
  }, "Javascript"), /* @__PURE__ */ React.createElement(Button, {
    icon: true,
    style: {backgroundColor: "rebeccapurple"},
    onClick: () => handleClick("typescript")
  }, "Typescript"), /* @__PURE__ */ React.createElement(Button, {
    icon: true,
    style: {backgroundColor: "indigo"},
    onClick: () => handleClick("markdown")
  }, "Markdown"));
};
export default AddCell;
