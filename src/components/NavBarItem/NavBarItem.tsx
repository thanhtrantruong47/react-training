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
    <a
      className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
      href={destination}
      onClick={onItemClick}
    >
      {label}
    </a>
  </li>
);

export default NavBarItem;
