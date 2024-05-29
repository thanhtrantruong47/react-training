import User from "../../types/User";
import UserRow from "../UserRow/UserRow";

interface UserListProps {
  users: User[];
}

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

export default UserList;
