import { Award, Users, Building2, Target, Eye, Heart } from 'lucide-react'
import StatCard from '../components/ui/StatCard'
import Card from '../components/ui/Card'

const stats = [
  { icon: Building2, value: '10+', label: 'Tahun Pengalaman' },
  { icon: Users, value: '5000+', label: 'Pelanggan Puas' },
  { icon: Award, value: '50+', label: 'Mitra Brand' },
]

const values = [
  {
    icon: Target,
    title: 'Misi',
    description: 'Menyediakan solusi komputer berkualitas dengan harga terjangkau untuk semua kalangan.',
  },
  {
    icon: Eye,
    title: 'Visi',
    description: 'Menjadi toko komputer terpercaya dan terdepan di Indonesia.',
  },
  {
    icon: Heart,
    title: 'Nilai',
    description: 'Integritas, kualitas, dan kepuasan pelanggan adalah prioritas utama kami.',
  },
]

export default function About() {
  return (
    <div>
      <section className="bg-canvas py-32 md:py-40">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <p className="eyebrow text-warm-gray">Tentang Kami</p>
          {/* Display: 52px for hero headline */}
          <h1 className="display text-ink-black mb-4">
            Solusi Komputer
            <br />
            <span className="highlight-span">Terpercaya</span>
          </h1>
          <p className="subheading text-warm-gray max-w-2xl">
            MHAS Computer hadir sejak 2014 sebagai partner terpercaya untuk kebutuhan komputer Anda.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas border-t border-stone-border">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-pure-white border-t border-stone-border">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <p className="eyebrow">Cerita Kami</p>
               <h2 className="heading-lg text-ink-black">
                Berawal Dari
                <br />
                <span className="highlight-span">Passion Teknologi</span>
              </h2>
              <p className="body-lg text-warm-gray leading-relaxed">
                MHAS Computer didirikan pada tahun 2014 dengan visi sederhana: menyediakan 
                komputer berkualitas dengan harga yang fair. Bermula dari sebuah toko kecil, 
                kini kami telah berkembang menjadi salah satu toko komputer terpercaya.
              </p>
              <p className="body text-warm-gray leading-relaxed">
                Dengan tim teknisi berpengalaman dan ribuan produk original dari brand ternama, 
                kami siap menjadi partner terbaik untuk kebutuhan teknologi Anda.
              </p>
            </div>
             <div className="bg-soot rounded-feature-card p-12 flex items-center justify-center">
              <div className="text-center">
                <p className="display text-pure-white mb-2">10+</p>
                <p className="body-sm text-pure-white/60 uppercase tracking-wider">Tahun Melayani</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas border-t border-stone-border">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow">Nilai Kami</p>
             <h2 className="heading-lg text-ink-black">
              Yang Kami
              <br />
              <span className="highlight-span">Percayai</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((value) => (
              <Card key={value.title}>
                 <div className="w-10 h-10 rounded-icons bg-sky-wash flex items-center justify-center mb-4">
                  <value.icon size={18} className="text-cyan-edge" />
                </div>
                 <h3 className="text-base font-medium text-ink-black mb-2">{value.title}</h3>
                <p className="body text-warm-gray">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
