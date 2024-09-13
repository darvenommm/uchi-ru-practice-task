import { Module } from '@nestjs/common';

import { ConfigModule } from './tools/config';
import { DatabaseModule } from './tools/database';

@Module({
  imports: [ConfigModule, DatabaseModule],
})
export class ApplicationModule {}
