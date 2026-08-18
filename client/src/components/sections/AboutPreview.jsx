import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, Building2 } from 'lucide-react'
import StatCard from '../ui/StatCard'

const stats = [
  { icon: Building2, value: '10+', label: 'Tahun Pengalaman' },
  { icon: Users, value: '5000+', label: 'Pelanggan Puas' },
  { icon: Award, value: '50+', label: 'Mitra Brand' },
]

export default function AboutPreview() {
  return (
    <section className="py-24 md:py-32 bg-canvas border-t border-stone-border">
      <div className="max-w-page mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <p className="eyebrow">Tentang Kami</p>
            <h2 className="heading-lg text-ink-black">
              Solusi Komputer <span className="highlight-span">Terpercaya</span>
            </h2>
            <p className="body-lg text-warm-gray leading-relaxed">
              MHAS Computer hadir sebagai partner terpercaya untuk kebutuhan komputer Anda. 
              Dari perakitan PC custom hingga layanan perbaikan, kami berkomitmen memberikan 
              solusi terbaik dengan harga kompetitif.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/about"
                className="btn-pill btn-pill-filled btn-md group"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="btn-pill btn-pill-outlined btn-md"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
