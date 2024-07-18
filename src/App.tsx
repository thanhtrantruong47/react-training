import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Order from './pages/Order';
import Button from './components/Button/Button';
import LikedIcon from './components/Icon/LikedIcon';
import styles from './app.module.css';

const App = () => {
  return (
    <BrowserRouter>
      {/* code exmaple start */}
      <Button classStyle={styles.like} icon={LikedIcon} />
      {/* code exmaple end */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
