// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".react-resizable-handle {\n  display: block;\n  background-color: #171717;\n  background-repeat: no-repeat;\n  background-position: 50%;\n}\n\n.resize-horizontal {\n  display: flex;\n  flex-direction: row;\n}\n\n.react-resizable-handle-s {\n  height: 10px;\n  width: 100%;\n  cursor: row-resize;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=\");\n}\n\n.react-resizable-handle-e {\n  width: 10px;\n  min-width: 10px;\n  height: 100%;\n  cursor: col-resize;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==\");\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}