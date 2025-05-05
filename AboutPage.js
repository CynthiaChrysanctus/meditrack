// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");

  // Toggle mobile menu
  navToggle.addEventListener("click", function () {
    siteNav.classList.toggle("open");
  });

  // Smooth scrolling for anchor links
  const links = document.querySelectorAll("a[href^='#']");
  for (const link of links) {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        siteNav.classList.remove("open");
      }
    });
  }

  // AOS initialization (Animate On Scroll library)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
    });
  }

  // CTA Button interaction
  const ctaBtn = document.getElementById("cta-button");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", function () {
      window.location.href = "/get-started.html"; // Update this URL to your actual CTA target
    });
  }
});
