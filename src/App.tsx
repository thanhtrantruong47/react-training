import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Order from './pages/Order';
import Header from './components/Header/Header';
import Quantity from './components/Quantity/Quantity';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Quantity value={1} onChange={() => {}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Details />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
