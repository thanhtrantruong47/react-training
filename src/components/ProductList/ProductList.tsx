import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCart';
import utils from '../../styles/modules/utils.module.css';
import styles from './productList.module.css';

interface ProductListProps {
  products: Product[];
  onClick: () => void;
}

const ProductList = ({ products }: ProductListProps) => (
  <div className={styles.container}>
    {products.map(
      ({ id, title, price, description, rate, numberRating, images }) => (
        <Link className={utils.link} to={`/detail/${id}`} key={id}>
          <ProductCard
            title={title}
            description={description ? description : ''}
            image={images ? images[0] : ''}
            numberRating={numberRating ? numberRating : 0}
            price={price}
            rate={rate ? rate : 0}
          />
        </Link>
      )
    )}
  </div>
);

export default ProductList;
