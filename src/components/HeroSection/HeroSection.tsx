import { LIST_IMAGES_CAROUSEL } from '../../constants';
import Button from '../Button/Button';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import styles from './heroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.title}>Get the Latest Dress Models From Us</p>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum
          mi sed sem finibus ullamcorper
        </p>
        <div className={styles.buttonContainer}>
          <Button classStyle={styles.button} content="Shop now" />
        </div>
      </div>
      <HeroCarousel images={LIST_IMAGES_CAROUSEL} />
    </div>
  );
};

export default HeroSection;
