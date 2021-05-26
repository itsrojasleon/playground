import React, {useState} from "../../_snowpack/pkg/react.js";
import Information from "./icons/information.js";
import Warning from "./icons/warning.js";
import styles from "./styles/info.module.css.proxy.js";
const Message = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isOpen ? /* @__PURE__ */ React.createElement("section", {
    className: styles.info
  }, children, /* @__PURE__ */ React.createElement("p", {
    onClick: () => setIsOpen(false),
    className: styles.close
  }, "Close?")) : null);
};
const InfoMessage = () => /* @__PURE__ */ React.createElement("div", {
  className: styles.text
}, /* @__PURE__ */ React.createElement(Information, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Hey there stranger! 👋"), /* @__PURE__ */ React.createElement("p", null, "This a playground where you can execute Javascript/Typescript and Markdown code!"), /* @__PURE__ */ React.createElement("p", null, "You can use special function `render` to show something on the screen.")));
const ErrorMessage = ({error}) => /* @__PURE__ */ React.createElement("div", {
  className: styles.text
}, /* @__PURE__ */ React.createElement(Warning, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Upps! Someting went wrong! 😨"), /* @__PURE__ */ React.createElement("p", null, 'Error: "', error, '"')));
export {Message, ErrorMessage, InfoMessage};
