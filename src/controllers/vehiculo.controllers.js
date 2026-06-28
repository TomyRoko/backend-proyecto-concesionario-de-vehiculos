import Vehiculo from "../models/Vehiculo.js";

export const createVehiculo = async (req, res) => {
  try {
    const {
      categoria,
      marca,
      modelo,
      descripcion = "",
      foto,
      anio,
      precio,
      combustible,
      kilometraje,
    } = req.body;

    const anioNumber = Number(anio);
    const precioNumber = Number(precio);
    const kilometrajeNumber = Number(kilometraje);

    if (!Number.isFinite(precioNumber) || precioNumber < 0) {
      return res.status(400).json({ message: "Precio inválido" });
    }

    if (!Number.isFinite(kilometrajeNumber) || kilometrajeNumber < 0) {
      return res.status(400).json({ message: "Kilometraje inválido" });
    }

    if (!Number.isFinite(anioNumber) || anioNumber < 1900) {
      return res.status(400).json({ message: "Año inválido" });
    }

    if (!categoria || !marca || !modelo || !combustible || !foto) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if (!req.user?.id) {
      return res.status(401).json({ message: "Usuario no autenticado" });
    }

    const vehiculoData = {
      categoria,
      marca,
      modelo,
      descripcion,
      foto,
      anio: anioNumber,
      precio: precioNumber,
      combustible,
      kilometraje: kilometrajeNumber,
      createdBy: req.user.id,
    };

    const vehiculo = await Vehiculo.create(vehiculoData);
    res.status(201).json(vehiculo);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el vehículo",
      error: error.message,
    });
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
    const {
      categoria,
      marca,
      modelo,
      anio,
      precio,
      combustible,
      kilometraje,
      foto,
    } = req.body;

    const anioNumber = Number(anio);
    const precioNumber = Number(precio);
    const kilometrajeNumber = Number(kilometraje);

    if (!Number.isFinite(precioNumber) || precioNumber < 0) {
      return res.status(400).json({ message: "Precio inválido" });
    }

    if (!Number.isFinite(kilometrajeNumber) || kilometrajeNumber < 0) {
      return res.status(400).json({ message: "Kilometraje inválido" });
    }

    if (!Number.isFinite(anioNumber) || anioNumber < 1900) {
      return res.status(400).json({ message: "Año inválido" });
    }

    if (!categoria || !marca || !modelo || !combustible || !foto) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const updateData = {
      ...req.body,
      anio: anioNumber,
      precio: precioNumber,
      kilometraje: kilometrajeNumber,
    };

    const vehiculo = await Vehiculo.findByIdAndUpdate(id, updateData, {
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
