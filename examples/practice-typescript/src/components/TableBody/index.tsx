import TableRow from 'components/TableRow';
import User from 'scripts/types/user';

interface TableListProps {
  usersItem: User[];
}

const TableBody = ({ usersItem = [] }: TableListProps) => {
  return (
    <>
      {usersItem.map(({ id, email, firstName, lastName, phoneNumber }) => (
        <TableRow
          email={email}
          firstName={firstName}
          lastName={lastName}
          phoneNumber={phoneNumber}
          id={id}
        />
      ))}
    </>
  );
};

export default TableBody;
