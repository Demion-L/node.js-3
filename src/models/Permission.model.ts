import { Model, Table, Column, BelongsToMany } from "sequelize-typescript";
import { Actions } from "../config/constants";
import { RoleModel } from "./Role.model";
import { STRING } from "sequelize";
import RolePermissionModel from "./RolePermission.model";

interface IPermissionModel {
  name: Actions;
  roles: RoleModel[];
}

@Table
export class Permission extends Model<IPermissionModel> {
  @Column({
    type: STRING,
  })
  name!: string;

  @BelongsToMany(() => RoleModel, () => RolePermissionModel)
  roles: RoleModel[];
}
