import "./modules/slider";
import "./modules/supp";
import "./modules/theme";
import menu from "./modules/menu";
menu();

import { initLoginModal } from "/src/js/modules/login.js";

document.addEventListener("DOMContentLoaded", () => {
  initLoginModal();
});
