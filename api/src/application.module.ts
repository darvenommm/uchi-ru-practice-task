import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { ConfigModule } from './tools/config';
import { DatabaseModule } from './tools/database';
import { AuthModule } from './modules/auth';
import { CatsModule } from './modules/cats';
import { LikedCatsModule } from './modules/likedCats';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule, CatsModule, LikedCatsModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class ApplicationModule {}
