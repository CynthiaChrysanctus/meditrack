document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMsg = document.getElementById("responseMessage");
  
    if (!name || !email || !message) {
      responseMsg.textContent = "Please fill in all fields.";
      responseMsg.style.color = "red";
      return;
    }
  
    // Simulate successful submission
    responseMsg.textContent = "Thanks for reaching out! We'll get back to you shortly.";
    responseMsg.style.color = "#008C76";
  
    // Reset form
    this.reset();
  });
  