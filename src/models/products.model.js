import { db } from "../services/firebase.js";

export const Product = {
  //Obtener todos los productos
  async getAll() {
    try {
      const productList = await db.collection("products").get();
      const productos = [];
      productList.forEach((doc) => {
        productos.push({ id: doc.id, ...doc.data() });
      });
      return productos;
    } catch (error) {
      throw new Error("Error al obtener productos: " + error.message);
    }
  },

  //Obtener producto
  async getById(id) {
    try {
      const docRef = db.collection("products").doc(id);
      const docSnap = await docRef.get();
      if (!docSnap.exists) return null;
      return { id: docSnap.id, ...docSnap.data() };
    } catch (error) {
      throw new Error("Error al obtener producto: " + error.message);
    }
  },

  //Crear producto
  async create(data) {
    try {
      const nuevo = await db.collection("products").add(data);
      return { id: nuevo.id, ...data };
    } catch (error) {
      throw new Error("Error al crear producto: " + error.message);
    }
  },

  //Eliminar producto
  async deleteById(id) {
    try {
      const coleccion = db.collection("products").doc(id);
      const comprobarProducto = await coleccion.get();
      if (!comprobarProducto.exists) return null;
      await coleccion.delete();
      return true;
    } catch (error) {
      throw new Error("Error al eliminar producto: " + error.message);
    }
  }
};
