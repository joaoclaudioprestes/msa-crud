import {
  IProduct,
  IProductRepository,
  IProductUseCase,
} from "../interfaces/product.interface";
import { ProductRepository } from "../repositories/products.repository";

class ProductsUseCase implements IProductUseCase {
  private productRepository: IProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async createProduct(product: IProduct): Promise<IProduct> {
    const result = await this.productRepository.create(product);
    return result;
  }

  async getAllProducts(): Promise<IProduct[]> {
    const result = await this.productRepository.getAllProducts();
    return result;
  }
}

export { ProductsUseCase };
