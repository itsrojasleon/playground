
export let code = "._close_1kp5a_1 {\n  width: 23px;\n  height: 23px;\n  transition: all 0.2s;\n}\n._close_1kp5a_1:hover {\n  cursor: pointer;\n  transform: scale(1.1);\n}";
let json = {"close":"_close_1kp5a_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}