import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import Details from '../pages/Details/Details';
import Order from '../pages/Order/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
  {
    path: 'product/:productId',
    element: <Details />,
  },
  {
    path: 'order',
    element: <Order />,
  },
]);

export default router;
