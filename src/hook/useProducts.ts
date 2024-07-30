import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { ProductAPIService } from '../services/ProductAPIService';
import { PRODUCTS_MOCK as mockProducts } from '../mock/products';

const productsPerPage = 8;

const useMockData = import.meta.env.USE_MOCK_FOR_API_FAIL;

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  isHasMore: boolean;
  onLoadMore: () => void;
}

const fetchProducts = async (category: string, page: number) => {
  if (!category) {
    return { data: [], total: 0 };
  }

  // Fetch data from API if mock data is not used
  const response = await ProductAPIService.getList({ category });

  if (response.isSuccess && response.data !== undefined && !useMockData) {
    return {
      data: response.data.slice(page * productsPerPage, (page + 1) * productsPerPage),
      total: response.data.length,
    };
  } else {
    const filteredProducts = mockProducts.filter(product => product.category === category);

    return {
      data: filteredProducts.slice(page * productsPerPage, (page + 1) * productsPerPage),
      total: filteredProducts.length,
    };
  }
};

export const useProducts = (category: string): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isHasMore, setIsHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setCurrentPage(1); // Reset page
      setProducts([]); // Clear current products

      const result = await fetchProducts(category, 0);

      if (!result) return;

      setProducts(result.data);
      setIsHasMore(result.total > productsPerPage); // Determine if more data exists
      setIsLoading(false);
    };

    fetchData();
  }, [category]);

  const onLoadMore = async () => {
    if (!isHasMore) return;

    const result = await fetchProducts(category, currentPage);
    if (!result) return;

    setProducts(prevProducts => [...prevProducts, ...result.data]);
    setCurrentPage(prevPage => prevPage + 1);
    setIsHasMore(result.total > (currentPage + 1) * productsPerPage); // Check if there are more products
  };

  return { products, isLoading, isHasMore, onLoadMore };
};
