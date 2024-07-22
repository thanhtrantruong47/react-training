import { useState } from 'react';
import styles from './productDetail.module.css';
import utils from '../../styles/modules/utils.module.css';
import StarIcon from '../Icon/StarIcon';
import StockIcon from '../Icon/StockIcon';
import RadioGroup from '../Radio/Radio';
import ProductImages from '../ProductImages/ProductImages';
import NumberInput from '../NumberInput/NumberInput';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import CartButton from '../Icon/CartButton';
import { formatNumberCompact } from '../../utils/formatNumberCompact';

export interface ProductDetailProps {
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

const ProductDetail: React.FC<ProductDetailProps> = ({
  images,
  title,
  description,
  price,
  colors,
  sizes,
  stock,
  rate,
  numberRating,
}: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(sizes.length > 0 ? sizes[0] : null);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className={styles.container}>
      <ProductImages images={images} title={title} />
      <div className={styles.info}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{description}</p>
          <div className={styles.rateGroup}>
            <div className={styles.rate}>
              {Array.from({ length: rate }).map((_, index) => (
                <StarIcon key={`${title}_${index}`} />
              ))}
            </div>
            <p>({formatNumberCompact(numberRating)})</p>
          </div>
        </div>
        <div className={styles.groupOption}>
          <div className={`${utils.flexCenter} ${styles.group}`}>
            <div>
              <p className={styles.option}>Color</p>
              <RadioGroup options={colors} />
            </div>
            <div className={styles.stock}>
              <p>In Stock</p>
              <span className={utils.flexCenter}>
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
                  className={`${utils.pointer} ${styles.size} ${selectedSize === size ? styles.selected : ''}`}
                  onClick={() => handleSizeClick(size)}>
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className={styles.option}>Quantity</p>
          <div className={`${utils.flexCenter} ${styles.group}`}>
            <NumberInput defaultValue={1} />
            <p className={styles.price}>${price} USD</p>
          </div>
        </div>
        <div className={`${utils.flexCenter} ${styles.group}`}>
          <Button content="Add to Cart" classStyle={`${styles.btn} ${styles.add}`} />
          <Link to={'/cart'}>
            <Button classStyle={`${styles.btn} ${styles.cart}`} icon={CartButton} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
