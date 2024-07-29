import HeroSection from '../../components/HeroSection/HeroSection';
import ProductList from '../../components/ProductList/ProductList';
import MainLayout from '../../layouts/MainLayout';
import { Product } from '../../types/product';
import styles from './home.module.css';
import TabList from '../../components/TabList/TabList';
import { useEffect, useState } from 'react';
import { default as utils } from '../../styles/modules/utils.module.css';
import { TAB_LIST } from '../../constants';
import { ProductAPIService } from '../../services/ProductAPIService';
import Loading from '../../components/Loading';
import { products as mockProducts } from '../../mock/products';

const productsPerPage = 8;

const useMockData = import.meta.env.USE_MOCK_FOR_API_FAIL;

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [tab, setTab] = useState('T-Shirt');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const fetchProducts = async (category: string, page: number) => {
    if (!useMockData) {
      const response = await ProductAPIService.getList({ category });

      if (response.isSuccess && response.data !== undefined) {
        return {
          data: response.data.slice(page * productsPerPage, (page + 1) * productsPerPage),
          total: response.data.length,
        };
      } else {
        const filteredProducts = mockProducts.filter(product => product.category === category);
        return {
          data: filteredProducts.slice(page * productsPerPage, (page + 1) * productsPerPage),
          total: filteredProducts.length,
        };
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await fetchProducts(tab, 0);
      if (!result) return;
      setProducts(result.data);
      setCurrentPage(1);
      setHasMore(result.total > productsPerPage);

      setIsLoading(false);
    };

    fetchData();
  }, [tab]);

  const handleTabChange = (item: string) => {
    setTab(item);
    setCurrentPage(1); // Reset page when tab changes
  };

  const handleLoadMore = async () => {
    if (!hasMore) return; // If no more products to load

    const result = await fetchProducts(tab, currentPage);
    if (!result) return;
    setProducts([...products, ...result.data]);
    setCurrentPage(currentPage + 1);
    setHasMore(result.total > (currentPage + 1) * productsPerPage);
  };

  return (
    <MainLayout bannerContent={<HeroSection />}>
      <section className={`${utils.container} ${styles.section}`}>
        <div className={`${utils.flexCenter} ${styles.head}`}>
          <h3>Choose from the best products</h3>
          <h2>Our Best Seller</h2>
          <TabList listNavItems={TAB_LIST} onChangeTab={handleTabChange} />
        </div>
        {isLoading ? (
          <Loading classStyle={utils.loading} />
        ) : (
          <>
            {products.length === 0 ? (
              <p className={styles.noProducts}>No products available in this category.</p>
            ) : (
              <ProductList products={products} onClick={handleLoadMore} hasMore={hasMore} />
            )}
          </>
        )}
      </section>
    </MainLayout>
  );
};

export default Home;
