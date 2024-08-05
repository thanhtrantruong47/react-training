import { useState } from 'react';
import { default as styleUtils } from '@/styles/modules/utils.module.css';
import styles from './tabList.module.css';
import { TabItem } from '@/components';

interface TabListProps {
  items: string[];
  onChangeTab: (item: string) => void;
}

const TabList = ({ items, onChangeTab }: TabListProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (index: number, item: string) => {
    setActiveTab(index);
    onChangeTab(item);
  };

  return (
    <div className={`${styleUtils.flexCenter} ${styles.tabList}`}>
      {items.map((item, index) => (
        <TabItem key={item} label={item} isActive={index === activeTab} onChange={() => handleTabChange(index, item)} />
      ))}
    </div>
  );
};

export default TabList;
