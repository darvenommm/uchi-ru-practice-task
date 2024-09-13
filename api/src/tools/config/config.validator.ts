import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

import { ConfigSchema } from './config.schema';

type NotValidatedConfig = Record<string, unknown>;

export const validateConfig = (config: NotValidatedConfig): ConfigSchema => {
  const validatedConfig = plainToInstance(ConfigSchema, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
};
