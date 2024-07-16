import { ChangeEvent, useEffect, useState } from 'react';
import styles from './quantity.module.css';
import PlusIcon from '../Icon/PlusIcon';
import MinusIcon from '../Icon/MinusIcon';

interface QuantityProp {
  amount: number;
}

const Quantity = ({ amount }: QuantityProp) => {
  const [value, setValue] = useState(amount);
  const [disableDecrement, setDisableDecrement] = useState(value === 0);

  useEffect(() => {
    setDisableDecrement(value === 1);
  }, [value]);

  const increment = () => {
    setValue(prevValue => (prevValue < 20 ? prevValue + 1 : 20));
  };

  const decrement = () => {
    setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 1));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1 && newValue <= 20) {
      setValue(newValue);
    }
  };

  return (
    <div>
      <div className={styles.quantity}>
        <button
          className={styles.quantityButton}
          onClick={decrement}
          disabled={disableDecrement}
        >
          <MinusIcon />
        </button>
        <input
          className={styles.amount}
          type="number"
          value={value}
          onChange={handleChange}
        />
        <button className={styles.quantityButton} onClick={increment}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
