import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { TestimonialsColumn } from '../components/ui/testimonials-columns'

const HERO_IMG = '/images/salon-interior.jpg'
const ABOUT_IMG = '/images/pedicure-medical.jpg'

const services = [
  { label: 'Маникюр',            img: '/images/manicure.jpg',        from: '25 лв', to: '/uslugi#manicure' },
  { label: 'Педикюр',            img: '/images/pedicure-spa.jpg',    from: '35 лв', to: '/uslugi#pedicure' },
  { label: 'Кола маска',         img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80', from: '20 лв', to: '/uslugi#waxing' },
  { label: 'Почистване на лице', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', from: '50 лв', to: '/uslugi#facial' },
  { label: 'Фризьор',            img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80', from: '30 лв', to: '/uslugi#hair' },
]

const gallery = [
  '/images/manicure.jpg',
  '/images/salon-interior.jpg',
  '/images/pedicure-spa.jpg',
  '/images/pedicure-medical.jpg',
  '/images/pedicure-massage.jpg',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
]

const testimonials = [
  {
    name: 'Мария Иванова',
    role: 'Редовна клиентка',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Най-доброто място за релакс! Екипът е изключително професионален и внимателен към всеки детайл. Маникюрът ми винаги изглежда перфектно.',
  },
  {
    name: 'Елена Петрова',
    role: 'Лоялна клиентка',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Уникална атмосфера и страхотно обслужване. Маникюрът ми издържа седмици! Горещо препоръчвам на всички, които искат качество.',
  },
  {
    name: 'Александра Димова',
    role: 'Клиентка от 3 години',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Процедурите за лице правят чудеса. Чувствам се нова жена след всяко посещение! Персоналът е топъл и внимателен.',
  },
  {
    name: 'Силвия Тодорова',
    role: 'Редовна клиентка',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    text: 'Gel маникюрът изглежда невероятно и издържа над месец. Никъде другаде не съм получавала такъв резултат. Определено се връщам!',
  },
  {
    name: 'Ния Колева',
    role: 'Нова клиентка',
    image: 'https://randomuser.me/api/portraits/women/21.jpg',
    text: 'Дойдох за пръв път по препоръка и останах абсолютно очарована. Spa педикюрът беше релаксиращ, а резултатът — страхотен!',
  },
  {
    name: 'Виктория Стефанова',
    role: 'Клиентка от 2 години',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    text: 'Обожавам nail art дизайните, които правят тук. Всеки път са различни и невероятно красиви. Истинско изкуство на ноктите!',
  },
  {
    name: 'Теодора Ангелова',
    role: 'Редовна клиентка',
    image: 'https://randomuser.me/api/portraits/women/56.jpg',
    text: 'Атмосферата е уютна и изтънчена. Персоналът знае как да те накара да се чувстваш специална. Любимото ми място за красота.',
  },
  {
    name: 'Деница Маринова',
    role: 'Клиентка от 5 години',
    image: 'https://randomuser.me/api/portraits/women/76.jpg',
    text: 'Преди 5 години намерих своя салон и никога повече не съм търсила друго място. Качеството, грижата и резултатите са несравними.',
  },
  {
    name: 'Камелия Йорданова',
    role: 'Лоялна клиентка',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
    text: 'Кола маската беше безболезнена и резултатът трая дълго. Препоръчах салона на всички приятелки и всички са развъзхитени!',
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const marqueeItems = ['МАНИКЮР', 'ПЕДИКЮР', 'КОЛА МАСКА', 'ПОЧИСТВАНЕ НА ЛИЦЕ', 'ФРИЗЬОР', 'NAIL ART', 'SPA ПЕДИКЮР', 'ANTI-AGE ТЕРАПИЯ']
const doubled = [...marqueeItems, ...marqueeItems]

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

export default function Home() {
  useReveal()

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/65 via-charcoal/40 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="font-dm text-xs uppercase tracking-[0.3em] text-blush/80 mb-6 animate-fade-in">
            ✦ Premium Beauty Experience ✦
          </p>
          <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-semibold italic text-white leading-[1.05] mb-8 animate-fade-up">
            Твоята красота,<br />наша страст.
          </h1>
          <p className="font-dm text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto animate-fade-up">
            Открийте изкуството на перфектната грижа в модерна и женствена атмосфера.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link to="/rezervatsiya" className="btn-primary">Запази час</Link>
            <Link to="/uslugi" className="inline-block border border-white/60 text-white font-dm font-medium text-sm tracking-widest uppercase px-8 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-charcoal">
              Нашите услуги
            </Link>
          </div>
        </div>
        <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* MARQUEE */}
      <div className="bg-rose py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="font-dm text-white text-sm font-medium tracking-[0.2em] uppercase mx-8">
              {item} <span className="text-white/40 mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section id="services" className="py-24 px-6 lg:px-10 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">Нашите услуги</p>
            <h2 className="section-title mb-5">Всичко за вашата красота</h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 stagger">
            {services.map(({ label, img, from, to }) => (
              <Link key={label} to={to} className="card group overflow-hidden reveal">
                <div className="h-48 overflow-hidden">
                  <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-cormorant text-xl font-semibold text-charcoal mb-1">{label}</h3>
                  <p className="font-dm text-xs text-stone mb-3">
                    от <span className="text-rose font-semibold">{from}</span>
                  </p>
                  <span className="font-dm text-xs text-rose tracking-wide uppercase font-medium group-hover:underline">
                    Виж повече →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 lg:px-10 bg-blush">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative reveal">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full" />
            <img src={ABOUT_IMG} alt="Beauty salon" className="rounded-2xl shadow-2xl w-full h-[520px] object-cover relative z-10" />
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 z-20">
              <p className="font-cormorant text-3xl font-bold text-rose">5000+</p>
              <p className="font-dm text-xs text-stone uppercase tracking-wider mt-1">Доволни клиенти</p>
            </div>
          </div>
          <div className="reveal">
            <p className="section-label mb-4">За нас</p>
            <h2 className="section-title mb-6">Премиум грижа от<br />експертен екип</h2>
            <p className="font-dm text-stone text-base leading-relaxed mb-5">
              В Beauty Salon вярваме, че красотата е израз на вътрешна хармония. Нашият екип от
              висококвалифицирани специалисти използва само най-висок клас продукти, за да осигури
              резултати, които надминават очакванията.
            </p>
            <p className="font-dm text-stone text-base leading-relaxed mb-10">
              Всяка процедура е персонализирана според вашите нужди — в атмосфера на пълна
              релаксация и изтънченост.
            </p>
            <div className="flex items-center gap-8 mb-10">
              {[['10+', 'Години опит'], ['15+', 'Услуги'], ['98%', 'Задоволени']].map(([num, lbl], i) => (
                <div key={i} className="flex items-center gap-8">
                  <div>
                    <p className="font-cormorant text-4xl font-bold text-rose">{num}</p>
                    <p className="font-dm text-xs text-stone uppercase tracking-wider">{lbl}</p>
                  </div>
                  {i < 2 && <div className="w-px h-12 bg-rose/20" />}
                </div>
              ))}
            </div>
            <Link to="/uslugi" className="btn-primary">Разгледай услугите</Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 px-6 lg:px-10 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 reveal">
            <div>
              <p className="section-label mb-3">Портфолио</p>
              <h2 className="section-title">Нашите трансформации</h2>
            </div>
            <Link to="/galeriya" className="btn-secondary mt-6 sm:mt-0 text-xs">Виж галерията</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger">
            {gallery.map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square reveal">
                <img src={src} alt={`Портфолио ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-blush relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blush via-blush to-blush pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="section-label mb-3">Отзиви</p>
            <h2 className="section-title mb-4">Какво казват нашите клиенти</h2>
            <div className="w-16 h-px bg-gold mx-auto" />
          </motion.div>

          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[700px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={18} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 px-6 lg:px-10 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10 reveal">
          <p className="section-label text-gold mb-4">Специална покана</p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold text-white italic leading-tight mb-6">
            Готови ли сте да изглеждате невероятно?
          </h2>
          <p className="font-dm text-white/60 text-base mb-10 max-w-lg mx-auto">
            Запазете своя час онлайн за по-малко от минута.
          </p>
          <Link to="/rezervatsiya" className="btn-primary text-base px-10 py-4">Запази своя час сега</Link>
        </div>
      </section>
    </div>
  )
}
