/**
 * Corporate Website — Main JavaScript
 *
 * Handles form submissions for login and contact sections.
 */

(function () {
  "use strict";

  // Set current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Add Google Fonts dynamically
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  // Login Form Handler
  const loginForm = document.getElementById("login-form");
  const loginMessage = document.getElementById("login-message");

  if (loginForm && loginMessage) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Simple validation
      if (!email || !password) {
        showMessage(loginMessage, "Please fill in all fields", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showMessage(loginMessage, "Please enter a valid email address", "error");
        return;
      }

      // Simulate successful login
      showMessage(loginMessage, "Login successful! Redirecting...", "success");
      
      // Reset form
      setTimeout(() => {
        loginForm.reset();
        loginMessage.textContent = "";
        loginMessage.className = "login-message";
      }, 2000);
    });
  }

  // Contact Form Handler
  const contactForm = document.getElementById("contact-form");
  const contactMessage = document.getElementById("contact-message");

  if (contactForm && contactMessage) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Simple validation
      if (!name || !email || !message) {
        showMessage(contactMessage, "Please fill in all fields", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showMessage(contactMessage, "Please enter a valid email address", "error");
        return;
      }

      if (message.length < 10) {
        showMessage(contactMessage, "Message must be at least 10 characters long", "error");
        return;
      }

      // Simulate successful submission
      showMessage(contactMessage, "Thank you! Your message has been sent successfully.", "success");
      
      // Reset form
      setTimeout(() => {
        contactForm.reset();
        contactMessage.textContent = "";
        contactMessage.className = "contact-message";
      }, 2000);
    });
  }

  /**
   * Display a message with styling
   * @param {HTMLElement} element - The message element
   * @param {string} text - The message text
   * @param {string} type - The message type ('success' or 'error')
   */
  function showMessage(element, text, type) {
    element.textContent = text;
    element.className = `${element.className.split(" ")[0]} ${type}`;
  }

  /**
   * Validate email format
   * @param {string} email - The email to validate
   * @returns {boolean} - Whether the email is valid
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
})();
