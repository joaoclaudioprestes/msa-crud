import { Router } from "express";
import { ProductsController } from "../controller/products.controller";

const router = Router();
const controller = new ProductsController();

router.get("/", controller.getAllProducts);
router.post("/add", controller.createProduct);

export { router };
