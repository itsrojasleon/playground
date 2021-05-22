import type { Cell } from 'state/types';
import { ActionType } from '../action-types';
import type { Action } from '../actions';

interface CellsState {
  loading: boolean;
  data: Cell[];
  error: string;
  insertedId: string | null;
}

const initialState: CellsState = {
  loading: false,
  data: [
    {
      content: `// This is the default playground :)
      import { useState } from 'react';

      const App = () => {
        const [counter, setCounter] = useState(0);
        
        return (
          <div>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <p>{counter}</p>
          </div>
        );
      };
      
      render(<App />);
      
      render([1,2,3])
      render({greeting: 'hey there'})
      render('even regular strings?')`,
      id: '832a45ce',
      language: 'javascript',
    },
  ],
  error: '',
  insertedId: null,
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
      return { ...state, loading: true, data: [], error: '' };
    case ActionType.FETCH_PLAYGROUND_COMPLETE:
      return { ...state, loading: false, data: action.payload, error: '' };
    case ActionType.FETCH_PLAYGROUND_ERROR:
      return { ...state, loading: false, data: [], error: action.payload };
    case ActionType.CREATE_PLAYGROUND_START:
      // It will make sense to add loading indicators, but nah.
      return { ...state };
    case ActionType.CREATE_PLAYGROUND_COMPLETE:
      return { ...state, insertedId: action.payload };
    case ActionType.CREATE_PLAYGROUND_ERROR:
      return { ...state, error: action.payload, insertedId: null };
    default:
      return state;
  }
};

export default cellsReducer;
