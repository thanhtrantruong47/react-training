import { ChangeEvent } from 'react';
import styles from './numberInput.module.css';
import { PlusIcon, MinusIcon, Input, Button } from 'components';

interface NumberInputProps {
  value: number; // Current quantity
  onChange: (value: number) => void; // Callback to handle quantity changes
  maxValue: number; // Maximum value
}

const NumberInput = ({ value, onChange, maxValue }: NumberInputProps) => {
  const increment = () => {
    if (value < maxValue) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    onChange(value > 1 ? value - 1 : 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1 && newValue <= maxValue) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.container}>
      <Button className={styles.button} onClick={decrement} disabled={value <= 1} icon={MinusIcon} />
      <Input className={styles.quantity} type="number" value={value} onChange={handleChange} />
      <Button className={styles.button} onClick={increment} disabled={value >= maxValue} icon={PlusIcon} />
    </div>
  );
};

export default NumberInput;
