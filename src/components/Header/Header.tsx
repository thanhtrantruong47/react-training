import { NAV_BAR } from '../../constants';
import { CartIcon } from '../Icon/CartIcon';
import { LikeIcon } from '../Icon/LikeIcon';
import { LoginIcon } from '../Icon/LoginIcon';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import SearchInput from '../SearchInput/SearchInput';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.container}>
    <Logo />
    <div className={styles.group}>
      <NavBar items={NAV_BAR} />
      <div className={styles.groupIcon}>
        <CartIcon />
        <LikeIcon />
        <LoginIcon />
      </div>
    </div>
    <div className={styles.groupSearch}>
      <SearchInput inputType="text" onChange={() => {}} placeholder="Search" />
    </div>
  </header>
);

export default Header;
