import Button from 'components/Button';
import Logo from 'components/Logo/Logo';
import SideBar from 'components/SideBar';
import SideBarMenu from 'components/SideBarMenu';
import TableHead from 'components/TableHead';
import { MenuItems } from 'mocks/menu';
import { USER_TABLE_HEADERS, PRODUCT_TABLE_HEADERS } from './constants/user';
import TableController from 'components/TableController';
import TableBody from 'components/TableBody';
import { UserMockList, UserMock } from 'mocks/user';
import { ProductMockList } from 'mocks/product';
import TableRow from 'components/TableRow';
import TableContainer from 'components/TableContainer';

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
        <TableRow item={UserMock} onEdit={bindEdit} onDelete={bindDelete} />
      </table>
      <div>
        <TableHead headItems={USER_TABLE_HEADERS} />
      </div>
      <div>
        <TableHead headItems={PRODUCT_TABLE_HEADERS} />
      </div>
      <table>
        <TableHead headItems={USER_TABLE_HEADERS} />
        <TableBody items={UserMockList} />
      </table>
      <table>
        <TableHead headItems={PRODUCT_TABLE_HEADERS} />
        <TableBody items={ProductMockList} />
      </table>
      <TableContainer />
    </>
  );
};

export default App;
