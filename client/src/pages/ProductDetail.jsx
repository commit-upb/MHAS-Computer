import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Share2, Star, Truck, Shield, Store } from 'lucide-react'
import { products } from '../data/products'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-canvas flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg text-ink-black mb-4">Produk Tidak Ditemukan</h1>
          <p className="body text-warm-gray mb-8">Produk yang Anda cari tidak tersedia.</p>
          <Link to="/products" className="btn-pill btn-pill-filled btn-md">
            Kembali ke Produk
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const specLabels = {
    processor: 'Processor',
    motherboard: 'Motherboard',
    ram: 'RAM',
    storage: 'Storage',
    gpu: 'Graphics Card',
    psu: 'Power Supply',
    case: 'Case',
    memory: 'Memory',
    boostClock: 'Boost Clock',
    tdp: 'TDP',
    interface: 'Interface',
    size: 'Ukuran',
    resolution: 'Resolusi',
    panel: 'Panel',
    refreshRate: 'Refresh Rate',
    colorAccuracy: 'Akurasi Warna',
    switch: 'Switch',
    layout: 'Layout',
    backlight: 'Backlight',
    connection: 'Koneksi',
    sensor: 'Sensor',
    dpi: 'DPI',
    battery: 'Battery',
    weight: 'Berat',
    display: 'Display',
  }

  return (
    <div>
      <section className="bg-canvas py-4 border-b border-stone-border">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 body-sm text-warm-gray hover:text-ink-black transition-colors"
          >
            <ArrowLeft size={14} />
            Kembali
          </button>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-canvas">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative bg-pure-white border border-stone-border rounded-cards overflow-hidden aspect-square">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${product.image})` }}
              />
            </div>

            <div className="flex flex-col">
              <Badge variant="light" className="w-fit mb-3">
                {product.category}
              </Badge>

              {/* Heading-lg: 48px for product name */}
              <h1 className="heading-lg text-ink-black mb-2">{product.name}</h1>
              <p className="body-sm text-warm-gray mb-4">oleh {product.brand}</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < 4 ? 'text-ink-black fill-ink-black' : 'text-stone-border'}
                  />
                ))}
                <span className="body-sm text-warm-gray ml-2">(4.0)</span>
              </div>

              {/* Heading: 36px for price */}
              <p className="heading text-ink-black mb-4">
                Rp {product.price.toLocaleString('id-ID')}
              </p>

              {/* Body-lg: 16px for description */}
              <p className="body-lg text-warm-gray mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex gap-3 mb-6">
                <button
                  type="button"
                  className="btn-pill btn-pill-filled btn-md flex-1"
                >
                  <ShoppingCart size={16} />
                  Tambah ke Keranjang
                </button>
                <button
                  type="button"
                  className="btn-pill btn-pill-outlined btn-md"
                  aria-label="Bagikan produk"
                >
                  <Share2 size={16} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-border">
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck size={16} className="text-cyan-signal" />
                  <span className="body-sm text-warm-gray">Pengiriman Cepat</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Shield size={16} className="text-cyan-signal" />
                  <span className="body-sm text-warm-gray">Garansi Resmi</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Store size={16} className="text-cyan-signal" />
                  <span className="body-sm text-warm-gray">Stok Tersedia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-pure-white border-t border-stone-border">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <h2 className="heading-sm text-ink-black mb-6">Spesifikasi</h2>
          <Card variant="default" className="p-0 overflow-hidden">
            <div className="divide-y divide-stone-border">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex">
                  <div className="w-48 shrink-0 px-6 py-3 bg-canvas body-sm font-medium text-warm-gray">
                    {specLabels[key] || key}
                  </div>
                  <div className="flex-1 px-6 py-3 body text-ink-black">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 bg-canvas border-t border-stone-border">
          <div className="max-w-page mx-auto px-6 md:px-8">
            <h2 className="heading-sm text-ink-black mb-6">Produk Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.id}`}
                  className="group"
                >
                  <Card variant="default" interactive className="p-0 overflow-hidden">
                    <div className="relative h-48 bg-soot overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                    <div className="p-4">
                      <p className="caption text-warm-gray mb-1">{item.category}</p>
                      <h3 className="text-base font-medium text-ink-black mb-2 group-hover:text-cyan-edge transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-base font-medium text-ink-black">
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
