import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import OfferSections from './components/OfferSections'
import Highlights from './components/Highlights'
import News from './components/News'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <OfferSections />
        <Highlights />
        <News />
        <Contact />
        <footer className="py-10 border-t border-slate-200 bg-rose-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Cukrárna Lucius • Syrovice</p>
            <div className="text-xs text-slate-500">Dorty od 3 dnů po objednání • Velkoobchodní dodávky Brno a okolí</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
