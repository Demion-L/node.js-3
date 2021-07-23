import {
  Model,
  Table,
  Column,
  PrimaryKey,
  Default,
  HasMany,
  IsUUID,
  BelongsToMany,
} from "sequelize-typescript";
import { v4 } from "uuid";
import { UserModel } from "./User.model";
import { Permission } from "./Permission.model";
import { STRING, UUID, UUIDV4 } from "sequelize";
import RolePermissionModel from "./RolePermission.model";

interface IRole {
  uuid: string;
  name: string;
  permission: Permission[];
  users: UserModel[];
}

@Table
export class RoleModel extends Model<IRole> {
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

  @HasMany(() => UserModel)
  users!: UserModel[];

  @BelongsToMany(() => Permission, () => RolePermissionModel)
  permissions: Permission[];
}
