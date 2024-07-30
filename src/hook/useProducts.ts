import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { ProductAPIService } from '../services/ProductAPIService';
import { PRODUCTS_MOCK as mockProducts } from '../mock/products';

const productsPerPage = 8;
const useMockData = import.meta.env.USE_MOCK_FOR_API_FAIL === 'true';

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  hasMore: boolean;
  loadMore: () => void;
}

const fetchProducts = async (category: string, page: number) => {
  if (!category) {
    return { data: [], total: 0 };
  }

  if (!useMockData) {
    const response = await ProductAPIService.getList({ category });

    if (response.isSuccess && response.data !== undefined) {
      return {
        data: response.data.slice(page * productsPerPage, (page + 1) * productsPerPage),
        total: response.data.length,
      };
    }
  }

  const filteredProducts = mockProducts.filter(product => product.category === category);
  return {
    data: filteredProducts.slice(page * productsPerPage, (page + 1) * productsPerPage),
    total: filteredProducts.length,
  };
};

export const useProducts = (category: string): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setCurrentPage(1); // Reset page
      setProducts([]); // Clear current products

      const result = await fetchProducts(category, 0);
      setProducts(result.data);
      setHasMore(result.total > productsPerPage); // Determine if more data exists
      setIsLoading(false);
    };

    fetchData();
  }, [category]);

  const loadMore = async () => {
    if (!hasMore) return;

    const result = await fetchProducts(category, currentPage);
    setProducts(prevProducts => [...prevProducts, ...result.data]);
    setCurrentPage(prevPage => prevPage + 1);
    setHasMore(result.total > (currentPage + 1) * productsPerPage); // Check if there are more products
  };

  return { products, isLoading, hasMore, loadMore };
};
