import type { Dispatch } from 'redux';
import axios from 'axios';
import { ActionType } from '../action-types';
import type { Action } from '../actions';

export const createBundle = (rawcode: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.CREATE_BUNDLE });
    try {
      const { data } = await axios.post<{ message: string; result: string }>(
        '/api/bundler',
        { rawcode },
      );

      dispatch({
        type: ActionType.CREATE_BUNDLE_COMPLETE,
        payload: data.result,
      });
    } catch (err) {
      dispatch({
        type: ActionType.CREATE_BUNDLE_ERROR,
        payload: err.response.data,
      });
    }
  };
};

// update

// delete

// fetch
