// Simple add-to-cart functionality
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Added to Cart!");
  });
});

// Form submission message
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
  });
