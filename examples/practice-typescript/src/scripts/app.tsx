import Button from 'components/Button';
import Logo from 'components/Logo/Logo';
import SideBar from 'components/SideBar';
import SideBarMenu from 'components/SideBarMenu';
import InputField from 'components/Input';
import TableController from 'components/TableController';
import searchIcon from 'assets/images/managers/icon-search.png';

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
      <div>
        <TableController />
      </div>
      <InputField
        icon={searchIcon}
        typeInput="search"
        description="Search All"
        size="17"
      />
      <Logo />
      <SideBarMenu menuItems={MenuItems} />
      <div>
        <Logo />
      </div>
      <div>
        <SideBarMenu menuItems={MenuItems} />
      </div>
      <div>
        <SideBar />
      </div>
      <div>
        <Button text="Add new" styleClass="btn-add" />
        <Button text="Edit" styleClass="btn-action" />
        <Button text="Delete" styleClass="btn-action" />
      </div>
    </>
  );
};

export default App;
