export const PORT: string | number = process.env.PORT || 3000;
// export const HOSTNAME: string = '127.0.0.1';
export enum Actions {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export enum SequelizeSetup {
  DIALECT = 'mysql',
  DATABASE = 'superdb',
  USERNAME = 'root',
  PASSWORD = '8mUNUbcx7g98Dja',
  HOSTNAME = 'localhost',
}
