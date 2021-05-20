import { ActionType } from '../action-types';
import type { Action } from '../actions';

interface BundlesState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        error: string;
      }
    | undefined;
}

const initialState: BundlesState = {};

const bundlesReducer = (
  state: BundlesState = initialState,
  action: Action,
): BundlesState => {
  switch (action.type) {
    case ActionType.BUNDLE_START:
      return {
        ...state,
        [action.payload]: { loading: true, code: '', error: '' },
      };
    case ActionType.BUNDLE_COMPLETE:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          code: action.payload.code,
          error: '',
        },
      };
    case ActionType.BUNDLE_ERROR:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          code: '',
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
};

export default bundlesReducer;
