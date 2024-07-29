import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { ProductAPIService } from '../services/ProductAPIService';
import { PRODUCTS_MOCK as mockProducts } from '../mock/products';

const productsPerPage = 8;
const useMockData = import.meta.env.USE_MOCK_FOR_API_FAIL;

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  hasMore: boolean;
  loadMore: () => void;
}

export const useProducts = (category: string): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (page: number) => {
    if (!category) {
      setIsLoading(false);
      return { data: [], total: 0 };
    }

    try {
      const response = !useMockData
        ? await ProductAPIService.getList({ category })
        : { data: mockProducts.filter(product => product.category === category) };

      if (response.data) {
        const paginatedData = response.data.slice(page * productsPerPage, (page + 1) * productsPerPage);
        return {
          data: paginatedData,
          total: response.data.length,
        };
      }

      return { data: [], total: 0 };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setCurrentPage(1); // Reset page
      setProducts([]); // Clear current products

      const result = await fetchProducts(0);
      if (result) {
        setProducts(result.data);
        setHasMore(result.total > productsPerPage); // Determine if more data exists
      }
    };

    fetchData();
  }, [category]); // No need to include fetchProducts in dependency array

  const loadMore = async () => {
    if (!hasMore) return;

    const result = await fetchProducts(currentPage);
    if (result) {
      setProducts(prevProducts => [...prevProducts, ...result.data]);
      setCurrentPage(prevPage => prevPage + 1);
      setHasMore(result.total > (currentPage + 1) * productsPerPage); // Check if there are more products
    }
  };

  return { products, isLoading, hasMore, loadMore };
};
