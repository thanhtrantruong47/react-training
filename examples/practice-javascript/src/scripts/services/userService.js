import { API } from "../constants/url";

export default class UserService {
  //function get user from json
  static getUser = async () => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.USER}`, {
        method: "GET",
        headers: {
          "Content-Type": "Application-json",
        },
      });
      const data = res.json();
      return data;
    } catch (error) {
      throw new Error("Failed to get user.");
    }
  };

  //function create user from json
  static createUser = async (user) => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.USER}`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(user),
      });
    } catch (error) {
      throw new Error("Failed to create new user.");
    }
  };

  //function update user from json
  static updateUserAdmin = async (id, user) => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.USER}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(user),
      });
    } catch (error) {
      throw new Error("Failed to update new admin.");
    }
  };

  //function delete user from json
  static deleteUser = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "Application-json",
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  //function get role user from json for delete
  static getUserRoleById = async (id) => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.USER}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "Application-json",
        },
      });
      const data = res.json();
      return data.role;
    } catch (error) {
      throw new Error("Failed to get user.");
    }
  };

  //function get user by id from json for render form edit
  static getUserById = async (id) => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.USER}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "Application-json",
        },
      });
      const data = res.json();
      return data;
    } catch (error) {
      throw new Error("Failed to get user.");
    }
  };
}
