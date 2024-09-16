import { fetcher } from '@/shared/api/server';

export const deleteLike = async (catId: string): Promise<void> => {
  await fetcher.delete(`likes/${catId}`);
};
