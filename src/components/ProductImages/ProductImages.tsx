import { useState } from 'react';
import styles from './productImages.module.css';
import { default as styleUtils } from 'styles/modules/utils.module.css';
import unAvailableImage from 'assets/images/no-image.jpg';

interface ProductImagesProps {
  productImages: string[];
  title: string;
}

const ProductImages = ({ productImages, title }: ProductImagesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerImage}>
        <img
          className={styles.detailImage}
          src={productImages[activeIndex]}
          onError={e => (e.currentTarget.src = unAvailableImage)}
          alt={`${title} image ${productImages[activeIndex]}`}
        />
      </div>

      <ul className={styles.imageGroup}>
        {productImages.slice(0, 3).map((image, index) => (
          <li
            key={`${image}${index}`}
            className={`${styleUtils.pointer} ${index === activeIndex ? styles.imageActive : ''}`}
            onClick={() => handleImageClick(index)}>
            <img
              className={styles.image}
              src={image}
              alt={`${title} image ${index + 1}`}
              onError={e => (e.currentTarget.src = unAvailableImage)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductImages;
