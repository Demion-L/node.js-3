import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'usersdb',
  username: 'root',
  password: '8mUNUbcx7g98Dja',
  storage: ':memory:',
  models: [__dirname + '/models']
});
