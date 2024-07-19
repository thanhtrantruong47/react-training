import { useState, useEffect } from 'react';
import utils from '../../styles/modules/utils.module.css';
import styles from './tabList.module.css';
import TabItem from '../TabItem/TabItem';

interface TabListProps {
  listNavItems: string[];
  onChangeTab: (index: number) => void;
}

const TabList = ({ listNavItems, onChangeTab }: TabListProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [category, setCategory] = useState<string>('T-Shirt');

  useEffect(() => {
    console.log('change', category);
  }, [category]);

  const handleTabChange = (index: number, item: string) => {
    setActiveTab(index);
    setCategory(item);
    onChangeTab(index);
  };

  return (
    <div className={`${utils.flexCenter} ${styles.tabList}`}>
      {listNavItems.map((item, index) => (
        <TabItem key={item} label={item} isActive={index === activeTab} onChange={() => handleTabChange(index, item)} />
      ))}
    </div>
  );
};

export default TabList;
