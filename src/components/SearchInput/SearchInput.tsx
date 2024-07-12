import { ReactNode } from 'react';
import Icon from '../Icon/Icon';
import styles from './searchInput.module.css';

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
  <form className={styles.container}>
    <input
      type={inputType}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.searchInput}
    />
    <Icon position={positionIcon}>{children}</Icon>
  </form>
);

export default Input;
