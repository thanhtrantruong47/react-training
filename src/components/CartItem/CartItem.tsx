import { CartIcon } from '../Icon/CartIcon';
import Quantity from '../Quantity/Quantity';
import styles from './cartItem.module.css';
import utils from '../../styles/modules/utils.module.css';

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
      <img src="asdasdads" alt="sadasd" />
      <div>
        <p>name</p>
        <p>color</p>
      </div>
      <div>
        <p>40</p>
        <p>price</p>
      </div>
      <div>
        <p>stock</p>
        <p>in stock</p>
      </div>
      <CartIcon />
    </div>
    <div className={`${utils.flexCenter} ${styles.quantity}`}>
      <Quantity amount={1} />
    </div>
  </div>
);

export default CartItem;
