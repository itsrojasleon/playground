import React from "../../_snowpack/pkg/react.js";
import marked from "../../_snowpack/pkg/marked.js";
import styles from "./styles/markdown-preview.module.css.proxy.js";
const MarkdownPreview = ({htmlCode}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.wrapper
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles.html,
    dangerouslySetInnerHTML: {__html: marked(htmlCode)}
  }));
};
export default MarkdownPreview;
