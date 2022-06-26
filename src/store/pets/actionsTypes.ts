import { Action } from 'redux';
import { Pet } from '../../Models/Pet';

export interface FetchPetsSuccessAction extends Action {
  type: 'FETCH_PETS_SUCCESS';
  payload: { pets: Pet[] };
}

export type PetsAction = FetchPetsSuccessAction;
