import { Sequelize } from 'sequelize-typescript';
import { UserModel } from '../models/User.model';
import { RoleModel } from '../models/Role.model';
import { Permission } from '../models/Permission.model';
import RolePermissionModel from '../models/RolePermission.model';
import { SequelizeSetup } from '../config/constants';

export const sequelize = new Sequelize({
  dialect: SequelizeSetup.DIALECT,
  database: SequelizeSetup.DATABASE,
  username: SequelizeSetup.USERNAME,
  password: SequelizeSetup.PASSWORD,
  host: SequelizeSetup.HOSTNAME,
  // models: [__dirname + '/models']
  models: [UserModel, RoleModel, Permission, RolePermissionModel],
});
