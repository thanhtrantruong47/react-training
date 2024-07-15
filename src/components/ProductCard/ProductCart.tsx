import styles from './productCart.module.css';
import utils from '../../styles/modules/utils.module.css';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import StarIcon from '../Icon/StarIcon';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
  rating: number;
  ratingNumbers: number;
}

const ProductCard = ({
  image,
  title,
  price,
  description,
  rating,
  ratingNumbers,
}: ProductCardProps) => {
  return (
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
          <p>{`(${rating}k)`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
