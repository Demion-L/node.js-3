import express from "express";
import { Actions, PORT } from "./config/constants";
import { sequelize } from "./database/sequelize";
import { UserModel } from "./models/User.model";
import { RoleModel } from "./models/Role.model";

export const app = express();

const bob: object = {
  name: "Bob",
  email: "asdf@mail.ru",
  role: "reader",
};

async function start() {
  await RoleModel.create({
    name: "reader",
  });
  await UserModel.create(bob, { include: [RoleModel] })
    .then((res) => {
      const user = { id: res.id, name: res.name, role: res.role };
      console.log(user);
    })
    .catch((err) => console.log(err));
}

app.listen(PORT, () => {
  console.log(`Server was running at port: ${PORT}`);

  sequelize
    .authenticate()
    .then(async () => {
      console.log("database connected");

      try {
        await sequelize.sync({ force: true });
        await start();
      } catch (e) {
        console.error(e);
      }
    })
    .catch((e: Error) => {
      console.error(e);
    });
});
