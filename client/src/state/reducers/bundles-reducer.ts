import { combineReducers } from 'redux';
import { ActionType } from '../action-types';
import type { Action } from '../actions';

interface BundlesState {
  loading: boolean;
  code: string;
  err: string;
}

const initialState: BundlesState = { loading: false, code: '', err: '' };

const bundlesReducer = (
  state: BundlesState = initialState,
  action: Action,
): BundlesState => {
  switch (action.type) {
    case ActionType.BUNDLE_START:
      return { loading: true, err: '', code: '' };
    case ActionType.BUNDLE_COMPLETE:
      return { loading: false, err: '', code: action.payload };
    case ActionType.BUNDLE_ERROR:
      return { loading: false, err: action.payload, code: '' };
    default:
      return state;
  }
};

export default bundlesReducer;
