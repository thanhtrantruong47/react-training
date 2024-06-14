import TableRow from 'components/TableRow';
import User from 'scripts/types/user';

interface TableListProps {
  children: User[];
}

const editUser = () => console.log('edit');

const deleteUser = () => console.log('delete');

const TableBody = ({ children = [] }: TableListProps) => {
  return (
    <tbody>
      {children.map(({ id, email, firstName, lastName, phoneNumber }) => (
        <TableRow
          id={id}
          email={email}
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          onEdit={editUser}
          onDelete={deleteUser}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
