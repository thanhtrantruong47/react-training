import { useState } from 'react';
import styles from './productImages.module.css';

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
        src={images ? images[activeIndex] : ''}
        alt={images[activeIndex]}
      />
      <ul className={styles.imageGruop}>
        {images.map((image, index) => (
          <li key={index}>
            <img
              className={`${styles.image} ${index === activeIndex ? styles.imageActive : ''}`}
              src={image}
              alt={`Product ${index + 1}`}
              style={{ maxWidth: '100px', maxHeight: '100px' }}
              onClick={() => handleImageClick(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductImages;
