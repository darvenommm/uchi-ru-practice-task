import { Column, Entity, Index, JoinTable, ManyToMany } from 'typeorm';
import { Mixin } from 'ts-mixer';

import { UuidIdMixin, CreatedAtMixin } from 'src/common/database/mixin';
import { UserEntity } from 'src/modules/auth';

import type { Relation } from 'typeorm';

@Entity()
export class CatEntity extends Mixin(UuidIdMixin, CreatedAtMixin) {
  @Index({ unique: true })
  @Column()
  public catApiId: string;

  @ManyToMany(() => UserEntity, (user: UserEntity) => user.likedCats)
  @JoinTable()
  public users: Relation<UserEntity[]>;
}
