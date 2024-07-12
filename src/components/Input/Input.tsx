import { ReactNode } from 'react';
import styles from './input.module.css';
import utils from '../../styles/modules/utils.module.css';
import EndIcon from '../Icon/EndIcon';

interface InputProps {
  placeholder: string;
  inputType: string;
  onChange: () => void;
  children?: ReactNode;
}

const Input = ({ placeholder, inputType, onChange, children }: InputProps) => (
  <div className={utils.relative}>
    <input
      type={inputType}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.searchInput}
      maxLength={20}
    />
    <EndIcon>{children}</EndIcon>
  </div>
);

export default Input;
