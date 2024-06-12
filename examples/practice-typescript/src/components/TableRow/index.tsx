import Button from 'components/Button';
import './index.scss';

interface TableRowProps {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const TableRow = ({
  id,
  email,
  firstName,
  lastName,
  phoneNumber,
}: TableRowProps) => {
  return (
    <tr key={id}>
      <td className="table-item">{id}</td>
      <td className="table-item">{email}</td>
      <td className="table-item">{firstName}</td>
      <td className="table-item">{lastName}</td>
      <td className="table-item">{phoneNumber}</td>
      <td className="table-item" style={{ display: 'flex', gap: '40px' }}>
        <Button text="Edit" styleClass="btn-action" />
        <Button text="Delete" styleClass="btn-action" />
      </td>
    </tr>
  );
};

export default TableRow;
