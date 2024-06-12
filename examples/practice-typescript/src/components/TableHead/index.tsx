import './index.scss';

interface TableHeadProps<T> {
  headItems: T[];
}

/**
 * Formats a string by capitalizing the first letter of each word
 * and inserting a space before each capital letter (except the first letter).
 * @param {string} str - The string to format.
 * @returns {string} The formatted string.
 */
const formatHeadItem = (str: string) => {
  return str
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/([A-Z])/g, ' $1')
    .trim();
};

const TableHead = <T,>({ headItems }: TableHeadProps<T>) => {
  // get the keys in the array in the first position such as email, first name, last name without taking the id and save it in an array.
  const headKeys: string[] = Object.keys(headItems[0]).filter(
    (key) => key !== 'id'
  );

  return (
    <tr>
      <th className="table-head">#</th>
      {headKeys.map((headKey, index) => (
        <th className="table-head" key={index}>
          {formatHeadItem(headKey)}
        </th>
      ))}
      <th className="table-head">Action</th>
    </tr>
  );
};

export default TableHead;
