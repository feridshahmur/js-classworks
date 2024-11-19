/** @format */

import {
  getDataFromLocalStorage,
  setElementsFromLocalStorage,
} from "./functions.js";


const loginForm = document.querySelector("form");
const userNameOrEmailInput = document.querySelector("#username-email");
const passwordInput = document.querySelector("#pw");
const submitBtn = document.querySelector(".btn-primary")

const users = getDataFromLocalStorage("users") || [];

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let password = passwordInput.value.trim();
  let userNameOrEmail = userNameOrEmailInput.value.trim();
  const foundUser = users.find(
    (user) =>
      user.password === password &&
      (user.userName === userNameOrEmail || user.email === userNameOrEmail)
  );
  //   console.log(foundUser);

  if (foundUser) {
    foundUser.isLogged = true;
    setElementsFromLocalStorage("user", users);
    window.location.replace("home.html");
  } else {
    window.alert("daxil etidiyiniz məlumatlar yanlışdır!");
  }
  resetForm();
});

function resetForm() {
  registerForm.reset();
}
submitBtn.addEventListener("click" , function () {
  if (foundUser) {
    foundUser.isLogged = true;
    setElementsFromLocalStorage("user", users);
    window.location.replace("home.html");
  } else {
    window.alert("daxil etidiyiniz məlumatlar yanlışdır!");
  }
  resetForm();
});
