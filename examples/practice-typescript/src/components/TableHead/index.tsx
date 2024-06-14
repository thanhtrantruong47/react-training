import './index.scss';

interface TableHeadProps {
  headItems: string[];
}

const TableHead = ({ headItems = [] }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        <th className="table-head">#</th>
        {headItems.map((item, index) => (
          <th key={index} className="table-head">
            {item}
          </th>
        ))}
        <th className="table-head">Action</th>
      </tr>
    </thead>
  );
};

export default TableHead;
