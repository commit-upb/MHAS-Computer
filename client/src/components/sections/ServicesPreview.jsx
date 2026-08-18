import { Link } from 'react-router-dom'
import { ArrowRight, Wrench, Cpu, MessageCircle, Settings, Check } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const services = [
  {
    icon: Cpu,
    title: 'PC Build Service',
    description: 'Perakitan PC custom sesuai kebutuhan dan budget Anda',
    features: ['Konsultasi gratis', 'Testing & optimasi'],
  },
  {
    icon: Settings,
    title: 'PC Upgrade',
    description: 'Upgrade komponen untuk meningkatkan performa PC',
    features: ['Analisis performa', 'Optimasi sistem'],
  },
  {
    icon: MessageCircle,
    title: 'Konsultasi Hardware',
    description: 'Konsultasi pemilihan komponen yang tepat',
    features: ['Rekomendasi produk', 'Tips perawatan'],
  },
  {
    icon: Wrench,
    title: 'Computer Repair',
    description: 'Perbaikan komputer oleh teknisi berpengalaman',
    features: ['Diagnosis masalah', 'Garansi perbaikan'],
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-soot text-pure-white">
      <div className="max-w-page mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow="Layanan Kami"
          title="Solusi Lengkap Untuk Komputer Anda"
          description="Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan komputer Anda"
          dark
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-pure-white/5 border border-pure-white/10 rounded-cards p-5 transition-all duration-300 hover:bg-pure-white/10 hover:border-pure-white/20 group"
            >
              <div className="w-10 h-10 rounded-icons bg-cyan-signal/20 flex items-center justify-center mb-4">
                <service.icon size={18} className="text-cyan-signal" />
              </div>
              <h3 className="text-base font-medium text-pure-white mb-2">{service.title}</h3>
              <p className="body text-pure-white/60 mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check size={12} className="text-cyan-signal" />
                    <span className="body-sm text-pure-white/50">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="btn-pill btn-pill-accent btn-md group"
          >
            Lihat Semua Layanan
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
