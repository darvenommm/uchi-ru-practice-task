import { Injectable } from '@nestjs/common';

import { LikedCatsRepository } from './likedCats.repository';

import type { LikedCatEntity } from './entities/likedCat.entity';
import type { UserEntity } from '../auth';
import type { AddLikedCatDTO } from './dto/addLikedCat.dto';

@Injectable()
export class LikedCatsService {
  public constructor(private readonly likedCatsRepository: LikedCatsRepository) {}

  public async getAllByUser(user: UserEntity): Promise<LikedCatEntity['apiId'][]> {
    const likedCats = await this.likedCatsRepository.getAllByUser(user);

    return likedCats.map((likedCat): string => likedCat.apiId);
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
