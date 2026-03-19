import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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

export default function Contacts() {
  useReveal()
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-10 bg-blush text-center">
        <p className="section-label mb-4 reveal">Свържете се с нас</p>
        <h1 className="font-cormorant text-5xl md:text-7xl font-semibold text-charcoal leading-tight mb-6 reveal">
          Контакти
        </h1>
        <p className="font-dm text-stone text-lg max-w-xl mx-auto reveal">
          Ще се радваме да отговорим на всичките ви въпроси.
        </p>
      </section>

      <section className="py-16 px-6 lg:px-10 bg-ivory">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Contact info */}
          <div className="reveal">
            <h2 className="font-cormorant text-4xl font-semibold text-charcoal mb-8">Намерете ни</h2>

            <div className="space-y-6 mb-10">
              {[
                { icon: '📍', label: 'Адрес', value: 'ул. „Цар Асен" 42, София 1000' },
                { icon: '📞', label: 'Телефон', value: '+359 888 123 456' },
                { icon: '✉️', label: 'Имейл', value: 'hello@beautysalon.bg' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center flex-shrink-0 text-xl">
                    {icon}
                  </div>
                  <div>
                    <p className="font-dm text-xs uppercase tracking-widest text-stone mb-1">{label}</p>
                    <p className="font-dm text-charcoal font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-dm font-semibold text-charcoal uppercase text-xs tracking-widest mb-4">Работно Време</h3>
            <div className="space-y-2 mb-10">
              {[
                ['Понеделник – Петък', '09:00 – 20:00'],
                ['Събота', '10:00 – 18:00'],
                ['Неделя', 'Почивен ден'],
              ].map(([day, hours]) => (
                <div key={day} className="flex justify-between font-dm text-sm py-2 border-b border-accent-pink/40">
                  <span className="text-stone">{day}</span>
                  <span className={hours === 'Почивен ден' ? 'text-rose' : 'text-charcoal font-medium'}>{hours}</span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-accent-pink/50 shadow-sm h-64 bg-blush flex items-center justify-center">
              <iframe
                title="Карта"
                className="w-full h-full border-0"
                loading="lazy"
                src="https://maps.google.com/maps?q=Sofia+Bulgaria&z=13&output=embed"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-accent-pink/50">
              <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-2">Изпратете запитване</h2>
              <p className="font-dm text-stone text-sm mb-8">Ще отговорим до 24 часа.</p>

              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-cormorant text-3xl font-semibold text-charcoal mb-2">Благодарим ви!</h3>
                  <p className="font-dm text-stone">Ще се свържем с вас скоро.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-dm text-xs text-stone uppercase tracking-wider block mb-2">Вашето Име *</label>
                      <input
                        required type="text"
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        placeholder="Мария Иванова"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="font-dm text-xs text-stone uppercase tracking-wider block mb-2">Телефон *</label>
                      <input
                        required type="tel"
                        value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                        placeholder="+359 888 000 000"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-dm text-xs text-stone uppercase tracking-wider block mb-2">Имейл</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      placeholder="maria@example.com"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="font-dm text-xs text-stone uppercase tracking-wider block mb-2">Услуга</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({...form, service: e.target.value})}
                      className="input-field"
                    >
                      <option value="">Изберете услуга...</option>
                      <option>Маникюр</option>
                      <option>Педикюр</option>
                      <option>Кола маска</option>
                      <option>Почистване на лице</option>
                      <option>Фризьор</option>
                      <option>Друго</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-dm text-xs text-stone uppercase tracking-wider block mb-2">Съобщение</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                      placeholder="Вашето запитване..."
                      className="input-field resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-center">
                    Изпратете запитването
                  </button>
                  <p className="font-dm text-xs text-stone text-center mt-2">
                    Или{' '}
                    <Link to="/rezervatsiya" className="text-rose hover:underline">
                      запазете час директно онлайн
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
