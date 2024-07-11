import { Link } from 'react-router-dom';
import styles from './navBarItem.module.css';

interface NavBarItemProps {
  label: string;
  destination: string;
  isActive: boolean;
  onItemClick: () => void;
}

const NavBarItem = ({
  label,
  destination,
  isActive,
  onItemClick,
}: NavBarItemProps) => (
  <li className={styles.listItem}>
    <Link
      className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
      to={destination}
      onClick={onItemClick}
    >
      {label}
    </Link>
  </li>
);

export default NavBarItem;
