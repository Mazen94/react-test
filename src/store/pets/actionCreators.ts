import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../rootStore';
import { PetsAction } from './actionsTypes';
import { get } from '../../helpers/axios';
import { StoreFlagAction } from '../flags/actionsTypes';

export const fetchPetsAction = () => async (dispatch: ThunkDispatch<RootState, undefined, PetsAction | StoreFlagAction>) => {
  dispatch({ type: 'FETCH_PETS_LOADING', payload: { value: true } });
  try {
    const response = await get('pet/findByStatus?status=available');
    console.log('response', response);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    dispatch({ type: 'FETCH_PETS_LOADING', payload: { value: true } });
  }
  dispatch({ type: 'FETCH_PETS_LOADING', payload: { value: false } });
};
