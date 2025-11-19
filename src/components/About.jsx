export default function About() {
  return (
    <section id="about" className="py-16 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Team Jafri</h2>
        <p className="text-slate-300 mt-4">We're a results-driven real estate team based in Mountain House (95391). With deep local knowledge and a passion for building and transforming homes, we specialize in investment analysis, flips, and new construction. Whether you're buying your first property, scaling a portfolio, or evaluating a ground-up build, we bring the strategy and partners to execute.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5">
            <p className="text-4xl font-extrabold text-white">Local</p>
            <p className="text-slate-400">Focused on Mountain House & nearby markets for sharper comps and trends.</p>
          </div>
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5">
            <p className="text-4xl font-extrabold text-white">Investor-first</p>
            <p className="text-slate-400">Clear models, ARVs and cap rates so you can move quickly with confidence.</p>
          </div>
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5">
            <p className="text-4xl font-extrabold text-white">Builder network</p>
            <p className="text-slate-400">Trusted contractors and developers for renovations and new builds.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
