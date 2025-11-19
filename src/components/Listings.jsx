import { useEffect, useState } from "react"

export default function Listings() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/properties`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="listings" className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Listings</h2>
            <p className="text-slate-300 mt-2">Hand-picked opportunities ideal for flips, rentals or primary homes.</p>
          </div>
          <a href="#contact" className="hidden sm:inline px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500">List Your Property</a>
        </div>

        {loading ? (
          <p className="text-slate-400 mt-10">Loading properties...</p>
        ) : items.length === 0 ? (
          <p className="text-slate-400 mt-10">No listings yet. Reach out to add your property.</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <article key={p.id} className="bg-slate-800/50 border border-white/10 rounded-xl overflow-hidden">
                <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop'} alt={p.title} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-slate-400 text-sm">{p.city}, {p.state} {p.zip_code}</p>
                  <p className="text-white font-bold mt-2">${'{'}p.price.toLocaleString(){'}'}</p>
                  <p className="text-slate-400 text-sm mt-1">{p.beds} bd • {p.baths} ba • {p.sqft || '—'} sqft</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
