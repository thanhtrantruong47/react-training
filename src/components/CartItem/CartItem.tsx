import styles from './cartItem.module.css';
import { default as styleUtils } from 'styles/modules/utils.module.css';
import { NumberInput, DeleteIcon, Button, Loading } from 'components';
import { useState } from 'react';
import unAvailableImage from 'assets/images/no-image.jpg';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleQuantityChange = (newQuantity: number) => {
    setAmountOfProduct(newQuantity);
    onQuantityChange(id, newQuantity);
  };

  const handleClick = () => {
    setIsLoading(true);
    onChangeDelete(id);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {isLoading ? (
        <div className={styles.loadingOverlay}>
          <Loading classStyle={styleUtils.loading} />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={`${styleUtils.flexCenter} ${styles.group}`}>
            <div className={`${styleUtils.flexCenter} ${styles.groupImage}`}>
              <img
                className={styles.image}
                src={image}
                alt={title}
                onError={e => (e.currentTarget.src = unAvailableImage)}
              />
              <div className={styles.option}>
                <p className={styles.mainTitle}>{title}</p>
                <p className={styles.desc}>Color: {color.charAt(0).toUpperCase() + color.slice(1)}</p>
              </div>
            </div>
            <div className={`${styleUtils.flexCenter} ${styles.info}`}>
              <div className={styles.option}>
                <p className={styles.title}>${price} USD</p>
                <p className={styles.desc}>Price</p>
              </div>
              <div className={styles.option}>
                <p className={styles.title}>{stock}</p>
                <p className={styles.desc}>In Stock</p>
              </div>
              <Button onClick={handleClick} className={styles.button} icon={DeleteIcon} disabled={isLoading} />
            </div>
          </div>
          <div className={`${styleUtils.flexCenter} ${styles.quantity}`}>
            <NumberInput value={amountOfProduct} onChange={handleQuantityChange} maxValue={stock} />
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
