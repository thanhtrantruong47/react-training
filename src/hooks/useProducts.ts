import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { ProductAPIService } from '@/services/ProductAPIService';
import { PRODUCTS_MOCK as mockProducts } from '@/mocks/products';

const productsPerPage = 8;

const useMockData = import.meta.env.USE_MOCK_FOR_API_FAIL === 'true';

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  status?: number; // Optional status code
}

const fetchProducts = async (category: string, page: number, useMockData: boolean) => {
  if (!category) {
    return { data: [], total: 0, status: 0 };
  }

  if (useMockData) {
    const filteredProducts = mockProducts.filter(product => product.category === category);

    return {
      data: filteredProducts.slice(page * productsPerPage, (page + 1) * productsPerPage),
      total: filteredProducts.length,
      status: 200, // Assuming mock data is always successful
    };
  }

  try {
    const response = await ProductAPIService.getList({ category });

    if (response.isSuccess && response.data !== undefined) {
      return {
        data: response.data.slice(page * productsPerPage, (page + 1) * productsPerPage),
        total: response.data.length,
        status: response.status,
      };
    }

    return { data: [], total: 0, status: response.status };
  } catch (error) {
    console.error('Failed to fetch products:', error);

    return { data: [], total: 0, status: 500 }; // Assuming a 500 status code for errors
  }
};

export const useProducts = (category: string): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [status, setStatus] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setCurrentPage(1); // Reset page
      setProducts([]); // Clear current products

      const result = await fetchProducts(category, 0, useMockData);
      if (!result) return;

      setProducts(result.data);
      setHasMore(result.total > productsPerPage); // Determine if more data exists
      setStatus(result.status);
      setIsLoading(false);
    };

    fetchData();
  }, [category]);

  const onLoadMore = async () => {
    if (!hasMore) return;

    const result = await fetchProducts(category, currentPage, useMockData);
    if (!result) return;

    setProducts(prevProducts => [...prevProducts, ...result.data]);
    setCurrentPage(prevPage => prevPage + 1);
    setHasMore(result.total > (currentPage + 1) * productsPerPage); // Check if there are more products
    setStatus(result.status);
  };

  return { products, isLoading, hasMore, onLoadMore, status };
};
