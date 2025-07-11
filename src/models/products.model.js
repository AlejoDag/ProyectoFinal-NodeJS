import { db } from "../services/firebase.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc
} from "firebase-admin/firestore";

const productCollection = collection(db, "products");

export const Product = {
  //Obtener todos los productos
  async getAll() {
    try {
      const productList = await getDocs(productCollection);
      const products = [];

      productList.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });

      return products;
    } catch (error) {
      throw new Error("Error al obtener productos: " + error.message);
    }
  },

  //Obtener producto
  async getById(id) {
    try {
      const ref = doc(productCollection, id);
      const producto = await getDoc(ref);

      if (!producto.exists()) return null;
      return { id: producto.id, ...producto.data() };
    } catch (error) {
      throw new Error("Error al obtener producto: " + error.message);
    }
  },

  //Crear producto
  async create(data) {
    try {
      const nuevo = await addDoc(productCollection, data);
      return { id: nuevo.id, ...data };
    } catch (error) {
      throw new Error("Error al crear producto: " + error.message);
    }
  },

  //Eliminar producto
  async deleteById(id) {
    try {
      const ref = doc(productCollection, id);
      const producto = await getDoc(ref);

      if (!producto.exists()) return null;

      await deleteDoc(ref);
      return true;
    } catch (error) {
      throw new Error("Error al eliminar producto: " + error.message);
    }
  }
};