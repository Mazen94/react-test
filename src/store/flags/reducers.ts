import { StoreFlagAction } from './actionsTypes';
import { FlagsState } from './stateType';

export const INITIAL_STATE: FlagsState = {};

export function FlagsReducer(state = INITIAL_STATE, action: StoreFlagAction) {
  const { type, payload } = action;
  const matches = /(.*)_(LOADING|ERROR)/.exec(type);

  if (!matches) return state;

  return {
    ...state,
    [type]: payload.value,
  };
}
