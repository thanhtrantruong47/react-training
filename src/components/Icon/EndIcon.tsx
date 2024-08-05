import { ReactNode } from 'react';
import { default as styleUtils } from 'styles/modules/utils.module.css';
import styles from './icon.module.css';

interface IconProps {
  children: ReactNode;
  onChange?: () => void;
}

const EndIcon = ({ children, onChange }: IconProps) => {
  return (
    <div className={`${styleUtils.pointer} ${styles.endIcon}`} onChange={onChange}>
      {children}
    </div>
  );
};

export default EndIcon;
