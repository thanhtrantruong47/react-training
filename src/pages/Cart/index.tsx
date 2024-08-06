import { useEffect, useState } from 'react';
import { useCart, useToast } from '@/contexts';
import MainLayout from '@/layouts';
import styles from './cart.module.css';
import { default as styleUtils } from '@/styles/modules/utils.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { BREADCRUMB_ITEMS_CART, MESSAGE_SUCCESS } from '@/constants';
import { ProductAPIService } from '@/services/ProductAPIService';
import { Breadcrumb, CartList, CartSummaryInfo, Loading, Overlay } from '@/components';

const Cart = () => {
  const { productsInCart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { addToast } = useToast(); // Get addToast function
  const [delayedProductsInCart, setDelayedProductsInCart] = useState<typeof productsInCart>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isDisable = true;
  const [isCheckout, setIsCheckout] = useState(false);
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false); // State for overlay

  // Simulate the api call process
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedProductsInCart(productsInCart);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [productsInCart]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleDelete = (id: string) => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
      removeFromCart(id);
      addToast(MESSAGE_SUCCESS.DELETE_CART, true);
    }, 2000);
  };

  const totalPrice = (productsInCart: { price: number; quantity: number }[]) => {
    return productsInCart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const total = totalPrice(delayedProductsInCart);

  const checkout = async () => {
    setIsLoading(true);
    const productsInCart = JSON.parse(localStorage.getItem('productsInCart') || '[]');

    for (const product of productsInCart) {
      const { productId, quantity, stock } = product;
      const newStock = stock - quantity;

      const stockUpdate = { stock: newStock };

      const response = await ProductAPIService.update(productId, stockUpdate);

      if (response.isSuccess) {
        clearCart();
        navigate('/order');
        setIsLoading(false);
      } else {
        addToast('Unable to order now please try again later', false);
        setIsCheckout(true);
      }
    }
    setIsLoading(false);
  };

  return (
    <MainLayout>
      <div className={styles.fluidContainer}>
        <div className={`${styleUtils.container} ${styles.banner}`}>
          <Breadcrumb items={BREADCRUMB_ITEMS_CART} />
          <h2 className={styles.title}>Cart</h2>
        </div>
      </div>
      {isLoading ? (
        <Loading classStyle={`${styleUtils.loading} ${styles.loading}`} />
      ) : delayedProductsInCart.length > 0 ? (
        <section className={`${styleUtils.container} ${styles.cart}`}>
          <h2 className={styles.titleCart}>Cart Product</h2>
          <div className={styles.group}>
            <CartList
              cartItems={delayedProductsInCart}
              onQuantityChange={handleQuantityChange}
              onDelete={handleDelete}
            />
            <div className={styles.checkout}>
              <CartSummaryInfo
                numberProduct={delayedProductsInCart.length}
                onClickCheckoutButton={checkout}
                totalPrice={total}
                isDisable={isCheckout}
              />
            </div>
          </div>
        </section>
      ) : (
        <div className={styleUtils.container}>
          <div className={`${styles.emptyGroup} ${styles.cart}`}>
            <div className={styles.empty}>
              No product in the cart. <Link to={'/'}>shopping</Link> to add item
            </div>
            <div className={styles.checkout}>
              <CartSummaryInfo
                numberProduct={delayedProductsInCart.length}
                onClickCheckoutButton={checkout}
                totalPrice={total}
                isDisable={isDisable}
              />
            </div>
          </div>
        </div>
      )}
      <Overlay isShow={showOverlay} />
    </MainLayout>
  );
};

export default Cart;
