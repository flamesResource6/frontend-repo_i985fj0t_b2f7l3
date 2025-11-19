export default function Features() {
  const features = [
    {
      title: 'Poctivé suroviny',
      desc: 'Čerstvá vejce, pravé máslo, 70% čokoláda a živočišná šlehačka.',
    },
    {
      title: 'Tradiční postupy',
      desc: 'Navazujeme na klasické receptury a ruční zpracování.',
    },
    {
      title: 'Rychlá výroba',
      desc: 'Vlastní výroba nám umožňuje rychle reagovat na objednávky.',
    },
    {
      title: 'Dovoz chlazeným vozem',
      desc: 'Bezpečné doručení dortů a zákusků, zejména na svatby.',
    },
  ]

  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Kvalita a tradice</h2>
        <p className="mt-2 text-slate-600">Záleží nám na poctivé výrobě a chuti. Vyzkoušejte naše zákusky i moderní dezerty.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-slate-200 bg-gradient-to-b from-rose-50 to-white">
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
