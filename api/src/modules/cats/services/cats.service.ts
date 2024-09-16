import { Injectable } from '@nestjs/common';
import { fetch } from 'undici';

import { Config } from 'src/tools/config';
import { LikedCatsRepository } from '../repositories/likedCats.repository';

import type { ICat } from '../types';

type IPaginationOptions = Readonly<{
  limit: number;
  page: number;
}>;

@Injectable()
export class CatsService {
  private readonly CATS_API_URL = 'https://api.thecatapi.com/v1/images/search';

  public constructor(
    private readonly config: Config,
    private readonly likedCatsRepository: LikedCatsRepository,
  ) {}

  public async getAll({ limit, page }: IPaginationOptions): Promise<ICat[]> {
    const params = { limit: String(limit), page: String(page), order: 'ASC' };

    const url = new URL(this.CATS_API_URL);
    url.search = String(new URLSearchParams(params));

    const response = await fetch(url, {
      headers: { 'x-api-key': this.config.catsApiKey },
    });

    const cats = (await response.json()) as Array<Omit<ICat, 'isLiked'>>;
    const fetches = cats.map(async (cat): Promise<ICat> => {
      const isLiked = Boolean(await this.likedCatsRepository.getOneByApiId(cat.id));

      return { ...cat, isLiked };
    });

    return await Promise.all(fetches);
  }
}
