document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-accordion-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-accordion-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // بستن همه آیتم‌های باز
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      // اگر آیتم کلیک شده قبلاً باز نبود، آن را باز کن
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});
