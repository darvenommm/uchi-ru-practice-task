import { Injectable } from '@nestjs/common';
import { fetch } from 'undici';

import { Config } from 'src/tools/config';

type IPaginationOptions = Readonly<{
  limit: number;
  page: number;
}>;

@Injectable()
export class CatsService {
  private readonly CATS_API_URL = 'https://api.thecatapi.com/v1/images/search';

  public constructor(private readonly config: Config) {}

  public async getAll({ limit, page }: IPaginationOptions): Promise<unknown> {
    const params = { limit: String(limit), page: String(page), order: 'ASC' };

    const url = new URL(this.CATS_API_URL);
    url.search = String(new URLSearchParams(params));

    const response = await fetch(url, {
      headers: { 'x-api-key': this.config.catsApiKey },
    });

    return await response.json();
  }
}
