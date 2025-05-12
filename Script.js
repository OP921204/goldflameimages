document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const message = document.getElementById('formMessage');
  message.textContent = "Sending...";
  message.style.color = "gray";

  setTimeout(() => {
    message.textContent = "Thanks for your message! I'll get back to you soon.";
    message.style.color = "green";

    this.reset();
  }, 1000);
});
