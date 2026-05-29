import ApiCall from "/src/js/utils/ApiCall.js";

async function loadAccordionData() {
  const container = document.querySelector("[data-accordion]");
  const endpoint = container?.dataset.endpoint;

  if (!container || !endpoint) {
    // console.warn("Accordion container or endpoint not found!");
    return;
  }

  const api = new ApiCall(endpoint);

  try {
    const res = await api.get();
    const items = res.data;

    items.forEach((item) => {
      const element = document.createElement("div");
      element.classList.add("faq__accordion-item");

      element.innerHTML = `
        <div class="faq__accordion-question">
          <p class="faq__accordion-question-text">${item.question}</p>

          <svg
            class="faq__accordion-icon"
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

        <div class="faq__accordion-answer">
          <p class="faq__accordion-answer-text body-md">${item.answer}</p>
        </div>
      `;

      element.addEventListener("click", () => {
        element.classList.toggle("open");
      });

      container.appendChild(element);
    });
  } catch (error) {
    console.error("Error loading Accordion:", error);
  }
}

loadAccordionData();

// import ApiCall from "/src/js/utils/ApiCall.js";

// const faqApi = new ApiCall("faqs");

// async function loadFaqs() {
//   const container = document.querySelector(".faq__accordion");

//   const res = await faqApi.get(); // GET /faqs

//   const faqs = res.data;

//   faqs.forEach((faq) => {
//     const item = document.createElement("div");
//     item.classList.add("faq__accordion-item");

//     item.innerHTML = `
//           <div class="faq__accordion-question">
//             <p class="faq__accordion-question-text">
//               ${faq.question}
//             </p>

//             <svg
//               class="faq__accordion-icon"
//               width="32"
//               height="32"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M6 9L12 15L18 9"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//               />
//             </svg>
//           </div>

//           <div class="faq__accordion-answer">
//             <p class="faq__accordion-answer-text body-md">
//               ${faq.answer}
//             </p>
//           </div>

//     `;
//     // آکاردئون (چند تا بتوانند باز باشند)
//     item.addEventListener("click", () => {
//       item.classList.toggle("open");
//     });

//     container.appendChild(item);
//   });
// }

// loadFaqs();
