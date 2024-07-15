import utils from '../../styles/modules/utils.module.css';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import StarIcon from '../Icon/StarIcon';
import styles from './productCart.module.css';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  ratingNumbers: number;
}

const formatRating = (rating: number): string => {
  if (rating >= 1000000) {
    return `${(rating / 1000000).toFixed(1)}m`;
  } else if (rating >= 1000) {
    // Adjust the logic to round to one decimal place and handle cases like 9999
    const roundedRating = Math.floor(rating / 100) / 10; // Divide by 1000 and round to one decimal place
    return `${roundedRating.toFixed(1)}k`;
  } else {
    return `${rating}`;
  }
};

const ProductCard = ({
  image,
  title,
  price,
  description,
  rating,
  ratingNumbers,
}: ProductCardProps) => (
  <div className={styles.product}>
    <div className={`${styles.imageGroup} ${utils.relative}`}>
      <img className={styles.productImage} src={image} alt={title} />
      <SelectedProduct />
    </div>
    <div className={styles.group}>
      <div className={`${styles.nameGroup} ${utils.flexCenter}`}>
        <p>{title}</p>
        <span>{price}$</span>
      </div>
      <p className={styles.desc}>{description}</p>
      <div className={`${styles.ratingGroup} ${utils.flexCenter}`}>
        <div className={`${styles.numberRating} ${utils.flexCenter}`}>
          {Array.from({ length: ratingNumbers }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <p>{`(${formatRating(rating)})`}</p>
      </div>
    </div>
  </div>
);

export default ProductCard;
