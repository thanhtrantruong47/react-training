import Button from 'components/Button';
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
      <Button text="Add new" style="btn__add" />
      <Button text="Edit" style="btn__action" />
      <Button text="Delete" style="btn__action" />
    </>
  );
};

export default App;
