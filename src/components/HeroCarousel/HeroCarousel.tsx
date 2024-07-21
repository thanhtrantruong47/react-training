import { useState } from 'react';
import styles from './heroCarousel.module.css';
import Button from '../Button/Button';
import PrevIcon from '../Icon/PrevIcon';
import NextIcon from '../Icon/NextIcon';

interface ImagesCarosel {
  id: number;
  src: string;
}

interface HeroCarousel {
  images: ImagesCarosel[];
}

const HeroCarousel = ({ images }: HeroCarousel) => {
  const [mainImage, setMainImage] = useState(0); // index of the current main image

  const handleClick = (index: number) => {
    setMainImage(index);
  };

  const handleNext = () => {
    setMainImage(prevIndex => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setMainImage(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.heroCarousel}>
      <div>
        <img className={styles.mainImage} src={images[mainImage].src} alt={`Image ${mainImage}`} />
      </div>
      <div className={styles.thumbnailList}>
        <Button icon={PrevIcon} className={styles.buttonLeft} onClick={handlePrev} />
        <div className={styles.thumbnail}>
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={`Thumbnail ${index}`}
              className={index === mainImage ? styles.active : ''}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <Button icon={NextIcon} className={styles.buttonRight} onClick={handleNext} />
      </div>
    </div>
  );
};

export default HeroCarousel;
