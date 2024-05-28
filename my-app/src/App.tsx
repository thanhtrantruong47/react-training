import "./App.css";

const USERS: User[] = [
  { id: "1", name: "thanh", position: "$1", start_date: "12 Nov 2024" },
  { id: "2", name: "kim", position: "$1", start_date: "12 Nov 2024" },
  { id: "3", name: "nguyen", position: "$1", start_date: "12 Nov 2024" },
  { id: "4", name: "anh", position: "$1", start_date: "12 Nov 2024" },
];

interface User {
  id: string;
  name: string;
  position: string;
  start_date: string;
}

interface UserRowProps {
  user: User;
}

interface UserListProps {
  users: User[];
}

const UserRow = ({ user }: UserRowProps) => {
  const name = user.name;
  const position = user.position;
  const startDate = user.start_date;

  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{startDate}</td>
    </tr>
  );
};

const UserList = ({ users }: UserListProps) => {
  return (
    <table>
      <tbody>
        {users.map((user: User) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  return (
    <>
      <UserList users={USERS} />
    </>
  );
};

export default App;
