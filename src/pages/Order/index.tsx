import { Link } from 'react-router-dom';
import styles from './order.module.css';
import { Button, CheckedIcon } from '@/components';
import MainLayout from '@/layouts';

const Order = () => {
  return (
    <MainLayout>
      <div className={styles.order}>
        <CheckedIcon />
        <h2 className={styles.title}>Order Successful</h2>
        <p>Thank you so much order</p>
        <Link to={'/'}>
          <Button classStyle={styles.btn} content="Home Page" />
        </Link>
      </div>
    </MainLayout>
  );
};

export default Order;
