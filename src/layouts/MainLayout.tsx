import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './mainLayout.module.css';
interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
