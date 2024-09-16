import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { LikedCatEntity } from '../entities/likedCat.entity';

import type { Repository } from 'typeorm';
import type { UserEntity } from 'src/modules/auth';

interface ILikedCatRelationsOptions {
  withUsers: boolean;
}

@Injectable()
export class LikedCatsRepository {
  public constructor(
    @InjectRepository(LikedCatEntity)
    private readonly likedCatsRepository: Repository<LikedCatEntity>,
  ) {}

  public async getOneByApiId(
    apiId: LikedCatEntity['apiId'],
    { withUsers = true }: ILikedCatRelationsOptions = { withUsers: true },
  ): Promise<null | LikedCatEntity> {
    return await this.likedCatsRepository.findOne({
      where: { apiId },
      relations: { users: withUsers },
    });
  }

  public async getAllByUser(user: UserEntity): Promise<LikedCatEntity[]> {
    return await this.likedCatsRepository.findBy({ users: { id: user.id } });
  }

  public async create(apiId: LikedCatEntity['apiId']): Promise<void> {
    await this.likedCatsRepository.insert({ apiId });
  }

  public async addLinkWithUser(likedCat: LikedCatEntity, user: UserEntity) {
    likedCat.users = [...likedCat.users, user];

    await this.likedCatsRepository.manager.save(likedCat);
  }

  public async delete(apiId: LikedCatEntity['apiId']): Promise<void> {
    await this.likedCatsRepository.delete({ apiId });
  }
}
