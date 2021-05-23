import axios from 'axios';
import type { Dispatch } from 'redux';
import type { Action, InsertCell, UpdateCell, DeleteCell } from '../actions';
import type { Cell, Languages, Playground } from '../types';
import { ActionType } from '../action-types';
import { randomId } from 'utils/helpers';

// Transpile code using `esbuild` in the server
// outcoming: `raw code`, incoming: `jsx, tsx, js, ts code`
export const createBundle = (
  id: string,
  rawcode: string,
  language: Languages,
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.BUNDLE_START, payload: id });

    interface IncomingRequest {
      message: string;
      result: string;
    }

    try {
      const { data } = await axios.post<IncomingRequest>('/api/bundler', {
        rawcode,
        language,
      });

      dispatch({
        type: ActionType.BUNDLE_COMPLETE,
        payload: { code: data.result, id },
      });
    } catch (err) {
      dispatch({
        type: ActionType.BUNDLE_ERROR,
        payload: { id, error: err.response.data },
      });
    }
  };
};

// Insert a code/markdown cell right after a previous one if exists
export const insertCell = (
  language: Languages,
  content: string,
): InsertCell => {
  return {
    type: ActionType.INSERT_CELL,
    payload: { id: randomId(), language, content },
  };
};

export const updateCell = (id: string, content: string): UpdateCell => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: { id, content },
  };
};

export const deleteCell = (id: string): DeleteCell => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};

// Create a playground to share with someone else
// you'll make a playground public
export const createPlayground = (cells: Cell[]) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.CREATE_PLAYGROUND_START });

    interface IncomingRequest {
      message: string;
      insertedId: string;
    }

    try {
      const { data } = await axios.post<IncomingRequest>('/api/playground', {
        cells,
      });

      dispatch({
        type: ActionType.CREATE_PLAYGROUND_COMPLETE,
        payload: data.insertedId,
      });
    } catch (err) {
      dispatch({
        type: ActionType.CREATE_PLAYGROUND_ERROR,
        payload: err.response.data,
      });
    }
  };
};

export const fetchPlayground = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_PLAYGROUND_START });

    interface IncomingRequest {
      message: string;
      playground: Playground;
    }

    try {
      const { data } = await axios.get<IncomingRequest>(
        `/api/playground?p=${id}`,
      );

      dispatch({
        type: ActionType.FETCH_PLAYGROUND_COMPLETE,
        payload: data.playground.cells,
      });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_PLAYGROUND_ERROR,
        payload: err.response.data,
      });
    }
  };
};
