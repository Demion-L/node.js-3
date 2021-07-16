import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'myDB',
  storage: ':memory:',
  models: [__dirname + '/models']
});
