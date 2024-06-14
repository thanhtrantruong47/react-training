import TableBody from 'components/TableBody';
import TableHead from 'components/TableHead';
import './index.scss';

interface TableProps<T> {
  headItems: string[];
  listItemMock: T[];
}

const Table = <T extends { id: number }>({
  headItems,
  listItemMock = [],
}: TableProps<T>) => {
  return (
    <table className="table">
      <TableHead headItems={headItems} />
      <TableBody items={listItemMock} />
    </table>
  );
};

export default Table;
