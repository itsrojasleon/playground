
export let code = "._buttons_15tn2_1 {\n  display: flex;\n}\n._buttons_15tn2_1 button {\n  margin-right: 10px;\n}";
let json = {"buttons":"_buttons_15tn2_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}