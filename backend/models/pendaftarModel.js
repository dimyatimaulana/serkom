// berisi untuk membuat struktur table

import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

// define nama table, field, optional
const Pendaftar = db.define(
  "pendaftar",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    noHP: DataTypes.STRING,
    semester: DataTypes.STRING,
    ipk: DataTypes.STRING,
    jenis_beasiswa: DataTypes.STRING,
    evidence: DataTypes.STRING,
    status_pengajuan: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Pendaftar;

// function berjalan saat file ini dipanggil
// (async () => {
//   await db.sync();
// })();
