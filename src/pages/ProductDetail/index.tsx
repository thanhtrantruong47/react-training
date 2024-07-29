import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product as ProductType } from '../../types/product';
import ProductList from '../../components/ProductList/ProductList';
import styles from './productDetail.module.css';
import MainLayout from '../../layouts/MainLayout';
import Loading from '../../components/Loading';
import { default as styleUtils } from '../../styles/modules/utils.module.css';
import { PRODUCTS_MOCK as mockProducts } from '../../mock/products'; // Import mock data
import { ProductAPIService } from '../../services/ProductAPIService';
import Product from '../../components/Product/Product';
import { useProducts } from '../../hook/useProducts'; // Import the custom hook

const useMockData = import.meta.env.USE_MOCK_FOR_API_FAIL;

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Use the useProducts hook for related products
  const { products, isLoading: isRelatedProductsLoading, hasMore, loadMore } = useProducts(product?.category || '');

  // Fetch product details by ID
  useEffect(() => {
    const fetchProductData = async () => {
      setIsLoading(true);

      try {
        const response = !useMockData
          ? await ProductAPIService.getById(id || '')
          : { data: mockProducts.find(product => product.id.toString() === id) };

        if (response.data) {
          setProduct(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  // Reset related products when product category changes
  useEffect(() => {
    if (product?.category) {
      loadMore(); // Trigger load more if category is available
    }
  }, []);

  // Determine the loading state for the entire page
  const isPageLoading = isLoading || isRelatedProductsLoading;

  return (
    <MainLayout>
      <div>
        <div className={styles.product}>
          {isPageLoading ? (
            <Loading classStyle={styleUtils.loading} />
          ) : (
            product && (
              <Product
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
          {isPageLoading && products.length === 0 ? (
            <Loading classStyle={styleUtils.loading} />
          ) : (
            <ProductList products={products} onClick={loadMore} hasMore={hasMore} />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
