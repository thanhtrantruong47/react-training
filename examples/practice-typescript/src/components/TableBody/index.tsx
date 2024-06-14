import TableRow from 'components/TableRow';

interface TableListProps<T> {
  items: T[];
}

const bindEdit = () => console.log('edit');

const bindDelete = () => console.log('delete');

// T must be a numeric id attribute type.
const TableBody = <T extends { id: number }>({
  items = [],
}: TableListProps<T>) => {
  return (
    <tbody>
      {items.map((item) => (
        <TableRow
          key={item.id}
          item={item}
          onEdit={bindEdit}
          onDelete={bindDelete}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
