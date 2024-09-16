import { fetcher } from '@/shared/api/server';

import type { ICat } from '../model/types';

export const getLikedCats = async (): Promise<ICat[]> => {
  const response = await fetcher.get('likes');

  return await response.json<ICat[]>();
};
