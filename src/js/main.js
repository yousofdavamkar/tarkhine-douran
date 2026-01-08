import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "/src/js/supp.js";
import "/src/css/styles.css";

var swiper1 = new Swiper(".mySwiper1", {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Theme Toggle Logic
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  const validThemes = ["light", "dark"];
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme && validThemes.includes(savedTheme)) {
    body.classList.add(savedTheme + "-mode");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      // Check current state (explicit class or system)
      const hasDark = body.classList.contains("dark-mode");
      const hasLight = body.classList.contains("light-mode");
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      let isDark = false;
      if (hasDark) isDark = true;
      else if (hasLight) isDark = false;
      else isDark = systemDark;

      // Toggle
      if (isDark) {
        // Switch to light
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      } else {
        // Switch to dark
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      }
    });
  }
});
