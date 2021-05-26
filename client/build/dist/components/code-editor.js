import React, {useRef, useEffect} from "../../_snowpack/pkg/react.js";
import MonacoEditor from "../../_snowpack/pkg/@monaco-editor/react.js";
import prettier from "../../_snowpack/pkg/prettier.js";
import babelParser from "../../_snowpack/pkg/prettier/parser-babel.js";
import markdownParser from "../../_snowpack/pkg/prettier/parser-markdown.js";
import styles from "./styles/code-editor.module.css.proxy.js";
const CodeEditor = ({
  initialValue,
  onChange,
  language
}) => {
  const editorRef = useRef(null);
  const sectionRef = useRef(null);
  const onEditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });
    monacoEditor.getModel()?.updateOptions({tabSize: 2});
    onFormatClick();
  };
  const onFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue();
    const formatted = prettier.format(unformatted, {
      parser: language === "markdown" ? "markdown" : "babel",
      plugins: [language === "markdown" ? markdownParser : babelParser],
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: "none"
    });
    editorRef.current.setValue(formatted);
  };
  useEffect(() => {
    if (!sectionRef.current)
      return;
  }, []);
  return /* @__PURE__ */ React.createElement("section", {
    className: styles.wrapper
  }, /* @__PURE__ */ React.createElement("button", {
    className: styles.format,
    onClick: onFormatClick
  }, "Format"), /* @__PURE__ */ React.createElement(MonacoEditor, {
    editorDidMount: onEditorDidMount,
    value: initialValue,
    height: "100%",
    language,
    theme: "vs-dark",
    options: {
      wordWrap: "on",
      minimap: {enabled: false},
      showUnused: false,
      folding: false,
      lineNumbersMinChars: 3,
      fontSize: 16,
      scrollBeyondLastLine: false,
      automaticLayout: true
    }
  }));
};
export default CodeEditor;
