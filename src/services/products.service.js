import { Product } from "../models/products.model.js";

//Obtener todos los productos
export const getAll = async () => {
  return await Product.getAll();
};

//Obtener producto
export const getById = async (id) => {
  return await Product.getById(id);
};

//Crear producto
export const create = async (data) => {
  if (!data.nombre || !data.precio) {
    throw new Error("Faltan campos requeridos: nombre y precio");
  }

  return await Product.create(data);
};

//Eliminar producto
export const remove = async (id) => {
  const eliminado = await Product.deleteById(id);
  if (!eliminado) {
    throw new Error("Producto no encontrado");
  }
  return eliminado;
};