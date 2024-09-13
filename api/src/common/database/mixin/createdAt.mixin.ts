import { CreateDateColumn } from 'typeorm';

export abstract class CreatedAtMixin {
  @CreateDateColumn()
  public createdAt: Date;
}
