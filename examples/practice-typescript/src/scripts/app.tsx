import Input from 'components/Input';
import Logo from 'components/Logo/Logo';
import SideBarMenu from 'components/SideBarMenu';

const MenuItems = [
  {
    id: '1',
    text: 'User management',
    router: '/component.html',
    isActive: true,
  },
  {
    id: '2',
    text: 'Product management',
    router: '/component.html',
    isActive: false,
  },
  {
    id: '2',
    text: '',
    router: '/component.html',
    isActive: false,
  },
];

const App = () => {
  return (
    <>
      <Logo />
      <SideBarMenu sideBarMenuItemLitsProps={MenuItems} />
      <Input type="search" style="search" placeholder="Search all" />
    </>
  );
};

export default App;
