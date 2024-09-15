import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../auth/auth.guard';
import { CatsService } from './cats.service';

@UseGuards(AuthGuard)
@Controller('cats')
export class CatsController {
  public constructor(private readonly catsService: CatsService) {}

  @Get()
  public async getAll(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ): Promise<unknown> {
    return this.catsService.getAll({ limit, page });
  }
}
