import BookMaskIcon from '../Icon/BookMaskIcon';
import LikedIcon from '../Icon/LikedIcon';
import styles from './selectedProduct.module.css';

const SelectedProduct = () => {
  return (
    <div className={styles.container}>
      <BookMaskIcon />
      <LikedIcon />
    </div>
  );
};

export default SelectedProduct;
