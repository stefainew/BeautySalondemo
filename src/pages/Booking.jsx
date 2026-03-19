import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  { cat: 'Маникюр',            items: ['Класически маникюр – 25 лв', 'Гел лак маникюр – 35 лв', 'Ноктопластика – 55 лв', 'Nail art – от 5 лв'] },
  { cat: 'Педикюр',            items: ['Класически педикюр – 35 лв', 'СПА педикюр – 50 лв', 'Медицински педикюр – 60 лв'] },
  { cat: 'Кола маска',         items: ['Подмишници – 20 лв', 'Крака (цели) – 35 лв', 'Бикини – от 30 лв', 'Ръце – 25 лв'] },
  { cat: 'Почистване на лице', items: ['Базово почистване – 50 лв', 'Дълбоко почистване – 75 лв', 'Anti-age терапия – 90 лв'] },
  { cat: 'Фризьор',           items: ['Подстригване – 30 лв', 'Боядисване – 80 лв', 'Балеаж – 100 лв', 'Сешоар – 25 лв'] },
]

const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

function genCalendar() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const first = new Date(year, month, 1).getDay()
  const days = new Date(year, month + 1, 0).getDate()
  const offset = (first + 6) % 7
  return { year, month, days, offset, today: today.getDate() }
}

const monthNames = ['Януари','Февруари','Март','Април','Май','Юни','Юли','Август','Септември','Октомври','Ноември','Декември']

