import Button from '../Button/Button';
import styles from './checkout.module.css';
import utils from '../../styles/modules/utils.module.css';

interface CheckoutProps {
  onClickCheckoutButton: () => void;
  numberProduct: number;
  totalPrice: number;
}

const Checkout = ({
  numberProduct,
  totalPrice,
  onClickCheckoutButton,
}: CheckoutProps) => (
  <div className={styles.container}>
    <p className={styles.product}>{numberProduct} Product</p>
    <div className={`${utils.flexCenter} ${styles.total}`}>
      <label className={styles.desc}>Total</label>
      <p>$ {totalPrice} USD</p>
    </div>
    <div className={styles.group}>
      <Button
        classStyle={styles.button}
        onClick={onClickCheckoutButton}
        content="Checkout"
      />
    </div>
  </div>
);

export default Checkout;
