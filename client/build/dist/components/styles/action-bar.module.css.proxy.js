
export let code = "._bar_19rsu_1 {\n  display: flex;\n  justify-content: space-between;\n  text-align: right;\n  background-color: #101010;\n  padding: 5px 15px;\n}\n\n._lang_19rsu_9 {\n  font-weight: bolder;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n._options_19rsu_15 {\n  display: flex;\n  align-items: center;\n}\n\n._hide_19rsu_20 {\n  margin-right: 10px;\n}\n._hide_19rsu_20:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}";
let json = {"bar":"_bar_19rsu_1","lang":"_lang_19rsu_9","options":"_options_19rsu_15","hide":"_hide_19rsu_20"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}