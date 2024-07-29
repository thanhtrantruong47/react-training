import { InputHTMLAttributes, ReactNode } from 'react';
import styles from './input.module.css';
import { default as utils } from '../../styles/modules/utils.module.css';
import EndIcon from '../Icon/EndIcon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endIcon?: ReactNode;
}

const Input = ({ onChange, endIcon, ...rest }: InputProps) => (
  <div className={utils.relative}>
    <input className={styles.searchInput} {...rest} onChange={onChange} />
    <EndIcon>{endIcon}</EndIcon>
  </div>
);

export default Input;
