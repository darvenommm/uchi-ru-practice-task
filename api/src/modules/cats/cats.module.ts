import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './controllers/cats.controller';
import { LikedCatsController } from './controllers/likedCats.controller';
import { CatsService } from './services/cats.service';
import { LikedCatsService } from './services/likedCats.service';
import { LikedCatsRepository } from './repositories/likedCats.repository';
import { LikedCatEntity } from './entities/likedCat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LikedCatEntity])],
  controllers: [CatsController, LikedCatsController],
  providers: [CatsService, LikedCatsService, LikedCatsRepository],
})
export class CatsModule {}
