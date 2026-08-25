// === Product Detail Page Logic ===
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const product = products.find(p => p.id === id);
  const contentEl = document.getElementById("product-content");

  if (!product) {
    contentEl.innerHTML = `
      <div class="min-h-screen bg-stone-canvas flex items-center justify-center">
        <div class="text-center" data-aos="fade-up">
          <h1 class="heading-lg text-ink-black mb-4">Produk Tidak Ditemukan</h1>
          <p class="body text-warm-gray mb-8">Produk yang Anda cari tidak tersedia.</p>
          <a href="product.html" class="btn-pill btn-pill-filled btn-md">Kembali ke Produk</a>
        </div>
      </div>`;
    lucide.createIcons();
    return;
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const specsHTML = Object.entries(product.specs).map(([key, val]) => `
    <div class="flex">
      <div class="w-48 shrink-0 px-6 py-3 bg-stone-canvas body-sm font-medium text-warm-gray">${specLabels[key] || key}</div>
      <div class="flex-1 px-6 py-3 body text-ink-black">${val}</div>
    </div>
  `).join("");

  const relatedHTML = related.length > 0 ? `
    <section class="py-12 md:py-16 bg-stone-canvas section-border">
      <div class="max-w-page mx-auto px-6 md:px-8">
        <h2 class="heading-sm text-ink-black mb-6">Produk Terkait</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${related.map(item => {
            const itemImg = window.getFallbackImage ? window.getFallbackImage(item.image, item.name) : item.image;
            return `
            <a href="product-detail.html?id=${item.id}" class="group block" data-aos="fade-up">
              <div class="bg-pure-white border border-stone-border rounded-cards overflow-hidden transition-all duration-300 hover:shadow-md hover:border-stone-muted p-0">
                <div class="relative h-48 bg-soot overflow-hidden">
                  <div class="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500" style="background-image: url('${itemImg}')"></div>
                </div>
                <div class="p-4">
                  <p class="caption text-warm-gray mb-1">${item.category}</p>
                  <h3 class="text-base font-medium text-ink-black mb-2 group-hover:text-cyan-edge transition-colors line-clamp-2">${item.name}</h3>
                  <p class="text-base font-medium text-ink-black">${formatPrice(item.price)}</p>
                </div>
              </div>
            </a>
          `}).join("")}
        </div>
      </div>
    </section>` : "";

  const mainProductImg = window.getFallbackImage ? window.getFallbackImage(product.image, product.name) : product.image;

  contentEl.innerHTML = `
    <section class="bg-stone-canvas py-4 border-b border-stone-border">
      <div class="max-w-page mx-auto px-6 md:px-8">
        <a href="javascript:history.back()" class="inline-flex items-center gap-2 body-sm text-warm-gray hover:text-ink-black transition-colors">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
          Kembali
        </a>
      </div>
    </section>
 
    <section class="py-12 md:py-16 bg-stone-canvas">
      <div class="max-w-page mx-auto px-6 md:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="relative bg-pure-white border border-stone-border rounded-cards overflow-hidden aspect-square" data-aos="fade-right">
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('${mainProductImg}')"></div>
          </div>
          <div class="flex flex-col" data-aos="fade-left">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-tags body-sm font-medium bg-sky-wash text-cyan-edge w-fit mb-3">${product.category}</span>
            <h1 class="heading-lg text-ink-black mb-2">${product.name}</h1>
            <p class="body-sm text-warm-gray mb-4">oleh ${product.brand}</p>
            <div class="flex items-center gap-1 mb-4">
              ${[...Array(5)].map((_, i) => `<i data-lucide="star" class="w-3.5 h-3.5 ${i < 4 ? 'text-ink-black fill-ink-black' : 'text-stone-border'}"></i>`).join("")}
              <span class="body-sm text-warm-gray ml-2">(4.0)</span>
            </div>
            <p class="heading text-ink-black mb-4">${formatPrice(product.price)}</p>
            <p class="body-lg text-warm-gray mb-6 leading-relaxed">${product.description}</p>
            <div class="flex gap-3 mb-6">
              <button type="button" class="btn-pill btn-pill-filled btn-md flex-1">
                <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                Tambah ke Keranjang
              </button>
              <button type="button" class="btn-pill btn-pill-outlined btn-md" aria-label="Bagikan produk">
                <i data-lucide="share-2" class="w-4 h-4"></i>
              </button>
            </div>
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-stone-border">
              <div class="flex flex-col items-center text-center gap-2">
                <i data-lucide="truck" class="w-4 h-4 text-cyan-signal"></i>
                <span class="body-sm text-warm-gray">Pengiriman Cepat</span>
              </div>
              <div class="flex flex-col items-center text-center gap-2">
                <i data-lucide="shield" class="w-4 h-4 text-cyan-signal"></i>
                <span class="body-sm text-warm-gray">Garansi Resmi</span>
              </div>
              <div class="flex flex-col items-center text-center gap-2">
                <i data-lucide="store" class="w-4 h-4 text-cyan-signal"></i>
                <span class="body-sm text-warm-gray">Stok Tersedia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16 bg-pure-white section-border">
      <div class="max-w-page mx-auto px-6 md:px-8">
        <h2 class="heading-sm text-ink-black mb-6">Spesifikasi</h2>
        <div class="bg-pure-white rounded-cards border border-stone-border overflow-hidden">
          <div class="divide-y divide-stone-border">${specsHTML}</div>
        </div>
      </div>
    </section>

    ${relatedHTML}`;

  lucide.createIcons();
  if (typeof AOS !== "undefined") AOS.init({ duration: 700, once: true, offset: 80 });
});
