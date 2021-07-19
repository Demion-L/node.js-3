import {AutoIncrement, BelongsToMany, Column, Model, PrimaryKey, Table} from 'sequelize-typescript';
import { User } from "./User";
import {UserRoles} from "./UserRoles";


@Table
export class Role extends Model<Role> {

  @Column
  @AutoIncrement
  @PrimaryKey
  uuid!: number;

  @Column
  name!: string;

  @BelongsToMany(() => User, () => UserRoles)
  list?: User[];
}
