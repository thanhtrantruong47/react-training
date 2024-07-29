import MainLayout from '../../layouts/MainLayout';
import { default as styleUtils } from '../../styles/modules/utils.module.css';
import styles from './notFound.module.css';

const NotFound = () => {
  return (
    <MainLayout>
      <h2 className={`${styleUtils.container} ${styles.title}`}>Page is under development</h2>;
    </MainLayout>
  );
};

export default NotFound;
