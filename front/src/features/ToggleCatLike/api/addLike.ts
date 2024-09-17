import { ILikedCat } from '@/entities/cats';
import { fetcher } from '@/shared/api/server';

export const addLike = async (catId: string): Promise<ILikedCat> => {
  const response = await fetcher.post('likes', { json: { apiId: catId } });

  return await response.json<ILikedCat>();
};
