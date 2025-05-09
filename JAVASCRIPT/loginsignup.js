// Toggle between Patient and Caregiver forms
function toggleRole(role) {
  const formTitle = document.getElementById("form-title");
  if (role === 'patient') {
      formTitle.textContent = "Login for Patients";
  } else if (role === 'caregiver') {
      formTitle.textContent = "Login for Caregivers";
  }
}

// Toggle between Login and Sign Up forms
function toggleForms() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const toggleLinks = document.querySelectorAll(".toggle-links a");

  // Toggle the forms
  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");

  // Toggle the link texts
  toggleLinks[0].classList.toggle("hidden");
  toggleLinks[1].classList.toggle("hidden");
}

// Handle the form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // Add your login logic here (validation, API call, etc.)
  alert("Logged in successfully!");
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  // Add your sign-up logic here (validation, API call, etc.)
  alert("Signed up successfully!");
});
