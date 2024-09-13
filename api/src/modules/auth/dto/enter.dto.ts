import { Length } from 'class-validator';

import { Trim } from 'src/common/dto/mixin';
import { CONSTRAINTS } from '../constraints/auth.constraints';

const { login, password } = CONSTRAINTS;

export class EnterDTO {
  @Trim()
  @Length(login.min, login.max)
  public login: string;

  @Length(password.min, password.max)
  public password: string;
}
