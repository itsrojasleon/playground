
export let code = "._header_2xju6_1 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  margin-bottom: 10px;\n  background-color: #161617;\n  color: white;\n  height: 8vh;\n}\n\n._wrapper-links_2xju6_12 {\n  display: flex;\n  list-style: none;\n  justify-content: space-between;\n  width: 100%;\n}\n\n._link_2xju6_19 {\n  padding: 0 0 0 20px;\n  color: white;\n  text-decoration: none;\n  font-weight: bolder;\n}\n._link_2xju6_19:hover {\n  cursor: pointer;\n}\n\n._last_2xju6_29 {\n  display: flex;\n  align-items: center;\n}\n\n._share_2xju6_34 {\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n}\n._share_2xju6_34 > p:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n._share_2xju6_34 > input {\n  padding: 8px 10px;\n  border: none;\n  margin-left: 5px;\n  border-radius: 4px;\n  font-size: 16px;\n  background-color: #474848;\n  color: white;\n}\n._share_2xju6_34 > input:focus {\n  outline: none;\n}";
let json = {"header":"_header_2xju6_1","wrapper-links":"_wrapper-links_2xju6_12","link":"_link_2xju6_19","last":"_last_2xju6_29","share":"_share_2xju6_34"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}