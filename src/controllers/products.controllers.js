import * as ProductService from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  try {
    const productos = await ProductService.getAll();
    res.json(productos);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const producto = await ProductService.getById(req.params.id);
    if (!producto) return res.status(404).json({ error: "No encontrado" });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const nuevo = await ProductService.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    await ProductService.remove(req.params.id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};