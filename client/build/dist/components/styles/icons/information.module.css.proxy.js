
export let code = "._info_1r063_1 {\n  width: 40px;\n  height: 40px;\n  color: #f8d047;\n  margin-right: 10px;\n}";
let json = {"info":"_info_1r063_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}