import * as __SNOWPACK_ENV__ from '../../_snowpack/env.js';

import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import AddCell from "./add-cell.js";
import Github from "./icons/github.js";
import styles from "./styles/header.module.css.proxy.js";
import {useActions} from "../hooks/use-actions.js";
import {useTypedSelector} from "../hooks/use-typed-selector.js";
const Header = () => {
  const {createPlayground} = useActions();
  const {insertedId, data} = useTypedSelector((state) => state.cells);
  return /* @__PURE__ */ React.createElement("header", {
    className: styles.header
  }, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement(Link, {
    className: styles.playground,
    to: "/"
  }, "Playground")), /* @__PURE__ */ React.createElement("div", {
    className: styles.share
  }, data.length >= 1 && (insertedId ? /* @__PURE__ */ React.createElement("input", {
    readOnly: true,
    value: `${__SNOWPACK_ENV__.NODE_ENV === "production" ? "playground-prod.herokuapp.com" : "http://localhost:8080"}/p/${insertedId}`
  }) : /* @__PURE__ */ React.createElement("p", {
    onClick: () => createPlayground(data)
  }, "Share playground!"))), /* @__PURE__ */ React.createElement("div", {
    className: styles.last
  }, /* @__PURE__ */ React.createElement(AddCell, null), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/rojasleon/playground",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Github, null))));
};
export default Header;
