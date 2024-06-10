import Logo from 'components/Logo/Logo';
import SideBarMenu from 'components/SideBarMenu';
import TableRow from 'components/TableRow';

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
      <TableRow
        email="kim@gmail.com"
        firstName="tran "
        lastName="kim"
        phoneNumber="0132456789"
      />
      <TableRow
        email="123kim@gmail.com"
        firstName="tran "
        lastName="kim"
        phoneNumber="0132456789"
      />
    </>
  );
};

export default App;
