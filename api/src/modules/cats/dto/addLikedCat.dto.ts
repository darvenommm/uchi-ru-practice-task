import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

import { Trim } from 'src/common/dto/mixin';

export class AddLikedCatDTO {
  @ApiProperty()
  @Trim()
  @IsNotEmpty()
  public apiId: string;
}
