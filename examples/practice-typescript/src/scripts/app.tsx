import Input from 'components/Input';
import Logo from 'components/Logo/Logo';
import SideBar from 'components/SideBar';
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
      <Input typeInput="search" styleClass="search" typeClass='search-icon' placeholder="Search all" />
      <div>
        <Logo />
      </div>
      <div>
        <SideBarMenu menuItems={MenuItems} />
      </div>
      <div>
        <SideBar />
      </div>
    </>
  );
};

export default App;
