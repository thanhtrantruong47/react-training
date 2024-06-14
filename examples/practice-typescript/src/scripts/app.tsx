import Button from 'components/Button';
import Logo from 'components/Logo/Logo';
import SideBar from 'components/SideBar';
import SideBarMenu from 'components/SideBarMenu';
import TableHead from 'components/TableHead';
import { MenuItems } from 'mocks/menu';
import { USER_TABLE_HEADERS, PRODUCT_TABLE_HEADERS } from './constants/user';
import TableController from 'components/TableController';
import TableBody from 'components/TableBody';
import { UserListItems, UserItem } from 'mocks/user';
import { ProductListItems } from 'mocks/product';
import TableRow from 'components/TableRow';

const bindEdit = () => console.log('edit');

const bindDelete = () => console.log('delete');

const App = () => {
  return (
    <>
      <div>
        <TableController />
      </div>
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
      <table>
        <TableRow item={UserItem} onEdit={bindEdit} onDelete={bindDelete} />
      </table>
      <div>
        <TableHead headItems={USER_TABLE_HEADERS} />
      </div>
      <div>
        <TableHead headItems={PRODUCT_TABLE_HEADERS} />
      </div>
      <table>
        <TableHead headItems={USER_TABLE_HEADERS} />
        <TableBody items={UserListItems} />
      </table>
      <table>
        <TableHead headItems={PRODUCT_TABLE_HEADERS} />
        <TableBody items={ProductListItems} />
      </table>
    </>
  );
};

export default App;
