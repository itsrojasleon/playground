import type { Cell } from 'state/types';
import { ActionType } from '../action-types';
import type { Action } from '../actions';

interface CellsState {
  data: Cell[];
}

const initialState: CellsState = {
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
};

const cellsReducer = (
  state: CellsState = initialState,
  action: Action,
): CellsState => {
  switch (action.type) {
    case ActionType.INSERT_CELL:
      console.log(state.data);
      return { data: state.data.concat(action.payload) };
    case ActionType.UPDATE_CELL:
      const { id, content } = action.payload;
      return {
        data: state.data.map((cell) => {
          return cell.id === id ? { ...cell, content: content } : cell;
        }),
      };
    case ActionType.DELETE_CELL:
      return {
        data: state.data.filter((cell) => cell.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cellsReducer;
