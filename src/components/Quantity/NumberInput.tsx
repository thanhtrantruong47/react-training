import { ChangeEvent, useState } from 'react';
import styles from './numberInput.module.css';
import PlusIcon from '../Icon/PlusIcon';
import MinusIcon from '../Icon/MinusIcon';
import Input from '../Input/Input';

interface NumberInputProps {
  defaultValue: number;
}

const NumberInput = ({ defaultValue }: NumberInputProps) => {
  const [quantity, setQuantity] = useState(defaultValue);

  const increment = () => {
    setQuantity(prevValue => prevValue + 1);
  };

  const decrement = () => {
    setQuantity(prevValue => (prevValue > 0 ? prevValue - 1 : 1));
  };

  const quantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);

    if (!isNaN(newValue) && newValue >= 1) {
      setQuantity(newValue);
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={decrement}
        disabled={quantity <= 1 ? true : false}>
        <MinusIcon />
      </button>
      <Input
        className={styles.quantity}
        type="number"
        value={quantity}
        onChange={quantityChange}
      />
      <button className={styles.button} onClick={increment}>
        <PlusIcon />
      </button>
    </div>
  );
};

export default NumberInput;
