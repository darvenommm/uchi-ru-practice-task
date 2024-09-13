import { Injectable } from '@nestjs/common';

import { CatsRepository } from './cats.repository';

import type { UserEntity } from '../auth';
import type { CatsIds } from './cats.types';
import type { AddCatDTO } from './dto/addCat.dto';

@Injectable()
export class CatsService {
  public constructor(private readonly catsRepository: CatsRepository) {}

  public async getCats(user: UserEntity): Promise<CatsIds> {
    const cats = await this.catsRepository.getAllByUserId(user);

    return cats.map((cat): string => cat.catApiId);
  }

  public async addCat(user: UserEntity, { catApiId }: AddCatDTO): Promise<void> {
    const cat = await this.catsRepository.getByApiId(catApiId);

    if (!cat) await this.catsRepository.create(catApiId);

    await this.catsRepository.addLinkWithUser(cat, user);
  }

  public async deleteCat(catApiId: string): Promise<void> {
    await this.catsRepository.delete(catApiId);
  }
}
