import { Column, Entity, Index, ManyToMany } from 'typeorm';

import { UuidIdMixin } from 'src/common/database/mixin';
import { CONSTRAINTS } from '../constraints/auth.constraints';
import { CatEntity } from 'src/modules/cats';

import type { Relation } from 'typeorm';

@Entity()
export class UserEntity extends UuidIdMixin {
  @Index({ unique: true })
  @Column({ length: CONSTRAINTS.login.max })
  public login: string;

  @Column({ length: 128 })
  public hashedPassword: string;

  @ManyToMany(() => CatEntity, (cat: CatEntity) => cat.users)
  public likedCats: Relation<CatEntity[]>;
}
