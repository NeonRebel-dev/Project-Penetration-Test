// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact Form Feedback
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", e => {
  e.preventDefault();
  message.textContent = "Thank you! We'll get back to you soon.";
  message.style.color = "#4fd1c5";
  form.reset();
});

// ---------- Fade-In Scroll Animation ----------
const fadeSections = document.querySelectorAll('.fade-in');
const fadeCards = document.querySelectorAll('.fade-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeSections.forEach(el => observer.observe(el));

// Staggered reveal for service cards
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 200);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

fadeCards.forEach(card => cardObserver.observe(card));


