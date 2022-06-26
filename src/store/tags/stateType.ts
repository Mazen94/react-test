import { Tag } from '../../Models/Tag';

export interface TagState {
  byId: { [id: number]: Tag };
  allIds: number[];
}
