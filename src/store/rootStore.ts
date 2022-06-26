import { combineReducers } from 'redux';
import { FlagsReducer } from './flags/reducers';
export const rootReducer = combineReducers({
  flags: FlagsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
