import { brands } from '../../data/brands'
import SectionHeader from '../ui/SectionHeader'

export default function BrandShowcase() {
  return (
    <section className="py-24 md:py-32 bg-canvas border-t border-stone-border">
      <div className="max-w-page mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow="Mitra Brand"
          title="Brand Terpercaya Kami Hadirkan"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-4 bg-pure-white border border-stone-border rounded-cards transition-all duration-300 hover:shadow-md hover:border-stone-muted"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden items-center justify-center text-warm-gray">
                    <span className="text-lg font-medium">{brand.name.slice(0, 2).toUpperCase()}</span>
                  </div>
                </div>
                <p className="body-sm text-warm-gray font-medium">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
