import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { Product } from '../../types/product';
import ProductList from '../../components/ProductList/ProductList';
import styles from './detail.module.css';
import MainLayout from '../../layouts/MainLayout';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import utils from '../../styles/modules/utils.module.css';
import { products as mockProducts } from '../../mock/products'; // Import mock data
import { ProductAPIService } from '../../services/ProductAPIService';

const productsPerPage = 8;

const useMockData = import.meta.env.USE_MOCK_FOR_API_FAIL;

const Details = () => {
  const { id } = useParams(); // Assuming id is passed as a route parameter

  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProductById = async (productId: string) => {
    const response = await ProductAPIService.getById(productId);

    if (response.isSuccess && response.data !== undefined) {
      return response.data;
    } else {
      const mockProduct = mockProducts.find(product => product.id.toString() === productId) || null;
      return mockProduct;
    }
  };

  const fetchProductsByCategory = async (category: string, page: number) => {
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

  useEffect(() => {
    const fetchProductData = async () => {
      setIsLoading(true);

      const fetchedProduct = await fetchProductById(id || '');
      setProduct(fetchedProduct);

      setIsLoading(false);
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  useEffect(() => {
    const fetchProductsData = async () => {
      if (!product) return;

      setIsLoading(true);

      const result = await fetchProductsByCategory(product.category || '', 0);
      setProducts(result.data);
      setCurrentPage(1);
      setHasMore(result.total > productsPerPage);

      setIsLoading(false);
    };

    fetchProductsData();
  }, [product]);

  const handleLoadMore = async () => {
    if (!hasMore || !product) return;

    const result = await fetchProductsByCategory(product.category || '', currentPage);
    setProducts([...products, ...result.data]);
    setCurrentPage(currentPage + 1);
    setHasMore(result.total > (currentPage + 1) * productsPerPage);
  };

  return (
    <MainLayout>
      <div>
        <div className={styles.product}>
          {isLoading ? (
            <Loading classStyle={utils.loading} />
          ) : (
            product && (
              <ProductDetail
                colors={product.colors || []}
                description={product.description || ''}
                images={product.images || []}
                numberRating={product.numberRating || 0}
                price={product.price || 0}
                rate={product.rate || 0}
                sizes={product.sizes || []}
                stock={product.stock || 0}
                title={product.title || ''}
              />
            )
          )}
        </div>
        <div className={styles.list}>
          <p className={styles.title}>Same Product</p>
          {isLoading ? (
            <Loading classStyle={utils.loading} />
          ) : (
            <ProductList products={products} onClick={handleLoadMore} hasMore={hasMore} />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
