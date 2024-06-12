import { HeaderItem } from './HeaderItem';
import './index.scss';

interface HeaderItemsProps<T> {
  headers: T[];
}

const TableHeader = <T,>({ headers }: HeaderItemsProps<T>) => {
  const headerKeys: string[] = Object.keys(headers[0]).filter(
    (key) => key !== 'id'
  );

  return (
    <tr>
      <HeaderItem label="#" />
      {headerKeys.map((header, index) => (
        <HeaderItem key={index} label={header} />
      ))}
      <HeaderItem label="Action" />
    </tr>
  );
};

export default TableHeader;
