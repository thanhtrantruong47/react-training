import {
  validateEmail,
  validatePhone,
  logIn,
  findUserSignUp,
  checkRoleEdit,
} from "../validates/validate";
class UserView {
  constructor() {
    this.getUser = document.querySelector(".mytable-user");
    this.username = document.querySelector("#email");
    this.password = document.querySelector("#password");
    this.btnLogin = document.querySelector(".login__btn");

    // create form sign up
    this.myFormSignUp = document.querySelector(".signup");
    this.rePassword = document.querySelector("#re-password");
    this.valiRePassword = document.querySelector("#re-password-validate");
    this.fname = document.querySelector("#fname");
    this.lname = document.querySelector("#lname");
    this.avatar = document.querySelector("#avatar");
    this.phoneNumber = document.querySelector("#phone");
    this.role = document.querySelector("#role");
    this.btnSignUp = document.querySelector(".sign-up__btn");

    //create form update user
    this.myFormUpdate = document.querySelector(".update-user");
    this.btnUpdate = document.querySelector(".update-btn");
  }

  //function login
  bindLoginUser(dataUser) {
    if(this.btnLogin) {
    this.btnLogin.addEventListener("click", (e) => {
      e.preventDefault();
      try {
        if (!validateEmail(this.username.value)) {
          throw new Error(
            "Email address empty or wrong format, example: username@gamil.com"
          );
        }
        if (this.password.value === "" || this.password.value.length < 7) {
          throw new Error(
            "Please enter the password math for Username. (No leading or trailing spaces)"
          );
        }
        console.log(logIn(dataUser, this.username.value, this.password.value))
        if(logIn(dataUser, this.username.value, this.password.value) === "user") {
          window.location.href = "product.html"
        } else {
          window.location.href = "manager.html"
        }
      } catch (error) {
        alert(error.message);
      }
    });}
  }

  // function sign up
  bindSignUpUser(user, dataUser) {
    if( this.btnSignUp) {
    this.btnSignUp.addEventListener("click", (e) => {
      e.preventDefault();
      try {
        if (!validateEmail(this.username.value)) {
          throw new Error(
            "Email address empty or wrong format, example: username@gamil.com"
          );
        } else if (
          this.password.value === "" ||
          this.password.value.length < 7
        ) {
          throw new Error(
            "Please enter the password math for Username or min size 8"
          );
        } else if (
          this.rePassword.value === "" ||
          this.rePassword.value !== this.password.value
        ) {
          throw new Error(
            "Please enter the re-password math for Username or min size 8"
          );
        } else if (this.fname.value === "") {
          throw new Error("Please enter the the first name");
        } else if (this.lname.value === "") {
          throw new Error("Please enter the the last name");
        } else if (this.avatar.value === "") {
          throw new Error("Please enter choose the avatar image");
        } else if (!validatePhone(this.phoneNumber.value)) {
          throw new Error("Please enter your phone number format");
        } else if (findUserSignUp(dataUser, this.username.value)) {
          throw new Error("Account exit");
        } else {
          user({
            email: this.username.value,
            password: this.password.value,
            first_name: this.fname.value,
            last_name: this.lname.value,
            avatar_url: this.avatar.value,
            phone_number: this.phoneNumber.value,
            role: "user",
          });
          alert("Create success");
          window.location.href = "index.html";
        }
      } catch (error) {
        alert(error.message);
      }
    });}
  }

  blindDisplay(userData) {
    const UserItem = userData.map((user, index) => {
      const itemId = index + 1;
      return `<tr class="tbl-item">
              <td class="mytable__item id-content">${itemId}</td>
              <td class="mytable__item username-content">${user.email}</td>
              <td class="mytable__item firstName-content">${user.first_name}</td>
              <td class="mytable__item lastName-content">${user.last_name}</td>
              <td class="mytable__item phone-content">${user.phone_number}</td>
              <td class="mytable__item mytable__item-role role-content">${user.role}</td>
              <td class="mytable__item mytable__item-action">
              <a href="javascript:void(0)" class="action-edit" data-id="${user.id}">Edit</a>
              <a href="javascript:void(0)" class="action-delete" data-id="${user.id}">Detele</a></td>
              </tr>`;
    });
    const userItemHTML = UserItem.join("");
    // create heading for table list user
    if(this.getUser) {
    this.getUser.innerHTML = `
    <tr>
        <td class="mytable__head mytable__head--id">#</td>
        <td class="mytable__head">Username</td>
        <td class="mytable__head">First Name</td>
        <td class="mytable__head">Last Name</td>
        <td class="mytable__head">Phone Number</td>
        <td class="mytable__head">Role</td>
        <td class="mytable__head mytable__head-action">Actions</td>
    </tr>
    ${userItemHTML}`;
  }}

  // function delete Normal user
  bindDeleteUser(handle, role) {
    if(this.getUser) {
    document
      .querySelector(".mytable-user")
      .addEventListener("click", (event) => {
        const userId = event.target.getAttribute("data-id");
        if (event.target.classList.contains("action-delete")) {
          const data = async () => {
            const check = await role(userId);
            if (check == "admin") {
              alert("Can't delete another admin");
            } else {
              const row = event.target.closest("tr");
              row.remove();
              handle(userId);
            }
          };
          data();
        }
      });}
  }

  bindGetUserForm(user) {
    if(this.getUser) {
    document
      .querySelector(".mytable-user")
      .addEventListener("click", (event) => {
        event.preventDefault();
        const userId = event.target.getAttribute("data-id");
        if (event.target.classList.contains("action-edit")) {
          const getData = async () => {
            const data = await user(userId);
            (this.username.value = data.email),
              (this.fname.value = data.first_name),
              (this.password.value = data.password),
              (this.lname.value = data.last_name),
              (this.phoneNumber.value = data.phone_number),
              (this.role.value = data.role);
          };
          getData();
          this.myFormUpdate.classList.toggle("hidden");
        }
      });}
  }

  bindEditUser(handle) {
    let userId;
    let row;
    if(this.getUser) {
    document
      .querySelector(".mytable-user")
      .addEventListener("click", (event) => {
        userId = event.target.getAttribute("data-id");
        row = event.target.closest("tr");
      });
    this.btnUpdate.addEventListener("click", (e) => {
      e.preventDefault();
      //create data for patch user
      try {
        if (this.password.value === "" || this.password.value.length < 7) {
          throw new Error(
            "Please enter the password min size 8"
          );
        } else if (this.fname.value === "") {
          throw new Error("Please enter the the first name");
        } else if (this.lname.value === "") {
          throw new Error("Please enter the the last name");
        }else if (!validatePhone(this.phoneNumber.value)) {
          throw new Error("Please enter your phone number format");
        } else if (!checkRoleEdit(this.role.value)) {
          throw new Error("Please enter role admin or user");
        } else {
          const data = {
            password: this.password.value,
            first_name: this.fname.value,
            last_name: this.lname.value,
            phone_number: this.phoneNumber.value,
            role: this.role.value,
          };
          if (userId) {
            handle(userId, data);
            this.myFormUpdate.classList.add("hidden");
            alert("Update User success");
            //render row after update
            if (row) {
              row.querySelector(".firstName-content").textContent =
                data.first_name;
              row.querySelector(".lastName-content").textContent =
                data.last_name;
              row.querySelector(".phone-content").textContent =
                data.phone_number;
              row.querySelector(".role-content").textContent = data.role;
            }
          }
        }
      } catch  (error) {
        alert(error.message)
      }
    });
  }}
}

export default UserView;
