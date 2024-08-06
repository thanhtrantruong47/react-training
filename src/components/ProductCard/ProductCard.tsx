import { default as styleUtils } from '@/styles/modules/utils.module.css';
import styles from './productCart.module.css';
import { compactNumber } from '@/utils/compactNumber';
import { Link } from 'react-router-dom';
import unAvailableImage from '@/assets/images/no-image.jpg';
import { Button, StarIcon, BookMarkIcon, LikedIcon } from '@/components';

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
  <Link className={styleUtils.link} to={`/products/${id}`}>
    <div className={styles.product}>
      <div className={`${styles.imageGroup} ${styleUtils.relative}`}>
        <img
          className={styles.productImage}
          src={image}
          onError={e => (e.currentTarget.src = unAvailableImage)}
          alt={title}
        />
        <div className={styles.bookMark}>
          <Button className={styleUtils.pointer} aria-label="mark product" icon={BookMarkIcon} onChange={onChange} />
          <Button className={styleUtils.pointer} aria-label="like product" icon={LikedIcon} onChange={onChange} />
        </div>
      </div>
      <div className={styles.group}>
        <div className={`${styles.nameGroup} ${styleUtils.flexCenter}`}>
          <p className={styles.name}>{title}</p>
          <span>{price}$</span>
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={`${styles.ratingGroup} ${styleUtils.flexCenter}`}>
          <div className={`${styles.numberRating} ${styleUtils.flexCenter}`}>
            {Array.from({ length: numberRating }).map((_, index) => (
              <StarIcon key={`${title}_${index}`} />
            ))}
          </div>
          <p className={styles.ratingGroup}>({compactNumber(rate)})</p>
        </div>
      </div>
    </div>
  </Link>
);

export default ProductCard;
