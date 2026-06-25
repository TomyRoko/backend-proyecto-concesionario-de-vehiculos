import Vehiculo from "../models/vehiculo.js";

export const getVehiculos = async (req, res) => {
  try {
    const vehiculos = (await Vehiculo.find()).select("-descripcion -__v");
    res.json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los vehículos" });
  }
};

export const getVehiculoById = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findById(req.params.id);
    if (!vehiculo) {
      return res.status(404).json({ message: "Vehículo no encontrado" });
    }

    res.json(vehiculo);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el vehículo" });
  }
};
