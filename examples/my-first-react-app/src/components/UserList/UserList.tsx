import { UserListProps, User } from "../../types/User";
import UserRow from "../UserRow/UserRow";

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
