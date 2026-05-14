export function initLoginModal() {
  if (document.getElementById("login-modal-overlay")) return;

  const modalHTML = `

    <div id="login-modal-overlay" class="modal-overlay hidden">

    <div class="modal-box">
        <div class="modal-box-header">
            <button id="close_btn_modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5.31348" y="7.41418" width="2" height="16" rx="1" transform="rotate(-45 5.31348 7.41418)" fill="#717171"/>
                    <rect x="16.3135" y="6" width="2" height="16" rx="1" transform="rotate(45 16.3135 6)" fill="#717171"/>
                </svg>
            </button>
            <div class="modal-box-header__brand">
            <picture class="modal-box-header_logo">
                <source srcset="/images/Logo.webp" type="image/webp" />
                <source srcset="/images/Logo.png" type="image/png" />
                <img src="/images/Logo.png" alt="logo" />
            </picture>
            </div>
            <button id="back_btn_modal_to_phone">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.61002C8.08961 4.32002 8.08961 3.84002 8.37961 3.55002C8.66961 3.26002 9.14961 3.26002 9.43961 3.55002L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z" fill="#717171"/>
                </svg>
            </button>
        </div>
    </div>

  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const overlay = document.getElementById("login-modal-overlay");

  const headerLoginBtn = document.getElementById("header-login-btn");

  if (headerLoginBtn) {
    headerLoginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.remove("hidden");
    });
  }
}
