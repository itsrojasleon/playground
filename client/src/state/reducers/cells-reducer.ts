import type { Cell } from 'state/types';
import { ActionType } from '../action-types';
import type { Action } from '../actions';

interface CellsState {
  // loading: boolean;
  // error: string;
  data: Cell[];
}

const initialState = { data: [] };

const cellsReducer = (
  state: CellsState = initialState,
  action: Action,
): CellsState => {
  switch (action.type) {
    case ActionType.INSERT_CELL:
      return { data: state.data.concat(action.payload) };
    case ActionType.UPDATE_CELL:
      const { id, content } = action.payload;
      return {
        // ...state,
        data: state.data.map((cell) => {
          return cell.id === id ? { ...cell, content: content } : cell;
        }),
      };
    default:
      return state;
  }
};

export default cellsReducer;
