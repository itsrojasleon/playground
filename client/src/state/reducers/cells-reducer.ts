import type { Cell } from 'state/types';
import { ActionType } from '../action-types';
import type { Action } from '../actions';

interface CellsState {
  loading: boolean;
  error: string;
  data: Cell[];
}

const initialState = { loading: false, error: '', data: [] };

const cellsReducer = (
  state: CellsState = initialState,
  action: Action,
): CellsState => {
  switch (action.type) {
    case ActionType.INSERT_CELL:
      return { ...state, data: state.data.concat(action.payload) };
    default:
      return state;
  }
};

export default cellsReducer;
