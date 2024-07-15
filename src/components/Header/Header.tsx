import { NAV_BAR_ITEMS } from '../../constants';
import { CartIcon } from '../Icon/CartIcon';
import { LikeIcon } from '../Icon/LikeIcon';
import { LoginIcon } from '../Icon/LoginIcon';
import { SearchIcon } from '../Icon/SearchIcon';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import styles from './header.module.css';
import utils from '../../styles/modules/utils.module.css';

const Header = () => (
  <header className={`${styles.container}  ${utils.flexCenter}`}>
    <Logo />
    <div className={`${styles.group}  ${utils.flexCenter}`}>
      <NavBar items={NAV_BAR_ITEMS} />
      <div className={styles.groupIcon}>
        <CartIcon />
        <LikeIcon />
        <LoginIcon />
      </div>
      <div className={styles.groupInput}>
        <Input
          type="text"
          onChange={() => {}}
          placeholder="Search"
          endIcon={<SearchIcon />}
        />
      </div>
    </div>
  </header>
);

export default Header;
