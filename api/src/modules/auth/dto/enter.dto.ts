import { Length, IsNotEmpty } from 'class-validator';

import { Trim } from 'src/common/dto/mixin';
import { CONSTRAINTS } from '../constraints/auth.constraints';

const { login, password } = CONSTRAINTS;

export class EnterDTO {
  @Trim()
  @IsNotEmpty()
  @Length(login.min, login.max)
  public login: string;

  @IsNotEmpty()
  @Length(password.min, password.max)
  public password: string;
}
