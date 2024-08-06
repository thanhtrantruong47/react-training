import { useParams } from 'react-router-dom';
import styles from './productDetail.module.css';
import MainLayout from '@/layouts';
import { default as styleUtils } from '@/styles/modules/utils.module.css';
import { useProducts } from '@/hooks/';
import { useProductById } from '@/hooks/useProductById';
import { Product, Loading, ProductList } from '@/components';
import { STATUS } from '@/constants';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Use the useProductById hook for the product and status
  const { product, isLoading: isProductLoading, status } = useProductById(id || '');

  // Use the useProducts hook for related products
  const { products, hasMore, onLoadMore, isLoadingSeeMore } = useProducts(product?.category || '');

  const isNotFound = status === STATUS.NOT_FOUND || !product;

  return (
    <MainLayout>
      {isProductLoading ? (
        <Loading classStyle={`${styleUtils.loading} ${styles.loading}`} />
      ) : isNotFound ? (
        <div className={styleUtils.container}>
          <p className={styles.error}>Product not found</p>
        </div>
      ) : (
        <div>
          <div className={styles.product}>
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
              <p className={styles.title}>Same Product</p>
              <ProductList
                products={products}
                onClick={onLoadMore}
                hasMore={hasMore}
                isLoadingSeeMore={isLoadingSeeMore}
              />
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ProductDetail;
