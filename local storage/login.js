import { getDataFromLocalStorage, setElementsFromLocalStorage } from "./functions.js";
import { setElementsFromLocalStorage } from './functions';

const loginForm = document.querySelector("form");
const userNameOrEmailInput = document.querySelector("#username-email");
const passwordInput = document.querySelector("#pw");

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
    setElementsFromLocalStorage("users", users);
    window.location.replace("home.html");
  } else {
    window.alert("daxil etidiyiniz məlumatlar yanlışdır!");
  }
});

function resetForm() {
  registerForm.reset();
}