// Site Configuration
const siteConfig = {
  name: "MHAS Computer",
  tagline: "Your Trusted Computer & Hardware Partner",
  description: "MHAS Computer adalah toko komputer dan hardware terpercaya yang menyediakan produk komputer, laptop, aksesoris, dan layanan terkait dengan kualitas premium.",
  contact: {
    phone: "+62 812-3456-7890",
    email: "info@mhascomputer.com",
    address: "Jl. Teknologi No. 123, Jakarta Selatan, Indonesia",
    whatsapp: "6281234567890",
    maps: "https://maps.app.goo.gl/ARsDfFo88MsBetvc7",
  },
  social: {
    instagram: "https://instagram.com/mhascomputer",
    facebook: "https://facebook.com/mhascomputer",
    twitter: "https://twitter.com/mhascomputer",
    youtube: "https://youtube.com/mhascomputer",
    tiktok: "https://tiktok.com/@mhascomputer",
  },
  hours: {
    weekday: "09:00 - 21:00",
    weekend: "10:00 - 20:00",
  },
};

// Brands
const brands = [
  { id: 1, name: "ASUS", logo: "images/brands/asus.svg", description: "Produk komputer dan laptop gaming terkemuka" },
  { id: 2, name: "MSI", logo: "images/brands/msi.svg", description: "Motherboard dan graphics card performa tinggi" },
  { id: 3, name: "NVIDIA", logo: "images/brands/nvidia.svg", description: "Graphics card terbaik untuk gaming dan konten kreator" },
  { id: 4, name: "AMD", logo: "images/brands/amd.svg", description: "Processor dan graphics card inovatif" },
  { id: 5, name: "Intel", logo: "images/brands/intel.svg", description: "Processor untuk gaming dan produktivitas" },
  { id: 6, name: "Logitech", logo: "images/brands/logitech.svg", description: "Aksesoris komputer berkualitas tinggi" },
  { id: 7, name: "Razer", logo: "images/brands/razer.svg", description: "Gaming gear premium untuk gamers" },
  { id: 8, name: "Corsair", logo: "images/brands/corsair.svg", description: "Komponen dan aksesoris PC gaming" },
];

// Categories
const categories = [
  { id: "gaming-pc", name: "Gaming PC", description: "Komputer gaming performa tinggi untuk pengalaman bermain optimal", icon: "monitor", image: "images/categories/gaming-pc.jpg" },
  { id: "laptop", name: "Laptop", description: "Laptop untuk kebutuhan kerja, gaming, dan kreativitas", icon: "laptop", image: "images/categories/laptop.jpg" },
  { id: "components", name: "Components", description: "Komponen komputer untuk upgrade dan build PC sendiri", icon: "cpu", image: "images/categories/components.jpg" },
  { id: "accessories", name: "Accessories", description: "Aksesoris komputer untuk produktivitas dan gaming", icon: "keyboard", image: "images/categories/accessories.jpg" },
  { id: "monitor", name: "Monitor", description: "Monitor untuk gaming, desain, dan produktivitas", icon: "monitor", image: "images/categories/monitor.jpg" },
  { id: "networking", name: "Networking", description: "Peralatan jaringan untuk rumah dan kantor", icon: "wifi", image: "images/categories/networking.jpg" },
];

// Products
const products = [
  {
    id: 1,
    name: "PC Gaming RGB Pro",
    category: "gaming-pc",
    brand: "Custom Build",
    price: 15000000,
    image: "images/products/pc-gaming-rgb.jpg",
    description: "PC gaming performa tinggi dengan RGB lighting untuk pengalaman bermain optimal.",
    specs: {
      processor: "AMD Ryzen 7 5800X",
      motherboard: "MSI B550 TOMAHAWK",
      ram: "32GB DDR4 3200MHz",
      storage: "1TB NVMe SSD",
      gpu: "NVIDIA RTX 3070 8GB",
      psu: "750W 80+ Gold",
      case: "NZXT H510 Elite",
    },
    featured: true,
  },
  {
    id: 2,
    name: "Laptop Gaming ROG",
    category: "laptop",
    brand: "ASUS",
    price: 18500000,
    image: "images/products/laptop-rog.jpg",
    description: "Laptop gaming ASUS ROG dengan performa maksimal untuk gaming dan produktivitas.",
    specs: {
      processor: "Intel Core i7-12700H",
      ram: "16GB DDR5",
      storage: "512GB NVMe SSD",
      gpu: "NVIDIA RTX 3060 6GB",
      display: "15.6\" FHD 144Hz",
      battery: "90Wh",
    },
    featured: true,
  },
  {
    id: 3,
    name: "RTX 4070 Super",
    category: "components",
    brand: "NVIDIA",
    price: 8500000,
    image: "images/products/rtx-4070.jpg",
    description: "Graphics card NVIDIA RTX 4070 Super untuk gaming 1440p dan content creation.",
    specs: {
      memory: "12GB GDDR6X",
      boostClock: "2475 MHz",
      tdp: "220W",
      interface: "PCIe 4.0 x16",
    },
    featured: true,
  },
  {
    id: 4,
    name: "Monitor 4K ProArt",
    category: "monitor",
    brand: "ASUS",
    price: 6500000,
    image: "images/products/monitor-4k.jpg",
    description: "Monitor 4K untuk desain grafis dan content creation dengan akurasi warna tinggi.",
    specs: {
      size: "27 inch",
      resolution: "3840 x 2160",
      panel: "IPS",
      refreshRate: "60Hz",
      colorAccuracy: "100% sRGB",
    },
    featured: true,
  },
  {
    id: 5,
    name: "Mechanical Keyboard RGB",
    category: "accessories",
    brand: "Logitech",
    price: 1200000,
    image: "images/products/keyboard-rgb.jpg",
    description: "Keyboard mechanical gaming dengan RGB lighting dan switch Cherry MX.",
    specs: {
      switch: "Cherry MX Red",
      layout: "Full Size",
      backlight: "RGB",
      connection: "USB-C",
    },
    featured: false,
  },
  {
    id: 6,
    name: "Gaming Mouse Wireless",
    category: "accessories",
    brand: "Razer",
    price: 850000,
    image: "images/products/mouse-wireless.jpg",
    description: "Mouse gaming wireless dengan sensor presisi tinggi dan battery tahan lama.",
    specs: {
      sensor: "Focus Pro 30K",
      dpi: "30000",
      battery: "90 jam",
      weight: "63g",
    },
    featured: false,
  },
];

