import { RouterProvider } from 'react-router-dom';
import router from './routers';
import { NavItem } from './types/navBar';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar items={navItems} />
      <RouterProvider router={router} />
    </>
  );
};

const navItems: NavItem[] = [
  { label: 'Home', destination: '/', isActive: true },
  { label: 'Shop', destination: 'javascript:void(0)', isActive: false },
  { label: 'About Us', destination: 'javascript:void(0)', isActive: false },
  { label: 'Contact', destination: 'javascript:void(0)', isActive: false },
];

export default App;
