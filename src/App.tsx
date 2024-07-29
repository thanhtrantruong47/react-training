import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import { CartProvider } from './hook/CartContext';
import { ToastProvider } from './hook/ToastContext';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
