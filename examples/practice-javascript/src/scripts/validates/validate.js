const validateEmail = (email) => {
  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;
  return emailPattern.test(email);
};

const validatePhone = (phoneNumber) => {
  var phoneRegex = /^0\d{9}$/;
  return phoneRegex.test(phoneNumber);
};

const findUserSignUp = (dataUser, username) => {
  const user = dataUser.find((user) => user.email === username);
  if (user) {
    return user;
  }
};

const logIn = (dataUser, username, password) => {
  const user = dataUser.find(
    (user) => user.email === username && user.password === password
  );
  if (user) {
    if (user.role === "admin") {
      return user.role;
    } else {
      return user.role;
    }
  } else {
    throw new Error("Account or password not found");
  }
};

const routerUser = () => {
  const user = logIn();
  if (user.role === "admin") {
    return user.role;
  }
};

const checkUser = (role, id) => {
  const data = role(id);
  console.log(data);
  if (data.role === "admin") {
    console.log(data.role);
  } else {
    console.log(data.role);
  }
};

const checkRoleEdit = (role) => {
  if(role === "admin" || role === "user") {
    return true
  }
}

export {
  validateEmail,
  validatePhone,
  findUserSignUp,
  logIn,
  routerUser,
  checkUser,
  checkRoleEdit
};
