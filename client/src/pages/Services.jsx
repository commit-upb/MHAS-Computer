import { Cpu, Settings, MessageCircle, Wrench, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'pc-build',
    icon: Cpu,
    title: 'PC Build Service',
    description: 'Perakitan PC custom sesuai kebutuhan dan budget Anda. Tim teknisi kami akan membantu merancang dan merakit PC impian Anda.',
    features: [
      'Konsultasi kebutuhan',
      'Pemilihan komponen',
      'Perakitan profesional',
      'Testing & optimasi',
      'Garansi perakitan',
    ],
    price: 'Mulai dari Rp 500.000',
  },
  {
    id: 'pc-upgrade',
    icon: Settings,
    title: 'PC Upgrade',
    description: 'Upgrade komponen untuk meningkatkan performa PC Anda tanpa harus membeli baru.',
    features: [
      'Analisis performa',
      'Rekomendasi upgrade',
      'Pemasangan komponen',
      'Optimasi sistem',
      'Testing performa',
    ],
    price: 'Mulai dari Rp 200.000',
  },
  {
    id: 'hardware-consultation',
    icon: MessageCircle,
    title: 'Konsultasi Hardware',
    description: 'Konsultasi pemilihan komponen yang tepat sesuai kebutuhan dan budget Anda.',
    features: [
      'Analisis kebutuhan',
      'Rekomendasi produk',
      'Perbandingan harga',
      'Tips perawatan',
      'Konsultasi gratis',
    ],
    price: 'Gratis',
  },
  {
    id: 'computer-repair',
    icon: Wrench,
    title: 'Perbaikan Komputer',
    description: 'Perbaikan komputer oleh teknisi berpengalaman untuk berbagai masalah hardware dan software.',
    features: [
      'Diagnosis masalah',
      'Perbaikan hardware',
      'Instalasi software',
      'Pemulihan data',
      'Garansi perbaikan',
    ],
    price: 'Mulai dari Rp 150.000',
  },
]

export default function Services() {
  return (
    <div>
      <section className="bg-canvas py-32 md:py-40">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <p className="eyebrow text-warm-gray">Layanan Kami</p>
          {/* Display: 52px for hero headline */}
          <h1 className="display text-ink-black mb-4">
            Solusi Lengkap
            <br />
            <span className="highlight-span">Untuk Komputer Anda</span>
          </h1>
          <p className="subheading text-warm-gray max-w-2xl">
            Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan komputer Anda
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas border-t border-stone-border">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                   <div className="w-10 h-10 rounded-icons bg-sky-wash flex items-center justify-center">
                    <service.icon size={18} className="text-cyan-edge" />
                  </div>
                   <h2 className="heading-lg text-ink-black">{service.title}</h2>
                  <p className="body-lg text-warm-gray leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                         <div className="w-5 h-5 rounded-full bg-cyan-signal flex items-center justify-center shrink-0">
                          <Check size={12} className="text-ink-black" />
                        </div>
                        <span className="body text-warm-gray">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="btn-pill btn-pill-filled btn-md"
                    >
                      Pesan Layanan
                      <ArrowRight size={16} />
                    </Link>
                    <p className="body-sm text-warm-gray self-center">{service.price}</p>
                  </div>
                </div>

                <div className={`bg-pure-white border border-stone-border rounded-feature-card p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                     <div className="w-16 h-16 mx-auto mb-4 rounded-icons bg-soot flex items-center justify-center">
                      <service.icon size={32} className="text-pure-white" />
                    </div>
                     <h3 className="heading-sm text-ink-black mb-2">{service.title}</h3>
                    <p className="body-sm text-warm-gray">{service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-soot text-pure-white">
        <div className="max-w-page mx-auto px-6 md:px-8 text-center">
          <h2 className="heading-lg text-pure-white mb-4">
            Butuh Konsultasi?
          </h2>
          <p className="subheading text-pure-white/60 max-w-2xl mx-auto mb-6">
            Tim kami siap membantu Anda menemukan layanan yang tepat. 
            Konsultasikan kebutuhan Anda secara gratis!
          </p>
          <Link
            to="/contact"
            className="btn-pill btn-pill-accent btn-md"
          >
            Hubungi Kami
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
