// MENU TOGGLE (Mobile)

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Aggiorna aria-expanded per accessibilità
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
});

// CLOSE MENU ON LINK CLICK
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// SMOOTH SCROLLING MENU LINKS

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// CONTACT FORM

const form = document.querySelector(".contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // blocca invio reale

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thank you! Your message has been sent 😊";
  formMessage.style.color = "green";
  form.reset();
});

// DARK MODE TOGGLE

const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Controlla se esiste theme salvato
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
} else {
  body.classList.remove("dark");
  toggle.textContent = "🌙";
}

// DARK MODE TOGGLE CLICK EVENT
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
