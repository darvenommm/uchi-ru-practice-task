import { Column, Entity, Generated, Index, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { CONSTRAINTS } from '../constraints/auth.constraints';
import { LikedCatEntity } from 'src/modules/likedCats';

import type { Relation } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Index({ unique: true })
  @Column({ length: CONSTRAINTS.login.max })
  public login: string;

  @Column({ length: 128 })
  public hashedPassword: string;

  @Index()
  @Column('uuid')
  @Generated('uuid')
  public authToken: string;

  @ManyToMany(() => LikedCatEntity, (cat: LikedCatEntity) => cat.users)
  public likedCats: Relation<LikedCatEntity[]>;
}
