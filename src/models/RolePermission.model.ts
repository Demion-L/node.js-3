import {
  Model,
  Table,
  Column,
  ForeignKey,
  IsUUID,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';
import { NUMBER, STRING, UUID, UUIDV4 } from 'sequelize';
import { v4 } from 'uuid';

import { RoleModel } from './Role.model';
import { Permission } from './Permission.model';

interface IRolePermissionModel {
  uuid: string;
  permissionId: number;
  roleId: number;
}

@Table
export default class RolePermissionModel extends Model<IRolePermissionModel> {
  @IsUUID(4)
  @PrimaryKey
  @Default(v4)
  @Column({
    type: UUID,
  })
  uuid!: string;

  @ForeignKey(() => Permission)
  @Column({
    type: UUID,
  })
  permissionId!: string;

  @ForeignKey(() => RoleModel)
  @Column({
    type: UUID,
  })
  roleId!: string;
}
