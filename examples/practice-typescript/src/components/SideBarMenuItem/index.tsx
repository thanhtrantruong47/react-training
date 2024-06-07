import './index.scss';

export interface SideBarMenuItemProps {
  id: string;
  text: string;
  router: string;
  isActive: boolean;
}

const SideBarMenuItem = ({
  id,
  text,
  router,
  isActive,
}: SideBarMenuItemProps) => {
  const activeClass = isActive ? 'aside__active' : '';
  return (
    <a id={id} className={`aside__item  ${activeClass}`} href={router}>
      {text}
    </a>
  );
};

export default SideBarMenuItem;
