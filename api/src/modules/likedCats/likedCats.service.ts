import { Injectable } from '@nestjs/common';
import { fetch, Response } from 'undici';

import { LikedCatsRepository } from './likedCats.repository';

import type { UserEntity } from '../auth';
import type { AddLikedCatDTO } from './dto/addLikedCat.dto';

@Injectable()
export class LikedCatsService {
  private readonly CAT_API_URL = 'https://api.thecatapi.com/v1/images';

  public constructor(private readonly likedCatsRepository: LikedCatsRepository) {}

  public async getAllByUser(user: UserEntity): Promise<unknown[]> {
    const likedCats = await this.likedCatsRepository.getAllByUser(user);

    const responses = await Promise.all(
      likedCats.map(({ apiId }): Promise<Response> => fetch(`${this.CAT_API_URL}/${apiId}`)),
    );

    return Promise.all(responses.map((response): Promise<unknown> => response.json()));
  }

  public async addLikedCat(user: UserEntity, { apiId }: AddLikedCatDTO): Promise<void> {
    let likedCat = await this.likedCatsRepository.getOneByApiId(apiId);

    if (!likedCat) {
      await this.likedCatsRepository.create(apiId);
      likedCat = await this.likedCatsRepository.getOneByApiId(apiId);
    }

    await this.likedCatsRepository.addLinkWithUser(likedCat, user);
  }

  public async deleteLikedCat(apiId: string): Promise<void> {
    await this.likedCatsRepository.delete(apiId);
  }
}
