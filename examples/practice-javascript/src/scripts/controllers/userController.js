import UserService from "../services/userService";

class UserController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
  }

  async userLogin() {
    const data = await UserService.getUser();
    this.view.bindLoginUser(data);
  }

  // call API for create user
  addUser = async (user) => {
    await UserService.createUser(user);
  };

  //handle sign up form view
  async userSignUp() {
    const data = await UserService.getUser();
    await this.view.bindSignUpUser(this.addUser,data);
  }

  // display table user form view
  async displayUser() {
    const data = await UserService.getUser();
    this.view.blindDisplay(data);
  }

  // call API for delete user
  deleteUser = async (id) => {
    await UserService.deleteUser(id);
  };

  // call API for check role user (admin or not)
  checkRole = async (id) => {
    const data = await UserService.getUserIdRole(id);
    return data;
  };

  // call display table user form view
  async userDelete() {
    await this.view.bindDeleteUser(this.deleteUser, this.checkRole);
  }

  // get user by id to display for form edit
  getUserId = async (id) => {
    const data = await UserService.getUserById(id);
    return data;
  };

  // display user form edit
  async displayFormEdit() {
    await this.view.bindGetUserForm(this.getUserId);
  }

  // call API for PATCH user
  updateUser = async (id, data) => {
    await UserService.updateUserAdmin(id, data);
  };

  // handle edit user
  async editUser() {
    await this.view.bindEditUser(this.updateUser);
  }
}

export default UserController;
