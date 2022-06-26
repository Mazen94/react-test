import { PetsAction } from './actionsTypes';
import { PetState } from './stateType';

export const INITIAL_STATE: PetState[] = [];

export function PetReducer(state = INITIAL_STATE, action: PetsAction) {
  switch (action.type) {
    case 'FETCH_PETS_SUCCESS':
      return {
        ...state,
        ...action.payload.pets,
      };
    case 'DELETE_PET_SUCCESS_ACTION':
      return state.filter((pet) => pet.id !== action.payload.petId);
    default:
      return state;
  }
}
