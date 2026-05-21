export function initLoginModal() {
  if (document.getElementById("login-modal-overlay")) return;

  const modalHTML = `

    <div id="login-modal-overlay" class="modal-overlay hidden">

    <div class="modal-box">
        <div class="modal-box-header">
            <div class="place-holder_btn">
                <button id="back-modal-to-phone_btn" class="back-modal-to-phone_btn hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.61002C8.08961 4.32002 8.08961 3.84002 8.37961 3.55002C8.66961 3.26002 9.14961 3.26002 9.43961 3.55002L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z" fill="#717171"/>
                    </svg>
                </button>
            </div>
            <div class="modal-box-header__brand">
                <picture class="modal-box-header_logo">
                    <source srcset="/images/Logo.webp" type="image/webp" />
                    <source srcset="/images/Logo.png" type="image/png" />
                    <img src="/images/Logo.png" alt="logo" />
                </picture>
            </div>
           <div class="place-holder_btn">
                <button id="close-modal_btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5.31348" y="7.41418" width="2" height="16" rx="1" transform="rotate(-45 5.31348 7.41418)" fill="#717171"/>
                        <rect x="16.3135" y="6" width="2" height="16" rx="1" transform="rotate(45 16.3135 6)" fill="#717171"/>
                    </svg>
                </button>
            </div>
        </div>
        
        <div class="modal-box-body">
            <!-- مرحله اول: ورود شماره موبایل -->
            <div id="step-phone-input" class="modal-step">
                <p class="step-phone-input-title body-md">ورود / ثبت نام</p>
                <p class="step-phone-input-subtitle">با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.</p>
                <div class="input-group">
                  <label class="floating-label caption-md">شماره همراه</label>
                  <input class="body-md" type="text" id="phone-input" placeholder="۰۹۱۴ ۸۶۴ ۳۳۵۰" maxlength="11" />
                </div>
                <button id="submit-phone-btn" class="submit-btn button-lg" disabled>ادامه</button>
                <p class="modal-footer-text caption-sm">
                  ورود و عضویت در ترخینه به منزله قبول <a class="terms-text">قوانین و مقررات</a> است.
                </p>
            </div>
            <div id="step-code-verification" class="modal-step hidden">
                <p class="step-phone-input-title body-md">کد تایید</p>
                <p id="subtitle-step-code-verification" class="step-phone-input-subtitle" >کد تایید پنج‌رقمی به شماره ... ارسال شد.</p>
            </div>
        </div>
    </div>

  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const overlay = document.getElementById("login-modal-overlay");
  const closeBtn = document.getElementById("close-modal_btn");
  const headerLoginBtn = document.getElementById("header-login-btn");
  const backToPhoneBtn = document.getElementById("back-modal-to-phone_btn");

  // مرحله 1
  const phoneInputStep = document.getElementById("step-phone-input");
  const phoneInput = document.getElementById("phone-input");
  const submitPhoneBtn = document.getElementById("submit-phone-btn");

  // مرحله 2
  const codeVerificationStep = document.getElementById(
    "step-code-verification",
  );
  const codeSentToNumberText = document.getElementById(
    "subtitle-step-code-verification",
  );

  // فعال ساز مرحله اول
  function showPhoneInputStep() {
    codeVerificationStep.classList.add("hidden");
    phoneInputStep.classList.remove("hidden");
    backToPhoneBtn.classList.add("hidden");
  }

  // فعال ساز مرحله دوم
  function showCodeVerificationStep(phoneNumber) {
    phoneInputStep.classList.add("hidden");
    codeVerificationStep.classList.remove("hidden");
    backToPhoneBtn.classList.remove("hidden");
    codeSentToNumberText.textContent = `کد تایید پنج‌رقمی به شماره ${phoneNumber} ارسال شد.`;
  }

  // open login modal
  if (headerLoginBtn) {
    headerLoginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.remove("hidden");
    });
  }
  // modal cose btn
  closeBtn.addEventListener("click", (e) => {
    overlay.classList.add("hidden");
  });
  // کلیک کردن در فضای خالی  برای بسته شدن modal.
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.add("hidden");
    }
  });

  // active btn ادامه
  phoneInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "").substring(0, 11);
    if (e.target.value.length === 11 && e.target.value.startsWith("09")) {
      submitPhoneBtn.removeAttribute("disabled");
    } else {
      submitPhoneBtn.setAttribute("disabled", "true");
    }
  });

  // رویداد دکمه برگشت
  backToPhoneBtn.addEventListener("click", (e) => {
    showPhoneInputStep();
  });

  // رفتن به مرحله ارسال کد تایید
  submitPhoneBtn.addEventListener("click", (e) => {
    if (!submitPhoneBtn.disabled) {
      const enteredPhoneNumber = phoneInput.value;
      console.log(`شماره موبایل ارسال شد: ${enteredPhoneNumber}`);
      showCodeVerificationStep(enteredPhoneNumber);
    }
  });
}
