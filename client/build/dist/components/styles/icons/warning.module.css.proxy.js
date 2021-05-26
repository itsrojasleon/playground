
export let code = "._warning_1ar0v_1 {\n  width: 40px;\n  height: 40px;\n  color: red;\n  margin-right: 10px;\n}";
let json = {"warning":"_warning_1ar0v_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}