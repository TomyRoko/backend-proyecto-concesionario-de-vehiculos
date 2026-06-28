import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const isValidPassword = (password) => {
  return password.length >= 6;
}

const getToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
}

export const register = async (req, res) => {
  try {
    const { name, email } = req.body;
    const password = String(req.body.password || "");

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Correo electrónico inválido" });
    }

    if (!isValidPassword(password)) {
      return res
        .status(400)
        .json({ message: "La contraseña debe tener al menos 6 caracteres" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "El correo electrónico ya está en uso" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Usuario registrado exitosamente",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Error al registrar el usuario" });
  }
};

export const login = async (req, res) => {
  try {
    const { email } = req.body;
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Correo electrónico inválido" });
    }

    if (!isValidPassword(password)) {
      return res
        .status(400)
        .json({ message: "La contraseña debe tener al menos 6 caracteres" });
    }
    const user = await User.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Correo electrónico o contraseña incorrectos" });
    }

    const token = getToken(user);

    res.json({
      message: "Inicio de sesión exitoso",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        admin: user.admin,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Error al iniciar sesión" });
  }
};
