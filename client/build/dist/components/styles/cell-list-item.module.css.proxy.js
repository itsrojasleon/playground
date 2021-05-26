
export let code = "._item_y6bo6_1 {\n  border: 0.5px solid #000;\n}";
let json = {"item":"_item_y6bo6_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}