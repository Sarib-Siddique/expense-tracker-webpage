let allUsers = [];

let users = localStorage.getItem("users");

if (users !== null) {
  allUsers = JSON.parse(users);
}

function signup() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let user = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  allUsers.push(user);
  localStorage.setItem("users", JSON.stringify(allUsers));
  if (
    name.value.length == 0 &&
    email.value.length == 0 &&
    password.value.length == 0
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Missing Name Or Email Or Password",
    });
  } else if (name.value.length == 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Missing Name",
    });
  } else if (email.value.length == 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Missing Email",
    });
  } else if (password.value.length == 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Missing Password",
    });
  } else {
    location.href = "./signin page/signin.html";
  }
}

function login() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value.length === 0 || password.value.length === 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Missing Email Or Password",
    });
    return;
  }

  let filterUser = allUsers.filter(
    (data) => data.email === email.value && data.password === password.value
  );

  if (filterUser.length) {
    location.href = "./expense.html";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Incorrect Password Or Email",
    });
  }
}

function loginPage() {
  location.href = "../signin.html";
}

function signupPage() {
  location.href = "./signup.html";
}
