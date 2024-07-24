import Button from '../Button/Button';
import styles from './cartSummaryInfo.module.css';
import utils from '../../styles/modules/utils.module.css';
import { Link } from 'react-router-dom';

interface CartSummaryInfoProps {
  onClickCheckoutButton: () => void;
  numberProduct: number;
  totalPrice: number;
}

const CartSummaryInfo = ({ numberProduct, totalPrice, onClickCheckoutButton }: CartSummaryInfoProps) => (
  <div className={styles.container}>
    <p className={styles.product}>{numberProduct} Product</p>
    <div className={`${utils.flexCenter} ${styles.total}`}>
      <label className={styles.desc}>Total</label>
      <p>$ {totalPrice} USD</p>
    </div>
    <Link to={'/order'} className={styles.group}>
      <Button classStyle={styles.button} onClick={onClickCheckoutButton} content="Checkout" />
    </Link>
  </div>
);

export default CartSummaryInfo;
