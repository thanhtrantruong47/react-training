import { useState } from 'react';
import { NavItem } from '../../types/navBar';
import NavBarItem from '../NavBarItem/NavBarItem';
import styles from './navBar.module.css';

interface NavBarProps {
  items: NavItem[];
}

const NavBar = ({ items }: NavBarProps) => {
  const [navItems, setNavItems] = useState(items);

  // Handle item click to update isActive
  const handleItemClick = (index: number) => {
    const updatedItems = navItems.map((item, idx) => ({
      ...item,
      isActive: idx === index,
    }));
    setNavItems(updatedItems);
  };

  return (
    <ul className={styles.navbar}>
      {navItems.map(({ destination, label, isActive }, index) => (
        <NavBarItem
          key={label}
          label={label}
          destination={destination}
          isActive={isActive}
          onItemClick={() => handleItemClick(index)}
        />
      ))}
    </ul>
  );
};

export default NavBar;
