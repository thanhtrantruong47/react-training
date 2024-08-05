import { useState } from 'react';
import styles from './heroCarousel.module.css';
import { PrevIcon, NextIcon, Button } from '@/components';
import { ImagesCarousel } from '@/types/carousel';
import unAvailableImage from '@/assets/images/no-image.jpg';

interface HeroCarousel {
  imagesCarousel: ImagesCarousel[];
}

const HeroCarousel = ({ imagesCarousel }: HeroCarousel) => {
  const [mainImage, setMainImage] = useState(0);
  const handleClick = (index: number) => {
    setMainImage(index);
  };

  // If index ===  images.length - 1 when click index = 0
  const handleNext = () => {
    if (mainImage === imagesCarousel.length - 1) {
      setMainImage(0);
    } else {
      setMainImage(mainImage + 1);
    }
  };

  // If index ===  0 when click index = images.length - 1
  const handlePrev = () => {
    if (mainImage === 0) {
      setMainImage(imagesCarousel.length - 1);
    } else {
      setMainImage(mainImage - 1);
    }
  };

  return (
    <div className={styles.heroCarousel}>
      <div>
        <img
          className={styles.mainImage}
          src={imagesCarousel[mainImage].src}
          alt={`Image ${mainImage}`}
          onError={e => (e.currentTarget.src = unAvailableImage)}
        />
      </div>
      <div className={styles.thumbnailList}>
        <Button icon={PrevIcon} className={styles.buttonLeft} onClick={handlePrev} />
        <div className={styles.thumbnail}>
          {imagesCarousel.map((imageCarousel, index) => (
            <img
              key={imageCarousel.id}
              src={imageCarousel.src}
              alt={`Thumbnail ${index}`}
              className={index === mainImage ? styles.active : ''}
              onClick={() => handleClick(index)}
              onError={e => (e.currentTarget.src = unAvailableImage)}
            />
          ))}
        </div>
        <Button icon={NextIcon} className={styles.buttonRight} onClick={handleNext} />
      </div>
    </div>
  );
};

export default HeroCarousel;
