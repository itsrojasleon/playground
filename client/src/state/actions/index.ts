import type { ActionType } from '../action-types';

interface CreateBundleAction {
  type: ActionType.CREATE_BUNDLE;
}

interface CreateBundleCompleteAction {
  type: ActionType.CREATE_BUNDLE_COMPLETE;
  payload: string;
}

interface CreateBundleErrorAction {
  type: ActionType.CREATE_BUNDLE_ERROR;
  payload: string;
}

export type Action =
  | CreateBundleAction
  | CreateBundleCompleteAction
  | CreateBundleErrorAction;
