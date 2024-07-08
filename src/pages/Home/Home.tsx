import { useEffect, useState } from 'react';
import ProductService from '../../services';
import { Product } from '../../types/product';

const Home = () => {
  const [product, setProduct] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productService = new ProductService();
        const fetchedProduct = await productService.getProductByCategory('1');
        setProduct(fetchedProduct);
      } catch (err) {
        setError(err.message || 'Failed to fetch product');
      }
    };

    fetchProduct();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <>{console.log(product)}</>;
};

export default Home;
