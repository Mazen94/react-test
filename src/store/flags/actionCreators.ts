import { StoreFlagAction } from './actionsTypes';

export const storeFlag = (name: string, value: boolean): StoreFlagAction => {
  return {
    type: name,
    payload: { value },
  };
};
