import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from './entities/user.entity';

import type { Repository } from 'typeorm';

type IAddUserData = Readonly<{
  login: string;
  hashedPassword: string;
}>;

@Injectable()
export class AuthRepository {
  public constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async getByLogin(login: string): Promise<null | UserEntity> {
    return await this.userRepository.findOneBy({ login });
  }

  public async getByAuthToken(authToken: string): Promise<null | UserEntity> {
    return await this.userRepository.findOneBy({ authToken });
  }

  public async add({ login, hashedPassword }: IAddUserData): Promise<UserEntity['authToken']> {
    const insertResult = await this.userRepository.insert({
      login,
      hashedPassword,
    });

    return (insertResult.generatedMaps[0] as { authToken: UserEntity['authToken'] }).authToken;
  }
}
