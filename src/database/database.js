import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "dbprojects",
  "postgres",
  "mysecretpassword",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
