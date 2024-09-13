import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { ConfigModule } from './tools/config';
import { DatabaseModule } from './tools/database';
import { AuthModule } from './modules/auth';
import { CatsModule } from './modules/cats';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule, CatsModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class ApplicationModule {}
