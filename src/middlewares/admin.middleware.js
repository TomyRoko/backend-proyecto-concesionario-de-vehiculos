import User from "../models/User.js";

export const adminMiddleware = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Usuario no autenticado" });
    }

    const user = await User.findById(userId);
    if (!user || !user.admin) {
      return res.status(403).json({ message: "Acceso denegado" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor" });
  }
};
