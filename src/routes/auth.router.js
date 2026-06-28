import { Router } from "express";
import { register, login  } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
  // Aquí iría la lógica de inicio de sesión
  res.json({ message: "Inicio de sesión exitoso" });
});

export default router;