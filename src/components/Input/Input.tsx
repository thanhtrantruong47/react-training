import { InputHTMLAttributes, ReactNode } from 'react';
import styles from './input.module.css';
import utils from '../../styles/modules/utils.module.css';
import EndIcon from '../Icon/EndIcon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  inputType: string;
  onChange: () => void;
  endIcon?: ReactNode;
}

const Input = ({
  placeholder,
  inputType,
  onChange,
  endIcon,
  ...rest
}: InputProps) => (
  <div className={utils.relative}>
    <input
      type={inputType}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.searchInput}
      maxLength={20}
      {...rest}
    />
    <EndIcon>{endIcon}</EndIcon>
  </div>
);

export default Input;
