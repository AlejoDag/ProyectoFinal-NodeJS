//Router
import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById
} from "../controllers/products.controllers.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/create", authenticateToken, createProduct);
router.delete("/:id", authenticateToken, deleteProductById);

export default router;