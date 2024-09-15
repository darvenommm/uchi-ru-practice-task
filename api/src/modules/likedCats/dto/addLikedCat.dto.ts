import { IsNotEmpty } from 'class-validator';

import { Trim } from 'src/common/dto/mixin';

export class AddLikedCatDTO {
  @Trim()
  @IsNotEmpty()
  public apiId: string;
}
