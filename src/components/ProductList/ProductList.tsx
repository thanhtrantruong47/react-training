import { Product } from '../../types/product';
import Button from 'components/Button/Button';
import styles from './productList.module.css';
import { default as styleUtils } from '../../styles/modules/utils.module.css';
import ProductCard from 'components/ProductCard/ProductCart';

interface ProductListProps {
  products: Product[];
  onClick: () => void;
  hasMore: boolean;
}

const ProductList = ({ products, onClick, hasMore }: ProductListProps) => (
  <div className={`${styleUtils.container} ${styles.wrapper}`}>
    <div className={styles.list}>
      {products.map(({ id, title = 'No Title', price, description = '', rate = 0, numberRating = 0, images = [] }) => (
        <ProductCard
          key={id}
          id={id}
          title={title}
          description={description}
          image={images[0]}
          numberRating={numberRating}
          price={price}
          rate={rate}
        />
      ))}
    </div>
    <Button classStyle={styles.btn} content="See More" onClick={onClick} disabled={!hasMore} />
  </div>
);

export default ProductList;
