import { Product } from '../../types/product';
import Button from '../Button/Button';
import ProductCard from '../ProductCard/ProductCart';
import styles from './productList.module.css';

interface ProductListProps {
  products: Product[];
  onClick: () => void;
}

const ProductList = ({ products, onClick }: ProductListProps) => (
  <div className={styles.container}>
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
    <Button classStyle={styles.btn} content="See More" onClick={onClick} />
  </div>
);

export default ProductList;
