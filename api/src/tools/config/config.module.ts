import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validateConfig } from './config.validator';
import { Config } from './config.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validateConfig,
      expandVariables: true,
      cache: true,
    }),
  ],
  providers: [Config],
  exports: [Config],
})
export class CustomConfigModule {}
