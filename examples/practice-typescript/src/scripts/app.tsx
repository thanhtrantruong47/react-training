import Button from 'components/Button';
import Logo from 'components/Logo/Logo';
import SideBar from 'components/SideBar';
import SideBarMenu from 'components/SideBarMenu';
import InputField from 'components/Input';
import TableRow from 'components/TableRow';
import TableBody from 'components/TableBody';
import { User } from 'mocks/user';

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
      <InputField
        icon={require('../assets/images/managers/icon-search.png')}
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
      <div>
        <TableRow
          email="kim@gmail.com"
          firstName="tran "
          lastName="kim"
          phoneNumber="0132456789"
          id="1"
        />
      </div>
      <div>
        <TableBody usersItem={User} />
      </div>
    </>
  );
};

export default App;
