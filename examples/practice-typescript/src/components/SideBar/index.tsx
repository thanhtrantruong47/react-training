import Logo from 'components/Logo/Logo';
import SideBarMenu from 'components/SideBarMenu/index';

import './index.scss';

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
];

const SideBar = () => {
  return (
    <aside className="aside">
      <Logo />
      <SideBarMenu menuItems={MenuItems} />
    </aside>
  );
};

export default SideBar;
