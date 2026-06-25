import { Router } from "express";

import { getVehiculos, getVehiculoById, createVehiculo, updateVehiculo, deleteVehiculo } from "../controllers/vehiculo.controllers.js";



const router = Router();

// prefijo de ruta: /api/vehiculos

router.post("/", createVehiculo);
router.get("/", getVehiculos);
router.get("/:id", getVehiculoById);

router.put("/:id", updateVehiculo);
router.delete("/:id", deleteVehiculo);

export default router;
