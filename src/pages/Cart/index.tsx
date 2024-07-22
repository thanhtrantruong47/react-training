import Breadcrumb from '../../components/Breadcrumb/Breadcrumbs';
import CartList from '../../components/CartList/CartList';
import CartSummaryInfo from '../../components/CartSummaryInfo/CartSummaryInfo';
import MainLayout from '../../layouts/MainLayout';
import { CartItem } from '../../types/cartItem';
import styles from './cart.module.css';

// example data
const productDetails: CartItem[] = [
  {
    id: 1,
    image: 'https://shorturl.at/jJC5m',
    title: 'T-Shirt',
    price: 100,
    color: 'red',
    stock: 10,
    quantity: 5,
  },
  {
    id: 2,
    image: 'https://shorturl.at/jJC5m',
    title: 'T-Shirt',
    price: 150,
    color: 'blue',
    stock: 5,
    quantity: 6,
  },
];

const breadcrumbItems = [{ label: 'Home', url: '/' }, { label: 'Cart' }];

// example data end

const Cart = () => {
  const bannerContent = (
    <div className={styles.banner}>
      <Breadcrumb listItems={breadcrumbItems} />
      <h2 className={styles.title}>Cart</h2>
    </div>
  );

  return (
    <MainLayout bannerContent={bannerContent}>
      <section className={styles.container}>
        <h2 className={styles.titleCart}>Cart Product</h2>
        <div className={styles.group}>
          <CartList cartItems={productDetails} />
          <div className={styles.checkout}>
            <CartSummaryInfo numberProduct={5} onClickCheckoutButton={() => {}} totalPrice={500} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cart;
