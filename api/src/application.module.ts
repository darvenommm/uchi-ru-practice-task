import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { ConfigModule } from 'src/tools/config';
import { DatabaseModule } from 'src/tools/database';
import { AuthModule } from 'src/modules/auth';
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
