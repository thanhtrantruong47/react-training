import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumbs';
import CartList from '../../components/CartList/CartList';
import CartSummaryInfo from '../../components/CartSummaryInfo/CartSummaryInfo';
import MainLayout from '../../layouts/MainLayout';
import { CartItem as CartItemType } from '../../types/cartItem';
import styles from './cart.module.css';

const breadcrumbItems = [{ label: 'Home', url: '/' }, { label: 'Cart' }];

const Cart = () => {
  const [productsInCart, setProductsInCart] = useState<CartItemType[]>([]);
  const [mergedCartItems, setMergedCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('productsInCart') || '[]');
    setProductsInCart(items);
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('productsInCart') || '[]') as CartItemType[];

    const mergeCartItems = (items: CartItemType[]) => {
      const mergedItemsMap = new Map<string, CartItemType>();

      items.forEach(item => {
        if (mergedItemsMap.has(item.id)) {
          const existingItem = mergedItemsMap.get(item.id)!;
          mergedItemsMap.set(item.id, {
            ...existingItem,
            quantity: existingItem.quantity + item.quantity,
          });
        } else {
          mergedItemsMap.set(item.id, { ...item });
        }
      });

      const mergedItems: CartItemType[] = Array.from(mergedItemsMap.values());
      localStorage.setItem('productsInCart', JSON.stringify(mergedItems));
      return mergedItems;
    };

    const mergedItems = mergeCartItems(items);
    setMergedCartItems(mergedItems);
  }, [productsInCart]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const updatedItems = mergedCartItems.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item));
    setMergedCartItems(updatedItems);
    localStorage.setItem('productsInCart', JSON.stringify(updatedItems));
  };

  const handleDelete = (id: string) => {
    const updatedItems = mergedCartItems.filter(item => item.id !== id);
    setMergedCartItems(updatedItems);
    localStorage.setItem('productsInCart', JSON.stringify(updatedItems));
  };

  const bannerContent = (
    <div className={styles.banner}>
      <Breadcrumb listItems={breadcrumbItems} />
      <h2 className={styles.title}>Cart</h2>
    </div>
  );

  const totalPrice = (mergedCartItems: { price: number; quantity: number }[]) => {
    return mergedCartItems.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const total = totalPrice(mergedCartItems);
  const checkout = () => {};

  return (
    <MainLayout bannerContent={bannerContent}>
      {mergedCartItems.length > 0 ? (
        <section className={styles.container}>
          <h2 className={styles.titleCart}>Cart Product</h2>
          <div className={styles.group}>
            <CartList
              cartItems={mergedCartItems}
              onQuantityChange={handleQuantityChange}
              onChangeDelete={handleDelete}
            />
            <div className={styles.checkout}>
              <CartSummaryInfo
                numberProduct={mergedCartItems.length}
                onClickCheckoutButton={checkout}
                totalPrice={total}
              />
            </div>
          </div>
        </section>
      ) : (
        <p className={styles.container}>Your cart is empty</p>
      )}
    </MainLayout>
  );
};

export default Cart;
