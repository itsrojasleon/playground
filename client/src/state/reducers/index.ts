import { combineReducers } from 'redux';
import { ActionType } from '../action-types';
import type { Action } from '../actions';

interface BundlesState {
  loading: boolean;
  code: string;
  err: string;
}

const initialState: BundlesState = {
  loading: false,
  code: '',
  err: '',
};

const bundlesReducer = (
  state: BundlesState = initialState,
  action: Action,
): BundlesState => {
  switch (action.type) {
    case ActionType.CREATE_BUNDLE:
      return { loading: true, err: '', code: '' };
    case ActionType.CREATE_BUNDLE_COMPLETE:
      return { loading: false, err: '', code: action.payload };
    case ActionType.CREATE_BUNDLE_ERROR:
      return { loading: false, err: action.payload, code: '' };
    default:
      return state;
  }
};

const reducer = combineReducers({
  bundles: bundlesReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
