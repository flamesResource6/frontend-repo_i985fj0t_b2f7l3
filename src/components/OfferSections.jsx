export default function OfferSections() {
  return (
    <section className="py-16 bg-rose-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="custom-cakes" className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-slate-900">Dorty na zakázku</h2>
            <p className="mt-3 text-slate-700">Modelované, narozeninové, výroční a další slavnostní dorty. Pro svatební a speciální zakázky prosíme minimálně 14 dní předem.</p>
            <ul className="mt-4 text-slate-700 space-y-2 list-disc list-inside">
              <li>Individuální vzhled a chutě</li>
              <li>Konzultace a návrh</li>
              <li>Možnost chlazeného dovozu</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
        </div>

        <div id="weddings" className="grid lg:grid-cols-2 gap-10 items-center mt-16">
          <div>
            <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Svatební dorty a sladkosti</h2>
            <p className="mt-3 text-slate-700">Dorty, poděkování rodičům, výslužky, minidezerty a koláčky. Doprava vlastním chlazeným vozem.</p>
            <p className="mt-2 text-sm text-slate-500">Objednávky standardně alespoň 14 dní předem.</p>
          </div>
        </div>

        <div id="pastries" className="grid lg:grid-cols-2 gap-10 items-center mt-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-slate-900">Zákusky a dezerty</h2>
            <p className="mt-3 text-slate-700">Klasika i moderní dezerty: větrníky, věnečky, likérové špičky, cheesecake (borůvkový, limetkový aj.), tiramisu, mrkvový dort, minidezerty…</p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
        </div>

        <div id="wine" className="grid lg:grid-cols-2 gap-10 items-center mt-16">
          <div>
            <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Vinotéka</h2>
            <p className="mt-3 text-slate-700">7 druhů sudových i lahvových vín od vybraných vinařů.</p>
          </div>
        </div>

        <div id="services" className="grid lg:grid-cols-2 gap-10 items-center mt-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-slate-900">Doprava & Velkoobchod</h2>
            <p className="mt-3 text-slate-700">Rozvoz chlazeným vozem a dodávky pro kavárny, cukrárny a restaurace v Brně a okolí.</p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
