import { RouterProvider } from 'react-router-dom';
import router from './routers';
import { useEffect } from 'react';
import ProductAPIService from './services/ProductAPIService';

const App = () => {
  // example start
  const productAPIService = new ProductAPIService();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await productAPIService.getById('1');

      if (response.error) {
        console.log('no data');
      } else {
        console.log('Products:', response.data);
      }
    };

    fetchProducts();
  }, []);
  // example end

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
