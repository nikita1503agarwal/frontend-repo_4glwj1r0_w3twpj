import { Building2, Hammer, Home, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Buyer & Seller Representation",
    desc: "Full-service guidance from search to close with local 95391 expertise.",
  },
  {
    icon: BarChart3,
    title: "Investment Property Analysis",
    desc: "Deal sourcing, cashflow models, ARV comps and exit strategy planning.",
  },
  {
    icon: Hammer,
    title: "Flips & Renovations",
    desc: "Contractor network, budget planning and project management for value-add.",
  },
  {
    icon: Building2,
    title: "New Builds & Development",
    desc: "Land acquisition, build partners and permits to unlock potential.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">What We Do</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">High-ROI strategies for investors and homeowners in Mountain House and surrounding communities.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="bg-slate-800/50 border border-white/10 rounded-xl p-5 hover:border-blue-500/40 transition-colors">
              <s.icon className="text-blue-400" />
              <h3 className="text-white font-semibold mt-3">{s.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
