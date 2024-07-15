import BookMarkIcon from '../Icon/BookMarkIcon';
import LikedIcon from '../Icon/LikedIcon';
import styles from './selectedProduct.module.css';

const SelectedProduct = () => (
  <div className={styles.container}>
    <BookMarkIcon />
    <LikedIcon />
  </div>
);

export default SelectedProduct;
