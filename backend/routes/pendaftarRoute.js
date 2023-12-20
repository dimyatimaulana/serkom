// mengatur routing tiap endpoint

import express from "express";
import {
  getPendaftar,
  getPendaftarById,
  createPendaftar,
  updatePendaftar,
  deletePendaftar
} from "../controllers/pendaftarController.js";

const router = express.Router();

router.get("/pendaftar", getPendaftar);
router.get("/pendaftar/:id", getPendaftarById);
router.post("/pendaftar", createPendaftar);
router.patch("/pendaftar/:id", updatePendaftar);
router.delete("/pendaftar/:id", deletePendaftar);

export default router;
