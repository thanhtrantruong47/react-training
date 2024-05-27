import './App.css';

const USERS: User[] = [
  { name: "thanh", position: "$1", start_date: '12 Nov 2024' },
  { name: "kim", position: "$1", start_date: '12 Nov 2024' },
  { name: "nguyen", position: "$1", start_date: '12 Nov 2024' },
  { name: "anh", position: "$1", start_date: '12 Nov 2024' }
];

interface User {
  name: string;
  position: string;
  start_date: string;
}

const UserRow = ({ user }: { user: User }) => {
  const name = user.name;
  const position = user.position;
  const startDate = user.start_date;

  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{startDate}</td>
    </tr>
  )
}

const UserList = ({ users }: { users: User[] }) => {
  return (
    <table>
      <tbody>
        {
          users.map((user: User) =>
            <UserRow key={user.name} user={user} />)
        }
      </tbody>
    </table>
  );
}


const App = () => {
  return (
    <>
      <UserList users={USERS} />
    </>
  );
}

export default App;
