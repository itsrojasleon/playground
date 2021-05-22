import type { Cell, Playground } from 'state/types';
import { ActionType } from '../action-types';
import type { Action } from '../actions';

interface CellsState {
  loading: boolean;
  data: Playground | null;
  error: string;
}

const initialState: CellsState = { loading: false, data: null, error: '' };

const cellsReducer = (
  state: CellsState = initialState,
  action: Action,
): CellsState => {
  switch (action.type) {
    case ActionType.FETCH_PLAYGROUND_START:
      return { ...state, loading: true, data: null, error: '' };
    case ActionType.FETCH_PLAYGROUND_COMPLETE:
      return { ...state, loading: false, data: action.payload, error: '' };
    case ActionType.FETCH_PLAYGROUND_ERROR:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export default cellsReducer;
