// === Navbar Scroll Effect ===
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// === Mobile Menu Toggle ===
function initMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    menu.classList.toggle("open");
    toggle.innerHTML = isOpen
      ? '<i data-lucide="menu" class="w-5 h-5"></i>'
      : '<i data-lucide="x" class="w-5 h-5"></i>';
    lucide.createIcons();
  });

  // Close menu on link click
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
      lucide.createIcons();
    });
  });
}

// === Set Active Nav Link ===
function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

// === Footer Year ===
function initFooter() {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// === Lucide Icons ===
function initLucideIcons() {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// === Init All Shared ===
function initShared() {
  initNavbar();
  initMobileMenu();
  setActiveLink();
  initFooter();
  initLucideIcons();
}

document.addEventListener("DOMContentLoaded", initShared);
