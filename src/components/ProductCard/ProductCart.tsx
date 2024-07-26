import utils from '../../styles/modules/utils.module.css';
import StarIcon from '../Icon/StarIcon';
import styles from './productCart.module.css';
import { formatNumberCompact } from '../../utils/formatNumberCompact';
import BookMarkIcon from '../Icon/BookMarkIcon';
import LikedIcon from '../Icon/LikedIcon';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  rate: number;
  numberRating: number;
  onChange?: () => void;
}

const ProductCard = ({ id, image, title, price, description, numberRating, rate, onChange }: ProductCardProps) => (
  <Link className={utils.link} to={`/detail/${id}`}>
    <div className={styles.product}>
      <div className={`${styles.imageGroup} ${utils.relative}`}>
        <img className={styles.productImage} src={image} alt={title} />
        <div className={styles.bookMark}>
          <Button className={utils.pointer} aria-label="mark product" icon={BookMarkIcon} onChange={onChange} />
          <Button className={utils.pointer} aria-label="like product" icon={LikedIcon} onChange={onChange} />
        </div>
      </div>
      <div className={styles.group}>
        <div className={`${styles.nameGroup} ${utils.flexCenter}`}>
          <p>{title}</p>
          <span>{price}$</span>
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={`${styles.ratingGroup} ${utils.flexCenter}`}>
          <div className={`${styles.numberRating} ${utils.flexCenter}`}>
            {Array.from({ length: numberRating }).map((_, index) => (
              <StarIcon key={`${title}_${index}`} />
            ))}
          </div>
          <p className={styles.ratingGroup}>({formatNumberCompact(rate)})</p>
        </div>
      </div>
    </div>
  </Link>
);

export default ProductCard;
