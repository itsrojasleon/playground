import React from "../../_snowpack/pkg/react.js";
import CellListItem from "./cell-list-item.js";
import {useTypedSelector} from "../hooks/use-typed-selector.js";
const CellList = () => {
  const {data} = useTypedSelector((state) => state.cells);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, data.map((cell) => /* @__PURE__ */ React.createElement(CellListItem, {
    key: cell.id,
    cell
  })), !data.length && /* @__PURE__ */ React.createElement("p", null, "No cells were found. Add one by yourself!"));
};
export default CellList;
