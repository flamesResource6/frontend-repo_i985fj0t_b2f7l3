import { useEffect, useState } from 'react'

export default function News() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/news`)
        if (res.ok) {
          const data = await res.json()
          setPosts(data.items || [])
        }
      } catch (e) {
        // silent fail to keep UI nice
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  return (
    <section id="news" className="py-16 bg-rose-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Novinky z naší cukrárny</h2>
            <p className="text-slate-600 mt-1">Sezónní nabídky, vánoční a velikonoční speciály, aktuality.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-sm font-semibold text-pink-700">Kontaktovat →</a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div key={i} className="h-40 rounded-xl bg-white border border-slate-200 animate-pulse" />
            ))
          ) : posts.length ? (
            posts.map((p) => (
              <article key={p.id} className="rounded-xl bg-white border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{p.excerpt}</p>
                {p.date && <p className="mt-3 text-xs text-slate-500">{new Date(p.date).toLocaleDateString('cs-CZ')}</p>}
              </article>
            ))
          ) : (
            <div className="col-span-full text-slate-600">Aktuality zatím nejsou k dispozici.</div>
          )}
        </div>
      </div>
    </section>
  )
}
