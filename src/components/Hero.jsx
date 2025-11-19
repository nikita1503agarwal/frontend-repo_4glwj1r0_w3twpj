export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(600px_200px_at_0%_0%,#3b82f6,transparent),radial-gradient(600px_200px_at_100%_0%,#22d3ee,transparent)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Mountain House Real Estate, Reimagined
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Licensed realtor in 95391 specializing in investment properties, flips, new builds and renovations. We help you find opportunities and maximize returns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#listings" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500">View Listings</a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700 border border-white/10">Get a Consultation</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-white">$50M+</p>
                <p className="text-xs text-slate-400">Transaction Volume</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-white">100+</p>
                <p className="text-xs text-slate-400">Happy Clients</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-white">15 yrs</p>
                <p className="text-xs text-slate-400">Local Expertise</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxob21lfGVufDB8MHx8fDE3NjM1ODgyNTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Modern home" className="w-full h-[420px] object-cover" />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <p className="font-medium">Curated investment-ready properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
