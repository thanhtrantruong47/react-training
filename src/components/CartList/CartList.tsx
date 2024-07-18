import { CartItem as CartItemType } from '../../types/cartItem';
import CartItem from '../CartItem/CartItem';
import styles from './cartList.module.css';

interface CartListProps {
  cartItems: CartItemType[];
}

const CartList = ({ cartItems }: CartListProps) => (
  <div className={styles.container}>
    {cartItems.map(({ id, image, title, price, color, quantity, stock }) => (
      <CartItem
        key={id}
        color={color}
        image={image}
        price={price}
        quantity={quantity}
        stock={stock}
        title={title}
      />
    ))}
  </div>
);

export default CartList;
