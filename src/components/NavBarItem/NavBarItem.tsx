import React from 'react';
import styles from './navBarItem.module.css'; // Import CSS module

interface NavBarItemProps {
  label: string;
  destination: string;
  isActive: boolean;
}

const NavBarItem: React.FC<NavBarItemProps> = ({
  label,
  destination,
  isActive,
}) => {
  return (
    <li className={styles.listItem}>
      <a
        className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
        href={destination}
      >
        {label}
      </a>
    </li>
  );
};

export default NavBarItem;
