import './index.scss';

interface TableRowProps {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

let rowIndex = 0;

const TableRow = ({
  email,
  firstName,
  lastName,
  phoneNumber,
}: TableRowProps) => {
  rowIndex++;
  return (
    <tr>
      <td className="table-row">{rowIndex/2}</td>
      <td className="table-row">{email}</td>
      <td className="table-row">{firstName}</td>
      <td className="table-row">{lastName}</td>
      <td className="table-row">{phoneNumber}</td>
    </tr>
  );
};

export default TableRow;
