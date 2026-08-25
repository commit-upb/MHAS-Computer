// === AOS Init ===
document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }
});
