import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Award, Clock } from 'lucide-react'
import { gsap } from 'gsap'

const stats = [
  { icon: Package, value: '500+', label: 'Build Custom' },
  { icon: Award, value: '50+', label: 'Mitra Brand' },
  { icon: Clock, value: '8+', label: 'Tahun Pengalaman' },
]

export default function Hero() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
        }
      )

      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.8,
          ease: 'power2.out',
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative bg-canvas pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="max-w-page mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <div ref={contentRef} className="space-y-6">
            <h1 className="display text-ink-black">
              Rakit PC impian,
              <br />
              <span className="highlight-span">tanpa ribet</span>
            </h1>

            <p className="subheading text-warm-gray max-w-lg">
              Komponen pilihan, harga transparan, garansi resmi. Dari Gaming PC
              hingga Workstation — kami bantu wujudkan.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                to="/products"
                className="btn-pill btn-pill-filled btn-md group"
              >
                Lihat Produk
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/contact"
                className="btn-pill btn-pill-outlined btn-md"
              >
                Konsultasi Gratis
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-6">
              {['Stok Tersedia', 'Garansi Resmi', 'Gratis Perakitan'].map(
                (badge, i) => (
                  <div key={badge} className="flex items-center gap-3">
                    {i > 0 && (
                      <div className="w-px h-3 bg-stone-border" />
                    )}
                    <span className="body-sm text-ash-gray">{badge}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div
            ref={statsRef}
            className="mt-12 pt-8 border-t border-stone-border grid grid-cols-3 gap-8 max-w-lg"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="flex items-center gap-2">
                  <stat.icon size={16} className="text-cyan-signal" />
                  <span className="heading-sm text-ink-black">{stat.value}</span>
                </div>
                <p className="caption text-warm-gray">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
