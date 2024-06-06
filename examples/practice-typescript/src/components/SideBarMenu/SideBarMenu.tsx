import SideBarMenuItem, {
  SideBarMenuItemProps,
} from 'components/SideBarMenuItem/SideBarMenuItem';
import './sideBarMenu.scss';

interface SideBarMenuProps {
  sideBarMenuItemProps: SideBarMenuItemProps[];
}

const SideBarMenu = ({ sideBarMenuItemProps }: SideBarMenuProps) => {
  return (
    <ul className="aside__list">
      {sideBarMenuItemProps.map((item) => (
        <li>
          <SideBarMenuItem
            key={item.id}
            id={item.id}
            text={item.text}
            router={item.router}
            isActive={item.isActive}
          />
        </li>
      ))}
    </ul>
  );
};

export default SideBarMenu;
