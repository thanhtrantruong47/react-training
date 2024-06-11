import Button from 'components/Button';
import './index.scss';

interface TableRowProps {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  id:string;
}

let rowIndex = 0;

const TableRow = ({
  email,
  firstName,
  lastName,
  phoneNumber,
  id
}: TableRowProps) => {
  rowIndex++;
  return (
    <tr key={id}>
      <td className="table-item">{rowIndex / 2}</td>
      <td className="table-item">{email}</td>
      <td className="table-item">{firstName}</td>
      <td className="table-item">{lastName}</td>
      <td className="table-item">{phoneNumber}</td>
      <td className="table-item">
        <Button text="Edit" styleClass="btn-action" />
        <Button text="Delete" styleClass="btn-action" />
      </td>
    </tr>
  );
};

export default TableRow;
