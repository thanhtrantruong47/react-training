import styles from './navBarItem.module.css'; // Import CSS module

interface NavBarItemProps {
  label: string;
  destination: string;
  isActive: boolean;
  onItemClick: () => void; // Callback function for item click
}

const NavBarItem = ({
  label,
  destination,
  isActive,
  onItemClick,
}: NavBarItemProps) => {
  return (
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
};

export default NavBarItem;
