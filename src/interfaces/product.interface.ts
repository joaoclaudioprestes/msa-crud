import { Request, Response } from "express";

interface IProduct {
  id: string;
  name: string;
  brand: string;
  quantity: number;
  situation: string;
  description: string;
  createdAt: Date;
  alteredAt: Date;
}

interface IProductCreate {
  name: string;
  brand: string;
  quantity: number;
  situation: string;
  description: string;
}

interface IProductRepository {
  getAllProducts(): Promise<IProduct[]>;
  create(product: IProductCreate): Promise<IProduct>;
}

interface IProductUseCase {
  getAllProducts(): Promise<IProduct[]>;
  createProduct(product: IProduct): Promise<IProduct>;
}

interface IProductController {
  getAllProducts(req: Request, res: Response): Promise<void>;
  createProduct(req: Request, res: Response): Promise<void>;
}

export {
  IProduct,
  IProductCreate,
  IProductRepository,
  IProductUseCase,
  IProductController,
};
