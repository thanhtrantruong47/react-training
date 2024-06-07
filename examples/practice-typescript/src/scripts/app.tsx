import Logo from 'components/Logo/Logo';
import SideBarMenu from 'components/SideBarMenu';
import SideBarMenuItem, {
  SideBarMenuItemProps,
} from 'components/SideBarMenuItem';

const MenuItems: SideBarMenuItemProps[] = [
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
];

const App = () => {
  return (
    <>
      <Logo />
      <SideBarMenuItem id="3" text="test" router="home" isActive={true} />
      <SideBarMenu sideBarMenuItemLitsProps={MenuItems} />
    </>
  );
};

export default App;
