import * as ProductModel from "../models/products.model.js";

//Obtener todos los productos
export const getAll = async () => {
  return await ProductModel.getAll();
};

//Obtener producto
export const getById = async (id) => {
  return await ProductModel.getById(id);
};

//Crear producto
export const create = async (data) => {
  if (!data.nombre || !data.precio) {
    throw new Error("Faltan campos requeridos: nombre y precio");
  }

  return await ProductModel.create(data);
};

//Eliminar producto
export const remove = async (id) => {
  const producto = await ProductModel.getById(id);
  if (!producto) {
    throw new Error("Producto no encontrado");
  }

  await ProductModel.remove(id);
  return producto;
};