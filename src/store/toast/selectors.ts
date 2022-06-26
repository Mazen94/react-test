import { createSelector } from 'reselect';
import { RootState } from '../rootStore';
import { ToastState } from './stateType';

export const toastSelector = (state: RootState) => state.toast;

export const toastValueSelector = createSelector(toastSelector, (toast: ToastState) => toast.value);
export const toastDescriptionSelector = createSelector(toastSelector, (toast: ToastState) => toast.description);
