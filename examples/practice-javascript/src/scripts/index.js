// import UserController from "./controllers/userController";
// import UserView from "./views/userView";
// import UserService from "./services/userService";

// window.addEventListener("load", () => {
//   // call function for page login
//   const managerUser = new UserController(new UserView(), new UserService());
//   managerUser.userLogin();
//   managerUser.displayUser();
//   managerUser.userDelete();
//   managerUser.displayFormEdit();
//   managerUser.editUser();
//   managerUser.userSignUp();
// });

import { createRoot } from "react-dom/client";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const domNode = document.getElementById("navigation");
const root = createRoot(domNode);
root.render(<NavigationBar />);
