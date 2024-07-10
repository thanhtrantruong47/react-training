import { RouterProvider } from 'react-router-dom';
import router from './routers';
import { useEffect } from 'react';
import ProductAPIService from './services/ProductAPIService';
import NavBar from './components/NavBar/NavBar';
import { NavItem } from './types/navBar';

const App = () => {
  // example start
  const productAPIService = new ProductAPIService();

  useEffect(() => {
    const fetchProducts = async () => {
      const params = { category: '3', title: 'title 30' };
      const response = await productAPIService.getList(params);

      if (!response.isSuccess) {
        console.log(response.errors);
      } else {
        console.log('Products:', response.data);
      }
    };

    fetchProducts();
  }, []);
  // example end

  return (
    <>
      <NavBar items={navItems} />
      <RouterProvider router={router} />
    </>
  );
};

const navItems: NavItem[] = [
  { label: 'Home', destination: '/', isActive: true },
  { label: 'Shop', destination: 'javascript:void(0)', isActive: false },
  { label: 'About Us', destination: 'javascript:void(0)', isActive: false },
  { label: 'Contact', destination: 'javascript:void(0)', isActive: false },
];

export default App;
