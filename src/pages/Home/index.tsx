import HeroSection from '../../components/HeroSection/HeroSection';
import ProductList from '../../components/ProductList/ProductList';
import MainLayout from '../../layouts/MainLayout';
import styles from './home.module.css';
import TabList from '../../components/TabList/TabList';
import { useState } from 'react';
import { default as styleUtils } from '../../styles/modules/utils.module.css';
import { BEST_SELLER_CATEGORY } from '../../constants';
import { useProducts } from '../../hook/useProducts';
import Loading from '../../components/Loading/Loading';

const Home = () => {
  const [tab, setTab] = useState('T-Shirt');
  const { products, isLoading, onLoadMore, isHasMore } = useProducts(tab);

  const handleTabChange = (item: string) => {
    setTab(item);
  };

  return (
    <MainLayout>
      <HeroSection />
      <section className={`${styleUtils.container} ${styles.section}`}>
        <div className={`${styleUtils.flexCenter} ${styles.head}`}>
          <h3>Choose from the best products</h3>
          <h2>Our Best Seller</h2>
          <TabList items={BEST_SELLER_CATEGORY} onChangeTab={handleTabChange} />
        </div>
        {isLoading ? (
          <Loading classStyle={styleUtils.loading} />
        ) : (
          <>
            {products.length === 0 ? (
              <p className={styles.noProducts}>No products available in this category.</p>
            ) : (
              <ProductList products={products} onClick={onLoadMore} hasMore={isHasMore} />
            )}
          </>
        )}
      </section>
    </MainLayout>
  );
};

export default Home;
