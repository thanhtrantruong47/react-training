import TableRow from 'components/TableRow';
import User from 'scripts/types/user';

interface TableListProps {
  usersItem: User[];
}

const editUser = () => console.log('edit');

const deleteUser = () => console.log('delete');

const TableBody = ({ usersItem = [] }: TableListProps) => {
  return (
    <>
      {usersItem.map(({ id, email, firstName, lastName, phoneNumber }) => (
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
    </>
  );
};

export default TableBody;
