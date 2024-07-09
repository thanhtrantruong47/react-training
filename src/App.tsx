import { RouterProvider } from 'react-router-dom';
import router from './routers';
import { useEffect } from 'react';
import ProductAPIService from './services/ProductAPIService';

const App = () => {
  // example start
  const productAPIService = new ProductAPIService();

  useEffect(() => {
    const fetchProducts = async () => {
      const params = { category: '3', title: 'title 3' };
      const response = await productAPIService.getList(params);

      if (response.error) {
        console.log(response.error);
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
