import { Action } from 'redux';

interface StoreFlag extends Action {
  type: string;
  payload: { value: boolean };
}

export type StoreFlagAction = StoreFlag;
