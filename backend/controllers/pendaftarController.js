// berisi function untuk mengelola DB

import Pendaftar from "../models/pendaftarModel.js";

export const getPendaftar = async (req, res) => {
  try {
    // findAll itu fungsi dari Sequelize
    const response = await Pendaftar.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const getPendaftarById = async (req, res) => {
  try {
    const response = await Pendaftar.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const createPendaftar = async (req, res) => {
  try {
    await Pendaftar.create(req.body);
    res.status(201).json({msg: "Berhasil mendaftar"});
  } catch (error) {
    console.log(error.message);
  }
}

export const updatePendaftar = async (req, res) => {
  try {
    await Pendaftar.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({msg: "Berhasil memperbarui pendaftar"});
  } catch (error) {
    console.log(error.message);
  }
}

export const deletePendaftar = async (req, res) => {
  try {
    await Pendaftar.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({msg: "Berhasil menghapus pendaftar"});
  } catch (error) {
    console.log(error.message);
  }
}