import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'
import { siteConfig } from '../config/site'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat',
    value: siteConfig.contact.address,
  },
  {
    icon: Phone,
    title: 'Telepon',
    value: siteConfig.contact.phone,
    link: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: Mail,
    title: 'Email',
    value: siteConfig.contact.email,
    link: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    value: siteConfig.hours.weekday,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi'
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subjek wajib diisi'
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <div>
      <section className="bg-canvas py-32 md:py-40">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <p className="eyebrow text-warm-gray">Hubungi Kami</p>
          <h1 className="display text-ink-black mb-4">
            Siap Membantu
            <br />
            <span className="highlight-span">Anda</span>
          </h1>
          <p className="subheading text-warm-gray max-w-2xl">
            Punya pertanyaan atau butuh bantuan? Tim kami siap membantu Anda
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas border-t border-stone-border">
        <div className="max-w-page mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div>
                <h2 className="heading-lg text-ink-black mb-3">Kirim Pesan</h2>
                <p className="body text-warm-gray">
                  Isi form di bawah ini dan kami akan membalas secepat mungkin
                </p>
              </div>

              {isSuccess && (
                <div className="flex items-center gap-3 p-4 bg-sky-wash border border-cyan-edge/20 rounded-inputs">
                  <CheckCircle size={18} className="text-cyan-edge" />
                  <p className="body-sm text-ink-black">
                    Pesan berhasil dikirim! Kami akan membalas segera.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="caption text-warm-gray block mb-1.5">Nama Lengkap</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 bg-pure-white rounded-inputs border ${
                        errors.name ? 'border-red-500' : 'border-stone-border'
                      } focus:border-cyan-signal focus:outline-none transition-colors duration-200 body`}
                      placeholder="Masukkan nama Anda…"
                    />
                    {errors.name && (
                      <p className="body-sm text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="caption text-warm-gray block mb-1.5">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2.5 bg-pure-white rounded-inputs border ${
                        errors.email ? 'border-red-500' : 'border-stone-border'
                      } focus:border-cyan-signal focus:outline-none transition-colors duration-200 body`}
                      placeholder="Masukkan email Anda…"
                    />
                    {errors.email && (
                      <p className="body-sm text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="caption text-warm-gray block mb-1.5">Subjek</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    autoComplete="off"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 bg-pure-white rounded-inputs border ${
                      errors.subject ? 'border-red-500' : 'border-stone-border'
                    } focus:border-cyan-signal focus:outline-none transition-colors duration-200 body`}
                    placeholder="Masukkan subjek pesan…"
                  />
                  {errors.subject && (
                    <p className="body-sm text-red-500 mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="caption text-warm-gray block mb-1.5">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-2.5 bg-pure-white rounded-inputs border ${
                      errors.message ? 'border-red-500' : 'border-stone-border'
                    } focus:border-cyan-signal focus:outline-none transition-colors duration-200 resize-none body`}
                    placeholder="Tulis pesan Anda di sini…"
                  />
                  {errors.message && (
                    <p className="body-sm text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pill btn-pill-filled btn-md w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-pure-white border border-stone-border rounded-cards p-6">
                <h3 className="heading-sm text-ink-black mb-4">Informasi Kontak</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-icons bg-sky-wash flex items-center justify-center shrink-0">
                        <info.icon size={14} className="text-cyan-edge" />
                      </div>
                      <div>
                        <p className="body-sm font-medium text-ink-black mb-0.5">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="body text-warm-gray hover:text-ink-black transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="body text-warm-gray">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-pure-white border border-stone-border rounded-cards overflow-hidden">
                <div className="h-56 bg-soot flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={24} className="text-pure-white/40 mx-auto mb-2" />
                    <p className="body-sm text-pure-white/60">Google Maps</p>
                    <p className="caption text-pure-white/40">Integrasi peta akan ditambahkan</p>
                  </div>
                </div>
              </div>

              <div className="bg-pure-white border border-stone-border rounded-cards p-6">
                <h3 className="heading-sm text-ink-black mb-3">Ikuti Kami</h3>
                <p className="body text-warm-gray mb-4">
                  Follow media sosial kami untuk info promo terbaru
                </p>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-outlined btn-sm"
                  >
                    Instagram
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-outlined btn-sm"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
