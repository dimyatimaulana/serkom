import { Sequelize } from "sequelize";

// parameter nama db, username, password, host
const db = new Sequelize("beasiswa_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;