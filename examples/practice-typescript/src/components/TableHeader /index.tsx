import User from 'scripts/types/user';
import './index.scss';
import Product from 'scripts/types/product';

interface HeaderItemProps {
  label: string;
}

const HeaderItem = ({ label }: HeaderItemProps) => {
  const formatLabel = (str: string) => {
    return str
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .replace(/([A-Z])/g, ' $1')
      .trim();
  };

  return <th className="table-head">{formatLabel(label)}</th>;
};

interface TableHeaderProps {
  headers: User[] | Product[];
}

const TableHeader = ({ headers = [] }: TableHeaderProps) => {
  const headerKeys = Object.keys(headers[0]).filter(
    (header) => header !== 'id'
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
