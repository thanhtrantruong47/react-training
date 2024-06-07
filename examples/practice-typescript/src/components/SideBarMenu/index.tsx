import SideBarMenuItem from 'components/SideBarMenuItem';
import './index.scss';
import { MenuItem } from 'scripts/types/menu';

interface SideBarMenuProps {
  menuItems: MenuItem[];
}

const SideBarMenu = ({ menuItems = [] }: SideBarMenuProps) => {
  return (
    <ul className="aside__list">
      {menuItems.map(({ id, text, router, isActive }) => (
        <SideBarMenuItem
          key={id}
          id={id}
          text={text}
          router={router}
          isActive={isActive}
        />
      ))}
    </ul>
  );
};

export default SideBarMenu;
