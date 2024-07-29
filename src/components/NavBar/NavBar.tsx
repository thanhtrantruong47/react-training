// NavBar.tsx
import { useLocation } from 'react-router-dom';
import { NavItem } from '../../types/navBar';
import NavBarItem from '../NavBarItem/NavBarItem';
import styles from './navBar.module.css';

interface NavBarProps {
  listItemNavBar: NavItem[];
}

const NavBar = ({ listItemNavBar }: NavBarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav>
      <ul className={styles.navbar}>
        {listItemNavBar.map(({ destination, label }) => (
          <NavBarItem key={label} label={label} destination={destination} isActive={currentPath === destination} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
