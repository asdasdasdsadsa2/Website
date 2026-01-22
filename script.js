// Small JS for nav toggle and client-side contact handling
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");
  navToggle && navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", nav.classList.contains("open"));
  });

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Simple client-side validation
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) {
        status.textContent = "Please complete all fields.";
        return;
      }

      // Simulate send (no backend). Replace with fetch() to your API or Form handling service.
      status.textContent = "Sending...";
      setTimeout(() => {
        form.reset();
        status.textContent = "Thanks! Your message was sent (simulated).";
      }, 800);
    });
  }
});