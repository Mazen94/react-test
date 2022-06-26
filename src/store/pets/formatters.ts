import { Category } from '../../Models/Category';
import { Pet } from '../../Models/Pet';
import { Tag } from '../../Models/Tag';
import { PetState } from './stateType';

export const formatPet = (pet: Pet): PetState => {
  return {
    id: pet.id,
    categoryId: pet?.category?.id ?? null,
    name: pet.name,
    photoUrls: pet.photoUrls,
    tagsIds: pet.tags?.map((tag) => tag?.id),
    status: pet.status,
  };
};
interface PetFormatterType {
  pets: PetState[];
  categories: Category[];
  tags: Tag[];
}
export const formatPets = (pets: Pet[]): PetFormatterType => {
  const _categories: Category[] = [];
  const _tags: Tag[] = [];
  const _pets: PetState[] = [];
  pets.forEach((pet) => {
    if (!!pet?.category && !_categories.some((category) => category.id === pet.category.id)) {
      _categories.push(pet.category);
    }

    if (pet?.tags) {
      pet.tags.forEach((tag) => {
        if (!_tags.some((_tag) => _tag.id === tag.id)) {
          _tags.push(tag);
        }
      });
    }
    _pets.push(formatPet(pet));
  });

  return {
    pets: _pets,
    categories: _categories,
    tags: _tags,
  };
};
