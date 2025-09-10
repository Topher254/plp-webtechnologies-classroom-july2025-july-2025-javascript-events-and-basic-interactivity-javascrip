
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
toggleThemeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});


let counter = 0;
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", function () {
  counter++;
  counterValue.textContent = counter;
});


const signupForm = document.getElementById("signupForm");
const formErrors = document.getElementById("formErrors");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form from submitting
  formErrors.innerHTML = ""; // clear previous errors

  let errors = [];

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    errors.push("Name is required.");
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Enter a valid email address.");
  }

  // Password validation (minimum 6 chars)
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Display errors or success
  if (errors.length > 0) {
    formErrors.innerHTML = errors.join("<br>");
  } else {
    formErrors.style.color = "green";
    formErrors.innerHTML = "Form submitted successfully!";
  }
});
