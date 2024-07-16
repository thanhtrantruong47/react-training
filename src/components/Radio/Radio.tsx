import React from 'react';
import styles from './radio.module.css';
import utils from '../../styles/modules/utils.module.css';

interface RadioOptionProps {
  value: string;
  isFirstOption: boolean;
  type: string;
}

const RadioOption = ({ value, isFirstOption, type }: RadioOptionProps) => (
  <>
    <input
      type="radio"
      name={type}
      id={value}
      className={type === 'color' ? styles.colorRadio : styles.sizeRadio}
      defaultChecked={isFirstOption}
    />
    <label
      htmlFor={value}
      className={type === 'color' ? styles.colorOption : `${styles.sizeOption} ${utils.flexCenter}`}
      aria-label={`Select ${type} ${value}`}>
      {type === 'color' ? (
        <div className={styles.colorCircle} style={{ backgroundColor: value } as React.CSSProperties} />
      ) : (
        value
      )}
    </label>
  </>
);

interface ListOptionsProps {
  options: string[];
  type: string;
}

const ListOptions = ({ options, type }: ListOptionsProps) => (
  <div>
    <p className={styles.title}>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
    <div className={type === 'color' ? styles.listColor : styles.listSize}>
      {options.map((option, index) => (
        <RadioOption key={option} value={option} isFirstOption={index === 0} type={type} />
      ))}
    </div>
  </div>
);

interface RadioProps {
  variant: string;
  options: string[];
}

const Radio = ({ variant, options }: RadioProps) => {
  return <ListOptions options={options} type={variant} />;
};

export default Radio;
