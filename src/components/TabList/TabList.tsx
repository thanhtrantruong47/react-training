import { useLocation } from 'react-router-dom';
import { default as styleUtils } from '../../styles/modules/utils.module.css';
import styles from './tabList.module.css';
import TabItem from '../TabItem/TabItem';

interface TabListProps {
  items: string[];
  onChangeTab: (item: string) => void;
}

const TabList = ({ items, onChangeTab }: TabListProps) => {
  const location = useLocation();

  // Parse the query string
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category') || 'T-Shirt';

  return (
    <div className={`${styleUtils.flexCenter} ${styles.tabList}`}>
      {items.map(item => (
        <TabItem key={item} label={item} isActive={item === category} onChange={onChangeTab} />
      ))}
    </div>
  );
};

export default TabList;
