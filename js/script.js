document.addEventListener("DOMContentLoaded", () => {
  /* =====================
     PROCESS CARD ANIMATION
  ===================== */
  const cards = document.querySelectorAll(".process .card");

  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  cards.forEach((card) => observer.observe(card));

  /* =====================
     CONTACT FORM
  ===================== */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! We will contact you shortly.");
      this.reset();
    });
  }
});

document.querySelectorAll('a[href="custom-app-development.html"]').forEach(link => {
  link.addEventListener('click', () => {
    console.log("Custom Apps page clicked");
  });
});