export default function Booking() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState({ service: '', date: '', time: '', name: '', phone: '', notes: '' })
  const { year, month, days, offset, today } = genCalendar()

  const canNext1 = !!selected.service
  const canNext2 = !!selected.date && !!selected.time
  const canNext3 = !!selected.name && !!selected.phone

  const steps = [
    { n: 1, label: 'Услуга' },
    { n: 2, label: 'Дата & Час' },
    { n: 3, label: 'Данни' },
    { n: 4, label: 'Потвърждение' },
  ]

  return (
    <div className="pt-24 pb-16 min-h-screen bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center py-12">
          <p className="section-label mb-3">Онлайн резервация</p>
          <h1 className="font-cormorant text-5xl font-semibold text-charcoal italic mb-2">Запазете своя час</h1>
          <p className="font-dm text-stone text-sm">Бързо, лесно и без телефонно обаждане.</p>
        </div>

        {/* Progress stepper */}
        <div className="flex items-center justify-center gap-0 mb-12">
          {steps.map(({ n, label }, i) => (
            <div key={n} className="flex items-center">
              <button
                onClick={() => step > n && setStep(n)}
                className={`flex flex-col items-center gap-1.5 ${step > n ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-dm font-semibold text-sm transition-all
                  ${step === n ? 'bg-rose text-white shadow-lg shadow-rose/30' : step > n ? 'bg-rose/20 text-rose' : 'bg-accent-pink text-stone'}`}>
                  {step > n ? '✓' : n}
                </div>
                <span className={`font-dm text-xs hidden sm:block ${step === n ? 'text-rose font-medium' : 'text-stone'}`}>{label}</span>
              </button>
              {i < steps.length - 1 && (
                <div className={`w-16 sm:w-24 h-px mx-2 transition-all ${step > n ? 'bg-rose' : 'bg-accent-pink'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">

            {/* STEP 1: Service */}
            {step === 1 && (
              <div className="bg-white rounded-2xl p-8 border border-accent-pink/60 shadow-sm">
                <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-6">Изберете услуга</h2>
                <div className="space-y-4">
                  {services.map(({ cat, items }) => (
                    <div key={cat}>
                      <p className="font-dm text-xs text-stone uppercase tracking-widest mb-2">{cat}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {items.map(item => (
                          <button
                            key={item}
                            onClick={() => setSelected({...selected, service: item})}
                            className={`text-left p-4 rounded-xl border transition-all font-dm text-sm
                              ${selected.service === item
                                ? 'border-rose bg-rose/5 text-rose font-medium shadow-sm'
                                : 'border-accent-pink hover:border-rose/50 text-charcoal hover:bg-blush/30'
                              }`}
                          >
                            {selected.service === item ? '✓ ' : ''}{item}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!canNext1}
                  className="btn-primary mt-8 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Напред →
                </button>
              </div>
            )}

            {/* STEP 2: Date & Time */}
            {step === 2 && (
              <div className="bg-white rounded-2xl p-8 border border-accent-pink/60 shadow-sm">
                <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-6">Изберете дата и час</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div>
                    <div className="border border-accent-pink rounded-xl p-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-dm font-semibold text-charcoal">{monthNames[month]} {year}</span>
                      </div>
                      <div className="grid grid-cols-7 text-center text-xs font-dm font-bold text-stone/60 mb-2">
                        {['Пн','Вт','Ср','Чт','Пт','Сб','Нд'].map(d => <div key={d}>{d}</div>)}
                      </div>
                      <div className="grid grid-cols-7 text-center gap-y-1">
                        {[...Array(offset)].map((_, i) => <div key={i} />)}
                        {[...Array(days)].map((_, i) => {
                          const d = i + 1
                          const dateStr = `${d} ${monthNames[month]}`
                          const isPast = d < today
                          const isSun = (offset + i) % 7 === 6
                          return (
                            <button
                              key={d}
                              disabled={isPast || isSun}
                              onClick={() => setSelected({...selected, date: dateStr})}
                              className={`w-8 h-8 mx-auto rounded-full font-dm text-sm transition-all
                                ${selected.date === dateStr ? 'bg-rose text-white font-bold' : ''}
                                ${isPast || isSun ? 'text-stone/30 cursor-not-allowed' : 'hover:bg-rose/10 cursor-pointer'}
                                ${d === today && selected.date !== dateStr ? 'ring-1 ring-rose/40' : ''}`}
                            >
                              {d}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Time slots */}
                  <div>
                    <p className="font-dm text-sm font-semibold text-charcoal mb-3">Свободни часове</p>
                    <div className="grid grid-cols-3 gap-2">
                      {times.map(t => (
                        <button
                          key={t}
                          onClick={() => setSelected({...selected, time: t})}
                          className={`py-2.5 rounded-lg border font-dm text-sm transition-all
                            ${selected.time === t
                              ? 'border-rose bg-rose text-white font-medium'
                              : 'border-accent-pink text-charcoal hover:border-rose/50'
                            }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <button onClick={() => setStep(1)} className="btn-secondary">← Назад</button>
                  <button onClick={() => setStep(3)} disabled={!canNext2} className="btn-primary disabled:opacity-40">Напред →</button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact */}
            {step === 3 && (
              <div className="bg-white rounded-2xl p-8 border border-accent-pink/60 shadow-sm">
                <h2 className="font-cormorant text-3xl font-semibold text-charcoal mb-6">Вашите данни</h2>
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-dm text-xs text-stone uppercase tracking-wider block mb-2">Имe *</label>
                      <input
                        type="text" required
                        value={selected.name}
                        onChange={e => setSelected({...selected, name: e.target.value})}
                        placeholder="Мария Иванова"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="font-dm text-xs text-stone uppercase tracking-wider block mb-2">Телефон *</label>
                      <input
                        type="tel" required
                        value={selected.phone}
                        onChange={e => setSelected({...selected, phone: e.target.value})}
                        placeholder="+359 888 000 000"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-dm text-xs text-stone uppercase tracking-wider block mb-2">Бележки (по желание)</label>
                    <textarea
                      rows={3}
                      value={selected.notes}
                      onChange={e => setSelected({...selected, notes: e.target.value})}
                      placeholder="Допълнителни пожелания..."
                      className="input-field resize-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <button onClick={() => setStep(2)} className="btn-secondary">← Назад</button>
                  <button onClick={() => setStep(4)} disabled={!canNext3} className="btn-primary disabled:opacity-40">Потвърди →</button>
                </div>
              </div>
            )}

            {/* STEP 4: Confirmation */}
            {step === 4 && (
              <div className="bg-white rounded-2xl p-10 border border-accent-pink/60 shadow-sm text-center">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="font-cormorant text-4xl font-semibold text-charcoal mb-3">Резервацията е изпратена!</h2>
                <p className="font-dm text-stone mb-8">Ще получите потвърждение на телефона си скоро.</p>
                <div className="bg-blush rounded-xl p-6 text-left mb-8 space-y-3">
                  <div className="flex justify-between font-dm text-sm">
                    <span className="text-stone">Услуга:</span>
                    <span className="text-charcoal font-medium">{selected.service}</span>
                  </div>
                  <div className="flex justify-between font-dm text-sm">
                    <span className="text-stone">Дата:</span>
                    <span className="text-charcoal font-medium">{selected.date}</span>
                  </div>
                  <div className="flex justify-between font-dm text-sm">
                    <span className="text-stone">Час:</span>
                    <span className="text-charcoal font-medium">{selected.time}</span>
                  </div>
                  <div className="flex justify-between font-dm text-sm">
                    <span className="text-stone">Клиент:</span>
                    <span className="text-charcoal font-medium">{selected.name}</span>
                  </div>
                </div>
                <Link to="/" className="btn-primary">Към началото</Link>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="space-y-6">
            <div className="sticky top-28 bg-white rounded-2xl border border-accent-pink/60 overflow-hidden shadow-sm">
              <div className="bg-rose/5 border-b border-accent-pink/50 px-6 py-4">
                <h3 className="font-cormorant text-xl font-semibold text-charcoal">Резюме</h3>
              </div>
              <div className="p-6 space-y-4 font-dm text-sm">
                {[
                  { label: 'Услуга', val: selected.service || '—' },
                  { label: 'Дата',   val: selected.date || '—' },
                  { label: 'Час',    val: selected.time || '—' },
                  { label: 'Клиент', val: selected.name || '—' },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between gap-2">
                    <span className="text-stone">{label}</span>
                    <span className="text-charcoal font-medium text-right max-w-[55%] break-words">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white rounded-2xl border border-accent-pink/60 p-6 shadow-sm font-dm text-sm space-y-3">
              <p className="font-semibold text-charcoal text-xs uppercase tracking-widest">Нужна ви е помощ?</p>
              <p className="text-stone flex items-center gap-2">
                <span className="text-rose">📞</span> +359 888 123 456
              </p>
              <p className="text-stone flex items-center gap-2">
                <span className="text-rose">📍</span> ул. „Цар Асен" 42, София
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
