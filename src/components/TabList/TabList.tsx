import { useState } from 'react';
import Tab from '../Tab/Tab';
import utils from '../../styles/modules/utils.module.css';
import styles from './tabList.module.css';

interface TabListProps {
  listNavItems: string[];
}

const TabList = ({ listNavItems }: TabListProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={`${utils.flexCenter} ${styles.tabList}`}>
      {listNavItems.map((item, index) => (
        <Tab key={item} label={item} isActive={index === activeTab} onChange={() => handleTabChange(index)} />
      ))}
    </div>
  );
};

export default TabList;
