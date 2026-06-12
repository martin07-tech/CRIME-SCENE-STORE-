// =========================
// PAGE LOAD
// =========================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// =========================
// SCROLL REVEAL OBSERVER
// =========================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// observe everything that should animate in
document.querySelectorAll(
  ".about, .about-text, .about-image, .news-card, .gallery-section, .collage, .top-image, .bottom-row, .cta-section"
).forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// =========================
// NAVBAR ACTIVE LINK
// =========================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
