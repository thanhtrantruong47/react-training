import { RouterProvider } from 'react-router-dom';
import router from './routers';
import { useEffect } from 'react';
import ProductAPIService from './services/ProductAPIService';
import Header from './components/Header/Header';

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
      <Header />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
