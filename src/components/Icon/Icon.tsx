import { ReactNode } from 'react';

interface IconProps {
  children: ReactNode;
  position: string;
}

const Icon = ({ children, position }: IconProps) => {
  return <div className={position}>{children}</div>;
};

export default Icon;
