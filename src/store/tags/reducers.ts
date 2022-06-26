/* eslint-disable no-case-declarations */
import { TagsAction, STORE_TAGS } from './actionsTypes';
import { TagState } from './stateType';

export const INITIAL_STATE: TagState = { byId: {}, allIds: [] };

export function TagsReducer(state = INITIAL_STATE, action: TagsAction) {
  switch (action.type) {
    case STORE_TAGS:
      const allIds = action.payload.tags.map((tag) => tag.id);
      const byId = action.payload.tags.reduce((acc, tag) => {
        const newAcc = { ...acc, [tag.id]: tag };
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
