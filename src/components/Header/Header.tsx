import { NAV_BAR_ITEMS } from '../../constants';
import { CartIcon } from 'components/Icon/CartIcon';
import { LikeIcon } from 'components/Icon/LikeIcon';
import { LoginIcon } from 'components/Icon/LoginIcon';
import { SearchIcon } from 'components/Icon/SearchIcon';
import Input from 'components/Input/Input';
import Logo from 'components/Logo/Logo';
import NavBar from 'components/NavBar/NavBar';
import styles from './header.module.css';
import { default as styleUtils } from '../../styles/modules/utils.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../hook/CartContext';

const Header = () => {
  const { productsInCart } = useCart();

  return (
    <header className={styles.fluidContainer}>
      <div className={`${styleUtils.container}`}>
        <div className={`${styles.header}  ${styleUtils.flexCenter}`}>
          <Logo />
          <div className={`${styles.group}  ${styleUtils.flexCenter}`}>
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
