import { RouterProvider } from 'react-router-dom';
import router from './routers';
import Logo from './components/Logo';
import './styles/index.css';

const App = () => {
  return (
    <>
      <Logo />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
