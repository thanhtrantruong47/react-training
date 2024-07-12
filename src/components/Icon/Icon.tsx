import { ReactNode } from 'react';
import utils from '../../styles/modules/utils.module.css';
import styles from './icon.module.css';

interface IconProps {
  children: ReactNode;
}

const EndIcon = ({ children }: IconProps) => {
  return <div className={`${utils.pointer} ${styles.endIcon}`}>{children}</div>;
};

export default EndIcon;
