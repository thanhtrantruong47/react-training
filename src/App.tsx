import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Order from './pages/Order';
import { SearchIcon } from './components/Icon/SearchIcon';
import styles from './app.module.css';
import Input from './components/SearchInput/SearchInput';

const App = () => {
  return (
    <BrowserRouter>
      {/* code example start */}
      <Input
        inputType="text"
        onChange={() => {}}
        placeholder="Search"
        positionIcon={styles.position}
      >
        <SearchIcon />
      </Input>
      {/* code example end */}

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
