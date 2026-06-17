export function initLogoutModal() {
  if (document.getElementById("Logout-modal-overlay")) return;

  const modalHTML = /*HTML*/ `
    <div id="Logout-modal-overlay" class="Logout-modal-overlay hidden">
        <div class="logout-modal__box">
            <div class="logout-modal__header">
                <div class="logout-modal__placeholder">
                </div>
                <p class="logout-modal__title" >خروج</p>
                <svg class="logout-modal__close-icon" id="logout-close-btn">
                    <use xlink:href="/icons/sprite.svg#close"></use>
                </svg>
            </div>
            <div class="logout-modal__body">
                <p class="logout-modal__text body-md">آیا مایل به خروج از حساب کاربری خود هستید؟</p>
                <div class="logout-modal__actions">
                    <button id="btn-cancel" class="logout-modal__btn btn-cancel button-lg">
                    بازگشت
                    </button>
                     <button id="btn-exit" class="logout-modal__btn btn-exit button-lg">
                     خروج
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const logoutBtn = document.getElementById("logout-btn");
  const overlay = document.getElementById("Logout-modal-overlay");
  const closeBtn = document.getElementById("logout-close-btn");
  const cancelBtn = document.getElementById("btn-cancel");
  const exitBtn = document.getElementById("btn-exit");
  const headerLoginBtn = document.getElementById("site-header__btn--login");

  // رویداد کلیک روی دکمه خروج
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.remove("hidden");
    });
  }

  //رویداد دکمه بستن
  closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });

  // رویداد کلیک در فضای خالی
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.add("hidden");
    }
  });

  //رویداد دکمه بازگشت
  cancelBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });

  // رویداد کلیک روی دکمه خروج
  exitBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    headerLoginBtn.classList.remove("active");
    alert("خروج از حساب کاربری موفق بود.");
    overlay.classList.add("hidden");

    window.location.reload();
  });
}
