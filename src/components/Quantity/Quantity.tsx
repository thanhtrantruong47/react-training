import React, { useState } from 'react';
import styles from './quantity.module.css';
import { SearchIcon } from '../Icon/SearchIcon';
import EndIcon from '../Icon/EndIcon';

interface QuantityProps {
  value: number;
  onChange: (newValue: number) => void;
}

const Quantity: React.FC<QuantityProps> = ({ value, onChange }) => {
  const [amount, setAmount] = useState(value.toString());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setAmount(newValue);
    onChange(parseInt(newValue, 10));
  };

  const handleDecrease = () => {
    // Ensure value doesn't go below 1
    const newValue = parseInt(amount, 10) > 1 ? parseInt(amount, 10) - 1 : 1;
    setAmount(newValue.toString());
    onChange(newValue);
  };

  const handleIncrease = () => {
    const newValue = parseInt(amount, 10) + 1; // Convert current amount to integer
    setAmount(newValue.toString());
    onChange(newValue);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.iconDecrease}
        type="button"
        onClick={handleDecrease}
      >
        <SearchIcon />
      </button>
      <input type="number" value={amount} onChange={handleChange} />
      <EndIcon onChange={handleIncrease}>
        <SearchIcon />
      </EndIcon>
    </div>
  );
};

export default Quantity;
