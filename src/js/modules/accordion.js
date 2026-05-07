import ApiCall from "/src/js/utils/ApiCall.js";

// ساخت نمونه API برای endpoint faqs
const faqApi = new ApiCall("faqs");

// گرفتن دیتای FAQها و ایجاد HTML
async function loadFaqs() {
  const container = document.querySelector(".faq-accordion-container");

  const res = await faqApi.get(); // GET /faqs

  const faqs = res.data; // آرایه‌ی داخلی

  faqs.forEach((faq) => {
    const item = document.createElement("div");
    item.classList.add("faq-accordion-item");

    item.innerHTML = `
  
              <div class="faq-accordion-question">
                <p class="accordion-p-question body-xl">
                 ${faq.question}
                </p>
                <svg
                  class="faq-accordion-icon"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="faq-accordion-answer">
                <p class="body-md">
                 ${faq.answer}
                </p>
              </div>
            
    
    `;
    // آکاردئون (چند تا بتوانند باز باشند)
    item.addEventListener("click", () => {
      item.classList.toggle("open");
    });

    container.appendChild(item);
  });
}

// اجرای تابع
loadFaqs();
