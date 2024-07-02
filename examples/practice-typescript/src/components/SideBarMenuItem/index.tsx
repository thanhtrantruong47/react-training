import { MenuItem } from 'scripts/types/menu';
import './index.scss';

const SideBarMenuItem = ({ id, text, router, isActive }: MenuItem) => {
  const activeClass = isActive ? 'aside__active' : '';
  return (
    <li>
      <a id={id} className={`aside__item  ${activeClass}`} href={router}>
        {text}
      </a>
    </li>
  );
};

export default SideBarMenuItem;
