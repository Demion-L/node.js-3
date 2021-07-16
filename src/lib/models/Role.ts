import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { User } from "./User";


@Table
export class Role extends Model<Role> {

  @Column
  uuid!: number;

  @Column
  name!: string;

  @Column
  permissions!: number;

  @BelongsToMany(() => User)
  cast?: User[];
}
