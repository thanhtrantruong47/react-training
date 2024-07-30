import { useState, useEffect } from 'react';
import { Product as ProductType } from '../types/product';
import { ProductAPIService } from '../services/ProductAPIService';
import { PRODUCTS_MOCK as mockProducts } from '../mock/products';

const useMockData = import.meta.env.USE_MOCK_FOR_API_FAIL === 'true';

interface UseProductByIdResult {
  product: ProductType | null;
  isLoading: boolean;
}

const fetchProductById = async (productId: string) => {
  if (!productId) {
    return null;
  }

  const response = await ProductAPIService.getById(productId);

  if (response.isSuccess && response.data !== undefined && !useMockData) {
    return response.data;
  }

  return mockProducts.find(product => product.id.toString() === productId) || null;
};

export const useProductById = (id: string): UseProductByIdResult => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      setIsLoading(true);
      const fetchedProduct = await fetchProductById(id);
      setProduct(fetchedProduct);
      setIsLoading(false);
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  return { product, isLoading };
};
