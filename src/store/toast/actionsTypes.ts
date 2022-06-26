import { Action } from 'redux';

export const SHOW_TOAST = 'SHOW_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';
interface ShowToastAction extends Action {
  type: typeof SHOW_TOAST;
  payload: { value: boolean; description: string };
}
interface HideToastAction extends Action {
  type: typeof HIDE_TOAST;
  payload: { value: boolean };
}

export type ToastAction = ShowToastAction | HideToastAction;
