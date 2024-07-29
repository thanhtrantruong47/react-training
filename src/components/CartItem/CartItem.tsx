import styles from './cartItem.module.css';
import { default as utils } from '../../styles/modules/utils.module.css';
import NumberInput from '../NumberInput/NumberInput';
import DeleteIcon from '../Icon/DeleteIcon';
import Button from '../Button/Button';
import { useState } from 'react';
import unAvailableImage from '../../assets/images/no-image.jpg';

interface CartItemProps {
  id: string;
  image: string;
  title: string;
  price: number;
  color: string;
  quantity: number;
  stock: number;
  onQuantityChange: (id: string, quantity: number) => void;
  onChangeDelete: (id: string) => void;
}

const CartItem = ({
  id,
  image,
  title,
  price,
  color,
  quantity,
  stock,
  onQuantityChange,
  onChangeDelete,
}: CartItemProps) => {
  const [amountOfProduct, setAmountOfProduct] = useState<number>(quantity);

  const handleQuantityChange = (newQuantity: number) => {
    setAmountOfProduct(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  return (
    <div className={styles.container}>
      <div className={`${utils.flexCenter} ${styles.group}`}>
        <div className={`${utils.flexCenter} ${styles.groupImage}`}>
          <img
            className={styles.image}
            src={image}
            alt={image}
            onError={e => (e.currentTarget.src = unAvailableImage)}
          />
          <div className={styles.option}>
            <p className={`${styles.mainTitle}`}>{title}</p>
            <p className={styles.desc}>Color: {color.charAt(0).toUpperCase() + color.slice(1)}</p>
          </div>
        </div>
        <div className={`${utils.flexCenter} ${styles.info}`}>
          <div className={styles.option}>
            <p className={styles.title}>${price} USD</p>
            <p className={styles.desc}>Price</p>
          </div>
          <div className={styles.option}>
            <p className={styles.title}>{stock}</p>
            <p className={styles.desc}>In Stock</p>
          </div>
          <Button onClick={() => onChangeDelete(id)} className={styles.button} icon={DeleteIcon} />
        </div>
      </div>
      <div className={`${utils.flexCenter} ${styles.quantity}`}>
        <NumberInput value={amountOfProduct} onChange={handleQuantityChange} />
      </div>
    </div>
  );
};

export default CartItem;
