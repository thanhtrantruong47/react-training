import { Link } from 'react-router-dom';
import utils from '../../styles/modules/utils.module.css';
import styles from './breadcrumbs.module.css';

interface BreadcrumbProps {
  listItems: {
    label: string;
    url?: string;
  }[];
}

const Breadcrumb = ({ listItems }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {listItems.map((item, index) => (
          <li key={item.label} className={styles.breadcrumbItem}>
            {item.url ? (
              <Link className={utils.link} to={item.url}>
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index !== listItems.length - 1 && ' / '}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
