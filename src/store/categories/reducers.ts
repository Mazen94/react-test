/* eslint-disable no-case-declarations */
import { Category } from '../../Models/Category';
import { STORE_CATEGORY, StoreCategoryAction } from './actionsTypes';
import { CategoryState } from './stateType';

export const INITIAL_STATE: CategoryState = { byId: {}, allIds: [] };

export function CategoriesReducer(state = INITIAL_STATE, action: StoreCategoryAction) {
  switch (action.type) {
    case STORE_CATEGORY:
      const allIds = action.payload.category.map((category) => category.id);
      const byId = action.payload.category.reduce((acc, category: Category) => {
        const newAcc = { ...acc, [category.id]: category };
        return newAcc;
      }, {});
      return {
        byId,
        allIds,
      };
    default:
      return state;
  }
}
