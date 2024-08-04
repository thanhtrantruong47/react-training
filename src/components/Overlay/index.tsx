import Loading from '../Loading/Loading';
import styles from './overlay.module.css';

interface OverlayProps {
  isShow: boolean;
}

const Overlay = ({ isShow = false }: OverlayProps) => (
  <div className={`${styles.overlay} ${isShow ? styles.show : styles.hidden}`}>
    <Loading classStyle={styles.loading} />
  </div>
);

export default Overlay;
