import { Link } from 'react-router-dom';
import styles from './order.module.css';
import { CheckedIcon } from '@/components';
import MainLayout from '@/layouts';
import { default as styleUtils } from '@/styles/modules/utils.module.css';

const Order = () => {
  return (
    <MainLayout>
      <div className={styles.order}>
        <CheckedIcon />
        <h2 className={styles.title}>Order Successful</h2>
        <h3>Thank you so much order</h3>
        <Link to={'/'} className={`${styles.link} ${styleUtils.link}`}>
          Home Page
        </Link>
      </div>
    </MainLayout>
  );
};

export default Order;
