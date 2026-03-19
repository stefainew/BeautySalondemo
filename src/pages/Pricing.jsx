import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 'manicure',
    label: 'Маникюр',
    items: [
      { name: 'Класически маникюр',  price: '25 лв', duration: '45 мин' },
      { name: 'Гел лак маникюр',     price: '35 лв', duration: '60 мин' },
      { name: 'Ноктопластика (гел)', price: '55 лв', duration: '90 мин' },
      { name: 'Сваляне гел лак',     price: '15 лв', duration: '20 мин' },
      { name: 'Nail art (на нокът)', price: 'от 5 лв', duration: '—' },
    ],
  },
  {
    id: 'pedicure',
    label: 'Педикюр',
    items: [
      { name: 'Класически педикюр', price: '35 лв', duration: '60 мин' },
      { name: 'СПА педикюр',        price: '50 лв', duration: '75 мин' },
      { name: 'Гел лак педикюр',    price: '45 лв', duration: '75 мин' },
      { name: 'Медицински педикюр', price: '60 лв', duration: '90 мин' },
    ],
  },
  {
    id: 'waxing',
    label: 'Кола маска',
    items: [
      { name: 'Подмишници',          price: '20 лв', duration: '20 мин' },
      { name: 'Крака (цели)',        price: '35 лв', duration: '40 мин' },
      { name: 'Бикини (класическо)', price: '30 лв', duration: '30 мин' },
      { name: 'Бикини (бразилско)', price: '45 лв', duration: '45 мин' },
      { name: 'Ръце (цели)',         price: '25 лв', duration: '30 мин' },
    ],
  },
  {
    id: 'facial',
    label: 'Лице',
    items: [
      { name: 'Базово почистване',    price: '50 лв', duration: '60 мин' },
      { name: 'Дълбоко почистване',   price: '75 лв', duration: '90 мин' },
      { name: 'Хидратираща терапия',  price: '65 лв', duration: '75 мин' },
      { name: 'Anti-age терапия',     price: '90 лв', duration: '90 мин' },
    ],
  },
  {
    id: 'hair',
    label: 'Фризьор',
    items: [
      { name: 'Подстригване (жена)', price: '30 лв',  duration: '45 мин' },
      { name: 'Боядисване (цяло)',   price: '80 лв',  duration: '120 мин' },
      { name: 'Кичури / балеаж',    price: '100 лв', duration: '150 мин' },
      { name: 'Сешоар и оформяне',  price: '25 лв',  duration: '30 мин' },
      { name: 'Кератинова терапия', price: '150 лв', duration: '180 мин' },
    ],
  },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function Pricing() {
  useReveal()
  const [active, setActive] = useState('manicure')
  const current = categories.find(c => c.id === active)

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-10 bg-blush text-center">
        <p className="section-label mb-4 reveal">Прозрачни цени</p>
        <h1 className="font-cormorant text-5xl md:text-7xl font-semibold text-charcoal leading-tight mb-6 reveal">
          Ценова листа
        </h1>
        <p className="font-dm text-stone text-lg max-w-xl mx-auto reveal">
          Всички цени са в лева с ДДС. Цените са примерни — моля потвърдете при резервация.
        </p>
      </section>

      {/* Category tabs */}
      <section className="py-16 px-6 lg:px-10 bg-ivory">
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
            {categories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`font-dm text-sm font-medium tracking-wide px-6 py-2.5 rounded-full transition-all duration-300
                  ${active === id
                    ? 'bg-rose text-white shadow-lg shadow-rose/30'
                    : 'bg-white border border-accent-pink text-stone hover:border-rose hover:text-rose'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Price list */}
          <div className="bg-white rounded-2xl border border-accent-pink/60 overflow-hidden shadow-sm reveal">
            <div className="bg-rose/5 border-b border-accent-pink/60 px-8 py-5">
              <h2 className="font-cormorant text-3xl font-semibold text-charcoal">{current.label}</h2>
            </div>
            <div className="divide-y divide-accent-pink/40">
              {current.items.map(({ name, price, duration }, i) => (
                <div key={i} className="flex items-center justify-between px-8 py-5 hover:bg-blush/30 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose/40 group-hover:bg-rose transition-colors flex-shrink-0" />
                    <span className="font-dm text-base text-charcoal">{name}</span>
                  </div>
                  <div className="flex items-center gap-8 text-right">
                    <span className="font-dm text-sm text-stone hidden sm:block">{duration}</span>
                    <span className="font-cormorant text-2xl font-bold text-rose">{price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All categories overview */}
          <div className="mt-16 reveal">
            <h3 className="font-cormorant text-3xl font-semibold text-charcoal text-center mb-10">
              Всички категории
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {categories.map(({ id, label, items }) => (
                <div key={id} className="bg-white rounded-2xl border border-accent-pink/60 overflow-hidden hover:border-rose/30 hover:shadow-sm transition-all">
                  <button
                    onClick={() => { setActive(id); window.scrollTo({ top: 300, behavior: 'smooth' }) }}
                    className="w-full bg-rose/5 border-b border-accent-pink/50 px-6 py-4 text-left hover:bg-rose/10 transition-colors"
                  >
                    <h3 className="font-dm font-semibold text-charcoal tracking-wide">{label}</h3>
                  </button>
                  <div className="px-6 py-4 space-y-2">
                    {items.slice(0, 3).map(({ name, price }) => (
                      <div key={name} className="flex justify-between text-sm">
                        <span className="font-dm text-stone">{name}</span>
                        <span className="font-cormorant text-lg font-bold text-rose">{price}</span>
                      </div>
                    ))}
                    {items.length > 3 && (
                      <p className="font-dm text-xs text-stone/60 pt-1">+ {items.length - 3} повече услуги</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-charcoal rounded-2xl p-12 relative overflow-hidden reveal">
            <div className="absolute inset-0 bg-gradient-to-r from-rose/20 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-cormorant text-4xl font-semibold text-white italic mb-4">
                Готови за вашата трансформация?
              </h3>
              <p className="font-dm text-white/60 mb-8 max-w-md mx-auto">
                Запазете своя час онлайн и се доверете на нашите специалисти.
              </p>
              <Link to="/rezervatsiya" className="btn-primary">Запази час сега</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
