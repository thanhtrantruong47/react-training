import { CartIcon } from '../Icon/CartIcon';
import styles from './cartItem.module.css';
import utils from '../../styles/modules/utils.module.css';
import NumberInput from '../NumberInput/NumberInput';

interface CartItemProps {
  image: string;
  title: string;
  price: number;
  quantity: number;
  stock: number;
}

const CartItem = (_: CartItemProps) => (
  <div className={styles.container}>
    <div className={`${utils.flexCenter} ${styles.group}`}>
      <img
        className={styles.image}
        src="https://i.pinimg.com/236x/74/20/58/742058099ee4749d2da5d820396870eb.jpg"
        alt="sadasd"
      />
      <div className={styles.option}>
        <p className={styles.title}>Name</p>
        <p className={styles.desc}>Color: White</p>
      </div>
      <div className={styles.option}>
        <p className={styles.title}>$40 USD</p>
        <p className={styles.desc}>Price</p>
      </div>
      <div className={styles.option}>
        <p className={styles.title}>Stock</p>
        <p className={styles.desc}>In stock</p>
      </div>
      <CartIcon />
    </div>
    <div className={`${utils.flexCenter} ${styles.quantity}`}>
      <NumberInput defaultValue={1} />
    </div>
  </div>
);

export default CartItem;
