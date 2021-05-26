import {ActionType} from "../action-types/index.js";
const initialState = {};
const bundlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.BUNDLE_START:
      return {
        ...state,
        [action.payload]: {loading: true, code: "", error: ""}
      };
    case ActionType.BUNDLE_COMPLETE:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          code: action.payload.code,
          error: ""
        }
      };
    case ActionType.BUNDLE_ERROR:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          code: "",
          error: action.payload.error
        }
      };
    default:
      return state;
  }
};
export default bundlesReducer;
