import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/',            label: 'Начало' },
  { to: '/uslugi',      label: 'Услуги' },
  { to: '/tseni',       label: 'Цени' },
  { to: '/galeriya',    label: 'Галерия' },
  { to: '/kontakti',    label: 'Контакти' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-accent-pink' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-rose text-2xl">✦</span>
          <span className="font-cormorant text-xl font-semibold tracking-wide text-charcoal group-hover:text-rose transition-colors">
            Beauty Salon
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-dm text-sm font-medium tracking-wide transition-colors relative
                after:absolute after:bottom-0 after:left-0 after:h-px after:bg-rose after:transition-all after:duration-300
                ${pathname === to
                  ? 'text-rose after:w-full'
                  : 'text-charcoal hover:text-rose after:w-0 hover:after:w-full'
                }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link to="/rezervatsiya" className="hidden md:block btn-primary text-xs py-2.5 px-6">
            Запази час
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Меню"
          >
            <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-charcoal transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden bg-ivory border-t border-accent-pink
        ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-dm text-sm font-medium py-1 ${pathname === to ? 'text-rose' : 'text-charcoal'}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/rezervatsiya" className="btn-primary text-center mt-2">
            Запази час
          </Link>
        </div>
      </div>
    </header>
  )
}
