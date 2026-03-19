import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'manicure',
    title: 'Маникюр',
    desc: 'Оформяне, гел лак, ноктопластика и nail art — всичко за перфектни ръце.',
    img: '/images/manicure.jpg',
    items: [
      { name: 'Класически маникюр',  desc: 'Оформяне на нокътната плочка, почистване на кутикули и нанасяне на подхранващо масло.' },
      { name: 'Гел лак маникюр',     desc: 'Професионално нанасяне с висок клас гел продукти за перфектен блясък до 3 седмици.' },
      { name: 'SPA терапия за ръце', desc: 'Ексфолиация, маска и релаксиращ масаж за кадифено мека кожа.' },
    ],
  },
  {
    id: 'pedicure',
    title: 'Педикюр',
    desc: 'Класически, медицински и SPA педикюр за безупречно красиви крака.',
    img: '/images/pedicure-massage.jpg',
    items: [
      { name: 'Медицински педикюр',  desc: 'Специализирана грижа за проблемни стъпала, мазоли и впити нокти.' },
      { name: 'Естетичен педикюр',   desc: 'Класическа обработка на стъпала и нокти с лакиране по избор.' },
      { name: 'Парафинова терапия',  desc: 'Дълбока хидратация и затопляне за уморени крака.' },
    ],
  },
  {
    id: 'waxing',
    title: 'Кола маска',
    desc: 'Ефективно и деликатно отстраняване на нежелано окосмяване.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Цяло тяло',     desc: 'Бързо и ефективно отстраняване с висококачествен восък.' },
      { name: 'Зони лице',     desc: 'Прецизно оформяне на вежди и деликатно почистване.' },
      { name: 'Интим & Бикини', desc: 'Хигиенично и дискретно обслужване с хипоалергенни материали.' },
    ],
  },
  {
    id: 'facial',
    title: 'Почистване на лице',
    desc: 'Дълбоко почистване, хидратиращи терапии и anti-age процедури.',
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Ултразвуково почистване', desc: 'Дълбоко почистване на порите без зачервяване и болка.' },
      { name: 'Химичен пилинг',          desc: 'Обновяване на кожата и изравняване на тена.' },
      { name: 'Anti-Age терапия',        desc: 'Луксозна грижа с колаген и хиалурон за мигновен лифтинг ефект.' },
    ],
  },
  {
    id: 'hair',
    title: 'Фризьор',
    desc: 'Подстригване, боядисване, балеаж и специализирани терапии за коса.',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    items: [
      { name: 'Дамско подстригване',    desc: 'Стилни прически, съобразени с формата на лицето и типа коса.' },
      { name: 'Балеаж & Боядисване',   desc: 'Професионално оцветяване с италиански бои за наситен и траен цвят.' },
      { name: 'Терапия за копринена коса', desc: 'Кератиново възстановяване и хидратация за блясък и жизненост.' },
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

export default function Services() {
  useReveal()

  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section className="py-20 px-6 lg:px-10 bg-blush text-center">
        <p className="section-label mb-4 reveal">Нашите услуги</p>
        <h1 className="font-cormorant text-5xl md:text-7xl font-semibold text-charcoal leading-tight mb-6 reveal">
          Нашите Услуги
        </h1>
        <p className="font-dm text-stone text-lg max-w-2xl mx-auto reveal">
          Потопете се в свят на красота и релаксация. Предлагаме индивидуална грижа, съобразена с вашите нужди.
        </p>
      </section>

      {/* Service Sections */}
      <div className="space-y-0">
        {services.map(({ id, title, desc, img, items }, idx) => (
          <section
            key={id}
            id={id}
            className={`py-24 px-6 lg:px-10 ${idx % 2 === 0 ? 'bg-ivory' : 'bg-blush'}`}
          >
            <div className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={`${idx % 2 !== 0 ? 'lg:order-2' : ''} reveal`}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose/10 rounded-full blur-xl" />
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-[480px] object-cover rounded-2xl shadow-2xl relative z-10"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''} reveal`}>
                <p className="section-label mb-4">Услуга</p>
                <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-charcoal mb-4">{title}</h2>
                <p className="font-dm text-stone text-base leading-relaxed mb-8">{desc}</p>
                <div className="space-y-4">
                  {items.map(({ name, desc: d }) => (
                    <div key={name} className="bg-white rounded-xl p-5 border border-accent-pink/50 hover:border-rose/40 hover:shadow-sm transition-all">
                      <h4 className="font-dm font-semibold text-charcoal mb-1">{name}</h4>
                      <p className="font-dm text-sm text-stone leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex gap-4">
                  <Link to="/rezervatsiya" className="btn-primary">Запази час</Link>
                  <Link to="/tseni" className="btn-secondary">Виж цените</Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-charcoal text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose/20 to-transparent pointer-events-none" />
        <div className="relative z-10 reveal">
          <p className="section-label text-gold mb-4">Безплатна консултация</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-white italic mb-6">
            Не сте сигурни коя услуга е за вас?
          </h2>
          <p className="font-dm text-white/60 mb-8 max-w-md mx-auto">
            Заповядайте на безплатна консултация с нашите специалисти.
          </p>
          <Link to="/kontakti" className="btn-primary">Свържете се с нас</Link>
        </div>
      </section>
    </div>
  )
}
