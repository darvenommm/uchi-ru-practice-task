import {
  Controller,
  Get,
  Post,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiHeader } from '@nestjs/swagger';

import { AuthGuard } from 'src/modules/auth/auth.guard';
import { LikedCatsService } from '../services/likedCats.service';
import { AddLikedCatDTO } from '../dto/addLikedCat.dto';
import { SwaggerTypeLikedCat } from '../swagger';

import type { Request } from 'express';
import type { UserEntity } from 'src/modules/auth';
import type { ILikedCat } from '../types';

// Можно вынести упростить код с помощью applyDecorators из Nest

@UseGuards(AuthGuard)
@ApiTags('likes')
@ApiHeader({ name: 'x-auth-token', description: 'For authentication' })
@Controller('likes')
export class LikedCatsController {
  public constructor(private readonly likedCatsService: LikedCatsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all liked cats' })
  @ApiResponse({
    status: 200,
    description: 'List of liked cats returned successfully.',
    type: [SwaggerTypeLikedCat],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  public async getAllLiked(@Req() request: Request): Promise<ILikedCat[]> {
    return this.likedCatsService.getAllByUser(this.getUser(request));
  }

  @Post()
  @ApiOperation({ summary: 'Add a new liked cat' })
  @ApiBody({ type: AddLikedCatDTO, description: 'Details of the cat to be liked' })
  @ApiResponse({
    status: 201,
    description: 'The cat was successfully added to liked cats.',
    type: SwaggerTypeLikedCat,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  public async addLikedCat(
    @Req() request: Request,
    @Body() addCatDTO: AddLikedCatDTO,
  ): Promise<ILikedCat> {
    return this.likedCatsService.addLikedCat(this.getUser(request), addCatDTO);
  }

  @Delete(':apiId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove a liked cat by its API ID' })
  @ApiParam({ name: 'apiId', required: true, description: 'The API ID of the liked cat to remove' })
  @ApiResponse({ status: 204, description: 'The liked cat was successfully removed.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  public async deleteLikedCat(@Param('apiId') apiId: string): Promise<void> {
    this.likedCatsService.deleteLikedCat(apiId);
  }

  private getUser(request: Request): UserEntity {
    return request.user!;
  }
}
