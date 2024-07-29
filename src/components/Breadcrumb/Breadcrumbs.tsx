import { Link } from 'react-router-dom';
import { default as styleUtils } from '../../styles/modules/utils.module.css';
import styles from './breadcrumbs.module.css';

interface BreadcrumbProps {
  listItemsBreadcrumb: {
    label: string;
    url?: string;
  }[];
}

const Breadcrumb = ({ listItemsBreadcrumb }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {listItemsBreadcrumb.map((item, index) => {
          const isLastItem = index === listItemsBreadcrumb.length - 1;

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
