import { Router } from "express";

import {
  getVehiculos,
  getVehiculoById,
  createVehiculo,
  updateVehiculo,
  deleteVehiculo,
} from "../controllers/vehiculo.controllers.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const router = Router();

// prefijo de ruta: /api/vehiculos

router.post("/", authMiddleware, adminMiddleware, createVehiculo);
router.get("/", getVehiculos);
router.get("/:id", getVehiculoById);

router.put("/:id", authMiddleware, adminMiddleware, updateVehiculo);
router.delete("/:id", authMiddleware, adminMiddleware, deleteVehiculo);

export default router;
