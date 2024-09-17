import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse, ApiHeader } from '@nestjs/swagger';

import { AuthGuard } from 'src/modules/auth/auth.guard';
import { CatsService } from '../services/cats.service';
import { SwaggerTypeCat } from '../swagger';

import type { ICat } from '../types';

// Можно вынести упростить код с помощью applyDecorators из Nest

@UseGuards(AuthGuard)
@ApiTags('cats')
@ApiHeader({ name: 'x-auth-token', description: 'For authentication authToken' })
@Controller('cats')
export class CatsController {
  public constructor(private readonly catsService: CatsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all cats' })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Limit the number of results',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'The page number for pagination',
    example: 0,
  })
  @ApiResponse({
    status: 200,
    description: 'List of cats returned successfully.',
    type: [SwaggerTypeCat],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  public async getAll(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  ): Promise<ICat[]> {
    return this.catsService.getAll({ limit, page });
  }
}
