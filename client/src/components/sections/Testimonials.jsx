import { Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import SectionHeader from '../ui/SectionHeader'

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-canvas border-t border-stone-border">
      <div className="max-w-page mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow="Testimoni"
          title="Apa Kata Pelanggan Kami"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-pure-white border border-stone-border rounded-cards p-5 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < testimonial.rating ? 'text-ink-black fill-ink-black' : 'text-stone-border'}
                  />
                ))}
              </div>

              <p className="body-lg text-ink-black mb-4 leading-relaxed">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-border">
                <div className="w-8 h-8 rounded-full bg-sky-wash flex items-center justify-center">
                  <span className="text-xs font-medium text-cyan-edge">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="body-sm font-medium text-ink-black">{testimonial.name}</p>
                  <p className="caption text-warm-gray">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
