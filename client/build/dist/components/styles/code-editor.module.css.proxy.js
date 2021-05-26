
export let code = "._wrapper_vfbf1_1 {\n  position: relative;\n  height: 100%;\n  width: calc(100% - 10px);\n}\n._wrapper_vfbf1_1:hover ._format_vfbf1_6 {\n  opacity: 1;\n}\n\n._format_vfbf1_6 {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #53a762;\n  color: white;\n  z-index: 1;\n  border: none;\n  border-radius: 3px;\n  padding: 4px 20px;\n  opacity: 0;\n  transition: all 0.2s;\n}\n._format_vfbf1_6:hover {\n  cursor: pointer;\n}";
let json = {"wrapper":"_wrapper_vfbf1_1","format":"_format_vfbf1_6"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}