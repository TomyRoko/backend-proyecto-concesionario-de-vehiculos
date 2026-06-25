import Vehiculo from "../models/vehiculo.js";

export const createVehiculo = async (req, res) => {
  try {
    const {
      categoria,
      marca,
      modelo,
      descripcion = "",
      anio,
      precio,
      combustible,
      kilometraje,
    } = req.body;
    if (!precio || isNaN(precio) || precio < 0) {
      return res.status(400).json({ message: "Precio inválido" });
    }

    if (!kilometraje || isNaN(kilometraje) || kilometraje < 0) {
      return res.status(400).json({ message: "Kilometraje inválido" });
    }

    if (!categoria || !marca || !modelo || !anio || !combustible) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const vehiculo = await Vehiculo.create(req.body);
    res.status(201).json(vehiculo);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el vehículo" });
  }
};

export const getVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
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

export const updateVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!precio || isNaN(precio) || precio < 0) {
      return res.status(400).json({ message: "Precio inválido" });
    }

    if (!kilometraje || isNaN(kilometraje) || kilometraje < 0) {
      return res.status(400).json({ message: "Kilometraje inválido" });
    }

    if (!categoria || !marca || !modelo || !anio || !combustible) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const vehiculo = await Vehiculo.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!vehiculo) {
      return res.status(404).json({ message: "Vehículo no encontrado" });
    }
    
    res.json(vehiculo);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el vehículo" });
  }
};

export const deleteVehiculo = async (req, res) => {
  try {
    const { id } = req.params;

    const vehiculo = await Vehiculo.findByIdAndDelete(id);
    if (!vehiculo) {
      return res.status(404).json({ message: "Vehículo no encontrado" });
    }
    res.json({ message: "Vehículo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el vehículo" });
  }
};
