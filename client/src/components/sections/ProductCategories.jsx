import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, Cpu, Keyboard, Headphones } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const categories = [
  {
    icon: Monitor,
    title: 'Gaming PC',
    description: 'PC gaming performa tinggi untuk pengalaman bermain optimal',
    image: '/images/category-gaming.jpg',
  },
  {
    icon: Cpu,
    title: 'Workstation',
    description: 'PC workstation untuk produktivitas dan konten kreator',
    image: '/images/category-workstation.jpg',
  },
  {
    icon: Keyboard,
    title: 'Komponen',
    description: 'Komponen komputer original dengan garansi resmi',
    image: '/images/category-components.jpg',
  },
  {
    icon: Headphones,
    title: 'Aksesoris',
    description: 'Aksesoris gaming dan komputer berkualitas premium',
    image: '/images/category-accessories.jpg',
  },
]

export default function ProductCategories() {
  return (
    <section className="py-24 md:py-32 bg-canvas border-t border-stone-border">
      <div className="max-w-page mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow="Kategori Produk"
          title="Temukan Kebutuhan Komputer Anda"
          description="Kami menyediakan berbagai kategori produk untuk memenuhi kebutuhan komputer Anda"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={`/products?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group block"
            >
              <div className="bg-pure-white border border-stone-border rounded-cards overflow-hidden transition-all duration-300 hover:shadow-md hover:border-stone-muted">
                <div className="relative h-40 bg-soot overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-soot/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-8 h-8 rounded-icons bg-pure-white/20 flex items-center justify-center">
                      <category.icon size={16} className="text-pure-white" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-medium text-ink-black mb-1 group-hover:text-cyan-edge transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="body text-warm-gray mb-3">{category.description}</p>
                  <div className="flex items-center gap-2 text-warm-gray group-hover:text-ink-black transition-colors duration-200">
                    <span className="body-sm font-medium">Lihat Semua</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
