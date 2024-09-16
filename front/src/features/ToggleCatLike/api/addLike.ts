import { fetcher } from '@/shared/api/server';

export const addLike = async (catId: string): Promise<void> => {
  await fetcher.post('likes', { json: { apiId: catId } });
};
