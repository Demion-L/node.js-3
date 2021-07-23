import { Sequelize } from "sequelize-typescript";
import { UserModel } from "../models/User.model";
import { RoleModel } from "../models/Role.model";
import { Permission } from "../models/Permission.model";
import RolePermissionModel from "../models/RolePermission.model";

export const sequelize = new Sequelize({
  dialect: "mysql",
  database: "superdb",
  username: "root",
  password: "8mUNUbcx7g98Dja",
  host: "localhost",
  // models: [__dirname + '/models']
  models: [UserModel, RoleModel, Permission, RolePermissionModel],
});
