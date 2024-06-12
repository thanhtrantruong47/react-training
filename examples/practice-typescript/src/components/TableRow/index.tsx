import Button from 'components/Button';
import './index.scss';

interface TableRowProps {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  onEdit: () => void;
  onDelete: () => void;
}

const TableRow = ({
  id,
  email,
  firstName,
  lastName,
  phoneNumber,
  onEdit,
  onDelete,
}: TableRowProps) => (
  <tr key={id}>
    <td className="table-item">{id}</td>
    <td className="table-item">{email}</td>
    <td className="table-item">{firstName}</td>
    <td className="table-item">{lastName}</td>
    <td className="table-item">{phoneNumber}</td>
    <td className="table-item table-item-action">
      <Button text="Edit" styleClass="btn-action" onClick={onEdit} />
      <Button text="Delete" styleClass="btn-action" onClick={onDelete} />
    </td>
  </tr>
);
export default TableRow;
