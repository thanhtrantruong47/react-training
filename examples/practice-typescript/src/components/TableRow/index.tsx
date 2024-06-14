import Button from 'components/Button';
import './index.scss';

interface TableRowProps<T> {
  item: T;
  onEdit: () => void;
  onDelete: () => void;
}

const TableRow = <T,>({ item, onEdit, onDelete }: TableRowProps<T>) => {
  return (
    <tr>
      {Object.values(item).map((value, index) => (
        <td className="table-cell" key={index}>
          {value}
        </td>
      ))}
      <td className="table-cell table-cell-action">
        <Button text="Edit" styleClass="btn-action" onClick={onEdit} />
        <Button text="Delete" styleClass="btn-action" onClick={onDelete} />
      </td>
    </tr>
  );
};

export default TableRow;
