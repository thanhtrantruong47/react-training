import { Link } from 'react-router-dom';
import common from '../../styles/genericStyles.module.css';
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
  <li
    className={`${styles['navbar-item']} ${isActive ? styles['navbar-item-active'] : ''}`}
    onClick={onItemClick}
  >
    <Link
      className={`${common.link} ${isActive ? common['link-active'] : ''}`}
      to={destination}
    >
      {label}
    </Link>
  </li>
);

export default NavBarItem;
