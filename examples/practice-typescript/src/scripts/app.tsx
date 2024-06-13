import Button from 'components/Button';
import InputField from 'components/Input';
import Logo from 'components/Logo/Logo';
import SideBar from 'components/SideBar';
import SideBarMenu from 'components/SideBarMenu';
import TableHead from 'components/TableHead';
import { MenuItems } from 'mocks/menu';
import { USER_TABLE_HEADERS, PRODUCT_TABLE_HEADERS } from './constants/user';

const App = () => {
  return (
    <>
      <InputField
        icon={require('../assets/images/managers/icon-search.png')}
        typeInput="search"
        placeholder="Search All"
        iconSize="17"
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
        <TableHead headItems={USER_TABLE_HEADERS} />
      </div>
      <div>
        <TableHead headItems={PRODUCT_TABLE_HEADERS} />
      </div>
    </>
  );
};

export default App;
