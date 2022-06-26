import { ToastAction, HIDE_TOAST, SHOW_TOAST } from './actionsTypes';
import { ToastState } from './stateType';

export const INITIAL_STATE: ToastState = {
  value: false,
  description: '',
};

export function ToastReducer(state = INITIAL_STATE, action: ToastAction) {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        value: true,
        description: action.payload.description,
      };
    case HIDE_TOAST:
      return {
        ...state,
        ...action.payload,
        description: '',
      };
    default:
      return state;
  }
}
