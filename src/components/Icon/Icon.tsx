import { ReactNode } from 'react';
import utils from '../../styles/modules/utils.module.css';

interface IconProps {
  children: ReactNode;
  position: string;
}

const Icon = ({ children, position }: IconProps) => {
  return <div className={`${position} ${utils.pointer}`}>{children}</div>;
};

export default Icon;
