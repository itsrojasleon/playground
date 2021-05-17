import type { Cell } from '../types';
import type { ActionType } from '../action-types';

interface BundleStartAction {
  type: ActionType.BUNDLE_START;
}

interface BundleCompleteAction {
  type: ActionType.BUNDLE_COMPLETE;
  payload: string;
}

interface BundleErrorAction {
  type: ActionType.BUNDLE_ERROR;
  payload: string;
}

export interface InsertCell {
  type: ActionType.INSERT_CELL;
  payload: Cell;
}

export type Action =
  | BundleStartAction
  | BundleCompleteAction
  | BundleErrorAction
  | InsertCell;
