import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/modules/auth/auth.guard';
import { CatsService } from '../services/cats.service';
import { ICat } from '../types';

@UseGuards(AuthGuard)
@Controller('cats')
export class CatsController {
  public constructor(private readonly catsService: CatsService) {}

  @Get()
  public async getAll(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ): Promise<ICat[]> {
    return this.catsService.getAll({ limit, page });
  }
}
