// MainLayout.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './mainLayout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
