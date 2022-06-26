import { Action } from 'redux';
import { PetState } from './stateType';

export interface FetchPetsSuccessAction extends Action {
  type: 'FETCH_PETS_SUCCESS';
  payload: { pets: PetState[] };
}
export interface DeletePetSuccessAction extends Action {
  type: 'DELETE_PET_SUCCESS_ACTION';
  payload: { petId: number };
}
export type PetsAction = FetchPetsSuccessAction | DeletePetSuccessAction;
