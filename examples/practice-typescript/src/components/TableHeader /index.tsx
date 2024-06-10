import './index.scss';

interface HeaderItemProps {
  label: string;
}

const Data = [
  {
    email: 'kim@gmail.com',
    first_name: 'tran ',
    last_name: 'kim',
    phone_number: '0132456789',
    id: '55',
  },
  {
    email: 'kim@gmail.com',
    first_name: 'tran ',
    last_name: 'kim',
    phone_number: '0132456789',
    id: 'E8fRRTV',
  },
];

const HeaderItem = ({ label }: HeaderItemProps) => {
  return <th className="table-head">{label}</th>;
};

const TableHeader = () => {
  const headers = (
    Object.keys(Data[0]) as Array<keyof (typeof Data)[0]>
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
