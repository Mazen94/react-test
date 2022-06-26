export interface PetState {
  id: number;
  categoryId?: number;
  name: string;
  photoUrls: string[];
  tagsIds: number[];
  status: string;
}
