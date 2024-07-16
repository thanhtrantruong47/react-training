import { ChangeEvent, useState } from 'react';
import styles from './quantity.module.css';
import PlusIcon from '../Icon/PlusIcon';
import MinusIcon from '../Icon/MinusIcon';

interface QuantityProp {
  defaultValue: number;
}

const Quantity = ({ defaultValue }: QuantityProp) => {
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
    <div>
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={decrement}
          disabled={quantity <= 1 ? true : false}>
          <MinusIcon />
        </button>
        <input
          className={styles.quantity}
          type="number"
          value={quantity}
          onChange={quantityChange}
        />
        <button className={styles.button} onClick={increment}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
