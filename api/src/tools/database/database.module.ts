import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Config } from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: Config) => ({
        type: 'postgres',
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
        schema: config.schema,
        autoLoadEntities: true,
      }),
      inject: [Config],
    }),
  ],
})
export class DatabaseModule {}
