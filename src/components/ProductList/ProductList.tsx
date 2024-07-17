import { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCart';
import styles from './productList.module.css';

interface ProductListProps {
  products: Product[];
  onClick: () => void;
}

const ProductList = ({ products }: ProductListProps) => (
  <div className={styles.container}>
    {products.map(
      ({ id, title, price, description, rate, numberRating, images }) => (
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
      )
    )}
  </div>
);

export default ProductList;
