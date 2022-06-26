import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../rootStore';
import { PetsAction } from './actionsTypes';
import { deleteItem, get } from '../../helpers/axios';
import { StoreFlagAction } from '../flags/actionsTypes';
import { Pet } from '../../Models/Pet';
import { formatPets } from './formatters';
import { StoreCategoryAction, STORE_CATEGORY } from '../categories/actionsTypes';
import { STORE_TAGS, TagsAction } from '../tags/actionsTypes';
import { showToast } from '../toast/actionCreators';
import { ToastAction } from '../toast/actionsTypes';

export const fetchPetsAction =
  () => async (dispatch: ThunkDispatch<RootState, undefined, PetsAction | StoreFlagAction | StoreCategoryAction | TagsAction>) => {
    dispatch({ type: 'FETCH_PETS_LOADING', payload: { value: true } });
    try {
      const response = await get<Pet[]>('pet/findByStatus?status=available');
      const formatted = formatPets(response.data);
      dispatch({ type: 'FETCH_PETS_SUCCESS', payload: { pets: formatted.pets } });
      dispatch({ type: STORE_CATEGORY, payload: { category: formatted.categories } });
      dispatch({ type: STORE_TAGS, payload: { tags: formatted.tags } });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch({ type: 'FETCH_PETS_LOADING', payload: { value: true } });
    }
    dispatch({ type: 'FETCH_PETS_LOADING', payload: { value: false } });
  };

export const deletePetAction =
  (petId: number) => async (dispatch: ThunkDispatch<RootState, undefined, PetsAction | StoreFlagAction | ToastAction>) => {
    dispatch({ type: 'DELETE_PET_LOADING', payload: { value: true } });
    try {
      await deleteItem(`pet/${petId}`);
      dispatch({ type: 'DELETE_PET_SUCCESS_ACTION', payload: { petId } });
    } catch (error) {
      console.log('error', error);
      // dispatch({ type: 'DELETE_PET_LOADING', payload: { value: true } });
      dispatch(showToast('Error deleting pet', true));
    }
    dispatch({ type: 'DELETE_PET_LOADING', payload: { value: false } });
  };
