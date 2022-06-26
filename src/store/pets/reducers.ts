import { FetchPetsSuccessAction } from './actionsTypes';
import { PetState } from './stateType';

export const INITIAL_STATE: PetState[] = [];

export function PetReducer(state = INITIAL_STATE, action: FetchPetsSuccessAction) {
  switch (action.type) {
    case 'FETCH_PETS_SUCCESS':
      return {
        ...state,
        ...action.payload.pets,
      };
    default:
      return state;
  }
}
