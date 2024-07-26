import utils from '../../styles/modules/utils.module.css';
import StarIcon from '../Icon/StarIcon';
import styles from './productCart.module.css';
import { formatNumberCompact } from '../../utils/formatNumberCompact';
import BookMarkIcon from '../Icon/BookMarkIcon';
import LikedIcon from '../Icon/LikedIcon';
import { Link } from 'react-router-dom';
import unAvailableImage from '../../assets/images/no-image.jpg';

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
        <img
          className={styles.productImage}
          src={image}
          onError={e => (e.currentTarget.src = unAvailableImage)}
          alt={title}
        />
        <div className={styles.bookMark}>
          <button aria-label="toggle bookmark" onChange={onChange}>
            <BookMarkIcon />
          </button>
          <button aria-label="toggle liked" onChange={onChange}>
            <LikedIcon />
          </button>
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
