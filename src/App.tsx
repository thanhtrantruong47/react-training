import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Order from './pages/Order';
import Button from './components/Button/Button';
import LikedIcon from './components/Icon/LikedIcon';
import styles from './app.module.css';
import RadioGruop from './components/Radio/Radio';

const colorOptions = ['red', 'green', 'blue'];

const App = () => {
  return (
    <BrowserRouter>
      {/* code exmaple start */}
      <RadioGruop options={colorOptions} />
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
