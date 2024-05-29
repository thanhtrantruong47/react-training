interface User {
  id: string;
  name: string;
  position: string;
  startDate: string;
}

interface UserListProps {
  users: User[];
}

interface UserRowProps {
  user: User;
}

export type { User, UserListProps, UserRowProps };
