// NavBarItem.tsx
import { Link } from 'react-router-dom';
import utilStyles from '../../styles/modules/utils.module.css';
import styles from './navBarItem.module.css';

interface NavBarItemProps {
  label: string;
  destination: string;
  isActive: boolean;
}

const NavBarItem = ({ label, destination, isActive }: NavBarItemProps) => (
  <li className={`${styles.navBarItem} ${isActive ? styles.active : ''}`}>
    <Link className={`${utilStyles.link} ${isActive ? styles.activeLink : ''}`} to={destination}>
      {label}
    </Link>
  </li>
);

export default NavBarItem;
