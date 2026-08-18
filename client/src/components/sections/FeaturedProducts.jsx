import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShoppingCart } from 'lucide-react'
import { products } from '../../data/products'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const featuredProducts = products.filter(p => p.featured).slice(0, 4)

export default function FeaturedProducts() {
  return (
    <section className="py-24 md:py-32 bg-canvas border-t border-stone-border">
      <div className="max-w-page mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="eyebrow">Produk Unggulan</p>
            <h2 className="heading-lg text-ink-black">
              Pilihan <span className="highlight-span">Terbaik</span> Untuk Anda
            </h2>
          </div>
          <Link
            to="/products"
            className="btn-pill btn-pill-outlined btn-sm mt-6 md:mt-0 group"
          >
            Lihat Semua
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group block"
            >
              <div className="bg-pure-white border border-stone-border rounded-cards overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:border-stone-muted">
                <div className="relative h-48 bg-soot overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="accent">{product.badge}</Badge>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/10 transition-colors duration-300" />
                </div>

                <div className="p-4">
                  <p className="caption text-warm-gray mb-1">{product.category}</p>
                  <h3 className="text-base font-medium text-ink-black mb-2 group-hover:text-cyan-edge transition-colors duration-200 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < (product.rating || 4) ? 'text-ink-black fill-ink-black' : 'text-stone-border'}
                      />
                    ))}
                    {product.reviews && (
                      <span className="body-sm text-warm-gray ml-1">({product.reviews})</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {product.originalPrice && (
                        <p className="body-sm text-ash-gray line-through">
                          Rp {product.originalPrice.toLocaleString('id-ID')}
                        </p>
                      )}
                      <p className="text-base font-medium text-ink-black">
                        Rp {product.price.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full bg-ink-black text-pure-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-cyan-signal hover:text-ink-black"
                      aria-label={`Tambah ${product.name} ke keranjang`}
                    >
                      <ShoppingCart size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
