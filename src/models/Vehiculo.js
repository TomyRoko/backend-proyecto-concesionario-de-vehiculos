import mongoose from "mongoose";

const vehiculoSchema = new mongoose.Schema(
  {
    categoria: {
      type: String,
      required: true,
      trim: true,
    },
    marca: {
      type: String,
      required: true,
      trim: true,
    },
    modelo: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
      default: "",
    },
    foto: {
      type: String,
      required: true,
      trim: true,
    },
    anio: {
      type: Number,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    combustible: {
      type: String,
      required: true,
      trim: true,
    },
    kilometraje: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Vehiculo = mongoose.model("Vehiculo", vehiculoSchema);

export default Vehiculo;
