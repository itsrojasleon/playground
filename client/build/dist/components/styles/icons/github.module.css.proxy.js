
export let code = "._icon_f02t8_1 {\n  width: 30px;\n  height: 30px;\n}\n._icon_f02t8_1:hover {\n  cursor: pointer;\n}";
let json = {"icon":"_icon_f02t8_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}