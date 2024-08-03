import { useParams } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import styles from './productDetail.module.css';
import MainLayout from '../../layouts/MainLayout';
import Loading from '../../components/Loading/Loading';
import { default as styleUtils } from '../../styles/modules/utils.module.css';
import Product from '../../components/Product/Product';
import { useProducts } from '../../hook/useProducts'; // Import the custom hook
import { useProductById } from '../../hook/useProductById';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Use the useProductById hook for the product and status
  const { product, isLoading: isProductLoading, status } = useProductById(id || '');

  // Use the useProducts hook for related products
  const { products, isLoading: isRelatedProductsLoading, isHasMore, onLoadMore } = useProducts(product?.category || '');

  // Determine loading state
  const isLoading = isProductLoading && status === undefined;

  return (
    <MainLayout>
      {isLoading ? (
        <Loading classStyle={`${styleUtils.loading} ${styles.loading}`} />
      ) : status === 404 ? (
        <div className={styleUtils.container}>
          <p className={styles.error}>Product not found</p>
        </div>
      ) : (
        <div>
          <div className={styles.product}>
            {product ? (
              <>
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
                <div className={styles.list}>
                  {isRelatedProductsLoading && products.length === 0 ? (
                    <Loading classStyle={styleUtils.loading} />
                  ) : (
                    <>
                      <p className={styles.title}>Same Product</p>
                      <ProductList products={products} onClick={onLoadMore} hasMore={isHasMore} />
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className={styleUtils.container}>
                <p className={styles.error}>Product not available</p>
              </div>
            )}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ProductDetail;
