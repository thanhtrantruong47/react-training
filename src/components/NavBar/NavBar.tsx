import { NavItem } from '../../types/navBar';
import NavBarItem from '../NavBarItem/NavBarItem';
import styles from './navBar.module.css';

interface NavBarProps {
  items: NavItem[];
}

const NavBar = ({ items }: NavBarProps) => {
  return (
    <ul className={styles.navbar}>
      {items.map(({ destination, label, isActive }) => (
        <NavBarItem
          key={label}
          label={label}
          destination={destination}
          isActive={isActive}
        />
      ))}
    </ul>
  );
};

export default NavBar;
