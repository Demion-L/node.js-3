import {createServer} from 'http';
import {app} from './app';
import {sequelize} from './sequelize';
import {PORT} from "../config/constants";

(async () => {
  await sequelize.sync({force: true});

  createServer(app)
    .listen(
      PORT,
      () => console.info(`Server running on port ${PORT}`)
    );
})();
