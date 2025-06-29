import 'dotenv/config';
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import notFoundHandler from "./middlewares/notFound.middleware.js";
import { join, __dirname } from "./utils/index.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/products.routes.js";

const app = express();
app.set("PORT", process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);

//Rutas no encontradas
app.use(notFoundHandler);

//Listener
app.listen(app.get("PORT"), () => {
  console.log(`Server running at http://localhost:${app.get("PORT")}`);
});