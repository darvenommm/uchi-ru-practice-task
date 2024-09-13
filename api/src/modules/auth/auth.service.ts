import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { AuthRepository } from './auth.repository';
import { EnterDTO } from './dto/enter.dto';
import { UserEntity } from './entities/user.entity';

type IEnterResult = Readonly<{
  authToken: string;
  wasRegistered: boolean;
}>;

@Injectable()
export class AuthService {
  private readonly INCORRECT_DATA_MESSAGE = 'Incorrect password';

  public constructor(private readonly authRepository: AuthRepository) {}

  public async enter(enterDTO: EnterDTO): Promise<IEnterResult> {
    const doesUserExist = Boolean(await this.authRepository.getByLogin(enterDTO.login));
    const userSession = await (doesUserExist ? this.login : this.register).call(this, enterDTO);

    return { authToken: userSession, wasRegistered: doesUserExist };
  }

  private async login(enterDTO: EnterDTO): Promise<UserEntity['authToken']> {
    const { login, password } = enterDTO;
    const user = await this.authRepository.getByLogin(login);
    const correctPassword = await bcrypt.compare(password, user.hashedPassword);

    if (!correctPassword) throw new UnauthorizedException(this.INCORRECT_DATA_MESSAGE);

    return user.authToken;
  }

  private async register(enterDTO: EnterDTO): Promise<UserEntity['authToken']> {
    const { login, password } = enterDTO;
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.authRepository.create({ login, hashedPassword });
  }
}
