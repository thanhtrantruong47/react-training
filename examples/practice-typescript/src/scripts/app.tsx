import Logo from 'components/Logo/Logo';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';
import SideBarMenuItem, {
  SideBarMenuItemProps,
} from 'components/SideBarMenuItem/SideBarMenuItem';

const MENU: SideBarMenuItemProps[] = [
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
      <SideBarMenuItem
        id={'3'}
        text={'tesst'}
        router={'home'}
        isActive={true}
      />
      <SideBarMenu sideBarMenuItemProps={MENU} />
    </>
  );
};

export default App;
