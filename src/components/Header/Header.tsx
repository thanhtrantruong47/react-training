import { NAV_BAR } from '../../constants';
import { CartIcon, LikeIcon, LoginIcon } from '../Icon/Icon';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import SearchInput from '../SearchInput/SearchInput';

const Header = () => (
  <header>
    <Logo />
    <div>
      <NavBar items={NAV_BAR} />
      <CartIcon itemCount={3} />
      <LikeIcon />
      <LoginIcon />
    </div>
    <SearchInput inputType="text" onChange={() => {}} placeholder="Search" />
  </header>
);

export default Header;
