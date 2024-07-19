import styles from './tab.module.css';

interface TabProps {
  label: string;
  isActive: boolean;
  onChange: () => void;
}

const Tab = ({ label, isActive, onChange }: TabProps) => {
  return (
    <div className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={onChange} aria-selected={isActive}>
      {label}
    </div>
  );
};

export default Tab;
