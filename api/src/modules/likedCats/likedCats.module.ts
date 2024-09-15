import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LikedCatEntity } from './entities/likedCat.entity';
import { LikedCatsController } from './likedCats.controller';
import { LikedCatsService } from './likedCats.service';
import { LikedCatsRepository } from './likedCats.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LikedCatEntity])],
  controllers: [LikedCatsController],
  providers: [LikedCatsService, LikedCatsRepository],
})
export class LikedCatsModule {}
