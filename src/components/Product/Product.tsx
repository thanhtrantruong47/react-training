import { useState } from 'react';
import styles from './product.module.css';
import { default as styleUtils } from '../../styles/modules/utils.module.css';
import StarIcon from '../Icon/StarIcon';
import StockIcon from '../Icon/StockIcon';
import ProductImages from '../ProductImages/ProductImages';
import NumberInput from '../NumberInput/NumberInput';
import Button from '../Button/Button';
import { Link, useParams } from 'react-router-dom';
import CartButton from '../Icon/CartButton';
import { compactNumber } from '../../utils/compactNumber';
import RadioGroup from '../Radio/Radio';
import { CartItem as CartItemType } from '../../types/cartItem';
import { useCart } from '../../hook/CartContext';
import Breadcrumb from '../Breadcrumb/Breadcrumbs';
import { useToast } from '../../hook/ToastContext';
import { BREADCRUMB_ITEMS_DETAIl, MESSAGE_SUCCESS } from '../../constants';

export interface ProductProps {
  images: string[];
  title: string;
  description: string;
  price: number;
  colors: string[];
  sizes: string[];
  stock: number;
  rate: number;
  numberRating: number;
}

const Product: React.FC<ProductProps> = ({
  images,
  title,
  description,
  price,
  colors,
  sizes,
  stock,
  rate,
  numberRating,
}: ProductProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(sizes.length > 0 ? sizes[0] : null);
  const [colorOfProduct, setColorOfProduct] = useState<string>(colors[0]);
  const [sizeOfProduct, setSizeOfProduct] = useState<string>(sizes[0]);
  const [amountOfProduct, setAmountOfProduct] = useState<number>(1);

  const { addToCart } = useCart();
  const { addToast } = useToast(); // Get addToast function

  const { id } = useParams();

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
    setSizeOfProduct(size);
  };

  const handleAddToCart = () => {
    const itemId = `${id} ${title} ${colorOfProduct}`;

    const newItem: CartItemType = {
      image: images[0],
      stock: stock,
      title: title,
      price: price,
      color: colorOfProduct,
      quantity: amountOfProduct,
      id: itemId,
      size: sizeOfProduct,
    };

    addToCart(newItem);
    addToast(MESSAGE_SUCCESS.ADD_TO_CART, true); // Show success toast
  };

  const breadcrumbItems = [...BREADCRUMB_ITEMS_DETAIl, { label: title }];

  return (
    <div className={`${styleUtils.container} ${styles.wrapper}`}>
      <Breadcrumb listItemsBreadcrumb={breadcrumbItems} />
      <div className={styles.detail}>
        <ProductImages productImages={images} title={title} />
        <div className={styles.info}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{description}</p>
            <div className={styles.rateGroup}>
              <div className={styles.rate}>
                {Array.from({ length: numberRating }).map((_, index) => (
                  <StarIcon key={`${title}_${index}`} />
                ))}
              </div>
              <p>({compactNumber(rate)})</p>
            </div>
          </div>
          <div className={styles.groupOption}>
            <div className={`${styleUtils.flexCenter} ${styles.group}`}>
              <div>
                <p className={styles.option}>Color</p>
                <RadioGroup options={colors} onChange={setColorOfProduct} />
              </div>
              <div className={styles.stock}>
                <p>In Stock</p>
                <span className={styleUtils.flexCenter}>
                  ({stock}) <StockIcon />
                </span>
              </div>
            </div>
            <div>
              <p className={styles.option}>Size</p>
              <div className={styles.sizeContainer}>
                {sizes.map(size => (
                  <span
                    key={size}
                    className={`${styleUtils.pointer} ${styles.size} ${selectedSize === size ? styles.selected : ''}`}
                    onClick={() => handleSizeClick(size)}>
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className={styles.option}>Quantity</p>
            <div className={`${styleUtils.flexCenter} ${styles.group}`}>
              <NumberInput value={amountOfProduct} onChange={setAmountOfProduct} />
              <p className={styles.price}>${price} USD</p>
            </div>
          </div>
          <div className={`${styleUtils.flexCenter} ${styles.group}`}>
            <Button content="Add to Cart" classStyle={`${styles.btn} ${styles.add} `} onClick={handleAddToCart} />
            <Link to={'/cart'}>
              <Button classStyle={`${styles.btn} ${styles.cart}`} icon={CartButton} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
