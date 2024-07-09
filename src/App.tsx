import { RouterProvider } from 'react-router-dom';
import router from './routers';
import { useEffect } from 'react';
import ProductAPIService from './services/ProductAPIService';

const App = () => {
  const productAPIService = new ProductAPIService();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await productAPIService.getById('100');
      if (!response.data) {
        console.log('No data');
      } else {
        console.log('Products:', response.data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
