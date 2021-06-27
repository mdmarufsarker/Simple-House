const faqs = document.querySelectorAll(".faq__box");

faqs.forEach((faq__box) => {
     faq__box.addEventListener("click", () => {
          faq__box.classList.toggle("active");
     });
});
