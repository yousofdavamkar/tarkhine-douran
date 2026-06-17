import "./modules/slider";
import "./modules/supp";
import "./modules/theme";

import "./modules/accordion";

import ApiCall from "./utils/ApiCall";

import menu from "./modules/menu";
menu();

import { initLoginModal } from "/src/js/modules/login.js";

import { initLogoutModal } from "./modules/logout";

let isLoggedIn = false;
const headerLoginBtn = document.getElementById("site-header__btn--login");
const phoneElement = document.getElementById(
  "site-header__dropdown-link--phone",
);

document.addEventListener("DOMContentLoaded", () => {
  isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    const currentUser = localStorage.getItem("currentUser");
    const userData = JSON.parse(currentUser);
    headerLoginBtn.classList.add("active");
    phoneElement.textContent = userData.mobile;
    initLogoutModal();
  } else {
    initLoginModal();
  }
});
