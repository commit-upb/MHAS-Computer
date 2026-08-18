import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-pure-white border-t border-stone-border">
      <div className="max-w-page mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow="Siap Memulai?"
          title="Butuh Bantuan Memilih Komputer?"
          description="Tim kami siap membantu Anda menemukan solusi komputer yang tepat. Konsultasikan kebutuhan Anda secara gratis!"
        />

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/contact"
            className="btn-pill btn-pill-filled btn-md group"
          >
            <MessageCircle size={16} />
            Hubungi Kami
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/products"
            className="btn-pill btn-pill-outlined btn-md group"
          >
            Lihat Produk
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
