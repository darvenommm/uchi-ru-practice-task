import { IsInt, IsString, Length, Min, Max } from 'class-validator';

import type { IRawConfig } from './config.types';

export class ConfigSchema implements IRawConfig {
  @IsString()
  @Length(1)
  public DB_HOST: string;

  @IsInt()
  @Min(0)
  @Max(65535)
  public DB_PORT: number;

  @IsString()
  @Length(1)
  public DB_USERNAME: string;

  @IsString()
  @Length(1)
  public DB_PASSWORD: string;

  @IsString()
  @Length(1)
  public DB_DATABASE: string;

  @IsString()
  @Length(1)
  public DB_SCHEMA: string;
}
