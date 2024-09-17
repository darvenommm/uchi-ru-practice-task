import { ApiProperty } from '@nestjs/swagger';

import type { ICat, ICommonCat, ILikedCat } from './types';

class SwaggerTypeCommonCat implements ICommonCat {
  @ApiProperty()
  public id: string;

  @ApiProperty()
  public url: string;

  @ApiProperty()
  public width: number;

  @ApiProperty()
  public height: number;
}

export class SwaggerTypeCat extends SwaggerTypeCommonCat implements ICat {
  @ApiProperty()
  public isLiked: boolean;
}

export class SwaggerTypeLikedCat extends SwaggerTypeCommonCat implements ILikedCat {}
