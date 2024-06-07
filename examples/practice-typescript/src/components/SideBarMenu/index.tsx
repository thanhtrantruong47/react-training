import SideBarMenuItem, {
  SideBarMenuItemProps,
} from 'components/SideBarMenuItem';
import './index.scss';

interface SideBarMenuProps {
  sideBarMenuItemLitsProps: SideBarMenuItemProps[];
}

const SideBarMenu = ({ sideBarMenuItemLitsProps = [] }: SideBarMenuProps) => {
  return (
    <ul className="aside__list">
      {sideBarMenuItemLitsProps.map(({ id, text, router, isActive }) => (
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
