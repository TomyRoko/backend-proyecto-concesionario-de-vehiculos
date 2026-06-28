import { Router } from "express";

import {
  getVehiculos,
  getVehiculoById,
  createVehiculo,
  updateVehiculo,
  deleteVehiculo,
} from "../controllers/vehiculo.controllers.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// prefijo de ruta: /api/vehiculos

router.post("/", authMiddleware, createVehiculo);
router.get("/", getVehiculos);
router.get("/:id", getVehiculoById);

router.put("/:id", authMiddleware, updateVehiculo);
router.delete("/:id", authMiddleware, deleteVehiculo);

export default router;
