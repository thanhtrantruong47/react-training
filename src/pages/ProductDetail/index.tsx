import { useParams } from 'react-router-dom';
import ProductList from '../../components/ProductList';
import styles from './productDetail.module.css';
import MainLayout from '../../layouts';
import Loading from '../../components/Loading';
import { default as styleUtils } from '../../styles/modules/utils.module.css';
import Product from '../../components/Product';
import { useProducts } from '../../hooks/useProducts'; // Import the custom hook
import { useProductById } from '../../hooks/useProductById';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Use the useProducts hook for related products
  const { product, isLoading: isProductLoading } = useProductById(id || '');
  const { products, isLoading: isRelatedProductsLoading, hasMore, onLoadMore } = useProducts(product?.category || '');

  return (
    <MainLayout>
      <div>
        <div className={styles.product}>
          {isProductLoading ? (
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
          {isRelatedProductsLoading && products.length === 0 ? (
            <Loading classStyle={styleUtils.loading} />
          ) : (
            <ProductList products={products} onClick={onLoadMore} hasMore={hasMore} />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
