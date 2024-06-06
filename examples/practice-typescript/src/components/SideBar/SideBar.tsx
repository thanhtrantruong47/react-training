import Logo from 'components/Logo/Logo';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';

import './sideBar.scss';

const SideBar = () => {
  return (
    <aside className="aside">
      <Logo />
      <SideBarMenu active="Product management" />
    </aside>
  );
};

export default SideBar;
