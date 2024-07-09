import Service from './Service';
import { Product } from '../types/product';

class ProductService extends Service<Product> {
  constructor() {
    super('products');
  }

  /**
   * Fetches a product by its ID from the server.
   * @param {string} id - The ID of the product to fetch.
   * @returns {Promise<Product>} A promise that resolves to a Product object.
   */
  async getById(id: string): Promise<Product> {
    try {
      return await super.getById(id);
    } catch (error) {
      console.error(`Error fetching product by id: ${id}`, error);
      throw new Error(`Failed to fetch product with id ${id}`);
    }
  }

  /**
   * Fetches products by category from the server.
   * @param {string} category - The category of the products to fetch.
   * @returns {Promise<Product[]>} A promise that resolves to an array of Product objects.
   */
  async getByCategory(category: string): Promise<Product[]> {
    try {
      const products = await this.getByParams('category', category);
      return products as Product[];
    } catch (error) {
      console.error(`Error fetching products by category: ${category}`, error);
      throw new Error(`Failed to fetch products by category ${category}`);
    }
  }

  /**
   * Updates a product by its ID on the server.
   * @param {string} id - The ID of the product to update.
   * @param {Product} data - The product data to update.
   * @returns {Promise<Product>} A promise that resolves to the updated Product object.
   */
  async updateById(id: string, data: Product): Promise<Product> {
    try {
      return await super.updateById(id, data);
    } catch (error) {
      console.error(`Error updating product by id: ${id}`, error);
      throw new Error(`Failed to update product with id ${id}`);
    }
  }
}

export default ProductService;
