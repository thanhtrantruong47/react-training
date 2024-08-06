import { Product } from '@/types/product';
import styles from './productList.module.css';
import { default as styleUtils } from '@/styles/modules/utils.module.css';
import { Button, Loading, ProductCard } from '@/components';

interface ProductListProps {
  products: Product[];
  onClick: () => void;
  hasMore: boolean;
  isLoadingSeeMore: boolean;
}

const ProductList = ({ products, onClick, hasMore, isLoadingSeeMore }: ProductListProps) => (
  <div className={`${styleUtils.container} ${styles.wrapper}`}>
    <div className={styles.list}>
      {products.map(({ id, title, price, description, rate, numberRating, images }) => (
        <ProductCard
          key={id}
          id={id}
          title={title}
          description={description || ''}
          image={images ? images[0] : ''}
          numberRating={numberRating || 0}
          price={price}
          rate={rate || 0}
        />
      ))}
    </div>
    {hasMore && (
      <div className={styles.loadMoreWrapper}>
        {isLoadingSeeMore ? (
          <Loading classStyle={`${styleUtils.loading} ${styles.loading}`} />
        ) : (
          <Button classStyle={styles.btn} content="See More" onClick={onClick} disabled={isLoadingSeeMore} />
        )}
      </div>
    )}
  </div>
);

export default ProductList;
