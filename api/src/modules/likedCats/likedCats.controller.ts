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

import { LikedCatsService } from './likedCats.service';
import { AuthGuard } from '../auth/auth.guard';
import { AddLikedCatDTO } from './dto/addLikedCat.dto';

import type { Request } from 'express';
import type { LikedCatEntity } from './entities/likedCat.entity';
import type { UserEntity } from '../auth';

@UseGuards(AuthGuard)
@Controller('likes')
export class LikedCatsController {
  public constructor(private readonly likedCatsService: LikedCatsService) {}

  @Get()
  public async getAllLiked(@Req() request: Request): Promise<LikedCatEntity['apiId'][]> {
    return this.likedCatsService.getAllByUser(this.getUser(request));
  }

  @Post()
  public async addLikedCat(
    @Req() request: Request,
    @Body() addCatDTO: AddLikedCatDTO,
  ): Promise<void> {
    this.likedCatsService.addLikedCat(this.getUser(request), addCatDTO);
  }

  @Delete(':apiId')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteLikedCat(@Param('apiId') apiId: string): Promise<void> {
    this.likedCatsService.deleteLikedCat(apiId);
  }

  private getUser(request: Request): UserEntity {
    return request.user!;
  }
}
