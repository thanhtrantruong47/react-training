import Breadcrumb from '../../components/Breadcrumb/Breadcrumbs';
import CartList from '../../components/CartList/CartList';
import CartSummaryInfo from '../../components/CartSummaryInfo/CartSummaryInfo';
import { useCart } from '../../hook/CartContext';
import MainLayout from '../../layouts/MainLayout';
import styles from './cart.module.css';
import utils from '../../styles/modules/utils.module.css';

const breadcrumbItems = [{ label: 'Home', url: '/' }, { label: 'Cart' }];

const Cart = () => {
  const { productsInCart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleDelete = (id: string) => {
    removeFromCart(id);
  };

  const bannerContent = (
    <div className={styles.fluidContainer}>
      <div className={`${utils.container} ${styles.banner}`}>
        <Breadcrumb listItems={breadcrumbItems} />
        <h2 className={styles.title}>Cart</h2>
      </div>
    </div>
  );

  const totalPrice = (productsInCart: { price: number; quantity: number }[]) => {
    return productsInCart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const total = totalPrice(productsInCart);
  const checkout = () => {
    localStorage.clear();
  };

  return (
    <MainLayout bannerContent={bannerContent}>
      {productsInCart.length > 0 ? (
        <section className={`${utils.container} ${styles.cart}`}>
          <h2 className={styles.titleCart}>Cart Product</h2>
          <div className={styles.group}>
            <CartList
              cartItems={productsInCart}
              onQuantityChange={handleQuantityChange}
              onChangeDelete={handleDelete}
            />
            <div className={styles.checkout}>
              <CartSummaryInfo
                numberProduct={productsInCart.length}
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
