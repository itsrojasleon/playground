import type { Cell } from '../types';
import type { ActionType } from '../action-types';

interface BundleStartAction {
  type: ActionType.BUNDLE_START;
  payload: string;
}

interface BundleCompleteAction {
  type: ActionType.BUNDLE_COMPLETE;
  payload: { code: string; id: string };
}

interface BundleErrorAction {
  type: ActionType.BUNDLE_ERROR;
  payload: { id: string; error: string };
}

export interface InsertCell {
  type: ActionType.INSERT_CELL;
  payload: Cell;
}

export interface UpdateCell {
  type: ActionType.UPDATE_CELL;
  payload: { id: string; content: string };
}

export interface DeleteCell {
  type: ActionType.DELETE_CELL;
  payload: string;
}
export type Action =
  | BundleStartAction
  | BundleCompleteAction
  | BundleErrorAction
  | InsertCell
  | UpdateCell
  | DeleteCell;
