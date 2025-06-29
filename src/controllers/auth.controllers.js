//Controller
import * as authService from "../services/auth.service.js";

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email y contraseña requeridos" });
  }

  const result = authService.login(email, password);

  if (!result) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  res.json({
    token: `Bearer ${result.token}`,
    user: result.user                 
  });
};