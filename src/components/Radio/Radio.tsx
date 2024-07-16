import React from 'react';
import styles from './radio.module.css';
import utils from '../../styles/modules/utils.module.css';

const ColorOption = ({
  color,
  isFirstOption,
}: {
  color: string;
  isFirstOption: boolean;
}) => (
  <>
    <input
      type="radio"
      name="color"
      id={color}
      className={styles.colorRadio}
      defaultChecked={isFirstOption}
    />
    <label htmlFor={color} className={styles.colorOption}>
      <div
        className={styles.colorCircle}
        style={{ backgroundColor: color } as React.CSSProperties}
      />
    </label>
  </>
);

const SizeOption = ({
  size,
  isFirstOption,
}: {
  size: string;
  isFirstOption: boolean;
}) => (
  <>
    <input
      type="radio"
      name="size"
      id={size}
      className={styles.sizeRadio}
      defaultChecked={isFirstOption}
    />
    <label
      htmlFor={size}
      className={`${styles.sizeOption} ${utils.flexCenter}`}
    >
      {size}
    </label>
  </>
);

const ListColor = ({ colors }: { colors: string[] }) => (
  <div>
    <p className={styles.title}>Color</p>
    <div className={styles.listColor}>
      {colors.map((option, index) => (
        <ColorOption color={option} key={option} isFirstOption={index === 0} />
      ))}
    </div>
  </div>
);

const ListSize = ({ sizes }: { sizes: string[] }) => (
  <div>
    <p className={styles.title}>Size</p>
    <div className={styles.listSize}>
      {sizes.map((option, index) => (
        <SizeOption size={option} key={option} isFirstOption={index === 0} />
      ))}
    </div>
  </div>
);

const Radio = ({
  variant,
  options,
}: {
  variant: string;
  options: string[];
}) => {
  return variant === 'color' ? (
    <ListColor colors={options} />
  ) : (
    <ListSize sizes={options} />
  );
};

export default Radio;
