
export let code = "._info_80ils_1 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #101010;\n  padding: 10px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n._text_80ils_11 {\n  display: flex;\n  align-items: center;\n}\n._text_80ils_11 > p {\n  font-size: 17px;\n}\n\n._close_80ils_19 {\n  font-size: 17px;\n}\n._close_80ils_19:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}";
let json = {"info":"_info_80ils_1","text":"_text_80ils_11","close":"_close_80ils_19"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}