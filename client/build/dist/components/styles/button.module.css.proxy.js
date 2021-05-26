
export let code = "._button_18zcc_1 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n  border: none;\n  padding: 4px 15px;\n  border-radius: 3px;\n  color: white;\n  transition: all 0.3s;\n}\n._button_18zcc_1:hover {\n  cursor: pointer;\n  transform: scale(1.07);\n}\n\n._icon_18zcc_17 {\n  margin-left: 3px;\n}";
let json = {"button":"_button_18zcc_1","icon":"_icon_18zcc_17"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}