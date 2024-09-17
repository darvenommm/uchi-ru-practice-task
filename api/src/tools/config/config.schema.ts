import { IsInt, IsNotEmpty, Min, Max } from 'class-validator';

import type { IRawConfig } from './config.types';

export class ConfigSchema implements IRawConfig {
  @IsNotEmpty()
  public DB_HOST: string;

  @IsInt()
  @Min(0)
  @Max(65535)
  public DB_PORT: number;

  @IsNotEmpty()
  public DB_USERNAME: string;

  @IsNotEmpty()
  public DB_PASSWORD: string;

  @IsNotEmpty()
  public DB_DATABASE: string;

  @IsNotEmpty()
  public CATS_API_KEY: string;

  @IsNotEmpty()
  public FRONTEND_ORIGIN: string;
}
