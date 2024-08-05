import { Button } from '@/components';
import styles from './cartSummaryInfo.module.css';
import { default as styleUtils } from '@/styles/modules/utils.module.css';

interface CartSummaryInfoProps {
  onClickCheckoutButton: () => void;
  numberProduct: number;
  totalPrice: number;
  isDisable?: boolean;
}

const CartSummaryInfo = ({ numberProduct, totalPrice, onClickCheckoutButton, isDisable }: CartSummaryInfoProps) => (
  <div className={styles.container}>
    <p className={styles.product}>{numberProduct} Product</p>
    <div className={`${styleUtils.flexCenter} ${styles.total}`}>
      <label className={styles.desc}>Total</label>
      <p>$ {totalPrice} USD</p>
    </div>
    <div className={styles.group}>
      <Button classStyle={styles.button} onClick={onClickCheckoutButton} content="Checkout" disabled={isDisable} />
    </div>
  </div>
);

export default CartSummaryInfo;
