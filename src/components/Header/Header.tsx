import { NAV_BAR } from '../../constants';
import { CartIcon } from '../Icon/CartIcon';
import { LikeIcon } from '../Icon/LikeIcon';
import { LoginIcon } from '../Icon/LoginIcon';
import { SearchIcon } from '../Icon/SearchIcon';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
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
      <Input
        type="text"
        onChange={() => {}}
        placeholder="Search"
        endIcon={<SearchIcon />}
      />
    </div>
  </header>
);

export default Header;
