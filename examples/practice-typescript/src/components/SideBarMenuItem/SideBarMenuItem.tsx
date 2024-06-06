import './sideBarMenuItem.scss';

interface SideBarMenuItemProps {
  text: string;
  router: string;
  status?: 'aside__active' | '';
}

const SideBarMenuItem = ({ text, router, status }: SideBarMenuItemProps) => {
  return (
    <li>
      <a className={`aside__item  ${status}`} href={router}>
        {text}
      </a>
    </li>
  );
};

export default SideBarMenuItem;
