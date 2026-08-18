import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '../../config/site'

const footerLinks = {
  products: [
    { name: 'Gaming PC', path: '/products?category=gaming-pc' },
    { name: 'Laptop', path: '/products?category=laptop' },
    { name: 'Komponen', path: '/products?category=components' },
    { name: 'Aksesoris', path: '/products?category=accessories' },
  ],
  services: [
    { name: 'PC Build', path: '/services#pc-build' },
    { name: 'PC Upgrade', path: '/services#pc-upgrade' },
    { name: 'Konsultasi Hardware', path: '/services#hardware-consultation' },
    { name: 'Perbaikan Komputer', path: '/services#computer-repair' },
  ],
  company: [
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Kontak', path: '/contact' },
  ],
}

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const socialLinks = [
  { name: 'Facebook', icon: FacebookIcon, url: siteConfig.social.facebook },
  { name: 'Twitter', icon: TwitterIcon, url: siteConfig.social.twitter },
  { name: 'Instagram', icon: InstagramIcon, url: siteConfig.social.instagram },
  { name: 'YouTube', icon: YoutubeIcon, url: siteConfig.social.youtube },
]

export default function Footer() {
  return (
    <footer className="bg-soot text-pure-white">
      <div className="max-w-page mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="font-display font-medium text-base text-pure-white tracking-tight">
                MHAS
              </span>
              <span className="text-xs uppercase tracking-[0.14em] text-pure-white/50 font-medium">
                Computer
              </span>
            </Link>
            <p className="text-pure-white/50 text-sm leading-relaxed font-body max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-pure-white/50 hover:text-pure-white hover:bg-pure-white/10 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-pure-white/70 mb-6 uppercase tracking-wider">
              Produk
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-pure-white/50 text-sm hover:text-pure-white transition-colors duration-200 font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-pure-white/70 mb-6 uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-pure-white/50 text-sm hover:text-pure-white transition-colors duration-200 font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-pure-white/70 mb-6 uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-pure-white/40 mt-0.5 shrink-0" />
                <span className="text-pure-white/50 text-sm font-body">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-pure-white/40 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-pure-white/50 text-sm hover:text-pure-white transition-colors duration-200 font-body"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-pure-white/40 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-pure-white/50 text-sm hover:text-pure-white transition-colors duration-200 font-body"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-pure-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-pure-white/40 text-sm font-body">
              &copy; {new Date().getFullYear()} {siteConfig.name}. Hak cipta dilindungi.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-pure-white/40 text-sm hover:text-pure-white transition-colors duration-200 font-body">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-pure-white/40 text-sm hover:text-pure-white transition-colors duration-200 font-body">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
