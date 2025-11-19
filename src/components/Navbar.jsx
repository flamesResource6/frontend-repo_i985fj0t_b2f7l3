import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

const navItems = [
  { label: 'Domů', href: '#home' },
  { label: 'O nás', href: '#about' },
  { label: 'Dorty na míru', href: '#custom-cakes' },
  { label: 'Svatby', href: '#weddings' },
  { label: 'Cukrářské výrobky', href: '#pastries' },
  { label: 'Vinotéka', href: '#wine' },
  { label: 'Doprava & Velkoobchod', href: '#services' },
  { label: 'Novinky', href: '#news' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 shadow-inner" />
            <div className="leading-tight">
              <p className="font-extrabold text-slate-900">Cukrárna Lucius</p>
              <p className="text-xs text-slate-500">Syrovice, Czechia</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-pink-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="https://eshop.cukrarnalucius.cz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              <ShoppingBag size={18} /> E‑shop
            </a>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://eshop.cukrarnalucius.cz"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 rounded-md bg-pink-600 text-white text-center"
              >
                Otevřít E‑shop
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
