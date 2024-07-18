import Button from '../Button/Button';
import styles from './checkout.module.css';
import utils from '../../styles/modules/utils.module.css';

interface CheckoutProps {
  onClick: () => void;
  numberProduct: number;
  totalPrice: number;
}

const Checkout = ({ numberProduct, totalPrice, onClick }: CheckoutProps) => (
  <div className={styles.container}>
    <p className={styles.product}>{numberProduct} Product</p>
    <div className={`${utils.flexCenter} ${styles.total}`}>
      <p className={styles.desc}>Total</p>
      <p>$ {totalPrice} USD</p>
    </div>
    <div className={styles.group}>
      <Button
        className={`${styles.button} ${utils.pointer}`}
        onClick={onClick}
        content="Checkout"
      />
    </div>
  </div>
);

export default Checkout;
