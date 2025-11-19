export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">Kontakt & Provozovna</h2>
            <p className="mt-2 text-slate-600">Syrovice 528, 664 67 (7 km jižně od Brna)</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-slate-200 bg-rose-50/50">
                <p className="text-sm text-slate-500">Telefon</p>
                <a href="tel:+420727911381" className="font-semibold text-slate-900">+420 727 911 381</a>
              </div>
              <div className="p-5 rounded-xl border border-slate-200 bg-rose-50/50">
                <p className="text-sm text-slate-500">E‑mail</p>
                <a href="mailto:info@cukrarnalucius.cz" className="font-semibold text-slate-900">info@cukrarnalucius.cz</a>
              </div>
              <div className="p-5 rounded-xl border border-slate-200 bg-rose-50/50">
                <p className="text-sm text-slate-500">Objednávky</p>
                <p className="text-slate-800">Běžné minimálně 2 dny předem, modelované/svatební 14 dní.</p>
              </div>
              <div className="p-5 rounded-xl border border-slate-200 bg-rose-50/50">
                <p className="text-sm text-slate-500">Otevírací doba</p>
                <p className="text-slate-800">Sezónně, sledujte Novinky.</p>
              </div>
            </div>
            <div className="mt-6 h-64 rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title="Mapa"
                width="100%"
                height="100%"
                loading="lazy"
                src="https://www.google.com/maps?q=Syrovice%20528%2C%20664%2067&output=embed"
              />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="p-6 rounded-2xl border border-slate-200 bg-rose-50/50">
              <h3 className="font-semibold text-slate-900">Zahrádka & Krb</h3>
              <p className="text-sm text-slate-700 mt-2">V létě posezení na zahrádce, v zimě u krbu.</p>
              <a href="https://eshop.cukrarnalucius.cz" target="_blank" rel="noreferrer" className="mt-4 inline-block px-5 py-3 rounded-md bg-pink-600 text-white font-semibold hover:bg-pink-700">Objednat dort</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
