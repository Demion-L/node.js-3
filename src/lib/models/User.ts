import {Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt} from "sequelize-typescript";
import {Role} from "./Movie";


@Table
export class User extends Model<User> {

  @Column
  uuid!: number;

  @Column
  name!: number;

  @BelongsToMany(() => Role)

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}
