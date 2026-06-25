import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API de concesionario de vehículos" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
