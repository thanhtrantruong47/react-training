import { useState, useEffect } from 'react';
import { Product as ProductType } from '@/types/product';
import { ProductAPIService } from '@/services/ProductAPIService';
import { PRODUCTS_MOCK as mockProducts } from '@/mocks/products';
import { STATUS } from '@/constants';

const useMockData = import.meta.env.USE_MOCK_FOR_API_FAIL === 'true';

interface UseProductByIdResult {
  product: ProductType | null;
  isLoading: boolean;
  status?: number; // Optional status code
}

const fetchProductById = async (productId: string, useMockData: boolean) => {
  if (!productId) {
    return { data: null, status: STATUS.NOT_FOUND };
  }

  if (useMockData) {
    const mockProduct = mockProducts.find(product => product.id.toString() === productId) || null;

    return { data: mockProduct, status: 200 }; // Assuming mock data is always successful
  }

  try {
    const response = await ProductAPIService.getById(productId);
    if (response.isSuccess && response.data !== undefined) {
      return { data: response.data, status: response.status };
    }

    return { data: null, status: response.status };
  } catch (error) {
    console.error('Failed to fetch product:', error);

    return { data: null, status: 500 }; // Assuming a 500 status code for errors
  }
};

export const useProductById = (id: string): UseProductByIdResult => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<number>();

  useEffect(() => {
    const fetchProductData = async () => {
      setIsLoading(true);
      const { data, status } = await fetchProductById(id, useMockData);
      setProduct(data);
      setStatus(status);
      setIsLoading(false);
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  return { product, isLoading, status };
};
