import { combineReducers } from 'redux';
import bundlesReducer from './bundles-reducer';
import cellsReducer from './cells-reducer';

const reducers = combineReducers({
  bundles: bundlesReducer,
  cells: cellsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
