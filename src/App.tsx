import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Cart, Order, NotFound, ProductDetail } from '@/pages';
import { CartProvider, ToastProvider } from '@/contexts';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
