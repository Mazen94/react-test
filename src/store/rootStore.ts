import { useDispatch } from 'react-redux';
import { AnyAction, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { CategoriesReducer } from './categories/reducers';
import { FlagsReducer } from './flags/reducers';
import { PetReducer } from './pets/reducers';
import { TagsReducer } from './tags/reducers';
export const rootReducer = combineReducers({
  flags: FlagsReducer,
  pets: PetReducer,
  categories: CategoriesReducer,
  tags: TagsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatcher = ThunkDispatch<RootState, undefined, AnyAction>;
export type ReduxState = ReturnType<typeof rootReducer>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
