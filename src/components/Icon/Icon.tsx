import { ReactNode } from 'react';
import utils from '../../styles/modules/utils.module.css';
import styles from './icon.module.css';

interface IconProps {
  children: ReactNode;
  optional?: 'start' | 'end';
}

const Icon = ({ children, optional }: IconProps) => {
  const iconClass = optional === 'end' ? styles.endIcon : styles.startIcon;

  return <div className={`${utils.pointer} ${iconClass}`}>{children}</div>;
};

export default Icon;
