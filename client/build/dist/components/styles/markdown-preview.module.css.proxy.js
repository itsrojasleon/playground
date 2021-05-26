
export let code = "._wrapper_1xenx_1 {\n  overflow: auto;\n  flex-grow: 1;\n  background-color: #141618;\n}\n._wrapper_1xenx_1 ._html_1xenx_6 {\n  color: white;\n  height: 100%;\n}";
let json = {"wrapper":"_wrapper_1xenx_1","html":"_html_1xenx_6"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}