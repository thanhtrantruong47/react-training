import Button from '../Button/Button';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import styles from './heroSection.module.css';
import banner from '../../assets/images/banner.jpg';
import bannerMore from '../../assets/images/banner-more.jpg';

const images = [
  { id: 1, src: banner },
  { id: 2, src: bannerMore },
  { id: 3, src: bannerMore },
];

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2 className={styles.title}>Get the Latest Dress Models From Us</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum
          mi sed sem finibus ullamcorper
        </p>
        <div className={styles.buttonContainer}>
          <Button classStyle={styles.button} content="Shop now" />
        </div>
      </div>
      <HeroCarousel images={images} />
    </section>
  );
};

export default HeroSection;
