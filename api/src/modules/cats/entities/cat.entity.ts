import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserEntity } from 'src/modules/auth';

import type { Relation } from 'typeorm';

@Entity()
export class CatEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Index({ unique: true })
  @Column()
  public catApiId: string;

  @ManyToMany(() => UserEntity, (user: UserEntity) => user.likedCats)
  @JoinTable()
  public users: Relation<UserEntity[]>;

  @CreateDateColumn()
  public createdAt: Date;
}
