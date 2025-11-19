export default function Hero() {
  return (
    <section id="home" className="pt-24 bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Lucius Confectionery & Pastry Production
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Káva, zákusky a dorty z vlastní výroby v Syrovicích, s důrazem na tradiční receptury a špičkové suroviny: čerstvá vejce, pravé máslo, 70% čokoláda a smetana ke šlehání.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#custom-cakes" className="px-5 py-3 rounded-md bg-pink-600 text-white font-semibold hover:bg-pink-700">Dorty na zakázku</a>
              <a href="#weddings" className="px-5 py-3 rounded-md bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50">Svatby</a>
              <a href="https://eshop.cukrarnalucius.cz" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-md bg-slate-900 text-white font-semibold hover:bg-slate-800">Objednat online</a>
            </div>
            <p className="mt-4 text-sm text-slate-500">Čerstvě pečeme. Doručení nebo vyzvednutí od 3 dnů po objednání.</p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-rose-200 via-pink-100 to-amber-100 p-2">
              <div className="w-full h-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-xl p-4 border border-rose-200">
              <p className="text-sm font-semibold text-slate-700">Vlastní chlazená doprava</p>
              <p className="text-xs text-slate-500">Ideální pro svatební zakázky</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
