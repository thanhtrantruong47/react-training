import UserController from "./controllers/userController";
import UserView from "./views/userView";
import UserService from "./services/userService";

window.addEventListener("load", () => {
  // call function for page login
  const managerUser = new UserController(new UserView(), new UserService());
  managerUser.userLogin();
  managerUser.displayUser();
  managerUser.userDelete();
  managerUser.displayFormEdit();
  managerUser.editUser();
  managerUser.userSignUp();
});
