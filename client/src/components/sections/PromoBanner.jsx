import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Clock, Gift } from 'lucide-react'
import Badge from '../ui/Badge'

export default function PromoBanner() {
  return (
    <section className="py-24 md:py-32 bg-canvas border-t border-stone-border">
      <div className="max-w-page mx-auto px-6 md:px-8">
         <div className="relative bg-soot rounded-feature-card overflow-hidden shadow-xl">
           <div className="absolute inset-0 bg-gradient-to-r from-soot via-soot/90 to-transparent" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: 'url(/images/promo-bg.jpg)' }}
          />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12">
            <div className="space-y-6">
              <Badge variant="accent" icon={Zap}>
                Promo Spesial
              </Badge>
              
              <h2 className="heading-lg text-pure-white leading-tight">
                Flash Sale Hingga <span className="highlight-span">30% Off</span>
              </h2>
              
              <p className="subheading text-pure-white/60 max-w-md">
                Nikmati diskon hingga 30% untuk pembelian komponen dan aksesoris pilihan. 
                Berlaku terbatas!
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-pure-white/60" />
                  <span className="body-sm text-pure-white/60">Berlaku hingga 31 Agustus</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/products"
                  className="btn-pill btn-pill-accent btn-md group"
                >
                  Beli Sekarang
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-pill btn-pill-outlined btn-md border-pure-white/30 text-pure-white hover:border-pure-white/60"
                >
                  Tanyakan Promo
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-end">
              <div className="bg-pure-white/5 rounded-cards p-5 border border-pure-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-icons bg-cyan-signal/20 flex items-center justify-center">
                    <Gift size={18} className="text-cyan-signal" />
                  </div>
                  <div>
                    <p className="body-sm font-medium text-pure-white">Paket Bonus</p>
                    <p className="caption text-pure-white/50">untuk pembelian tertentu</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-signal" />
                    <span className="body-sm text-pure-white/70">Gratis Layanan Perakitan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-signal" />
                    <span className="body-sm text-pure-white/70">Manajemen Kabel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-signal" />
                    <span className="body-sm text-pure-white/70">1 Tahun Garansi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
