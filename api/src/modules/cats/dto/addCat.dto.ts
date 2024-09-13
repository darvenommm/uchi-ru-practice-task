import { IsNotEmpty } from 'class-validator';

import { Trim } from 'src/common/dto/mixin';

export class AddCatDTO {
  @Trim()
  @IsNotEmpty()
  public catApiId: string;
}
