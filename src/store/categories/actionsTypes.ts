import { Action } from 'redux';
import { Category } from '../../Models/Category';

export const STORE_CATEGORY = 'STORE_CATEGORY';
export interface StoreCategoryAction extends Action {
  type: typeof STORE_CATEGORY;
  payload: { category: Category[] };
}

export type PetsAction = StoreCategoryAction;
