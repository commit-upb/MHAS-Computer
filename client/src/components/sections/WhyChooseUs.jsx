import { Shield, Truck, Headphones, BadgeCheck } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Garansi Resmi',
    description: 'Semua produk bergaransi resmi distributor',
  },
  {
    icon: Shield,
    title: 'Produk Original',
    description: '100% produk original dan berkualitas',
  },
  {
    icon: Truck,
    title: 'Pengiriman Aman',
    description: 'Pengiriman aman dan terjamin ke seluruh Indonesia',
  },
  {
    icon: Headphones,
    title: 'Dukungan 24/7',
    description: 'Layanan pelanggan siap membantu kapan saja',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-canvas border-t border-stone-border">
      <div className="max-w-page mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow="Mengapa Kami"
          title="Keunggulan MHAS Computer"
          description="Kami berkomitmen memberikan layanan terbaik untuk kepuasan pelanggan"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-pure-white border border-stone-border rounded-cards p-5 transition-all duration-300 hover:shadow-md hover:border-stone-muted group"
            >
              <div className="w-10 h-10 rounded-icons bg-sky-wash flex items-center justify-center mb-4">
                <reason.icon size={18} className="text-cyan-edge" />
              </div>
              <h3 className="text-base font-medium text-ink-black mb-2">{reason.title}</h3>
              <p className="body text-warm-gray">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
