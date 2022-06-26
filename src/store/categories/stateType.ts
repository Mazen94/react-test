import { Category } from '../../Models/Category';

export interface CategoryState {
  byId: { [id: number]: Category };
  allIds: number[];
}
