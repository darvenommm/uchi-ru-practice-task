import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import type { IConfig, IRawConfig } from './config.types';

@Injectable()
export class Config implements IConfig {
  public constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService<IRawConfig, true>,
  ) {}

  public get host(): string {
    return this.configService.get('DB_HOST', { infer: true });
  }

  public get port(): number {
    return this.configService.get('DB_PORT', { infer: true });
  }

  public get username(): string {
    return this.configService.get('DB_USERNAME', { infer: true });
  }

  public get password(): string {
    return this.configService.get('DB_PASSWORD', { infer: true });
  }

  public get database(): string {
    return this.configService.get('DB_DATABASE', { infer: true });
  }

  public get catsApiKey(): string {
    return this.configService.get('CATS_API_KEY', { infer: true });
  }
}
