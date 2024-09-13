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

import { CatsService } from './cats.service';
import { AuthGuard } from '../auth/auth.guard';
import { AddCatDTO } from './dto/addCat.dto';

import type { Request } from 'express';
import type { CatsIds } from './cats.types';
import type { UserEntity } from '../auth';

@UseGuards(AuthGuard)
@Controller('likes')
export class CatsController {
  public constructor(private readonly catsService: CatsService) {}

  @Get()
  public async getAllLiked(@Req() request: Request): Promise<CatsIds> {
    return this.catsService.getCats(this.getUser(request));
  }

  @Post()
  public async addLikedCat(@Req() request: Request, @Body() addCatDTO: AddCatDTO): Promise<void> {
    this.catsService.addCat(this.getUser(request), addCatDTO);
  }

  @Delete(':catApiId')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteLikedCat(@Param('catApiId') catApiId: string): Promise<void> {
    this.catsService.deleteCat(catApiId);
  }

  private getUser(request: Request): UserEntity {
    return request.user!;
  }
}
