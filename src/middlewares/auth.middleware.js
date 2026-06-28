import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Token de autenticación no proporcionado" });
        }
        if (!authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Formato de token inválido" });
        }
       const [, token] = authHeader.split(" ");
       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       req.user = decoded;
       next();
    } catch (error) {
        return res.status(401).json({ message: "Token de autenticación inválido" });
    }
}
