import { ReactNode } from 'react';
import { default as stylesUtils } from '../../styles/modules/utils.module.css';
import styles from './icon.module.css';

interface IconProps {
  children: ReactNode;
  onChange?: () => void;
}

const EndIcon = ({ children, onChange }: IconProps) => {
  return (
    <div className={`${stylesUtils.pointer} ${styles.endIcon}`} onChange={onChange}>
      {children}
    </div>
  );
};

export default EndIcon;
