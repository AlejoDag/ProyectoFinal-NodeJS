import jwt from "jsonwebtoken";

const usuarios = [
  { id: 1, email: "admin@empresa.com", password: "1234" }
];

//Autenticar usuario
export const login = (email, password) => {
  const usuario = usuarios.find(u => u.email === email && u.password === password);
  if (!usuario) return null;

  //JWT Token
  const payload = { id: usuario.id, email: usuario.email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, 
    { expiresIn: "1h" });

  return {token, user: payload};
};