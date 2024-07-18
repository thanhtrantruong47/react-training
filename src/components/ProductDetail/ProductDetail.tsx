import styles from './productDetail.module.css';
import StarIcon from '../Icon/StarIcon';
import utils from '../../styles/modules/utils.module.css';
import StockIcon from '../Icon/StockIcon';
import { formatNumberCompact } from '../../utils/formatNumberCompact';
import RadioGroup from '../Radio/Radio';
import ProductImages from '../ProductImages/ProductImages';
import NumberInput from '../NumberInput/NumberInput';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import CartButton from '../Icon/CartButton';

interface ProductDetailProps {
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

const ProductDetail = ({
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
  return (
    <div className={styles.container}>
      <ProductImages images={images} title={title} />
      <div className={styles.info}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{description}</p>
        </div>
        <div className={styles.rateGroup}>
          <div className={styles.rate}>
            {Array.from({ length: rate }).map((_, index) => (
              <StarIcon key={`${title}_${index}`} />
            ))}
          </div>
          <p>({formatNumberCompact(numberRating)})</p>
        </div>
        <div className={styles.groupOption}>
          <div className={`${utils.flexCenter} ${styles.group}`}>
            <RadioGroup options={colors} />
            <div className={styles.stock}>
              <p>In Stock: </p>
              <span className={utils.flexCenter}>
                ({stock}) <StockIcon />
              </span>
            </div>
          </div>
          {sizes.map(size => (
            <span key={size}>{size}</span>
          ))}
        </div>
        <div>
          <p className={`${styles.option} ${styles.quantity}`}>Quantity</p>
          <div className={`${utils.flexCenter} ${styles.group}`}>
            <NumberInput defaultValue={1} />
            <p className={styles.price}>${price} USD</p>
          </div>
        </div>
        <div className={`${utils.flexCenter} ${styles.group}`}>
          <Button content="Add to Cart" className={`${styles.btn} ${styles.add} ${utils.pointer}`} />
          <Link to={'/cart'}>
            <Button className={`${styles.btn} ${styles.cart} ${utils.pointer}`} icon={CartButton} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
