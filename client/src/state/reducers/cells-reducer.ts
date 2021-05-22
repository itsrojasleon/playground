import type { Cell } from 'state/types';
import { ActionType } from '../action-types';
import type { Action } from '../actions';

interface CellsState {
  loading: boolean;
  data: Cell[];
  error: string;
}

const initialState: CellsState = {
  loading: false,
  data: [
    {
      content: `const App = () => <h1>What is up everybody!</h1>; 
      
      render(<App />)
      render([1,2,3])
      render({greeting: 'hey there'})
      render('even regular strings?')`,
      id: '832a45ce',
      language: 'javascript',
    },
  ],
  error: '',
};

const cellsReducer = (
  state: CellsState = initialState,
  action: Action,
): CellsState => {
  switch (action.type) {
    case ActionType.INSERT_CELL:
      return { ...state, data: state.data.concat(action.payload) };
    case ActionType.UPDATE_CELL:
      const { id, content } = action.payload;
      return {
        ...state,
        data: state.data.map((cell) => {
          return cell.id === id ? { ...cell, content: content } : cell;
        }),
      };
    case ActionType.DELETE_CELL:
      return {
        ...state,
        data: state.data.filter((cell) => cell.id !== action.payload),
      };
    case ActionType.FETCH_PLAYGROUND_START:
      return { loading: true, data: [], error: '' };
    case ActionType.FETCH_PLAYGROUND_COMPLETE:
      return { loading: false, data: action.payload, error: '' };
    case ActionType.FETCH_PLAYGROUND_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default cellsReducer;
