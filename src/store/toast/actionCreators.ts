import { HIDE_TOAST, SHOW_TOAST, ToastAction } from './actionsTypes';

export const showToast = (description: string, value: boolean): ToastAction => {
  return {
    type: SHOW_TOAST,
    payload: { value, description },
  };
};

export const hideToast = (): ToastAction => {
  return {
    type: HIDE_TOAST,
    payload: { value: false },
  };
};
