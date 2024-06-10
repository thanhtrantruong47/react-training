import Logo from 'components/Logo/Logo';
import SideBarMenu from 'components/SideBarMenu';
import TableHeader from 'components/TableHeader ';

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
      <TableHeader />
    </>
  );
};

export default App;
