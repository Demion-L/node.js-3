import {Model, Column, Table,} from "sequelize-typescript";
import {Role} from "./Role";

@Table
export class UserRoles extends Model<Role> {

  @Column
  userID!: number;

  @Column
  roleID!: number;

  @Column
  role!: Role | undefined;
}