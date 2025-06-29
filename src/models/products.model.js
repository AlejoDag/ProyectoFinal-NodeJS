import { db } from "../services/firebase.js";

export class Product {
  constructor({ id, nombre, precio }) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  static async getAll() {
    const snapshot = await db.collection("products").get();
    return snapshot.docs.map(doc => new Product({ id: doc.id, ...doc.data() }));
  }

  static async getById(id) {
    const doc = await db.collection("products").doc(id).get();
    if (!doc.exists) return null;
    return new Product({ id: doc.id, ...doc.data() });
  }

  static async create(data) {
    const { nombre, precio } = data;
    const nuevoProducto = { nombre, precio };
    const docRef = await db.collection("products").add(nuevoProducto);
    return new Product({ id: docRef.id, ...nuevoProducto });
  }

  static async deleteById(id) {
    const ref = db.collection("products").doc(id);
    const doc = await ref.get();
    if (!doc.exists) return false;
    await ref.delete();
    return true;
  }
}