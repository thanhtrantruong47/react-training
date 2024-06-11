import { UserItem } from 'mocks/user';
import '../../styles/component.scss';

interface HeaderItemProps {
  label: string;
}

const HeaderItem = ({ label }: HeaderItemProps) => {
  return <th className="table-head">{label}</th>;
};

const TableHeader = () => {
  const headers = (
    Object.keys(UserItem[0]) as Array<keyof (typeof UserItem)[0]>
  ).filter((header) => header !== 'id');

  return (
    <tr>
      <HeaderItem label="#" />
      {headers.map((header, index) => (
        <HeaderItem key={index} label={header} />
      ))}
      <HeaderItem label="Action" />
    </tr>
  );
};

export default TableHeader;
