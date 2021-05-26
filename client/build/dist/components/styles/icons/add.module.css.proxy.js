
export let code = "._add_dkw4b_1 {\n  width: 23px;\n  height: 23px;\n}";
let json = {"add":"_add_dkw4b_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}