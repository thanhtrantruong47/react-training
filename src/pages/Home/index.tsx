import HeroSection from '../../components/HeroSection/HeroSection';
import ProductList from '../../components/ProductList/ProductList';
import MainLayout from '../../layouts/MainLayout';
import images from '../../assets/images/jacket.jpg';
import { Product } from '../../types/product';
import styles from './home.module.css';
import TabList from '../../components/TabList/TabList';

const Products: Product[] = [
  {
    id: 1,
    title: 'Blue T-Shirt',
    price: 14,
    images: [images],
    colors: ['blue', 'white'],
    sizes: ['S', 'M', 'L'],
    description: 'Comfortable blue T-shirt',
    stock: 45,
    rate: 31,
    numberRating: 2,
    category: 'T-Shirt',
  },
  {
    id: 2,
    title: 'Premium T-Shirt',
    price: 61,
    images: [images],
    colors: ['black', 'gray'],
    sizes: ['S', 'M', 'L'],
    description: 'High-quality premium T-shirt',
    stock: 83,
    rate: 99,
    numberRating: 4,
    category: 'T-Shirt',
  },
  {
    id: 3,
    title: 'Casual T-Shirt',
    price: 40,
    images: [images],
    colors: ['green', 'red'],
    sizes: ['S', 'M', 'L'],
    description: 'Casual everyday T-shirt',
    stock: 6,
    rate: 73,
    numberRating: 3,
    category: 'T-Shirt',
  },
  {
    id: 4,
    title: 'Basic T-Shirt',
    price: 3,
    images: [images],
    colors: ['yellow', 'purple'],
    sizes: ['S', 'M', 'L'],
    description: 'Basic affordable T-shirt',
    stock: 43,
    rate: 78,
    numberRating: 4,
    category: 'T-Shirt',
  },
  {
    id: 5,
    title: 'Stylish T-Shirt',
    price: 63,
    images: [images],
    colors: ['orange', 'brown'],
    sizes: ['S', 'M', 'L'],
    description: 'Stylish designer T-shirt',
    stock: 87,
    rate: 37,
    numberRating: 4,
    category: 'T-Shirt',
  },
  {
    id: 6,
    title: 'Classic Jeans',
    price: 63,
    images: [images],
    colors: ['blue', 'black'],
    sizes: ['S', 'M', 'L'],
    description: 'Classic denim jeans',
    stock: 87,
    rate: 37,
    numberRating: 4,
    category: 'Jeans',
  },
  {
    id: 7,
    title: 'Sporty T-Shirt',
    price: 63,
    images: [images],
    colors: ['gray', 'navy'],
    sizes: ['S', 'M', 'L'],
    description: 'Sporty performance T-shirt',
    stock: 87,
    rate: 37,
    numberRating: 4,
    category: 'T-Shirt',
  },
  {
    id: 8,
    title: 'Graphic T-Shirt',
    price: 63,
    images: [images],
    colors: ['red', 'pink'],
    sizes: ['S', 'M', 'L'],
    description: 'Creative graphic print T-shirt',
    stock: 87,
    rate: 37,
    numberRating: 4,
    category: 'T-Shirt',
  },
];

const navItems = ['T-Shirt', 'Jacket  ', 'Shirt', 'Jens'];

const Home = () => {
  return (
    <MainLayout bannerContent={<HeroSection />}>
      <section className={styles.container}>
        <div className={styles.head}>
          <h3>CHOOSE FROM THE BEST PRODUCTS</h3>
          <h2>Our Best Seller </h2>
          <TabList listNavItems={navItems} onChangeTab={() => {}} />
        </div>
        <ProductList products={Products} onClick={() => {}} />
      </section>
    </MainLayout>
  );
};

export default Home;
