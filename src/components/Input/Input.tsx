import { ReactNode } from 'react';
import Icon from '../Icon/Icon';
import styles from './input.module.css';
import utils from '../../styles/modules/utils.module.css';

interface InputProps {
  placeholder: string;
  inputType: string;
  onChange: () => void;
  children: ReactNode;
  positionIcon: string;
}

const Input = ({
  placeholder,
  inputType,
  onChange,
  children,
  positionIcon,
}: InputProps) => (
  <div className={utils.relative}>
    <input
      type={inputType}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.searchInput}
      maxLength={20}
    />
    <Icon position={positionIcon}>{children}</Icon>
  </div>
);

export default Input;
