import { ReactNode } from 'react';
import utils from '../../styles/modules/utils.module.css';
import styles from './icon.module.css';

interface IconProps {
  children: ReactNode;
  onChange?: () => void;
}

const EndIcon = ({ children, onChange }: IconProps) => {
  return (
    <div className={`${utils.pointer} ${styles.endIcon}`} onChange={onChange}>
      {children}
    </div>
  );
};

export default EndIcon;
