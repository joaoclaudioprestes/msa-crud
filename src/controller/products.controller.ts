import { Request, Response } from "express";
import { IProductController } from "../interfaces/product.interface";
import { ProductsUseCase } from "../useCase/products.usecase";

class ProductsController implements IProductController {
  async getAllProducts(req: Request, res: Response) {
    try {
      const productsUseCase = new ProductsUseCase();
      const products = await productsUseCase.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: `Internal Server Error ${error}` });
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const productsUseCase = new ProductsUseCase();
      const product = req.body;
      const result = await productsUseCase.createProduct(product);
      res.status(201).json({ message: "Product created", product: result });
    } catch (error: any) {
      res
        .status(400)
        .json({ message: "Error creating product", error: error.message });
    }
  }
}

export { ProductsController };
