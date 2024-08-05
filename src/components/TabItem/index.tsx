// src/components/TabItem/TabItem.tsx
import styles from './tabItem.module.css';

interface TabItemProps {
  label: string;
  isActive: boolean;
  onChange: (item: string) => void;
}

const TabItem = ({ label, isActive, onChange }: TabItemProps) => {
  return (
    <div
      className={`${styles.tab} ${isActive ? styles.active : ''}`}
      onClick={() => onChange(label)}
      aria-selected={isActive}>
      {label}
    </div>
  );
};

export default TabItem;
