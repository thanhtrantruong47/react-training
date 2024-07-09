import { RouterProvider } from 'react-router-dom';
import router from './routers';
import NavBarItem from './components/NavBarItem/NavBarItem';

const App = () => {
  return (
    <>
      <NavBarItem label="Home" destination="/" isActive={true} />
      <NavBarItem label="Home" destination="/" isActive={false} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
