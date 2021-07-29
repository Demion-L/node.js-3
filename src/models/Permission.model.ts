import {
  Model,
  Table,
  Column,
  BelongsToMany,
  IsUUID,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';
import { Actions } from '../config/constants';
import { RoleModel } from './Role.model';
import { STRING, UUID, UUIDV4 } from 'sequelize';
import RolePermissionModel from './RolePermission.model';
import { v4 } from 'uuid';

interface IPermissionModel {
  uuid: string;
  name: Actions;
  roles: RoleModel[];
}

@Table
export class Permission extends Model<IPermissionModel> {
  @IsUUID(4)
  @PrimaryKey
  @Default(v4)
  @Column({
    type: UUID,
  })
  uuid!: string;

  @Column({
    type: STRING,
  })
  name!: string;

  @BelongsToMany(() => RoleModel, () => RolePermissionModel)
  roles: RoleModel[];
}
