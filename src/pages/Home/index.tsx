import HeroSection from '../../components/HeroSection/HeroSection';
import ProductList from '../../components/ProductList/ProductList';
import MainLayout from '../../layouts/MainLayout';
import { Product } from '../../types/product';
import styles from './home.module.css';
import TabList from '../../components/TabList/TabList';
import { useEffect, useState } from 'react';
import ProductAPIService from '../../services/ProductAPIService';
import utils from '../../styles/modules/utils.module.css';
import Loading from '../../components/Loading';

const navItems = ['T-Shirt', 'Jacket', 'Shirt', 'Jeans'];
const productsPerPage = 8;

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [tab, setTab] = useState('T-Shirt');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const productService = new ProductAPIService();
      const response = await productService.getList({ category: tab });

      if (response.isSuccess && response.data !== undefined) {
        setIsLoading(false);
        setProducts(response.data.slice(0, productsPerPage)); // Initially load first page
        setCurrentPage(1); // Reset current page
        setHasMore(response.data.length > productsPerPage); // Check if there are more products
      } else {
        console.error('Failed to fetch products:', response.errors);
        setIsLoading(true);
      }
    };

    fetchData();
  }, [tab]);

  const handleTabChange = (item: string) => {
    setTab(item);
    setCurrentPage(1); // Reset page when tab changes
    console.log('Selected tab:', item);
  };

  const handleLoadMore = async () => {
    const productService = new ProductAPIService();
    const response = await productService.getList({ category: tab });

    if (response.isSuccess && response.data !== undefined) {
      const newProducts = response.data.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
      setProducts([...products, ...newProducts]);
      setCurrentPage(currentPage + 1);
      setHasMore(response.data.length > (currentPage + 1) * productsPerPage); // Check if there are more products
    } else {
      console.error('Failed to fetch more products:', response.errors);
    }
  };

  return (
    <MainLayout bannerContent={<HeroSection />}>
      <section className={`${utils.container} ${styles.section}`}>
        <div className={`${utils.flexCenter} ${styles.head}`}>
          <h3>choose from the best products</h3>
          <h2>our best seller</h2>
          <TabList listNavItems={navItems} onChangeTab={handleTabChange} />
        </div>
        {isLoading ? (
          <Loading classStyle={utils.loading} />
        ) : (
          <>
            <ProductList products={products} onClick={handleLoadMore} hasMore={hasMore} />
          </>
        )}
      </section>
    </MainLayout>
  );
};

export default Home;
