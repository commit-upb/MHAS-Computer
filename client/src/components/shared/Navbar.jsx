import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-canvas/95 backdrop-blur-sm border-b border-stone-border shadow-subtle'
          : 'bg-canvas'
      }`}
    >
      <div className="max-w-page mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display font-medium text-ink-black text-base tracking-tight">
              MHAS
            </span>
            <span className="text-xs uppercase tracking-[0.14em] text-warm-gray font-medium">
              Computer
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 h-8 flex items-center text-sm font-normal transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-ink-black'
                    : 'text-warm-gray hover:text-ink-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-pill btn-pill-filled btn-sm"
            >
              Start free trial
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-ink-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-stone-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 text-sm transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-ink-black'
                    : 'text-warm-gray hover:text-ink-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-4 pt-3 mt-2 border-t border-stone-border">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 btn-pill btn-pill-filled justify-center py-2"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
