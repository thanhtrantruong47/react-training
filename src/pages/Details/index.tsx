import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { Product } from '../../types/product';
import images from '../../assets/images/jacket.jpg';
import ProductList from '../../components/ProductList/ProductList';
import styles from './detail.module.css';
import MainLayout from '../../layouts/MainLayout';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductAPIService from '../../services/ProductAPIService';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumbs';
// example data

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
    rate: 5,
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
    rate: 5,
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
    rate: 5,
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
    rate: 5,
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
    rate: 5,
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
    rate: 5,
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
    rate: 5,
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
    rate: 5,
    numberRating: 4,
    category: 'T-Shirt',
  },
];
// example data end

const Details = () => {
  const { id } = useParams(); // Assuming id is passed as a route parameter

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Fetch the product details by ID
    const fetchData = async () => {
      const productService = new ProductAPIService();
      const response = await productService.getById(`${id}`);

      if (response.isSuccess && response.data !== undefined) {
        setProduct(response.data); // Initially load first page
        console.log(response.data);
      } else {
        console.error('Failed to fetch products:', response.errors);
      }
    };

    fetchData();
  }, [id]);

  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Shop', url: '/shop' },
    { label: product?.title || '' },
  ];

  return (
    <MainLayout>
      <div>
        <Breadcrumb listItems={breadcrumbItems} />
        <div className={styles.product}>
          {product && (
            <ProductDetail
              colors={product.colors || []}
              description={product.description || ''}
              images={product.images || []}
              numberRating={product.numberRating || 0}
              price={product.price || 0}
              rate={product.rate || 0}
              sizes={product.sizes || []}
              stock={product.stock || 0}
              title={product.title || ''}
            />
          )}
        </div>
        <div className={styles.list}>
          <p className={styles.title}>Same Product</p>
          <ProductList products={Products} onClick={() => {}} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