// Services
const services = [
  {
    id: "pc-build",
    name: "PC Build",
    description: "Jasa perakitan komputer custom sesuai kebutuhan Anda",
    icon: "wrench",
    features: [
      "Konsultasi kebutuhan hardware",
      "Pemilihan komponen terbaik",
      "Perakitan profesional",
      "Testing dan optimasi",
      "Garansi servis",
    ],
  },
  {
    id: "pc-upgrade",
    name: "PC Upgrade",
    description: "Upgrade komponen komputer untuk performa lebih baik",
    icon: "arrow-up-circle",
    features: [
      "Upgrade RAM & Storage",
      "Upgrade Graphics Card",
      "Upgrade Processor",
      "Upgrade Power Supply",
      "Optimasi Sistem",
    ],
  },
  {
    id: "hardware-consultation",
    name: "Hardware Consultation",
    description: "Konsultasi hardware komputer oleh teknisi ahli",
    icon: "message-circle",
    features: [
      "Analisis kebutuhan",
      "Rekomendasi produk",
      "Perbandingan spesifikasi",
      "Budget planning",
      "Solusi masalah hardware",
    ],
  },
  {
    id: "computer-repair",
    name: "Computer Repair",
    description: "Jasa perbaikan komputer dan laptop oleh teknisi berpengalaman",
    icon: "settings",
    features: [
      "Diagnosis masalah",
      "Perbaikan hardware",
      "Perbaikan software",
      "Data recovery",
      "Cleaning service",
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance",
    description: "Layanan perawatan komputer untuk menjaga performa optimal",
    icon: "shield",
    features: [
      "Cleaning internal & external",
      "Update driver & software",
      "Optimasi performa",
      "Backup data",
      "Monitoring kesehatan sistem",
    ],
  },
];

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "Ahmad Rizky",
    role: "Gamer Profesional",
    avatar: "images/testimonials/avatar-1.jpg",
    rating: 5,
    comment: "Pelayanan sangat profesional! PC gaming yang saya beli performanya luar biasa. Tim MHAS Computer sangat membantu dalam memilih komponen yang tepat.",
  },
  {
    id: 2,
    name: "Sarah Dewi",
    role: "Desainer Grafis",
    avatar: "images/testimonials/avatar-2.jpg",
    rating: 5,
    comment: "Monitor 4K yang saya beli di sini kualitas warnanya sangat akurat. Cocok untuk pekerjaan desain grafis saya. Terima kasih MHAS Computer!",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Content Creator",
    avatar: "images/testimonials/avatar-3.jpg",
    rating: 5,
    comment: "Laptop gaming yang saya beli sangat memadai untuk editing video dan streaming. Harga juga sangat kompetitif dibanding toko lain.",
  },
  {
    id: 4,
    name: "Rina Marlina",
    role: "Mahasiswa Teknik",
    avatar: "images/testimonials/avatar-4.jpg",
    rating: 4,
    comment: "Pelayanan ramah dan cepat. Laptop yang saya beli sudah sesuai kebutuhan untuk kuliah dan tugas-tugas teknik. Recommended!",
  },
];

// Spec Labels
const specLabels = {
  processor: "Processor",
  motherboard: "Motherboard",
  ram: "RAM",
  storage: "Storage",
  gpu: "Graphics Card",
  psu: "Power Supply",
  case: "Case",
  memory: "Memory",
  boostClock: "Boost Clock",
  tdp: "TDP",
  interface: "Interface",
  size: "Ukuran",
  resolution: "Resolusi",
  panel: "Panel",
  refreshRate: "Refresh Rate",
  colorAccuracy: "Akurasi Warna",
  switch: "Switch",
  layout: "Layout",
  backlight: "Backlight",
  connection: "Koneksi",
  sensor: "Sensor",
  dpi: "DPI",
  battery: "Battery",
  weight: "Berat",
  display: "Display",
};

// Helper: Format Price
function formatPrice(num) {
  return "Rp " + num.toLocaleString("id-ID");
}
