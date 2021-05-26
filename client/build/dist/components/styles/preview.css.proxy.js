// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".preview-wrapper {\n  position: relative;\n  height: 100%;\n  flex-grow: 1;\n}\n.preview-wrapper iframe {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #171717;\n}\n\n.preview-err {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: red;\n}\n\n.react-draggable-transparent-selection .preview-wrapper:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}