import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Details from './pages/Details/Details';
import Order from './pages/Order/Order';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Details />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
