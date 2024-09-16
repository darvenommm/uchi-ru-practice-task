import { ICat } from '../model/types';
import { fetcher } from '@/shared/api/server';

interface IGetCatsOptions {
  page: number;
  limit?: number;
}

const DEFAULT_LIMIT = 10;

export const getCats = async ({
  page,
  limit = DEFAULT_LIMIT,
}: IGetCatsOptions): Promise<ICat[]> => {
  const queries = String(new URLSearchParams({ limit: String(limit), page: String(page) }));
  const response = await fetcher.get(`cats?${queries}`);

  return response.json<ICat[]>();
};
