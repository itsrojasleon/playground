import Header from "./components/header.js";
import React, {Suspense, lazy} from "../_snowpack/pkg/react.js";
import {BrowserRouter, Switch, Route} from "../_snowpack/pkg/react-router-dom.js";
const Home = lazy(() => import("./pages/home.js"));
const Playground = lazy(() => import("./pages/playground.js"));
const App = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", {
    style: {width: "95%", margin: "auto"}
  }, /* @__PURE__ */ React.createElement(Suspense, {
    fallback: /* @__PURE__ */ React.createElement("h1", null, "Loading...")
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/p/:id",
    component: Playground
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    component: Home
  }))))));
};
export default App;
