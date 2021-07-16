import {Model, Column, Table, CreatedAt, UpdatedAt, BelongsTo} from "sequelize-typescript";
import {Role} from "./Role";



@Table
export class User extends Model<User> {

  @Column
  uuid!: number;

  @Column
  name!: string;

  @BelongsTo(() => Role)

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}
