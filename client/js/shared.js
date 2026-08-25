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

// === Image Helper & Fallback ===
function getFallbackImage(url, textContext = '') {
  if (url && typeof url === 'string' && url.trim() !== '') {
    return url;
  }
  return `https://placehold.co/600x400/e8e6e5/0c0a09?text=${encodeURIComponent(textContext || 'MHAS Computer')}`;
}

window.getFallbackImage = getFallbackImage;

// === Shopping Cart & WhatsApp Checkout Module ===
const CART_KEY = "mhas_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, qty = 1) {
  const prodList = (typeof products !== "undefined" && Array.isArray(products)) ? products : [];
  const product = prodList.find(p => p.id === Number(productId));
  if (!product) return;

  let cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === product.id);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      brand: product.brand,
      price: product.price,
      image: product.image,
      quantity: qty
    });
  }

  saveCart(cart);
  showCartToast(product.name);
}

function updateCartQuantity(productId, delta) {
  let cart = getCart();
  const idx = cart.findIndex(item => item.id === Number(productId));
  if (idx > -1) {
    cart[idx].quantity += delta;
    if (cart[idx].quantity <= 0) {
      cart.splice(idx, 1);
    }
    saveCart(cart);
  }
}

function removeFromCart(productId) {
  let cart = getCart().filter(item => item.id !== Number(productId));
  saveCart(cart);
}

function clearCart() {
  if (confirm("Apakah Anda yakin ingin mengosongkan keranjang belanja?")) {
    saveCart([]);
  }
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer && overlay) {
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100", "pointer-events-auto");
    drawer.classList.remove("translate-x-full");
    drawer.classList.add("translate-x-0");
    document.body.style.overflow = "hidden";
    renderCartDrawerItems();
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer && overlay) {
    overlay.classList.remove("opacity-100", "pointer-events-auto");
    overlay.classList.add("opacity-0", "pointer-events-none");
    drawer.classList.remove("translate-x-0");
    drawer.classList.add("translate-x-full");
    document.body.style.overflow = "";
  }
}

