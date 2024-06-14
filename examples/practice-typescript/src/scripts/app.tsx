import Button from 'components/Button';
import Logo from 'components/Logo/Logo';
import SideBar from 'components/SideBar';
import SideBarMenu from 'components/SideBarMenu';
import TableHead from 'components/TableHead';
import { MenuItems } from 'mocks/menu';
import { USER_TABLE_HEADERS, PRODUCT_TABLE_HEADERS } from './constants/user';
import TableRow from 'components/TableRow';

const editUser = () => console.log('edit');

const deleteUser = () => console.log('delete');

import TableController from 'components/TableController';
import TableBody from 'components/TableBody';
import { User } from 'mocks/user';

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
        <TableRow
          id={1}
          email="kim@gmail.com"
          firstName="tran "
          lastName="kim"
          phoneNumber="0132456789"
          onEdit={editUser}
          onDelete={deleteUser}
        />
      </table>
      <div>
        <TableHead headItems={USER_TABLE_HEADERS} />
      </div>
      <div>
        <TableHead headItems={PRODUCT_TABLE_HEADERS} />
      </div>
      <table>
        <tbody>
          <TableBody usersItem={User} />
        </tbody>
      </table>
    </>
  );
};

export default App;
