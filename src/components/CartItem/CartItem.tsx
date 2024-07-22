import styles from './cartItem.module.css';
import utils from '../../styles/modules/utils.module.css';
import NumberInput from '../NumberInput/NumberInput';
import DeleteIcon from '../Icon/DeleteIcon';
import Button from '../Button/Button';

interface CartItemProps {
  image: string;
  title: string;
  price: number;
  color: string;
  quantity: number;
  stock: number;
}

const CartItem = ({ image, title, price, color, quantity, stock }: CartItemProps) => (
  <div className={styles.container}>
    <div className={`${utils.flexCenter} ${styles.group}`}>
      <img className={styles.image} src={image} alt={image} />
      <div className={styles.option}>
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>Color: {color.charAt(0).toUpperCase() + color.slice(1)}</p>
      </div>
      <div className={styles.option}>
        <p className={styles.title}>${price} USD</p>
        <p className={styles.desc}>Price</p>
      </div>
      <div className={styles.option}>
        <p className={styles.title}>{stock}</p>
        <p className={styles.desc}>In Stock</p>
      </div>
      <Button onClick={() => {}} className={styles.button} icon={DeleteIcon} />
    </div>
    <div className={`${utils.flexCenter} ${styles.quantity}`}>
      <NumberInput defaultValue={quantity} />
    </div>
  </div>
);

export default CartItem;
