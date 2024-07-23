import { useEffect, useState } from 'react';
import { CartItem as CartItemType } from '../../types/cartItem';
import CartItem from '../CartItem/CartItem';
import styles from './cartList.module.css';

interface CartListProps {
  cartItems: CartItemType[];
}

const CartList = ({ cartItems }: CartListProps) => {
  const [mergedCartItems, setMergedCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    const mergeCartItems = (items: CartItemType[]) => {
      const mergedItems: CartItemType[] = [];

      items.forEach(item => {
        const existingItemIndex = mergedItems.findIndex(i => i.id === item.id);

        if (existingItemIndex !== -1) {
          mergedItems[existingItemIndex].quantity += item.quantity;
        } else {
          mergedItems.push({ ...item });
        }
      });

      return mergedItems;
    };

    const mergedItems = mergeCartItems(cartItems);
    setMergedCartItems(mergedItems);
    localStorage.setItem('productsInCart', JSON.stringify(mergedItems));
  }, [cartItems]);

  return (
    <div className={styles.container}>
      {mergedCartItems.map(({ id, image, title, price, color, quantity, stock }) => (
        <CartItem
          key={id}
          color={color}
          image={image}
          price={price}
          quantity={quantity}
          stock={stock}
          title={title}
          id={id}
        />
      ))}
    </div>
  );
};

export default CartList;
