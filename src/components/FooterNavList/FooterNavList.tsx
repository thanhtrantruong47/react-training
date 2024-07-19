import { Link } from 'react-router-dom';
import styles from './footerNavList.module.css';

interface NavItem {
  label: string;
  path: string;
}

interface FooterNavListProps {
  items: NavItem[];
}

const FooterNavList = ({ items }: FooterNavListProps) => {
  const [firstItem, ...restItems] = items;

  return (
    <div className={styles.container}>
      <p className={styles.title}>{firstItem.label}</p>
      <ul className={styles.item}>
        {restItems.map(({ label, path }) => (
          <li key={label}>
            <Link className={styles.link} to={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavList;
