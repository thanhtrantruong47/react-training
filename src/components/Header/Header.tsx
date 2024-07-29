import { NAV_BAR_ITEMS } from '../../constants';
import { CartIcon } from '../Icon/CartIcon';
import { LikeIcon } from '../Icon/LikeIcon';
import { LoginIcon } from '../Icon/LoginIcon';
import { SearchIcon } from '../Icon/SearchIcon';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import styles from './header.module.css';
import { default as utils } from '../../styles/modules/utils.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../hook/CartContext';

const Header = () => {
  const { productsInCart } = useCart();

  return (
    <header className={styles.fluidContainer}>
      <div className={`${utils.container}`}>
        <div className={`${styles.header}  ${utils.flexCenter}`}>
          <Logo />
          <div className={`${styles.group}  ${utils.flexCenter}`}>
            <NavBar items={NAV_BAR_ITEMS} />
            <div className={styles.groupIcon}>
              <Link to={'/cart'} className={styles.badge}>
                <CartIcon />
                <span className={styles.badgeNumber}>{productsInCart.length}</span>
              </Link>
              <Link to={'/'}>
                <LikeIcon />
              </Link>
              <Link to={'/'}>
                <LoginIcon />
              </Link>
            </div>
            <div className={styles.groupInput}>
              <Input type="text" onChange={() => {}} placeholder="Search" endIcon={<SearchIcon />} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
