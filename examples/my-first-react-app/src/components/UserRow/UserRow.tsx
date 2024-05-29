import { UserRowProps } from "../../types/User";

const UserRow = ({ user }: UserRowProps) => {
  const { name, position, startDate } = user;
  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{startDate}</td>
    </tr>
  );
};

export default UserRow;
