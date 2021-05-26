import {combineReducers} from "../../../_snowpack/pkg/redux.js";
import bundlesReducer from "./bundles-reducer.js";
import cellsReducer from "./cells-reducer.js";
const reducers = combineReducers({
  bundles: bundlesReducer,
  cells: cellsReducer
});
export default reducers;
