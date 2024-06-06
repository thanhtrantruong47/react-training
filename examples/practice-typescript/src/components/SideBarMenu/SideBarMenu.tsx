import SideBarMenuItem from 'components/SideBarMenuItem/SideBarMenuItem';
import './sideBarMenu.scss';

interface SideBarMenuProps {
  active: string;
}

const SideBarMenu = ({ active }: SideBarMenuProps) => {
  return (
    <ul className="aside__list">
      <SideBarMenuItem
        text="User management"
        router="javascript:void(0)"
        status={active === 'User management' ? 'aside__active' : ''}
      />
      <SideBarMenuItem
        text="Product management"
        router="javascript:void(0)"
        status={active === 'Product management' ? 'aside__active' : ''}
      />
    </ul>
  );
};

export default SideBarMenu;
