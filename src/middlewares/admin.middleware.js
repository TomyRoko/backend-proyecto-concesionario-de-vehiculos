import User from "../models/user.model.js";

export const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(userId);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Acceso denegado" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor" });
  }
}