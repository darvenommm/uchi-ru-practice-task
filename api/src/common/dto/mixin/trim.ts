import { Transform } from 'class-transformer';

export const Trim = (): PropertyDecorator =>
  Transform(({ value }: { value: string }): string => value.trim());
