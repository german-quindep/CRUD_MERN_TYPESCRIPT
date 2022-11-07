import { Sequelize } from "sequelize";
import configDb from "./configDb";

const db = new Sequelize("db_employee", configDb.username, configDb.password, {
  host: configDb.host,
  dialect: "mariadb",
  port: configDb.port,
});

export default db;
