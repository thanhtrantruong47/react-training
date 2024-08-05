import { Product } from '@/types/product';
import APIService from './APIService';

export const ProductAPIService = new APIService<Product>('products');
