export default function Highlights() {
  const items = [
    {
      title: 'Dort „Lucius”',
      desc: 'Čokoládový korpus, šlehačka s mascarpone a dotek likérových špiček s rumem.',
      link: 'https://eshop.cukrarnalucius.cz',
      img: 'https://images.unsplash.com/photo-1559622214-0a4cd5cc8e6e?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Dort „Pohádka”',
      desc: 'Kakaový korpus, pařížská čokoládová šlehačka (70% čokoláda), pusinky a filigrány.',
      link: 'https://eshop.cukrarnalucius.cz',
      img: 'https://images.unsplash.com/photo-1542826438-72f2d11f74b9?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Minidezerty a cheesecake',
      desc: 'Borůvka, limeta a další varianty. Ideální na oslavy a firemní akce.',
      link: 'https://eshop.cukrarnalucius.cz',
      img: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=1400&auto=format&fit=crop',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Ukázky dortů a zákusků</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <a key={i.title} href={i.link} target="_blank" rel="noreferrer" className="group block rounded-2xl overflow-hidden border border-slate-200">
              <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${i.img})` }} />
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 group-hover:text-pink-700 transition-colors">{i.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{i.desc}</p>
                <p className="mt-2 text-sm text-pink-700 font-medium">Objednat v e‑shopu →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
