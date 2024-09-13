import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CatEntity } from './entities/cat.entity';

import type { Repository } from 'typeorm';
import type { UserEntity } from '../auth';

@Injectable()
export class CatsRepository {
  public constructor(
    @InjectRepository(CatEntity) private readonly catRepository: Repository<CatEntity>,
  ) {}

  public async getByApiId(
    catApiId: CatEntity['catApiId'],
    { needUsers = true }: { needUsers: boolean } = { needUsers: true },
  ): Promise<null | CatEntity> {
    return await this.catRepository.findOne({
      where: { catApiId },
      relations: { users: needUsers },
    });
  }

  public async getAllByUserId(user: UserEntity): Promise<CatEntity[]> {
    return await this.catRepository.findBy({ users: { id: user.id } });
  }

  public async create(catApiId: CatEntity['catApiId']): Promise<void> {
    await this.catRepository.insert({ catApiId });
  }

  public async addLinkWithUser(cat: CatEntity, user: UserEntity) {
    cat.users = [...cat.users, user];

    await this.catRepository.manager.save(cat);
  }

  public async delete(catApiId: CatEntity['catApiId']): Promise<void> {
    await this.catRepository.delete({ catApiId });
  }
}
