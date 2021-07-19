import {Model, Column, AutoIncrement, PrimaryKey, Table, CreatedAt, UpdatedAt, BelongsTo} from "sequelize-typescript";
import {Role} from "./Role";



@Table
export class User extends Model<User> {

  @Column
  @AutoIncrement
  @PrimaryKey
  uuid!: number;

  @Column
  name!: string;

  @Column
  roleID!: number | undefined;
  
  @Column
  userRole!: [Role] | undefined

  @BelongsTo(() => Role)

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}
