import { PrismaClient } from "@prisma/client";
import {
  IProduct,
  IProductCreate,
  IProductRepository,
} from "../interfaces/product.interface";

const prisma = new PrismaClient();

class ProductRepository implements IProductRepository {
  async getAllProducts(): Promise<IProduct[]> {
    const products = await prisma.product.findMany();
    return products;
  }

  async create(product: IProductCreate): Promise<IProduct> {
    const createdProduct = await prisma.product.create({
      data: {
        name: product.name,
        brand: product.brand,
        quantity: product.quantity,
        situation: product.situation,
        description: product.description,
      },
    });

    return createdProduct;
  }
}

export { ProductRepository };
