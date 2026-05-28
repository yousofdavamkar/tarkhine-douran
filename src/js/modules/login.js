import ApiCall from "/src/js/utils/ApiCall.js";

const usersApi = new ApiCall("users");

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
            <!-- مرحله دوم-->
            <div id="step-code-verification" class="modal-step hidden">
              <p class="step-phone-input-title body-md">کد تایید</p>
              <p id="subtitle-step-code-verification" class="step-phone-input-subtitle" >کد تایید پنج‌رقمی به شماره ... ارسال شد.</p>
              <div class="code-input-group body-sm">
                <input type="text" class="code-input" maxlength="1" data-index="0">
                <input type="text" class="code-input" maxlength="1" data-index="1">
                <input type="text" class="code-input" maxlength="1" data-index="2">
                <input type="text" class="code-input" maxlength="1" data-index="3">
                <input type="text" class="code-input" maxlength="1" data-index="4">
              </div>

              <div class="timer-and-edit-phone">
                <div class="resend-code-section">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99967 15.1666C4.04634 15.1666 0.833008 11.9533 0.833008 7.99992C0.833008 4.04659 4.04634 0.833252 7.99967 0.833252C11.953 0.833252 15.1663 4.04659 15.1663 7.99992C15.1663 11.9533 11.953 15.1666 7.99967 15.1666ZM7.99967 1.83325C4.59967 1.83325 1.83301 4.59992 1.83301 7.99992C1.83301 11.3999 4.59967 14.1666 7.99967 14.1666C11.3997 14.1666 14.1663 11.3999 14.1663 7.99992C14.1663 4.59992 11.3997 1.83325 7.99967 1.83325Z" fill="#717171"/>
                  <path d="M10.4731 10.6199C10.3864 10.6199 10.2998 10.5999 10.2198 10.5466L8.1531 9.31326C7.63977 9.00659 7.25977 8.33326 7.25977 7.73992V5.00659C7.25977 4.73326 7.48643 4.50659 7.75977 4.50659C8.0331 4.50659 8.25977 4.73326 8.25977 5.00659V7.73992C8.25977 7.97992 8.45977 8.33326 8.66643 8.45326L10.7331 9.68659C10.9731 9.82659 11.0464 10.1333 10.9064 10.3733C10.8064 10.5333 10.6398 10.6199 10.4731 10.6199Z" fill="#717171"/>
                  </svg>
                  <span id="countdown-timer" class="countdown-timer caption-md">۱:۵۹</span>
                  <span id="timer-text" class="timer-text caption-md">تا دریافت مجدد کد</span>
                  <a href="#" id="resend-code-link" class="link-text caption-md hidden">دریافت مجدد کد</a>
                </div>
                <a href="#" id="edit-phone-number-link" class="link-text caption-md ">ویرایش شماره</a>
              </div>

              <button id="submit-code-btn" class="submit-btn button-lg" disabled>ثبت کد</button>
            </div>
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
  const codeInputs = document.querySelectorAll(".code-input");
  const submitCodeBtn = document.getElementById("submit-code-btn");
  const editPhoneNumberLink = document.getElementById("edit-phone-number-link");
  const resendCodeLink = document.getElementById("resend-code-link");
  const countdownTimerSpan = document.getElementById("countdown-timer");
  const timerTextShow = document.getElementById("timer-text");

  let currentPhoneNumber = "";
  let countdownInterval;
  let remainingTime = 0;
  let generatedOtp = null;

  // فعال ساز مرحله اول
  function showPhoneInputStep() {
    codeVerificationStep.classList.add("hidden");
    phoneInputStep.classList.remove("hidden");
    backToPhoneBtn.classList.add("hidden");
    submitCodeBtn.setAttribute("disabled", "true");
    stopCountdown();
    clearCodeInputs();
    clearCodeInputsError();
    phoneInput.focus();
  }

  // فعال ساز مرحله دوم
  function showCodeVerificationStep(phoneNumber) {
    phoneInputStep.classList.add("hidden");
    codeVerificationStep.classList.remove("hidden");
    backToPhoneBtn.classList.remove("hidden");
    codeSentToNumberText.textContent = `کد تایید پنج‌رقمی به شماره ${phoneNumber} ارسال شد.`;
    currentPhoneNumber = phoneNumber;
    startCountdown();
    codeInputs[0].focus();
  }

  //پاک کنندهکد وارد شده
  function clearCodeInputs() {
    codeInputs.forEach((input) => (input.value = ""));
  }

  function clearCodeInputsError() {
    codeInputs.forEach((input) => {
      input.classList.remove("error");
    });
  }

  // open login modal
  if (headerLoginBtn) {
    headerLoginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.remove("hidden");
      showPhoneInputStep();
    });
  }
  // modal cose btn
  closeBtn.addEventListener("click", (e) => {
    overlay.classList.add("hidden");
    showPhoneInputStep();
  });
  // کلیک کردن در فضای خالی  برای بسته شدن modal.
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.add("hidden");
      showPhoneInputStep();
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
      currentPhoneNumber = phoneInput.value;

      generatedOtpCode();

      console.log(`شماره موبایل ارسال شد: ${currentPhoneNumber}`);
      showCodeVerificationStep(currentPhoneNumber);
    }
  });

  //تغییر شماره موبایل
  editPhoneNumberLink.addEventListener("click", (e) => {
    e.preventDefault();
    showPhoneInputStep();
  });

  // مدیریت ورودی‌های کد (مرحله 2)
  codeInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      clearCodeInputsError();
      e.target.value = e.target.value.replace(/[^0-9]/g, ""); // فقط اعداد مجاز
      if (e.target.value.length === 1 && index < codeInputs.length - 1) {
        codeInputs[index + 1].focus(); // پرش به ورودی بعدی
      }
      checkCodeCompletion();
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && e.target.value.length === 0 && index > 0) {
        codeInputs[index - 1].focus(); // پرش به ورودی قبلی هنگام Backspace روی فیلد خالی
      }
    });

    input.addEventListener("focus", (e) => {
      e.target.select(); // انتخاب متن موجود هنگام فوکوس
    });
  });

  function checkCodeCompletion() {
    let allFilled = true;
    let fullCode = "";
    codeInputs.forEach((input) => {
      if (input.value.length === 0 || !/\d/.test(input.value)) {
        // بررسی اینکه حتماً عدد باشد
        allFilled = false;
      }
      fullCode += input.value;
    });

    if (allFilled) {
      submitCodeBtn.removeAttribute("disabled");
    } else {
      submitCodeBtn.setAttribute("disabled", "true");
    }
  }

  // --- توابع مدیریت شمارش معکوس ---
  function startCountdown() {
    stopCountdown(); // اگر قبلاً تایمری در حال اجراست، متوقفش کن
    remainingTime = 119; // 1 دقیقه و 59 ثانیه
    remainingTime = 10; // 1 دقیقه و 59 ثانیه
    timerTextShow.classList.remove("hidden");
    resendCodeLink.classList.add("hidden");
    updateCountdownDisplay();

    countdownInterval = setInterval(() => {
      remainingTime--;
      updateCountdownDisplay();
      if (remainingTime <= 0) {
        stopCountdown();
        timerTextShow.classList.add("hidden");
        resendCodeLink.classList.remove("hidden");
      }
    }, 1000);
  }

  function stopCountdown() {
    clearInterval(countdownInterval);
  }

  function updateCountdownDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    countdownTimerSpan.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  // کلیک روی "ثبت کد" (مرحله 2)
  submitCodeBtn.addEventListener("click", async () => {
    if (!submitCodeBtn.disabled) {
      let verificationCode = "";
      codeInputs.forEach((input) => (verificationCode += input.value));

      if (verificationCode !== generatedOtp) {
        codeInputs.forEach((input) => {
          input.classList.add("error");
        });

        clearCodeInputs();
        alert("کد وارد شده اشتباه است!");
        return;
      }

      try {
        console.log("Searching for:", JSON.stringify(currentPhoneNumber));
        console.log("Searching for:", currentPhoneNumber);
        // const filterEndpoint = `users?mobile=${currentPhoneNumber}`;
        const filterEndpoint = `users/${currentPhoneNumber}`;

        console.log("endpoint", filterEndpoint);

        const filterApi = new ApiCall(filterEndpoint);

        const response = await filterApi.get();

        const users = response.data;

        let currentUserData = null;

        if (typeof response === "string") {
          console.log("کاربر پیدا نشد، در حال ثبت‌ نام...");

          const newUser = {
            id: `${currentPhoneNumber}`,
            mobile: currentPhoneNumber,
            role: "user",
            createdAt: new Date().toISOString(),
          };

          const postResponse = await usersApi.post(newUser);

          if (postResponse.status === 201) {
            console.log("کاربر جدید ثبت شد:", postResponse.data);
            currentUserData = postResponse.data;
          } else {
            // اگر پست ناموفق بود، خطا می‌دهیم
            throw new Error(
              `ثبت نام کاربر ناموفق بود. وضعیت: ${postResponse.status}`,
            );
          }
        }

        console.log("پاسخ برگشته شده از سرور", users);
        console.log(
          "طول پاسخ برگشته شده از سرور ",
          users && Object.keys(users).length > 0,
        );

        if (users && Object.keys(users).length > 0) {
          console.log("کاربر پیدا شد (توسط سرور):", users);
          currentUserData = users;
        }
        if (currentUserData) {
          finalizeLogin(currentUserData);
        } else {
          // اگر به هر دلیلی currentUserData خالی ماند
          alert("مشکلی در ثبت یا ورود کاربر رخ داد. لطفاً دوباره امتحان کنید.");
        }
      } catch (error) {
        console.error("خطا در فرآیند ورود/ثبت نام:", error);
        alert(`خطایی رخ داد: ${error.message} `);
      }
    }
  });

  // تابع نهایی سازی ورود
  function finalizeLogin(userData) {
    localStorage.setItem("currentUser", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");

    alert(`خوش آمدید! کاربر با شماره ${userData.mobile} وارد شد.`);

    overlay.classList.add("hidden");
    showPhoneInputStep(); // ریست کردن فرم برای دفعه بعد

    // در صورت نیاز به رفرش یا تغییر هدر:
    window.location.reload();
  }

  // کلیک روی "دریافت مجدد کد" (مرحله 2)
  resendCodeLink.addEventListener("click", (e) => {
    e.preventDefault();
    generatedOtpCode();
    console.log(`درخواست مجدد کد برای شماره ${currentPhoneNumber}`);
    clearCodeInputs();
    clearCodeInputsError();
    submitCodeBtn.setAttribute("disabled", "true");
    startCountdown(); // شروع مجدد شمارش معکوس
    codeInputs[0].focus();
  });

  function generatedOtpCode() {
    // شبیه‌سازی تولید کد ۵ رقمی
    generatedOtp = Math.floor(10000 + Math.random() * 89999).toString();
    console.log(`کد تایید شبیه‌سازی شده: ${generatedOtp}`);
    alert(`کد otp شماره ${currentPhoneNumber} : ${generatedOtp}`); // نمایش برای تست
  }
}
