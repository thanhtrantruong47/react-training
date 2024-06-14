import TableBody from 'components/TableBody';
import TableHead from 'components/TableHead';
import './index.scss';

interface TableProps<T> {
  headItems: string[];
  listItems: T[];
}

const Table = <T extends { id: number }>({
  headItems,
  listItems = [],
}: TableProps<T>) => {
  return (
    <table className="table">
      <TableHead headItems={headItems} />
      <TableBody items={listItems} />
    </table>
  );
};

export default Table;
