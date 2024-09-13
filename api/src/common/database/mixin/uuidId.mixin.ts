import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class UuidIdMixin {
  @PrimaryGeneratedColumn('uuid')
  public id: string;
}
