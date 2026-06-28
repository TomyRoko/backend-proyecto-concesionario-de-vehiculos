import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/config/db.js";
connectDB();

import express from "express";
import cors from "cors";

import vehiculoRoutes from "./src/routes/vehiculo.router.js";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API de concesionario de vehículos" });
});

app.use("/api/vehiculos", vehiculoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
