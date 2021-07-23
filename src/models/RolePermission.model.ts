import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { RoleModel } from "./Role.model";
import { NUMBER } from "sequelize";
import { Permission } from "./Permission.model";

interface IRolePermissionModel {
  permissionId: number;
  roleId: number;
}

@Table
export default class RolePermissionModel extends Model<IRolePermissionModel> {
  @ForeignKey(() => Permission)
  @Column({
    type: NUMBER,
  })
  permissionId!: number;

  @ForeignKey(() => RoleModel)
  @Column({
    type: NUMBER,
  })
  roleId!: number;
}
