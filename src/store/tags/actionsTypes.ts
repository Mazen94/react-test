import { Action } from 'redux';
import { Tag } from '../../Models/Tag';

export const STORE_TAGS = 'STORE_TAGS';
export interface StoreTagsAction extends Action {
  type: typeof STORE_TAGS;
  payload: { tags: Tag[] };
}

export type TagsAction = StoreTagsAction;
