import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, Filter, Star, ShoppingCart, Grid, List } from 'lucide-react'
import { products } from '../data/products'
import { categories } from '../data/categories'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [viewMode, setViewMode] = useState('grid')
  
  const currentCategory = searchParams.get('category') || 'all'
  const searchQuery = searchParams.get('search') || ''

  const filteredProducts = products.filter(product => {
    const matchesCategory = currentCategory === 'all' || 
      product.category.toLowerCase().replace(/\s+/g, '-') === currentCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams)
    if (category === 'all') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    setSearchParams(params)
  }

  const handleSearchChange = (e) => {
    const params = new URLSearchParams(searchParams)
    if (e.target.value) {
      params.set('search', e.target.value)
    } else {
      params.delete('search')
    }
    setSearchParams(params)
  }

  return (
    <div>
      <section className="bg-canvas py-32 md:py-40">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <p className="eyebrow text-warm-gray">Produk Kami</p>
          {/* Display: 52px for hero headline */}
          <h1 className="display text-ink-black mb-4">
            Temukan
            <br />
            <span className="highlight-span">Produk Terbaik</span>
          </h1>
          <p className="subheading text-warm-gray max-w-2xl">
            Jelajahi koleksi produk komputer berkualitas dari brand ternama
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas border-t border-stone-border">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-gray" />
              <input
                type="text"
                placeholder="Cari produk…"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2.5 bg-pure-white rounded-inputs border border-stone-border focus:border-cyan-signal focus:outline-none transition-colors duration-200 body"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-buttons transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-ink-black text-pure-white' : 'bg-pure-white border border-stone-border text-warm-gray'
                }`}
                aria-label="Tampilan grid"
              >
                <Grid size={16} />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-buttons transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-ink-black text-pure-white' : 'bg-pure-white border border-stone-border text-warm-gray'
                }`}
                aria-label="Tampilan daftar"
              >
                <List size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-56 shrink-0">
              <div className="bg-pure-white border border-stone-border rounded-cards p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Filter size={14} className="text-warm-gray" />
                   <h3 className="body-sm font-medium text-ink-black uppercase tracking-wider">Filter</h3>
                </div>
                
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-3 py-2 rounded-inputs body-sm transition-colors duration-200 ${
                      currentCategory === 'all' 
                          ? 'bg-ink-black text-pure-white' 
                        : 'text-warm-gray hover:bg-canvas'
                    }`}
                  >
                    Semua Produk
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-inputs body-sm transition-colors duration-200 ${
                        currentCategory === category.id 
                        ? 'bg-ink-black text-pure-white' 
                          : 'text-warm-gray hover:bg-canvas'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <p className="body-sm text-warm-gray">
                  Menampilkan {filteredProducts.length} produk
                </p>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="group"
                    >
                      <Card variant="default" interactive className="p-0 overflow-hidden">
                        <div className="relative h-48 bg-soot overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                            style={{ backgroundImage: `url(${product.image})` }}
                          />
                          {product.badge && (
                            <div className="absolute top-3 left-3">
                              <Badge variant="accent">{product.badge}</Badge>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <p className="caption text-warm-gray mb-1">{product.category}</p>
                           <h3 className="text-base font-medium text-ink-black mb-2 group-hover:text-cyan-edge transition-colors line-clamp-2">
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
                              className="w-8 h-8 rounded-full bg-ink-black text-pure-white flex items-center justify-center hover:bg-soot transition-colors duration-200"
                              aria-label={`Tambah ${product.name} ke keranjang`}
                            >
                              <ShoppingCart size={14} />
                            </button>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="group"
                    >
                      <Card variant="default" interactive className="p-0 overflow-hidden">
                        <div className="flex">
                          <div className="relative w-40 h-40 bg-soot overflow-hidden shrink-0">
                            <div
                              className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                              style={{ backgroundImage: `url(${product.image})` }}
                            />
                          </div>
                          <div className="flex-1 p-4">
                            <p className="caption text-warm-gray mb-1">{product.category}</p>
                            <h3 className="text-base font-medium text-ink-black mb-2 group-hover:text-cyan-edge transition-colors">
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
                                className="btn-pill btn-pill-filled btn-sm"
                                aria-label={`Tambah ${product.name} ke keranjang`}
                              >
                                <ShoppingCart size={14} />
                                Keranjang
                              </button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="heading-sm text-warm-gray mb-2">Produk tidak ditemukan</p>
                  <p className="body text-ash-gray">Coba kata kunci atau filter lain</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
