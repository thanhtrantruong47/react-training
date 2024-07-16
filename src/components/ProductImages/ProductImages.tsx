import { useState } from 'react';
import styles from './productImages.module.css';
import utils from '../../styles/modules/utils.module.css';

interface ProductImagesProps {
  images: string[];
}

const ProductImages = ({ images }: ProductImagesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <img
        className={styles.detailImage}
        src={images[activeIndex]}
        alt={images[activeIndex]}
      />
      <ul className={styles.imageGroup}>
        {images.slice(0, 3).map((image, index) => (
          <li
            key={`Image ${index + 1}`}
            className={`${utils.pointer} ${index === activeIndex ? styles.imageActive : ''}`}
            onClick={() => handleImageClick(index)}>
            <img
              className={styles.image}
              src={image}
              alt={`Image ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductImages;
