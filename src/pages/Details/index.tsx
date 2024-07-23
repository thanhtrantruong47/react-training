import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { Product } from '../../types/product';
import ProductList from '../../components/ProductList/ProductList';
import styles from './detail.module.css';
import MainLayout from '../../layouts/MainLayout';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductAPIService from '../../services/ProductAPIService';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumbs';

const productsPerPage = 8;

const Details = () => {
  const { id } = useParams(); // Assuming id is passed as a route parameter

  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * Fetches the product details by ID.
   * Updates the product state with the fetched product.
   * This effect runs whenever the `id` state changes.
   */
  useEffect(() => {
    const fetchData = async () => {
      const productService = new ProductAPIService();
      const response = await productService.getById(`${id}`);

      if (response.isSuccess && response.data !== undefined) {
        setProduct(response.data); // Set the fetched product details
        console.log(response.data);
      } else {
        console.error('Failed to fetch product details:', response.errors);
      }
    };

    fetchData();
  }, [id]); // Dependency array with 'id' to refetch data when ID changes

  /**
   * Fetches products from the server based on the category of the current product.
   * Updates the products list and loading state.
   * This effect runs whenever the `product` state changes.
   */
  useEffect(() => {
    if (!product) return;

    const fetchData = async () => {
      setIsLoading(true); // Start loading

      const productService = new ProductAPIService();
      const response = await productService.getList({ category: product.category || '' });

      if (response.isSuccess && response.data !== undefined) {
        setIsLoading(false); // Stop loading
        setProducts(response.data.slice(0, productsPerPage)); // Initially load first page of products
      } else {
        console.error('Failed to fetch products:', response.errors);
        setIsLoading(false); // Stop loading if fetch fails
      }
    };

    fetchData();
  }, [product]); // Dependency array with 'product' to refetch data when product changes

  /**
   * Handles the load more event to fetch additional products.
   * Appends the new products to the existing product list and increments the current page.
   */
  const handleLoadMore = async () => {
    if (!product) return;

    const productService = new ProductAPIService();
    const response = await productService.getList({ category: product.category || '' });

    if (response.isSuccess && response.data !== undefined) {
      // Calculate new products to add based on current page
      const newProducts = response.data.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
      setProducts([...products, ...newProducts]); // Append new products to existing list
      setCurrentPage(currentPage + 1); // Increment current page
    } else {
      console.error('Failed to fetch more products:', response.errors);
    }
  };

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
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <ProductList products={products} onClick={handleLoadMore} />
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
