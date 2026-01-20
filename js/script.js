/* =================================================
   GLOBAL DOM READY
================================================= */
document.addEventListener("DOMContentLoaded", () =>
{
  /* =====================
     PROCESS CARD ANIMATION
  ===================== */
  const cards = document.querySelectorAll(".process .card");

  if (cards.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((card) => observer.observe(card));
  }

  /* =====================
    PROBLEMS SCROLL REVEAL + HIDE
  ===================== */
  const problemItems = document.querySelectorAll(".problem-item");

  if (problemItems.length)
  {
    const problemObserver = new IntersectionObserver(
      (entries) => 
      {
        entries.forEach((entry) =>
        {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          } else {
            entry.target.classList.remove("reveal");
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    problemItems.forEach((item) => problemObserver.observe(item));
  }

  /* =====================
    HOW WE WORK – FLOW ANIMATION
  ===================== */
  const canvasBlocks = document.querySelectorAll(".canvas-block");

  if (canvasBlocks.length) {
    const canvasObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -120px 0px"
      }
    );

    canvasBlocks.forEach((block) => canvasObserver.observe(block));
  }

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

  /* =====================
     LOOPING TYPING EFFECT
  ===================== */
  const textEl = document.getElementById("typedText");
  const cursor = document.querySelector(".typing-cursor");

  if (textEl) {
    const fullText = textEl.textContent.trim();
    let index = 0;
    let isDeleting = false;

    textEl.textContent = "";

    function typeLoop() {
      if (!isDeleting) {
        // Typing forward
        textEl.textContent = fullText.substring(0, index + 1);
        index++;

        if (index === fullText.length) {
          setTimeout(() => (isDeleting = true), 1600);
        }
      } else {
        // Deleting backward
        textEl.textContent = fullText.substring(0, index - 1);
        index--;

        if (index === 0) {
          isDeleting = false;
        }
      }

      const speed = isDeleting ? 14 : 26;
      setTimeout(typeLoop, speed);
    }

    setTimeout(typeLoop, 500);
  }
});

/* =================================================
   HAMBURGER MENU (SAFE ON ALL PAGES)
================================================= */
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileBackdrop = document.getElementById("mobileBackdrop");

function openMenu() {
  mobileMenu.classList.add("active");
  mobileBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("active");
  mobileBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

if (hamburger && mobileMenu && mobileBackdrop) {
  hamburger.addEventListener("click", openMenu);
  mobileBackdrop.addEventListener("click", closeMenu);

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

/* =================================================
   OPTIONAL: DEBUG / PAGE TRACKING
================================================= */
document
  .querySelectorAll('a[href="custom-app-development.html"]')
  .forEach((link) => {
    link.addEventListener("click", () => {
      console.log("Custom Apps page clicked");
    });
  });

/* =====================
   SERVICES SCROLL REVEAL + HIDE
===================== */
const serviceItems = document.querySelectorAll(".service-item");

if (serviceItems.length) {
  const serviceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        } else {
          entry.target.classList.remove("reveal");
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px -100px 0px"
    }
  );

  serviceItems.forEach((item) => serviceObserver.observe(item));
}

/* =====================
   AUDIENCE SECTION SCROLL REVEAL + HIDE
===================== */
const audienceItems = document.querySelectorAll(".audience-list li");

if (audienceItems.length) {
  const audienceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        } else {
          entry.target.classList.remove("reveal");
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: "0px 0px -80px 0px"
    }
  );

  audienceItems.forEach((item) => audienceObserver.observe(item));
}

/* =====================
   PRINCIPLES SCROLL REVEAL + HIDE
===================== */
const principles = document.querySelectorAll(".principle");

if (principles.length) {
  const principleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        } else {
          entry.target.classList.remove("reveal");
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: "0px 0px -100px 0px"
    }
  );

  principles.forEach((item) => principleObserver.observe(item));
}