function showCartToast(productName) {
  const toast = document.getElementById("cart-toast");
  const toastText = document.getElementById("cart-toast-text");
  if (!toast) return;

  if (toastText) {
    toastText.textContent = `"${productName}" ditambahkan ke keranjang!`;
  }
  toast.classList.add("show");

  if (window._cartToastTimer) clearTimeout(window._cartToastTimer);
  window._cartToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

function renderCartDrawerItems() {
  const cart = getCart();
  const listEl = document.getElementById("cart-items-list");
  const emptyEl = document.getElementById("cart-empty-state");
  const footerEl = document.getElementById("cart-drawer-footer");
  const countBadge = document.getElementById("cart-drawer-count-badge");
  const totalPriceEl = document.getElementById("cart-total-price");

  if (!listEl) return;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (totalPriceEl) {
    totalPriceEl.textContent = typeof formatPrice === "function" ? formatPrice(totalPrice) : "Rp " + totalPrice.toLocaleString("id-ID");
  }

  if (cart.length === 0) {
    listEl.innerHTML = "";
    listEl.classList.add("hidden");
    emptyEl.classList.remove("hidden");
    footerEl.classList.add("hidden");
    if (typeof lucide !== "undefined") lucide.createIcons();
    return;
  }

  listEl.classList.remove("hidden");
  emptyEl.classList.add("hidden");
  footerEl.classList.remove("hidden");

  listEl.innerHTML = cart.map(item => {
    const itemImg = getFallbackImage(item.image, item.name);
    const itemSubtotal = item.price * item.quantity;
    const formattedPrice = typeof formatPrice === "function" ? formatPrice(itemSubtotal) : "Rp " + itemSubtotal.toLocaleString("id-ID");

    return `
      <div class="flex gap-3.5 p-3 rounded-cards bg-stone-canvas/70 border border-stone-border items-center">
        <div class="w-16 h-16 rounded-inputs overflow-hidden bg-soot shrink-0">
          <div class="w-full h-full cart-item-img" style="background-image: url('${itemImg}')"></div>
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="body-sm font-medium text-ink-black truncate">${item.name}</h4>
          <p class="caption text-warm-gray mb-1.5">${item.category}</p>
          <div class="flex items-center justify-between">
            <span class="body-sm font-semibold text-ink-black">${formattedPrice}</span>
            <div class="flex items-center gap-1.5">
              <button type="button" class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, -1)" aria-label="Kurang">-</button>
              <span class="text-xs font-semibold text-ink-black w-4 text-center">${item.quantity}</span>
              <button type="button" class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, 1)" aria-label="Tambah">+</button>
            </div>
          </div>
        </div>
        <button type="button" class="p-1 text-warm-gray hover:text-red-500 transition-colors shrink-0" onclick="removeFromCart(${item.id})" aria-label="Hapus item">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join("");

  if (typeof lucide !== "undefined") lucide.createIcons();
}

function updateCartUI() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update navbar badges
  document.querySelectorAll(".navbar-cart-badge").forEach(badge => {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });

  renderCartDrawerItems();
}

function checkoutWhatsApp() {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Keranjang belanja Anda masih kosong!");
    return;
  }

  const waNumber = (typeof siteConfig !== "undefined" && siteConfig.contact && siteConfig.contact.whatsapp) 
    ? siteConfig.contact.whatsapp 
    : "6281234567890";

  let total = 0;
  const itemsText = cart.map((item, idx) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    const priceFormatted = typeof formatPrice === "function" ? formatPrice(item.price) : "Rp " + item.price.toLocaleString("id-ID");
    const subtotalFormatted = typeof formatPrice === "function" ? formatPrice(subtotal) : "Rp " + subtotal.toLocaleString("id-ID");
    return `${idx + 1}. *${item.name}*\n   • Jumlah: ${item.quantity}x (${priceFormatted})\n   • Subtotal: ${subtotalFormatted}`;
  }).join("\n\n");

  const totalFormatted = typeof formatPrice === "function" ? formatPrice(total) : "Rp " + total.toLocaleString("id-ID");

  const message = `Halo *MHAS Computer*,\nSaya ingin melakukan pemesanan produk berikut:\n\n${itemsText}\n\n━━━━━━━━━━━━━━━━━━━━\n*TOTAL TAGIHAN: ${totalFormatted}*\n━━━━━━━━━━━━━━━━━━━━\n\nMohon informasi ketersediaan stok, ongkos kirim, dan metode pembayaran. Terima kasih!`;

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

// Inject Cart HTML into DOM
function injectCartDOM() {
  if (document.getElementById("cart-drawer")) return;

  const cartHTML = `
    <!-- Cart Overlay -->
    <div id="cart-overlay" class="fixed inset-0 bg-ink-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 opacity-0 pointer-events-none"></div>

    <!-- Cart Drawer -->
    <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-pure-white z-50 shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300 ease-in-out">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-stone-border">
        <div class="flex items-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5 text-cyan-signal"></i>
          <h2 class="font-display font-medium text-lg text-ink-black">Keranjang Belanja</h2>
          <span id="cart-drawer-count-badge" class="px-2 py-0.5 text-xs font-semibold rounded-tags bg-sky-wash text-cyan-edge">0</span>
        </div>
        <button id="cart-close-btn" type="button" class="p-2 text-warm-gray hover:text-ink-black rounded-buttons hover:bg-stone-canvas transition-colors" aria-label="Tutup keranjang">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Items List Container -->
      <div id="cart-items-list" class="flex-1 overflow-y-auto p-6 space-y-3"></div>

      <!-- Empty State -->
      <div id="cart-empty-state" class="flex-1 flex flex-col items-center justify-center p-6 text-center hidden">
        <div class="w-16 h-16 rounded-full bg-stone-canvas flex items-center justify-center mb-4 text-warm-gray">
          <i data-lucide="shopping-cart" class="w-8 h-8"></i>
        </div>
        <h3 class="font-display font-medium text-base text-ink-black mb-1">Keranjang Masih Kosong</h3>
        <p class="body-sm text-warm-gray mb-6 max-w-xs">Belum ada produk yang ditambahkan ke keranjang belanja Anda.</p>
        <a href="product.html" id="cart-shop-now-btn" class="btn-pill btn-pill-filled btn-sm">
          Mulai Belanja
        </a>
      </div>

      <!-- Footer Summary -->
      <div id="cart-drawer-footer" class="p-6 border-t border-stone-border bg-stone-canvas/50 space-y-4">
        <div class="flex items-center justify-between">
          <span class="body-sm text-warm-gray">Total Tagihan</span>
          <span id="cart-total-price" class="font-display font-semibold text-lg text-ink-black">Rp 0</span>
        </div>
        <button id="cart-checkout-wa-btn" type="button" class="w-full btn-pill btn-pill-filled py-3 bg-[#25D366] hover:bg-[#20bd5a] text-pure-white border-[#25D366] font-medium flex items-center justify-center gap-2 shadow-subtle transition-all">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          Checkout via WhatsApp
        </button>
        <div class="flex items-center justify-between text-xs text-warm-gray">
          <button id="cart-clear-btn" type="button" class="hover:text-red-500 transition-colors">
            Kosongkan Keranjang
          </button>
          <span>Garansi Resmi & Aman</span>
        </div>
      </div>
    </div>

    <!-- Cart Toast Alert -->
    <div id="cart-toast" class="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-soot text-pure-white px-5 py-3.5 rounded-cards shadow-xl border border-stone-border/20 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none">
      <div class="w-7 h-7 rounded-full bg-cyan-signal text-ink-black flex items-center justify-center shrink-0">
        <i data-lucide="check" class="w-4 h-4"></i>
      </div>
      <div>
        <p class="body-sm font-medium text-pure-white" id="cart-toast-text">Produk ditambahkan ke keranjang</p>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", cartHTML);

  // Setup Drawer Event Listeners
  document.getElementById("cart-close-btn").addEventListener("click", closeCartDrawer);
  document.getElementById("cart-overlay").addEventListener("click", closeCartDrawer);
  document.getElementById("cart-checkout-wa-btn").addEventListener("click", checkoutWhatsApp);
  document.getElementById("cart-clear-btn").addEventListener("click", clearCart);

  const shopNowBtn = document.getElementById("cart-shop-now-btn");
  if (shopNowBtn) {
    shopNowBtn.addEventListener("click", closeCartDrawer);
  }
}

// Inject Navbar Cart Buttons
function injectNavbarCartButtons() {
  const desktopBtnGroup = document.querySelector("#navbar .hidden.md\\:flex.items-center.gap-3");
  const mobileToggle = document.getElementById("mobile-menu-toggle");

  if (desktopBtnGroup && !document.getElementById("desktop-navbar-cart-btn")) {
    const desktopCartBtn = document.createElement("button");
    desktopCartBtn.id = "desktop-navbar-cart-btn";
    desktopCartBtn.type = "button";
    desktopCartBtn.className = "relative p-2 text-ink-black hover:text-cyan-signal transition-colors rounded-buttons";
    desktopCartBtn.setAttribute("aria-label", "Buka Keranjang");
    desktopCartBtn.innerHTML = `
      <i data-lucide="shopping-bag" class="w-5 h-5"></i>
      <span class="navbar-cart-badge absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-cyan-signal text-ink-black text-[11px] font-bold flex items-center justify-center hidden">0</span>
    `;
    desktopCartBtn.addEventListener("click", openCartDrawer);
    desktopBtnGroup.insertBefore(desktopCartBtn, desktopBtnGroup.firstChild);
  }

  if (mobileToggle && !document.getElementById("mobile-navbar-cart-btn")) {
    const mobileCartBtn = document.createElement("button");
    mobileCartBtn.id = "mobile-navbar-cart-btn";
    mobileCartBtn.type = "button";
    mobileCartBtn.className = "md:hidden relative p-2 text-ink-black hover:text-cyan-signal transition-colors rounded-buttons mr-1";
    mobileCartBtn.setAttribute("aria-label", "Buka Keranjang");
    mobileCartBtn.innerHTML = `
      <i data-lucide="shopping-bag" class="w-5 h-5"></i>
      <span class="navbar-cart-badge absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-cyan-signal text-ink-black text-[11px] font-bold flex items-center justify-center hidden">0</span>
    `;
    mobileCartBtn.addEventListener("click", openCartDrawer);
    mobileToggle.parentNode.insertBefore(mobileCartBtn, mobileToggle);
  }
}

// Global Click Handler for Add to Cart Buttons
function setupAddToCartGlobalListener() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart-btn, .product-card-cart-btn, #detail-add-to-cart");
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const productId = btn.dataset.id;
      if (productId) {
        addToCart(productId);
      }
    }
  });
}

// Expose functions to window
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.checkoutWhatsApp = checkoutWhatsApp;

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
  injectCartDOM();
  injectNavbarCartButtons();
  setupAddToCartGlobalListener();
  updateCartUI();
  initLucideIcons();
}

document.addEventListener("DOMContentLoaded", initShared);
