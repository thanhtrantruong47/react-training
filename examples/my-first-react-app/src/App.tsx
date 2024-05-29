import "./App.css";
import UserList from "./components/UserList/UserList";
import User from "./types/User";

const USERS: User[] = [
  { id: "1", name: "thanh", position: "$1", startDate: "12 Nov 2024" },
  { id: "2", name: "kim", position: "$1", startDate: "12 Nov 2024" },
  { id: "3", name: "nguyen", position: "$1", startDate: "12 Nov 2024" },
  { id: "4", name: "anh", position: "$1", startDate: "12 Nov 2024" },
];

const App = () => {
  return <UserList users={USERS} />;
};

export default App;
