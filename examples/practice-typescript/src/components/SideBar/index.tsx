import Logo from 'components/Logo/Logo';
import SideBarMenu from 'components/SideBarMenu/index';

import './index.scss';
import { MenuItems } from 'mocks/menu';

const SideBar = () => {
  return (
    <aside className="aside">
      <Logo />
      <SideBarMenu menuItems={MenuItems} />
    </aside>
  );
};

export default SideBar;
