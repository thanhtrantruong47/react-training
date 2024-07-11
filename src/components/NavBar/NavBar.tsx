import { NavItem } from '../../types/navBar';
import NavBarItem from '../NavBarItem/NavBarItem';
import styles from './navBar.module.css';

interface NavBarProps {
  items: NavItem[];
}

const NavBar = ({ items }: NavBarProps) => (
  <nav className={styles.navBar}>
    {items.map(({ destination, label, isActive }) => (
      <NavBarItem
        key={label}
        label={label}
        destination={destination}
        isActive={isActive}
      />
    ))}
  </nav>
);

export default NavBar;
