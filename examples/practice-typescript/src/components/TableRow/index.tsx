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
    <td className="table-cell">{id}</td>
    <td className="table-cell">{email}</td>
    <td className="table-cell">{firstName}</td>
    <td className="table-cell">{lastName}</td>
    <td className="table-cell">{phoneNumber}</td>
    <td className="table-cell table-cell-action">
      <Button text="Edit" styleClass="btn-action" onClick={onEdit} />
      <Button text="Delete" styleClass="btn-action" onClick={onDelete} />
    </td>
  </tr>
);
export default TableRow;
