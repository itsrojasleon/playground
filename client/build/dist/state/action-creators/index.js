import axios from "../../../_snowpack/pkg/axios.js";
import {ActionType} from "../action-types/index.js";
import {randomId} from "../../utils/helpers.js";
export const createBundle = (id, rawcode, language) => {
  return async (dispatch) => {
    dispatch({type: ActionType.BUNDLE_START, payload: id});
    try {
      const {data} = await axios.post("/api/bundler", {
        rawcode,
        language
      });
      dispatch({
        type: ActionType.BUNDLE_COMPLETE,
        payload: {code: data.result, id}
      });
    } catch (err) {
      dispatch({
        type: ActionType.BUNDLE_ERROR,
        payload: {id, error: err.response.data}
      });
    }
  };
};
export const insertCell = (language, content) => {
  return {
    type: ActionType.INSERT_CELL,
    payload: {id: randomId(), language, content}
  };
};
export const updateCell = (id, content) => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {id, content}
  };
};
export const deleteCell = (id) => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id
  };
};
export const createPlayground = (cells) => {
  return async (dispatch) => {
    dispatch({type: ActionType.CREATE_PLAYGROUND_START});
    try {
      const {data} = await axios.post("/api/playground", {
        cells
      });
      dispatch({
        type: ActionType.CREATE_PLAYGROUND_COMPLETE,
        payload: data.insertedId
      });
    } catch (err) {
      dispatch({
        type: ActionType.CREATE_PLAYGROUND_ERROR,
        payload: err.response.data
      });
    }
  };
};
export const fetchPlayground = (id) => {
  return async (dispatch) => {
    dispatch({type: ActionType.FETCH_PLAYGROUND_START});
    try {
      const {data} = await axios.get(`/api/playground?p=${id}`);
      dispatch({
        type: ActionType.FETCH_PLAYGROUND_COMPLETE,
        payload: data.playground.cells
      });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_PLAYGROUND_ERROR,
        payload: err.response.data
      });
    }
  };
};
