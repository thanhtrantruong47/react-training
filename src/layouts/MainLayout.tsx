// MainLayout.tsx
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
  bannerContent?: React.ReactNode; // Define bannerContent as a prop
}

const MainLayout: React.FC<LayoutProps> = ({ children, bannerContent }) => {
  return (
    <>
      <Header />
      {bannerContent}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
