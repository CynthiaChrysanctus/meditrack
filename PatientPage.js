// MediTrack Patient Landing JavaScript

  // Optional personalization
  function personalizeGreeting() {
    const userName = localStorage.getItem("patientName") || "Patient";
    const greetingEl = document.querySelector("#welcome-greeting");
    if (greetingEl) {
      greetingEl.textContent = `Welcome, ${userName}! Your health journey starts here.`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", personalizeGreeting);
  function goToLogin() {
    window.location.href = "loginsignup.html"; // replace with your actual file name
  }
  