import Breadcrumb from '../../components/Breadcrumb/Breadcrumbs';
import CartList from '../../components/CartList/CartList';
import CartSummaryInfo from '../../components/CartSummaryInfo/CartSummaryInfo';
import Footer from '../../components/Footer/Footer';
import { CartItem } from '../../types/cartItem';
import styles from './cart.module.css';

// example data
const productDetails: CartItem[] = [
  {
    id: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhjpAMGZr_n_ABGlri34mUcwi_mpNlTO1_essdAYk9IrlKhT53CbjMqxh44Lke-HDUO4wLmmCVL8Em31KLUql1Wf3ETUvI_28-kkJXb15eM2eOMBFCUUkT7GZ897B2bIDLBqre-D8&usqp=CAc',
    title: 'T-Shirt',
    price: 100,
    color: 'red',
    stock: 10,
    quantity: 5,
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhjpAMGZr_n_ABGlri34mUcwi_mpNlTO1_essdAYk9IrlKhT53CbjMqxh44Lke-HDUO4wLmmCVL8Em31KLUql1Wf3ETUvI_28-kkJXb15eM2eOMBFCUUkT7GZ897B2bIDLBqre-D8&usqp=CAc',
    title: 'T-Shirt basic',
    price: 150,
    color: 'blue',
    stock: 5,
    quantity: 6,
  },
];

const breadcrumbItems = [{ label: 'Home', url: '/' }, { label: 'Cart' }];

// example data end

const Cart = () => {
  return (
    <div>
      <div className={styles.banner}>
        <Breadcrumb listItems={breadcrumbItems} />
        <p className={styles.title}>Cart</p>
      </div>
      <div className={styles.container}>
        <p className={styles.titleCart}>Cart Product</p>
        <div className={styles.group}>
          <CartList cartItems={productDetails} />
          <div>
            <CartSummaryInfo numberProduct={5} onClickCheckoutButton={() => {}} totalPrice={500} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
