// === Products Page Logic ===
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  let currentCategory = params.get("category") || "all";
  let searchQuery = params.get("search") || "";
  let viewMode = "grid";

  const gridEl = document.getElementById("products-grid");
  const listEl = document.getElementById("products-list");
  const countEl = document.getElementById("product-count");
  const emptyEl = document.getElementById("empty-state");
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const gridBtn = document.getElementById("view-grid");
  const listBtn = document.getElementById("view-list");

  // Build category buttons
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.category = cat.id;
    btn.className = "category-btn w-full text-left px-3 py-2 rounded-inputs body-sm transition-colors duration-200 text-warm-gray hover:bg-stone-canvas";
    btn.textContent = cat.name;
    categoryFilter.appendChild(btn);
  });

  // Set active category from URL
  updateCategoryButtons();

  // Search input
  searchInput.value = searchQuery;
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    updateURL();
    renderProducts();
  });

  // Category filter clicks
  categoryFilter.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-btn");
    if (!btn) return;
    currentCategory = btn.dataset.category;
    updateCategoryButtons();
    updateURL();
    renderProducts();
  });

  // View toggle
  gridBtn.addEventListener("click", () => {
    viewMode = "grid";
    gridBtn.className = "view-btn p-2.5 rounded-buttons bg-ink-black text-pure-white transition-colors duration-200";
    listBtn.className = "view-btn p-2.5 rounded-buttons bg-pure-white border border-stone-border text-warm-gray transition-colors duration-200";
    renderProducts();
  });

  listBtn.addEventListener("click", () => {
    viewMode = "list";
    listBtn.className = "view-btn p-2.5 rounded-buttons bg-ink-black text-pure-white transition-colors duration-200";
    gridBtn.className = "view-btn p-2.5 rounded-buttons bg-pure-white border border-stone-border text-warm-gray transition-colors duration-200";
    renderProducts();
  });

  function updateCategoryButtons() {
    categoryFilter.querySelectorAll(".category-btn").forEach(btn => {
      const isActive = btn.dataset.category === currentCategory;
      btn.className = `category-btn w-full text-left px-3 py-2 rounded-inputs body-sm transition-colors duration-200 ${isActive ? 'bg-ink-black text-pure-white' : 'text-warm-gray hover:bg-stone-canvas'}`;
    });
  }

  function updateURL() {
    const params = new URLSearchParams();
    if (currentCategory !== "all") params.set("category", currentCategory);
    if (searchQuery) params.set("search", searchQuery);
    const qs = params.toString();
    history.replaceState(null, "", qs ? "?" + qs : window.location.pathname);
  }

  function renderProducts() {
    const filtered = products.filter(p => {
      const matchCat = currentCategory === "all" || p.category === currentCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    countEl.textContent = `Menampilkan ${filtered.length} produk`;

    if (filtered.length === 0) {
      gridEl.innerHTML = "";
      listEl.innerHTML = "";
      emptyEl.classList.remove("hidden");
      gridEl.classList.add("hidden");
      listEl.classList.add("hidden");
      return;
    }

    emptyEl.classList.add("hidden");

    if (viewMode === "grid") {
      gridEl.classList.remove("hidden");
      listEl.classList.add("hidden");
      gridEl.innerHTML = filtered.map(p => {
        const imgUrl = window.getFallbackImage ? window.getFallbackImage(p.image, p.name) : p.image;
        return `
        <a href="product-detail.html?id=${p.id}" class="group block" data-aos="fade-up">
          <div class="bg-pure-white border border-stone-border rounded-cards overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:border-stone-muted p-0">
            <div class="relative h-48 bg-soot overflow-hidden">
              <div class="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500" style="background-image: url('${imgUrl}')"></div>
            </div>
            <div class="p-4">
              <p class="caption text-warm-gray mb-1">${p.category}</p>
              <h3 class="text-base font-medium text-ink-black mb-2 group-hover:text-cyan-edge transition-colors line-clamp-2">${p.name}</h3>
              <div class="flex items-center gap-1 mb-3">
                ${[...Array(5)].map((_, i) => `<i data-lucide="star" class="w-3 h-3 ${i < 4 ? 'text-ink-black fill-ink-black' : 'text-stone-border'}"></i>`).join('')}
              </div>
              <div class="flex items-center justify-between">
                <p class="text-base font-medium text-ink-black">${formatPrice(p.price)}</p>
                <button type="button" class="w-8 h-8 rounded-full bg-ink-black text-pure-white flex items-center justify-center hover:bg-soot transition-colors duration-200" aria-label="Tambah ke keranjang">
                  <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            </div>
          </div>
        </a>
      `}).join("");
    } else {
      gridEl.classList.add("hidden");
      listEl.classList.remove("hidden");
      listEl.innerHTML = filtered.map(p => {
        const imgUrl = window.getFallbackImage ? window.getFallbackImage(p.image, p.name) : p.image;
        return `
        <a href="product-detail.html?id=${p.id}" class="group block" data-aos="fade-up">
          <div class="bg-pure-white border border-stone-border rounded-cards overflow-hidden transition-all duration-300 hover:shadow-md hover:border-stone-muted p-0">
            <div class="flex">
              <div class="relative w-40 h-40 bg-soot overflow-hidden shrink-0">
                <div class="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500" style="background-image: url('${imgUrl}')"></div>
              </div>
              <div class="flex-1 p-4">
                <p class="caption text-warm-gray mb-1">${p.category}</p>
                <h3 class="text-base font-medium text-ink-black mb-2 group-hover:text-cyan-edge transition-colors">${p.name}</h3>
                <div class="flex items-center gap-1 mb-3">
                  ${[...Array(5)].map((_, i) => `<i data-lucide="star" class="w-3 h-3 ${i < 4 ? 'text-ink-black fill-ink-black' : 'text-stone-border'}"></i>`).join('')}
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-base font-medium text-ink-black">${formatPrice(p.price)}</p>
                  <button type="button" class="btn-pill btn-pill-filled btn-sm" aria-label="Tambah ke keranjang">
                    <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
                    Keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a>
      `}).join("");
    }

    lucide.createIcons();
    if (typeof AOS !== "undefined") AOS.refresh();
  }

  renderProducts();
});
