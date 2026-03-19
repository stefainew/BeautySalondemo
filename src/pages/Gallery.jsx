import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const photos = [
  { src: '/images/manicure.jpg',        cat: 'manicure', title: 'Rose маникюр',           desc: 'Изискан блясък за специални поводи' },
  { src: '/images/pedicure-spa.jpg',    cat: 'pedicure', title: 'СПА педикюр',            desc: 'Крака в роза — луксозна релаксация' },
  { src: '/images/salon-interior.jpg',  cat: 'manicure', title: 'Нашият салон',           desc: 'Мраморни маси и златни детайли' },
  { src: '/images/pedicure-medical.jpg',cat: 'pedicure', title: 'Медицински педикюр',     desc: 'Специализирана грижа от професионалист' },
  { src: '/images/pedicure-massage.jpg',cat: 'pedicure', title: 'СПА масаж на крака',     desc: 'Релаксиращ масаж с рози' },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', cat: 'facial',   title: 'Хидратираща терапия',  desc: 'Дълбока хидратация за сияйна кожа' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80', cat: 'facial',   title: 'Anti-age процедура',   desc: 'Лифтинг ефект с колаген и хиалурон' },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80', cat: 'hair',     title: 'Прецизно подстригване', desc: 'Модерен боб с перфектен стайлинг' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80', cat: 'hair',     title: 'Балеаж & омбре',       desc: 'Натурален преход за красива коса' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80', cat: 'facial',   title: 'Релаксираща маска',     desc: 'Пълна релаксация и сияйна кожа' },
  { src: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=800&q=80', cat: 'manicure', title: 'Гел лак маникюр',      desc: 'Траен блясък до 3 седмици' },
  { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80', cat: 'facial',   title: 'Кислородна терапия',   desc: 'Дълбоко хидратираща процедура' },
]

const filters = [
  { id: 'all',      label: 'Всички' },
  { id: 'manicure', label: 'Маникюр' },
  { id: 'pedicure', label: 'Педикюр' },
  { id: 'facial',   label: 'Лице' },
  { id: 'hair',     label: 'Фризьор' },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.05 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function Gallery() {
  useReveal()
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? photos : photos.filter(p => p.cat === active)

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-10 bg-blush text-center">
        <p className="section-label mb-4 reveal">Портфолио</p>
        <h1 className="font-cormorant text-5xl md:text-7xl font-semibold text-charcoal leading-tight mb-6 reveal">
          Галерия на красотата
        </h1>
        <div className="w-24 h-px bg-rose/30 mx-auto mb-6 reveal" />
        <p className="font-dm text-stone text-lg max-w-xl mx-auto italic reveal">
          Открийте изкуството на трансформацията
        </p>
      </section>

      <section className="py-16 px-6 lg:px-10 bg-ivory">
        <div className="max-w-7xl mx-auto">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
            {filters.map(({ id, label }) => (
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

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {filtered.map(({ src, cat, title, desc }, i) => (
              <div key={i} className="break-inside-avoid mb-5 group relative overflow-hidden rounded-2xl cursor-pointer reveal">
                <img
                  src={src}
                  alt={title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="font-dm text-rose text-xs font-bold tracking-widest uppercase mb-1">
                    {filters.find(f => f.id === cat)?.label}
                  </span>
                  <h3 className="font-cormorant text-xl text-white font-semibold">{title}</h3>
                  <p className="font-dm text-white/70 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 bg-white rounded-2xl p-12 text-center border border-accent-pink/50 shadow-sm reveal">
            <span className="text-4xl mb-4 block">📅</span>
            <h2 className="font-cormorant text-4xl font-semibold text-charcoal mb-4">
              Желаете същата промяна?
            </h2>
            <p className="font-dm text-stone text-base mb-8 max-w-lg mx-auto">
              Нашите експерти са готови да подчертаят вашата естествена красота.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/rezervatsiya" className="btn-primary">Резервирай сега</Link>
              <Link to="/uslugi" className="btn-secondary">Разгледай услуги</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
