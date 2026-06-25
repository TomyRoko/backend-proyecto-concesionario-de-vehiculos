import { Router } from "express";

import { getVehiculos, getVehiculoById } from "../controllers/vehiculo.controllers.js";



const router = Router();

// prefijo de ruta: /api/vehiculos

router.get("/", getVehiculos);
router.get("/:id", getVehiculoById);

export default router;
