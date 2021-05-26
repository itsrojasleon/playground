import React, {useEffect} from "../../_snowpack/pkg/react.js";
import {useParams} from "../../_snowpack/pkg/react-router-dom.js";
import {useActions} from "../hooks/use-actions.js";
import CellList from "../components/cell-list.js";
import {Message, ErrorMessage, InfoMessage} from "../components/message.js";
import {useTypedSelector} from "../hooks/use-typed-selector.js";
const Playground = () => {
  const {id} = useParams();
  const {fetchPlayground} = useActions();
  const {data, loading, error} = useTypedSelector((state) => state.cells);
  useEffect(() => {
    fetchPlayground(id);
  }, [id]);
  if (error)
    return /* @__PURE__ */ React.createElement(Message, null, /* @__PURE__ */ React.createElement(ErrorMessage, {
      error
    }));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Message, null, /* @__PURE__ */ React.createElement(InfoMessage, null)), /* @__PURE__ */ React.createElement(CellList, null));
};
export default Playground;
