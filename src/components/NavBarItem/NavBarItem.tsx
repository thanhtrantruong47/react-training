import { Link } from 'react-router-dom';
import { default as stylesUtils } from '../../styles/modules/utils.module.css'; // Correct way to alias CSS module
import styles from './navBarItem.module.css';

interface NavBarItemProps {
  label: string;
  destination: string;
  isActive: boolean;
}

const NavBarItem = ({ label, destination, isActive }: NavBarItemProps) => (
  <li className={`${styles.navBarItem} ${isActive ? styles.active : ''}`}>
    <Link className={`${stylesUtils.link} ${isActive ? styles.activeLink : ''}`} to={destination}>
      {label}
    </Link>
  </li>
);

export default NavBarItem;
