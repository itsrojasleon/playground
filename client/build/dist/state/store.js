import {createStore, applyMiddleware} from "../../_snowpack/pkg/redux.js";
import thunk from "../../_snowpack/pkg/redux-thunk.js";
import reducers from "./reducers/index.js";
export const store = createStore(reducers, {}, applyMiddleware(thunk));
