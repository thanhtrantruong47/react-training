import { Product } from '../types/product';
import HttpService from './HttpService';

class ProductAPIService extends HttpService<Product> {
  constructor() {
    super('products');
  }
}

export default ProductAPIService;
