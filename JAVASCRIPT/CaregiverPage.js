// MediTrack Caregiver Landing JavaScript
  
  document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('caregiverName') || 'Caregiver';
    const greeting = document.querySelector('#welcome-greeting');
    if (greeting) {
      greeting.textContent = `Welcome, ${userName}! Here's how you can support patients today.`;
    }
  });
  function goToLogin() {
    window.location.href = "loginsignup.html"; // replace with your actual file name
  }
  