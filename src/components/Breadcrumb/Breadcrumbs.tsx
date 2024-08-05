import { Link } from 'react-router-dom';
import { default as styleUtils } from 'styles/modules/utils.module.css';
import styles from './breadcrumbs.module.css';

interface BreadcrumbProps {
  items: {
    label: string;
    url?: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <li key={item.label} className={styles.breadcrumbItem}>
              {item.url ? (
                <Link className={styleUtils.link} to={item.url}>
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {!isLastItem && ' / '}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
