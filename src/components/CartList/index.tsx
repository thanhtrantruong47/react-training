import { CartItem as CartItemType } from '../../types/cartItem';
import CartItem from '../CartItem';
import styles from './cartList.module.css';

interface CartListProps {
  cartItems: CartItemType[];
  onQuantityChange: (id: string, quantity: number) => void;
  onDelete: (id: string) => void;
}

const CartList = ({ cartItems, onQuantityChange, onDelete }: CartListProps) => {
  return (
    <div className={styles.container}>
      {cartItems.map(({ id, image, title, price, color, quantity, stock }) => (
        <CartItem
          key={id}
          id={id}
          color={color}
          image={image}
          price={price}
          quantity={quantity}
          stock={stock}
          title={title}
          onQuantityChange={onQuantityChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CartList;
