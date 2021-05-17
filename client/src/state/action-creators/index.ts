import type { Dispatch } from 'redux';
import axios from 'axios';
import { ActionType } from '../action-types';
import type { Action, InsertCell } from '../actions';
import { randomId } from 'utils/helpers';
import type { Languages } from '../types';

// transpile code using `esbuild` in the server
// outcoming: `raw code`, incoming: `jsx, tsx, js, ts code`
export const createBundle = (rawcode: string, language: Languages) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.BUNDLE_START });
    try {
      const { data } = await axios.post<{ message: string; result: string }>(
        '/api/bundler',
        { rawcode, language },
      );

      dispatch({
        type: ActionType.BUNDLE_COMPLETE,
        payload: data.result,
      });
    } catch (err) {
      dispatch({
        type: ActionType.BUNDLE_ERROR,
        payload: err.response.data,
      });
    }
  };
};

// insert a code/markdown cell right after a previous one if exists
interface InsertCellParams {
  language: Languages;
  content: string;
}
export const insertCell = ({
  language,
  content,
}: InsertCellParams): InsertCell => {
  return {
    type: ActionType.INSERT_CELL,
    payload: { id: randomId(), language, content },
  };
};

// A playground can be created with `no code` or providing existent code
// export const createPlayground = () => {
//   return async (dispatch: Dispatch<Action>) => {
//     dispatch({ type: ActionType.CREATE_BUNDLE });

//     // create playground
//   };
// };

// update

// delete

// fetch
