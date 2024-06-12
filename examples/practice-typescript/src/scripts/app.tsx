import Button from 'components/Button';
import InputField from 'components/Input';
import Logo from 'components/Logo/Logo';
import SideBar from 'components/SideBar';
import SideBarMenu from 'components/SideBarMenu';
import TableHeader from 'components/TableHeader';
import { MenuItems } from 'mocks/menu';
import { Product } from 'mocks/product';
import { User } from 'mocks/user';

const App = () => {
  return (
    <>
      <InputField
        icon={require('../assets/images/managers/icon-search.png')}
        typeInput="search"
        description="Search All"
        size='17'
      />
      <Logo />
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
        <TableHeader headers={User} />
      </div>
      <div>
        <TableHeader headers={Product} />
      </div>
    </>
  );
};

export default App;
