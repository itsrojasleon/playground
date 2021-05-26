import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
import CodeEditor from "./code-editor.js";
import Resizable from "./resizable.js";
import MarkdownPreview from "./markdown-preview.js";
import Preview from "./preview.js";
import ActionBar from "./action-bar.js";
import {useActions} from "../hooks/use-actions.js";
import {useTypedSelector} from "../hooks/use-typed-selector.js";
import {cumulativeCode} from "../utils/template.js";
import styles from "./styles/cell-list-item.module.css.proxy.js";
const CellListItem = ({cell}) => {
  const {updateCell, createBundle} = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode(cell.content), cell.language);
      return;
    }
    const timer = window.setTimeout(() => {
      createBundle(cell.id, cumulativeCode(cell.content), cell.language);
    }, 1e3);
    return () => {
      window.clearTimeout(timer);
    };
  }, [cell.id, cumulativeCode(cell.content), createBundle]);
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.item
  }, /* @__PURE__ */ React.createElement(ActionBar, {
    language: cell.language,
    id: cell.id,
    isOpen,
    onToggleEditor: () => setIsOpen(!isOpen)
  }), /* @__PURE__ */ React.createElement(Resizable, {
    key: cell.id,
    direction: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      height: "calc(100% - 10px)",
      display: "flex",
      flexDirection: "row"
    }
  }, isOpen ? /* @__PURE__ */ React.createElement(Resizable, {
    direction: "horizontal"
  }, /* @__PURE__ */ React.createElement(CodeEditor, {
    language: cell.language,
    onChange: (value) => updateCell(cell.id, value),
    initialValue: cell.language === "typescript" ? "// @ts-nocheck" : cell.content
  })) : null, cell.language === "markdown" ? /* @__PURE__ */ React.createElement(MarkdownPreview, {
    htmlCode: cell.content
  }) : /* @__PURE__ */ React.createElement(React.Fragment, null, !bundle || bundle.loading ? /* @__PURE__ */ React.createElement("div", null, "Loading...") : /* @__PURE__ */ React.createElement(Preview, {
    code: bundle.code,
    err: bundle.error
  })))));
};
export default CellListItem;
