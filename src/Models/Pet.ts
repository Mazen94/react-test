import { Category } from './Category';
import { Tag } from './Tag';

export interface Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: string;
}
