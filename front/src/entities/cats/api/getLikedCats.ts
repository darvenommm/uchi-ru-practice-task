import { fetcher } from '@/shared/api/server';

import type { ILikedCat } from '../model/types';

export const getLikedCats = async (): Promise<ILikedCat[]> => {
  const response = await fetcher.get('likes');

  return await response.json<ILikedCat[]>();
};
