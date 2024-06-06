import Logo from 'components/Logo/Logo';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';

import './sideBar.scss';
import { SideBarMenuItemProps } from 'components/SideBarMenuItem/SideBarMenuItem';

const MENU: SideBarMenuItemProps[] = [
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
];

const SideBar = () => {
  return (
    <aside className="aside">
      <Logo />
      <SideBarMenu sideBarMenuItemProps={MENU} />
    </aside>
  );
};

export default SideBar;
