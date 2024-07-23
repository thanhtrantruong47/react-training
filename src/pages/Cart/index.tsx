import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumbs';
import CartList from '../../components/CartList/CartList';
import CartSummaryInfo from '../../components/CartSummaryInfo/CartSummaryInfo';
import MainLayout from '../../layouts/MainLayout';
import styles from './cart.module.css';

const breadcrumbItems = [{ label: 'Home', url: '/' }, { label: 'Cart' }];

const Cart = () => {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('productsInCart') || '[]');
    setProductsInCart(items);
  }, []);

  const bannerContent = (
    <div className={styles.banner}>
      <Breadcrumb listItems={breadcrumbItems} />
      <h2 className={styles.title}>Cart</h2>
    </div>
  );

  const totalPrice = (productsInCart: { price: number; quantity: number }[]) => {
    return productsInCart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const total = totalPrice(productsInCart);
  const numberProduct = productsInCart.length;

  const checkout = () => {};

  return (
    <MainLayout bannerContent={bannerContent}>
      {productsInCart.length > 0 ? (
        <section className={styles.container}>
          <h2 className={styles.titleCart}>Cart Product</h2>
          <div className={styles.group}>
            <CartList cartItems={productsInCart} />
            <div className={styles.checkout}>
              <CartSummaryInfo numberProduct={numberProduct} onClickCheckoutButton={checkout} totalPrice={total} />
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
