import { createSelector } from 'reselect';
import { RootState } from '../rootStore';
import { FlagsState } from './stateType';

export const createFlagSelector = (name: string, defaultValue = false) => {
  return createSelector(flagsSelector, (flags: FlagsState) => flags[name] ?? defaultValue);
};

export const flagsSelector = (state: RootState) => state.flags;
