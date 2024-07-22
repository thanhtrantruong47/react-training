import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { Product } from '../../types/product';
import smallTShirtImage from '../../assets/images/detail-small.jpg';
import tShirt from '../../assets/images/small-t-shirt.jpg';
import images from '../../assets/images/jacket.jpg';
import ProductList from '../../components/ProductList/ProductList';
import styles from './detail.module.css';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumbs';
import Layout from '../Layout';

// example data
const productDetailData = {
  id: 1,
  images: [smallTShirtImage, tShirt, smallTShirtImage],
  title: 'Smart T-Shirt',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.',
  price: 40,
  colors: ['Black', 'Blue', 'Green'],
  sizes: ['S', 'M', 'L'],
  stock: 50,
  rate: 4,
  numberRating: 55555,
};

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

const breadcrumbItems = [
  { label: 'Home', url: '/' },
  { label: 'Shop', url: '/shop' },
  { label: productDetailData.title },
];

// example data end

const Details = () => {
  return (
    <Layout>
      <div>
        <Breadcrumb listItems={breadcrumbItems} />
        <div className={styles.product}>
          <ProductDetail {...productDetailData} />
        </div>
        <div className={styles.list}>
          <p className={styles.title}>Same Product</p>
          <ProductList products={Products} onClick={() => {}} />
        </div>
      </div>
    </Layout>
  );
};

export default Details;
