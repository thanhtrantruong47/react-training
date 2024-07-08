// services/ProductService.ts
import { BASE_URL, PRODUCTS } from '../constants';
import { Product } from '../types/product';

class ProductService {
  resourceUrl: string;

  constructor() {
    this.resourceUrl = `${BASE_URL}/${PRODUCTS}`;
  }

  /**
   * Fetches a product by its ID from the server.
   * @param {string} id - The ID of the product to fetch.
   * @returns {Promise<Product>} A promise that resolves to a Product object.
   */
  async getById(id: string): Promise<Product> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error fetching product by id: ${id}`, error);
      throw new Error(`Failed to fetch data: ${errorMessage}`);
    }
  }

  /**
   * Fetches products by category from the server.
   * @param {string} category - The category of the products to fetch.
   * @returns {Promise<Product[]>} A promise that resolves to an array of Product objects.
   */
  async getProductByCategory(category: string): Promise<Product[]> {
    const url = new URL(this.resourceUrl);
    url.searchParams.append('category', category);

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 404) {
        return [];
      }
      return await response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error fetching products by category: ${category}`, error);
      throw new Error(`Error occurred during product search: ${errorMessage}`);
    }
  }

  /**
   * Updates a product by its ID on the server.
   * @param {string} id - The ID of the product to update.
   * @param {Product} productData - The product data to update.
   * @returns {Promise<Product>} A promise that resolves to the updated Product object.
   */
  async putById(id: string, productData: Product): Promise<Product> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      return await response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error updating product by id: ${id}`, error);
      throw new Error(`Failed to update product: ${errorMessage}`);
    }
  }
}

export default ProductService;
