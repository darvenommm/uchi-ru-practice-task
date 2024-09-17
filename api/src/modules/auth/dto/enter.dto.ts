import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Trim } from 'src/common/dto/mixin';
import { CONSTRAINTS } from '../constraints/auth.constraints';

const { login, password } = CONSTRAINTS;

export class EnterDTO {
  @ApiProperty({ minLength: login.min, maxLength: login.max })
  @Trim()
  @Length(login.min, login.max)
  public login: string;

  @ApiProperty({ minLength: password.min, maxLength: password.max })
  @Length(password.min, password.max)
  public password: string;
}
