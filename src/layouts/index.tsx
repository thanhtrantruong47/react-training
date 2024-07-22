import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './layouts.module.css';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
