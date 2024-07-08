// services/ProductService.ts
import { BASE_URL, PRODUCTS } from '../constants';
import { Product } from '../types/product';

class ProductService {
  resourceUrl: string;

  constructor() {
    this.resourceUrl = `${BASE_URL}/${PRODUCTS}`;
  }

  async getById(id: string): Promise<Product> {
    try {
      const response = await fetch(`${this.resourceUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to fetch data: ${errorMessage}`);
    }
  }

  async getProductByCategory(category: string): Promise<Product[]> {
    const url = new URL(this.resourceUrl);
    url.searchParams.append('category', category);

    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      return response.status === 404 ? [] : data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Error occurred during product search: ${errorMessage}`);
    }
  }

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
      return response.json();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to update product: ${errorMessage}`);
    }
  }
}

export default ProductService;
