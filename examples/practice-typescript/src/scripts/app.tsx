import Button from 'components/Button';
import Logo from 'components/Logo/Logo';
import SideBar from 'components/SideBar';
import SideBarMenu from 'components/SideBarMenu';
import TableHeader from 'components/TableHeader ';
import { MenuItems } from 'mocks/menu';
import { Product } from 'mocks/product';
import { User } from 'mocks/user';

const App = () => {
  return (
    <>
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
