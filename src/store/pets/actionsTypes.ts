import { Action } from 'redux';
import { PetState } from './stateType';

export interface FetchPetsSuccessAction extends Action {
  type: 'FETCH_PETS_SUCCESS';
  payload: { pets: PetState[] };
}

export type PetsAction = FetchPetsSuccessAction;
