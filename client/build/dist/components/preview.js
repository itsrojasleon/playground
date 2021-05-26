import React, {useEffect, useRef} from "../../_snowpack/pkg/react.js";
import {iframeHTML} from "../utils/template.js";
import "./styles/preview.css.proxy.js";
const Preview = ({code, err}) => {
  const iframeRef = useRef(null);
  useEffect(() => {
    if (!iframeRef.current)
      return;
    iframeRef.current.srcdoc = iframeHTML;
    const timer = window.setTimeout(() => {
      iframeRef.current.contentWindow?.postMessage(code, "*");
    }, 50);
    return () => {
      window.clearTimeout(timer);
    };
  }, [code]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "preview-wrapper"
  }, /* @__PURE__ */ React.createElement("iframe", {
    ref: iframeRef,
    sandbox: "allow-scripts",
    srcDoc: iframeHTML,
    title: "preview"
  }), err && /* @__PURE__ */ React.createElement("div", {
    className: "preview-err"
  }, err));
};
export default Preview;
